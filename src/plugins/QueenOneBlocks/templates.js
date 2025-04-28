const singleLayout = {
  type: "Container",
  components: [
    { type: "Overlay" },
    {
      type: "Dialog Frame",
      components: [
        { type: "Floating Close Button" },
        { type: "Primary Content" },
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
        { type: "Primary Content" },
      ],
    },
  ],
};

export default {
  "single-column": singleLayout,
  "two-column": twoColumnLayout,
};
