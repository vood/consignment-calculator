// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = b;
exports.Fragment = k;
exports.cloneElement = F;
exports.createContext = G;
exports.h = exports.createElement = y;
exports.createRef = _;
exports.hydrate = E;
exports.options = exports.isValidElement = void 0;
exports.render = D;
exports.toChildArray = C;
var n,
  l,
  u,
  t,
  i,
  o,
  r,
  f,
  e,
  c = {},
  s = [],
  a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  h = Array.isArray;
exports.isValidElement = t;
exports.options = l;
function v(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function p(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function y(l, u, t) {
  var i,
    o,
    r,
    f = {};
  for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return d(l, f, i, o, null);
}
function d(n, t, i, o, r) {
  var f = {
    type: n,
    props: t,
    key: i,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u : r
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}
function _() {
  return {
    current: null
  };
}
function k(n) {
  return n.children;
}
function b(n, l) {
  this.props = n, this.context = l;
}
function g(n, l) {
  if (null == l) return n.__ ? g(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? g(n) : null;
}
function m(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return m(n);
  }
}
function w(n) {
  (!n.__d && (n.__d = !0) && i.push(n) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
  var n, l, u, t, o, r, e, c, s;
  for (i.sort(f); n = i.shift();) n.__d && (l = i.length, t = void 0, o = void 0, r = void 0, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = v({}, e)).__v = e.__v + 1, L(s, e, r, u.__n, void 0 !== s.ownerSVGElement, null != e.__h ? [c] : null, t, null == c ? g(e) : c, e.__h, o), M(t, e, o), e.__e != c && m(e)), i.length > l && i.sort(f));
  x.__r = 0;
}
function P(n, l, u, t, i, o, r, f, e, a, v) {
  var p,
    y,
    _,
    b,
    m,
    w,
    x,
    P,
    C,
    H = 0,
    I = t && t.__k || s,
    T = I.length,
    j = T,
    z = l.length;
  for (u.__k = [], p = 0; p < z; p++) null != (b = u.__k[p] = null == (b = l[p]) || "boolean" == typeof b || "function" == typeof b ? null : "string" == typeof b || "number" == typeof b || "bigint" == typeof b ? d(null, b, null, null, b) : h(b) ? d(k, {
    children: b
  }, null, null, null) : b.__b > 0 ? d(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v) : b) ? (b.__ = u, b.__b = u.__b + 1, -1 === (P = A(b, I, x = p + H, j)) ? _ = c : (_ = I[P] || c, I[P] = void 0, j--), L(n, b, _, i, o, r, f, e, a, v), m = b.__e, (y = b.ref) && _.ref != y && (_.ref && O(_.ref, null, b), v.push(y, b.__c || m, b)), null != m && (null == w && (w = m), (C = _ === c || null === _.__v) ? -1 == P && H-- : P !== x && (P === x + 1 ? H++ : P > x ? j > z - x ? H += P - x : H-- : H = P < x && P == x - 1 ? P - x : 0), x = p + H, "function" != typeof b.type || P === x && _.__k !== b.__k ? "function" == typeof b.type || P === x && !C ? void 0 !== b.__d ? (e = b.__d, b.__d = void 0) : e = m.nextSibling : e = S(n, m, e) : e = $(b, e, n), "function" == typeof u.type && (u.__d = e))) : (_ = I[p]) && null == _.key && _.__e && (_.__e == e && (e = g(_)), q(_, _, !1), I[p] = null);
  for (u.__e = w, p = T; p--;) null != I[p] && ("function" == typeof u.type && null != I[p].__e && I[p].__e == u.__d && (u.__d = I[p].__e.nextSibling), q(I[p], I[p]));
}
function $(n, l, u) {
  for (var t, i = n.__k, o = 0; i && o < i.length; o++) (t = i[o]) && (t.__ = n, l = "function" == typeof t.type ? $(t, l, u) : S(u, t.__e, l));
  return l;
}
function C(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (h(n) ? n.some(function (n) {
    C(n, l);
  }) : l.push(n)), l;
}
function S(n, l, u) {
  return null == u || u.parentNode !== n ? n.insertBefore(l, null) : l == u && null != l.parentNode || n.insertBefore(l, u), l.nextSibling;
}
function A(n, l, u, t) {
  var i = n.key,
    o = n.type,
    r = u - 1,
    f = u + 1,
    e = l[u];
  if (null === e || e && i == e.key && o === e.type) return u;
  if (t > (null != e ? 1 : 0)) for (; r >= 0 || f < l.length;) {
    if (r >= 0) {
      if ((e = l[r]) && i == e.key && o === e.type) return r;
      r--;
    }
    if (f < l.length) {
      if ((e = l[f]) && i == e.key && o === e.type) return f;
      f++;
    }
  }
  return -1;
}
function H(n, l, u, t, i) {
  var o;
  for (o in u) "children" === o || "key" === o || o in l || T(n, o, null, u[o], t);
  for (o in l) i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || T(n, o, l[o], u[o], t);
}
function I(n, l, u) {
  "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px";
}
function T(n, l, u, t, i) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || I(n.style, l, "");
      if (u) for (l in u) t && u[l] === t[l] || I(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/, "$1")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? z : j, o) : n.removeEventListener(l, o ? z : j, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && "rowSpan" !== l && "colSpan" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}
function j(n) {
  return this.l[n.type + !1](l.event ? l.event(n) : n);
}
function z(n) {
  return this.l[n.type + !0](l.event ? l.event(n) : n);
}
function L(n, u, t, i, o, r, f, e, c, s) {
  var a,
    p,
    y,
    d,
    _,
    g,
    m,
    w,
    x,
    $,
    C,
    S,
    A,
    H,
    I,
    T = u.type;
  if (void 0 !== u.constructor) return null;
  null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (a = l.__b) && a(u);
  n: if ("function" == typeof T) try {
    if (w = u.props, x = (a = T.contextType) && i[a.__c], $ = a ? x ? x.props.value : a.__ : i, t.__c ? m = (p = u.__c = t.__c).__ = p.__E : ("prototype" in T && T.prototype.render ? u.__c = p = new T(w, $) : (u.__c = p = new b(w, $), p.constructor = T, p.render = B), x && x.sub(p), p.props = w, p.state || (p.state = {}), p.context = $, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != T.getDerivedStateFromProps && (p.__s == p.state && (p.__s = v({}, p.__s)), v(p.__s, T.getDerivedStateFromProps(w, p.__s))), d = p.props, _ = p.state, p.__v = u, y) null == T.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
      if (null == T.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, $), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, $) || u.__v === t.__v)) {
        for (u.__v !== t.__v && (p.props = w, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
          n && (n.__ = u);
        }), C = 0; C < p._sb.length; C++) p.__h.push(p._sb[C]);
        p._sb = [], p.__h.length && f.push(p);
        break n;
      }
      null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, $), null != p.componentDidUpdate && p.__h.push(function () {
        p.componentDidUpdate(d, _, g);
      });
    }
    if (p.context = $, p.props = w, p.__P = n, p.__e = !1, S = l.__r, A = 0, "prototype" in T && T.prototype.render) {
      for (p.state = p.__s, p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), H = 0; H < p._sb.length; H++) p.__h.push(p._sb[H]);
      p._sb = [];
    } else do {
      p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), p.state = p.__s;
    } while (p.__d && ++A < 25);
    p.state = p.__s, null != p.getChildContext && (i = v(v({}, i), p.getChildContext())), y || null == p.getSnapshotBeforeUpdate || (g = p.getSnapshotBeforeUpdate(d, _)), P(n, h(I = null != a && a.type === k && null == a.key ? a.props.children : a) ? I : [I], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__h = null, p.__h.length && f.push(p), m && (p.__E = p.__ = null);
  } catch (n) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, t);
  } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = N(t.__e, u, t, i, o, r, f, c, s);
  (a = l.diffed) && a(u);
}
function M(n, u, t) {
  for (var i = 0; i < t.length; i++) O(t[i], t[++i], t[++i]);
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}
function N(l, u, t, i, o, r, f, e, s) {
  var a,
    v,
    y,
    d = t.props,
    _ = u.props,
    k = u.type,
    b = 0;
  if ("svg" === k && (o = !0), null != r) for (; b < r.length; b++) if ((a = r[b]) && "setAttribute" in a == !!k && (k ? a.localName === k : 3 === a.nodeType)) {
    l = a, r[b] = null;
    break;
  }
  if (null == l) {
    if (null === k) return document.createTextNode(_);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, _.is && _), r = null, e = !1;
  }
  if (null === k) d === _ || e && l.data === _ || (l.data = _);else {
    if (r = r && n.call(l.childNodes), v = (d = t.props || c).dangerouslySetInnerHTML, y = _.dangerouslySetInnerHTML, !e) {
      if (null != r) for (d = {}, b = 0; b < l.attributes.length; b++) d[l.attributes[b].name] = l.attributes[b].value;
      (y || v) && (y && (v && y.__html == v.__html || y.__html === l.innerHTML) || (l.innerHTML = y && y.__html || ""));
    }
    if (H(l, _, d, o, e), y) u.__k = [];else if (P(l, h(b = u.props.children) ? b : [b], u, t, i, o && "foreignObject" !== k, r, f, r ? r[0] : t.__k && g(t, 0), e, s), null != r) for (b = r.length; b--;) null != r[b] && p(r[b]);
    e || ("value" in _ && void 0 !== (b = _.value) && (b !== l.value || "progress" === k && !b || "option" === k && b !== d.value) && T(l, "value", b, d.value, !1), "checked" in _ && void 0 !== (b = _.checked) && b !== l.checked && T(l, "checked", b, d.checked, !1));
  }
  return l;
}
function O(n, u, t) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, t);
  }
}
function q(n, u, t) {
  var i, o;
  if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || O(i, null, u)), null != (i = n.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    i.base = i.__P = null, n.__c = void 0;
  }
  if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && q(i[o], u, t || "function" != typeof n.type);
  t || null == n.__e || p(n.__e), n.__ = n.__e = n.__d = void 0;
}
function B(n, l, u) {
  return this.constructor(n, u);
}
function D(u, t, i) {
  var o, r, f, e;
  l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], L(t, u = (!o && i || t).__k = y(k, null, [u]), r || c, c, void 0 !== t.ownerSVGElement, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), M(f, u, e);
}
function E(n, l) {
  D(n, l, E);
}
function F(l, u, t) {
  var i,
    o,
    r,
    f,
    e = v({}, l.props);
  for (r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
  return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), d(l.type, e, i || l.key, o || l.ref, null);
}
function G(n, l) {
  var u = {
    __c: l = "__cC" + e++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, t;
      return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function () {
        return t;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(function (n) {
          n.__e = !0, w(n);
        });
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
n = s.slice, exports.options = l = {
  __e: function (n, l, u, t) {
    for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u = 0, exports.isValidElement = t = function (n) {
  return null != n && void 0 === n.constructor;
}, b.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n && (n = n(v({}, u), this.props)), n && v(u, n), null != n && this.__v && (l && this._sb.push(l), w(this));
}, b.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function (n, l) {
  return n.__v.__b - l.__v.__b;
}, x.__r = 0, e = 0;
},{}],"../../../../.nvm/versions/node/v18.12.1/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../.nvm/versions/node/v18.12.1/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../../../../.nvm/versions/node/v18.12.1/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../.nvm/versions/node/v18.12.1/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallback = T;
exports.useContext = q;
exports.useDebugValue = x;
exports.useEffect = p;
exports.useErrorBoundary = P;
exports.useId = V;
exports.useImperativeHandle = A;
exports.useLayoutEffect = y;
exports.useMemo = F;
exports.useReducer = s;
exports.useRef = _;
exports.useState = h;
var _preact = require("preact");
var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = _preact.options.__b,
  a = _preact.options.__r,
  v = _preact.options.diffed,
  l = _preact.options.__c,
  m = _preact.options.unmount;
function d(t, u) {
  _preact.options.__h && _preact.options.__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function h(n) {
  return o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(t++, 3);
  !_preact.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(t++, 4);
  !_preact.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = h();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], _preact.options.__e(r, t.__v);
  }
}
_preact.options.__b = function (n) {
  r = null, e && e(n);
}, _preact.options.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [], t = 0)), u = r;
}, _preact.options.diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === _preact.options.requestAnimationFrame || ((i = _preact.options.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, _preact.options.__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], _preact.options.__e(u, t.__v);
    }
  }), l && l(t, r);
}, _preact.options.unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && _preact.options.__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function () {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../src/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
var _hooks = require("preact/hooks");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var App = function App() {
  var _useState = (0, _hooks.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    input = _useState2[0],
    setInput = _useState2[1];
  var _useState3 = (0, _hooks.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    flash = _useState4[0],
    setFlash = _useState4[1];
  var _useState5 = (0, _hooks.useState)([{
      name: 'Customer 1',
      cartNumber: 1,
      records: []
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    customers = _useState6[0],
    setCustomers = _useState6[1];
  var _useState7 = (0, _hooks.useState)(customers[0]),
    _useState8 = _slicedToArray(_useState7, 2),
    currentCustomer = _useState8[0],
    setCurrentCustomer = _useState8[1];
  var _useState9 = (0, _hooks.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isModalOpen = _useState10[0],
    setIsModalOpen = _useState10[1];
  var presetPrices = [19, 49, 99, 499, 999];
  var presetDiscounts = [30, 40, 50, 60, 70];
  var handleButtonClick = function handleButtonClick(value) {
    var isShortcutPrice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isDiscount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (isDiscount) {
      try {
        var result = new Function('return ' + input * value)();
        if (isNaN(result)) throw new Error("Result is not a number");
        if (!isFinite(result)) throw new Error("Cannot divide by zero");
        var record = {
          input: "".concat(input, " * ").concat(value),
          result: result
        };
        setCurrentCustomer(function (prevCustomer) {
          return _objectSpread(_objectSpread({}, prevCustomer), {}, {
            records: [].concat(_toConsumableArray(prevCustomer.records), [record])
          });
        });
        setCustomers(function (prevCustomers) {
          return prevCustomers.map(function (customer) {
            return customer.cartNumber === currentCustomer.cartNumber ? _objectSpread(_objectSpread({}, customer), {}, {
              records: [].concat(_toConsumableArray(customer.records), [record])
            }) : customer;
          });
        });
        setInput('');
      } catch (e) {
        setInput("Error");
      }
      setFlash(true);
    } else {
      if (isShortcutPrice) {
        setInput("".concat(value));
      } else {
        setInput("".concat(input).concat(value));
      }
      setFlash(true);
    }
  };
  (0, _hooks.useEffect)(function () {
    if (flash) {
      setTimeout(function () {
        return setFlash(false);
      }, 200);
    }
  }, [flash]);
  (0, _hooks.useEffect)(function () {
    for (var i = 1; i < 6; i++) {
      customers.push({
        name: "Customer ".concat(i + 1),
        cartNumber: i + 1,
        records: []
      });
    }
  }, []);
  var clearInput = function clearInput() {
    setInput("");
  };
  var handleCalculation = function handleCalculation() {
    try {
      var result = new Function('return ' + input)();
      if (isNaN(result)) throw new Error("Result is not a number");
      if (!isFinite(result)) throw new Error("Cannot divide by zero");
      var record = {
        input: input,
        result: result
      };
      setCurrentCustomer(function (prevCustomer) {
        return _objectSpread(_objectSpread({}, prevCustomer), {}, {
          records: [].concat(_toConsumableArray(prevCustomer.records), [record])
        });
      });
      setCustomers(function (prevCustomers) {
        return prevCustomers.map(function (customer) {
          return customer.cartNumber === currentCustomer.cartNumber ? _objectSpread(_objectSpread({}, customer), {}, {
            records: [].concat(_toConsumableArray(customer.records), [record])
          }) : customer;
        });
      });
      setInput("".concat(result));
    } catch (e) {
      setInput("Error");
    }
  };
  var removeRecord = function removeRecord(index) {
    setCurrentCustomer(function (prevCustomer) {
      return _objectSpread(_objectSpread({}, prevCustomer), {}, {
        records: prevCustomer.records.filter(function (_, i) {
          return i !== index;
        })
      });
    });
  };
  var removeAllRecords = function removeAllRecords() {
    setCurrentCustomer(function (prevCustomer) {
      return _objectSpread(_objectSpread({}, prevCustomer), {}, {
        records: []
      });
    });
  };
  var handleNameChange = function handleNameChange(event) {
    var newName = event.target.value;
    setCurrentCustomer(function (prevCustomer) {
      return _objectSpread(_objectSpread({}, prevCustomer), {}, {
        name: newName
      });
    });
    setCustomers(function (prevCustomers) {
      return prevCustomers.map(function (customer) {
        return customer.cartNumber === currentCustomer.cartNumber ? _objectSpread(_objectSpread({}, customer), {}, {
          name: newName
        }) : customer;
      });
    });
  };
  var switchCustomer = function switchCustomer(index) {
    setCurrentCustomer(customers[index]);
  };
  var openModal = function openModal() {
    setIsModalOpen(true);
  };
  var closeModal = function closeModal() {
    setIsModalOpen(false);
  };
  var calculateTotal = function calculateTotal() {
    return currentCustomer.records.reduce(function (acc, curr) {
      return acc + curr.result;
    }, 0).toFixed(2);
  };
  return (0, _preact.h)("div", {
    className: "container font-mono w-xl w-full sm:w-xl md:w-1/3 mx-auto p-2 pt-8"
  }, (0, _preact.h)("div", {
    className: "flex mb-2"
  }, (0, _preact.h)("input", {
    type: "text",
    onChange: handleNameChange,
    value: currentCustomer.name,
    className: "flex-1 p-2 border rounded-l bg-gray-50"
  }), (0, _preact.h)("div", {
    className: "border-t border-b border-r p-2 px-3"
  }, "Cart ", currentCustomer.cartNumber), (0, _preact.h)("button", {
    className: "border border-l-0 p-2 px-3 rounded-r",
    onClick: openModal
  }, "\uD83E\uDDD1")), isModalOpen && (0, _preact.h)("div", {
    className: "fixed z-10 inset-0 overflow-y-auto"
  }, (0, _preact.h)("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  }, (0, _preact.h)("div", {
    className: "fixed inset-0 transition-opacity",
    "aria-hidden": "true"
  }, (0, _preact.h)("div", {
    className: "absolute inset-0 bg-gray-500 opacity-75"
  })), (0, _preact.h)("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true"
  }, "\u200B"), (0, _preact.h)("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
  }, (0, _preact.h)("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
  }, (0, _preact.h)("div", {
    className: "mt-3 text-center flex flex-col"
  }, (0, _preact.h)("h3", {
    className: "text-lg font-medium text-gray-900",
    id: "modal-title"
  }, "Select Customer"), (0, _preact.h)("div", {
    className: "mt-2 w-full"
  }, customers.map(function (customer, index) {
    return (0, _preact.h)("div", {
      className: "border hover:cursor-pointer rounded p-2 mb-2 w-full",
      key: index,
      onClick: function onClick() {
        switchCustomer(index);
        closeModal();
      }
    }, customer.name, " - Cart ", customer.cartNumber, " - Total: $", customer.records.reduce(function (acc, curr) {
      return acc + curr.result;
    }, 0).toFixed(2));
  })))), (0, _preact.h)("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
  }, (0, _preact.h)("button", {
    onClick: closeModal,
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
  }, "Close"))))), (0, _preact.h)("div", {
    className: "flex"
  }, (0, _preact.h)("input", {
    type: "text",
    value: input,
    readOnly: true,
    className: "w-full  bg-gray-50 p-2 border rounded-l ".concat(flash ? 'bg-yellow-200' : '')
  }), (0, _preact.h)("div", {
    className: "border border-l-0 rounded-r p-2 text-center"
  }, "$", calculateTotal())), (0, _preact.h)("div", {
    className: "grid grid-cols-5 mt-4 gap-2"
  }, presetPrices.map(function (price, index) {
    return (0, _preact.h)("button", {
      key: index,
      className: "p-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded",
      onClick: function onClick() {
        return handleButtonClick(price, true);
      }
    }, "$", price);
  })), (0, _preact.h)("div", {
    className: "grid grid-cols-5 mt-4 gap-2"
  }, presetDiscounts.map(function (discount, index) {
    return (0, _preact.h)("button", {
      key: index,
      className: "p-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded",
      onClick: function onClick() {
        return handleButtonClick(discount / 100, false, true);
      }
    }, discount, "%");
  })), (0, _preact.h)("div", {
    className: "grid grid-cols-4 gap-2 mt-4 mb-2"
  }, ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'].map(function (btn, idx) {
    return (0, _preact.h)("button", {
      key: idx,
      className: "p-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded",
      onClick: btn === '=' ? handleCalculation : function () {
        return handleButtonClick(btn);
      }
    }, btn);
  }), (0, _preact.h)("button", {
    className: "p-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded",
    onClick: clearInput
  }, "C")), (0, _preact.h)("table", {
    className: "min-w-full font-mono bg-white border border-gray-300"
  }, (0, _preact.h)("thead", null, (0, _preact.h)("tr", null, (0, _preact.h)("th", {
    className: "py-1 px-2 border"
  }, "Item"), (0, _preact.h)("th", {
    className: "py-1 w-[40px] px-2 border"
  }, "Action"))), (0, _preact.h)("tbody", null, currentCustomer.records.map(function (record, index) {
    return (0, _preact.h)("tr", {
      key: index
    }, (0, _preact.h)("td", {
      className: "py-1 px-2 border"
    }, record.input, " = ", record.result.toFixed(2)), (0, _preact.h)("td", {
      className: "py-1 px-2 border text-center"
    }, (0, _preact.h)("button", {
      className: "text-red-500 hover:text-red-600 active:text-red-700",
      onClick: function onClick() {
        return removeRecord(index);
      }
    }, (0, _preact.h)("span", {
      role: "img",
      "aria-label": "Delete"
    }, "\uD83D\uDDD1\uFE0F"))));
  }), currentCustomer.records.length === 0 && (0, _preact.h)("tr", null, (0, _preact.h)("td", {
    className: "py-1 px-2 border text-center",
    colSpan: "2"
  }, "The cart is empty")))), (0, _preact.h)("div", {
    className: "w-full flex-col"
  }, (0, _preact.h)("button", {
    className: "w-full mt-2 p-2 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded",
    onClick: removeAllRecords
  }, "Print the list"), (0, _preact.h)("div", {
    className: "flex"
  }, (0, _preact.h)("button", {
    className: "flex-1 block mt-2 mr-1 p-2 px-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded",
    onClick: removeAllRecords
  }, "Empty the cart"), (0, _preact.h)("button", {
    className: "flex-1 block mt-2 ml-1 p-2 px-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded",
    onClick: removeAllRecords
  }, "Reset the cart"))));
};
var _default = App;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");
require("./../public/styles.css");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _preact.render)((0, _preact.h)(_App.default, null), document.getElementById('root'));
},{"preact":"../node_modules/preact/dist/preact.module.js","./../public/styles.css":"styles.css","./App":"../src/App.js"}],"../../../../.nvm/versions/node/v18.12.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56356" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../.nvm/versions/node/v18.12.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map