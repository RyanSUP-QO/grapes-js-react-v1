export default function (project, editor) {
  // TODO For each page
  // - Get CSS (All css can be applied to first form)
  // - Get HTML
  // - Get list ID
  // - List all inputs (just list for now)

  // * Overlay DONE!
  // ? Does this still work if the component is styled instead of the selector?
  // May need to also look for the overlay components ID and see if there is a style there.
  // So 2 steps
  // 1 - Check for background styles on overlay class
  // 2 - Check for background styles on overlay IDv
  const overlay = rgbaToHexAndOpacity(
    project.styles.find((s) => s.selectors.includes("overlay")).style[
      "background-color"
    ]
  );

  const pages = editor.Pages.getAll();
  const forms = pages.map((page, index) => {
    const inputs = page
      .getMainComponent()
      .findType("qo-modal-input")
      .map((input) => {
        return {
          type: "list_field", // TODO This would be like input.traits.type
          name: input.getAttributes().name,
        };
      });
    return {
      css: index === 0 ? editor.getCss() : "",
      listId: page.attributes.targetList || "", // TODO List is not added to a page on load
      html: page.getMainComponent().getInnerHTML() || "",
      inputs,
    };
  });

  console.log("Form output: ", {
    overlay,
    forms,
  });
}

function rgbaToHexAndOpacity(rgba) {
  const matches = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/);
  if (!matches)
    return {
      opacity: "0.7",
      color: "#000000",
    };
  const [, r, g, b, a] = matches.map(Number);
  const toHex = (val) => val.toString(16).padStart(2, "0");
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  const opacity = a.toString();

  return { color: hexColor, opacity };
}

function extractModalFormData(editor) {
  const pages = editor.Pages.getAll();
  const css = editor.getCss();
  const styles = editor.CssComposer.getAll();
  const siteId = "YOUR_SITE_ID"; // Replace with your actual siteId
  const fontFamilies = ["Karla"]; // Extract from project if dynamic
  const fontUrls = [
    "https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap",
  ];

  // Get overlay style from a class
  const overlayRule = styles.find((rule) =>
    rule.get("selectors").some((sel) => sel.name === "qo-modal-overlay")
  );
  const overlayStyle = overlayRule ? overlayRule.get("style") : {};
  const overlay = {
    opacity: overlayStyle.opacity || "0.5",
    color: overlayStyle["background-color"] || "#000000",
  };

  const forms = pages.map((page, index) => {
    const listId = page.get("targetList") || "";
    editor.Pages.select(page);
    const html = editor.getHtml();
    const pageInputs = [];

    const domParser = new DOMParser();
    const doc = domParser.parseFromString(html, "text/html");
    const inputs = doc.querySelectorAll("input, select, textarea");

    inputs.forEach((input, i) => {
      const name = input.getAttribute("name") || `input_${i}`;
      pageInputs.push({
        type: "list_field",
        name,
        _id: `ObjectId('temp_generated_${index}_${i}')`,
      });
    });

    return {
      html,
      css: index === 0 ? css : "", // Apply CSS to only the first form (if shared)
      listId,
      inputs: pageInputs,
      _id: `ObjectId('temp_form_${index}')`,
    };
  });

  return {
    _id: `ObjectId('temp_modal_id')`,
    siteId,
    active: true,
    name: "Modal From GrapesJS",
    mode: "modal",
    overlay,
    forms,
    timeout: { active: false, value: 0 },
    idleTimeout: { active: false, value: 0 },
    formClose: { active: false },
    mouseleave: { active: true },
    onClick: { active: false },
    wait: { active: true, value: 6000 },
    triggerRules: [
      {
        queryString: [],
        referrer: [],
        path: [],
        userAgent: [],
        _id: `ObjectId('temp_rule_id')`,
      },
    ],
    cookieExpiration: 43200,
    center: true,
    font: {
      families: fontFamilies,
      urls: fontUrls,
    },
    animate: { active: true, in: "fadeIn", out: "fadeOut" },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __v: 1,
    toggledAt: new Date().toISOString(),
  };
}

