import { form } from "../mikesDemoForm";
import components from "./components";

export default function (editor) {
  components(editor);
  // TODO - block for floating close button
  // TODO - Better background
  // ? - How to preview
  // ? - How doess script tags know what to target?

  editor.on("load", () => {
    // Lock the body
    const wrapper = editor.getWrapper();
    wrapper.set({
      droppable: false,
      draggable: false,
      removable: false,
      copyable: false,
      highlightable: false,
      hoverable: false,
      badgable: false,
      selectable: false,
    });

    // Add the modal structure programmatically
    editor.addComponents({
      type: "qo-modal-container",
      components: [{ type: "Overlay" }, { type: "Dialog" }],
    });

    // Add Michaels styles programatically
    editor.setStyle(form.css);
  });
}
