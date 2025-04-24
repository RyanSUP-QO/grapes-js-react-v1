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
}
