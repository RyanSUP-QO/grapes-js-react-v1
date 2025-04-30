import { typeQoModalAbstractInput, typeQoModalAbstractButton } from "./components-simple.js";

export const typeQoModalInput = "qo-modal-input";
export const typeQoModalButton = "qo-modal-button";
export const typeQoModalUnstyledButton = "qo-modal-unstyled-button";

export default function (editor) {
  const dc = editor.DomComponents;

  dc.addType(typeQoModalInput, {
    extend: typeQoModalAbstractInput,
    isComponent: (el) => el.classList?.contains("form-wrapper-input"),
    model: {
      defaults: {
        name: "Input",
        classes: ["form-wrapper-input", "input"],
        attributes: {},
        styles: `
          .input {
            padding: 0.6rem;
            border: 1px solid #000000;
            border-radius: 4px;
            font-size: 16px; /* 16px to avoid mobile zoom */
          }

          .input:hover {
            border-color: rgba(0, 0, 0, 0.5);
          }

          .input:focus-visible {
            outline: none;
            border-color: #000000;
            animation: hover-shadow 4s linear infinite;
          }`,
      },
    },
  });

  dc.addType(typeQoModalButton, {
    extend: typeQoModalAbstractButton,
    isComponent: (el) => el.classList?.contains("form-wrapper-submit"),
    model: {
      defaults: {
        name: "Button",
        tagName: "button",
        classes: ["form-wrapper-submit", "button"],
        attributes: {
          type: "button",
        },
        styles: `
          .button {
            padding: 0.6rem;
            border: none;
            border-radius: 4px;
            background-color: #000000;
            color: #ffffff;
            font-size: inherit;
            cursor: pointer;
          }

          .button:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }

          .button:focus-visible {
            outline: none;
            background-color: #000000;
            animation: hover-shadow 4s linear infinite;
          }
        `,
        text: "Submit",
      },
    },
  });

  dc.addType(typeQoModalUnstyledButton, {
    extend: typeQoModalAbstractButton,
    isComponent: (el) => el.classList?.contains("unstyled-button"),
    model: {
      defaults: {
        name: "Unstyled Button",
        tagName: "button",
        classes: ["unstyled-button"],
        attributes: {
          type: "button",
          "data-a11y-dialog-hide": "",
        },
        styles: `
          .unstyled-button {
            cursor: pointer;
            background: none;
            border: none;
            padding: 0;
            margin: 0;
            font: inherit;
            color: inherit;
            font-size: inherit;
          }

          .unstyled-button:focus-visible,
          .unstyled-button:hover {
            outline: none;
            text-decoration: underline;
          }
        `,
        text: "No thanks",
      },
    },
  });

}
