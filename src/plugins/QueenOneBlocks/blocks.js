import {
  typeQoModalAbstractBox,
} from "./components-simple";

import {
  typeQoModalInput,
  typeQoModalButton,
  typeQoModalUnstyledButton,
} from "./components-inputs";

import {
  typeQoModalParagraphText,
  typeQoModalPrehead,
  typeQoModalHeader,
} from "./components-text";

export default function (editor) {

  // Category: Text

  editor.Blocks.add(typeQoModalParagraphText, {
    label: "Paragraph Text",
    category: "Text",
    content: {
      type: typeQoModalParagraphText,
      content: "Text",
    },
  });

  editor.Blocks.add(typeQoModalPrehead, {
    label: "Prehead",
    category: "Text",
    content: {
      type: typeQoModalPrehead,
      content: "Prehead",
    },
  });

  editor.Blocks.add(typeQoModalHeader, {
    label: "Header",
    category: "Text",
    content: {
      type: typeQoModalHeader,
      content: "Header",
    },
  });

  editor.Blocks.add("Header with Prehead", {
    label: "Header with prehead",
    category: "Text",
    content: {
      type: typeQoModalHeader,
      components: [{ type: typeQoModalPrehead, components: "Prehead" }, "Header"],
    },
  });

  // Category: Inputs

  editor.Blocks.add("Label", {
    label: "Label",
    category: "Inputs",
    content: {
      type: "label",
      attributes: {},
    },
  });

  editor.Blocks.add("qo-modal-email-input", {
    label: "Email Input",
    category: "Inputs",
    resetId: false,
    content: {
      type: typeQoModalInput,
      attributes: {
        name: "email",
        id: "email-input",
        type: "email",
        placeholder: "Email address",
        required: true,
        autocomplete: "email",
      },
    },
  });

  editor.Blocks.add("qo-modal-phone-input", {
    label: "Phone Input",
    category: "Inputs",
    resetId: false,
    content: {
      type: typeQoModalInput,
      attributes: {
        name: "phone",
        id: "phone-input",
        type: "tel",
        placeholder: "(201) 555 - 0123",
        required: true,
        autocomplete: "tel",
        pattern: `\\([0-9]{3}\\) [0-9]{3} - [0-9]{4}`,
      },
    },
  });

  editor.Blocks.add(typeQoModalButton, {
    label: "Primary Button",
    category: "Inputs",
    content: {
      type: typeQoModalButton,
      text: "Next",
    },
  });

  editor.Blocks.add(typeQoModalUnstyledButton, {
    label: "Unstyled Button",
    category: "Inputs",
    content: {
      type: typeQoModalUnstyledButton,
      text: "No thanks",
    },
  });

  editor.Blocks.add("qo-modal-box", {
    label: "Box",
    category: "Layout",
    content: { type: typeQoModalAbstractBox },
  });
}
