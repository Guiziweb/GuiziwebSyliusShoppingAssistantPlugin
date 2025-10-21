/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/shop/chat.js":
/*!*****************************!*\
  !*** ./assets/shop/chat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseMarkdown: () => (/* binding */ parseMarkdown)
/* harmony export */ });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.esm.js");


// Configure marked for safe rendering
marked__WEBPACK_IMPORTED_MODULE_0__.marked.setOptions({
  breaks: true,
  // Convert \n to <br>
  gfm: true // GitHub Flavored Markdown
});
function parseMarkdown(text) {
  if (!text) return text;

  // Use marked to parse markdown
  return marked__WEBPACK_IMPORTED_MODULE_0__.marked.parse(text, {
    async: false
  });
}

/***/ }),

/***/ "./assets/shop/controllers/ChatController.js":
/*!***************************************************!*\
  !*** ./assets/shop/controllers/ChatController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@hotwired/stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat */ "./assets/shop/chat.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.parseExistingMessages();
      this.reopenChatIfNeeded();
    }
  }, {
    key: "parseExistingMessages",
    value: function parseExistingMessages() {
      if (!this.hasMessagesTarget) return;
      this.messagesTarget.querySelectorAll('.chat-message__content').forEach(function (el) {
        el.innerHTML = (0,_chat__WEBPACK_IMPORTED_MODULE_1__.parseMarkdown)(el.textContent.trim());
      });
    }
  }, {
    key: "reopenChatIfNeeded",
    value: function reopenChatIfNeeded() {
      var _this = this;
      var shouldReopen = sessionStorage.getItem('chat_keep_open') === 'true';
      if (!shouldReopen) return;
      sessionStorage.removeItem('chat_keep_open');
      document.addEventListener('DOMContentLoaded', function () {
        var chatOffcanvas = document.getElementById('offcanvasChat');
        if (chatOffcanvas && typeof bootstrap !== 'undefined') {
          var bsOffcanvas = new bootstrap.Offcanvas(chatOffcanvas);
          bsOffcanvas.show();
          chatOffcanvas.addEventListener('shown.bs.offcanvas', function () {
            _this.scrollToBottom();
          }, {
            once: true
          });
        }
      });
    }
  }, {
    key: "submit",
    value: function () {
      var _submit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
        var message, assistantEl, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              event.preventDefault();
              message = this.inputTarget.value.trim();
              if (message) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              // Disable form during request
              this.inputTarget.disabled = true;
              this.submitTarget.disabled = true;

              // Add user message
              this.addMessage('user', message);
              this.inputTarget.value = '';

              // Create assistant message
              assistantEl = this.addMessage('assistant', '');
              _context.p = 2;
              _context.n = 3;
              return fetch("".concat(this.streamUrlValue, "?message=").concat(encodeURIComponent(message)), {
                method: 'GET',
                credentials: 'same-origin'
              });
            case 3:
              response = _context.v;
              _context.n = 4;
              return response.json();
            case 4:
              data = _context.v;
              if (!data.error) {
                _context.n = 5;
                break;
              }
              assistantEl.className = 'chat-message chat-message--error';
              assistantEl.querySelector('.chat-message__content').textContent = data.error;
              return _context.a(2);
            case 5:
              // Display response
              assistantEl.querySelector('.chat-message__content').innerHTML = (0,_chat__WEBPACK_IMPORTED_MODULE_1__.parseMarkdown)(data.response);
              this.scrollToBottom();

              // Handle products if present
              if (!(data.products && data.products.length > 0)) {
                _context.n = 6;
                break;
              }
              _context.n = 6;
              return this.loadProductCards(data.products);
            case 6:
              // Handle redirect if present
              if (data.redirect_url) {
                sessionStorage.setItem('chat_keep_open', 'true');
                setTimeout(function () {
                  return window.location.href = data.redirect_url;
                }, 1000);
              }
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              console.error('Chat error:', _t);
              assistantEl.className = 'chat-message chat-message--error';
              assistantEl.querySelector('.chat-message__content').textContent = 'Connection error';
            case 8:
              _context.p = 8;
              this.inputTarget.disabled = false;
              this.submitTarget.disabled = false;
              this.inputTarget.focus();
              return _context.f(8);
            case 9:
              return _context.a(2);
          }
        }, _callee, this, [[2, 7, 8, 9]]);
      }));
      function submit(_x) {
        return _submit.apply(this, arguments);
      }
      return submit;
    }()
  }, {
    key: "addMessage",
    value: function addMessage(role, content) {
      if (!this.hasMessagesTarget) return null;
      var div = document.createElement('div');
      div.className = "chat-message chat-message--".concat(role);
      div.innerHTML = "<div class=\"chat-message__content\">".concat(content, "</div>");
      this.messagesTarget.appendChild(div);
      this.scrollToBottom();
      return div;
    }
  }, {
    key: "loadProductCards",
    value: function () {
      var _loadProductCards = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(slugs) {
        var response, result, container, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return fetch(this.productCardsUrlValue, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({
                  slugs: slugs
                })
              });
            case 1:
              response = _context2.v;
              _context2.n = 2;
              return response.json();
            case 2:
              result = _context2.v;
              if (result.html) {
                container = document.createElement('div');
                container.className = 'chat-products';
                container.innerHTML = result.html;
                this.messagesTarget.appendChild(container);
                this.scrollToBottom();
              }
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error('Error loading product cards:', _t2);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 3]]);
      }));
      function loadProductCards(_x2) {
        return _loadProductCards.apply(this, arguments);
      }
      return loadProductCards;
    }()
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      if (this.hasMessagesTarget) {
        this.messagesTarget.scrollTop = this.messagesTarget.scrollHeight;
      }
    }
  }]);
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@hotwired/stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
_defineProperty(_default, "targets", ['messages', 'input', 'submit', 'form']);
_defineProperty(_default, "values", {
  streamUrl: String,
  productCardsUrl: String
});


/***/ }),

/***/ "./node_modules/marked/lib/marked.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/marked/lib/marked.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hooks: () => (/* binding */ _Hooks),
/* harmony export */   Lexer: () => (/* binding */ _Lexer),
/* harmony export */   Marked: () => (/* binding */ Marked),
/* harmony export */   Parser: () => (/* binding */ _Parser),
/* harmony export */   Renderer: () => (/* binding */ _Renderer),
/* harmony export */   TextRenderer: () => (/* binding */ _TextRenderer),
/* harmony export */   Tokenizer: () => (/* binding */ _Tokenizer),
/* harmony export */   defaults: () => (/* binding */ _defaults),
/* harmony export */   getDefaults: () => (/* binding */ _getDefaults),
/* harmony export */   lexer: () => (/* binding */ lexer),
/* harmony export */   marked: () => (/* binding */ marked),
/* harmony export */   options: () => (/* binding */ options),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseInline: () => (/* binding */ parseInline),
/* harmony export */   parser: () => (/* binding */ parser),
/* harmony export */   setOptions: () => (/* binding */ setOptions),
/* harmony export */   use: () => (/* binding */ use),
/* harmony export */   walkTokens: () => (/* binding */ walkTokens)
/* harmony export */ });
/**
 * marked v12.0.2 - a markdown parser
 * Copyright (c) 2011-2024, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

/**
 * Gets the original marked default options.
 */
function _getDefaults() {
    return {
        async: false,
        breaks: false,
        extensions: null,
        gfm: true,
        hooks: null,
        pedantic: false,
        renderer: null,
        silent: false,
        tokenizer: null,
        walkTokens: null
    };
}
let _defaults = _getDefaults();
function changeDefaults(newDefaults) {
    _defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, 'g');
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
const escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html, encode) {
    if (encode) {
        if (escapeTest.test(html)) {
            return html.replace(escapeReplace, getEscapeReplacement);
        }
    }
    else {
        if (escapeTestNoEncode.test(html)) {
            return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
    }
    return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, (_, n) => {
        n = n.toLowerCase();
        if (n === 'colon')
            return ':';
        if (n.charAt(0) === '#') {
            return n.charAt(1) === 'x'
                ? String.fromCharCode(parseInt(n.substring(2), 16))
                : String.fromCharCode(+n.substring(1));
        }
        return '';
    });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
    let source = typeof regex === 'string' ? regex : regex.source;
    opt = opt || '';
    const obj = {
        replace: (name, val) => {
            let valSource = typeof val === 'string' ? val : val.source;
            valSource = valSource.replace(caret, '$1');
            source = source.replace(name, valSource);
            return obj;
        },
        getRegex: () => {
            return new RegExp(source, opt);
        }
    };
    return obj;
}
function cleanUrl(href) {
    try {
        href = encodeURI(href).replace(/%25/g, '%');
    }
    catch (e) {
        return null;
    }
    return href;
}
const noopTest = { exec: () => null };
function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    const row = tableRow.replace(/\|/g, (match, offset, str) => {
        let escaped = false;
        let curr = offset;
        while (--curr >= 0 && str[curr] === '\\')
            escaped = !escaped;
        if (escaped) {
            // odd number of slashes means | is escaped
            // so we leave it alone
            return '|';
        }
        else {
            // add space before unescaped |
            return ' |';
        }
    }), cells = row.split(/ \|/);
    let i = 0;
    // First/last cell in a row cannot be empty if it has no leading/trailing pipe
    if (!cells[0].trim()) {
        cells.shift();
    }
    if (cells.length > 0 && !cells[cells.length - 1].trim()) {
        cells.pop();
    }
    if (count) {
        if (cells.length > count) {
            cells.splice(count);
        }
        else {
            while (cells.length < count)
                cells.push('');
        }
    }
    for (; i < cells.length; i++) {
        // leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }
    return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param str
 * @param c
 * @param invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
    const l = str.length;
    if (l === 0) {
        return '';
    }
    // Length of suffix matching the invert condition.
    let suffLen = 0;
    // Step left until we fail to match the invert condition.
    while (suffLen < l) {
        const currChar = str.charAt(l - suffLen - 1);
        if (currChar === c && !invert) {
            suffLen++;
        }
        else if (currChar !== c && invert) {
            suffLen++;
        }
        else {
            break;
        }
    }
    return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
        return -1;
    }
    let level = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '\\') {
            i++;
        }
        else if (str[i] === b[0]) {
            level++;
        }
        else if (str[i] === b[1]) {
            level--;
            if (level < 0) {
                return i;
            }
        }
    }
    return -1;
}

function outputLink(cap, link, raw, lexer) {
    const href = link.href;
    const title = link.title ? escape$1(link.title) : null;
    const text = cap[1].replace(/\\([\[\]])/g, '$1');
    if (cap[0].charAt(0) !== '!') {
        lexer.state.inLink = true;
        const token = {
            type: 'link',
            raw,
            href,
            title,
            text,
            tokens: lexer.inlineTokens(text)
        };
        lexer.state.inLink = false;
        return token;
    }
    return {
        type: 'image',
        raw,
        href,
        title,
        text: escape$1(text)
    };
}
function indentCodeCompensation(raw, text) {
    const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
        return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text
        .split('\n')
        .map(node => {
        const matchIndentInNode = node.match(/^\s+/);
        if (matchIndentInNode === null) {
            return node;
        }
        const [indentInNode] = matchIndentInNode;
        if (indentInNode.length >= indentToCode.length) {
            return node.slice(indentToCode.length);
        }
        return node;
    })
        .join('\n');
}
/**
 * Tokenizer
 */
