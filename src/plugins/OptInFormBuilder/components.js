export default function (editor) {
  const dc = editor.DomComponents;

  // This is the default container that all modals start with. It cannot be edited or deleted.
  dc.addType("qo-modal-container", {
    isComponent: (el) => el.classList?.contains("container"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "container",
          // id: "qo-1234", // ! Adding ID breaks the dialog frame positioning??
        },
        styles: `
          .container {
            position: fixed;
            inset: 0;
            display: flex;
            z-index: 2;
            padding: 6px;
          }
          .container[aria-hidden="true"] {
            display: none;
          }
        `,
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
        hoverable: false,
        badgable: false,
        selectable: false,
      },
    },
  });

  // All modals start with an overlay. Overlays cannot be deleted and have limited customizations.
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
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
      },
    },
  });

  dc.addType("Dialog", {
    isComponent: (el) => el.classList?.contains("dialog-frame"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "dialog-frame",
        },
        style: `
          .dialog-frame {
            position: relative; /* close button should be relative to the frame */
            z-index: 2; /* make sure the content frame sits on top of the overlay. */
            display: flex;
            width: 320px;
            min-height: 480px; /* min-height so that content can expand the height if necessary */
            margin: auto;
            background-color: #fff; /* default bg color */
          }

          @media screen and (min-width: 800px) {
            .dialog-frame {
              width: 800px;
              min-height: 600px;
            }

            .dialog-frame__layout-split-image {
              display: grid;
              grid-template-columns: 400px 1fr;
            }
          }
        `,
        components: [
          // { type: "Primary Image" },
          {
            type: "qo-primary-content-zone",
          },
        ],
        // droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
      },
    },
  });

  dc.addType("Primary Image", {
    isComponent: (el) => el.classList?.contains("primary-image"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "primary-image",
        },
      },
    },
  });

  dc.addType("qo-primary-content-zone", {
    isComponent: (el) => el.classList?.contains("primary-content-zone"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "primary-content-zone",
        },
        components: [{ type: "Opt-in Form" }],
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
        hoverable: false,
        badgable: false,
        selectable: false,
      },
    },
  });

  dc.addType("Opt-in Form", {
    isComponent: (el) => el.classList?.contains("primary-content"),
    model: {
      defaults: {
        tagName: "form",
        attributes: {
          class: "primary-content",
        },
        components: [
          `<h2 id="modal-title">
                <span>Elevate Your Cocktails</span>
                With 10% Off
              </h2>
              <p>
                Receive 10% off your first order when you join our email list
                along with special promotions, curated playlists, and first
                access to new products and limited runs.
              </p>
              <input
                name="email"
                class="form-wrapper-input"
                type="email"
                placeholder="Enter Email"
                required=""
              />
              <input
                class="form-wrapper-submit"
                type="submit"
                value="To The Bitters"
              />
              <button type="button" data-a11y-dialog-hide>No thanks</button>`,
        ],
      },
    },
  });
}
