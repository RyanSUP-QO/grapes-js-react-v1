import { form } from "./mikesDemoForm";

const removeAriaHidden = (editor) => {
  const target = editor.getWrapper().find(".container")[0];
  if (target) {
    target.removeAttributes("aria-hidden");
  }
};

const lockDragAndDropOnKeyElements = (editor) => {
  const wrapper = editor.getWrapper();
  if (wrapper) {
    wrapper.set("draggable", false);
    wrapper.set("droppable", false);
  }

  const image = editor.getWrapper().find(".primary-image")[0];

  if (image) {
    image.set("draggable", false);
    image.set("droppable", false);
    image.set("removable", false);
  }

  const overlay = editor.getWrapper().find(".overlay")[0];

  if (overlay) {
    overlay.set("draggable", false);
    overlay.set("droppable", false);
    overlay.set("removable", false);
  }

  const container = editor.getWrapper().find(".container")[0];

  if (container) {
    container.set("draggable", false);
    container.set("droppable", false);
    container.set("removable", false);
  }

  const input = editor.getWrapper().find(".form-wrapper-input")[0];
  if (input) {
    input.set("draggable", false);
    input.set("droppable", false);
    input.set("removable", false);
  }
};

export default function loadTemplatePlugin(editor) {
  // Set badass background (in the future this could be client website preview)
  editor.setStyle(`
    body {
      background-image: url('/circuits.jpg');
      background-size: cover;
    }
  `);

  // Add template html and css from Mikes modal
  editor.on("load", () => {
    editor.addComponents(form.html);
    editor.setStyle(form.css);

    // Example of how to limit styles programatticlly
    const target = editor.getWrapper().find(".form-wrapper-input")[0];
    if (target) {
      target.set("stylable", ["color", "font-size"]);
    }
    removeAriaHidden(editor);
    lockDragAndDropOnKeyElements(editor);
  });
}
