const pptxgen = require("pptxgenjs");
// MEP Skill Kit v1.0 · by Dimitar Bidzhekov
// Builds the kit presentation: `npm install pptxgenjs && node build-deck.js`
// Optional: set APPLY_THEME to the path of an apply_theme.js helper to write the theme colours into the deck.
const applyTheme = process.env.APPLY_THEME ? require(process.env.APPLY_THEME).applyTheme : null;
const THEME = { name: "MEP Bulgaria", headFontFace: "Cambria", bodyFontFace: "Calibri",
  colors: { dk1: "14213D", lt1: "FFFFFF", dk2: "2B3A5C", lt2: "EEF2F8", accent1: "C8961A", accent2: "00966E", accent3: "D62612", accent4: "3D5A99", accent5: "8A93A6", accent6: "F4E3B5", hlink: "3D5A99", folHlink: "6B4FA0" } };
const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; pres.title = "MEP Skill Kit v1.0"; pres.author = "Dimitar Bidzhekov";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
const C = pres.SchemeColor;
const FOOT = "MEP Skill Kit v1.0 · by Dimitar Bidzhekov · Delegation of Bulgaria · 64th iMEP Porto";
pres.defineSlideMaster({ title: "DARK", background: { color: "14213D" }, objects: [
  { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 1.5, w: 8.8, h: 1.5, fontSize: 40, bold: true, color: C.background1, valign: "bottom", align: "left" }, text: "" } },
  { placeholder: { options: { name: "body", type: "body", x: 0.6, y: 3.1, w: 8.8, h: 1.2, fontSize: 18, color: C.accent6, valign: "top" }, text: "" } } ] });
pres.defineSlideMaster({ title: "CONTENT", background: { color: "FFFFFF" }, margin: [0.5, 0.5, 0.5, 0.5], objects: [
  { placeholder: { options: { name: "title", type: "title", x: 0.5, y: 0.3, w: 9, h: 0.75, fontSize: 30, bold: true, color: C.text1, valign: "middle", align: "left", margin: 0 }, text: "" } },
  { text: { text: FOOT, options: { x: 0.5, y: 5.2, w: 7, h: 0.3, fontSize: 10, color: C.accent5, margin: 0 } } } ],
  slideNumber: { x: 9.0, y: 5.2, w: 0.5, h: 0.3, fontSize: 10, color: "8A93A6", align: "right" } });

const circle = (s, n, x, y, d, fill, color) => { s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } });
  s.addText(String(n), { x, y, w: d, h: d, align: "center", valign: "middle", fontSize: d > 0.5 ? 18 : 13, bold: true, color, fontFace: "Cambria", margin: 0, isTextBox: true }); };
const card = (s, x, y, w, h, fill) => s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: fill || C.background2 }, line: { color: fill || C.background2 } });

// 1 Title
pres.addSection({ title: "Introduction" });
let s = pres.addSlide({ masterName: "DARK", sectionTitle: "Introduction" });
s.addText("MEP Skill Kit v1.0", { placeholder: "title" });
s.addText("12 Claude skills for any committee topic\nDelegation of Bulgaria · 64th iMEP Porto · 19–26 November 2026", { placeholder: "body" });
s.addText("by Dimitar Bidzhekov · 17 November 2026", { x: 0.6, y: 4.7, w: 8.8, h: 0.4, fontSize: 12, color: C.accent5, margin: 0, isTextBox: true });
s.addNotes("Welcome. This kit gives Claude twelve MEP-specific abilities so our delegation is the best prepared in Porto.");

// 2 Why
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Introduction" });
s.addText("An edge from the first hour to the final vote", { placeholder: "title" });
const stats = [["12", "skills, each for one MEP job"], ["Any", "committee topic, from AI to migration"], ["8", "days covered, from topic to debrief"]];
stats.forEach(([n, l], i) => { const x = 0.5 + i * 3.05; card(s, x, 1.35, 2.85, 2.2);
  s.addText(n, { x: x + 0.2, y: 1.5, w: 2.45, h: 1.1, fontSize: 60, bold: true, color: C.accent1, fontFace: "Cambria", margin: 0, isTextBox: true });
  s.addText(l, { x: x + 0.2, y: 2.6, w: 2.45, h: 0.8, fontSize: 16, color: C.text1, margin: 0, valign: "top", isTextBox: true }); });
