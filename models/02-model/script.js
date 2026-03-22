// ═══════════════════════════════════════════════════════
//  InlineWind — Core Engine
// ═══════════════════════════════════════════════════════

const styleMap = {
  // ── Padding ──────────────────────────────────────────
  "p-1": { padding: "4px" },
  "p-2": { padding: "8px" },
  "p-3": { padding: "12px" },
  "p-4": { padding: "16px" },
  "p-6": { padding: "24px" },
  "p-8": { padding: "32px" },
  "px-2": { paddingLeft: "8px", paddingRight: "8px" },
  "px-4": { paddingLeft: "16px", paddingRight: "16px" },
  "px-6": { paddingLeft: "24px", paddingRight: "24px" },
  "py-1": { paddingTop: "4px", paddingBottom: "4px" },
  "py-2": { paddingTop: "8px", paddingBottom: "8px" },
  "py-4": { paddingTop: "16px", paddingBottom: "16px" },

  // ── Margin ────────────────────────────────────────────
  "m-2": { margin: "8px" },
  "m-4": { margin: "16px" },
  "mt-2": { marginTop: "8px" },
  "mt-4": { marginTop: "16px" },
  "mb-2": { marginBottom: "8px" },
  "mb-4": { marginBottom: "16px" },
  "ml-2": { marginLeft: "8px" },
  "mr-2": { marginRight: "8px" },
  "mx-auto": { marginLeft: "auto", marginRight: "auto" },

  // ── Typography ────────────────────────────────────────
  "text-xs": { fontSize: "12px" },
  "text-sm": { fontSize: "14px" },
  "text-base": { fontSize: "16px" },
  "text-lg": { fontSize: "20px" },
  "text-xl": { fontSize: "24px" },
  "text-2xl": { fontSize: "30px" },
  "text-3xl": { fontSize: "36px" },
  bold: { fontWeight: "700" },
  "font-normal": { fontWeight: "400" },
  italic: { fontStyle: "italic" },
  underline: { textDecoration: "underline" },
  "line-through": { textDecoration: "line-through" },
  uppercase: { textTransform: "uppercase" },
  lowercase: { textTransform: "lowercase" },
  capitalize: { textTransform: "capitalize" },
  "text-center": { textAlign: "center" },
  "text-right": { textAlign: "right" },
  "text-left": { textAlign: "left" },
  "tracking-wide": { letterSpacing: "0.05em" },
  "tracking-wider": { letterSpacing: "0.1em" },
  "leading-tight": { lineHeight: "1.25" },
  "leading-normal": { lineHeight: "1.5" },
  "leading-loose": { lineHeight: "2" },

  // ── Background Colors ─────────────────────────────────
  "bg-blue": { backgroundColor: "#3b82f6" },
  "bg-blue-light": { backgroundColor: "#93c5fd" },
  "bg-red": { backgroundColor: "#ef4444" },
  "bg-green": { backgroundColor: "#22c55e" },
  "bg-yellow": { backgroundColor: "#eab308" },
  "bg-orange": { backgroundColor: "#f97316" },
  "bg-purple": { backgroundColor: "#8b5cf6" },
  "bg-pink": { backgroundColor: "#ec4899" },
  "bg-teal": { backgroundColor: "#14b8a6" },
  "bg-gray": { backgroundColor: "#6b7280" },
  "bg-gray-light": { backgroundColor: "#f3f4f6" },
  "bg-white": { backgroundColor: "#ffffff" },
  "bg-black": { backgroundColor: "#111111" },
  "bg-transparent": { backgroundColor: "transparent" },

  // ── Text Colors ───────────────────────────────────────
  "text-white": { color: "#ffffff" },
  "text-black": { color: "#111111" },
  "text-blue": { color: "#3b82f6" },
  "text-red": { color: "#ef4444" },
  "text-green": { color: "#22c55e" },
  "text-yellow": { color: "#eab308" },
  "text-orange": { color: "#f97316" },
  "text-purple": { color: "#8b5cf6" },
  "text-pink": { color: "#ec4899" },
  "text-teal": { color: "#14b8a6" },
  "text-gray": { color: "#6b7280" },

  // ── Borders ───────────────────────────────────────────
  border: { border: "1px solid #d1d5db" },
  "border-2": { border: "2px solid #d1d5db" },
  "border-4": { border: "4px solid #d1d5db" },
  "border-blue": { borderColor: "#3b82f6" },
  "border-red": { borderColor: "#ef4444" },
  "border-green": { borderColor: "#22c55e" },
  "border-gray": { borderColor: "#d1d5db" },
  "border-none": { border: "none" },
  "border-dashed": { borderStyle: "dashed" },
  rounded: { borderRadius: "6px" },
  "rounded-sm": { borderRadius: "3px" },
  "rounded-md": { borderRadius: "8px" },
  "rounded-lg": { borderRadius: "12px" },
  "rounded-xl": { borderRadius: "16px" },
  "rounded-full": { borderRadius: "9999px" },

  // ── Layout & Flexbox ──────────────────────────────────
  flex: { display: "flex" },
  "inline-flex": { display: "inline-flex" },
  inline: { display: "inline" },
  "inline-block": { display: "inline-block" },
  block: { display: "block" },
  hidden: { display: "none" },
  "flex-col": { flexDirection: "column" },
  "flex-row": { flexDirection: "row" },
  "flex-wrap": { flexWrap: "wrap" },
  "flex-1": { flex: "1" },
  "items-center": { alignItems: "center" },
  "items-start": { alignItems: "flex-start" },
  "items-end": { alignItems: "flex-end" },
  "justify-center": { justifyContent: "center" },
  "justify-between": { justifyContent: "space-between" },
  "justify-end": { justifyContent: "flex-end" },
  "justify-start": { justifyContent: "flex-start" },
  "gap-1": { gap: "4px" },
  "gap-2": { gap: "8px" },
  "gap-4": { gap: "16px" },
  "gap-6": { gap: "24px" },

  // ── Sizing ────────────────────────────────────────────
  "w-full": { width: "100%" },
  "w-half": { width: "50%" },
  "w-auto": { width: "auto" },
  "h-full": { height: "100%" },
  "h-auto": { height: "auto" },
  "min-w-0": { minWidth: "0" },
  "max-w-xs": { maxWidth: "320px" },
  "max-w-md": { maxWidth: "480px" },
  "max-w-lg": { maxWidth: "640px" },

  // ── Effects ───────────────────────────────────────────
  shadow: { boxShadow: "0 2px 8px rgba(0,0,0,0.15)" },
  "shadow-md": { boxShadow: "0 4px 16px rgba(0,0,0,0.2)" },
  "shadow-lg": { boxShadow: "0 8px 32px rgba(0,0,0,0.25)" },
  "shadow-none": { boxShadow: "none" },
  "opacity-0": { opacity: "0" },
  "opacity-50": { opacity: "0.5" },
  "opacity-75": { opacity: "0.75" },
  "opacity-100": { opacity: "1" },

  // ── Misc ──────────────────────────────────────────────
  "cursor-pointer": { cursor: "pointer" },
  "cursor-default": { cursor: "default" },
  "overflow-hidden": { overflow: "hidden" },
  "overflow-auto": { overflow: "auto" },
  "pointer-events-none": { pointerEvents: "none" },
  "select-none": { userSelect: "none" },
  transition: { transition: "all 0.2s ease" },
  "transition-fast": { transition: "all 0.1s ease" },
  relative: { position: "relative" },
  absolute: { position: "absolute" },
  fixed: { position: "fixed" },
  "z-10": { zIndex: "10" },
  "z-50": { zIndex: "50" },
};

