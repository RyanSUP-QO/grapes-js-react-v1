import components from "../OptInFormBuilder/components";

const baselineCSS = `
html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        /* prettier-ignore */
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
          display: block;
        }
        body {
          line-height: 1;
        }
        /* prettier-ignore */
        ol, ul {
          list-style: none;
        }
        /* prettier-ignore */
        blockquote, q {
          quotes: none;
        }
        /* prettier-ignore */
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        /* Queen One Modal Reset Styles */

        * {
          box-sizing: border-box;
        }

        .initial-modal-title {
          position: fixed;
          inset: 0;
        }

        .modal-title:focus {
          outline: none;
        }

        /* Queen One Utility Styles */

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

        .unstyled-button:focus,
        .unstyled-button:hover {
          outline: none;
          text-decoration: underline;
        }

        .visuallyhidden {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          overflow: hidden;
          position: absolute;
        }

        .visuallyhidden-full {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          overflow: hidden;
          position: fixed;
          inset: 0;
        }

        /* Queen One Modal Default Theme */

        @keyframes hover-shadow {
          0% {
            box-shadow: 0 0 0 2px #ffffff, -2px -2px 6px 3px #7a36fd,
              2px 2px 6px 3px #ee4484;
          }
          25% {
            box-shadow: 0 0 0 2px #ffffff, -2px 2px 6px 3px #7a36fd,
              2px -2px 6px 3px #ee4484;
          }
          50% {
            box-shadow: 0 0 0 2px #ffffff, 2px 2px 6px 3px #7a36fd,
              -2px -2px 6px 3px #ee4484;
          }
          75% {
            box-shadow: 0 0 0 2px #ffffff, 2px -2px 6px 3px #7a36fd,
              -2px 2px 6px 3px #ee4484;
          }
          100% {
            box-shadow: 0 0 0 2px #ffffff, -2px -2px 6px 3px #7a36fd,
              2px 2px 6px 3px #ee4484;
          }
        }

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
          box-shadow: 0 0 0 2px #ffffff, -2px -2px 6px 3px 6px 3px #7a36fd,
            2px 2px 6px 3px 6px 3px #ee4484;
        }

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

        .button:focus {
          outline: none;
          background-color: #000000;
          animation: hover-shadow 4s linear infinite;
          box-shadow: 0 0 0 2px #ffffff, -2px -2px 6px 3px 6px 3px #7a36fd,
            2px 2px 6px 3px 6px 3px #ee4484;
        }

        h2 {
          font-size: 50px;
          font-weight: 700;
          line-height: 1;
        }

        p {
          line-height: 1.5;
        }

        .legal {
          display: block;
          font-size: 0.75em;
          line-height: 1.33;
          text-align: left;
        }

        .prehead {
          display: block;
          margin-bottom: 0.6em;
          font-size: 0.36em;
          text-transform: uppercase;
        }


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

                  .overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.7);
          }

                  .primary-content {
          display: grid;
          grid-auto-rows: max-content;
          gap: 1.3rem;
          width: 50%;
          margin: auto;
          padding: 20px 40px;
          text-align: center;
        }

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
`;

export default function (editor) {
  // This is the default container that all modals start with. It cannot be edited or deleted.
  editor.DomComponents.addType("qo-modal-container", {
    isComponent: (el) => el.classList?.contains("container"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "container",
          // id: "qo-1234", // ! Adding ID breaks the dialog frame positioning??
          "aria-labelledby": "initial-modal-title",
          // "aria-hidden": "true",
        },
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
  editor.DomComponents.addType("Overlay", {
    isComponent: (el) => el.classList?.contains("overlay"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "overlay",
        },
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
      },
    },
  });

  editor.DomComponents.addType("Dialog", {
    isComponent: (el) => el.classList?.contains("dialog-frame"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "dialog-frame",
        },
        components: `
        <button
            type="button"
            class="floating-close-button"
            aria-label="Close dialog"
            data-a11y-dialog-hide
          >
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
          </button>
        `,
        draggable: false,
        removable: false,
        copyable: false,
      },
    },
  });

  editor.DomComponents.addType("Primary Content", {
    isComponent: (el) => el.classList?.contains("primary-content"),
    model: {
      defaults: {
        tagName: "form",
        attributes: {
          class: "primary-content",
        },
        components: [
          `<h2 class="modal-title" tabindex="-1">
                <span class="prehead">Elevate Your Cocktails</span>
                With 10% Off
              </h2>
              <p>
                Receive 10% off your first order when you join our email list
                along with special promotions, curated playlists, and first
                access to new products and limited runs.
              </p>
              <label for="qom-1234-step-1-email" class="visuallyhidden">
                Email (required)
              </label>
              <input
                id="qom-1234-step-1-email"
                name="email"
                class="form-wrapper-input input"
                type="email"
                placeholder="Enter Email"
                required
              />
              <button
                type="button"
                class="form-wrapper-submit button"
                onclick="nextStep('qom-1234')"
              >
                To The Bitters
              </button>
              <button
                class="unstyled-button"
                type="button"
                data-a11y-dialog-hide
              >
                No thanks, I’m not into saving money.
              </button>`,
        ],
      },
    },
  });

  editor.on("load", () => {
    editor.addComponents({
      type: "qo-modal-container",
      components: [{ type: "Overlay" }, { type: "Dialog" }],
    });

    editor.Blocks.add("QUEEN-ONE-DIV", {
      label: "QO Div",
      content: "<div></div>",
    });

    editor.Blocks.add("QUEEN-ONE-H1", {
      label: "QO H1",
      content: "<h1>Test</h1>",
    });

    editor.Blocks.add("QUEEN-ONE-PRIMARY-CONTENT", {
      label: "Primary Content",
      content: { type: "Primary Content" },
    });

    editor.setStyle(baselineCSS);
  });
}
