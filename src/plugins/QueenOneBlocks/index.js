import defineAbstractComponentTypes from "./components-simple";
import defineFixedComponentTypes from "./components-fixed";
import defineTextComponentTypes from "./components-text";
import defineInputComponentTypes from "./components-inputs";
import addBlocks from "./blocks";

const queenOneResetStyles = `
/* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
*/
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
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
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

label {
  text-align: left;
}

/* Queen One Utility Styles */

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

p {
  line-height: 1.5;
}

a {
  color:hsl(261, 98.00%, 60.20%);
  text-decoration: underline;
  border-radius: 3px;
  cursor: pointer;
}

a:visited {
  color:hsl(261, 98.00%, 60.20%);
}

a:hover,
a:active {
  color:hsl(261, 98.00%, 40.20%);
}

a:focus-visible {
  outline: none;
  box-shadow: 0 0  2px 2px hsl(261, 98.00%, 40.20%);
  animation: hover-shadow 4s linear infinite;
  box-shadow: 0 0 0 2px #ffffff, -2px -2px 6px 3px 6px 3px #7a36fd,
    2px 2px 6px 3px 6px 3px #ee4484;
}

.legal {
  display: block;
  font-size: 0.75em;
  line-height: 1.33;
  text-align: left;
}

`;

export default function (editor) {
  console.log("Initializing QueenOneBlocks plugin");
  console.log("Resetting studio SDK block");
  editor.Blocks.getAll().reset();
  
  editor.on("load", () => {
    console.log("Adding Queen One Reset Styles");
    editor.addStyle(queenOneResetStyles);
  });

  defineAbstractComponentTypes(editor);
  defineFixedComponentTypes(editor);
  defineTextComponentTypes(editor);
  defineInputComponentTypes(editor);
  addBlocks(editor);
}