// ─── Core Function ──────────────────────────────────────
/**
 * Parse a class string and return a merged inline style object.
 * @param {string} classStr  e.g. "bg-blue text-white p-4 rounded"
 * @returns {Object}         merged CSS properties object
 */
function applyInlineStyles(classStr) {
  const styles = {};
  classStr
    .trim()
    .split(/\s+/)
    .forEach((cls) => {
      if (styleMap[cls]) Object.assign(styles, styleMap[cls]);
    });
  return styles;
}

/**
 * Apply inline styles to a DOM element directly.
 * @param {HTMLElement} el
 * @param {string} classStr
 * @returns {HTMLElement}
 */
function styleElement(el, classStr) {
  const styles = applyInlineStyles(classStr);
  Object.assign(el.style, styles);
  return el;
}

/**
 * Create an element with inline styles applied.
 * @param {string} tag         HTML tag name
 * @param {string} classStr    class string
 * @param {string} [innerHTML] optional inner content
 * @returns {HTMLElement}
 */
function createElement(tag, classStr, innerHTML = "") {
  const el = document.createElement(tag);
  if (innerHTML) el.innerHTML = innerHTML;
  return styleElement(el, classStr);
}

// ═══════════════════════════════════════════════════════
//  Demo UI wiring
// ═══════════════════════════════════════════════════════

const input = document.getElementById("classInput");
const preview = document.getElementById("preview-el");
const tagsEl = document.getElementById("applied-tags");
const gridEl = document.getElementById("class-grid");
const demoRow = document.getElementById("demo-row");

function update() {
  const val = input.value;
  const styles = applyInlineStyles(val);
  preview.removeAttribute("style");
  Object.assign(preview.style, styles);

  const classes = val.trim().split(/\s+/).filter(Boolean);
  tagsEl.innerHTML = classes
    .map((c) =>
      styleMap[c]
        ? `<span class="tag ok">✓ ${c}<span class="del-btn" onclick="removeClass('${c}')" title="Remove ${c}">✕</span></span>`
        : `<span class="tag err">✗ ${c}<span class="del-btn" onclick="removeClass('${c}')" title="Remove ${c}">✕</span></span>`,
    )
    .join("");
}

