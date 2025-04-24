export default function (editor) {
  const dc = editor.DomComponents;

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

  dc.addType("Dialog Frame", {
    isComponent: (el) => el.classList?.contains("dialog-frame"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "dialog-frame",
        },
        styles: `
          .dialog-frame {
            position: relative; /* close button should be relative to the frame */
            z-index: 2; /* make sure the content frame sits on top of the overlay. */
            display: flex;
            width: 320px;
            min-height: 480px; /* min-height so that content can expand the height if necessary */
            margin: auto;
            background-color: #ffffff; /* default bg color */
          }

          @media screen and (min-width: 800px) {
            .dialog-frame {
              width: 800px;
              min-height: 600px;
            }
          }

          .dialog-frame[aria-hidden="true"] {
            display: none;
          }
        `,
      },
    },
  });

  dc.addType("Floating Close Button", {
    isComponent: (el) => el.classList?.contains("floating-close-button"),
    model: {
      defaults: {
        tagName: "button",
        attributes: {
          type: "button",
          class: "floating-close-button",
          "aria-label": "Close dialog",
          "data-a11y-dialog-hide": "Your dialog ID", // ? Need some clarifications here. WHat should the value be? https://a11y-dialog.netlify.app/usage/interactions/
        },
        styles: `
          .floating-close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 32px;
            height: 32px;
            border-radius: 20px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 0;
            margin: 0;
            font: inherit;
            color: #000000;
          }

          .floating-close-button:hover {
            background-color: rgba(0, 0, 0, 0.8);
            color: #ffffff;
          }

          .floating-close-button:focus {
            outline: none;
            background-color: #000000;
            color: #ffffff;
            animation: hover-shadow 4s linear infinite;
            box-shadow: 0 0 0 2px #ffffff, -2px -2px 6px 3px 6px 3px #7a36fd,
              2px 2px 6px 3px 6px 3px #ee4484;
          }
        `,
        components: `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path
              d="M11.4129 10.2202L11.3669 10.1801L7.10172 5.99243L11.081 2.08553L11.0708 2.0755L11.4793 1.68331C11.6342 1.53456 11.7227 1.32677 11.7227 1.11229C11.7227 0.672741 11.3584 0.315643 10.9113 0.315643C10.6662 0.315643 10.4353 0.42372 10.2781 0.612574L10.2401 0.653799L5.94704 4.86877L1.97573 0.980813L1.96949 0.986942L1.56776 0.592519C1.41513 0.442661 1.21086 0.360211 0.992977 0.360211C0.545857 0.360211 0.18158 0.717865 0.18158 1.15686C0.18158 1.40142 0.292792 1.6276 0.486846 1.77746L0.537346 1.82147L4.80257 6.00914L0.824456 9.91493L0.834669 9.92496L0.424999 10.3183C0.270096 10.467 0.18158 10.6748 0.18158 10.8893C0.18158 11.3288 0.545857 11.6859 0.992977 11.6859C1.2381 11.6859 1.46903 11.5779 1.62621 11.389L1.66422 11.3478L5.95782 7.13225L9.92232 11.0247L9.92799 11.0191L10.3314 11.4152C10.4841 11.565 10.6883 11.6475 10.9062 11.6475C11.3533 11.6475 11.7176 11.2898 11.7176 10.8508C11.721 10.6041 11.6098 10.3762 11.4135 10.2208L11.4129 10.2202Z"
              fill="currentcolor"
            />
          </svg>
        `,
      },
    },
  });

  // Submit button
  dc.addType("", {});

  // Decline Button
  dc.addType("", {});

  // Split Layout -- Only dropable in Dialog frame
  dc.addType("", {});

  // Flex Image
  dc.addType("", {});

  // Form (Primary Content)
  dc.addType("", {});
}