s.addText("Just ask Claude naturally, for example \"We got our topic, prepare me fast\", and it uses the right skill on its own.", { x: 0.5, y: 3.85, w: 9, h: 0.8, fontSize: 16, italic: true, color: C.text2, margin: 0, isTextBox: true });

// 3 Install
pres.addSection({ title: "Getting started" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Getting started" });
s.addText("Install in five minutes", { placeholder: "title" });
const steps = [["Open Claude", "Go to claude.ai on a computer and sign in"], ["Turn on one setting", "Settings → Capabilities → \"Code execution and file creation\" on"],
 ["Download the 12 files", "From the \"Install files\" folder in this Drive. Don't unzip them"], ["Upload each file", "Customize → Skills → + → Create skill → Upload a skill"], ["Check, then search on", "All 12 skills switched on; web search on in every chat"]];
steps.forEach(([h, d], i) => { const y = 1.2 + i * 0.78; circle(s, i + 1, 0.5, y, 0.55, C.accent1, C.text1);
  s.addText(h, { x: 1.25, y: y - 0.04, w: 7.8, h: 0.32, fontSize: 17, bold: true, color: C.text1, margin: 0, isTextBox: true });
  s.addText(d, { x: 1.25, y: y + 0.28, w: 7.8, h: 0.3, fontSize: 14, color: C.text2, margin: 0, isTextBox: true }); });

// 4 Overview grid
pres.addSection({ title: "The 12 skills" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "The 12 skills" });
s.addText("The 12 skills at a glance", { placeholder: "title" });
const sk = [["Topic Briefing", "Any topic → study pack"], ["Bulgaria Position", "Our stance, allies, asks"], ["Resolution", "Clause ideas → correct text"], ["Red Team", "Score /40, find weak spots"],
 ["Amendments", "Write, defend, respond"], ["Speeches", "Timed to the second"], ["Sparring", "Practise vs 8 personas"], ["Live Copilot", "Answers in seconds"],
 ["Fact-Check", "Verdict on every claim"], ["Lobbying", "Compromises, vote counts"], ["Session Tracker", "Every vote recorded"], ["Debrief", "Lessons, report, handover"]];
sk.forEach(([n, d], i) => { const col = i % 4, row = Math.floor(i / 4); const x = 0.5 + col * 2.28, y = 1.2 + row * 1.3; card(s, x, y, 2.12, 1.15);
  circle(s, i + 1, x + 0.12, y + 0.14, 0.42, C.text1, C.background1);
  s.addText(n, { x: x + 0.62, y: y + 0.12, w: 1.42, h: 0.46, fontSize: 14, bold: true, color: C.text1, margin: 0, valign: "middle", isTextBox: true });
  s.addText(d, { x: x + 0.15, y: y + 0.66, w: 1.9, h: 0.4, fontSize: 12, color: C.text2, margin: 0, isTextBox: true }); });

// 5-8 phase slides
const phase = (title, items, tint) => { const sl = pres.addSlide({ masterName: "CONTENT", sectionTitle: "The 12 skills" }); sl.addText(title, { placeholder: "title" });
  const n = items.length, w = (9 - 0.25 * (n - 1)) / n;
  items.forEach(([num, name, what, when, model], i) => { const x = 0.5 + i * (w + 0.25); card(sl, x, 1.2, w, 3.8, C.background2);
    circle(sl, num, x + 0.15, 1.38, 0.5, tint, C.background1);
    sl.addText(name, { x: x + 0.75, y: 1.33, w: w - 0.85, h: 0.6, fontSize: n > 3 ? 14 : 17, bold: true, color: C.text1, margin: 0, valign: "middle", isTextBox: true });
    sl.addText(what, { x: x + 0.2, y: 2.1, w: w - 0.4, h: 1.5, fontSize: 13.5, color: C.text1, margin: 0, valign: "top", isTextBox: true });
    sl.addText([{ text: "When: ", options: { bold: true } }, { text: when }], { x: x + 0.2, y: 3.65, w: w - 0.4, h: 0.6, fontSize: 12.5, color: C.text2, margin: 0, valign: "top", isTextBox: true });
    sl.addText([{ text: "Model: ", options: { bold: true } }, { text: model }], { x: x + 0.2, y: 4.3, w: w - 0.4, h: 0.55, fontSize: 12.5, color: C.text2, margin: 0, valign: "top", isTextBox: true }); });
  return sl; };
phase("Prepare: topic, stance and clauses", [
 [1, "Topic Briefing", "Study pack for any topic: EU powers, existing laws, dated stats, divides, Bulgaria's angle, 10 fight questions.", "The minute the topic arrives", "Opus 5.5"],
 [2, "Bulgaria Position", "Position paper with honest labels, 3 asks, red lines, allies, hard questions, head-of-delegation intro.", "Right after the briefing", "Opus 5.5"],
 [3, "Resolution", "Clause ideas before the session; correct MEP format and a defence table in committee.", "Prep, then committee days", "Opus 5.5 + extended thinking"]], "00966E");
phase("Sharpen: bulletproof clauses and claims", [
 [4, "Red Team", "Scores a resolution out of 40, ranks weaknesses, predicts the speech against. Attack mode for other committees.", "After every draft; lobbying", "Fable 5.2 or Opus 5.5"],
 [9, "Fact-Check", "Verdict on every number, law and quote, with the correct version, source and safe wording.", "Before speaking; when others quote numbers", "Opus 5.5 + web search"],
 [10, "Lobbying", "Interest maps, compromise wording, merged clauses, vote counts, pitches.", "Deadlocks; before votes", "Opus 5.5"]], "3D5A99");
phase("Perform: speak and answer under pressure", [
 [5, "Amendments", "Correct format, defence speech, 2-minute committee response, fast mode.", "Lobbying and the GA", "Sonnet 5.5"],
 [6, "Speeches", "Every MEP speech, timed, with pause marks and backup lines.", "Before each slot", "Sonnet 5.5, Opus to polish"],
 [7, "Sparring", "8 tough personas, one question at a time, each answer scored /10.", "Every evening", "Sonnet 5.5 + voice mode"],
 [8, "Live Copilot", "≤45-word answer, a fact, a counter-question or the right move.", "During the session", "Haiku 5.5 on phone"]], "D62612");
phase("Record and learn: build a legacy", [
 [11, "Session Tracker", "Quick notes like \"AFET passed 98-41-12, we voted for\" become a clean record with statistics: what passed, by how much, who votes with Bulgaria.", "Throughout the session", "Sonnet 5.5"],
 [12, "Debrief", "Evening check-ins, the final report, a handover for the next Bulgarian delegation, honest posts, and feedback that improves the kit.", "Every evening and after 26 Nov", "Sonnet 5.5"]], "C8961A");

// 9 Models
pres.addSection({ title: "How to use it" });
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "How to use it" });
s.addText("Which model to pick", { placeholder: "title" });
const models = [["Opus 5.5", "The careful expert", "Research, resolutions, strategy, fact-checking", "14213D", "FFFFFF"], ["Sonnet 5.5", "The fast all-rounder", "Speeches, practice, amendments, everyday use", "3D5A99", "FFFFFF"],
 ["Haiku 5.5", "The sprinter", "Quick answers on your phone during the session", "F4E3B5", "14213D"], ["Fable 5.2", "The top expert", "Hardest check of the final resolution, if your plan has it", "C8961A", "14213D"]];