// const sampleForm = {
//   _id: ObjectId("67e053c5158f81cd74f02d69"),
//   siteId: "85dGrLK",
//   active: true,
//   name: "Big Chill Lead Capture (v2)",
//   mode: "modal",
//   overlay: { opacity: "0.7", color: "#000000" },
//   forms: [
//     {
//       html: '<div class="rejoiner-form-wrapper rejoiner-form-close"><div class="wrapper one"><a class="close rejoiner-form-close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1L14.5 14.5"/><path d="M14.5 1L0.999999 14.5"/></svg></a><div class="top mobile"></div><div class="content-wrapper"><div class="header-wrapper"><img class="logo" src="https://cdn.rejoiner.com/2a38f41cd9c145f6a23fb478ff2255c7/lib/pluginId_2a38f41cd9c145f6a23fb478ff2255c7_images/85dGrLK/forms/logo.svg" alt="Big Chill Logo"><h1>WIN A RETRO TOASTER</h1></div><div class="copy-wrapper"><p>Sign up to receive the latest product updates and exclusive offers, and be entered to win a free Retro Toaster.</p></div><div class="form-wrapper"><form><input class="form-wrapper-input" type="email" name="email" placeholder="Email Address" required> <input class="form-wrapper-submit" type="submit" value="CONTINUE"></form></div><div class="no-thanks"><a class="rejoiner-form-close" href="#">No, thanks.</a></div></div></div></div>',
//       css: `@charset "utf-8";a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}:host,:root{--base-size:1}.rejoiner-form-wrapper{position:fixed;z-index:2147483644;min-height:100vh;min-width:100vw;top:0;left:0;display:flex;align-items:center;justify-content:center}.wrapper{font-family:Karla;margin:12px;text-align:center;background-color:#fff;color:#262626;position:relative;display:flex;flex-direction:column}.top{height:calc(var(--base-size) * 15rem);width:100%;background:url("https://cdn.rejoiner.com/2a38f41cd9c145f6a23fb478ff2255c7/lib/pluginId_2a38f41cd9c145f6a23fb478ff2255c7_images/85dGrLK/forms/bc-bg-mobi.png");background-repeat:no-repeat;background-size:cover;background-color:#262626}a.close{top:calc(var(--base-size) * .55rem);right:calc(var(--base-size) * .56rem);position:absolute;z-index:99;display:block;cursor:pointer}.close svg{width:calc(var(--base-size) * .84375rem);height:calc(var(--base-size) * .84375rem);pointer-events:none;stroke:#FFFFFF;stroke-width:2px}.content-wrapper{background:#fff;margin:0 auto;padding:calc(var(--base-size) * 1.31rem) calc(var(--base-size) * 1.1rem) calc(var(--base-size) * .77rem)}.two .content-wrapper{padding-top:calc(var(--base-size) * 1.12rem);padding-bottom:calc(var(--base-size) * 1.22rem)}.three .content-wrapper{padding-top:calc(var(--base-size) * 2.5rem);padding-bottom:calc(var(--base-size) * 6.34rem)}.logo{width:calc(var(--base-size) * 8.75rem);margin-bottom:calc(var(--base-size) * .75rem)}.header-wrapper h1{font-family:henderson-sans-basic;font-size:calc(var(--base-size) * 1.875rem);line-height:calc(var(--base-size) * 2.25rem);margin-bottom:calc(var(--base-size) * .75rem)}.copy-wrapper p{font-size:calc(var(--base-size) * 1rem);line-height:calc(var(--base-size) * 1.25rem)}.three .copy-wrapper p{line-height:calc(var(--base-size) * 2rem)}.form-wrapper,.form-wrapper form{display:flex;flex-direction:column;align-items:stretch;text-align:left}.form-wrapper{padding-top:calc(var(--base-size) * .75rem)}.two .form-wrapper{padding-top:0}.form-wrapper .form-wrapper-input{font-size:calc(var(--base-size) * 1rem);height:calc(var(--base-size) * 2.5rem);min-width:0;border:1px solid #000;border-radius:.25rem;margin-bottom:calc(var(--base-size) * .75rem);padding-left:calc(var(--base-size) * .75rem)}.form-wrapper .form-wrapper-submit,.form-wrapper button{width:100%;background-color:#262626;color:#fff;border:none;border-radius:.29706rem;font-family:henderson-sans-basic;font-size:calc(var(--base-size) * 1.125rem);line-height:calc(var(--base-size) * 3.125rem);height:calc(var(--base-size) * 3.125rem);cursor:pointer}.three .form-wrapper p,.two .form-wrapper p{font-size:calc(var(--base-size) * 1.005rem);line-height:calc(var(--base-size) * 1.333rem)}.two .form-wrapper p.secondary{font-family:Karla;font-size:calc(var(--base-size) * .75rem);line-height:calc(var(--base-size) * 1rem)}.fine-print,.no-thanks{margin-top:calc(var(--base-size) * .75rem)}.no-thanks a{font-size:calc(var(--base-size) * 1rem);line-height:calc(var(--base-size) * 1.625rem);color:#262626}.fine-print{text-align:left;font-size:calc(var(--base-size) * .625rem);line-height:calc(var(--base-size) * .75rem);letter-spacing:.025rem}.desktop{display:none}@media screen and (min-width:431px){.wrapper{width:calc(var(--base-size) * 25rem);padding-left:calc(var(--base-size) * 25rem);background:url("https://cdn.rejoiner.com/2a38f41cd9c145f6a23fb478ff2255c7/lib/pluginId_2a38f41cd9c145f6a23fb478ff2255c7_images/85dGrLK/forms/bc-bg-desk.png");background-size:calc(var(--base-size) * 25rem) 100%;background-color:#fff;background-repeat:no-repeat;background-position:left}a.close{top:calc(var(--base-size) * .68rem);right:calc(var(--base-size) * .69rem)}.close svg{stroke:#000000}.content-wrapper{padding:calc(var(--base-size) * 3.87rem) calc(var(--base-size) * 1.5rem)}.two .content-wrapper{padding-top:calc(var(--base-size) * 5.56rem);padding-bottom:calc(var(--base-size) * 4.69rem)}.three .content-wrapper{padding-top:calc(var(--base-size) * 8.56rem);padding-bottom:calc(var(--base-size) * 8.56rem)}.logo{width:calc(var(--base-size) * 12.6875rem);margin-bottom:calc(var(--base-size) * 3.75rem)}.header-wrapper h1{font-size:calc(var(--base-size) * 2.5rem);line-height:calc(var(--base-size) * 3.3125rem);margin-bottom:calc(var(--base-size) * 1.25rem)}.copy-wrapper p{font-size:calc(var(--base-size) * 1.25rem);line-height:calc(var(--base-size) * 1.625rem)}.form-wrapper{padding-top:calc(var(--base-size) * 1.25rem)}.form-wrapper .form-wrapper-input{height:calc(var(--base-size) * 3.0625rem);border:1px solid #000;padding-left:calc(var(--base-size) * .94rem)}.form-wrapper .form-wrapper-submit,.form-wrapper button{font-size:calc(var(--base-size) * 1.125rem);height:calc(var(--base-size) * 4rem)}.three .form-wrapper p,.two .form-wrapper p{font-size:calc(var(--base-size) * 1.25rem);line-height:calc(var(--base-size) * 1.75rem)}.two .form-wrapper p.secondary{font-family:Karla;font-size:calc(var(--base-size) * .8125rem);line-height:calc(var(--base-size) * 1.25rem)}.fine-print,.no-thanks{margin-top:calc(var(--base-size) * 1.25rem)}.fine-print{font-size:calc(var(--base-size) * .625rem);line-height:calc(var(--base-size) * .875rem)}.mobile{display:none}.desktop{display:initial}}`,
//       listId: "59X5MWO",
//       inputs: [
//         {
//           type: "list_field",
//           name: "email",
//           _id: ObjectId("67f01b0c20d9ce0db27ad938"),
//         },
//       ],
//       _id: ObjectId("67f01b0c20d9ce0db27ad937"),
//     },
//     {
//       html: '<div class="rejoiner-form-wrapper rejoiner-form-close"><div class="wrapper two"><a class="close rejoiner-form-close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1L14.5 14.5"/><path d="M14.5 1L0.999999 14.5"/></svg></a><div class="top mobile"></div><div class="content-wrapper"><div class="header-wrapper"><img class="logo" src="https://cdn.rejoiner.com/2a38f41cd9c145f6a23fb478ff2255c7/lib/pluginId_2a38f41cd9c145f6a23fb478ff2255c7_images/85dGrLK/forms/logo.svg" alt="Big Chill Logo"><h1>WIN A RETRO TOASTER</h1></div><div class="form-wrapper"><form><input class="form-wrapper-input" type="tel" name="phone" placeholder="Mobile Number" required> <button class="form-wrapper-submit" type="submit"><p>ENTER TO WIN</p><p class="secondary">when you sign up for email and texts</p></button></form></div><div class="fine-print"><p>By submitting this form, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Big Chill at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg and data rates may apply. View Terms, Privacy & Giveaway Terms.</p></div></div></div></div>',
//       css: "",
//       listId: "WyaMkOA",
//       inputs: [
//         {
//           type: "list_field",
//           name: "phone",
//           _id: ObjectId("67f01b0c20d9ce0db27ad93a"),
//         },
//       ],
//       _id: ObjectId("67f01b0c20d9ce0db27ad939"),
//     },
//     {
//       html: '<div class="rejoiner-form-wrapper rejoiner-form-close"><div class="wrapper three"><a class="close rejoiner-form-close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1L14.5 14.5"/><path d="M14.5 1L0.999999 14.5"/></svg></a><div class="top mobile"></div><div class="content-wrapper"><div class="header-wrapper"><img class="logo" src="https://cdn.rejoiner.com/2a38f41cd9c145f6a23fb478ff2255c7/lib/pluginId_2a38f41cd9c145f6a23fb478ff2255c7_images/85dGrLK/forms/logo.svg" alt="Big Chill Logo"><h1>CHECK YOUR TEXTS</h1></div><div class="copy-wrapper"><p>Reply &lsquo;Y&rsquo; to confirm your subscription.</p></div><div class="form-wrapper"><button class="form-wrapper-submit rejoiner-form-close"><p class="rejoiner-form-close">CONTINUE SHOPPING</p></button></div></div></div></div>',
//       css: "",
//       listId: "",
//       inputs: [],
//       _id: ObjectId("67f01b0c20d9ce0db27ad93b"),
//     },
//   ],
//   timeout: { active: false, value: 0 },
//   idleTimeout: { active: false, value: 0 },
//   formClose: { active: false },
//   mouseleave: { active: true },
//   onClick: { active: false },
//   wait: { active: true, value: 6000 },
//   triggerRules: [
//     {
//       queryString: [],
//       referrer: [],
//       path: [],
//       userAgent: [],
//       _id: ObjectId("67f01b0c20d9ce0db27ad93c"),
//     },
//   ],
//   cookieExpiration: 43200,
//   center: true,
//   font: {
//     families: ["Karla"],
//     urls: [
//       "https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap",
//     ],
//   },
//   animate: { active: true, in: "fadeIn", out: "fadeOut" },
//   createdAt: ISODate("2025-03-23T18:32:37.566Z"),
//   updatedAt: ISODate("2025-04-04T17:46:52.981Z"),
//   __v: 1,
//   toggledAt: ISODate("2025-04-04T17:56:48.776Z"),
// };
