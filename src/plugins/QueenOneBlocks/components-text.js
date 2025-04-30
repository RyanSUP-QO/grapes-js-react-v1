export const typeQoModalParagraphText = "qo-modal-paragraph-text";
export const typeQoModalPrehead = "qo-modal-prehead";
export const typeQoModalHeader = "qo-modal-header";

export default function (editor) {
  const dc = editor.DomComponents;

  dc.addType(typeQoModalParagraphText, {
    extend: "text",
    isComponent: (el) => el.tagName === "P",
    model: {
      defaults: {
        name: "Paragraph Text",
        tagName: "p",
      },
    },
  });

  dc.addType(typeQoModalPrehead, {
    extend: "text",
    isComponent: (el) => el.classList?.contains("prehead"),
    model: {
      defaults: {
        name: "Prehead",
        tagName: "span",
        attributes: {
          class: "prehead",
        },
        styles: `
        .prehead {
          display: block;
          margin-bottom: 0.6em;
          font-size: 0.36em;
          text-transform: uppercase;
        }
      `,
      },
    },
  });

  dc.addType(typeQoModalHeader, {
    extend: "text",
    isComponent: (el) => el.classList?.contains("header"),
    model: {
      defaults: {
        name: "Header",
        tagName: "h2",
        droppable: true,
        attributes: {
          class: "header",
          tabindex: "-1",
        },
        styles: `
          .header {
            font-size: 50px;
            font-weight: 700;
            line-height: 1;
          }
          .header:focus {
            outline: none;
          }
          @media screen and (max-width: 799px) {
            .header {
              font-size: 38px
            }
          }
        `,
      },
    },
  });
}