models.forEach(([m, nick, use, fill, col], i) => { const x = 0.5 + i * 2.3; s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.25, w: 2.1, h: 3.3, rectRadius: 0.08, fill: { color: fill }, line: { color: fill } });
  s.addText(m, { x: x + 0.15, y: 1.4, w: 1.8, h: 0.55, fontSize: 21, bold: true, fontFace: "Cambria", color: col, margin: 0, isTextBox: true });
  s.addText(nick, { x: x + 0.15, y: 1.95, w: 1.8, h: 0.4, fontSize: 14, italic: true, color: col, margin: 0, isTextBox: true });
  s.addText(use, { x: x + 0.15, y: 2.5, w: 1.8, h: 1.8, fontSize: 14, color: col, margin: 0, valign: "top", isTextBox: true }); });
s.addText("Tip: switch on extended thinking for drafting and red-teaming. Choose the model at the top of each chat.", { x: 0.5, y: 4.7, w: 9, h: 0.4, fontSize: 13, italic: true, color: C.text2, margin: 0, isTextBox: true });

// 10 Game plan
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "How to use it" });
s.addText("The eight-day game plan", { placeholder: "title" });
const plan = [["Before 19 Nov", "Install, set up a Project, rehearse the intro", "2 · 6 · 7"], ["Topic arrives", "Crash pack, full pack, our stance, clause ideas", "1 · 2 · 3"], ["Committee days", "Draft, stress-test, fact-check, negotiate", "3 · 4 · 9 · 10"],
 ["Lobbying", "Attack other resolutions, amendments, vote counts", "4 · 5 · 10"], ["Each evening", "Drill hardest questions, 5-minute check-in", "7 · 12"], ["General Assembly", "Live answers, responses, closing slots, logging", "8 · 5 · 6 · 11"], ["After 26 Nov", "Stats, report, handover, posts", "11 · 12"]];
