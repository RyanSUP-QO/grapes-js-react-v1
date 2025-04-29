const starterPrimaryContent = [
  {
    type: "Modal Title",
    components: [
      { type: "Prehead", components: "Elevate Your Style" },
      "With 10% Off",
    ],
  },
  {
    type: "text",
    content: `Receive 10% off your first order when you join our email list
          along with special promotions, curated playlists, and first
          access to new products and limited runs.`,
  },
  {
    type: "label",
    classes: ["visuallyhidden"],
    content: "Email (Required)",
    id: "Testing",
  },
  { type: "input", classes: ["form-wrapper-input", "input"] },
  {
    type: "button",
    classes: ["form-wrapper-submit", "button"],
    text: "Submit",
  },
  {
    type: "button",
    classes: ["unstyled-button"],
    attributes: { "data-a11y-dialog-hide": "" },
    text: "No thanks, I’m not into saving money.",
  },
];

const singleLayout = {
  type: "Container",
  components: [
    { type: "Overlay" },
    {
      type: "Dialog Frame",
      components: [
        { type: "Floating Close Button" },
        { type: "Primary Content", components: starterPrimaryContent },
      ],
    },
  ],
};

const blank = {
  components: [
    {
      type: "Container",
      components: [
        { type: "Overlay" },
        {
          type: "Dialog Frame",
          components: [{ type: "Floating Close Button" }],
        },
      ],
    },
  ],
};

const twoColumnLayout = {
  type: "Container",
  components: [
    { type: "Overlay" },
    {
      type: "Dialog Frame",
      components: [
        { type: "Floating Close Button" },
        { tagName: "div", style: { flex: 1 } },
        { type: "Primary Content", components: starterPrimaryContent },
      ],
    },
  ],
};

export default {
  "single-column": singleLayout,
  "two-column": twoColumnLayout,
  blank,
};
