export default function (editor) {
  // Should this be a component def? Because it is very specific to certain classes, ids, and attributes
  editor.Blocks.add("qo-button-submit", {
    label: "👸🥇 Submit Button",
    category: "Queen One",
    content: {
      type: "button",
      classes: ["form-wrapper-submit", "button"],
      text: "Submit",
    },
  });

  // Should this be a component def? Because it is very specific to certain classes, ids, and attributes
  editor.Blocks.add("qo-button-cancel", {
    label: "👸🥇 Cancel Button",
    category: "Queen One",
    content: {
      type: "button",
      classes: ["unstyled-button"],
      attributes: {
        "data-a11y-dialog-hide": "",
      },
      text: "No thanks",
    },
  });

  // Should this be a component def? Because it is very specific to certain classes, ids, and attributes
  editor.Blocks.add("qo-input", {
    label: "👸🥇 Input",
    category: "Queen One",
    content: { type: "input", classes: ["form-wrapper-input", "input"] },
  });

  editor.Blocks.add("qo-box", {
    label: "👸🥇 Box",
    category: "Queen One",
    content: { type: "qo-box" },
  });

  editor.Blocks.add("Primary Content", {
    label: "👸🥇 Form with starter content",
    category: "Queen One",
    content: {
      type: "Primary Content",
      components: [
        {
          type: "text",
          tagName: "h2",
          components: [
            { type: "Prehead", components: "Elevate Your Cocktails" },
            "With 10% Off",
          ],
        },
        {
          type: "text",
          content: `                Receive 10% off your first order when you join our email list
                along with special promotions, curated playlists, and first
                access to new products and limited runs.`,
        },
        { type: "label", classes: ["visuallyhidden"] },
        { type: "input", classes: ["form-wrapper-input", "input"] },
        {
          type: "button",
          classes: ["form-wrapper-submit", "button"],
          text: "To The Bitters",
        },
        {
          type: "button",
          classes: ["unstyled-button"],
          attributes: { "data-a11y-dialog-hide": "" },
          text: "No thanks, I’m not into saving money.",
        },
      ],
    },
  });

  editor.Blocks.add("Primary Content", {
    label: "👸🥇 Form box",
    category: "Queen One",
    type: "Primary Content",
  });

  editor.Blocks.add("Modal Title", {
    label: "👸🥇 Title",
    category: "Queen One",
    content: {
      type: "Modal Title",
      content: "Title",
    },
  });

  editor.Blocks.add("qo-prehead-title", {
    label: "👸🥇 Title with prehead",
    category: "Queen One",
    content: {
      type: "Modal Title",
      components: [{ type: "Prehead", components: "prehead" }, "headline"],
    },
  });
}
