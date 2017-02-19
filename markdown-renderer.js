var marked = require('marked');

require('prismjs');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-c');
require('prismjs/components/prism-go');
require('prismjs/components/prism-groovy');
require('prismjs/components/prism-ini');
require('prismjs/components/prism-java');
require('prismjs/components/prism-objectivec');
require('prismjs/components/prism-python');
require('prismjs/components/prism-swift');

var Syntaxes = {
  'bash': Prism.languages.bash,
  'css': Prism.languages.css,
  'go': Prism.languages.go,
  'gradle': Prism.languages.groovy,
  'groovy': Prism.languages.groovy,
  'html': Prism.languages.html,
  'ini': Prism.languages.ini,
  'java': Prism.languages.java,
  'javascript': Prism.languages.javascript,
  'js': Prism.languages.javascript,
  'objc': Prism.languages.objectivec,
  'obj-c': Prism.languages.objectivec,
  'objectivec': Prism.languages.objectivec,
  'objective-c': Prism.languages.objectivec,
  'python': Prism.languages.python,
  'shell': Prism.languages.bash,
  'swift': Prism.languages.swift
};

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

var renderer = new marked.Renderer();
renderer.code = function(code, lang, escaped) {
  var syntax;
  if (lang) {
    lang = lang.toLowerCase();
    syntax = Syntaxes[lang];
  }
  if (!syntax) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return `<pre><code class="language-${escape(lang, true)}">`
    + Prism.highlight(code, syntax)
    + `</code></pre>`;
};

module.exports = renderer;
