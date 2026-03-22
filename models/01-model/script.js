const styleMap = {
  "bg-blue": { backgroundColor: "#3b82f6" },
  "bg-pink": { backgroundColor: "#ff00b3" },
  "bg-green": { backgroundColor: "#22c55e" },
  "text-white": { color: "#ffffff" },
  "text-black": { color: "#000000" },
  "p-2": { padding: "8px" },
  "p-4": { padding: "16px" },
  rounded: { borderRadius: "6px" },
  bold: { fontWeight: "700" },
  "text-lg": { fontSize: "20px" },
};

function applyStyles(element, classes) {
  classes.split(" ").forEach((cls) => {
    if (styleMap[cls]) {
      Object.assign(element.style, styleMap[cls]);
    }
  });
}

const btn = document.getElementById("myBtn");
applyStyles(btn, "bg-blue text-white p-4 rounded bold text-lg");

const text = document.getElementById("myText");
applyStyles(text, "bg-pink text-white p-2 rounded text-lg"); 
