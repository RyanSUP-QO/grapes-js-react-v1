const OVERLAY_DEFAULTS = {
  opacity: "0.7",
  color: "#000000",
};

const Modes = {
  MODAL: "modal",
};

export default function (project, editor) {
  // ? Does this still work if the overlay COMPONENT is styled instead of the SELECTOR?
  const overlay = rgbaToHexAndOpacity(
    project.styles.find((s) => s.selectors.includes("overlay")).style[
      "background-color"
    ]
  );

  const steps = editor.Pages.getAll().map((page, index) => {
    const inputs = page
      .getMainComponent()
      .findType("qo-modal-input")
      .map((input) => {
        return {
          type: "list_field", // We can assume all qo-modal-input are list fields. We will need to build support for customer_pref types.
          name: input.getAttributes().name,
        };
      });
    return {
      css: index === 0 ? editor.getCss() : "",
      listId: page.attributes.listId || "",
      html: page.getMainComponent().getInnerHTML() || "",
      inputs,
    };
  });

  const output = {
    active: "false",
    siteId: "YOUR SITE ID HERE", // TODO get siteID
    name: "NEW OPTIN PROJECT", // TODO get name
    mode: Modes.MODAL, // Currently the only supported mode
    embedTarget: undefined, // Currently not supported,
    overlay,
    timeout: { active: false, value: 0 },
    idleTimeout: { active: false, value: 0 },
    wait: { active: true, value: 6000 },
    formClose: { active: false, formId: "", wait: 0 },
    mouseleave: { active: true },
    onClick: { active: false, selector: "" },
    cookieExpiration: 10080,
    center: true, // Depricated
    // TODO Support fonts
    font: {
      families: "",
      urls: "",
    },
    // TODO Support animations
    animate: { active: true, in: "fadeIn", out: "fadeOut" },
    // TODO Support triggers
    triggerRules: [],
    steps,
    grapesProjectData: JSON.stringify(project),
  };
  console.log("output: ", output);
  return output;
}

function rgbaToHexAndOpacity(rgba) {
  if (!rgba) return OVERLAY_DEFAULTS;
  const matches = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/);
  if (!matches) return OVERLAY_DEFAULTS;
  const [, r, g, b, a] = matches.map(Number);
  const toHex = (val) => val.toString(16).padStart(2, "0");
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  const opacity = a.toString();
  return { color: hexColor, opacity };
}