s.addShape(pres.shapes.LINE, { x: 0.78, y: 1.25, w: 0, h: 3.75, line: { color: "C8961A", width: 2 } });
plan.forEach(([when, what, skills], i) => { const y = 1.15 + i * 0.55; s.addShape(pres.shapes.OVAL, { x: 0.68, y: y + 0.1, w: 0.2, h: 0.2, fill: { color: C.accent1 }, line: { color: C.accent1 } });
  s.addText(when, { x: 1.1, y, w: 2.2, h: 0.42, fontSize: 15, bold: true, color: C.text1, margin: 0, valign: "middle", isTextBox: true });
  s.addText(what, { x: 3.3, y, w: 4.6, h: 0.42, fontSize: 14, color: C.text1, margin: 0, valign: "middle", isTextBox: true });
  s.addText("Skills " + skills, { x: 7.9, y, w: 1.6, h: 0.42, fontSize: 12, color: C.text2, margin: 0, valign: "middle", align: "right", isTextBox: true }); });

// 11 Example requests
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "How to use it" });
s.addText("Just ask: six requests to copy", { placeholder: "title" });
const asks = ["We got our topic: [paste it]. Crash mode first, please.", "What is Bulgaria's position? Who are our allies and what will they attack?", "Here are our committee's notes. Turn them into a proper MEP resolution.",
 "Red-team our resolution like the toughest delegate in the room.", "Grill me on our resolution, difficulty 3. One question at a time.", "Quick: France says our plan has no legal basis. What do I answer?"];
asks.forEach((a, i) => { const col = i % 2, row = Math.floor(i / 2); const x = 0.5 + col * 4.6, y = 1.2 + row * 1.25; card(s, x, y, 4.4, 1.08);
  s.addText("“", { x: x + 0.12, y: y + 0.02, w: 0.45, h: 0.6, fontSize: 40, fontFace: "Cambria", color: C.accent1, margin: 0, isTextBox: true });
  s.addText(a, { x: x + 0.6, y: y + 0.12, w: 3.65, h: 0.84, fontSize: 14, italic: true, color: C.text1, margin: 0, valign: "middle", isTextBox: true }); });

// 12 Rules
s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "How to use it" });
s.addText("Rules that make you look better, not worse", { placeholder: "title" });
const rules = [["Session rules win", "No pre-written resolutions allowed? The kit gives ideas instead."], ["Own every word", "Read the reasoning, so what you say is truly yours."], ["Date and source every number", "Run the fact-check before you speak."],
 ["Respect device rules", "Phones not allowed in plenary? Use the kit in breaks."], ["Respect privacy", "No names or photos of other students without permission."], ["Official wording on sensitive issues", "Russia and Ukraine, North Macedonia, the euro: see document 02."]];
rules.forEach(([h, d], i) => { const col = i % 3, row = Math.floor(i / 3); const x = 0.5 + col * 3.05, y = 1.2 + row * 1.85; card(s, x, y, 2.85, 1.65);
  circle(s, "✓", x + 0.15, y + 0.15, 0.42, C.accent2, C.background1);
  s.addText(h, { x: x + 0.65, y: y + 0.12, w: 2.1, h: 0.5, fontSize: 14, bold: true, color: C.text1, margin: 0, valign: "middle", isTextBox: true });
  s.addText(d, { x: x + 0.15, y: y + 0.72, w: 2.55, h: 0.85, fontSize: 13, color: C.text2, margin: 0, valign: "top", isTextBox: true }); });

// 13 Close
pres.addSection({ title: "Close" });
s = pres.addSlide({ masterName: "DARK", sectionTitle: "Close" });
s.addText("Represent Bulgaria with confidence, facts and style", { placeholder: "title" });
s.addText("Start with document 00 · Start Here in the shared Drive folder.\nMEP Skill Kit v1.0 · by Dimitar Bidzhekov", { placeholder: "body" });

(async () => { const out = "MEP-Skill-Kit-v1.0.pptx"; await pres.writeFile({ fileName: out }); if (applyTheme) await applyTheme(out, THEME); console.log("ok"); })();
