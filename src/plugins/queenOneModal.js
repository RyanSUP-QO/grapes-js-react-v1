export default (editor, opts = {}) => {
  const modalCSS = `
    .queen-one-modal {
      padding: 6px;
    }
    .queen-one-modal__is-visible {
      display: block !important;
    }
    .queen-one-modal__is-hidden {
      display: none !important;
    }
    .queen-one-modal__positioned {
      position: fixed;
      z-index: 2147483644;
      width: 100vw;
      height: 100vh;
      top: 0px;
      left: 0px;
    }
    .queen-one-modal__center-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .queen-one-modal__screen {
      background-color: rgba(0, 0, 0, 0.7);
    }
    .queen-one-modal_content-frame {
      position: relative;
      width: 320px;
      min-height: 480px;
      background-color: #efede5;
    }
    @media screen and (min-width: 800px) {
      .queen-one-modal_content-frame {
        width: 800px;
        min-height: 600px;
      }
    }
    .queen-one-modal_floating-close-button {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 38px;
      height: 38px;
      border-radius: 20px;
      border: 2px solid transparent;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .queen-one-modal_floating-close-button:hover,
    .queen-one-modal_floating-close-button:focus {
      border-color: #000000;
    }
    .queen-one-modal__center-content.queen-one-modal__is-visible {
      display: flex !important;
    }
  `;

  // Inject styles into canvas
  // * I like this way of defining the overal modal styles as opposed to adding the classes and definitions to the components.

  editor.on("load", () => {
    const style = document.createElement("style");
    style.innerHTML = modalCSS;
    editor.Canvas.getDocument().head.appendChild(style);
  });

  // Register the block
  editor.BlockManager.add("queen-one-modal", {
    label: "Queen Modal",
    category: "Modals",
    content: {
      type: "queen-one-modal",
    },
  });

  // Define the component type
  editor.DomComponents.addType("queen-one-modal", {
    model: {
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: false,
        attributes: {
          class:
            "queen-one-modal queen-one-modal__is-visible queen-one-modal__positioned queen-one-modal__center-content queen-one-modal__screen",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modal-title",
          "aria-hidden": "true",
        },
        components: [
          {
            tagName: "div",
            attributes: { class: "queen-one-modal_content-frame" },
            components: [
              {
                tagName: "button",
                attributes: { class: "queen-one-modal_floating-close-button" },
                content: "&times;",
              },
              // {
              //   tagName: "div",
              //   attributes: { class: "image" },
              // },
              // {
              //   tagName: "div",
              //   attributes: { class: "content" },
              //   content: "Modal content here...",
              // },
            ],
          },
        ],
      },
    },
  });

  // Optional: Add trait controls later for background image, aria labels, etc.
};