function removeClass(cls) {
  const cur = input.value
    .trim()
    .split(/\s+/)
    .filter((c) => c && c !== cls);
  input.value = cur.join(" ");
  update();
}

function clearAll() {
  input.value = "";
  update();
}

// Populate class buttons
Object.keys(styleMap).forEach((cls) => {
  const btn = document.createElement("button");
  btn.className = "cls-btn";
  btn.textContent = cls;
  btn.onclick = () => {
    const cur = input.value.trim().split(/\s+/).filter(Boolean);
    if (!cur.includes(cls)) {
      input.value = [...cur, cls].join(" ");
      update();
    }
  };
  gridEl.appendChild(btn);
});

// Quick demos
const demos = [
  {
    label: "Button",
    tag: "button",
    cls: "bg-blue text-white px-4 py-2 rounded-md bold cursor-pointer shadow",
    text: "Click me",
  },
  {
    label: "Badge",
    tag: "span",
    cls: "bg-green text-white text-xs px-2 py-1 rounded-full bold uppercase tracking-wide",
    text: "Active",
  },
  {
    label: "Alert",
    tag: "div",
    cls: "bg-yellow text-black p-4 rounded-lg border border-gray shadow",
    text: "⚠ Warning message",
  },
  {
    label: "Pill",
    tag: "span",
    cls: "border border-blue text-blue text-sm px-4 py-1 rounded-full",
    text: "Tag",
  },
  {
    label: "Heading",
    tag: "h2",
    cls: "text-2xl bold text-purple uppercase tracking-wider",
    text: "Hello World",
  },
  {
    label: "Card",
    tag: "div",
    cls: "bg-white text-black p-6 rounded-xl shadow-lg max-w-xs",
    text: "A simple card element",
  },
];

demos.forEach(({ label, tag, cls, text }) => {
  const wrap = document.createElement("div");
  wrap.className = "demo-item";
  const lbl = document.createElement("div");
  lbl.className = "demo-label";
  lbl.textContent = label;
  const el = createElement(tag, cls, text);
  wrap.appendChild(lbl);
  wrap.appendChild(el);
  demoRow.appendChild(wrap);
});

// Source display
const rawSource = `// ─── InlineWind — inline style engine ───────────────

const styleMap = {
  'p-4':        { padding: '16px' },
  'px-4':       { paddingLeft: '16px', paddingRight: '16px' },
  'py-2':       { paddingTop: '8px',   paddingBottom: '8px' },
  'text-lg':    { fontSize: '20px' },
  'bold':       { fontWeight: '700' },
  'bg-blue':    { backgroundColor: '#3b82f6' },
  'text-white': { color: '#ffffff' },
  'rounded':    { borderRadius: '6px' },
  'shadow':     { boxShadow: '0 2px 8px rgba(0,0,0,0.15)' },
  'flex':       { display: 'flex' },
  'items-center': { alignItems: 'center' },
  // ...add as many as you want
};

// Parse classes → merged style object
function applyInlineStyles(classStr) {
  const styles = {};
  classStr.trim().split(/\\s+/).forEach(cls => {
    if (styleMap[cls]) Object.assign(styles, styleMap[cls]);
  });
  return styles;
}

// Apply to any DOM element
function styleElement(el, classStr) {
  Object.assign(el.style, applyInlineStyles(classStr));
  return el;
}

// Create + style a new element
function createElement(tag, classStr, innerHTML = '') {
  const el = document.createElement(tag);
  if (innerHTML) el.innerHTML = innerHTML;
  return styleElement(el, classStr);
}

// ─── Usage ────────────────────────────────────────────

// 1. Style an existing element
const btn = document.getElementById('my-btn');
styleElement(btn, 'bg-blue text-white p-4 rounded bold shadow');

// 2. Create a new styled element
const badge = createElement('span', 'bg-green text-white text-xs px-2 py-1 rounded-full', 'Active');
document.body.appendChild(badge);

// 3. Get just the style object (e.g. for React)
const styles = applyInlineStyles('bg-purple text-white p-4 rounded-lg');
// → { backgroundColor: '#8b5cf6', color: '#fff', padding: '16px', borderRadius: '12px' }`;

document.getElementById("source-pre").textContent = rawSource;

// Copy source
function copySource() {
  const fullSource = document
    .querySelector("script")
    .textContent.split("// ═══ Demo UI")[0]
    .trim();
  navigator.clipboard.writeText(rawSource).then(() => {
    const btn = document.querySelector(".copy-btn");
    btn.textContent = "copied!";
    setTimeout(() => (btn.textContent = "copy"), 1500);
  });
}

input.addEventListener("input", update);
update();
