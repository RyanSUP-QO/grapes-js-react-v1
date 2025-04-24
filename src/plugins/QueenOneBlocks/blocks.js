export default function (editor) {
  editor.Blocks.add("Container", {
    label: "Container",
    content: [{ type: "Container" }],
  });

  editor.Blocks.add("Overlay", {
    label: "Overlay",
    content: [{ type: "Overlay" }],
  });
}
