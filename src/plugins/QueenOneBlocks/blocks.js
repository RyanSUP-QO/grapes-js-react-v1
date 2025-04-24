export default function (editor) {
  editor.Blocks.add("Container", {
    label: "Container",
    content: [{ type: "Container" }],
  });

  editor.Blocks.add("Overlay", {
    label: "Overlay",
    content: [{ type: "Overlay" }],
  });

  editor.Blocks.add("Dialog Frame", {
    label: "Dialog Frame",
    content: [{ type: "Dialog Frame" }],
  });

  editor.Blocks.add("Floating Close Button", {
    label: "Floating Close Button",
    content: [{ type: "Floating Close Button" }],
  });

  editor.Blocks.add("Div", {
    label: "Div",
    content: `<div></div>`,
  });

  editor.Blocks.add("Text", {
    label: "Text",
    content: `<p>Share your thoughts</p>`,
  });

  editor.Blocks.add("Primary Content", {
    label: "Primary Content Form",
    content: [{ type: "Primary Content" }],
  });
}
