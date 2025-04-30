export default function (editor) {
  editor.Panels.addButton("options", {
    id: "save-template",
    className: "fa fa-save",
    command: "save-template",
    attributes: { title: "Save Template" },
  });
}
