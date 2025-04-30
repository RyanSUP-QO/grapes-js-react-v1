import {
  typeQoModalAbstractBox,
} from "./components-simple";

import {
  typeQoModalContainer,
  typeQoModalOverlay,
  typeQoModalDialogFrame,
  typeQoModalFloatingCloseButton,
  typeQoModalPrimaryContent,
  typeQoModalAccessibilityTitle,
} from "./components-fixed";

import {
  typeQoModalInput,
  typeQoModalButton,
  typeQoModalUnstyledButton,
} from "./components-inputs";

import {
  typeQoModalParagraphText,
  typeQoModalPrehead,
  typeQoModalHeader,
} from "./components-text";

const starterPrimaryContent = [
  {
    type: typeQoModalHeader,
    components: [
      { type: typeQoModalPrehead, components: "Elevate Your Style" },
      "With 10% Off",
    ],
  },
  {
    type: typeQoModalParagraphText,
    content: `Receive 10% off your first order when you join our email list
          along with special promotions, curated playlists, and first
          access to new products and limited runs.`,
  },
  // {
  //   type: "label",
  //   classes: ["visuallyhidden"],
  //   content: "Email (Required)",
  //   id: "Testing",
  // },
  {
    type: typeQoModalInput,
    attributes: {
      name: "email",
      type: "email",
      placeholder: "Email address",
      required: true,
      autocomplete: "email",
    },
  },
  {
    type: typeQoModalButton,
    text: "Next",
  },
  {
    type: typeQoModalUnstyledButton,
    text: "No thanks, I’m not into saving money.",
  },
];

const singleLayout = {
  type: typeQoModalContainer,
  components: [
    { type: typeQoModalOverlay },
    { type: typeQoModalAccessibilityTitle },
    {
      type: typeQoModalDialogFrame,
      components: [
        { type: typeQoModalFloatingCloseButton },
        { type: typeQoModalPrimaryContent, components: starterPrimaryContent },
      ],
    },
  ],
};

const twoColumnLayout = {
  type: typeQoModalContainer,
  components: [
    { type: typeQoModalOverlay },
    { type: typeQoModalAccessibilityTitle },
    {
      type: typeQoModalDialogFrame,
      components: [
        { type: typeQoModalFloatingCloseButton },
        { type: typeQoModalAbstractBox, style: { flex: 1 } },
        { type: typeQoModalPrimaryContent, components: starterPrimaryContent },
      ],
    },
  ],
};

export default {
  "single-column": singleLayout,
  "two-column": twoColumnLayout,
};