class _Tokenizer {
    options;
    rules; // set by the lexer
    lexer; // set by the lexer
    constructor(options) {
        this.options = options || _defaults;
    }
    space(src) {
        const cap = this.rules.block.newline.exec(src);
        if (cap && cap[0].length > 0) {
            return {
                type: 'space',
                raw: cap[0]
            };
        }
    }
    code(src) {
        const cap = this.rules.block.code.exec(src);
        if (cap) {
            const text = cap[0].replace(/^ {1,4}/gm, '');
            return {
                type: 'code',
                raw: cap[0],
                codeBlockStyle: 'indented',
                text: !this.options.pedantic
                    ? rtrim(text, '\n')
                    : text
            };
        }
    }
    fences(src) {
        const cap = this.rules.block.fences.exec(src);
        if (cap) {
            const raw = cap[0];
            const text = indentCodeCompensation(raw, cap[3] || '');
            return {
                type: 'code',
                raw,
                lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : cap[2],
                text
            };
        }
    }
    heading(src) {
        const cap = this.rules.block.heading.exec(src);
        if (cap) {
            let text = cap[2].trim();
            // remove trailing #s
            if (/#$/.test(text)) {
                const trimmed = rtrim(text, '#');
                if (this.options.pedantic) {
                    text = trimmed.trim();
                }
                else if (!trimmed || / $/.test(trimmed)) {
                    // CommonMark requires space before trailing #s
                    text = trimmed.trim();
                }
            }
            return {
                type: 'heading',
                raw: cap[0],
                depth: cap[1].length,
                text,
                tokens: this.lexer.inline(text)
            };
        }
    }
    hr(src) {
        const cap = this.rules.block.hr.exec(src);
        if (cap) {
            return {
                type: 'hr',
                raw: cap[0]
            };
        }
    }
    blockquote(src) {
        const cap = this.rules.block.blockquote.exec(src);
        if (cap) {
            // precede setext continuation with 4 spaces so it isn't a setext
            let text = cap[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, '\n    $1');
            text = rtrim(text.replace(/^ *>[ \t]?/gm, ''), '\n');
            const top = this.lexer.state.top;
            this.lexer.state.top = true;
            const tokens = this.lexer.blockTokens(text);
            this.lexer.state.top = top;
            return {
                type: 'blockquote',
                raw: cap[0],
                tokens,
                text
            };
        }
    }
    list(src) {
        let cap = this.rules.block.list.exec(src);
        if (cap) {
            let bull = cap[1].trim();
            const isordered = bull.length > 1;
            const list = {
                type: 'list',
                raw: '',
                ordered: isordered,
                start: isordered ? +bull.slice(0, -1) : '',
                loose: false,
                items: []
            };
            bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
            if (this.options.pedantic) {
                bull = isordered ? bull : '[*+-]';
            }
            // Get next list item
            const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);
            let raw = '';
            let itemContents = '';
            let endsWithBlankLine = false;
            // Check if current bullet point can start a new List Item
            while (src) {
                let endEarly = false;
                if (!(cap = itemRegex.exec(src))) {
                    break;
                }
                if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
                    break;
                }
                raw = cap[0];
                src = src.substring(raw.length);
                let line = cap[2].split('\n', 1)[0].replace(/^\t+/, (t) => ' '.repeat(3 * t.length));
                let nextLine = src.split('\n', 1)[0];
                let indent = 0;
                if (this.options.pedantic) {
                    indent = 2;
                    itemContents = line.trimStart();
                }
                else {
                    indent = cap[2].search(/[^ ]/); // Find first non-space char
                    indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
                    itemContents = line.slice(indent);
                    indent += cap[1].length;
                }
                let blankLine = false;
                if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
                    raw += nextLine + '\n';
                    src = src.substring(nextLine.length + 1);
                    endEarly = true;
                }
                if (!endEarly) {
                    const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`);
                    const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
                    const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
                    const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
                    // Check if following lines should be included in List Item
                    while (src) {
                        const rawLine = src.split('\n', 1)[0];
                        nextLine = rawLine;
                        // Re-align to follow commonmark nesting rules
                        if (this.options.pedantic) {
                            nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
                        }
                        // End list item if found code fences
                        if (fencesBeginRegex.test(nextLine)) {
                            break;
                        }
                        // End list item if found start of new heading
                        if (headingBeginRegex.test(nextLine)) {
                            break;
                        }
                        // End list item if found start of new bullet
                        if (nextBulletRegex.test(nextLine)) {
                            break;
                        }
                        // Horizontal rule found
                        if (hrRegex.test(src)) {
                            break;
                        }
                        if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) { // Dedent if possible
                            itemContents += '\n' + nextLine.slice(indent);
                        }
                        else {
                            // not enough indentation
                            if (blankLine) {
                                break;
                            }
                            // paragraph continuation unless last line was a different block level element
                            if (line.search(/[^ ]/) >= 4) { // indented code block
                                break;
                            }
                            if (fencesBeginRegex.test(line)) {
                                break;
                            }
                            if (headingBeginRegex.test(line)) {
                                break;
                            }
                            if (hrRegex.test(line)) {
                                break;
                            }
                            itemContents += '\n' + nextLine;
                        }
                        if (!blankLine && !nextLine.trim()) { // Check if current line is blank
                            blankLine = true;
                        }
                        raw += rawLine + '\n';
                        src = src.substring(rawLine.length + 1);
                        line = nextLine.slice(indent);
                    }
                }
                if (!list.loose) {
                    // If the previous item ended with a blank line, the list is loose
                    if (endsWithBlankLine) {
                        list.loose = true;
                    }
                    else if (/\n *\n *$/.test(raw)) {
                        endsWithBlankLine = true;
                    }
                }
                let istask = null;
                let ischecked;
                // Check for task list items
                if (this.options.gfm) {
                    istask = /^\[[ xX]\] /.exec(itemContents);
                    if (istask) {
                        ischecked = istask[0] !== '[ ] ';
                        itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
                    }
                }
                list.items.push({
                    type: 'list_item',
                    raw,
                    task: !!istask,
                    checked: ischecked,
                    loose: false,
                    text: itemContents,
                    tokens: []
                });
                list.raw += raw;
            }
            // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
            list.items[list.items.length - 1].raw = raw.trimEnd();
            (list.items[list.items.length - 1]).text = itemContents.trimEnd();
            list.raw = list.raw.trimEnd();
            // Item child tokens handled here at end because we needed to have the final item to trim it first
            for (let i = 0; i < list.items.length; i++) {
                this.lexer.state.top = false;
                list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
                if (!list.loose) {
                    // Check if list should be loose
                    const spacers = list.items[i].tokens.filter(t => t.type === 'space');
                    const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => /\n.*\n/.test(t.raw));
                    list.loose = hasMultipleLineBreaks;
                }
            }
            // Set all items to loose if list is loose
            if (list.loose) {
                for (let i = 0; i < list.items.length; i++) {
                    list.items[i].loose = true;
                }
            }
            return list;
        }
    }
    html(src) {
        const cap = this.rules.block.html.exec(src);
        if (cap) {
            const token = {
                type: 'html',
                block: true,
                raw: cap[0],
                pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
                text: cap[0]
            };
            return token;
        }
    }
    def(src) {
        const cap = this.rules.block.def.exec(src);
        if (cap) {
            const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
            const href = cap[2] ? cap[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline.anyPunctuation, '$1') : '';
            const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1') : cap[3];
            return {
                type: 'def',
                tag,
                raw: cap[0],
                href,
                title
            };
        }
    }
    table(src) {
        const cap = this.rules.block.table.exec(src);
        if (!cap) {
            return;
        }
        if (!/[:|]/.test(cap[2])) {
            // delimiter row must have a pipe (|) or colon (:) otherwise it is a setext heading
            return;
        }
        const headers = splitCells(cap[1]);
        const aligns = cap[2].replace(/^\||\| *$/g, '').split('|');
        const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : [];
        const item = {
            type: 'table',
            raw: cap[0],
            header: [],
            align: [],
            rows: []
        };
        if (headers.length !== aligns.length) {
            // header and align columns must be equal, rows can be different.
            return;
        }
        for (const align of aligns) {
            if (/^ *-+: *$/.test(align)) {
                item.align.push('right');
            }
            else if (/^ *:-+: *$/.test(align)) {
                item.align.push('center');
            }
            else if (/^ *:-+ *$/.test(align)) {
                item.align.push('left');
            }
            else {
                item.align.push(null);
            }
        }
        for (const header of headers) {
            item.header.push({
                text: header,
                tokens: this.lexer.inline(header)
            });
        }
        for (const row of rows) {
            item.rows.push(splitCells(row, item.header.length).map(cell => {
                return {
                    text: cell,
                    tokens: this.lexer.inline(cell)
                };
            }));
        }
        return item;
    }
    lheading(src) {
        const cap = this.rules.block.lheading.exec(src);
        if (cap) {
            return {
                type: 'heading',
                raw: cap[0],
                depth: cap[2].charAt(0) === '=' ? 1 : 2,
                text: cap[1],
                tokens: this.lexer.inline(cap[1])
            };
        }
    }
    paragraph(src) {
        const cap = this.rules.block.paragraph.exec(src);
        if (cap) {
            const text = cap[1].charAt(cap[1].length - 1) === '\n'
                ? cap[1].slice(0, -1)
                : cap[1];
            return {
                type: 'paragraph',
                raw: cap[0],
                text,
                tokens: this.lexer.inline(text)
            };
        }
    }
    text(src) {
        const cap = this.rules.block.text.exec(src);
        if (cap) {
            return {
                type: 'text',
                raw: cap[0],
                text: cap[0],
                tokens: this.lexer.inline(cap[0])
            };
        }
    }
    escape(src) {
        const cap = this.rules.inline.escape.exec(src);
        if (cap) {
            return {
                type: 'escape',
                raw: cap[0],
                text: escape$1(cap[1])
            };
        }
    }
    tag(src) {
        const cap = this.rules.inline.tag.exec(src);
        if (cap) {
            if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
                this.lexer.state.inLink = true;
            }
            else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
                this.lexer.state.inLink = false;
            }
            if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                this.lexer.state.inRawBlock = true;
            }
            else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
                this.lexer.state.inRawBlock = false;
            }
            return {
                type: 'html',
                raw: cap[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: false,
                text: cap[0]
            };
        }
    }
    link(src) {
        const cap = this.rules.inline.link.exec(src);
        if (cap) {
            const trimmedUrl = cap[2].trim();
            if (!this.options.pedantic && /^</.test(trimmedUrl)) {
                // commonmark requires matching angle brackets
                if (!(/>$/.test(trimmedUrl))) {
                    return;
                }
                // ending angle bracket cannot be escaped
                const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
                if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
                    return;
                }
            }
            else {
                // find closing parenthesis
                const lastParenIndex = findClosingBracket(cap[2], '()');
                if (lastParenIndex > -1) {
                    const start = cap[0].indexOf('!') === 0 ? 5 : 4;
                    const linkLen = start + cap[1].length + lastParenIndex;
                    cap[2] = cap[2].substring(0, lastParenIndex);
                    cap[0] = cap[0].substring(0, linkLen).trim();
                    cap[3] = '';
                }
            }
            let href = cap[2];
            let title = '';
            if (this.options.pedantic) {
                // split pedantic href and title
                const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
                if (link) {
                    href = link[1];
                    title = link[3];
                }
            }
            else {
                title = cap[3] ? cap[3].slice(1, -1) : '';
            }
            href = href.trim();
            if (/^</.test(href)) {
                if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
                    // pedantic allows starting angle bracket without ending angle bracket
                    href = href.slice(1);
                }
                else {
                    href = href.slice(1, -1);
                }
            }
            return outputLink(cap, {
                href: href ? href.replace(this.rules.inline.anyPunctuation, '$1') : href,
                title: title ? title.replace(this.rules.inline.anyPunctuation, '$1') : title
            }, cap[0], this.lexer);
        }
    }
    reflink(src, links) {
        let cap;
        if ((cap = this.rules.inline.reflink.exec(src))
            || (cap = this.rules.inline.nolink.exec(src))) {
            const linkString = (cap[2] || cap[1]).replace(/\s+/g, ' ');
            const link = links[linkString.toLowerCase()];
            if (!link) {
                const text = cap[0].charAt(0);
                return {
                    type: 'text',
                    raw: text,
                    text
                };
            }
            return outputLink(cap, link, cap[0], this.lexer);
        }
    }
    emStrong(src, maskedSrc, prevChar = '') {
        let match = this.rules.inline.emStrongLDelim.exec(src);
        if (!match)
            return;
        // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
        if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
            return;
        const nextChar = match[1] || match[2] || '';
        if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
            // unicode Regex counts emoji as 1 char; spread into array for proper count (used multiple times below)
            const lLength = [...match[0]].length - 1;
            let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
            const endReg = match[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            endReg.lastIndex = 0;
            // Clip maskedSrc to same section of string as src (move to lexer?)
            maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
            while ((match = endReg.exec(maskedSrc)) != null) {
                rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
                if (!rDelim)
                    continue; // skip single * in __abc*abc__
                rLength = [...rDelim].length;
                if (match[3] || match[4]) { // found another Left Delim
                    delimTotal += rLength;
                    continue;
                }
                else if (match[5] || match[6]) { // either Left or Right Delim
                    if (lLength % 3 && !((lLength + rLength) % 3)) {
                        midDelimTotal += rLength;
                        continue; // CommonMark Emphasis Rules 9-10
                    }
                }
                delimTotal -= rLength;
                if (delimTotal > 0)
                    continue; // Haven't found enough closing delimiters
                // Remove extra characters. *a*** -> *a*
                rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
                // char length can be >1 for unicode characters;
                const lastCharLength = [...match[0]][0].length;
                const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
                // Create `em` if smallest delimiter has odd char count. *a***
                if (Math.min(lLength, rLength) % 2) {
                    const text = raw.slice(1, -1);
                    return {
                        type: 'em',
                        raw,
                        text,
                        tokens: this.lexer.inlineTokens(text)
                    };
                }
                // Create 'strong' if smallest delimiter has even char count. **a***
                const text = raw.slice(2, -2);
                return {
                    type: 'strong',
                    raw,
                    text,
                    tokens: this.lexer.inlineTokens(text)
                };
            }
        }
    }
    codespan(src) {
        const cap = this.rules.inline.code.exec(src);
        if (cap) {
            let text = cap[2].replace(/\n/g, ' ');
            const hasNonSpaceChars = /[^ ]/.test(text);
            const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
            if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
                text = text.substring(1, text.length - 1);
            }
            text = escape$1(text, true);
            return {
                type: 'codespan',
                raw: cap[0],
                text
            };
        }
    }
    br(src) {
        const cap = this.rules.inline.br.exec(src);
        if (cap) {
            return {
                type: 'br',
                raw: cap[0]
            };
        }
    }
    del(src) {
        const cap = this.rules.inline.del.exec(src);
        if (cap) {
            return {
                type: 'del',
                raw: cap[0],
                text: cap[2],
                tokens: this.lexer.inlineTokens(cap[2])
            };
        }
    }
    autolink(src) {
        const cap = this.rules.inline.autolink.exec(src);
        if (cap) {
            let text, href;
            if (cap[2] === '@') {
                text = escape$1(cap[1]);
                href = 'mailto:' + text;
            }
            else {
                text = escape$1(cap[1]);
                href = text;
            }
            return {
                type: 'link',
                raw: cap[0],
                text,
                href,
                tokens: [
                    {
                        type: 'text',
                        raw: text,
                        text
                    }
                ]
            };
        }
    }
    url(src) {
        let cap;
        if (cap = this.rules.inline.url.exec(src)) {
            let text, href;
            if (cap[2] === '@') {
                text = escape$1(cap[0]);
                href = 'mailto:' + text;
            }
            else {
                // do extended autolink path validation
                let prevCapZero;
                do {
                    prevCapZero = cap[0];
                    cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? '';
                } while (prevCapZero !== cap[0]);
                text = escape$1(cap[0]);
                if (cap[1] === 'www.') {
                    href = 'http://' + cap[0];
                }
                else {
                    href = cap[0];
                }
            }
            return {
                type: 'link',
                raw: cap[0],
                text,
                href,
                tokens: [
                    {
                        type: 'text',
                        raw: text,
                        text
                    }
                ]
            };
        }
    }
    inlineText(src) {
        const cap = this.rules.inline.text.exec(src);
        if (cap) {
            let text;
            if (this.lexer.state.inRawBlock) {
                text = cap[0];
            }
            else {
                text = escape$1(cap[0]);
            }
            return {
                type: 'text',
                raw: cap[0],
                text
            };
        }
    }
}

/**
 * Block-Level Grammar
 */
const newline = /^(?: *(?:\n|$))+/;
const blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
const hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
const bullet = /(?:[*+-]|\d{1,9}[.)])/;
const lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/)
    .replace(/bull/g, bullet) // lists can interrupt
    .replace(/blockCode/g, / {4}/) // indented code blocks can interrupt
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/) // fenced code blocks can interrupt
    .replace(/blockquote/g, / {0,3}>/) // blockquote can interrupt
    .replace(/heading/g, / {0,3}#{1,6}/) // ATX heading can interrupt
    .replace(/html/g, / {0,3}<[^\n>]+>\n/) // block html can interrupt
    .getRegex();
const _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
const blockText = /^[^\n]+/;
const _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
const def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/)
    .replace('label', _blockLabel)
    .replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
    .getRegex();
const list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, bullet)
    .getRegex();
const _tag = 'address|article|aside|base|basefont|blockquote|body|caption'
    + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
    + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
    + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
    + '|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title'
    + '|tr|track|ul';
const _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
const html = edit('^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')', 'i')
    .replace('comment', _comment)
    .replace('tag', _tag)
    .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
    .getRegex();
const paragraph = edit(_paragraph)
    .replace('hr', hr)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('|lheading', '') // setext headings don't interrupt commonmark paragraphs
    .replace('|table', '')
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', _tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
const blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
    .replace('paragraph', paragraph)
    .getRegex();
/**
 * Normal Block Grammar
 */
const blockNormal = {
    blockquote,
    code: blockCode,
    def,
    fences,
    heading,
    hr,
    html,
    lheading,
    list,
    newline,
    paragraph,
    table: noopTest,
    text: blockText
};
/**
 * GFM Block Grammar
 */
const gfmTable = edit('^ *([^\\n ].*)\\n' // Header
    + ' {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)') // Cells
    .replace('hr', hr)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('blockquote', ' {0,3}>')
    .replace('code', ' {4}[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', _tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
const blockGfm = {
    ...blockNormal,
    table: gfmTable,
    paragraph: edit(_paragraph)
        .replace('hr', hr)
        .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
        .replace('|lheading', '') // setext headings don't interrupt commonmark paragraphs
        .replace('table', gfmTable) // interrupt paragraphs with table
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', _tag) // pars can be interrupted by type (6) html blocks
        .getRegex()
};
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */
const blockPedantic = {
    ...blockNormal,
    html: edit('^ *(?:comment *(?:\\n|\\s*$)'
        + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
        + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
        .replace('comment', _comment)
        .replace(/tag/g, '(?!(?:'
        + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
        + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
        + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
        .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest, // fences not supported
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: edit(_paragraph)
        .replace('hr', hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', lheading)
        .replace('|table', '')
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .replace('|tag', '')
        .getRegex()
};
/**
 * Inline-Level Grammar
 */
const escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
const inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
const br = /^( {2,}|\\)\n(?!\s*$)/;
const inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
// list of unicode punctuation marks, plus any missing characters from CommonMark spec
const _punctuation = '\\p{P}\\p{S}';
const punctuation = edit(/^((?![*_])[\spunctuation])/, 'u')
    .replace(/punctuation/g, _punctuation).getRegex();
// sequences em should skip over [title](link), `code`, <html>
const blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
const emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, 'u')
    .replace(/punct/g, _punctuation)
    .getRegex();
const emStrongRDelimAst = edit('^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)' // Skip orphan inside strong
    + '|[^*]+(?=[^*])' // Consume to delim
    + '|(?!\\*)[punct](\\*+)(?=[\\s]|$)' // (1) #*** can only be a Right Delimiter
    + '|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)' // (2) a***#, a*** can only be a Right Delimiter
    + '|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])' // (3) #***a, ***a can only be Left Delimiter
    + '|[\\s](\\*+)(?!\\*)(?=[punct])' // (4) ***# can only be Left Delimiter
    + '|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])' // (5) #***# can be either Left or Right Delimiter
    + '|[^punct\\s](\\*+)(?=[^punct\\s])', 'gu') // (6) a***a can be either Left or Right Delimiter
    .replace(/punct/g, _punctuation)
    .getRegex();
// (6) Not allowed for _
const emStrongRDelimUnd = edit('^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)' // Skip orphan inside strong
    + '|[^_]+(?=[^_])' // Consume to delim
    + '|(?!_)[punct](_+)(?=[\\s]|$)' // (1) #___ can only be a Right Delimiter
    + '|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)' // (2) a___#, a___ can only be a Right Delimiter
    + '|(?!_)[punct\\s](_+)(?=[^punct\\s])' // (3) #___a, ___a can only be Left Delimiter
    + '|[\\s](_+)(?!_)(?=[punct])' // (4) ___# can only be Left Delimiter
    + '|(?!_)[punct](_+)(?!_)(?=[punct])', 'gu') // (5) #___# can be either Left or Right Delimiter
    .replace(/punct/g, _punctuation)
    .getRegex();
const anyPunctuation = edit(/\\([punct])/, 'gu')
    .replace(/punct/g, _punctuation)
    .getRegex();
const autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace('email', /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/)
    .getRegex();
const _inlineComment = edit(_comment).replace('(?:-->|$)', '-->').getRegex();
const tag = edit('^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>') // CDATA section
    .replace('comment', _inlineComment)
    .replace('attribute', /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
    .getRegex();
const _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
const link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
    .replace('label', _inlineLabel)
    .replace('href', /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
    .replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
    .getRegex();
const reflink = edit(/^!?\[(label)\]\[(ref)\]/)
    .replace('label', _inlineLabel)
    .replace('ref', _blockLabel)
    .getRegex();
const nolink = edit(/^!?\[(ref)\](?:\[\])?/)
    .replace('ref', _blockLabel)
    .getRegex();
const reflinkSearch = edit('reflink|nolink(?!\\()', 'g')
    .replace('reflink', reflink)
    .replace('nolink', nolink)
    .getRegex();
/**
 * Normal Inline Grammar
 */
const inlineNormal = {
    _backpedal: noopTest, // only used for GFM url
    anyPunctuation,
    autolink,
    blockSkip,
    br,
    code: inlineCode,
    del: noopTest,
    emStrongLDelim,
    emStrongRDelimAst,
    emStrongRDelimUnd,
    escape,
    link,
    nolink,
    punctuation,
    reflink,
    reflinkSearch,
    tag,
    text: inlineText,
    url: noopTest
};
/**
 * Pedantic Inline Grammar
 */
const inlinePedantic = {
    ...inlineNormal,
    link: edit(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', _inlineLabel)
        .getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', _inlineLabel)
        .getRegex()
};
/**
 * GFM Inline Grammar
 */
const inlineGfm = {
    ...inlineNormal,
    escape: edit(escape).replace('])', '~|])').getRegex(),
    url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i')
        .replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
        .getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
/**
 * GFM + Line Breaks Inline Grammar
 */
const inlineBreaks = {
    ...inlineGfm,
    br: edit(br).replace('{2,}', '*').getRegex(),
    text: edit(inlineGfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex()
};
/**
 * exports
 */
const block = {
    normal: blockNormal,
    gfm: blockGfm,
    pedantic: blockPedantic
};
const inline = {
    normal: inlineNormal,
    gfm: inlineGfm,
    breaks: inlineBreaks,
    pedantic: inlinePedantic
};

/**
 * Block Lexer
 */
class _Lexer {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(options) {
        // TokenList cannot be created in one go
        this.tokens = [];
        this.tokens.links = Object.create(null);
        this.options = options || _defaults;
        this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        this.tokenizer.lexer = this;
        this.inlineQueue = [];
        this.state = {
            inLink: false,
            inRawBlock: false,
            top: true
        };
        const rules = {
            block: block.normal,
            inline: inline.normal
        };
        if (this.options.pedantic) {
            rules.block = block.pedantic;
            rules.inline = inline.pedantic;
        }
        else if (this.options.gfm) {
            rules.block = block.gfm;
            if (this.options.breaks) {
                rules.inline = inline.breaks;
            }
            else {
                rules.inline = inline.gfm;
            }
        }
        this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */
    static get rules() {
        return {
            block,
            inline
        };
    }
    /**
     * Static Lex Method
     */
    static lex(src, options) {
        const lexer = new _Lexer(options);
        return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
    static lexInline(src, options) {
        const lexer = new _Lexer(options);
        return lexer.inlineTokens(src);
    }
    /**
     * Preprocessing
     */
    lex(src) {
        src = src
            .replace(/\r\n|\r/g, '\n');
        this.blockTokens(src, this.tokens);
        for (let i = 0; i < this.inlineQueue.length; i++) {
            const next = this.inlineQueue[i];
            this.inlineTokens(next.src, next.tokens);
        }
        this.inlineQueue = [];
        return this.tokens;
    }
    blockTokens(src, tokens = []) {
        if (this.options.pedantic) {
            src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
        }
        else {
            src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
                return leading + '    '.repeat(tabs.length);
            });
        }
        let token;
        let lastToken;
        let cutSrc;
        let lastParagraphClipped;
        while (src) {
            if (this.options.extensions
                && this.options.extensions.block
                && this.options.extensions.block.some((extTokenizer) => {
                    if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) {
                continue;
            }
            // newline
            if (token = this.tokenizer.space(src)) {
                src = src.substring(token.raw.length);
                if (token.raw.length === 1 && tokens.length > 0) {
                    // if there's a single \n as a spacer, it's terminating the last line,
                    // so move it there so that we don't get unnecessary paragraph tags
                    tokens[tokens.length - 1].raw += '\n';
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            // code
            if (token = this.tokenizer.code(src)) {
                src = src.substring(token.raw.length);
                lastToken = tokens[tokens.length - 1];
                // An indented code block cannot interrupt a paragraph.
                if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                    lastToken.raw += '\n' + token.raw;
                    lastToken.text += '\n' + token.text;
                    this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            // fences
            if (token = this.tokenizer.fences(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // heading
            if (token = this.tokenizer.heading(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // hr
            if (token = this.tokenizer.hr(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // blockquote
            if (token = this.tokenizer.blockquote(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // list
            if (token = this.tokenizer.list(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // html
            if (token = this.tokenizer.html(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // def
            if (token = this.tokenizer.def(src)) {
                src = src.substring(token.raw.length);
                lastToken = tokens[tokens.length - 1];
                if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                    lastToken.raw += '\n' + token.raw;
                    lastToken.text += '\n' + token.raw;
                    this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                }
                else if (!this.tokens.links[token.tag]) {
                    this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title
                    };
                }
                continue;
            }
            // table (gfm)
            if (token = this.tokenizer.table(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // lheading
            if (token = this.tokenizer.lheading(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // top-level paragraph
            // prevent paragraph consuming extensions by clipping 'src' to extension start
            cutSrc = src;
            if (this.options.extensions && this.options.extensions.startBlock) {
                let startIndex = Infinity;
                const tempSrc = src.slice(1);
                let tempStart;
                this.options.extensions.startBlock.forEach((getStartIndex) => {
                    tempStart = getStartIndex.call({ lexer: this }, tempSrc);
                    if (typeof tempStart === 'number' && tempStart >= 0) {
                        startIndex = Math.min(startIndex, tempStart);
                    }
                });
                if (startIndex < Infinity && startIndex >= 0) {
                    cutSrc = src.substring(0, startIndex + 1);
                }
            }
            if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
                lastToken = tokens[tokens.length - 1];
                if (lastParagraphClipped && lastToken.type === 'paragraph') {
                    lastToken.raw += '\n' + token.raw;
                    lastToken.text += '\n' + token.text;
                    this.inlineQueue.pop();
                    this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                }
                else {
                    tokens.push(token);
                }
                lastParagraphClipped = (cutSrc.length !== src.length);
                src = src.substring(token.raw.length);
                continue;
            }
            // text
            if (token = this.tokenizer.text(src)) {
                src = src.substring(token.raw.length);
                lastToken = tokens[tokens.length - 1];
                if (lastToken && lastToken.type === 'text') {
                    lastToken.raw += '\n' + token.raw;
                    lastToken.text += '\n' + token.text;
                    this.inlineQueue.pop();
                    this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            if (src) {
                const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                if (this.options.silent) {
                    console.error(errMsg);
                    break;
                }
                else {
                    throw new Error(errMsg);
                }
            }
        }
        this.state.top = true;
        return tokens;
    }
    inline(src, tokens = []) {
        this.inlineQueue.push({ src, tokens });
        return tokens;
    }
    /**
     * Lexing/Compiling
     */
    inlineTokens(src, tokens = []) {
        let token, lastToken, cutSrc;
        // String with links masked to avoid interference with em and strong
        let maskedSrc = src;
        let match;
        let keepPrevChar, prevChar;
        // Mask out reflinks
        if (this.tokens.links) {
            const links = Object.keys(this.tokens.links);
            if (links.length > 0) {
                while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
                    if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
                        maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                    }
                }
            }
        }
        // Mask out other blocks
        while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        }
        // Mask out escaped characters
        while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
            maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        }
        while (src) {
            if (!keepPrevChar) {
                prevChar = '';
            }
            keepPrevChar = false;
            // extensions
            if (this.options.extensions
                && this.options.extensions.inline
                && this.options.extensions.inline.some((extTokenizer) => {
                    if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) {
                continue;
            }
            // escape
            if (token = this.tokenizer.escape(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // tag
            if (token = this.tokenizer.tag(src)) {
                src = src.substring(token.raw.length);
                lastToken = tokens[tokens.length - 1];
                if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                    lastToken.raw += token.raw;
                    lastToken.text += token.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            // link
            if (token = this.tokenizer.link(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // reflink, nolink
            if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                src = src.substring(token.raw.length);
                lastToken = tokens[tokens.length - 1];
                if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                    lastToken.raw += token.raw;
                    lastToken.text += token.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            // em & strong
            if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // code
            if (token = this.tokenizer.codespan(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // br
            if (token = this.tokenizer.br(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // del (gfm)
            if (token = this.tokenizer.del(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // autolink
            if (token = this.tokenizer.autolink(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // url (gfm)
            if (!this.state.inLink && (token = this.tokenizer.url(src))) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // text
            // prevent inlineText consuming extensions by clipping 'src' to extension start
            cutSrc = src;
            if (this.options.extensions && this.options.extensions.startInline) {
                let startIndex = Infinity;
                const tempSrc = src.slice(1);
                let tempStart;
                this.options.extensions.startInline.forEach((getStartIndex) => {
                    tempStart = getStartIndex.call({ lexer: this }, tempSrc);
                    if (typeof tempStart === 'number' && tempStart >= 0) {
                        startIndex = Math.min(startIndex, tempStart);
                    }
                });
                if (startIndex < Infinity && startIndex >= 0) {
                    cutSrc = src.substring(0, startIndex + 1);
                }
            }
            if (token = this.tokenizer.inlineText(cutSrc)) {
                src = src.substring(token.raw.length);
                if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
                    prevChar = token.raw.slice(-1);
                }
                keepPrevChar = true;
                lastToken = tokens[tokens.length - 1];
                if (lastToken && lastToken.type === 'text') {
                    lastToken.raw += token.raw;
                    lastToken.text += token.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            if (src) {
                const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                if (this.options.silent) {
                    console.error(errMsg);
                    break;
                }
                else {
                    throw new Error(errMsg);
                }
            }
        }
        return tokens;
    }
}

/**
 * Renderer
 */
class _Renderer {
    options;
    constructor(options) {
        this.options = options || _defaults;
    }
    code(code, infostring, escaped) {
        const lang = (infostring || '').match(/^\S*/)?.[0];
        code = code.replace(/\n$/, '') + '\n';
        if (!lang) {
            return '<pre><code>'
                + (escaped ? code : escape$1(code, true))
                + '</code></pre>\n';
        }
        return '<pre><code class="language-'
            + escape$1(lang)
            + '">'
            + (escaped ? code : escape$1(code, true))
            + '</code></pre>\n';
    }
    blockquote(quote) {
        return `<blockquote>\n${quote}</blockquote>\n`;
    }
    html(html, block) {
        return html;
    }
    heading(text, level, raw) {
        // ignore IDs
        return `<h${level}>${text}</h${level}>\n`;
    }
    hr() {
        return '<hr>\n';
    }
    list(body, ordered, start) {
        const type = ordered ? 'ol' : 'ul';
        const startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
        return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    }
    listitem(text, task, checked) {
        return `<li>${text}</li>\n`;
    }
    checkbox(checked) {
        return '<input '
            + (checked ? 'checked="" ' : '')
            + 'disabled="" type="checkbox">';
    }
    paragraph(text) {
        return `<p>${text}</p>\n`;
    }
    table(header, body) {
        if (body)
            body = `<tbody>${body}</tbody>`;
        return '<table>\n'
            + '<thead>\n'
            + header
            + '</thead>\n'
            + body
            + '</table>\n';
    }
    tablerow(content) {
        return `<tr>\n${content}</tr>\n`;
    }
    tablecell(content, flags) {
        const type = flags.header ? 'th' : 'td';
        const tag = flags.align
            ? `<${type} align="${flags.align}">`
            : `<${type}>`;
        return tag + content + `</${type}>\n`;
    }
    /**
     * span level renderer
     */
    strong(text) {
        return `<strong>${text}</strong>`;
    }
    em(text) {
        return `<em>${text}</em>`;
    }
    codespan(text) {
        return `<code>${text}</code>`;
    }
    br() {
        return '<br>';
    }
    del(text) {
        return `<del>${text}</del>`;
    }
    link(href, title, text) {
        const cleanHref = cleanUrl(href);
        if (cleanHref === null) {
            return text;
        }
        href = cleanHref;
        let out = '<a href="' + href + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
    }
    image(href, title, text) {
        const cleanHref = cleanUrl(href);
        if (cleanHref === null) {
            return text;
        }
        href = cleanHref;
        let out = `<img src="${href}" alt="${text}"`;
        if (title) {
            out += ` title="${title}"`;
        }
        out += '>';
        return out;
    }
    text(text) {
        return text;
    }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class _TextRenderer {
    // no need for block level renderers
    strong(text) {
        return text;
    }
    em(text) {
        return text;
    }
    codespan(text) {
        return text;
    }
    del(text) {
        return text;
    }
    html(text) {
        return text;
    }
    text(text) {
        return text;
    }
    link(href, title, text) {
        return '' + text;
    }
    image(href, title, text) {
        return '' + text;
    }
    br() {
        return '';
    }
}

/**
 * Parsing & Compiling
 */
class _Parser {
    options;
    renderer;
    textRenderer;
    constructor(options) {
        this.options = options || _defaults;
        this.options.renderer = this.options.renderer || new _Renderer();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.textRenderer = new _TextRenderer();
    }
    /**
     * Static Parse Method
     */
    static parse(tokens, options) {
        const parser = new _Parser(options);
        return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
    static parseInline(tokens, options) {
        const parser = new _Parser(options);
        return parser.parseInline(tokens);
    }
    /**
     * Parse Loop
     */
    parse(tokens, top = true) {
        let out = '';
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            // Run any renderer extensions
            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                const genericToken = token;
                const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
                if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(genericToken.type)) {
                    out += ret || '';
                    continue;
                }
            }
            switch (token.type) {
                case 'space': {
                    continue;
                }
                case 'hr': {
                    out += this.renderer.hr();
                    continue;
                }
                case 'heading': {
                    const headingToken = token;
                    out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape(this.parseInline(headingToken.tokens, this.textRenderer)));
                    continue;
                }
                case 'code': {
                    const codeToken = token;
                    out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
                    continue;
                }
                case 'table': {
                    const tableToken = token;
                    let header = '';
                    // header
                    let cell = '';
                    for (let j = 0; j < tableToken.header.length; j++) {
                        cell += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), { header: true, align: tableToken.align[j] });
                    }
                    header += this.renderer.tablerow(cell);
                    let body = '';
                    for (let j = 0; j < tableToken.rows.length; j++) {
                        const row = tableToken.rows[j];
                        cell = '';
                        for (let k = 0; k < row.length; k++) {
                            cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: tableToken.align[k] });
                        }
                        body += this.renderer.tablerow(cell);
                    }
                    out += this.renderer.table(header, body);
                    continue;
                }
                case 'blockquote': {
                    const blockquoteToken = token;
                    const body = this.parse(blockquoteToken.tokens);
                    out += this.renderer.blockquote(body);
                    continue;
                }
                case 'list': {
                    const listToken = token;
                    const ordered = listToken.ordered;
                    const start = listToken.start;
                    const loose = listToken.loose;
                    let body = '';
                    for (let j = 0; j < listToken.items.length; j++) {
                        const item = listToken.items[j];
                        const checked = item.checked;
                        const task = item.task;
                        let itemBody = '';
                        if (item.task) {
                            const checkbox = this.renderer.checkbox(!!checked);
                            if (loose) {
                                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                                    }
                                }
                                else {
                                    item.tokens.unshift({
                                        type: 'text',
                                        text: checkbox + ' '
                                    });
                                }
                            }
                            else {
                                itemBody += checkbox + ' ';
                            }
                        }
                        itemBody += this.parse(item.tokens, loose);
                        body += this.renderer.listitem(itemBody, task, !!checked);
                    }
                    out += this.renderer.list(body, ordered, start);
                    continue;
                }
                case 'html': {
                    const htmlToken = token;
                    out += this.renderer.html(htmlToken.text, htmlToken.block);
                    continue;
                }
                case 'paragraph': {
                    const paragraphToken = token;
                    out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
                    continue;
                }
                case 'text': {
                    let textToken = token;
                    let body = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
                    while (i + 1 < tokens.length && tokens[i + 1].type === 'text') {
                        textToken = tokens[++i];
                        body += '\n' + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
                    }
                    out += top ? this.renderer.paragraph(body) : body;
                    continue;
                }
                default: {
                    const errMsg = 'Token with "' + token.type + '" type was not found.';
                    if (this.options.silent) {
                        console.error(errMsg);
                        return '';
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
            }
        }
        return out;
    }
    /**
     * Parse Inline Tokens
     */
    parseInline(tokens, renderer) {
        renderer = renderer || this.renderer;
        let out = '';
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            // Run any renderer extensions
            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                const ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
                if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
                    out += ret || '';
                    continue;
                }
            }
            switch (token.type) {
                case 'escape': {
                    const escapeToken = token;
                    out += renderer.text(escapeToken.text);
                    break;
                }
                case 'html': {
                    const tagToken = token;
                    out += renderer.html(tagToken.text);
                    break;
                }
                case 'link': {
                    const linkToken = token;
                    out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
                    break;
                }
                case 'image': {
                    const imageToken = token;
                    out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
                    break;
                }
                case 'strong': {
                    const strongToken = token;
                    out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
                    break;
                }
                case 'em': {
                    const emToken = token;
                    out += renderer.em(this.parseInline(emToken.tokens, renderer));
                    break;
                }
                case 'codespan': {
                    const codespanToken = token;
                    out += renderer.codespan(codespanToken.text);
                    break;
                }
                case 'br': {
                    out += renderer.br();
                    break;
                }
                case 'del': {
                    const delToken = token;
                    out += renderer.del(this.parseInline(delToken.tokens, renderer));
                    break;
                }
                case 'text': {
                    const textToken = token;
                    out += renderer.text(textToken.text);
                    break;
                }
                default: {
                    const errMsg = 'Token with "' + token.type + '" type was not found.';
                    if (this.options.silent) {
                        console.error(errMsg);
                        return '';
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
            }
        }
        return out;
    }
}

class _Hooks {
    options;
    constructor(options) {
        this.options = options || _defaults;
    }
    static passThroughHooks = new Set([
        'preprocess',
        'postprocess',
        'processAllTokens'
    ]);
    /**
     * Process markdown before marked
     */
    preprocess(markdown) {
        return markdown;
    }
    /**
     * Process HTML after marked is finished
     */
    postprocess(html) {
        return html;
    }
    /**
     * Process all tokens before walk tokens
     */
    processAllTokens(tokens) {
        return tokens;
    }
}

class Marked {
    defaults = _getDefaults();
    options = this.setOptions;
    parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
    parseInline = this.#parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
    Parser = _Parser;
    Renderer = _Renderer;
    TextRenderer = _TextRenderer;
    Lexer = _Lexer;
    Tokenizer = _Tokenizer;
    Hooks = _Hooks;
    constructor(...args) {
        this.use(...args);
    }
    /**
     * Run callback for every token
     */
    walkTokens(tokens, callback) {
        let values = [];
        for (const token of tokens) {
            values = values.concat(callback.call(this, token));
            switch (token.type) {
                case 'table': {
                    const tableToken = token;
                    for (const cell of tableToken.header) {
                        values = values.concat(this.walkTokens(cell.tokens, callback));
                    }
                    for (const row of tableToken.rows) {
                        for (const cell of row) {
                            values = values.concat(this.walkTokens(cell.tokens, callback));
                        }
                    }
                    break;
                }
                case 'list': {
                    const listToken = token;
                    values = values.concat(this.walkTokens(listToken.items, callback));
                    break;
                }
                default: {
                    const genericToken = token;
                    if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
                        this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
                            const tokens = genericToken[childTokens].flat(Infinity);
                            values = values.concat(this.walkTokens(tokens, callback));
                        });
                    }
                    else if (genericToken.tokens) {
                        values = values.concat(this.walkTokens(genericToken.tokens, callback));
                    }
                }
            }
        }
        return values;
    }
    use(...args) {
        const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
        args.forEach((pack) => {
            // copy options to new object
            const opts = { ...pack };
            // set async to true if it was set to true before
            opts.async = this.defaults.async || opts.async || false;
            // ==-- Parse "addon" extensions --== //
            if (pack.extensions) {
                pack.extensions.forEach((ext) => {
                    if (!ext.name) {
                        throw new Error('extension name required');
                    }
                    if ('renderer' in ext) { // Renderer extensions
                        const prevRenderer = extensions.renderers[ext.name];
                        if (prevRenderer) {
                            // Replace extension with func to run new extension but fall back if false
                            extensions.renderers[ext.name] = function (...args) {
                                let ret = ext.renderer.apply(this, args);
                                if (ret === false) {
                                    ret = prevRenderer.apply(this, args);
                                }
                                return ret;
                            };
                        }
                        else {
                            extensions.renderers[ext.name] = ext.renderer;
                        }
                    }
                    if ('tokenizer' in ext) { // Tokenizer Extensions
                        if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
                            throw new Error("extension level must be 'block' or 'inline'");
                        }
                        const extLevel = extensions[ext.level];
                        if (extLevel) {
                            extLevel.unshift(ext.tokenizer);
                        }
                        else {
                            extensions[ext.level] = [ext.tokenizer];
                        }
                        if (ext.start) { // Function to check for start of token
                            if (ext.level === 'block') {
                                if (extensions.startBlock) {
                                    extensions.startBlock.push(ext.start);
                                }
                                else {
                                    extensions.startBlock = [ext.start];
                                }
                            }
                            else if (ext.level === 'inline') {
                                if (extensions.startInline) {
                                    extensions.startInline.push(ext.start);
                                }
                                else {
                                    extensions.startInline = [ext.start];
                                }
                            }
                        }
                    }
                    if ('childTokens' in ext && ext.childTokens) { // Child tokens to be visited by walkTokens
                        extensions.childTokens[ext.name] = ext.childTokens;
                    }
                });
                opts.extensions = extensions;
            }
            // ==-- Parse "overwrite" extensions --== //
            if (pack.renderer) {
                const renderer = this.defaults.renderer || new _Renderer(this.defaults);
                for (const prop in pack.renderer) {
                    if (!(prop in renderer)) {
                        throw new Error(`renderer '${prop}' does not exist`);
                    }
                    if (prop === 'options') {
                        // ignore options property
                        continue;
                    }
                    const rendererProp = prop;
                    const rendererFunc = pack.renderer[rendererProp];
                    const prevRenderer = renderer[rendererProp];
                    // Replace renderer with func to run extension, but fall back if false
                    renderer[rendererProp] = (...args) => {
                        let ret = rendererFunc.apply(renderer, args);
                        if (ret === false) {
                            ret = prevRenderer.apply(renderer, args);
                        }
                        return ret || '';
                    };
                }
                opts.renderer = renderer;
            }
            if (pack.tokenizer) {
                const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
                for (const prop in pack.tokenizer) {
                    if (!(prop in tokenizer)) {
                        throw new Error(`tokenizer '${prop}' does not exist`);
                    }
                    if (['options', 'rules', 'lexer'].includes(prop)) {
                        // ignore options, rules, and lexer properties
                        continue;
                    }
                    const tokenizerProp = prop;
                    const tokenizerFunc = pack.tokenizer[tokenizerProp];
                    const prevTokenizer = tokenizer[tokenizerProp];
                    // Replace tokenizer with func to run extension, but fall back if false
                    // @ts-expect-error cannot type tokenizer function dynamically
                    tokenizer[tokenizerProp] = (...args) => {
                        let ret = tokenizerFunc.apply(tokenizer, args);
                        if (ret === false) {
                            ret = prevTokenizer.apply(tokenizer, args);
                        }
                        return ret;
                    };
                }
                opts.tokenizer = tokenizer;
            }
            // ==-- Parse Hooks extensions --== //
            if (pack.hooks) {
                const hooks = this.defaults.hooks || new _Hooks();
                for (const prop in pack.hooks) {
                    if (!(prop in hooks)) {
                        throw new Error(`hook '${prop}' does not exist`);
                    }
                    if (prop === 'options') {
                        // ignore options property
                        continue;
                    }
                    const hooksProp = prop;
                    const hooksFunc = pack.hooks[hooksProp];
                    const prevHook = hooks[hooksProp];
                    if (_Hooks.passThroughHooks.has(prop)) {
                        // @ts-expect-error cannot type hook function dynamically
                        hooks[hooksProp] = (arg) => {
                            if (this.defaults.async) {
                                return Promise.resolve(hooksFunc.call(hooks, arg)).then(ret => {
                                    return prevHook.call(hooks, ret);
                                });
                            }
                            const ret = hooksFunc.call(hooks, arg);
                            return prevHook.call(hooks, ret);
                        };
                    }
                    else {
                        // @ts-expect-error cannot type hook function dynamically
                        hooks[hooksProp] = (...args) => {
                            let ret = hooksFunc.apply(hooks, args);
                            if (ret === false) {
                                ret = prevHook.apply(hooks, args);
                            }
                            return ret;
                        };
                    }
                }
                opts.hooks = hooks;
            }
            // ==-- Parse WalkTokens extensions --== //
            if (pack.walkTokens) {
                const walkTokens = this.defaults.walkTokens;
                const packWalktokens = pack.walkTokens;
                opts.walkTokens = function (token) {
                    let values = [];
                    values.push(packWalktokens.call(this, token));
                    if (walkTokens) {
                        values = values.concat(walkTokens.call(this, token));
                    }
                    return values;
                };
            }
            this.defaults = { ...this.defaults, ...opts };
        });
        return this;
    }
    setOptions(opt) {
        this.defaults = { ...this.defaults, ...opt };
        return this;
    }
    lexer(src, options) {
        return _Lexer.lex(src, options ?? this.defaults);
    }
    parser(tokens, options) {
        return _Parser.parse(tokens, options ?? this.defaults);
    }
    #parseMarkdown(lexer, parser) {
        return (src, options) => {
            const origOpt = { ...options };
            const opt = { ...this.defaults, ...origOpt };
            // Show warning if an extension set async to true but the parse was called with async: false
            if (this.defaults.async === true && origOpt.async === false) {
                if (!opt.silent) {
                    console.warn('marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.');
                }
                opt.async = true;
            }
            const throwError = this.#onError(!!opt.silent, !!opt.async);
            // throw error in case of non string input
            if (typeof src === 'undefined' || src === null) {
                return throwError(new Error('marked(): input parameter is undefined or null'));
            }
            if (typeof src !== 'string') {
                return throwError(new Error('marked(): input parameter is of type '
                    + Object.prototype.toString.call(src) + ', string expected'));
            }
            if (opt.hooks) {
                opt.hooks.options = opt;
            }
            if (opt.async) {
                return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src)
                    .then(src => lexer(src, opt))
                    .then(tokens => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens)
                    .then(tokens => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens)
                    .then(tokens => parser(tokens, opt))
                    .then(html => opt.hooks ? opt.hooks.postprocess(html) : html)
                    .catch(throwError);
            }
            try {
                if (opt.hooks) {
                    src = opt.hooks.preprocess(src);
                }
                let tokens = lexer(src, opt);
                if (opt.hooks) {
                    tokens = opt.hooks.processAllTokens(tokens);
                }
                if (opt.walkTokens) {
                    this.walkTokens(tokens, opt.walkTokens);
                }
                let html = parser(tokens, opt);
                if (opt.hooks) {
                    html = opt.hooks.postprocess(html);
                }
                return html;
            }
            catch (e) {
                return throwError(e);
            }
        };
    }
    #onError(silent, async) {
        return (e) => {
            e.message += '\nPlease report this to https://github.com/markedjs/marked.';
            if (silent) {
                const msg = '<p>An error occurred:</p><pre>'
                    + escape$1(e.message + '', true)
                    + '</pre>';
                if (async) {
                    return Promise.resolve(msg);
                }
                return msg;
            }
            if (async) {
                return Promise.reject(e);
            }
            throw e;
        };
    }
}

const markedInstance = new Marked();
function marked(src, opt) {
    return markedInstance.parse(src, opt);
}
/**
 * Sets the default options.
 *
 * @param options Hash of options
 */
marked.options =
    marked.setOptions = function (options) {
        markedInstance.setOptions(options);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
/**
 * Gets the original marked default options.
 */
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
/**
 * Use Extension
 */
marked.use = function (...args) {
    markedInstance.use(...args);
    marked.defaults = markedInstance.defaults;
    changeDefaults(marked.defaults);
    return marked;
};
/**
 * Run callback for every token
 */
marked.walkTokens = function (tokens, callback) {
    return markedInstance.walkTokens(tokens, callback);
};
/**
 * Compiles markdown to HTML without enclosing `p` tag.
 *
 * @param src String of markdown source to be compiled
 * @param options Hash of options
 * @return String of compiled HTML
 */
marked.parseInline = markedInstance.parseInline;
/**
 * Expose
 */
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = marked;
const parser = _Parser.parse;
const lexer = _Lexer.lex;


//# sourceMappingURL=marked.esm.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./assets/shop/entrypoint.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat */ "./assets/shop/chat.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@hotwired/stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _controllers_ChatController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/ChatController */ "./assets/shop/controllers/ChatController.js");
// Shop entrypoint




// Register Stimulus controllers
var application = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@hotwired/stimulus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).start();
application.register('chat', _controllers_ChatController__WEBPACK_IMPORTED_MODULE_2__["default"]);

// Expose parseMarkdown globally for inline script usage (kept for backward compatibility)
window.ChatMarkdown = {
  parseMarkdown: _chat__WEBPACK_IMPORTED_MODULE_0__.parseMarkdown
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLElBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxJQUFJLElBQUksZUFBZSxTQUFTLEtBQUs7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxFQUFFLEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxJQUFJLHlCQUF5QixhQUFhLElBQUk7QUFDekcsbURBQW1ELElBQUkseUJBQXlCLFNBQVMsR0FBRyxTQUFTLEdBQUcsV0FBVyxHQUFHO0FBQ3RILDREQUE0RCxJQUFJLHlCQUF5QjtBQUN6Riw2REFBNkQsSUFBSSx5QkFBeUI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELElBQUksTUFBTSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsRUFBRSxHQUFHLEdBQUc7QUFDNUQsNENBQTRDLEVBQUUsR0FBRyxFQUFFO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekIsbUJBQW1CLElBQUksR0FBRyxHQUFHLHNCQUFzQixHQUFHLDZDQUE2QyxJQUFJO0FBQ3ZHLGVBQWUsSUFBSSxhQUFhLEdBQUcsYUFBYSxHQUFHLGNBQWMsR0FBRztBQUNwRSxvQkFBb0IsSUFBSSxHQUFHLElBQUk7QUFDL0IsNEJBQTRCLElBQUk7QUFDaEMsbUpBQW1KLElBQUk7QUFDdko7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQywyQkFBMkIsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHO0FBQzdDLCtCQUErQixJQUFJO0FBQ25DLDRCQUE0QixJQUFJLEVBQUUsSUFBSTtBQUN0Qyx5QkFBeUIsSUFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixJQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJLEVBQUUsSUFBSTtBQUNyQztBQUNBO0FBQ0EsOEJBQThCLElBQUk7QUFDbEMsMEJBQTBCLElBQUksS0FBSyxHQUFHLGtCQUFrQixHQUFHO0FBQzNELHdCQUF3QixJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixJQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxFQUFFLElBQUk7QUFDckMsOEJBQThCLElBQUk7QUFDbEMsd0JBQXdCLEVBQUU7QUFDMUIsMEJBQTBCLElBQUksS0FBSyxHQUFHLGtCQUFrQixHQUFHO0FBQzNELHdCQUF3QixJQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSSxFQUFFLElBQUk7QUFDekM7QUFDQTtBQUNBLGtDQUFrQyxJQUFJO0FBQ3RDLDhCQUE4QixJQUFJLEtBQUssR0FBRyxrQkFBa0IsR0FBRztBQUMvRCw0QkFBNEIsSUFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxHQUFHO0FBQzlDLG9FQUFvRSxHQUFHO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUk7QUFDdEI7QUFDQSx5QkFBeUIsSUFBSTtBQUM3QjtBQUNBO0FBQ0EsaUNBQWlDLEtBQUs7QUFDdEM7QUFDQTtBQUNBLGtDQUFrQyxJQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxlQUFlLEVBQUU7QUFDeEQ7QUFDQSxnQkFBZ0IsR0FBRztBQUNuQixzQ0FBc0MsR0FBRyw4Q0FBOEMsR0FBRztBQUMxRjtBQUNBLDBCQUEwQixFQUFFLElBQUksRUFBRTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxLQUFLO0FBQ3BELGlEQUFpRCxFQUFFLGtDQUFrQyxLQUFLLDZDQUE2QyxLQUFLO0FBQzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNDQUFzQyxVQUFVO0FBQzVFO0FBQ0EsaUNBQWlDLEdBQUcsaUNBQWlDLEdBQUcsNkVBQTZFLEdBQUcsK0JBQStCLEdBQUcsZ0NBQWdDLEdBQUc7QUFDN047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEdBQUc7QUFDOUI7QUFDQSxpQ0FBaUMsR0FBRztBQUNwQyxvQkFBb0IsSUFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxhQUFhO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsS0FBSztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyUjtBQUMzUjs7Ozs7OztVQy8zRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3VDO0FBQ1U7QUFDUzs7QUFFMUQ7QUFDQSxJQUFNNkYsV0FBVyxHQUFHRixpSkFBVyxDQUFDRyxLQUFLLENBQUMsQ0FBQztBQUN2Q0QsV0FBVyxDQUFDRSxRQUFRLENBQUMsTUFBTSxFQUFFSCxtRUFBYyxDQUFDOztBQUU1QztBQUNBaEMsTUFBTSxDQUFDb0MsWUFBWSxHQUFHO0VBQUVoTCxhQUFhLEVBQWJBLGdEQUFhQTtBQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2d1aXppd2ViLXN5bGl1cy1zaG9wcGluZy1hc3Npc3RhbnQtcGx1Z2luLy4vYXNzZXRzL3Nob3AvY2hhdC5qcyIsIndlYnBhY2s6Ly9ndWl6aXdlYi1zeWxpdXMtc2hvcHBpbmctYXNzaXN0YW50LXBsdWdpbi8uL2Fzc2V0cy9zaG9wL2NvbnRyb2xsZXJzL0NoYXRDb250cm9sbGVyLmpzIiwid2VicGFjazovL2d1aXppd2ViLXN5bGl1cy1zaG9wcGluZy1hc3Npc3RhbnQtcGx1Z2luLy4vbm9kZV9tb2R1bGVzL21hcmtlZC9saWIvbWFya2VkLmVzbS5qcyIsIndlYnBhY2s6Ly9ndWl6aXdlYi1zeWxpdXMtc2hvcHBpbmctYXNzaXN0YW50LXBsdWdpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndWl6aXdlYi1zeWxpdXMtc2hvcHBpbmctYXNzaXN0YW50LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3Vpeml3ZWItc3lsaXVzLXNob3BwaW5nLWFzc2lzdGFudC1wbHVnaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ndWl6aXdlYi1zeWxpdXMtc2hvcHBpbmctYXNzaXN0YW50LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2d1aXppd2ViLXN5bGl1cy1zaG9wcGluZy1hc3Npc3RhbnQtcGx1Z2luLy4vYXNzZXRzL3Nob3AvZW50cnlwb2ludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXJrZWQgfSBmcm9tICdtYXJrZWQnO1xuXG4vLyBDb25maWd1cmUgbWFya2VkIGZvciBzYWZlIHJlbmRlcmluZ1xubWFya2VkLnNldE9wdGlvbnMoe1xuICAgIGJyZWFrczogdHJ1ZSwgLy8gQ29udmVydCBcXG4gdG8gPGJyPlxuICAgIGdmbTogdHJ1ZSwgICAgLy8gR2l0SHViIEZsYXZvcmVkIE1hcmtkb3duXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWFya2Rvd24odGV4dCkge1xuICAgIGlmICghdGV4dCkgcmV0dXJuIHRleHQ7XG5cbiAgICAvLyBVc2UgbWFya2VkIHRvIHBhcnNlIG1hcmtkb3duXG4gICAgcmV0dXJuIG1hcmtlZC5wYXJzZSh0ZXh0LCB7IGFzeW5jOiBmYWxzZSB9KTtcbn0iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCB7IHBhcnNlTWFya2Rvd24gfSBmcm9tICcuLi9jaGF0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFsnbWVzc2FnZXMnLCAnaW5wdXQnLCAnc3VibWl0JywgJ2Zvcm0nXTtcbiAgICBzdGF0aWMgdmFsdWVzID0ge1xuICAgICAgICBzdHJlYW1Vcmw6IFN0cmluZyxcbiAgICAgICAgcHJvZHVjdENhcmRzVXJsOiBTdHJpbmcsXG4gICAgfTtcblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMucGFyc2VFeGlzdGluZ01lc3NhZ2VzKCk7XG4gICAgICAgIHRoaXMucmVvcGVuQ2hhdElmTmVlZGVkKCk7XG4gICAgfVxuXG4gICAgcGFyc2VFeGlzdGluZ01lc3NhZ2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzTWVzc2FnZXNUYXJnZXQpIHJldHVybjtcblxuICAgICAgICB0aGlzLm1lc3NhZ2VzVGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGF0LW1lc3NhZ2VfX2NvbnRlbnQnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHBhcnNlTWFya2Rvd24oZWwudGV4dENvbnRlbnQudHJpbSgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVvcGVuQ2hhdElmTmVlZGVkKCkge1xuICAgICAgICBjb25zdCBzaG91bGRSZW9wZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjaGF0X2tlZXBfb3BlbicpID09PSAndHJ1ZSc7XG4gICAgICAgIGlmICghc2hvdWxkUmVvcGVuKSByZXR1cm47XG5cbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnY2hhdF9rZWVwX29wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXRPZmZjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2ZmY2FudmFzQ2hhdCcpO1xuICAgICAgICAgICAgaWYgKGNoYXRPZmZjYW52YXMgJiYgdHlwZW9mIGJvb3RzdHJhcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBic09mZmNhbnZhcyA9IG5ldyBib290c3RyYXAuT2ZmY2FudmFzKGNoYXRPZmZjYW52YXMpO1xuICAgICAgICAgICAgICAgIGJzT2ZmY2FudmFzLnNob3coKTtcbiAgICAgICAgICAgICAgICBjaGF0T2ZmY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm9mZmNhbnZhcycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuaW5wdXRUYXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICBpZiAoIW1lc3NhZ2UpIHJldHVybjtcblxuICAgICAgICAvLyBEaXNhYmxlIGZvcm0gZHVyaW5nIHJlcXVlc3RcbiAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3VibWl0VGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBBZGQgdXNlciBtZXNzYWdlXG4gICAgICAgIHRoaXMuYWRkTWVzc2FnZSgndXNlcicsIG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFzc2lzdGFudCBtZXNzYWdlXG4gICAgICAgIGNvbnN0IGFzc2lzdGFudEVsID0gdGhpcy5hZGRNZXNzYWdlKCdhc3Npc3RhbnQnLCAnJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5zdHJlYW1VcmxWYWx1ZX0/bWVzc2FnZT0ke2VuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKX1gLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhc3Npc3RhbnRFbC5jbGFzc05hbWUgPSAnY2hhdC1tZXNzYWdlIGNoYXQtbWVzc2FnZS0tZXJyb3InO1xuICAgICAgICAgICAgICAgIGFzc2lzdGFudEVsLnF1ZXJ5U2VsZWN0b3IoJy5jaGF0LW1lc3NhZ2VfX2NvbnRlbnQnKS50ZXh0Q29udGVudCA9IGRhdGEuZXJyb3I7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEaXNwbGF5IHJlc3BvbnNlXG4gICAgICAgICAgICBhc3Npc3RhbnRFbC5xdWVyeVNlbGVjdG9yKCcuY2hhdC1tZXNzYWdlX19jb250ZW50JykuaW5uZXJIVE1MID0gcGFyc2VNYXJrZG93bihkYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIHByb2R1Y3RzIGlmIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChkYXRhLnByb2R1Y3RzICYmIGRhdGEucHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFByb2R1Y3RDYXJkcyhkYXRhLnByb2R1Y3RzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIHJlZGlyZWN0IGlmIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0X3VybCkge1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NoYXRfa2VlcF9vcGVuJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS5yZWRpcmVjdF91cmwsIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2hhdCBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICBhc3Npc3RhbnRFbC5jbGFzc05hbWUgPSAnY2hhdC1tZXNzYWdlIGNoYXQtbWVzc2FnZS0tZXJyb3InO1xuICAgICAgICAgICAgYXNzaXN0YW50RWwucXVlcnlTZWxlY3RvcignLmNoYXQtbWVzc2FnZV9fY29udGVudCcpLnRleHRDb250ZW50ID0gJ0Nvbm5lY3Rpb24gZXJyb3InO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFRhcmdldC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRUYXJnZXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUYXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE1lc3NhZ2Uocm9sZSwgY29udGVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzTWVzc2FnZXNUYXJnZXQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gYGNoYXQtbWVzc2FnZSBjaGF0LW1lc3NhZ2UtLSR7cm9sZX1gO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjaGF0LW1lc3NhZ2VfX2NvbnRlbnRcIj4ke2NvbnRlbnR9PC9kaXY+YDtcbiAgICAgICAgdGhpcy5tZXNzYWdlc1RhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkUHJvZHVjdENhcmRzKHNsdWdzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMucHJvZHVjdENhcmRzVXJsVmFsdWUsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc2x1Z3MgfSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmh0bWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NoYXQtcHJvZHVjdHMnO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXN1bHQuaHRtbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzVGFyZ2V0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBwcm9kdWN0IGNhcmRzOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNNZXNzYWdlc1RhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1RhcmdldC5zY3JvbGxUb3AgPSB0aGlzLm1lc3NhZ2VzVGFyZ2V0LnNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIG1hcmtlZCB2MTIuMC4yIC0gYSBtYXJrZG93biBwYXJzZXJcbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDI0LCBDaHJpc3RvcGhlciBKZWZmcmV5LiAoTUlUIExpY2Vuc2VkKVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcmtlZGpzL21hcmtlZFxuICovXG5cbi8qKlxuICogRE8gTk9UIEVESVQgVEhJUyBGSUxFXG4gKiBUaGUgY29kZSBpbiB0aGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGZyb20gZmlsZXMgaW4gLi9zcmMvXG4gKi9cblxuLyoqXG4gKiBHZXRzIHRoZSBvcmlnaW5hbCBtYXJrZWQgZGVmYXVsdCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBfZ2V0RGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgICBicmVha3M6IGZhbHNlLFxuICAgICAgICBleHRlbnNpb25zOiBudWxsLFxuICAgICAgICBnZm06IHRydWUsXG4gICAgICAgIGhvb2tzOiBudWxsLFxuICAgICAgICBwZWRhbnRpYzogZmFsc2UsXG4gICAgICAgIHJlbmRlcmVyOiBudWxsLFxuICAgICAgICBzaWxlbnQ6IGZhbHNlLFxuICAgICAgICB0b2tlbml6ZXI6IG51bGwsXG4gICAgICAgIHdhbGtUb2tlbnM6IG51bGxcbiAgICB9O1xufVxubGV0IF9kZWZhdWx0cyA9IF9nZXREZWZhdWx0cygpO1xuZnVuY3Rpb24gY2hhbmdlRGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgICBfZGVmYXVsdHMgPSBuZXdEZWZhdWx0cztcbn1cblxuLyoqXG4gKiBIZWxwZXJzXG4gKi9cbmNvbnN0IGVzY2FwZVRlc3QgPSAvWyY8PlwiJ10vO1xuY29uc3QgZXNjYXBlUmVwbGFjZSA9IG5ldyBSZWdFeHAoZXNjYXBlVGVzdC5zb3VyY2UsICdnJyk7XG5jb25zdCBlc2NhcGVUZXN0Tm9FbmNvZGUgPSAvWzw+XCInXXwmKD8hKCNcXGR7MSw3fXwjW1h4XVthLWZBLUYwLTldezEsNn18XFx3Kyk7KS87XG5jb25zdCBlc2NhcGVSZXBsYWNlTm9FbmNvZGUgPSBuZXcgUmVnRXhwKGVzY2FwZVRlc3ROb0VuY29kZS5zb3VyY2UsICdnJyk7XG5jb25zdCBlc2NhcGVSZXBsYWNlbWVudHMgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnXG59O1xuY29uc3QgZ2V0RXNjYXBlUmVwbGFjZW1lbnQgPSAoY2gpID0+IGVzY2FwZVJlcGxhY2VtZW50c1tjaF07XG5mdW5jdGlvbiBlc2NhcGUkMShodG1sLCBlbmNvZGUpIHtcbiAgICBpZiAoZW5jb2RlKSB7XG4gICAgICAgIGlmIChlc2NhcGVUZXN0LnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoZXNjYXBlUmVwbGFjZSwgZ2V0RXNjYXBlUmVwbGFjZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZXNjYXBlVGVzdE5vRW5jb2RlLnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoZXNjYXBlUmVwbGFjZU5vRW5jb2RlLCBnZXRFc2NhcGVSZXBsYWNlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG59XG5jb25zdCB1bmVzY2FwZVRlc3QgPSAvJigjKD86XFxkKyl8KD86I3hbMC05QS1GYS1mXSspfCg/OlxcdyspKTs/L2lnO1xuZnVuY3Rpb24gdW5lc2NhcGUoaHRtbCkge1xuICAgIC8vIGV4cGxpY2l0bHkgbWF0Y2ggZGVjaW1hbCwgaGV4LCBhbmQgbmFtZWQgSFRNTCBlbnRpdGllc1xuICAgIHJldHVybiBodG1sLnJlcGxhY2UodW5lc2NhcGVUZXN0LCAoXywgbikgPT4ge1xuICAgICAgICBuID0gbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAobiA9PT0gJ2NvbG9uJylcbiAgICAgICAgICAgIHJldHVybiAnOic7XG4gICAgICAgIGlmIChuLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICByZXR1cm4gbi5jaGFyQXQoMSkgPT09ICd4J1xuICAgICAgICAgICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChuLnN1YnN0cmluZygyKSwgMTYpKVxuICAgICAgICAgICAgICAgIDogU3RyaW5nLmZyb21DaGFyQ29kZSgrbi5zdWJzdHJpbmcoMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbn1cbmNvbnN0IGNhcmV0ID0gLyhefFteXFxbXSlcXF4vZztcbmZ1bmN0aW9uIGVkaXQocmVnZXgsIG9wdCkge1xuICAgIGxldCBzb3VyY2UgPSB0eXBlb2YgcmVnZXggPT09ICdzdHJpbmcnID8gcmVnZXggOiByZWdleC5zb3VyY2U7XG4gICAgb3B0ID0gb3B0IHx8ICcnO1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgcmVwbGFjZTogKG5hbWUsIHZhbCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbFNvdXJjZSA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsIDogdmFsLnNvdXJjZTtcbiAgICAgICAgICAgIHZhbFNvdXJjZSA9IHZhbFNvdXJjZS5yZXBsYWNlKGNhcmV0LCAnJDEnKTtcbiAgICAgICAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKG5hbWUsIHZhbFNvdXJjZSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LFxuICAgICAgICBnZXRSZWdleDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoc291cmNlLCBvcHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gY2xlYW5VcmwoaHJlZikge1xuICAgIHRyeSB7XG4gICAgICAgIGhyZWYgPSBlbmNvZGVVUkkoaHJlZikucmVwbGFjZSgvJTI1L2csICclJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaHJlZjtcbn1cbmNvbnN0IG5vb3BUZXN0ID0geyBleGVjOiAoKSA9PiBudWxsIH07XG5mdW5jdGlvbiBzcGxpdENlbGxzKHRhYmxlUm93LCBjb3VudCkge1xuICAgIC8vIGVuc3VyZSB0aGF0IGV2ZXJ5IGNlbGwtZGVsaW1pdGluZyBwaXBlIGhhcyBhIHNwYWNlXG4gICAgLy8gYmVmb3JlIGl0IHRvIGRpc3Rpbmd1aXNoIGl0IGZyb20gYW4gZXNjYXBlZCBwaXBlXG4gICAgY29uc3Qgcm93ID0gdGFibGVSb3cucmVwbGFjZSgvXFx8L2csIChtYXRjaCwgb2Zmc2V0LCBzdHIpID0+IHtcbiAgICAgICAgbGV0IGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGN1cnIgPSBvZmZzZXQ7XG4gICAgICAgIHdoaWxlICgtLWN1cnIgPj0gMCAmJiBzdHJbY3Vycl0gPT09ICdcXFxcJylcbiAgICAgICAgICAgIGVzY2FwZWQgPSAhZXNjYXBlZDtcbiAgICAgICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgICAgICAgIC8vIG9kZCBudW1iZXIgb2Ygc2xhc2hlcyBtZWFucyB8IGlzIGVzY2FwZWRcbiAgICAgICAgICAgIC8vIHNvIHdlIGxlYXZlIGl0IGFsb25lXG4gICAgICAgICAgICByZXR1cm4gJ3wnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gYWRkIHNwYWNlIGJlZm9yZSB1bmVzY2FwZWQgfFxuICAgICAgICAgICAgcmV0dXJuICcgfCc7XG4gICAgICAgIH1cbiAgICB9KSwgY2VsbHMgPSByb3cuc3BsaXQoLyBcXHwvKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgLy8gRmlyc3QvbGFzdCBjZWxsIGluIGEgcm93IGNhbm5vdCBiZSBlbXB0eSBpZiBpdCBoYXMgbm8gbGVhZGluZy90cmFpbGluZyBwaXBlXG4gICAgaWYgKCFjZWxsc1swXS50cmltKCkpIHtcbiAgICAgICAgY2VsbHMuc2hpZnQoKTtcbiAgICB9XG4gICAgaWYgKGNlbGxzLmxlbmd0aCA+IDAgJiYgIWNlbGxzW2NlbGxzLmxlbmd0aCAtIDFdLnRyaW0oKSkge1xuICAgICAgICBjZWxscy5wb3AoKTtcbiAgICB9XG4gICAgaWYgKGNvdW50KSB7XG4gICAgICAgIGlmIChjZWxscy5sZW5ndGggPiBjb3VudCkge1xuICAgICAgICAgICAgY2VsbHMuc3BsaWNlKGNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChjZWxscy5sZW5ndGggPCBjb3VudClcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGxlYWRpbmcgb3IgdHJhaWxpbmcgd2hpdGVzcGFjZSBpcyBpZ25vcmVkIHBlciB0aGUgZ2ZtIHNwZWNcbiAgICAgICAgY2VsbHNbaV0gPSBjZWxsc1tpXS50cmltKCkucmVwbGFjZSgvXFxcXFxcfC9nLCAnfCcpO1xuICAgIH1cbiAgICByZXR1cm4gY2VsbHM7XG59XG4vKipcbiAqIFJlbW92ZSB0cmFpbGluZyAnYydzLiBFcXVpdmFsZW50IHRvIHN0ci5yZXBsYWNlKC9jKiQvLCAnJykuXG4gKiAvYyokLyBpcyB2dWxuZXJhYmxlIHRvIFJFRE9TLlxuICpcbiAqIEBwYXJhbSBzdHJcbiAqIEBwYXJhbSBjXG4gKiBAcGFyYW0gaW52ZXJ0IFJlbW92ZSBzdWZmaXggb2Ygbm9uLWMgY2hhcnMgaW5zdGVhZC4gRGVmYXVsdCBmYWxzZXkuXG4gKi9cbmZ1bmN0aW9uIHJ0cmltKHN0ciwgYywgaW52ZXJ0KSB7XG4gICAgY29uc3QgbCA9IHN0ci5sZW5ndGg7XG4gICAgaWYgKGwgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICAvLyBMZW5ndGggb2Ygc3VmZml4IG1hdGNoaW5nIHRoZSBpbnZlcnQgY29uZGl0aW9uLlxuICAgIGxldCBzdWZmTGVuID0gMDtcbiAgICAvLyBTdGVwIGxlZnQgdW50aWwgd2UgZmFpbCB0byBtYXRjaCB0aGUgaW52ZXJ0IGNvbmRpdGlvbi5cbiAgICB3aGlsZSAoc3VmZkxlbiA8IGwpIHtcbiAgICAgICAgY29uc3QgY3VyckNoYXIgPSBzdHIuY2hhckF0KGwgLSBzdWZmTGVuIC0gMSk7XG4gICAgICAgIGlmIChjdXJyQ2hhciA9PT0gYyAmJiAhaW52ZXJ0KSB7XG4gICAgICAgICAgICBzdWZmTGVuKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3VyckNoYXIgIT09IGMgJiYgaW52ZXJ0KSB7XG4gICAgICAgICAgICBzdWZmTGVuKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyLnNsaWNlKDAsIGwgLSBzdWZmTGVuKTtcbn1cbmZ1bmN0aW9uIGZpbmRDbG9zaW5nQnJhY2tldChzdHIsIGIpIHtcbiAgICBpZiAoc3RyLmluZGV4T2YoYlsxXSkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgbGV0IGxldmVsID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHJbaV0gPT09IGJbMF0pIHtcbiAgICAgICAgICAgIGxldmVsKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RyW2ldID09PSBiWzFdKSB7XG4gICAgICAgICAgICBsZXZlbC0tO1xuICAgICAgICAgICAgaWYgKGxldmVsIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gb3V0cHV0TGluayhjYXAsIGxpbmssIHJhdywgbGV4ZXIpIHtcbiAgICBjb25zdCBocmVmID0gbGluay5ocmVmO1xuICAgIGNvbnN0IHRpdGxlID0gbGluay50aXRsZSA/IGVzY2FwZSQxKGxpbmsudGl0bGUpIDogbnVsbDtcbiAgICBjb25zdCB0ZXh0ID0gY2FwWzFdLnJlcGxhY2UoL1xcXFwoW1xcW1xcXV0pL2csICckMScpO1xuICAgIGlmIChjYXBbMF0uY2hhckF0KDApICE9PSAnIScpIHtcbiAgICAgICAgbGV4ZXIuc3RhdGUuaW5MaW5rID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB7XG4gICAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgICByYXcsXG4gICAgICAgICAgICBocmVmLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgdG9rZW5zOiBsZXhlci5pbmxpbmVUb2tlbnModGV4dClcbiAgICAgICAgfTtcbiAgICAgICAgbGV4ZXIuc3RhdGUuaW5MaW5rID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgcmF3LFxuICAgICAgICBocmVmLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGV4dDogZXNjYXBlJDEodGV4dClcbiAgICB9O1xufVxuZnVuY3Rpb24gaW5kZW50Q29kZUNvbXBlbnNhdGlvbihyYXcsIHRleHQpIHtcbiAgICBjb25zdCBtYXRjaEluZGVudFRvQ29kZSA9IHJhdy5tYXRjaCgvXihcXHMrKSg/OmBgYCkvKTtcbiAgICBpZiAobWF0Y2hJbmRlbnRUb0NvZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIGNvbnN0IGluZGVudFRvQ29kZSA9IG1hdGNoSW5kZW50VG9Db2RlWzFdO1xuICAgIHJldHVybiB0ZXh0XG4gICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgLm1hcChub2RlID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hJbmRlbnRJbk5vZGUgPSBub2RlLm1hdGNoKC9eXFxzKy8pO1xuICAgICAgICBpZiAobWF0Y2hJbmRlbnRJbk5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtpbmRlbnRJbk5vZGVdID0gbWF0Y2hJbmRlbnRJbk5vZGU7XG4gICAgICAgIGlmIChpbmRlbnRJbk5vZGUubGVuZ3RoID49IGluZGVudFRvQ29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnNsaWNlKGluZGVudFRvQ29kZS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCdcXG4nKTtcbn1cbi8qKlxuICogVG9rZW5pemVyXG4gKi9cbmNsYXNzIF9Ub2tlbml6ZXIge1xuICAgIG9wdGlvbnM7XG4gICAgcnVsZXM7IC8vIHNldCBieSB0aGUgbGV4ZXJcbiAgICBsZXhlcjsgLy8gc2V0IGJ5IHRoZSBsZXhlclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBfZGVmYXVsdHM7XG4gICAgfVxuICAgIHNwYWNlKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLm5ld2xpbmUuZXhlYyhzcmMpO1xuICAgICAgICBpZiAoY2FwICYmIGNhcFswXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzcGFjZScsXG4gICAgICAgICAgICAgICAgcmF3OiBjYXBbMF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29kZShzcmMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5ibG9jay5jb2RlLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGNhcFswXS5yZXBsYWNlKC9eIHsxLDR9L2dtLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgICAgICAgICBjb2RlQmxvY2tTdHlsZTogJ2luZGVudGVkJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgICAgICAgICAgICAgID8gcnRyaW0odGV4dCwgJ1xcbicpXG4gICAgICAgICAgICAgICAgICAgIDogdGV4dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmZW5jZXMoc3JjKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuYmxvY2suZmVuY2VzLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgY29uc3QgcmF3ID0gY2FwWzBdO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGluZGVudENvZGVDb21wZW5zYXRpb24ocmF3LCBjYXBbM10gfHwgJycpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgICAgICAgICAgcmF3LFxuICAgICAgICAgICAgICAgIGxhbmc6IGNhcFsyXSA/IGNhcFsyXS50cmltKCkucmVwbGFjZSh0aGlzLnJ1bGVzLmlubGluZS5hbnlQdW5jdHVhdGlvbiwgJyQxJykgOiBjYXBbMl0sXG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoZWFkaW5nKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLmhlYWRpbmcuZXhlYyhzcmMpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGNhcFsyXS50cmltKCk7XG4gICAgICAgICAgICAvLyByZW1vdmUgdHJhaWxpbmcgI3NcbiAgICAgICAgICAgIGlmICgvIyQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmltbWVkID0gcnRyaW0odGV4dCwgJyMnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSB0cmltbWVkLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRyaW1tZWQgfHwgLyAkLy50ZXN0KHRyaW1tZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbW1vbk1hcmsgcmVxdWlyZXMgc3BhY2UgYmVmb3JlIHRyYWlsaW5nICNzXG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSB0cmltbWVkLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgICAgICAgICBkZXB0aDogY2FwWzFdLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgIHRva2VuczogdGhpcy5sZXhlci5pbmxpbmUodGV4dClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaHIoc3JjKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuYmxvY2suaHIuZXhlYyhzcmMpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdocicsXG4gICAgICAgICAgICAgICAgcmF3OiBjYXBbMF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmxvY2txdW90ZShzcmMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5ibG9jay5ibG9ja3F1b3RlLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgLy8gcHJlY2VkZSBzZXRleHQgY29udGludWF0aW9uIHdpdGggNCBzcGFjZXMgc28gaXQgaXNuJ3QgYSBzZXRleHRcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gY2FwWzBdLnJlcGxhY2UoL1xcbiB7MCwzfSgoPzo9K3wtKykgKikoPz1cXG58JCkvZywgJ1xcbiAgICAkMScpO1xuICAgICAgICAgICAgdGV4dCA9IHJ0cmltKHRleHQucmVwbGFjZSgvXiAqPlsgXFx0XT8vZ20sICcnKSwgJ1xcbicpO1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy5sZXhlci5zdGF0ZS50b3A7XG4gICAgICAgICAgICB0aGlzLmxleGVyLnN0YXRlLnRvcCA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmxleGVyLmJsb2NrVG9rZW5zKHRleHQpO1xuICAgICAgICAgICAgdGhpcy5sZXhlci5zdGF0ZS50b3AgPSB0b3A7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdibG9ja3F1b3RlJyxcbiAgICAgICAgICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaXN0KHNyYykge1xuICAgICAgICBsZXQgY2FwID0gdGhpcy5ydWxlcy5ibG9jay5saXN0LmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgbGV0IGJ1bGwgPSBjYXBbMV0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgaXNvcmRlcmVkID0gYnVsbC5sZW5ndGggPiAxO1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgICAgICAgICAgcmF3OiAnJyxcbiAgICAgICAgICAgICAgICBvcmRlcmVkOiBpc29yZGVyZWQsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IGlzb3JkZXJlZCA/ICtidWxsLnNsaWNlKDAsIC0xKSA6ICcnLFxuICAgICAgICAgICAgICAgIGxvb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBidWxsID0gaXNvcmRlcmVkID8gYFxcXFxkezEsOX1cXFxcJHtidWxsLnNsaWNlKC0xKX1gIDogYFxcXFwke2J1bGx9YDtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICAgICAgICAgICAgICBidWxsID0gaXNvcmRlcmVkID8gYnVsbCA6ICdbKistXSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHZXQgbmV4dCBsaXN0IGl0ZW1cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1SZWdleCA9IG5ldyBSZWdFeHAoYF4oIHswLDN9JHtidWxsfSkoKD86W1xcdCBdW15cXFxcbl0qKT8oPzpcXFxcbnwkKSlgKTtcbiAgICAgICAgICAgIGxldCByYXcgPSAnJztcbiAgICAgICAgICAgIGxldCBpdGVtQ29udGVudHMgPSAnJztcbiAgICAgICAgICAgIGxldCBlbmRzV2l0aEJsYW5rTGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY3VycmVudCBidWxsZXQgcG9pbnQgY2FuIHN0YXJ0IGEgbmV3IExpc3QgSXRlbVxuICAgICAgICAgICAgd2hpbGUgKHNyYykge1xuICAgICAgICAgICAgICAgIGxldCBlbmRFYXJseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghKGNhcCA9IGl0ZW1SZWdleC5leGVjKHNyYykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ydWxlcy5ibG9jay5oci50ZXN0KHNyYykpIHsgLy8gRW5kIGxpc3QgaWYgYnVsbGV0IHdhcyBhY3R1YWxseSBIUiAocG9zc2libHkgbW92ZSBpbnRvIGl0ZW1SZWdleD8pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByYXcgPSBjYXBbMF07XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhyYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGNhcFsyXS5zcGxpdCgnXFxuJywgMSlbMF0ucmVwbGFjZSgvXlxcdCsvLCAodCkgPT4gJyAnLnJlcGVhdCgzICogdC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dExpbmUgPSBzcmMuc3BsaXQoJ1xcbicsIDEpWzBdO1xuICAgICAgICAgICAgICAgIGxldCBpbmRlbnQgPSAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRlbnRzID0gbGluZS50cmltU3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGVudCA9IGNhcFsyXS5zZWFyY2goL1teIF0vKTsgLy8gRmluZCBmaXJzdCBub24tc3BhY2UgY2hhclxuICAgICAgICAgICAgICAgICAgICBpbmRlbnQgPSBpbmRlbnQgPiA0ID8gMSA6IGluZGVudDsgLy8gVHJlYXQgaW5kZW50ZWQgY29kZSBibG9ja3MgKD4gNCBzcGFjZXMpIGFzIGhhdmluZyBvbmx5IDEgaW5kZW50XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db250ZW50cyA9IGxpbmUuc2xpY2UoaW5kZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ICs9IGNhcFsxXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBibGFua0xpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIWxpbmUgJiYgL14gKiQvLnRlc3QobmV4dExpbmUpKSB7IC8vIEl0ZW1zIGJlZ2luIHdpdGggYXQgbW9zdCBvbmUgYmxhbmsgbGluZVxuICAgICAgICAgICAgICAgICAgICByYXcgKz0gbmV4dExpbmUgKyAnXFxuJztcbiAgICAgICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhuZXh0TGluZS5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kRWFybHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVuZEVhcmx5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRCdWxsZXRSZWdleCA9IG5ldyBSZWdFeHAoYF4gezAsJHtNYXRoLm1pbigzLCBpbmRlbnQgLSAxKX19KD86WyorLV18XFxcXGR7MSw5fVsuKV0pKCg/OlsgXFx0XVteXFxcXG5dKik/KD86XFxcXG58JCkpYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhyUmVnZXggPSBuZXcgUmVnRXhwKGBeIHswLCR7TWF0aC5taW4oMywgaW5kZW50IC0gMSl9fSgoPzotICopezMsfXwoPzpfICopezMsfXwoPzpcXFxcKiAqKXszLH0pKD86XFxcXG4rfCQpYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlbmNlc0JlZ2luUmVnZXggPSBuZXcgUmVnRXhwKGBeIHswLCR7TWF0aC5taW4oMywgaW5kZW50IC0gMSl9fSg/OlxcYFxcYFxcYHx+fn4pYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRpbmdCZWdpblJlZ2V4ID0gbmV3IFJlZ0V4cChgXiB7MCwke01hdGgubWluKDMsIGluZGVudCAtIDEpfX0jYCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGZvbGxvd2luZyBsaW5lcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gTGlzdCBJdGVtXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhd0xpbmUgPSBzcmMuc3BsaXQoJ1xcbicsIDEpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dExpbmUgPSByYXdMaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmUtYWxpZ24gdG8gZm9sbG93IGNvbW1vbm1hcmsgbmVzdGluZyBydWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRMaW5lID0gbmV4dExpbmUucmVwbGFjZSgvXiB7MSw0fSg/PSggezR9KSpbXiBdKS9nLCAnICAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuZCBsaXN0IGl0ZW0gaWYgZm91bmQgY29kZSBmZW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZW5jZXNCZWdpblJlZ2V4LnRlc3QobmV4dExpbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmQgbGlzdCBpdGVtIGlmIGZvdW5kIHN0YXJ0IG9mIG5ldyBoZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGluZ0JlZ2luUmVnZXgudGVzdChuZXh0TGluZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuZCBsaXN0IGl0ZW0gaWYgZm91bmQgc3RhcnQgb2YgbmV3IGJ1bGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRCdWxsZXRSZWdleC50ZXN0KG5leHRMaW5lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSG9yaXpvbnRhbCBydWxlIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHJSZWdleC50ZXN0KHNyYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0TGluZS5zZWFyY2goL1teIF0vKSA+PSBpbmRlbnQgfHwgIW5leHRMaW5lLnRyaW0oKSkgeyAvLyBEZWRlbnQgaWYgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ29udGVudHMgKz0gJ1xcbicgKyBuZXh0TGluZS5zbGljZShpbmRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IGVub3VnaCBpbmRlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibGFua0xpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcmFncmFwaCBjb250aW51YXRpb24gdW5sZXNzIGxhc3QgbGluZSB3YXMgYSBkaWZmZXJlbnQgYmxvY2sgbGV2ZWwgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lLnNlYXJjaCgvW14gXS8pID49IDQpIHsgLy8gaW5kZW50ZWQgY29kZSBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlbmNlc0JlZ2luUmVnZXgudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRpbmdCZWdpblJlZ2V4LnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoclJlZ2V4LnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db250ZW50cyArPSAnXFxuJyArIG5leHRMaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFibGFua0xpbmUgJiYgIW5leHRMaW5lLnRyaW0oKSkgeyAvLyBDaGVjayBpZiBjdXJyZW50IGxpbmUgaXMgYmxhbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGFua0xpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3ICs9IHJhd0xpbmUgKyAnXFxuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcocmF3TGluZS5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgPSBuZXh0TGluZS5zbGljZShpbmRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghbGlzdC5sb29zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgaXRlbSBlbmRlZCB3aXRoIGEgYmxhbmsgbGluZSwgdGhlIGxpc3QgaXMgbG9vc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHNXaXRoQmxhbmtMaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0Lmxvb3NlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgvXFxuICpcXG4gKiQvLnRlc3QocmF3KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kc1dpdGhCbGFua0xpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBpc3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBpc2NoZWNrZWQ7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHRhc2sgbGlzdCBpdGVtc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzdGFzayA9IC9eXFxbWyB4WF1cXF0gLy5leGVjKGl0ZW1Db250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc3Rhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzY2hlY2tlZCA9IGlzdGFza1swXSAhPT0gJ1sgXSAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNvbnRlbnRzID0gaXRlbUNvbnRlbnRzLnJlcGxhY2UoL15cXFtbIHhYXVxcXSArLywgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3QuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaXN0X2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICByYXcsXG4gICAgICAgICAgICAgICAgICAgIHRhc2s6ICEhaXN0YXNrLFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBpc2NoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgIGxvb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbUNvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbnM6IFtdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGlzdC5yYXcgKz0gcmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG8gbm90IGNvbnN1bWUgbmV3bGluZXMgYXQgZW5kIG9mIGZpbmFsIGl0ZW0uIEFsdGVybmF0aXZlbHksIG1ha2UgaXRlbVJlZ2V4ICpzdGFydCogd2l0aCBhbnkgbmV3bGluZXMgdG8gc2ltcGxpZnkvc3BlZWQgdXAgZW5kc1dpdGhCbGFua0xpbmUgbG9naWNcbiAgICAgICAgICAgIGxpc3QuaXRlbXNbbGlzdC5pdGVtcy5sZW5ndGggLSAxXS5yYXcgPSByYXcudHJpbUVuZCgpO1xuICAgICAgICAgICAgKGxpc3QuaXRlbXNbbGlzdC5pdGVtcy5sZW5ndGggLSAxXSkudGV4dCA9IGl0ZW1Db250ZW50cy50cmltRW5kKCk7XG4gICAgICAgICAgICBsaXN0LnJhdyA9IGxpc3QucmF3LnRyaW1FbmQoKTtcbiAgICAgICAgICAgIC8vIEl0ZW0gY2hpbGQgdG9rZW5zIGhhbmRsZWQgaGVyZSBhdCBlbmQgYmVjYXVzZSB3ZSBuZWVkZWQgdG8gaGF2ZSB0aGUgZmluYWwgaXRlbSB0byB0cmltIGl0IGZpcnN0XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxleGVyLnN0YXRlLnRvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxpc3QuaXRlbXNbaV0udG9rZW5zID0gdGhpcy5sZXhlci5ibG9ja1Rva2VucyhsaXN0Lml0ZW1zW2ldLnRleHQsIFtdKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QubG9vc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGlzdCBzaG91bGQgYmUgbG9vc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhY2VycyA9IGxpc3QuaXRlbXNbaV0udG9rZW5zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ3NwYWNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc011bHRpcGxlTGluZUJyZWFrcyA9IHNwYWNlcnMubGVuZ3RoID4gMCAmJiBzcGFjZXJzLnNvbWUodCA9PiAvXFxuLipcXG4vLnRlc3QodC5yYXcpKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5sb29zZSA9IGhhc011bHRpcGxlTGluZUJyZWFrcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgYWxsIGl0ZW1zIHRvIGxvb3NlIGlmIGxpc3QgaXMgbG9vc2VcbiAgICAgICAgICAgIGlmIChsaXN0Lmxvb3NlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuaXRlbXNbaV0ubG9vc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGh0bWwoc3JjKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuYmxvY2suaHRtbC5leGVjKHNyYyk7XG4gICAgICAgIGlmIChjYXApIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdodG1sJyxcbiAgICAgICAgICAgICAgICBibG9jazogdHJ1ZSxcbiAgICAgICAgICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgICAgICAgICBwcmU6IGNhcFsxXSA9PT0gJ3ByZScgfHwgY2FwWzFdID09PSAnc2NyaXB0JyB8fCBjYXBbMV0gPT09ICdzdHlsZScsXG4gICAgICAgICAgICAgICAgdGV4dDogY2FwWzBdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlZihzcmMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5ibG9jay5kZWYuZXhlYyhzcmMpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgICBjb25zdCB0YWcgPSBjYXBbMV0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gY2FwWzJdID8gY2FwWzJdLnJlcGxhY2UoL148KC4qKT4kLywgJyQxJykucmVwbGFjZSh0aGlzLnJ1bGVzLmlubGluZS5hbnlQdW5jdHVhdGlvbiwgJyQxJykgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gY2FwWzNdID8gY2FwWzNdLnN1YnN0cmluZygxLCBjYXBbM10ubGVuZ3RoIC0gMSkucmVwbGFjZSh0aGlzLnJ1bGVzLmlubGluZS5hbnlQdW5jdHVhdGlvbiwgJyQxJykgOiBjYXBbM107XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkZWYnLFxuICAgICAgICAgICAgICAgIHRhZyxcbiAgICAgICAgICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgICAgICAgICBocmVmLFxuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHRhYmxlKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLnRhYmxlLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKCFjYXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIS9bOnxdLy50ZXN0KGNhcFsyXSkpIHtcbiAgICAgICAgICAgIC8vIGRlbGltaXRlciByb3cgbXVzdCBoYXZlIGEgcGlwZSAofCkgb3IgY29sb24gKDopIG90aGVyd2lzZSBpdCBpcyBhIHNldGV4dCBoZWFkaW5nXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHNwbGl0Q2VsbHMoY2FwWzFdKTtcbiAgICAgICAgY29uc3QgYWxpZ25zID0gY2FwWzJdLnJlcGxhY2UoL15cXHx8XFx8ICokL2csICcnKS5zcGxpdCgnfCcpO1xuICAgICAgICBjb25zdCByb3dzID0gY2FwWzNdICYmIGNhcFszXS50cmltKCkgPyBjYXBbM10ucmVwbGFjZSgvXFxuWyBcXHRdKiQvLCAnJykuc3BsaXQoJ1xcbicpIDogW107XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgICAgICBoZWFkZXI6IFtdLFxuICAgICAgICAgICAgYWxpZ246IFtdLFxuICAgICAgICAgICAgcm93czogW11cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGhlYWRlcnMubGVuZ3RoICE9PSBhbGlnbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBoZWFkZXIgYW5kIGFsaWduIGNvbHVtbnMgbXVzdCBiZSBlcXVhbCwgcm93cyBjYW4gYmUgZGlmZmVyZW50LlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgYWxpZ24gb2YgYWxpZ25zKSB7XG4gICAgICAgICAgICBpZiAoL14gKi0rOiAqJC8udGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFsaWduLnB1c2goJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgvXiAqOi0rOiAqJC8udGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFsaWduLnB1c2goJ2NlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChhbGlnbikpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFsaWduLnB1c2goJ2xlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWxpZ24ucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGhlYWRlciBvZiBoZWFkZXJzKSB7XG4gICAgICAgICAgICBpdGVtLmhlYWRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBoZWFkZXIsXG4gICAgICAgICAgICAgICAgdG9rZW5zOiB0aGlzLmxleGVyLmlubGluZShoZWFkZXIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgICAgICBpdGVtLnJvd3MucHVzaChzcGxpdENlbGxzKHJvdywgaXRlbS5oZWFkZXIubGVuZ3RoKS5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogY2VsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiB0aGlzLmxleGVyLmlubGluZShjZWxsKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIGxoZWFkaW5nKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLmxoZWFkaW5nLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgICAgICAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgICAgICAgICAgZGVwdGg6IGNhcFsyXS5jaGFyQXQoMCkgPT09ICc9JyA/IDEgOiAyLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNhcFsxXSxcbiAgICAgICAgICAgICAgICB0b2tlbnM6IHRoaXMubGV4ZXIuaW5saW5lKGNhcFsxXSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyYWdyYXBoKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLnBhcmFncmFwaC5leGVjKHNyYyk7XG4gICAgICAgIGlmIChjYXApIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjYXBbMV0uY2hhckF0KGNhcFsxXS5sZW5ndGggLSAxKSA9PT0gJ1xcbidcbiAgICAgICAgICAgICAgICA/IGNhcFsxXS5zbGljZSgwLCAtMSlcbiAgICAgICAgICAgICAgICA6IGNhcFsxXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICB0b2tlbnM6IHRoaXMubGV4ZXIuaW5saW5lKHRleHQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHRleHQoc3JjKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuYmxvY2sudGV4dC5leGVjKHNyYyk7XG4gICAgICAgIGlmIChjYXApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNhcFswXSxcbiAgICAgICAgICAgICAgICB0b2tlbnM6IHRoaXMubGV4ZXIuaW5saW5lKGNhcFswXSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXNjYXBlKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS5lc2NhcGUuZXhlYyhzcmMpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdlc2NhcGUnLFxuICAgICAgICAgICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICAgICAgICAgIHRleHQ6IGVzY2FwZSQxKGNhcFsxXSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFnKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS50YWcuZXhlYyhzcmMpO1xuICAgICAgICBpZiAoY2FwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGV4ZXIuc3RhdGUuaW5MaW5rICYmIC9ePGEgL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXhlci5zdGF0ZS5pbkxpbmsgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5sZXhlci5zdGF0ZS5pbkxpbmsgJiYgL148XFwvYT4vaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxleGVyLnN0YXRlLmluTGluayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmxleGVyLnN0YXRlLmluUmF3QmxvY2sgJiYgL148KHByZXxjb2RlfGtiZHxzY3JpcHQpKFxcc3w+KS9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGV4ZXIuc3RhdGUuaW5SYXdCbG9jayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxleGVyLnN0YXRlLmluUmF3QmxvY2sgJiYgL148XFwvKHByZXxjb2RlfGtiZHxzY3JpcHQpKFxcc3w+KS9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGV4ZXIuc3RhdGUuaW5SYXdCbG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgICAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgICAgICAgICAgaW5MaW5rOiB0aGlzLmxleGVyLnN0YXRlLmluTGluayxcbiAgICAgICAgICAgICAgICBpblJhd0Jsb2NrOiB0aGlzLmxleGVyLnN0YXRlLmluUmF3QmxvY2ssXG4gICAgICAgICAgICAgICAgYmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNhcFswXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaW5rKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS5saW5rLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgY29uc3QgdHJpbW1lZFVybCA9IGNhcFsyXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wZWRhbnRpYyAmJiAvXjwvLnRlc3QodHJpbW1lZFVybCkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb21tb25tYXJrIHJlcXVpcmVzIG1hdGNoaW5nIGFuZ2xlIGJyYWNrZXRzXG4gICAgICAgICAgICAgICAgaWYgKCEoLz4kLy50ZXN0KHRyaW1tZWRVcmwpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGVuZGluZyBhbmdsZSBicmFja2V0IGNhbm5vdCBiZSBlc2NhcGVkXG4gICAgICAgICAgICAgICAgY29uc3QgcnRyaW1TbGFzaCA9IHJ0cmltKHRyaW1tZWRVcmwuc2xpY2UoMCwgLTEpLCAnXFxcXCcpO1xuICAgICAgICAgICAgICAgIGlmICgodHJpbW1lZFVybC5sZW5ndGggLSBydHJpbVNsYXNoLmxlbmd0aCkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0UGFyZW5JbmRleCA9IGZpbmRDbG9zaW5nQnJhY2tldChjYXBbMl0sICcoKScpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0UGFyZW5JbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY2FwWzBdLmluZGV4T2YoJyEnKSA9PT0gMCA/IDUgOiA0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rTGVuID0gc3RhcnQgKyBjYXBbMV0ubGVuZ3RoICsgbGFzdFBhcmVuSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNhcFsyXSA9IGNhcFsyXS5zdWJzdHJpbmcoMCwgbGFzdFBhcmVuSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBjYXBbMF0gPSBjYXBbMF0uc3Vic3RyaW5nKDAsIGxpbmtMZW4pLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgY2FwWzNdID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGhyZWYgPSBjYXBbMl07XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGxpdCBwZWRhbnRpYyBocmVmIGFuZCB0aXRsZVxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSAvXihbXidcIl0qW15cXHNdKVxccysoWydcIl0pKC4qKVxcMi8uZXhlYyhocmVmKTtcbiAgICAgICAgICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgICAgICAgICAgICBocmVmID0gbGlua1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBsaW5rWzNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gY2FwWzNdID8gY2FwWzNdLnNsaWNlKDEsIC0xKSA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHJlZiA9IGhyZWYudHJpbSgpO1xuICAgICAgICAgICAgaWYgKC9ePC8udGVzdChocmVmKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMgJiYgISgvPiQvLnRlc3QodHJpbW1lZFVybCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBlZGFudGljIGFsbG93cyBzdGFydGluZyBhbmdsZSBicmFja2V0IHdpdGhvdXQgZW5kaW5nIGFuZ2xlIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgaHJlZiA9IGhyZWYuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBocmVmID0gaHJlZi5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dExpbmsoY2FwLCB7XG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZiA/IGhyZWYucmVwbGFjZSh0aGlzLnJ1bGVzLmlubGluZS5hbnlQdW5jdHVhdGlvbiwgJyQxJykgOiBocmVmLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSA/IHRpdGxlLnJlcGxhY2UodGhpcy5ydWxlcy5pbmxpbmUuYW55UHVuY3R1YXRpb24sICckMScpIDogdGl0bGVcbiAgICAgICAgICAgIH0sIGNhcFswXSwgdGhpcy5sZXhlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVmbGluayhzcmMsIGxpbmtzKSB7XG4gICAgICAgIGxldCBjYXA7XG4gICAgICAgIGlmICgoY2FwID0gdGhpcy5ydWxlcy5pbmxpbmUucmVmbGluay5leGVjKHNyYykpXG4gICAgICAgICAgICB8fCAoY2FwID0gdGhpcy5ydWxlcy5pbmxpbmUubm9saW5rLmV4ZWMoc3JjKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtTdHJpbmcgPSAoY2FwWzJdIHx8IGNhcFsxXSkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2xpbmtTdHJpbmcudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gY2FwWzBdLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHJhdzogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0TGluayhjYXAsIGxpbmssIGNhcFswXSwgdGhpcy5sZXhlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1TdHJvbmcoc3JjLCBtYXNrZWRTcmMsIHByZXZDaGFyID0gJycpIHtcbiAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5ydWxlcy5pbmxpbmUuZW1TdHJvbmdMRGVsaW0uZXhlYyhzcmMpO1xuICAgICAgICBpZiAoIW1hdGNoKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBfIGNhbid0IGJlIGJldHdlZW4gdHdvIGFscGhhbnVtZXJpY3MuIFxccHtMfVxccHtOfSBpbmNsdWRlcyBub24tZW5nbGlzaCBhbHBoYWJldC9udW1iZXJzIGFzIHdlbGxcbiAgICAgICAgaWYgKG1hdGNoWzNdICYmIHByZXZDaGFyLm1hdGNoKC9bXFxwe0x9XFxwe059XS91KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV4dENoYXIgPSBtYXRjaFsxXSB8fCBtYXRjaFsyXSB8fCAnJztcbiAgICAgICAgaWYgKCFuZXh0Q2hhciB8fCAhcHJldkNoYXIgfHwgdGhpcy5ydWxlcy5pbmxpbmUucHVuY3R1YXRpb24uZXhlYyhwcmV2Q2hhcikpIHtcbiAgICAgICAgICAgIC8vIHVuaWNvZGUgUmVnZXggY291bnRzIGVtb2ppIGFzIDEgY2hhcjsgc3ByZWFkIGludG8gYXJyYXkgZm9yIHByb3BlciBjb3VudCAodXNlZCBtdWx0aXBsZSB0aW1lcyBiZWxvdylcbiAgICAgICAgICAgIGNvbnN0IGxMZW5ndGggPSBbLi4ubWF0Y2hbMF1dLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgckRlbGltLCByTGVuZ3RoLCBkZWxpbVRvdGFsID0gbExlbmd0aCwgbWlkRGVsaW1Ub3RhbCA9IDA7XG4gICAgICAgICAgICBjb25zdCBlbmRSZWcgPSBtYXRjaFswXVswXSA9PT0gJyonID8gdGhpcy5ydWxlcy5pbmxpbmUuZW1TdHJvbmdSRGVsaW1Bc3QgOiB0aGlzLnJ1bGVzLmlubGluZS5lbVN0cm9uZ1JEZWxpbVVuZDtcbiAgICAgICAgICAgIGVuZFJlZy5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gQ2xpcCBtYXNrZWRTcmMgdG8gc2FtZSBzZWN0aW9uIG9mIHN0cmluZyBhcyBzcmMgKG1vdmUgdG8gbGV4ZXI/KVxuICAgICAgICAgICAgbWFza2VkU3JjID0gbWFza2VkU3JjLnNsaWNlKC0xICogc3JjLmxlbmd0aCArIGxMZW5ndGgpO1xuICAgICAgICAgICAgd2hpbGUgKChtYXRjaCA9IGVuZFJlZy5leGVjKG1hc2tlZFNyYykpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByRGVsaW0gPSBtYXRjaFsxXSB8fCBtYXRjaFsyXSB8fCBtYXRjaFszXSB8fCBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBtYXRjaFs2XTtcbiAgICAgICAgICAgICAgICBpZiAoIXJEZWxpbSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIHNraXAgc2luZ2xlICogaW4gX19hYmMqYWJjX19cbiAgICAgICAgICAgICAgICByTGVuZ3RoID0gWy4uLnJEZWxpbV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFszXSB8fCBtYXRjaFs0XSkgeyAvLyBmb3VuZCBhbm90aGVyIExlZnQgRGVsaW1cbiAgICAgICAgICAgICAgICAgICAgZGVsaW1Ub3RhbCArPSByTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbNV0gfHwgbWF0Y2hbNl0pIHsgLy8gZWl0aGVyIExlZnQgb3IgUmlnaHQgRGVsaW1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxMZW5ndGggJSAzICYmICEoKGxMZW5ndGggKyByTGVuZ3RoKSAlIDMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWREZWxpbVRvdGFsICs9IHJMZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gQ29tbW9uTWFyayBFbXBoYXNpcyBSdWxlcyA5LTEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsaW1Ub3RhbCAtPSByTGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChkZWxpbVRvdGFsID4gMClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIEhhdmVuJ3QgZm91bmQgZW5vdWdoIGNsb3NpbmcgZGVsaW1pdGVyc1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBleHRyYSBjaGFyYWN0ZXJzLiAqYSoqKiAtPiAqYSpcbiAgICAgICAgICAgICAgICByTGVuZ3RoID0gTWF0aC5taW4ockxlbmd0aCwgckxlbmd0aCArIGRlbGltVG90YWwgKyBtaWREZWxpbVRvdGFsKTtcbiAgICAgICAgICAgICAgICAvLyBjaGFyIGxlbmd0aCBjYW4gYmUgPjEgZm9yIHVuaWNvZGUgY2hhcmFjdGVycztcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0Q2hhckxlbmd0aCA9IFsuLi5tYXRjaFswXV1bMF0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IHNyYy5zbGljZSgwLCBsTGVuZ3RoICsgbWF0Y2guaW5kZXggKyBsYXN0Q2hhckxlbmd0aCArIHJMZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBgZW1gIGlmIHNtYWxsZXN0IGRlbGltaXRlciBoYXMgb2RkIGNoYXIgY291bnQuICphKioqXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgubWluKGxMZW5ndGgsIHJMZW5ndGgpICUgMikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gcmF3LnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiB0aGlzLmxleGVyLmlubGluZVRva2Vucyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgJ3N0cm9uZycgaWYgc21hbGxlc3QgZGVsaW1pdGVyIGhhcyBldmVuIGNoYXIgY291bnQuICoqYSoqKlxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSByYXcuc2xpY2UoMiwgLTIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgICAgICByYXcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuczogdGhpcy5sZXhlci5pbmxpbmVUb2tlbnModGV4dClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvZGVzcGFuKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS5jb2RlLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSBjYXBbMl0ucmVwbGFjZSgvXFxuL2csICcgJyk7XG4gICAgICAgICAgICBjb25zdCBoYXNOb25TcGFjZUNoYXJzID0gL1teIF0vLnRlc3QodGV4dCk7XG4gICAgICAgICAgICBjb25zdCBoYXNTcGFjZUNoYXJzT25Cb3RoRW5kcyA9IC9eIC8udGVzdCh0ZXh0KSAmJiAvICQvLnRlc3QodGV4dCk7XG4gICAgICAgICAgICBpZiAoaGFzTm9uU3BhY2VDaGFycyAmJiBoYXNTcGFjZUNoYXJzT25Cb3RoRW5kcykge1xuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dCA9IGVzY2FwZSQxKHRleHQsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29kZXNwYW4nLFxuICAgICAgICAgICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnIoc3JjKSB7XG4gICAgICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuaW5saW5lLmJyLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnInLFxuICAgICAgICAgICAgICAgIHJhdzogY2FwWzBdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlbChzcmMpIHtcbiAgICAgICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5pbmxpbmUuZGVsLmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGVsJyxcbiAgICAgICAgICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBjYXBbMl0sXG4gICAgICAgICAgICAgICAgdG9rZW5zOiB0aGlzLmxleGVyLmlubGluZVRva2VucyhjYXBbMl0pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGF1dG9saW5rKHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS5hdXRvbGluay5leGVjKHNyYyk7XG4gICAgICAgIGlmIChjYXApIHtcbiAgICAgICAgICAgIGxldCB0ZXh0LCBocmVmO1xuICAgICAgICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGVzY2FwZSQxKGNhcFsxXSk7XG4gICAgICAgICAgICAgICAgaHJlZiA9ICdtYWlsdG86JyArIHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0ID0gZXNjYXBlJDEoY2FwWzFdKTtcbiAgICAgICAgICAgICAgICBocmVmID0gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3OiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmwoc3JjKSB7XG4gICAgICAgIGxldCBjYXA7XG4gICAgICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS51cmwuZXhlYyhzcmMpKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCwgaHJlZjtcbiAgICAgICAgICAgIGlmIChjYXBbMl0gPT09ICdAJykge1xuICAgICAgICAgICAgICAgIHRleHQgPSBlc2NhcGUkMShjYXBbMF0pO1xuICAgICAgICAgICAgICAgIGhyZWYgPSAnbWFpbHRvOicgKyB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gZXh0ZW5kZWQgYXV0b2xpbmsgcGF0aCB2YWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgbGV0IHByZXZDYXBaZXJvO1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldkNhcFplcm8gPSBjYXBbMF07XG4gICAgICAgICAgICAgICAgICAgIGNhcFswXSA9IHRoaXMucnVsZXMuaW5saW5lLl9iYWNrcGVkYWwuZXhlYyhjYXBbMF0pPy5bMF0gPz8gJyc7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAocHJldkNhcFplcm8gIT09IGNhcFswXSk7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGVzY2FwZSQxKGNhcFswXSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhcFsxXSA9PT0gJ3d3dy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWYgPSAnaHR0cDovLycgKyBjYXBbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBocmVmID0gY2FwWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3OiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbmxpbmVUZXh0KHNyYykge1xuICAgICAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS50ZXh0LmV4ZWMoc3JjKTtcbiAgICAgICAgaWYgKGNhcCkge1xuICAgICAgICAgICAgbGV0IHRleHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5sZXhlci5zdGF0ZS5pblJhd0Jsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGNhcFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRleHQgPSBlc2NhcGUkMShjYXBbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBCbG9jay1MZXZlbCBHcmFtbWFyXG4gKi9cbmNvbnN0IG5ld2xpbmUgPSAvXig/OiAqKD86XFxufCQpKSsvO1xuY29uc3QgYmxvY2tDb2RlID0gL14oIHs0fVteXFxuXSsoPzpcXG4oPzogKig/OlxcbnwkKSkqKT8pKy87XG5jb25zdCBmZW5jZXMgPSAvXiB7MCwzfShgezMsfSg/PVteYFxcbl0qKD86XFxufCQpKXx+ezMsfSkoW15cXG5dKikoPzpcXG58JCkoPzp8KFtcXHNcXFNdKj8pKD86XFxufCQpKSg/OiB7MCwzfVxcMVt+YF0qICooPz1cXG58JCl8JCkvO1xuY29uc3QgaHIgPSAvXiB7MCwzfSgoPzotW1xcdCBdKil7Myx9fCg/Ol9bIFxcdF0qKXszLH18KD86XFwqWyBcXHRdKil7Myx9KSg/Olxcbit8JCkvO1xuY29uc3QgaGVhZGluZyA9IC9eIHswLDN9KCN7MSw2fSkoPz1cXHN8JCkoLiopKD86XFxuK3wkKS87XG5jb25zdCBidWxsZXQgPSAvKD86WyorLV18XFxkezEsOX1bLildKS87XG5jb25zdCBsaGVhZGluZyA9IGVkaXQoL14oPyFidWxsIHxibG9ja0NvZGV8ZmVuY2VzfGJsb2NrcXVvdGV8aGVhZGluZ3xodG1sKSgoPzoufFxcbig/IVxccyo/XFxufGJ1bGwgfGJsb2NrQ29kZXxmZW5jZXN8YmxvY2txdW90ZXxoZWFkaW5nfGh0bWwpKSs/KVxcbiB7MCwzfSg9K3wtKykgKig/Olxcbit8JCkvKVxuICAgIC5yZXBsYWNlKC9idWxsL2csIGJ1bGxldCkgLy8gbGlzdHMgY2FuIGludGVycnVwdFxuICAgIC5yZXBsYWNlKC9ibG9ja0NvZGUvZywgLyB7NH0vKSAvLyBpbmRlbnRlZCBjb2RlIGJsb2NrcyBjYW4gaW50ZXJydXB0XG4gICAgLnJlcGxhY2UoL2ZlbmNlcy9nLCAvIHswLDN9KD86YHszLH18fnszLH0pLykgLy8gZmVuY2VkIGNvZGUgYmxvY2tzIGNhbiBpbnRlcnJ1cHRcbiAgICAucmVwbGFjZSgvYmxvY2txdW90ZS9nLCAvIHswLDN9Pi8pIC8vIGJsb2NrcXVvdGUgY2FuIGludGVycnVwdFxuICAgIC5yZXBsYWNlKC9oZWFkaW5nL2csIC8gezAsM30jezEsNn0vKSAvLyBBVFggaGVhZGluZyBjYW4gaW50ZXJydXB0XG4gICAgLnJlcGxhY2UoL2h0bWwvZywgLyB7MCwzfTxbXlxcbj5dKz5cXG4vKSAvLyBibG9jayBodG1sIGNhbiBpbnRlcnJ1cHRcbiAgICAuZ2V0UmVnZXgoKTtcbmNvbnN0IF9wYXJhZ3JhcGggPSAvXihbXlxcbl0rKD86XFxuKD8haHJ8aGVhZGluZ3xsaGVhZGluZ3xibG9ja3F1b3RlfGZlbmNlc3xsaXN0fGh0bWx8dGFibGV8ICtcXG4pW15cXG5dKykqKS87XG5jb25zdCBibG9ja1RleHQgPSAvXlteXFxuXSsvO1xuY29uc3QgX2Jsb2NrTGFiZWwgPSAvKD8hXFxzKlxcXSkoPzpcXFxcLnxbXlxcW1xcXVxcXFxdKSsvO1xuY29uc3QgZGVmID0gZWRpdCgvXiB7MCwzfVxcWyhsYWJlbClcXF06ICooPzpcXG4gKik/KFtePFxcc11bXlxcc10qfDwuKj8+KSg/Oig/OiArKD86XFxuICopP3wgKlxcbiAqKSh0aXRsZSkpPyAqKD86XFxuK3wkKS8pXG4gICAgLnJlcGxhY2UoJ2xhYmVsJywgX2Jsb2NrTGFiZWwpXG4gICAgLnJlcGxhY2UoJ3RpdGxlJywgLyg/OlwiKD86XFxcXFwiP3xbXlwiXFxcXF0pKlwifCdbXidcXG5dKig/OlxcblteJ1xcbl0rKSpcXG4/J3xcXChbXigpXSpcXCkpLylcbiAgICAuZ2V0UmVnZXgoKTtcbmNvbnN0IGxpc3QgPSBlZGl0KC9eKCB7MCwzfWJ1bGwpKFsgXFx0XVteXFxuXSs/KT8oPzpcXG58JCkvKVxuICAgIC5yZXBsYWNlKC9idWxsL2csIGJ1bGxldClcbiAgICAuZ2V0UmVnZXgoKTtcbmNvbnN0IF90YWcgPSAnYWRkcmVzc3xhcnRpY2xlfGFzaWRlfGJhc2V8YmFzZWZvbnR8YmxvY2txdW90ZXxib2R5fGNhcHRpb24nXG4gICAgKyAnfGNlbnRlcnxjb2x8Y29sZ3JvdXB8ZGR8ZGV0YWlsc3xkaWFsb2d8ZGlyfGRpdnxkbHxkdHxmaWVsZHNldHxmaWdjYXB0aW9uJ1xuICAgICsgJ3xmaWd1cmV8Zm9vdGVyfGZvcm18ZnJhbWV8ZnJhbWVzZXR8aFsxLTZdfGhlYWR8aGVhZGVyfGhyfGh0bWx8aWZyYW1lJ1xuICAgICsgJ3xsZWdlbmR8bGl8bGlua3xtYWlufG1lbnV8bWVudWl0ZW18bWV0YXxuYXZ8bm9mcmFtZXN8b2x8b3B0Z3JvdXB8b3B0aW9uJ1xuICAgICsgJ3xwfHBhcmFtfHNlYXJjaHxzZWN0aW9ufHN1bW1hcnl8dGFibGV8dGJvZHl8dGR8dGZvb3R8dGh8dGhlYWR8dGl0bGUnXG4gICAgKyAnfHRyfHRyYWNrfHVsJztcbmNvbnN0IF9jb21tZW50ID0gLzwhLS0oPzotPz58W1xcc1xcU10qPyg/Oi0tPnwkKSkvO1xuY29uc3QgaHRtbCA9IGVkaXQoJ14gezAsM30oPzonIC8vIG9wdGlvbmFsIGluZGVudGF0aW9uXG4gICAgKyAnPChzY3JpcHR8cHJlfHN0eWxlfHRleHRhcmVhKVtcXFxccz5dW1xcXFxzXFxcXFNdKj8oPzo8L1xcXFwxPlteXFxcXG5dKlxcXFxuK3wkKScgLy8gKDEpXG4gICAgKyAnfGNvbW1lbnRbXlxcXFxuXSooXFxcXG4rfCQpJyAvLyAoMilcbiAgICArICd8PFxcXFw/W1xcXFxzXFxcXFNdKj8oPzpcXFxcPz5cXFxcbip8JCknIC8vICgzKVxuICAgICsgJ3w8IVtBLVpdW1xcXFxzXFxcXFNdKj8oPzo+XFxcXG4qfCQpJyAvLyAoNClcbiAgICArICd8PCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qPyg/OlxcXFxdXFxcXF0+XFxcXG4qfCQpJyAvLyAoNSlcbiAgICArICd8PC8/KHRhZykoPzogK3xcXFxcbnwvPz4pW1xcXFxzXFxcXFNdKj8oPzooPzpcXFxcbiAqKStcXFxcbnwkKScgLy8gKDYpXG4gICAgKyAnfDwoPyFzY3JpcHR8cHJlfHN0eWxlfHRleHRhcmVhKShbYS16XVtcXFxcdy1dKikoPzphdHRyaWJ1dGUpKj8gKi8/Pig/PVsgXFxcXHRdKig/OlxcXFxufCQpKVtcXFxcc1xcXFxTXSo/KD86KD86XFxcXG4gKikrXFxcXG58JCknIC8vICg3KSBvcGVuIHRhZ1xuICAgICsgJ3w8Lyg/IXNjcmlwdHxwcmV8c3R5bGV8dGV4dGFyZWEpW2Etel1bXFxcXHctXSpcXFxccyo+KD89WyBcXFxcdF0qKD86XFxcXG58JCkpW1xcXFxzXFxcXFNdKj8oPzooPzpcXFxcbiAqKStcXFxcbnwkKScgLy8gKDcpIGNsb3NpbmcgdGFnXG4gICAgKyAnKScsICdpJylcbiAgICAucmVwbGFjZSgnY29tbWVudCcsIF9jb21tZW50KVxuICAgIC5yZXBsYWNlKCd0YWcnLCBfdGFnKVxuICAgIC5yZXBsYWNlKCdhdHRyaWJ1dGUnLCAvICtbYS16QS1aOl9dW1xcdy46LV0qKD86ICo9ICpcIlteXCJcXG5dKlwifCAqPSAqJ1teJ1xcbl0qJ3wgKj0gKlteXFxzXCInPTw+YF0rKT8vKVxuICAgIC5nZXRSZWdleCgpO1xuY29uc3QgcGFyYWdyYXBoID0gZWRpdChfcGFyYWdyYXBoKVxuICAgIC5yZXBsYWNlKCdocicsIGhyKVxuICAgIC5yZXBsYWNlKCdoZWFkaW5nJywgJyB7MCwzfSN7MSw2fSg/OlxcXFxzfCQpJylcbiAgICAucmVwbGFjZSgnfGxoZWFkaW5nJywgJycpIC8vIHNldGV4dCBoZWFkaW5ncyBkb24ndCBpbnRlcnJ1cHQgY29tbW9ubWFyayBwYXJhZ3JhcGhzXG4gICAgLnJlcGxhY2UoJ3x0YWJsZScsICcnKVxuICAgIC5yZXBsYWNlKCdibG9ja3F1b3RlJywgJyB7MCwzfT4nKVxuICAgIC5yZXBsYWNlKCdmZW5jZXMnLCAnIHswLDN9KD86YHszLH0oPz1bXmBcXFxcbl0qXFxcXG4pfH57Myx9KVteXFxcXG5dKlxcXFxuJylcbiAgICAucmVwbGFjZSgnbGlzdCcsICcgezAsM30oPzpbKistXXwxWy4pXSkgJykgLy8gb25seSBsaXN0cyBzdGFydGluZyBmcm9tIDEgY2FuIGludGVycnVwdFxuICAgIC5yZXBsYWNlKCdodG1sJywgJzwvPyg/OnRhZykoPzogK3xcXFxcbnwvPz4pfDwoPzpzY3JpcHR8cHJlfHN0eWxlfHRleHRhcmVhfCEtLSknKVxuICAgIC5yZXBsYWNlKCd0YWcnLCBfdGFnKSAvLyBwYXJzIGNhbiBiZSBpbnRlcnJ1cHRlZCBieSB0eXBlICg2KSBodG1sIGJsb2Nrc1xuICAgIC5nZXRSZWdleCgpO1xuY29uc3QgYmxvY2txdW90ZSA9IGVkaXQoL14oIHswLDN9PiA/KHBhcmFncmFwaHxbXlxcbl0qKSg/OlxcbnwkKSkrLylcbiAgICAucmVwbGFjZSgncGFyYWdyYXBoJywgcGFyYWdyYXBoKVxuICAgIC5nZXRSZWdleCgpO1xuLyoqXG4gKiBOb3JtYWwgQmxvY2sgR3JhbW1hclxuICovXG5jb25zdCBibG9ja05vcm1hbCA9IHtcbiAgICBibG9ja3F1b3RlLFxuICAgIGNvZGU6IGJsb2NrQ29kZSxcbiAgICBkZWYsXG4gICAgZmVuY2VzLFxuICAgIGhlYWRpbmcsXG4gICAgaHIsXG4gICAgaHRtbCxcbiAgICBsaGVhZGluZyxcbiAgICBsaXN0LFxuICAgIG5ld2xpbmUsXG4gICAgcGFyYWdyYXBoLFxuICAgIHRhYmxlOiBub29wVGVzdCxcbiAgICB0ZXh0OiBibG9ja1RleHRcbn07XG4vKipcbiAqIEdGTSBCbG9jayBHcmFtbWFyXG4gKi9cbmNvbnN0IGdmbVRhYmxlID0gZWRpdCgnXiAqKFteXFxcXG4gXS4qKVxcXFxuJyAvLyBIZWFkZXJcbiAgICArICcgezAsM30oKD86XFxcXHwgKik/Oj8tKzo/ICooPzpcXFxcfCAqOj8tKzo/ICopKig/OlxcXFx8ICopPyknIC8vIEFsaWduXG4gICAgKyAnKD86XFxcXG4oKD86KD8hICpcXFxcbnxocnxoZWFkaW5nfGJsb2NrcXVvdGV8Y29kZXxmZW5jZXN8bGlzdHxodG1sKS4qKD86XFxcXG58JCkpKilcXFxcbip8JCknKSAvLyBDZWxsc1xuICAgIC5yZXBsYWNlKCdocicsIGhyKVxuICAgIC5yZXBsYWNlKCdoZWFkaW5nJywgJyB7MCwzfSN7MSw2fSg/OlxcXFxzfCQpJylcbiAgICAucmVwbGFjZSgnYmxvY2txdW90ZScsICcgezAsM30+JylcbiAgICAucmVwbGFjZSgnY29kZScsICcgezR9W15cXFxcbl0nKVxuICAgIC5yZXBsYWNlKCdmZW5jZXMnLCAnIHswLDN9KD86YHszLH0oPz1bXmBcXFxcbl0qXFxcXG4pfH57Myx9KVteXFxcXG5dKlxcXFxuJylcbiAgICAucmVwbGFjZSgnbGlzdCcsICcgezAsM30oPzpbKistXXwxWy4pXSkgJykgLy8gb25seSBsaXN0cyBzdGFydGluZyBmcm9tIDEgY2FuIGludGVycnVwdFxuICAgIC5yZXBsYWNlKCdodG1sJywgJzwvPyg/OnRhZykoPzogK3xcXFxcbnwvPz4pfDwoPzpzY3JpcHR8cHJlfHN0eWxlfHRleHRhcmVhfCEtLSknKVxuICAgIC5yZXBsYWNlKCd0YWcnLCBfdGFnKSAvLyB0YWJsZXMgY2FuIGJlIGludGVycnVwdGVkIGJ5IHR5cGUgKDYpIGh0bWwgYmxvY2tzXG4gICAgLmdldFJlZ2V4KCk7XG5jb25zdCBibG9ja0dmbSA9IHtcbiAgICAuLi5ibG9ja05vcm1hbCxcbiAgICB0YWJsZTogZ2ZtVGFibGUsXG4gICAgcGFyYWdyYXBoOiBlZGl0KF9wYXJhZ3JhcGgpXG4gICAgICAgIC5yZXBsYWNlKCdocicsIGhyKVxuICAgICAgICAucmVwbGFjZSgnaGVhZGluZycsICcgezAsM30jezEsNn0oPzpcXFxcc3wkKScpXG4gICAgICAgIC5yZXBsYWNlKCd8bGhlYWRpbmcnLCAnJykgLy8gc2V0ZXh0IGhlYWRpbmdzIGRvbid0IGludGVycnVwdCBjb21tb25tYXJrIHBhcmFncmFwaHNcbiAgICAgICAgLnJlcGxhY2UoJ3RhYmxlJywgZ2ZtVGFibGUpIC8vIGludGVycnVwdCBwYXJhZ3JhcGhzIHdpdGggdGFibGVcbiAgICAgICAgLnJlcGxhY2UoJ2Jsb2NrcXVvdGUnLCAnIHswLDN9PicpXG4gICAgICAgIC5yZXBsYWNlKCdmZW5jZXMnLCAnIHswLDN9KD86YHszLH0oPz1bXmBcXFxcbl0qXFxcXG4pfH57Myx9KVteXFxcXG5dKlxcXFxuJylcbiAgICAgICAgLnJlcGxhY2UoJ2xpc3QnLCAnIHswLDN9KD86WyorLV18MVsuKV0pICcpIC8vIG9ubHkgbGlzdHMgc3RhcnRpbmcgZnJvbSAxIGNhbiBpbnRlcnJ1cHRcbiAgICAgICAgLnJlcGxhY2UoJ2h0bWwnLCAnPC8/KD86dGFnKSg/OiArfFxcXFxufC8/Pil8PCg/OnNjcmlwdHxwcmV8c3R5bGV8dGV4dGFyZWF8IS0tKScpXG4gICAgICAgIC5yZXBsYWNlKCd0YWcnLCBfdGFnKSAvLyBwYXJzIGNhbiBiZSBpbnRlcnJ1cHRlZCBieSB0eXBlICg2KSBodG1sIGJsb2Nrc1xuICAgICAgICAuZ2V0UmVnZXgoKVxufTtcbi8qKlxuICogUGVkYW50aWMgZ3JhbW1hciAob3JpZ2luYWwgSm9obiBHcnViZXIncyBsb29zZSBtYXJrZG93biBzcGVjaWZpY2F0aW9uKVxuICovXG5jb25zdCBibG9ja1BlZGFudGljID0ge1xuICAgIC4uLmJsb2NrTm9ybWFsLFxuICAgIGh0bWw6IGVkaXQoJ14gKig/OmNvbW1lbnQgKig/OlxcXFxufFxcXFxzKiQpJ1xuICAgICAgICArICd8PCh0YWcpW1xcXFxzXFxcXFNdKz88L1xcXFwxPiAqKD86XFxcXG57Mix9fFxcXFxzKiQpJyAvLyBjbG9zZWQgdGFnXG4gICAgICAgICsgJ3w8dGFnKD86XCJbXlwiXSpcInxcXCdbXlxcJ10qXFwnfFxcXFxzW15cXCdcIi8+XFxcXHNdKikqPy8/PiAqKD86XFxcXG57Mix9fFxcXFxzKiQpKScpXG4gICAgICAgIC5yZXBsYWNlKCdjb21tZW50JywgX2NvbW1lbnQpXG4gICAgICAgIC5yZXBsYWNlKC90YWcvZywgJyg/ISg/OidcbiAgICAgICAgKyAnYXxlbXxzdHJvbmd8c21hbGx8c3xjaXRlfHF8ZGZufGFiYnJ8ZGF0YXx0aW1lfGNvZGV8dmFyfHNhbXB8a2JkfHN1YidcbiAgICAgICAgKyAnfHN1cHxpfGJ8dXxtYXJrfHJ1Ynl8cnR8cnB8YmRpfGJkb3xzcGFufGJyfHdicnxpbnN8ZGVsfGltZyknXG4gICAgICAgICsgJ1xcXFxiKVxcXFx3Kyg/ITp8W15cXFxcd1xcXFxzQF0qQClcXFxcYicpXG4gICAgICAgIC5nZXRSZWdleCgpLFxuICAgIGRlZjogL14gKlxcWyhbXlxcXV0rKVxcXTogKjw/KFteXFxzPl0rKT4/KD86ICsoW1wiKF1bXlxcbl0rW1wiKV0pKT8gKig/Olxcbit8JCkvLFxuICAgIGhlYWRpbmc6IC9eKCN7MSw2fSkoLiopKD86XFxuK3wkKS8sXG4gICAgZmVuY2VzOiBub29wVGVzdCwgLy8gZmVuY2VzIG5vdCBzdXBwb3J0ZWRcbiAgICBsaGVhZGluZzogL14oLis/KVxcbiB7MCwzfSg9K3wtKykgKig/Olxcbit8JCkvLFxuICAgIHBhcmFncmFwaDogZWRpdChfcGFyYWdyYXBoKVxuICAgICAgICAucmVwbGFjZSgnaHInLCBocilcbiAgICAgICAgLnJlcGxhY2UoJ2hlYWRpbmcnLCAnICojezEsNn0gKlteXFxuXScpXG4gICAgICAgIC5yZXBsYWNlKCdsaGVhZGluZycsIGxoZWFkaW5nKVxuICAgICAgICAucmVwbGFjZSgnfHRhYmxlJywgJycpXG4gICAgICAgIC5yZXBsYWNlKCdibG9ja3F1b3RlJywgJyB7MCwzfT4nKVxuICAgICAgICAucmVwbGFjZSgnfGZlbmNlcycsICcnKVxuICAgICAgICAucmVwbGFjZSgnfGxpc3QnLCAnJylcbiAgICAgICAgLnJlcGxhY2UoJ3xodG1sJywgJycpXG4gICAgICAgIC5yZXBsYWNlKCd8dGFnJywgJycpXG4gICAgICAgIC5nZXRSZWdleCgpXG59O1xuLyoqXG4gKiBJbmxpbmUtTGV2ZWwgR3JhbW1hclxuICovXG5jb25zdCBlc2NhcGUgPSAvXlxcXFwoWyFcIiMkJSYnKCkqKyxcXC0uLzo7PD0+P0BcXFtcXF1cXFxcXl9ge3x9fl0pLztcbmNvbnN0IGlubGluZUNvZGUgPSAvXihgKykoW15gXXxbXmBdW1xcc1xcU10qP1teYF0pXFwxKD8hYCkvO1xuY29uc3QgYnIgPSAvXiggezIsfXxcXFxcKVxcbig/IVxccyokKS87XG5jb25zdCBpbmxpbmVUZXh0ID0gL14oYCt8W15gXSkoPzooPz0gezIsfVxcbil8W1xcc1xcU10qPyg/Oig/PVtcXFxcPCFcXFtgKl9dfFxcYl98JCl8W14gXSg/PSB7Mix9XFxuKSkpLztcbi8vIGxpc3Qgb2YgdW5pY29kZSBwdW5jdHVhdGlvbiBtYXJrcywgcGx1cyBhbnkgbWlzc2luZyBjaGFyYWN0ZXJzIGZyb20gQ29tbW9uTWFyayBzcGVjXG5jb25zdCBfcHVuY3R1YXRpb24gPSAnXFxcXHB7UH1cXFxccHtTfSc7XG5jb25zdCBwdW5jdHVhdGlvbiA9IGVkaXQoL14oKD8hWypfXSlbXFxzcHVuY3R1YXRpb25dKS8sICd1JylcbiAgICAucmVwbGFjZSgvcHVuY3R1YXRpb24vZywgX3B1bmN0dWF0aW9uKS5nZXRSZWdleCgpO1xuLy8gc2VxdWVuY2VzIGVtIHNob3VsZCBza2lwIG92ZXIgW3RpdGxlXShsaW5rKSwgYGNvZGVgLCA8aHRtbD5cbmNvbnN0IGJsb2NrU2tpcCA9IC9cXFtbXltcXF1dKj9cXF1cXChbXlxcKFxcKV0qP1xcKXxgW15gXSo/YHw8W148Pl0qPz4vZztcbmNvbnN0IGVtU3Ryb25nTERlbGltID0gZWRpdCgvXig/OlxcKisoPzooKD8hXFwqKVtwdW5jdF0pfFteXFxzKl0pKXxeXysoPzooKD8hXylbcHVuY3RdKXwoW15cXHNfXSkpLywgJ3UnKVxuICAgIC5yZXBsYWNlKC9wdW5jdC9nLCBfcHVuY3R1YXRpb24pXG4gICAgLmdldFJlZ2V4KCk7XG5jb25zdCBlbVN0cm9uZ1JEZWxpbUFzdCA9IGVkaXQoJ15bXl8qXSo/X19bXl8qXSo/XFxcXCpbXl8qXSo/KD89X18pJyAvLyBTa2lwIG9ycGhhbiBpbnNpZGUgc3Ryb25nXG4gICAgKyAnfFteKl0rKD89W14qXSknIC8vIENvbnN1bWUgdG8gZGVsaW1cbiAgICArICd8KD8hXFxcXCopW3B1bmN0XShcXFxcKispKD89W1xcXFxzXXwkKScgLy8gKDEpICMqKiogY2FuIG9ubHkgYmUgYSBSaWdodCBEZWxpbWl0ZXJcbiAgICArICd8W15wdW5jdFxcXFxzXShcXFxcKispKD8hXFxcXCopKD89W3B1bmN0XFxcXHNdfCQpJyAvLyAoMikgYSoqKiMsIGEqKiogY2FuIG9ubHkgYmUgYSBSaWdodCBEZWxpbWl0ZXJcbiAgICArICd8KD8hXFxcXCopW3B1bmN0XFxcXHNdKFxcXFwqKykoPz1bXnB1bmN0XFxcXHNdKScgLy8gKDMpICMqKiphLCAqKiphIGNhbiBvbmx5IGJlIExlZnQgRGVsaW1pdGVyXG4gICAgKyAnfFtcXFxcc10oXFxcXCorKSg/IVxcXFwqKSg/PVtwdW5jdF0pJyAvLyAoNCkgKioqIyBjYW4gb25seSBiZSBMZWZ0IERlbGltaXRlclxuICAgICsgJ3woPyFcXFxcKilbcHVuY3RdKFxcXFwqKykoPyFcXFxcKikoPz1bcHVuY3RdKScgLy8gKDUpICMqKiojIGNhbiBiZSBlaXRoZXIgTGVmdCBvciBSaWdodCBEZWxpbWl0ZXJcbiAgICArICd8W15wdW5jdFxcXFxzXShcXFxcKispKD89W15wdW5jdFxcXFxzXSknLCAnZ3UnKSAvLyAoNikgYSoqKmEgY2FuIGJlIGVpdGhlciBMZWZ0IG9yIFJpZ2h0IERlbGltaXRlclxuICAgIC5yZXBsYWNlKC9wdW5jdC9nLCBfcHVuY3R1YXRpb24pXG4gICAgLmdldFJlZ2V4KCk7XG4vLyAoNikgTm90IGFsbG93ZWQgZm9yIF9cbmNvbnN0IGVtU3Ryb25nUkRlbGltVW5kID0gZWRpdCgnXlteXypdKj9cXFxcKlxcXFwqW15fKl0qP19bXl8qXSo/KD89XFxcXCpcXFxcKiknIC8vIFNraXAgb3JwaGFuIGluc2lkZSBzdHJvbmdcbiAgICArICd8W15fXSsoPz1bXl9dKScgLy8gQ29uc3VtZSB0byBkZWxpbVxuICAgICsgJ3woPyFfKVtwdW5jdF0oXyspKD89W1xcXFxzXXwkKScgLy8gKDEpICNfX18gY2FuIG9ubHkgYmUgYSBSaWdodCBEZWxpbWl0ZXJcbiAgICArICd8W15wdW5jdFxcXFxzXShfKykoPyFfKSg/PVtwdW5jdFxcXFxzXXwkKScgLy8gKDIpIGFfX18jLCBhX19fIGNhbiBvbmx5IGJlIGEgUmlnaHQgRGVsaW1pdGVyXG4gICAgKyAnfCg/IV8pW3B1bmN0XFxcXHNdKF8rKSg/PVtecHVuY3RcXFxcc10pJyAvLyAoMykgI19fX2EsIF9fX2EgY2FuIG9ubHkgYmUgTGVmdCBEZWxpbWl0ZXJcbiAgICArICd8W1xcXFxzXShfKykoPyFfKSg/PVtwdW5jdF0pJyAvLyAoNCkgX19fIyBjYW4gb25seSBiZSBMZWZ0IERlbGltaXRlclxuICAgICsgJ3woPyFfKVtwdW5jdF0oXyspKD8hXykoPz1bcHVuY3RdKScsICdndScpIC8vICg1KSAjX19fIyBjYW4gYmUgZWl0aGVyIExlZnQgb3IgUmlnaHQgRGVsaW1pdGVyXG4gICAgLnJlcGxhY2UoL3B1bmN0L2csIF9wdW5jdHVhdGlvbilcbiAgICAuZ2V0UmVnZXgoKTtcbmNvbnN0IGFueVB1bmN0dWF0aW9uID0gZWRpdCgvXFxcXChbcHVuY3RdKS8sICdndScpXG4gICAgLnJlcGxhY2UoL3B1bmN0L2csIF9wdW5jdHVhdGlvbilcbiAgICAuZ2V0UmVnZXgoKTtcbmNvbnN0IGF1dG9saW5rID0gZWRpdCgvXjwoc2NoZW1lOlteXFxzXFx4MDAtXFx4MWY8Pl0qfGVtYWlsKT4vKVxuICAgIC5yZXBsYWNlKCdzY2hlbWUnLCAvW2EtekEtWl1bYS16QS1aMC05Ky4tXXsxLDMxfS8pXG4gICAgLnJlcGxhY2UoJ2VtYWlsJywgL1thLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rKEApW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSsoPyFbLV9dKS8pXG4gICAgLmdldFJlZ2V4KCk7XG5jb25zdCBfaW5saW5lQ29tbWVudCA9IGVkaXQoX2NvbW1lbnQpLnJlcGxhY2UoJyg/Oi0tPnwkKScsICctLT4nKS5nZXRSZWdleCgpO1xuY29uc3QgdGFnID0gZWRpdCgnXmNvbW1lbnQnXG4gICAgKyAnfF48L1thLXpBLVpdW1xcXFx3Oi1dKlxcXFxzKj4nIC8vIHNlbGYtY2xvc2luZyB0YWdcbiAgICArICd8XjxbYS16QS1aXVtcXFxcdy1dKig/OmF0dHJpYnV0ZSkqP1xcXFxzKi8/PicgLy8gb3BlbiB0YWdcbiAgICArICd8XjxcXFxcP1tcXFxcc1xcXFxTXSo/XFxcXD8+JyAvLyBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBlLmcuIDw/cGhwID8+XG4gICAgKyAnfF48IVthLXpBLVpdK1xcXFxzW1xcXFxzXFxcXFNdKj8+JyAvLyBkZWNsYXJhdGlvbiwgZS5nLiA8IURPQ1RZUEUgaHRtbD5cbiAgICArICd8XjwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPicpIC8vIENEQVRBIHNlY3Rpb25cbiAgICAucmVwbGFjZSgnY29tbWVudCcsIF9pbmxpbmVDb21tZW50KVxuICAgIC5yZXBsYWNlKCdhdHRyaWJ1dGUnLCAvXFxzK1thLXpBLVo6X11bXFx3LjotXSooPzpcXHMqPVxccypcIlteXCJdKlwifFxccyo9XFxzKidbXiddKid8XFxzKj1cXHMqW15cXHNcIic9PD5gXSspPy8pXG4gICAgLmdldFJlZ2V4KCk7XG5jb25zdCBfaW5saW5lTGFiZWwgPSAvKD86XFxbKD86XFxcXC58W15cXFtcXF1cXFxcXSkqXFxdfFxcXFwufGBbXmBdKmB8W15cXFtcXF1cXFxcYF0pKj8vO1xuY29uc3QgbGluayA9IGVkaXQoL14hP1xcWyhsYWJlbClcXF1cXChcXHMqKGhyZWYpKD86XFxzKyh0aXRsZSkpP1xccypcXCkvKVxuICAgIC5yZXBsYWNlKCdsYWJlbCcsIF9pbmxpbmVMYWJlbClcbiAgICAucmVwbGFjZSgnaHJlZicsIC88KD86XFxcXC58W15cXG48PlxcXFxdKSs+fFteXFxzXFx4MDAtXFx4MWZdKi8pXG4gICAgLnJlcGxhY2UoJ3RpdGxlJywgL1wiKD86XFxcXFwiP3xbXlwiXFxcXF0pKlwifCcoPzpcXFxcJz98W14nXFxcXF0pKid8XFwoKD86XFxcXFxcKT98W14pXFxcXF0pKlxcKS8pXG4gICAgLmdldFJlZ2V4KCk7XG5jb25zdCByZWZsaW5rID0gZWRpdCgvXiE/XFxbKGxhYmVsKVxcXVxcWyhyZWYpXFxdLylcbiAgICAucmVwbGFjZSgnbGFiZWwnLCBfaW5saW5lTGFiZWwpXG4gICAgLnJlcGxhY2UoJ3JlZicsIF9ibG9ja0xhYmVsKVxuICAgIC5nZXRSZWdleCgpO1xuY29uc3Qgbm9saW5rID0gZWRpdCgvXiE/XFxbKHJlZilcXF0oPzpcXFtcXF0pPy8pXG4gICAgLnJlcGxhY2UoJ3JlZicsIF9ibG9ja0xhYmVsKVxuICAgIC5nZXRSZWdleCgpO1xuY29uc3QgcmVmbGlua1NlYXJjaCA9IGVkaXQoJ3JlZmxpbmt8bm9saW5rKD8hXFxcXCgpJywgJ2cnKVxuICAgIC5yZXBsYWNlKCdyZWZsaW5rJywgcmVmbGluaylcbiAgICAucmVwbGFjZSgnbm9saW5rJywgbm9saW5rKVxuICAgIC5nZXRSZWdleCgpO1xuLyoqXG4gKiBOb3JtYWwgSW5saW5lIEdyYW1tYXJcbiAqL1xuY29uc3QgaW5saW5lTm9ybWFsID0ge1xuICAgIF9iYWNrcGVkYWw6IG5vb3BUZXN0LCAvLyBvbmx5IHVzZWQgZm9yIEdGTSB1cmxcbiAgICBhbnlQdW5jdHVhdGlvbixcbiAgICBhdXRvbGluayxcbiAgICBibG9ja1NraXAsXG4gICAgYnIsXG4gICAgY29kZTogaW5saW5lQ29kZSxcbiAgICBkZWw6IG5vb3BUZXN0LFxuICAgIGVtU3Ryb25nTERlbGltLFxuICAgIGVtU3Ryb25nUkRlbGltQXN0LFxuICAgIGVtU3Ryb25nUkRlbGltVW5kLFxuICAgIGVzY2FwZSxcbiAgICBsaW5rLFxuICAgIG5vbGluayxcbiAgICBwdW5jdHVhdGlvbixcbiAgICByZWZsaW5rLFxuICAgIHJlZmxpbmtTZWFyY2gsXG4gICAgdGFnLFxuICAgIHRleHQ6IGlubGluZVRleHQsXG4gICAgdXJsOiBub29wVGVzdFxufTtcbi8qKlxuICogUGVkYW50aWMgSW5saW5lIEdyYW1tYXJcbiAqL1xuY29uc3QgaW5saW5lUGVkYW50aWMgPSB7XG4gICAgLi4uaW5saW5lTm9ybWFsLFxuICAgIGxpbms6IGVkaXQoL14hP1xcWyhsYWJlbClcXF1cXCgoLio/KVxcKS8pXG4gICAgICAgIC5yZXBsYWNlKCdsYWJlbCcsIF9pbmxpbmVMYWJlbClcbiAgICAgICAgLmdldFJlZ2V4KCksXG4gICAgcmVmbGluazogZWRpdCgvXiE/XFxbKGxhYmVsKVxcXVxccypcXFsoW15cXF1dKilcXF0vKVxuICAgICAgICAucmVwbGFjZSgnbGFiZWwnLCBfaW5saW5lTGFiZWwpXG4gICAgICAgIC5nZXRSZWdleCgpXG59O1xuLyoqXG4gKiBHRk0gSW5saW5lIEdyYW1tYXJcbiAqL1xuY29uc3QgaW5saW5lR2ZtID0ge1xuICAgIC4uLmlubGluZU5vcm1hbCxcbiAgICBlc2NhcGU6IGVkaXQoZXNjYXBlKS5yZXBsYWNlKCddKScsICd+fF0pJykuZ2V0UmVnZXgoKSxcbiAgICB1cmw6IGVkaXQoL14oKD86ZnRwfGh0dHBzPyk6XFwvXFwvfHd3d1xcLikoPzpbYS16QS1aMC05XFwtXStcXC4/KStbXlxcczxdKnxeZW1haWwvLCAnaScpXG4gICAgICAgIC5yZXBsYWNlKCdlbWFpbCcsIC9bQS1aYS16MC05Ll8rLV0rKEApW2EtekEtWjAtOS1fXSsoPzpcXC5bYS16QS1aMC05LV9dKlthLXpBLVowLTldKSsoPyFbLV9dKS8pXG4gICAgICAgIC5nZXRSZWdleCgpLFxuICAgIF9iYWNrcGVkYWw6IC8oPzpbXj8hLiw6OypfJ1wifigpJl0rfFxcKFteKV0qXFwpfCYoPyFbYS16QS1aMC05XSs7JCl8Wz8hLiw6OypfJ1wifildKyg/ISQpKSsvLFxuICAgIGRlbDogL14ofn4/KSg/PVteXFxzfl0pKFtcXHNcXFNdKj9bXlxcc35dKVxcMSg/PVtefl18JCkvLFxuICAgIHRleHQ6IC9eKFtgfl0rfFteYH5dKSg/Oig/PSB7Mix9XFxuKXwoPz1bYS16QS1aMC05LiEjJCUmJyorXFwvPT9fYHtcXHx9fi1dK0ApfFtcXHNcXFNdKj8oPzooPz1bXFxcXDwhXFxbYCp+X118XFxiX3xodHRwcz86XFwvXFwvfGZ0cDpcXC9cXC98d3d3XFwufCQpfFteIF0oPz0gezIsfVxcbil8W15hLXpBLVowLTkuISMkJSYnKitcXC89P19ge1xcfH1+LV0oPz1bYS16QS1aMC05LiEjJCUmJyorXFwvPT9fYHtcXHx9fi1dK0ApKSkvXG59O1xuLyoqXG4gKiBHRk0gKyBMaW5lIEJyZWFrcyBJbmxpbmUgR3JhbW1hclxuICovXG5jb25zdCBpbmxpbmVCcmVha3MgPSB7XG4gICAgLi4uaW5saW5lR2ZtLFxuICAgIGJyOiBlZGl0KGJyKS5yZXBsYWNlKCd7Mix9JywgJyonKS5nZXRSZWdleCgpLFxuICAgIHRleHQ6IGVkaXQoaW5saW5lR2ZtLnRleHQpXG4gICAgICAgIC5yZXBsYWNlKCdcXFxcYl8nLCAnXFxcXGJffCB7Mix9XFxcXG4nKVxuICAgICAgICAucmVwbGFjZSgvXFx7MixcXH0vZywgJyonKVxuICAgICAgICAuZ2V0UmVnZXgoKVxufTtcbi8qKlxuICogZXhwb3J0c1xuICovXG5jb25zdCBibG9jayA9IHtcbiAgICBub3JtYWw6IGJsb2NrTm9ybWFsLFxuICAgIGdmbTogYmxvY2tHZm0sXG4gICAgcGVkYW50aWM6IGJsb2NrUGVkYW50aWNcbn07XG5jb25zdCBpbmxpbmUgPSB7XG4gICAgbm9ybWFsOiBpbmxpbmVOb3JtYWwsXG4gICAgZ2ZtOiBpbmxpbmVHZm0sXG4gICAgYnJlYWtzOiBpbmxpbmVCcmVha3MsXG4gICAgcGVkYW50aWM6IGlubGluZVBlZGFudGljXG59O1xuXG4vKipcbiAqIEJsb2NrIExleGVyXG4gKi9cbmNsYXNzIF9MZXhlciB7XG4gICAgdG9rZW5zO1xuICAgIG9wdGlvbnM7XG4gICAgc3RhdGU7XG4gICAgdG9rZW5pemVyO1xuICAgIGlubGluZVF1ZXVlO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVG9rZW5MaXN0IGNhbm5vdCBiZSBjcmVhdGVkIGluIG9uZSBnb1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuICAgICAgICB0aGlzLnRva2Vucy5saW5rcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgX2RlZmF1bHRzO1xuICAgICAgICB0aGlzLm9wdGlvbnMudG9rZW5pemVyID0gdGhpcy5vcHRpb25zLnRva2VuaXplciB8fCBuZXcgX1Rva2VuaXplcigpO1xuICAgICAgICB0aGlzLnRva2VuaXplciA9IHRoaXMub3B0aW9ucy50b2tlbml6ZXI7XG4gICAgICAgIHRoaXMudG9rZW5pemVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHRoaXMudG9rZW5pemVyLmxleGVyID0gdGhpcztcbiAgICAgICAgdGhpcy5pbmxpbmVRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5MaW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGluUmF3QmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgdG9wOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJ1bGVzID0ge1xuICAgICAgICAgICAgYmxvY2s6IGJsb2NrLm5vcm1hbCxcbiAgICAgICAgICAgIGlubGluZTogaW5saW5lLm5vcm1hbFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgICAgICAgICBydWxlcy5ibG9jayA9IGJsb2NrLnBlZGFudGljO1xuICAgICAgICAgICAgcnVsZXMuaW5saW5lID0gaW5saW5lLnBlZGFudGljO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICAgICAgICAgIHJ1bGVzLmJsb2NrID0gYmxvY2suZ2ZtO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5icmVha3MpIHtcbiAgICAgICAgICAgICAgICBydWxlcy5pbmxpbmUgPSBpbmxpbmUuYnJlYWtzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcnVsZXMuaW5saW5lID0gaW5saW5lLmdmbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2VuaXplci5ydWxlcyA9IHJ1bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBvc2UgUnVsZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHJ1bGVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmxvY2ssXG4gICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhdGljIExleCBNZXRob2RcbiAgICAgKi9cbiAgICBzdGF0aWMgbGV4KHNyYywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBsZXhlciA9IG5ldyBfTGV4ZXIob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBsZXhlci5sZXgoc3JjKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RhdGljIExleCBJbmxpbmUgTWV0aG9kXG4gICAgICovXG4gICAgc3RhdGljIGxleElubGluZShzcmMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbGV4ZXIgPSBuZXcgX0xleGVyKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gbGV4ZXIuaW5saW5lVG9rZW5zKHNyYyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBsZXgoc3JjKSB7XG4gICAgICAgIHNyYyA9IHNyY1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcclxcbnxcXHIvZywgJ1xcbicpO1xuICAgICAgICB0aGlzLmJsb2NrVG9rZW5zKHNyYywgdGhpcy50b2tlbnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5saW5lUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLmlubGluZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdGhpcy5pbmxpbmVUb2tlbnMobmV4dC5zcmMsIG5leHQudG9rZW5zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlubGluZVF1ZXVlID0gW107XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG4gICAgYmxvY2tUb2tlbnMoc3JjLCB0b2tlbnMgPSBbXSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFx0L2csICcgICAgJykucmVwbGFjZSgvXiArJC9nbSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoL14oICopKFxcdCspL2dtLCAoXywgbGVhZGluZywgdGFicykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWFkaW5nICsgJyAgICAnLnJlcGVhdCh0YWJzLmxlbmd0aCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9rZW47XG4gICAgICAgIGxldCBsYXN0VG9rZW47XG4gICAgICAgIGxldCBjdXRTcmM7XG4gICAgICAgIGxldCBsYXN0UGFyYWdyYXBoQ2xpcHBlZDtcbiAgICAgICAgd2hpbGUgKHNyYykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHRlbnNpb25zXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMuYmxvY2tcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucy5ibG9jay5zb21lKChleHRUb2tlbml6ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuID0gZXh0VG9rZW5pemVyLmNhbGwoeyBsZXhlcjogdGhpcyB9LCBzcmMsIHRva2VucykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG5ld2xpbmVcbiAgICAgICAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLnNwYWNlKHNyYykpIHtcbiAgICAgICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5yYXcubGVuZ3RoID09PSAxICYmIHRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgYSBzaW5nbGUgXFxuIGFzIGEgc3BhY2VyLCBpdCdzIHRlcm1pbmF0aW5nIHRoZSBsYXN0IGxpbmUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIG1vdmUgaXQgdGhlcmUgc28gdGhhdCB3ZSBkb24ndCBnZXQgdW5uZWNlc3NhcnkgcGFyYWdyYXBoIHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5yYXcgKz0gJ1xcbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29kZVxuICAgICAgICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuY29kZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIC8vIEFuIGluZGVudGVkIGNvZGUgYmxvY2sgY2Fubm90IGludGVycnVwdCBhIHBhcmFncmFwaC5cbiAgICAgICAgICAgICAgICBpZiAobGFzdFRva2VuICYmIChsYXN0VG9rZW4udHlwZSA9PT0gJ3BhcmFncmFwaCcgfHwgbGFzdFRva2VuLnR5cGUgPT09ICd0ZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRva2VuLnJhdyArPSAnXFxuJyArIHRva2VuLnJhdztcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRva2VuLnRleHQgKz0gJ1xcbicgKyB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubGluZVF1ZXVlW3RoaXMuaW5saW5lUXVldWUubGVuZ3RoIC0gMV0uc3JjID0gbGFzdFRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZmVuY2VzXG4gICAgICAgICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5mZW5jZXMoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGVhZGluZ1xuICAgICAgICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuaGVhZGluZyhzcmMpKSB7XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoclxuICAgICAgICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuaHIoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYmxvY2txdW90ZVxuICAgICAgICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuYmxvY2txdW90ZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsaXN0XG4gICAgICAgICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5saXN0KHNyYykpIHtcbiAgICAgICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGh0bWxcbiAgICAgICAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmh0bWwoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVmXG4gICAgICAgICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5kZWYoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFRva2VuICYmIChsYXN0VG9rZW4udHlwZSA9PT0gJ3BhcmFncmFwaCcgfHwgbGFzdFRva2VuLnR5cGUgPT09ICd0ZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRva2VuLnJhdyArPSAnXFxuJyArIHRva2VuLnJhdztcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRva2VuLnRleHQgKz0gJ1xcbicgKyB0b2tlbi5yYXc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lUXVldWVbdGhpcy5pbmxpbmVRdWV1ZS5sZW5ndGggLSAxXS5zcmMgPSBsYXN0VG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMudG9rZW5zLmxpbmtzW3Rva2VuLnRhZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMubGlua3NbdG9rZW4udGFnXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IHRva2VuLmhyZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdG9rZW4udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0YWJsZSAoZ2ZtKVxuICAgICAgICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIudGFibGUoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbGhlYWRpbmdcbiAgICAgICAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmxoZWFkaW5nKHNyYykpIHtcbiAgICAgICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvcC1sZXZlbCBwYXJhZ3JhcGhcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcGFyYWdyYXBoIGNvbnN1bWluZyBleHRlbnNpb25zIGJ5IGNsaXBwaW5nICdzcmMnIHRvIGV4dGVuc2lvbiBzdGFydFxuICAgICAgICAgICAgY3V0U3JjID0gc3JjO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHRlbnNpb25zICYmIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnN0YXJ0QmxvY2spIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBTcmMgPSBzcmMuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBTdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucy5zdGFydEJsb2NrLmZvckVhY2goKGdldFN0YXJ0SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFN0YXJ0ID0gZ2V0U3RhcnRJbmRleC5jYWxsKHsgbGV4ZXI6IHRoaXMgfSwgdGVtcFNyYyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVtcFN0YXJ0ID09PSAnbnVtYmVyJyAmJiB0ZW1wU3RhcnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IE1hdGgubWluKHN0YXJ0SW5kZXgsIHRlbXBTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRJbmRleCA8IEluZmluaXR5ICYmIHN0YXJ0SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdXRTcmMgPSBzcmMuc3Vic3RyaW5nKDAsIHN0YXJ0SW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3AgJiYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIucGFyYWdyYXBoKGN1dFNyYykpKSB7XG4gICAgICAgICAgICAgICAgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFBhcmFncmFwaENsaXBwZWQgJiYgbGFzdFRva2VuLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUb2tlbi5yYXcgKz0gJ1xcbicgKyB0b2tlbi5yYXc7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUb2tlbi50ZXh0ICs9ICdcXG4nICsgdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVRdWV1ZS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVRdWV1ZVt0aGlzLmlubGluZVF1ZXVlLmxlbmd0aCAtIDFdLnNyYyA9IGxhc3RUb2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0UGFyYWdyYXBoQ2xpcHBlZCA9IChjdXRTcmMubGVuZ3RoICE9PSBzcmMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGV4dFxuICAgICAgICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIudGV4dChzcmMpKSB7XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0VG9rZW4gJiYgbGFzdFRva2VuLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0VG9rZW4ucmF3ICs9ICdcXG4nICsgdG9rZW4ucmF3O1xuICAgICAgICAgICAgICAgICAgICBsYXN0VG9rZW4udGV4dCArPSAnXFxuJyArIHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lUXVldWUucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lUXVldWVbdGhpcy5pbmxpbmVRdWV1ZS5sZW5ndGggLSAxXS5zcmMgPSBsYXN0VG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyTXNnID0gJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS50b3AgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH1cbiAgICBpbmxpbmUoc3JjLCB0b2tlbnMgPSBbXSkge1xuICAgICAgICB0aGlzLmlubGluZVF1ZXVlLnB1c2goeyBzcmMsIHRva2VucyB9KTtcbiAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGV4aW5nL0NvbXBpbGluZ1xuICAgICAqL1xuICAgIGlubGluZVRva2VucyhzcmMsIHRva2VucyA9IFtdKSB7XG4gICAgICAgIGxldCB0b2tlbiwgbGFzdFRva2VuLCBjdXRTcmM7XG4gICAgICAgIC8vIFN0cmluZyB3aXRoIGxpbmtzIG1hc2tlZCB0byBhdm9pZCBpbnRlcmZlcmVuY2Ugd2l0aCBlbSBhbmQgc3Ryb25nXG4gICAgICAgIGxldCBtYXNrZWRTcmMgPSBzcmM7XG4gICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgbGV0IGtlZXBQcmV2Q2hhciwgcHJldkNoYXI7XG4gICAgICAgIC8vIE1hc2sgb3V0IHJlZmxpbmtzXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5saW5rcykge1xuICAgICAgICAgICAgY29uc3QgbGlua3MgPSBPYmplY3Qua2V5cyh0aGlzLnRva2Vucy5saW5rcyk7XG4gICAgICAgICAgICBpZiAobGlua3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHdoaWxlICgobWF0Y2ggPSB0aGlzLnRva2VuaXplci5ydWxlcy5pbmxpbmUucmVmbGlua1NlYXJjaC5leGVjKG1hc2tlZFNyYykpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtzLmluY2x1ZGVzKG1hdGNoWzBdLnNsaWNlKG1hdGNoWzBdLmxhc3RJbmRleE9mKCdbJykgKyAxLCAtMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrZWRTcmMgPSBtYXNrZWRTcmMuc2xpY2UoMCwgbWF0Y2guaW5kZXgpICsgJ1snICsgJ2EnLnJlcGVhdChtYXRjaFswXS5sZW5ndGggLSAyKSArICddJyArIG1hc2tlZFNyYy5zbGljZSh0aGlzLnRva2VuaXplci5ydWxlcy5pbmxpbmUucmVmbGlua1NlYXJjaC5sYXN0SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1hc2sgb3V0IG90aGVyIGJsb2Nrc1xuICAgICAgICB3aGlsZSAoKG1hdGNoID0gdGhpcy50b2tlbml6ZXIucnVsZXMuaW5saW5lLmJsb2NrU2tpcC5leGVjKG1hc2tlZFNyYykpICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hc2tlZFNyYyA9IG1hc2tlZFNyYy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyAnWycgKyAnYScucmVwZWF0KG1hdGNoWzBdLmxlbmd0aCAtIDIpICsgJ10nICsgbWFza2VkU3JjLnNsaWNlKHRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5ibG9ja1NraXAubGFzdEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNYXNrIG91dCBlc2NhcGVkIGNoYXJhY3RlcnNcbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IHRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5hbnlQdW5jdHVhdGlvbi5leGVjKG1hc2tlZFNyYykpICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hc2tlZFNyYyA9IG1hc2tlZFNyYy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyAnKysnICsgbWFza2VkU3JjLnNsaWNlKHRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5hbnlQdW5jdHVhdGlvbi5sYXN0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChzcmMpIHtcbiAgICAgICAgICAgIGlmICgha2VlcFByZXZDaGFyKSB7XG4gICAgICAgICAgICAgICAgcHJldkNoYXIgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtlZXBQcmV2Q2hhciA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gZXh0ZW5zaW9uc1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHRlbnNpb25zXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMuaW5saW5lXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMuaW5saW5lLnNvbWUoKGV4dFRva2VuaXplcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4gPSBleHRUb2tlbml6ZXIuY2FsbCh7IGxleGVyOiB0aGlzIH0sIHNyYywgdG9rZW5zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXNjYXBlXG4gICAgICAgICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5lc2NhcGUoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGFnXG4gICAgICAgICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci50YWcoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFRva2VuICYmIHRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiBsYXN0VG9rZW4udHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUb2tlbi5yYXcgKz0gdG9rZW4ucmF3O1xuICAgICAgICAgICAgICAgICAgICBsYXN0VG9rZW4udGV4dCArPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxpbmtcbiAgICAgICAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmxpbmsoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVmbGluaywgbm9saW5rXG4gICAgICAgICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5yZWZsaW5rKHNyYywgdGhpcy50b2tlbnMubGlua3MpKSB7XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0VG9rZW4gJiYgdG9rZW4udHlwZSA9PT0gJ3RleHQnICYmIGxhc3RUb2tlbi50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRva2VuLnJhdyArPSB0b2tlbi5yYXc7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUb2tlbi50ZXh0ICs9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZW0gJiBzdHJvbmdcbiAgICAgICAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmVtU3Ryb25nKHNyYywgbWFza2VkU3JjLCBwcmV2Q2hhcikpIHtcbiAgICAgICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvZGVcbiAgICAgICAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmNvZGVzcGFuKHNyYykpIHtcbiAgICAgICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJyXG4gICAgICAgICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5icihzcmMpKSB7XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWwgKGdmbSlcbiAgICAgICAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmRlbChzcmMpKSB7XG4gICAgICAgICAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhdXRvbGlua1xuICAgICAgICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuYXV0b2xpbmsoc3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdXJsIChnZm0pXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW5MaW5rICYmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLnVybChzcmMpKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGV4dFxuICAgICAgICAgICAgLy8gcHJldmVudCBpbmxpbmVUZXh0IGNvbnN1bWluZyBleHRlbnNpb25zIGJ5IGNsaXBwaW5nICdzcmMnIHRvIGV4dGVuc2lvbiBzdGFydFxuICAgICAgICAgICAgY3V0U3JjID0gc3JjO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHRlbnNpb25zICYmIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnN0YXJ0SW5saW5lKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBJbmZpbml0eTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wU3JjID0gc3JjLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMuc3RhcnRJbmxpbmUuZm9yRWFjaCgoZ2V0U3RhcnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wU3RhcnQgPSBnZXRTdGFydEluZGV4LmNhbGwoeyBsZXhlcjogdGhpcyB9LCB0ZW1wU3JjKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZW1wU3RhcnQgPT09ICdudW1iZXInICYmIHRlbXBTdGFydCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCwgdGVtcFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydEluZGV4IDwgSW5maW5pdHkgJiYgc3RhcnRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1dFNyYyA9IHNyYy5zdWJzdHJpbmcoMCwgc3RhcnRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmlubGluZVRleHQoY3V0U3JjKSkge1xuICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnJhdy5zbGljZSgtMSkgIT09ICdfJykgeyAvLyBUcmFjayBwcmV2Q2hhciBiZWZvcmUgc3RyaW5nIG9mIF9fX18gc3RhcnRlZFxuICAgICAgICAgICAgICAgICAgICBwcmV2Q2hhciA9IHRva2VuLnJhdy5zbGljZSgtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGtlZXBQcmV2Q2hhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFRva2VuICYmIGxhc3RUb2tlbi50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRva2VuLnJhdyArPSB0b2tlbi5yYXc7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUb2tlbi50ZXh0ICs9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyck1zZyA9ICdJbmZpbml0ZSBsb29wIG9uIGJ5dGU6ICcgKyBzcmMuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlbmRlcmVyXG4gKi9cbmNsYXNzIF9SZW5kZXJlciB7XG4gICAgb3B0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgX2RlZmF1bHRzO1xuICAgIH1cbiAgICBjb2RlKGNvZGUsIGluZm9zdHJpbmcsIGVzY2FwZWQpIHtcbiAgICAgICAgY29uc3QgbGFuZyA9IChpbmZvc3RyaW5nIHx8ICcnKS5tYXRjaCgvXlxcUyovKT8uWzBdO1xuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9cXG4kLywgJycpICsgJ1xcbic7XG4gICAgICAgIGlmICghbGFuZykge1xuICAgICAgICAgICAgcmV0dXJuICc8cHJlPjxjb2RlPidcbiAgICAgICAgICAgICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZSQxKGNvZGUsIHRydWUpKVxuICAgICAgICAgICAgICAgICsgJzwvY29kZT48L3ByZT5cXG4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLSdcbiAgICAgICAgICAgICsgZXNjYXBlJDEobGFuZylcbiAgICAgICAgICAgICsgJ1wiPidcbiAgICAgICAgICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlJDEoY29kZSwgdHJ1ZSkpXG4gICAgICAgICAgICArICc8L2NvZGU+PC9wcmU+XFxuJztcbiAgICB9XG4gICAgYmxvY2txdW90ZShxdW90ZSkge1xuICAgICAgICByZXR1cm4gYDxibG9ja3F1b3RlPlxcbiR7cXVvdGV9PC9ibG9ja3F1b3RlPlxcbmA7XG4gICAgfVxuICAgIGh0bWwoaHRtbCwgYmxvY2spIHtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIGhlYWRpbmcodGV4dCwgbGV2ZWwsIHJhdykge1xuICAgICAgICAvLyBpZ25vcmUgSURzXG4gICAgICAgIHJldHVybiBgPGgke2xldmVsfT4ke3RleHR9PC9oJHtsZXZlbH0+XFxuYDtcbiAgICB9XG4gICAgaHIoKSB7XG4gICAgICAgIHJldHVybiAnPGhyPlxcbic7XG4gICAgfVxuICAgIGxpc3QoYm9keSwgb3JkZXJlZCwgc3RhcnQpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9yZGVyZWQgPyAnb2wnIDogJ3VsJztcbiAgICAgICAgY29uc3Qgc3RhcnRhdHQgPSAob3JkZXJlZCAmJiBzdGFydCAhPT0gMSkgPyAoJyBzdGFydD1cIicgKyBzdGFydCArICdcIicpIDogJyc7XG4gICAgICAgIHJldHVybiAnPCcgKyB0eXBlICsgc3RhcnRhdHQgKyAnPlxcbicgKyBib2R5ICsgJzwvJyArIHR5cGUgKyAnPlxcbic7XG4gICAgfVxuICAgIGxpc3RpdGVtKHRleHQsIHRhc2ssIGNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIGA8bGk+JHt0ZXh0fTwvbGk+XFxuYDtcbiAgICB9XG4gICAgY2hlY2tib3goY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gJzxpbnB1dCAnXG4gICAgICAgICAgICArIChjaGVja2VkID8gJ2NoZWNrZWQ9XCJcIiAnIDogJycpXG4gICAgICAgICAgICArICdkaXNhYmxlZD1cIlwiIHR5cGU9XCJjaGVja2JveFwiPic7XG4gICAgfVxuICAgIHBhcmFncmFwaCh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBgPHA+JHt0ZXh0fTwvcD5cXG5gO1xuICAgIH1cbiAgICB0YWJsZShoZWFkZXIsIGJvZHkpIHtcbiAgICAgICAgaWYgKGJvZHkpXG4gICAgICAgICAgICBib2R5ID0gYDx0Ym9keT4ke2JvZHl9PC90Ym9keT5gO1xuICAgICAgICByZXR1cm4gJzx0YWJsZT5cXG4nXG4gICAgICAgICAgICArICc8dGhlYWQ+XFxuJ1xuICAgICAgICAgICAgKyBoZWFkZXJcbiAgICAgICAgICAgICsgJzwvdGhlYWQ+XFxuJ1xuICAgICAgICAgICAgKyBib2R5XG4gICAgICAgICAgICArICc8L3RhYmxlPlxcbic7XG4gICAgfVxuICAgIHRhYmxlcm93KGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGA8dHI+XFxuJHtjb250ZW50fTwvdHI+XFxuYDtcbiAgICB9XG4gICAgdGFibGVjZWxsKGNvbnRlbnQsIGZsYWdzKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBmbGFncy5oZWFkZXIgPyAndGgnIDogJ3RkJztcbiAgICAgICAgY29uc3QgdGFnID0gZmxhZ3MuYWxpZ25cbiAgICAgICAgICAgID8gYDwke3R5cGV9IGFsaWduPVwiJHtmbGFncy5hbGlnbn1cIj5gXG4gICAgICAgICAgICA6IGA8JHt0eXBlfT5gO1xuICAgICAgICByZXR1cm4gdGFnICsgY29udGVudCArIGA8LyR7dHlwZX0+XFxuYDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc3BhbiBsZXZlbCByZW5kZXJlclxuICAgICAqL1xuICAgIHN0cm9uZyh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBgPHN0cm9uZz4ke3RleHR9PC9zdHJvbmc+YDtcbiAgICB9XG4gICAgZW0odGV4dCkge1xuICAgICAgICByZXR1cm4gYDxlbT4ke3RleHR9PC9lbT5gO1xuICAgIH1cbiAgICBjb2Rlc3Bhbih0ZXh0KSB7XG4gICAgICAgIHJldHVybiBgPGNvZGU+JHt0ZXh0fTwvY29kZT5gO1xuICAgIH1cbiAgICBicigpIHtcbiAgICAgICAgcmV0dXJuICc8YnI+JztcbiAgICB9XG4gICAgZGVsKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIGA8ZGVsPiR7dGV4dH08L2RlbD5gO1xuICAgIH1cbiAgICBsaW5rKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gICAgICAgIGNvbnN0IGNsZWFuSHJlZiA9IGNsZWFuVXJsKGhyZWYpO1xuICAgICAgICBpZiAoY2xlYW5IcmVmID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBocmVmID0gY2xlYW5IcmVmO1xuICAgICAgICBsZXQgb3V0ID0gJzxhIGhyZWY9XCInICsgaHJlZiArICdcIic7XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICAgICAgICB9XG4gICAgICAgIG91dCArPSAnPicgKyB0ZXh0ICsgJzwvYT4nO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBpbWFnZShocmVmLCB0aXRsZSwgdGV4dCkge1xuICAgICAgICBjb25zdCBjbGVhbkhyZWYgPSBjbGVhblVybChocmVmKTtcbiAgICAgICAgaWYgKGNsZWFuSHJlZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaHJlZiA9IGNsZWFuSHJlZjtcbiAgICAgICAgbGV0IG91dCA9IGA8aW1nIHNyYz1cIiR7aHJlZn1cIiBhbHQ9XCIke3RleHR9XCJgO1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIG91dCArPSBgIHRpdGxlPVwiJHt0aXRsZX1cImA7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ICs9ICc+JztcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgdGV4dCh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBUZXh0UmVuZGVyZXJcbiAqIHJldHVybnMgb25seSB0aGUgdGV4dHVhbCBwYXJ0IG9mIHRoZSB0b2tlblxuICovXG5jbGFzcyBfVGV4dFJlbmRlcmVyIHtcbiAgICAvLyBubyBuZWVkIGZvciBibG9jayBsZXZlbCByZW5kZXJlcnNcbiAgICBzdHJvbmcodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgZW0odGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgY29kZXNwYW4odGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgZGVsKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIGh0bWwodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgdGV4dCh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBsaW5rKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gICAgICAgIHJldHVybiAnJyArIHRleHQ7XG4gICAgfVxuICAgIGltYWdlKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gICAgICAgIHJldHVybiAnJyArIHRleHQ7XG4gICAgfVxuICAgIGJyKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuXG4vKipcbiAqIFBhcnNpbmcgJiBDb21waWxpbmdcbiAqL1xuY2xhc3MgX1BhcnNlciB7XG4gICAgb3B0aW9ucztcbiAgICByZW5kZXJlcjtcbiAgICB0ZXh0UmVuZGVyZXI7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IF9kZWZhdWx0cztcbiAgICAgICAgdGhpcy5vcHRpb25zLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBfUmVuZGVyZXIoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlcjtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICB0aGlzLnRleHRSZW5kZXJlciA9IG5ldyBfVGV4dFJlbmRlcmVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXRpYyBQYXJzZSBNZXRob2RcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2UodG9rZW5zLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBfUGFyc2VyKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXRpYyBQYXJzZSBJbmxpbmUgTWV0aG9kXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlSW5saW5lKHRva2Vucywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgX1BhcnNlcihvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlci5wYXJzZUlubGluZSh0b2tlbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZSBMb29wXG4gICAgICovXG4gICAgcGFyc2UodG9rZW5zLCB0b3AgPSB0cnVlKSB7XG4gICAgICAgIGxldCBvdXQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgLy8gUnVuIGFueSByZW5kZXJlciBleHRlbnNpb25zXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmV4dGVuc2lvbnMgJiYgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMucmVuZGVyZXJzICYmIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnJlbmRlcmVyc1t0b2tlbi50eXBlXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdlbmVyaWNUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnJlbmRlcmVyc1tnZW5lcmljVG9rZW4udHlwZV0uY2FsbCh7IHBhcnNlcjogdGhpcyB9LCBnZW5lcmljVG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChyZXQgIT09IGZhbHNlIHx8ICFbJ3NwYWNlJywgJ2hyJywgJ2hlYWRpbmcnLCAnY29kZScsICd0YWJsZScsICdibG9ja3F1b3RlJywgJ2xpc3QnLCAnaHRtbCcsICdwYXJhZ3JhcGgnLCAndGV4dCddLmluY2x1ZGVzKGdlbmVyaWNUb2tlbi50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gcmV0IHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2hyJzoge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5ocigpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGluZyc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGluZ1Rva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmhlYWRpbmcodGhpcy5wYXJzZUlubGluZShoZWFkaW5nVG9rZW4udG9rZW5zKSwgaGVhZGluZ1Rva2VuLmRlcHRoLCB1bmVzY2FwZSh0aGlzLnBhcnNlSW5saW5lKGhlYWRpbmdUb2tlbi50b2tlbnMsIHRoaXMudGV4dFJlbmRlcmVyKSkpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnY29kZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29kZVRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmNvZGUoY29kZVRva2VuLnRleHQsIGNvZGVUb2tlbi5sYW5nLCAhIWNvZGVUb2tlbi5lc2NhcGVkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYmxlJzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZVRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFibGVUb2tlbi5oZWFkZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwodGhpcy5wYXJzZUlubGluZSh0YWJsZVRva2VuLmhlYWRlcltqXS50b2tlbnMpLCB7IGhlYWRlcjogdHJ1ZSwgYWxpZ246IHRhYmxlVG9rZW4uYWxpZ25bal0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFibGVUb2tlbi5yb3dzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZVRva2VuLnJvd3Nbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJvdy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwodGhpcy5wYXJzZUlubGluZShyb3dba10udG9rZW5zKSwgeyBoZWFkZXI6IGZhbHNlLCBhbGlnbjogdGFibGVUb2tlbi5hbGlnbltrXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gdGhpcy5yZW5kZXJlci50YWJsZXJvdyhjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci50YWJsZShoZWFkZXIsIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYmxvY2txdW90ZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2txdW90ZVRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLnBhcnNlKGJsb2NrcXVvdGVUb2tlbi50b2tlbnMpO1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5ibG9ja3F1b3RlKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnbGlzdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyZWQgPSBsaXN0VG9rZW4ub3JkZXJlZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBsaXN0VG9rZW4uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvb3NlID0gbGlzdFRva2VuLmxvb3NlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpc3RUb2tlbi5pdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGxpc3RUb2tlbi5pdGVtc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBpdGVtLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gaXRlbS50YXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1Cb2R5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0aGlzLnJlbmRlcmVyLmNoZWNrYm94KCEhY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRva2Vucy5sZW5ndGggPiAwICYmIGl0ZW0udG9rZW5zWzBdLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRva2Vuc1swXS50ZXh0ID0gY2hlY2tib3ggKyAnICcgKyBpdGVtLnRva2Vuc1swXS50ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udG9rZW5zWzBdLnRva2VucyAmJiBpdGVtLnRva2Vuc1swXS50b2tlbnMubGVuZ3RoID4gMCAmJiBpdGVtLnRva2Vuc1swXS50b2tlbnNbMF0udHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50b2tlbnNbMF0udG9rZW5zWzBdLnRleHQgPSBjaGVja2JveCArICcgJyArIGl0ZW0udG9rZW5zWzBdLnRva2Vuc1swXS50ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50b2tlbnMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGNoZWNrYm94ICsgJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJvZHkgKz0gY2hlY2tib3ggKyAnICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJvZHkgKz0gdGhpcy5wYXJzZShpdGVtLnRva2VucywgbG9vc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSB0aGlzLnJlbmRlcmVyLmxpc3RpdGVtKGl0ZW1Cb2R5LCB0YXNrLCAhIWNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpc3QoYm9keSwgb3JkZXJlZCwgc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnaHRtbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmh0bWwoaHRtbFRva2VuLnRleHQsIGh0bWxUb2tlbi5ibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdwYXJhZ3JhcGgnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnBhcmFncmFwaCh0aGlzLnBhcnNlSW5saW5lKHBhcmFncmFwaFRva2VuLnRva2VucykpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHRleHRUb2tlbi50b2tlbnMgPyB0aGlzLnBhcnNlSW5saW5lKHRleHRUb2tlbi50b2tlbnMpIDogdGV4dFRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpICsgMSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2kgKyAxXS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUb2tlbiA9IHRva2Vuc1srK2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSAnXFxuJyArICh0ZXh0VG9rZW4udG9rZW5zID8gdGhpcy5wYXJzZUlubGluZSh0ZXh0VG9rZW4udG9rZW5zKSA6IHRleHRUb2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gdG9wID8gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgoYm9keSkgOiBib2R5O1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJNc2cgPSAnVG9rZW4gd2l0aCBcIicgKyB0b2tlbi50eXBlICsgJ1wiIHR5cGUgd2FzIG5vdCBmb3VuZC4nO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2UgSW5saW5lIFRva2Vuc1xuICAgICAqL1xuICAgIHBhcnNlSW5saW5lKHRva2VucywgcmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIgPSByZW5kZXJlciB8fCB0aGlzLnJlbmRlcmVyO1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIC8vIFJ1biBhbnkgcmVuZGVyZXIgZXh0ZW5zaW9uc1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHRlbnNpb25zICYmIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnJlbmRlcmVycyAmJiB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucy5yZW5kZXJlcnNbdG9rZW4udHlwZV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXQgPSB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucy5yZW5kZXJlcnNbdG9rZW4udHlwZV0uY2FsbCh7IHBhcnNlcjogdGhpcyB9LCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHJldCAhPT0gZmFsc2UgfHwgIVsnZXNjYXBlJywgJ2h0bWwnLCAnbGluaycsICdpbWFnZScsICdzdHJvbmcnLCAnZW0nLCAnY29kZXNwYW4nLCAnYnInLCAnZGVsJywgJ3RleHQnXS5pbmNsdWRlcyh0b2tlbi50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gcmV0IHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdlc2NhcGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVzY2FwZVRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSByZW5kZXJlci50ZXh0KGVzY2FwZVRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnaHRtbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFnVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLmh0bWwodGFnVG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdsaW5rJzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLmxpbmsobGlua1Rva2VuLmhyZWYsIGxpbmtUb2tlbi50aXRsZSwgdGhpcy5wYXJzZUlubGluZShsaW5rVG9rZW4udG9rZW5zLCByZW5kZXJlcikpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLmltYWdlKGltYWdlVG9rZW4uaHJlZiwgaW1hZ2VUb2tlbi50aXRsZSwgaW1hZ2VUb2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cm9uZyc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Ryb25nVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLnN0cm9uZyh0aGlzLnBhcnNlSW5saW5lKHN0cm9uZ1Rva2VuLnRva2VucywgcmVuZGVyZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtJzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbVRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSByZW5kZXJlci5lbSh0aGlzLnBhcnNlSW5saW5lKGVtVG9rZW4udG9rZW5zLCByZW5kZXJlcikpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnY29kZXNwYW4nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvZGVzcGFuVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLmNvZGVzcGFuKGNvZGVzcGFuVG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdicic6IHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLmJyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdkZWwnOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSByZW5kZXJlci5kZWwodGhpcy5wYXJzZUlubGluZShkZWxUb2tlbi50b2tlbnMsIHJlbmRlcmVyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLnRleHQodGV4dFRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJNc2cgPSAnVG9rZW4gd2l0aCBcIicgKyB0b2tlbi50eXBlICsgJ1wiIHR5cGUgd2FzIG5vdCBmb3VuZC4nO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG5cbmNsYXNzIF9Ib29rcyB7XG4gICAgb3B0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgX2RlZmF1bHRzO1xuICAgIH1cbiAgICBzdGF0aWMgcGFzc1Rocm91Z2hIb29rcyA9IG5ldyBTZXQoW1xuICAgICAgICAncHJlcHJvY2VzcycsXG4gICAgICAgICdwb3N0cHJvY2VzcycsXG4gICAgICAgICdwcm9jZXNzQWxsVG9rZW5zJ1xuICAgIF0pO1xuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgbWFya2Rvd24gYmVmb3JlIG1hcmtlZFxuICAgICAqL1xuICAgIHByZXByb2Nlc3MobWFya2Rvd24pIHtcbiAgICAgICAgcmV0dXJuIG1hcmtkb3duO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIEhUTUwgYWZ0ZXIgbWFya2VkIGlzIGZpbmlzaGVkXG4gICAgICovXG4gICAgcG9zdHByb2Nlc3MoaHRtbCkge1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbGwgdG9rZW5zIGJlZm9yZSB3YWxrIHRva2Vuc1xuICAgICAqL1xuICAgIHByb2Nlc3NBbGxUb2tlbnModG9rZW5zKSB7XG4gICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfVxufVxuXG5jbGFzcyBNYXJrZWQge1xuICAgIGRlZmF1bHRzID0gX2dldERlZmF1bHRzKCk7XG4gICAgb3B0aW9ucyA9IHRoaXMuc2V0T3B0aW9ucztcbiAgICBwYXJzZSA9IHRoaXMuI3BhcnNlTWFya2Rvd24oX0xleGVyLmxleCwgX1BhcnNlci5wYXJzZSk7XG4gICAgcGFyc2VJbmxpbmUgPSB0aGlzLiNwYXJzZU1hcmtkb3duKF9MZXhlci5sZXhJbmxpbmUsIF9QYXJzZXIucGFyc2VJbmxpbmUpO1xuICAgIFBhcnNlciA9IF9QYXJzZXI7XG4gICAgUmVuZGVyZXIgPSBfUmVuZGVyZXI7XG4gICAgVGV4dFJlbmRlcmVyID0gX1RleHRSZW5kZXJlcjtcbiAgICBMZXhlciA9IF9MZXhlcjtcbiAgICBUb2tlbml6ZXIgPSBfVG9rZW5pemVyO1xuICAgIEhvb2tzID0gX0hvb2tzO1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy51c2UoLi4uYXJncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJ1biBjYWxsYmFjayBmb3IgZXZlcnkgdG9rZW5cbiAgICAgKi9cbiAgICB3YWxrVG9rZW5zKHRva2VucywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChjYWxsYmFjay5jYWxsKHRoaXMsIHRva2VuKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0YWJsZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGVUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgdGFibGVUb2tlbi5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQodGhpcy53YWxrVG9rZW5zKGNlbGwudG9rZW5zLCBjYWxsYmFjaykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRhYmxlVG9rZW4ucm93cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQodGhpcy53YWxrVG9rZW5zKGNlbGwudG9rZW5zLCBjYWxsYmFjaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdsaXN0Jzoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdCh0aGlzLndhbGtUb2tlbnMobGlzdFRva2VuLml0ZW1zLCBjYWxsYmFjaykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmljVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHMuZXh0ZW5zaW9ucz8uY2hpbGRUb2tlbnM/LltnZW5lcmljVG9rZW4udHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuZXh0ZW5zaW9ucy5jaGlsZFRva2Vuc1tnZW5lcmljVG9rZW4udHlwZV0uZm9yRWFjaCgoY2hpbGRUb2tlbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBnZW5lcmljVG9rZW5bY2hpbGRUb2tlbnNdLmZsYXQoSW5maW5pdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQodGhpcy53YWxrVG9rZW5zKHRva2VucywgY2FsbGJhY2spKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGdlbmVyaWNUb2tlbi50b2tlbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQodGhpcy53YWxrVG9rZW5zKGdlbmVyaWNUb2tlbi50b2tlbnMsIGNhbGxiYWNrKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG4gICAgdXNlKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZGVmYXVsdHMuZXh0ZW5zaW9ucyB8fCB7IHJlbmRlcmVyczoge30sIGNoaWxkVG9rZW5zOiB7fSB9O1xuICAgICAgICBhcmdzLmZvckVhY2goKHBhY2spID0+IHtcbiAgICAgICAgICAgIC8vIGNvcHkgb3B0aW9ucyB0byBuZXcgb2JqZWN0XG4gICAgICAgICAgICBjb25zdCBvcHRzID0geyAuLi5wYWNrIH07XG4gICAgICAgICAgICAvLyBzZXQgYXN5bmMgdG8gdHJ1ZSBpZiBpdCB3YXMgc2V0IHRvIHRydWUgYmVmb3JlXG4gICAgICAgICAgICBvcHRzLmFzeW5jID0gdGhpcy5kZWZhdWx0cy5hc3luYyB8fCBvcHRzLmFzeW5jIHx8IGZhbHNlO1xuICAgICAgICAgICAgLy8gPT0tLSBQYXJzZSBcImFkZG9uXCIgZXh0ZW5zaW9ucyAtLT09IC8vXG4gICAgICAgICAgICBpZiAocGFjay5leHRlbnNpb25zKSB7XG4gICAgICAgICAgICAgICAgcGFjay5leHRlbnNpb25zLmZvckVhY2goKGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V4dGVuc2lvbiBuYW1lIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCdyZW5kZXJlcicgaW4gZXh0KSB7IC8vIFJlbmRlcmVyIGV4dGVuc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZSZW5kZXJlciA9IGV4dGVuc2lvbnMucmVuZGVyZXJzW2V4dC5uYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIGV4dGVuc2lvbiB3aXRoIGZ1bmMgdG8gcnVuIG5ldyBleHRlbnNpb24gYnV0IGZhbGwgYmFjayBpZiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnMucmVuZGVyZXJzW2V4dC5uYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSBleHQucmVuZGVyZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQgPSBwcmV2UmVuZGVyZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9ucy5yZW5kZXJlcnNbZXh0Lm5hbWVdID0gZXh0LnJlbmRlcmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgndG9rZW5pemVyJyBpbiBleHQpIHsgLy8gVG9rZW5pemVyIEV4dGVuc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXh0LmxldmVsIHx8IChleHQubGV2ZWwgIT09ICdibG9jaycgJiYgZXh0LmxldmVsICE9PSAnaW5saW5lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHRlbnNpb24gbGV2ZWwgbXVzdCBiZSAnYmxvY2snIG9yICdpbmxpbmUnXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0TGV2ZWwgPSBleHRlbnNpb25zW2V4dC5sZXZlbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRMZXZlbC51bnNoaWZ0KGV4dC50b2tlbml6ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uc1tleHQubGV2ZWxdID0gW2V4dC50b2tlbml6ZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dC5zdGFydCkgeyAvLyBGdW5jdGlvbiB0byBjaGVjayBmb3Igc3RhcnQgb2YgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0LmxldmVsID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb25zLnN0YXJ0QmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnMuc3RhcnRCbG9jay5wdXNoKGV4dC5zdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zLnN0YXJ0QmxvY2sgPSBbZXh0LnN0YXJ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChleHQubGV2ZWwgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb25zLnN0YXJ0SW5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zLnN0YXJ0SW5saW5lLnB1c2goZXh0LnN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnMuc3RhcnRJbmxpbmUgPSBbZXh0LnN0YXJ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJ2NoaWxkVG9rZW5zJyBpbiBleHQgJiYgZXh0LmNoaWxkVG9rZW5zKSB7IC8vIENoaWxkIHRva2VucyB0byBiZSB2aXNpdGVkIGJ5IHdhbGtUb2tlbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnMuY2hpbGRUb2tlbnNbZXh0Lm5hbWVdID0gZXh0LmNoaWxkVG9rZW5zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb3B0cy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vID09LS0gUGFyc2UgXCJvdmVyd3JpdGVcIiBleHRlbnNpb25zIC0tPT0gLy9cbiAgICAgICAgICAgIGlmIChwYWNrLnJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLmRlZmF1bHRzLnJlbmRlcmVyIHx8IG5ldyBfUmVuZGVyZXIodGhpcy5kZWZhdWx0cyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHBhY2sucmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEocHJvcCBpbiByZW5kZXJlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyZXIgJyR7cHJvcH0nIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvcHRpb25zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIG9wdGlvbnMgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyUHJvcCA9IHByb3A7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyRnVuYyA9IHBhY2sucmVuZGVyZXJbcmVuZGVyZXJQcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlJlbmRlcmVyID0gcmVuZGVyZXJbcmVuZGVyZXJQcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSByZW5kZXJlciB3aXRoIGZ1bmMgdG8gcnVuIGV4dGVuc2lvbiwgYnV0IGZhbGwgYmFjayBpZiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlcltyZW5kZXJlclByb3BdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSByZW5kZXJlckZ1bmMuYXBwbHkocmVuZGVyZXIsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQgPSBwcmV2UmVuZGVyZXIuYXBwbHkocmVuZGVyZXIsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldCB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0cy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhY2sudG9rZW5pemVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5pemVyID0gdGhpcy5kZWZhdWx0cy50b2tlbml6ZXIgfHwgbmV3IF9Ub2tlbml6ZXIodGhpcy5kZWZhdWx0cyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHBhY2sudG9rZW5pemVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHByb3AgaW4gdG9rZW5pemVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB0b2tlbml6ZXIgJyR7cHJvcH0nIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFsnb3B0aW9ucycsICdydWxlcycsICdsZXhlciddLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgb3B0aW9ucywgcnVsZXMsIGFuZCBsZXhlciBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbml6ZXJQcm9wID0gcHJvcDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW5pemVyRnVuYyA9IHBhY2sudG9rZW5pemVyW3Rva2VuaXplclByb3BdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VG9rZW5pemVyID0gdG9rZW5pemVyW3Rva2VuaXplclByb3BdO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRva2VuaXplciB3aXRoIGZ1bmMgdG8gcnVuIGV4dGVuc2lvbiwgYnV0IGZhbGwgYmFjayBpZiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGNhbm5vdCB0eXBlIHRva2VuaXplciBmdW5jdGlvbiBkeW5hbWljYWxseVxuICAgICAgICAgICAgICAgICAgICB0b2tlbml6ZXJbdG9rZW5pemVyUHJvcF0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJldCA9IHRva2VuaXplckZ1bmMuYXBwbHkodG9rZW5pemVyLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcHJldlRva2VuaXplci5hcHBseSh0b2tlbml6ZXIsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0cy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyA9PS0tIFBhcnNlIEhvb2tzIGV4dGVuc2lvbnMgLS09PSAvL1xuICAgICAgICAgICAgaWYgKHBhY2suaG9va3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBob29rcyA9IHRoaXMuZGVmYXVsdHMuaG9va3MgfHwgbmV3IF9Ib29rcygpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBwYWNrLmhvb2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHByb3AgaW4gaG9va3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGhvb2sgJyR7cHJvcH0nIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvcHRpb25zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIG9wdGlvbnMgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvb2tzUHJvcCA9IHByb3A7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvb2tzRnVuYyA9IHBhY2suaG9va3NbaG9va3NQcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldkhvb2sgPSBob29rc1tob29rc1Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX0hvb2tzLnBhc3NUaHJvdWdoSG9va3MuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGNhbm5vdCB0eXBlIGhvb2sgZnVuY3Rpb24gZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tzW2hvb2tzUHJvcF0gPSAoYXJnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHMuYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShob29rc0Z1bmMuY2FsbChob29rcywgYXJnKSkudGhlbihyZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZIb29rLmNhbGwoaG9va3MsIHJldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXQgPSBob29rc0Z1bmMuY2FsbChob29rcywgYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldkhvb2suY2FsbChob29rcywgcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGNhbm5vdCB0eXBlIGhvb2sgZnVuY3Rpb24gZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tzW2hvb2tzUHJvcF0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXQgPSBob29rc0Z1bmMuYXBwbHkoaG9va3MsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHByZXZIb29rLmFwcGx5KGhvb2tzLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0cy5ob29rcyA9IGhvb2tzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gPT0tLSBQYXJzZSBXYWxrVG9rZW5zIGV4dGVuc2lvbnMgLS09PSAvL1xuICAgICAgICAgICAgaWYgKHBhY2sud2Fsa1Rva2Vucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhbGtUb2tlbnMgPSB0aGlzLmRlZmF1bHRzLndhbGtUb2tlbnM7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFja1dhbGt0b2tlbnMgPSBwYWNrLndhbGtUb2tlbnM7XG4gICAgICAgICAgICAgICAgb3B0cy53YWxrVG9rZW5zID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gocGFja1dhbGt0b2tlbnMuY2FsbCh0aGlzLCB0b2tlbikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAod2Fsa1Rva2Vucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdCh3YWxrVG9rZW5zLmNhbGwodGhpcywgdG9rZW4pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRzID0geyAuLi50aGlzLmRlZmF1bHRzLCAuLi5vcHRzIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0T3B0aW9ucyhvcHQpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHsgLi4udGhpcy5kZWZhdWx0cywgLi4ub3B0IH07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsZXhlcihzcmMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9MZXhlci5sZXgoc3JjLCBvcHRpb25zID8/IHRoaXMuZGVmYXVsdHMpO1xuICAgIH1cbiAgICBwYXJzZXIodG9rZW5zLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfUGFyc2VyLnBhcnNlKHRva2Vucywgb3B0aW9ucyA/PyB0aGlzLmRlZmF1bHRzKTtcbiAgICB9XG4gICAgI3BhcnNlTWFya2Rvd24obGV4ZXIsIHBhcnNlcikge1xuICAgICAgICByZXR1cm4gKHNyYywgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ09wdCA9IHsgLi4ub3B0aW9ucyB9O1xuICAgICAgICAgICAgY29uc3Qgb3B0ID0geyAuLi50aGlzLmRlZmF1bHRzLCAuLi5vcmlnT3B0IH07XG4gICAgICAgICAgICAvLyBTaG93IHdhcm5pbmcgaWYgYW4gZXh0ZW5zaW9uIHNldCBhc3luYyB0byB0cnVlIGJ1dCB0aGUgcGFyc2Ugd2FzIGNhbGxlZCB3aXRoIGFzeW5jOiBmYWxzZVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdHMuYXN5bmMgPT09IHRydWUgJiYgb3JpZ09wdC5hc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wdC5zaWxlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdtYXJrZWQoKTogVGhlIGFzeW5jIG9wdGlvbiB3YXMgc2V0IHRvIHRydWUgYnkgYW4gZXh0ZW5zaW9uLiBUaGUgYXN5bmM6IGZhbHNlIG9wdGlvbiBzZW50IHRvIHBhcnNlIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRocm93RXJyb3IgPSB0aGlzLiNvbkVycm9yKCEhb3B0LnNpbGVudCwgISFvcHQuYXN5bmMpO1xuICAgICAgICAgICAgLy8gdGhyb3cgZXJyb3IgaW4gY2FzZSBvZiBub24gc3RyaW5nIGlucHV0XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ3VuZGVmaW5lZCcgfHwgc3JjID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKCdtYXJrZWQoKTogaW5wdXQgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBudWxsJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcmMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IobmV3IEVycm9yKCdtYXJrZWQoKTogaW5wdXQgcGFyYW1ldGVyIGlzIG9mIHR5cGUgJ1xuICAgICAgICAgICAgICAgICAgICArIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzcmMpICsgJywgc3RyaW5nIGV4cGVjdGVkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5ob29rcykge1xuICAgICAgICAgICAgICAgIG9wdC5ob29rcy5vcHRpb25zID0gb3B0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdC5hc3luYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUob3B0Lmhvb2tzID8gb3B0Lmhvb2tzLnByZXByb2Nlc3Moc3JjKSA6IHNyYylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3JjID0+IGxleGVyKHNyYywgb3B0KSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odG9rZW5zID0+IG9wdC5ob29rcyA/IG9wdC5ob29rcy5wcm9jZXNzQWxsVG9rZW5zKHRva2VucykgOiB0b2tlbnMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHRva2VucyA9PiBvcHQud2Fsa1Rva2VucyA/IFByb21pc2UuYWxsKHRoaXMud2Fsa1Rva2Vucyh0b2tlbnMsIG9wdC53YWxrVG9rZW5zKSkudGhlbigoKSA9PiB0b2tlbnMpIDogdG9rZW5zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbih0b2tlbnMgPT4gcGFyc2VyKHRva2Vucywgb3B0KSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiBvcHQuaG9va3MgPyBvcHQuaG9va3MucG9zdHByb2Nlc3MoaHRtbCkgOiBodG1sKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhyb3dFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChvcHQuaG9va3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjID0gb3B0Lmhvb2tzLnByZXByb2Nlc3Moc3JjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHRva2VucyA9IGxleGVyKHNyYywgb3B0KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0Lmhvb2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VucyA9IG9wdC5ob29rcy5wcm9jZXNzQWxsVG9rZW5zKHRva2Vucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHQud2Fsa1Rva2Vucykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGtUb2tlbnModG9rZW5zLCBvcHQud2Fsa1Rva2Vucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBodG1sID0gcGFyc2VyKHRva2Vucywgb3B0KTtcbiAgICAgICAgICAgICAgICBpZiAob3B0Lmhvb2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWwgPSBvcHQuaG9va3MucG9zdHByb2Nlc3MoaHRtbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgI29uRXJyb3Ioc2lsZW50LCBhc3luYykge1xuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGUubWVzc2FnZSArPSAnXFxuUGxlYXNlIHJlcG9ydCB0aGlzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZWRqcy9tYXJrZWQuJztcbiAgICAgICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSAnPHA+QW4gZXJyb3Igb2NjdXJyZWQ6PC9wPjxwcmU+J1xuICAgICAgICAgICAgICAgICAgICArIGVzY2FwZSQxKGUubWVzc2FnZSArICcnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICArICc8L3ByZT4nO1xuICAgICAgICAgICAgICAgIGlmIChhc3luYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXN5bmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuY29uc3QgbWFya2VkSW5zdGFuY2UgPSBuZXcgTWFya2VkKCk7XG5mdW5jdGlvbiBtYXJrZWQoc3JjLCBvcHQpIHtcbiAgICByZXR1cm4gbWFya2VkSW5zdGFuY2UucGFyc2Uoc3JjLCBvcHQpO1xufVxuLyoqXG4gKiBTZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgSGFzaCBvZiBvcHRpb25zXG4gKi9cbm1hcmtlZC5vcHRpb25zID1cbiAgICBtYXJrZWQuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIG1hcmtlZEluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIG1hcmtlZC5kZWZhdWx0cyA9IG1hcmtlZEluc3RhbmNlLmRlZmF1bHRzO1xuICAgICAgICBjaGFuZ2VEZWZhdWx0cyhtYXJrZWQuZGVmYXVsdHMpO1xuICAgICAgICByZXR1cm4gbWFya2VkO1xuICAgIH07XG4vKipcbiAqIEdldHMgdGhlIG9yaWdpbmFsIG1hcmtlZCBkZWZhdWx0IG9wdGlvbnMuXG4gKi9cbm1hcmtlZC5nZXREZWZhdWx0cyA9IF9nZXREZWZhdWx0cztcbm1hcmtlZC5kZWZhdWx0cyA9IF9kZWZhdWx0cztcbi8qKlxuICogVXNlIEV4dGVuc2lvblxuICovXG5tYXJrZWQudXNlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBtYXJrZWRJbnN0YW5jZS51c2UoLi4uYXJncyk7XG4gICAgbWFya2VkLmRlZmF1bHRzID0gbWFya2VkSW5zdGFuY2UuZGVmYXVsdHM7XG4gICAgY2hhbmdlRGVmYXVsdHMobWFya2VkLmRlZmF1bHRzKTtcbiAgICByZXR1cm4gbWFya2VkO1xufTtcbi8qKlxuICogUnVuIGNhbGxiYWNrIGZvciBldmVyeSB0b2tlblxuICovXG5tYXJrZWQud2Fsa1Rva2VucyA9IGZ1bmN0aW9uICh0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIG1hcmtlZEluc3RhbmNlLndhbGtUb2tlbnModG9rZW5zLCBjYWxsYmFjayk7XG59O1xuLyoqXG4gKiBDb21waWxlcyBtYXJrZG93biB0byBIVE1MIHdpdGhvdXQgZW5jbG9zaW5nIGBwYCB0YWcuXG4gKlxuICogQHBhcmFtIHNyYyBTdHJpbmcgb2YgbWFya2Rvd24gc291cmNlIHRvIGJlIGNvbXBpbGVkXG4gKiBAcGFyYW0gb3B0aW9ucyBIYXNoIG9mIG9wdGlvbnNcbiAqIEByZXR1cm4gU3RyaW5nIG9mIGNvbXBpbGVkIEhUTUxcbiAqL1xubWFya2VkLnBhcnNlSW5saW5lID0gbWFya2VkSW5zdGFuY2UucGFyc2VJbmxpbmU7XG4vKipcbiAqIEV4cG9zZVxuICovXG5tYXJrZWQuUGFyc2VyID0gX1BhcnNlcjtcbm1hcmtlZC5wYXJzZXIgPSBfUGFyc2VyLnBhcnNlO1xubWFya2VkLlJlbmRlcmVyID0gX1JlbmRlcmVyO1xubWFya2VkLlRleHRSZW5kZXJlciA9IF9UZXh0UmVuZGVyZXI7XG5tYXJrZWQuTGV4ZXIgPSBfTGV4ZXI7XG5tYXJrZWQubGV4ZXIgPSBfTGV4ZXIubGV4O1xubWFya2VkLlRva2VuaXplciA9IF9Ub2tlbml6ZXI7XG5tYXJrZWQuSG9va3MgPSBfSG9va3M7XG5tYXJrZWQucGFyc2UgPSBtYXJrZWQ7XG5jb25zdCBvcHRpb25zID0gbWFya2VkLm9wdGlvbnM7XG5jb25zdCBzZXRPcHRpb25zID0gbWFya2VkLnNldE9wdGlvbnM7XG5jb25zdCB1c2UgPSBtYXJrZWQudXNlO1xuY29uc3Qgd2Fsa1Rva2VucyA9IG1hcmtlZC53YWxrVG9rZW5zO1xuY29uc3QgcGFyc2VJbmxpbmUgPSBtYXJrZWQucGFyc2VJbmxpbmU7XG5jb25zdCBwYXJzZSA9IG1hcmtlZDtcbmNvbnN0IHBhcnNlciA9IF9QYXJzZXIucGFyc2U7XG5jb25zdCBsZXhlciA9IF9MZXhlci5sZXg7XG5cbmV4cG9ydCB7IF9Ib29rcyBhcyBIb29rcywgX0xleGVyIGFzIExleGVyLCBNYXJrZWQsIF9QYXJzZXIgYXMgUGFyc2VyLCBfUmVuZGVyZXIgYXMgUmVuZGVyZXIsIF9UZXh0UmVuZGVyZXIgYXMgVGV4dFJlbmRlcmVyLCBfVG9rZW5pemVyIGFzIFRva2VuaXplciwgX2RlZmF1bHRzIGFzIGRlZmF1bHRzLCBfZ2V0RGVmYXVsdHMgYXMgZ2V0RGVmYXVsdHMsIGxleGVyLCBtYXJrZWQsIG9wdGlvbnMsIHBhcnNlLCBwYXJzZUlubGluZSwgcGFyc2VyLCBzZXRPcHRpb25zLCB1c2UsIHdhbGtUb2tlbnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcmtlZC5lc20uanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFNob3AgZW50cnlwb2ludFxuaW1wb3J0IHsgcGFyc2VNYXJrZG93biB9IGZyb20gJy4vY2hhdCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgQ2hhdENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9DaGF0Q29udHJvbGxlcic7XG5cbi8vIFJlZ2lzdGVyIFN0aW11bHVzIGNvbnRyb2xsZXJzXG5jb25zdCBhcHBsaWNhdGlvbiA9IEFwcGxpY2F0aW9uLnN0YXJ0KCk7XG5hcHBsaWNhdGlvbi5yZWdpc3RlcignY2hhdCcsIENoYXRDb250cm9sbGVyKTtcblxuLy8gRXhwb3NlIHBhcnNlTWFya2Rvd24gZ2xvYmFsbHkgZm9yIGlubGluZSBzY3JpcHQgdXNhZ2UgKGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpXG53aW5kb3cuQ2hhdE1hcmtkb3duID0geyBwYXJzZU1hcmtkb3duIH07Il0sIm5hbWVzIjpbIm1hcmtlZCIsInNldE9wdGlvbnMiLCJicmVha3MiLCJnZm0iLCJwYXJzZU1hcmtkb3duIiwidGV4dCIsInBhcnNlIiwiYXN5bmMiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiX3R5cGVvZiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiX2luaGVyaXRzIiwiX3NldFByb3RvdHlwZU9mIiwiX2RlZmluZVByb3BlcnR5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsImNvbm5lY3QiLCJwYXJzZUV4aXN0aW5nTWVzc2FnZXMiLCJyZW9wZW5DaGF0SWZOZWVkZWQiLCJoYXNNZXNzYWdlc1RhcmdldCIsIm1lc3NhZ2VzVGFyZ2V0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwidHJpbSIsIl90aGlzIiwic2hvdWxkUmVvcGVuIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYXRPZmZjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImJvb3RzdHJhcCIsImJzT2ZmY2FudmFzIiwiT2ZmY2FudmFzIiwic2hvdyIsInNjcm9sbFRvQm90dG9tIiwib25jZSIsIl9zdWJtaXQiLCJfY2FsbGVlIiwiZXZlbnQiLCJtZXNzYWdlIiwiYXNzaXN0YW50RWwiLCJyZXNwb25zZSIsImRhdGEiLCJfdCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJpbnB1dFRhcmdldCIsImRpc2FibGVkIiwic3VibWl0VGFyZ2V0IiwiYWRkTWVzc2FnZSIsImZldGNoIiwiY29uY2F0Iiwic3RyZWFtVXJsVmFsdWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImpzb24iLCJlcnJvciIsImNsYXNzTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9kdWN0cyIsImxvYWRQcm9kdWN0Q2FyZHMiLCJyZWRpcmVjdF91cmwiLCJzZXRJdGVtIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnNvbGUiLCJmb2N1cyIsInN1Ym1pdCIsIl94Iiwicm9sZSIsImNvbnRlbnQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJfbG9hZFByb2R1Y3RDYXJkcyIsIl9jYWxsZWUyIiwic2x1Z3MiLCJyZXN1bHQiLCJjb250YWluZXIiLCJfdDIiLCJfY29udGV4dDIiLCJwcm9kdWN0Q2FyZHNVcmxWYWx1ZSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWwiLCJfeDIiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJzdHJlYW1VcmwiLCJwcm9kdWN0Q2FyZHNVcmwiLCJkZWZhdWx0IiwiQXBwbGljYXRpb24iLCJDaGF0Q29udHJvbGxlciIsImFwcGxpY2F0aW9uIiwic3RhcnQiLCJyZWdpc3RlciIsIkNoYXRNYXJrZG93biJdLCJzb3VyY2VSb290IjoiIn0=