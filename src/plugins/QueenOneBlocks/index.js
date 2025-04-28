import defineCustomComponentTypes from "./components";
import addBlocks from "./blocks";
import templates from "./templates";

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

.initial-modal-title {
  position: fixed;
  inset: 0;
}

.modal-title:focus {
  outline: none;
}

/* Queen One Utility Styles */

.unstyled-button {
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  font-size: inherit;
}

.unstyled-button:focus,
.unstyled-button:hover {
  outline: none;
  text-decoration: underline;
}

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

.input {
  padding: 0.6rem;
  border: 1px solid #000000;
  border-radius: 4px;
  font-size: 16px; /* 16px to avoid mobile zoom */
}

.input:hover {
  border-color: rgba(0, 0, 0, 0.5);
}

.input:focus-visible {
  outline: none;
  border-color: #000000;
  animation: hover-shadow 4s linear infinite;
  box-shadow: 0 0 0 2px #ffffff, -2px -2px 6px 3px 6px 3px #7a36fd,
    2px 2px 6px 3px 6px 3px #ee4484;
}

.button {
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background-color: #000000;
  color: #ffffff;
  font-size: inherit;
  cursor: pointer;
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.button:focus {
  outline: none;
  background-color: #000000;
  animation: hover-shadow 4s linear infinite;
  box-shadow: 0 0 0 2px #ffffff, -2px -2px 6px 3px 6px 3px #7a36fd,
    2px 2px 6px 3px 6px 3px #ee4484;
}

h2 {
  font-size: 50px;
  font-weight: 700;
  line-height: 1;
}

p {
  line-height: 1.5;
}

.legal {
  display: block;
  font-size: 0.75em;
  line-height: 1.33;
  text-align: left;
}

`;

export default function (editor, opts = {}) {
  console.log("Initializing QueenOneBlocks plugin", opts);
  editor.on("load", () => {
    // Ensure styles are applied after the editor is fully loaded
    console.log("Editor loaded in plugin", opts);
    editor.addStyle(queenOneResetStyles);
  });

  editor.on("storage:load", (data) => {
    // Add default components if no data is loaded

    if (Object.keys(data).length === 0) {
      const template = templates[opts.template] || templates["single-column"];
      editor.setComponents(template);
    }
  });

  defineCustomComponentTypes(editor);
  addBlocks(editor);
}
