import { form } from "../mikesDemoForm";

// TODO Add attributes
function components(editor) {
  const dc = editor.DomComponents;

  dc.addType("qo-modal-container", {
    isComponent: (el) => el.classList?.contains("container"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "container",
          // id: "qo-1234",
        },
        // droppable: false,
        // draggable: false,
        // removable: false,
        // copyable: false,
        // highlightable: false,
        // hoverable: false,
        // badgable: false,
        // selectable: false,
        components: [
          { type: "qo-modal-overlay" },
          { type: "qo-modal-dialog-frame" },
        ],
      },
    },
  });

  dc.addType("qo-modal-overlay", {
    isComponent: (el) => el.classList?.contains("overlay"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          class: "overlay",
        },
        // droppable: false,
        // draggable: false,
        // removable: false,
        // copyable: false,
        // highlightable: false,
        // hoverable: false,
        // badgable: false,
        // selectable: false,
      },
    },
  });

  // TODO This can have traits like split image, full bleed.
  dc.addType("qo-modal-dialog-frame", {
    isComponent: (el) => el.classList?.contains("dialog-frame"),
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          // A boolean through traits can determine which layout class is used.
          class: "dialog-frame dialog-frame__layout-split-image",
        },
        components: [
          { type: "qo-primary-image" },
          {
            type: "qo-primary-content-zone",
          },
        ],
        // droppable: false,
        // draggable: false,
        // removable: false,
        // copyable: false,
        // highlightable: false,
        // hoverable: false,
        // badgable: false,
        // selectable: false,
      },
    },
  });

  dc.addType("qo-primary-image", {
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
        components: [{ type: "qo-primary-content" }],
      },
    },
  });

  dc.addType("qo-primary-content", {
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

export default function (editor) {
  components(editor);
  // TODO - block for floating close button
  // TODO - Basic styling unlocked
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
    });

    // Add the queen one modal styles programatically
    editor.setStyle(form.css);
  });
}
