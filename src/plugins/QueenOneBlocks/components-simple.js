export const typeQoModalAbstractBox = "qo-modal-abstract-box";
export const typeQoModalAbstractInput = "qo-modal-abstract-input";
export const typeQoModalAbstractButton = "qo-modal-abstract-button";

export default function (editor) {
  const dc = editor.DomComponents;

  dc.addType(typeQoModalAbstractBox, {
    isComponent: el => el.tagName == 'DIV',
    model: {
      defaults: {
        name: "Box",
        tagName: "div",
        attributes: {},
      },
    },
  });

  dc.addType(typeQoModalAbstractInput, {
    extend: "input",
    isComponent: el => el.tagName == 'INPUT',
    model: {
      defaults: {
        attributes: {},
        traits: [
          "id",
          "name",
          "placeholder",
          {
            type: 'select',
            name: 'type',
            options: [
              { value: 'text' },
              { value: 'number' },
              { value: 'email' },
              { value: 'tel' },
            ]
          },
          "required",
          {
            type: "text",
            name: "pattern",
          },
          {
            type: "select",
            name: "autocomplete",
            options: [
              { value: "on" },
              { value: "off" },
              { value: "email" },
              { value: "tel" },
              { value: "street-address" },
            ],
          }
        ],
      },
    },
  });

  dc.addType(typeQoModalAbstractButton, {
    isComponent: el => el.tagName == 'BUTTON',
    model: {
      defaults: {
        tagName: "button",
        droppable: false,
        attributes: {
          type: "button",
        },
        text: "Button",
        traits: [
          {
            name: "text",
            changeProp: true,
          },
          // {
          //   type: 'select',
          //   name: 'type',
          //   options: [
          //     { value: 'button' },
          //     { value: 'submit' },
          //   ],
          // },
        ],
      },

      init() {
        const comps = this.components();
        const tChild =  comps.length === 1 && comps.models[0];
        const chCnt = (tChild && tChild.is('textnode') && tChild.get('content')) || '';
        const text = chCnt || this.get('text');
        this.set('text', text);
        this.on('change:text', this.__onTextChange);
        (text !== chCnt) && this.__onTextChange();
      },
  
      __onTextChange() {
        this.components(this.get('text'));
      },
    },
  });

}
