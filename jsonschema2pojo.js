//==UserScript==
// @name         darkmode (jsonschema2pojo)
// @namespace    http://tampermonkey.net/
// @version      2025-04-07
// @description  
// @author       oldVinyl (github :3)
// @match        https://www.jsonschema2pojo.org/
// @icon         
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const bd = document.body.style;
  bd.backgroundColor="#393b42";
  bd.color="white";

  const obj = document.body.getElementsByTagName("code");
  for (let i = 0; i < obj.length; i++) {
      let code = obj.item(i).style;
      code.backgroundColor = "grey";
      code.color = "white";
  };

  const pre = document.body.getElementsByTagName("pre");
  for (let i = 0; i < pre.length; i++) {
      let code = pre.item(i).style;
      code.backgroundColor = "#161d26";
      code.color = "white";
  };

  document.getElementById("preview-modal").style.backgroundColor="#1a1b16";
  const cmvar = document.querySelectorAll(".cm-variable");
  for (let i = 0; i < cmvar.length; i++) {
      let code = cmvar[i].style;
      code.color = "grey";
  };

  function addStyle(styleString) {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
  }

  addStyle(`
    span.cm-keyword {
      color: #ff00ab;
    }
  `);

  addStyle(`
    span.cm-variable {
      color: #ec9898;
    }
  `);

  addStyle(`
    span.cm-operator {
      color: #ffffff;
    }
  `);

  addStyle(`
    span.cm-comment {
      color: #7bddac;
    }
 `);

  addStyle(`
    span.cm-string {
      color: #b1a4f4;
    }
  `);

  addStyle(`
    .cm-number {
      color: pink;
    }
  `);

  addStyle(`
    .cm-string {
      color: grey;
    }
  `);

  console.clear();

})();

// feel free to fidget with the colours if you want something different!