export default function (editor) {
  const dc = editor.DomComponents;

  // Container
  dc.addType("Container", {
    isComponent: (el) => el.classList?.contains("container"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "container",
          // id: "qo-1234", // ! Adding ID breaks the dialog frame positioning??
          "aria-labelledby": "initial-modal-title",
          "aria-hidden": "false", // ! We'll need to swap this to false when exporting - or maybe the script takes care of that?
        },
        styles: `
          .container {
            position: fixed;
            inset: 0;
            display: flex;
            z-index: 2;
            padding: 6px;
            font-family: "Roboto", Helvetica, Arial, sans-serif;
          }

          @media screen and (min-width: 800px) {
            .container {
              padding: 0;
            }
          }

          .container[aria-hidden="true"] {
            display: none;
          }
        `,
      },
    },
  });

  // Overlay
  dc.addType("Overlay", {
    isComponent: (el) => el.classList?.contains("overlay"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "overlay",
        },
        styles: `
          .overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.7);
          }
        `,
      },
    },
  });

  // Dialog Frame
  dc.addType("", {});

  // Dialog Close Button
  dc.addType("", {});

  // H2
  dc.addType("", {});

  // Submit button
  dc.addType("", {});

  // Decline Button
  dc.addType("", {});

  // Paragraph
  dc.addType("", {});

  // Split Layout -- Only dropable in Dialog frame
  dc.addType("", {});

  // Flex Image
  dc.addType("", {});

  // Flex layout
  dc.addType("", {});

  // Form (Primary Content)
  dc.addType("", {});
}
