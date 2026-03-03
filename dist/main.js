#!/usr/bin/env node
import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/isexe/dist/commonjs/index.min.js
var require_index_min = __commonJS((exports) => {
  var a = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
  var _ = a((i) => {
    Object.defineProperty(i, "__esModule", { value: true });
    i.sync = i.isexe = undefined;
    var M = __require("node:fs"), x = __require("node:fs/promises"), q = async (t, e = {}) => {
      let { ignoreErrors: r = false } = e;
      try {
        return d(await (0, x.stat)(t), e);
      } catch (s) {
        let n = s;
        if (r || n.code === "EACCES")
          return false;
        throw n;
      }
    };
    i.isexe = q;
    var m = (t, e = {}) => {
      let { ignoreErrors: r = false } = e;
      try {
        return d((0, M.statSync)(t), e);
      } catch (s) {
        let n = s;
        if (r || n.code === "EACCES")
          return false;
        throw n;
      }
    };
    i.sync = m;
    var d = (t, e) => t.isFile() && A(t, e), A = (t, e) => {
      let r = e.uid ?? process.getuid?.(), s = e.groups ?? process.getgroups?.() ?? [], n = e.gid ?? process.getgid?.() ?? s[0];
      if (r === undefined || n === undefined)
        throw new Error("cannot get uid or gid");
      let u = new Set([n, ...s]), c = t.mode, S = t.uid, P = t.gid, f = parseInt("100", 8), l = parseInt("010", 8), j = parseInt("001", 8), C = f | l;
      return !!(c & j || c & l && u.has(P) || c & f && S === r || c & C && r === 0);
    };
  });
  var g = a((o) => {
    Object.defineProperty(o, "__esModule", { value: true });
    o.sync = o.isexe = undefined;
    var T = __require("node:fs"), I = __require("node:fs/promises"), D = __require("node:path"), F = async (t, e = {}) => {
      let { ignoreErrors: r = false } = e;
      try {
        return y(await (0, I.stat)(t), t, e);
      } catch (s) {
        let n = s;
        if (r || n.code === "EACCES")
          return false;
        throw n;
      }
    };
    o.isexe = F;
    var L = (t, e = {}) => {
      let { ignoreErrors: r = false } = e;
      try {
        return y((0, T.statSync)(t), t, e);
      } catch (s) {
        let n = s;
        if (r || n.code === "EACCES")
          return false;
        throw n;
      }
    };
    o.sync = L;
    var B = (t, e) => {
      let { pathExt: r = process.env.PATHEXT || "" } = e, s = r.split(D.delimiter);
      if (s.indexOf("") !== -1)
        return true;
      for (let n of s) {
        let u = n.toLowerCase(), c = t.substring(t.length - u.length).toLowerCase();
        if (u && c === u)
          return true;
      }
      return false;
    }, y = (t, e, r) => t.isFile() && B(e, r);
  });
  var p = a((h) => {
    Object.defineProperty(h, "__esModule", { value: true });
  });
  var v = exports && exports.__createBinding || (Object.create ? function(t, e, r, s) {
    s === undefined && (s = r);
    var n = Object.getOwnPropertyDescriptor(e, r);
    (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: true, get: function() {
      return e[r];
    } }), Object.defineProperty(t, s, n);
  } : function(t, e, r, s) {
    s === undefined && (s = r), t[s] = e[r];
  });
  var G = exports && exports.__setModuleDefault || (Object.create ? function(t, e) {
    Object.defineProperty(t, "default", { enumerable: true, value: e });
  } : function(t, e) {
    t.default = e;
  });
  var w = exports && exports.__importStar || function() {
    var t = function(e) {
      return t = Object.getOwnPropertyNames || function(r) {
        var s = [];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (s[s.length] = n);
        return s;
      }, t(e);
    };
    return function(e) {
      if (e && e.__esModule)
        return e;
      var r = {};
      if (e != null)
        for (var s = t(e), n = 0;n < s.length; n++)
          s[n] !== "default" && v(r, e, s[n]);
      return G(r, e), r;
    };
  }();
  var X = exports && exports.__exportStar || function(t, e) {
    for (var r in t)
      r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && v(e, t, r);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sync = exports.isexe = exports.posix = exports.win32 = undefined;
  var E = w(_());
  exports.posix = E;
  var O = w(g());
  exports.win32 = O;
  X(p(), exports);
  var H = process.env._ISEXE_TEST_PLATFORM_ || process.platform;
  var b = H === "win32" ? O : E;
  exports.isexe = b.isexe;
  exports.sync = b.sync;
});

// node_modules/which/lib/index.js
var require_lib = __commonJS((exports, module) => {
  var { isexe, sync: isexeSync } = require_index_min();
  var { join, delimiter, sep, posix } = __require("path");
  var isWindows = process.platform === "win32";
  var rSlash = new RegExp(`[${posix.sep}${sep === posix.sep ? "" : sep}]`.replace(/(\\)/g, "\\$1"));
  var rRel = new RegExp(`^\\.${rSlash.source}`);
  var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
  var getPathInfo = (cmd, {
    path: optPath = process.env.PATH,
    pathExt: optPathExt = process.env.PATHEXT,
    delimiter: optDelimiter = delimiter
  }) => {
    const pathEnv = cmd.match(rSlash) ? [""] : [
      ...isWindows ? [process.cwd()] : [],
      ...(optPath || "").split(optDelimiter)
    ];
    if (isWindows) {
      const pathExtExe = optPathExt || [".EXE", ".CMD", ".BAT", ".COM"].join(optDelimiter);
      const pathExt = pathExtExe.split(optDelimiter).flatMap((item) => [item, item.toLowerCase()]);
      if (cmd.includes(".") && pathExt[0] !== "") {
        pathExt.unshift("");
      }
      return { pathEnv, pathExt, pathExtExe };
    }
    return { pathEnv, pathExt: [""] };
  };
  var getPathPart = (raw, cmd) => {
    const pathPart = /^".*"$/.test(raw) ? raw.slice(1, -1) : raw;
    const prefix = !pathPart && rRel.test(cmd) ? cmd.slice(0, 2) : "";
    return prefix + join(pathPart, cmd);
  };
  var which = async (cmd, opt = {}) => {
    const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
    const found = [];
    for (const envPart of pathEnv) {
      const p = getPathPart(envPart, cmd);
      for (const ext of pathExt) {
        const withExt = p + ext;
        const is = await isexe(withExt, { pathExt: pathExtExe, ignoreErrors: true });
        if (is) {
          if (!opt.all) {
            return withExt;
          }
          found.push(withExt);
        }
      }
    }
    if (opt.all && found.length) {
      return found;
    }
    if (opt.nothrow) {
      return null;
    }
    throw getNotFoundError(cmd);
  };
  var whichSync = (cmd, opt = {}) => {
    const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
    const found = [];
    for (const pathEnvPart of pathEnv) {
      const p = getPathPart(pathEnvPart, cmd);
      for (const ext of pathExt) {
        const withExt = p + ext;
        const is = isexeSync(withExt, { pathExt: pathExtExe, ignoreErrors: true });
        if (is) {
          if (!opt.all) {
            return withExt;
          }
          found.push(withExt);
        }
      }
    }
    if (opt.all && found.length) {
      return found;
    }
    if (opt.nothrow) {
      return null;
    }
    throw getNotFoundError(cmd);
  };
  module.exports = which;
  which.sync = whichSync;
});

// node_modules/@deno/shim-deno-test/dist/definitions.js
var require_definitions = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.testDefinitions = undefined;
  exports.testDefinitions = [];
});

// node_modules/@deno/shim-deno-test/dist/test.js
var require_test = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.test = undefined;
  var definitions_js_1 = require_definitions();
  exports.test = Object.assign(function test() {
    handleDefinition(arguments);
  }, {
    ignore() {
      handleDefinition(arguments, { ignore: true });
    },
    only() {
      handleDefinition(arguments, { only: true });
    }
  });
  function handleDefinition(args, additional) {
    var _a, _b;
    let testDef;
    const firstArg = args[0];
    const secondArg = args[1];
    const thirdArg = args[2];
    if (typeof firstArg === "string") {
      if (typeof secondArg === "object") {
        if (typeof thirdArg === "function") {
          if (secondArg.fn != null) {
            throw new TypeError("Unexpected 'fn' field in options, test function is already provided as the third argument.");
          }
        }
        if (secondArg.name != null) {
          throw new TypeError("Unexpected 'name' field in options, test name is already provided as the first argument.");
        }
        testDef = { name: firstArg, fn: thirdArg, ...secondArg };
      } else {
        testDef = { name: firstArg, fn: secondArg };
      }
    } else if (firstArg instanceof Function) {
      if (firstArg.name.length === 0) {
        throw new TypeError("The test function must have a name");
      }
      testDef = { fn: firstArg, name: firstArg.name };
      if (secondArg != null) {
        throw new TypeError("Unexpected second argument to Deno.test()");
      }
    } else if (typeof firstArg === "object") {
      testDef = { ...firstArg };
      if (typeof secondArg === "function") {
        testDef.fn = secondArg;
        if (firstArg.fn != null) {
          throw new TypeError("Unexpected 'fn' field in options, test function is already provided as the second argument.");
        }
        if (testDef.name == null) {
          if (secondArg.name.length === 0) {
            throw new TypeError("The test function must have a name");
          }
          testDef.name = secondArg.name;
        }
      } else {
        if (typeof firstArg.fn !== "function") {
          throw new TypeError("Expected 'fn' field in the first argument to be a test function.");
        }
      }
    } else {
      throw new TypeError("Unknown test overload");
    }
    if (typeof testDef.fn !== "function") {
      throw new TypeError("Missing test function");
    }
    if (((_b = (_a = testDef.name) === null || _a === undefined ? undefined : _a.length) !== null && _b !== undefined ? _b : 0) === 0) {
      throw new TypeError("The test name can't be empty");
    }
    if (additional === null || additional === undefined ? undefined : additional.ignore) {
      testDef.ignore = true;
    }
    if (additional === null || additional === undefined ? undefined : additional.only) {
      testDef.only = true;
    }
    definitions_js_1.testDefinitions.push(testDef);
  }
});

// node_modules/@deno/shim-deno-test/dist/index.js
var require_dist = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.testDefinitions = exports.Deno = undefined;
  exports.Deno = require_test();
  __exportStar(require_test(), exports);
  var definitions_js_1 = require_definitions();
  Object.defineProperty(exports, "testDefinitions", { enumerable: true, get: function() {
    return definitions_js_1.testDefinitions;
  } });
});

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS((exports, module) => {
  module.exports = () => {
    return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
  };
});

// node_modules/cli-boxes/boxes.json
var require_boxes = __commonJS((exports, module) => {
  module.exports = {
    single: {
      topLeft: "┌",
      top: "─",
      topRight: "┐",
      right: "│",
      bottomRight: "┘",
      bottom: "─",
      bottomLeft: "└",
      left: "│"
    },
    double: {
      topLeft: "╔",
      top: "═",
      topRight: "╗",
      right: "║",
      bottomRight: "╝",
      bottom: "═",
      bottomLeft: "╚",
      left: "║"
    },
    round: {
      topLeft: "╭",
      top: "─",
      topRight: "╮",
      right: "│",
      bottomRight: "╯",
      bottom: "─",
      bottomLeft: "╰",
      left: "│"
    },
    bold: {
      topLeft: "┏",
      top: "━",
      topRight: "┓",
      right: "┃",
      bottomRight: "┛",
      bottom: "━",
      bottomLeft: "┗",
      left: "┃"
    },
    singleDouble: {
      topLeft: "╓",
      top: "─",
      topRight: "╖",
      right: "║",
      bottomRight: "╜",
      bottom: "─",
      bottomLeft: "╙",
      left: "║"
    },
    doubleSingle: {
      topLeft: "╒",
      top: "═",
      topRight: "╕",
      right: "│",
      bottomRight: "╛",
      bottom: "═",
      bottomLeft: "╘",
      left: "│"
    },
    classic: {
      topLeft: "+",
      top: "-",
      topRight: "+",
      right: "|",
      bottomRight: "+",
      bottom: "-",
      bottomLeft: "+",
      left: "|"
    },
    arrow: {
      topLeft: "↘",
      top: "↓",
      topRight: "↙",
      right: "←",
      bottomRight: "↖",
      bottom: "↑",
      bottomLeft: "↗",
      left: "→"
    }
  };
});

// node_modules/cli-boxes/index.js
var require_cli_boxes = __commonJS((exports, module) => {
  var cliBoxes = require_boxes();
  module.exports = cliBoxes;
  module.exports.default = cliBoxes;
});

// node_modules/ansi-align/node_modules/string-width/node_modules/strip-ansi/node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS((exports, module) => {
  module.exports = ({ onlyFirst = false } = {}) => {
    const pattern = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(pattern, onlyFirst ? undefined : "g");
  };
});

// node_modules/ansi-align/node_modules/string-width/node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS((exports, module) => {
  var ansiRegex2 = require_ansi_regex();
  module.exports = (string) => typeof string === "string" ? string.replace(ansiRegex2(), "") : string;
});

// node_modules/is-fullwidth-code-point/index.js
var require_is_fullwidth_code_point = __commonJS((exports, module) => {
  var isFullwidthCodePoint = (codePoint) => {
    if (Number.isNaN(codePoint)) {
      return false;
    }
    if (codePoint >= 4352 && (codePoint <= 4447 || codePoint === 9001 || codePoint === 9002 || 11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || 12880 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65131 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 262141)) {
      return true;
    }
    return false;
  };
  module.exports = isFullwidthCodePoint;
  module.exports.default = isFullwidthCodePoint;
});

// node_modules/ansi-align/node_modules/string-width/node_modules/emoji-regex/index.js
var require_emoji_regex2 = __commonJS((exports, module) => {
  module.exports = function() {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
  };
});

// node_modules/ansi-align/node_modules/string-width/index.js
var require_string_width = __commonJS((exports, module) => {
  var stripAnsi2 = require_strip_ansi();
  var isFullwidthCodePoint = require_is_fullwidth_code_point();
  var emojiRegex2 = require_emoji_regex2();
  var stringWidth2 = (string) => {
    if (typeof string !== "string" || string.length === 0) {
      return 0;
    }
    string = stripAnsi2(string);
    if (string.length === 0) {
      return 0;
    }
    string = string.replace(emojiRegex2(), "  ");
    let width = 0;
    for (let i = 0;i < string.length; i++) {
      const code2 = string.codePointAt(i);
      if (code2 <= 31 || code2 >= 127 && code2 <= 159) {
        continue;
      }
      if (code2 >= 768 && code2 <= 879) {
        continue;
      }
      if (code2 > 65535) {
        i++;
      }
      width += isFullwidthCodePoint(code2) ? 2 : 1;
    }
    return width;
  };
  module.exports = stringWidth2;
  module.exports.default = stringWidth2;
});

// node_modules/ansi-align/index.js
var require_ansi_align = __commonJS((exports, module) => {
  var stringWidth2 = require_string_width();
  function ansiAlign(text, opts) {
    if (!text)
      return text;
    opts = opts || {};
    const align = opts.align || "center";
    if (align === "left")
      return text;
    const split2 = opts.split || `
`;
    const pad = opts.pad || " ";
    const widthDiffFn = align !== "right" ? halfDiff : fullDiff;
    let returnString = false;
    if (!Array.isArray(text)) {
      returnString = true;
      text = String(text).split(split2);
    }
    let width;
    let maxWidth = 0;
    text = text.map(function(str) {
      str = String(str);
      width = stringWidth2(str);
      maxWidth = Math.max(width, maxWidth);
      return {
        str,
        width
      };
    }).map(function(obj) {
      return new Array(widthDiffFn(maxWidth, obj.width) + 1).join(pad) + obj.str;
    });
    return returnString ? text.join(split2) : text;
  }
  ansiAlign.left = function left(text) {
    return ansiAlign(text, { align: "left" });
  };
  ansiAlign.center = function center(text) {
    return ansiAlign(text, { align: "center" });
  };
  ansiAlign.right = function right(text) {
    return ansiAlign(text, { align: "right" });
  };
  module.exports = ansiAlign;
  function halfDiff(maxWidth, curWidth) {
    return Math.floor((maxWidth - curWidth) / 2);
  }
  function fullDiff(maxWidth, curWidth) {
    return maxWidth - curWidth;
  }
});

// node_modules/outdent/lib/index.js
var require_lib2 = __commonJS((exports, module) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.outdent = undefined;
  function noop() {
    var args2 = [];
    for (var _i = 0;_i < arguments.length; _i++) {
      args2[_i] = arguments[_i];
    }
  }
  function createWeakMap() {
    if (typeof WeakMap !== "undefined") {
      return new WeakMap;
    } else {
      return fakeSetOrMap();
    }
  }
  function fakeSetOrMap() {
    return {
      add: noop,
      delete: noop,
      get: noop,
      set: noop,
      has: function(k) {
        return false;
      }
    };
  }
  var hop = Object.prototype.hasOwnProperty;
  var has = function(obj, prop) {
    return hop.call(obj, prop);
  };
  function extend2(target, source) {
    for (var prop in source) {
      if (has(source, prop)) {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  var reLeadingNewline2 = /^[ \t]*(?:\r\n|\r|\n)/;
  var reTrailingNewline2 = /(?:\r\n|\r|\n)[ \t]*$/;
  var reStartsWithNewlineOrIsEmpty2 = /^(?:[\r\n]|$)/;
  var reDetectIndentation2 = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;
  var reOnlyWhitespaceWithAtLeastOneNewline2 = /^[ \t]*[\r\n][ \t\r\n]*$/;
  function _outdentArray2(strings, firstInterpolatedValueSetsIndentationLevel, options) {
    var indentationLevel = 0;
    var match = strings[0].match(reDetectIndentation2);
    if (match) {
      indentationLevel = match[1].length;
    }
    var reSource = "(\\r\\n|\\r|\\n).{0," + indentationLevel + "}";
    var reMatchIndent = new RegExp(reSource, "g");
    if (firstInterpolatedValueSetsIndentationLevel) {
      strings = strings.slice(1);
    }
    var { newline, trimLeadingNewline, trimTrailingNewline } = options;
    var normalizeNewlines = typeof newline === "string";
    var l = strings.length;
    var outdentedStrings = strings.map(function(v, i) {
      v = v.replace(reMatchIndent, "$1");
      if (i === 0 && trimLeadingNewline) {
        v = v.replace(reLeadingNewline2, "");
      }
      if (i === l - 1 && trimTrailingNewline) {
        v = v.replace(reTrailingNewline2, "");
      }
      if (normalizeNewlines) {
        v = v.replace(/\r\n|\n|\r/g, function(_) {
          return newline;
        });
      }
      return v;
    });
    return outdentedStrings;
  }
  function concatStringsAndValues2(strings, values) {
    var ret = "";
    for (var i = 0, l = strings.length;i < l; i++) {
      ret += strings[i];
      if (i < l - 1) {
        ret += values[i];
      }
    }
    return ret;
  }
  function isTemplateStringsArray2(v) {
    return has(v, "raw") && has(v, "length");
  }
  function createInstance2(options) {
    var arrayAutoIndentCache = createWeakMap();
    var arrayFirstInterpSetsIndentCache = createWeakMap();
    function outdent(stringsOrOptions) {
      var values = [];
      for (var _i = 1;_i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
      }
      if (isTemplateStringsArray2(stringsOrOptions)) {
        var strings = stringsOrOptions;
        var firstInterpolatedValueSetsIndentationLevel = (values[0] === outdent || values[0] === defaultOutdent2) && reOnlyWhitespaceWithAtLeastOneNewline2.test(strings[0]) && reStartsWithNewlineOrIsEmpty2.test(strings[1]);
        var cache = firstInterpolatedValueSetsIndentationLevel ? arrayFirstInterpSetsIndentCache : arrayAutoIndentCache;
        var renderedArray = cache.get(strings);
        if (!renderedArray) {
          renderedArray = _outdentArray2(strings, firstInterpolatedValueSetsIndentationLevel, options);
          cache.set(strings, renderedArray);
        }
        if (values.length === 0) {
          return renderedArray[0];
        }
        var rendered = concatStringsAndValues2(renderedArray, firstInterpolatedValueSetsIndentationLevel ? values.slice(1) : values);
        return rendered;
      } else {
        return createInstance2(extend2(extend2({}, options), stringsOrOptions || {}));
      }
    }
    var fullOutdent = extend2(outdent, {
      string: function(str) {
        return _outdentArray2([str], false, options)[0];
      }
    });
    return fullOutdent;
  }
  var defaultOutdent2 = createInstance2({
    trimLeadingNewline: true,
    trimTrailingNewline: true
  });
  exports.outdent = defaultOutdent2;
  exports.default = defaultOutdent2;
  if (typeof module !== "undefined") {
    try {
      module.exports = defaultOutdent2;
      Object.defineProperty(defaultOutdent2, "__esModule", { value: true });
      defaultOutdent2.default = defaultOutdent2;
      defaultOutdent2.outdent = defaultOutdent2;
    } catch (e) {}
  }
});

// node_modules/update-section/update-section.js
var require_update_section = __commonJS((exports, module) => {
  function parse(lines, matchesStart, matchesEnd) {
    var startIdx = -1, endIdx = -1, hasStart = false, hasEnd = false, line;
    for (var i = 0;i < lines.length; i++) {
      line = lines[i];
      if (!hasStart && matchesStart(line)) {
        startIdx = i;
        hasStart = true;
      } else if (!hasEnd && matchesEnd(line)) {
        endIdx = i;
        hasEnd = true;
      }
      if (hasStart && hasEnd)
        break;
    }
    if (!hasEnd) {
      endIdx = lines.length;
      hasEnd = true;
    }
    return { hasStart, hasEnd, startIdx, endIdx };
  }
  exports = module.exports = function updateSection(content, section, matchesStart, matchesEnd, top) {
    if (!content)
      return section;
    var lines = content.split(`
`);
    if (!lines.length)
      return section;
    var info = parse(lines, matchesStart, matchesEnd);
    if (!info.hasStart)
      return top ? section + `

` + content : content + `

` + section;
    var sectionLines = section.split(`
`), dropN = info.endIdx - info.startIdx + 1;
    [].splice.apply(lines, [info.startIdx, dropN].concat(sectionLines));
    return lines.join(`
`);
  };
  exports.parse = parse;
});

// node_modules/consola/dist/chunks/prompt.mjs
var exports_prompt = {};
__export(exports_prompt, {
  prompt: () => prompt2,
  kCancel: () => kCancel
});
import g, { stdin as stdin2, stdout as stdout2 } from "node:process";
import f from "node:readline";
import { WriteStream } from "node:tty";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function requireSrc() {
  if (hasRequiredSrc)
    return src;
  hasRequiredSrc = 1;
  const ESC = "\x1B";
  const CSI = `${ESC}[`;
  const beep = "\x07";
  const cursor = {
    to(x, y) {
      if (!y)
        return `${CSI}${x + 1}G`;
      return `${CSI}${y + 1};${x + 1}H`;
    },
    move(x, y) {
      let ret = "";
      if (x < 0)
        ret += `${CSI}${-x}D`;
      else if (x > 0)
        ret += `${CSI}${x}C`;
      if (y < 0)
        ret += `${CSI}${-y}A`;
      else if (y > 0)
        ret += `${CSI}${y}B`;
      return ret;
    },
    up: (count = 1) => `${CSI}${count}A`,
    down: (count = 1) => `${CSI}${count}B`,
    forward: (count = 1) => `${CSI}${count}C`,
    backward: (count = 1) => `${CSI}${count}D`,
    nextLine: (count = 1) => `${CSI}E`.repeat(count),
    prevLine: (count = 1) => `${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
  };
  const scroll = {
    up: (count = 1) => `${CSI}S`.repeat(count),
    down: (count = 1) => `${CSI}T`.repeat(count)
  };
  const erase = {
    screen: `${CSI}2J`,
    up: (count = 1) => `${CSI}1J`.repeat(count),
    down: (count = 1) => `${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines(count) {
      let clear = "";
      for (let i = 0;i < count; i++)
        clear += this.line + (i < count - 1 ? cursor.up() : "");
      if (count)
        clear += cursor.left;
      return clear;
    }
  };
  src = { cursor, scroll, erase, beep };
  return src;
}
function requirePicocolors() {
  if (hasRequiredPicocolors)
    return picocolors.exports;
  hasRequiredPicocolors = 1;
  let p = process || {}, argv2 = p.argv || [], env4 = p.env || {};
  let isColorSupported2 = !(!!env4.NO_COLOR || argv2.includes("--no-color")) && (!!env4.FORCE_COLOR || argv2.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env4.TERM !== "dumb" || !!env4.CI);
  let formatter = (open3, close2, replace = open3) => (input) => {
    let string = "" + input, index = string.indexOf(close2, open3.length);
    return ~index ? open3 + replaceClose2(string, close2, replace, index) + close2 : open3 + string + close2;
  };
  let replaceClose2 = (string, close2, replace, index) => {
    let result = "", cursor = 0;
    do {
      result += string.substring(cursor, index) + replace;
      cursor = index + close2.length;
      index = string.indexOf(close2, cursor);
    } while (~index);
    return result + string.substring(cursor);
  };
  let createColors2 = (enabled2 = isColorSupported2) => {
    let f2 = enabled2 ? formatter : () => String;
    return {
      isColorSupported: enabled2,
      reset: f2("\x1B[0m", "\x1B[0m"),
      bold: f2("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
      dim: f2("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
      italic: f2("\x1B[3m", "\x1B[23m"),
      underline: f2("\x1B[4m", "\x1B[24m"),
      inverse: f2("\x1B[7m", "\x1B[27m"),
      hidden: f2("\x1B[8m", "\x1B[28m"),
      strikethrough: f2("\x1B[9m", "\x1B[29m"),
      black: f2("\x1B[30m", "\x1B[39m"),
      red: f2("\x1B[31m", "\x1B[39m"),
      green: f2("\x1B[32m", "\x1B[39m"),
      yellow: f2("\x1B[33m", "\x1B[39m"),
      blue: f2("\x1B[34m", "\x1B[39m"),
      magenta: f2("\x1B[35m", "\x1B[39m"),
      cyan: f2("\x1B[36m", "\x1B[39m"),
      white: f2("\x1B[37m", "\x1B[39m"),
      gray: f2("\x1B[90m", "\x1B[39m"),
      bgBlack: f2("\x1B[40m", "\x1B[49m"),
      bgRed: f2("\x1B[41m", "\x1B[49m"),
      bgGreen: f2("\x1B[42m", "\x1B[49m"),
      bgYellow: f2("\x1B[43m", "\x1B[49m"),
      bgBlue: f2("\x1B[44m", "\x1B[49m"),
      bgMagenta: f2("\x1B[45m", "\x1B[49m"),
      bgCyan: f2("\x1B[46m", "\x1B[49m"),
      bgWhite: f2("\x1B[47m", "\x1B[49m"),
      blackBright: f2("\x1B[90m", "\x1B[39m"),
      redBright: f2("\x1B[91m", "\x1B[39m"),
      greenBright: f2("\x1B[92m", "\x1B[39m"),
      yellowBright: f2("\x1B[93m", "\x1B[39m"),
      blueBright: f2("\x1B[94m", "\x1B[39m"),
      magentaBright: f2("\x1B[95m", "\x1B[39m"),
      cyanBright: f2("\x1B[96m", "\x1B[39m"),
      whiteBright: f2("\x1B[97m", "\x1B[39m"),
      bgBlackBright: f2("\x1B[100m", "\x1B[49m"),
      bgRedBright: f2("\x1B[101m", "\x1B[49m"),
      bgGreenBright: f2("\x1B[102m", "\x1B[49m"),
      bgYellowBright: f2("\x1B[103m", "\x1B[49m"),
      bgBlueBright: f2("\x1B[104m", "\x1B[49m"),
      bgMagentaBright: f2("\x1B[105m", "\x1B[49m"),
      bgCyanBright: f2("\x1B[106m", "\x1B[49m"),
      bgWhiteBright: f2("\x1B[107m", "\x1B[49m")
    };
  };
  picocolors.exports = createColors2();
  picocolors.exports.createColors = createColors2;
  return picocolors.exports;
}
function J({ onlyFirst: t = false } = {}) {
  const F = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(F, t ? undefined : "g");
}
function T$1(t) {
  if (typeof t != "string")
    throw new TypeError(`Expected a \`string\`, got \`${typeof t}\``);
  return t.replace(Q, "");
}
function O(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function A$1(t, u = {}) {
  if (typeof t != "string" || t.length === 0 || (u = { ambiguousIsNarrow: true, ...u }, t = T$1(t), t.length === 0))
    return 0;
  t = t.replace(FD(), "  ");
  const F = u.ambiguousIsNarrow ? 1 : 2;
  let e2 = 0;
  for (const s of t) {
    const i = s.codePointAt(0);
    if (i <= 31 || i >= 127 && i <= 159 || i >= 768 && i <= 879)
      continue;
    switch (DD.eastAsianWidth(s)) {
      case "F":
      case "W":
        e2 += 2;
        break;
      case "A":
        e2 += F;
        break;
      default:
        e2 += 1;
    }
  }
  return e2;
}
function sD() {
  const t = new Map;
  for (const [u, F] of Object.entries(r)) {
    for (const [e2, s] of Object.entries(F))
      r[e2] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }, F[e2] = r[e2], t.set(s[0], s[1]);
    Object.defineProperty(r, u, { value: F, enumerable: false });
  }
  return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi = L$1(), r.color.ansi256 = N(), r.color.ansi16m = I(), r.bgColor.ansi = L$1(m), r.bgColor.ansi256 = N(m), r.bgColor.ansi16m = I(m), Object.defineProperties(r, { rgbToAnsi256: { value: (u, F, e2) => u === F && F === e2 ? u < 8 ? 16 : u > 248 ? 231 : Math.round((u - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u / 255 * 5) + 6 * Math.round(F / 255 * 5) + Math.round(e2 / 255 * 5), enumerable: false }, hexToRgb: { value: (u) => {
    const F = /[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));
    if (!F)
      return [0, 0, 0];
    let [e2] = F;
    e2.length === 3 && (e2 = [...e2].map((i) => i + i).join(""));
    const s = Number.parseInt(e2, 16);
    return [s >> 16 & 255, s >> 8 & 255, s & 255];
  }, enumerable: false }, hexToAnsi256: { value: (u) => r.rgbToAnsi256(...r.hexToRgb(u)), enumerable: false }, ansi256ToAnsi: { value: (u) => {
    if (u < 8)
      return 30 + u;
    if (u < 16)
      return 90 + (u - 8);
    let F, e2, s;
    if (u >= 232)
      F = ((u - 232) * 10 + 8) / 255, e2 = F, s = F;
    else {
      u -= 16;
      const C = u % 36;
      F = Math.floor(u / 36) / 5, e2 = Math.floor(C / 6) / 5, s = C % 6 / 5;
    }
    const i = Math.max(F, e2, s) * 2;
    if (i === 0)
      return 30;
    let D = 30 + (Math.round(s) << 2 | Math.round(e2) << 1 | Math.round(F));
    return i === 2 && (D += 60), D;
  }, enumerable: false }, rgbToAnsi: { value: (u, F, e2) => r.ansi256ToAnsi(r.rgbToAnsi256(u, F, e2)), enumerable: false }, hexToAnsi: { value: (u) => r.ansi256ToAnsi(r.hexToAnsi256(u)), enumerable: false } }), r;
}
function G(t, u, F) {
  return String(t).normalize().replace(/\r\n/g, `
`).split(`
`).map((e2) => oD(e2, u, F)).join(`
`);
}
function k$1(t, u) {
  if (typeof t == "string")
    return c.aliases.get(t) === u;
  for (const F of t)
    if (F !== undefined && k$1(F, u))
      return true;
  return false;
}
function lD(t, u) {
  if (t === u)
    return;
  const F = t.split(`
`), e2 = u.split(`
`), s = [];
  for (let i = 0;i < Math.max(F.length, e2.length); i++)
    F[i] !== e2[i] && s.push(i);
  return s;
}
function d$1(t, u) {
  const F = t;
  F.isTTY && F.setRawMode(u);
}

class x {
  constructor(u, F = true) {
    h(this, "input"), h(this, "output"), h(this, "_abortSignal"), h(this, "rl"), h(this, "opts"), h(this, "_render"), h(this, "_track", false), h(this, "_prevFrame", ""), h(this, "_subscribers", new Map), h(this, "_cursor", 0), h(this, "state", "initial"), h(this, "error", ""), h(this, "value");
    const { input: e2 = stdin2, output: s = stdout2, render: i, signal: D, ...C } = u;
    this.opts = C, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = i.bind(this), this._track = F, this._abortSignal = D, this.input = e2, this.output = s;
  }
  unsubscribe() {
    this._subscribers.clear();
  }
  setSubscriber(u, F) {
    const e2 = this._subscribers.get(u) ?? [];
    e2.push(F), this._subscribers.set(u, e2);
  }
  on(u, F) {
    this.setSubscriber(u, { cb: F });
  }
  once(u, F) {
    this.setSubscriber(u, { cb: F, once: true });
  }
  emit(u, ...F) {
    const e2 = this._subscribers.get(u) ?? [], s = [];
    for (const i of e2)
      i.cb(...F), i.once && s.push(() => e2.splice(e2.indexOf(i), 1));
    for (const i of s)
      i();
  }
  prompt() {
    return new Promise((u, F) => {
      if (this._abortSignal) {
        if (this._abortSignal.aborted)
          return this.state = "cancel", this.close(), u(S);
        this._abortSignal.addEventListener("abort", () => {
          this.state = "cancel", this.close();
        }, { once: true });
      }
      const e2 = new WriteStream(0);
      e2._write = (s, i, D) => {
        this._track && (this.value = this.rl?.line.replace(/\t/g, ""), this._cursor = this.rl?.cursor ?? 0, this.emit("value", this.value)), D();
      }, this.input.pipe(e2), this.rl = f.createInterface({ input: this.input, output: e2, tabSize: 2, prompt: "", escapeCodeTimeout: 50 }), f.emitKeypressEvents(this.input, this.rl), this.rl.prompt(), this.opts.initialValue !== undefined && this._track && this.rl.write(this.opts.initialValue), this.input.on("keypress", this.onKeypress), d$1(this.input, true), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
        this.output.write(srcExports.cursor.show), this.output.off("resize", this.render), d$1(this.input, false), u(this.value);
      }), this.once("cancel", () => {
        this.output.write(srcExports.cursor.show), this.output.off("resize", this.render), d$1(this.input, false), u(S);
      });
    });
  }
  onKeypress(u, F) {
    if (this.state === "error" && (this.state = "active"), F?.name && (!this._track && c.aliases.has(F.name) && this.emit("cursor", c.aliases.get(F.name)), c.actions.has(F.name) && this.emit("cursor", F.name)), u && (u.toLowerCase() === "y" || u.toLowerCase() === "n") && this.emit("confirm", u.toLowerCase() === "y"), u === "\t" && this.opts.placeholder && (this.value || (this.rl?.write(this.opts.placeholder), this.emit("value", this.opts.placeholder))), u && this.emit("key", u.toLowerCase()), F?.name === "return") {
      if (this.opts.validate) {
        const e2 = this.opts.validate(this.value);
        e2 && (this.error = e2 instanceof Error ? e2.message : e2, this.state = "error", this.rl?.write(this.value));
      }
      this.state !== "error" && (this.state = "submit");
    }
    k$1([u, F?.name, F?.sequence], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
  }
  close() {
    this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), d$1(this.input, false), this.rl?.close(), this.rl = undefined, this.emit(`${this.state}`, this.value), this.unsubscribe();
  }
  restoreCursor() {
    const u = G(this._prevFrame, process.stdout.columns, { hard: true }).split(`
`).length - 1;
    this.output.write(srcExports.cursor.move(-999, u * -1));
  }
  render() {
    const u = G(this._render(this) ?? "", process.stdout.columns, { hard: true });
    if (u !== this._prevFrame) {
      if (this.state === "initial")
        this.output.write(srcExports.cursor.hide);
      else {
        const F = lD(this._prevFrame, u);
        if (this.restoreCursor(), F && F?.length === 1) {
          const e2 = F[0];
          this.output.write(srcExports.cursor.move(0, e2)), this.output.write(srcExports.erase.lines(1));
          const s = u.split(`
`);
          this.output.write(s[e2]), this._prevFrame = u, this.output.write(srcExports.cursor.move(0, s.length - e2 - 1));
          return;
        }
        if (F && F?.length > 1) {
          const e2 = F[0];
          this.output.write(srcExports.cursor.move(0, e2)), this.output.write(srcExports.erase.down());
          const s = u.split(`
`).slice(e2);
          this.output.write(s.join(`
`)), this._prevFrame = u;
          return;
        }
        this.output.write(srcExports.erase.down());
      }
      this.output.write(u), this.state === "initial" && (this.state = "active"), this._prevFrame = u;
    }
  }
}
function ce() {
  return g.platform !== "win32" ? g.env.TERM !== "linux" : !!g.env.CI || !!g.env.WT_SESSION || !!g.env.TERMINUS_SUBLIME || g.env.ConEmuTask === "{cmd::Cmder}" || g.env.TERM_PROGRAM === "Terminus-Sublime" || g.env.TERM_PROGRAM === "vscode" || g.env.TERM === "xterm-256color" || g.env.TERM === "alacritty" || g.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
async function prompt2(message, opts = {}) {
  const handleCancel = (value) => {
    if (typeof value !== "symbol" || value.toString() !== "Symbol(clack:cancel)") {
      return value;
    }
    switch (opts.cancel) {
      case "reject": {
        const error = new Error("Prompt cancelled.");
        error.name = "ConsolaPromptCancelledError";
        if (Error.captureStackTrace) {
          Error.captureStackTrace(error, prompt2);
        }
        throw error;
      }
      case "undefined": {
        return;
      }
      case "null": {
        return null;
      }
      case "symbol": {
        return kCancel;
      }
      default:
      case "default": {
        return opts.default ?? opts.initial;
      }
    }
  };
  if (!opts.type || opts.type === "text") {
    return await he({
      message,
      defaultValue: opts.default,
      placeholder: opts.placeholder,
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "confirm") {
    return await ye({
      message,
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "select") {
    return await ve({
      message,
      options: opts.options.map((o2) => typeof o2 === "string" ? { value: o2, label: o2 } : o2),
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "multiselect") {
    return await fe({
      message,
      options: opts.options.map((o2) => typeof o2 === "string" ? { value: o2, label: o2 } : o2),
      required: opts.required,
      initialValues: opts.initial
    }).then(handleCancel);
  }
  throw new Error(`Unknown prompt type: ${opts.type}`);
}
var src, hasRequiredSrc, srcExports, picocolors, hasRequiredPicocolors, picocolorsExports, e, Q, P$1, X, DD, uD = function() {
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
}, FD, m = 10, L$1 = (t = 0) => (u) => `\x1B[${u + t}m`, N = (t = 0) => (u) => `\x1B[${38 + t};5;${u}m`, I = (t = 0) => (u, F, e2) => `\x1B[${38 + t};2;${u};${F};${e2}m`, r, tD, eD, iD, v, CD = 39, w$1 = "\x07", W$1 = "[", rD = "]", R = "m", y, V$1 = (t) => `${v.values().next().value}${W$1}${t}${R}`, z = (t) => `${v.values().next().value}${y}${t}${w$1}`, ED = (t) => t.split(" ").map((u) => A$1(u)), _ = (t, u, F) => {
  const e2 = [...u];
  let s = false, i = false, D = A$1(T$1(t[t.length - 1]));
  for (const [C, o] of e2.entries()) {
    const E = A$1(o);
    if (D + E <= F ? t[t.length - 1] += o : (t.push(o), D = 0), v.has(o) && (s = true, i = e2.slice(C + 1).join("").startsWith(y)), s) {
      i ? o === w$1 && (s = false, i = false) : o === R && (s = false);
      continue;
    }
    D += E, D === F && C < e2.length - 1 && (t.push(""), D = 0);
  }
  !D && t[t.length - 1].length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
}, nD = (t) => {
  const u = t.split(" ");
  let F = u.length;
  for (;F > 0 && !(A$1(u[F - 1]) > 0); )
    F--;
  return F === u.length ? t : u.slice(0, F).join(" ") + u.slice(F).join("");
}, oD = (t, u, F = {}) => {
  if (F.trim !== false && t.trim() === "")
    return "";
  let e2 = "", s, i;
  const D = ED(t);
  let C = [""];
  for (const [E, a] of t.split(" ").entries()) {
    F.trim !== false && (C[C.length - 1] = C[C.length - 1].trimStart());
    let n = A$1(C[C.length - 1]);
    if (E !== 0 && (n >= u && (F.wordWrap === false || F.trim === false) && (C.push(""), n = 0), (n > 0 || F.trim === false) && (C[C.length - 1] += " ", n++)), F.hard && D[E] > u) {
      const B = u - n, p = 1 + Math.floor((D[E] - B - 1) / u);
      Math.floor((D[E] - 1) / u) < p && C.push(""), _(C, a, u);
      continue;
    }
    if (n + D[E] > u && n > 0 && D[E] > 0) {
      if (F.wordWrap === false && n < u) {
        _(C, a, u);
        continue;
      }
      C.push("");
    }
    if (n + D[E] > u && F.wordWrap === false) {
      _(C, a, u);
      continue;
    }
    C[C.length - 1] += a;
  }
  F.trim !== false && (C = C.map((E) => nD(E)));
  const o = [...C.join(`
`)];
  for (const [E, a] of o.entries()) {
    if (e2 += a, v.has(a)) {
      const { groups: B } = new RegExp(`(?:\\${W$1}(?<code>\\d+)m|\\${y}(?<uri>.*)${w$1})`).exec(o.slice(E).join("")) || { groups: {} };
      if (B.code !== undefined) {
        const p = Number.parseFloat(B.code);
        s = p === CD ? undefined : p;
      } else
        B.uri !== undefined && (i = B.uri.length === 0 ? undefined : B.uri);
    }
    const n = iD.codes.get(Number(s));
    o[E + 1] === `
` ? (i && (e2 += z("")), s && n && (e2 += V$1(n))) : a === `
` && (s && n && (e2 += V$1(s)), i && (e2 += z(i)));
  }
  return e2;
}, aD, c, S, AD, pD = (t, u, F) => (u in t) ? AD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F, h = (t, u, F) => (pD(t, typeof u != "symbol" ? u + "" : u, F), F), fD, bD, mD = (t, u, F) => (u in t) ? bD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F, Y = (t, u, F) => (mD(t, typeof u != "symbol" ? u + "" : u, F), F), wD, SD, $D = (t, u, F) => (u in t) ? SD(t, u, { enumerable: true, configurable: true, writable: true, value: F }) : t[u] = F, q = (t, u, F) => ($D(t, typeof u != "symbol" ? u + "" : u, F), F), jD, PD, V, u = (t, n) => V ? t : n, le, L, W, C, o, d, k, P, A, T, F, w = (t) => {
  switch (t) {
    case "initial":
    case "active":
      return e.cyan(le);
    case "cancel":
      return e.red(L);
    case "error":
      return e.yellow(W);
    case "submit":
      return e.green(C);
  }
}, B = (t) => {
  const { cursor: n, options: s, style: r2 } = t, i = t.maxItems ?? Number.POSITIVE_INFINITY, a = Math.max(process.stdout.rows - 4, 0), c2 = Math.min(a, Math.max(i, 5));
  let l = 0;
  n >= l + c2 - 3 ? l = Math.max(Math.min(n - c2 + 3, s.length - c2), 0) : n < l + 2 && (l = Math.max(n - 2, 0));
  const $2 = c2 < s.length && l > 0, p = c2 < s.length && l + c2 < s.length;
  return s.slice(l, l + c2).map((M, v2, x2) => {
    const j = v2 === 0 && $2, E = v2 === x2.length - 1 && p;
    return j || E ? e.dim("...") : r2(M, v2 + l === n);
  });
}, he = (t) => new PD({ validate: t.validate, placeholder: t.placeholder, defaultValue: t.defaultValue, initialValue: t.initialValue, render() {
  const n = `${e.gray(o)}
${w(this.state)} ${t.message}
`, s = t.placeholder ? e.inverse(t.placeholder[0]) + e.dim(t.placeholder.slice(1)) : e.inverse(e.hidden("_")), r2 = this.value ? this.valueWithCursor : s;
  switch (this.state) {
    case "error":
      return `${n.trim()}
${e.yellow(o)} ${r2}
${e.yellow(d)} ${e.yellow(this.error)}
`;
    case "submit":
      return `${n}${e.gray(o)} ${e.dim(this.value || t.placeholder)}`;
    case "cancel":
      return `${n}${e.gray(o)} ${e.strikethrough(e.dim(this.value ?? ""))}${this.value?.trim() ? `
${e.gray(o)}` : ""}`;
    default:
      return `${n}${e.cyan(o)} ${r2}
${e.cyan(d)}
`;
  }
} }).prompt(), ye = (t) => {
  const n = t.active ?? "Yes", s = t.inactive ?? "No";
  return new fD({ active: n, inactive: s, initialValue: t.initialValue ?? true, render() {
    const r2 = `${e.gray(o)}
${w(this.state)} ${t.message}
`, i = this.value ? n : s;
    switch (this.state) {
      case "submit":
        return `${r2}${e.gray(o)} ${e.dim(i)}`;
      case "cancel":
        return `${r2}${e.gray(o)} ${e.strikethrough(e.dim(i))}
${e.gray(o)}`;
      default:
        return `${r2}${e.cyan(o)} ${this.value ? `${e.green(k)} ${n}` : `${e.dim(P)} ${e.dim(n)}`} ${e.dim("/")} ${this.value ? `${e.dim(P)} ${e.dim(s)}` : `${e.green(k)} ${s}`}
${e.cyan(d)}
`;
    }
  } }).prompt();
}, ve = (t) => {
  const n = (s, r2) => {
    const i = s.label ?? String(s.value);
    switch (r2) {
      case "selected":
        return `${e.dim(i)}`;
      case "active":
        return `${e.green(k)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}`;
      case "cancelled":
        return `${e.strikethrough(e.dim(i))}`;
      default:
        return `${e.dim(P)} ${e.dim(i)}`;
    }
  };
  return new jD({ options: t.options, initialValue: t.initialValue, render() {
    const s = `${e.gray(o)}
${w(this.state)} ${t.message}
`;
    switch (this.state) {
      case "submit":
        return `${s}${e.gray(o)} ${n(this.options[this.cursor], "selected")}`;
      case "cancel":
        return `${s}${e.gray(o)} ${n(this.options[this.cursor], "cancelled")}
${e.gray(o)}`;
      default:
        return `${s}${e.cyan(o)} ${B({ cursor: this.cursor, options: this.options, maxItems: t.maxItems, style: (r2, i) => n(r2, i ? "active" : "inactive") }).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`;
    }
  } }).prompt();
}, fe = (t) => {
  const n = (s, r2) => {
    const i = s.label ?? String(s.value);
    return r2 === "active" ? `${e.cyan(A)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}` : r2 === "selected" ? `${e.green(T)} ${e.dim(i)}` : r2 === "cancelled" ? `${e.strikethrough(e.dim(i))}` : r2 === "active-selected" ? `${e.green(T)} ${i} ${s.hint ? e.dim(`(${s.hint})`) : ""}` : r2 === "submitted" ? `${e.dim(i)}` : `${e.dim(F)} ${e.dim(i)}`;
  };
  return new wD({ options: t.options, initialValues: t.initialValues, required: t.required ?? true, cursorAt: t.cursorAt, validate(s) {
    if (this.required && s.length === 0)
      return `Please select at least one option.
${e.reset(e.dim(`Press ${e.gray(e.bgWhite(e.inverse(" space ")))} to select, ${e.gray(e.bgWhite(e.inverse(" enter ")))} to submit`))}`;
  }, render() {
    const s = `${e.gray(o)}
${w(this.state)} ${t.message}
`, r2 = (i, a) => {
      const c2 = this.value.includes(i.value);
      return a && c2 ? n(i, "active-selected") : c2 ? n(i, "selected") : n(i, a ? "active" : "inactive");
    };
    switch (this.state) {
      case "submit":
        return `${s}${e.gray(o)} ${this.options.filter(({ value: i }) => this.value.includes(i)).map((i) => n(i, "submitted")).join(e.dim(", ")) || e.dim("none")}`;
      case "cancel": {
        const i = this.options.filter(({ value: a }) => this.value.includes(a)).map((a) => n(a, "cancelled")).join(e.dim(", "));
        return `${s}${e.gray(o)} ${i.trim() ? `${i}
${e.gray(o)}` : ""}`;
      }
      case "error": {
        const i = this.error.split(`
`).map((a, c2) => c2 === 0 ? `${e.yellow(d)} ${e.yellow(a)}` : `   ${a}`).join(`
`);
        return `${s + e.yellow(o)} ${B({ options: this.options, cursor: this.cursor, maxItems: t.maxItems, style: r2 }).join(`
${e.yellow(o)}  `)}
${i}
`;
      }
      default:
        return `${s}${e.cyan(o)} ${B({ options: this.options, cursor: this.cursor, maxItems: t.maxItems, style: r2 }).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`;
    }
  } }).prompt();
}, kCancel;
var init_prompt = __esm(() => {
  srcExports = requireSrc();
  picocolors = { exports: {} };
  picocolorsExports = /* @__PURE__ */ requirePicocolors();
  e = /* @__PURE__ */ getDefaultExportFromCjs(picocolorsExports);
  Q = J();
  P$1 = { exports: {} };
  (function(t) {
    var u = {};
    t.exports = u, u.eastAsianWidth = function(e2) {
      var s = e2.charCodeAt(0), i = e2.length == 2 ? e2.charCodeAt(1) : 0, D = s;
      return 55296 <= s && s <= 56319 && 56320 <= i && i <= 57343 && (s &= 1023, i &= 1023, D = s << 10 | i, D += 65536), D == 12288 || 65281 <= D && D <= 65376 || 65504 <= D && D <= 65510 ? "F" : D == 8361 || 65377 <= D && D <= 65470 || 65474 <= D && D <= 65479 || 65482 <= D && D <= 65487 || 65490 <= D && D <= 65495 || 65498 <= D && D <= 65500 || 65512 <= D && D <= 65518 ? "H" : 4352 <= D && D <= 4447 || 4515 <= D && D <= 4519 || 4602 <= D && D <= 4607 || 9001 <= D && D <= 9002 || 11904 <= D && D <= 11929 || 11931 <= D && D <= 12019 || 12032 <= D && D <= 12245 || 12272 <= D && D <= 12283 || 12289 <= D && D <= 12350 || 12353 <= D && D <= 12438 || 12441 <= D && D <= 12543 || 12549 <= D && D <= 12589 || 12593 <= D && D <= 12686 || 12688 <= D && D <= 12730 || 12736 <= D && D <= 12771 || 12784 <= D && D <= 12830 || 12832 <= D && D <= 12871 || 12880 <= D && D <= 13054 || 13056 <= D && D <= 19903 || 19968 <= D && D <= 42124 || 42128 <= D && D <= 42182 || 43360 <= D && D <= 43388 || 44032 <= D && D <= 55203 || 55216 <= D && D <= 55238 || 55243 <= D && D <= 55291 || 63744 <= D && D <= 64255 || 65040 <= D && D <= 65049 || 65072 <= D && D <= 65106 || 65108 <= D && D <= 65126 || 65128 <= D && D <= 65131 || 110592 <= D && D <= 110593 || 127488 <= D && D <= 127490 || 127504 <= D && D <= 127546 || 127552 <= D && D <= 127560 || 127568 <= D && D <= 127569 || 131072 <= D && D <= 194367 || 177984 <= D && D <= 196605 || 196608 <= D && D <= 262141 ? "W" : 32 <= D && D <= 126 || 162 <= D && D <= 163 || 165 <= D && D <= 166 || D == 172 || D == 175 || 10214 <= D && D <= 10221 || 10629 <= D && D <= 10630 ? "Na" : D == 161 || D == 164 || 167 <= D && D <= 168 || D == 170 || 173 <= D && D <= 174 || 176 <= D && D <= 180 || 182 <= D && D <= 186 || 188 <= D && D <= 191 || D == 198 || D == 208 || 215 <= D && D <= 216 || 222 <= D && D <= 225 || D == 230 || 232 <= D && D <= 234 || 236 <= D && D <= 237 || D == 240 || 242 <= D && D <= 243 || 247 <= D && D <= 250 || D == 252 || D == 254 || D == 257 || D == 273 || D == 275 || D == 283 || 294 <= D && D <= 295 || D == 299 || 305 <= D && D <= 307 || D == 312 || 319 <= D && D <= 322 || D == 324 || 328 <= D && D <= 331 || D == 333 || 338 <= D && D <= 339 || 358 <= D && D <= 359 || D == 363 || D == 462 || D == 464 || D == 466 || D == 468 || D == 470 || D == 472 || D == 474 || D == 476 || D == 593 || D == 609 || D == 708 || D == 711 || 713 <= D && D <= 715 || D == 717 || D == 720 || 728 <= D && D <= 731 || D == 733 || D == 735 || 768 <= D && D <= 879 || 913 <= D && D <= 929 || 931 <= D && D <= 937 || 945 <= D && D <= 961 || 963 <= D && D <= 969 || D == 1025 || 1040 <= D && D <= 1103 || D == 1105 || D == 8208 || 8211 <= D && D <= 8214 || 8216 <= D && D <= 8217 || 8220 <= D && D <= 8221 || 8224 <= D && D <= 8226 || 8228 <= D && D <= 8231 || D == 8240 || 8242 <= D && D <= 8243 || D == 8245 || D == 8251 || D == 8254 || D == 8308 || D == 8319 || 8321 <= D && D <= 8324 || D == 8364 || D == 8451 || D == 8453 || D == 8457 || D == 8467 || D == 8470 || 8481 <= D && D <= 8482 || D == 8486 || D == 8491 || 8531 <= D && D <= 8532 || 8539 <= D && D <= 8542 || 8544 <= D && D <= 8555 || 8560 <= D && D <= 8569 || D == 8585 || 8592 <= D && D <= 8601 || 8632 <= D && D <= 8633 || D == 8658 || D == 8660 || D == 8679 || D == 8704 || 8706 <= D && D <= 8707 || 8711 <= D && D <= 8712 || D == 8715 || D == 8719 || D == 8721 || D == 8725 || D == 8730 || 8733 <= D && D <= 8736 || D == 8739 || D == 8741 || 8743 <= D && D <= 8748 || D == 8750 || 8756 <= D && D <= 8759 || 8764 <= D && D <= 8765 || D == 8776 || D == 8780 || D == 8786 || 8800 <= D && D <= 8801 || 8804 <= D && D <= 8807 || 8810 <= D && D <= 8811 || 8814 <= D && D <= 8815 || 8834 <= D && D <= 8835 || 8838 <= D && D <= 8839 || D == 8853 || D == 8857 || D == 8869 || D == 8895 || D == 8978 || 9312 <= D && D <= 9449 || 9451 <= D && D <= 9547 || 9552 <= D && D <= 9587 || 9600 <= D && D <= 9615 || 9618 <= D && D <= 9621 || 9632 <= D && D <= 9633 || 9635 <= D && D <= 9641 || 9650 <= D && D <= 9651 || 9654 <= D && D <= 9655 || 9660 <= D && D <= 9661 || 9664 <= D && D <= 9665 || 9670 <= D && D <= 9672 || D == 9675 || 9678 <= D && D <= 9681 || 9698 <= D && D <= 9701 || D == 9711 || 9733 <= D && D <= 9734 || D == 9737 || 9742 <= D && D <= 9743 || 9748 <= D && D <= 9749 || D == 9756 || D == 9758 || D == 9792 || D == 9794 || 9824 <= D && D <= 9825 || 9827 <= D && D <= 9829 || 9831 <= D && D <= 9834 || 9836 <= D && D <= 9837 || D == 9839 || 9886 <= D && D <= 9887 || 9918 <= D && D <= 9919 || 9924 <= D && D <= 9933 || 9935 <= D && D <= 9953 || D == 9955 || 9960 <= D && D <= 9983 || D == 10045 || D == 10071 || 10102 <= D && D <= 10111 || 11093 <= D && D <= 11097 || 12872 <= D && D <= 12879 || 57344 <= D && D <= 63743 || 65024 <= D && D <= 65039 || D == 65533 || 127232 <= D && D <= 127242 || 127248 <= D && D <= 127277 || 127280 <= D && D <= 127337 || 127344 <= D && D <= 127386 || 917760 <= D && D <= 917999 || 983040 <= D && D <= 1048573 || 1048576 <= D && D <= 1114109 ? "A" : "N";
    }, u.characterLength = function(e2) {
      var s = this.eastAsianWidth(e2);
      return s == "F" || s == "W" || s == "A" ? 2 : 1;
    };
    function F(e2) {
      return e2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
    }
    u.length = function(e2) {
      for (var s = F(e2), i = 0, D = 0;D < s.length; D++)
        i = i + this.characterLength(s[D]);
      return i;
    }, u.slice = function(e2, s, i) {
      textLen = u.length(e2), s = s || 0, i = i || 1, s < 0 && (s = textLen + s), i < 0 && (i = textLen + i);
      for (var D = "", C = 0, o = F(e2), E = 0;E < o.length; E++) {
        var a = o[E], n = u.length(a);
        if (C >= s - (n == 2 ? 1 : 0))
          if (C + n <= i)
            D += a;
          else
            break;
        C += n;
      }
      return D;
    };
  })(P$1);
  X = P$1.exports;
  DD = O(X);
  FD = O(uD);
  r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], gray: [90, 39], grey: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgGray: [100, 49], bgGrey: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
  Object.keys(r.modifier);
  tD = Object.keys(r.color);
  eD = Object.keys(r.bgColor);
  [...tD, ...eD];
  iD = sD();
  v = new Set(["\x1B", ""]);
  y = `${rD}8;;`;
  aD = ["up", "down", "left", "right", "space", "enter", "cancel"];
  c = { actions: new Set(aD), aliases: new Map([["k", "up"], ["j", "down"], ["h", "left"], ["l", "right"], ["\x03", "cancel"], ["escape", "cancel"]]) };
  globalThis.process.platform.startsWith("win");
  S = Symbol("clack:cancel");
  AD = Object.defineProperty;
  fD = class fD extends x {
    get cursor() {
      return this.value ? 0 : 1;
    }
    get _value() {
      return this.cursor === 0;
    }
    constructor(u) {
      super(u, false), this.value = !!u.initialValue, this.on("value", () => {
        this.value = this._value;
      }), this.on("confirm", (F) => {
        this.output.write(srcExports.cursor.move(0, -1)), this.value = F, this.state = "submit", this.close();
      }), this.on("cursor", () => {
        this.value = !this.value;
      });
    }
  };
  bD = Object.defineProperty;
  wD = class extends x {
    constructor(u) {
      super(u, false), Y(this, "options"), Y(this, "cursor", 0), this.options = u.options, this.value = [...u.initialValues ?? []], this.cursor = Math.max(this.options.findIndex(({ value: F }) => F === u.cursorAt), 0), this.on("key", (F) => {
        F === "a" && this.toggleAll();
      }), this.on("cursor", (F) => {
        switch (F) {
          case "left":
          case "up":
            this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
            break;
          case "down":
          case "right":
            this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
            break;
          case "space":
            this.toggleValue();
            break;
        }
      });
    }
    get _value() {
      return this.options[this.cursor].value;
    }
    toggleAll() {
      const u = this.value.length === this.options.length;
      this.value = u ? [] : this.options.map((F) => F.value);
    }
    toggleValue() {
      const u = this.value.includes(this._value);
      this.value = u ? this.value.filter((F) => F !== this._value) : [...this.value, this._value];
    }
  };
  SD = Object.defineProperty;
  jD = class jD extends x {
    constructor(u) {
      super(u, false), q(this, "options"), q(this, "cursor", 0), this.options = u.options, this.cursor = this.options.findIndex(({ value: F }) => F === u.initialValue), this.cursor === -1 && (this.cursor = 0), this.changeValue(), this.on("cursor", (F) => {
        switch (F) {
          case "left":
          case "up":
            this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
            break;
          case "down":
          case "right":
            this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
            break;
        }
        this.changeValue();
      });
    }
    get _value() {
      return this.options[this.cursor];
    }
    changeValue() {
      this.value = this._value.value;
    }
  };
  PD = class PD extends x {
    get valueWithCursor() {
      if (this.state === "submit")
        return this.value;
      if (this.cursor >= this.value.length)
        return `${this.value}█`;
      const u = this.value.slice(0, this.cursor), [F, ...e$1] = this.value.slice(this.cursor);
      return `${u}${e.inverse(F)}${e$1.join("")}`;
    }
    get cursor() {
      return this._cursor;
    }
    constructor(u) {
      super(u), this.on("finalize", () => {
        this.value || (this.value = u.defaultValue);
      });
    }
  };
  V = ce();
  le = u("❯", ">");
  L = u("■", "x");
  W = u("▲", "x");
  C = u("✔", "√");
  o = u("");
  d = u("");
  k = u("●", ">");
  P = u("○", " ");
  A = u("◻", "[•]");
  T = u("◼", "[+]");
  F = u("◻", "[ ]");
  `${e.gray(o)}  `;
  kCancel = Symbol.for("cancel");
});

// node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    blackBright: [90, 39],
    gray: [90, 39],
    grey: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    bgGrey: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = new Map;
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/chalk/source/vendor/supports-color/index.js
import process2 from "node:process";
import os from "node:os";
import tty from "node:tty";
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : process2.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = process2;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== undefined) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === undefined) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (process2.platform === "win32") {
    const osRelease = os.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((key) => (key in env))) {
      return 3;
    }
    if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => (sign in env)) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if (env.TERM === "xterm-ghostty") {
    return 3;
  }
  if (env.TERM === "wezterm") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
  stderr: createSupportsColor({ isTTY: tty.isatty(2) })
};
var supports_color_default = supportsColor;

// node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? `\r
` : `
`) + postfix;
    endIndex = index + 1;
    index = string.indexOf(`
`, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === undefined ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk = (...strings) => strings.join(" ");
  applyOptions(chalk, options);
  Object.setPrototypeOf(chalk, createChalk.prototype);
  return chalk;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === undefined) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self, string) => {
  if (self.level <= 0 || !string) {
    return self[IS_EMPTY] ? "" : string;
  }
  let styler = self[STYLER];
  if (styler === undefined) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== undefined) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf(`
`);
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk;

// node_modules/@deno/shim-deno/dist/index.mjs
var import_which = __toESM(require_lib(), 1);
var import_which2 = __toESM(require_lib(), 1);
var import_shim_deno_test = __toESM(require_dist(), 1);
import * as fs5 from "fs";
import * as stream from "stream";
import * as fs from "fs";
import { promisify } from "util";
import { stat as nodeStat } from "fs/promises";
import * as os2 from "os";
import { fstatSync as nodeFstatSync } from "fs";
import { ftruncate as nodeftruncate } from "fs";
import { promisify as promisify2 } from "util";
import { ftruncateSync as nodeftruncateSync } from "fs";
import { fdatasync as nodefdatasync } from "fs";
import { promisify as promisify3 } from "util";
import { fdatasyncSync as nodefdatasyncSync } from "fs";
import { promisify as promisify4 } from "util";
import { read as nodeRead } from "fs";
import * as fs2 from "fs";
import * as fs3 from "fs";
import { promisify as promisify5 } from "util";
import * as fs4 from "fs";
import fs34 from "fs";
import * as os22 from "os";
import { join } from "path";
import { pathToFileURL } from "url";
import stream2 from "stream";
import tty2 from "tty";
import { isatty } from "tty";
import ps from "process";
import { fileURLToPath } from "url";
import * as fs6 from "fs/promises";
import * as fs7 from "fs";
import * as fs8 from "fs/promises";
import * as fs9 from "fs";
import * as fs10 from "fs";
import { createConnection } from "net";
import { Socket } from "net";
import { once } from "events";
import { connect as tlsConnect } from "tls";
import { readFile } from "fs/promises";
import * as fs11 from "fs/promises";
import * as fs12 from "fs";
import { open as _open } from "fs";
import { promisify as promisify6 } from "util";
import { constants } from "fs";
import os3 from "os";
import { openSync as nodeOpenSync } from "fs";
import { fsync as nodeFsync } from "fs";
import { promisify as promisify7 } from "util";
import { fsyncSync as nodeFsyncSync } from "fs";
import ps2 from "process";
import * as os4 from "os";
import * as util from "util";
import os5 from "os";
import ps3 from "process";
import * as fs13 from "fs/promises";
import * as fs14 from "fs";
import { createServer } from "net";
import { createServer as createServer2 } from "tls";
import * as fs15 from "fs";
import * as os6 from "os";
import * as fs16 from "fs/promises";
import * as fs17 from "fs";
import { mkdtemp } from "fs/promises";
import { join as join2 } from "path";
import { tmpdir } from "os";
import { mkdtempSync } from "fs";
import { join as join3 } from "path";
import { tmpdir as tmpdir2 } from "os";
import { tmpdir as tmpdir3 } from "os";
import { join as join4 } from "path";
import * as fs18 from "fs/promises";
import { tmpdir as tmpdir4 } from "os";
import { join as join5 } from "path";
import * as fs19 from "fs";
import { mkdir as nodeMkdir } from "fs/promises";
import * as fs20 from "fs";
import { release } from "os";
import { uptime } from "os";
import { opendir } from "fs/promises";
import { readdirSync as nodeReadDir } from "fs";
import { readFile as nodeReadFile } from "fs/promises";
import { readFileSync as nodeReadFile2 } from "fs";
import * as fs21 from "fs/promises";
import * as fs22 from "fs";
import * as fs23 from "fs/promises";
import * as fs24 from "fs";
import { rm, rmdir } from "fs/promises";
import ps4 from "process";
import * as fs25 from "fs";
import { rename as nodeRename } from "fs/promises";
import * as fs26 from "fs";
import dns from "dns";
import childProcess from "child_process";
import fs27 from "fs";
import os7 from "os";
import url from "url";
import { once as once2 } from "events";
import { Socket as Socket2 } from "net";
import * as fs28 from "fs";
import * as fs29 from "fs/promises";
import * as fs30 from "fs";
import * as fs31 from "fs/promises";
import * as fs32 from "fs";
import ps5 from "process";
import { watch } from "fs/promises";
import { resolve } from "path";
import * as fs33 from "fs/promises";
import { platform as platform3 } from "os";
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var main_exports = {};
__export2(main_exports, {
  File: () => File,
  FsFile: () => FsFile,
  PermissionStatus: () => PermissionStatus,
  Permissions: () => Permissions,
  Process: () => Process,
  SeekMode: () => SeekMode,
  addSignalListener: () => addSignalListener,
  args: () => args,
  build: () => build,
  chdir: () => chdir,
  chmod: () => chmod22,
  chmodSync: () => chmodSync22,
  chown: () => chown2,
  chownSync: () => chownSync2,
  close: () => close,
  connect: () => connect,
  connectTls: () => connectTls,
  consoleSize: () => consoleSize,
  copy: () => copy,
  copyFile: () => copyFile2,
  copyFileSync: () => copyFileSync2,
  create: () => create,
  createSync: () => createSync,
  customInspect: () => customInspect,
  cwd: () => cwd,
  env: () => env2,
  errors: () => errors_exports,
  execPath: () => execPath,
  exit: () => exit,
  fdatasync: () => fdatasync,
  fdatasyncSync: () => fdatasyncSync,
  fstat: () => fstat2,
  fstatSync: () => fstatSync,
  fsync: () => fsync,
  fsyncSync: () => fsyncSync,
  ftruncate: () => ftruncate,
  ftruncateSync: () => ftruncateSync,
  futime: () => futime,
  futimeSync: () => futimeSync,
  gid: () => gid,
  hostname: () => hostname2,
  inspect: () => inspect2,
  isatty: () => isatty,
  kill: () => kill,
  link: () => link2,
  linkSync: () => linkSync2,
  listen: () => listen,
  listenTls: () => listenTls,
  loadavg: () => loadavg2,
  lstat: () => lstat2,
  lstatSync: () => lstatSync2,
  mainModule: () => mainModule,
  makeTempDir: () => makeTempDir,
  makeTempDirSync: () => makeTempDirSync,
  makeTempFile: () => makeTempFile,
  makeTempFileSync: () => makeTempFileSync,
  memoryUsage: () => memoryUsage,
  metrics: () => metrics,
  mkdir: () => mkdir,
  mkdirSync: () => mkdirSync2,
  noColor: () => noColor,
  open: () => open,
  openSync: () => openSync,
  osRelease: () => osRelease,
  osUptime: () => osUptime,
  permissions: () => permissions,
  pid: () => pid,
  ppid: () => ppid,
  read: () => read,
  readDir: () => readDir,
  readDirSync: () => readDirSync,
  readFile: () => readFile2,
  readFileSync: () => readFileSync2,
  readLink: () => readLink,
  readLinkSync: () => readLinkSync,
  readSync: () => readSync2,
  readTextFile: () => readTextFile,
  readTextFileSync: () => readTextFileSync,
  realPath: () => realPath,
  realPathSync: () => realPathSync,
  remove: () => remove,
  removeSignalListener: () => removeSignalListener,
  removeSync: () => removeSync,
  rename: () => rename,
  renameSync: () => renameSync2,
  resolveDns: () => resolveDns,
  resources: () => resources,
  run: () => run,
  shutdown: () => shutdown,
  stat: () => stat,
  statSync: () => statSync2,
  stderr: () => stderr,
  stdin: () => stdin,
  stdout: () => stdout,
  symlink: () => symlink2,
  symlinkSync: () => symlinkSync2,
  test: () => import_shim_deno_test.test,
  truncate: () => truncate2,
  truncateSync: () => truncateSync2,
  uid: () => uid,
  utime: () => utime,
  utimeSync: () => utimeSync,
  version: () => version,
  watchFs: () => watchFs,
  write: () => write2,
  writeFile: () => writeFile3,
  writeFileSync: () => writeFileSync2,
  writeSync: () => writeSync2,
  writeTextFile: () => writeTextFile,
  writeTextFileSync: () => writeTextFileSync
});
var errors_exports = {};
__export2(errors_exports, {
  AddrInUse: () => AddrInUse,
  AddrNotAvailable: () => AddrNotAvailable,
  AlreadyExists: () => AlreadyExists,
  BadResource: () => BadResource,
  BrokenPipe: () => BrokenPipe,
  Busy: () => Busy,
  ConnectionAborted: () => ConnectionAborted,
  ConnectionRefused: () => ConnectionRefused,
  ConnectionReset: () => ConnectionReset,
  Http: () => Http,
  Interrupted: () => Interrupted,
  InvalidData: () => InvalidData,
  NotConnected: () => NotConnected,
  NotFound: () => NotFound,
  PermissionDenied: () => PermissionDenied,
  TimedOut: () => TimedOut,
  UnexpectedEof: () => UnexpectedEof,
  WriteZero: () => WriteZero
});
var AddrInUse = class extends Error {
};
var AddrNotAvailable = class extends Error {
};
var AlreadyExists = class extends Error {
};
var BadResource = class extends Error {
};
var BrokenPipe = class extends Error {
};
var Busy = class extends Error {
};
var ConnectionAborted = class extends Error {
};
var ConnectionRefused = class extends Error {
};
var ConnectionReset = class extends Error {
};
var Http = class extends Error {
};
var Interrupted = class extends Error {
};
var InvalidData = class extends Error {
};
var NotConnected = class extends Error {
};
var NotFound = class extends Error {
  code = "ENOENT";
};
var PermissionDenied = class extends Error {
};
var TimedOut = class extends Error {
};
var UnexpectedEof = class extends Error {
};
var WriteZero = class extends Error {
};
var mapper = (Ctor) => (err) => Object.assign(new Ctor(err.message), {
  stack: err.stack
});
var map = {
  EEXIST: mapper(AlreadyExists),
  ENOENT: mapper(NotFound),
  EBADF: mapper(BadResource)
};
var isNodeErr = (e) => {
  return e instanceof Error && "code" in e;
};
function mapError(e) {
  if (!isNodeErr(e))
    return e;
  return map[e.code]?.(e) || e;
}
var isWindows = os2.platform() === "win32";
function denoifyFileInfo(s) {
  return {
    atime: s.atime,
    birthtime: s.birthtime,
    blksize: isWindows ? null : s.blksize,
    blocks: isWindows ? null : s.blocks,
    dev: s.dev,
    gid: isWindows ? null : s.gid,
    ino: isWindows ? null : s.ino,
    isDirectory: s.isDirectory(),
    isFile: s.isFile(),
    isSymlink: s.isSymbolicLink(),
    isBlockDevice: isWindows ? null : s.isBlockDevice(),
    isCharDevice: isWindows ? null : s.isCharacterDevice(),
    isFifo: isWindows ? null : s.isFIFO(),
    isSocket: isWindows ? null : s.isSocket(),
    mode: isWindows ? null : s.mode,
    mtime: s.mtime,
    nlink: isWindows ? null : s.nlink,
    rdev: isWindows ? null : s.rdev,
    size: s.size,
    uid: isWindows ? null : s.uid
  };
}
var stat = async (path) => {
  try {
    return denoifyFileInfo(await nodeStat(path));
  } catch (e) {
    throw mapError(e);
  }
};
var nodeFstat = promisify(fs.fstat);
var fstat2 = async function(fd) {
  try {
    return denoifyFileInfo(await nodeFstat(fd));
  } catch (err) {
    throw mapError(err);
  }
};
var fstatSync = function fstatSync2(fd) {
  try {
    return denoifyFileInfo(nodeFstatSync(fd));
  } catch (err) {
    throw mapError(err);
  }
};
var _ftruncate = promisify2(nodeftruncate);
var ftruncate = _ftruncate;
var ftruncateSync = nodeftruncateSync;
var _fdatasync = promisify3(nodefdatasync);
var fdatasync = _fdatasync;
var fdatasyncSync = nodefdatasyncSync;
var _read = promisify4(nodeRead);
var read = async function read2(rid, buffer) {
  if (buffer == null) {
    throw new TypeError("Buffer must not be null.");
  }
  if (buffer.length === 0) {
    return 0;
  }
  const { bytesRead } = await _read(rid, buffer, 0, buffer.length, null);
  return bytesRead === 0 ? null : bytesRead;
};
var readSync2 = (fd, buffer) => {
  const bytesRead = fs2.readSync(fd, buffer);
  return bytesRead === 0 ? null : bytesRead;
};
var nodeWrite = promisify5(fs3.write);
var write2 = async (fd, data) => {
  const { bytesWritten } = await nodeWrite(fd, data);
  return bytesWritten;
};
var writeSync2 = fs4.writeSync;
Symbol.dispose ??= Symbol("Symbol.dispose");
Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");
var FsFile = class {
  rid;
  #closed = false;
  constructor(rid) {
    this.rid = rid;
  }
  [Symbol.dispose]() {
    if (!this.#closed) {
      this.close();
    }
  }
  async write(p) {
    return await write2(this.rid, p);
  }
  writeSync(p) {
    return writeSync2(this.rid, p);
  }
  async truncate(len) {
    await ftruncate(this.rid, len);
  }
  truncateSync(len) {
    return ftruncateSync(this.rid, len);
  }
  read(p) {
    return read(this.rid, p);
  }
  readSync(p) {
    return readSync2(this.rid, p);
  }
  seek(_offset, _whence) {
    throw new Error("Method not implemented.");
  }
  seekSync(_offset, _whence) {
    throw new Error("Method not implemented.");
  }
  async stat() {
    return await fstat2(this.rid);
  }
  statSync() {
    return fstatSync(this.rid);
  }
  sync() {
    throw new Error("Method not implemented.");
  }
  syncSync() {
    throw new Error("Method not implemented.");
  }
  syncData() {
    return fdatasync(this.rid);
  }
  syncDataSync() {
    return fdatasyncSync(this.rid);
  }
  utime(_atime, _mtime) {
    throw new Error("Method not implemented.");
  }
  utimeSync(_atime, _mtime) {
    throw new Error("Method not implemented.");
  }
  close() {
    this.#closed = true;
    fs5.closeSync(this.rid);
  }
  #readableStream;
  get readable() {
    if (this.#readableStream == null) {
      const nodeStream = fs5.createReadStream(null, {
        fd: this.rid,
        autoClose: false
      });
      this.#readableStream = stream.Readable.toWeb(nodeStream);
    }
    return this.#readableStream;
  }
  #writableStream;
  get writable() {
    if (this.#writableStream == null) {
      const nodeStream = fs5.createWriteStream(null, {
        fd: this.rid,
        autoClose: false
      });
      this.#writableStream = stream.Writable.toWeb(nodeStream);
    }
    return this.#writableStream;
  }
};
var File = FsFile;
var PermissionStatus = class extends EventTarget {
  state;
  onchange = null;
  partial = false;
  constructor(state) {
    super();
    this.state = state;
  }
};
var Permissions = class {
  query(desc) {
    return Promise.resolve(this.querySync(desc));
  }
  querySync(_desc) {
    return new PermissionStatus("granted");
  }
  revoke(desc) {
    return Promise.resolve(this.revokeSync(desc));
  }
  revokeSync(_desc) {
    return new PermissionStatus("denied");
  }
  request(desc) {
    return this.query(desc);
  }
  requestSync(desc) {
    return this.querySync(desc);
  }
};
var SeekMode;
(function(SeekMode2) {
  SeekMode2[SeekMode2["Start"] = 0] = "Start";
  SeekMode2[SeekMode2["Current"] = 1] = "Current";
  SeekMode2[SeekMode2["End"] = 2] = "End";
})(SeekMode || (SeekMode = {}));
var arch = process.arch === "arm64" ? "aarch64" : "x86_64";
var build = {
  arch,
  os: /* @__PURE__ */ ((p) => p === "win32" ? "windows" : p === "darwin" ? "darwin" : "linux")(os22.platform()),
  vendor: "pc",
  target: ((p) => p === "win32" ? `${arch}-pc-windows-msvc` : p === "darwin" ? `${arch}-apple-darwin` : `${arch}-unknown-linux-gnu`)(os22.platform())
};
var customInspect = Symbol.for("nodejs.util.inspect.custom");
var env2 = {
  get(key) {
    assertValidKey(key);
    return process.env[key];
  },
  set(key, value) {
    assertValidKey(key);
    assertValidValue(value);
    process.env[key] = value;
  },
  has(key) {
    assertValidKey(key);
    return key in process.env;
  },
  delete(key) {
    assertValidKey(key);
    delete process.env[key];
  },
  toObject() {
    return { ...process.env };
  }
};
var invalidKeyChars = ["=", "\x00"].map((c) => c.charCodeAt(0));
var invalidValueChar = 0;
function assertValidKey(key) {
  if (key.length === 0) {
    throw new TypeError("Key is an empty string.");
  }
  for (let i = 0;i < key.length; i++) {
    if (invalidKeyChars.includes(key.charCodeAt(i))) {
      const char = key.charCodeAt(i) === 0 ? "\\0" : key[i];
      throw new TypeError(`Key contains invalid characters: "${char}"`);
    }
  }
}
function assertValidValue(value) {
  for (let i = 0;i < value.length; i++) {
    if (value.charCodeAt(i) === invalidValueChar) {
      throw new TypeError('Value contains invalid characters: "\\0"');
    }
  }
}
var mainModule = pathToFileURL(process.argv[1] ?? join(process.cwd(), "$deno$repl.ts")).href;
var metrics = function metrics2() {
  return {
    opsDispatched: 0,
    opsDispatchedSync: 0,
    opsDispatchedAsync: 0,
    opsDispatchedAsyncUnref: 0,
    opsCompleted: 0,
    opsCompletedSync: 0,
    opsCompletedAsync: 0,
    opsCompletedAsyncUnref: 0,
    bytesSentControl: 0,
    bytesSentData: 0,
    bytesReceived: 0,
    ops: {}
  };
};
var noColor = process.env.NO_COLOR !== undefined;
var permissions = new Permissions;
var pid = process.pid;
var ppid = process.ppid;
var resources = function resources2() {
  console.warn([
    "Deno.resources() shim returns a dummy object that does not update.",
    "If you think this is a mistake, raise an issue at https://github.com/denoland/node_deno_shims/issues"
  ].join(`
`));
  return {};
};
function chain(fn, cleanup) {
  let prev;
  return function _fn(...args2) {
    const curr = (prev || Promise.resolve()).then(() => fn(...args2)).finally(cleanup || (() => {})).then((result) => {
      if (prev === curr)
        prev = undefined;
      return result;
    });
    return prev = curr;
  };
}
var stdinReadable;
var stdin = {
  rid: 0,
  isTerminal() {
    return tty2.isatty(this.rid);
  },
  read: chain((p) => {
    return new Promise((resolve2, reject) => {
      process.stdin.resume();
      process.stdin.on("error", onerror);
      process.stdin.once("readable", () => {
        process.stdin.off("error", onerror);
        const data = process.stdin.read(p.length) ?? process.stdin.read();
        if (data) {
          p.set(data);
          resolve2(data.length > 0 ? data.length : null);
        } else {
          resolve2(null);
        }
      });
      function onerror(error) {
        reject(error);
        process.stdin.off("error", onerror);
      }
    });
  }, () => process.stdin.pause()),
  get readable() {
    if (stdinReadable == null) {
      stdinReadable = stream2.Readable.toWeb(process.stdin);
    }
    return stdinReadable;
  },
  readSync(buffer) {
    return readSync2(this.rid, buffer);
  },
  close() {
    process.stdin.destroy();
  },
  setRaw(mode, options) {
    if (options?.cbreak) {
      throw new Error("The cbreak option is not implemented.");
    }
    process.stdin.setRawMode(mode);
  }
};
var stdoutWritable;
var stdout = {
  rid: 1,
  isTerminal() {
    return tty2.isatty(this.rid);
  },
  write: chain((p) => {
    return new Promise((resolve2) => {
      const result = process.stdout.write(p);
      if (!result) {
        process.stdout.once("drain", () => resolve2(p.length));
      } else {
        resolve2(p.length);
      }
    });
  }),
  get writable() {
    if (stdoutWritable == null) {
      stdoutWritable = stream2.Writable.toWeb(process.stdout);
    }
    return stdoutWritable;
  },
  writeSync(data) {
    return writeSync2(this.rid, data);
  },
  close() {
    process.stdout.destroy();
  }
};
var stderrWritable;
var stderr = {
  rid: 2,
  isTerminal() {
    return tty2.isatty(this.rid);
  },
  write: chain((p) => {
    return new Promise((resolve2) => {
      const result = process.stderr.write(p);
      if (!result) {
        process.stderr.once("drain", () => resolve2(p.length));
      } else {
        resolve2(p.length);
      }
    });
  }),
  get writable() {
    if (stderrWritable == null) {
      stderrWritable = stream2.Writable.toWeb(process.stderr);
    }
    return stderrWritable;
  },
  writeSync(data) {
    return writeSync2(this.rid, data);
  },
  close() {
    process.stderr.destroy();
  }
};
var deno = "1.40.2";
var typescript = "5.3.3";
var version = {
  deno,
  typescript,
  v8: process.versions.v8
};
function denoSignalToNodeJs(signal) {
  if (signal === "SIGEMT") {
    throw new Error("SIGEMT is not supported");
  }
  return signal;
}
var addSignalListener = (signal, handler) => {
  ps.addListener(denoSignalToNodeJs(signal), handler);
};
var chdir = function(path) {
  try {
    return process.chdir(path instanceof URL ? fileURLToPath(path) : path);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new errors_exports.NotFound(`No such file or directory (os error 2), chdir '${path}'`);
    }
    throw mapError(error);
  }
};
var chmod22 = fs6.chmod;
var chmodSync22 = fs7.chmodSync;
var chown2 = async (path, uid2, gid2) => await fs8.chown(path, uid2 ?? -1, gid2 ?? -1);
var chownSync2 = (path, uid2, gid2) => fs9.chownSync(path, uid2 ?? -1, gid2 ?? -1);
var close = fs10.closeSync;
var Conn = class extends FsFile {
  rid;
  localAddr;
  remoteAddr;
  #socket;
  constructor(rid, localAddr, remoteAddr, socket) {
    super(rid);
    this.rid = rid;
    this.localAddr = localAddr;
    this.remoteAddr = remoteAddr;
    this.#socket = socket || new Socket({ fd: rid });
  }
  [Symbol.dispose]() {
    this.close();
  }
  async closeWrite() {
    await new Promise((resolve2) => this.#socket.end(resolve2));
  }
  setNoDelay(enable) {
    this.#socket.setNoDelay(enable);
  }
  setKeepAlive(enable) {
    this.#socket.setKeepAlive(enable);
  }
  ref() {
    this.#socket.ref();
  }
  unref() {
    this.#socket.unref();
  }
  async read(p) {
    try {
      return await super.read(p);
    } catch (error) {
      if (!(error instanceof Error && ("code" in error) && error.code == "EAGAIN")) {
        throw error;
      }
    }
    await once(this.#socket, "readable");
    return await super.read(p);
  }
};
var TlsConn = class extends Conn {
  handshake() {
    console.warn("@deno/shim-deno: Handshake is not supported.");
    return Promise.resolve({
      alpnProtocol: null
    });
  }
};
var connect = function connect2(options) {
  if (options.transport === "unix") {
    throw new Error("Unstable UnixConnectOptions is not implemented");
  }
  const { transport = "tcp", hostname: hostname4 = "127.0.0.1", port } = options;
  if (transport !== "tcp") {
    throw new Error("Deno.connect is only implemented for transport: tcp");
  }
  const socket = createConnection({ port, host: hostname4 });
  socket.on("error", (err) => console.error(err));
  return new Promise((resolve2) => {
    socket.once("connect", () => {
      const rid = socket._handle.fd;
      const localAddr = {
        hostname: socket.localAddress,
        port: socket.localPort,
        transport: "tcp"
      };
      const remoteAddr = {
        hostname: socket.remoteAddress,
        port: socket.remotePort,
        transport: "tcp"
      };
      resolve2(new Conn(rid, localAddr, remoteAddr, socket));
    });
  });
};
var readTextFile = async (path, { signal } = {}) => {
  try {
    return await readFile(path, { encoding: "utf8", signal });
  } catch (e) {
    throw mapError(e);
  }
};
var connectTls = async function connectTls2({ port, hostname: hostname4 = "127.0.0.1", certFile }) {
  const cert = certFile && await readTextFile(certFile);
  const socket = tlsConnect({ port, host: hostname4, cert });
  return new Promise((resolve2) => {
    socket.on("connect", () => {
      const rid = socket._handle.fd;
      const localAddr = {
        hostname: socket.localAddress,
        port: socket.localPort,
        transport: "tcp"
      };
      const remoteAddr = {
        hostname: socket.remoteAddress,
        port: socket.remotePort,
        transport: "tcp"
      };
      resolve2(new TlsConn(rid, localAddr, remoteAddr, socket));
    });
  });
};
var consoleSize = function consoleSize2() {
  const pipes = [process.stderr, process.stdout];
  for (const pipe of pipes) {
    if (pipe.columns != null) {
      const { columns, rows } = pipe;
      return { columns, rows };
    }
  }
  throw new Error("The handle is invalid.");
};
var DEFAULT_BUFFER_SIZE = 32 * 1024;
var copy = async function copy2(src, dst, options) {
  let n = 0;
  const bufSize = options?.bufSize ?? DEFAULT_BUFFER_SIZE;
  const b = new Uint8Array(bufSize);
  let gotEOF = false;
  while (gotEOF === false) {
    const result = await src.read(b);
    if (result === null) {
      gotEOF = true;
    } else {
      let nwritten = 0;
      while (nwritten < result) {
        nwritten += await dst.write(b.subarray(nwritten, result));
      }
      n += nwritten;
    }
  }
  return n;
};
var copyFile2 = async (src, dest) => {
  try {
    await fs11.copyFile(src, dest);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new NotFound(`File not found, copy '${src}' -> '${dest}'`);
    }
    throw mapError(error);
  }
};
var copyFileSync2 = (src, dest) => {
  try {
    fs12.copyFileSync(src, dest);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new NotFound(`File not found, copy '${src}' -> '${dest}'`);
    }
    throw mapError(error);
  }
};
var { O_APPEND, O_CREAT, O_EXCL, O_RDONLY, O_RDWR, O_TRUNC, O_WRONLY } = constants;
function getAccessFlag(opts) {
  if (opts.read && !opts.write && !opts.append)
    return O_RDONLY;
  if (!opts.read && opts.write && !opts.append)
    return O_WRONLY;
  if (opts.read && opts.write && !opts.append)
    return O_RDWR;
  if (!opts.read && opts.append)
    return O_WRONLY | O_APPEND;
  if (opts.read && opts.append)
    return O_RDWR | O_APPEND;
  if (!opts.read && !opts.write && !opts.append) {
    throw new BadResource("EINVAL: One of 'read', 'write', 'append' is required to open file.");
  }
  throw new BadResource("EINVAL: Invalid fs flags.");
}
function getCreationFlag(opts) {
  if (!opts.write && !opts.append) {
    if (opts.truncate || opts.create || opts.createNew) {
      throw new BadResource("EINVAL: One of 'write', 'append' is required to 'truncate', 'create' or 'createNew' file.");
    }
  }
  if (opts.append) {
    if (opts.truncate && !opts.createNew) {
      throw new BadResource("EINVAL: unexpected 'truncate': true and 'createNew': false when 'append' is true.");
    }
  }
  if (!opts.create && !opts.truncate && !opts.createNew)
    return 0;
  if (opts.create && !opts.truncate && !opts.createNew)
    return O_CREAT;
  if (!opts.create && opts.truncate && !opts.createNew) {
    if (os3.platform() === "win32") {
      return O_CREAT | O_TRUNC;
    } else {
      return O_TRUNC;
    }
  }
  if (opts.create && opts.truncate && !opts.createNew) {
    return O_CREAT | O_TRUNC;
  }
  if (opts.createNew)
    return O_CREAT | O_EXCL;
  throw new BadResource("EINVAL: Invalid fs flags.");
}
function getFsFlag(flags) {
  return getAccessFlag(flags) | getCreationFlag(flags);
}
var nodeOpen = promisify6(_open);
var open = async function open2(path, { read: read3, write: write3, append, truncate: truncate3, create: create3, createNew, mode = 438 } = {
  read: true
}) {
  const flagMode = getFsFlag({
    read: read3,
    write: write3,
    append,
    truncate: truncate3,
    create: create3,
    createNew
  });
  try {
    const fd = await nodeOpen(path, flagMode, mode);
    return new File(fd);
  } catch (err) {
    throw mapError(err);
  }
};
var create = async function create2(path) {
  return await open(path, { write: true, create: true, truncate: true });
};
var openSync = function openSync2(path, { read: read3, write: write3, append, truncate: truncate3, create: create3, createNew, mode = 438 } = {
  read: true
}) {
  const flagMode = getFsFlag({
    read: read3,
    write: write3,
    append,
    truncate: truncate3,
    create: create3,
    createNew
  });
  try {
    const fd = nodeOpenSync(path, flagMode, mode);
    return new File(fd);
  } catch (err) {
    throw mapError(err);
  }
};
var createSync = function createSync2(path) {
  return openSync(path, {
    create: true,
    truncate: true,
    read: true,
    write: true
  });
};
var cwd = process.cwd;
var execPath = () => import_which.default.sync("deno");
var exit = function exit2(code) {
  return process.exit(code);
};
var fsync = function fsync2(rid) {
  return promisify7(nodeFsync)(rid);
};
var fsyncSync = function fsyncSync2(rid) {
  return nodeFsyncSync(rid);
};
var gid = ps2.getgid ?? (() => null);
var hostname2 = function hostname3() {
  return os4.hostname();
};
var inspect2 = (value, options = {}) => util.inspect(value, options);
var kill = function(pid2, signo) {
  if (pid2 < 0 && os5.platform() === "win32") {
    throw new TypeError("Invalid pid");
  }
  ps3.kill(pid2, signo);
};
var link2 = fs13.link;
var linkSync2 = fs14.linkSync;
var Listener = class {
  rid;
  addr;
  #listener;
  constructor(rid, addr, listener) {
    this.rid = rid;
    this.addr = addr;
    this.#listener = listener;
  }
  [Symbol.dispose]() {
    this.close();
  }
  async accept() {
    if (!this.#listener) {
      throw new BadResource("Listener not initialised");
    }
    const result = await this.#listener.next();
    if (result.done) {
      throw new BadResource("Server not listening");
    }
    return result.value;
  }
  async next() {
    let conn;
    try {
      conn = await this.accept();
    } catch (error) {
      if (error instanceof BadResource) {
        return { value: undefined, done: true };
      }
      throw error;
    }
    return { value: conn, done: false };
  }
  return(value) {
    this.close();
    return Promise.resolve({ value, done: true });
  }
  close() {
    close(this.rid);
  }
  ref() {
    throw new Error("Not implemented");
  }
  unref() {
    throw new Error("Not implemented");
  }
  [Symbol.asyncIterator]() {
    return this;
  }
};
async function* _listen(server, waitFor) {
  await waitFor;
  while (server.listening) {
    yield new Promise((resolve2) => server.once("connection", (socket) => {
      socket.on("error", (err) => console.error(err));
      const rid = socket._handle.fd;
      const localAddr = {
        hostname: socket.localAddress,
        port: socket.localPort,
        transport: "tcp"
      };
      const remoteAddr = {
        hostname: socket.remoteAddress,
        port: socket.remotePort,
        transport: "tcp"
      };
      resolve2(new Conn(rid, localAddr, remoteAddr));
    }));
  }
}
var listen = function listen2(options) {
  if (options.transport === "unix") {
    throw new Error("Unstable UnixListenOptions is not implemented");
  }
  const { port, hostname: hostname4 = "0.0.0.0", transport = "tcp" } = options;
  if (transport !== "tcp") {
    throw new Error("Deno.listen is only implemented for transport: tcp");
  }
  const server = createServer();
  const waitFor = new Promise((resolve2) => server.listen(port, hostname4, resolve2));
  const listener = new Listener(server._handle.fd, {
    hostname: hostname4,
    port,
    transport: "tcp"
  }, _listen(server, waitFor));
  return listener;
};
var readTextFileSync = function(path) {
  try {
    return fs15.readFileSync(path, "utf8");
  } catch (e) {
    throw mapError(e);
  }
};
async function* _listen2(server, waitFor) {
  await waitFor;
  while (server.listening) {
    yield new Promise((resolve2) => server.once("secureConnection", (socket) => {
      socket.on("error", (err) => console.error(err));
      const rid = socket._handle.fd;
      const localAddr = {
        hostname: socket.localAddress,
        port: socket.localPort,
        transport: "tcp"
      };
      const remoteAddr = {
        hostname: socket.remoteAddress,
        port: socket.remotePort,
        transport: "tcp"
      };
      resolve2(new TlsConn(rid, localAddr, remoteAddr));
    }));
  }
}
var listenTls = function listen3({ port, hostname: hostname4 = "0.0.0.0", transport = "tcp", certFile, keyFile }) {
  if (transport !== "tcp") {
    throw new Error("Deno.listen is only implemented for transport: tcp");
  }
  const [cert, key] = [certFile, keyFile].map((f) => f == null ? undefined : readTextFileSync(f));
  const server = createServer2({ cert, key });
  const waitFor = new Promise((resolve2) => server.listen(port, hostname4, resolve2));
  const listener = new Listener(server._handle.fd, {
    hostname: hostname4,
    port,
    transport: "tcp"
  }, _listen2(server, waitFor));
  return listener;
};
var loadavg2 = function loadavg3() {
  return os6.loadavg();
};
var lstat2 = async (path) => {
  try {
    return denoifyFileInfo(await fs16.lstat(path));
  } catch (e) {
    throw mapError(e);
  }
};
var lstatSync2 = (path) => {
  try {
    return denoifyFileInfo(fs17.lstatSync(path));
  } catch (err) {
    throw mapError(err);
  }
};
var makeTempDir = function makeTempDir2({ prefix = "" } = {}) {
  return mkdtemp(join2(tmpdir(), prefix || "/"));
};
var makeTempDirSync = function makeTempDirSync2({ prefix = "" } = {}) {
  return mkdtempSync(join3(tmpdir2(), prefix || "/"));
};
var randomId = () => {
  const n = (Math.random() * 1048575 * 1e6).toString(16);
  return "" + n.slice(0, 6);
};
var writeTextFile = async function writeTextFile2(path, data, { append = false, create: create3 = true, createNew = false, mode, signal } = {}) {
  const truncate3 = create3 && !append;
  const flag = getFsFlag({
    append,
    create: create3,
    createNew,
    truncate: truncate3,
    write: true
  });
  try {
    await fs18.writeFile(path, data, { flag, mode, signal });
    if (mode !== undefined)
      await fs18.chmod(path, mode);
  } catch (error) {
    throw mapError(error);
  }
};
var makeTempFile = async function makeTempFile2({ prefix = "" } = {}) {
  const name = join4(tmpdir3(), prefix, randomId());
  await writeTextFile(name, "");
  return name;
};
var writeTextFileSync = (path, data, { append = false, create: create3 = true, mode } = {}) => {
  const flag = create3 ? append ? "a" : "w" : "r+";
  try {
    fs19.writeFileSync(path, data, { flag, mode });
    if (mode !== undefined)
      fs19.chmodSync(path, mode);
  } catch (error) {
    throw mapError(error);
  }
};
var makeTempFileSync = function makeTempFileSync2({ prefix = "" } = {}) {
  const name = join5(tmpdir4(), prefix, randomId());
  writeTextFileSync(name, "");
  return name;
};
var memoryUsage = process.memoryUsage;
var mkdir = async function mkdir2(path, options) {
  try {
    await nodeMkdir(path, options);
  } catch (error) {
    if (error?.code === "EEXIST") {
      throw new errors_exports.AlreadyExists(`File exists (os error 17), mkdir '${path}'`);
    }
    throw mapError(error);
  }
};
var mkdirSync2 = (path, options) => {
  try {
    fs20.mkdirSync(path, options);
  } catch (error) {
    if (error?.code === "EEXIST") {
      throw new errors_exports.AlreadyExists(`File exists (os error 17), mkdir '${path}'`);
    }
    throw mapError(error);
  }
};
var osRelease = function osRelease2() {
  return release();
};
var osUptime = function osUptime2() {
  return uptime();
};
var readDir = async function* readDir2(path) {
  try {
    for await (const e of await opendir(String(path))) {
      const ent = {
        name: e.name,
        isFile: e.isFile(),
        isDirectory: e.isDirectory(),
        isSymlink: e.isSymbolicLink()
      };
      yield ent;
    }
  } catch (e) {
    throw mapError(e);
  }
};
var readDirSync = function* readDir3(path) {
  try {
    for (const e of nodeReadDir(String(path), { withFileTypes: true })) {
      const ent = {
        name: e.name,
        isFile: e.isFile(),
        isDirectory: e.isDirectory(),
        isSymlink: e.isSymbolicLink()
      };
      yield ent;
    }
  } catch (e) {
    throw mapError(e);
  }
};
var readFile2 = async function readFile3(path, { signal } = {}) {
  try {
    const buf = await nodeReadFile(path, { signal });
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
  } catch (e) {
    throw mapError(e);
  }
};
var readFileSync2 = function readFileSync3(path) {
  try {
    const buf = nodeReadFile2(path);
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
  } catch (e) {
    throw mapError(e);
  }
};
var readLink = fs21.readlink;
var readLinkSync = fs22.readlinkSync;
var realPath = fs23.realpath;
var realPathSync = fs24.realpathSync;
var remove = async function remove2(path, options = {}) {
  const innerOptions = options.recursive ? { recursive: true, force: true } : {};
  try {
    return await rm(path, innerOptions);
  } catch (err) {
    if (err.code === "ERR_FS_EISDIR") {
      return await rmdir(path, innerOptions);
    } else {
      throw err;
    }
  }
};
var removeSignalListener = (signal, handler) => {
  ps4.removeListener(signal, handler);
};
var removeSync = (path, options = {}) => {
  const innerOptions = options.recursive ? { recursive: true, force: true } : {};
  try {
    fs25.rmSync(path, innerOptions);
  } catch (err) {
    if (err.code === "ERR_FS_EISDIR") {
      fs25.rmdirSync(path, innerOptions);
    } else {
      throw err;
    }
  }
};
var rename = function rename2(oldpath, newpath) {
  return nodeRename(oldpath, newpath);
};
var renameSync2 = fs26.renameSync;
var resolveDns = function resolveDns2(query, recordType, options) {
  if (options) {
    throw Error(`resolveDns option not implemnted yet`);
  }
  switch (recordType) {
    case "A":
    case "AAAA":
    case "CNAME":
    case "NS":
    case "PTR":
      return new Promise((resolve2, reject) => {
        dns.resolve(query, recordType, (err, addresses) => {
          if (err) {
            reject(err);
          } else {
            resolve2(addresses);
          }
        });
      });
    case "ANAME":
    case "CAA":
    case "MX":
    case "NAPTR":
    case "SOA":
    case "SRV":
    case "TXT":
    default:
      throw Error(`resolveDns type ${recordType} not implemnted yet`);
  }
};
var BufferStreamReader = class {
  #stream;
  #error;
  #ended = false;
  #pendingActions = [];
  constructor(stream3) {
    this.#stream = stream3;
    this.#stream.pause();
    this.#stream.on("error", (error) => {
      this.#error = error;
      this.#runPendingActions();
    });
    this.#stream.on("readable", () => {
      this.#runPendingActions();
    });
    this.#stream.on("end", () => {
      this.#ended = true;
      this.#runPendingActions();
    });
  }
  readAll() {
    return new Promise((resolve2, reject) => {
      const chunks = [];
      const action = () => {
        if (this.#error) {
          reject(this.#error);
          return;
        }
        const buffer = this.#stream.read();
        if (buffer != null) {
          chunks.push(buffer);
          this.#pendingActions.push(action);
        } else if (this.#ended) {
          const result = Buffer.concat(chunks);
          resolve2(result);
        } else {
          this.#pendingActions.push(action);
        }
      };
      action();
    });
  }
  read(p) {
    return new Promise((resolve2, reject) => {
      const action = () => {
        if (this.#error) {
          reject(this.#error);
          return;
        }
        const readBuffer = this.#stream.read(p.byteLength);
        if (readBuffer && readBuffer.byteLength > 0) {
          readBuffer.copy(p, 0, 0, readBuffer.byteLength);
          resolve2(readBuffer.byteLength);
          return;
        }
        if (this.#ended) {
          resolve2(null);
        } else {
          this.#pendingActions.push(action);
        }
      };
      action();
    });
  }
  #runPendingActions() {
    const errors = [];
    for (const action of this.#pendingActions.splice(0)) {
      try {
        action();
      } catch (err) {
        errors.push(err);
      }
    }
    if (errors.length > 0) {
      throw errors.length > 1 ? new globalThis.AggregateError(errors) : errors[0];
    }
  }
};
var StreamWriter = class {
  #stream;
  constructor(stream3) {
    this.#stream = stream3;
  }
  write(p) {
    return new Promise((resolve2, reject) => {
      this.#stream.write(p, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve2(p.byteLength);
        }
      });
    });
  }
};
var run = function run2(options) {
  const [cmd, ...args2] = options.cmd;
  if (options.cwd && !fs27.existsSync(options.cwd)) {
    throw new Error("The directory name is invalid.");
  }
  const commandName = getCmd(cmd);
  if (!import_which2.default.sync(commandName, { nothrow: true })) {
    throw new NotFound("The system cannot find the file specified.");
  }
  const process22 = childProcess.spawn(commandName, args2, {
    cwd: options.cwd,
    env: getEnv(options),
    uid: options.uid,
    gid: options.gid,
    shell: false,
    stdio: [
      getStdio(options.stdin, "in"),
      getStdio(options.stdout, "out"),
      getStdio(options.stderr, "out")
    ]
  });
  return new Process(process22);
};
function getStdio(value, kind) {
  if (value === "inherit" || value == null) {
    return "inherit";
  } else if (value === "piped") {
    return "pipe";
  } else if (value === "null") {
    return "ignore";
  } else if (typeof value === "number") {
    switch (kind) {
      case "in":
        return fs27.createReadStream(null, { fd: value });
      case "out":
        return fs27.createWriteStream(null, { fd: value });
      default: {
        const _assertNever = kind;
        throw new Error("Unreachable.");
      }
    }
  } else {
    const _assertNever = value;
    throw new Error("Unknown value.");
  }
}
function getCmd(firstArg) {
  if (firstArg instanceof URL) {
    return url.fileURLToPath(firstArg);
  } else {
    return firstArg;
  }
}
function getEnv(options) {
  const env22 = options.env ?? {};
  for (const name in process.env) {
    if (!Object.prototype.hasOwnProperty.call(env22, name)) {
      if (options.clearEnv) {
        if (os7.platform() === "win32") {
          env22[name] = "";
        } else {
          delete env22[name];
        }
      } else {
        env22[name] = process.env[name];
      }
    }
  }
  return env22;
}
var Process = class {
  #process;
  #stderr;
  #stdout;
  #stdin;
  #status;
  #receivedStatus = false;
  constructor(process22) {
    this.#process = process22;
    this.#stdout = ProcessReadStream.fromNullable(this.#process.stdout) ?? null;
    this.#stderr = ProcessReadStream.fromNullable(this.#process.stderr) ?? null;
    this.#stdin = ProcessWriteStream.fromNullable(this.#process.stdin) ?? null;
    this.#status = once2(process22, "exit");
  }
  get rid() {
    return NaN;
  }
  get pid() {
    return this.#process.pid;
  }
  get stdin() {
    return this.#stdin;
  }
  get stdout() {
    return this.#stdout;
  }
  get stderr() {
    return this.#stderr;
  }
  async status() {
    const [receivedCode, signalName] = await this.#status;
    const signal = signalName ? os7.constants.signals[signalName] : receivedCode > 128 ? receivedCode - 128 : undefined;
    const code = receivedCode != null ? receivedCode : signal != null ? 128 + signal : undefined;
    const success = code === 0;
    this.#receivedStatus = true;
    return { code, signal, success };
  }
  async output() {
    if (!this.#stdout) {
      throw new TypeError("stdout was not piped");
    }
    const result = await this.#stdout.readAll();
    this.#stdout.close();
    return result;
  }
  async stderrOutput() {
    if (!this.#stderr) {
      throw new TypeError("stderr was not piped");
    }
    const result = await this.#stderr.readAll();
    this.#stderr.close();
    return result;
  }
  close() {
    this.#process.unref();
    this.#process.kill();
  }
  kill(signo = "SIGTERM") {
    if (this.#receivedStatus) {
      throw new NotFound("entity not found");
    }
    this.#process.kill(signo);
  }
};
var ProcessReadStream = class _ProcessReadStream {
  #stream;
  #bufferStreamReader;
  #closed = false;
  constructor(stream3) {
    this.#stream = stream3;
    this.#bufferStreamReader = new BufferStreamReader(stream3);
  }
  static fromNullable(stream3) {
    return stream3 ? new _ProcessReadStream(stream3) : undefined;
  }
  readAll() {
    if (this.#closed) {
      return Promise.resolve(new Uint8Array(0));
    } else {
      return this.#bufferStreamReader.readAll();
    }
  }
  read(p) {
    if (this.#closed) {
      return Promise.resolve(null);
    } else {
      return this.#bufferStreamReader.read(p);
    }
  }
  close() {
    this.#closed = true;
    this.#stream.destroy();
  }
  get readable() {
    throw new Error("Not implemented.");
  }
  get writable() {
    throw new Error("Not implemented.");
  }
};
var ProcessWriteStream = class _ProcessWriteStream {
  #stream;
  #streamWriter;
  #closed = false;
  constructor(stream3) {
    this.#stream = stream3;
    this.#streamWriter = new StreamWriter(stream3);
  }
  static fromNullable(stream3) {
    return stream3 ? new _ProcessWriteStream(stream3) : undefined;
  }
  write(p) {
    if (this.#closed) {
      return Promise.resolve(0);
    } else {
      return this.#streamWriter.write(p);
    }
  }
  close() {
    this.#closed = true;
    this.#stream.end();
  }
};
var shutdown = async function shutdown2(rid) {
  await new Promise((resolve2) => new Socket2({ fd: rid }).end(resolve2));
};
var statSync2 = (path) => {
  try {
    return denoifyFileInfo(fs28.statSync(path));
  } catch (err) {
    throw mapError(err);
  }
};
var symlink2 = async (oldpath, newpath, options) => await fs29.symlink(oldpath, newpath, options?.type);
var symlinkSync2 = (oldpath, newpath, options) => fs30.symlinkSync(oldpath, newpath, options?.type);
var truncate2 = async (name, len) => {
  try {
    return await fs31.truncate(name, len);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new errors_exports.NotFound(`No such file or directory (os error 2), truncate '${name}'`);
    }
    throw mapError(error);
  }
};
var truncateSync2 = (name, len) => {
  try {
    return fs32.truncateSync(name, len);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new errors_exports.NotFound(`No such file or directory (os error 2), truncate '${name}'`);
    }
    throw mapError(error);
  }
};
var uid = ps5.getuid ?? (() => null);
function* map2(iter, f) {
  for (const i of iter) {
    yield f(i);
  }
}
async function* mapAsync(iter, f) {
  for await (const i of iter) {
    yield f(i);
  }
}
async function* filterAsync(iter, filter) {
  for await (const i of iter) {
    if (filter(i)) {
      yield i;
    }
  }
}
async function* merge(iterables) {
  const racers = new Map(map2(map2(iterables, (iter) => iter[Symbol.asyncIterator]()), (iter) => [iter, iter.next()]));
  while (racers.size > 0) {
    const winner = await Promise.race(map2(racers.entries(), ([iter, prom]) => prom.then((result) => ({ result, iter }))));
    if (winner.result.done) {
      racers.delete(winner.iter);
    } else {
      yield await winner.result.value;
      racers.set(winner.iter, winner.iter.next());
    }
  }
}
var watchFs = function watchFs2(paths, options = { recursive: true }) {
  paths = Array.isArray(paths) ? paths : [paths];
  const ac = new AbortController;
  const { signal } = ac;
  const rid = -1;
  const masterWatcher = merge(paths.map((path) => mapAsync(filterAsync(watch(path, { recursive: options?.recursive, signal }), (info) => info.filename != null), (info) => ({
    kind: "modify",
    paths: [resolve(path, info.filename)]
  }))));
  function close2() {
    ac.abort();
  }
  return Object.assign(masterWatcher, {
    rid,
    close: close2,
    [Symbol.dispose]: close2
  });
};
var writeFile3 = async function writeFile4(path, data, { append = false, create: create3 = true, createNew = false, mode, signal } = {}) {
  const truncate3 = create3 && !append;
  const flag = getFsFlag({ append, create: create3, createNew, truncate: truncate3, write: true });
  try {
    await fs33.writeFile(path, data, { flag, signal });
    if (mode != null)
      await fs33.chmod(path, mode);
  } catch (error) {
    throw mapError(error);
  }
};
var writeFileSync2 = function writeFileSync3(path, data, options = {}) {
  try {
    if (options.create !== undefined) {
      const create3 = !!options.create;
      if (!create3) {
        statSync2(path);
      }
    }
    const openOptions = {
      write: true,
      create: true,
      createNew: options.createNew,
      append: !!options.append,
      truncate: !options.append
    };
    const file = openSync(path, openOptions);
    if (options.mode !== undefined && options.mode !== null && platform3() !== "win32") {
      chmodSync22(path, options.mode);
    }
    let nwritten = 0;
    while (nwritten < data.length) {
      nwritten += file.writeSync(data.subarray(nwritten));
    }
    file.close();
  } catch (e) {
    throw mapError(e);
  }
};
var args = process.argv.slice(2);
var futime = async function(rid, atime, mtime) {
  try {
    await new Promise((resolve2, reject) => {
      fs34.futimes(rid, atime, mtime, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve2();
        }
      });
    });
  } catch (error) {
    throw mapError(error);
  }
};
var futimeSync = function(rid, atime, mtime) {
  try {
    fs34.futimesSync(rid, atime, mtime);
  } catch (error) {
    throw mapError(error);
  }
};
var utime = async function(path, atime, mtime) {
  try {
    await fs34.promises.utimes(path, atime, mtime);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new errors_exports.NotFound(`No such file or directory (os error 2), utime '${path}'`);
    }
    throw mapError(error);
  }
};
var utimeSync = function(path, atime, mtime) {
  try {
    fs34.utimesSync(path, atime, mtime);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new errors_exports.NotFound(`No such file or directory (os error 2), utime '${path}'`);
    }
    throw mapError(error);
  }
};

// node_modules/dax/esm/mod.js
import { TextDecoder } from "node:util";
import { TextDecoder as TextDecoder2 } from "node:util";
import { ReadableStream, WritableStream, TextDecoderStream, TransformStream } from "node:stream/web";
import { ReadableStream as ReadableStream2, WritableStream as WritableStream2, TextDecoderStream as TextDecoderStream2, TransformStream as TransformStream2 } from "node:stream/web";
import * as cp from "node:child_process";
import * as os8 from "node:os";
import { Readable as Readable2, Writable as Writable2 } from "node:stream";
var __defProp3 = Object.defineProperty;
var __export3 = (target, all) => {
  for (var name in all)
    __defProp3(target, name, { get: all[name], enumerable: true });
};
if (Promise.withResolvers === undefined) {
  Promise.withResolvers = () => {
    const out = {};
    out.promise = new Promise((resolve_, reject_) => {
      out.resolve = resolve_;
      out.reject = reject_;
    });
    return out;
  };
}
var { MAX_SAFE_INTEGER } = Number;
var iteratorSymbol = Symbol.iterator;
var asyncIteratorSymbol = Symbol.asyncIterator;
var IntrinsicArray = Array;
var tooLongErrorMessage = "Input is too long and exceeded Number.MAX_SAFE_INTEGER times.";
function isConstructor(obj) {
  if (obj != null) {
    const prox = new Proxy(obj, {
      construct() {
        return prox;
      }
    });
    try {
      new prox;
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
async function fromAsync(items, mapfn, thisArg) {
  const itemsAreIterable = asyncIteratorSymbol in items || iteratorSymbol in items;
  if (itemsAreIterable) {
    const result = isConstructor(this) ? new this : IntrinsicArray(0);
    let i = 0;
    for await (const v of items) {
      if (i > MAX_SAFE_INTEGER) {
        throw TypeError(tooLongErrorMessage);
      } else if (mapfn) {
        result[i] = await mapfn.call(thisArg, v, i);
      } else {
        result[i] = v;
      }
      i++;
    }
    result.length = i;
    return result;
  } else {
    const { length } = items;
    const result = isConstructor(this) ? new this(length) : IntrinsicArray(length);
    let i = 0;
    while (i < length) {
      if (i > MAX_SAFE_INTEGER) {
        throw TypeError(tooLongErrorMessage);
      }
      const v = await items[i];
      if (mapfn) {
        result[i] = await mapfn.call(thisArg, v, i);
      } else {
        result[i] = v;
      }
      i++;
    }
    result.length = i;
    return result;
  }
}
if (!Array.fromAsync) {
  Array.fromAsync = fromAsync;
}
function findLastIndex(self, callbackfn, that) {
  const boundFunc = that === undefined ? callbackfn : callbackfn.bind(that);
  let index = self.length - 1;
  while (index >= 0) {
    const result = boundFunc(self[index], index, self);
    if (result) {
      return index;
    }
    index--;
  }
  return -1;
}
function findLast(self, callbackfn, that) {
  const index = self.findLastIndex(callbackfn, that);
  return index === -1 ? undefined : self[index];
}
if (!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function(callbackfn, that) {
    return findLastIndex(this, callbackfn, that);
  };
}
if (!Array.prototype.findLast) {
  Array.prototype.findLast = function(callbackfn, that) {
    return findLast(this, callbackfn, that);
  };
}
if (!Uint8Array.prototype.findLastIndex) {
  Uint8Array.prototype.findLastIndex = function(callbackfn, that) {
    return findLastIndex(this, callbackfn, that);
  };
}
if (!Uint8Array.prototype.findLast) {
  Uint8Array.prototype.findLast = function(callbackfn, that) {
    return findLast(this, callbackfn, that);
  };
}
if (!Object.hasOwn) {
  Object.defineProperty(Object, "hasOwn", {
    value: function(object, property) {
      if (object == null) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      return Object.prototype.hasOwnProperty.call(Object(object), property);
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
}
var dntGlobals = {
  Deno: main_exports,
  TextDecoder,
  ReadableStream,
  WritableStream,
  TextDecoderStream,
  TransformStream
};
var dntGlobalThis = createMergeProxy(globalThis, dntGlobals);
function createMergeProxy(baseObj, extObj) {
  return new Proxy(baseObj, {
    get(_target, prop, _receiver) {
      if (prop in extObj) {
        return extObj[prop];
      } else {
        return baseObj[prop];
      }
    },
    set(_target, prop, value) {
      if (prop in extObj) {
        delete extObj[prop];
      }
      baseObj[prop] = value;
      return true;
    },
    deleteProperty(_target, prop) {
      let success = false;
      if (prop in extObj) {
        delete extObj[prop];
        success = true;
      }
      if (prop in baseObj) {
        delete baseObj[prop];
        success = true;
      }
      return success;
    },
    ownKeys(_target) {
      const baseKeys = Reflect.ownKeys(baseObj);
      const extKeys = Reflect.ownKeys(extObj);
      const extKeysSet = new Set(extKeys);
      return [...baseKeys.filter((k) => !extKeysSet.has(k)), ...extKeys];
    },
    defineProperty(_target, prop, desc) {
      if (prop in extObj) {
        delete extObj[prop];
      }
      Reflect.defineProperty(baseObj, prop, desc);
      return true;
    },
    getOwnPropertyDescriptor(_target, prop) {
      if (prop in extObj) {
        return Reflect.getOwnPropertyDescriptor(extObj, prop);
      } else {
        return Reflect.getOwnPropertyDescriptor(baseObj, prop);
      }
    },
    has(_target, prop) {
      return prop in extObj || prop in baseObj;
    }
  });
}
var { Deno: Deno3 } = dntGlobalThis;
var noColor2 = typeof Deno3?.noColor === "boolean" ? Deno3.noColor : false;
var enabled = !noColor2;
function code(open3, close2) {
  return {
    open: `\x1B[${open3.join(";")}m`,
    close: `\x1B[${close2}m`,
    regexp: new RegExp(`\\x1b\\[${close2}m`, "g")
  };
}
function run3(str, code2) {
  return enabled ? `${code2.open}${str.replace(code2.regexp, code2.open)}${code2.close}` : str;
}
function bold(str) {
  return run3(str, code([1], 22));
}
function italic(str) {
  return run3(str, code([3], 23));
}
function red(str) {
  return run3(str, code([31], 39));
}
function green(str) {
  return run3(str, code([32], 39));
}
function yellow(str) {
  return run3(str, code([33], 39));
}
function blue(str) {
  return run3(str, code([34], 39));
}
function cyan(str) {
  return run3(str, code([36], 39));
}
function white(str) {
  return run3(str, code([37], 39));
}
function gray(str) {
  return brightBlack(str);
}
function brightBlack(str) {
  return run3(str, code([90], 39));
}
var ANSI_PATTERN = new RegExp([
  "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
  "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))"
].join("|"), "g");
var RealEnvironment = class {
  env(key) {
    return main_exports.env.get(key);
  }
  stat(path) {
    return main_exports.stat(path);
  }
  statSync(path) {
    return main_exports.statSync(path);
  }
  get os() {
    return main_exports.build.os;
  }
};
async function which3(command, environment = new RealEnvironment) {
  const systemInfo = getSystemInfo(command, environment);
  if (systemInfo == null) {
    return;
  }
  for (const pathItem of systemInfo.pathItems) {
    const filePath = pathItem + command;
    if (systemInfo.pathExts) {
      environment.requestPermission?.(pathItem);
      for (const pathExt of systemInfo.pathExts) {
        const filePath2 = pathItem + command + pathExt;
        if (await pathMatches(environment, filePath2)) {
          return filePath2;
        }
      }
    } else if (await pathMatches(environment, filePath)) {
      return filePath;
    }
  }
  return;
}
async function pathMatches(environment, path) {
  try {
    const result = await environment.stat(path);
    return result.isFile;
  } catch (err) {
    if (err instanceof main_exports.errors.PermissionDenied) {
      throw err;
    }
    return false;
  }
}
function whichSync(command, environment = new RealEnvironment) {
  const systemInfo = getSystemInfo(command, environment);
  if (systemInfo == null) {
    return;
  }
  for (const pathItem of systemInfo.pathItems) {
    const filePath = pathItem + command;
    if (systemInfo.pathExts) {
      environment.requestPermission?.(pathItem);
      for (const pathExt of systemInfo.pathExts) {
        const filePath2 = pathItem + command + pathExt;
        if (pathMatchesSync(environment, filePath2)) {
          return filePath2;
        }
      }
    } else if (pathMatchesSync(environment, filePath)) {
      return filePath;
    }
  }
  return;
}
function pathMatchesSync(environment, path) {
  try {
    const result = environment.statSync(path);
    return result.isFile;
  } catch (err) {
    if (err instanceof main_exports.errors.PermissionDenied) {
      throw err;
    }
    return false;
  }
}
function getSystemInfo(command, environment) {
  const isWindows2 = environment.os === "windows";
  const envValueSeparator = isWindows2 ? ";" : ":";
  const path = environment.env("PATH");
  const pathSeparator = isWindows2 ? "\\" : "/";
  if (path == null) {
    return;
  }
  return {
    pathItems: splitEnvValue(path).map((item) => normalizeDir(item)),
    pathExts: getPathExts(),
    isNameMatch: isWindows2 ? (a, b) => a.toLowerCase() === b.toLowerCase() : (a, b) => a === b
  };
  function getPathExts() {
    if (!isWindows2) {
      return;
    }
    const pathExtText = environment.env("PATHEXT") ?? ".EXE;.CMD;.BAT;.COM";
    const pathExts = splitEnvValue(pathExtText);
    const lowerCaseCommand = command.toLowerCase();
    for (const pathExt of pathExts) {
      if (lowerCaseCommand.endsWith(pathExt.toLowerCase())) {
        return;
      }
    }
    return pathExts;
  }
  function splitEnvValue(value) {
    return value.split(envValueSeparator).map((item) => item.trim()).filter((item) => item.length > 0);
  }
  function normalizeDir(dirPath) {
    if (!dirPath.endsWith(pathSeparator)) {
      dirPath += pathSeparator;
    }
    return dirPath;
  }
}
function checkWindows() {
  const global = dntGlobalThis;
  const os23 = global.Deno?.build?.os;
  return typeof os23 === "string" ? os23 === "windows" : global.navigator?.platform?.startsWith("Win") ?? global.process?.platform?.startsWith("win") ?? false;
}
var isWindows2 = checkWindows();
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError(`Path must be a string, received "${JSON.stringify(path)}"`);
  }
}
function stripSuffix(name, suffix) {
  if (suffix.length >= name.length) {
    return name;
  }
  const lenDiff = name.length - suffix.length;
  for (let i = suffix.length - 1;i >= 0; --i) {
    if (name.charCodeAt(lenDiff + i) !== suffix.charCodeAt(i)) {
      return name;
    }
  }
  return name.slice(0, -suffix.length);
}
function lastPathSegment(path, isSep, start = 0) {
  let matchedNonSeparator = false;
  let end = path.length;
  for (let i = path.length - 1;i >= start; --i) {
    if (isSep(path.charCodeAt(i))) {
      if (matchedNonSeparator) {
        start = i + 1;
        break;
      }
    } else if (!matchedNonSeparator) {
      matchedNonSeparator = true;
      end = i + 1;
    }
  }
  return path.slice(start, end);
}
function assertArgs(path, suffix) {
  assertPath(path);
  if (path.length === 0)
    return path;
  if (typeof suffix !== "string") {
    throw new TypeError(`Suffix must be a string, received "${JSON.stringify(suffix)}"`);
  }
}
function assertArg(url2) {
  url2 = url2 instanceof URL ? url2 : new URL(url2);
  if (url2.protocol !== "file:") {
    throw new TypeError(`URL must be a file URL: received "${url2.protocol}"`);
  }
  return url2;
}
function fromFileUrl(url2) {
  url2 = assertArg(url2);
  return decodeURIComponent(url2.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function stripTrailingSeparators(segment, isSep) {
  if (segment.length <= 1) {
    return segment;
  }
  let end = segment.length;
  for (let i = segment.length - 1;i > 0; i--) {
    if (isSep(segment.charCodeAt(i))) {
      end = i;
    } else {
      break;
    }
  }
  return segment.slice(0, end);
}
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
function isPosixPathSeparator(code2) {
  return code2 === CHAR_FORWARD_SLASH;
}
function basename(path, suffix = "") {
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  assertArgs(path, suffix);
  const lastSegment = lastPathSegment(path, isPosixPathSeparator);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPosixPathSeparator);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function isPosixPathSeparator2(code2) {
  return code2 === CHAR_FORWARD_SLASH;
}
function isPathSeparator(code2) {
  return code2 === CHAR_FORWARD_SLASH || code2 === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code2) {
  return code2 >= CHAR_LOWERCASE_A && code2 <= CHAR_LOWERCASE_Z || code2 >= CHAR_UPPERCASE_A && code2 <= CHAR_UPPERCASE_Z;
}
function fromFileUrl2(url2) {
  url2 = assertArg(url2);
  let path = decodeURIComponent(url2.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url2.hostname !== "") {
    path = `\\\\${url2.hostname}${path}`;
  }
  return path;
}
function basename2(path, suffix = "") {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  assertArgs(path, suffix);
  let start = 0;
  if (path.length >= 2) {
    const drive = path.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path.charCodeAt(1) === CHAR_COLON)
        start = 2;
    }
  }
  const lastSegment = lastPathSegment(path, isPathSeparator, start);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function basename3(path, suffix = "") {
  return isWindows2 ? basename2(path, suffix) : basename(path, suffix);
}
function assertArg2(path) {
  assertPath(path);
  if (path.length === 0)
    return ".";
}
function dirname(path) {
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  assertArg2(path);
  let end = -1;
  let matchedNonSeparator = false;
  for (let i = path.length - 1;i >= 1; --i) {
    if (isPosixPathSeparator(path.charCodeAt(i))) {
      if (matchedNonSeparator) {
        end = i;
        break;
      }
    } else {
      matchedNonSeparator = true;
    }
  }
  if (end === -1) {
    return isPosixPathSeparator(path.charCodeAt(0)) ? "/" : ".";
  }
  return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator);
}
function dirname2(path) {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  assertArg2(path);
  const len = path.length;
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code2 = path.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code2)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (;j < len; ++j) {
          if (isPathSeparator(path.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (;j < len; ++j) {
            if (!isPathSeparator(path.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (;j < len; ++j) {
              if (isPathSeparator(path.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code2)) {
      if (path.charCodeAt(1) === CHAR_COLON) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code2)) {
    return path;
  }
  for (let i = len - 1;i >= offset; --i) {
    if (isPathSeparator(path.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator2);
}
function dirname3(path) {
  return isWindows2 ? dirname2(path) : dirname(path);
}
function extname(path) {
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  assertPath(path);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path.length - 1;i >= 0; --i) {
    const code2 = path.charCodeAt(i);
    if (isPosixPathSeparator(code2)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code2 === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path.slice(startDot, end);
}
function extname2(path) {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  assertPath(path);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path.length - 1;i >= start; --i) {
    const code2 = path.charCodeAt(i);
    if (isPathSeparator(code2)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code2 === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path.slice(startDot, end);
}
function extname3(path) {
  return isWindows2 ? extname2(path) : extname(path);
}
function fromFileUrl3(url2) {
  return isWindows2 ? fromFileUrl2(url2) : fromFileUrl(url2);
}
function isAbsolute(path) {
  assertPath(path);
  return path.length > 0 && isPosixPathSeparator(path.charCodeAt(0));
}
function isAbsolute2(path) {
  assertPath(path);
  const len = path.length;
  if (len === 0)
    return false;
  const code2 = path.charCodeAt(0);
  if (isPathSeparator(code2)) {
    return true;
  } else if (isWindowsDeviceRoot(code2)) {
    if (len > 2 && path.charCodeAt(1) === CHAR_COLON) {
      if (isPathSeparator(path.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
function isAbsolute3(path) {
  return isWindows2 ? isAbsolute2(path) : isAbsolute(path);
}
function assertArg3(path) {
  assertPath(path);
  if (path.length === 0)
    return ".";
}
function normalizeString(path, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code2;
  for (let i = 0;i <= path.length; ++i) {
    if (i < path.length)
      code2 = path.charCodeAt(i);
    else if (isPathSeparator2(code2))
      break;
    else
      code2 = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code2)) {
      if (lastSlash === i - 1 || dots === 1) {} else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code2 === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function normalize(path) {
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  assertArg3(path);
  const isAbsolute4 = isPosixPathSeparator(path.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator(path.charCodeAt(path.length - 1));
  path = normalizeString(path, !isAbsolute4, "/", isPosixPathSeparator);
  if (path.length === 0 && !isAbsolute4)
    path = ".";
  if (path.length > 0 && trailingSeparator)
    path += "/";
  if (isAbsolute4)
    return `/${path}`;
  return path;
}
function join6(path, ...paths) {
  if (path === undefined)
    return ".";
  if (path instanceof URL) {
    path = fromFileUrl(path);
  }
  paths = path ? [path, ...paths] : paths;
  paths.forEach((path2) => assertPath(path2));
  const joined = paths.filter((path2) => path2.length > 0).join("/");
  return joined === "" ? "." : normalize(joined);
}
function normalize2(path) {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  assertArg3(path);
  const len = path.length;
  let rootEnd = 0;
  let device;
  let isAbsolute4 = false;
  const code2 = path.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code2)) {
      isAbsolute4 = true;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (;j < len; ++j) {
          if (isPathSeparator(path.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          const firstPart = path.slice(last, j);
          last = j;
          for (;j < len; ++j) {
            if (!isPathSeparator(path.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (;j < len; ++j) {
              if (isPathSeparator(path.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path.slice(last)}\\`;
            } else if (j !== last) {
              device = `\\\\${firstPart}\\${path.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code2)) {
      if (path.charCodeAt(1) === CHAR_COLON) {
        device = path.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path.charCodeAt(2))) {
            isAbsolute4 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code2)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(path.slice(rootEnd), !isAbsolute4, "\\", isPathSeparator);
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute4)
    tail = ".";
  if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === undefined) {
    if (isAbsolute4) {
      if (tail.length > 0)
        return `\\${tail}`;
      else
        return "\\";
    }
    return tail;
  } else if (isAbsolute4) {
    if (tail.length > 0)
      return `${device}\\${tail}`;
    else
      return `${device}\\`;
  }
  return device + tail;
}
function join22(path, ...paths) {
  if (path instanceof URL) {
    path = fromFileUrl2(path);
  }
  paths = path ? [path, ...paths] : paths;
  paths.forEach((path2) => assertPath(path2));
  paths = paths.filter((path2) => path2.length > 0);
  if (paths.length === 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  const firstPart = paths[0];
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  let joined = paths.join("\\");
  if (needsReplace) {
    for (;slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize2(joined);
}
function join32(path, ...paths) {
  return isWindows2 ? join22(path, ...paths) : join6(path, ...paths);
}
function normalize3(path) {
  return isWindows2 ? normalize2(path) : normalize(path);
}
function resolve2(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1;i >= -1 && !resolvedAbsolute; i--) {
    let path;
    if (i >= 0)
      path = pathSegments[i];
    else {
      const { Deno: Deno4 } = dntGlobalThis;
      if (typeof Deno4?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a current working directory (CWD)");
      }
      path = Deno4.cwd();
    }
    assertPath(path);
    if (path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isPosixPathSeparator(path.charCodeAt(0));
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
function assertArgs2(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
}
function relative(from, to) {
  assertArgs2(from, to);
  from = resolve2(from);
  to = resolve2(to);
  if (from === to)
    return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (;fromStart < fromEnd; ++fromStart) {
    if (!isPosixPathSeparator(from.charCodeAt(fromStart)))
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (;toStart < toEnd; ++toStart) {
    if (!isPosixPathSeparator(to.charCodeAt(toStart)))
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (;i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (isPosixPathSeparator(to.charCodeAt(toStart + i))) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (isPosixPathSeparator(from.charCodeAt(fromStart + i))) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (isPosixPathSeparator(fromCode))
      lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1;i <= fromEnd; ++i) {
    if (i === fromEnd || isPosixPathSeparator(from.charCodeAt(i))) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (isPosixPathSeparator(to.charCodeAt(toStart)))
      ++toStart;
    return to.slice(toStart);
  }
}
function resolve22(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1;i >= -1; i--) {
    let path;
    const { Deno: Deno4 } = dntGlobalThis;
    if (i >= 0) {
      path = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof Deno4?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a current working directory (CWD)");
      }
      path = Deno4.cwd();
    } else {
      if (typeof Deno4?.env?.get !== "function" || typeof Deno4?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a current working directory (CWD)");
      }
      path = Deno4.cwd();
      if (path === undefined || path.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path = `${resolvedDevice}\\`;
      }
    }
    assertPath(path);
    const len = path.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute4 = false;
    const code2 = path.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator(code2)) {
        isAbsolute4 = true;
        if (isPathSeparator(path.charCodeAt(1))) {
          let j = 2;
          let last = j;
          for (;j < len; ++j) {
            if (isPathSeparator(path.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            const firstPart = path.slice(last, j);
            last = j;
            for (;j < len; ++j) {
              if (!isPathSeparator(path.charCodeAt(j)))
                break;
            }
            if (j < len && j !== last) {
              last = j;
              for (;j < len; ++j) {
                if (isPathSeparator(path.charCodeAt(j)))
                  break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path.slice(last)}`;
                rootEnd = j;
              } else if (j !== last) {
                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code2)) {
        if (path.charCodeAt(1) === CHAR_COLON) {
          device = path.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator(path.charCodeAt(2))) {
              isAbsolute4 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator(code2)) {
      rootEnd = 1;
      isAbsolute4 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute4;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function relative2(from, to) {
  assertArgs2(from, to);
  const fromOrig = resolve22(from);
  const toOrig = resolve22(to);
  if (fromOrig === toOrig)
    return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to)
    return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (;fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (;fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (;toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (;toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (;i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_BACKWARD_SLASH)
      lastCommonSep = i;
  }
  if (i !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1;i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function relative3(from, to) {
  return isWindows2 ? relative2(from, to) : relative(from, to);
}
function resolve3(...pathSegments) {
  return isWindows2 ? resolve22(...pathSegments) : resolve2(...pathSegments);
}
var WHITESPACE_ENCODINGS = {
  "\t": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace(string) {
  return string.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS[c] ?? c;
  });
}
function toFileUrl(path) {
  if (!isAbsolute(path)) {
    throw new TypeError(`Path must be absolute: received "${path}"`);
  }
  const url2 = new URL("file:///");
  url2.pathname = encodeWhitespace(path.replace(/%/g, "%25").replace(/\\/g, "%5C"));
  return url2;
}
function toFileUrl2(path) {
  if (!isAbsolute2(path)) {
    throw new TypeError(`Path must be absolute: received "${path}"`);
  }
  const [, hostname4, pathname] = path.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
  const url2 = new URL("file:///");
  url2.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
  if (hostname4 !== undefined && hostname4 !== "localhost") {
    url2.hostname = hostname4;
    if (!url2.hostname) {
      throw new TypeError(`Invalid hostname: "${url2.hostname}"`);
    }
  }
  return url2;
}
function toFileUrl3(path) {
  return isWindows2 ? toFileUrl2(path) : toFileUrl(path);
}
function toPathString(pathUrl) {
  return pathUrl instanceof URL ? fromFileUrl3(pathUrl) : pathUrl;
}
async function emptyDir(dir) {
  try {
    const items = await Array.fromAsync(main_exports.readDir(dir));
    await Promise.all(items.map((item) => {
      if (item && item.name) {
        const filepath = join32(toPathString(dir), item.name);
        return main_exports.remove(filepath, { recursive: true });
      }
    }));
  } catch (err) {
    if (!(err instanceof main_exports.errors.NotFound)) {
      throw err;
    }
    await main_exports.mkdir(dir, { recursive: true });
  }
}
function emptyDirSync(dir) {
  try {
    const items = [...main_exports.readDirSync(dir)];
    while (items.length) {
      const item = items.shift();
      if (item && item.name) {
        const filepath = join32(toPathString(dir), item.name);
        main_exports.removeSync(filepath, { recursive: true });
      }
    }
  } catch (err) {
    if (!(err instanceof main_exports.errors.NotFound)) {
      throw err;
    }
    main_exports.mkdirSync(dir, { recursive: true });
  }
}
function getFileInfoType(fileInfo) {
  return fileInfo.isFile ? "file" : fileInfo.isDirectory ? "dir" : fileInfo.isSymlink ? "symlink" : undefined;
}
async function ensureDir(dir) {
  try {
    const fileInfo = await main_exports.stat(dir);
    throwIfNotDirectory(fileInfo);
    return;
  } catch (err) {
    if (!(err instanceof main_exports.errors.NotFound)) {
      throw err;
    }
  }
  try {
    await main_exports.mkdir(dir, { recursive: true });
  } catch (err) {
    if (!(err instanceof main_exports.errors.AlreadyExists)) {
      throw err;
    }
    const fileInfo = await main_exports.stat(dir);
    throwIfNotDirectory(fileInfo);
  }
}
function ensureDirSync(dir) {
  try {
    const fileInfo = main_exports.statSync(dir);
    throwIfNotDirectory(fileInfo);
    return;
  } catch (err) {
    if (!(err instanceof main_exports.errors.NotFound)) {
      throw err;
    }
  }
  try {
    main_exports.mkdirSync(dir, { recursive: true });
  } catch (err) {
    if (!(err instanceof main_exports.errors.AlreadyExists)) {
      throw err;
    }
    const fileInfo = main_exports.statSync(dir);
    throwIfNotDirectory(fileInfo);
  }
}
function throwIfNotDirectory(fileInfo) {
  if (!fileInfo.isDirectory) {
    throw new Error(`Failed to ensure directory exists: expected 'dir', got '${getFileInfoType(fileInfo)}'`);
  }
}
async function ensureFile(filePath) {
  try {
    const stat2 = await main_exports.lstat(filePath);
    if (!stat2.isFile) {
      throw new Error(`Failed to ensure file exists: expected 'file', got '${getFileInfoType(stat2)}'`);
    }
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      await ensureDir(dirname3(toPathString(filePath)));
      await main_exports.writeFile(filePath, new Uint8Array);
      return;
    }
    throw err;
  }
}
function ensureFileSync(filePath) {
  try {
    const stat2 = main_exports.lstatSync(filePath);
    if (!stat2.isFile) {
      throw new Error(`Failed to ensure file exists: expected 'file', got '${getFileInfoType(stat2)}'`);
    }
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      ensureDirSync(dirname3(toPathString(filePath)));
      main_exports.writeFileSync(filePath, new Uint8Array);
      return;
    }
    throw err;
  }
}
var SEPARATOR = isWindows2 ? "\\" : "/";
var SEPARATOR_PATTERN = isWindows2 ? /[\\/]+/ : /\/+/;
function isSubdir(src, dest, sep = SEPARATOR) {
  src = toPathString(src);
  dest = toPathString(dest);
  if (resolve3(src) === resolve3(dest)) {
    return false;
  }
  const srcArray = src.split(sep);
  const destArray = dest.split(sep);
  return srcArray.every((current, i) => destArray[i] === current);
}
function assertIsDate(date, name) {
  if (date === null) {
    throw new Error(`${name} is unavailable`);
  }
}
async function ensureValidCopy(src, dest, options) {
  let destStat;
  try {
    destStat = await main_exports.lstat(dest);
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      return;
    }
    throw err;
  }
  if (options.isFolder && !destStat.isDirectory) {
    throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'`);
  }
  if (!options.overwrite) {
    throw new main_exports.errors.AlreadyExists(`'${dest}' already exists.`);
  }
  return destStat;
}
function ensureValidCopySync(src, dest, options) {
  let destStat;
  try {
    destStat = main_exports.lstatSync(dest);
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      return;
    }
    throw err;
  }
  if (options.isFolder && !destStat.isDirectory) {
    throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'`);
  }
  if (!options.overwrite) {
    throw new main_exports.errors.AlreadyExists(`'${dest}' already exists`);
  }
  return destStat;
}
async function copyFile3(src, dest, options) {
  await ensureValidCopy(src, dest, options);
  await main_exports.copyFile(src, dest);
  if (options.preserveTimestamps) {
    const statInfo = await main_exports.stat(src);
    assertIsDate(statInfo.atime, "statInfo.atime");
    assertIsDate(statInfo.mtime, "statInfo.mtime");
    await main_exports.utime(dest, statInfo.atime, statInfo.mtime);
  }
}
function copyFileSync3(src, dest, options) {
  ensureValidCopySync(src, dest, options);
  main_exports.copyFileSync(src, dest);
  if (options.preserveTimestamps) {
    const statInfo = main_exports.statSync(src);
    assertIsDate(statInfo.atime, "statInfo.atime");
    assertIsDate(statInfo.mtime, "statInfo.mtime");
    main_exports.utimeSync(dest, statInfo.atime, statInfo.mtime);
  }
}
async function copySymLink(src, dest, options) {
  await ensureValidCopy(src, dest, options);
  const originSrcFilePath = await main_exports.readLink(src);
  const type = getFileInfoType(await main_exports.lstat(src));
  if (isWindows2) {
    await main_exports.symlink(originSrcFilePath, dest, {
      type: type === "dir" ? "dir" : "file"
    });
  } else {
    await main_exports.symlink(originSrcFilePath, dest);
  }
  if (options.preserveTimestamps) {
    const statInfo = await main_exports.lstat(src);
    assertIsDate(statInfo.atime, "statInfo.atime");
    assertIsDate(statInfo.mtime, "statInfo.mtime");
    await main_exports.utime(dest, statInfo.atime, statInfo.mtime);
  }
}
function copySymlinkSync(src, dest, options) {
  ensureValidCopySync(src, dest, options);
  const originSrcFilePath = main_exports.readLinkSync(src);
  const type = getFileInfoType(main_exports.lstatSync(src));
  if (isWindows2) {
    main_exports.symlinkSync(originSrcFilePath, dest, {
      type: type === "dir" ? "dir" : "file"
    });
  } else {
    main_exports.symlinkSync(originSrcFilePath, dest);
  }
  if (options.preserveTimestamps) {
    const statInfo = main_exports.lstatSync(src);
    assertIsDate(statInfo.atime, "statInfo.atime");
    assertIsDate(statInfo.mtime, "statInfo.mtime");
    main_exports.utimeSync(dest, statInfo.atime, statInfo.mtime);
  }
}
async function copyDir(src, dest, options) {
  const destStat = await ensureValidCopy(src, dest, {
    ...options,
    isFolder: true
  });
  if (!destStat) {
    await ensureDir(dest);
  }
  if (options.preserveTimestamps) {
    const srcStatInfo = await main_exports.stat(src);
    assertIsDate(srcStatInfo.atime, "statInfo.atime");
    assertIsDate(srcStatInfo.mtime, "statInfo.mtime");
    await main_exports.utime(dest, srcStatInfo.atime, srcStatInfo.mtime);
  }
  src = toPathString(src);
  dest = toPathString(dest);
  const promises = [];
  for await (const entry of main_exports.readDir(src)) {
    const srcPath = join32(src, entry.name);
    const destPath = join32(dest, basename3(srcPath));
    if (entry.isSymlink) {
      promises.push(copySymLink(srcPath, destPath, options));
    } else if (entry.isDirectory) {
      promises.push(copyDir(srcPath, destPath, options));
    } else if (entry.isFile) {
      promises.push(copyFile3(srcPath, destPath, options));
    }
  }
  await Promise.all(promises);
}
function copyDirSync(src, dest, options) {
  const destStat = ensureValidCopySync(src, dest, {
    ...options,
    isFolder: true
  });
  if (!destStat) {
    ensureDirSync(dest);
  }
  if (options.preserveTimestamps) {
    const srcStatInfo = main_exports.statSync(src);
    assertIsDate(srcStatInfo.atime, "statInfo.atime");
    assertIsDate(srcStatInfo.mtime, "statInfo.mtime");
    main_exports.utimeSync(dest, srcStatInfo.atime, srcStatInfo.mtime);
  }
  src = toPathString(src);
  dest = toPathString(dest);
  for (const entry of main_exports.readDirSync(src)) {
    const srcPath = join32(src, entry.name);
    const destPath = join32(dest, basename3(srcPath));
    if (entry.isSymlink) {
      copySymlinkSync(srcPath, destPath, options);
    } else if (entry.isDirectory) {
      copyDirSync(srcPath, destPath, options);
    } else if (entry.isFile) {
      copyFileSync3(srcPath, destPath, options);
    }
  }
}
async function copy3(src, dest, options = {}) {
  src = resolve3(toPathString(src));
  dest = resolve3(toPathString(dest));
  if (src === dest) {
    throw new Error("Source and destination cannot be the same");
  }
  const srcStat = await main_exports.lstat(src);
  if (srcStat.isDirectory && isSubdir(src, dest)) {
    throw new Error(`Cannot copy '${src}' to a subdirectory of itself: '${dest}'`);
  }
  if (srcStat.isSymlink) {
    await copySymLink(src, dest, options);
  } else if (srcStat.isDirectory) {
    await copyDir(src, dest, options);
  } else if (srcStat.isFile) {
    await copyFile3(src, dest, options);
  }
}
function copySync(src, dest, options = {}) {
  src = resolve3(toPathString(src));
  dest = resolve3(toPathString(dest));
  if (src === dest) {
    throw new Error("Source and destination cannot be the same");
  }
  const srcStat = main_exports.lstatSync(src);
  if (srcStat.isDirectory && isSubdir(src, dest)) {
    throw new Error(`Cannot copy '${src}' to a subdirectory of itself: '${dest}'`);
  }
  if (srcStat.isSymlink) {
    copySymlinkSync(src, dest, options);
  } else if (srcStat.isDirectory) {
    copyDirSync(src, dest, options);
  } else if (srcStat.isFile) {
    copyFileSync3(src, dest, options);
  }
}
var Path = class _Path {
  #path;
  #knownResolved = false;
  static instanceofSymbol = Symbol.for("@david/path.Path");
  constructor(path) {
    if (path instanceof URL) {
      this.#path = fromFileUrl3(path);
    } else if (path instanceof _Path) {
      this.#path = path.toString();
    } else if (typeof path === "string") {
      if (path.startsWith("file://")) {
        this.#path = fromFileUrl3(path);
      } else {
        this.#path = path;
      }
    } else {
      throw new Error(`Invalid path argument: ${path}

Provide a URL, string, or another Path.`);
    }
  }
  static [Symbol.hasInstance](instance) {
    return instance?.constructor?.instanceofSymbol === _Path.instanceofSymbol;
  }
  [Symbol.for("Deno.customInspect")]() {
    return `Path("${this.#path}")`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Path("${this.#path}")`;
  }
  toString() {
    return this.#path;
  }
  toFileUrl() {
    const resolvedPath = this.resolve();
    return toFileUrl3(resolvedPath.toString());
  }
  equals(otherPath) {
    return this.resolve().toString() === otherPath.resolve().toString();
  }
  isDirSync() {
    return this.statSync()?.isDirectory ?? false;
  }
  isFileSync() {
    return this.statSync()?.isFile ?? false;
  }
  isSymlinkSync() {
    return this.lstatSync()?.isSymlink ?? false;
  }
  isAbsolute() {
    return isAbsolute3(this.#path);
  }
  isRelative() {
    return !this.isAbsolute();
  }
  join(...pathSegments) {
    return new _Path(join32(this.#path, ...pathSegments));
  }
  resolve(...pathSegments) {
    if (this.#knownResolved && pathSegments.length === 0) {
      return this;
    }
    const resolvedPath = resolve3(this.#path, ...pathSegments);
    if (pathSegments.length === 0 && resolvedPath === this.#path) {
      this.#knownResolved = true;
      return this;
    } else {
      const pathRef = new _Path(resolvedPath);
      pathRef.#knownResolved = true;
      return pathRef;
    }
  }
  normalize() {
    return new _Path(normalize3(this.#path));
  }
  async stat() {
    try {
      return await main_exports.stat(this.#path);
    } catch (err) {
      if (err instanceof main_exports.errors.NotFound) {
        return;
      } else {
        throw err;
      }
    }
  }
  statSync() {
    try {
      return main_exports.statSync(this.#path);
    } catch (err) {
      if (err instanceof main_exports.errors.NotFound) {
        return;
      } else {
        throw err;
      }
    }
  }
  async lstat() {
    try {
      return await main_exports.lstat(this.#path);
    } catch (err) {
      if (err instanceof main_exports.errors.NotFound) {
        return;
      } else {
        throw err;
      }
    }
  }
  lstatSync() {
    try {
      return main_exports.lstatSync(this.#path);
    } catch (err) {
      if (err instanceof main_exports.errors.NotFound) {
        return;
      } else {
        throw err;
      }
    }
  }
  dirname() {
    return dirname3(this.#path);
  }
  basename() {
    return basename3(this.#path);
  }
  *ancestors() {
    let ancestor = this.parent();
    while (ancestor != null) {
      yield ancestor;
      ancestor = ancestor.parent();
    }
  }
  *components() {
    const path = this.normalize();
    let last_index = 0;
    if (path.#path.startsWith("\\\\?\\")) {
      last_index = nextSlash(path.#path, 4);
      if (last_index === -1) {
        yield path.#path;
        return;
      } else {
        yield path.#path.substring(0, last_index);
        last_index += 1;
      }
    } else if (path.#path.startsWith("/")) {
      last_index += 1;
    }
    while (true) {
      const index = nextSlash(path.#path, last_index);
      if (index < 0) {
        const part = path.#path.substring(last_index);
        if (part.length > 0) {
          yield part;
        }
        return;
      }
      yield path.#path.substring(last_index, index);
      last_index = index + 1;
    }
    function nextSlash(path2, start) {
      for (let i = start;i < path2.length; i++) {
        const c = path2.charCodeAt(i);
        if (c === 47 || c === 92) {
          return i;
        }
      }
      return -1;
    }
  }
  *#rcomponents() {
    const path = this.normalize();
    let last_index = undefined;
    while (last_index == null || last_index > 0) {
      const index = nextSlash(path.#path, last_index == null ? undefined : last_index - 1);
      if (index < 0) {
        const part2 = path.#path.substring(0, last_index);
        if (part2.length > 0) {
          yield part2;
        }
        return;
      }
      const part = path.#path.substring(index + 1, last_index);
      if (last_index != null || part.length > 0) {
        yield part;
      }
      last_index = index;
    }
    function nextSlash(path2, start) {
      for (let i = start ?? path2.length - 1;i >= 0; i--) {
        const c = path2.charCodeAt(i);
        if (c === 47 || c === 92) {
          return i;
        }
      }
      return -1;
    }
  }
  startsWith(path) {
    const startsWithComponents = ensurePath(path).components();
    for (const component of this.components()) {
      const next = startsWithComponents.next();
      if (next.done) {
        return true;
      }
      if (next.value !== component) {
        return false;
      }
    }
    return startsWithComponents.next().done ?? true;
  }
  endsWith(path) {
    const endsWithComponents = ensurePath(path).#rcomponents();
    for (const component of this.#rcomponents()) {
      const next = endsWithComponents.next();
      if (next.done) {
        return true;
      }
      if (next.value !== component) {
        return false;
      }
    }
    return endsWithComponents.next().done ?? true;
  }
  parent() {
    const resolvedPath = this.resolve();
    const dirname4 = resolvedPath.dirname();
    if (dirname4 === resolvedPath.#path) {
      return;
    } else {
      return new _Path(dirname4);
    }
  }
  parentOrThrow() {
    const parent = this.parent();
    if (parent == null) {
      throw new Error(`Cannot get the parent directory of '${this.#path}'.`);
    }
    return parent;
  }
  extname() {
    const extName = extname3(this.#path);
    return extName.length === 0 ? undefined : extName;
  }
  withExtname(ext) {
    const currentExt = this.extname();
    const hasLeadingPeriod = ext.charCodeAt(0) === 46;
    if (!hasLeadingPeriod && ext.length !== 0) {
      ext = "." + ext;
    }
    return new _Path(this.#path.substring(0, this.#path.length - (currentExt?.length ?? 0)) + ext);
  }
  withBasename(basename4) {
    const currentBaseName = this.basename();
    return new _Path(this.#path.substring(0, this.#path.length - currentBaseName.length) + basename4);
  }
  relative(to) {
    const toPathRef = ensurePath(to);
    return relative3(this.resolve().#path, toPathRef.resolve().toString());
  }
  exists() {
    return this.lstat().then((info) => info != null);
  }
  existsSync() {
    return this.lstatSync() != null;
  }
  realPath() {
    return main_exports.realPath(this.#path).then((path) => new _Path(path));
  }
  realPathSync() {
    return new _Path(main_exports.realPathSync(this.#path));
  }
  async mkdir(options) {
    await main_exports.mkdir(this.#path, {
      recursive: true,
      ...options
    });
    return this;
  }
  mkdirSync(options) {
    main_exports.mkdirSync(this.#path, {
      recursive: true,
      ...options
    });
    return this;
  }
  async symlinkTo(target, opts) {
    await createSymlink(this.#resolveCreateSymlinkOpts(target, opts));
  }
  symlinkToSync(target, opts) {
    createSymlinkSync(this.#resolveCreateSymlinkOpts(target, opts));
  }
  #resolveCreateSymlinkOpts(target, opts) {
    if (opts?.kind == null) {
      if (typeof target === "string") {
        return {
          fromPath: this.resolve(),
          targetPath: ensurePath(target),
          text: target,
          type: opts?.type
        };
      } else {
        throw new Error("Please specify if this symlink is absolute or relative. Otherwise provide the target text.");
      }
    }
    const targetPath = ensurePath(target).resolve();
    if (opts?.kind === "relative") {
      const fromPath = this.resolve();
      let relativePath;
      if (fromPath.dirname() === targetPath.dirname()) {
        relativePath = targetPath.basename();
      } else {
        relativePath = fromPath.relative(targetPath);
      }
      return {
        fromPath,
        targetPath,
        text: relativePath,
        type: opts?.type
      };
    } else {
      return {
        fromPath: this.resolve(),
        targetPath,
        text: targetPath.toString(),
        type: opts?.type
      };
    }
  }
  async linkTo(targetPath) {
    const targetPathRef = ensurePath(targetPath).resolve();
    await main_exports.link(targetPathRef.toString(), this.resolve().toString());
  }
  linkToSync(targetPath) {
    const targetPathRef = ensurePath(targetPath).resolve();
    main_exports.linkSync(targetPathRef.toString(), this.resolve().toString());
  }
  async* readDir() {
    const dir = this.resolve();
    for await (const entry of main_exports.readDir(dir.#path)) {
      yield {
        ...entry,
        path: dir.join(entry.name)
      };
    }
  }
  *readDirSync() {
    const dir = this.resolve();
    for (const entry of main_exports.readDirSync(dir.#path)) {
      yield {
        ...entry,
        path: dir.join(entry.name)
      };
    }
  }
  async* readDirFilePaths() {
    const dir = this.resolve();
    for await (const entry of main_exports.readDir(dir.#path)) {
      if (entry.isFile) {
        yield dir.join(entry.name);
      }
    }
  }
  *readDirFilePathsSync() {
    const dir = this.resolve();
    for (const entry of main_exports.readDirSync(dir.#path)) {
      if (entry.isFile) {
        yield dir.join(entry.name);
      }
    }
  }
  readBytes(options) {
    return main_exports.readFile(this.#path, options);
  }
  readBytesSync() {
    return main_exports.readFileSync(this.#path);
  }
  readMaybeBytes(options) {
    return notFoundToUndefined(() => this.readBytes(options));
  }
  readMaybeBytesSync() {
    return notFoundToUndefinedSync(() => this.readBytesSync());
  }
  readText(options) {
    return main_exports.readTextFile(this.#path, options);
  }
  readTextSync() {
    return main_exports.readTextFileSync(this.#path);
  }
  readMaybeText(options) {
    return notFoundToUndefined(() => this.readText(options));
  }
  readMaybeTextSync() {
    return notFoundToUndefinedSync(() => this.readTextSync());
  }
  async readJson(options) {
    return this.#parseJson(await this.readText(options));
  }
  readJsonSync() {
    return this.#parseJson(this.readTextSync());
  }
  #parseJson(text) {
    try {
      return JSON.parse(text);
    } catch (err) {
      throw new Error(`Failed parsing JSON in '${this.toString()}'.`, {
        cause: err
      });
    }
  }
  readMaybeJson(options) {
    return notFoundToUndefined(() => this.readJson(options));
  }
  readMaybeJsonSync() {
    return notFoundToUndefinedSync(() => this.readJsonSync());
  }
  async write(data, options) {
    await this.#withFileForWriting(options, (file) => {
      return writeAll(file, data);
    });
    return this;
  }
  writeSync(data, options) {
    this.#withFileForWritingSync(options, (file) => {
      writeAllSync(file, data);
    });
    return this;
  }
  writeText(text, options) {
    return this.write(new TextEncoder().encode(text), options);
  }
  writeTextSync(text, options) {
    return this.writeSync(new TextEncoder().encode(text), options);
  }
  async writeJson(obj, options) {
    const text = JSON.stringify(obj);
    await this.writeText(text + `
`, options);
    return this;
  }
  writeJsonSync(obj, options) {
    const text = JSON.stringify(obj);
    this.writeTextSync(text + `
`, options);
    return this;
  }
  async writeJsonPretty(obj, options) {
    const text = JSON.stringify(obj, undefined, 2);
    await this.writeText(text + `
`, options);
    return this;
  }
  writeJsonPrettySync(obj, options) {
    const text = JSON.stringify(obj, undefined, 2);
    this.writeTextSync(text + `
`, options);
    return this;
  }
  async append(data, options) {
    await this.#withFileForAppending(options, (file) => writeAll(file, data));
    return this;
  }
  appendSync(data, options) {
    this.#withFileForAppendingSync(options, (file) => {
      writeAllSync(file, data);
    });
    return this;
  }
  async appendText(text, options) {
    await this.#withFileForAppending(options, (file) => writeAll(file, new TextEncoder().encode(text)));
    return this;
  }
  appendTextSync(text, options) {
    this.#withFileForAppendingSync(options, (file) => {
      writeAllSync(file, new TextEncoder().encode(text));
    });
    return this;
  }
  #withFileForAppending(options, action) {
    return this.#withFileForWriting({
      append: true,
      ...options
    }, action);
  }
  async#withFileForWriting(options, action) {
    const file = await this.#openFileMaybeCreatingDirectory({
      write: true,
      create: true,
      truncate: options?.append !== true,
      ...options
    });
    try {
      return await action(file);
    } finally {
      try {
        file.close();
      } catch {}
    }
  }
  async#openFileMaybeCreatingDirectory(options) {
    const resolvedPath = this.resolve();
    try {
      return await resolvedPath.open(options);
    } catch (err) {
      if (err instanceof main_exports.errors.NotFound) {
        const parent = resolvedPath.parent();
        if (parent != null) {
          try {
            await parent.mkdir();
          } catch {
            throw err;
          }
        }
        return await resolvedPath.open(options);
      } else {
        throw err;
      }
    }
  }
  #withFileForAppendingSync(options, action) {
    return this.#withFileForWritingSync({
      append: true,
      ...options
    }, action);
  }
  #withFileForWritingSync(options, action) {
    const file = this.#openFileForWritingSync(options);
    try {
      return action(file);
    } finally {
      try {
        file.close();
      } catch {}
    }
  }
  #openFileForWritingSync(options) {
    return this.#openFileMaybeCreatingDirectorySync({
      write: true,
      create: true,
      truncate: options?.append !== true,
      ...options
    });
  }
  #openFileMaybeCreatingDirectorySync(options) {
    try {
      return this.openSync(options);
    } catch (err) {
      if (err instanceof main_exports.errors.NotFound) {
        const parent = this.resolve().parent();
        if (parent != null) {
          try {
            parent.mkdirSync();
          } catch {
            throw err;
          }
        }
        return this.openSync(options);
      } else {
        throw err;
      }
    }
  }
  async chmod(mode) {
    await main_exports.chmod(this.#path, mode);
    return this;
  }
  chmodSync(mode) {
    main_exports.chmodSync(this.#path, mode);
    return this;
  }
  async chown(uid2, gid2) {
    await main_exports.chown(this.#path, uid2, gid2);
    return this;
  }
  chownSync(uid2, gid2) {
    main_exports.chownSync(this.#path, uid2, gid2);
    return this;
  }
  create() {
    return main_exports.create(this.#path).then((file) => createFsFileWrapper(file));
  }
  createSync() {
    return createFsFileWrapper(main_exports.createSync(this.#path));
  }
  createNew() {
    return this.open({
      createNew: true,
      read: true,
      write: true
    });
  }
  createNewSync() {
    return this.openSync({
      createNew: true,
      read: true,
      write: true
    });
  }
  open(options) {
    return main_exports.open(this.#path, options).then((file) => createFsFileWrapper(file));
  }
  openSync(options) {
    return createFsFileWrapper(main_exports.openSync(this.#path, options));
  }
  async remove(options) {
    await main_exports.remove(this.#path, options);
    return this;
  }
  removeSync(options) {
    main_exports.removeSync(this.#path, options);
    return this;
  }
  async ensureRemove(options) {
    try {
      return await this.remove(options);
    } catch (err) {
      if (err instanceof main_exports.errors.NotFound) {
        return this;
      } else {
        throw err;
      }
    }
  }
  ensureRemoveSync(options) {
    try {
      return this.removeSync(options);
    } catch (err) {
      if (err instanceof main_exports.errors.NotFound) {
        return this;
      } else {
        throw err;
      }
    }
  }
  async emptyDir() {
    await emptyDir(this.toString());
    return this;
  }
  emptyDirSync() {
    emptyDirSync(this.toString());
    return this;
  }
  async ensureDir() {
    await ensureDir(this.toString());
    return this;
  }
  ensureDirSync() {
    ensureDirSync(this.toString());
    return this;
  }
  async ensureFile() {
    await ensureFile(this.toString());
    return this;
  }
  ensureFileSync() {
    ensureFileSync(this.toString());
    return this;
  }
  async copy(destinationPath, options) {
    const pathRef = ensurePath(destinationPath);
    await copy3(this.#path, pathRef.toString(), options);
    return pathRef;
  }
  copySync(destinationPath, options) {
    const pathRef = ensurePath(destinationPath);
    copySync(this.#path, pathRef.toString(), options);
    return pathRef;
  }
  copyToDir(destinationDirPath, options) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.copy(destinationPath, options);
  }
  copyToDirSync(destinationDirPath, options) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.copySync(destinationPath, options);
  }
  copyFile(destinationPath) {
    const pathRef = ensurePath(destinationPath);
    return main_exports.copyFile(this.#path, pathRef.toString()).then(() => pathRef);
  }
  copyFileSync(destinationPath) {
    const pathRef = ensurePath(destinationPath);
    main_exports.copyFileSync(this.#path, pathRef.toString());
    return pathRef;
  }
  copyFileToDir(destinationDirPath) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.copyFile(destinationPath);
  }
  copyFileToDirSync(destinationDirPath) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.copyFileSync(destinationPath);
  }
  rename(newPath) {
    const pathRef = ensurePath(newPath);
    return main_exports.rename(this.#path, pathRef.toString()).then(() => pathRef);
  }
  renameSync(newPath) {
    const pathRef = ensurePath(newPath);
    main_exports.renameSync(this.#path, pathRef.toString());
    return pathRef;
  }
  renameToDir(destinationDirPath) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.rename(destinationPath);
  }
  renameToDirSync(destinationDirPath) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.renameSync(destinationPath);
  }
  async pipeTo(dest, options) {
    const file = await main_exports.open(this.#path, { read: true });
    try {
      await file.readable.pipeTo(dest, options);
    } finally {
      try {
        file.close();
      } catch {}
    }
    return this;
  }
};
function ensurePath(path) {
  return path instanceof Path ? path : new Path(path);
}
function createFsFileWrapper(file) {
  Object.setPrototypeOf(file, FsFileWrapper.prototype);
  return file;
}
var FsFileWrapper = class extends main_exports.FsFile {
  writeText(text) {
    return this.writeBytes(new TextEncoder().encode(text));
  }
  writeTextSync(text) {
    return this.writeBytesSync(new TextEncoder().encode(text));
  }
  async writeBytes(bytes3) {
    await writeAll(this, bytes3);
    return this;
  }
  writeBytesSync(bytes3) {
    writeAllSync(this, bytes3);
    return this;
  }
};
async function createSymlink(opts) {
  let kind = opts.type;
  if (kind == null && main_exports.build.os === "windows") {
    const info = await opts.targetPath.lstat();
    if (info?.isDirectory) {
      kind = "dir";
    } else if (info?.isFile) {
      kind = "file";
    } else {
      throw new main_exports.errors.NotFound(`The target path '${opts.targetPath}' did not exist or path kind could not be determined. When the path doesn't exist, you need to specify a symlink type on Windows.`);
    }
  }
  await main_exports.symlink(opts.text, opts.fromPath.toString(), kind == null ? undefined : {
    type: kind
  });
}
function createSymlinkSync(opts) {
  let kind = opts.type;
  if (kind == null && main_exports.build.os === "windows") {
    const info = opts.targetPath.lstatSync();
    if (info?.isDirectory) {
      kind = "dir";
    } else if (info?.isFile) {
      kind = "file";
    } else {
      throw new main_exports.errors.NotFound(`The target path '${opts.targetPath}' did not exist or path kind could not be determined. When the path doesn't exist, you need to specify a symlink type on Windows.`);
    }
  }
  main_exports.symlinkSync(opts.text, opts.fromPath.toString(), kind == null ? undefined : {
    type: kind
  });
}
async function notFoundToUndefined(action) {
  try {
    return await action();
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      return;
    } else {
      throw err;
    }
  }
}
function notFoundToUndefinedSync(action) {
  try {
    return action();
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      return;
    } else {
      throw err;
    }
  }
}
async function writeAll(writer, data) {
  let nwritten = 0;
  while (nwritten < data.length) {
    nwritten += await writer.write(data.subarray(nwritten));
  }
}
function writeAllSync(writer, data) {
  let nwritten = 0;
  while (nwritten < data.length) {
    nwritten += writer.writeSync(data.subarray(nwritten));
  }
}
function copy22(src, dst, offset = 0) {
  offset = Math.max(0, Math.min(offset, dst.byteLength));
  const dstBytesAvailable = dst.byteLength - offset;
  if (src.byteLength > dstBytesAvailable) {
    src = src.subarray(0, dstBytesAvailable);
  }
  dst.set(src, offset);
  return src.byteLength;
}
var MIN_READ = 32 * 1024;
var MAX_SIZE = 2 ** 32 - 2;
var Buffer2 = class {
  #buf;
  #off = 0;
  constructor(ab) {
    if (ab === undefined) {
      this.#buf = new Uint8Array(0);
    } else if (ab instanceof SharedArrayBuffer) {
      this.#buf = new Uint8Array(ab);
    } else {
      this.#buf = new Uint8Array(ab);
    }
  }
  bytes(options = { copy: true }) {
    if (options.copy === false)
      return this.#buf.subarray(this.#off);
    return this.#buf.slice(this.#off);
  }
  empty() {
    return this.#buf.byteLength <= this.#off;
  }
  get length() {
    return this.#buf.byteLength - this.#off;
  }
  get capacity() {
    return this.#buf.buffer.byteLength;
  }
  truncate(n) {
    if (n === 0) {
      this.reset();
      return;
    }
    if (n < 0 || n > this.length) {
      throw new Error("Buffer truncation out of range");
    }
    this.#reslice(this.#off + n);
  }
  reset() {
    this.#reslice(0);
    this.#off = 0;
  }
  #tryGrowByReslice(n) {
    const l = this.#buf.byteLength;
    if (n <= this.capacity - l) {
      this.#reslice(l + n);
      return l;
    }
    return -1;
  }
  #reslice(len) {
    if (len > this.#buf.buffer.byteLength) {
      throw new RangeError("Length is greater than buffer capacity");
    }
    this.#buf = new Uint8Array(this.#buf.buffer, 0, len);
  }
  readSync(p) {
    if (this.empty()) {
      this.reset();
      if (p.byteLength === 0) {
        return 0;
      }
      return null;
    }
    const nread = copy22(this.#buf.subarray(this.#off), p);
    this.#off += nread;
    return nread;
  }
  read(p) {
    const rr = this.readSync(p);
    return Promise.resolve(rr);
  }
  writeSync(p) {
    const m = this.#grow(p.byteLength);
    return copy22(p, this.#buf, m);
  }
  write(p) {
    const n = this.writeSync(p);
    return Promise.resolve(n);
  }
  #grow(n) {
    const m = this.length;
    if (m === 0 && this.#off !== 0) {
      this.reset();
    }
    const i = this.#tryGrowByReslice(n);
    if (i >= 0) {
      return i;
    }
    const c = this.capacity;
    if (n <= Math.floor(c / 2) - m) {
      copy22(this.#buf.subarray(this.#off), this.#buf);
    } else if (c + n > MAX_SIZE) {
      throw new Error(`The buffer cannot be grown beyond the maximum size of "${MAX_SIZE}"`);
    } else {
      const buf = new Uint8Array(Math.min(2 * c + n, MAX_SIZE));
      copy22(this.#buf.subarray(this.#off), buf);
      this.#buf = buf;
    }
    this.#off = 0;
    this.#reslice(Math.min(m + n, MAX_SIZE));
    return m;
  }
  grow(n) {
    if (n < 0) {
      throw new Error("Buffer growth cannot be negative");
    }
    const m = this.#grow(n);
    this.#reslice(m);
  }
  async readFrom(r) {
    let n = 0;
    const tmp = new Uint8Array(MIN_READ);
    while (true) {
      const shouldGrow = this.capacity - this.length < MIN_READ;
      const buf = shouldGrow ? tmp : new Uint8Array(this.#buf.buffer, this.length);
      const nread = await r.read(buf);
      if (nread === null) {
        return n;
      }
      if (shouldGrow)
        this.writeSync(buf.subarray(0, nread));
      else
        this.#reslice(this.length + nread);
      n += nread;
    }
  }
  readFromSync(r) {
    let n = 0;
    const tmp = new Uint8Array(MIN_READ);
    while (true) {
      const shouldGrow = this.capacity - this.length < MIN_READ;
      const buf = shouldGrow ? tmp : new Uint8Array(this.#buf.buffer, this.length);
      const nread = r.readSync(buf);
      if (nread === null) {
        return n;
      }
      if (shouldGrow)
        this.writeSync(buf.subarray(0, nread));
      else
        this.#reslice(this.length + nread);
      n += nread;
    }
  }
};
var REG_EXP_ESCAPE_CHARS = [
  "!",
  "$",
  "(",
  ")",
  "*",
  "+",
  ".",
  "=",
  "?",
  "[",
  "\\",
  "^",
  "{",
  "|"
];
var RANGE_ESCAPE_CHARS = ["-", "\\", "]"];
function _globToRegExp(c, glob, {
  extended = true,
  globstar: globstarOption = true,
  caseInsensitive = false
} = {}) {
  if (glob === "") {
    return /(?!)/;
  }
  let newLength = glob.length;
  for (;newLength > 1 && c.seps.includes(glob[newLength - 1]); newLength--)
    ;
  glob = glob.slice(0, newLength);
  let regExpString = "";
  for (let j = 0;j < glob.length; ) {
    let segment = "";
    const groupStack = [];
    let inRange = false;
    let inEscape = false;
    let endsWithSep = false;
    let i = j;
    for (;i < glob.length && !(c.seps.includes(glob[i]) && groupStack.length === 0); i++) {
      if (inEscape) {
        inEscape = false;
        const escapeChars = inRange ? RANGE_ESCAPE_CHARS : REG_EXP_ESCAPE_CHARS;
        segment += escapeChars.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
        continue;
      }
      if (glob[i] === c.escapePrefix) {
        inEscape = true;
        continue;
      }
      if (glob[i] === "[") {
        if (!inRange) {
          inRange = true;
          segment += "[";
          if (glob[i + 1] === "!") {
            i++;
            segment += "^";
          } else if (glob[i + 1] === "^") {
            i++;
            segment += "\\^";
          }
          continue;
        } else if (glob[i + 1] === ":") {
          let k = i + 1;
          let value = "";
          while (glob[k + 1] !== undefined && glob[k + 1] !== ":") {
            value += glob[k + 1];
            k++;
          }
          if (glob[k + 1] === ":" && glob[k + 2] === "]") {
            i = k + 2;
            if (value === "alnum")
              segment += "\\dA-Za-z";
            else if (value === "alpha")
              segment += "A-Za-z";
            else if (value === "ascii")
              segment += "\x00-";
            else if (value === "blank")
              segment += "\t ";
            else if (value === "cntrl")
              segment += "\x00-\x1F";
            else if (value === "digit")
              segment += "\\d";
            else if (value === "graph")
              segment += "!-~";
            else if (value === "lower")
              segment += "a-z";
            else if (value === "print")
              segment += " -~";
            else if (value === "punct") {
              segment += `!"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_‘{|}~`;
            } else if (value === "space")
              segment += "\\s\v";
            else if (value === "upper")
              segment += "A-Z";
            else if (value === "word")
              segment += "\\w";
            else if (value === "xdigit")
              segment += "\\dA-Fa-f";
            continue;
          }
        }
      }
      if (glob[i] === "]" && inRange) {
        inRange = false;
        segment += "]";
        continue;
      }
      if (inRange) {
        segment += glob[i];
        continue;
      }
      if (glob[i] === ")" && groupStack.length > 0 && groupStack[groupStack.length - 1] !== "BRACE") {
        segment += ")";
        const type = groupStack.pop();
        if (type === "!") {
          segment += c.wildcard;
        } else if (type !== "@") {
          segment += type;
        }
        continue;
      }
      if (glob[i] === "|" && groupStack.length > 0 && groupStack[groupStack.length - 1] !== "BRACE") {
        segment += "|";
        continue;
      }
      if (glob[i] === "+" && extended && glob[i + 1] === "(") {
        i++;
        groupStack.push("+");
        segment += "(?:";
        continue;
      }
      if (glob[i] === "@" && extended && glob[i + 1] === "(") {
        i++;
        groupStack.push("@");
        segment += "(?:";
        continue;
      }
      if (glob[i] === "?") {
        if (extended && glob[i + 1] === "(") {
          i++;
          groupStack.push("?");
          segment += "(?:";
        } else {
          segment += ".";
        }
        continue;
      }
      if (glob[i] === "!" && extended && glob[i + 1] === "(") {
        i++;
        groupStack.push("!");
        segment += "(?!";
        continue;
      }
      if (glob[i] === "{") {
        groupStack.push("BRACE");
        segment += "(?:";
        continue;
      }
      if (glob[i] === "}" && groupStack[groupStack.length - 1] === "BRACE") {
        groupStack.pop();
        segment += ")";
        continue;
      }
      if (glob[i] === "," && groupStack[groupStack.length - 1] === "BRACE") {
        segment += "|";
        continue;
      }
      if (glob[i] === "*") {
        if (extended && glob[i + 1] === "(") {
          i++;
          groupStack.push("*");
          segment += "(?:";
        } else {
          const prevChar = glob[i - 1];
          let numStars = 1;
          while (glob[i + 1] === "*") {
            i++;
            numStars++;
          }
          const nextChar = glob[i + 1];
          if (globstarOption && numStars === 2 && [...c.seps, undefined].includes(prevChar) && [...c.seps, undefined].includes(nextChar)) {
            segment += c.globstar;
            endsWithSep = true;
          } else {
            segment += c.wildcard;
          }
        }
        continue;
      }
      segment += REG_EXP_ESCAPE_CHARS.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
    }
    if (groupStack.length > 0 || inRange || inEscape) {
      segment = "";
      for (const c2 of glob.slice(j, i)) {
        segment += REG_EXP_ESCAPE_CHARS.includes(c2) ? `\\${c2}` : c2;
        endsWithSep = false;
      }
    }
    regExpString += segment;
    if (!endsWithSep) {
      regExpString += i < glob.length ? c.sep : c.sepMaybe;
      endsWithSep = true;
    }
    while (c.seps.includes(glob[i]))
      i++;
    j = i;
  }
  regExpString = `^${regExpString}$`;
  return new RegExp(regExpString, caseInsensitive ? "i" : "");
}
var constants2 = {
  sep: "/+",
  sepMaybe: "/*",
  seps: ["/"],
  globstar: "(?:[^/]*(?:/|$)+)*",
  wildcard: "[^/]*",
  escapePrefix: "\\"
};
function globToRegExp(glob, options = {}) {
  return _globToRegExp(constants2, glob, options);
}
var constants22 = {
  sep: "(?:\\\\|/)+",
  sepMaybe: "(?:\\\\|/)*",
  seps: ["\\", "/"],
  globstar: "(?:[^\\\\/]*(?:\\\\|/|$)+)*",
  wildcard: "[^\\\\/]*",
  escapePrefix: "`"
};
function globToRegExp2(glob, options = {}) {
  return _globToRegExp(constants22, glob, options);
}
function globToRegExp3(glob, options = {}) {
  return isWindows2 ? globToRegExp2(glob, options) : globToRegExp(glob, options);
}
function isGlob(str) {
  const chars = { "{": "}", "(": ")", "[": "]" };
  const regex = /\\(.)|(^!|\*|\?|[\].+)]\?|\[[^[\\\]]+\]|\{[^{\\}]+\}|\(\?[:!=][^\\)]+\)|\([^(|]+\|[^\\)]+\)|@\([^)]+\))/;
  if (str === "") {
    return false;
  }
  let match;
  while (match = regex.exec(str)) {
    if (match[2])
      return true;
    let idx = match.index + match[0].length;
    const open3 = match[1];
    const close2 = open3 ? chars[open3] : null;
    if (open3 && close2) {
      const n = str.indexOf(close2, idx);
      if (n !== -1) {
        idx = n + 1;
      }
    }
    str = str.slice(idx);
  }
  return false;
}
var SEPARATOR2 = "/";
var SEPARATOR_PATTERN2 = /\/+/;
function normalizeGlob(glob, options = {}) {
  const { globstar = false } = options;
  if (glob.match(/\0/g)) {
    throw new Error(`Glob contains invalid characters: "${glob}"`);
  }
  if (!globstar) {
    return normalize(glob);
  }
  const s = SEPARATOR_PATTERN2.source;
  const badParentPattern = new RegExp(`(?<=(${s}|^)\\*\\*${s})\\.\\.(?=${s}|$)`, "g");
  return normalize(glob.replace(badParentPattern, "\x00")).replace(/\0/g, "..");
}
function joinGlobs(globs, options = {}) {
  const { globstar = false } = options;
  if (!globstar || globs.length === 0) {
    return join6(...globs);
  }
  let joined;
  for (const glob of globs) {
    const path = glob;
    if (path.length > 0) {
      if (!joined)
        joined = path;
      else
        joined += `${SEPARATOR2}${path}`;
    }
  }
  if (!joined)
    return ".";
  return normalizeGlob(joined, { globstar });
}
var SEPARATOR3 = "\\";
var SEPARATOR_PATTERN3 = /[\\/]+/;
function normalizeGlob2(glob, options = {}) {
  const { globstar = false } = options;
  if (glob.match(/\0/g)) {
    throw new Error(`Glob contains invalid characters: "${glob}"`);
  }
  if (!globstar) {
    return normalize2(glob);
  }
  const s = SEPARATOR_PATTERN3.source;
  const badParentPattern = new RegExp(`(?<=(${s}|^)\\*\\*${s})\\.\\.(?=${s}|$)`, "g");
  return normalize2(glob.replace(badParentPattern, "\x00")).replace(/\0/g, "..");
}
function joinGlobs2(globs, options = {}) {
  const { globstar = false } = options;
  if (!globstar || globs.length === 0) {
    return join22(...globs);
  }
  let joined;
  for (const glob of globs) {
    const path = glob;
    if (path.length > 0) {
      if (!joined)
        joined = path;
      else
        joined += `${SEPARATOR3}${path}`;
    }
  }
  if (!joined)
    return ".";
  return normalizeGlob2(joined, { globstar });
}
function joinGlobs3(globs, options = {}) {
  return isWindows2 ? joinGlobs2(globs, options) : joinGlobs(globs, options);
}
async function writeAll2(writer, data) {
  let nwritten = 0;
  while (nwritten < data.length) {
    nwritten += await writer.write(data.subarray(nwritten));
  }
}
function writeAllSync2(writer, data) {
  let nwritten = 0;
  while (nwritten < data.length) {
    nwritten += writer.writeSync(data.subarray(nwritten));
  }
}
function readerFromStreamReader(streamReader) {
  const buffer = new Buffer2;
  return {
    async read(p) {
      if (buffer.empty()) {
        const res = await streamReader.read();
        if (res.done) {
          return null;
        }
        await writeAll2(buffer, res.value);
      }
      return buffer.read(p);
    }
  };
}
var rs_lib_internal_exports = {};
__export3(rs_lib_internal_exports, {
  StaticTextContainer: () => StaticTextContainer,
  __wbg_buffer_609cc3eee51ed158: () => __wbg_buffer_609cc3eee51ed158,
  __wbg_call_672a4d21634d4a24: () => __wbg_call_672a4d21634d4a24,
  __wbg_done_769e5ede4b31c67b: () => __wbg_done_769e5ede4b31c67b,
  __wbg_entries_3265d4158b33e5dc: () => __wbg_entries_3265d4158b33e5dc,
  __wbg_get_67b2ba62fc30de12: () => __wbg_get_67b2ba62fc30de12,
  __wbg_get_b9b93047fe3cf45b: () => __wbg_get_b9b93047fe3cf45b,
  __wbg_instanceof_ArrayBuffer_e14585432e3737fc: () => __wbg_instanceof_ArrayBuffer_e14585432e3737fc,
  __wbg_instanceof_Map_f3469ce2244d2430: () => __wbg_instanceof_Map_f3469ce2244d2430,
  __wbg_instanceof_Uint8Array_17156bcf118086a9: () => __wbg_instanceof_Uint8Array_17156bcf118086a9,
  __wbg_isArray_a1eab7e0d067391b: () => __wbg_isArray_a1eab7e0d067391b,
  __wbg_isSafeInteger_343e2beeeece1bb0: () => __wbg_isSafeInteger_343e2beeeece1bb0,
  __wbg_iterator_9a24c88df860dc65: () => __wbg_iterator_9a24c88df860dc65,
  __wbg_length_a446193dc22c12f8: () => __wbg_length_a446193dc22c12f8,
  __wbg_length_e2d2a49132c1b256: () => __wbg_length_e2d2a49132c1b256,
  __wbg_new_a12002a7f91c75be: () => __wbg_new_a12002a7f91c75be,
  __wbg_next_25feadfc0913fea9: () => __wbg_next_25feadfc0913fea9,
  __wbg_next_6574e1a8a62d1055: () => __wbg_next_6574e1a8a62d1055,
  __wbg_set_65595bdd868b3009: () => __wbg_set_65595bdd868b3009,
  __wbg_set_wasm: () => __wbg_set_wasm,
  __wbg_value_cd1ffa7b1ab794f1: () => __wbg_value_cd1ffa7b1ab794f1,
  __wbindgen_bigint_from_i64: () => __wbindgen_bigint_from_i64,
  __wbindgen_bigint_from_u64: () => __wbindgen_bigint_from_u64,
  __wbindgen_bigint_get_as_i64: () => __wbindgen_bigint_get_as_i64,
  __wbindgen_boolean_get: () => __wbindgen_boolean_get,
  __wbindgen_debug_string: () => __wbindgen_debug_string,
  __wbindgen_error_new: () => __wbindgen_error_new,
  __wbindgen_in: () => __wbindgen_in,
  __wbindgen_init_externref_table: () => __wbindgen_init_externref_table,
  __wbindgen_is_bigint: () => __wbindgen_is_bigint,
  __wbindgen_is_function: () => __wbindgen_is_function,
  __wbindgen_is_object: () => __wbindgen_is_object,
  __wbindgen_jsval_eq: () => __wbindgen_jsval_eq,
  __wbindgen_jsval_loose_eq: () => __wbindgen_jsval_loose_eq,
  __wbindgen_memory: () => __wbindgen_memory,
  __wbindgen_number_get: () => __wbindgen_number_get,
  __wbindgen_string_get: () => __wbindgen_string_get,
  __wbindgen_throw: () => __wbindgen_throw,
  static_text_render_once: () => static_text_render_once,
  strip_ansi_codes: () => strip_ansi_codes
});
var wasm;
function __wbg_set_wasm(val) {
  wasm = val;
}
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_export_2.set(idx, obj);
  return idx;
}
function handleError(f, args2) {
  try {
    return f.apply(this, args2);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
function isLikeNone(x) {
  return x === undefined || x === null;
}
var cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1;i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
var WASM_VECTOR_LEN = 0;
var cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
var lTextEncoder = typeof TextEncoder === "undefined" ? (0, module_mod.require)("util").TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder("utf-8");
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (;offset < len; offset++) {
    const code2 = arg.charCodeAt(offset);
    if (code2 > 127)
      break;
    mem[ptr + offset] = code2;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
var lTextDecoder = typeof TextDecoder2 === "undefined" ? (0, module_mod.require)("util").TextDecoder : TextDecoder2;
var cachedTextDecoder = new lTextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_export_2.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
function static_text_render_once(items, cols, rows) {
  const ret = wasm.static_text_render_once(items, isLikeNone(cols) ? 4294967297 : cols >>> 0, isLikeNone(rows) ? 4294967297 : rows >>> 0);
  if (ret[3]) {
    throw takeFromExternrefTable0(ret[2]);
  }
  let v1;
  if (ret[0] !== 0) {
    v1 = getStringFromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
  }
  return v1;
}
function strip_ansi_codes(text) {
  let deferred2_0;
  let deferred2_1;
  try {
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.strip_ansi_codes(ptr0, len0);
    deferred2_0 = ret[0];
    deferred2_1 = ret[1];
    return getStringFromWasm0(ret[0], ret[1]);
  } finally {
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
var StaticTextContainerFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((ptr) => wasm.__wbg_statictextcontainer_free(ptr >>> 0, 1));
var StaticTextContainer = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    StaticTextContainerFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_statictextcontainer_free(ptr, 0);
  }
  constructor() {
    const ret = wasm.statictextcontainer_new();
    this.__wbg_ptr = ret >>> 0;
    StaticTextContainerFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  render_text(items, cols, rows) {
    const ret = wasm.statictextcontainer_render_text(this.__wbg_ptr, items, isLikeNone(cols) ? 4294967297 : cols >>> 0, isLikeNone(rows) ? 4294967297 : rows >>> 0);
    if (ret[3]) {
      throw takeFromExternrefTable0(ret[2]);
    }
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
  clear_text(cols, rows) {
    const ret = wasm.statictextcontainer_clear_text(this.__wbg_ptr, isLikeNone(cols) ? 4294967297 : cols >>> 0, isLikeNone(rows) ? 4294967297 : rows >>> 0);
    let v1;
    if (ret[0] !== 0) {
      v1 = getStringFromWasm0(ret[0], ret[1]).slice();
      wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v1;
  }
};
function __wbg_buffer_609cc3eee51ed158(arg0) {
  const ret = arg0.buffer;
  return ret;
}
function __wbg_call_672a4d21634d4a24() {
  return handleError(function(arg0, arg1) {
    const ret = arg0.call(arg1);
    return ret;
  }, arguments);
}
function __wbg_done_769e5ede4b31c67b(arg0) {
  const ret = arg0.done;
  return ret;
}
function __wbg_entries_3265d4158b33e5dc(arg0) {
  const ret = Object.entries(arg0);
  return ret;
}
function __wbg_get_67b2ba62fc30de12() {
  return handleError(function(arg0, arg1) {
    const ret = Reflect.get(arg0, arg1);
    return ret;
  }, arguments);
}
function __wbg_get_b9b93047fe3cf45b(arg0, arg1) {
  const ret = arg0[arg1 >>> 0];
  return ret;
}
function __wbg_instanceof_ArrayBuffer_e14585432e3737fc(arg0) {
  let result;
  try {
    result = arg0 instanceof ArrayBuffer;
  } catch (_) {
    result = false;
  }
  const ret = result;
  return ret;
}
function __wbg_instanceof_Map_f3469ce2244d2430(arg0) {
  let result;
  try {
    result = arg0 instanceof Map;
  } catch (_) {
    result = false;
  }
  const ret = result;
  return ret;
}
function __wbg_instanceof_Uint8Array_17156bcf118086a9(arg0) {
  let result;
  try {
    result = arg0 instanceof Uint8Array;
  } catch (_) {
    result = false;
  }
  const ret = result;
  return ret;
}
function __wbg_isArray_a1eab7e0d067391b(arg0) {
  const ret = Array.isArray(arg0);
  return ret;
}
function __wbg_isSafeInteger_343e2beeeece1bb0(arg0) {
  const ret = Number.isSafeInteger(arg0);
  return ret;
}
function __wbg_iterator_9a24c88df860dc65() {
  const ret = Symbol.iterator;
  return ret;
}
function __wbg_length_a446193dc22c12f8(arg0) {
  const ret = arg0.length;
  return ret;
}
function __wbg_length_e2d2a49132c1b256(arg0) {
  const ret = arg0.length;
  return ret;
}
function __wbg_new_a12002a7f91c75be(arg0) {
  const ret = new Uint8Array(arg0);
  return ret;
}
function __wbg_next_25feadfc0913fea9(arg0) {
  const ret = arg0.next;
  return ret;
}
function __wbg_next_6574e1a8a62d1055() {
  return handleError(function(arg0) {
    const ret = arg0.next();
    return ret;
  }, arguments);
}
function __wbg_set_65595bdd868b3009(arg0, arg1, arg2) {
  arg0.set(arg1, arg2 >>> 0);
}
function __wbg_value_cd1ffa7b1ab794f1(arg0) {
  const ret = arg0.value;
  return ret;
}
function __wbindgen_bigint_from_i64(arg0) {
  const ret = arg0;
  return ret;
}
function __wbindgen_bigint_from_u64(arg0) {
  const ret = BigInt.asUintN(64, arg0);
  return ret;
}
function __wbindgen_bigint_get_as_i64(arg0, arg1) {
  const v = arg1;
  const ret = typeof v === "bigint" ? v : undefined;
  getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
  getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
}
function __wbindgen_boolean_get(arg0) {
  const v = arg0;
  const ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
  return ret;
}
function __wbindgen_debug_string(arg0, arg1) {
  const ret = debugString(arg1);
  const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN;
  getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
  getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
function __wbindgen_error_new(arg0, arg1) {
  const ret = new Error(getStringFromWasm0(arg0, arg1));
  return ret;
}
function __wbindgen_in(arg0, arg1) {
  const ret = arg0 in arg1;
  return ret;
}
function __wbindgen_init_externref_table() {
  const table = wasm.__wbindgen_export_2;
  const offset = table.grow(4);
  table.set(0, undefined);
  table.set(offset + 0, undefined);
  table.set(offset + 1, null);
  table.set(offset + 2, true);
  table.set(offset + 3, false);
}
function __wbindgen_is_bigint(arg0) {
  const ret = typeof arg0 === "bigint";
  return ret;
}
function __wbindgen_is_function(arg0) {
  const ret = typeof arg0 === "function";
  return ret;
}
function __wbindgen_is_object(arg0) {
  const val = arg0;
  const ret = typeof val === "object" && val !== null;
  return ret;
}
function __wbindgen_jsval_eq(arg0, arg1) {
  const ret = arg0 === arg1;
  return ret;
}
function __wbindgen_jsval_loose_eq(arg0, arg1) {
  const ret = arg0 == arg1;
  return ret;
}
function __wbindgen_memory() {
  const ret = wasm.memory;
  return ret;
}
function __wbindgen_number_get(arg0, arg1) {
  const obj = arg1;
  const ret = typeof obj === "number" ? obj : undefined;
  getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
  getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
}
function __wbindgen_string_get(arg0, arg1) {
  const obj = arg1;
  const ret = typeof obj === "string" ? obj : undefined;
  var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len1 = WASM_VECTOR_LEN;
  getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
  getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
var bytes = base64decode("AGFzbQEAAAABnQIqYAJ/fwBgAn9/AX9gA39/fwF/YAN/f38AYAF/AGABfwF/YAFvAX9gBX9/f39/AGAEf39/fwBgAW8Bb2AGf39/f39/AGAEf39/fwF/YAJ/bwBgAAR/f39/YAACf39gAm9vAX9gAAF/YAV/f39/fwF/YAF+AW9gAAFvYAJvbwFvYAAAYAZ/f39/f38Bf2ACf34AYAJvfwFvYAJ/fwFvYANvb38AYAl/f39/f39+fn4AYAd/f39/f39/AX9gA35/fwF/YAJ/fABgBH9vfHwEf39/f2ADb3x8BH9/f39gA398fAJ/f2ACf38Cf39gBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwBgBX9/fX9/AGAEf31/fwBgA39+fwAClw4kFC4vcnNfbGliLmludGVybmFsLmpzGl9fd2JnX2dldF9iOWI5MzA0N2ZlM2NmNDViABgULi9yc19saWIuaW50ZXJuYWwuanMZX193YmluZGdlbl9qc3ZhbF9sb29zZV9lcQAPFC4vcnNfbGliLmludGVybmFsLmpzLF9fd2JnX2luc3RhbmNlb2ZfVWludDhBcnJheV8xNzE1NmJjZjExODA4NmE5AAYULi9yc19saWIuaW50ZXJuYWwuanMtX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl9lMTQ1ODU0MzJlMzczN2ZjAAYULi9yc19saWIuaW50ZXJuYWwuanMaX193YmdfbmV3X2ExMjAwMmE3ZjkxYzc1YmUACRQuL3JzX2xpYi5pbnRlcm5hbC5qcxZfX3diaW5kZ2VuX2Jvb2xlYW5fZ2V0AAYULi9yc19saWIuaW50ZXJuYWwuanMVX193YmluZGdlbl9udW1iZXJfZ2V0AAwULi9yc19saWIuaW50ZXJuYWwuanMVX193YmluZGdlbl9zdHJpbmdfZ2V0AAwULi9yc19saWIuaW50ZXJuYWwuanMUX193YmluZGdlbl9lcnJvcl9uZXcAGRQuL3JzX2xpYi5pbnRlcm5hbC5qcx1fX3diZ19sZW5ndGhfZTJkMmE0OTEzMmMxYjI1NgAGFC4vcnNfbGliLmludGVybmFsLmpzFF9fd2JpbmRnZW5faXNfYmlnaW50AAYULi9yc19saWIuaW50ZXJuYWwuanMkX193YmdfaXNTYWZlSW50ZWdlcl8zNDNlMmJlZWVlY2UxYmIwAAYULi9yc19saWIuaW50ZXJuYWwuanMaX193YmluZGdlbl9iaWdpbnRfZnJvbV9pNjQAEhQuL3JzX2xpYi5pbnRlcm5hbC5qcxRfX3diaW5kZ2VuX2lzX29iamVjdAAGFC4vcnNfbGliLmludGVybmFsLmpzH19fd2JnX2l0ZXJhdG9yXzlhMjRjODhkZjg2MGRjNjUAExQuL3JzX2xpYi5pbnRlcm5hbC5qcw1fX3diaW5kZ2VuX2luAA8ULi9yc19saWIuaW50ZXJuYWwuanMlX193YmdfaW5zdGFuY2VvZl9NYXBfZjM0NjljZTIyNDRkMjQzMAAGFC4vcnNfbGliLmludGVybmFsLmpzHl9fd2JnX2VudHJpZXNfMzI2NWQ0MTU4YjMzZTVkYwAJFC4vcnNfbGliLmludGVybmFsLmpzGl9fd2JpbmRnZW5fYmlnaW50X2Zyb21fdTY0ABIULi9yc19saWIuaW50ZXJuYWwuanMTX193YmluZGdlbl9qc3ZhbF9lcQAPFC4vcnNfbGliLmludGVybmFsLmpzFl9fd2JpbmRnZW5faXNfZnVuY3Rpb24ABhQuL3JzX2xpYi5pbnRlcm5hbC5qcxtfX3diZ19uZXh0XzY1NzRlMWE4YTYyZDEwNTUACRQuL3JzX2xpYi5pbnRlcm5hbC5qcxtfX3diZ19kb25lXzc2OWU1ZWRlNGIzMWM2N2IABhQuL3JzX2xpYi5pbnRlcm5hbC5qcxxfX3diZ192YWx1ZV9jZDFmZmE3YjFhYjc5NGYxAAkULi9yc19saWIuaW50ZXJuYWwuanMaX193YmdfZ2V0XzY3YjJiYTYyZmMzMGRlMTIAFBQuL3JzX2xpYi5pbnRlcm5hbC5qcxtfX3diZ19jYWxsXzY3MmE0ZDIxNjM0ZDRhMjQAFBQuL3JzX2xpYi5pbnRlcm5hbC5qcxtfX3diZ19uZXh0XzI1ZmVhZGZjMDkxM2ZlYTkACRQuL3JzX2xpYi5pbnRlcm5hbC5qcx5fX3diZ19pc0FycmF5X2ExZWFiN2UwZDA2NzM5MWIABhQuL3JzX2xpYi5pbnRlcm5hbC5qcx1fX3diZ19sZW5ndGhfYTQ0NjE5M2RjMjJjMTJmOAAGFC4vcnNfbGliLmludGVybmFsLmpzEV9fd2JpbmRnZW5fbWVtb3J5ABMULi9yc19saWIuaW50ZXJuYWwuanMdX193YmdfYnVmZmVyXzYwOWNjM2VlZTUxZWQxNTgACRQuL3JzX2xpYi5pbnRlcm5hbC5qcxpfX3diZ19zZXRfNjU1OTViZGQ4NjhiMzAwOQAaFC4vcnNfbGliLmludGVybmFsLmpzEF9fd2JpbmRnZW5fdGhyb3cAABQuL3JzX2xpYi5pbnRlcm5hbC5qcxxfX3diaW5kZ2VuX2JpZ2ludF9nZXRfYXNfaTY0AAwULi9yc19saWIuaW50ZXJuYWwuanMXX193YmluZGdlbl9kZWJ1Z19zdHJpbmcADBQuL3JzX2xpYi5pbnRlcm5hbC5qcx9fX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlABUD/QH7AQUBAAcACgIDAAgDAQsBAwIECAMWAgABAQMCAQMACAICAAAbARAAAAIAHB0BCgEIAwABAQoHAwMAABUAAQMAAAgABwcCAAAACAEBCgUABwEECgAAAAADAAMCBAIAAAABAwAAAwQABAAAAAcBAAAAAwMEAAMEAAMDAAMHAAIDFxceEAMAAwQEBAEFAAAAAREBAQMFBAQfAAsgAAAhAwQBIgAAAAQBFgsIByMlEScDAQgEBQQCAQQEBAEFAwQFAQQAAQQEAQEBAQEBAQIEAQQEAQQHAxAAAAUBAAQDAQEBAAQDAwQBAAAABQEAAQUAAAAAAAAFBQUFAAcICwgpBAkCcAE2Nm8AgAEFAwEAEQYJAX8BQYCAwAALB+8CDwZtZW1vcnkCAB5fX3diZ19zdGF0aWN0ZXh0Y29udGFpbmVyX2ZyZWUAYhdzdGF0aWN0ZXh0Y29udGFpbmVyX25ldwCkAR9zdGF0aWN0ZXh0Y29udGFpbmVyX3JlbmRlcl90ZXh0ALgBHnN0YXRpY3RleHRjb250YWluZXJfY2xlYXJfdGV4dAC+ARdzdGF0aWNfdGV4dF9yZW5kZXJfb25jZQC7ARBzdHJpcF9hbnNpX2NvZGVzAMIBFF9fd2JpbmRnZW5fZXhuX3N0b3JlAO4BF19fZXh0ZXJucmVmX3RhYmxlX2FsbG9jAEgTX193YmluZGdlbl9leHBvcnRfMgEBEV9fd2JpbmRnZW5fbWFsbG9jALMBEl9fd2JpbmRnZW5fcmVhbGxvYwC6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JQEQCkEBRwRAIAJBQGsgARCRAiACKAJARQ0BIAIrA0ghCiABJQEQCw0CQYqAgIB4DAMLIAIgATYCkAIgAkHoAGoiAyABEKYBIAIoAmhBAUcNBCACKQNwIgkQDCELEEgiASALJgEgAiABNgJoIAJBkAJqIAMQ8gEgARDwASACKAKQAiEBRQ0EIAEQ8AEgACAJNwMIIABBiICAgHg2AgAMCgsgAkE4aiABEJICIAIoAjgiA0UNAiACQTBqIAMgAigCPBCgASACKAI0IgNBgICAgHhGDQIgAigCMCEEIAAgAzYCDCAAIAQ2AgggACADNgIEIABBjICAgHg2AgAMBwsgCkQAAAAAAADgw2YhA0L///////////8AAn4gCplEAAAAAAAA4ENjBEAgCrAMAQtCgICAgICAgICAfwtCgICAgICAgICAfyADGyAKRP///////99DZBtCACAKIAphG78hCkGIgICAeAshAyAAIAo5AwggACADNgIADAULAkAgARCKAkUEQCACQdQAaiACQdAAahBoIAIoAlRBgICAgHhGDQEgACACKQJUNwIEIABBjoCAgHg2AgAgAEEMaiACQdwAaigCADYCAAwGCyACIAE2AsABIAJBwAFqEPkBIgMEQCACIAMoAgAQlgIiATYCmAIgAkEANgKUAiACQQA2ApwCIAIgAzYCkAIgAkGAAmpBgIAEIAEgAUGAgARPGxCuAQNAIAJBCGogAkGQAmoQlQFBlYCAgHghASACKAIIBEAgAigCDCEBIAIgAigCnAJBAWo2ApwCIAJB6ABqIAEQJiACKAJsIQMgAigCaCIBQZWAgIB4Rg0GIAIpA3AhCQsgAiAJNwOYASACIAM2ApQBIAIgATYCkAEgAUGVgICAeEcEQCACQYACaiACQZABahCbAQwBCwsgAkGQAWoQ5AEgAEGUgICAeDYCACAAIAIpAoACNwIEIABBDGogAkGIAmooAgA2AgAMBwsgAkHoAGogARBeIAIoAmghAQJAAkACQCACLQBsIgNBAmsOAgIAAQsgAEGVgICAeDYCACAAIAE2AgQMCAsgAiADOgCEAiACIAE2AoACIAJBkAJqQQAQrgECQAJAAn8DQAJAIAIgAkGAAmoQaSACKAIEIQRBlYCAgHghAQJAAkAgAigCAEEBaw4CAgEACyACQegAaiAEECYgAigCbCIDIAIoAmgiAUGVgICAeEYNAxogAikDcCEJCyACIAk3A4gBIAIgAzYChAEgAiABNgKAASABQZWAgIB4Rg0DIAJBkAJqIAJBgAFqEJsBDAELCyAECyEBIABBlYCAgHg2AgAgACABNgIEIAJBkAJqEKkBDAELIAJBgAFqEOQBIABBlICAgHg2AgAgACACKQKQAjcCBCAAQQxqIAJBmAJqKAIANgIACyACKAKAAhDwAQwHCyAAIAJBwAFqELkBDAYLIAEQlwJBAUcNAxD2ASIDJQEgASUBEA8gAxDwAUEBRgRAIAElARAQRQ0ECyACIAE2AmAgAkHoAGogARBeIAIoAmghAwJAAkACQCACLQBsIgRBAmsOAgIAAQsgAEGVgICAeDYCACAAIAM2AgQMBgsgAiAEOgDMASACIAM2AsgBIAJBADYCwAEgAkHUAWpBABCvASACQfABaiEFIAJByAFqIQcCQANAIAJBGGogBxBpIAIoAhwhBEGVgICAeCEDAkACQAJAAkAgAigCGEEBaw4CAQMACyACQRBqIAQQwwEgAigCECEDIAIoAhQhBiACKALAASACKALEARD7ASACIAY2AsQBIAJBATYCwAEgAkHoAGoiCCADECYgAigCbCEEIAIoAmgiA0GVgICAeEYNACACIAIpA3AiCTcDmAIgAiAENgKUAiACIAM2ApACIAJBADYCwAEgCCAGECYgAigCaEGVgICAeEcNASACKAJsIQQgAkGQAmoQfQsgAEGVgICAeDYCACAAIAQ2AgQgAkHUAWoQqgEMAwsgAkGIAmogAkHwAGopAwA3AwAgAiACKQNoNwOAAgsgBSACKQOAAjcDACAFQQhqIAJBiAJqKQMANwMAIAIgCTcD6AEgAiAENgLkASACIAM2AuABIANBlYCAgHhHBEAgAkHUAWogAkHgAWoQegwBCwsgAkHgAWoQ5QEgACACKQLUATcCACAAQQhqIAJB3AFqKAIANgIACyACKALIARDwASACKALAASACKALEARD7AQwFCyABEJcCQQFHBEAgACACQeAAahC5AQwFCyABJQEQESELEEgiAyALJgEgAiADNgJkIAIgAxCWAiIDNgJ4IAJBADYCdCACQQA2AnwgAkEANgJoIAIgAkHkAGoiBTYCcCACQdQBakGAgAIgAyADQYCAAk8bEK8BIAJBsAFqIQYgAkHwAGohBwJA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AgAhBwNAIAVBBGsiBSAHIAN0IAIoAgAiByAGdnI2AgAgAkEEayECIAEgBUkNAAsLIApBA3EhByAJaiEDDAELIAdBEE8EQAJAIAFBACABa0EDcSIGaiIEIAFNDQAgAiEFIAYEQCAGIQMDQCABIAUtAAA6AAAgBUEBaiEFIAFBAWohASADQQFrIgMNAAsLIAZBAWtBB0kNAANAIAEgBS0AADoAACABQQFqIAVBAWotAAA6AAAgAUECaiAFQQJqLQAAOgAAIAFBA2ogBUEDai0AADoAACABQQRqIAVBBGotAAA6AAAgAUEFaiAFQQVqLQAAOgAAIAFBBmogBUEGai0AADoAACABQQdqIAVBB2otAAA6AAAgBUEIaiEFIAFBCGoiASAERw0ACwsgBCAHIAZrIglBfHEiCmohAQJAIAIgBmoiA0EDcUUEQCABIARNDQEgAyECA0AgBCACKAIANgIAIAJBBGohAiAEQQRqIgQgAUkNAAsMAQsgASAETQ0AIANBA3QiBkEYcSEFIANBfHEiCEEEaiECQQAgBmtBGHEhBiAIKAIAIQcDQCAEIAcgBXYgAigCACIHIAZ0cjYCACACQQRqIQIgBEEEaiIEIAFJDQALCyAJQQNxIQcgAyAKaiECCyABIAEgB2oiA08NASAHQQdxIgUEQANAIAEgAi0AADoAACACQQFqIQIgAUEBaiEBIAVBAWsiBQ0ACwsgB0EBa0EHSQ0BA0AgASACLQAAOgAAIAFBAWogAkEBai0AADoAACABQQJqIAJBAmotAAA6AAAgAUEDaiACQQNqLQAAOgAAIAFBBGogAkEEai0AADoAACABQQVqIAJBBWotAAA6AAAgAUEGaiACQQZqLQAAOgAAIAFBB2ogAkEHai0AADoAACACQQhqIQIgAUEIaiIBIANHDQALDAELIAEgB2siBCABTw0AIAdBA3EiAgRAA0AgAUEBayIBIANBAWsiAy0AADoAACACQQFrIgINAAsLIAdBAWtBA0kNACADQQRrIQIDQCABQQFrIAJBA2otAAA6AAAgAUECayACQQJqLQAAOgAAIAFBA2sgAkEBai0AADoAACABQQRrIgEgAi0AADoAACACQQRrIQIgASAESw0ACwsgACgCECECCyALIAIgDGo2AggLC14BA38jAEEQayICJAAgAkEEaiABKAIEIAFBCGoiAygC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ASACIAMgBBBXIAUoAggiAEGBgICAeEcEQCAFKAIMIQYgAEHYk8AAEPcBAAsgBUEQaiQAC0IBAX8gASgCBCICIAEoAghPBH9BAAUgASACQQFqNgIEIAEoAgAoAgAgAhDbASEBQQELIQIgACABNgIEIAAgAjYCAAtBAQF/IAIgACgCACAAKAIIIgNrSwRAIAAgAyACEGAgACgCCCEDCyAAKAIEIANqIAEgAhAzGiAAIAIgA2o2AghBAAtFAQF/IwBBIGsiAyQAIAMgAjYCHCADIAE2AhggAyACNgIUIANBCGogA0EUakHcvcEAELQBIAAgAykDCDcDACADQSBqJAALCwAgACABQQEQngILCwAgACABQQIQngILRwECfyMAQSBrIgIkACACQQM6AAggAiABOQMQIAJBCGogAkEfakGYg8AAEHwhAyAAQYGAgIB4NgIAIAAgAzYCBCACQSBqJAALTQEBf0EsENQBIgBBAToAKCAAQZCCwAA2AiQgAEEBNgIgIABBADsBHCAAQQA7ARggAEIENwIQIABCADcCCCAAQoGAgIAQNwIAIABBCGoLSQACQCABIAJB+IbAAEEEEMkBRQRAIAEgAkH8hsAAQQ0QyQFFBEAgAEECOgABDAILIABBAToAAQwBCyAAQQA6AAELIABBADoAAAs4AQF/IwBBEGsiAiQAIAIgASUBECEgACACKAIABH4gACACKQMINwMIQgEFQgALNwMAIAJBEGokAAtCAQF/IwBBIGsiAyQAIANBADYCECADQQE2AgQgA0IENwIIIAMgATYCHCADIAA2AhggAyADQRhqNgIAIAMgAhC9AQALPQEDfyAAKAIIIQEgACgCBCIDIQIDQCABBEAgAUEBayEBIAIQxgEgAkEQaiECDAELCyAAKAIAIANBEBDdAQs8AQN/IAAoAgghASAAKAIEIgMhAgNAIAEEQCABQQFrIQEgAhB9IAJBEGohAgwBCwsgACgCACADQRAQ3QELPQEDfyAAKAIIIQEgACgCBCIDIQIDQCABBEAgAUEBayEBIAIQ/AEgAkEgaiECDAELCyAAKAIAIANBIBDdAQs5AQF/IwBBEGsiAiQAIAJBBGogACABEJIBIAIoAggiACACKAIMEOABIAIoAgQgABCHAiACQRBqJAALNgECfyMAQRBrIgEkACABQQRqIAAQZCABKAIIIgAgASgCDBDgASABKAIEIAAQhwIgAUEQaiQACxIAIAAgAUG4gcAAQRBBBBCaAgsSACAAIAFB9ITAAEEQQQgQmgILEgAgACABQdSEwABBIEEIEJoCCzEAQQFBf0EAIAAoAgAiACABLwADIAEtAAVBEHRySxsgACABLwAAIAEtAAJBEHRySRsLOAACQCACQYCAxABGDQAgACACIAEoAhARAQBFDQBBAQ8LIANFBEBBAA8LIAAgAyAEIAEoAgwRAgAL4XEDHX8bfgF8IAEoAhRBAXEhAyAAKwMAIToCQAJAIAEoAghBAUYEQAJ/IAEiCSgCDCESIwBB0A5rIgUkACA6vSEgAkACQAJAAkACfwJAAkACQAJAAkACQAJ/AkACQCA6mUQAAAAAAADwf2EEf0EDBSAgQoCAgICAgID4/wCDIiNCgICAgICAgPj/AFENBSAgQv////////8HgyIhQoCAgICAgIAIhCAgQgGGQv7///////8PgyAgQjSIp0H/D3EiABsiH0IBgyEiICNCAFINAiAhUEUNAUEEC0ECayEBDAMLIABBswhrIQZCASEhICJQDAELQoCAgICAgIAgIB9CAYYgH0KAgICAgICACFEiARshH0ICQgEgARshIUHLd0HMdyABGyAAaiEGICJQC0F+ciIBRQ0BC0EBIQBBk6vAAEGUq8AAICBCAFMiAhtBk6vAAEEBIAIbIAMbIRggIEI/iKcgA3IhE0EDIAEgAUEDTxtBAmsOAgIDAQsgBUEDNgK0DSAFQZWrwAA2ArANIAVBAjsBrA1BASEYQQEhACAFQawNagwECyAFQQM2ArQNIAVBmKvAADYCsA0gBUECOwGsDSAFQawNagwDC0ECIQAgBUECOwGsDSASRQ0BIAUgEjYCvA0gBUEAOwG4DSAFQQI2ArQNIAVBkavAADYCsA0gBUGsDWoMAgsCQAJAAkACQAJAAkACQAJAAn8CQAJAAkBBdEEFIAbBIgpBAEgbIApsIgFBwP0ASQRAIB9QDQFBoH8gBkEgayAGIB9CgICAgBBUIgAbIgNBEGsgAyAfQiCGIB8gABsiIEKAgICAgIDAAFQiABsiA0EIayADICBCEIYgICAAGyIgQoCAgICAgICAAVQiABsiA0EEayADICBCCIYgICAAGyIgQoCAgICAgICAEFQiABsiA0ECayADICBCBIYgICAAGyIgQoCAgICAgICAwABUIgAbICBCAoYgICAAGyIgQgBZayIDa8FB0ABsQbCnBWpBzhBtIgBB0QBPDQIgAUEEdiINQRVqIQtBgIB+QQAgEmsgEkGAgAJPG8EhDyAAQQR0IgBBsJ3AAGopAwAiIkL/////D4MiIyAgICBCf4VCP4iGIiBCIIgiJH4iJUIgiCAiQiCIIiIgJH58ICIgIEL/////D4MiIH4iIkIgiHwgJUL/////D4MgICAjfkIgiHwgIkL/////D4N8QoCAgIAIfEIgiHwiIEIBQUAgAyAAQbidwABqLwEAamsiAkE/ca0iIoYiJEIBfSIlgyIjUARAIAVBADYCkAgMBgsgAEG6ncAAai8BACEDICAgIoinIgFBkM4ATwRAIAFBwIQ9SQ0EIAFBgMLXL08EQEEIQQkgAUGAlOvcA0kiABshDEGAwtcvQYCU69wDIAAbDAYLQQZBByABQYCt4gRJIgAbIQxBwIQ9QYCt4gQgABsMBQsgAUHkAE8EQEECQQMgAUHoB0kiABshDEHkAEHoByAAGwwFC0EKQQEgAUEJSyIMGwwEC0Gcq8AAQSVBxKvAABCnAQALQcebwABBHEGkqcAAEKcBAAsgAEHRAEHwp8AAEHsAC0EEQQUgAUGgjQZJIgAbIQxBkM4AQaCNBiAAGwshAAJAIA8gDCADa0EBasEiA0gEQCACQf//A3EhBCADIA9rIgLBIAsgAiALSRsiAkEBayEHAkACQAJAA0AgBUEQaiAIaiABIABuIg5BMGo6AAAgASAAIA5sayEBIAcgCEYNAiAIIAxGDQEgCEEBaiEIIABBCkkgAEEKbiEARQ0AC0HcqcAAELcBAAsgCEEBaiEAQWwgDWshASAEQQFrQT9xrSEpQgEhIANAICAgKYhQRQRAIAVBADYCkAgMBgsgACABakEBRg0CIAVBEGoiDSAAaiAjQgp+IiMgIoinQTBqOgAAICBCCn4hICAjICWDISMgAiAAQQFqIgBHDQALIAVBkAhqIA0gCyACIAMgDyAjICQgIBBGDAMLIAVBkAhqIAVBEGogCyACIAMgDyABrSAihiAjfCAArSAihiAkEEYMAgsgACALQeypwAAQewALIAVBkAhqIAVBEGogC0EAIAMgDyAgQgqAIACtICKGICQQRgsgBSgCkAgiAA0BCyAfICF8IB9UDQEgBSAfPgKcCCAFQQFBAiAfQoCAgIAQVCIAGzYCvAkgBUEAIB9CIIinIAAbNgKgCCAFQaQIakEAQZgBEEIaIAVBxAlqQQBBnAEQQhogBUEBNgLACSAFQQE2AuAKIAatwyAfQgF9eX1CwprB6AR+QoChzaC0AnxCIIinIgDBIQ4CQCAKQQBOBEAgBUGcCGogBkH//wNxED4aDAELIAVBwAlqQQAgBmvBED4aCwJAIA5BAEgEQCAFQZwIakEAIA5rQf//A3EQLAwBCyAFQcAJaiAAQf//AXEQLAsgBSgC4AohDSAFQawNaiAFQcAJakGgARAzGiAFIA02AswOIAVBpA1qIQMgDSEAIAshCgNAIABBKU8NEAJAIABFDQAgAEECdCEBAn8gAEH/////A2oiAkH/////A3EiBkUEQEIAISAgBUGsDWogAWoMAQsgASADaiEAIAZBAWpB/v///wdxIQhCACEgA0AgAEEEaiIBIAE1AgAiHyAgQiCGhEKAlOvcA4AiID4CACAAIAA1AgAgHyAgQoDslKMMfnxCIIaEIiBCgJTr3AOAIh8+AgAgH0KA7JSjfH4gIHwhICAAQQhrIQAgCEECayIIDQALIABBCGoLIAJBAXENAEEEayIAIAA1AgAgIEIghoRCgJTr3AOAPgIACyAKQQlrIgpBCUsEQCAFKALMDiEADAELCyAKQQJ0QbSpwABqKAIAQQF0IgFFDQIgBSgCzA4iCEEpTw0JIAgEfyAIQQJ0IQAgAa0hIAJ/IAhB/////wNqIgFB/////wNxIgNFBEBCACEfIAVBrA1qIABqDAELIANBAWpB/v///wdxIQggACAFakGkDWohAEIAIR8DQCAAQQRqIgMgAzUCACAfQiCGhCIfICCAIiI+AgAgACAANQIAIB8gICAifn1CIIaEIh8gIIAiIj4CACAfICAgIn59IR8gAEEIayEAIAhBAmsiCA0ACyAAQQhqCyEAIAFBAXFFBEAgAEEEayIAIAA1AgAgH0IghoQgIIA+AgALIAUoAswOBUEACyIAIAUoArwJIgMgACADSxsiAUEoSw0LAkAgAUUEQEEAIQEMAQtBACEGQQAhCgJAAkAgAUEBRwRAIAFBAXEgAUE+cSEHIAVBnAhqIQggBUGsDWohAANAIAAgACgCACIMIAgoAgBqIgIgCkEBcWoiETYCACAAQQRqIgogCigCACIXIAhBBGooAgBqIgogAiAMSSACIBFLcmoiAjYCACAKIBdJIAIgCklyIQogAEEIaiEAIAhBCGohCCAHIAZBAmoiBkcNAAtFDQELIAZBAnQiACAFQawNamoiAiACKAIAIgIgBUGcCGogAGooAgBqIgAgCmoiBjYCACAAIAJJIAAgBktyDQEMAgsgCkUNAQsgAUEoRg0LIAVBrA1qIAFBAnRqQQE2AgAgAUEBaiEBCyAFIAE2AswOIAEgDSABIA1LGyIIQSlPDQkgCEECdCEAAkADQCAABEBBfyAAQQRrIgAgBUHACWpqKAIAIgEgACAFQawNamooAgAiAkcgASACSxsiCEUNAQwCCwtBf0EAIAAgBUHACWoiAWogAUcbIQgLIAhBAk8EQCADRQRAQQAhAyAFQQA2ArwJDAYLIANBAWtB/////wNxIgBBAWoiAUEDcSEIIABBA0kEQCAFQZwIaiEAQgAhIAwFCyABQfz///8HcSEBIAVBnAhqIQBCACEgA0AgACAANQIAQgp+ICB8Ih8+AgAgAEEEaiICIAI1AgBCCn4gH0IgiHwiHz4CACAAQQhqIgIgAjUCAEIKfiAfQiCIfCIfPgIAIABBDGoiAiACNQIAQgp+IB9CIIh8Ih8+AgAgH0IgiCEgIABBEGohACABQQRrIgENAAsMBAsgDkEBaiEODAQLIAUvAZgIIQ4gBSgClAghBgwEC0GUnMAAQTZBnJ3AABCnAQALQf/BwABBG0G4wcAAEKcBAAsgCARAA0AgACAANQIAQgp+ICB8Ih8+AgAgAEEEaiEAIB9CIIghICAIQQFrIggNAAsLIB9CgICAgBBaBEAgA0EoRg0HIAVBnAhqIANBAnRqICA+AgAgA0EBaiEDCyAFIAM2ArwJC0EAIQwCQAJAIA7BIgAgD0giHkUEQCAOIA9rwSALIAAgD2sgC0kbIgYNAQtBACEGDAELIAVB5ApqIgEgBUHACWoiAEGgARAzGiAFIA02AoQMIAFBARA+IRcgBSgC4AohASAFQYgMaiIDIABBoAEQMxogBSABNgKoDSADQQIQPiEZIAUoAuAKIQEgBUGsDWoiAyAAQaABEDMaIAUgATYCzA4gA0EDED4hGiAFKAK8CSEDIAUoAuAKIQ0gBSgChAwhGyAFKAKoDSEcIAUoAswOIRBBACEHAkADQCAHIQQCQAJAAkACQCADQSlJBEAgBEEBaiEHIANBAnQhAUEAIQACfwJAAkACQANAIAAgAUYNASAFQZwIaiAAaiAAQQRqIQAoAgBFDQALIAMgECADIBBLGyIBQSlPDRIgAUECdCEAAkADQCAABEBBfyAAQQRrIgAgBUGsDWpqKAIAIgIgACAFQZwIamooAgAiCkcgAiAKSxsiCEUNAQwCCwtBf0EAIAVBrA1qIABqIBpHGyEIC0EAIAhBAk8NAxpBASEKQQAhDCABQQFHBEAgAUEBcSABQT5xIRQgBUGsDWohCCAFQZwIaiEAA0AgACAAKAIAIhUgCCgCAEF/c2oiAyAKQQFxaiIKNgIAIABBBGoiAiACKAIAIhYgCEEEaigCAEF/c2oiAiADIBVJIAMgCktyaiIDNgIAIAIgFkkgAiADS3IhCiAAQQhqIQAgCEEIaiEIIBQgDEECaiIMRw0AC0UNAgsgDEECdCIAIAVBnAhqaiIDIAMoAgAiAyAAIBpqKAIAQX9zaiIAIApqIgI2AgAgACADSSAAIAJLcg0CDBMLIAYgC0sNBCAEIAZHBEAgBUEQaiAEakEwIAYgBGsQQhoLIAVBEGohAAwLCyAKRQ0RCyAFIAE2ArwJIAEhA0EICyERIAMgHCADIBxLGyIBQSlPDQ4gAUECdCEAAkADQCAABEBBfyAAQQRrIgAgBUGIDGpqKAIAIgIgACAFQZwIamooAgAiCkcgAiAKSxsiCEUNAQwCCwtBf0EAIAVBiAxqIABqIBlHGyEICwJAIAhBAUsEQCADIQEMAQsCQCABRQ0AQQEhCkEAIQwCQCABQQFHBEAgAUEBcSABQT5xIRUgBUGIDGohCCAFQZwIaiEAA0AgACAAKAIAIhYgCCgCAEF/c2oiAyAKQQFxaiIKNgIAIABBBGoiAiACKAIAIh0gCEEEaigCAEF/c2oiAiADIBZJIAMgCktyaiIDNgIAIAIgHUkgAiADS3IhCiAAQQhqIQAgCEEIaiEIIBUgDEECaiIMRw0AC0UNAQsgDEECdCIAIAVBnAhqaiIDIAMoAgAiAyAAIBlqKAIAQX9zaiIAIApqIgI2AgAgACADSSAAIAJLcg0BDBILIApFDRELIAUgATYCvAkgEUEEciERCyABIBsgASAbSxsiAkEpTw0CIAJBAnQhAAJAA0AgAARAQX8gAEEEayIAIAVB5ApqaigCACIDIAAgBUGcCGpqKAIAIgpHIAMgCksbIghFDQEMAgsLQX9BACAFQeQKaiAAaiAXRxshCAsCQCAIQQFLBEAgASECDAELAkAgAkUNAEEBIQpBACEMAkAgAkEBRwRAIAJBAXEgAkE+cSEVIAVB5ApqIQggBUGcCGohAANAIAAgACgCACIWIAgoAgBBf3NqIgEgCkEBcWoiCjYCACAAQQRqIgMgAygCACIdIAhBBGooAgBBf3NqIgMgASAWSSABIApLcmoiATYCACADIB1JIAEgA0lyIQogAEEIaiEAIAhBCGohCCAVIAxBAmoiDEcNAAtFDQELIAxBAnQiACAFQZwIamoiASABKAIAIgEgACAXaigCAEF/c2oiACAKaiIDNgIAIAAgAUkgACADS3INAQwSCyAKRQ0RCyAFIAI2ArwJIBFBAmohEQsgAiANIAIgDUsbIgNBKU8NEyADQQJ0IQACQANAIAAEQEF/IABBBGsiACAFQcAJamooAgAiASAAIAVBnAhqaigCACIKRyABIApLGyIIRQ0BDAILC0F/QQAgACAFQcAJaiIBaiABRxshCAsCQCAIQQFLBEAgAiEDDAELAkAgA0UNAEEBIQpBACEMAkAgA0EBRwRAIANBAXEgA0E+cSEVIAVBwAlqIQggBUGcCGohAANAIAAgACgCACIWIAgoAgBBf3NqIgEgCkEBcWoiCjYCACAAQQRqIgIgAigCACIdIAhBBGooAgBBf3NqIgIgASAWSSABIApLcmoiATYCACACIB1JIAEgAklyIQogAEEIaiEAIAhBCGohCCAVIAxBAmoiDEcNAAtFDQELIAxBAnQiACAFQZwIamoiASABKAIAIgEgBUHACWogAGooAgBBf3NqIgAgCmoiAjYCACAAIAFJIAAgAktyDQEMEgsgCkUNEQsgBSADNgK8CSARQQFqIRELIAQgC0cEQCAFQRBqIARqIBFBMGo6AAAgA0UEQEEAIQMMBgsgA0EBa0H/////A3EiAEEBaiIBQQNxIQggAEEDSQRAIAVBnAhqIQBCACEfDAULIAFB/P///wdxIQEgBUGcCGohAEIAIR8DQCAAIAA1AgBCCn4gH3wiHz4CACAAQQRqIgIgAjUCAEIKfiAfQiCIfCIfPgIAIABBCGoiAiACNQIAQgp+IB9CIIh8Ih8+AgAgAEEMaiICIAI1AgBCCn4gH0IgiHwiID4CACAgQiCIIR8gAEEQaiEAIAFBBGsiAQ0ACwwECyALIAtB/JzAABB7AAsMEgsgBiALQYydwAAQgwIACyACQShBuMHAABCDAgALIAgEQANAIAAgADUCAEIKfiAffCIgPgIAIABBBGohACAgQiCIIR8gCEEBayIIDQALCyAgQoCAgIAQVA0AIANBKEYNAiAFQZwIaiADQQJ0aiAfPgIAIANBAWohAwsgBSADNgK8CSAGIAdHDQALQQEhDAwBCwwGCwJAAkAgDUEpSQRAIA1FBEBBACENDAMLIA1BAWtB/////wNxIgBBAWoiAUEDcSEIIABBA0kEQCAFQcAJaiEAQgAhHwwCCyABQfz///8HcSEBIAVBwAlqIQBCACEfA0AgACAANQIAQgV+IB98Ih8+AgAgAEEEaiICIAI1AgBCBX4gH0IgiHwiHz4CACAAQQhqIgIgAjUCAEIFfiAfQiCIfCIfPgIAIABBDGoiAiACNQIAQgV+IB9CIIh8IiA+AgAgIEIgiCEfIABBEGohACABQQRrIgENAAsMAQsgDUEoQbjBwAAQgwIACyAIBEADQCAAIAA1AgBCBX4gH3wiID4CACAAQQRqIQAgIEIgiCEfIAhBAWsiCA0ACwsgIEKAgICAEFQNACANQShGDQYgBUHACWogDUECdGogHz4CACANQQFqIQ0LIAUgDTYC4AogAyANIAMgDUsbIghBKU8NBCAIQQJ0IQACQAJAAkACQAJAA0AgAEUNAUF/IABBBGsiACAFQcAJamooAgAiASAAIAVBnAhqaigCACIDRyABIANLGyIBRQ0ACyABQf8BcUEBRw0EDAELIAwgACAFQcAJaiIBaiABRnFFDQMgBkEBayIAIAtPDQEgBUEQaiAAai0AAEEBcUUNAwsgBiALSw0BIAVBEGogBmpBfyEBIAYhAAJAA0AgACIDRQ0BIAFBAWohASAAQQFrIgAgBUEQaiICai0AAEE5Rg0ACyAAIAJqIgAgAC0AAEEBajoAACADIAZPDQMgAiADakEwIAEQQhoMAwsCf0ExIAZFDQAaIAVBMToAEEEwIAZBAUYNABogBUERakEwIAZBAWsQQhpBMAsgDkEBaiEOIB4gBiALT3INAjoAACAGQQFqIQYMAgsgACALQcycwAAQewALIAYgC0HcnMAAEIMCAAsgBiALSw0BIAVBEGohAAsgDyAOwUgEQCAFQQhqIAAgBiAOIBIgBUGsDWoQUCAFKAIMIQAgBSgCCAwDC0ECIQAgBUECOwGsDSASRQRAQQEhACAFQQE2ArQNIAVBm6vAADYCsA0gBUGsDWoMAwsgBSASNgK8DSAFQQA7AbgNIAVBAjYCtA0gBUGRq8AANgKwDSAFQawNagwCCyAGIAtB7JzAABCDAgALQQEhACAFQQE2ArQNIAVBm6vAADYCsA0gBUGsDWoLIQEgBSAANgKUDCAFIAE2ApAMIAUgEzYCjAwgBSAYNgKIDCAJIAVBiAxqEDogBUHQDmokAAwECyAIQShBuMHAABCDAgALQShBKEG4wcAAEHsACyABQShBuMHAABCDAgALQcjBwABBGkG4wcAAEKcBAAsPCwJ/IAEhDUEAIQEjAEHACmsiBCQAIDq9IR8CQAJAAkACQAJAAn8CfwJAAkACQAJAAkACQAJAAkACQAJAAkACfwJAAkAgOplEAAAAAAAA8H9hBH9BAwUgH0KAgICAgICA+P8AgyIiQoCAgICAgID4/wBRDQUgH0L/////////B4MiIUKAgICAgICACIQgH0IBhkL+////////D4MgH0I0iKdB/w9xIgAbIiNCAYMhICAiQgBSDQIgIVBFDQFBBAsiDkECayEHDAMLICBQIQ5CASEsIABBswhrDAELQoCAgICAgIAgICNCAYYgI0KAgICAgICACFEiARshI0ICQgEgARshLCAgUCEOQct3Qcx3IAEbIABqCyEBIA5BfnIiB0UNAQtBASEJQZOrwABBlKvAACAfQgBTIgAbQZOrwABBASAAGyADGyEYQQEgH0I/iKcgAxshEUEDIAcgB0EDTxtBAmsOAgMCAQsgBEEDNgKkCSAEQZWrwAA2AqAJIARBAjsBnAlBASEYQQEhCSAEQZwJagwKCyAEQQM2AqQJIARBmKvAADYCoAkgBEECOwGcCSAEQZwJagwJCyAjUA0BICMgLHwiKSAjVA0CIClCgICAgICAgIAgWg0DIAQgI0IBfSIgNwP4ByAEIAE7AYAIIAEgAUEgayABIClCgICAgBBUIgAbIgNBEGsgAyApQiCGICkgABsiH0KAgICAgIDAAFQiABsiA0EIayADIB9CEIYgHyAAGyIfQoCAgICAgICAAVQiABsiA0EEayADIB9CCIYgHyAAGyIfQoCAgICAgICAEFQiABsiA0ECayADIB9CBIYgHyAAGyIfQoCAgICAgICAwABUIgAbIB9CAoYgHyAAGyIkQgBZIgJrIgBrwSIDQQBIDQQgBEJ/IAOtIiKIIh8gIIM3A9AGIB8gIFQNCSAEIAE7AYAIIAQgIzcD+AcgBCAfICODNwPQBiAfICNUDQlBoH8gAGvBQdAAbEGwpwVqQc4QbSIDQdEATw0FIANBBHQiA0GwncAAaikDACIhQv////8PgyIfICMgIkI/gyInhiIlQiCIIi1+IiZCIIgiLiAhQiCIIiIgLX4iL3wgIiAlQv////8PgyIhfiIlQiCIIjR8ITAgJkL/////D4MgHyAhfkIgiHwgJUL/////D4N8IjVCgICAgAh8QiCIITFCAUEAIAAgA0G4ncAAai8BAGprQT9xrSIhhiIlQgF9ISggHyAgICeGIiBCIIgiJ34iJkL/////D4MgHyAgQv////8PgyIgfkIgiHwgICAifiIgQv////8Pg3xCgICAgAh8QiCIITIgIiAnfiEnICBCIIghMyAmQiCIITkgA0G6ncAAai8BACEAICIgJCACrYYiIEIgiCI2fiI3IB8gNn4iJEIgiCIqfCAiICBC/////w+DIiB+IiZCIIgiK3wgJEL/////D4MgHyAgfkIgiHwgJkL/////D4N8IjhCgICAgAh8QiCIfEIBfCImICGIpyIJQZDOAE8EQCAJQcCEPUkNByAJQYDC1y9PBEBBCEEJIAlBgJTr3ANJIgIbIQNBgMLXL0GAlOvcAyACGwwJC0EGQQcgCUGAreIESSICGyEDQcCEPUGAreIEIAIbDAgLIAlB5ABPBEBBAkEDIAlB6AdJIgIbIQNB5ABB6AcgAhsMCAtBCkEBIAlBCUsiAxsMBwsgBEEBNgKkCSAEQZurwAA2AqAJIARBAjsBnAkgBEGcCWoMBwtBx5vAAEEcQYCowAAQpwEAC0GUnMAAQTZB8KjAABCnAQALQZCowABBLUHAqMAAEKcBAAtBnJnAAEEdQdyZwAAQpwEACyADQdEAQfCnwAAQewALQQRBBSAJQaCNBkkiAhshA0GQzgBBoI0GIAIbCyECIDAgMXwhMCAmICiDISAgAyAAa0EBaiEMICYgJyA5fCAzfCAyfCIyfSIzQgF8IjEgKIMhJEEAIQcCQAJAAkACQAJAAkACQANAIARBC2ogB2ogCSACbiIAQTBqIgY6AAACQCAJIAAgAmxrIgmtICGGIicgIHwiHyAxWgRAIAMgB0cNASAHQQFqIQBCASEfA0AgHyEiIABBEUYNBSAEQQtqIABqICBCCn4iICAhiKdBMGoiAjoAACAAQQFqIQAgH0IKfiEfICRCCn4iJCAgICiDIiBYDQALIB8gJiAwfX4iISAffCEnICQgIH0gJVQiBw0GICEgH30iJiAgVg0DDAYLIAdBAWohACAxIB99IiQgAq0gIYYiIVQhAiAmIDB9IiZCAXwhJSAmQgF9IiYgH1ggISAkVnINBCAAIARqQQpqIQMgOEKAgICACHxCIIgiKCAqICt8fCA3fCEkQgAgLiA0fCA1QoCAgIAIfEIgiHwiLiAvfCAffH0hLyAuICAgIXwiH3wgIiAtIDZ9fnwgKn0gK30gKH0hIkICIDIgHyAnfHx9ISoDQCAfICd8IisgJlQgJCAvfCAiICd8WnJFBEAgICAnfCEfQQAhAgwGCyADIAZBAWsiBjoAACAgICF8ISAgJCAqfCEoICYgK1YEQCAhICJ8ISIgHyAhfCEfICQgIX0hJCAhIChYDQELCyAhIChWIQIgICAnfCEfDAQLIAdBAWohByACQQpJIAJBCm4hAkUNAAtB0KjAABC3AQALIAAgBGpBCmohAyAlIC4gNHwgNUKAgICACHxCIIh8IC98Qgp+ICogK3wgOEKAgICACHxCIIh8IDd8Qgp+fSAifnwhKCAmICB9ISogJCAgICV8fSErQgAhIQNAICAgJXwiHyAmVCAhICp8ICAgKHxackUEQEEAIQcMBAsgAyACQQFrIgI6AAAgISArfCItICVUIQcgHyAmWg0EICEgJX0hISAfISAgJSAtWA0ACwwDC0ERQRFB4KjAABB7AAsgHyAlWiACckUEQCAfICF8IiAgJVQgJSAffSAgICV9WnINAwsgH0ICVCAfIDNCA31Wcg0CDAMLICAhHwsCQCAHRSAfICdUcUUEQCAiQhR+IB9YDQEMAgsgHyAlfCIgICdUICcgH30gICAnfVpyICJCFH4gH1ZyDQELIB8gIkJYfiAkfFgNAQsgBCAjPgIcIARBAUECICNCgICAgBBUIgAbNgK8ASAEQQAgI0IgiKcgABs2AiAgBEEkakEAQZgBEEIaIARBATYCwAEgBEEBNgLgAiAEQcQBakEAQZwBEEIaIARBATYChAQgBCAsPgLkAiAEQegCakEAQZwBEEIaIARBjARqQQBBnAEQQhogBEEBNgKIBCAEQQE2AqgFIAGtwyApQgF9eX1CwprB6AR+QoChzaC0AnxCIIinIgPBIQwCQCABwUEATgRAIARBHGogAUH//wNxIgAQPhogBEHAAWogABA+GiAEQeQCaiAAED4aDAELIARBiARqQQAgAWvBED4aCwJAIAxBAEgEQCAEQRxqQQAgDGtB//8DcSIAECwgBEHAAWogABAsIARB5AJqIAAQLAwBCyAEQYgEaiADQf//AXEQLAsgBCgCvAEhACAEQZwJaiAEQRxqQaABEDMaIAQgADYCvAoCQCAEAn8CQAJAIAAgBCgChAQiAyAAIANLGyIBQShNBEACQCABRQRAQQAhAQwBC0EAIQZBACEJAkACQCABQQFHBEAgAUEBcSABQT5xIQggBEHkAmohByAEQZwJaiECA0AgAiAJIAIoAgAiDyAHKAIAaiIKaiIJNgIAIAJBBGoiCyALKAIAIhIgB0EEaigCAGoiCyAKIA9JIAkgCklyaiIKNgIAIAsgEkkgCiALSXIhCSACQQhqIQIgB0EIaiEHIAggBkECaiIGRw0AC0UNAQsgBkECdCICIARBnAlqaiIGIAYoAgAiBiAEQeQCaiACaigCAGoiAiAJaiIKNgIAIAIgBkkgAiAKS3INAQwCCyAJRQ0BCyABQShGDQkgBEGcCWogAUECdGpBATYCACABQQFqIQELIAQgATYCvAogBCgCqAUiBiABIAEgBkkbIgJBKU8NCSACQQJ0IQICQANAIAIEQEF/IAJBBGsiAiAEQZwJamooAgAiASACIARBiARqaigCACIKRyABIApLGyIHRQ0BDAILC0F/QQAgAiAEQZwJaiIBaiABRxshBwsgByAOSARAIAxBAWohDAwFCyAARQRAQQAhAAwDCyAAQQFrQf////8DcSIBQQFqIgJBA3EhByABQQNJBEAgBEEcaiECQgAhIAwCCyACQfz///8HcSEJIARBHGohAkIAISADQCACIAI1AgBCCn4gIHwiHz4CACACQQRqIgEgATUCAEIKfiAfQiCIfCIfPgIAIAJBCGoiASABNQIAQgp+IB9CIIh8Ih8+AgAgAkEMaiIBIAE1AgBCCn4gH0IgiHwiIT4CACAhQiCIISAgAkEQaiECIAlBBGsiCQ0ACwwBCwwJCyAHBEADQCACIAI1AgBCCn4gIHwiIT4CACACQQRqIQIgIUIgiCEgIAdBAWsiBw0ACwsgIUKAgICAEFQNACAAQShGDQYgBEEcaiAAQQJ0aiAgPgIAIABBAWohAAsgBCAANgK8AQJAIAQoAuACIgBBKUkEQEEAIQFBACAARQ0CGiAAQQFrQf////8DcSICQQFqIgpBA3EhByACQQNJBEAgBEHAAWohAkIAISAMAgsgCkH8////B3EhCSAEQcABaiECQgAhIANAIAIgAjUCAEIKfiAgfCIfPgIAIAJBBGoiCiAKNQIAQgp+IB9CIIh8Ih8+AgAgAkEIaiIKIAo1AgBCCn4gH0IgiHwiHz4CACACQQxqIgogCjUCAEIKfiAfQiCIfCIhPgIAICFCIIghICACQRBqIQIgCUEEayIJDQALDAELDAsLIAcEQANAIAIgAjUCAEIKfiAgfCIhPgIAIAJBBGohAiAhQiCIISAgB0EBayIHDQALCyAAICFCgICAgBBUDQAaIABBKEYNBSAEQcABaiAAQQJ0aiAgPgIAIABBAWoLNgLgAgJAIANFDQAgA0EBa0H/////A3EiAEEBaiIBQQNxIQcCQCAAQQNJBEAgBEHkAmohAkIAISAMAQsgAUH8////B3EhCSAEQeQCaiECQgAhIANAIAIgAjUCAEIKfiAgfCIfPgIAIAJBBGoiACAANQIAQgp+IB9CIIh8Ih8+AgAgAkEIaiIAIAA1AgBCCn4gH0IgiHwiHz4CACACQQxqIgAgADUCAEIKfiAfQiCIfCIhPgIAICFCIIghICACQRBqIQIgCUEEayIJDQALCyAHBEADQCACIAI1AgBCCn4gIHwiIT4CACACQQRqIQIgIUIgiCEgIAdBAWsiBw0ACwsgIUKAgICAEFQEQCADIQEMAQsgA0EoRg0FIARB5AJqIANBAnRqICA+AgAgA0EBaiEBCyAEIAE2AoQECyAEQawFaiIBIARBiARqIgBBoAEQMxogBCAGNgLMBiABQQEQPiEXIAQoAqgFIQEgBEHQBmoiAyAAQaABEDMaIAQgATYC8AcgA0ECED4hGSAEKAKoBSEBIARB+AdqIgMgAEGgARAzGiAEIAE2ApgJIANBAxA+IRoCQCAEKAK8ASIGIAQoApgJIhIgBiASSxsiAUEoTQRAIAQoAqgFIQ8gBCgCzAYhGyAEKALwByEcQQAhAANAIAAhCiABQQJ0IQICQANAIAIEQEF/IAJBBGsiAiAEQfgHamooAgAiACACIARBHGpqKAIAIgNHIAAgA0sbIgdFDQEMAgsLQX9BACAEQfgHaiACaiAaRxshBwtBACEFIAQCfwJAAkACQAJAIAdBAU0EQAJAIAFFDQBBASEJQQAhBgJAIAFBAUcEQCABQQFxIAFBPnEhBSAEQfgHaiEHIARBHGohAgNAIAIgCSACKAIAIgggBygCAEF/c2oiAGoiCTYCACACQQRqIgMgAygCACIQIAdBBGooAgBBf3NqIgMgACAISSAAIAlLcmoiADYCACADIBBJIAAgA0lyIQkgAkEIaiECIAdBCGohByAFIAZBAmoiBkcNAAtFDQELIAZBAnQiACAEQRxqaiIDIAMoAgAiAyAAIBpqKAIAQX9zaiIAIAlqIgI2AgAgACADSSAAIAJLcg0BDBELIAlFDRALIAQgATYCvAFBCCEFIAEhBgsgBiAcIAYgHEsbIgNBKUkEQCADQQJ0IQICQANAIAIEQEF/IAJBBGsiAiAEQdAGamooAgAiACACIARBHGpqKAIAIgFHIAAgAUsbIgdFDQEMAgsLQX9BACAEQdAGaiACaiAZRxshBwsCQCAHQQFLBEAgBiEDDAELAkAgA0UNAEEBIQlBACEGAkAgA0EBRwRAIANBAXEgA0E+cSEIIARB0AZqIQcgBEEcaiECA0AgAiAJIAIoAgAiECAHKAIAQX9zaiIAaiIJNgIAIAJBBGoiASABKAIAIhMgB0EEaigCAEF/c2oiASAAIBBJIAAgCUtyaiIANgIAIAEgE0kgACABSXIhCSACQQhqIQIgB0EIaiEHIAggBkECaiIGRw0AC0UNAQsgBkECdCIAIARBHGpqIgEgASgCACIBIAAgGWooAgBBf3NqIgAgCWoiAjYCACAAIAFJIAAgAktyDQEMEgsgCUUNEQsgBCADNgK8ASAFQQRyIQULIAMgGyADIBtLGyIAQSlPDREgAEECdCECAkADQCACBEBBfyACQQRrIgIgBEGsBWpqKAIAIgEgAiAEQRxqaigCACIGRyABIAZLGyIHRQ0BDAILC0F/QQAgBEGsBWogAmogF0cbIQcLAkAgB0EBSwRAIAMhAAwBCwJAIABFDQBBASEJQQAhBgJAIABBAUcEQCAAQQFxIABBPnEhCCAEQawFaiEHIARBHGohAgNAIAIgCSACKAIAIhAgBygCAEF/c2oiAWoiCTYCACACQQRqIgMgAygCACITIAdBBGooAgBBf3NqIgMgASAQSSABIAlLcmoiATYCACADIBNJIAEgA0lyIQkgAkEIaiECIAdBCGohByAIIAZBAmoiBkcNAAtFDQELIAZBAnQiASAEQRxqaiIDIAMoAgAiAyABIBdqKAIAQX9zaiIBIAlqIgI2AgAgASADSSABIAJLcg0BDBILIAlFDRELIAQgADYCvAEgBUECaiEFCyAAIA8gACAPSxsiAUEpTw0OIAFBAnQhAgJAA0AgAgRAQX8gAkEEayICIARBiARqaigCACIDIAIgBEEcamooAgAiBkcgAyAGSxsiB0UNAQwCCwtBf0EAIAIgBEGIBGoiA2ogA0cbIQcLAkAgB0EBSwRAIAAhAQwBCwJAIAFFDQBBASEJQQAhBgJAIAFBAUcEQCABQQFxIAFBPnEhCCAEQYgEaiEHIARBHGohAgNAIAIgCSACKAIAIhAgBygCAEF/c2oiAGoiCTYCACACQQRqIgMgAygCACITIAdBBGooAgBBf3NqIgMgACAQSSAAIAlLcmoiADYCACADIBNJIAAgA0lyIQkgAkEIaiECIAdBCGohByAIIAZBAmoiBkcNAAtFDQELIAZBAnQiACAEQRxqaiIDIAMoAgAiAyAEQYgEaiAAaigCAEF/c2oiACAJaiICNgIAIAAgA0kgACACS3INAQwSCyAJRQ0RCyAEIAE2ArwBIAVBAWohBQsgCkERRg0BIARBC2ogCmogBUEwajoAACABIAQoAuACIgsgASALSxsiAkEpTw0NIApBAWohACACQQJ0IQICQANAIAIEQEF/IAJBBGsiAiAEQcABamooAgAiAyACIARBHGpqKAIAIgZHIAMgBksbIgNFDQEMAgsLQX9BACACIARBwAFqIgNqIANHGyEDCyAEQZwJaiAEQRxqQaABEDMaIAQgATYCvAogASAEKAKEBCIIIAEgCEsbIgVBKEsNAgJAIAVFBEBBACEFDAELQQAhBkEAIQkCQAJAIAVBAUcEQCAFQQFxIAVBPnEhHiAEQeQCaiEHIARBnAlqIQIDQCACIAkgAigCACIUIAcoAgBqIhBqIhU2AgAgAkEEaiIJIAkoAgAiFiAHQQRqKAIAaiIJIBAgFEkgECAVS3JqIhA2AgAgCSAWSSAJIBBLciEJIAJBCGohAiAHQQhqIQcgHiAGQQJqIgZHDQALRQ0BCyAGQQJ0IgIgBEGcCWpqIgYgBigCACIGIARB5AJqIAJqKAIAaiICIAlqIgc2AgAgAiAGSSACIAdLcg0BDAILIAlFDQELIAVBKEYNDSAEQZwJaiAFQQJ0akEBNgIAIAVBAWohBQsgBCAFNgK8CiAPIAUgBSAPSRsiAkEpTw0NIAJBAnQhAgJAA0AgAgRAQX8gAkEEayICIARBnAlqaigCACIGIAIgBEGIBGpqKAIAIgdHIAYgB0sbIgdFDQEMAgsLQX9BACACIARBnAlqIgZqIAZHGyEHCwJAIAMgDkgiA0UgByAOTnFFBEAgByAOSA0BDAoLQQAhA0EAIAFFDQYaIAFBAWtB/////wNxIgJBAWoiBkEDcSEHIAJBA0kEQCAEQRxqIQJCACEgDAYLIAZB/P///wdxIQkgBEEcaiECQgAhIANAIAIgAjUCAEIKfiAgfCIfPgIAIAJBBGoiBiAGNQIAQgp+IB9CIIh8Ih8+AgAgAkEIaiIGIAY1AgBCCn4gH0IgiHwiHz4CACACQQxqIgYgBjUCAEIKfiAfQiCIfCIhPgIAICFCIIghICACQRBqIQIgCUEEayIJDQALDAULIANFDQMgBEEcakEBED4aIAQoArwBIgEgBCgCqAUiAyABIANLGyICQSlPDQ0gAkECdCECIARBGGohAQJAA0AgAgRAIAEgAmohA0F/IAJBBGsiAiAEQYgEamooAgAiBiADKAIAIgNHIAMgBkkbIgdFDQEMAgsLQX9BACACIARBiARqIgFqIAFHGyEHCyAHQQJPDQgMAwsMEQtBEUERQeSbwAAQewALIAVBKEG4wcAAEIMCAAsgBEELaiAAaiEGQX8hCSAAIQICQANAIAIiAUUNASAJQQFqIQkgAkEBayICIARBC2oiA2otAABBOUYNAAsgAiADaiICIAItAABBAWo6AAAgASAKSw0FIAEgA2pBMCAJEEIaDAULIARBMToACwJAIAoEQCAEQQxqQTAgChBCGiAKQQ9LDQELIAZBMDoAACAMQQFqIQwgCkECaiEADAYLIABBEUH0m8AAEHsACyAHBEADQCACIAI1AgBCCn4gIHwiIT4CACACQQRqIQIgIUIgiCEgIAdBAWsiBw0ACwsgASAhQoCAgIAQVA0AGiABQShGDQcgBEEcaiABQQJ0aiAgPgIAIAFBAWoLIgY2ArwBAkAgC0UNACALQQFrQf////8DcSIBQQFqIgNBA3EhBwJAIAFBA0kEQCAEQcABaiECQgAhIAwBCyADQfz///8HcSEJIARBwAFqIQJCACEgA0AgAiACNQIAQgp+ICB8Ih8+AgAgAkEEaiIBIAE1AgBCCn4gH0IgiHwiHz4CACACQQhqIgEgATUCAEIKfiAfQiCIfCIfPgIAIAJBDGoiASABNQIAQgp+IB9CIIh8IiE+AgAgIUIgiCEgIAJBEGohAiAJQQRrIgkNAAsLIAcEQANAIAIgAjUCAEIKfiAgfCIhPgIAIAJBBGohAiAhQiCIISAgB0EBayIHDQALCyAhQoCAgIAQVARAIAshAwwBCyALQShGDQcgBEHAAWogC0ECdGogID4CACALQQFqIQMLIAQgAzYC4AICQCAIRQRAQQAhCAwBCyAIQQFrQf////8DcSIBQQFqIgNBA3EhBwJAIAFBA0kEQCAEQeQCaiECQgAhIAwBCyADQfz///8HcSEJIARB5AJqIQJCACEgA0AgAiACNQIAQgp+ICB8Ih8+AgAgAkEEaiIBIAE1AgBCCn4gH0IgiHwiHz4CACACQQhqIgEgATUCAEIKfiAfQiCIfCIfPgIAIAJBDGoiASABNQIAQgp+IB9CIIh8IiE+AgAgIUIgiCEgIAJBEGohAiAJQQRrIgkNAAsLIAcEQANAIAIgAjUCAEIKfiAgfCIhPgIAIAJBBGohAiAhQiCIISAgB0EBayIHDQALCyAhQoCAgIAQVA0AIAhBKEYNByAEQeQCaiAIQQJ0aiAgPgIAIAhBAWohCAsgBCAINgKEBCAGIBIgBiASSxsiAUEoTQ0ACwsMBgsgCkERSQ0AIABBEUGEnMAAEIMCAAsgBCAEQQtqIAAgDEEAIARBnAlqEFAgBCgCBCEJIAQoAgALIQAgBCAJNgKECCAEIAA2AoAIIAQgETYC/AcgBCAYNgL4ByANIARB+AdqEDogBEHACmokAAwFCyAEQQA2ApwJIwBBEGsiASQAIAEgBEH4B2o2AgwgASAEQdAGajYCCCMAQfAAayIAJAAgAEHUrMAANgIMIAAgAUEIajYCCCAAQdSswAA2AhQgACABQQxqNgIQIABBAjYCHCAAQeSswAA2AhgCQCAEQZwJaiIBKAIARQRAIABBAzYCXCAAQZitwAA2AlggAEIDNwJkIAAgAEEQaq1CgICAgOABhDcDSCAAIABBCGqtQoCAgIDgAYQ3A0AMAQsgAEEwaiABQRBqKQIANwMAIABBKGogAUEIaikCADcDACAAIAEpAgA3AyAgAEEENgJcIABBzK3AADYCWCAAQgQ3AmQgACAAQRBqrUKAgICA4AGENwNQIAAgAEEIaq1CgICAgOABhDcDSCAAIABBIGqtQoCAgIDwAYQ3A0ALIAAgAEEYaq1CgICAgNABhDcDOCAAIABBOGo2AmAgAEHYAGpB7JnAABC9AQALQShBKEG4wcAAEHsACyACQShBuMHAABCDAgALIAFBKEG4wcAAEIMCAAtByMHAAEEaQbjBwAAQpwEACw8LIABBKEG4wcAAEIMCAAsgA0EoQbjBwAAQgwIACy8AAkAgAWlBAUdBgICAgHggAWsgAElyDQAgAARAIAEgABD/ASIBRQ0BCyABDwsACzcBAX8gACABKAIIIgMgASgCAEkEfyABIANBAUEBIAIQZSABKAIIBSADCzYCBCAAIAEoAgQ2AgALMQECfyMAQRBrIgEkACABQQhqIAAQXCABKAIIIQAgASgCDCABQRBqJABBgIDEACAAGwsMACAAQaSIwAAQmQILDAAgAEG0wsAAEJkCC4gFAQl/IwBBEGsiBiQAEEgiBSABJgEjAEHQAGsiBCQAIARBEGogABCMASAEKAIQIQkgBEFAayAFEDkCfyADRAAAAAAAAAAAZiIKIANEAAAAAAAA8EFjcQRAIAOrDAELQQALIQsCfyACRAAAAAAAAPBBYyACRAAAAAAAAAAAZnEEQCACqwwBC0EACyEMIAQoAkQhCAJAIAQoAkAiAEGAgICAeEcEQCAEIAQoAkgiBTYCMCAEIAg2AiwgBCAANgIoIARBCGogBUH/////AHEiB0EEQRBBoI7AABCNASAEQQA2AjwgBCAEKQMINwI0IARBNGogBxDEASAEKAI8IQAgBQRAIAAgB2ogBCgCOCAAQQR0aiEAA0AgBEFAayAIEIEBIABBCGogBEHIAGopAgA3AgAgACAEKQJANwIAIABBEGohACAIQRBqIQggB0EBayIHDQALIQALIAQgADYCPCAEKAI4IQUgBEF/IAtBACAKGyADRAAA4P///+9BZBs7AUYgBCADRAAAEAAAAPBBYjsBRCAEQX8gDEEAIAJEAAAAAAAAAABmGyACRAAA4P///+9BZBs7AUIgBCACRAAAEAAAAPBBYjsBQCAEQRxqIAkgBSAFIABBBHRqIARBQGsQJyAEQTRqEIkBIARBKGoQqAEMAQsgBCAINgIgIARBgYCAgHg2AhwLIAQoAhQgBCgCGBCBAiAEQUBrIARBHGoQhQEgBCgCRCEAIAYCfyAEKAJABEBBACEHQQAhBUEBDAELIAQoAkghBSAAIQdBACEAQQALNgIMIAYgADYCCCAGIAU2AgQgBiAHNgIAIARB0ABqJAAgBigCACAGKAIEIAYoAgggBigCDCAGQRBqJAALNgEBfyMAQRBrIgIkACABIAJBD2pB2IHAABBDIQEgAEGVgICAeDYCACAAIAE2AgQgAkEQaiQACy0AAkAgA2lBAUdBgICAgHggA2sgAUlyRQRAIAAgASADIAIQMCIADQELAAsgAAvLBQEJfyMAQRBrIgYkABBIIgQgACYBIwBB4ABrIgMkACADQSxqIAQQOQJ/IAJEAAAAAAAAAABmIgggAkQAAAAAAADwQWNxBEAgAqsMAQtBAAshBQJ/IAFEAAAAAAAA8EFjIAFEAAAAAAAAAABmcQRAIAGrDAELQQALIQsgAygCMCEHAkAgAygCLCIEQYCAgIB4RwRAQX8gBUEAIAgbIAJEAADg////70FkGyEJIAMgAygCNCIFNgIoIAMgBzYCJCADIAQ2AiAgA0EIaiAFQf////8AcSIEQQRBEEGgjsAAEI0BIANBADYCVCADIAMpAwg3AkwgA0HMAGogBBDEASADKAJUIQogAyAFBH8gBCAKaiADKAJQIApBBHRqIQUDQCADQSxqIAcQgQEgBUEIaiADQTRqKQIANwIAIAUgAykCLDcCACAFQRBqIQUgB0EQaiEHIARBAWsiBA0ACwUgCgs2AlRBEBDUASIEIAk2AgwgBCACRAAAEAAAAPBBYjYCCCAEQX8gC0EAIAFEAAAAAAAAAABmGyABRAAA4P///+9BZBs2AgQgBCABRAAAEAAAAPBBYjYCACADQfiBwAA2AkQgAyAENgJAIANBAToASCADQQA7ATwgA0EAOwE4IANBADYCNCADQoCAgIDAADcCLCADKAJQIQkgAygCVCEIIANB2ABqIgUgBBDFASADQRRqIANBLGoiBCAJIAkgCEEEdGogBRAnIAQQlwEgA0HMAGoQiQEgA0EgahCoAQwBCyADIAc2AhggA0GBgICAeDYCFAsgA0EsaiADQRRqEIUBIAMoAjAhBQJ/IAMoAiwEQEEBIQdBACEEQQAMAQtBACEHIAUhBEEAIQUgAygCNAshCCAGIAc2AgwgBiAFNgIIIAYgCDYCBCAGIAQ2AgAgA0HgAGokACAGKAIAIAYoAgQgBigCCCAGKAIMIAZBEGokAAsqAANAIAEEQCAAKAIAIABBBGooAgAQhwIgAUEBayEBIABBEGohAAwBCwsL9AECAn8BfiMAQRBrIgIkACACQQE7AQwgAiABNgIIIAIgADYCBCMAQRBrIgEkACACQQRqIgApAgAhBCABIAA2AgwgASAENwIEIwBBEGsiACQAIAFBBGoiASgCACICKAIMIQMCQAJAAkACQCACKAIEDgIAAQILIAMNAUEBIQJBACEDDAILIAMNACACKAIAIgIoAgQhAyACKAIAIQIMAQsgAEGAgICAeDYCACAAIAE2AgwgASgCCCIBLQAIIQIgAS0ACRogAEEfIAIQeQALIAAgAzYCBCAAIAI2AgAgASgCCCIBLQAIIQIgAS0ACRogAEEgIAIQeQALlgMBA38jAEEQayIEJAAjAEFAaiIDJAAgA0EIaiAAEIwBIAMoAgghACADQX8CfyACRAAAAAAAAAAAZiIFIAJEAAAAAAAA8EFjcQRAIAKrDAELQQALQQAgBRsgAkQAAOD////vQWQbOwEaIAMgAkQAABAAAADwQWI7ARggA0F/An8gAUQAAAAAAAAAAGYiBSABRAAAAAAAAPBBY3EEQCABqwwBC0EAC0EAIAUbIAFEAADg////70FkGzsBFiADIAFEAAAQAAAA8EFiOwEUIANBHGogACADQRRqEC4CQAJAIAMoAiQiAARAIANBKGoiBUHWl8AAQQQQkwEgAEEBayIARQ0BIANBNGogABCKASAFIAMoAjgiACADKAI8EJwBIAMoAjQgABCHAgwBCyADQYCAgIB4NgIoDAELIANBKGpB2pfAAEEHEJwBCyADQRxqENgBIAMoAgwgAygCEBCBAiADIANBKGoQjwEgAygCBCEAIAQgAygCADYCACAEIAA2AgQgA0FAayQAIAQoAgAgBCgCBCAEQRBqJAALJwAgAgRAQdnBwQAtAAAaIAIgARDXASEBCyAAIAI2AgQgACABNgIACy0BAX5B4MHBACkDACEBQeDBwQBCADcDACAAIAFCIIg+AgQgACABp0EBRjYCAAspACAAIAAtAAQgAUEuRnI6AAQgACgCACIAKAIcIAEgACgCICgCEBEBAAuYAQEEfyMAQRBrIgMkACMAQTBrIgIkACACQRBqIAAgARCgASACQSRqIAIoAhAiACACKAIUIgEQUyACQRhqIgQgAigCKCIFIAIoAiwQkgEgAigCJCAFEOIBIAEgABCHAiACQQhqIAQQkQEgAigCDCEAIAMgAigCCDYCACADIAA2AgQgAkEwaiQAIAMoAgAgAygCBCADQRBqJAALKQECfyABQQAQ2wEhAiABQQEQ2wEhAyABEPABIAAgAzYCBCAAIAI2AgALJAEBfyABIAAoAgAgACgCCCICa0sEQCAAIAIgAUEEQRAQnQELCyoAIAAgASgCDDsBBiAAIAEoAgg7AQQgACABKAIEOwECIAAgASgCADsBAAskACAAIAAoAgBBgICAgHhGQQJ0aiIAKAIAIABBBGooAgAQhwILHwECfiAAKQMAIgIgAkI/hyIDhSADfSACQgBZIAEQTgslACAARQRAQajNwABBMhCIAgALIAAgAiADIAQgBSABKAIQEREAC1MBAn8gASADRgR/QQAhAwJAIAFFDQADQCAALQAAIgQgAi0AACIFRgRAIABBAWohACACQQFqIQIgAUEBayIBDQEMAgsLIAQgBWshAwsgAwVBAQtFC30AIAEgA0cEQCMAQTBrIgAkACAAIAE2AgQgACADNgIAIABBAzYCDCAAQYjEwAA2AgggAEICNwIUIAAgAEEEaq1CgICAgLABhDcDKCAAIACtQoCAgICwAYQ3AyAgACAAQSBqNgIQIABBCGpBuJLAABC9AQALIAAgAiABEDMaCyMAIABFBEBBqM3AAEEyEIgCAAsgACACIAMgBCABKAIQEQgACyMAIABFBEBBqM3AAEEyEIgCAAsgACACIAMgBCABKAIQESQACyMAIABFBEBBqM3AAEEyEIgCAAsgACACIAMgBCABKAIQESYACyMAIABFBEBBqM3AAEEyEIgCAAsgACACIAMgBCABKAIQEQsACyMAIABFBEBBqM3AAEEyEIgCAAsgACACIAMgBCABKAIQESgACx4A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AgAAFQAAAPcBEABdAAAA+wEAABEAAAD3ARAAXQAAAP0BAAAVAAAATWFwQWNjZXNzOjpuZXh0X3ZhbHVlIGNhbGxlZCBiZWZvcmUgbmV4dF9rZXlWOlwuY2FjaGVcY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmXHNlcmRlLTEuMC4yMTlcc3JjXGRlXHZhbHVlLnJzAMACEABbAAAAZgUAABsAAABkYXRhIGRpZCBub3QgbWF0Y2ggYW55IHZhcmlhbnQgb2YgdW50YWdnZWQgZW51bSBXYXNtVGV4dEl0ZW1maWVsZCBpZGVudGlmaWVydGV4dGhhbmdpbmdJbmRlbnRzdHJ1Y3QgdmFyaWFudCBXYXNtVGV4dEl0ZW06OkhhbmdpbmdUZXh0YXR0ZW1wdGVkIHRvIHRha2Ugb3duZXJzaGlwIG9mIFJ1c3QgdmFsdWUgd2hpbGUgaXQgd2FzIGJvcnJvd2VkRXJyb3IAAAArAAAADAAAAAQAAAAsAAAALQAAAC4AAABjYXBhY2l0eSBvdmVyZmxvdwAAABAEEAARAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5ycywEEAAcAAAAKAIAABEAAABsaWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMAWAQQABsAAADqAQAAFwBBjInAAAuQGQEAAAAvAAAAYSBmb3JtYXR0aW5nIHRyYWl0IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHdoZW4gdGhlIHVuZGVybHlpbmcgc3RyZWFtIGRpZCBub3RsaWJyYXJ5L2FsbG9jL3NyYy9mbXQucnMAAOoEEAAYAAAAigIAAA4AAABYBBAAGwAAAI0FAAAbAAAAVjpcLmNhY2hlXGNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlx2dGUtMC4xMy4xXHNyY1xsaWIucnMAJAUQAFMAAADlAAAAIQAAACQFEABTAAAA4AAAADQAAAAkBRAAUwAAAHkAAAAcAAAAJAUQAFMAAABOAQAAFQAAACQFEABTAAAAMAEAACQAAAAkBRAAUwAAADIBAAAZAAAAJAUQAFMAAAAVAQAAKAAAACQFEABTAAAAFwEAAB0AAAAkBRAAUwAAAB0BAAAiAAAAVjpcLmNhY2hlXGNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlx2dGUtMC4xMy4xXHNyY1xwYXJhbXMucnMAAAgGEABWAAAAPgAAAAkAAAAIBhAAVgAAAD8AAAAJAAAACAYQAFYAAABHAAAACQAAAAgGEABWAAAASAAAAAkAAABDOlxVc2Vyc1xkYXZpZFwucnVzdHVwXHRvb2xjaGFpbnNcc3RhYmxlLXg4Nl82NC1wYy13aW5kb3dzLW1zdmNcbGliL3J1c3RsaWIvc3JjL3J1c3RcbGlicmFyeS9jb3JlL3NyYy9pdGVyL3RyYWl0cy9pdGVyYXRvci5ycwAAAKAGEAB9AAAAswcAAAkAAAAAAAAAAQAAAAEAAAAwAAAAY2FsbGVkIGBSZXN1bHQ6OnVud3JhcCgpYCBvbiBhbiBgRXJyYCB2YWx1ZUM6XFVzZXJzXGRhdmlkXC5ydXN0dXBcdG9vbGNoYWluc1xzdGFibGUteDg2XzY0LXBjLXdpbmRvd3MtbXN2Y1xsaWIvcnVzdGxpYi9zcmMvcnVzdFxsaWJyYXJ5L2FsbG9jL3NyYy9zbGljZS5ycwAAawcQAG8AAAChAAAAGQAAAEM6XFVzZXJzXGRhdmlkXC5ydXN0dXBcdG9vbGNoYWluc1xzdGFibGUteDg2XzY0LXBjLXdpbmRvd3MtbXN2Y1xsaWIvcnVzdGxpYi9zcmMvcnVzdFxsaWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzYXR0ZW1wdCB0byBqb2luIGludG8gY29sbGVjdGlvbiB3aXRoIGxlbiA+IHVzaXplOjpNQVhDOlxVc2Vyc1xkYXZpZFwucnVzdHVwXHRvb2xjaGFpbnNcc3RhYmxlLXg4Nl82NC1wYy13aW5kb3dzLW1zdmNcbGliL3J1c3RsaWIvc3JjL3J1c3RcbGlicmFyeS9hbGxvYy9zcmMvc3RyLnJzAACVCBAAbQAAAJoAAAAKAAAAlQgQAG0AAACdAAAAFgAAAG1pZCA+IGxlbgAAACQJEAAJAAAAlQgQAG0AAACxAAAAFgAAAGsHEABvAAAAOAIAABcAAABDOlxVc2Vyc1xkYXZpZFwucnVzdHVwXHRvb2xjaGFpbnNcc3RhYmxlLXg4Nl82NC1wYy13aW5kb3dzLW1zdmNcbGliL3J1c3RsaWIvc3JjL3J1c3RcbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzWAkQAHAAAACNBQAAGwAAAKRcEABxAAAAKAIAABEAAABpbnN1ZmZpY2llbnQgY2FwYWNpdHkAAADoCRAAFQAAAENhcGFjaXR5RXJyb3I6IAAIChAADwAAAOwHEAB0AAAAzQEAADcAAABWOlwuY2FjaGVcY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmXGNvbnNvbGVfc3RhdGljX3RleHQtMC44LjNcc3JjXGFuc2kucnMAMAoQAGMAAAATAAAAHQAAABtbMUMwChAAYwAAAFYAAAATAAAAVjpcLmNhY2hlXGNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlxjb25zb2xlX3N0YXRpY190ZXh0LTAuOC4zXHNyY1x3b3JkLnJzALgKEABjAAAAJQAAACQAAAC4ChAAYwAAADcAAAAhAAAAuAoQAGMAAAAtAAAALQAAABtbQQBMCxAAAgAAAE4LEAABAAAAQgAAAEwLEAACAAAAYAsQAAEAAABWOlwuY2FjaGVcY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmXGNvbnNvbGVfc3RhdGljX3RleHQtMC44LjNcc3JjXGxpYi5ycxtbMEcbWzJLG1tKDQobW0sAAHQLEABiAAAARAEAAA8AAAB0CxAAYgAAADoBAAATAAAAdAsQAGIAAAAyAQAADwAAAHQLEABiAAAASQEAAA0AAAB0CxAAYgAAAM0BAAANAAAAdAsQAGIAAACyAQAAFQAAACAAAAB0CxAAYgAAAJ4BAAAeAAAAdAsQAGIAAACjAQAAHQAAAHQLEABiAAAAnAEAACwAAAB0CxAAYgAAAMYBAAARAAAAdAsQAGIAAADRAQAADQAAAGFzc2VydGlvbiBmYWlsZWQ6IGVkZWx0YSA+PSAwbGlicmFyeS9jb3JlL3NyYy9udW0vZGl5X2Zsb2F0LnJzAAC5DBAAIQAAAEwAAAAJAAAAuQwQACEAAABOAAAACQAAAMFv8oYjAAAAge+shVtBbS3uBAAAAR9qv2TtOG7tl6fa9Pk/6QNPGAABPpUuCZnfA/04FQ8v5HQj7PXP0wjcBMTasM28GX8zpgMmH+lOAgAAAXwumFuH075yn9nYhy8VEsZQ3mtwbkrPD9iV1W5xsiawZsatJDYVHVrTQjwOVP9jwHNVzBfv+WXyKLxV98fcgNztbvTO79xf91MFAGxpYnJhcnkvY29yZS9zcmMvbnVtL2ZsdDJkZWMvc3RyYXRlZ3kvZHJhZ29uLnJzYXNzZXJ0aW9uIGZhaWxlZDogZC5tYW50ID4gMACYDRAALwAAAMIAAAAJAAAAmA0QAC8AAAD7AAAADQAAAJgNEAAvAAAAAgEAADYAAABhc3NlcnRpb24gZmFpbGVkOiBkLm1hbnQuY2hlY2tlZF9hZGQoZC5wbHVzKS5pc19zb21lKCkAAJgNEAAvAAAAcgEAACQAAACYDRAALwAAAHcBAABXAAAAmA0QAC8AAACEAQAANgAAAJgNEAAvAAAAZgEAAA0AAACYDRAALwAAAEwBAAAiAAAAmA0QAC8AAAAOAQAABQAAAAAAAADfRRo9A88a5sH7zP4AAAAAysaaxxf+cKvc+9T+AAAAAE/cvL78sXf/9vvc/gAAAAAM1mtB75FWvhH85P4AAAAAPPx/kK0f0I0s/Oz+AAAAAIOaVTEoXFHTRvz0/gAAAAC1yaatj6xxnWH8/P4AAAAAy4vuI3cinOp7/AT/AAAAAG1TeECRScyulvwM/wAAAABXzrZdeRI8grH8FP8AAAAAN1b7TTaUEMLL/Bz/AAAAAE+YSDhv6paQ5vwk/wAAAADHOoIly4V01wD9LP8AAAAA9Je/l83PhqAb/TT/AAAAAOWsKheYCjTvNf08/wAAAACOsjUq+2c4slD9RP8AAAAAOz/G0t/UyIRr/Uz/AAAAALrN0xonRN3Fhf1U/wAAAACWySW7zp9rk6D9XP8AAAAAhKVifSRsrNu6/WT/AAAAAPbaXw1YZquj1f1s/wAAAAAm8cPek/ji8+/9dP8AAAAAuID/qqittbUK/nz/AAAAAItKfGwFX2KHJf6E/wAAAABTMME0YP+8yT/+jP8AAAAAVSa6kYyFTpZa/pT/AAAAAL1+KXAkd/nfdP6c/wAAAACPuOW4n73fpo/+pP8AAAAAlH10iM9fqfip/qz/AAAAAM+bqI+TcES5xP60/wAAAABrFQ+/+PAIit/+vP8AAAAAtjExZVUlsM35/sT/AAAAAKx/e9DG4j+ZFP/M/wAAAAAGOysqxBBc5C7/1P8AAAAA05JzaZkkJKpJ/9z/AAAAAA7KAIPytYf9Y//k/wAAAADrGhGSZAjlvH7/7P8AAAAAzIhQbwnMvIyZ//T/AAAAACxlGeJYF7fRs//8/wBBpqLAAAsFQJzO/wQAQbSiwAALtw8QpdTo6P8MAAAAAAAAAGKsxet4rQMAFAAAAAAAhAmU+Hg5P4EeABwAAAAAALMVB8l7zpfAOAAkAAAAAABwXOp7zjJ+j1MALAAAAAAAaIDpq6Q40tVtADQAAAAAAEUimhcmJ0+fiAA8AAAAAAAn+8TUMaJj7aIARAAAAAAAqK3IjDhl3rC9AEwAAAAAANtlqxqOCMeD2ABUAAAAAACaHXFC+R1dxPIAXAAAAAAAWOcbpixpTZINAWQAAAAAAOqNcBpk7gHaJwFsAAAAAABKd++amaNtokIBdAAAAAAAhWt9tHt4CfJcAXwAAAAAAHcY3Xmh5FS0dwGEAAAAAADCxZtbkoZbhpIBjAAAAAAAPV2WyMVTNcisAZQAAAAAALOgl/pctCqVxwGcAAAAAADjX6CZvZ9G3uEBpAAAAAAAJYw52zTCm6X8AawAAAAAAFyfmKNymsb2FgK0AAAAAADOvulUU7/ctzECvAAAAAAA4kEi8hfz/IhMAsQAAAAAAKV4XNObziDMZgLMAAAAAADfUyF781oWmIEC1AAAAAAAOjAfl9y1oOKbAtwAAAAAAJaz41xT0dmotgLkAAAAAAA8RKek2Xyb+9AC7AAAAAAAEESkp0xMdrvrAvQAAAAAABqcQLbvjquLBgP8AAAAAAAshFemEO8f0CADBAEAAAAAKTGR6eWkEJs7AwwBAAAAAJ0MnKH7mxDnVQMUAQAAAAAp9Dti2SAorHADHAEAAAAAhc+nel5LRICLAyQBAAAAAC3drANA5CG/pQMsAQAAAACP/0ReL5xnjsADNAEAAAAAQbiMnJ0XM9TaAzwBAAAAAKkb47SS2xme9QNEAQAAAADZd9+6br+W6w8ETAEAAAAAbGlicmFyeS9jb3JlL3NyYy9udW0vZmx0MmRlYy9zdHJhdGVneS9ncmlzdS5ycwAAwBMQAC4AAAB9AAAAFQAAAMATEAAuAAAAqQAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBkLm1hbnQgKyBkLnBsdXMgPCAoMSA8PCA2MSkAAADAExAALgAAAK8AAAAFAAAAwBMQAC4AAAAKAQAAEQAAAMATEAAuAAAAQAEAAAkAAADAExAALgAAAKwAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogIWJ1Zi5pc19lbXB0eSgpAAAAwBMQAC4AAADcAQAABQAAAAEAAAAKAAAAZAAAAOgDAAAQJwAAoIYBAEBCDwCAlpgAAOH1BQDKmjvAExAALgAAADMCAAARAAAAwBMQAC4AAABsAgAACQAAAMATEAAuAAAA4wIAAE4AAADAExAALgAAAO8CAABKAAAAwBMQAC4AAADMAgAASgAAAGxpYnJhcnkvY29yZS9zcmMvbnVtL2ZsdDJkZWMvbW9kLnJzACwVEAAjAAAAuwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBidWZbMF0gPiBiJzAnACwVEAAjAAAAvAAAAAUAAAAuMC4tK05hTmluZjBhc3NlcnRpb24gZmFpbGVkOiBidWYubGVuKCkgPj0gbWF4bGVuAAAALBUQACMAAAB+AgAADQAAAC4uMDEyMzQ1Njc4OWFiY2RlZmNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWVpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAARFhAAIAAAADEWEAASAAAAAAAAAAQAAAAEAAAAMQAAAD09YXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogAABmFhAAEAAAAHYWEAAXAAAAjRYQAAkAAAAgcmlnaHRgIGZhaWxlZDogCiAgbGVmdDogAAAAZhYQABAAAACwFhAAEAAAAMAWEAAJAAAAjRYQAAkAAAA6IAAAAQAAAAAAAADsFhAAAgAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9tb2QucnMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZmFsc2V0cnVlAADKFxAAGwAAAKAKAAAmAAAAyhcQABsAAACpCgAAGgAAAGxpYnJhcnkvY29yZS9zcmMvc3RyL21vZC5ycwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEGtssAACzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDBAQEBAQAQeuywAALuhhbLi4uXWJlZ2luIDw9IGVuZCAoIDw9ICkgd2hlbiBzbGljaW5nIGAAAHAZEAAOAAAAfhkQAAQAAACCGRAAEAAAAHMnEAABAAAAYnl0ZSBpbmRleCAgaXMgbm90IGEgY2hhciBib3VuZGFyeTsgaXQgaXMgaW5zaWRlICAoYnl0ZXMgKSBvZiBgALQZEAALAAAAvxkQACYAAADlGRAACAAAAO0ZEAAGAAAAcycQAAEAAAAgaXMgb3V0IG9mIGJvdW5kcyBvZiBgAAC0GRAACwAAABwaEAAWAAAAcycQAAEAAABQGBAAGwAAAPQAAAAsAAAAbGlicmFyeS9jb3JlL3NyYy91bmljb2RlL3ByaW50YWJsZS5ycwAAAFwaEAAlAAAAGgAAADYAAABcGhAAJQAAAAoAAAArAAAAAAYBAQMBBAIFBwcCCAgJAgoFCwIOBBABEQISBRMcFAEVAhcCGQ0cBR0IHwEkAWoEawKvA7ECvALPAtEC1AzVCdYC1wLaAeAF4QLnBOgC7iDwBPgC+gT7AQwnOz5OT4+enp97i5OWorK6hrEGBwk2PT5W89DRBBQYNjdWV3+qrq+9NeASh4mOngQNDhESKTE0OkVGSUpOT2RlioyNj7bBw8TGy9ZctrcbHAcICgsUFzY5Oqip2NkJN5CRqAcKOz5maY+SEW9fv+7vWmL0/P9TVJqbLi8nKFWdoKGjpKeorbq8xAYLDBUdOj9FUaanzM2gBxkaIiU+P+fs7//FxgQgIyUmKDM4OkhKTFBTVVZYWlxeYGNlZmtzeH1/iqSqr7DA0K6vbm/d3pNeInsFAwQtA2YDAS8ugIIdAzEPHAQkCR4FKwVEBA4qgKoGJAQkBCgINAtOAzQMgTcJFgoIGDtFOQNjCAkwFgUhAxsFAUA4BEsFLwQKBwkHQCAnBAwJNgM6BRoHBAwHUEk3Mw0zBy4ICgYmAx0IAoDQUhADNywIKhYaJhwUFwlOBCQJRA0ZBwoGSAgnCXULQj4qBjsFCgZRBgEFEAMFC1kIAh1iHkgICoCmXiJFCwoGDRM6BgoGFBwsBBeAuTxkUwxICQpGRRtICFMNSQcKgLYiDgoGRgodA0dJNwMOCAoGOQcKgTYZBzsDHVUBDzINg5tmdQuAxIpMYw2EMBAWCo+bBYJHmrk6hsaCOQcqBFwGJgpGCigFE4GwOoDGW2VLBDkHEUAFCwIOl/gIhNYpCqLngTMPAR0GDgQIgYyJBGsFDQMJBxCPYID6BoG0TEcJdDyA9gpzCHAVRnoUDBQMVwkZgIeBRwOFQg8VhFAfBgaA1SsFPiEBcC0DGgQCgUAfEToFAYHQKoDWKwQBgeCA9ylMBAoEAoMRREw9gMI8BgEEVQUbNAKBDiwEZAxWCoCuOB0NLAQJBwIOBoCag9gEEQMNA3cEXwYMBAEPDAQ4CAoGKAgsBAI+gVQMHQMKBTgHHAYJB4D6hAYAAQMFBQYGAgcGCAcJEQocCxkMGg0QDgwPBBADEhITCRYBFwQYARkDGgcbARwCHxYgAysDLQsuATAEMQIyAacEqQKqBKsI+gL7Bf0C/gP/Ca14eYuNojBXWIuMkBzdDg9LTPv8Li8/XF1f4oSNjpGSqbG6u8XGycre5OX/AAQREikxNDc6Oz1JSl2EjpKpsbS6u8bKzs/k5QAEDQ4REikxNDo7RUZJSl5kZYSRm53Jzs8NESk6O0VJV1tcXl9kZY2RqbS6u8XJ3+Tl8A0RRUlkZYCEsry+v9XX8PGDhYukpr6/xcfP2ttImL3Nxs7PSU5PV1leX4mOj7G2t7/BxsfXERYXW1z29/7/gG1x3t8OH25vHB1ffX6ur027vBYXHh9GR05PWFpcXn5/tcXU1dzw8fVyc490dZYmLi+nr7e/x8/X35oAQJeYMI8fzs/S1M7/Tk9aWwcIDxAnL+7vbm83PT9CRZCRU2d1yMnQ0djZ5/7/ACBfIoLfBIJECBsEBhGBrA6AqwUfCIEcAxkIAQQvBDQEBwMBBwYHEQpQDxIHVQcDBBwKCQMIAwcDAgMDAwwEBQMLBgEOFQVOBxsHVwcCBhcMUARDAy0DAQQRBg8MOgQdJV8gbQRqJYDIBYKwAxoGgv0DWQcWCRgJFAwUDGoGCgYaBlkHKwVGCiwEDAQBAzELLAQaBgsDgKwGCgYvMYD0CDwDDwM+BTgIKwWC/xEYCC8RLQMhDyEPgIwEgpoWCxWIlAUvBTsHAg4YCYC+InQMgNYagRAFgOEJ8p4DNwmBXBSAuAiA3RU7AwoGOAhGCAwGdAseA1oEWQmAgxgcChYJTASAigarpAwXBDGhBIHaJgcMBQWAphCB9QcBICoGTASAjQSAvgMbAw8NbGlicmFyeS9jb3JlL3NyYy91bmljb2RlL3VuaWNvZGVfZGF0YS5ycwAAAE0gEAAoAAAATQAAACgAAABNIBAAKAAAAFkAAAAWAAAAbGlicmFyeS9jb3JlL3NyYy9udW0vYmlnbnVtLnJzAACYIBAAHgAAAKoBAAABAAAAYXNzZXJ0aW9uIGZhaWxlZDogbm9ib3Jyb3dhc3NlcnRpb24gZmFpbGVkOiBkaWdpdHMgPCA0MGFzc2VydGlvbiBmYWlsZWQ6IG90aGVyID4gMGF0dGVtcHQgdG8gZGl2aWRlIGJ5IHplcm8AGiEQABkAAAAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggcmFuZ2UgZW5kIGluZGV4IAAAXiEQABAAAAA8IRAAIgAAAHNsaWNlIGluZGV4IHN0YXJ0cyBhdCAgYnV0IGVuZHMgYXQgAIAhEAAWAAAAliEQAA0AAABjb3B5X2Zyb21fc2xpY2U6IHNvdXJjZSBzbGljZSBsZW5ndGggKCkgZG9lcyBub3QgbWF0Y2ggZGVzdGluYXRpb24gc2xpY2UgbGVuZ3RoICgAAAC0IRAAJgAAANohEAArAAAAyl4QAAEAAAAAAwAAgwQgAJEFYABdE6AAEhcgHwwgYB/vLCArKjCgK2+mYCwCqOAsHvvgLQD+IDae/2A2/QHhNgEKITckDeE3qw5hOS8Y4TkwHOFK8x7hTkA0oVIeYeFT8GphVE9v4VSdvGFVAM9hVmXRoVYA2iFXAOChWK7iIVrs5OFb0OhhXCAA7lzwAX9dAHAABwAtAQEBAgECAQFICzAVEAFlBwIGAgIBBCMBHhtbCzoJCQEYBAEJAQMBBSsDOwkqGAEgNwEBAQQIBAEDBwoCHQE6AQEBAgQIAQkBCgIaAQICOQEEAgQCAgMDAR4CAwELAjkBBAUBAgQBFAIWBgEBOgEBAgEECAEHAwoCHgE7AQEBDAEJASgBAwE3AQEDBQMBBAcCCwIdAToBAgIBAQMDAQQHAgsCHAI5AgEBAgQIAQkBCgIdAUgBBAECAwEBCAFRAQIHDAhiAQIJCwdJAhsBAQEBATcOAQUBAgULASQJAWYEAQYBAgICGQIEAxAEDQECAgYBDwEAAwAEHAMdAh4CQAIBBwgBAgsJAS0DAQF1AiIBdgMEAgkBBgPbAgIBOgEBBwEBAQECCAYKAgEwHzEEMAoEAyYJDAIgBAIGOAEBAgMBAQU4CAICmAMBDQEHBAEGAQMCxkAAAcMhAAONAWAgAAZpAgAEAQogAlACAAEDAQQBGQIFAZcCGhINASYIGQsBASwDMAECBAICAgEkAUMGAgICAgwBCAEvATMBAQMCAgUCAQEqAggB7gECAQQBAAEAEBAQAAIAAeIBlQUAAwECBQQoAwQBpQIABEEFAAJPBEYLMQR7ATYPKQECAgoDMQQCAgcBPQMkBQEIPgEMAjQJAQEIBAIBXwMCBAYBAgGdAQMIFQI5AgEBAQEMAQkBDgcDBUMBAgYBAQIBAQMEAwEBDgJVCAIDAQEXAVEBAgYBAQIBAQIBAusBAgQGAgECGwJVCAIBAQJqAQEBAghlAQEBAgQBBQAJAQL1AQoEBAGQBAICBAEgCigGAgQIAQkGAgMuDQECAAcBBgEBUhYCBwECAQJ6BgMBAQIBBwEBSAIDAQEBAAILAjQFBQMXAQABBg8ADAMDAAU7BwABPwRRAQsCAAIALgIXAAUDBggIAgceBJQDADcEMggBDgEWBQEPAAcBEQIHAQIBBWQBoAcAAT0EAAT+AgAHbQcAYIDwAAICAgICAgICAgMDAQEBAEG3y8AACxABAAAAAAAAAAICAAAAAAACAEH2y8AACwECAEGczMAACwEBAEG3zMAACwEBAEGYzcAAC/0F8F0QAGgAAAAkAQAADgAAAGNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkVjpcLmNhY2hlXGNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlxqcy1zeXMtMC4zLjc3XHNyY1xsaWIucnPaJhAAVgAAAPsYAAABAAAAAAAAAAgAAAAEAAAAMgAAADMAAAA0AAAAYSBzdHJpbmdieXRlIGFycmF5Ym9vbGVhbiBgYGonEAAJAAAAcycQAAEAAABpbnRlZ2VyIGAAAACEJxAACQAAAHMnEAABAAAAZmxvYXRpbmcgcG9pbnQgYKAnEAAQAAAAcycQAAEAAABjaGFyYWN0ZXIgYADAJxAACwAAAHMnEAABAAAAc3RyaW5nIADcJxAABwAAAHVuaXQgdmFsdWVPcHRpb24gdmFsdWVuZXd0eXBlIHN0cnVjdHNlcXVlbmNlbWFwZW51bXVuaXQgdmFyaWFudG5ld3R5cGUgdmFyaWFudHR1cGxlIHZhcmlhbnRzdHJ1Y3QgdmFyaWFudAAAAAEAAAAAAAAALjBhbnkgdmFsdWV1MTYvcnVzdC9kZXBzL2RsbWFsbG9jLTAuMi43L3NyYy9kbG1hbGxvYy5yc2Fzc2VydGlvbiBmYWlsZWQ6IHBzaXplID49IHNpemUgKyBtaW5fb3ZlcmhlYWQAAABuKBAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAbigQACkAAACuBAAADQAAAFY6XC5jYWNoZVxjYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2ZcdW5pY29kZS13aWR0aC0wLjEuMTRcc3JjXHRhYmxlcy5ycxgpEABgAAAAkQAAABUAAAAYKRAAYAAAAJcAAAAZAEGB1MAAC4cBAQIDAwQFBgcICQoLDA0OAwMDAwMDAw8DAwMDAwMDDwkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJEAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJAEGB1sAAC58LAQICAgIDAgIEAgUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0CAh4CAgICAgICHyAhIiMCJCUmJygpAioCAgICKywCAgICLS4CAgIvMDEyMwICAgICAjQCAjU2NwI4OTo7PD0+Pzk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OUA5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5QQICQkMCAkRFRkdISQJKOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5SwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjk5OTlMAgICAgJNTk9QAgICUQJSUwICAgICAgICAgICAgJUVQICVgJXAgJYWVpbXF1eX2BhAmJjAmRlZmcCaAJpamtsAgJtbm9wAnFyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdHUCAgICAgICdnc5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OXg5OTk5OTk5OTl5egICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICezk5fDk5fQICAgICAgICAgICAgICAgICAgJ+AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfwICAoCBggICAgICAgICAgICAgICAoOEAgICAgICAgICAoWGdQIChwICAogCAgICAgICiYoCAgICAgICAgICAgICi4wCjY4Cj5CRkpOUlZYClwICmJmamwICAgICAgICAgI5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTmcHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCdAgICAp6fAgQCBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHQICHgICAgICAgIfICEiIwIkJSYnKCkCKgICAgKgoaKjpKWmLqeoqaqrrK0zAgICAgICrgICNTY3Ajg5Ojs8PT6vOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5TAICAgICsE5PsYWGdQIChwICAogCAgICAgICiYoCAgICAgICAgICAgICi4yys44Cj5CRkpOUlZYClwICmJmamwICAgICAgICAgJVVXVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAQbzhwAALKVVVVVUVAFBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUBAEHv4cAAC8QBEEEQVVVVVVVXVVVVVVVVVVVVUVVVAABAVPXdVVVVVVVVVVUVAAAAAABVVVVV/F1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQUAFAAUBFBVVVVVVVVVFVFVVVVVVVVVAAAAAAAAQFVVVVVVVVVVVdVXVVVVVVVVVVVVVVUFAABUVVVVVVVVVVVVVVVVVRUAAFVVUVVVVVVVBRAAAAEBUFVVVVVVVVVVVVUBVVVVVVX/////f1VVVVBVAABVVVVVVVVVVVVVBQBBwOPAAAuYBEBVVVVVVVVVVVVVVVVVRVQBAFRRAQBVVQVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVRAFUVVFVFVVVBVVVVVVVVUVBVVVVVVVVVVVVVVVVVVVUQRUUUFFVVVVVVVVVUFFVVUFVVVVVVVVVVVVVVVVVVVQBEFRRVVVVVQVVVVVVVQUAUVVVVVVVVVVVVVVVVVVVBAFUVVFVAVVVBVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVFVFVVUVUVVVVVVVVVVVVVVVRUVVVVVVVVVVVVVVVVVQRUBQRQVUFVVQVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVFEQFBFBVQVVVBVVVVVVVVVVQVVVVVVVVVVVVVVVVVRVEAVRVQVUVVVUFVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVUUVBURVFVVVVVVVVVVVVVVVVVVVVVVVVVVVUQBAVVUVAEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRAABUVVUAQFVVVVVVVVVVVVVVVVVVVVVVVVBVVVVVVVURUVVVVVVVVVVVVVVVVVUBAABAAARVAQAAAQAAAAAAAAAAVFVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQEEAEFBVVVVVVVVUAVUVVVVAVRVVUVBVVFVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqAEGA6MAAC5ADVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUBVVVVVVVVVVVVVVVVBVRVVVVVVVUFVVVVVVVVVQVVVVVVVVVVBVVVVX///ff//ddfd9bV11UQAFBVRQEAAFVXUVVVVVVVVVVVVVUVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBVUVUVVAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVcVFFVVVVVVVVVVVVVVVVVVRQBARAEAVBUAABRVVVVVVVVVVVVVVVUAAAAAAAAAQFVVVVVVVVVVVVVVVQBVVVVVVVVVVVVVVVUAAFAFVVVVVVVVVVVVFQAAVVVVUFVVVVVVVVUFUBBQVVVVVVVVVVVVVVVVVUVQEVBVVVVVVVVVVVVVVVVVVQAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQAAAAAQAVFFVVFBVVVVVVVVVVVVVVVVVVVVVVQBBoOvAAAuTCFVVFQBVVVVVVVUFQFVVVVVVVVVVVVVVVQAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAAAAAAAAAAFRVVVVVVVVVVVX1VVVVaVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/VfXVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX1VVVVVVV9VVVVVVVVVVVVVVVX///9VVVVVVVVVVVVV1VVVVVXVVVVVXVX1VVVVVX1VX1V1VVdVVVVVdVX1XXVdVV31VVVVVVVVVVdVVVVVVVVVVXfV31VVVVVVVVVVVVVVVVVVVf1VVVVVVVVXVVXVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdVXVVVVVVVVVVVVVVVVV11VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVBVVVVVVVVVVVVVVVVVVVX9////////////////X1XVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQAAAAAAAAAAqqqqqqqqmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlpVVVVVVVWqqqqqqqqqqqqqqqqqqgoAqqqqaqmqqqqqqqqqqqqqqqqqqqqqqqqqqmqBqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlWpqqqqqqqqqqqqqqmqqqqqqqqqqqqqqqqoqqqqqqqqqqqqaqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVlaqqqqqqqqqqqqqqaqqqqqqqqqqqqqpVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVVVVVVVVVVVVVVVVVVVVqqqqVqqqqqqqqqqqqqqqqqpqVVVVVVVVVVVVVVVVVV9VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVQAAAUFVVVVVVVVUFVVVVVVVVVVVVVVVVVVVVVVVVVVVQVVVVRUUVVVVVVVVVQVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBVVVVVVVUAAAAAUFVFFVVVVVVVVVVVVQUAUFVVVVVVFQAAUFVVVaqqqqqqqqpWQFVVVVVVVVVVVVVVFQVQUFVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVAUBBQVVVFVVVVFVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVQQUVAVRVVVVVVVVVVVVVVBVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFUUVVVVVWqqqqqqqqqqqpVVVUAAAAAAEAVAEG/88AAC+EMVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAAAA8KqqWlUAAAAAqqqqqqqqqqpqqqqqqmqqVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFamqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlZVVVVVVVVVVVVVVVVVVQVUVVVVVVVVVVVVVVVVVVVVqmpVVQAAVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFQFUBQVUAVVVVVVVVVVVVVUAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBVVVVVVVV1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVFVVVVVVVVVVVVVVVVVVVVVVVVUBVVVVVVVVVVVVVVVVVVVVVVUFAABUVVVVVVVVVVVVVVUFUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVAAAAQFVVVVVVVVVVVVUUVFUVUFVVVVVVVVVVVVVVFUBBVUVVVVVVVVVVVVVVVVVVVVVAVVVVVVVVVVUVAAEAVFVVVVVVVVVVVVVVVVVVFVVVVVBVVVVVVVVVVVVVVVUFAEAFVQEUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVUARVRVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRUVAEBVVVVVVVBVVVVVVVVVVVVVVVVVFURUVVVVVRVVVVUFAFQAVFVVVVVVVVVVVVVVVVVVVVUAAAVEVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVUUAEQRBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFQVQVRBUVVVVVVVVUFVVVVVVVVVVVVVVVVVVVVVVVVVVFQBAEVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVEAEFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUBBRAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVAABBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVRUEEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQAFVVRVVVVVVVVVAQBAVVVVVVVVVVVVFQAEQFUVVVUBQAFVVVVVVVVVVVVVAAAAAEBQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBAABBVVVVVVVVVVVVVVVVVVVVVVVVVVQUAAAAAAAUABEFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUBQEUQAABVVVVVVVVVVVVVVVVVVVVVVVVQEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVUVVVAVVVVVVVVVVVVVVVVBUBVRFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFQAAAFBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBUVVVVVVVVVVVVVVVVVVUAQFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVFUBVVVVVVVVVVVVVVVVVVVVVVVVVqlRVVVpVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqlpVVVVVVVVVVVVVqqpWVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVqqmqaaqqqqqqqqqqalVVVWVVVVVVVVVVallVVVWqVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVVVVVVVVVQQBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBBq4DBAAt1UAAAAAAAQFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRFQBQAAAABAAQBVVVVVVVVVBVBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFVFVVVVVVVVVVVVVVVVVVAEGtgcEACwJAFQBBu4HBAAvFBlRVUVVVVVRVVVVVFQABAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVUAQAAAAAAUABAEQFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAQFVVVVVVVVVVVVVVVVVVV1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXVVVVVVVVVVVVVVVVVVVVVdf3/f1VVVVVVVVVVVVVVVVVVVVVVVfX///////9uVVVVqqq6qqqqqur6v79VqqpWVV9VVVWqWlVVVVVVVf//////////V1VV/f/f///////////////////////3//////9VVVX/////////////f9X/VVVV/////1dX//////////////////////9/9//////////////////////////////////////////////////////////////X////////////////////X1VV1X////////9VVVVVdVVVVVVVVX1VVVVXVVVVVVVVVVVVVVVVVVVVVVVVVVXV////////////////////////////VVVVVVVVVVVVVVVV//////////////////////9fVVd//VX/VVXVV1X//1dVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX///9VV1VVVVVVVf//////////////f///3/////////////////////////////////////////////////////////////9VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV////V///V1X//////////////9//X1X1////Vf//V1X//1dVqqqqqqqqqqqqqqqq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PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8cABB9pzBAAuAAVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUABQAABQUFBQcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxwAEH2nsEAC4ABUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQAFAAAFBQUFAgICAgICAgICAgICAgICAgAgICAgICAgICAgICAgICAjw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PHAAQfagwQALgAFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFAAUAAAUFBQUCMjIyMjIyMjIyMjIyMjIyOwsLCwsLCwsLCwsLACAgICPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8cABB9qLBAAuAAXBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcABwAABwcHBwJycnJycnJycnJycnJycnJ7i4uLi4uLi4uLi4uCgoKCgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQlwAEH2pMEAC4ABcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwAHAAAHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHAAQZKmwQALAQwAQfamwQALgAFwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHAAcAAAcHBwcCAgICAgICAgICAgICAgICAGBgYGBgYGBgYGBgYGBgYGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJcABB9qjBAAuAAXBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcABwAABwcHBwJycnJycnJycnJycnJycnJ7CwsLCwsLCwsLCwsAYGBgYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQlwAEH2qsEAC4AB0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQANAAANDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0HAAQZKswQALAQwAQfaswQALgAFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFAAUAAAUFBQUCsrKysrKysrKysrKysrKytMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAVMTExMTExMDkxMAUwNDg5MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMcABB9q7BAAuAAVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUABQAABQUFBQICAgICAgICAgICAgICAgIExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExwAEH2sMEAC50BUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQAFAAAFBQUFDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMBQUFBQUFBQUFBQUFBQUFBQAFBQUFBQUFBQUFAAUABBuLLBAAsz////////////////////////////////////////////////////////////////////AEH2ssEAC4ADcHBwcHBwcAxwcHBwcHBwcHBwcHBwcHBwAHAAAHBwcHCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcABwAABwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwAEGStsEACwEMAEH2uMEAC/MEVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5AAB2XBAAJAAAAEM6XFVzZXJzXGRhdmlkXC5ydXN0dXBcdG9vbGNoYWluc1xzdGFibGUteDg2XzY0LXBjLXdpbmRvd3MtbXN2Y1xsaWIvcnVzdGxpYi9zcmMvcnVzdFxsaWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzAAAApFwQAHEAAACzAgAACQAAAExhenkgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAKF0QACoAAABWOlwuY2FjaGVcY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmXG9uY2VfY2VsbC0xLjIxLjNcc3JjXGxpYi5ycwAAAFxdEABZAAAACAMAABkAAAByZWVudHJhbnQgaW5pdAAAyF0QAA4AAABcXRAAWQAAAHoCAAANAAAAVjpcLmNhY2hlXGNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlx3YXNtLWJpbmRnZW4tMC4yLjEwMFxzcmNcY29udmVydFxzbGljZXMucnNudWxsIHBvaW50ZXIgcGFzc2VkIHRvIHJ1c3RyZWN1cnNpdmUgdXNlIG9mIGFuIG9iamVjdCBkZXRlY3RlZCB3aGljaCB3b3VsZCBsZWFkIHRvIHVuc2FmZSBhbGlhc2luZyBpbiBydXN0SnNWYWx1ZSgpAMJeEAAIAAAAyl4QAAEAAADwXRAAaAAAAOgAAAABAEGEvsEACwE1AHAJcHJvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2VkLWJ5AwVydXN0Yx0xLjg1LjEgKDRlYjE2MTI1MCAyMDI1LTAzLTE1KQZ3YWxydXMGMC4yMy4zDHdhc20tYmluZGdlbgcwLjIuMTAwAEkPdGFyZ2V0X2ZlYXR1cmVzBCsPbXV0YWJsZS1nbG9iYWxzKwhzaWduLWV4dCsPcmVmZXJlbmNlLXR5cGVzKwptdWx0aXZhbHVl");
var wasmModule = new WebAssembly.Module(bytes);
var wasm2 = new WebAssembly.Instance(wasmModule, {
  "./rs_lib.internal.js": rs_lib_internal_exports
});
__wbg_set_wasm(wasm2.exports);
wasm2.exports.__wbindgen_start();
function base64decode(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes3 = new Uint8Array(size);
  for (let i = 0;i < size; i++) {
    bytes3[i] = binString.charCodeAt(i);
  }
  return bytes3;
}
var scopesSymbol = Symbol();
var getItemsSymbol = Symbol();
var renderOnceSymbol = Symbol();
var onItemsChangedEventsSymbol = Symbol();
var StaticTextScope = class {
  #container;
  #items = [];
  constructor(container) {
    this.#container = container;
    this.#container[scopesSymbol].push(this);
  }
  [Symbol.dispose]() {
    this.#items.length = 0;
    const index = this.#container[scopesSymbol].indexOf(this);
    if (index >= 0) {
      this.#container[scopesSymbol].splice(index, 1);
      this.#container.refresh();
      this.#notifyContainerOnItemsChanged();
    }
  }
  [getItemsSymbol]() {
    return this.#items;
  }
  setText(textOrItems) {
    if (typeof textOrItems === "string") {
      if (textOrItems.length === 0) {
        textOrItems = [];
      } else {
        textOrItems = [{ text: textOrItems }];
      }
    } else if (textOrItems instanceof Function) {
      textOrItems = [{ text: textOrItems }];
    }
    this.#items = textOrItems;
    this.#notifyContainerOnItemsChanged();
  }
  #notifyContainerOnItemsChanged() {
    for (const onChanged of this.#container[onItemsChangedEventsSymbol]) {
      onChanged();
    }
  }
  logAbove(textOrItems, size) {
    this.#container.logAbove(textOrItems, size);
  }
  refresh(size) {
    this.#container.refresh(size);
  }
};
var StaticTextContainer2 = class {
  #container = new StaticTextContainer;
  [scopesSymbol] = [];
  #getConsoleSize;
  #onWriteText;
  [onItemsChangedEventsSymbol] = [];
  constructor(onWriteText, getConsoleSize) {
    this.#onWriteText = onWriteText;
    this.#getConsoleSize = getConsoleSize;
  }
  createScope() {
    return new StaticTextScope(this);
  }
  getConsoleSize() {
    return this.#getConsoleSize();
  }
  logAbove(textOrItems, size) {
    size ??= this.getConsoleSize();
    let detailedItem;
    if (typeof textOrItems === "string") {
      if (textOrItems.length === 0) {
        detailedItem = [];
      } else {
        detailedItem = [{ text: textOrItems }];
      }
    } else {
      detailedItem = Array.from(resolveItems(textOrItems, size));
    }
    this.withTempClear(() => {
      this[renderOnceSymbol](detailedItem, size);
    }, size);
  }
  withTempClear(action, size) {
    size ??= this.getConsoleSize();
    this.clear(size);
    try {
      action();
    } finally {
      this.refresh(size);
    }
  }
  clear(size) {
    const newText = this.renderClearText(size);
    if (newText != null) {
      this.#onWriteText(newText);
    }
  }
  refresh(size) {
    const newText = this.renderRefreshText(size);
    if (newText != null) {
      this.#onWriteText(newText);
    }
  }
  renderClearText(size) {
    size = size ?? this.#getConsoleSize();
    return this.#container.clear_text(size?.columns, size?.rows);
  }
  renderRefreshText(size) {
    size ??= this.#getConsoleSize();
    const items = Array.from(this.#resolveItems(size));
    return this.#container.render_text(items, size?.columns, size?.rows);
  }
  *#resolveItems(size) {
    for (const provider of this[scopesSymbol]) {
      for (const item of provider[getItemsSymbol]()) {
        yield* resolveItem(item, size);
      }
    }
  }
  [renderOnceSymbol](items, size) {
    const newText = static_text_render_once(items, size?.columns, size?.rows);
    if (newText != null) {
      this.#onWriteText(newText + `\r
`);
    }
  }
};
var encoder = new TextEncoder;
var RenderInterval = class {
  #count = 0;
  #intervalId = undefined;
  #container;
  #intervalMs = 60;
  #containerSubscription;
  #disposed = false;
  constructor(container) {
    this.#container = container;
  }
  [Symbol.dispose]() {
    this.#markStop();
    this.#disposed = true;
  }
  get intervalMs() {
    return this.#intervalMs;
  }
  set intervalMs(value) {
    if (this.#intervalMs === value) {
      return;
    }
    this.#intervalMs = value;
    if (this.#intervalId != null) {
      this.#stopInterval();
      this.#startInterval();
    }
  }
  start() {
    if (this.#disposed) {
      throw new Error("Cannot call .start() on a disposed RenderInterval.");
    }
    if (this.#count === 0) {
      this.#markStart();
    }
    this.#count++;
    let hasCalled = false;
    return {
      [Symbol.dispose]: () => {
        if (!hasCalled && !this.#disposed) {
          hasCalled = true;
          this.#count--;
          if (this.#count === 0) {
            this.#markStop();
            this.#container.refresh();
          }
        }
      }
    };
  }
  #containerHasItems() {
    return this.#container[scopesSymbol].some((s) => s[getItemsSymbol]().length > 0);
  }
  #markStart() {
    this.#addSubscriptionToContainer();
    if (this.#containerHasItems()) {
      this.#container.refresh();
    }
  }
  #markStop() {
    this.#removeSubscriptionFromContainer();
    this.#stopInterval();
  }
  #startInterval() {
    this.#container.refresh();
    this.#intervalId = setInterval(() => {
      this.#container.refresh();
    }, this.#intervalMs);
  }
  #stopInterval() {
    if (this.#intervalId == null) {
      return;
    }
    clearInterval(this.#intervalId);
    this.#intervalId = undefined;
  }
  #addSubscriptionToContainer() {
    let lastValue = this.#containerHasItems();
    this.#containerSubscription = () => {
      const hasItems = this.#containerHasItems();
      if (hasItems != lastValue) {
        lastValue = hasItems;
        if (hasItems) {
          this.#startInterval();
        } else {
          this.#stopInterval();
        }
      }
    };
    this.#container[onItemsChangedEventsSymbol].push(this.#containerSubscription);
  }
  #removeSubscriptionFromContainer() {
    if (!this.#containerSubscription) {
      return;
    }
    const events = this.#container[onItemsChangedEventsSymbol];
    const removeIndex = events.indexOf(this.#containerSubscription);
    if (removeIndex >= 0) {
      events.splice(removeIndex, 1);
      this.#containerSubscription = undefined;
    }
  }
};
var staticText = new StaticTextContainer2((text) => {
  const bytes3 = encoder.encode(text);
  let written = 0;
  while (written < bytes3.length) {
    written += main_exports.stderr.writeSync(bytes3.subarray(written));
  }
}, () => maybeConsoleSize());
var renderInterval = new RenderInterval(staticText);
function renderTextItems(items, size) {
  size ??= maybeConsoleSize();
  const wasmItems = Array.from(resolveItems(items, size));
  return static_text_render_once(wasmItems, size?.columns, size?.rows) ?? "";
}
function maybeConsoleSize() {
  try {
    return main_exports.consoleSize();
  } catch {
    return;
  }
}
function stripAnsiCodes(text) {
  return strip_ansi_codes(text);
}
function* resolveDeferred(deferred, size) {
  const value = deferred(size);
  if (value instanceof Array) {
    yield* resolveItems(value, size);
  } else {
    yield* resolveItem(value, size);
  }
}
function* resolveItems(value, size) {
  for (const item of value) {
    yield* resolveItem(item, size);
  }
}
function* resolveItem(item, size) {
  if (typeof item === "string") {
    if (item.length > 0) {
      yield { text: item };
    }
  } else if (item instanceof Function) {
    yield* resolveDeferred(item, size);
  } else if (item.text instanceof Function) {
    const hangingIndent = item.hangingIndent ?? 0;
    for (const value of resolveDeferred(item.text, size)) {
      yield {
        ...value,
        hangingIndent: hangingIndent + (value.hangingIndent ?? 0)
      };
    }
  } else if (item.text.length > 0) {
    yield item;
  }
}
var staticTextScope = staticText.createScope();
var _renderScope = renderInterval.start();
var LoggerRefreshItemKind;
(function(LoggerRefreshItemKind2) {
  LoggerRefreshItemKind2[LoggerRefreshItemKind2["ProgressBars"] = 0] = "ProgressBars";
  LoggerRefreshItemKind2[LoggerRefreshItemKind2["Selection"] = 1] = "Selection";
})(LoggerRefreshItemKind || (LoggerRefreshItemKind = {}));
var refreshItems = {
  [LoggerRefreshItemKind.ProgressBars]: undefined,
  [LoggerRefreshItemKind.Selection]: undefined
};
function setItems(kind, items, size) {
  refreshItems[kind] = items;
  refresh(size);
}
function refresh(size) {
  if (!isOutputTty) {
    return;
  }
  const items = Object.values(refreshItems).flatMap((items2) => items2 ?? []);
  staticTextScope.setText(items);
  staticText.refresh(size);
}
var logger = {
  setItems,
  logOnce(items, size) {
    staticTextScope.logAbove(items, size);
  },
  withTempClear(action) {
    staticText.withTempClear(action);
  }
};
var encoder2 = new TextEncoder;
var Keys;
(function(Keys2) {
  Keys2[Keys2["Up"] = 0] = "Up";
  Keys2[Keys2["Down"] = 1] = "Down";
  Keys2[Keys2["Left"] = 2] = "Left";
  Keys2[Keys2["Right"] = 3] = "Right";
  Keys2[Keys2["Enter"] = 4] = "Enter";
  Keys2[Keys2["Space"] = 5] = "Space";
  Keys2[Keys2["Backspace"] = 6] = "Backspace";
})(Keys || (Keys = {}));
async function* readKeys() {
  return yield* innerReadKeys(main_exports.stdin);
}
async function* innerReadKeys(reader) {
  const decoder2 = new TextDecoder2;
  while (true) {
    const buf = new Uint8Array(8);
    const byteCount = await reader.read(buf);
    if (byteCount == null) {
      break;
    }
    if (byteCount === 3) {
      if (buf[0] === 27 && buf[1] === 91) {
        if (buf[2] === 65) {
          yield Keys.Up;
          continue;
        } else if (buf[2] === 66) {
          yield Keys.Down;
          continue;
        } else if (buf[2] === 67) {
          yield Keys.Right;
          continue;
        } else if (buf[2] === 68) {
          yield Keys.Left;
          continue;
        }
      }
    } else if (byteCount === 1) {
      if (buf[0] === 3) {
        break;
      } else if (buf[0] === 13) {
        yield Keys.Enter;
        continue;
      } else if (buf[0] === 32) {
        yield Keys.Space;
        continue;
      } else if (buf[0] === 127) {
        yield Keys.Backspace;
        continue;
      }
    }
    const text = stripAnsiCodes(decoder2.decode(buf.slice(0, byteCount ?? 0), { stream: true }));
    if (text.length > 0) {
      yield text;
    }
  }
}
function hideCursor() {
  main_exports.stderr.writeSync(encoder2.encode("\x1B[?25l"));
}
function showCursor() {
  main_exports.stderr.writeSync(encoder2.encode("\x1B[?25h"));
}
var isOutputTty = maybeConsoleSize() != null && isTerminal(main_exports.stderr);
function isTerminal(pipe) {
  if (typeof pipe.isTerminal === "function") {
    return pipe.isTerminal();
  } else if (pipe.rid != null && typeof main_exports.isatty === "function") {
    return main_exports.isatty(pipe.rid);
  } else {
    throw new Error("Unsupported pipe.");
  }
}
function resultOrExit(result) {
  if (result == null) {
    main_exports.exit(130);
  } else {
    return result;
  }
}
function createSelection(options) {
  if (!isOutputTty || !isTerminal(main_exports.stdin)) {
    throw new Error(`Cannot prompt when not a tty. (Prompt: '${options.message}')`);
  }
  if (maybeConsoleSize() == null) {
    throw new Error(`Cannot prompt when can't get console size. (Prompt: '${options.message}')`);
  }
  return ensureSingleSelection(async () => {
    logger.setItems(LoggerRefreshItemKind.Selection, options.render());
    for await (const key of readKeys()) {
      const keyResult = options.onKey(key);
      if (keyResult != null) {
        const size = main_exports.consoleSize();
        logger.setItems(LoggerRefreshItemKind.Selection, [], size);
        if (options.noClear) {
          logger.logOnce(options.render(), size);
        }
        return keyResult;
      }
      logger.setItems(LoggerRefreshItemKind.Selection, options.render());
    }
    logger.setItems(LoggerRefreshItemKind.Selection, []);
    return;
  });
}
var lastPromise = Promise.resolve();
function ensureSingleSelection(action) {
  const currentLastPromise = lastPromise;
  const currentPromise = (async () => {
    try {
      await currentLastPromise;
    } catch {}
    hideCursor();
    try {
      main_exports.stdin.setRaw(true);
      try {
        return await action();
      } finally {
        main_exports.stdin.setRaw(false);
      }
    } finally {
      showCursor();
    }
  })();
  lastPromise = currentPromise;
  return currentPromise;
}
function confirm(optsOrMessage, options) {
  return maybeConfirm(optsOrMessage, options).then(resultOrExit);
}
function maybeConfirm(optsOrMessage, options) {
  const opts = typeof optsOrMessage === "string" ? { message: optsOrMessage, ...options } : optsOrMessage;
  return createSelection({
    message: opts.message,
    noClear: opts.noClear,
    ...innerConfirm(opts)
  });
}
function innerConfirm(opts) {
  const drawState = {
    title: opts.message,
    default: opts.default,
    inputText: "",
    hasCompleted: false
  };
  return {
    render: () => render(drawState),
    onKey: (key) => {
      switch (key) {
        case "Y":
        case "y":
          drawState.inputText = "Y";
          break;
        case "N":
        case "n":
          drawState.inputText = "N";
          break;
        case Keys.Backspace:
          drawState.inputText = "";
          break;
        case Keys.Enter:
          if (drawState.inputText.length === 0) {
            if (drawState.default == null) {
              return;
            }
            drawState.inputText = drawState.default ? "Y" : "N";
          }
          drawState.hasCompleted = true;
          return drawState.inputText === "Y" ? true : drawState.inputText === "N" ? false : drawState.default;
      }
    }
  };
}
function render(state) {
  return [
    bold(blue(state.title)) + " " + (state.hasCompleted ? "" : state.default == null ? "(Y/N) " : state.default ? "(Y/n) " : "(y/N) ") + state.inputText + (state.hasCompleted ? "" : "█")
  ];
}
function multiSelect(opts) {
  return maybeMultiSelect(opts).then(resultOrExit);
}
function maybeMultiSelect(opts) {
  if (opts.options.length === 0) {
    throw new Error(`You must provide at least one option. (Prompt: '${opts.message}')`);
  }
  return createSelection({
    message: opts.message,
    noClear: opts.noClear,
    ...innerMultiSelect(opts)
  });
}
function innerMultiSelect(opts) {
  const drawState = {
    title: opts.message,
    activeIndex: 0,
    items: opts.options.map((option) => {
      if (typeof option === "string") {
        option = {
          text: option
        };
      }
      return {
        selected: option.selected ?? false,
        text: option.text
      };
    }),
    hasCompleted: false
  };
  return {
    render: () => render2(drawState),
    onKey: (key) => {
      switch (key) {
        case Keys.Up:
          if (drawState.activeIndex === 0) {
            drawState.activeIndex = drawState.items.length - 1;
          } else {
            drawState.activeIndex--;
          }
          break;
        case Keys.Down:
          drawState.activeIndex = (drawState.activeIndex + 1) % drawState.items.length;
          break;
        case Keys.Space: {
          const item = drawState.items[drawState.activeIndex];
          item.selected = !item.selected;
          break;
        }
        case Keys.Enter:
          drawState.hasCompleted = true;
          return drawState.items.map((value, index) => [value, index]).filter(([value]) => value.selected).map(([, index]) => index);
      }
      return;
    }
  };
}
function render2(state) {
  const items = [];
  items.push(bold(blue(state.title)));
  if (state.hasCompleted) {
    if (state.items.some((i) => i.selected)) {
      for (const item of state.items) {
        if (item.selected) {
          items.push({
            text: ` - ${item.text}`,
            indent: 3
          });
        }
      }
    } else {
      items.push(italic(" <None>"));
    }
  } else {
    for (const [i, item] of state.items.entries()) {
      const prefix = i === state.activeIndex ? "> " : "  ";
      items.push({
        text: `${prefix}[${item.selected ? "x" : " "}] ${item.text}`,
        indent: 6
      });
    }
  }
  return items;
}
var ProgressBar = class {
  #state;
  #pb;
  #withCount = 0;
  #onLog;
  #noClear;
  constructor(onLog, opts) {
    if (arguments.length !== 2) {
      throw new Error("Invalid usage. Create the progress bar via `$.progress`.");
    }
    this.#onLog = onLog;
    this.#state = {
      message: opts.message,
      prefix: opts.prefix,
      length: opts.length,
      currentPos: 0,
      tickCount: 0,
      hasCompleted: false,
      kind: "raw"
    };
    this.#pb = addProgressBar((size) => {
      this.#state.tickCount++;
      return renderProgressBar(this.#state, size);
    });
    this.#noClear = opts.noClear ?? false;
    this.#logIfNonInteractive();
  }
  prefix(prefix) {
    this.#state.prefix = prefix;
    if (prefix != null && prefix.length > 0) {
      this.#logIfNonInteractive();
    }
    return this;
  }
  message(message) {
    this.#state.message = message;
    if (message != null && message.length > 0) {
      this.#logIfNonInteractive();
    }
    return this;
  }
  kind(kind) {
    this.#state.kind = kind;
    return this;
  }
  #logIfNonInteractive() {
    if (isOutputTty) {
      return;
    }
    let text = this.#state.prefix ?? "";
    if (text.length > 0) {
      text += " ";
    }
    text += this.#state.message ?? "";
    if (text.length > 0) {
      this.#onLog(text);
    }
  }
  position(position) {
    this.#state.currentPos = position;
    return this;
  }
  increment(inc = 1) {
    this.#state.currentPos += inc;
    return this;
  }
  length(size) {
    this.#state.length = size;
    return this;
  }
  noClear(value = true) {
    this.#noClear = value;
    return this;
  }
  forceRender() {
    return staticText.refresh();
  }
  finish() {
    if (removeProgressBar(this.#pb)) {
      this.#state.hasCompleted = true;
      if (this.#noClear) {
        const size = maybeConsoleSize();
        const text = renderTextItems(renderProgressBar(this.#state, size), size);
        this.#onLog(text);
      }
    }
  }
  with(action) {
    this.#withCount++;
    let wasAsync = false;
    try {
      const result = action();
      if (result instanceof Promise) {
        wasAsync = true;
        return result.finally(() => {
          this.#decrementWith();
        });
      } else {
        return result;
      }
    } finally {
      if (!wasAsync) {
        this.#decrementWith();
      }
    }
  }
  #decrementWith() {
    this.#withCount--;
    if (this.#withCount === 0) {
      this.finish();
    }
  }
};
var tickStrings = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
function renderProgressBar(state, size) {
  if (state.hasCompleted) {
    let text = "";
    if (state.prefix != null) {
      text += green(state.prefix);
    }
    if (state.message != null) {
      if (text.length > 0) {
        text += " ";
      }
      text += state.message;
    }
    return text.length > 0 ? [text] : [];
  } else if (state.length == null || state.length === 0) {
    let text = green(tickStrings[Math.abs(state.tickCount) % tickStrings.length]);
    if (state.prefix != null) {
      text += ` ${green(state.prefix)}`;
    }
    if (state.message != null) {
      text += ` ${state.message}`;
    }
    if (state.currentPos > 0) {
      const currentPosText = state.kind === "bytes" ? humanDownloadSize(state.currentPos) : state.currentPos.toString();
      text += ` (${currentPosText}/?)`;
    }
    return [text];
  } else {
    let firstLine = "";
    if (state.prefix != null) {
      firstLine += green(state.prefix);
    }
    if (state.message != null) {
      if (firstLine.length > 0) {
        firstLine += " ";
      }
      firstLine += state.message;
    }
    const percent = Math.min(state.currentPos / state.length, 1);
    const currentPosText = state.kind === "bytes" ? humanDownloadSize(state.currentPos, state.length) : state.currentPos.toString();
    const lengthText = state.kind === "bytes" ? humanDownloadSize(state.length) : state.length.toString();
    const maxWidth = size == null ? 75 : Math.max(10, Math.min(75, size.columns - 5));
    const sameLineTextWidth = 6 + lengthText.length * 2 + state.length.toString().length * 2;
    const totalBars = Math.max(1, maxWidth - sameLineTextWidth);
    const completedBars = Math.floor(totalBars * percent);
    let secondLine = "";
    secondLine += "[";
    if (completedBars != totalBars) {
      if (completedBars > 0) {
        secondLine += cyan("#".repeat(completedBars - 1) + ">");
      }
      secondLine += blue("-".repeat(totalBars - completedBars));
    } else {
      secondLine += cyan("#".repeat(completedBars));
    }
    secondLine += `] (${currentPosText}/${lengthText})`;
    const result = [];
    if (firstLine.length > 0) {
      result.push(firstLine);
    }
    result.push(secondLine);
    return result;
  }
}
var progressBars = [];
function addProgressBar(render5) {
  progressBars.push(render5);
  refresh2();
  return render5;
}
function removeProgressBar(pb) {
  const index = progressBars.indexOf(pb);
  if (index === -1) {
    return false;
  }
  progressBars.splice(index, 1);
  refresh2();
  return true;
}
function refresh2() {
  logger.setItems(LoggerRefreshItemKind.ProgressBars, progressBars);
}
function isShowingProgressBars() {
  return isOutputTty && progressBars.length > 0;
}
var units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
function humanDownloadSize(byteCount, totalBytes) {
  const exponentBasis = totalBytes ?? byteCount;
  const exponent = Math.min(units.length - 1, Math.floor(Math.log(exponentBasis) / Math.log(1024)));
  const unit = units[exponent];
  const prettyBytes = (Math.floor(byteCount / Math.pow(1024, exponent) * 100) / 100).toFixed(exponent === 0 ? 0 : 2);
  return `${prettyBytes} ${unit}`;
}
var defaultMask = { char: "*", lastVisible: false };
function prompt(optsOrMessage, options) {
  return maybePrompt(optsOrMessage, options).then(resultOrExit);
}
function maybePrompt(optsOrMessage, options) {
  const opts = typeof optsOrMessage === "string" ? {
    message: optsOrMessage,
    ...options
  } : optsOrMessage;
  return createSelection({
    message: opts.message,
    noClear: opts.noClear,
    ...innerPrompt(opts)
  });
}
function innerPrompt(opts) {
  let mask = opts.mask ?? false;
  if (mask && typeof mask === "boolean") {
    mask = defaultMask;
  }
  const drawState = {
    title: opts.message,
    inputText: opts.default ?? "",
    mask,
    hasCompleted: false
  };
  return {
    render: () => render3(drawState),
    onKey: (key) => {
      if (typeof key === "string") {
        drawState.inputText += key;
      } else {
        switch (key) {
          case Keys.Space:
            drawState.inputText += " ";
            break;
          case Keys.Backspace:
            drawState.inputText = drawState.inputText.slice(0, -1);
            break;
          case Keys.Enter:
            drawState.hasCompleted = true;
            return drawState.inputText;
        }
      }
      return;
    }
  };
}
function render3(state) {
  let { inputText } = state;
  if (state.mask) {
    const char = state.mask.char ?? defaultMask.char;
    const lastVisible = state.mask.lastVisible ?? defaultMask.lastVisible;
    const shouldShowLast = lastVisible && !state.hasCompleted;
    const safeLengthMinusOne = Math.max(0, inputText.length - 1);
    const masked = char.repeat(shouldShowLast ? safeLengthMinusOne : inputText.length);
    const unmasked = shouldShowLast ? inputText.slice(safeLengthMinusOne) : "";
    inputText = `${masked}${unmasked}`;
  }
  return [
    bold(blue(state.title)) + " " + inputText + (state.hasCompleted ? "" : "█")
  ];
}
function select(opts) {
  return maybeSelect(opts).then(resultOrExit);
}
function maybeSelect(opts) {
  if (opts.options.length < 1) {
    throw new Error(`You must provide at least one option. (Prompt: '${opts.message}')`);
  }
  return createSelection({
    message: opts.message,
    noClear: opts.noClear,
    ...innerSelect(opts)
  });
}
function innerSelect(opts) {
  const drawState = {
    title: opts.message,
    activeIndex: (opts.initialIndex ?? 0) % opts.options.length,
    items: opts.options,
    hasCompleted: false
  };
  return {
    render: () => render4(drawState),
    onKey: (key) => {
      switch (key) {
        case Keys.Up:
          if (drawState.activeIndex === 0) {
            drawState.activeIndex = drawState.items.length - 1;
          } else {
            drawState.activeIndex--;
          }
          break;
        case Keys.Down:
          drawState.activeIndex = (drawState.activeIndex + 1) % drawState.items.length;
          break;
        case Keys.Enter:
          drawState.hasCompleted = true;
          return drawState.activeIndex;
      }
    }
  };
}
function render4(state) {
  const items = [];
  items.push(bold(blue(state.title)));
  if (state.hasCompleted) {
    items.push({
      text: ` - ${state.items[state.activeIndex]}`,
      indent: 3
    });
  } else {
    for (const [i, text] of state.items.entries()) {
      const prefix = i === state.activeIndex ? "> " : "  ";
      items.push({
        text: `${prefix}${text}`,
        indent: 4
      });
    }
  }
  return items;
}
var symbols = {
  writable: Symbol.for("dax.writableStream"),
  readable: Symbol.for("dax.readableStream")
};
var TimeoutError = class extends Error {
  constructor(message) {
    super(message);
  }
  get name() {
    return "TimeoutError";
  }
};
function formatMillis(ms) {
  if (ms < 1000) {
    return `${formatValue(ms)} millisecond${ms === 1 ? "" : "s"}`;
  } else if (ms < 60 * 1000) {
    const s = ms / 1000;
    return `${formatValue(s)} ${pluralize("second", s)}`;
  } else {
    const mins = ms / 60 / 1000;
    return `${formatValue(mins)} ${pluralize("minute", mins)}`;
  }
  function formatValue(value) {
    const text = value.toFixed(2);
    if (text.endsWith(".00")) {
      return value.toFixed(0);
    } else if (text.endsWith("0")) {
      return value.toFixed(1);
    } else {
      return text;
    }
  }
  function pluralize(text, value) {
    const suffix = value === 1 ? "" : "s";
    return text + suffix;
  }
}
function delayToIterator(delay) {
  if (typeof delay !== "number" && typeof delay !== "string") {
    return delay;
  }
  const ms = delayToMs(delay);
  return {
    next() {
      return ms;
    }
  };
}
function delayToMs(delay) {
  if (typeof delay === "number") {
    return delay;
  } else if (typeof delay === "string") {
    const msMatch = delay.match(/^([0-9]+)ms$/);
    if (msMatch != null) {
      return parseInt(msMatch[1], 10);
    }
    const secondsMatch = delay.match(/^([0-9]+\.?[0-9]*)s$/);
    if (secondsMatch != null) {
      return Math.round(parseFloat(secondsMatch[1]) * 1000);
    }
    const minutesMatch = delay.match(/^([0-9]+\.?[0-9]*)m$/);
    if (minutesMatch != null) {
      return Math.round(parseFloat(minutesMatch[1]) * 1000 * 60);
    }
    const minutesSecondsMatch = delay.match(/^([0-9]+\.?[0-9]*)m([0-9]+\.?[0-9]*)s$/);
    if (minutesSecondsMatch != null) {
      return Math.round(parseFloat(minutesSecondsMatch[1]) * 1000 * 60 + parseFloat(minutesSecondsMatch[2]) * 1000);
    }
    const hoursMatch = delay.match(/^([0-9]+\.?[0-9]*)h$/);
    if (hoursMatch != null) {
      return Math.round(parseFloat(hoursMatch[1]) * 1000 * 60 * 60);
    }
    const hoursMinutesMatch = delay.match(/^([0-9]+\.?[0-9]*)h([0-9]+\.?[0-9]*)m$/);
    if (hoursMinutesMatch != null) {
      return Math.round(parseFloat(hoursMinutesMatch[1]) * 1000 * 60 * 60 + parseFloat(hoursMinutesMatch[2]) * 1000 * 60);
    }
    const hoursMinutesSecondsMatch = delay.match(/^([0-9]+\.?[0-9]*)h([0-9]+\.?[0-9]*)m([0-9]+\.?[0-9]*)s$/);
    if (hoursMinutesSecondsMatch != null) {
      return Math.round(parseFloat(hoursMinutesSecondsMatch[1]) * 1000 * 60 * 60 + parseFloat(hoursMinutesSecondsMatch[2]) * 1000 * 60 + parseFloat(hoursMinutesSecondsMatch[3]) * 1000);
    }
  }
  throw new Error(`Unknown delay value: ${delay}`);
}
function filterEmptyRecordValues(record) {
  const result = {};
  for (const [key, value] of Object.entries(record)) {
    if (value != null) {
      result[key] = value;
    }
  }
  return result;
}
function resolvePath(cwd2, arg) {
  return resolve3(isAbsolute3(arg) ? arg : join32(cwd2, arg));
}
var Box = class {
  value;
  constructor(value) {
    this.value = value;
  }
};
var TreeBox = class _TreeBox {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    let tree = this;
    while (tree.#value instanceof _TreeBox) {
      tree = tree.#value;
    }
    return tree.#value;
  }
  setValue(value) {
    this.#value = value;
  }
  createChild() {
    return new _TreeBox(this);
  }
};
var LoggerTreeBox = class extends TreeBox {
  getValue() {
    const innerValue = super.getValue();
    return (...args2) => {
      return logger.withTempClear(() => {
        innerValue(...args2);
      });
    };
  }
};
async function safeLstat(path) {
  try {
    return await main_exports.lstat(path);
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      return;
    } else {
      throw err;
    }
  }
}
function getFileNameFromUrl(url2) {
  const parsedUrl = url2 instanceof URL ? url2 : new URL(url2);
  const fileName = parsedUrl.pathname.split("/").at(-1);
  return fileName?.length === 0 ? undefined : fileName;
}
async function getExecutableShebangFromPath(path) {
  try {
    const file = await main_exports.open(path, { read: true });
    try {
      return await getExecutableShebang(file);
    } finally {
      try {
        file.close();
      } catch {}
    }
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      return false;
    }
    throw err;
  }
}
var decoder = new TextDecoder2;
async function getExecutableShebang(reader) {
  const text = "#!/usr/bin/env ";
  const buffer = new Uint8Array(text.length);
  const bytesReadCount = await reader.read(buffer);
  if (bytesReadCount !== text.length || decoder.decode(buffer) !== text) {
    return;
  }
  const line = (await readFirstLine(reader)).trim();
  if (line.length === 0) {
    return;
  }
  const dashS = "-S ";
  if (line.startsWith(dashS)) {
    return {
      stringSplit: true,
      command: line.slice(dashS.length)
    };
  } else {
    return {
      stringSplit: false,
      command: line
    };
  }
}
async function readFirstLine(reader) {
  const chunkSize = 1024;
  const chunkBuffer = new Uint8Array(chunkSize);
  const collectedChunks = [];
  let totalLength = 0;
  while (true) {
    const bytesRead = await reader.read(chunkBuffer);
    if (bytesRead == null || bytesRead === 0) {
      break;
    }
    const currentChunk = chunkBuffer.subarray(0, bytesRead);
    const newlineIndex = currentChunk.indexOf(10);
    if (newlineIndex !== -1) {
      collectedChunks.push(currentChunk.subarray(0, newlineIndex));
      totalLength += newlineIndex;
      break;
    } else {
      collectedChunks.push(currentChunk);
      totalLength += bytesRead;
    }
  }
  const finalBytes = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of collectedChunks) {
    finalBytes.set(chunk, offset);
    offset += chunk.length;
  }
  return new TextDecoder2().decode(finalBytes);
}
function abortSignalToPromise(signal) {
  const { resolve: resolve4, promise } = Promise.withResolvers();
  const listener = () => {
    signal.removeEventListener("abort", listener);
    resolve4();
  };
  signal.addEventListener("abort", listener);
  return {
    [Symbol.dispose]() {
      signal.removeEventListener("abort", listener);
    },
    promise
  };
}
var nodeENotEmpty = "ENOTEMPTY: ";
var nodeENOENT = "ENOENT: ";
function errorToString(err) {
  let message;
  if (err instanceof Error) {
    message = err.message;
  } else {
    message = String(err);
  }
  if (message.startsWith(nodeENotEmpty)) {
    return message.slice(nodeENotEmpty.length);
  } else if (message.startsWith(nodeENOENT)) {
    return message.slice(nodeENOENT.length);
  } else {
    return message;
  }
}
function parseArgKinds(flags) {
  const result = [];
  let had_dash_dash = false;
  for (const arg of flags) {
    if (had_dash_dash) {
      result.push({ arg, kind: "Arg" });
    } else if (arg == "-") {
      result.push({ arg: "-", kind: "Arg" });
    } else if (arg == "--") {
      had_dash_dash = true;
    } else if (arg.startsWith("--")) {
      result.push({ arg: arg.replace(/^--/, ""), kind: "LongFlag" });
    } else if (arg.startsWith("-")) {
      const flags2 = arg.replace(/^-/, "");
      if (!isNaN(parseFloat(flags2))) {
        result.push({ arg, kind: "Arg" });
      } else {
        for (const c of flags2) {
          result.push({ arg: c, kind: "ShortFlag" });
        }
      }
    } else {
      result.push({ arg, kind: "Arg" });
    }
  }
  return result;
}
function bailUnsupported(arg) {
  switch (arg.kind) {
    case "Arg":
      throw Error(`unsupported argument: ${arg.arg}`);
    case "ShortFlag":
      throw Error(`unsupported flag: -${arg.arg}`);
    case "LongFlag":
      throw Error(`unsupported flag: --${arg.arg}`);
  }
}
async function catCommand(context) {
  try {
    const code2 = await executeCat(context);
    return { code: code2 };
  } catch (err) {
    return context.error(`cat: ${errorToString(err)}`);
  }
}
async function executeCat(context) {
  const flags = parseCatArgs(context.args);
  let exitCode = 0;
  const buf = new Uint8Array(1024);
  for (const path of flags.paths) {
    if (path === "-") {
      if (typeof context.stdin === "object") {
        while (!context.signal.aborted) {
          const size = await context.stdin.read(buf);
          if (!size || size === 0) {
            break;
          } else {
            const maybePromise = context.stdout.write(buf.slice(0, size));
            if (maybePromise instanceof Promise) {
              await maybePromise;
            }
          }
        }
        exitCode = context.signal.abortedExitCode ?? 0;
      } else {
        const _assertValue = context.stdin;
        throw new Error(`not supported. stdin was '${context.stdin}'`);
      }
    } else {
      let file;
      try {
        file = await main_exports.open(resolvePath(context.cwd, path), { read: true });
        while (!context.signal.aborted) {
          const size = file.readSync(buf);
          if (!size || size === 0) {
            break;
          } else {
            const maybePromise = context.stdout.write(buf.slice(0, size));
            if (maybePromise instanceof Promise) {
              await maybePromise;
            }
          }
        }
        exitCode = context.signal.abortedExitCode ?? 0;
      } catch (err) {
        const maybePromise = context.stderr.writeLine(`cat ${path}: ${errorToString(err)}`);
        if (maybePromise instanceof Promise) {
          await maybePromise;
        }
        exitCode = 1;
      } finally {
        file?.close();
      }
    }
  }
  return exitCode;
}
function parseCatArgs(args2) {
  const paths = [];
  for (const arg of parseArgKinds(args2)) {
    if (arg.kind === "Arg") {
      paths.push(arg.arg);
    } else {
      bailUnsupported(arg);
    }
  }
  if (paths.length === 0) {
    paths.push("-");
  }
  return { paths };
}
async function cdCommand(context) {
  try {
    const dir = await executeCd(context.cwd, context.args);
    return {
      code: 0,
      changes: [{
        kind: "cd",
        dir
      }]
    };
  } catch (err) {
    return context.error(`cd: ${errorToString(err)}`);
  }
}
async function executeCd(cwd2, args2) {
  const arg = parseArgs(args2);
  const result = resolvePath(cwd2, arg);
  if (!await isDirectory(result)) {
    throw new Error(`${result}: Not a directory`);
  }
  return result;
}
async function isDirectory(path) {
  try {
    const info = await main_exports.stat(path);
    return info.isDirectory;
  } catch (err) {
    if (err instanceof main_exports.errors.NotFound) {
      return false;
    } else {
      throw err;
    }
  }
}
function parseArgs(args2) {
  if (args2.length === 0) {
    throw new Error("expected at least 1 argument");
  } else if (args2.length > 1) {
    throw new Error("too many arguments");
  } else {
    return args2[0];
  }
}
async function cpCommand(context) {
  try {
    await executeCp(context.cwd, context.args);
    return { code: 0 };
  } catch (err) {
    return context.error(`cp: ${errorToString(err)}`);
  }
}
async function executeCp(cwd2, args2) {
  const flags = await parseCpArgs(cwd2, args2);
  for (const { from, to } of flags.operations) {
    await doCopyOperation(flags, from, to);
  }
}
async function parseCpArgs(cwd2, args2) {
  const paths = [];
  let recursive = false;
  for (const arg of parseArgKinds(args2)) {
    if (arg.kind === "Arg")
      paths.push(arg.arg);
    else if (arg.arg === "recursive" && arg.kind === "LongFlag" || arg.arg === "r" && arg.kind == "ShortFlag" || arg.arg === "R" && arg.kind === "ShortFlag") {
      recursive = true;
    } else
      bailUnsupported(arg);
  }
  if (paths.length === 0)
    throw Error("missing file operand");
  else if (paths.length === 1)
    throw Error(`missing destination file operand after '${paths[0]}'`);
  return { recursive, operations: await getCopyAndMoveOperations(cwd2, paths) };
}
async function doCopyOperation(flags, from, to) {
  const fromInfo = await safeLstat(from.path);
  if (fromInfo?.isDirectory) {
    if (flags.recursive) {
      const toInfo = await safeLstat(to.path);
      if (toInfo?.isFile) {
        throw Error("destination was a file");
      } else if (toInfo?.isSymlink) {
        throw Error("no support for copying to symlinks");
      } else if (fromInfo.isSymlink) {
        throw Error("no support for copying from symlinks");
      } else {
        await copyDirRecursively(from.path, to.path);
      }
    } else {
      throw Error("source was a directory; maybe specify -r");
    }
  } else {
    await main_exports.copyFile(from.path, to.path);
  }
}
async function copyDirRecursively(from, to) {
  await main_exports.mkdir(to, { recursive: true });
  const readDir4 = main_exports.readDir(from);
  for await (const entry of readDir4) {
    const newFrom = join32(from, basename3(entry.name));
    const newTo = join32(to, basename3(entry.name));
    if (entry.isDirectory) {
      await copyDirRecursively(newFrom, newTo);
    } else if (entry.isFile) {
      await main_exports.copyFile(newFrom, newTo);
    }
  }
}
async function mvCommand(context) {
  try {
    await executeMove(context.cwd, context.args);
    return { code: 0 };
  } catch (err) {
    return context.error(`mv: ${errorToString(err)}`);
  }
}
async function executeMove(cwd2, args2) {
  const flags = await parseMvArgs(cwd2, args2);
  for (const { from, to } of flags.operations) {
    await main_exports.rename(from.path, to.path);
  }
}
async function parseMvArgs(cwd2, args2) {
  const paths = [];
  for (const arg of parseArgKinds(args2)) {
    if (arg.kind === "Arg")
      paths.push(arg.arg);
    else
      bailUnsupported(arg);
  }
  if (paths.length === 0)
    throw Error("missing operand");
  else if (paths.length === 1)
    throw Error(`missing destination file operand after '${paths[0]}'`);
  return { operations: await getCopyAndMoveOperations(cwd2, paths) };
}
async function getCopyAndMoveOperations(cwd2, paths) {
  const specified_destination = paths.splice(paths.length - 1, 1)[0];
  const destination = resolvePath(cwd2, specified_destination);
  const fromArgs = paths;
  const operations = [];
  if (fromArgs.length > 1) {
    if (!await safeLstat(destination).then((p) => p?.isDirectory)) {
      throw Error(`target '${specified_destination}' is not a directory`);
    }
    for (const from of fromArgs) {
      const fromPath = resolvePath(cwd2, from);
      const toPath = join32(destination, basename3(fromPath));
      operations.push({
        from: {
          specified: from,
          path: fromPath
        },
        to: {
          specified: specified_destination,
          path: toPath
        }
      });
    }
  } else {
    const fromPath = resolvePath(cwd2, fromArgs[0]);
    const toPath = await safeLstat(destination).then((p) => p?.isDirectory) ? calculateDestinationPath(destination, fromPath) : destination;
    operations.push({
      from: {
        specified: fromArgs[0],
        path: fromPath
      },
      to: {
        specified: specified_destination,
        path: toPath
      }
    });
  }
  return operations;
}
function calculateDestinationPath(destination, from) {
  return join32(destination, basename3(from));
}
function echoCommand(context) {
  try {
    const maybePromise = context.stdout.writeLine(context.args.join(" "));
    if (maybePromise instanceof Promise) {
      return maybePromise.then(() => ({ code: 0 })).catch((err) => handleFailure(context, err));
    } else {
      return { code: 0 };
    }
  } catch (err) {
    return handleFailure(context, err);
  }
}
function handleFailure(context, err) {
  return context.error(`echo: ${errorToString(err)}`);
}
function exitCommand(context) {
  try {
    const code2 = parseArgs2(context.args);
    return {
      kind: "exit",
      code: code2
    };
  } catch (err) {
    return context.error(2, `exit: ${errorToString(err)}`);
  }
}
function parseArgs2(args2) {
  if (args2.length === 0)
    return 1;
  if (args2.length > 1)
    throw new Error("too many arguments");
  const exitCode = parseInt(args2[0], 10);
  if (isNaN(exitCode))
    throw new Error("numeric argument required.");
  if (exitCode < 0) {
    const code2 = -exitCode % 256;
    return 256 - code2;
  }
  return exitCode % 256;
}
function exportCommand(context) {
  const changes = [];
  for (const arg of context.args) {
    const equalsIndex = arg.indexOf("=");
    if (equalsIndex >= 0) {
      changes.push({
        kind: "envvar",
        name: arg.substring(0, equalsIndex),
        value: arg.substring(equalsIndex + 1)
      });
    }
  }
  return {
    code: 0,
    changes
  };
}
async function mkdirCommand(context) {
  try {
    await executeMkdir(context.cwd, context.args);
    return { code: 0 };
  } catch (err) {
    return context.error(`mkdir: ${errorToString(err)}`);
  }
}
async function executeMkdir(cwd2, args2) {
  const flags = parseArgs3(args2);
  for (const specifiedPath of flags.paths) {
    const path = resolvePath(cwd2, specifiedPath);
    const info = await safeLstat(path);
    if (info?.isFile || !flags.parents && info?.isDirectory) {
      throw Error(`cannot create directory '${specifiedPath}': File exists`);
    }
    if (flags.parents) {
      await main_exports.mkdir(path, { recursive: true });
    } else {
      await main_exports.mkdir(path);
    }
  }
}
function parseArgs3(args2) {
  const result = {
    parents: false,
    paths: []
  };
  for (const arg of parseArgKinds(args2)) {
    if (arg.arg === "parents" && arg.kind === "LongFlag" || arg.arg === "p" && arg.kind == "ShortFlag") {
      result.parents = true;
    } else {
      if (arg.kind !== "Arg")
        bailUnsupported(arg);
      result.paths.push(arg.arg.trim());
    }
  }
  if (result.paths.length === 0) {
    throw Error("missing operand");
  }
  return result;
}
function printEnvCommand(context) {
  let args2;
  if (main_exports.build.os === "windows") {
    args2 = context.args.map((arg) => arg.toUpperCase());
  } else {
    args2 = context.args;
  }
  try {
    const result = executePrintEnv(context.env, args2);
    const code2 = args2.some((arg) => context.env[arg] === undefined) ? 1 : 0;
    const maybePromise = context.stdout.writeLine(result);
    if (maybePromise instanceof Promise) {
      return maybePromise.then(() => ({ code: code2 })).catch((err) => handleError2(context, err));
    } else {
      return { code: code2 };
    }
  } catch (err) {
    return handleError2(context, err);
  }
}
function handleError2(context, err) {
  return context.error(`printenv: ${errorToString(err)}`);
}
function executePrintEnv(env3, args2) {
  const isWindows22 = main_exports.build.os === "windows";
  if (args2.length === 0) {
    return Object.entries(env3).map(([key, val]) => `${isWindows22 ? key.toUpperCase() : key}=${val}`).join(`
`);
  } else {
    if (isWindows22) {
      args2 = args2.map((arg) => arg.toUpperCase());
    }
    return Object.entries(env3).filter(([key]) => args2.includes(key)).map(([_key, val]) => val).join(`
`);
  }
}
function pwdCommand(context) {
  try {
    const output = executePwd(context.cwd, context.args);
    const maybePromise = context.stdout.writeLine(output);
    const result = { code: 0 };
    if (maybePromise instanceof Promise) {
      return maybePromise.then(() => result).catch((err) => handleError3(context, err));
    } else {
      return result;
    }
  } catch (err) {
    return handleError3(context, err);
  }
}
function handleError3(context, err) {
  return context.error(`pwd: ${errorToString(err)}`);
}
function executePwd(cwd2, args2) {
  const flags = parseArgs4(args2);
  if (flags.logical) {
    return resolve3(cwd2);
  } else {
    return cwd2;
  }
}
function parseArgs4(args2) {
  let logical = false;
  for (const arg of parseArgKinds(args2)) {
    if (arg.arg === "L" && arg.kind === "ShortFlag") {
      logical = true;
    } else if (arg.arg === "P" && arg.kind == "ShortFlag") {} else if (arg.kind === "Arg") {} else {
      bailUnsupported(arg);
    }
  }
  return { logical };
}
async function rmCommand(context) {
  try {
    await executeRemove(context.cwd, context.args);
    return { code: 0 };
  } catch (err) {
    return context.error(`rm: ${errorToString(err)}`);
  }
}
async function executeRemove(cwd2, args2) {
  const flags = parseArgs5(args2);
  await Promise.all(flags.paths.map((specifiedPath) => {
    if (specifiedPath.length === 0) {
      throw new Error("Bug in dax. Specified path should have not been empty.");
    }
    const path = resolvePath(cwd2, specifiedPath);
    if (path === "/") {
      throw new Error("Cannot delete root directory. Maybe bug in dax? Please report this.");
    }
    return main_exports.remove(path, { recursive: flags.recursive }).catch((err) => {
      if (flags.force && err instanceof main_exports.errors.NotFound) {
        return Promise.resolve();
      } else {
        return Promise.reject(err);
      }
    });
  }));
}
function parseArgs5(args2) {
  const result = {
    recursive: false,
    force: false,
    dir: false,
    paths: []
  };
  for (const arg of parseArgKinds(args2)) {
    if (arg.arg === "recursive" && arg.kind === "LongFlag" || arg.arg === "r" && arg.kind == "ShortFlag" || arg.arg === "R" && arg.kind === "ShortFlag") {
      result.recursive = true;
    } else if (arg.arg == "dir" && arg.kind === "LongFlag" || arg.arg == "d" && arg.kind === "ShortFlag") {
      result.dir = true;
    } else if (arg.arg == "force" && arg.kind === "LongFlag" || arg.arg == "f" && arg.kind === "ShortFlag") {
      result.force = true;
    } else {
      if (arg.kind !== "Arg")
        bailUnsupported2(arg);
      result.paths.push(arg.arg.trim());
    }
  }
  if (result.paths.length === 0) {
    throw Error("missing operand");
  }
  return result;
}
function bailUnsupported2(arg) {
  switch (arg.kind) {
    case "Arg":
      throw Error(`unsupported argument: ${arg.arg}`);
    case "ShortFlag":
      throw Error(`unsupported flag: -${arg.arg}`);
    case "LongFlag":
      throw Error(`unsupported flag: --${arg.arg}`);
  }
}
var SET_OPTIONS = ["pipefail"];
function isSetOption(name) {
  return SET_OPTIONS.includes(name);
}
function setCommand(context) {
  const args2 = context.args;
  if (args2.length === 0) {
    return { code: 0 };
  }
  if (args2.length === 1 && args2[0] === "-o") {
    const opts = context.shellOptions;
    context.stdout.writeLine(`pipefail	${opts.pipefail ? "on" : "off"}`);
    return { code: 0 };
  }
  if (args2.length === 1 && args2[0] === "+o") {
    const opts = context.shellOptions;
    context.stdout.writeLine(`set ${opts.pipefail ? "-o" : "+o"} pipefail`);
    return { code: 0 };
  }
  const changes = [];
  let i = 0;
  while (i < args2.length) {
    const arg = args2[i];
    if ((arg === "-o" || arg === "+o") && i + 1 < args2.length) {
      const enable = arg === "-o";
      const optionName = args2[i + 1];
      if (!isSetOption(optionName)) {
        return context.error(`set: unknown option: ${optionName}`);
      }
      changes.push({
        kind: "setoption",
        option: optionName,
        value: enable
      });
      i += 2;
    } else {
      return context.error(`set: invalid option: ${arg}`);
    }
  }
  return { code: 0, changes };
}
var SHOPT_OPTIONS = ["nullglob", "failglob", "globstar"];
function isShoptOption(name) {
  return SHOPT_OPTIONS.includes(name);
}
function invalidOptionError(context, name) {
  return context.error(`shopt: ${name}: invalid shell option name`);
}
function shoptCommand(context) {
  const args2 = context.args;
  let mode;
  let optionArgs = args2;
  if (args2.length > 0) {
    if (args2[0] === "-s") {
      mode = true;
      optionArgs = args2.slice(1);
    } else if (args2[0] === "-u") {
      mode = false;
      optionArgs = args2.slice(1);
    }
  }
  const options = [];
  for (const arg of optionArgs) {
    if (!isShoptOption(arg)) {
      return invalidOptionError(context, arg);
    }
    options.push(arg);
  }
  if (mode !== undefined) {
    const changes = options.map((option) => ({
      kind: "setoption",
      option,
      value: mode
    }));
    return { code: 0, changes };
  }
  const currentOptions = context.shellOptions;
  if (options.length === 0) {
    context.stdout.writeLine(`failglob	${currentOptions.failglob ? "on" : "off"}`);
    context.stdout.writeLine(`globstar	${currentOptions.globstar ? "on" : "off"}`);
    context.stdout.writeLine(`nullglob	${currentOptions.nullglob ? "on" : "off"}`);
    return { code: 0 };
  } else {
    let anyOff = false;
    for (const opt of options) {
      const isOn = currentOptions[opt];
      if (!isOn) {
        anyOff = true;
      }
      context.stdout.writeLine(`${opt}	${isOn ? "on" : "off"}`);
    }
    return { code: anyOff ? 1 : 0 };
  }
}
function getAbortedResult() {
  return {
    kind: "exit",
    code: 124
  };
}
async function sleepCommand(context) {
  try {
    const ms = parseArgs6(context.args);
    await new Promise((resolve4) => {
      const timeoutId = setTimeout(finish, ms);
      context.signal.addListener(signalListener);
      function signalListener(_signal) {
        if (context.signal.aborted) {
          finish();
        }
      }
      function finish() {
        resolve4();
        clearInterval(timeoutId);
        context.signal.removeListener(signalListener);
      }
    });
    if (context.signal.aborted) {
      return getAbortedResult();
    }
    return { code: 0 };
  } catch (err) {
    return context.error(`sleep: ${errorToString(err)}`);
  }
}
function parseArgs6(args2) {
  let totalTimeMs = 0;
  if (args2.length === 0) {
    throw new Error("missing operand");
  }
  for (const arg of args2) {
    if (arg.startsWith("-")) {
      throw new Error(`unsupported: ${arg}`);
    }
    const value = parseFloat(arg);
    if (isNaN(value)) {
      throw new Error(`error parsing argument '${arg}' to number.`);
    }
    totalTimeMs = value * 1000;
  }
  return totalTimeMs;
}
async function exists(path, options) {
  try {
    const stat2 = await main_exports.stat(path);
    if (options && (options.isReadable || options.isDirectory || options.isFile)) {
      if (options.isDirectory && options.isFile) {
        throw new TypeError("ExistsOptions.options.isDirectory and ExistsOptions.options.isFile must not be true together");
      }
      if (options.isDirectory && !stat2.isDirectory || options.isFile && !stat2.isFile) {
        return false;
      }
      if (options.isReadable) {
        return fileIsReadable(stat2);
      }
    }
    return true;
  } catch (error) {
    if (error instanceof main_exports.errors.NotFound) {
      return false;
    }
    if (error instanceof main_exports.errors.PermissionDenied) {
      if ((await main_exports.permissions.query({ name: "read", path })).state === "granted") {
        return !options?.isReadable;
      }
    }
    throw error;
  }
}
function existsSync(path, options) {
  try {
    const stat2 = main_exports.statSync(path);
    if (options && (options.isReadable || options.isDirectory || options.isFile)) {
      if (options.isDirectory && options.isFile) {
        throw new TypeError("ExistsOptions.options.isDirectory and ExistsOptions.options.isFile must not be true together");
      }
      if (options.isDirectory && !stat2.isDirectory || options.isFile && !stat2.isFile) {
        return false;
      }
      if (options.isReadable) {
        return fileIsReadable(stat2);
      }
    }
    return true;
  } catch (error) {
    if (error instanceof main_exports.errors.NotFound) {
      return false;
    }
    if (error instanceof main_exports.errors.PermissionDenied) {
      if (main_exports.permissions.querySync({ name: "read", path }).state === "granted") {
        return !options?.isReadable;
      }
    }
    throw error;
  }
}
function fileIsReadable(stat2) {
  if (stat2.mode === null) {
    return true;
  } else if (main_exports.uid() === stat2.uid) {
    return (stat2.mode & 256) === 256;
  } else if (main_exports.gid() === stat2.gid) {
    return (stat2.mode & 32) === 32;
  }
  return (stat2.mode & 4) === 4;
}
async function testCommand(context) {
  try {
    const [testFlag, testPath] = parseArgs7(context.cwd, context.args);
    let result;
    switch (testFlag) {
      case "-f":
        result = (await safeLstat(testPath))?.isFile ?? false;
        break;
      case "-d":
        result = (await safeLstat(testPath))?.isDirectory ?? false;
        break;
      case "-e":
        result = await exists(testPath);
        break;
      case "-s":
        result = ((await safeLstat(testPath))?.size ?? 0) > 0;
        break;
      case "-L":
        result = (await safeLstat(testPath))?.isSymlink ?? false;
        break;
      default:
        throw new Error("unsupported test type");
    }
    return { code: result ? 0 : 1 };
  } catch (err) {
    return context.error(2, `test: ${errorToString(err)}`);
  }
}
function parseArgs7(cwd2, args2) {
  if (args2.length !== 2) {
    throw new Error("expected 2 arguments");
  }
  if (args2[0] == null || !args2[0].startsWith("-")) {
    throw new Error("missing test type flag");
  }
  return [args2[0], resolvePath(cwd2, args2[1])];
}
var __addDisposableResource = function(env3, value, async) {
  if (value !== null && value !== undefined) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === undefined) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async)
        inner = dispose;
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    if (inner)
      dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
    env3.stack.push({ value, dispose, async });
  } else if (async) {
    env3.stack.push({ async: true });
  }
  return value;
};
var __disposeResources = /* @__PURE__ */ function(SuppressedError2) {
  return function(env3) {
    function fail(e) {
      env3.error = env3.hasError ? new SuppressedError2(e, env3.error, "An error was suppressed during disposal.") : e;
      env3.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env3.stack.pop()) {
        try {
          if (!r.async && s === 1)
            return s = 0, env3.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async)
              return s |= 2, Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } else
            s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1)
        return env3.hasError ? Promise.reject(env3.error) : Promise.resolve();
      if (env3.hasError)
        throw env3.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
async function touchCommand(context) {
  try {
    await executetouch(context.args, context.cwd);
    return { code: 0 };
  } catch (err) {
    return context.error(`touch: ${errorToString(err)}`);
  }
}
async function executetouch(args2, cwd2) {
  const flags = parseArgs8(args2);
  for (const path of flags.paths) {
    const env_1 = { stack: [], error: undefined, hasError: false };
    try {
      const _f = __addDisposableResource(env_1, await main_exports.create(join32(cwd2, path)), false);
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources(env_1);
    }
  }
}
function parseArgs8(args2) {
  const paths = [];
  for (const arg of parseArgKinds(args2)) {
    if (arg.kind === "Arg")
      paths.push(arg.arg);
    else
      bailUnsupported(arg);
  }
  if (paths.length === 0)
    throw Error("missing file operand");
  return { paths };
}
function unsetCommand(context) {
  try {
    return {
      code: 0,
      changes: parseNames(context.args).map((name) => ({ kind: "unsetvar", name }))
    };
  } catch (err) {
    return context.error(`unset: ${errorToString(err)}`);
  }
}
function parseNames(args2) {
  if (args2[0] === "-f") {
    throw Error(`unsupported flag: -f`);
  } else if (args2[0] === "-v") {
    return args2.slice(1);
  } else {
    return args2;
  }
}
async function createWalkEntry(path) {
  path = toPathString(path);
  path = normalize3(path);
  const name = basename3(path);
  const info = await main_exports.stat(path);
  return {
    path,
    name,
    isFile: info.isFile,
    isDirectory: info.isDirectory,
    isSymlink: info.isSymlink
  };
}
function include(path, exts, match, skip) {
  if (exts && !exts.some((ext) => path.endsWith(ext))) {
    return false;
  }
  if (match && !match.some((pattern) => !!path.match(pattern))) {
    return false;
  }
  if (skip && skip.some((pattern) => !!path.match(pattern))) {
    return false;
  }
  return true;
}
async function* walk(root, options) {
  let { maxDepth = Infinity, includeFiles = true, includeDirs = true, includeSymlinks = true, followSymlinks = false, canonicalize = true, exts = undefined, match = undefined, skip = undefined } = options ?? {};
  if (maxDepth < 0) {
    return;
  }
  root = toPathString(root);
  if (exts) {
    exts = exts.map((ext) => ext.startsWith(".") ? ext : `.${ext}`);
  }
  if (includeDirs && include(root, exts, match, skip)) {
    yield await createWalkEntry(root);
  }
  if (maxDepth < 1 || !include(root, undefined, undefined, skip)) {
    return;
  }
  for await (const entry of main_exports.readDir(root)) {
    let path = join32(root, entry.name);
    let { isSymlink, isDirectory: isDirectory2 } = entry;
    if (isSymlink) {
      if (!followSymlinks) {
        if (includeSymlinks && include(path, exts, match, skip)) {
          yield { path, ...entry };
        }
        continue;
      }
      const realPath2 = await main_exports.realPath(path);
      if (canonicalize) {
        path = realPath2;
      }
      ({ isSymlink, isDirectory: isDirectory2 } = await main_exports.lstat(realPath2));
    }
    if (isSymlink || isDirectory2) {
      const opts = {
        maxDepth: maxDepth - 1,
        includeFiles,
        includeDirs,
        includeSymlinks,
        followSymlinks
      };
      if (exts !== undefined) {
        opts.exts = exts;
      }
      if (match !== undefined) {
        opts.match = match;
      }
      if (skip !== undefined) {
        opts.skip = skip;
      }
      yield* walk(path, opts);
    } else if (includeFiles && include(path, exts, match, skip)) {
      yield { path, ...entry };
    }
  }
}
function split(path) {
  const s = SEPARATOR_PATTERN.source;
  const segments = path.replace(new RegExp(`^${s}|${s}$`, "g"), "").split(SEPARATOR_PATTERN);
  const isAbsolute_ = isAbsolute3(path);
  const split2 = {
    segments,
    isAbsolute: isAbsolute_,
    hasTrailingSep: path.match(new RegExp(`${s}$`)) !== null
  };
  if (isWindows2 && isAbsolute_) {
    split2.winRoot = segments.shift();
  }
  return split2;
}
function throwUnlessNotFound(error) {
  if (!(error instanceof main_exports.errors.NotFound)) {
    throw error;
  }
}
function comparePath(a, b) {
  if (a.path < b.path)
    return -1;
  if (a.path > b.path)
    return 1;
  return 0;
}
async function* expandGlob(glob, options) {
  let { root, exclude = [], includeDirs = true, extended = true, globstar = true, caseInsensitive = false, followSymlinks = false, canonicalize = true } = options ?? {};
  const { segments, isAbsolute: isGlobAbsolute, hasTrailingSep, winRoot } = split(toPathString(glob));
  root ??= isGlobAbsolute ? winRoot ?? "/" : main_exports.cwd();
  const globOptions = { extended, globstar, caseInsensitive };
  const absRoot = isGlobAbsolute ? root : resolve3(root);
  const resolveFromRoot = (path) => resolve3(absRoot, path);
  const excludePatterns = exclude.map(resolveFromRoot).map((s) => globToRegExp3(s, globOptions));
  const shouldInclude = (path) => !excludePatterns.some((p) => p.test(path));
  let fixedRoot = isGlobAbsolute ? winRoot ?? "/" : absRoot;
  while (segments.length > 0 && !isGlob(segments[0])) {
    const seg = segments.shift();
    fixedRoot = joinGlobs3([fixedRoot, unescapeGlobSegment(seg)], globOptions);
  }
  let fixedRootInfo;
  try {
    fixedRootInfo = await createWalkEntry(fixedRoot);
  } catch (error) {
    return throwUnlessNotFound(error);
  }
  async function* advanceMatch(walkInfo, globSegment) {
    if (!walkInfo.isDirectory) {
      return;
    } else if (globSegment === "..") {
      const parentPath = joinGlobs3([walkInfo.path, ".."], globOptions);
      if (shouldInclude(parentPath)) {
        return yield await createWalkEntry(parentPath);
      }
      return;
    } else if (globSegment === "**") {
      return yield* walk(walkInfo.path, {
        skip: excludePatterns,
        maxDepth: globstar ? Infinity : 1,
        followSymlinks,
        canonicalize
      });
    }
    const globPattern = globToRegExp3(globSegment, globOptions);
    for await (const walkEntry of walk(walkInfo.path, {
      maxDepth: 1,
      skip: excludePatterns,
      followSymlinks
    })) {
      if (walkEntry.path !== walkInfo.path && walkEntry.name.match(globPattern)) {
        yield walkEntry;
      }
    }
  }
  let currentMatches = [fixedRootInfo];
  for (const segment of segments) {
    const nextMatchMap = /* @__PURE__ */ new Map;
    await Promise.all(currentMatches.map(async (currentMatch) => {
      for await (const nextMatch of advanceMatch(currentMatch, segment)) {
        nextMatchMap.set(nextMatch.path, nextMatch);
      }
    }));
    currentMatches = [...nextMatchMap.values()].sort(comparePath);
  }
  if (hasTrailingSep) {
    currentMatches = currentMatches.filter((entry) => entry.isDirectory);
  }
  if (!includeDirs) {
    currentMatches = currentMatches.filter((entry) => !entry.isDirectory);
  }
  yield* currentMatches;
}
var globEscapeChar = dntGlobalThis.Deno?.build.os === "windows" ? "`" : `\\`;
var globMetachars = "*?{}[]()|+@!";
function unescapeGlobSegment(segment) {
  let result = "";
  let lastIndex = 0;
  for (let i = 0;i < segment.length; i++) {
    const char = segment[i];
    if (char === globEscapeChar) {
      const nextChar = segment[i + 1];
      if (nextChar && globMetachars.includes(nextChar)) {
        result += segment.slice(lastIndex, i) + nextChar;
        i++;
        lastIndex = i + 1;
      }
    }
  }
  if (lastIndex === 0) {
    return segment;
  }
  result += segment.slice(lastIndex);
  return result;
}
var rs_lib_internal_exports2 = {};
__export3(rs_lib_internal_exports2, {
  __wbg_error_7534b8e9a36f1ab4: () => __wbg_error_7534b8e9a36f1ab4,
  __wbg_new_405e22f390576ce2: () => __wbg_new_405e22f390576ce2,
  __wbg_new_78feb108b6472713: () => __wbg_new_78feb108b6472713,
  __wbg_new_8a6f238a6ece86ea: () => __wbg_new_8a6f238a6ece86ea,
  __wbg_set_37837023f3d740e8: () => __wbg_set_37837023f3d740e8,
  __wbg_set_3f1d0b984ed272ed: () => __wbg_set_3f1d0b984ed272ed,
  __wbg_set_wasm: () => __wbg_set_wasm2,
  __wbg_stack_0ed75d68575b0f3c: () => __wbg_stack_0ed75d68575b0f3c,
  __wbindgen_debug_string: () => __wbindgen_debug_string2,
  __wbindgen_init_externref_table: () => __wbindgen_init_externref_table2,
  __wbindgen_number_new: () => __wbindgen_number_new,
  __wbindgen_string_new: () => __wbindgen_string_new,
  __wbindgen_throw: () => __wbindgen_throw2,
  parse: () => parse3
});
var wasm3;
function __wbg_set_wasm2(val) {
  wasm3 = val;
}
var lTextDecoder2 = typeof TextDecoder2 === "undefined" ? (0, module_mod.require)("util").TextDecoder : TextDecoder2;
var cachedTextDecoder2 = new lTextDecoder2("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder2.decode();
var cachedUint8ArrayMemory02 = null;
function getUint8ArrayMemory02() {
  if (cachedUint8ArrayMemory02 === null || cachedUint8ArrayMemory02.byteLength === 0) {
    cachedUint8ArrayMemory02 = new Uint8Array(wasm3.memory.buffer);
  }
  return cachedUint8ArrayMemory02;
}
function getStringFromWasm02(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder2.decode(getUint8ArrayMemory02().subarray(ptr, ptr + len));
}
var WASM_VECTOR_LEN2 = 0;
var lTextEncoder2 = typeof TextEncoder === "undefined" ? (0, module_mod.require)("util").TextEncoder : TextEncoder;
var cachedTextEncoder2 = new lTextEncoder2("utf-8");
var encodeString2 = typeof cachedTextEncoder2.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder2.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder2.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm02(arg, malloc, realloc) {
  if (realloc === undefined) {
    const buf = cachedTextEncoder2.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory02().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN2 = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory02();
  let offset = 0;
  for (;offset < len; offset++) {
    const code2 = arg.charCodeAt(offset);
    if (code2 > 127)
      break;
    mem[ptr + offset] = code2;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory02().subarray(ptr + offset, ptr + len);
    const ret = encodeString2(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN2 = offset;
  return ptr;
}
var cachedDataViewMemory02 = null;
function getDataViewMemory02() {
  if (cachedDataViewMemory02 === null || cachedDataViewMemory02.buffer.detached === true || cachedDataViewMemory02.buffer.detached === undefined && cachedDataViewMemory02.buffer !== wasm3.memory.buffer) {
    cachedDataViewMemory02 = new DataView(wasm3.memory.buffer);
  }
  return cachedDataViewMemory02;
}
function debugString2(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString2(val[0]);
    }
    for (let i = 1;i < length; i++) {
      debug += ", " + debugString2(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches && builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
function takeFromExternrefTable02(idx) {
  const value = wasm3.__wbindgen_export_3.get(idx);
  wasm3.__externref_table_dealloc(idx);
  return value;
}
function parse3(command) {
  const ptr0 = passStringToWasm02(command, wasm3.__wbindgen_malloc, wasm3.__wbindgen_realloc);
  const len0 = WASM_VECTOR_LEN2;
  const ret = wasm3.parse(ptr0, len0);
  if (ret[2]) {
    throw takeFromExternrefTable02(ret[1]);
  }
  return takeFromExternrefTable02(ret[0]);
}
function __wbg_error_7534b8e9a36f1ab4(arg0, arg1) {
  let deferred0_0;
  let deferred0_1;
  try {
    deferred0_0 = arg0;
    deferred0_1 = arg1;
    console.error(getStringFromWasm02(arg0, arg1));
  } finally {
    wasm3.__wbindgen_free(deferred0_0, deferred0_1, 1);
  }
}
function __wbg_new_405e22f390576ce2() {
  const ret = new Object;
  return ret;
}
function __wbg_new_78feb108b6472713() {
  const ret = new Array;
  return ret;
}
function __wbg_new_8a6f238a6ece86ea() {
  const ret = new Error;
  return ret;
}
function __wbg_set_37837023f3d740e8(arg0, arg1, arg2) {
  arg0[arg1 >>> 0] = arg2;
}
function __wbg_set_3f1d0b984ed272ed(arg0, arg1, arg2) {
  arg0[arg1] = arg2;
}
function __wbg_stack_0ed75d68575b0f3c(arg0, arg1) {
  const ret = arg1.stack;
  const ptr1 = passStringToWasm02(ret, wasm3.__wbindgen_malloc, wasm3.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN2;
  getDataViewMemory02().setInt32(arg0 + 4 * 1, len1, true);
  getDataViewMemory02().setInt32(arg0 + 4 * 0, ptr1, true);
}
function __wbindgen_debug_string2(arg0, arg1) {
  const ret = debugString2(arg1);
  const ptr1 = passStringToWasm02(ret, wasm3.__wbindgen_malloc, wasm3.__wbindgen_realloc);
  const len1 = WASM_VECTOR_LEN2;
  getDataViewMemory02().setInt32(arg0 + 4 * 1, len1, true);
  getDataViewMemory02().setInt32(arg0 + 4 * 0, ptr1, true);
}
function __wbindgen_init_externref_table2() {
  const table = wasm3.__wbindgen_export_3;
  const offset = table.grow(4);
  table.set(0, undefined);
  table.set(offset + 0, undefined);
  table.set(offset + 1, null);
  table.set(offset + 2, true);
  table.set(offset + 3, false);
}
function __wbindgen_number_new(arg0) {
  const ret = arg0;
  return ret;
}
function __wbindgen_string_new(arg0, arg1) {
  const ret = getStringFromWasm02(arg0, arg1);
  return ret;
}
function __wbindgen_throw2(arg0, arg1) {
  throw new Error(getStringFromWasm02(arg0, arg1));
}
var bytes2 = base64decode2("AGFzbQEAAAAB+AElYAJ/fwF/YAN/f38Bf2ACf38AYAN/f38AYAF/AGAFf39/f38AYAF/AX9gBH9/f38AYAR/f39/AX9gBX9/f39/AX9gAAFvYAAAYAABf2ACf28AYAd/f39/f39/AX9gB39/f39/f38AYAZ/f39/f38AYAN/fn4Bf2ADf35+AGAAA39/f2ACf38Bb2ADb29vAGADb39vAGABfAFvYAJ+fwF/YAJ/fgF/YAJ/fgBgA39/fgF/YAR/f39+AGACf38Df39/YAZ/f39/f38Bf2AFf39+f38AYAR/fn9/AGAFf398f38AYAR/fH9/AGAFf399f38AYAR/fX9/AALLBAwULi9yc19saWIuaW50ZXJuYWwuanMVX193YmluZGdlbl9zdHJpbmdfbmV3ABQULi9yc19saWIuaW50ZXJuYWwuanMaX193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWQAFRQuL3JzX2xpYi5pbnRlcm5hbC5qcxpfX3diZ19uZXdfNDA1ZTIyZjM5MDU3NmNlMgAKFC4vcnNfbGliLmludGVybmFsLmpzF19fd2JpbmRnZW5fZGVidWdfc3RyaW5nAA0ULi9yc19saWIuaW50ZXJuYWwuanMaX193YmdfbmV3Xzc4ZmViMTA4YjY0NzI3MTMAChQuL3JzX2xpYi5pbnRlcm5hbC5qcxpfX3diZ19zZXRfMzc4MzcwMjNmM2Q3NDBlOAAWFC4vcnNfbGliLmludGVybmFsLmpzFV9fd2JpbmRnZW5fbnVtYmVyX25ldwAXFC4vcnNfbGliLmludGVybmFsLmpzGl9fd2JnX25ld184YTZmMjM4YTZlY2U4NmVhAAoULi9yc19saWIuaW50ZXJuYWwuanMcX193Ymdfc3RhY2tfMGVkNzVkNjg1NzViMGYzYwANFC4vcnNfbGliLmludGVybmFsLmpzHF9fd2JnX2Vycm9yXzc1MzRiOGU5YTM2ZjFhYjQAAhQuL3JzX2xpYi5pbnRlcm5hbC5qcxBfX3diaW5kZ2VuX3Rocm93AAIULi9yc19saWIuaW50ZXJuYWwuanMfX193YmluZGdlbl9pbml0X2V4dGVybnJlZl90YWJsZQALA+YC5AIHBgADAwMAAA4FAwADBgYDBgIDCAgGAQMGAwIBBQIDAAQDAwYFCQMBAQABAAIC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ASEUIANBvAJqEOEBIAkhBiALIQQgDyEHDAELIAMgFDcCoAEgAyAHNgKcASADIAQ2ApgBIAMgBjYClAEgAyAMNgKQASADQQA2AmwgA0KAgICAwAA3AmRBBCENQRAhBUEAIQogDyEIIAshCQJAA0AgCEUEQEEAIQgMBgsgA0GAgICAeDYCvAIgA0EMaiITIANBvAJqIhAQngEgAy0AECEEIAMoAgwiDkGBgICAeEcNAyAEQQFxRQ0FIBAgCSAIEBggAygCxAIiEUEDRwRAIAMoAsACIQcgAygCvAIhBCADKALIAiESIAMoAswCIQwgAygC0AIhBiADIAMpAtQCIhU3AswCIAMgBjYCyAIgAyAMNgLEAiADIBI2AsACIAMgETYCvAIgEyAEIAcQjQEgAygCFCEEIAMoAhAhByADKAIMIg5BgYCAgHhHBEAgAykCGCEUIBAQjgIMAwsgAygCZCAKRgRAIANB5ABqEL8BIAMoAmghDQsgBSANaiIJIBU3AgAgCUEEayAGNgIAIAlBCGsgDDYCACAJQQxrIBI2AgAgCUEQayARNgIAIAMgCkEBaiIKNgJsIAVBGGohBSAEIQggByEJDAELCyADKQLUAiEUIAMoAtACIQQgAygCzAIhByADKALIAiEOCyAOQYCAgIB4Rw0CIAMpAmghFCADKAJkIQVBgICAgHggBxCkAgwECyADIBQ3AuABIAMgBzYC3AEgAyAENgLYASADIAY2AtQBDAULIANBE2otAABBGHQgAy8AEUEIdHIgBHIhByADKQIYIRQgAygCFCEECyADQeQAahDNASADIBQ3AuABIAMgBDYC3AEgAyAHNgLYASADIA42AtQBDAILIAMpAmghFCADKAJkIQULIAMgBTYCvAIgAyAUNwLAAiAUQv////8fWARAQQMhBSAUQoCAgIAQWgRAIANBsAJqIBSnIgRBDGopAgA3AwAgA0G4AmogBEEUaigCADYCACADQQA2AsQCIAMgBCkCBDcDqAIgBCgCACEFCyADQfgBaiADQaABaikCADcCACADQfABaiADQZgBaikCADcCACADQdwBaiADQbACaiIHKQMANwIAIANB5AFqIANBuAJqIgQoAgA2AgAgAyADKQKQATcC6AEgAyADKQOoAjcC1AEgA0G8AmoQzQEgBUEERg0CIANBNGogA0HoAWoiBkEQaikCADcCACADQSxqIAZBCGopAgA3AgAgA0EYaiAHKQMANwIAIANBIGogBCgCADYCACADIAYpAgA3AiQgAyADKQOoAjcCECADIAU2AgwgA0HkAGogCSAIEEkgAygCZEGAgICAeGsOAgUDBAsgA0HUAWogCyAPQfq0wABBLxCSASADQbwCahDNAQsgA0GQAWoQ4QELIANBiAFqIANB5AFqKAIAIgE2AgAgA0GAAWogA0HcAWopAgAiFDcDACADIAMpAtQBIhU3A3ggAEEcaiABNgIAIABBFGogFDcCACAAIBU3AgwgAEEFNgIIDAgLIAMtAHAhBiADQbwCaiADKAJoIgggAygCbCIEEBAgAygCxAJBBUcNAiADQcgBaiAIIAQQEAJAAkAgAygC0AEiCUEFRw0AIAMoAtQBIgdBgICAgHhGDQAgAygC5AEhCCADKALgASEEIAMoAtwBIQkgAygC2AEhCiADQfQCaiILQY20wABBLRC2ASALQfivwABB+q/AABDfASALIAogCRC5AiADQZwBaiAEIAggCxDoASADQQU2ApgBIAcgChDJAgwBCyADQZABaiAIIARBjbTAAEEtEIQCIAlBBUYNACADQcgBahDrAQsgA0G8AmoQ6wEMAwsgACADKQJkNwIMIABBBTYCCCAAQRxqIANB9ABqKAIANgIAIABBFGogA0HsAGopAgA3AgAMBQsgAygCECEKIANBPGogA0EUakEoECcaQYCAgIB4IAMoAmgQpAIMAgsgA0GQAWogA0G8AmpBOBAnGgsgAygCmAEiB0EFRg0BIANBgAFqIANBpAFqKQIAIhQ3AwAgA0GIAWogA0GsAWooAgAiBDYCACADIAMpApwBIhU3A3ggAygClAEhCCADKAKQASEJIANB5AJqIANBwAFqKQIANwIAIANB3AJqIANBuAFqKQIANwIAIANByAJqIBQ3AgAgA0HQAmogBDYCACADIAMpArABNwLUAiADIBU3AsACIAMgBzYCvAIgBUEDRgRAIANByAFqIgEgA0EMakEwECcaIANB+AFqIANBvAJqQTAQJxpB5AAQ+wEiCiABQeAAECcgBjoAYEEEIQUMAQsgACABIAJBurTAAEHAABCEAiADQbwCahDgAQwCCyAAIAo2AgwgACAFNgIIIAAgCDYCBCAAIAk2AgAgAEEQaiADQTxqQSgQJxoMAgsgA0GIAWogA0GsAWooAgAiATYCACADQYABaiADQaQBaikCACIUNwMAIAMgAykCnAEiFTcDeCAAQRxqIAE2AgAgAEEUaiAUNwIAIAAgFTcCDCAAQQU2AggLIANBDGoQ+gELIANBgANqJAAL5xQCC38CfiMAQeACayIDJAAgA0HYAWoiBSABIAIQHiADQRBqIgQgA0HsAWooAgA2AgAgAyADKQLkATcDCCADKALgASEHIAMoAtwBIQYCQAJAAkACQAJ+AkACQAJAAkACQAJAAkACQAJAAkAgAygC2AFFBEAgA0HgAWogBCgCACIENgIAIAMgAykDCDcD2AEgBA0CIAUQywFBgICAgHghBgwBCyADQcgAaiAEKAIANgIAIAMgAykDCDcDQAsgA0EINgKsAiADQcACaiADQcgAaigCADYCACADIAMpA0A3ArgCIAMgBzYCtAIgAyAGNgKwAgwBCyADQYgBaiADQeABaiIIKAIAIgQ2AgAgAyADKQPYASIONwOAASADQcgAaiAENgIAIAMgDjcDQCADQdgBaiIFIAYgBxAWIANBEGoiBCADQewBaigCADYCACADIAMpAuQBNwMIIAMoAuABIQcgAygC3AEhBgJAAkAgAygC2AFFBEAgCCAEKAIAIgQ2AgAgAyADKQMINwPYASAERQ0CIANCiICAgICAgICAfzcCrAIgBRDMAUGAgICAeCEGDAELIANBCDYCrAIgA0HAAmogBCgCADYCACADIAMpAwg3ArgCIAMgBzYCtAIgAyAGNgKwAgsgA0FAaxDLAQwBCwJ/IAMoAkgiBEEBTQRAIARFDQMgA0G4AmogAygCRCIFQQhqKQIANwIAIANBwAJqIAVBEGopAgA3AgAgAyAFKQIANwKwAiAFIAVBGGogBEEYbEEYaxDlAiADQQU2AqwCIAMgBzYCqAIgAyAGNgKkAiADIARBAWs2AkhBBQwBCyADQaQCaiABIAJBwLPAAEHNABCGAiADKAKsAgshCSADQdgBahDMASADQUBrEMsBIAlBCEcNAiADKAKwAiEGCyAGQYCAgIB4RgRAIANBCGpBuc7AAEEBELYBIANB2AFqIAMoAgwiCyADKAIQIAEgAhClASADKALoASEIIAMoAuQBIQcgAygC4AEhBCADKALcASEFIAMoAtgBIgZBgYCAgHhHBEAgCCEKDAULIANB2AFqIAUgBBBAIAMoAugBIQogAygC5AEhCSADKALgASEEIAMoAtwBIQUgAygC2AEiBkGBgICAeEcNAyAFRQRAIAQhBiAHIQUgCCEEDAQLIAMoAgggCxDJAgwFCyADKQK8AiEOIAMoArgCIQQgAygCtAIhBQwJCyMAQTBrIgAkACAAQQA2AgQgAEEANgIAIABBAzYCDCAAQcCHwAA2AgggAEICNwIUIAAgAEEEaq1CgICAgIABhDcDKCAAIACtQoCAgICAAYQ3AyAgACAAQSBqNgIQIABBCGpBsLPAABDjAQALIANBoAFqIANBzAJqKQIANwMAIANBqAFqIANB1AJqKQIANwMAIANBogJqIANB3wJqLQAAOgAAIAMgAykCxAI3A5gBIAMgAy8A3QI7AaACIAMpArwCIQ4gAygCuAIhBCADKAK0AiEFIAMoArACIQYgAygCqAIhASADKAKkAiECIAMtANwCIQcMBgsgCSEHCyADKAIIIAsQyQICQCAGQYCAgIB4aw4CAAECC0GAgICAeCAFEKQCQQAhByACIQQgASEFCyADQdgBaiAFIAQQECADKALgASIJQQVHDQEgAykC8AEiDkIgiKchCiADKALsASEEIAMoAugBIQUgAygC5AEhBiAOpyEHC0EIIQkgB60gCq1CIIaEDAELIANBoAFqIANBgAJqKQIANwMAIANBqAFqIANBiAJqKQIANwMAIAMgAykC+AE3A5gBIAdBAEchByADKALsASEEIAMoAugBIQUgAygC5AEhBiADKALcASEBIAMoAtgBIQIgAykC8AELIQ4gAygCrAJBCEYEQEGAgICAeCADKAK0AhCkAgsgCUEIRg0BCyADQcwCaiADQagBaikDADcCACADQcQCaiADQaABaikDADcCACADQdcCaiADQaICai0AADoAACADIAMpA5gBNwK8AiADIAc6ANQCIAMgDjcCtAIgAyAENgKwAiADIAU2AqwCIAMgBjYCqAIgAyAJNgKkAiADIAMvAaACOwDVAiADQdgBaiACIAEQjQEgAygC4AEhAiADKALcASEBIAMoAtgBIghBgYCAgHhGDQEgAykC5AEhDiADQaQCahC6ASACIQQgASEFIAghBgsgACAONwIYIAAgBDYCFCAAIAU2AhAgACAGNgIMIABBCDYCCAwBCyADQThqIANBvAJqIghBGGooAgA2AgAgA0EwaiAIQRBqKQIANwIAIANBKGogCEEIaikCADcCACADIAgpAgA3AiAgAyAONwIYIAMgBDYCFCADIAU2AhAgAyAGNgIMIAMgCTYCCCADQewAaiABIAIQWgJAAkACQAJAAkACQCADKAJsIgxBgICAgHhrDgIBAgALIAAgAykCbDcCDCAAQQg2AgggAEEcaiADQfwAaigCADYCACAAQRRqIANB9ABqKQIANwIADAQLIANBQGsgA0EQakEsECcaDAELIAMtAHghDSADQdgBaiADKAJwIgQgAygCdCICEBECQCADKALgAUEIRgRAIANBpAJqIAQgAhARAkACQCADKAKsAiIBQQhHDQAgAygCsAIiBUGAgICAeEYNACADKALAAiEEIAMoArwCIQIgAygCuAIhASADKAK0AiEIIANBlAJqIgdBgbPAAEEsELYBIAdB+K/AAEH6r8AAEN8BIAcgCCABELkCIANBpAFqIAIgBCAHEOgBIANBCDYCoAEgBSAIEMkCDAELIANBmAFqIAQgAkGBs8AAQSwQhgIgAUEIRg0AIANBpAJqEOwBCyADQdgBahDsAQwBCyADQZgBaiADQdgBakE8ECcaCyADKAKgASILQQhGDQEgA0GIAWoiBiADQawBaikCADcDACADQZABaiIEIANBtAFqKAIANgIAIAMgAykCpAE3A4ABIAMoApwBIQIgAygCmAEhASADQfABaiIKIANB0AFqKAIANgIAIANB6AFqIgkgA0HIAWopAgA3AwAgA0HgAWoiByADQcABaikCADcDACADIAMpArgBNwPYASADQagBaiIIIAQoAgA2AgAgA0GgAWoiBSAGKQMANwMAIAMgAykDgAE3A5gBIANBpAJqIgQgA0EIakE0ECcaQewAEPsBIgYgBEE0ECciBCALNgI0IAQgDToAaCAEIAMpA5gBNwI4IARBQGsgBSkDADcCACAEQcgAaiAIKAIANgIAIAQgAykD2AE3AkwgBEHUAGogBykDADcCACAEQdwAaiAJKQMANwIAIARB5ABqIAooAgA2AgBBByEJCyAAIAY2AgwgACAJNgIIIAAgAjYCBCAAIAE2AgAgAEEQaiADQUBrQSwQJxogDEGBgICAeEYNAiAMIAMoAnAQpAIMAgsgA0GQAWogA0G0AWooAgAiATYCACADQYgBaiADQawBaikCACIPNwMAIAMgAykCpAEiDjcDgAEgAEEcaiABNgIAIABBFGogDzcCACAAIA43AgwgAEEINgIICyADQQhqELoBCyADQeACaiQAC6gWAgp/An4jAEFAaiIFJAACQAJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiCARAIAAgACgCDEEBaiIDNgIMIANB9QNJDQEgACgCECIBRQ0CIAFBoM/AAEEZECJFDQJBASEEDAsLIAAoAhAiAEUNCiAAQbnPwABBARAiIQQMCgsgACgCCCIHIAAoAgQiBkkEQEEBIQQgACAHQQFqIgI2AggCQAJAAkACQAJAAkACQAJAIAcgCGotAAAiA0HCAGsOGAIDAAAAAAABAAAABgQAAAAAAAAAAAAGBQALIAAoAhAiAUUNECABQZDPwABBEBAiDREMEAsgACABEBINECABDQUMDQtBACECIwBBIGsiCSQAAkACQAJAAkACfgJAAkACQCAAKAIAIgsEQCAAKAIIIgMgACgCBCIISQRAIAMgC2otAABB3wBGDQMLIAMgCCADIAhLGyEGIAMhAgNAIAIgCEkEQCACIAtqLQAAQd8ARg0DCyACIAZGDQYCQCACIAtqLQAAIgpBMGsiB0H/AXFBCkkNACAKQeEAa0H/AXFBGk8EQCAKQcEAa0H/AXFBGk8NCCAKQR1rIQcMAQsgCkHXAGshBwsgACACQQFqIgI2AgggCSANEJUBIAkpAwhCAFINBiAJKQMAIgwgB61C/wGDfCINIAxaDQALDAULIAAoAhAiAUUNByABQbnPwABBARAiIQIMBwsgACACQQFqNgIIIA1Cf1INAQwDCyAAIANBAWo2AghCAAwBCyANQgF8CyEMIAwgA0EBa61aDQBBASECIAAoAhAhAyAAKAIMQQFqIgZB9ANLDQEgA0UEQEEAIQIMBAsgCUEYaiIDIABBCGoiBykCADcDACAAIAY2AgwgByAMPgIAIAkgACkCADcDECAAIAFBAXEQEiECIAcgAykDADcCACAAIAkpAxA3AgAMAwtBACECIAAoAhAiAUUNASABQZDPwABBEBAiRQ0BQQEhAgwCCyADRQ0AIANBoM/AAEEZECINAQsgACACOgAEQQAhAiAAQQA2AgALIAlBIGokACACDQ8MDQsgBUEgaiIBIAAQTCAFLQAgRQRAAkAgACgCAARAIAUpAyghDCABIAAQJiAFKAIgRQ0BIAVBGGogBUEoaikCADcDACAFIAUpAiA3AxAgACgCECIBRQ0PIAVBEGogARAXDREgACgCECIBRSAMUHINDyABKAIUQQRxDQ8gASgCHEHDz8AAQQEgASgCICgCDBEBAA0RIAAoAhAjAEGAAWsiAiQAQYEBIQYDQCACIAZqQQJrIAynQQ9xIgFBMHIgAUHXAGogAUEKSRs6AAAgBkEBayEGIAxCD1YgDEIEiCEMDQALQafQwABBAiACIAZqQQFrQYEBIAZrEDEgAkGAAWokAA0RIAAoAhAiASgCHEHEz8AAQQEgASgCICgCDBEBAEUNDwwRCyAAKAIQIgBFBEBBACEEDBELIABBuc/AAEEBECIhBAwQCyAAKAIQIQMCQCAFLQAkIgFFBEAgA0UNASADQZDPwABBEBAiRQ0BDBELIANFDQAgA0Ggz8AAQRkQIkUNAAwQCyAAIAE6AAQMCwsgACgCECEDAkAgBS0AISIBRQRAIANFDQEgA0GQz8AAQRAQIkUNAQwQCyADRQ0AIANBoM/AAEEZECJFDQAMDwsgACABOgAEDAoLAkAgAiAGTw0AIAAgB0ECajYCCCACIAhqLQAAIgJBwQBrQf8BcUEaTwRAIAJB4QBrQYCAxAAhAkH/AXFBGk8NAQsgACABEBIEQAwPCwJAAkACfwJAAkACQAJAAkAgACgCAEUEQEEAIQQgACgCECIBRQ0XIAFByMjAAEECECIEQEEBIQQMGAsgACgCAEUNAQsgBUEgaiIBIAAQTCAFLQAgDQcgACgCAEUNASAFKQMoIQwgASAAECYgBSgCIEUNBiAFQThqIAVBKGopAgA3AwAgBSAFKQIgNwMwIAJBgIDEAEcNAiAFKAI0IAUoAjxyRQ0UIAAoAhAiAUUNFCABQcjIwABBAhAiRQ0DQQEhBAwWCyAAKAIQIgBFDRUgAEG5z8AAQQEQIiEEDBULIAAoAhAiAEUEQEEAIQQMFQsgAEG5z8AAQQEQIiEEDBQLQQAgACgCECIBRQ0CGiABQcXPwABBAxAiRQ0BQQEhBAwTCyAAKAIQIgFFDRBBASEEIAVBMGogARAXRQ0QDBILIAAoAhALIQMCQAJAIAJBwwBrIgEEQCABQRBGDQEgBSACNgIgIANFDQJBASEEIAVBIGogAxBiRQ0CDBMLIANFDQFBASEEIANByM/AAEEHECJFDQEMEgsgA0UNAEEBIQQgA0HPz8AAQQQQIg0RCyAAKAIQIQIgBSgCNCAFKAI8ckUNCyACRQ0OQQEhBCACQfDVwABBARAiDRAgACgCECIBRQ0OIAVBMGogARAXDRAgACgCECECDAsLIAAoAhAhAwJAIAUtACQiAUUEQCADRQ0BIANBkM/AAEEQECJFDQFBASEEDBELIANFDQAgA0Ggz8AAQRkQIkUNAEEBIQQMEAsgACABOgAEDAsLIAAoAhAhAwJAIAUtACEiAUUEQCADRQ0BIANBkM/AAEEQECJFDQFBASEEDBALIANFDQAgA0Ggz8AAQRkQIkUNAEEBIQQMDwsgACABOgAEDAoLIAAoAhAiAUUNDCABQZDPwABBEBAiRQ0MDA0LIAAoAhAhAgwGCyACIAZPDQQgAiAIai0AAEHzAEcNBCAAIAdBAmoiBDYCCCAEIAZPDQMgBCAIai0AAEHfAEcNAyAAIAdBA2o2AggMBAsgACgCECIBRQ0HIAFByMjAAEECECJFDQcMCgsgACgCECIBRQ0IIAFBkM/AAEEQECJFDQhBASEEDAkLIABBAToABAwECwJAA0ACQCAEIAZJBEAgBCAIai0AAEHfAEYNAQsgBCAGRg0CAkAgBCAIai0AACICQTBrIgFB/wFxQQpJDQAgAkHhAGtB/wFxQRpPBEAgAkHBAGtB/wFxQRpPDQQgAkEdayEBDAELIAJB1wBrIQELIAAgBEEBaiIENgIIIAUgDRCVASAFKQMIQgBSDQIgBSkDACIMIAGtQv8Bg3wiDSAMWg0BDAILCyAAIARBAWo2AgggDUJ9WA0BCyAAKAIQIgFFDQYgAUGQz8AAQRAQIkUNBkEBIQQMBwsgACgCECECIABBADYCECAAQQAQEkUEQCAAIAI2AhAMAQtBjMvAAEE9IAVBIGpB/MrAAEGAz8AAEJYBAAsgAgRAQQEhBCACQcPJwABBARAiDQYLQQEhBCAAEBwNBSADQc0ARwRAIAAoAhAiAQRAIAFB1M/AAEEEECINBwsgAEEAEBINBgsgACgCECIBRQ0DIAFBwsnAAEEBECJFDQMMBQsgAkUNAkEBIQQgAkHTz8AAQQEQIg0EIAAoAhAiAUUNAiAMIAEQTg0EIAAoAhAiAUUNAiABQYbMwABBARAiRQ0CDAQLQQAhBCAAQQA2AgAMAwsgACgCECIBBEAgAUHDycAAQQEQIg0DCwJ/QQAhAiAAKAIAIgMEQANAAkAgACgCCCIBIAAoAgRPDQAgASADai0AAEHFAEcNACAAIAFBAWo2AghBAAwDCwJAIAJFDQAgACgCECIBRQ0AIAFBwc/AAEECECJFDQBBAQwDC0EBIAAQRA0CGiACQQFrIQIgACgCACIDDQALC0EACw0CIAAoAhAiAUUNACABQcLJwABBARAiDQILQQAhBCAAKAIARQ0BIAAgACgCDEEBazYCDAwBC0EAIQQgAEEAOgAEIABBADYCAAsgBUFAayQAIAQL6BsCCX8CfiMAQSBrIgYkAAJAAkACQAJAAkACQAJAAkACQCAAKAIAIgUEQCAAKAIIIgIgACgCBCIHSQ0BIAAoAhAiAUUNAiABQZDPwABBEBAiRQ0CQQEhAgwJCyAAKAIQIgBFDQggAEG5z8AAQQEQIiECDAgLIAAgAkEBaiIDNgIIIAIgBWotAAAhBCAAIAAoAgxBAWoiCDYCDCAIQfQDSw0BAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgBEHBAGsOOQ0EAAAAAAAAAAAAAAAAAAAKCQAOAA8AAAAAAAAAAAAAAwYHAAgAAAIDAgADAgMCAQAAAwIAAAADAgALIAAoAhAiAUUNDyABQZDPwABBEBAiRQ0PQQEhAgwWCyAAKAIQIgFFDRRBASECIAFBus7AAEEBECJFDRQMFQsgACAEEDtFDRNBASECDBQLIAMgB08NESADIAVqLQAAQe4ARg0BDBELIAEhA0EAIQEjAEEgayIEJAACQAJAAkACQAJ+AkACQAJAIAAoAgAiBwRAIAAoAggiAiAAKAIEIghJBEAgAiAHai0AAEHfAEYNAwsgAiAIIAIgCEsbIQogAiEBA0AgASAISQRAIAEgB2otAABB3wBGDQMLIAEgCkYNBgJAIAEgB2otAAAiBUEwayIJQf8BcUEKSQ0AIAVB4QBrQf8BcUEaTwRAIAVBwQBrQf8BcUEaTw0IIAVBHWshCQwBCyAFQdcAayEJCyAAIAFBAWoiATYCCCAEIAsQlQEgBCkDCEIAUg0GIAQpAwAiDCAJrUL/AYN8IgsgDFoNAAsMBQsgACgCECICRQ0HIAJBuc/AAEEBECIhAQwHCyAAIAFBAWo2AgggC0J/Ug0BDAMLIAAgAkEBajYCCEIADAELIAtCAXwLIQsgCyACQQFrrVoNAEEBIQEgACgCECECIAAoAgxBAWoiBUH0A0sNASACRQRAQQAhAQwECyAEQRhqIgcgAEEIaiICKQIANwMAIAAgBTYCDCACIAs+AgAgBCAAKQIANwMQIAAgA0EBcRATIQEgAiAHKQMANwIAIAAgBCkDEDcCAAwDC0EAIQEgACgCECICRQ0BIAJBkM/AAEEQECJFDQFBASEBDAILIAJFDQAgAkGgz8AAQRkQIg0BCyAAIAE6AARBACEBIABBADYCAAsgBEEgaiQAIAFFDRFBASECDBILIAAgAkECajYCCCAAKAIQIgFFDQ9BASECIAFBhczAAEEBECJFDQ8MEQsgBkEYaiAAEGsgBigCGCIBBEAgBkEIaiABIAYoAhwQSwJAAkACQCAGKAIIRQ0AIAYpAxAiC0IBVg0AIAunQQFrDQEMAgsgACgCECIBRQ0MIAFBkM/AAEEQECJFDQxBASECDBMLIAAoAhAiAUUNESABQZjQwABBBRAiRQ0RQQEhAgwSCyAAKAIQIgFFDRAgAUGd0MAAQQQQIkUNEEEBIQIMEQsgACgCECEBAkAgBi0AHCICRQRAIAFFDQEgAUGQz8AAQRAQIkUNAUEBIQIMEgsgAUUNACABQaDPwABBGRAiRQ0AQQEhAgwRCyAAIAI6AAQMDQsgBkEYaiAAEGsgBigCGCIBBEAgBkEIaiABIAYoAhwQSwJAAkAgBigCCEEBRw0AIAYpAxAiC0KAgICAEFoNACALpyIBQYCwA3NBgIDEAGtBgJC8f0kNACALQoCAxABSDQELIAAoAhAiAUUNCiABQZDPwABBEBAiRQ0KQQEhAgwRCyAAKAIQIQMjAEEQayICJAACf0EAIANFDQAaAkAgAygCHEEnIAMoAiAoAhARAAANACACQQhqIQUDQAJAAkAgAUEiRwRAIAFBgIDEAEYEQCADKAIcQScgAygCICgCEBEAAAwGCyACIAEQKSACLQAAQYABRw0BQYABIQQDQAJAIARBgAFHBEAgAi0ACiIBIAItAAtPDQUgAiABQQFqOgAKIAEgAmotAAAhAQwBC0EAIQQgBUEANgIAIAIoAgQhASACQgA3AwALIAMoAhwgASADKAIgKAIQEQAARQ0ACwwEC0GAgMQAIQEgAygCHEEiIAMoAiAoAhARAABFDQIMAwsgAi0ACiIBIAItAAsiBCABIARLGyEEA0AgASAERg0BIAEgAmohByABQQFqIQEgAygCHCAHLQAAIAMoAiAoAhARAABFDQALDAILQYCAxAAhAQwACwALQQELIAJBEGokAEUND0EBIQIMEAsgACgCECEBAkAgBi0AHCICRQRAIAFFDQEgAUGQz8AAQRAQIkUNAUEBIQIMEQsgAUUNACABQaDPwABBGRAiRQ0AQQEhAgwQCyAAIAI6AAQMDAsCQCABDQAgACgCECIDRQ0AQQEhAiADQaHQwABBARAiDQ8LIAAoAhAiAwRAQQEhAiADQcXJwABBARAiDQ8LIAAQIUUNCkEBIQIMDgsgAyAHTw0AIAMgBWotAABB5QBGDQELAkAgAQ0AIAAoAhAiA0UNAEEBIQIgA0Gh0MAAQQEQIg0NCyAAKAIQIgMEQEEBIQIgA0HEycAAQQEQIg0NCyAEQdIARw0BDAcLIAAgAkECajYCCCAAECFFDQpBASECDAsLIAAoAhAiAkUNBSACQdnPwABBBBAiRQ0FQQEhAgwKCwJAIAENACAAKAIQIgNFDQBBASECIANBodDAAEEBECINCgsgACgCECIDBEBBASECIANBw8/AAEEBECINCgsgABCPAQRAQQEhAgwKCyAAKAIQIgNFDQhBASECIANBxM/AAEEBECJFDQUMCQsCQCABDQAgACgCECIDRQ0AQQEhAiADQaHQwABBARAiDQkLIAAoAhAiAwRAQQEhAiADQcHJwABBARAiDQkLQQAhAgJ/AkAgACgCACIDRQ0AA0ACQCAAKAIIIgQgACgCBE8NACADIARqLQAAQcUARw0AIAAgBEEBajYCCAwCCwJAIAJFDQAgACgCECIDRQ0AIANBwc/AAEECECJFDQBBAQwDC0EBIABBARATDQIaIAJBAWohAiAAKAIAIgMNAAsLQQALIQMgBiACNgIEIAYgAzYCACAGKAIABEBBASECDAkLIAYoAgRBAUYEQCAAKAIQIgNFDQhBASECIANBwMnAAEEBECINCQsgACgCECIDRQ0HQQEhAiADQZ3hwABBARAiRQ0EDAgLAkAgAQ0AIAAoAhAiA0UNAEEBIQIgA0Gh0MAAQQEQIg0IC0EBIQIgAEEBEBINBwJAAkACQAJAAkACQCAAKAIAIgQEQCAAKAIIIgMgACgCBE8NBiAAIANBAWo2AgggAyAEai0AAEHTAGsOAwMCCgELIAAoAhAiAEUEQEEAIQIMDgsgAEG5z8AAQQEQIiECDA0LIAAoAhAiAUUNBSABQZDPwABBEBAiRQ0FDAwLIAAoAhAiAwRAIANBwcnAAEEBECINDAsgABCPAUUNAQwLCyAAKAIQIgJFDQEgAkGi0MAAQQMQIkUNAUEBIQIMCgsgACgCECIDRQ0IIANBneHAAEEBECJFDQUMCQtBASECIwBBMGsiBCQAAkACQAJAIAAoAgAiB0UNAANAAkAgACgCCCIFIAAoAgQiCE8NACAFIAdqLQAAQcUARw0AIAAgBUEBajYCCAwCCwJAAkACQAJAAkACQCAKRQ0AIAAoAhAiA0UNACADQcHPwABBAhAiBEBBASEDDAoLIAAoAgAiB0UNASAAKAIIIQUgACgCBCEICyAFIAhPDQIgBSAHai0AAEHzAEcNAiAAIAVBAWoiAzYCCCADIAhPDQEgAyAHai0AAEHfAEcNASAAIAVBAmo2AggMAgsgACgCECIFRQ0FQQEhAyAFQbnPwABBARAiDQcMAwtCACELAkADQAJAIAMgCEkEQCADIAdqLQAAQd8ARg0BCyADIAhGDQICQCADIAdqLQAAIglBMGsiBUH/AXFBCkkNACAJQeEAa0H/AXFBGk8EQCAJQcEAa0H/AXFBGk8NBCAJQR1rIQUMAQsgCUHXAGshBQsgACADQQFqIgM2AgggBCALEJUBIAQpAwhCAFINAiAEKQMAIgwgBa1C/wGDfCILIAxaDQEMAgsLIAAgA0EBajYCCCALQn1YDQELIAAoAhAiAwRAIANBkM/AAEEQECINAgsgAEEAOgAEIABBADYCAAwECyAEQRBqIAAQJiAEKAIQBEAgBEEoaiAEQRhqKQIANwMAIAQgBCkCEDcDICAAKAIQIgMEQCAEQSBqIAMQFw0CIANB/NjAAEECECINAgtBASEDIABBARATRQ0CDAYLIAAoAhAhAwJAIAQtABQiBUUEQCADRQ0GIANBkM/AAEEQECINAQwGCyADRQ0FIANBoM/AAEEZECJFDQULQQEhAwwFC0EBIQMMBAsgCkEBaiEKIAAoAgAiBw0ACwtBACEDDAELIAAgBToABEEAIQMgAEEANgIACyAEQTBqJAAgAw0IIAAoAhAiA0UNByADQaXQwABBAhAiRQ0EDAgLIAAoAhAiAUUNACABQZDPwABBEBAiDQcLQQAhAiAAQQA6AAQgAEEANgIADAYLAkAgACgCECIBRQ0AIAFBoM/AAEEZECJFDQBBASECDAYLIABBAToABAwCC0EBIQIgAEEBEBMNBAsgAQ0CIAAoAhAiAUUNAkEBIQIgAUGGzMAAQQEQIkUNAgwDC0EAIQIgAEEANgIADAILIAAgBBA7RQ0AQQEhAgwBC0EAIQIgACgCAEUNACAAIAAoAgxBAWs2AgwLIAZBIGokACACC6AMAQh/IwBB8ABrIgckACAAKAIEIQsgACgCACEIIAdBADYCBAJ/AkAgCC0AEEEBRw0AIAgoAgAhCQJAAkACQCALRQRAIAcgCEEMaq1CgICAgIABhDcDCCAHQQM6AGQgB0EANgJgIAdCIDcCWCAHQoCAgIDAADcCUCAHQQI2AkggB0EBNgI8IAdBAjYCLCAHQZzcwAA2AiggB0EBNgI0IAlBHGooAgAgCUEgaigCACAHIAdByABqIgw2AjggByAHQQhqIg02AjAgB0EoaiIOEDMNAiAILQAQQQFHDQEgCCgCACEJIAdCgICAgKABNwMQIAcgB0EEaq1CgICAgJABhDcDCCAHQQM6AGQgB0EANgJgIAdCIDcCWCAHQoGAgIAQNwJQIAdBAjYCSCAHQQE2AjwgB0ECNgIsIAdBsNzAADYCKCAHQQI2AjQgCUEcaigCACAJQSBqKAIAIAcgDDYCOCAHIA02AjAgDhAzDQIMAQsgCUEcaigCAEHA3MAAQQYgCUEgaigCACgCDBEBAA0BIAgtABBBAUcNACAIKAIAIQkgB0KAgICA0AE3AxAgB0H02MAANgIoIAdC9NjAgNAANwMIIAdBAzoAZCAHQQA2AmAgB0IgNwJYIAdCgYCAgBA3AlAgB0ECNgJIIAdBATYCPCAHQQE2AiwgB0ECNgI0IAlBHGooAgAgCUEgaigCACAHIAdByABqNgI4IAcgB0EIajYCMCAHQShqEDMNAQsCQCABKAIAQQNGBEAgCCgCACIBQRxqKAIAQaTawABBCSABQSBqKAIAKAIMEQEARQ0BDAILIAgtABBFBEAgB0HoAGogAUEgaikCADcDACAHQeAAaiABQRhqKQIANwMAIAdB2ABqIAFBEGopAgA3AwAgB0HQAGogAUEIaikCADcDACAHIAEpAgA3A0ggCCgCACEBIAcgB0HIAGqtQoCAgICgAYQ3AyAgB0EDOgBEIAdBBDYCQCAHQiA3AjggB0ECNgIwIAdBAjYCKCAHQQE2AhwgB0EBNgIMIAdB9NjAADYCCCAHQQE2AhQgAUEcaigCACABQSBqKAIAIAcgB0EoajYCGCAHIAdBIGo2AhAgB0EIahAzDQIMAQsgB0HoAGogAUEgaikCADcDACAHQeAAaiABQRhqKQIANwMAIAdB2ABqIAFBEGopAgA3AwAgB0HQAGogAUEIaikCADcDACAHIAEpAgA3A0ggCCgCACEBIAcgB0HIAGqtQoCAgICgAYQ3AwggB0EBNgIsIAdB9NjAADYCKCAHQgE3AjQgAUEcaigCACABQSBqKAIAIAcgB0EIajYCMCAHQShqEDMNAQsgCCgCACIBKAIcQfzawABBASABKAIgKAIMEQEADQAgA0EBcUUgAigCAEECRnINAiAHIAQ2AiAgCC0AEEEBRgRAIAgoAgAhASAHQoCAgICgATcDECAHQfTYwAA2AiggB0L02MCA0AA3AwggB0EDOgBkIAdBADYCYCAHQiA3AlggB0KBgICAEDcCUCAHQQI2AkggB0EBNgI8IAdBATYCLCAHQQI2AjQgAUEcaigCACABQSBqKAIAIAcgB0HIAGo2AjggByAHQQhqNgIwIAdBKGoQMw0BCyAIKAIAIgFBHGooAgBBxtzAAEEQIAFBIGooAgAoAgwRAQANACAIKAIEIAgoAgghAyAHQdQAaiACQQhqKAIANgIAIAcgCCgCACIENgJIIAcgAikCADcCTCAEIAdBzABqIAMoAhARAQANACAIKAIAIQEgByAHQSBqrUKAgICAgAGENwMoIAdBATYCTCAHQdjcwAA2AkggB0IBNwJUIAFBHGooAgAgAUEgaigCACAHIAdBKGoiAzYCUCAHQcgAaiIEEDMNACAFQQFxRQ0BIAcgBjYCCCAIKAIAIQEgByAHQQhqrUKAgICAgAGENwMoIAdBATYCTCAHQdjcwAA2AkggB0IBNwJUIAFBHGooAgAgAUEgaigCACAHIAM2AlAgBBAzRQ0BC0EBDAILQQEgCCgCACICQRxqKAIAQfzawABBASACQSBqKAIAKAIMEQEADQEaCyAAIAtBAWo2AgRBAAsgB0HwAGokAAvgCgIKfwF+QQEhDQJ/AkACQAJAAkACQAJAAkACQAJAAkACQCAEQQFGBEBBASEIDAELQQEhBkEBIQcDQCAFIAtqIgggBE8NAiAHIQwCQCADIAZqLQAAIgcgAyAIai0AACIGSQRAIAUgDGpBAWoiByALayENQQAhBQwBCyAGIAdHBEBBASENIAxBAWohB0EAIQUgDCELDAELQQAgBUEBaiIHIAcgDUYiBhshBSAHQQAgBhsgDGohBwsgBSAHaiIGIARJDQALQQEhBkEBIQdBACEFQQEhCANAIAUgCWoiCiAETw0DIAchDAJAIAMgBmotAAAiByADIApqLQAAIgZLBEAgBSAMakEBaiIHIAlrIQhBACEFDAELIAYgB0cEQEEBIQggDEEBaiEHQQAhBSAMIQkMAQtBACAFQQFqIgcgByAIRiIGGyEFIAdBACAGGyAMaiEHCyAFIAdqIgYgBEkNAAsgCyEFCyAEIAUgCSAFIAlLIgUbIgxJDQIgDSAIIAUbIgcgDGoiBSAHSQ0DIAQgBUkNBCADIAMgB2ogDBC1AQRAIAQgDGsiCCAMSyEGIARBA3EhByAEQQFrQQNJBEBBACELDAsLIAMhBSAEQXxxIgshCgNAQgEgBTEAAIYgD4RCASAFQQFqMQAAhoRCASAFQQJqMQAAhoRCASAFQQNqMQAAhoQhDyAFQQRqIQUgCkEEayIKDQALDAoLQQEhCUEAIQVBASEGQQAhDQNAIAQgBiILIAVqIgpLBEAgBCAFayAGQX9zaiIIIARPDQcgBUF/cyAEaiANayIGIARPDQgCQCADIAhqLQAAIgggAyAGai0AACIGSQRAIApBAWoiBiANayEJQQAhBQwBCyAGIAhHBEAgC0EBaiEGQQAhBUEBIQkgCyENDAELQQAgBUEBaiIIIAggCUYiBhshBSAIQQAgBhsgC2ohBgsgByAJRw0BCwtBASEJQQAhBUEBIQZBACEIA0AgBCAGIgsgBWoiDksEQCAEIAVrIAZBf3NqIgogBE8NCSAFQX9zIARqIAhrIgYgBE8NCgJAIAMgCmotAAAiCiADIAZqLQAAIgZLBEAgDkEBaiIGIAhrIQlBACEFDAELIAYgCkcEQCALQQFqIQZBACEFQQEhCSALIQgMAQtBACAFQQFqIgogCSAKRiIGGyEFIApBACAGGyALaiEGCyAHIAlHDQELCyAEIAggDSAIIA1LG2shCwJAIAdFBEBBACEHQQAhCQwBCyAHQQNxIQpBACEJAkAgB0EESQRAQQAhDQwBCyADIQUgB0F8cSINIQYDQEIBIAUxAACGIA+EQgEgBUEBajEAAIaEQgEgBUECajEAAIaEQgEgBUEDajEAAIaEIQ8gBUEEaiEFIAZBBGsiBg0ACwsgCkUNACADIA1qIQUDQEIBIAUxAACGIA+EIQ8gBUEBaiEFIApBAWsiCg0ACwsgBAwKCyAIIARBoJbAABCjAQALIAogBEGglsAAEKMBAAsgDCAEQYCWwAAQzgIACyAHIAVBkJbAABDPAgALIAUgBEGQlsAAEM4CAAsgCCAEQbCWwAAQowEACyAGIARBwJbAABCjAQALIAogBEGwlsAAEKMBAAsgBiAEQcCWwAAQowEACyAHBEAgAyALaiEFA0BCASAFMQAAhiAPhCEPIAVBAWohBSAHQQFrIgcNAAsLIAggDCAGG0EBaiEHQX8hCSAMIQtBfwshBSAAIAQ2AjwgACADNgI4IAAgAjYCNCAAIAE2AjAgACAFNgIoIAAgCTYCJCAAIAI2AiAgAEEANgIcIAAgBzYCGCAAIAs2AhQgACAMNgIQIAAgDzcDCCAAQQE2AgALmAwCE38BfiMAQfAAayIDJAAgA0EANgIMIANCgICAgMAANwIEIANBMWohDiADQd0AaiEPQQQhCyADQTxqIRAgA0HUAGohESADQd8AaiEVQQQhEgJAAkACQAJAAkADQAJAAkAgAgRAIANB0ABqIAEgAhBaIAMoAlghBSADKAJUIQQCQAJAIAMoAlAiBkGBgICAeEYEQCAEIQcMAQsCQCAGQYCAgIB4RwRAIAMoAmAhEyADLQBcIAMvAF0gFS0AAEEQdHJBCHRyIRQgBCEHDAELIANB0ABqIAEgAhBvAn8CQAJAAkACQAJAAkAgAygCUEGAgICAeGsOAgEAAgsgECARKQIANwIAIBBBCGogEUEIaikCADcCAAwDCyADQThqIAEgAhDQAUGAgICAeCADKAJUEKQCDAELIANByABqIANB4ABqKAIANgIAIANBQGsgA0HYAGopAgA3AwAgAyADKQJQNwM4CyADKAI4IgZBgYCAgHhHDQELIAMoAkAhBUGBgICAeCEGIAMoAjwMAQsgAygCSCETIAMoAkQhFCADKAJAIQUgAygCPAshB0GAgICAeCAEEKQCCwJAAkACQAJAAkAgBkGAgICAeGsOAgAFAQsgA0HQAGoiDSABIAIQGCADKAJYIgRBA0YNASADKAJUIQUgAygCUCEGIAMpAlwhFiADKAJkIQggAyADKQJoNwJgIAMgCDYCXCADIBY3AlQgAyAENgJQIA0QjgIMAgsgAyATNgI0IAMgFDYCMCADIAU2AiwgAyAHNgIoIAMgBjYCJAwECyADKAJkIQUgAygCYCEGAkACQCADKAJcIgRBgICAgHhrDgIBAgALIAMgAykCaDcCMCADIAU2AiwgAyAGNgIoIAMgBDYCJAwCCyADQdAAaiABIAIQSSADKAJYIQggAygCVCEEAkAgAygCUCIFQYGAgIB4RgRAIAMgCDYCLCADIAQ2AiggA0GBgICAeDYCJAwBCyADIA8oAAA2AjggAyAPQQNqKAAANgA7IAVBgICAgHhHBEAgAy0AXCENIA4gAygCODYAACAOQQNqIAMoADs2AAAgAyANOgAwIAMgCDYCLCADIAQ2AiggAyAFNgIkDAELIANB0ABqQSkgASACEIgBIAMoAlAiCEGBgICAeEcEQCADIAMpAlw3AjALIAMoAlQhBSADIAMoAlg2AiwgAyAFNgIoIAMgCDYCJEGAgICAeCAEEKQCC0GAgICAeCAGEKQCDAELIAMgBTYCLCADIAY2AiggA0GBgICAeDYCJAtBgICAgHggBxCkAgwBCyADIAU2AiwgAyAHNgIoIANBgYCAgHg2AiQLIANBEGogA0EkahCeASADLQAUIQcgAygCECIEQYGAgIB4Rw0CIAdBAXENASACIQoLIAAgAykCBDcCDCAAIAo2AgggACABNgIEIABBADYCACAAQRRqIANBDGooAgA2AgAMBwsgA0HQAGoiBCABIAIQLiADKQJgIRYgAygCXCEFIAMoAlghByADKAJUIQYgAygCUA0DIAMgBTYCUCADIBY3AlQgFkKAgICAEFQEQCAEEM8BDAYLIAMgFjcCPCADIAU2AjggA0HQAGoiCSAGIAcQlAEgAygCWCEEIAMoAlQhCCADKAJQIgZBgYCAgHhHDQIgCSAIIAQQjQEgAygCWCEEIAMoAlQhCCADKAJQIgZBgYCAgHhHBEAMAwUgAygCBCAMRgRAIANBBGoQwAEgAygCCCESCyALIBJqIgEgFjcCACABQQRrIAU2AgAgAyAMQQFqIgw2AgwgC0EMaiELIAchCSAEIQIgCCEBDAILAAsLIAAgAykAFTcACSAAQRBqIANBHGopAAA3AAAgACAHOgAIIAAgBDYCBAwCCyADKQJcIRYgBCEFIAghByADQThqEM8BCyAGQYCAgIB4RgRAIAchCQwCCyAAIBY3AhAgACAFNgIMIAAgBzYCCCAAIAY2AgQLIABBATYCACADQQRqEMwBDAELIAAgAykCBDcCDCAAIAI2AgggACABNgIEIABBADYCACAAQRRqIANBDGooAgA2AgBBgICAgHggCRCkAgsgA0HwAGokAAvlCQIVfwJ+IwBBkARrIgkkACAJQQxqQQBBgAQQQRoCQCAAKAIMIhJFBEAgASgCHCAAKAIAIAAoAgQgASgCICgCDBEBACECDAELIAAoAgAhDSAAKAIIIg4tAAAhCgJAAkAgACgCBCIPRQ0AIA0gD2ohCyAJQQxqIQQgDSEAA0ACfyAALAAAIgNBAE4EQCADQf8BcSEFIABBAWoMAQsgAC0AAUE/cSEGIANBH3EhCCADQV9NBEAgCEEGdCAGciEFIABBAmoMAQsgAC0AAkE/cSAGQQZ0ciEGIANBcEkEQCAGIAhBDHRyIQUgAEEDagwBCyAIQRJ0QYCA8ABxIAAtAANBP3EgBkEGdHJyIgVBgIDEAEYNAiAAQQRqCyEAIAJBgAFGDQIgBCAFNgIAIARBBGohBCACQQFqIQIgACALRw0ACwsgDiASaiETIAJBAWshFSACQQJ0IgBBBGohDCAAIAlqQQhqIQsgCUEEayEWQbwFIRRByAAhByAOIQVBgAEhCAJAA0AgCkHhAGsiAEH/AXFBGk8EQCAKQTBrQf8BcUEJSw0DIApBFmshAAsgBUEBaiEFAkBBGkEBQSQgB2siA0EAIANBJE0bIgMgA0EBTRsiAyADQRpPGyIDIABB/wFxIgRLBEAgBCEDDAELQSQgA2shBkHIACEAA0AgBSATRg0EIAUtAAAiCkHhAGsiA0H/AXFBGk8EQCAKQTBrQf8BcUEJSw0FIApBFmshAwsgBq0iFyADQf8BcSIGrX4iGEIgiKcNBCAYpyAEaiIDIARJDQQgBkEaQQEgACAHayIEQQAgACAETxsiBCAEQQFNGyIEIARBGk8bIgRPBEAgBUEBaiEFIABBJGohACAXQSQgBGutfiIXpyEGIAMhBCAXQiCIUA0BDAULCyAFQQFqIQULIAMgEWoiACARSQ0CIAggACACQQFqIgZuIgQgCGoiCEsgCEGAsANzQYAQa0H/78MAS3IgCEGAgMQARiACQf8AS3JyDQICQCAAIAQgBmxrIgcgAkkEQCACIAdrQQNxIgoEQEEAIQQgCyEAA0AgAEEEaiAAKAIANgIAIABBBGshACAKIARBAWoiBEcNAAsgAiAEayECCyAQIBVqIAdrQQNJDQEgFiACQQJ0aiEAA0AgAEEMaiAAQQhqKQIANwIAIABBBGogACkCADcCACAAQRBrIQAgAkEEayICIAdLDQALDAELIAdBgAFPDQILIAlBDGogB0ECdGogCDYCACAFIBNHBEAgBS0AACEKQQAhAAJAIAMgFG4iAyAGbiADaiICQcgDSQRAIAIhAwwBCwNAIABBJGohACACQdf8AEsgAkEjbiIDIQINAAsLIAdBAWohESAAIANBJGxB/P8DcSADQSZqQf//A3FuaiEHIAtBBGohCyAMQQRqIQwgEEEBaiEQQQIhFCAGIQIMAQsLIAlBDGohAANAIAkgACgCADYCjAQgCUGMBGogARBiIgINAyAAQQRqIQAgDEEEayIMDQALDAILIAdBgAFB7MvAABCjAQALQQEhAiABKAIcIgBB/MvAAEEJIAEoAiAoAgwiAREBAA0AIA8EQCAAIA0gDyABEQEADQEgAEGFzMAAQQEgAREBAA0BCyAAIA4gEiABEQEADQAgAEGGzMAAQQEgAREBACECCyAJQZAEaiQAIAILyAsCD38BfiMAQeAAayIDJAAgAyABIAIQfSADKAIEIQQCQAJAAkACfwJAAkACQAJAIAMoAgAiBUGAgICAeGsOAgECAAsgAykCCCESIAAgAygCEDYCHCAAIBI3AhQgACAENgIQIAAgBTYCDCAAQQM2AggMBgtBgICAgHggBBCkAiADQSYgASACEIgBIAMoAgQhBAJAIAMoAgAiBUGAgICAeGsOAgACBAtBgICAgHggBBCkAiABIQRBgIDEAAwCCyADKAIMIREgAygCCCECQYCAxAAhC0EBIQwMAwsgAygCCCECIAMoAgwLIQsMAQsgAykCCCESIAAgAygCEDYCHCAAIBI3AhQgACAENgIQIAAgBTYCDCAAQQM2AggMAQsgA0EcakGstcAAQQIQtgFBASEHIANBKGoiAUHCycAAQQEQtgEgA0E0akGutcAAQQIQtgEgA0EUaiADQThqKQIANwIAIANBDGogA0EwaikCADcCACADIAMpAig3AgQgA0E8NgIAIAEgAygCICADKAIkIAQgAhClASADKAIwIQYgAygCLCEFAkACQAJAAkACQCADKAIoIgFBgYCAgHhGBEAgBSECDAELAkACQCABQYCAgIB4RgRAIANBKGogAygCCCADKAIMIAQgAhClAQJAAkACQAJAAkACQCADKAIoQYCAgIB4aw4CAQACCyADQcwAaiADQTRqKQIANwIAIAMgAykCLDcCRAwDCyADQUBrIAMoAhQgAygCGCAEIAIQpQFBgICAgHggAygCLBCkAgwBCyADQdAAaiADQThqKAIANgIAIANByABqIANBMGopAgA3AwAgAyADKQIoNwNACyADKAJAIgFBgYCAgHhHDQELIAMoAkghBiADKAJEIQJBgYCAgHghAUEAIQRBACEHDAMLIAMoAkQhCCABQYCAgIB4Rg0BIAMoAlAhCSADKAJIIQYgAygCTCIHQQh2IQQgCCECDAILIAMoAjghCSADKAI0IgdBCHYhBCAFIQIMAwsgA0EoakE8IAQgAhCIAQJAIAMoAigiAUGBgICAeEYEQEECIQcMAQsgAygCNCIHQQh2IQQgAygCOCEJCyADKAIwIQYgAygCLCECQYCAgIB4IAgQpAILQYCAgIB4IAUQpAIgAUGBgICAeEcNAQsgAxDuASADQSYgAiAGEIgBIAMoAgghBCADKAIEIQECfwJAIAMoAgAiCkGBgICAeEYEQCADIAEgBBB9IAMoAgwhBSADKAIIIQQgAygCBCEBIAMoAgAiCkGBgICAeEcEQCAFIQgMAgsgA0HYAGohDUGAgICAeCEIIANB3ABqIQ4gA0FAayEPIANBKGohECAFIQlBAAwCCyADKAIMIQgLIAMoAhAhCSADIAo2AiggA0HUAGohDSADQdgAaiEOIANB3ABqIQ8gA0FAayEQQQELIBAgATYCACAPIAQ2AgAgDiAINgIAIA0gCTYCACADKAIoIQRFBEAgAzUCWCADNQJUQiCGhCESIAMoAlwhAiADKAJAIQEMBAsgBEGAgICAeEcNASADIAIgBhCNASADKAIIIQIgAygCBCEBAn8gAygCACIEQYGAgIB4RgRAIAMgASACEC4gAykCECESIAMoAgwhAiADKAIIIQEgAygCBCEEIAMoAgAMAQsgAykCDCES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QcwAaq1CgICAgIABhDcDQCABIAFBEGqtQoCAgICQBIQ3AzggASABQQRqrUKAgICAoASENwMwIAEgAUEwajYCICABQRhqQfDNwAAQ4wEAC0HQzMAAENACAAvvCgISfwR+IwBB4AFrIgMkACADQQA2AgwgA0KAgICAwAA3AgQgA0G8AWohCyADQYgBaiEMIANBxAFqIQ1BBCEJQRghDwJ/AkACQAJ/AkACQAJAAn4CQAJAA0AgAkUEQEEAIQcgASEIDAULIANBpAFqIgUgASACEBECQAJAIAMoAqwBIgZBCEcEQCADKAKoASEHIAMoAqQBIQggAygCsAEhBCADKAK0ASEQIAMoArgBIQogAykCvAEhFSAMQRhqIhEgDUEYaigCADYCACAMQRBqIhIgDUEQaikCADcCACAMQQhqIhMgDUEIaikCADcCACAMIA0pAgA3AgAgAyAVNwKAASADIAo2AnwgAyAQNgJ4IAMgBDYCdCADIAY2AnAgBSAIIAcQ0AFBASEOAkACQAJAIAMoAqQBIgVBgICAgHhrDgIBAgALIAMoArQBIQQgAygCsAEhBiADKAKsASEHIAMoAqgBIQggA0HwAGoQugEMAwtBgICAgHggAygCqAEQpAJBACEOCyADQdgAaiATKQIAIhY3AwAgA0HgAGogEikCACIXNwMAIANB6ABqIBEoAgAiBTYCACADIAwpAgAiGDcDUCALQRhqIhEgBTYCACALQRBqIhIgFzcCACALQQhqIhMgFjcCACALIBg3AgAgAyAOOgDYASADIBU3ArQBIAMgCjYCsAEgAyAQNgKsASADIAQ2AqgBIAMgBjYCpAEgA0HwAGogCCAHEI0BIAMoAnghByADKAJ0IQggAygCcCIFQYGAgIB4Rg0CIAMpAnwhFSADQaQBahC6AQwJCyADKQK8ASIVQiCIpyEEIAMoArgBIQcgAygCtAEhCCADKAKwASEFIBWnIQYLIAatIAStQiCGhCEVDAcLIANBGGoiAiATKQIANwMAIANBIGoiBSASKQIANwMAIANBKGoiDiARKQIANwMAIAMgCykCADcDECADKAIEIBRGBEAjAEEQayIBJAAgAUEIaiADQQRqIgkgCSgCAEEBQQRBOBBdIAEoAggiCUGBgICAeEcEQCABKAIMGiAJQeivwAAQtwIACyABQRBqJAAgAygCCCEJCyAJ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HCEAA0AgA0EBayIDRQ0CIAAgBSAEKAIQEQAARQ0AC0EBDwsMAgsgACABIAIgBCgCDBEBAARAQQEPC0EAIQMDQCADIAZGBEBBAA8LIANBAWohAyAAIAUgBCgCEBEAAEUNAAsgA0EBayAGSQ8LIAAoAhwgASACIAAoAiAoAgwRAQAPCyAAKAIcIAEgAiAAKAIgKAIMEQEAC9MGAQd/IwBBwAFrIgMkACADQYABakHgACABIAIQiAEgAygCiAEhByADKAKEASEGAkACQAJAIAMoAoABIgRBgYCAgHhGBEBBACEEIANBADYCMCADIAY2AiggAyAGIAdqNgIsA0ACQCADQSBqIANBKGoQnQECQCADKAIkIgVB4ABHBEAgBUGAgMQARw0BIABBBGogASACQYC7wABBGhCSASAAQQE2AgAMBwsgBEEBcUUNAQsgBUHcAEYhBAwBCwsgA0EYaiAGIAcgAygCICIFQZy7wAAQtwEgAygCHCECIAMoAhghAUEAIQQgA0EQakEAQQFBAUHIr8AAELEBIANBADYCaCADIAMpAxA3AmAgA0GAAWogASACQay7wABBAhAVA0AgA0E0aiADQYABahBRIAMoAjRBAUdFBEAgASAEaiEJIAMoAjwhBCADQeAAaiIIIAkgASADKAI4ahDfASAIQa67wABBr7vAABDfAQwBCwsgA0HgAGoiCCABIARqIAEgAmoQ3wEgAygCYCEEIANBNGogAygCZCIJIAMoAmgQGyADKAI0DQEgAyADKAI8IgI2AlAgAyADKAI4NgJMIANBQGshASACBEAgA0EBNgKEASADQei7wAA2AoABIANCATcCjAEgA0EQNgJYIAMgA0HUAGo2AogBIAMgA0HMAGo2AlQgCCADQYABahCzASAAIAYgByAIEI8CIAEQrQIMAwsgACABKQIANwIMIABBFGogAUEIaigCADYCACADQQhqIAYgByAFQQFqQfC7wAAQsgEgACADKQMINwIEIABBADYCAAwCCyAAIAMpAowBNwIQIAAgBzYCDCAAIAY2AgggACAENgIEIABBATYCAAwCCyADKAI8IQEgAygCQCEFIAMoAjghAiADQQk2AnQgA0GAvMAANgJwIANBAjYChAEgA0GkvMAANgKAASADQgI3AowBIANBEDYCbCADQRA2AmQgA0EfIAUgAkGAgICAeEYiBRs2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JCABIAIQpQEgAygCUCEBIAMoAkwhAgJAAkAgAygCSCIEQYGAgIB4RgRAIAUgAiABEBsgA0FAayIBIANB3ABqKAIANgIAIAMgAykCVDcDOCADKAJQIQIgAygCTCEEIAMoAkgNASADQTBqIgcgASgCADYCACADIAMpAzg3AyggBSADQQhqIAQgAhBPIAMoAlAhASADKAJMIQIgAygCSCIEQYGAgIB4RgRAIAAgAykDKDcCDCAAIAE2AgggACACNgIEIABBADYCACAAQRRqIAcoAgA2AgAMAwsgACADKQJUNwIQIAAgATYCDCAAIAI2AgggACAENgIEIABBATYCACADQShqEK0CDAILIAAgAykCVDcCECAAIAE2AgwgACACNgIIIAAgBDYCBCAAQQE2AgAMAQsgACADKQM4NwIMIAAgAjYCCCAAIAQ2AgQgAEEBNgIAIABBFGogASgCADYCAAsgAygCHCAGEMkCIANB4ABqJAALvQMCBH8BfiMAQfAAayICJAAgAkEoaiAAKAIAIgMgAygCACgCBBECACACQQM2AmwgAkEBNgJUIAJB9NjAADYCUCACQgE3AlwgAiACKQMoNwI0IAIgAkE0ajYCaCACIAJB6ABqNgJYAn9BASABKAIcIgQgASgCICIFIAJB0ABqEJ4CDQAaQQAiACABLQAUQQRxRQ0AGiACQSBqIAMgAygCACgCBBECACACKQMgIQYgAkEBNgJEIAIgBjcCOCACQQA2AjRBASEBA0ACfyABRQRAIAJBCGogAkE0ahCTASACKAIMIQAgAigCCAwBCyACQQA2AkQgAUEBaiEBAkADQCABQQFrIgFFDQEgAkEYaiACQTRqEJMBIAIoAhgNAAtBAAwBCyACQRBqIAJBNGoQkwEgAigCFCEAIAIoAhALIgFFBEAgAkE0ahD5AUEADAILIAIgATYCSCACIAA2AkwgAkEBNgJUIAJB7IzAADYCUCACQgE3AlwgAkEDNgJsIAIgAkHoAGo2AlggAiACQcgAajYCaCAEIAUgAkHQAGoQngJFBEAgAigCRCEBDAELCyACQTRqEPkBQQELIAJB8ABqJAALhxACE38EfiMAQRBrIg8kACMAQSBrIgMkAAJAQdzhwAAoAgAiAg0AQeDhwABBADYCAEHc4cAAQQE2AgBB5OHAACgCACEEQejhwAAoAgAhBkHk4cAA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NgIEIABBADYCACAAIAUpAgA3AgwgAEEUaiAFQQhqKAIANgIADAELIAMoAhAhBSADKAIUIQQgAygCDCEGIANBATYCPCADQaS5wAA2AjggA0IBNwJEIANBEDYCVCADQR8gBCAGQYCAgIB4RiIEGzYCXCADQeC4wAAgBSAEGzYCWCADIANB0ABqNgJAIAMgA0HYAGo2AlAgA0EsaiIEIANBOGoQswEgACABIAIgBBCPAiAGIAUQpAILIANB4ABqJAALxQIBA38jAEEQayICJAACQCABQYABTwRAIAJBADYCDAJ/IAFBgBBPBEAgAUGAgARPBEAgAkEMakEDciEEIAIgAUESdkHwAXI6AAwgAiABQQZ2QT9xQYABcjoADiACIAFBDHZBP3FBgAFyOgANQQQMAgsgAkEMakECciEEIAIgAUEMdkHgAXI6AAwgAiABQQZ2QT9xQYABcjoADUEDDAELIAJBDGpBAXIhBCACIAFBBnZBwAFyOgAMQQILIQMgBCABQT9xQYABcjoAACADIAAoAgAgACgCCCIBa0sEQCAAIAEgAxB1IAAoAgghAQsgACgCBCABaiACQQxqIAMQJxogACABIANqNgIIDAELIAAoAggiAyAAKAIARgRAIABBiIfAABCBAQsgACADQQFqNgIIIAAoAgQgA2ogAToAAAsgAkEQaiQAQQAL8wIBBX8jAEFAaiIDJAAgA0EsaiIEQZSywABBAhDCASADQRRqIgdBlrLAAEECEMIBIANBEGogA0E8aigCADYCACADQQhqIANBNGopAgA3AwAgAyADKQIsNwMAIAQgAyABIAIQaiADKAI0IQQgAygCMCEGAkAgAygCLCIFQYGAgIB4RgRAIABBADYCDCAAIAQ2AgggACAGNgIEIABBgYCAgHg2AgAMAQsgBUGAgICAeEcEQCADKAI4IQEgACADKAI8NgIQIAAgATYCDCAAIAQ2AgggACAGNgIEIAAgBTYCAAwBCyADQSxqIAcgASACEGogAygCNCEBIAMoAjAhAgJAIAMoAiwiBEGBgICAeEYEQCAAQQE6AAwMAQsgAygCOCEFIAAgAygCPDYCECAAIAU2AgwLIAAgATYCCCAAIAI2AgQgACAENgIAQYCAgIB4IAYQpAILIAMoAgAgAygCBBDJAiADKAIUIAMoAhgQyQIgA0FAayQAC8MCAQJ/IwBB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AAu5AQEEfyMAQSBrIgMkAAJAIAFFBEAgAkEBQQAQIiEADAELIAMgATYCDCADIAA2AgggA0EQaiADQQhqEDkgAygCECIBBEAgAigCICEEIAIoAhwhBQNAIAMoAhQhBiADKAIcRQRAIAIgASAGECIhAAwDC0EBIQAgBSABIAYgBCgCDBEBAA0CIAVB/f8DIAQoAhARAAANAiADQRBqIANBCGoQOSADKAIQIgENAAsLQQAhAAsgA0EgaiQAIAALoAEBA38jAEHgAGsiAyQAAn8CQCACQYABTwRAIANBADYCECADQQhqIAIgA0EQahBsIAMoAgghAiADKAIMIgQgAU8NASAEQQFHBEAgA0EgaiIFIAAgASACIAQQFSADQRRqIAUQUSADKAIUDAMLIAItAAAgACABEJsBQQBHDAILIAIgACABEJsBQQBHDAELIAIgBCAAIAEQ8AELIANB4ABqJAALmQEBA38jAEEgayICJAADQAJAIAJBBGogARB3IAIoAgRBBUYNACAAKAIIIgMgACgCAEYEQCACQRRqIAEQpAEgACACKAIUQQFqIgRBfyAEGxDqAQsgACADQQFqNgIIIAAoAgQgA0EEdGoiAyACKQIENwIAIANBCGogAkEMaikCADcCAAwBCwsgAkEEahCjAiABEKwBIAJBIGokAAudAQECfyMAQRBrIgMkAAJAIAEoAgBFBEAgAEEFNgIADAELAkAgASgCBCICIAEoAgxHBEAgASACQRBqNgIEIANBCGogAkEMaigCADYCACADIAIpAgQ3AwAgAigCACICQQVHDQELIAEQsgIgAUEANgIAQQUhAgsgACACNgIAIAAgAykDADcCBCAAQQxqIANBCGooAgA2AgALIANBEGokAAucAQIDfwF+IwBBEGsiAyQAIAMgATYCCCADIAEgAmo2AgxBgICAgHghBSAAIANBCGoQ2gEiBEGAgMQARwR/IAMgASACAn9BASAEQYABSQ0AGkECIARBgBBJDQAaQQNBBCAEQYCABEkbC0G8w8AAELQBIAMpAwAhBiAAIAQ2AgwgACAGNwIEQYGAgIB4BUGAgICAeAs2AgAgA0EQaiQAC6YBAQN/IwBBIGsiBCQAIARBDGogAiADEIcBIAQoAhghAiAEKAIUIQMgBCgCECEFAkAgBCgCDCIGQYGAgIB4RgRAIAEgAkcEQCAAQYCAgIB4NgIADAILIAAgATYCDCAAIAM2AgggACAFNgIEIABBgYCAgHg2AgAMAQsgACAEKAIcNgIQIAAgAjYCDCAAIAM2AgggACAFNgIEIAAgBjYCAAsgBEEgaiQAC5gBAQF/IwBBQGoiAiQAIAAoAgAhACACQgA3AzggAkE4aiAAKAIAJQEQAyACIAIoAjwiADYCNCACIAIoAjg2AjAgAiAANgIsIAJBBzYCKCACQQI2AhAgAkGg4cAANgIMIAJCATcCGCACIAJBLGoiADYCJCACIAJBJGo2AhQgASgCHCABKAIgIAJBDGoQMyAAENUCIAJBQGskAAuOAQECfyMAQRBrIgQkAAJ/IAMoAgQEQCADKAIIIgVFBEAgBEEIaiABIAIQ9QEgBCgCCCEDIAQoAgwMAgsgAygCACAFIAEgAhAgIQMgAgwBCyAEIAEgAhD1ASAEKAIAIQMgBCgCBAshBSAAIAMgASADGzYCBCAAIANFNgIAIAAgBSACIAMbNgIIIARBEGokAAuSAQEEfyMAQRBrIgIkAEEBIQQCQCABKAIcIgNBJyABKAIgIgUoAhAiAREAAA0AIAJBBGogACgCAEGBAhAlAkAgAi0ABEGAAUYEQCADIAIoAgggAREAAEUNAQwCCyADIAItAA4iACACQQRqaiACLQAPIABrIAUoAgwRAQANAQsgA0EnIAERAAAhBAsgAkEQaiQAIAQLkAEBA38jAEEgayIGJAACQCABBEAgBkEUaiIHIAEgAyAEIAUgAigCEBEFACAAIAYoAhwiASAGKAIUSQR/IAZBCGogByABQQRBBBBtIAYoAggiAUGBgICAeEcNAiAGKAIcBSABCzYCBCAAIAYoAhg2AgAgBkEgaiQADwsQ3gIACyAGKAIMIQggAUGUvsAAELcCAAuYAQEBfyMAQSBrIgMkACADQQxqIAEgAhBAAkACQAJAAkAgAygCDEGAgICAeGsOAgEAAgsgACADKQIQNwIEIABBgYCAgHg2AgAMAgsgACACNgIIIAAgATYCBCAAQYGAgIB4NgIADAELIAAgAykCDDcCACAAQRBqIANBHGooAgA2AgAgAEEIaiADQRRqKQIANwIACyADQSBqJAALiQEBBH8jAEEgayICJAAgAkEYaiIEIAFBLGopAgA3AwAgAkEQaiIFIAFBJGopAgA3AwAgAiABKQIcNwMIQRgQ+wEiA0EQaiAEKQMANwIAIANBCGogBSkDADcCACADIAIpAwg3AgAgAUEEahCNAiABEN0CIABBgLHAADYCBCAAIAM2AgAgAkEgaiQAC4MBAQN/An8CQCAAKAIAIgFFDQADQAJAIAAoAggiAyAAKAIETw0AIAEgA2otAABBxQBHDQAgACADQQFqNgIIDAILAkAgAkUNACAAKAIQIgFFDQAgAUHBz8AAQQIQIkUNAEEBDwtBASAAQQEQEw0CGiACQQFrIQIgACgCACIBDQALC0EACwuFAQEBfyMAQSBrIgIkAAJ/IAAoAgBBgICAgHhHBEAgASgCHCAAKAIEIAAoAgggASgCICgCDBEBAAwBCyACQRBqIAAoAgwoAgAiAEEIaikCADcDACACQRhqIABBEGopAgA3AwAgAiAAKQIANwMIIAEoAhwgASgCICACQQhqEDMLIAJBIGokAAuBAQECfyMAQSBrIgIkACACQQhqEIoCQTQQ+wEiAUHoscAANgIAIAEgAikCCDcCBCABQQxqIAJBEGopAgA3AgAgAUEUaiACQRhqKQIANwIAIAEgACkCADcCHCABQSRqIABBCGopAgA3AgAgAUEsaiAAQRBqKQIANwIAIAJBIGokACABC30BBH8jAEEQayIGJAACQCAEQQBOBH8gBEUEQEEBIQcMAgsgBkEIaiAEEIECIAQhBSAGKAIIIgcNAUEBBUEAC0G4wcAAELcCAAsgByADIAQQJyEDIAAgAjYCECAAIAE2AgwgACAENgIIIAAgAzYCBCAAIAU2AgAgBkEQaiQAC4wBAQN/IwBBEGsiAyQAAkACQAJAIAEoAgBFBEAgASgCBCICDQEMAgsgASgCBCICIAEoAgxGDQEgASACQQhqNgIEIAIoAgQhBCACKAIAIQIMAgsgA0EIaiACIAEoAggiBCgCGBECACABIAMpAwg3AgQMAQtBACECCyAAIAQ2AgQgACACNgIAIANBEGokAAuJAQEDfyMAQRBrIgMkACADIAE2AgggAyABIAJqNgIMAkACQCADQQhqENoBIgRBgIDEAEYNACAEEMgBDQAgBEH8AEYgBEEmayIFQRVNQQBBASAFdEGNgIABcRtyDQAgACABIAIQtQIMAQsgACACNgIIIAAgATYCBCAAQYGAgIB4NgIACyADQRBqJAALSQEDfiAAIAFC/////w+DIgJCPn4iA0IAIgIgAUIgiEI+fnwiAUIghnwiBDcDACAAIAMgBFatIAEgAlStQiCGIAFCIIiEfDcDCAt8AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQQI2AhwgBUGc3MAANgIYIAVCAjcCJCAFIAVBEGqtQoCAgIDAAIQ3AzggBSAFQQhqrUKAgICA0ACENwMwIAUgBUEwajYCICAFQRhqIAQQ4wEAC3QCAX8BfgJAAkAgAa1CDH4iA0IgiKcNACADpyICQXhLDQAgAkEHakF4cSICIAFBCGpqIgEgAkkNASABQfj///8HTQRAIAAgAjYCCCAAIAE2AgQgAEEINgIADwsgAEEANgIADwsgAEEANgIADwsgAEEANgIAC3sBAn8jAEEQayICJAACQCABQYABTwRAIAJBADYCDCACIAEgAkEMahBsIAAgAigCACIAIAAgAigCBGoQ3wEMAQsgACgCCCIDIAAoAgBGBEAgAEGswsAAEIEBCyAAIANBAWo2AgggACgCBCADaiABOgAACyACQRBqJABBAAt2AQJ/IAKnIQNBCCEEA0AgACABIANxIgNqKQAAQoCBgoSIkKDAgH+DIgJCAFJFBEAgAyAEaiEDIARBCGohBAwBCwsgACACeqdBA3YgA2ogAXEiAWosAABBAE4EfyAAKQMAQoCBgoSIkKDAgH+DeqdBA3YFIAELC3IBAn8jAEEQayIEJAAgASAAKAIIIgNrIQEgACgCBCADaiEDA0ACQCABBEAgBEEIaiACEM4BIAQtAAgNAQsgBEEQaiQAIAFFDwsgAyAELQAJOgAAIAAgACgCCEEBajYCCCABQQFrIQEgA0EBaiEDDAALAAtiAQF/IwBBEGsiAyQAAn8gAkEHTQRAIABB/wFxIQADQEEAIAJFDQIaQQEgACABLQAARg0CGiACQQFrIQIgAUEBaiEBDAALAAsgA0EIaiAAIAEgAhBeIAMoAggLIANBEGokAAt2AQV/AkAgACgCACIBQYCAgIB4RwRAIAFFDQEgACgCBCABEKkBDwsgAC0ABEEDRw0AIAAoAggiACgCACEBIABBBGooAgAiAygCACICBEAgASACEQQACyADKAIEIgIEQCADKAIIIQUgASACEKkBCyAAQQwQqQELC3MBBX8jAEEQayICJAAgASgCACEEIAEoAgQhBSACQQhqIAEQcAJAIAIoAghFBEBBgIDEACEDDAELIAIoAgwhAyABIAEoAgAgASgCCCIGIAVqIAQgASgCBGprajYCCAsgACADNgIEIAAgBjYCACACQRBqJAALiAEAAkACQAJAIAEoAgBBgICAgHhrDgIBAAILIABBgYCAgHg2AgAgAEEAOgAEQYGAgIB4IAEoAgQQpQIPCyAAQYGAgIB4NgIAIABBAToABEGAgICAeCABKAIEEKQCDwsgACABKQIANwIAIABBEGogAUEQaigCADYCACAAQQhqIAFBCGopAgA3AgALbQEDfyMAQRBrIgIkACACIAEoAgA2AgggAiABKAIEIgM2AgAgAiADNgIEIAAgASgCCCIBEOoBIAAoAgQgACgCCCIEQQR0aiADIAFBBHQQJxogACABIARqNgIIIAIgAzYCDCACEMcBIAJBEGokAAtkAQN/IwBBEGsiAyQAAn8gACgCACIERQRAQQAhAiADQQxqDAELIAMgATYCDCACIARsIQIgACgCBCEBIANBCGoLIAI2AgAgAygCDCIABEAgAygCCCEFIAEgBRCYAgsgA0EQaiQAC14BAX8jAEEQayIEJAACfyAARQRAQQAhACAEQQxqDAELIAQgAjYCDCAAIANsIQAgBEEIagsgADYCAAJAIAQoAgwiAEUNACAEKAIIIgJFDQAgASACEKkBCyAEQRBqJAALbQEDfyMAQRBrIgMkAAJAIAAgASgCCCIEIAEoAgBJBH8gA0EIaiABIARBAUEBEG0gAygCCCIEQYGAgIB4Rw0BIAEoAggFIAQLNgIEIAAgASgCBDYCACADQRBqJAAPCyADKAIMIQUgBCACELcCAAtrAQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0ECNgIMIANB0I/AADYCCCADQgI3AhQgAyADrUKAgICAgAGENwMoIAMgA0EEaq1CgICAgIABhDcDICADIANBIGo2AhAgA0EIaiACEOMBAAtkAQJ/IAEoAiwgASgCJGtBBHZBACABKAIgGyABKAIcIAEoAhRrQQR2QQAgASgCEBtqIQMCQCABKAIABEAgASgCDCABKAIERw0BCyAAIAM2AghBASECCyAAIAI2AgQgACADNgIAC3kCAn8BfiMAQRBrIgUkAEGAgICAeCEGIAAgAyAEIAEgAhDTAgR/IAVBCGogAyAEIAJB/K/AABCyASAFKQMIIQcgBSADIAQgAkGMsMAAELcBIAAgBSkDADcCDCAAIAc3AgRBgYCAgHgFQYCAgIB4CzYCACAFQRBqJAALZAEBfyMAQRBrIgAkAAJ/IAIoAgAEQEGk2sAAIQNBCQwBCyAAQQRqIAIoAgQgAigCCBAqQaTawAAgACgCCCAAKAIEIgIbIQNBCSAAKAIMIAIbCyECIAMgAiABEIMBIABBEGokAAtkAQN/IwBBEGsiAiQAIAAgASgCBCABKAIAaxDpASAAKAIIIQMgACgCBCEEA0AgAkEIaiABEM4BIAItAAgEQCADIARqIAItAAk6AAAgA0EBaiEDDAELCyAAIAM2AgggAkEQaiQAC1kBAn8jAEEQayIDJAAgAxCzAiIENgIMIAMgAjYCCCADIANBCGogARB0IAMoAgAEfyADKAIEIAQQrgIhBEEBBUEACyECIAAgBDYCBCAAIAI2AgAgA0EQaiQAC10BAn8CQCAAQQRrKAIAIgJBeHEiA0EEQQggAkEDcSICGyABak8EQCACQQAgAyABQSdqSxsNASAAECwPC0HN1sAAQS5B/NbAABDJAQALQYzXwABBLkG818AAEMkBAAtiAQV/IwBBEGsiAiQAIAEoAiAhBBCzAiEDIAEoAhQhBSABKAIQIQYgAkEIaiABKAIYIAEoAhwQmgIgAigCDCEBIAMgBiAFEEcgARCJAiAAIAM2AgQgACAENgIAIAJBEGokAAtYAQF/An8gAigCBARAAkAgAigCCCIDRQRADAELIAIoAgAgA0EBIAEQIAwCCwtBzeXAAC0AABogARANCyECIAAgATYCCCAAIAJBASACGzYCBCAAIAJFNgIAC1cBA38gACgCACIDBEAgACgCDCAAKAIEIgFrQQxuIQIDQCACBEAgAkEBayECIAEQzwEgAUEMaiEBDAELCyAAKAIIIAMQ0QILIABBEGoQsgIgAEEgahCyAgtdAQF/IwBBEGsiAiQAAn8gACgCACIAKAIAQYCAgIB4RgRAIAEoAhxBvLDAAEEEIAEoAiAoAgwRAQAMAQsgAiAANgIMIAFBwLDAAEEEIAJBDGpBDhBjCyACQRBqJAALUwEEfyABIAAoAggiAigCACAAKAIQIgQgACgCDCIDaiIFa0sEQCACIAUgAUEBQQEQxAELIAIoAgQiAiABIANqIgFqIAIgA2ogBBDlAiAAIAE2AgwLUQACQAJAIAFFDQACQCABIANPBEAgASADRw0BDAILIAEgAmosAABBv39KDQELQQAhAgwBCyABIAJqIQIgAyABayEBCyAAIAE2AgQgACACNgIAC1oBA38jAEEQayIDJAAgA0EIaiACIAEoAgAQ1QEgAygCDCECIAMoAggiBEUEQEGIgcAAQQUQRyEFIAEoAgQgBSACENQCCyAAIAQ2AgAgACACNgIEIANBEGokAAtTAQJ/IwBBEGsiBSQAIAVBBGogASACIAMQggEgBSgCCCEBIAUoAgRFBEAgACAFKAIMNgIEIAAgATYCACAFQRBqJAAPCyAFKAIMIQYgASAEELcCAAtQAQJ/IwBBEGsiBSQAIAVBCGogAyABIAIQrwEgBSgCCCIGRQRAIAEgAiADIAIgBBCwAgALIAUoAgwhASAAIAY2AgAgACABNgIEIAVBEGokAAtYAQF/IAEoAgwhAgJAAkACQAJAIAEoAgQOAgABAgsgAg0BQQEhAUEAIQIMAgsgAg0AIAEoAgAiASgCBCECIAEoAgAhAQwBCyAAIAEQUA8LIAAgASACELYBC0kAAkACQCACIANNBEAgAiADRw0BDAILIAEgA2osAABBv39KDQELIAEgAiADIAIgBBCwAgALIAAgAiADazYCBCAAIAEgA2o2AgALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwtQAQJ/IwBBEGsiAyQAIANBCGogAkEBQQFBuMHAABCxASADKAIIIQQgAygCDCABIAIQJyEBIAAgAjYCCCAAIAE2AgQgACAENgIAIANBEGokAAtIAAJAIANFDQACQCACIANNBEAgAiADRw0BDAILIAEgA2osAABBv39KDQELIAEgAkEAIAMgBBCwAgALIAAgAzYCBCAAIAE2AgALRwEDfyABIAEgAiADEJkBIgVqIgQtAAAhBiAEIAOnQRl2IgQ6AAAgASAFQQhrIAJxakEIaiAEOgAAIAAgBjoABCAAIAU2AgALUAEBfyMAQRBrIgIkACACQQhqIAEgASgCACgCBBECACACIAIoAgggAigCDCgCGBECACACKAIEIQEgACACKAIANgIAIAAgATYCBCACQRBqJAALTQEBfwJAAkAC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QQhqIAAgACgCACgCBBECACACKAIIIAEgAigCDCgCEBEAACACQRBqJAALNwEBfyMAQRBrIgMkACADQQhqIAEgAhBcIAMoAgwhASAAIAMoAgg2AgAgACABNgIEIANBEGokAAs4AAJAIAJBgIDEAEYNACAAIAIgASgCEBEAAEUNAEEBDwsgA0UEQEEADwsgACADIAQgASgCDBEBAAsvAAJAIAFpQQFHQYCAgIB4IAFrIABJcg0AIAAEQCABIAAQxwIiAUUNAQsgAQ8LAAsuAQF/IwBBEGsiASQAIAFBCGpBBCAAEOcBIAEoAggiAARAIAFBEGokACAADwsACzcBAX8jAEEQayIDJAAgA0EIaiABIAIQmQIgAygCDCEBIABB2MbAAEEEEEcgARDUAiADQRBqJAALMQECfyMAQRBrIgEkACABQQhqIAAQcCABKAIIIQAgASgCDCABQRBqJABBgIDEACAAGws3AQF/IwBBIGsiASQAIAFBADYCGCABQQE2AgwgAUGYhcAANgIIIAFCBDcCECABQQhqIAAQ4wEACy8BAX8gACgCCCEBIAAoAgQhAANAIAEEQCABQQFrIQEgABC6ASAAQThqIQAMAQsLCy0BAX8jAEEQayICJAAgAiAANgIMIAFBm8bAAEEFIAJBDGpBBhBjIAJBEGokAAstAAJAIANpQQFHQYCAgIB4IANrIAFJckUEQCAAIAEgAyACECAiAA0BCwALIAALLgEBfyAAIAIgAWsiAhDpASAAKAIIIgMgACgCBGogASACECcaIAAgAiADajYCCAstACAAKAIAQQRHBEAgABD6AQ8LIAAoAgQiABD6ASAAQTBqEOABIABB5AAQqQELMAAgACgCAEGAgICAeEcEQCAAEMsBIABBDGoQzAEPCyAAKAIEIgAQrQIgAEEMEKkBCzcCAX4BfyABKQIcIQJBCBDYASIDIAI3AgAgAUEEahCNAiABENgCIABB3IvAADYCBCAAIAM2AgAL+gECAn8BfiMAQRBrIgIkACACQQE7AQwgAiABNgIIIAIgADYCBCMAQRBrIgEkACACQQRqIgApAgAhBCABIAA2AgwgASAENwIEIwBBEGsiACQAIAFBBGoiASgCACICKAIMIQMCQAJAAkACQCACKAIEDgIAAQILIAMNAUEBIQJBACEDDAILIAMNACACKAIAIgIoAgQhAyACKAIAIQIMAQsgAEGAgICAeDYCACAAIAE2AgwgAEG828AAIAEoAgQgASgCCCIALQAIIAAtAAkQegALIAAgAzYCBCAAIAI2AgAgAEGg28AAIAEoAgQgASgCCCIALQAIIAAtAAkQegALJQEBfyMAQRBrIgIkACACQQhqIAAgARCaAiACKAIMIAJBEGokAAszACABKAIcIAAoAgAtAABBAnQiAEGk0sAAaigCACAAQZDSwABqKAIAIAEoAiAoAgwRAQALhQkBBX8jAEEQayIEJAAjAEGAAWsiAiQAIAJBGGogACABEMYBIAIgAigCHCIANgIoIAIgAigCGCIBNgIkIAIgADYCIAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQEH04cAALQAAQQFrDgMEAwEAC0H04cAAQQI6AABBgOLAACgCAEH/////B3EEQEHI5cAAKAIADQILQfjhwAAoAgANCUH04cAAQQM6AABB/OHAAEEBNgIACyACQRBqIAEgABBTIAJBOGogAigCECIAIAIoAhQiARAbIAIoAjgNBiACKAJMIQAgAkEIaiACKAI8IgMgAigCQCIFEFMgAkHEAGohASACKAIMRQ0FIAJB0ABqIgAgAyAFELUCIAJB6ABqIAAQOiACKAJoQYCAgIB4Rw0DIAJB2ABqIAJB9ABqKAIANgIAIAIgAikCbDcDUAwECyACQQA2AnggAkEBNgJsIAJB5NrAADYCaCACQgQ3AnAgAkHoAGpB7NrAABDjAQALIAJBADYCeCACQQE2AmwgAkHM3cAANgJoDAwLIAJBADYCeCACQQE2AmwgAkGM3cAANgJoDAsLIAJB6ABqEJEBIQAgAkGAgICAeDYCUCACIAA2AlQLIAEQrQIMBQsgAEUNASACQdgAaiABQQhqKAIANgIAIAIgASkCADcDUAwECyACKAI8QYCAgIB4Rg0CIAJB6ABqIAJBPGoQOiACKAJoQYCAgIB4RgRAIAJB2ABqIAJB9ABqKAIANgIAIAIgAikCbDcDUAwECyACQegAahCRASEAIAJBgICAgHg2AlAgAiAANgJUDAMLIAJB6ABqEIoCQSQQ2AEiAEHcisAANgIAIABBDjYCICAAQfOywAA2AhwgACACKQJoNwIEIABBDGogAkHwAGopAgA3AgAgAEEUaiACQfgAaikCADcCACABEK0CDAMLAAsgAkHQAGoiAyAAIAEQtQIgAkHoAGogAxA6IAIoAmhBgICAgHhGBEAgAkHYAGogAkH0AGooAgA2AgAgAiACKQJsNwNQDAELIAJB6ABqEJEBIQAgAkGAgICAeDYCUCACIAA2AlQLIAIoAlBBgICAgHhGBEAgAigCVCEADAELIAIoAlQhAyACKAJQQQAhASACQQA2AmggAiACQdAAaiIGIAJB6ABqEKgBIAIoAgQhACACKAIAQQFxDQIgBhDcASADEMgCDAELIAIgADYCLCACQQI2AjQgAiACQSxqNgIwIAJCATcCdEEBIQEgAkEBNgJsIAJB9NjAADYCaCACIAJBMGo2AnAgAkE4aiIDIAJB6ABqEFAgAigCPCACKAJAEOQBIQAgAxDVAiACKAIsIgMgAygCACgCABEEAAsgAkEgahDVAiAEIAE2AgggBCAAQQAgARs2AgQgBEEAIAAgARs2AgAgAkGAAWokAAwCCyACIAA2AmhB8MXAAEErIAJB6ABqQbSEwABB3ITAABCWAQALIAJCBDcCcCACQegAakGkhMAAEOMBAAsgBCgCACAEKAIEIAQoAgggBEEQaiQACycAIAIEQEHN5cAALQAAGiACIAEQggIhAQsgACACNgIEIAAgATYCAAstAQF/IAAgAygCBCIEIAMoAggQtgEgACACNgIQIAAgATYCDCADKAIAIAQQyQILJAEBfyABIAAoAgAgACgCCCICa0sEQCAAIAIgAUEBQQEQxAELCyQBAX8gASAAKAIAIAAoAggiAmtLBEAgACACIAFBBEEQEMQBCwsjACAAKAIIQQVHBEAgAEEIahDgAQ8LIAAoAgwgACgCEBCkAgsjACAAKAIIQQhHBEAgAEEIahC6AQ8LIAAoAgwgACgCEBCkAgssAQF/IAAoAgAgACgCBBDJAiAAKAIMIgFBgICAgHhHBEAgASAAKAIQEMkCCwspACAAKAIcIAAoAiAQyQIgACgCBCAAKAIIEMkCIAAoAhAgACgCFBDJAgsoAAJAAkACQCAAKAIADgQBAQECAAsgAEEEahDPAQsPCyAAQQRqEK0CCxkBAX8gASADRgR/IAAgAiABELUBBUEBC0ULGgEBfyABIANPBH8gAiADIAAgAxDwAQVBAAsLIQAgACgCAEUEQCAAQQxqEM8BDwsgACgCBCAAKAIIEKQCCyUAIAAoAgAtAABFBEAgAUGY0MAAQQUQIg8LIAFBndDAAEEEECILJgECfyAAKAIAIgFBgICAgHhyQYCAgIB4RwRAIAAoAgQgARCpAQsLHgAgAgRAIAEgAhDHAiEBCyAAIAI2AgQgACABNgIACykAIABBHGpBACACQu26rbbNhdT14wBRG0EAIAFC+IKZvZXuxsW5f1EbCygAIABBHGpBACACQsfr8MHzqJeEKlEbQQAgAUKH4efGtL2hrIx/URsLHgAgAEUEQBDeAgALIAAgAiADIAQgBSABKAIQEQkACxwBAX8gACgCACIBBEAgACgCCCABQQRBCBChAQsLGgAgAEEYahDhASAAKAIAQQNHBEAgABCOAgsLGABBzeXAAC0AABogABANIgAEQCAADwsACxwAIABFBEAQ3gIACyAAIAIgAyAEIAEoAhARBwALHAAgAEUEQBDeAgALIAAgAiADIAQgASgCEBEgAAscACAARQRAEN4CAAsgACACIAMgBCABKAIQEQgACxwAIABFBEAQ3gIACyAAIAIgAyAEIAEoAhARIgALHAAgAEUEQBDeAgALIAAgAiADIAQgASgCEBEkAAshAQF/Qc3lwAAtAAAaIAEQDSECIAAgATYCBCAAIAI2AgALFQAgAUEJTwRAIAEgABBKDwsgABANCxkAIAAgAUEHEEdBggFBgwEgAkEBcRsQ1AILGQAgAEEMaiABIAIgAyAEEJIBIABBBTYCCAsZACAAQQRqIAEgAiADIAQQkgEgAEEBNgIACxkAIABBDGogASACIAMgBBCSASAAQQg2AggLGgAgAEUEQBDeAgALIAAgAiADIAEoAhARAwALGAECfyAAKAIAIgEEQCAAKAIEIAEQqQELCxoBAW8gACUBIAElASABEHEgAiUBIAIQcRABCx8AQfXhwAAtAABFBEBB9eHAAEEBOgAACyAAQQE2AgALGAAgAyAEEOQBIQMgACABIAIQRyADENQCCyABAW8gA7gQBiEEEEIiAyAEJgEgACABIAIQRyADENQCC78CAQt/IAAoAgBBAkYEQCMAQSBrIgEkAAJAAkACQCAAQQRqIgQtABBBAWsOAgIAAQsgAUEBNgIIIAFB0InAADYCBCABQgA3AhAgASABQRxqNgIMIAFBBGpBzIrAABDjAQALIAQoAgghCSAEKAIEIQYDQCACIAlHBEAgBiAC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BUEYaq1CgICAgNAAhDcDWCAFIAVBEGqtQoCAgIDQAIQ3A1AgBSAFQShqrUKAgICAgAGENwNIDAULIAAgAUEAIAYgBBCwAgALIAVBBDYCNCAFQfiWwAA2AjAgBUIENwI8IAUgBUEYaq1CgICAgNAAhDcDYCAFIAVBEGqtQoCAgIDQAIQ3A1ggBSAFQQxqrUKAgICAgAGENwNQIAUgBUEIaq1CgICAgIABhDcDSAwDCyACIAdBsJjAABDPAgALIAQQ0AIACyAAIAEgAiABIAQQsAIACyAFIAVByABqNgI4IAVBMGogBBDjAQALFAAgACgCACABIAAoAgQoAgwRAAALDwAgACgCAARAIAAQxwELCxQCAW8BfxACIQAQQiIBIAAmASABCxQCAW8BfxAEIQAQQiIBIAAmASABCxIAIAAgASACQZ29wABBFRCSAQsQACABIAAoAgQgACgCCBAiCw4AIABFBEAgARDbAQsACxAAIAEgACgCACAAKAIEECILDgAgACABIAEgAmoQ3wELIAAgAEL19OXY2ufAzCk3AwggAELR0KXZn//nhj43AwALIQAgAELn1IDkh9uk5/sANwMIIABC8KWPpL67xYozNwMACw8AIABBBGoQjQIgABDYAgsTACAAQZiMwAA2AgQgACABNgIACw0AIAAgASABIAJqEGQLEAAgASgCHCABKAIgIAAQMwsgACAAQrmt6sLZ+JqoGDcDCCAAQvmmsevDh6XsFDcDAAshACAAQsfr8MHzqJeEKjcDCCAAQofh58a0vaGsjH83AwALEwAgAEEoNgIEIABBoK/AADYCAAsTACAAQbyxwAA2AgQgACABNgIACyIAIABC7bqtts2F1PXjADcDCCAAQviCmb2V7sbFuX83AwALEwAgAEGQ28AANgIEIAAgATYCAAsgACAAQuPg1qH2opedVjcDCCAAQtCWpsOS3u3ANzcDAAsSAEHN5cAALQAAGiABIAAQggILDQAgACABQQRBOBChAQsNACAAIAFBAUEBEKEBCw8AIAAoAgAgACgCBBDJAgsNACAAIAEgAhC5AkEACxAAIAAgASACQbClwAAQ7wILDQAgACABIAIQvgJBAAsQACAAIAEgAkHQpcAAEO8CCxAAIAAgASACQYSmwAAQ7wILDwBB8I7AAEErIAAQyQEACw0AIAAgAUEEQQwQoQELDQAg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U3RkZXJyaW5wdXRvdXRwdXRjdXJyZW50bmV4dENvbW1hbmRJbm5lclNpbXBsZXNpbXBsZVN1YnNoZWxsc3Vic2hlbGxQaXBlU2VxdWVuY2VQaXBlbGluZUlubmVycGlwZVNlcXVlbmNlZW52VmFyc2FyZ3NpdGVtc292ZXJ3cml0ZWFwcGVuZGlzQXN5bmNzZXF1ZW5jZWFuZG9yc3Rkb3V0fi8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL2NvbnNvbGVfZXJyb3JfcGFuaWNfaG9vay0wLjEuNy9zcmMvbGliLnJzAAAAwQEQAGAAAACVAAAADgAAACQAAAAEAAAABAAAACUAAABzcmMvcnNfbGliL3NyYy9saWIucnMAAABEAhAAFQAAAAgAAAA4AAAAJgAAAAwAAAAEAAAAJwAAACgAAAApAAAAY2FwYWNpdHkgb3ZlcmZsb3cAAACEAhAAEQAAAGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnOgAhAAHAAAACoCAAARAAAAbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAMwCEAAbAAAA6gEAABcAQYCGwAAL7QEBAAAAKgAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90bGlicmFyeS9hbGxvYy9zcmMvZm10LnJzAABeAxAAGAAAAIoCAAAOAAAAzAIQABsAAACNBQAAGwAAACkgc2hvdWxkIGJlIDwgbGVuIChpcyByZW1vdmFsIGluZGV4IChpcyCuAxAAEgAAAJgDEAAWAAAAnTAQAAEAAAArAAAADAAAAAQAAAAsAAAALQAAAC4AQfiHwAAL6QUBAAAALwAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAyCAQAGEAAAADCAAAHQAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuZXdfbGVuKcggEABhAAAAwAUAAA0AAAAAAAAAEAAAAAQAAAAwAAAAMQAAADIAAABpbnRlcm5hbCBlcnJvcjogZW50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BwABPQQABP4CAAdtBwBggPAAfi8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnOLFhAAZQAAAOEFAAAUAAAAixYQAGUAAADhBQAAIQAAAIsWEABlAAAA1QUAACEAAAB+Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUtYWFyY2g2NC1hcHBsZS1kYXJ3aW4vbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9jb3JlL3NyYy9pdGVyL3RyYWl0cy9pdGVyYXRvci5ycwAAIBcQAG4AAACzBwAACQAAAGRlc2NyaXB0aW9uKCkgaXMgZGVwcmVjYXRlZDsgdXNlIERpc3BsYXnIIBAAYQAAAOoBAAAXAAAAbCEQAE0AAACpAAAAGgAAAGwhEABNAAAAqgEAABMAAAAKCgAAbCEQAE0AAACPAAAAEQAAAGwhEABNAAAAjwAAACgAAABsIRAATQAAAJIBAAATAAAAbCEQAE0AAACeAAAAHwAAAE5vbmVTb21lUGFyc2VFcnJvckZhaWx1cmVFcnJvcm1lc3NhZ2Vjb2RlX3NuaXBwZXQAAABOAAAAGAAAAAQAAABPAAAATgAAABgAAAAEAAAAUAAAAE8AAABwGBAAPAAAAFEAAAA+AAAAPAAAAD8AAABSAAAANAAAAAQAAABBAAAAUgAAADQAAAAEAAAAQgAAAEEAAACsGBAAQwAAAFMAAABFAAAAQwAAAEYAAABUAAAAVQAAAFYAAABXAAAAWAAAAFkAAAA5AAAAixYQAGUAAABlBAAAJAAAACYmfHx+Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvZGVub190YXNrX3NoZWxsLTAuMjYuMS9zcmMvcGFyc2VyLnJzRW1wdHkgY29tbWFuZC5FeHBlY3RlZCBjb21tYW5kIGZvbGxvd2luZyBib29sZWFuIG9wZXJhdG9yLgAAABgZEABbAAAAmgEAADkAAABDYW5ub3Qgc2V0IG11bHRpcGxlIGVudmlyb25tZW50IHZhcmlhYmxlcyB3aGVuIHRoZXJlIGlzIG5vIGZvbGxvd2luZyBjb21tYW5kLkV4cGVjdGVkIGNvbW1hbmQgZm9sbG93aW5nIHBpcGVsaW5lIG9wZXJhdG9yLlJlZGlyZWN0cyBpbiBwaXBlIHNlcXVlbmNlIGNvbW1hbmRzIGFyZSBjdXJyZW50bHkgbm90IHN1cHBvcnRlZC5NdWx0aXBsZSByZWRpcmVjdHMgYXJlIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkLjt8Jj4+PnxJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlIHZhbHVlLlVuc3VwcG9ydGVkIHJlc2VydmVkIHdvcmQuRXhwZWN0ZWQgY2xvc2luZyBzaW5nbGUgcXVvdGUuABgZEABbAAAA3wIAACQAAAAYGRAAWwAAAOECAAAgAAAARmFpbGVkIHBhcnNpbmcgY29tbWFuZCBzdWJzdGl0dXRpb24gaW4gZG91YmxlIHF1b3RlZCBzdHJpbmcuGBkQAFsAAADmAgAAFwAAABgZEABbAAAA6wIAACQAAAAYGRAAWwAAAO0CAAAgAAAARmFpbGVkIHBhcnNpbmcgYmFja3RpY2tzIGluIGRvdWJsZSBxdW90ZWQgc3RyaW5nLgAAABgZEABbAAAA8gIAABcAAAAYGRAAWwAAAPcCAAAhAAAAGBkQAFsAAAD6AgAAEQAAAEV4cGVjdGVkIGNsb3NpbmcgZG91YmxlIHF1b3RlLkZhaWxlZCBwYXJzaW5nIHdpdGhpbiBkb3VibGUgcXVvdGVzLiBVbmV4cGVjdGVkIGNoYXJhY3RlcjogAAAAGhwQADsAAABDb3VsZCBub3QgZGV0ZXJtaW5lIGV4cHJlc3Npb24uRmFpbGVkIHBhcnNpbmcgd2l0aGluIGRvdWJsZSBxdW90ZXMuIH8cEAAlAAAAJCMqJCBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZC6vHBAAAQAAALAcEAAcAAAAGBkQAFsAAABRAwAADgAAACQ/AAAYGRAAWwAAAJwDAAASAAAAGBkQAFsAAACPAwAAFgAAAFVuc3VwcG9ydGVkIHRpbGRlIGV4cGFuc2lvbi4YGRAAWwAAAJoDAAArAAAAfigpe308PnwmOyInJChFeHBlY3RlZCBjbG9zaW5nIHBhcmVudGhlc2lzIGZvciBjb21tYW5kIHN1YnN0aXR1dGlvbi5FeHBlY3RlZCBjbG9zaW5nIGJhY2t0aWNrLgAAGBkQAFsAAAC9AwAAIQAAAFxgYEZhaWxlZCBwYXJzaW5nIHdpdGhpbiBiYWNrdGlja3MuIFVuZXhwZWN0ZWQgY2hhcmFjdGVyOiAAAK8dEAA3AAAAGBkQAFsAAADfAwAAGgAAAGJhY2t0aWNrc0ZhaWxlZCBwYXJzaW5nIHdpdGhpbiAuIAAAAAkeEAAWAAAAHx4QAAIAAABFeHBlY3RlZCBjbG9zaW5nIHBhcmVudGhlc2lzIG9uIHN1YnNoZWxsLgAAABgZEABbAAAADAQAAA0AAABpZnRoZW5lbHNlZWxpZmZpZG9kb25lY2FzZWVzYWN3aGlsZXVudGlsZm9yaW5VbmV4cGVjdGVkIGNoYXJhY3Rlci5IYXNoIHRhYmxlIGNhcGFjaXR5IG92ZXJmbG93AACyHhAAHAAAAC9ydXN0L2RlcHMvaGFzaGJyb3duLTAuMTUuMi9zcmMvcmF3L21vZC5ycwAA2B4QACoAAAAjAAAAKAAAADQwEABhAAAAJAEAAA4AAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgYWZ0ZXIgYmVpbmcgZHJvcHBlZAICAgICAgICAgMDAQEBAEH2vsAACxABAAAAAAAAAAICAAAAAAACAEG1v8AACwECAEHbv8AACwEBAEH2v8AACwEBAEHWwMAAC6MKfi8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3NsaWNlLnJzAABWIBAAYAAAAKIAAAAZAAAAfi8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLWFhcmNoNjQtYXBwbGUtZGFyd2luL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwAAAMggEABhAAAAjQUAABsAAAAALxAAYgAAACoCAAARAAAACiAgCiAgfgABAAAAAAAAAEwhEAADAAAATyEQAAQAAAB+Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvbW9uY2gtMC41LjAvc3JjL2xpYi5ycwAA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a3RyYWNlAMwrEAAcAAAAigEAAB0AAABkAAAAEAAAAAQAAABlAAAAZgAAAAEAAAAAAAAAOiBwYW5pY2tlZCBhdCA6CmNhbm5vdCByZWN1cnNpdmVseSBhY3F1aXJlIG11dGV4jCwQACAAAABsaWJyYXJ5L3N0ZC9zcmMvc3lzL3N5bmMvbXV0ZXgvbm9fdGhyZWFkcy5yc7QsEAAsAAAAEwAAAAkAAABsaWJyYXJ5L3N0ZC9zcmMvc3luYy9sYXp5X2xvY2sucnMAAADwLBAAIQAAANEAAAATAAAAPHVua25vd24+77+9Y2Fubm90IG1vZGlmeSB0aGUgcGFuaWMgaG9vayBmcm9tIGEgcGFuaWNraW5nIHRocmVhZDAtEAA0AAAACCoQABwAAACOAAAACQAAAAoAAAAmAAAADAAAAAQAAABnAAAAAAAAAAgAAAAEAAAAaAAAAAAAAAAIAAAABAAAAGkAAABqAAAAawAAAGwAAABtAAAAEAAAAAQAAABuAAAAbwAAAHAAAABxAAAAbGlicmFyeS9zdGQvc3JjLy4uLy4uL2JhY2t0cmFjZS9zcmMvc3ltYm9saXplL21vZC5yc9gtEAA0AAAAZwEAADAAAAABAAAAAAAAAHwsEAACAAAAIC0gAAEAAAAAAAAALC4QAAMAAAAgICAgICAgICAgICAgICAgICAgYXQgAADwKhAAAQAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAYC4QACoAAABvbmUtdGltZSBpbml0aWFsaXphdGlvbiBtYXkgbm90IGJlIHBlcmZvcm1lZCByZWN1cnNpdmVseZQuEAA4AAAAVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR51C4QACQAAAB+Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUtYWFyY2g2NC1hcHBsZS1kYXJ3aW4vbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5ycwAAAC8QAGIAAAC1AgAACQAAAExhenkgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAAdC8QACoAAAB+Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvb25jZV9jZWxsLTEuMjEuMy9zcmMvbGliLnJzAACoLxAAUgAAAAgDAAAZAAAAcmVlbnRyYW50IGluaXQAAAwwEAAOAAAAqC8QAFIAAAB6AgAADQAAAH4vLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi93YXNtLWJpbmRnZW4tMC4yLjEwMC9zcmMvY29udmVydC9zbGljZXMucnNKc1ZhbHVlKCkAAJUwEAAIAAAAnTAQAAEAAAA0MBAAYQAAAOgAAAABAEHY4cAACwFyAHAJcHJvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2VkLWJ5AwVydXN0Yx0xLjg2LjAgKDA1Zjk4NDZmOCAyMDI1LTAzLTMxKQZ3YWxydXMGMC4yMy4zDHdhc20tYmluZGdlbgcwLjIuMTAwAEkPdGFyZ2V0X2ZlYXR1cmVzBCsPbXV0YWJsZS1nbG9iYWxzKwhzaWduLWV4dCsPcmVmZXJlbmNlLXR5cGVzKwptdWx0aXZhbHVl");
var wasmModule2 = new WebAssembly.Module(bytes2);
var wasm4 = new WebAssembly.Instance(wasmModule2, {
  "./rs_lib.internal.js": rs_lib_internal_exports2
});
__wbg_set_wasm2(wasm4.exports);
wasm4.exports.__wbindgen_start();
function base64decode2(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes3 = new Uint8Array(size);
  for (let i = 0;i < size; i++) {
    bytes3[i] = binString.charCodeAt(i);
  }
  return bytes3;
}
var __addDisposableResource2 = function(env3, value, async) {
  if (value !== null && value !== undefined) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === undefined) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async)
        inner = dispose;
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    if (inner)
      dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
    env3.stack.push({ value, dispose, async });
  } else if (async) {
    env3.stack.push({ async: true });
  }
  return value;
};
var __disposeResources2 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env3) {
    function fail(e) {
      env3.error = env3.hasError ? new SuppressedError2(e, env3.error, "An error was suppressed during disposal.") : e;
      env3.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env3.stack.pop()) {
        try {
          if (!r.async && s === 1)
            return s = 0, env3.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async)
              return s |= 2, Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } else
            s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1)
        return env3.hasError ? Promise.reject(env3.error) : Promise.resolve();
      if (env3.hasError)
        throw env3.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
var encoder3 = new TextEncoder;
var NullPipeReader = class {
  read(_p) {
    return Promise.resolve(null);
  }
};
var NullPipeWriter = class {
  writeSync(p) {
    return p.length;
  }
};
var ShellPipeWriter = class {
  #kind;
  #inner;
  constructor(kind, inner) {
    this.#kind = kind;
    this.#inner = inner;
  }
  get kind() {
    return this.#kind;
  }
  get inner() {
    return this.#inner;
  }
  write(p) {
    if ("write" in this.#inner) {
      return this.#inner.write(p);
    } else {
      return this.#inner.writeSync(p);
    }
  }
  writeAll(data) {
    if ("write" in this.#inner) {
      return writeAll2(this.#inner, data);
    } else {
      return writeAllSync2(this.#inner, data);
    }
  }
  writeText(text) {
    return this.writeAll(encoder3.encode(text));
  }
  writeLine(text) {
    return this.writeText(text + `
`);
  }
};
var CapturingBufferWriter = class {
  #buffer;
  #innerWriter;
  constructor(innerWriter, buffer) {
    this.#innerWriter = innerWriter;
    this.#buffer = buffer;
  }
  getBuffer() {
    return this.#buffer;
  }
  async write(p) {
    const nWritten = await this.#innerWriter.write(p);
    this.#buffer.writeSync(p.slice(0, nWritten));
    return nWritten;
  }
};
var CapturingBufferWriterSync = class {
  #buffer;
  #innerWriter;
  constructor(innerWriter, buffer) {
    this.#innerWriter = innerWriter;
    this.#buffer = buffer;
  }
  getBuffer() {
    return this.#buffer;
  }
  writeSync(p) {
    const nWritten = this.#innerWriter.writeSync(p);
    this.#buffer.writeSync(p.slice(0, nWritten));
    return nWritten;
  }
};
var lineFeedCharCode = 10;
var InheritStaticTextBypassWriter = class {
  #buffer;
  #innerWriter;
  constructor(innerWriter) {
    this.#innerWriter = innerWriter;
    this.#buffer = new Buffer2;
  }
  writeSync(p) {
    const index = p.findLastIndex((v) => v === lineFeedCharCode);
    if (index === -1) {
      this.#buffer.writeSync(p);
    } else {
      this.#buffer.writeSync(p.slice(0, index + 1));
      this.flush();
      this.#buffer.writeSync(p.slice(index + 1));
    }
    return p.byteLength;
  }
  flush() {
    const bytes3 = this.#buffer.bytes({ copy: false });
    logger.withTempClear(() => {
      writeAllSync2(this.#innerWriter, bytes3);
    });
    this.#buffer.reset();
  }
};
var PipedBuffer = class {
  #inner;
  #hasSet = false;
  constructor() {
    this.#inner = new Buffer2;
  }
  getBuffer() {
    if (this.#inner instanceof Buffer2) {
      return this.#inner;
    } else {
      return;
    }
  }
  setError(err) {
    if ("setError" in this.#inner) {
      this.#inner.setError(err);
    }
  }
  close() {
    if ("close" in this.#inner) {
      this.#inner.close();
    }
  }
  writeSync(p) {
    return this.#inner.writeSync(p);
  }
  setListener(listener) {
    if (this.#hasSet) {
      throw new Error("Piping to multiple outputs is currently not supported.");
    }
    if (this.#inner instanceof Buffer2) {
      writeAllSync2(listener, this.#inner.bytes({ copy: false }));
    }
    this.#inner = listener;
    this.#hasSet = true;
  }
};
var PipeSequencePipe = class {
  #inner = new Buffer2;
  #readListener;
  #closed = false;
  close() {
    this.#readListener?.();
    this.#closed = true;
  }
  writeSync(p) {
    const value = this.#inner.writeSync(p);
    if (this.#readListener !== undefined) {
      const listener = this.#readListener;
      this.#readListener = undefined;
      listener();
    }
    return value;
  }
  read(p) {
    if (this.#readListener !== undefined) {
      throw new Error("Misuse of PipeSequencePipe");
    }
    if (this.#inner.length === 0) {
      if (this.#closed) {
        return Promise.resolve(null);
      } else {
        return new Promise((resolve4) => {
          this.#readListener = () => {
            resolve4(this.#inner.readSync(p));
          };
        });
      }
    } else {
      return Promise.resolve(this.#inner.readSync(p));
    }
  }
};
async function pipeReaderToWritable(reader, writable, signal) {
  const env_1 = { stack: [], error: undefined, hasError: false };
  try {
    const abortedPromise = __addDisposableResource2(env_1, abortSignalToPromise(signal), false);
    const writer = writable.getWriter();
    try {
      while (!signal.aborted) {
        const buffer = new Uint8Array(1024);
        const length = await Promise.race([abortedPromise.promise, reader.read(buffer)]);
        if (length === 0 || length == null) {
          break;
        }
        await writer.write(buffer.subarray(0, length));
      }
    } finally {
      await writer.close();
    }
  } catch (e_1) {
    env_1.error = e_1;
    env_1.hasError = true;
  } finally {
    __disposeResources2(env_1);
  }
}
async function pipeReadableToWriterSync(readable, writer, signal) {
  const reader = readable.getReader();
  while (!signal.aborted) {
    const result = await reader.read();
    if (result.done) {
      break;
    }
    const maybePromise = writer.writeAll(result.value);
    if (maybePromise) {
      await maybePromise;
    }
  }
}
function toNodeStdio(stdio) {
  switch (stdio) {
    case "inherit":
      return "inherit";
    case "null":
      return "ignore";
    case "piped":
      return "pipe";
  }
}
var spawnCommand = (path, options) => {
  let receivedSignal;
  const isWindowsBatch = os8.platform() === "win32" && /\.(cmd|bat)$/i.test(path);
  const child = cp.spawn(isWindowsBatch ? "cmd.exe" : path, isWindowsBatch ? ["/d", "/s", "/c", path, ...options.args] : options.args, {
    cwd: options.cwd,
    env: options.env,
    stdio: [
      toNodeStdio(options.stdin),
      toNodeStdio(options.stdout),
      toNodeStdio(options.stderr)
    ]
  });
  const exitResolvers = Promise.withResolvers();
  child.on("exit", (code2) => {
    if (code2 == null && receivedSignal != null) {
      exitResolvers.resolve(getSignalAbortCode(receivedSignal) ?? 1);
    } else {
      exitResolvers.resolve(code2 ?? 0);
    }
  });
  child.on("error", (err) => {
    exitResolvers.reject(err);
  });
  return {
    stdin() {
      return Writable2.toWeb(child.stdin);
    },
    kill(signo) {
      receivedSignal = signo;
      child.kill(signo);
    },
    waitExitCode() {
      return exitResolvers.promise;
    },
    stdout() {
      return Readable2.toWeb(child.stdout);
    },
    stderr() {
      return Readable2.toWeb(child.stderr);
    }
  };
};
var neverAbortedSignal = new AbortController().signal;
function createExecutableCommand(resolvedPath) {
  return async function executeCommandAtPath(context) {
    const pipeStringVals = {
      stdin: getStdioStringValue(context.stdin),
      stdout: getStdioStringValue(context.stdout.kind),
      stderr: getStdioStringValue(context.stderr.kind)
    };
    let p;
    const cwd2 = context.cwd;
    try {
      p = spawnCommand(resolvedPath, {
        args: context.args,
        cwd: cwd2,
        env: context.env,
        clearEnv: true,
        ...pipeStringVals
      });
    } catch (err) {
      throw checkMapCwdNotExistsError(cwd2, err);
    }
    const listener = (signal) => p.kill(signal);
    context.signal.addListener(listener);
    const completeController = new AbortController;
    const completeSignal = completeController.signal;
    let stdinError;
    const stdinPromise = writeStdin(context.stdin, p, completeSignal).catch(async (err) => {
      if (completeSignal.aborted) {
        return;
      }
      const maybePromise = context.stderr.writeLine(`stdin pipe broken. ${errorToString(err)}`);
      if (maybePromise != null) {
        await maybePromise;
      }
      stdinError = err;
      try {
        p.kill("SIGKILL");
      } catch (err2) {
        if (!(err2 instanceof main_exports.errors.PermissionDenied || err2 instanceof main_exports.errors.NotFound)) {
          throw err2;
        }
      }
    });
    try {
      const readStdoutTask = pipeStringVals.stdout === "piped" ? readStdOutOrErr(p.stdout(), context.stdout) : Promise.resolve();
      const readStderrTask = pipeStringVals.stderr === "piped" ? readStdOutOrErr(p.stderr(), context.stderr) : Promise.resolve();
      const [exitCode] = await Promise.all([
        p.waitExitCode().catch((err) => Promise.reject(checkMapCwdNotExistsError(cwd2, err))),
        readStdoutTask,
        readStderrTask
      ]);
      if (stdinError != null) {
        return {
          code: 1,
          kind: "exit"
        };
      } else {
        return { code: exitCode };
      }
    } finally {
      completeController.abort();
      context.signal.removeListener(listener);
      await stdinPromise;
    }
  };
}
async function writeStdin(stdin2, p, signal) {
  if (typeof stdin2 === "string") {
    return;
  }
  const processStdin = p.stdin();
  await pipeReaderToWritable(stdin2, processStdin, signal);
  try {
    await processStdin.close();
  } catch {}
}
async function readStdOutOrErr(readable, writer) {
  if (typeof writer === "string") {
    return;
  }
  await pipeReadableToWriterSync(readable, writer, neverAbortedSignal);
}
function getStdioStringValue(value) {
  if (value === "inheritPiped") {
    return "piped";
  } else if (value === "inherit" || value === "null" || value === "piped") {
    return value;
  } else {
    return "piped";
  }
}
function checkMapCwdNotExistsError(cwd2, err) {
  if (err.code === "ENOENT" && !existsSync(cwd2)) {
    throw new Error(`Failed to launch command because the cwd does not exist (${cwd2}).`, {
      cause: err
    });
  } else {
    throw err;
  }
}
var ShellEvaluateError = class extends Error {
};
var RealEnv = class {
  setCwd(cwd2) {
    main_exports.chdir(cwd2);
  }
  getCwd() {
    return main_exports.cwd();
  }
  setEnvVar(key, value) {
    if (value == null) {
      main_exports.env.delete(key);
    } else {
      main_exports.env.set(key, value);
    }
  }
  getEnvVar(key) {
    return main_exports.env.get(key);
  }
  getEnvVars() {
    return main_exports.env.toObject();
  }
  clone() {
    return cloneEnv(this);
  }
};
var ShellEnv = class {
  #cwd;
  #envVars = {};
  setCwd(cwd2) {
    this.#cwd = cwd2;
  }
  getCwd() {
    if (this.#cwd == null) {
      throw new Error("The cwd must be initialized.");
    }
    return this.#cwd;
  }
  setEnvVar(key, value) {
    if (main_exports.build.os === "windows") {
      key = key.toUpperCase();
    }
    if (value == null) {
      delete this.#envVars[key];
    } else {
      this.#envVars[key] = value;
    }
  }
  getEnvVar(key) {
    if (main_exports.build.os === "windows") {
      key = key.toUpperCase();
    }
    return this.#envVars[key];
  }
  getEnvVars() {
    return { ...this.#envVars };
  }
  clone() {
    return cloneEnv(this);
  }
};
var RealEnvWriteOnly = class {
  real = new RealEnv;
  shell = new ShellEnv;
  setCwd(cwd2) {
    this.real.setCwd(cwd2);
    this.shell.setCwd(cwd2);
  }
  getCwd() {
    return this.shell.getCwd();
  }
  setEnvVar(key, value) {
    this.real.setEnvVar(key, value);
    this.shell.setEnvVar(key, value);
  }
  getEnvVar(key) {
    return this.shell.getEnvVar(key);
  }
  getEnvVars() {
    return this.shell.getEnvVars();
  }
  clone() {
    return cloneEnv(this);
  }
};
function initializeEnv(env3, opts) {
  env3.setCwd(opts.cwd);
  for (const [key, value] of Object.entries(opts.env)) {
    env3.setEnvVar(key, value);
  }
}
function cloneEnv(env3) {
  const result = new ShellEnv;
  initializeEnv(result, {
    cwd: env3.getCwd(),
    env: env3.getEnvVars()
  });
  return result;
}
var StreamFds = class {
  #readers = /* @__PURE__ */ new Map;
  #writers = /* @__PURE__ */ new Map;
  insertReader(fd, stream3) {
    this.#readers.set(fd, stream3);
  }
  insertWriter(fd, stream3) {
    this.#writers.set(fd, stream3);
  }
  getReader(fd) {
    return this.#readers.get(fd)?.();
  }
  getWriter(fd) {
    return this.#writers.get(fd)?.();
  }
};
var Context = class _Context {
  stdin;
  stdout;
  stderr;
  #env;
  #shellVars;
  #shellOptions;
  #static;
  constructor(opts) {
    this.stdin = opts.stdin;
    this.stdout = opts.stdout;
    this.stderr = opts.stderr;
    this.#env = opts.env;
    this.#shellVars = opts.shellVars;
    this.#shellOptions = opts.shellOptions;
    this.#static = opts.static;
  }
  get signal() {
    return this.#static.signal;
  }
  applyChanges(changes) {
    if (changes == null) {
      return;
    }
    for (const change of changes) {
      switch (change.kind) {
        case "cd":
          this.#env.setCwd(change.dir);
          break;
        case "envvar":
          this.setEnvVar(change.name, change.value);
          break;
        case "shellvar":
          this.setShellVar(change.name, change.value);
          break;
        case "unsetvar":
          this.setShellVar(change.name, undefined);
          this.setEnvVar(change.name, undefined);
          break;
        case "setoption":
          this.setShellOption(change.option, change.value);
          break;
        default: {
          const _assertNever = change;
          throw new Error(`Not implemented env change: ${change}`);
        }
      }
    }
  }
  setEnvVar(key, value) {
    if (main_exports.build.os === "windows") {
      key = key.toUpperCase();
    }
    if (key === "PWD") {
      if (value != null && isAbsolute3(value)) {
        this.#env.setCwd(resolve3(value));
      }
    } else {
      delete this.#shellVars[key];
      this.#env.setEnvVar(key, value);
    }
  }
  setShellVar(key, value) {
    if (main_exports.build.os === "windows") {
      key = key.toUpperCase();
    }
    if (this.#env.getEnvVar(key) != null || key === "PWD") {
      this.setEnvVar(key, value);
    } else if (value == null) {
      delete this.#shellVars[key];
    } else {
      this.#shellVars[key] = value;
    }
  }
  getEnvVars() {
    return this.#env.getEnvVars();
  }
  getCwd() {
    return this.#env.getCwd();
  }
  getVar(key) {
    if (main_exports.build.os === "windows") {
      key = key.toUpperCase();
    }
    if (key === "PWD") {
      return this.#env.getCwd();
    }
    return this.#env.getEnvVar(key) ?? this.#shellVars[key];
  }
  getCommand(command) {
    return this.#static.commands[command] ?? null;
  }
  getShellOptions() {
    return this.#shellOptions;
  }
  setShellOption(option, value) {
    this.#shellOptions[option] = value;
  }
  getFdReader(fd) {
    return this.#static.fds?.getReader(fd);
  }
  getFdWriter(fd) {
    return this.#static.fds?.getWriter(fd);
  }
  asCommandContext(args2) {
    const context = this;
    return {
      get args() {
        return args2;
      },
      get cwd() {
        return context.getCwd();
      },
      get env() {
        return context.getEnvVars();
      },
      get stdin() {
        return context.stdin;
      },
      get stdout() {
        return context.stdout;
      },
      get stderr() {
        return context.stderr;
      },
      get signal() {
        return context.signal;
      },
      get shellOptions() {
        return context.getShellOptions();
      },
      error(codeOrText, maybeText) {
        return context.error(codeOrText, maybeText);
      }
    };
  }
  error(codeOrText, maybeText) {
    let code2;
    let text;
    if (typeof codeOrText === "number") {
      code2 = codeOrText;
      text = maybeText;
    } else {
      code2 = 1;
      text = codeOrText;
    }
    const maybePromise = this.stderr.writeLine(text);
    if (maybePromise instanceof Promise) {
      return maybePromise.then(() => ({ code: code2 }));
    } else {
      return { code: code2 };
    }
  }
  withInner(opts) {
    return new _Context({
      stdin: opts.stdin ?? this.stdin,
      stdout: opts.stdout ?? this.stdout,
      stderr: opts.stderr ?? this.stderr,
      env: this.#env.clone(),
      shellVars: { ...this.#shellVars },
      shellOptions: this.#shellOptions,
      static: this.#static
    });
  }
  clone() {
    return new _Context({
      stdin: this.stdin,
      stdout: this.stdout,
      stderr: this.stderr,
      env: this.#env.clone(),
      shellVars: { ...this.#shellVars },
      shellOptions: this.#shellOptions,
      static: this.#static
    });
  }
};
function parseCommand(command) {
  return parse3(command);
}
function getDefaultShellOptions() {
  return {
    nullglob: false,
    failglob: false,
    pipefail: false,
    globstar: true,
    questionGlob: false
  };
}
async function spawn2(list, opts) {
  const env3 = opts.exportEnv ? opts.clearedEnv ? new RealEnvWriteOnly : new RealEnv : new ShellEnv;
  initializeEnv(env3, opts);
  const defaultOptions = getDefaultShellOptions();
  const context = new Context({
    env: env3,
    stdin: opts.stdin,
    stdout: opts.stdout,
    stderr: opts.stderr,
    shellVars: {},
    shellOptions: {
      ...defaultOptions,
      ...opts.shellOptions
    },
    static: {
      commands: opts.commands,
      fds: opts.fds,
      signal: opts.signal
    }
  });
  const result = await executeSequentialList(list, context);
  return result.code;
}
async function executeSequentialList(list, context) {
  let finalExitCode = 0;
  const finalChanges = [];
  for (const item of list.items) {
    if (item.isAsync) {
      throw new Error("Async commands are not supported. Run a command concurrently in the JS code instead.");
    }
    const result = await executeSequence(item.sequence, context);
    switch (result.kind) {
      case undefined:
        if (result.changes) {
          context.applyChanges(result.changes);
          finalChanges.push(...result.changes);
        }
        finalExitCode = result.code;
        break;
      case "exit":
        return result;
      default: {
        const _assertNever = result;
      }
    }
  }
  return {
    code: finalExitCode,
    changes: finalChanges
  };
}
function executeSequence(sequence, context) {
  if (context.signal.aborted) {
    return Promise.resolve(getAbortedResult());
  }
  switch (sequence.kind) {
    case "pipeline":
      return executePipeline(sequence, context);
    case "booleanList":
      return executeBooleanList(sequence, context);
    case "shellVar":
      return executeShellVar(sequence, context);
    default: {
      const _assertNever = sequence;
      throw new Error(`Not implemented: ${sequence}`);
    }
  }
}
function executePipeline(pipeline, context) {
  const output = executePipelineInner(pipeline.inner, context);
  if (pipeline.negated) {
    return Promise.resolve(output).then((result) => {
      return {
        ...result,
        code: result.code === 0 ? 1 : 0
      };
    });
  }
  return output;
}
async function executeBooleanList(list, context) {
  const changes = [];
  const firstResult = await executeSequence(list.current, context.clone());
  let exitCode = 0;
  switch (firstResult.kind) {
    case "exit":
      return firstResult;
    case undefined:
      if (firstResult.changes) {
        context.applyChanges(firstResult.changes);
        changes.push(...firstResult.changes);
      }
      exitCode = firstResult.code;
      break;
    default: {
      const _assertNever = firstResult;
      throw new Error("Not handled.");
    }
  }
  const next = findNextSequence(list, exitCode);
  if (next == null) {
    return {
      code: exitCode,
      changes
    };
  } else {
    const nextResult = await executeSequence(next, context.clone());
    switch (nextResult.kind) {
      case "exit":
        return nextResult;
      case undefined:
        if (nextResult.changes) {
          changes.push(...nextResult.changes);
        }
        return {
          code: nextResult.code,
          changes
        };
      default: {
        const _assertNever = nextResult;
        throw new Error("Not Implemented");
      }
    }
  }
  function findNextSequence(current, exitCode2) {
    if (opMovesNextForExitCode(current.op, exitCode2)) {
      return current.next;
    } else {
      let next2 = current.next;
      while (next2.kind === "booleanList") {
        if (opMovesNextForExitCode(next2.op, exitCode2)) {
          return next2.next;
        } else {
          next2 = next2.next;
        }
      }
      return;
    }
  }
  function opMovesNextForExitCode(op, exitCode2) {
    switch (op) {
      case "or":
        return exitCode2 !== 0;
      case "and":
        return exitCode2 === 0;
    }
  }
}
async function executeShellVar(sequence, context) {
  const value = await evaluateWord(sequence.value, context);
  return {
    code: 0,
    changes: [{
      kind: "shellvar",
      name: sequence.name,
      value
    }]
  };
}
function executePipelineInner(inner, context) {
  switch (inner.kind) {
    case "command":
      return executeCommand(inner, context);
    case "pipeSequence":
      return executePipeSequence(inner, context);
    default: {
      const _assertNever = inner;
      throw new Error(`Not implemented: ${inner.kind}`);
    }
  }
}
async function executeCommand(command, context) {
  if (command.redirect != null) {
    const redirectResult = await resolveRedirectPipe(command.redirect, context);
    let redirectPipe;
    if (redirectResult.kind === "input") {
      const { pipe } = redirectResult;
      context = context.withInner({
        stdin: pipe
      });
      redirectPipe = pipe;
    } else if (redirectResult.kind === "output") {
      const { pipe, toFd } = redirectResult;
      const writer = new ShellPipeWriter("piped", pipe);
      redirectPipe = pipe;
      if (toFd === 1) {
        context = context.withInner({
          stdout: writer
        });
      } else if (toFd === 2) {
        context = context.withInner({
          stderr: writer
        });
      } else if (toFd === "&") {
        context = context.withInner({
          stdout: writer
        }).withInner({
          stderr: writer
        });
      } else {
        const _assertNever = toFd;
        throw new Error(`Not handled fd: ${toFd}`);
      }
    } else {
      return redirectResult;
    }
    const result = await executeCommandInner(command.inner, context);
    try {
      if (isAsyncDisposable(redirectPipe)) {
        await redirectPipe[Symbol.asyncDispose]();
      } else if (isDisposable(redirectPipe)) {
        redirectPipe[Symbol.dispose]();
      }
    } catch (err) {
      if (result.code === 0) {
        return context.error(`failed disposing redirected pipe. ${errorToString(err)}`);
      }
    }
    return result;
  } else {
    return executeCommandInner(command.inner, context);
  }
}
async function resolveRedirectPipe(redirect, context) {
  function handleFileOpenError(outputPath, err) {
    return context.error(`failed opening file for redirect (${outputPath}). ${errorToString(err)}`);
  }
  const toFd = resolveRedirectToFd(redirect, context);
  if (typeof toFd !== "number" && toFd !== "&") {
    return toFd;
  }
  const { ioFile } = redirect;
  if (ioFile.kind === "fd") {
    switch (redirect.op.kind) {
      case "input": {
        if (ioFile.value === 0) {
          return {
            kind: "input",
            pipe: getStdinReader(context.stdin)
          };
        } else if (ioFile.value === 1 || ioFile.value === 2) {
          return context.error(`redirecting stdout or stderr to a command input is not supported`);
        } else {
          const pipe = context.getFdReader(ioFile.value);
          if (pipe == null) {
            return context.error(`could not find fd reader: ${ioFile.value}`);
          } else {
            return {
              kind: "input",
              pipe
            };
          }
        }
      }
      case "output": {
        if (ioFile.value === 0) {
          return context.error(`redirecting output to stdin is not supported`);
        } else if (ioFile.value === 1) {
          return {
            kind: "output",
            pipe: context.stdout.inner,
            toFd
          };
        } else if (ioFile.value === 2) {
          return {
            kind: "output",
            pipe: context.stderr.inner,
            toFd
          };
        } else {
          const pipe = context.getFdWriter(ioFile.value);
          if (pipe == null) {
            return context.error(`could not find fd: ${ioFile.value}`);
          } else {
            return {
              kind: "output",
              pipe,
              toFd
            };
          }
        }
      }
      default: {
        const _assertNever = redirect.op;
        throw new Error("not implemented redirect op.");
      }
    }
  } else if (ioFile.kind === "word") {
    const words = await evaluateWordParts(ioFile.value, context);
    if (words.length === 0) {
      return context.error("redirect path must be 1 argument, but found 0");
    } else if (words.length > 1) {
      return context.error(`redirect path must be 1 argument, but found ${words.length} (${words.join(" ")}). Did you mean to quote it (ex. "${words.join(" ")}")?`);
    }
    switch (redirect.op.kind) {
      case "input": {
        const outputPath = isAbsolute3(words[0]) ? words[0] : join32(context.getCwd(), words[0]);
        try {
          const file = await main_exports.open(outputPath, {
            read: true
          });
          return {
            kind: "input",
            pipe: file
          };
        } catch (err) {
          return handleFileOpenError(outputPath, err);
        }
      }
      case "output": {
        if (words[0] === "/dev/null") {
          return {
            kind: "output",
            pipe: new NullPipeWriter,
            toFd
          };
        }
        const outputPath = isAbsolute3(words[0]) ? words[0] : join32(context.getCwd(), words[0]);
        try {
          const file = await main_exports.open(outputPath, {
            write: true,
            create: true,
            append: redirect.op.value === "append",
            truncate: redirect.op.value !== "append"
          });
          return {
            kind: "output",
            pipe: file,
            toFd
          };
        } catch (err) {
          return handleFileOpenError(outputPath, err);
        }
      }
      default: {
        const _assertNever = redirect.op;
        throw new Error("not implemented redirect op.");
      }
    }
  } else {
    const _assertNever = ioFile;
    throw new Error("not implemented redirect io file.");
  }
}
function getStdinReader(stdin2) {
  if (stdin2 === "inherit") {
    return main_exports.stdin;
  } else if (stdin2 === "null") {
    return new NullPipeReader;
  } else {
    return stdin2;
  }
}
function resolveRedirectToFd(redirect, context) {
  const maybeFd = redirect.maybeFd;
  if (maybeFd == null) {
    return 1;
  }
  if (maybeFd.kind === "stdoutStderr") {
    return "&";
  }
  if (maybeFd.fd !== 1 && maybeFd.fd !== 2) {
    return context.error(`only redirecting to stdout (1) and stderr (2) is supported`);
  } else {
    return maybeFd.fd;
  }
}
function executeCommandInner(command, context) {
  switch (command.kind) {
    case "simple":
      return executeSimpleCommand(command, context);
    case "subshell":
      return executeSubshell(command, context);
    default: {
      const _assertNever = command;
      throw new Error(`Not implemented: ${command.kind}`);
    }
  }
}
async function executeSimpleCommand(command, parentContext) {
  const context = parentContext.clone();
  try {
    for (const envVar of command.envVars) {
      context.setEnvVar(envVar.name, await evaluateWord(envVar.value, context));
    }
    const commandArgs = await evaluateArgs(command.args, context);
    return await executeCommandArgs(commandArgs, context);
  } catch (err) {
    if (err instanceof ShellEvaluateError) {
      return context.error(err.message);
    } else {
      throw err;
    }
  }
}
function executeCommandArgs(commandArgs, context) {
  const commandName = commandArgs.shift();
  const command = context.getCommand(commandName);
  if (command != null) {
    return Promise.resolve(command(context.asCommandContext(commandArgs)));
  }
  const unresolvedCommand = {
    name: commandName,
    baseDir: context.getCwd()
  };
  return executeUnresolvedCommand(unresolvedCommand, commandArgs, context);
}
async function executeUnresolvedCommand(unresolvedCommand, commandArgs, context) {
  const resolvedCommand = await resolveCommand(unresolvedCommand, context);
  if (resolvedCommand === false) {
    context.stderr.writeLine(`dax: ${unresolvedCommand.name}: command not found`);
    return { code: 127 };
  }
  if (resolvedCommand.kind === "shebang") {
    return executeUnresolvedCommand(resolvedCommand.command, [...resolvedCommand.args, ...commandArgs], context);
  }
  const _assertIsPath = resolvedCommand.kind;
  return createExecutableCommand(resolvedCommand.path)(context.asCommandContext(commandArgs));
}
async function executeSubshell(subshell, context) {
  const result = await executeSequentialList(subshell, context);
  return { code: result.code };
}
async function pipeReaderToWriterSync(reader, writer, signal) {
  const buffer = new Uint8Array(1024);
  while (!signal.aborted) {
    const bytesRead = await reader.read(buffer);
    if (bytesRead == null || bytesRead === 0) {
      break;
    }
    const maybePromise = writer.writeAll(buffer.slice(0, bytesRead));
    if (maybePromise) {
      await maybePromise;
    }
  }
}
function pipeCommandPipeReaderToWriterSync(reader, writer, signal) {
  switch (reader) {
    case "inherit":
      return pipeReadableToWriterSync(main_exports.stdin.readable, writer, signal);
    case "null":
      return Promise.resolve();
    default: {
      return pipeReaderToWriterSync(reader, writer, signal);
    }
  }
}
async function resolveCommand(unresolvedCommand, context) {
  if (unresolvedCommand.name.includes("/") || main_exports.build.os === "windows" && unresolvedCommand.name.includes("\\")) {
    const commandPath2 = isAbsolute3(unresolvedCommand.name) ? unresolvedCommand.name : resolve3(unresolvedCommand.baseDir, unresolvedCommand.name);
    const result = await getExecutableShebangFromPath(commandPath2);
    if (result === false) {
      return false;
    } else if (result != null) {
      const args2 = await parseShebangArgs(result, context);
      const name = args2.shift();
      args2.push(commandPath2);
      return {
        kind: "shebang",
        command: {
          name,
          baseDir: dirname3(commandPath2)
        },
        args: args2
      };
    } else {
      const _assertUndefined = result;
      return {
        kind: "path",
        path: commandPath2
      };
    }
  }
  const commandPath = await whichFromContext(unresolvedCommand.name, context);
  if (commandPath == null) {
    return false;
  }
  return {
    kind: "path",
    path: commandPath
  };
}
var WhichEnv = class extends RealEnvironment {
  requestPermission(folderPath) {
    main_exports.permissions.requestSync({
      name: "read",
      path: folderPath
    });
  }
};
var denoWhichRealEnv = new WhichEnv;
async function whichFromContext(commandName, context) {
  return await which3(commandName, {
    os: main_exports.build.os,
    stat: denoWhichRealEnv.stat,
    env(key) {
      return context.getVar(key);
    },
    requestPermission: denoWhichRealEnv.requestPermission
  });
}
async function executePipeSequence(sequence, context) {
  const waitTasks = [];
  let lastOutput = context.stdin;
  let nextInner = sequence;
  while (nextInner != null) {
    let innerCommand;
    switch (nextInner.kind) {
      case "pipeSequence":
        switch (nextInner.op) {
          case "stdout": {
            innerCommand = nextInner.current;
            break;
          }
          case "stdoutstderr": {
            return context.error(`piping to both stdout and stderr is not implemented (ex. |&)`);
          }
          default: {
            const _assertNever = nextInner.op;
            return context.error(`not implemented pipe sequence op: ${nextInner.op}`);
          }
        }
        nextInner = nextInner.next;
        break;
      case "command":
        innerCommand = nextInner;
        nextInner = undefined;
        break;
    }
    const buffer = new PipeSequencePipe;
    const newContext = context.withInner({
      stdout: new ShellPipeWriter("piped", buffer),
      stdin: lastOutput
    });
    const commandPromise = executeCommand(innerCommand, newContext);
    waitTasks.push(commandPromise);
    commandPromise.finally(() => {
      buffer.close();
    });
    lastOutput = buffer;
  }
  waitTasks.push(pipeCommandPipeReaderToWriterSync(lastOutput, context.stdout, context.signal).then(() => ({ code: 0 })));
  const results = await Promise.all(waitTasks);
  const shellOptions = context.getShellOptions();
  let exitCode;
  if (shellOptions.pipefail) {
    exitCode = 0;
    for (let i = results.length - 1;i >= 0; i--) {
      const code2 = results[i].code;
      if (code2 !== 0) {
        exitCode = code2;
        break;
      }
    }
  } else {
    exitCode = results[results.length - 2].code;
  }
  return { code: exitCode };
}
async function parseShebangArgs(info, context) {
  function throwUnsupported() {
    throw new Error("Unsupported shebang. Please report this as a bug.");
  }
  if (!info.stringSplit) {
    return [info.command];
  }
  const command = parseCommand(info.command);
  if (command.items.length !== 1) {
    throwUnsupported();
  }
  const item = command.items[0];
  if (item.sequence.kind !== "pipeline" || item.isAsync) {
    throwUnsupported();
  }
  const sequence = item.sequence;
  if (sequence.negated) {
    throwUnsupported();
  }
  if (sequence.inner.kind !== "command" || sequence.inner.redirect != null) {
    throwUnsupported();
  }
  const innerCommand = sequence.inner.inner;
  if (innerCommand.kind !== "simple") {
    throwUnsupported();
  }
  if (innerCommand.envVars.length > 0) {
    throwUnsupported();
  }
  return await evaluateArgs(innerCommand.args, context);
}
async function evaluateArgs(args2, context) {
  const result = [];
  for (const arg of args2) {
    result.push(...await evaluateWordParts(arg, context));
  }
  return result;
}
async function evaluateWord(word, context) {
  const result = await evaluateWordParts(word, context);
  return result.join(" ");
}
async function evaluateWordParts(wordParts, context, quoted = false) {
  function hasGlobChar(text, questionGlob) {
    for (let i = 0;i < text.length; i++) {
      switch (text[i]) {
        case "?":
          if (questionGlob)
            return true;
          break;
        case "*":
        case "[":
          return true;
        default:
          break;
      }
    }
    return false;
  }
  function textPartsToString(textParts) {
    return textParts.map((p) => p.value).join("");
  }
  async function evaluateWordText(textParts, isQuoted) {
    const questionGlob = context.getShellOptions().questionGlob;
    if (!isQuoted && textParts.some((part) => part.kind === "text" && hasGlobChar(part.value, questionGlob))) {
      let currentText2 = "";
      const globEscapeChar2 = main_exports.build.os === "windows" ? "`" : "\\";
      for (const textPart of textParts) {
        switch (textPart.kind) {
          case "quoted":
            for (let i = 0;i < textPart.value.length; i++) {
              const char = textPart.value[i];
              switch (char) {
                case "?":
                case "*":
                case "[":
                case "]":
                case "{":
                case "}":
                  currentText2 += `${globEscapeChar2}${char}`;
                  break;
                default:
                  currentText2 += char;
                  break;
              }
            }
            break;
          case "text": {
            const textPartValue = textPart.value.replaceAll("[]]", `${globEscapeChar2}]`).replaceAll("[[]", `${globEscapeChar2}[`);
            for (let i = 0;i < textPartValue.length; i++) {
              const char = textPartValue[i];
              switch (char) {
                case "?":
                  if (!questionGlob) {
                    currentText2 += `${globEscapeChar2}${char}`;
                  } else {
                    currentText2 += char;
                  }
                  break;
                case "{":
                case "}":
                  currentText2 += `${globEscapeChar2}${char}`;
                  break;
                default:
                  currentText2 += char;
                  break;
              }
            }
            break;
          }
          default: {
            const _assertNever = textPart;
            break;
          }
        }
      }
      const cwd2 = context.getCwd();
      const shellOptions = context.getShellOptions();
      const isAbsolute4 = isAbsolute3(currentText2);
      let patternText = currentText2;
      if (!shellOptions.globstar && currentText2.includes("**")) {
        while (patternText.includes("**")) {
          patternText = patternText.replace("**", "*");
        }
      }
      const pattern = isAbsolute4 ? patternText : joinGlobs3([cwd2, patternText]);
      const entries = await Array.fromAsync(expandGlob(pattern, {
        canonicalize: false,
        caseInsensitive: true,
        followSymlinks: false,
        exclude: [],
        extended: false,
        globstar: shellOptions.globstar,
        root: cwd2,
        includeDirs: false
      }));
      if (entries.length === 0) {
        if (shellOptions.failglob) {
          throw new ShellEvaluateError(`glob: no matches found '${pattern}' (run \`shopt -u failglob\` to pass unmatched glob patterns literally)`);
        } else if (shellOptions.nullglob) {
          return [];
        } else {
          return [textPartsToString(textParts)];
        }
      }
      if (isAbsolute4) {
        return entries.map((e) => e.path);
      } else {
        return entries.map((e) => relative3(cwd2, e.path));
      }
    } else {
      return [textPartsToString(textParts)];
    }
  }
  const result = [];
  let currentText = [];
  for (const stringPart of wordParts) {
    let evaluationResult = undefined;
    switch (stringPart.kind) {
      case "text":
        currentText.push(stringPart);
        break;
      case "variable":
        evaluationResult = context.getVar(stringPart.value);
        break;
      case "quoted": {
        const text = (await evaluateWordParts(stringPart.value, context, true)).join(" ");
        currentText.push({
          kind: "quoted",
          value: text
        });
        continue;
      }
      case "tilde": {
        const envVarName = main_exports.build.os === "windows" ? "USERPROFILE" : "HOME";
        const homeDirEnv = context.getVar(envVarName);
        if (homeDirEnv == null) {
          throw new Error(`Failed resolving home directory for tilde expansion ('${envVarName}' env var not set).`);
        }
        evaluationResult = homeDirEnv;
        break;
      }
      case "command":
        throw new Error(`Not implemented: ${stringPart.kind}`);
    }
    if (evaluationResult != null) {
      const parts = evaluationResult.split(" ").map((t) => ({
        kind: "text",
        value: t.trim()
      })).filter((t) => t.value.length > 0);
      if (parts.length > 0) {
        currentText.push(...parts.splice(0, 1));
        if (parts.length > 0) {
          result.push(...await evaluateWordText(currentText, quoted));
          for (const part of parts.splice(0, parts.length - 1)) {
            result.push(...await evaluateWordText([part], quoted));
          }
          currentText = parts;
        }
      }
    }
  }
  if (currentText.length !== 0) {
    result.push(...await evaluateWordText(currentText, quoted));
  }
  return result;
}
function isDisposable(value) {
  return value != null && typeof value[Symbol.dispose] === "function";
}
function isAsyncDisposable(value) {
  return value != null && typeof value[Symbol.asyncDispose] === "function";
}
async function whichCommand(context) {
  try {
    return await executeWhich(context);
  } catch (err) {
    return context.error(`which: ${errorToString(err)}`);
  }
}
async function executeWhich(context) {
  let flags;
  try {
    flags = parseArgs9(context.args);
  } catch (err) {
    return await context.error(2, `which: ${errorToString(err)}`);
  }
  if (flags.commandName == null) {
    return { code: 1 };
  }
  const path = await whichFromContext(flags.commandName, {
    getVar(key) {
      return context.env[key];
    }
  });
  if (path != null) {
    await context.stdout.writeLine(path);
    return { code: 0 };
  } else {
    return { code: 1 };
  }
}
function parseArgs9(args2) {
  let commandName;
  for (const arg of parseArgKinds(args2)) {
    if (arg.kind === "Arg") {
      if (commandName != null) {
        throw Error("unsupported too many arguments");
      }
      commandName = arg.arg;
    } else {
      bailUnsupported3(arg);
    }
  }
  return {
    commandName
  };
}
function bailUnsupported3(arg) {
  switch (arg.kind) {
    case "Arg":
      throw Error(`unsupported argument: ${arg.arg}`);
    case "ShortFlag":
      throw Error(`unsupported flag: -${arg.arg}`);
    case "LongFlag":
      throw Error(`unsupported flag: --${arg.arg}`);
  }
}
var _a;
var withProgressBarFactorySymbol = Symbol();
var RequestBuilder = class {
  #state = undefined;
  #getClonedState() {
    const state = this.#state;
    if (state == null) {
      return this.#getDefaultState();
    }
    return {
      noThrow: typeof state.noThrow === "boolean" ? state.noThrow : [...state.noThrow],
      url: state.url,
      body: state.body,
      cache: state.cache,
      headers: state.headers,
      integrity: state.integrity,
      keepalive: state.keepalive,
      method: state.method,
      mode: state.mode,
      redirect: state.redirect,
      referrer: state.referrer,
      referrerPolicy: state.referrerPolicy,
      progressBarFactory: state.progressBarFactory,
      progressOptions: state.progressOptions == null ? undefined : {
        ...state.progressOptions
      },
      timeout: state.timeout,
      signal: state.signal
    };
  }
  #getDefaultState() {
    return {
      noThrow: false,
      url: undefined,
      body: undefined,
      cache: undefined,
      headers: {},
      integrity: undefined,
      keepalive: undefined,
      method: undefined,
      mode: undefined,
      redirect: undefined,
      referrer: undefined,
      referrerPolicy: undefined,
      progressBarFactory: undefined,
      progressOptions: undefined,
      timeout: undefined,
      signal: undefined
    };
  }
  #newWithState(action) {
    const builder = new _a;
    const state = this.#getClonedState();
    action(state);
    builder.#state = state;
    return builder;
  }
  [symbols.readable]() {
    const self = this;
    let streamReader;
    let response;
    let wasCancelled = false;
    let cancelledReason;
    return new ReadableStream2({
      async start() {
        response = await self.fetch();
        const readable = response.readable;
        if (wasCancelled) {
          readable.cancel(cancelledReason);
        } else {
          streamReader = readable.getReader();
        }
      },
      async pull(controller) {
        const { done, value } = await streamReader.read();
        if (done || value == null) {
          if (response?.signal?.aborted) {
            controller.error(response?.signal?.reason);
          } else {
            controller.close();
          }
        } else {
          controller.enqueue(value);
        }
      },
      cancel(reason) {
        streamReader?.cancel(reason);
        wasCancelled = true;
        cancelledReason = reason;
      }
    });
  }
  then(onfulfilled, onrejected) {
    return this.fetch().then(onfulfilled).catch(onrejected);
  }
  fetch() {
    return makeRequest(this.#getClonedState()).catch((err) => {
      if (err instanceof TimeoutError) {
        Error.captureStackTrace(err, TimeoutError);
      }
      return Promise.reject(err);
    });
  }
  url(value) {
    return this.#newWithState((state) => {
      state.url = value;
    });
  }
  header(nameOrItems, value) {
    return this.#newWithState((state) => {
      if (typeof nameOrItems === "string") {
        setHeader(state, nameOrItems, value);
      } else {
        for (const [name, value2] of Object.entries(nameOrItems)) {
          setHeader(state, name, value2);
        }
      }
    });
    function setHeader(state, name, value2) {
      name = name.toUpperCase();
      state.headers[name] = value2;
    }
  }
  noThrow(value, ...additional) {
    return this.#newWithState((state) => {
      if (typeof value === "boolean" || value == null) {
        state.noThrow = value ?? true;
      } else {
        state.noThrow = [value, ...additional];
      }
    });
  }
  body(value) {
    return this.#newWithState((state) => {
      state.body = value;
    });
  }
  cache(value) {
    return this.#newWithState((state) => {
      state.cache = value;
    });
  }
  integrity(value) {
    return this.#newWithState((state) => {
      state.integrity = value;
    });
  }
  keepalive(value) {
    return this.#newWithState((state) => {
      state.keepalive = value;
    });
  }
  method(value) {
    return this.#newWithState((state) => {
      state.method = value;
    });
  }
  mode(value) {
    return this.#newWithState((state) => {
      state.mode = value;
    });
  }
  [withProgressBarFactorySymbol](factory) {
    return this.#newWithState((state) => {
      state.progressBarFactory = factory;
    });
  }
  redirect(value) {
    return this.#newWithState((state) => {
      state.redirect = value;
    });
  }
  referrer(value) {
    return this.#newWithState((state) => {
      state.referrer = value;
    });
  }
  referrerPolicy(value) {
    return this.#newWithState((state) => {
      state.referrerPolicy = value;
    });
  }
  showProgress(value) {
    return this.#newWithState((state) => {
      if (value === true || value == null) {
        state.progressOptions = { noClear: false };
      } else if (value === false) {
        state.progressOptions = undefined;
      } else {
        state.progressOptions = {
          noClear: value.noClear ?? false
        };
      }
    });
  }
  timeout(delay) {
    return this.#newWithState((state) => {
      state.timeout = delay == null ? undefined : delayToMs(delay);
    });
  }
  signal(signal) {
    return this.#newWithState((state) => {
      state.signal = signal;
    });
  }
  async arrayBuffer() {
    const response = await this.fetch();
    return response.arrayBuffer();
  }
  async blob() {
    const response = await this.fetch();
    return response.blob();
  }
  async formData() {
    const response = await this.fetch();
    return response.formData();
  }
  async json() {
    let builder = this;
    const acceptHeaderName = "ACCEPT";
    if (builder.#state == null || !Object.hasOwn(builder.#state.headers, acceptHeaderName)) {
      builder = builder.header(acceptHeaderName, "application/json");
    }
    const response = await builder.fetch();
    return response.json();
  }
  async text() {
    const response = await this.fetch();
    return response.text();
  }
  async pipeTo(dest, options) {
    const response = await this.fetch();
    return await response.pipeTo(dest, options);
  }
  async pipeToPath(filePathOrOptions, maybeOptions) {
    const { filePath, options } = resolvePipeToPathParams(filePathOrOptions, maybeOptions, this.#state?.url);
    const response = await this.fetch();
    return await response.pipeToPath(filePath, options);
  }
  async pipeThrough(transform) {
    const response = await this.fetch();
    return response.pipeThrough(transform);
  }
};
_a = RequestBuilder;
var RequestResponse = class {
  #response;
  #downloadResponse;
  #originalUrl;
  #abortController;
  constructor(opts) {
    this.#originalUrl = opts.originalUrl;
    this.#response = opts.response;
    this.#abortController = opts.abortController;
    if (opts.response.body == null) {
      opts.abortController.clearTimeout();
    }
    if (opts.progressBar != null) {
      const pb = opts.progressBar;
      this.#downloadResponse = new Response(new ReadableStream2({
        async start(controller) {
          const reader = opts.response.body?.getReader();
          if (reader == null) {
            return;
          }
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done || value == null) {
                break;
              }
              pb.increment(value.byteLength);
              controller.enqueue(value);
            }
            const signal = opts.abortController.controller.signal;
            if (signal.aborted) {
              controller.error(signal.reason);
            } else {
              controller.close();
            }
          } finally {
            reader.releaseLock();
            pb.finish();
          }
        }
      }));
    } else {
      this.#downloadResponse = opts.response;
    }
  }
  get response() {
    return this.#response;
  }
  get headers() {
    return this.#response.headers;
  }
  get ok() {
    return this.#response.ok;
  }
  get redirected() {
    return this.#response.redirected;
  }
  get signal() {
    return this.#abortController.controller.signal;
  }
  get status() {
    return this.#response.status;
  }
  get statusText() {
    return this.#response.statusText;
  }
  get url() {
    return this.#response.url;
  }
  abort(reason) {
    this.#abortController?.controller.abort(reason);
  }
  throwIfNotOk() {
    if (!this.ok) {
      this.#response.body?.cancel().catch(() => {});
      throw new Error(`Error making request to ${this.#originalUrl}: ${this.statusText}`);
    }
  }
  arrayBuffer() {
    return this.#withReturnHandling(async () => {
      if (this.#response.status === 404) {
        await this.#response.body?.cancel();
        return;
      }
      return this.#downloadResponse.arrayBuffer();
    });
  }
  blob() {
    return this.#withReturnHandling(async () => {
      if (this.#response.status === 404) {
        await this.#response.body?.cancel();
        return;
      }
      return await this.#downloadResponse.blob();
    });
  }
  formData() {
    return this.#withReturnHandling(async () => {
      if (this.#response.status === 404) {
        await this.#response.body?.cancel();
        return;
      }
      return await this.#downloadResponse.formData();
    });
  }
  json() {
    return this.#withReturnHandling(async () => {
      if (this.#response.status === 404) {
        await this.#response.body?.cancel();
        return;
      }
      return await this.#downloadResponse.json();
    });
  }
  text() {
    return this.#withReturnHandling(async () => {
      if (this.#response.status === 404) {
        await this.#response.body?.cancel();
        return;
      }
      return await this.#downloadResponse.text();
    });
  }
  pipeTo(dest, options) {
    return this.#withReturnHandling(() => this.readable.pipeTo(dest, options));
  }
  async pipeToPath(filePathOrOptions, maybeOptions) {
    const { filePath, options } = resolvePipeToPathParams(filePathOrOptions, maybeOptions, this.#originalUrl);
    const body = this.readable;
    try {
      const file = await filePath.open({
        write: true,
        create: true,
        truncate: true,
        ...options ?? {}
      });
      try {
        await body.pipeTo(file.writable, {
          preventClose: true
        });
        await file.writable.close();
      } finally {
        try {
          file.close();
        } catch {}
        this.#abortController?.clearTimeout();
      }
    } catch (err) {
      await this.#response.body?.cancel();
      throw err;
    }
    return filePath;
  }
  pipeThrough(transform) {
    return this.readable.pipeThrough(transform);
  }
  get readable() {
    const body = this.#downloadResponse.body;
    if (body == null) {
      throw new Error("Response had no body.");
    }
    return body;
  }
  async#withReturnHandling(action) {
    try {
      return await action();
    } catch (err) {
      if (err instanceof TimeoutError) {
        Error.captureStackTrace(err);
      }
      throw err;
    } finally {
      this.#abortController.clearTimeout();
    }
  }
};
async function makeRequest(state) {
  if (state.url == null) {
    throw new Error("You must specify a URL before fetching.");
  }
  const abortController = getAbortController();
  let response;
  try {
    response = await fetch(state.url, {
      body: state.body,
      cache: state.cache,
      headers: filterEmptyRecordValues(state.headers),
      integrity: state.integrity,
      keepalive: state.keepalive,
      method: state.method,
      mode: state.mode,
      redirect: state.redirect,
      referrer: state.referrer,
      referrerPolicy: state.referrerPolicy,
      signal: abortController.controller.signal
    });
  } catch (err) {
    abortController.clearTimeout();
    throw err;
  }
  const result = new RequestResponse({
    response,
    originalUrl: state.url.toString(),
    progressBar: getProgressBar(),
    abortController
  });
  if (!state.noThrow) {
    result.throwIfNotOk();
  } else if (state.noThrow instanceof Array) {
    if (!state.noThrow.includes(response.status)) {
      result.throwIfNotOk();
    }
  }
  return result;
  function getProgressBar() {
    if (state.progressOptions == null || state.progressBarFactory == null) {
      return;
    }
    return state.progressBarFactory(`Download ${state.url}`).noClear(state.progressOptions.noClear).kind("bytes").length(getContentLength());
    function getContentLength() {
      const contentLength = response.headers.get("content-length");
      if (contentLength == null) {
        return;
      }
      const length = parseInt(contentLength, 10);
      return isNaN(length) ? undefined : length;
    }
  }
  function getAbortController() {
    const baseController = getTimeoutAbortController() ?? {
      controller: new AbortController,
      clearTimeout() {}
    };
    if (state.signal == null) {
      return baseController;
    }
    if (state.signal.aborted) {
      baseController.controller.abort(state.signal.reason);
      return baseController;
    }
    const onAbort = () => {
      baseController.controller.abort(state.signal.reason);
    };
    state.signal.addEventListener("abort", onAbort, { once: true });
    const originalClearTimeout = baseController.clearTimeout;
    return {
      controller: baseController.controller,
      clearTimeout() {
        originalClearTimeout();
        state.signal?.removeEventListener("abort", onAbort);
      }
    };
  }
  function getTimeoutAbortController() {
    if (state.timeout == null) {
      return;
    }
    const timeout = state.timeout;
    const controller = new AbortController;
    const timeoutId = setTimeout(() => controller.abort(new TimeoutError(`Request timed out after ${formatMillis(timeout)}.`)), timeout);
    return {
      controller,
      clearTimeout() {
        clearTimeout(timeoutId);
      }
    };
  }
}
function resolvePipeToPathParams(pathOrOptions, maybeOptions, originalUrl) {
  let filePath;
  let options;
  if (typeof pathOrOptions === "string" || pathOrOptions instanceof URL) {
    filePath = new Path(pathOrOptions).resolve();
    options = maybeOptions;
  } else if (pathOrOptions instanceof Path) {
    filePath = pathOrOptions.resolve();
    options = maybeOptions;
  } else if (typeof pathOrOptions === "object") {
    options = pathOrOptions;
  } else if (pathOrOptions === undefined) {
    options = maybeOptions;
  }
  if (filePath === undefined) {
    filePath = new Path(getFileNameFromUrlOrThrow(originalUrl));
  } else if (filePath.isDirSync()) {
    filePath = filePath.join(getFileNameFromUrlOrThrow(originalUrl));
  }
  filePath = filePath.resolve();
  return {
    filePath,
    options
  };
  function getFileNameFromUrlOrThrow(url2) {
    const fileName = url2 == null ? undefined : getFileNameFromUrl(url2);
    if (fileName == null) {
      throw new Error("Could not derive the path from the request URL. Please explicitly provide a path.");
    }
    return fileName;
  }
}
var _a2;
var Deferred = class {
  #create;
  constructor(create3) {
    this.#create = create3;
  }
  create() {
    return this.#create();
  }
};
var textDecoder = new TextDecoder2;
var builtInCommands = {
  cd: cdCommand,
  printenv: printEnvCommand,
  echo: echoCommand,
  cat: catCommand,
  exit: exitCommand,
  export: exportCommand,
  set: setCommand,
  shopt: shoptCommand,
  sleep: sleepCommand,
  test: testCommand,
  rm: rmCommand,
  mkdir: mkdirCommand,
  cp: cpCommand,
  mv: mvCommand,
  pwd: pwdCommand,
  touch: touchCommand,
  true: () => ({ code: 0 }),
  false: () => ({ code: 1 }),
  unset: unsetCommand,
  which: whichCommand
};
var getRegisteredCommandNamesSymbol = Symbol();
var setCommandTextStateSymbol = Symbol();
var CommandBuilder = class {
  #state = {
    command: undefined,
    combinedStdoutStderr: false,
    stdin: "inherit",
    stdout: {
      kind: "inherit"
    },
    stderr: {
      kind: "inherit"
    },
    noThrow: false,
    env: {},
    cwd: undefined,
    commands: { ...builtInCommands },
    clearEnv: false,
    exportEnv: false,
    printCommand: false,
    printCommandLogger: new LoggerTreeBox((cmd) => console.error(white(">"), blue(cmd))),
    timeout: undefined,
    signal: undefined,
    encoding: undefined,
    shellOptions: {}
  };
  #getClonedState() {
    const state = this.#state;
    return {
      command: state.command,
      combinedStdoutStderr: state.combinedStdoutStderr,
      stdin: state.stdin,
      stdout: {
        kind: state.stdout.kind,
        options: state.stdout.options
      },
      stderr: {
        kind: state.stderr.kind,
        options: state.stderr.options
      },
      noThrow: state.noThrow instanceof Array ? [...state.noThrow] : state.noThrow,
      env: { ...state.env },
      cwd: state.cwd,
      commands: { ...state.commands },
      clearEnv: state.clearEnv,
      exportEnv: state.exportEnv,
      printCommand: state.printCommand,
      printCommandLogger: state.printCommandLogger.createChild(),
      timeout: state.timeout,
      signal: state.signal,
      encoding: state.encoding,
      shellOptions: { ...state.shellOptions }
    };
  }
  #newWithState(action) {
    const builder = new _a2;
    const state = this.#getClonedState();
    action(state);
    builder.#state = state;
    return builder;
  }
  then(onfulfilled, onrejected) {
    return this.spawn().then(onfulfilled).catch(onrejected);
  }
  spawn() {
    return parseAndSpawnCommand(this.#getClonedState());
  }
  registerCommand(command, handleFn) {
    validateCommandName(command);
    return this.#newWithState((state) => {
      state.commands[command] = handleFn;
    });
  }
  registerCommands(commands) {
    let command = this;
    for (const [key, value] of Object.entries(commands)) {
      command = command.registerCommand(key, value);
    }
    return command;
  }
  unregisterCommand(command) {
    return this.#newWithState((state) => {
      delete state.commands[command];
    });
  }
  command(command) {
    return this.#newWithState((state) => {
      if (command instanceof Array) {
        command = command.map(escapeArg).join(" ");
      }
      state.command = {
        text: command,
        fds: undefined
      };
    });
  }
  noThrow(value, ...additional) {
    return this.#newWithState((state) => {
      if (typeof value === "boolean" || value == null) {
        state.noThrow = value ?? true;
      } else {
        state.noThrow = [value, ...additional];
      }
    });
  }
  signal(signal) {
    return this.#newWithState((state) => {
      const killSignal = signal instanceof KillSignal ? signal : killSignalFromAbortSignal(signal);
      if (state.signal != null) {
        state.signal.linkChild(killSignal);
      }
      state.signal = killSignal;
    });
  }
  captureCombined(value = true) {
    return this.#newWithState((state) => {
      state.combinedStdoutStderr = value;
      if (value) {
        if (state.stdout.kind !== "piped" && state.stdout.kind !== "inheritPiped") {
          state.stdout.kind = "piped";
        }
        if (state.stderr.kind !== "piped" && state.stderr.kind !== "inheritPiped") {
          state.stderr.kind = "piped";
        }
      }
    });
  }
  stdin(reader) {
    return this.#newWithState((state) => {
      if (reader === "inherit" || reader === "null") {
        state.stdin = reader;
      } else if (reader instanceof Uint8Array) {
        state.stdin = new Deferred(() => new Buffer2(reader));
      } else if (reader instanceof Path) {
        state.stdin = new Deferred(async () => {
          const file = await reader.open();
          return file.readable;
        });
      } else if (reader instanceof RequestBuilder) {
        state.stdin = new Deferred(async () => {
          const body = await reader;
          return body.readable;
        });
      } else if (reader instanceof _a2) {
        state.stdin = new Deferred(() => {
          return reader.stdout("piped").spawn().stdout();
        });
      } else {
        state.stdin = new Box(reader);
      }
    });
  }
  stdinText(text) {
    return this.stdin(new TextEncoder().encode(text));
  }
  stdout(kind, options) {
    return this.#newWithState((state) => {
      if (state.combinedStdoutStderr && kind !== "piped" && kind !== "inheritPiped") {
        throw new TypeError("Cannot set stdout's kind to anything but 'piped' or 'inheritPiped' when combined is true.");
      }
      if (options?.signal != null) {
        throw new TypeError("Setting a signal for a stdout WritableStream is not yet supported.");
      }
      state.stdout = {
        kind,
        options
      };
    });
  }
  stderr(kind, options) {
    return this.#newWithState((state) => {
      if (state.combinedStdoutStderr && kind !== "piped" && kind !== "inheritPiped") {
        throw new TypeError("Cannot set stderr's kind to anything but 'piped' or 'inheritPiped' when combined is true.");
      }
      if (options?.signal != null) {
        throw new TypeError("Setting a signal for a stderr WritableStream is not yet supported.");
      }
      state.stderr = {
        kind,
        options
      };
    });
  }
  pipe(builder) {
    return builder.stdin(this.stdout("piped"));
  }
  env(nameOrItems, value) {
    return this.#newWithState((state) => {
      if (typeof nameOrItems === "string") {
        setEnv(state, nameOrItems, value);
      } else {
        for (const [key, value2] of Object.entries(nameOrItems)) {
          setEnv(state, key, value2);
        }
      }
    });
    function setEnv(state, key, value2) {
      if (main_exports.build.os === "windows") {
        key = key.toUpperCase();
      }
      state.env[key] = value2;
    }
  }
  cwd(dirPath) {
    return this.#newWithState((state) => {
      state.cwd = dirPath instanceof URL ? fromFileUrl3(dirPath) : dirPath instanceof Path ? dirPath.resolve().toString() : resolve3(dirPath);
    });
  }
  exportEnv(value = true) {
    return this.#newWithState((state) => {
      state.exportEnv = value;
    });
  }
  clearEnv(value = true) {
    return this.#newWithState((state) => {
      state.clearEnv = value;
    });
  }
  printCommand(value = true) {
    return this.#newWithState((state) => {
      state.printCommand = value;
    });
  }
  setPrintCommandLogger(logger2) {
    this.#state.printCommandLogger.setValue(logger2);
  }
  quiet(kind = "combined") {
    kind = kind === "both" ? "combined" : kind;
    return this.#newWithState((state) => {
      if (kind === "combined" || kind === "stdout") {
        state.stdout.kind = getQuietKind(state.stdout.kind);
      }
      if (kind === "combined" || kind === "stderr") {
        state.stderr.kind = getQuietKind(state.stderr.kind);
      }
    });
    function getQuietKind(kind2) {
      if (typeof kind2 === "object") {
        return kind2;
      }
      switch (kind2) {
        case "inheritPiped":
        case "inherit":
          return "piped";
        case "null":
        case "piped":
          return kind2;
        default: {
          const _assertNever = kind2;
          throw new TypeError(`Unhandled kind ${kind2}.`);
        }
      }
    }
  }
  timeout(delay) {
    return this.#newWithState((state) => {
      state.timeout = delay == null ? undefined : delayToMs(delay);
    });
  }
  async bytes(kind = "stdout") {
    const command = kind === "combined" ? this.quiet(kind).captureCombined() : this.quiet(kind);
    return (await command)[`${kind}Bytes`];
  }
  encoding(encoding) {
    return this.#newWithState((state) => {
      state.encoding = encoding;
    });
  }
  pipefail(value = true) {
    return this.#newWithState((state) => {
      state.shellOptions.pipefail = value;
    });
  }
  nullglob(value = true) {
    return this.#newWithState((state) => {
      state.shellOptions.nullglob = value;
      if (value) {
        state.shellOptions.failglob = false;
      }
    });
  }
  failglob(value = true) {
    return this.#newWithState((state) => {
      state.shellOptions.failglob = value;
    });
  }
  globstar(value = true) {
    return this.#newWithState((state) => {
      state.shellOptions.globstar = value;
    });
  }
  questionGlob(value = true) {
    return this.#newWithState((state) => {
      state.shellOptions.questionGlob = value;
    });
  }
  async text(kind = "stdout") {
    const command = kind === "combined" ? this.quiet(kind).captureCombined() : this.quiet(kind);
    return (await command)[kind].replace(/\r?\n$/, "");
  }
  async lines(kind = "stdout") {
    const text = await this.text(kind);
    return text.split(/\r?\n/g);
  }
  async json(kind = "stdout") {
    return (await this.quiet(kind))[`${kind}Json`];
  }
  async code() {
    const result = await this.noThrow();
    return result.code;
  }
  [getRegisteredCommandNamesSymbol]() {
    return Object.keys(this.#state.commands);
  }
  [setCommandTextStateSymbol](textState) {
    return this.#newWithState((state) => {
      state.command = textState;
    });
  }
};
_a2 = CommandBuilder;
var CommandChild = class extends Promise {
  #pipedStdoutBuffer;
  #pipedStderrBuffer;
  #killSignalController;
  constructor(executor, options = { pipedStderrBuffer: undefined, pipedStdoutBuffer: undefined, killSignalController: undefined }) {
    super(executor);
    this.#pipedStdoutBuffer = options.pipedStdoutBuffer;
    this.#pipedStderrBuffer = options.pipedStderrBuffer;
    this.#killSignalController = options.killSignalController;
  }
  kill(signal) {
    this.#killSignalController?.kill(signal);
  }
  stdout() {
    const buffer = this.#pipedStdoutBuffer;
    this.#assertBufferStreamable("stdout", buffer);
    this.#pipedStdoutBuffer = "consumed";
    this.catch(() => {});
    return this.#bufferToStream(buffer);
  }
  stderr() {
    const buffer = this.#pipedStderrBuffer;
    this.#assertBufferStreamable("stderr", buffer);
    this.#pipedStderrBuffer = "consumed";
    this.catch(() => {});
    return this.#bufferToStream(buffer);
  }
  #assertBufferStreamable(name, buffer) {
    if (buffer == null) {
      throw new Error(`No pipe available. Ensure ${name} is "piped" (not "inheritPiped") and combinedOutput is not enabled.`);
    }
    if (buffer === "consumed") {
      throw new Error(`Streamable ${name} was already consumed. Use the previously acquired stream instead.`);
    }
  }
  #bufferToStream(buffer) {
    const self = this;
    return new ReadableStream2({
      start(controller) {
        buffer.setListener({
          writeSync(data) {
            controller.enqueue(data);
            return data.length;
          },
          setError(err) {
            controller.error(err);
          },
          close() {
            controller.close();
          }
        });
      },
      cancel(_reason) {
        self.kill();
      }
    });
  }
};
function parseAndSpawnCommand(state) {
  if (state.command == null) {
    throw new Error("A command must be set before it can be spawned.");
  }
  if (state.printCommand) {
    state.printCommandLogger.getValue()(state.command.text);
  }
  const disposables = [];
  const asyncDisposables = [];
  const parentSignal = state.signal;
  const killSignalController = new KillController;
  if (parentSignal != null) {
    const parentSignalListener = (signal2) => {
      killSignalController.kill(signal2);
    };
    parentSignal.addListener(parentSignalListener);
    if (parentSignal.aborted) {
      killSignalController.kill("SIGTERM");
    }
    disposables.push({
      [Symbol.dispose]() {
        parentSignal.removeListener(parentSignalListener);
      }
    });
  }
  let timedOut = false;
  if (state.timeout != null) {
    const timeoutId = setTimeout(() => {
      timedOut = true;
      killSignalController.kill();
    }, state.timeout);
    disposables.push({
      [Symbol.dispose]() {
        clearTimeout(timeoutId);
      }
    });
  }
  const [stdoutBuffer, stderrBuffer, combinedBuffer] = getBuffers();
  const stdout2 = new ShellPipeWriter(state.stdout.kind, stdoutBuffer === "null" ? new NullPipeWriter : stdoutBuffer === "inherit" ? main_exports.stdout : stdoutBuffer);
  const stderr2 = new ShellPipeWriter(state.stderr.kind, stderrBuffer === "null" ? new NullPipeWriter : stderrBuffer === "inherit" ? main_exports.stderr : stderrBuffer);
  const { text: commandText, fds } = state.command;
  const signal = killSignalController.signal;
  return new CommandChild(async (resolve4, reject) => {
    try {
      const list = parseCommand(commandText);
      const stdin2 = await takeStdin();
      let code2 = await spawn2(list, {
        stdin: stdin2 instanceof ReadableStream2 ? readerFromStreamReader(stdin2.getReader()) : stdin2,
        stdout: stdout2,
        stderr: stderr2,
        env: buildEnv(state.env, state.clearEnv),
        commands: state.commands,
        cwd: state.cwd ?? main_exports.cwd(),
        exportEnv: state.exportEnv,
        clearedEnv: state.clearEnv,
        signal,
        fds,
        shellOptions: state.shellOptions
      });
      if (code2 !== 0) {
        if (timedOut) {
          code2 = 124;
        }
        const noThrow = state.noThrow instanceof Array ? state.noThrow.includes(code2) : state.noThrow;
        if (!noThrow) {
          if (stdin2 instanceof ReadableStream2) {
            if (!stdin2.locked) {
              stdin2.cancel();
            }
          }
          if (timedOut) {
            throw new Error(`Timed out with exit code: ${code2}`);
          } else if (signal.aborted) {
            throw new Error(`${timedOut ? "Timed out" : "Aborted"} with exit code: ${code2}`);
          } else {
            throw new Error(`Exited with code: ${code2}`);
          }
        }
      }
      const result = new CommandResult(code2, finalizeCommandResultBuffer(stdoutBuffer), finalizeCommandResultBuffer(stderrBuffer), combinedBuffer instanceof Buffer2 ? combinedBuffer : undefined, state.encoding);
      const maybeError = await cleanupDisposablesAndMaybeGetError(undefined);
      if (maybeError) {
        reject(maybeError);
      } else {
        resolve4(result);
      }
    } catch (err) {
      finalizeCommandResultBufferForError(stdoutBuffer, err);
      finalizeCommandResultBufferForError(stderrBuffer, err);
      reject(await cleanupDisposablesAndMaybeGetError(err));
    }
  }, {
    pipedStdoutBuffer: stdoutBuffer instanceof PipedBuffer ? stdoutBuffer : undefined,
    pipedStderrBuffer: stderrBuffer instanceof PipedBuffer ? stderrBuffer : undefined,
    killSignalController
  });
  async function cleanupDisposablesAndMaybeGetError(maybeError) {
    const errors = [];
    if (maybeError) {
      errors.push(maybeError);
    }
    for (const disposable of disposables) {
      try {
        disposable[Symbol.dispose]();
      } catch (err) {
        errors.push(err);
      }
    }
    if (asyncDisposables.length > 0) {
      await Promise.all(asyncDisposables.map(async (d) => {
        try {
          await d[Symbol.asyncDispose]();
        } catch (err) {
          errors.push(err);
        }
      }));
    }
    if (errors.length === 1) {
      return errors[0];
    } else if (errors.length > 1) {
      return new AggregateError(errors);
    } else {
      return;
    }
  }
  async function takeStdin() {
    if (state.stdin instanceof Box) {
      const stdin2 = state.stdin.value;
      if (stdin2 === "consumed") {
        throw new Error("Cannot spawn command. Stdin was already consumed when a previous command using the same stdin was spawned. You need to call `.stdin(...)` again with a new value before spawning.");
      }
      state.stdin.value = "consumed";
      return stdin2;
    } else if (state.stdin instanceof Deferred) {
      const stdin2 = await state.stdin.create();
      if (stdin2 instanceof ReadableStream2) {
        asyncDisposables.push({
          async[Symbol.asyncDispose]() {
            if (!stdin2.locked) {
              await stdin2.cancel();
            }
          }
        });
      }
      return stdin2;
    } else {
      return state.stdin;
    }
  }
  function getBuffers() {
    const hasProgressBars = isShowingProgressBars();
    const stdoutBuffer2 = getOutputBuffer(main_exports.stdout, state.stdout);
    const stderrBuffer2 = getOutputBuffer(main_exports.stderr, state.stderr);
    if (state.combinedStdoutStderr) {
      if (typeof stdoutBuffer2 === "string" || typeof stderrBuffer2 === "string") {
        throw new Error("Internal programming error. Expected writers for stdout and stderr.");
      }
      const combinedBuffer2 = new Buffer2;
      return [
        getCapturingBuffer(stdoutBuffer2, combinedBuffer2),
        getCapturingBuffer(stderrBuffer2, combinedBuffer2),
        combinedBuffer2
      ];
    }
    return [stdoutBuffer2, stderrBuffer2, undefined];
    function getCapturingBuffer(buffer, combinedBuffer2) {
      if ("write" in buffer) {
        return new CapturingBufferWriter(buffer, combinedBuffer2);
      } else {
        return new CapturingBufferWriterSync(buffer, combinedBuffer2);
      }
    }
    function getOutputBuffer(inheritWriter, { kind, options }) {
      if (typeof kind === "object") {
        if (kind instanceof Path) {
          const file = kind.openSync({ write: true, truncate: true, create: true });
          disposables.push(file);
          return file;
        } else if (kind instanceof WritableStream2) {
          const streamWriter = kind.getWriter();
          asyncDisposables.push({
            async[Symbol.asyncDispose]() {
              streamWriter.releaseLock();
              if (!options?.preventClose) {
                try {
                  await kind.close();
                } catch {}
              }
            }
          });
          return writerFromStreamWriter(streamWriter);
        } else {
          return kind;
        }
      }
      switch (kind) {
        case "inherit":
          if (hasProgressBars) {
            return new InheritStaticTextBypassWriter(inheritWriter);
          } else {
            return "inherit";
          }
        case "piped":
          return new PipedBuffer;
        case "inheritPiped":
          return new CapturingBufferWriterSync(inheritWriter, new Buffer2);
        case "null":
          return "null";
        default: {
          const _assertNever = kind;
          throw new TypeError("Unhandled.");
        }
      }
    }
  }
  function finalizeCommandResultBuffer(buffer) {
    if (buffer instanceof CapturingBufferWriterSync || buffer instanceof CapturingBufferWriter) {
      return buffer.getBuffer();
    } else if (buffer instanceof InheritStaticTextBypassWriter) {
      buffer.flush();
      return "inherit";
    } else if (buffer instanceof PipedBuffer) {
      buffer.close();
      return buffer.getBuffer() ?? "streamed";
    } else if (typeof buffer === "object") {
      return "streamed";
    } else {
      return buffer;
    }
  }
  function finalizeCommandResultBufferForError(buffer, error) {
    if (buffer instanceof InheritStaticTextBypassWriter) {
      buffer.flush();
    } else if (buffer instanceof PipedBuffer) {
      buffer.setError(error);
    }
  }
}
var CommandResult = class {
  #stdout;
  #stderr;
  #combined;
  #textDecoder;
  code;
  constructor(code2, stdout2, stderr2, combined, encoding) {
    this.code = code2;
    this.#stdout = stdout2;
    this.#stderr = stderr2;
    this.#combined = combined;
    this.#textDecoder = encoding ? new TextDecoder2(encoding) : textDecoder;
  }
  #memoizedStdout;
  get stdout() {
    if (!this.#memoizedStdout) {
      this.#memoizedStdout = this.#textDecoder.decode(this.stdoutBytes);
    }
    return this.#memoizedStdout;
  }
  #memoizedStdoutJson;
  get stdoutJson() {
    if (this.#memoizedStdoutJson == null) {
      this.#memoizedStdoutJson = JSON.parse(this.stdout);
    }
    return this.#memoizedStdoutJson;
  }
  get stdoutBytes() {
    if (this.#stdout === "streamed") {
      throw new Error(`Stdout was streamed to another source and is no longer available.`);
    }
    if (typeof this.#stdout === "string") {
      throw new Error(`Stdout was not piped (was ${this.#stdout}). Call .stdout("piped") or .stdout("inheritPiped") when building the command.`);
    }
    return this.#stdout.bytes({ copy: false });
  }
  #memoizedStderr;
  get stderr() {
    if (!this.#memoizedStderr) {
      this.#memoizedStderr = this.#textDecoder.decode(this.stderrBytes);
    }
    return this.#memoizedStderr;
  }
  #memoizedStderrJson;
  get stderrJson() {
    if (this.#memoizedStderrJson == null) {
      this.#memoizedStderrJson = JSON.parse(this.stderr);
    }
    return this.#memoizedStderrJson;
  }
  get stderrBytes() {
    if (this.#stderr === "streamed") {
      throw new Error(`Stderr was streamed to another source and is no longer available.`);
    }
    if (typeof this.#stderr === "string") {
      throw new Error(`Stderr was not piped (was ${this.#stderr}). Call .stderr("piped") or .stderr("inheritPiped") when building the command.`);
    }
    return this.#stderr.bytes({ copy: false });
  }
  #memoizedCombined;
  get combined() {
    if (!this.#memoizedCombined) {
      this.#memoizedCombined = textDecoder.decode(this.combinedBytes);
    }
    return this.#memoizedCombined;
  }
  get combinedBytes() {
    if (this.#combined == null) {
      throw new Error("Stdout and stderr were not combined. Call .captureCombined() when building the command.");
    }
    return this.#combined.bytes({ copy: false });
  }
};
function buildEnv(env3, clearEnv) {
  const result = clearEnv ? {} : main_exports.env.toObject();
  for (const [key, value] of Object.entries(env3)) {
    if (value == null) {
      delete result[key];
    } else {
      result[key] = value;
    }
  }
  return result;
}
function escapeArg(arg) {
  if (/^[A-Za-z0-9]+$/.test(arg)) {
    return arg;
  } else {
    return `'${arg.replaceAll("'", `'"'"'`)}'`;
  }
}
var RawArg = class {
  #value;
  constructor(value) {
    this.#value = value;
  }
  get value() {
    return this.#value;
  }
};
function rawArg(arg) {
  return new RawArg(arg);
}
function validateCommandName(command) {
  if (command.match(/^[a-zA-Z0-9-_]+$/) == null) {
    throw new TypeError("Invalid command name");
  }
}
var SHELL_SIGNAL_CTOR_SYMBOL = Symbol();
var KillController = class {
  #state;
  #killSignal;
  constructor() {
    this.#state = {
      abortedCode: undefined,
      listeners: []
    };
    this.#killSignal = new KillSignal(SHELL_SIGNAL_CTOR_SYMBOL, this.#state);
  }
  get signal() {
    return this.#killSignal;
  }
  kill(signal = "SIGTERM") {
    sendSignalToState(this.#state, signal);
  }
};
var KillSignal = class {
  #state;
  constructor(symbol, state) {
    if (symbol !== SHELL_SIGNAL_CTOR_SYMBOL) {
      throw new Error("Constructing instances of KillSignal is not permitted.");
    }
    this.#state = state;
  }
  get aborted() {
    return this.#state.abortedCode !== undefined;
  }
  get abortedExitCode() {
    return this.#state.abortedCode;
  }
  linkChild(killSignal) {
    const listener = (signal) => {
      sendSignalToState(killSignal.#state, signal);
    };
    this.addListener(listener);
    return {
      unsubscribe: () => {
        this.removeListener(listener);
      }
    };
  }
  addListener(listener) {
    this.#state.listeners.push(listener);
  }
  removeListener(listener) {
    const index = this.#state.listeners.indexOf(listener);
    if (index >= 0) {
      this.#state.listeners.splice(index, 1);
    }
  }
};
function killSignalFromAbortSignal(abortSignal) {
  const controller = new KillController;
  if (abortSignal.aborted) {
    controller.kill("SIGTERM");
  } else {
    abortSignal.addEventListener("abort", () => {
      controller.kill("SIGTERM");
    }, { once: true });
  }
  return controller.signal;
}
function sendSignalToState(state, signal) {
  const code2 = getSignalAbortCode(signal);
  if (code2 !== undefined) {
    state.abortedCode = code2;
  }
  for (const listener of state.listeners) {
    listener(signal);
  }
}
function getSignalAbortCode(signal) {
  switch (signal) {
    case "SIGTERM":
      return 128 + 15;
    case "SIGKILL":
      return 128 + 9;
    case "SIGABRT":
      return 128 + 6;
    case "SIGQUIT":
      return 128 + 3;
    case "SIGINT":
      return 128 + 2;
    case "SIGSTOP":
      return 128 + 19;
    default:
      return;
  }
}
function template(strings, exprs) {
  return templateInner(strings, exprs, escapeArg);
}
function templateRaw(strings, exprs) {
  return templateInner(strings, exprs, undefined);
}
function templateInner(strings, exprs, escape) {
  let nextStreamFd = 3;
  let text = "";
  let streams;
  const exprsCount = exprs.length;
  for (let i = 0;i < Math.max(strings.length, exprs.length); i++) {
    if (strings.length > i) {
      text += strings[i];
    }
    if (exprs.length > i) {
      try {
        const expr = exprs[i];
        if (expr == null) {
          throw "Expression was null or undefined.";
        }
        const inputOrOutputRedirect = detectInputOrOutputRedirect(text);
        if (inputOrOutputRedirect === "<") {
          if (expr instanceof Path) {
            text += templateLiteralExprToString(expr, escape);
          } else if (typeof expr === "string") {
            handleReadableStream(() => new ReadableStream2({
              start(controller) {
                controller.enqueue(new TextEncoder().encode(expr));
                controller.close();
              }
            }));
          } else if (expr instanceof ReadableStream2) {
            handleReadableStream(() => expr);
          } else if (expr?.[symbols.readable]) {
            handleReadableStream(() => {
              const stream3 = expr[symbols.readable]?.();
              if (!(stream3 instanceof ReadableStream2)) {
                throw new TypeError(`Expected a ReadableStream or an object with a [$.symbols.readable] method that returns a ReadableStream at expression ${i + 1}/${exprsCount}.`);
              }
              return stream3;
            });
          } else if (expr instanceof FsFileWrapper) {
            handleReadableStream(() => expr.readable);
          } else if (expr instanceof Uint8Array) {
            handleReadableStream(() => {
              return new ReadableStream2({
                start(controller) {
                  controller.enqueue(expr);
                  controller.close();
                }
              });
            });
          } else if (expr instanceof Response) {
            handleReadableStream(() => {
              return expr.body ?? new ReadableStream2({
                start(controller) {
                  controller.close();
                }
              });
            });
          } else if (expr instanceof Function) {
            handleReadableStream(() => {
              try {
                const result = expr();
                if (!(result instanceof ReadableStream2)) {
                  throw new TypeError("Function did not return a ReadableStream.");
                }
                return result;
              } catch (err) {
                throw new Error(`Error getting ReadableStream from function at expression ${i + 1}/${exprsCount}. ${errorToString(err)}`);
              }
            });
          } else {
            throw new TypeError("Unsupported object provided to input redirect.");
          }
        } else if (inputOrOutputRedirect === ">") {
          if (expr instanceof Path) {
            text += templateLiteralExprToString(expr, escape);
          } else if (expr instanceof WritableStream2) {
            handleWritableStream(() => expr);
          } else if (expr instanceof Uint8Array) {
            let pos = 0;
            handleWritableStream(() => {
              return new WritableStream2({
                write(chunk) {
                  const nextPos = chunk.length + pos;
                  if (nextPos > expr.length) {
                    const chunkLength = expr.length - pos;
                    expr.set(chunk.slice(0, chunkLength), pos);
                    throw new Error(`Overflow writing ${nextPos} bytes to Uint8Array (length: ${exprsCount}).`);
                  }
                  expr.set(chunk, pos);
                  pos = nextPos;
                }
              });
            });
          } else if (expr instanceof FsFileWrapper) {
            handleWritableStream(() => expr.writable);
          } else if (expr?.[symbols.writable]) {
            handleWritableStream(() => {
              const stream3 = expr[symbols.writable]?.();
              if (!(stream3 instanceof WritableStream2)) {
                throw new TypeError(`Expected a WritableStream or an object with a [$.symbols.writable] method that returns a WritableStream at expression ${i + 1}/${exprsCount}.`);
              }
              return stream3;
            });
          } else if (expr instanceof Function) {
            handleWritableStream(() => {
              try {
                const result = expr();
                if (!(result instanceof WritableStream2)) {
                  throw new TypeError("Function did not return a WritableStream.");
                }
                return result;
              } catch (err) {
                throw new Error(`Error getting WritableStream from function at expression ${i + 1}/${exprsCount}. ${errorToString(err)}`);
              }
            });
          } else if (typeof expr === "string") {
            throw new TypeError("Cannot provide strings to output redirects. Did you mean to provide a path instead via the `$.path(...)` API?");
          } else {
            throw new TypeError("Unsupported object provided to output redirect.");
          }
        } else {
          text += templateLiteralExprToString(expr, escape);
        }
      } catch (err) {
        const startMessage = exprsCount === 1 ? "Failed resolving expression in command." : `Failed resolving expression ${i + 1}/${exprsCount} in command.`;
        const message = `${startMessage} ${errorToString(err)}`;
        if (err instanceof TypeError) {
          throw new TypeError(message);
        } else {
          throw new Error(message);
        }
      }
    }
  }
  return {
    text,
    fds: streams
  };
  function handleReadableStream(createStream) {
    streams ??= new StreamFds;
    const fd = nextStreamFd++;
    streams.insertReader(fd, () => {
      const reader = createStream().getReader();
      return {
        ...readerFromStreamReader(reader),
        [Symbol.dispose]() {
          reader.releaseLock();
        }
      };
    });
    text = text.trimEnd() + "&" + fd;
  }
  function handleWritableStream(createStream) {
    streams ??= new StreamFds;
    const fd = nextStreamFd++;
    streams.insertWriter(fd, () => {
      const stream3 = createStream();
      const writer = stream3.getWriter();
      return {
        ...writerFromStreamWriter(writer),
        async[Symbol.asyncDispose]() {
          writer.releaseLock();
          try {
            await stream3.close();
          } catch {}
        }
      };
    });
    text = text.trimEnd() + "&" + fd;
  }
}
function detectInputOrOutputRedirect(text) {
  text = text.trimEnd();
  if (text.endsWith(">")) {
    return ">";
  } else if (text.endsWith("<")) {
    return "<";
  } else {
    return;
  }
}
function templateLiteralExprToString(expr, escape) {
  let result;
  if (typeof expr === "string") {
    result = expr;
  } else if (expr instanceof Array) {
    return expr.map((e) => templateLiteralExprToString(e, escape)).join(" ");
  } else if (expr instanceof CommandResult) {
    result = expr.stdout.replace(/\r?\n$/, "");
  } else if (expr instanceof CommandBuilder) {
    throw new TypeError("Providing a command builder is not yet supported (https://github.com/dsherret/dax/issues/239). Await the command builder's text before using it in an expression (ex. await $`cmd`.text()).");
  } else if (expr instanceof RawArg) {
    return templateLiteralExprToString(expr.value, undefined);
  } else if (typeof expr === "object" && expr.toString === Object.prototype.toString) {
    if (expr instanceof Promise) {
      throw new TypeError("Provided object was a Promise. Please await it before providing it.");
    } else {
      throw new TypeError("Provided object does not override `toString()`.");
    }
  } else {
    result = `${expr}`;
  }
  return escape ? escape(result) : result;
}
function writerFromStreamWriter(streamWriter) {
  return {
    async write(p) {
      await streamWriter.ready;
      await streamWriter.write(p);
      return p.length;
    }
  };
}
function extend(target, source) {
  for (const prop in source) {
    if (Object.hasOwn(source, prop)) {
      target[prop] = source[prop];
    }
  }
  return target;
}
var reLeadingNewline = /^[ \t]*(?:\r\n|\r|\n)/;
var reTrailingNewline = /(?:\r\n|\r|\n)[ \t]*$/;
var reStartsWithNewlineOrIsEmpty = /^(?:[\r\n]|$)/;
var reDetectIndentation = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;
var reOnlyWhitespaceWithAtLeastOneNewline = /^[ \t]*[\r\n][ \t\r\n]*$/;
function _outdentArray(strings, firstInterpolatedValueSetsIndentationLevel, options) {
  let indentationLevel = 0;
  const match = strings[0].match(reDetectIndentation);
  if (match) {
    indentationLevel = match[1].length;
  }
  const reSource = `(\\r\\n|\\r|\\n).{0,${indentationLevel}}`;
  const reMatchIndent = new RegExp(reSource, "g");
  if (firstInterpolatedValueSetsIndentationLevel) {
    strings = strings.slice(1);
  }
  const { newline, trimLeadingNewline, trimTrailingNewline } = options;
  const normalizeNewlines = typeof newline === "string";
  const l = strings.length;
  const outdentedStrings = strings.map((v, i) => {
    v = v.replace(reMatchIndent, "$1");
    if (i === 0 && trimLeadingNewline) {
      v = v.replace(reLeadingNewline, "");
    }
    if (i === l - 1 && trimTrailingNewline) {
      v = v.replace(reTrailingNewline, "");
    }
    if (normalizeNewlines) {
      v = v.replace(/\r\n|\n|\r/g, (_) => newline);
    }
    return v;
  });
  return outdentedStrings;
}
function concatStringsAndValues(strings, values) {
  let ret = "";
  for (let i = 0, l = strings.length;i < l; i++) {
    ret += strings[i];
    if (i < l - 1) {
      ret += values[i];
    }
  }
  return ret;
}
function isTemplateStringsArray(v) {
  return Object.hasOwn(v, "raw") && Object.hasOwn(v, "length");
}
function createInstance(options) {
  const arrayAutoIndentCache = /* @__PURE__ */ new WeakMap;
  const arrayFirstInterpSetsIndentCache = /* @__PURE__ */ new WeakMap;
  function outdent(stringsOrOptions, ...values) {
    if (isTemplateStringsArray(stringsOrOptions)) {
      const strings = stringsOrOptions;
      const firstInterpolatedValueSetsIndentationLevel = (values[0] === outdent || values[0] === defaultOutdent) && reOnlyWhitespaceWithAtLeastOneNewline.test(strings[0]) && reStartsWithNewlineOrIsEmpty.test(strings[1]);
      const cache = firstInterpolatedValueSetsIndentationLevel ? arrayFirstInterpSetsIndentCache : arrayAutoIndentCache;
      let renderedArray = cache.get(strings);
      if (!renderedArray) {
        renderedArray = _outdentArray(strings, firstInterpolatedValueSetsIndentationLevel, options);
        cache.set(strings, renderedArray);
      }
      if (values.length === 0) {
        return renderedArray[0];
      }
      const rendered = concatStringsAndValues(renderedArray, firstInterpolatedValueSetsIndentationLevel ? values.slice(1) : values);
      return rendered;
    } else {
      return createInstance(extend(extend({}, options), stringsOrOptions || {}));
    }
  }
  const fullOutdent = extend(outdent, {
    string(str) {
      return _outdentArray([str], false, options)[0];
    }
  });
  return fullOutdent;
}
var defaultOutdent = createInstance({
  trimLeadingNewline: true,
  trimTrailingNewline: true
});
function sleep(delay) {
  const ms = delayToMs(delay);
  return new Promise((resolve4) => setTimeout(resolve4, ms));
}
async function withRetries($local, errorLogger, opts) {
  const delayIterator = delayToIterator(opts.delay);
  for (let i = 0;i < opts.count; i++) {
    if (i > 0) {
      const nextDelay = delayIterator.next();
      if (!opts.quiet) {
        $local.logWarn(`Failed. Trying again in ${formatMillis(nextDelay)}...`);
      }
      await sleep(nextDelay);
      if (!opts.quiet) {
        $local.logStep(`Retrying attempt ${i + 1}/${opts.count}...`);
      }
    }
    try {
      return await opts.action();
    } catch (err) {
      errorLogger(err);
    }
  }
  throw new Error(`Failed after ${opts.count} attempts.`);
}
function buildInitial$State(opts) {
  return {
    commandBuilder: new TreeBox(resolveCommandBuilder()),
    requestBuilder: resolveRequestBuilder(),
    infoLogger: new LoggerTreeBox(console.error),
    warnLogger: new LoggerTreeBox(console.error),
    errorLogger: new LoggerTreeBox(console.error),
    indentLevel: new Box(0),
    extras: opts.extras
  };
  function resolveCommandBuilder() {
    if (opts.commandBuilder instanceof CommandBuilder) {
      return opts.commandBuilder;
    } else if (opts.commandBuilder instanceof Function) {
      return opts.commandBuilder(new CommandBuilder);
    } else {
      const _assertUndefined = opts.commandBuilder;
      return new CommandBuilder;
    }
  }
  function resolveRequestBuilder() {
    if (opts.requestBuilder instanceof RequestBuilder) {
      return opts.requestBuilder;
    } else if (opts.requestBuilder instanceof Function) {
      return opts.requestBuilder(new RequestBuilder);
    } else {
      const _assertUndefined = opts.requestBuilder;
      return new RequestBuilder;
    }
  }
}
var helperObject = {
  path: createPath,
  escapeArg,
  stripAnsi(text) {
    return stripAnsiCodes(text);
  },
  dedent: defaultOutdent,
  sleep,
  which(commandName) {
    return which3(commandName, denoWhichRealEnv);
  },
  whichSync(commandName) {
    return whichSync(commandName, denoWhichRealEnv);
  }
};
function build$FromState(state) {
  const logDepthObj = {
    get logDepth() {
      return state.indentLevel.value;
    },
    set logDepth(value) {
      if (value < 0 || value % 1 !== 0) {
        throw new Error("Expected a positive integer.");
      }
      state.indentLevel.value = value;
    }
  };
  const result = Object.assign((strings, ...exprs) => {
    const textState = template(strings, exprs);
    return state.commandBuilder.getValue()[setCommandTextStateSymbol](textState);
  }, helperObject, logDepthObj, {
    build$(opts = {}) {
      return build$FromState({
        commandBuilder: resolveCommandBuilder(),
        requestBuilder: resolveRequestBuilder(),
        errorLogger: state.errorLogger.createChild(),
        infoLogger: state.infoLogger.createChild(),
        warnLogger: state.warnLogger.createChild(),
        indentLevel: state.indentLevel,
        extras: {
          ...state.extras,
          ...opts.extras
        }
      });
      function resolveCommandBuilder() {
        if (opts.commandBuilder instanceof CommandBuilder) {
          return new TreeBox(opts.commandBuilder);
        } else if (opts.commandBuilder instanceof Function) {
          return new TreeBox(opts.commandBuilder(state.commandBuilder.getValue()));
        } else {
          const _assertUndefined = opts.commandBuilder;
          return state.commandBuilder.createChild();
        }
      }
      function resolveRequestBuilder() {
        if (opts.requestBuilder instanceof RequestBuilder) {
          return opts.requestBuilder;
        } else if (opts.requestBuilder instanceof Function) {
          return opts.requestBuilder(state.requestBuilder);
        } else {
          const _assertUndefined = opts.requestBuilder;
          return state.requestBuilder;
        }
      }
    },
    log(...data) {
      state.infoLogger.getValue()(getLogText(data));
    },
    logLight(...data) {
      state.infoLogger.getValue()(gray(getLogText(data)));
    },
    logStep(firstArg, ...data) {
      logStep(firstArg, data, (t) => bold(green(t)), state.infoLogger.getValue());
    },
    logError(firstArg, ...data) {
      logStep(firstArg, data, (t) => bold(red(t)), state.errorLogger.getValue());
    },
    logWarn(firstArg, ...data) {
      logStep(firstArg, data, (t) => bold(yellow(t)), state.warnLogger.getValue());
    },
    logGroup(labelOrAction, maybeAction) {
      const label = typeof labelOrAction === "string" ? labelOrAction : undefined;
      if (label) {
        state.infoLogger.getValue()(getLogText([label]));
      }
      state.indentLevel.value++;
      const action = label != null ? maybeAction : labelOrAction;
      if (action != null) {
        let wasPromise = false;
        try {
          const result2 = action();
          if (result2 instanceof Promise) {
            wasPromise = true;
            return result2.finally(() => {
              if (state.indentLevel.value > 0) {
                state.indentLevel.value--;
              }
            });
          } else {
            return result2;
          }
        } finally {
          if (!wasPromise) {
            if (state.indentLevel.value > 0) {
              state.indentLevel.value--;
            }
          }
        }
      }
    },
    logGroupEnd() {
      if (state.indentLevel.value > 0) {
        state.indentLevel.value--;
      }
    },
    commandExists(commandName) {
      if (state.commandBuilder.getValue()[getRegisteredCommandNamesSymbol]().includes(commandName)) {
        return Promise.resolve(true);
      }
      return helperObject.which(commandName).then((c) => c != null);
    },
    commandExistsSync(commandName) {
      if (state.commandBuilder.getValue()[getRegisteredCommandNamesSymbol]().includes(commandName)) {
        return true;
      }
      return helperObject.whichSync(commandName) != null;
    },
    maybeConfirm,
    confirm,
    maybeSelect,
    select,
    maybeMultiSelect,
    multiSelect,
    maybePrompt,
    prompt,
    progress(messageOrText, options) {
      const opts = typeof messageOrText === "string" ? (() => {
        const words = messageOrText.split(" ");
        return {
          prefix: words[0],
          message: words.length > 1 ? words.slice(1).join(" ") : undefined,
          ...options
        };
      })() : messageOrText;
      return new ProgressBar((...data) => {
        state.infoLogger.getValue()(...data);
      }, opts);
    },
    setInfoLogger(logger2) {
      state.infoLogger.setValue(logger2);
    },
    setWarnLogger(logger2) {
      state.warnLogger.setValue(logger2);
    },
    setErrorLogger(logger2) {
      state.errorLogger.setValue(logger2);
      const commandBuilder = state.commandBuilder.getValue();
      commandBuilder.setPrintCommandLogger((cmd) => logger2(white(">"), blue(cmd)));
      state.commandBuilder.setValue(commandBuilder);
    },
    setPrintCommand(value) {
      const commandBuilder = state.commandBuilder.getValue().printCommand(value);
      state.commandBuilder.setValue(commandBuilder);
    },
    symbols,
    request(url2) {
      return state.requestBuilder.url(url2);
    },
    raw(strings, ...exprs) {
      const textState = templateRaw(strings, exprs);
      return state.commandBuilder.getValue()[setCommandTextStateSymbol](textState);
    },
    rawArg,
    withRetries(opts) {
      return withRetries(result, state.errorLogger.getValue(), opts);
    }
  }, state.extras);
  const keyName = "logDepth";
  Object.defineProperty(result, keyName, Object.getOwnPropertyDescriptor(logDepthObj, keyName));
  state.requestBuilder = state.requestBuilder[withProgressBarFactorySymbol]((message) => result.progress(message));
  return result;
  function getLogText(data) {
    const combinedText = data.map((d) => {
      const typeofD = typeof d;
      if (typeofD !== "object" && typeofD !== "undefined") {
        return d;
      } else {
        return main_exports.inspect(d, { colors: true });
      }
    }).join(" ");
    if (state.indentLevel.value === 0) {
      return combinedText;
    } else {
      const indentText = "  ".repeat(state.indentLevel.value);
      return combinedText.split(/\n/).map((l) => `${indentText}${l}`).join(`
`);
    }
  }
  function logStep(firstArg, data, colourize, logger2) {
    if (data.length === 0) {
      let i = 0;
      while (i < firstArg.length && firstArg[i] === " ") {
        i++;
      }
      while (i < firstArg.length && firstArg[i] !== " ") {
        i++;
      }
      firstArg = colourize(firstArg.substring(0, i)) + firstArg.substring(i);
    } else {
      firstArg = colourize(firstArg);
    }
    logger2(getLogText([firstArg, ...data]));
  }
}
var $ = build$FromState(buildInitial$State({
  isGlobal: true
}));
var mod_default = $;
function createPath(path) {
  if (path instanceof Path) {
    return path;
  } else {
    return new Path(path);
  }
}

// utils/checks.ts
async function checkPlatform() {
  const platform5 = await mod_default`uname -o`.text();
  if (platform5 === "Android") {
    return {
      status: "ok",
      message: "Running on Android"
    };
  } else {
    return {
      status: "error",
      message: "Not running on Android"
    };
  }
}
async function checkArch() {
  const arch2 = await mod_default`uname -m`.text();
  if (arch2 === "aarch64") {
    return {
      status: "ok",
      message: "Running on aarch64"
    };
  }
  return {
    status: "error",
    message: "Not running on aarch64"
  };
}
function checkPrefix() {
  if (process.env.PREFIX) {
    return {
      status: "ok",
      message: "PREFIX environment variable is set"
    };
  }
  return {
    status: "error",
    message: "PREFIX environment variable is not set"
  };
}
async function checkStorage() {
  const freeSpace = await mod_default`df -h $HOME | awk 'NR==2 {print $4}'`.text();
  if (Number(freeSpace) > 4194304) {
    return {
      status: "ok",
      message: "Free space is greater than 4GB"
    };
  }
  return {
    status: "warn",
    message: `Low storage space: ${freeSpace} (4GB recommended)`
  };
}
async function checkRam() {
  const totalRam = await mod_default`free -m | awk 'NR==2 {print $2}'`.text();
  if (Number(totalRam) > 2048) {
    return {
      status: "ok",
      message: "RAM is greater than 2GB"
    };
  }
  return {
    status: "warn",
    message: `Low RAM: ${totalRam}MB (2GB recommended)`
  };
}
async function getSystemCheckResults() {
  return Promise.all([
    checkPlatform(),
    checkArch(),
    checkPrefix(),
    checkStorage(),
    checkRam()
  ]);
}

// scripts/main.ts
import fs38 from "node:fs";

// utils/pkg.ts
function pkgInstall(dependencies) {
  return mod_default`pkg install ${dependencies} -y -o Dpkg::Options::="--force-confold"`;
}
function pkgUpgrade() {
  return mod_default`pkg upgrade -y -o Dpkg::Options::="--force-confold"`;
}

// node_modules/boxen/index.js
import process3 from "node:process";

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const osc = `(?:\\u001B\\][\\s\\S]*?${ST})`;
  const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  const pattern = `${osc}|${csi}`;
  return new RegExp(pattern, onlyFirst ? undefined : "g");
}

// node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  if (!string.includes("\x1B") && !string.includes("")) {
    return string;
  }
  return string.replace(regex, "");
}

// node_modules/get-east-asian-width/lookup-data.js
var ambiguousRanges = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
var fullwidthRanges = [12288, 12288, 65281, 65376, 65504, 65510];
var halfwidthRanges = [8361, 8361, 65377, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65512, 65518];
var narrowRanges = [32, 126, 162, 163, 165, 166, 172, 172, 175, 175, 10214, 10221, 10629, 10630];
var wideRanges = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101589, 101631, 101662, 101760, 101874, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110882, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110951, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128728, 128732, 128735, 128747, 128748, 128756, 128764, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129674, 129678, 129734, 129736, 129736, 129741, 129756, 129759, 129770, 129775, 129784, 131072, 196605, 196608, 262141];

// node_modules/get-east-asian-width/utilities.js
var isInRange = (ranges, codePoint) => {
  let low = 0;
  let high = Math.floor(ranges.length / 2) - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const i = mid * 2;
    if (codePoint < ranges[i]) {
      high = mid - 1;
    } else if (codePoint > ranges[i + 1]) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

// node_modules/get-east-asian-width/lookup.js
var minimumAmbiguousCodePoint = ambiguousRanges[0];
var maximumAmbiguousCodePoint = ambiguousRanges.at(-1);
var minimumFullWidthCodePoint = fullwidthRanges[0];
var maximumFullWidthCodePoint = fullwidthRanges.at(-1);
var minimumHalfWidthCodePoint = halfwidthRanges[0];
var maximumHalfWidthCodePoint = halfwidthRanges.at(-1);
var minimumNarrowCodePoint = narrowRanges[0];
var maximumNarrowCodePoint = narrowRanges.at(-1);
var minimumWideCodePoint = wideRanges[0];
var maximumWideCodePoint = wideRanges.at(-1);
var commonCjkCodePoint = 19968;
var [wideFastPathStart, wideFastPathEnd] = findWideFastPathRange(wideRanges);
function findWideFastPathRange(ranges) {
  let fastPathStart = ranges[0];
  let fastPathEnd = ranges[1];
  for (let index = 0;index < ranges.length; index += 2) {
    const start = ranges[index];
    const end = ranges[index + 1];
    if (commonCjkCodePoint >= start && commonCjkCodePoint <= end) {
      return [start, end];
    }
    if (end - start > fastPathEnd - fastPathStart) {
      fastPathStart = start;
      fastPathEnd = end;
    }
  }
  return [fastPathStart, fastPathEnd];
}
var isAmbiguous = (codePoint) => {
  if (codePoint < minimumAmbiguousCodePoint || codePoint > maximumAmbiguousCodePoint) {
    return false;
  }
  return isInRange(ambiguousRanges, codePoint);
};
var isFullWidth = (codePoint) => {
  if (codePoint < minimumFullWidthCodePoint || codePoint > maximumFullWidthCodePoint) {
    return false;
  }
  return isInRange(fullwidthRanges, codePoint);
};
var isWide = (codePoint) => {
  if (codePoint >= wideFastPathStart && codePoint <= wideFastPathEnd) {
    return true;
  }
  if (codePoint < minimumWideCodePoint || codePoint > maximumWideCodePoint) {
    return false;
  }
  return isInRange(wideRanges, codePoint);
};

// node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}

// node_modules/string-width/index.js
var import_emoji_regex = __toESM(require_emoji_regex(), 1);
var segmenter = new Intl.Segmenter;
var defaultIgnorableCodePointRegex = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if (import_emoji_regex.default().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}

// node_modules/widest-line/index.js
function widestLine(string) {
  let lineWidth = 0;
  for (const line of string.split(`
`)) {
    lineWidth = Math.max(lineWidth, stringWidth(line));
  }
  return lineWidth;
}

// node_modules/boxen/index.js
var import_cli_boxes = __toESM(require_cli_boxes(), 1);

// node_modules/camelcase/index.js
var UPPERCASE = /[\p{Lu}]/u;
var LOWERCASE = /[\p{Ll}]/u;
var LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
var IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
var SEPARATORS = /[_.\- ]+/;
var LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
var SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
var NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");
var preserveCamelCase = (string, toLowerCase, toUpperCase, preserveConsecutiveUppercase) => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;
  let isLastLastCharPreserved = false;
  for (let index = 0;index < string.length; index++) {
    const character = string[index];
    isLastLastCharPreserved = index > 2 ? string[index - 3] === "-" : true;
    if (isLastCharLower && UPPERCASE.test(character)) {
      string = string.slice(0, index) + "-" + string.slice(index);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      index++;
    } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character) && (!isLastLastCharPreserved || preserveConsecutiveUppercase)) {
      string = string.slice(0, index - 1) + "-" + string.slice(index - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
    }
  }
  return string;
};
var preserveConsecutiveUppercase = (input, toLowerCase) => {
  LEADING_CAPITAL.lastIndex = 0;
  return input.replaceAll(LEADING_CAPITAL, (match) => toLowerCase(match));
};
var postProcess = (input, toUpperCase) => {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;
  return input.replaceAll(NUMBERS_AND_IDENTIFIER, (match, pattern, offset) => ["_", "-"].includes(input.charAt(offset + match.length)) ? match : toUpperCase(match)).replaceAll(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier));
};
function camelCase(input, options) {
  if (!(typeof input === "string" || Array.isArray(input))) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }
  options = {
    pascalCase: false,
    preserveConsecutiveUppercase: false,
    ...options
  };
  if (Array.isArray(input)) {
    input = input.map((x) => x.trim()).filter((x) => x.length).join("-");
  } else {
    input = input.trim();
  }
  if (input.length === 0) {
    return "";
  }
  const toLowerCase = options.locale === false ? (string) => string.toLowerCase() : (string) => string.toLocaleLowerCase(options.locale);
  const toUpperCase = options.locale === false ? (string) => string.toUpperCase() : (string) => string.toLocaleUpperCase(options.locale);
  if (input.length === 1) {
    if (SEPARATORS.test(input)) {
      return "";
    }
    return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
  }
  const hasUpperCase = input !== toLowerCase(input);
  if (hasUpperCase) {
    input = preserveCamelCase(input, toLowerCase, toUpperCase, options.preserveConsecutiveUppercase);
  }
  input = input.replace(LEADING_SEPARATORS, "");
  input = options.preserveConsecutiveUppercase ? preserveConsecutiveUppercase(input, toLowerCase) : toLowerCase(input);
  if (options.pascalCase) {
    input = toUpperCase(input.charAt(0)) + input.slice(1);
  }
  return postProcess(input, toUpperCase);
}

// node_modules/boxen/index.js
var import_ansi_align = __toESM(require_ansi_align(), 1);

// node_modules/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET2 = 10;
var wrapAnsi162 = (offset = 0) => (code2) => `\x1B[${code2 + offset}m`;
var wrapAnsi2562 = (offset = 0) => (code2) => `\x1B[${38 + offset};5;${code2}m`;
var wrapAnsi16m2 = (offset = 0) => (red2, green2, blue2) => `\x1B[${38 + offset};2;${red2};${green2};${blue2}m`;
var styles3 = {
  modifier: {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    blackBright: [90, 39],
    gray: [90, 39],
    grey: [90, 39],
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    bgGrey: [100, 49],
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames2 = Object.keys(styles3.modifier);
var foregroundColorNames2 = Object.keys(styles3.color);
var backgroundColorNames2 = Object.keys(styles3.bgColor);
var colorNames2 = [...foregroundColorNames2, ...backgroundColorNames2];
function assembleStyles2() {
  const codes = new Map;
  for (const [groupName, group] of Object.entries(styles3)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles3[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles3[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles3, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles3, "codes", {
    value: codes,
    enumerable: false
  });
  styles3.color.close = "\x1B[39m";
  styles3.bgColor.close = "\x1B[49m";
  styles3.color.ansi = wrapAnsi162();
  styles3.color.ansi256 = wrapAnsi2562();
  styles3.color.ansi16m = wrapAnsi16m2();
  styles3.bgColor.ansi = wrapAnsi162(ANSI_BACKGROUND_OFFSET2);
  styles3.bgColor.ansi256 = wrapAnsi2562(ANSI_BACKGROUND_OFFSET2);
  styles3.bgColor.ansi16m = wrapAnsi16m2(ANSI_BACKGROUND_OFFSET2);
  Object.defineProperties(styles3, {
    rgbToAnsi256: {
      value(red2, green2, blue2) {
        if (red2 === green2 && green2 === blue2) {
          if (red2 < 8) {
            return 16;
          }
          if (red2 > 248) {
            return 231;
          }
          return Math.round((red2 - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red2 / 255 * 5) + 6 * Math.round(green2 / 255 * 5) + Math.round(blue2 / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles3.rgbToAnsi256(...styles3.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code2) {
        if (code2 < 8) {
          return 30 + code2;
        }
        if (code2 < 16) {
          return 90 + (code2 - 8);
        }
        let red2;
        let green2;
        let blue2;
        if (code2 >= 232) {
          red2 = ((code2 - 232) * 10 + 8) / 255;
          green2 = red2;
          blue2 = red2;
        } else {
          code2 -= 16;
          const remainder = code2 % 36;
          red2 = Math.floor(code2 / 36) / 5;
          green2 = Math.floor(remainder / 6) / 5;
          blue2 = remainder % 6 / 5;
        }
        const value = Math.max(red2, green2, blue2) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue2) << 2 | Math.round(green2) << 1 | Math.round(red2));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red2, green2, blue2) => styles3.ansi256ToAnsi(styles3.rgbToAnsi256(red2, green2, blue2)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles3.ansi256ToAnsi(styles3.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles3;
}
var ansiStyles2 = assembleStyles2();
var ansi_styles_default2 = ansiStyles2;

// node_modules/wrap-ansi/index.js
var ESCAPES = new Set([
  "\x1B",
  ""
]);
var END_CODE = 39;
var ANSI_ESCAPE_BELL = "\x07";
var ANSI_CSI = "[";
var ANSI_OSC = "]";
var ANSI_SGR_TERMINATOR = "m";
var ANSI_ESCAPE_LINK = `${ANSI_OSC}8;;`;
var wrapAnsiCode = (code2) => `${ESCAPES.values().next().value}${ANSI_CSI}${code2}${ANSI_SGR_TERMINATOR}`;
var wrapAnsiHyperlink = (url2) => `${ESCAPES.values().next().value}${ANSI_ESCAPE_LINK}${url2}${ANSI_ESCAPE_BELL}`;
var wordLengths = (string) => string.split(" ").map((character) => stringWidth(character));
var wrapWord = (rows, word, columns) => {
  const characters = [...word];
  let isInsideEscape = false;
  let isInsideLinkEscape = false;
  let visible = stringWidth(stripAnsi(rows.at(-1)));
  for (const [index, character] of characters.entries()) {
    const characterLength = stringWidth(character);
    if (visible + characterLength <= columns) {
      rows[rows.length - 1] += character;
    } else {
      rows.push(character);
      visible = 0;
    }
    if (ESCAPES.has(character)) {
      isInsideEscape = true;
      const ansiEscapeLinkCandidate = characters.slice(index + 1, index + 1 + ANSI_ESCAPE_LINK.length).join("");
      isInsideLinkEscape = ansiEscapeLinkCandidate === ANSI_ESCAPE_LINK;
    }
    if (isInsideEscape) {
      if (isInsideLinkEscape) {
        if (character === ANSI_ESCAPE_BELL) {
          isInsideEscape = false;
          isInsideLinkEscape = false;
        }
      } else if (character === ANSI_SGR_TERMINATOR) {
        isInsideEscape = false;
      }
      continue;
    }
    visible += characterLength;
    if (visible === columns && index < characters.length - 1) {
      rows.push("");
      visible = 0;
    }
  }
  if (!visible && rows.at(-1).length > 0 && rows.length > 1) {
    rows[rows.length - 2] += rows.pop();
  }
};
var stringVisibleTrimSpacesRight = (string) => {
  const words = string.split(" ");
  let last = words.length;
  while (last > 0) {
    if (stringWidth(words[last - 1]) > 0) {
      break;
    }
    last--;
  }
  if (last === words.length) {
    return string;
  }
  return words.slice(0, last).join(" ") + words.slice(last).join("");
};
var exec = (string, columns, options = {}) => {
  if (options.trim !== false && string.trim() === "") {
    return "";
  }
  let returnValue = "";
  let escapeCode;
  let escapeUrl;
  const lengths = wordLengths(string);
  let rows = [""];
  for (const [index, word] of string.split(" ").entries()) {
    if (options.trim !== false) {
      rows[rows.length - 1] = rows.at(-1).trimStart();
    }
    let rowLength = stringWidth(rows.at(-1));
    if (index !== 0) {
      if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
        rows.push("");
        rowLength = 0;
      }
      if (rowLength > 0 || options.trim === false) {
        rows[rows.length - 1] += " ";
        rowLength++;
      }
    }
    if (options.hard && lengths[index] > columns) {
      const remainingColumns = columns - rowLength;
      const breaksStartingThisLine = 1 + Math.floor((lengths[index] - remainingColumns - 1) / columns);
      const breaksStartingNextLine = Math.floor((lengths[index] - 1) / columns);
      if (breaksStartingNextLine < breaksStartingThisLine) {
        rows.push("");
      }
      wrapWord(rows, word, columns);
      continue;
    }
    if (rowLength + lengths[index] > columns && rowLength > 0 && lengths[index] > 0) {
      if (options.wordWrap === false && rowLength < columns) {
        wrapWord(rows, word, columns);
        continue;
      }
      rows.push("");
    }
    if (rowLength + lengths[index] > columns && options.wordWrap === false) {
      wrapWord(rows, word, columns);
      continue;
    }
    rows[rows.length - 1] += word;
  }
  if (options.trim !== false) {
    rows = rows.map((row) => stringVisibleTrimSpacesRight(row));
  }
  const preString = rows.join(`
`);
  const pre = [...preString];
  let preStringIndex = 0;
  for (const [index, character] of pre.entries()) {
    returnValue += character;
    if (ESCAPES.has(character)) {
      const { groups } = new RegExp(`(?:\\${ANSI_CSI}(?<code>\\d+)m|\\${ANSI_ESCAPE_LINK}(?<uri>.*)${ANSI_ESCAPE_BELL})`).exec(preString.slice(preStringIndex)) || { groups: {} };
      if (groups.code !== undefined) {
        const code3 = Number.parseFloat(groups.code);
        escapeCode = code3 === END_CODE ? undefined : code3;
      } else if (groups.uri !== undefined) {
        escapeUrl = groups.uri.length === 0 ? undefined : groups.uri;
      }
    }
    const code2 = ansi_styles_default2.codes.get(Number(escapeCode));
    if (pre[index + 1] === `
`) {
      if (escapeUrl) {
        returnValue += wrapAnsiHyperlink("");
      }
      if (escapeCode && code2) {
        returnValue += wrapAnsiCode(code2);
      }
    } else if (character === `
`) {
      if (escapeCode && code2) {
        returnValue += wrapAnsiCode(escapeCode);
      }
      if (escapeUrl) {
        returnValue += wrapAnsiHyperlink(escapeUrl);
      }
    }
    preStringIndex += character.length;
  }
  return returnValue;
};
function wrapAnsi(string, columns, options) {
  return String(string).normalize().replaceAll(`\r
`, `
`).split(`
`).map((line) => exec(line, columns, options)).join(`
`);
}

// node_modules/boxen/index.js
var import_cli_boxes2 = __toESM(require_cli_boxes(), 1);
var NEWLINE = `
`;
var PAD = " ";
var NONE = "none";
var terminalColumns = () => {
  const { env: env3, stdout: stdout2, stderr: stderr2 } = process3;
  if (stdout2?.columns) {
    return stdout2.columns;
  }
  if (stderr2?.columns) {
    return stderr2.columns;
  }
  if (env3.COLUMNS) {
    return Number.parseInt(env3.COLUMNS, 10);
  }
  return 80;
};
var getObject = (detail) => typeof detail === "number" ? {
  top: detail,
  right: detail * 3,
  bottom: detail,
  left: detail * 3
} : {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  ...detail
};
var getBorderWidth = (borderStyle) => borderStyle === NONE ? 0 : 2;
var getBorderChars = (borderStyle) => {
  const sides = [
    "topLeft",
    "topRight",
    "bottomRight",
    "bottomLeft",
    "left",
    "right",
    "top",
    "bottom"
  ];
  let characters;
  if (borderStyle === NONE) {
    borderStyle = {};
    for (const side of sides) {
      borderStyle[side] = "";
    }
  }
  if (typeof borderStyle === "string") {
    characters = import_cli_boxes.default[borderStyle];
    if (!characters) {
      throw new TypeError(`Invalid border style: ${borderStyle}`);
    }
  } else {
    if (typeof borderStyle?.vertical === "string") {
      borderStyle.left = borderStyle.vertical;
      borderStyle.right = borderStyle.vertical;
    }
    if (typeof borderStyle?.horizontal === "string") {
      borderStyle.top = borderStyle.horizontal;
      borderStyle.bottom = borderStyle.horizontal;
    }
    for (const side of sides) {
      if (borderStyle[side] === null || typeof borderStyle[side] !== "string") {
        throw new TypeError(`Invalid border style: ${side}`);
      }
    }
    characters = borderStyle;
  }
  return characters;
};
var makeTitle = (text, horizontal, alignment) => {
  let title = "";
  const textWidth = stringWidth(text);
  switch (alignment) {
    case "left": {
      title = text + horizontal.slice(textWidth);
      break;
    }
    case "right": {
      title = horizontal.slice(textWidth) + text;
      break;
    }
    default: {
      horizontal = horizontal.slice(textWidth);
      if (horizontal.length % 2 === 1) {
        horizontal = horizontal.slice(Math.floor(horizontal.length / 2));
        title = horizontal.slice(1) + text + horizontal;
      } else {
        horizontal = horizontal.slice(horizontal.length / 2);
        title = horizontal + text + horizontal;
      }
      break;
    }
  }
  return title;
};
var makeContentText = (text, { padding, width, textAlignment, height }) => {
  text = import_ansi_align.default(text, { align: textAlignment });
  let lines = text.split(NEWLINE);
  const textWidth = widestLine(text);
  const max = width - padding.left - padding.right;
  if (textWidth > max) {
    const newLines = [];
    for (const line of lines) {
      const createdLines = wrapAnsi(line, max, { hard: true });
      const alignedLines = import_ansi_align.default(createdLines, { align: textAlignment });
      const alignedLinesArray = alignedLines.split(`
`);
      const longestLength = Math.max(...alignedLinesArray.map((s) => stringWidth(s)));
      for (const alignedLine of alignedLinesArray) {
        let paddedLine;
        switch (textAlignment) {
          case "center": {
            paddedLine = PAD.repeat((max - longestLength) / 2) + alignedLine;
            break;
          }
          case "right": {
            paddedLine = PAD.repeat(max - longestLength) + alignedLine;
            break;
          }
          default: {
            paddedLine = alignedLine;
            break;
          }
        }
        newLines.push(paddedLine);
      }
    }
    lines = newLines;
  }
  if (textAlignment === "center" && textWidth < max) {
    lines = lines.map((line) => PAD.repeat((max - textWidth) / 2) + line);
  } else if (textAlignment === "right" && textWidth < max) {
    lines = lines.map((line) => PAD.repeat(max - textWidth) + line);
  }
  const paddingLeft = PAD.repeat(padding.left);
  const paddingRight = PAD.repeat(padding.right);
  lines = lines.map((line) => {
    const newLine = paddingLeft + line + paddingRight;
    return newLine + PAD.repeat(width - stringWidth(newLine));
  });
  if (padding.top > 0) {
    lines = [...Array.from({ length: padding.top }).fill(PAD.repeat(width)), ...lines];
  }
  if (padding.bottom > 0) {
    lines = [...lines, ...Array.from({ length: padding.bottom }).fill(PAD.repeat(width))];
  }
  if (height && lines.length > height) {
    lines = lines.slice(0, height);
  } else if (height && lines.length < height) {
    lines = [...lines, ...Array.from({ length: height - lines.length }).fill(PAD.repeat(width))];
  }
  return lines.join(NEWLINE);
};
var boxContent = (content, contentWidth, options) => {
  const colorizeBorder = (border) => {
    const newBorder = options.borderColor ? getColorFunction(options.borderColor)(border) : border;
    return options.dimBorder ? source_default.dim(newBorder) : newBorder;
  };
  const colorizeContent = (content2) => options.backgroundColor ? getBGColorFunction(options.backgroundColor)(content2) : content2;
  const chars = getBorderChars(options.borderStyle);
  const columns = terminalColumns();
  let marginLeft = PAD.repeat(options.margin.left);
  if (options.float === "center") {
    const marginWidth = Math.max((columns - contentWidth - getBorderWidth(options.borderStyle)) / 2, 0);
    marginLeft = PAD.repeat(marginWidth);
  } else if (options.float === "right") {
    const marginWidth = Math.max(columns - contentWidth - options.margin.right - getBorderWidth(options.borderStyle), 0);
    marginLeft = PAD.repeat(marginWidth);
  }
  let result = "";
  if (options.margin.top) {
    result += NEWLINE.repeat(options.margin.top);
  }
  if (options.borderStyle !== NONE || options.title) {
    result += colorizeBorder(marginLeft + chars.topLeft + (options.title ? makeTitle(options.title, chars.top.repeat(contentWidth), options.titleAlignment) : chars.top.repeat(contentWidth)) + chars.topRight) + NEWLINE;
  }
  const lines = content.split(NEWLINE);
  result += lines.map((line) => marginLeft + colorizeBorder(chars.left) + colorizeContent(line) + colorizeBorder(chars.right)).join(NEWLINE);
  if (options.borderStyle !== NONE) {
    result += NEWLINE + colorizeBorder(marginLeft + chars.bottomLeft + chars.bottom.repeat(contentWidth) + chars.bottomRight);
  }
  if (options.margin.bottom) {
    result += NEWLINE.repeat(options.margin.bottom);
  }
  return result;
};
var sanitizeOptions = (options) => {
  if (options.fullscreen && process3?.stdout) {
    let newDimensions = [process3.stdout.columns, process3.stdout.rows];
    if (typeof options.fullscreen === "function") {
      newDimensions = options.fullscreen(...newDimensions);
    }
    options.width ||= newDimensions[0];
    options.height ||= newDimensions[1];
  }
  options.width &&= Math.max(1, options.width - getBorderWidth(options.borderStyle));
  options.height &&= Math.max(1, options.height - getBorderWidth(options.borderStyle));
  return options;
};
var formatTitle = (title, borderStyle) => borderStyle === NONE ? title : ` ${title} `;
var determineDimensions = (text, options) => {
  options = sanitizeOptions(options);
  const widthOverride = options.width !== undefined;
  const columns = terminalColumns();
  const borderWidth = getBorderWidth(options.borderStyle);
  const maxWidth = columns - options.margin.left - options.margin.right - borderWidth;
  const widest = widestLine(wrapAnsi(text, columns - borderWidth, { hard: true, trim: false })) + options.padding.left + options.padding.right;
  if (options.title && widthOverride) {
    options.title = options.title.slice(0, Math.max(0, options.width - 2));
    options.title &&= formatTitle(options.title, options.borderStyle);
  } else if (options.title) {
    options.title = options.title.slice(0, Math.max(0, maxWidth - 2));
    if (options.title) {
      options.title = formatTitle(options.title, options.borderStyle);
      if (stringWidth(options.title) > widest) {
        options.width = stringWidth(options.title);
      }
    }
  }
  options.width ||= widest;
  if (!widthOverride) {
    if (options.margin.left && options.margin.right && options.width > maxWidth) {
      const spaceForMargins = columns - options.width - borderWidth;
      const multiplier = spaceForMargins / (options.margin.left + options.margin.right);
      options.margin.left = Math.max(0, Math.floor(options.margin.left * multiplier));
      options.margin.right = Math.max(0, Math.floor(options.margin.right * multiplier));
    }
    options.width = Math.min(options.width, columns - borderWidth - options.margin.left - options.margin.right);
  }
  if (options.width - (options.padding.left + options.padding.right) <= 0) {
    options.padding.left = 0;
    options.padding.right = 0;
  }
  if (options.height && options.height - (options.padding.top + options.padding.bottom) <= 0) {
    options.padding.top = 0;
    options.padding.bottom = 0;
  }
  return options;
};
var isHex = (color) => color.match(/^#(?:[0-f]{3}){1,2}$/i);
var isColorValid = (color) => typeof color === "string" && (source_default[color] ?? isHex(color));
var getColorFunction = (color) => isHex(color) ? source_default.hex(color) : source_default[color];
var getBGColorFunction = (color) => isHex(color) ? source_default.bgHex(color) : source_default[camelCase(["bg", color])];
function boxen(text, options) {
  options = {
    padding: 0,
    borderStyle: "single",
    dimBorder: false,
    textAlignment: "left",
    float: "left",
    titleAlignment: "left",
    ...options
  };
  if (options.align) {
    options.textAlignment = options.align;
  }
  if (options.borderColor && !isColorValid(options.borderColor)) {
    throw new Error(`${options.borderColor} is not a valid borderColor`);
  }
  if (options.backgroundColor && !isColorValid(options.backgroundColor)) {
    throw new Error(`${options.backgroundColor} is not a valid backgroundColor`);
  }
  options.padding = getObject(options.padding);
  options.margin = getObject(options.margin);
  options = determineDimensions(text, options);
  text = makeContentText(text, options);
  return boxContent(text, options.width, options);
}

// utils/termux.ts
import path from "node:path";
import os10 from "node:os";
import fs35 from "node:fs";
function getTermuxPrefix() {
  const prefix = process.env.PREFIX;
  if (!prefix) {
    throw new Error("PREFIX environment variable is not set");
  }
  return prefix;
}
async function ensureTermuxSetupStorage() {
  const storageDirpath = path.join(os10.homedir(), "storage");
  if (!fs35.existsSync(storageDirpath)) {
    console.error("Can't access storage directory, running termux-setup-storage...");
    await mod_default`termux-setup-storage`;
  }
}

// utils/bashrc.ts
var import_outdent = __toESM(require_lib2(), 1);
import path2 from "node:path";
import fs37 from "node:fs";
var import_update_section = __toESM(require_update_section(), 1);
async function addBashrcAliases({ username }) {
  const bashrcFilepath = path2.join(getTermuxPrefix(), "etc", "bash.bashrc");
  const bashrcContent = await fs37.promises.readFile(bashrcFilepath, "utf8");
  const newBashrcContent = import_update_section.default(bashrcContent, import_outdent.outdent`
      alias debian='proot-distro login debian --user ${username} --shared-tmp
    `, (line) => line === "# termux-xfce START", (line) => line === "# termux-xfce END");
  await fs37.promises.writeFile(bashrcFilepath, newBashrcContent);
}

// constants/dependencies.ts
var CORE_DEPENDENCIES = ["wget", "proot-distro", "x11-repo", "tur-repo", "pulseaudio", "git"];
var XFCE_PACKAGES = ["xfce4", "xfce4-goodies", "xfce4-pulseaudio-plugin", "firefox", "starship", "termux-x11-nightly", "virglrenderer-android", "mesa-vulkan-icd-freedreno-dri3", "fastfetch", "papirus-icon-theme", "eza", "bat"];

// constants/directories.ts
import os11 from "node:os";
import path3 from "node:path";
var HOME = os11.homedir();
var DEFAULT_DIRECTORIES = [
  path3.join(HOME, "Desktop"),
  path3.join(HOME, "Downloads"),
  path3.join(HOME, ".fonts"),
  path3.join(HOME, ".config"),
  path3.join(HOME, ".config/xfce4/xfconf/xfce-perchannel-xml/"),
  path3.join(HOME, ".config/autostart/"),
  path3.join(HOME, ".config/gtk-3.0/"),
  path3.join(HOME, ".config/xfce4/terminal/"),
  path3.join(HOME, ".config/xfce4/panel/"),
  path3.join(HOME, ".config/xfce4/panel/launcher-7"),
  path3.join(HOME, ".config/xfce4/panel/launcher-10"),
  path3.join(HOME, ".config/xfce4/panel/launcher-11")
];

// scripts/main.ts
import readline from "node:readline/promises";
// package.json
var package_default = {
  name: "termux-xfce",
  version: "0.0.0",
  type: "module",
  private: true,
  scripts: {
    build: "bun build scripts/main.ts --target=node --outdir=dist",
    push: "adb push dist/main.js /sdcard/Download/main.js"
  },
  devDependencies: {
    "@types/bun": "latest",
    "@types/console-clear": "^1.1.4"
  },
  peerDependencies: {
    typescript: "^5"
  },
  dependencies: {
    "@clack/prompts": "^1.0.1",
    "@inquirer/prompts": "^8.3.0",
    boxen: "^8.0.1",
    chalk: "^5.6.2",
    consola: "^3.4.2",
    "console-clear": "^1.1.1",
    dax: "^0.45.0",
    figures: "^6.1.0",
    outdent: "^0.8.0",
    "update-section": "^0.3.3"
  }
};

// node_modules/consola/dist/core.mjs
var LogLevels = {
  silent: Number.NEGATIVE_INFINITY,
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  box: 3,
  debug: 4,
  trace: 5,
  verbose: Number.POSITIVE_INFINITY
};
var LogTypes = {
  silent: {
    level: -1
  },
  fatal: {
    level: LogLevels.fatal
  },
  error: {
    level: LogLevels.error
  },
  warn: {
    level: LogLevels.warn
  },
  log: {
    level: LogLevels.log
  },
  info: {
    level: LogLevels.info
  },
  success: {
    level: LogLevels.success
  },
  fail: {
    level: LogLevels.fail
  },
  ready: {
    level: LogLevels.info
  },
  start: {
    level: LogLevels.info
  },
  box: {
    level: LogLevels.info
  },
  debug: {
    level: LogLevels.debug
  },
  trace: {
    level: LogLevels.trace
  },
  verbose: {
    level: LogLevels.verbose
  }
};
function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject$1(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === undefined) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
var defu = createDefu();
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isLogObj(arg) {
  if (!isPlainObject(arg)) {
    return false;
  }
  if (!arg.message && !arg.args) {
    return false;
  }
  if (arg.stack) {
    return false;
  }
  return true;
}
var paused = false;
var queue = [];

class Consola {
  options;
  _lastLog;
  _mockFn;
  constructor(options = {}) {
    const types = options.types || LogTypes;
    this.options = defu({
      ...options,
      defaults: { ...options.defaults },
      level: _normalizeLogLevel(options.level, types),
      reporters: [...options.reporters || []]
    }, {
      types: LogTypes,
      throttle: 1000,
      throttleMin: 5,
      formatOptions: {
        date: true,
        colors: false,
        compact: true
      }
    });
    for (const type in types) {
      const defaults = {
        type,
        ...this.options.defaults,
        ...types[type]
      };
      this[type] = this._wrapLogFn(defaults);
      this[type].raw = this._wrapLogFn(defaults, true);
    }
    if (this.options.mockFn) {
      this.mockTypes();
    }
    this._lastLog = {};
  }
  get level() {
    return this.options.level;
  }
  set level(level) {
    this.options.level = _normalizeLogLevel(level, this.options.types, this.options.level);
  }
  prompt(message, opts) {
    if (!this.options.prompt) {
      throw new Error("prompt is not supported!");
    }
    return this.options.prompt(message, opts);
  }
  create(options) {
    const instance = new Consola({
      ...this.options,
      ...options
    });
    if (this._mockFn) {
      instance.mockTypes(this._mockFn);
    }
    return instance;
  }
  withDefaults(defaults) {
    return this.create({
      ...this.options,
      defaults: {
        ...this.options.defaults,
        ...defaults
      }
    });
  }
  withTag(tag) {
    return this.withDefaults({
      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + tag : tag
    });
  }
  addReporter(reporter) {
    this.options.reporters.push(reporter);
    return this;
  }
  removeReporter(reporter) {
    if (reporter) {
      const i = this.options.reporters.indexOf(reporter);
      if (i !== -1) {
        return this.options.reporters.splice(i, 1);
      }
    } else {
      this.options.reporters.splice(0);
    }
    return this;
  }
  setReporters(reporters) {
    this.options.reporters = Array.isArray(reporters) ? reporters : [reporters];
    return this;
  }
  wrapAll() {
    this.wrapConsole();
    this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole();
    this.restoreStd();
  }
  wrapConsole() {
    for (const type in this.options.types) {
      if (!console["__" + type]) {
        console["__" + type] = console[type];
      }
      console[type] = this[type].raw;
    }
  }
  restoreConsole() {
    for (const type in this.options.types) {
      if (console["__" + type]) {
        console[type] = console["__" + type];
        delete console["__" + type];
      }
    }
  }
  wrapStd() {
    this._wrapStream(this.options.stdout, "log");
    this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(stream3, type) {
    if (!stream3) {
      return;
    }
    if (!stream3.__write) {
      stream3.__write = stream3.write;
    }
    stream3.write = (data) => {
      this[type].raw(String(data).trim());
    };
  }
  restoreStd() {
    this._restoreStream(this.options.stdout);
    this._restoreStream(this.options.stderr);
  }
  _restoreStream(stream3) {
    if (!stream3) {
      return;
    }
    if (stream3.__write) {
      stream3.write = stream3.__write;
      delete stream3.__write;
    }
  }
  pauseLogs() {
    paused = true;
  }
  resumeLogs() {
    paused = false;
    const _queue = queue.splice(0);
    for (const item of _queue) {
      item[0]._logFn(item[1], item[2]);
    }
  }
  mockTypes(mockFn) {
    const _mockFn = mockFn || this.options.mockFn;
    this._mockFn = _mockFn;
    if (typeof _mockFn !== "function") {
      return;
    }
    for (const type in this.options.types) {
      this[type] = _mockFn(type, this.options.types[type]) || this[type];
      this[type].raw = this[type];
    }
  }
  _wrapLogFn(defaults, isRaw) {
    return (...args2) => {
      if (paused) {
        queue.push([this, defaults, args2, isRaw]);
        return;
      }
      return this._logFn(defaults, args2, isRaw);
    };
  }
  _logFn(defaults, args2, isRaw) {
    if ((defaults.level || 0) > this.level) {
      return false;
    }
    const logObj = {
      date: /* @__PURE__ */ new Date,
      args: [],
      ...defaults,
      level: _normalizeLogLevel(defaults.level, this.options.types)
    };
    if (!isRaw && args2.length === 1 && isLogObj(args2[0])) {
      Object.assign(logObj, args2[0]);
    } else {
      logObj.args = [...args2];
    }
    if (logObj.message) {
      logObj.args.unshift(logObj.message);
      delete logObj.message;
    }
    if (logObj.additional) {
      if (!Array.isArray(logObj.additional)) {
        logObj.additional = logObj.additional.split(`
`);
      }
      logObj.args.push(`
` + logObj.additional.join(`
`));
      delete logObj.additional;
    }
    logObj.type = typeof logObj.type === "string" ? logObj.type.toLowerCase() : "log";
    logObj.tag = typeof logObj.tag === "string" ? logObj.tag : "";
    const resolveLog = (newLog = false) => {
      const repeated = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && repeated > 0) {
        const args22 = [...this._lastLog.object.args];
        if (repeated > 1) {
          args22.push(`(repeated ${repeated} times)`);
        }
        this._log({ ...this._lastLog.object, args: args22 });
        this._lastLog.count = 1;
      }
      if (newLog) {
        this._lastLog.object = logObj;
        this._log(logObj);
      }
    };
    clearTimeout(this._lastLog.timeout);
    const diffTime = this._lastLog.time && logObj.date ? logObj.date.getTime() - this._lastLog.time.getTime() : 0;
    this._lastLog.time = logObj.date;
    if (diffTime < this.options.throttle) {
      try {
        const serializedLog = JSON.stringify([
          logObj.type,
          logObj.tag,
          logObj.args
        ]);
        const isSameLog = this._lastLog.serialized === serializedLog;
        this._lastLog.serialized = serializedLog;
        if (isSameLog) {
          this._lastLog.count = (this._lastLog.count || 0) + 1;
          if (this._lastLog.count > this.options.throttleMin) {
            this._lastLog.timeout = setTimeout(resolveLog, this.options.throttle);
            return;
          }
        }
      } catch {}
    }
    resolveLog(true);
  }
  _log(logObj) {
    for (const reporter of this.options.reporters) {
      reporter.log(logObj, {
        options: this.options
      });
    }
  }
}
function _normalizeLogLevel(input, types = {}, defaultLevel = 3) {
  if (input === undefined) {
    return defaultLevel;
  }
  if (typeof input === "number") {
    return input;
  }
  if (types[input] && types[input].level !== undefined) {
    return types[input].level;
  }
  return defaultLevel;
}
Consola.prototype.add = Consola.prototype.addReporter;
Consola.prototype.remove = Consola.prototype.removeReporter;
Consola.prototype.clear = Consola.prototype.removeReporter;
Consola.prototype.withScope = Consola.prototype.withTag;
Consola.prototype.mock = Consola.prototype.mockTypes;
Consola.prototype.pause = Consola.prototype.pauseLogs;
Consola.prototype.resume = Consola.prototype.resumeLogs;
function createConsola(options = {}) {
  return new Consola(options);
}
// node_modules/consola/dist/shared/consola.DRwqZj3T.mjs
import { formatWithOptions } from "node:util";
import { sep } from "node:path";
function parseStack(stack, message) {
  const cwd2 = process.cwd() + sep;
  const lines = stack.split(`
`).splice(message.split(`
`).length).map((l) => l.trim().replace("file://", "").replace(cwd2, ""));
  return lines;
}
function writeStream(data, stream3) {
  const write3 = stream3.__write || stream3.write;
  return write3.call(stream3, data);
}
var bracket = (x) => x ? `[${x}]` : "";

class BasicReporter {
  formatStack(stack, message, opts) {
    const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
    return indent + parseStack(stack, message).join(`
${indent}`);
  }
  formatError(err, opts) {
    const message = err.message ?? formatWithOptions(opts, err);
    const stack = err.stack ? this.formatStack(err.stack, message, opts) : "";
    const level = opts?.errorLevel || 0;
    const causedPrefix = level > 0 ? `${"  ".repeat(level)}[cause]: ` : "";
    const causedError = err.cause ? `

` + this.formatError(err.cause, { ...opts, errorLevel: level + 1 }) : "";
    return causedPrefix + message + `
` + stack + causedError;
  }
  formatArgs(args2, opts) {
    const _args = args2.map((arg) => {
      if (arg && typeof arg.stack === "string") {
        return this.formatError(arg, opts);
      }
      return arg;
    });
    return formatWithOptions(opts, ..._args);
  }
  formatDate(date, opts) {
    return opts.date ? date.toLocaleTimeString() : "";
  }
  filterAndJoin(arr) {
    return arr.filter(Boolean).join(" ");
  }
  formatLogObj(logObj, opts) {
    const message = this.formatArgs(logObj.args, opts);
    if (logObj.type === "box") {
      return `
` + [
        bracket(logObj.tag),
        logObj.title && logObj.title,
        ...message.split(`
`)
      ].filter(Boolean).map((l) => " > " + l).join(`
`) + `
`;
    }
    return this.filterAndJoin([
      bracket(logObj.type),
      bracket(logObj.tag),
      message
    ]);
  }
  log(logObj, ctx) {
    const line = this.formatLogObj(logObj, {
      columns: ctx.options.stdout.columns || 0,
      ...ctx.options.formatOptions
    });
    return writeStream(line + `
`, logObj.level < 2 ? ctx.options.stderr || process.stderr : ctx.options.stdout || process.stdout);
  }
}

// node_modules/consola/dist/index.mjs
import g$1 from "node:process";

// node_modules/consola/dist/shared/consola.DXBYu-KD.mjs
import * as tty3 from "node:tty";
var {
  env: env3 = {},
  argv = [],
  platform: platform6 = ""
} = typeof process === "undefined" ? {} : process;
var isDisabled = "NO_COLOR" in env3 || argv.includes("--no-color");
var isForced = "FORCE_COLOR" in env3 || argv.includes("--color");
var isWindows3 = platform6 === "win32";
var isDumbTerminal = env3.TERM === "dumb";
var isCompatibleTerminal = tty3 && tty3.isatty && tty3.isatty(1) && env3.TERM && !isDumbTerminal;
var isCI = "CI" in env3 && (("GITHUB_ACTIONS" in env3) || ("GITLAB_CI" in env3) || ("CIRCLECI" in env3));
var isColorSupported = !isDisabled && (isForced || isWindows3 && !isDumbTerminal || isCompatibleTerminal || isCI);
function replaceClose(index, string, close2, replace, head = string.slice(0, Math.max(0, index)) + replace, tail = string.slice(Math.max(0, index + close2.length)), next = tail.indexOf(close2)) {
  return head + (next < 0 ? tail : replaceClose(next, tail, close2, replace));
}
function clearBleed(index, string, open3, close2, replace) {
  return index < 0 ? open3 + string + close2 : open3 + replaceClose(index, string, close2, replace) + close2;
}
function filterEmpty(open3, close2, replace = open3, at = open3.length + 1) {
  return (string) => string || !(string === "" || string === undefined) ? clearBleed(("" + string).indexOf(close2, at), string, open3, close2, replace) : "";
}
function init(open3, close2, replace) {
  return filterEmpty(`\x1B[${open3}m`, `\x1B[${close2}m`, replace);
}
var colorDefs = {
  reset: init(0, 0),
  bold: init(1, 22, "\x1B[22m\x1B[1m"),
  dim: init(2, 22, "\x1B[22m\x1B[2m"),
  italic: init(3, 23),
  underline: init(4, 24),
  inverse: init(7, 27),
  hidden: init(8, 28),
  strikethrough: init(9, 29),
  black: init(30, 39),
  red: init(31, 39),
  green: init(32, 39),
  yellow: init(33, 39),
  blue: init(34, 39),
  magenta: init(35, 39),
  cyan: init(36, 39),
  white: init(37, 39),
  gray: init(90, 39),
  bgBlack: init(40, 49),
  bgRed: init(41, 49),
  bgGreen: init(42, 49),
  bgYellow: init(43, 49),
  bgBlue: init(44, 49),
  bgMagenta: init(45, 49),
  bgCyan: init(46, 49),
  bgWhite: init(47, 49),
  blackBright: init(90, 39),
  redBright: init(91, 39),
  greenBright: init(92, 39),
  yellowBright: init(93, 39),
  blueBright: init(94, 39),
  magentaBright: init(95, 39),
  cyanBright: init(96, 39),
  whiteBright: init(97, 39),
  bgBlackBright: init(100, 49),
  bgRedBright: init(101, 49),
  bgGreenBright: init(102, 49),
  bgYellowBright: init(103, 49),
  bgBlueBright: init(104, 49),
  bgMagentaBright: init(105, 49),
  bgCyanBright: init(106, 49),
  bgWhiteBright: init(107, 49)
};
function createColors(useColor = isColorSupported) {
  return useColor ? colorDefs : Object.fromEntries(Object.keys(colorDefs).map((key) => [key, String]));
}
var colors = createColors();
function getColor(color, fallback = "reset") {
  return colors[color] || colors[fallback];
}
var ansiRegex2 = [
  String.raw`[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)`,
  String.raw`(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))`
].join("|");
function stripAnsi2(text) {
  return text.replace(new RegExp(ansiRegex2, "g"), "");
}
var boxStylePresets = {
  solid: {
    tl: "┌",
    tr: "┐",
    bl: "└",
    br: "┘",
    h: "─",
    v: "│"
  },
  double: {
    tl: "╔",
    tr: "╗",
    bl: "╚",
    br: "╝",
    h: "═",
    v: "║"
  },
  doubleSingle: {
    tl: "╓",
    tr: "╖",
    bl: "╙",
    br: "╜",
    h: "─",
    v: "║"
  },
  doubleSingleRounded: {
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯",
    h: "─",
    v: "║"
  },
  singleThick: {
    tl: "┏",
    tr: "┓",
    bl: "┗",
    br: "┛",
    h: "━",
    v: "┃"
  },
  singleDouble: {
    tl: "╒",
    tr: "╕",
    bl: "╘",
    br: "╛",
    h: "═",
    v: "│"
  },
  singleDoubleRounded: {
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯",
    h: "═",
    v: "│"
  },
  rounded: {
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯",
    h: "─",
    v: "│"
  }
};
var defaultStyle = {
  borderColor: "white",
  borderStyle: "rounded",
  valign: "center",
  padding: 2,
  marginLeft: 1,
  marginTop: 1,
  marginBottom: 1
};
function box(text, _opts = {}) {
  const opts = {
    ..._opts,
    style: {
      ...defaultStyle,
      ..._opts.style
    }
  };
  const textLines = text.split(`
`);
  const boxLines = [];
  const _color = getColor(opts.style.borderColor);
  const borderStyle = {
    ...typeof opts.style.borderStyle === "string" ? boxStylePresets[opts.style.borderStyle] || boxStylePresets.solid : opts.style.borderStyle
  };
  if (_color) {
    for (const key in borderStyle) {
      borderStyle[key] = _color(borderStyle[key]);
    }
  }
  const paddingOffset = opts.style.padding % 2 === 0 ? opts.style.padding : opts.style.padding + 1;
  const height = textLines.length + paddingOffset;
  const width = Math.max(...textLines.map((line) => stripAnsi2(line).length), opts.title ? stripAnsi2(opts.title).length : 0) + paddingOffset;
  const widthOffset = width + paddingOffset;
  const leftSpace = opts.style.marginLeft > 0 ? " ".repeat(opts.style.marginLeft) : "";
  if (opts.style.marginTop > 0) {
    boxLines.push("".repeat(opts.style.marginTop));
  }
  if (opts.title) {
    const title = _color ? _color(opts.title) : opts.title;
    const left = borderStyle.h.repeat(Math.floor((width - stripAnsi2(opts.title).length) / 2));
    const right = borderStyle.h.repeat(width - stripAnsi2(opts.title).length - stripAnsi2(left).length + paddingOffset);
    boxLines.push(`${leftSpace}${borderStyle.tl}${left}${title}${right}${borderStyle.tr}`);
  } else {
    boxLines.push(`${leftSpace}${borderStyle.tl}${borderStyle.h.repeat(widthOffset)}${borderStyle.tr}`);
  }
  const valignOffset = opts.style.valign === "center" ? Math.floor((height - textLines.length) / 2) : opts.style.valign === "top" ? height - textLines.length - paddingOffset : height - textLines.length;
  for (let i = 0;i < height; i++) {
    if (i < valignOffset || i >= valignOffset + textLines.length) {
      boxLines.push(`${leftSpace}${borderStyle.v}${" ".repeat(widthOffset)}${borderStyle.v}`);
    } else {
      const line = textLines[i - valignOffset];
      const left = " ".repeat(paddingOffset);
      const right = " ".repeat(width - stripAnsi2(line).length);
      boxLines.push(`${leftSpace}${borderStyle.v}${left}${line}${right}${borderStyle.v}`);
    }
  }
  boxLines.push(`${leftSpace}${borderStyle.bl}${borderStyle.h.repeat(widthOffset)}${borderStyle.br}`);
  if (opts.style.marginBottom > 0) {
    boxLines.push("".repeat(opts.style.marginBottom));
  }
  return boxLines.join(`
`);
}

// node_modules/consola/dist/index.mjs
var r2 = Object.create(null);
var i = (e2) => globalThis.process?.env || import.meta.env || globalThis.Deno?.env.toObject() || globalThis.__env__ || (e2 ? r2 : globalThis);
var o2 = new Proxy(r2, { get(e2, s) {
  return i()[s] ?? r2[s];
}, has(e2, s) {
  const E = i();
  return s in E || s in r2;
}, set(e2, s, E) {
  const B2 = i(true);
  return B2[s] = E, true;
}, deleteProperty(e2, s) {
  if (!s)
    return false;
  const E = i(true);
  return delete E[s], true;
}, ownKeys() {
  const e2 = i(true);
  return Object.keys(e2);
} });
var t = typeof process < "u" && process.env && "development" || "";
var f2 = [["APPVEYOR"], ["AWS_AMPLIFY", "AWS_APP_ID", { ci: true }], ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"], ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"], ["APPCIRCLE", "AC_APPCIRCLE"], ["BAMBOO", "bamboo_planKey"], ["BITBUCKET", "BITBUCKET_COMMIT"], ["BITRISE", "BITRISE_IO"], ["BUDDY", "BUDDY_WORKSPACE_ID"], ["BUILDKITE"], ["CIRCLE", "CIRCLECI"], ["CIRRUS", "CIRRUS_CI"], ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }], ["CODEBUILD", "CODEBUILD_BUILD_ARN"], ["CODEFRESH", "CF_BUILD_ID"], ["DRONE"], ["DRONE", "DRONE_BUILD_EVENT"], ["DSARI"], ["GITHUB_ACTIONS"], ["GITLAB", "GITLAB_CI"], ["GITLAB", "CI_MERGE_REQUEST_ID"], ["GOCD", "GO_PIPELINE_LABEL"], ["LAYERCI"], ["HUDSON", "HUDSON_URL"], ["JENKINS", "JENKINS_URL"], ["MAGNUM"], ["NETLIFY"], ["NETLIFY", "NETLIFY_LOCAL", { ci: false }], ["NEVERCODE"], ["RENDER"], ["SAIL", "SAILCI"], ["SEMAPHORE"], ["SCREWDRIVER"], ["SHIPPABLE"], ["SOLANO", "TDDIUM"], ["STRIDER"], ["TEAMCITY", "TEAMCITY_VERSION"], ["TRAVIS"], ["VERCEL", "NOW_BUILDER"], ["VERCEL", "VERCEL", { ci: false }], ["VERCEL", "VERCEL_ENV", { ci: false }], ["APPCENTER", "APPCENTER_BUILD_ID"], ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }], ["CODESANDBOX", "CODESANDBOX_HOST", { ci: false }], ["STACKBLITZ"], ["STORMKIT"], ["CLEAVR"], ["ZEABUR"], ["CODESPHERE", "CODESPHERE_APP_ID", { ci: true }], ["RAILWAY", "RAILWAY_PROJECT_ID"], ["RAILWAY", "RAILWAY_SERVICE_ID"], ["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"], ["FIREBASE_APP_HOSTING", "FIREBASE_APP_HOSTING", { ci: true }]];
function b() {
  if (globalThis.process?.env)
    for (const e2 of f2) {
      const s = e2[1] || e2[0];
      if (globalThis.process?.env[s])
        return { name: e2[0].toLowerCase(), ...e2[2] };
    }
  return globalThis.process?.env?.SHELL === "/bin/jsh" && globalThis.process?.versions?.webcontainer ? { name: "stackblitz", ci: false } : { name: "", ci: false };
}
var l = b();
l.name;
function n(e2) {
  return e2 ? e2 !== "false" : false;
}
var I2 = globalThis.process?.platform || "";
var T2 = n(o2.CI) || l.ci !== false;
var a = n(globalThis.process?.stdout && globalThis.process?.stdout.isTTY);
var g2 = n(o2.DEBUG);
var R2 = t === "test" || n(o2.TEST);
n(o2.MINIMAL);
var A2 = /^win/i.test(I2);
!n(o2.NO_COLOR) && (n(o2.FORCE_COLOR) || (a || A2) && o2.TERM);
var C2 = (globalThis.process?.versions?.node || "").replace(/^v/, "") || null;
Number(C2?.split(".")[0]);
var y2 = globalThis.process || Object.create(null);
var _2 = { versions: {} };
new Proxy(y2, { get(e2, s) {
  if (s === "env")
    return o2;
  if (s in e2)
    return e2[s];
  if (s in _2)
    return _2[s];
} });
var c2 = globalThis.process?.release?.name === "node";
var O2 = !!globalThis.Bun || !!globalThis.process?.versions?.bun;
var D = !!globalThis.Deno;
var L2 = !!globalThis.fastly;
var S2 = !!globalThis.Netlify;
var u2 = !!globalThis.EdgeRuntime;
var N2 = globalThis.navigator?.userAgent === "Cloudflare-Workers";
var F2 = [[S2, "netlify"], [u2, "edge-light"], [N2, "workerd"], [L2, "fastly"], [D, "deno"], [O2, "bun"], [c2, "node"]];
function G2() {
  const e2 = F2.find((s) => s[0]);
  if (e2)
    return { name: e2[1] };
}
var P2 = G2();
P2?.name;
function ansiRegex3({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const pattern = [
    `[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?${ST})`,
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? undefined : "g");
}
var regex2 = ansiRegex3();
function stripAnsi3(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex2, "");
}
function isAmbiguous2(x2) {
  return x2 === 161 || x2 === 164 || x2 === 167 || x2 === 168 || x2 === 170 || x2 === 173 || x2 === 174 || x2 >= 176 && x2 <= 180 || x2 >= 182 && x2 <= 186 || x2 >= 188 && x2 <= 191 || x2 === 198 || x2 === 208 || x2 === 215 || x2 === 216 || x2 >= 222 && x2 <= 225 || x2 === 230 || x2 >= 232 && x2 <= 234 || x2 === 236 || x2 === 237 || x2 === 240 || x2 === 242 || x2 === 243 || x2 >= 247 && x2 <= 250 || x2 === 252 || x2 === 254 || x2 === 257 || x2 === 273 || x2 === 275 || x2 === 283 || x2 === 294 || x2 === 295 || x2 === 299 || x2 >= 305 && x2 <= 307 || x2 === 312 || x2 >= 319 && x2 <= 322 || x2 === 324 || x2 >= 328 && x2 <= 331 || x2 === 333 || x2 === 338 || x2 === 339 || x2 === 358 || x2 === 359 || x2 === 363 || x2 === 462 || x2 === 464 || x2 === 466 || x2 === 468 || x2 === 470 || x2 === 472 || x2 === 474 || x2 === 476 || x2 === 593 || x2 === 609 || x2 === 708 || x2 === 711 || x2 >= 713 && x2 <= 715 || x2 === 717 || x2 === 720 || x2 >= 728 && x2 <= 731 || x2 === 733 || x2 === 735 || x2 >= 768 && x2 <= 879 || x2 >= 913 && x2 <= 929 || x2 >= 931 && x2 <= 937 || x2 >= 945 && x2 <= 961 || x2 >= 963 && x2 <= 969 || x2 === 1025 || x2 >= 1040 && x2 <= 1103 || x2 === 1105 || x2 === 8208 || x2 >= 8211 && x2 <= 8214 || x2 === 8216 || x2 === 8217 || x2 === 8220 || x2 === 8221 || x2 >= 8224 && x2 <= 8226 || x2 >= 8228 && x2 <= 8231 || x2 === 8240 || x2 === 8242 || x2 === 8243 || x2 === 8245 || x2 === 8251 || x2 === 8254 || x2 === 8308 || x2 === 8319 || x2 >= 8321 && x2 <= 8324 || x2 === 8364 || x2 === 8451 || x2 === 8453 || x2 === 8457 || x2 === 8467 || x2 === 8470 || x2 === 8481 || x2 === 8482 || x2 === 8486 || x2 === 8491 || x2 === 8531 || x2 === 8532 || x2 >= 8539 && x2 <= 8542 || x2 >= 8544 && x2 <= 8555 || x2 >= 8560 && x2 <= 8569 || x2 === 8585 || x2 >= 8592 && x2 <= 8601 || x2 === 8632 || x2 === 8633 || x2 === 8658 || x2 === 8660 || x2 === 8679 || x2 === 8704 || x2 === 8706 || x2 === 8707 || x2 === 8711 || x2 === 8712 || x2 === 8715 || x2 === 8719 || x2 === 8721 || x2 === 8725 || x2 === 8730 || x2 >= 8733 && x2 <= 8736 || x2 === 8739 || x2 === 8741 || x2 >= 8743 && x2 <= 8748 || x2 === 8750 || x2 >= 8756 && x2 <= 8759 || x2 === 8764 || x2 === 8765 || x2 === 8776 || x2 === 8780 || x2 === 8786 || x2 === 8800 || x2 === 8801 || x2 >= 8804 && x2 <= 8807 || x2 === 8810 || x2 === 8811 || x2 === 8814 || x2 === 8815 || x2 === 8834 || x2 === 8835 || x2 === 8838 || x2 === 8839 || x2 === 8853 || x2 === 8857 || x2 === 8869 || x2 === 8895 || x2 === 8978 || x2 >= 9312 && x2 <= 9449 || x2 >= 9451 && x2 <= 9547 || x2 >= 9552 && x2 <= 9587 || x2 >= 9600 && x2 <= 9615 || x2 >= 9618 && x2 <= 9621 || x2 === 9632 || x2 === 9633 || x2 >= 9635 && x2 <= 9641 || x2 === 9650 || x2 === 9651 || x2 === 9654 || x2 === 9655 || x2 === 9660 || x2 === 9661 || x2 === 9664 || x2 === 9665 || x2 >= 9670 && x2 <= 9672 || x2 === 9675 || x2 >= 9678 && x2 <= 9681 || x2 >= 9698 && x2 <= 9701 || x2 === 9711 || x2 === 9733 || x2 === 9734 || x2 === 9737 || x2 === 9742 || x2 === 9743 || x2 === 9756 || x2 === 9758 || x2 === 9792 || x2 === 9794 || x2 === 9824 || x2 === 9825 || x2 >= 9827 && x2 <= 9829 || x2 >= 9831 && x2 <= 9834 || x2 === 9836 || x2 === 9837 || x2 === 9839 || x2 === 9886 || x2 === 9887 || x2 === 9919 || x2 >= 9926 && x2 <= 9933 || x2 >= 9935 && x2 <= 9939 || x2 >= 9941 && x2 <= 9953 || x2 === 9955 || x2 === 9960 || x2 === 9961 || x2 >= 9963 && x2 <= 9969 || x2 === 9972 || x2 >= 9974 && x2 <= 9977 || x2 === 9979 || x2 === 9980 || x2 === 9982 || x2 === 9983 || x2 === 10045 || x2 >= 10102 && x2 <= 10111 || x2 >= 11094 && x2 <= 11097 || x2 >= 12872 && x2 <= 12879 || x2 >= 57344 && x2 <= 63743 || x2 >= 65024 && x2 <= 65039 || x2 === 65533 || x2 >= 127232 && x2 <= 127242 || x2 >= 127248 && x2 <= 127277 || x2 >= 127280 && x2 <= 127337 || x2 >= 127344 && x2 <= 127373 || x2 === 127375 || x2 === 127376 || x2 >= 127387 && x2 <= 127404 || x2 >= 917760 && x2 <= 917999 || x2 >= 983040 && x2 <= 1048573 || x2 >= 1048576 && x2 <= 1114109;
}
function isFullWidth2(x2) {
  return x2 === 12288 || x2 >= 65281 && x2 <= 65376 || x2 >= 65504 && x2 <= 65510;
}
function isWide2(x2) {
  return x2 >= 4352 && x2 <= 4447 || x2 === 8986 || x2 === 8987 || x2 === 9001 || x2 === 9002 || x2 >= 9193 && x2 <= 9196 || x2 === 9200 || x2 === 9203 || x2 === 9725 || x2 === 9726 || x2 === 9748 || x2 === 9749 || x2 >= 9776 && x2 <= 9783 || x2 >= 9800 && x2 <= 9811 || x2 === 9855 || x2 >= 9866 && x2 <= 9871 || x2 === 9875 || x2 === 9889 || x2 === 9898 || x2 === 9899 || x2 === 9917 || x2 === 9918 || x2 === 9924 || x2 === 9925 || x2 === 9934 || x2 === 9940 || x2 === 9962 || x2 === 9970 || x2 === 9971 || x2 === 9973 || x2 === 9978 || x2 === 9981 || x2 === 9989 || x2 === 9994 || x2 === 9995 || x2 === 10024 || x2 === 10060 || x2 === 10062 || x2 >= 10067 && x2 <= 10069 || x2 === 10071 || x2 >= 10133 && x2 <= 10135 || x2 === 10160 || x2 === 10175 || x2 === 11035 || x2 === 11036 || x2 === 11088 || x2 === 11093 || x2 >= 11904 && x2 <= 11929 || x2 >= 11931 && x2 <= 12019 || x2 >= 12032 && x2 <= 12245 || x2 >= 12272 && x2 <= 12287 || x2 >= 12289 && x2 <= 12350 || x2 >= 12353 && x2 <= 12438 || x2 >= 12441 && x2 <= 12543 || x2 >= 12549 && x2 <= 12591 || x2 >= 12593 && x2 <= 12686 || x2 >= 12688 && x2 <= 12773 || x2 >= 12783 && x2 <= 12830 || x2 >= 12832 && x2 <= 12871 || x2 >= 12880 && x2 <= 42124 || x2 >= 42128 && x2 <= 42182 || x2 >= 43360 && x2 <= 43388 || x2 >= 44032 && x2 <= 55203 || x2 >= 63744 && x2 <= 64255 || x2 >= 65040 && x2 <= 65049 || x2 >= 65072 && x2 <= 65106 || x2 >= 65108 && x2 <= 65126 || x2 >= 65128 && x2 <= 65131 || x2 >= 94176 && x2 <= 94180 || x2 === 94192 || x2 === 94193 || x2 >= 94208 && x2 <= 100343 || x2 >= 100352 && x2 <= 101589 || x2 >= 101631 && x2 <= 101640 || x2 >= 110576 && x2 <= 110579 || x2 >= 110581 && x2 <= 110587 || x2 === 110589 || x2 === 110590 || x2 >= 110592 && x2 <= 110882 || x2 === 110898 || x2 >= 110928 && x2 <= 110930 || x2 === 110933 || x2 >= 110948 && x2 <= 110951 || x2 >= 110960 && x2 <= 111355 || x2 >= 119552 && x2 <= 119638 || x2 >= 119648 && x2 <= 119670 || x2 === 126980 || x2 === 127183 || x2 === 127374 || x2 >= 127377 && x2 <= 127386 || x2 >= 127488 && x2 <= 127490 || x2 >= 127504 && x2 <= 127547 || x2 >= 127552 && x2 <= 127560 || x2 === 127568 || x2 === 127569 || x2 >= 127584 && x2 <= 127589 || x2 >= 127744 && x2 <= 127776 || x2 >= 127789 && x2 <= 127797 || x2 >= 127799 && x2 <= 127868 || x2 >= 127870 && x2 <= 127891 || x2 >= 127904 && x2 <= 127946 || x2 >= 127951 && x2 <= 127955 || x2 >= 127968 && x2 <= 127984 || x2 === 127988 || x2 >= 127992 && x2 <= 128062 || x2 === 128064 || x2 >= 128066 && x2 <= 128252 || x2 >= 128255 && x2 <= 128317 || x2 >= 128331 && x2 <= 128334 || x2 >= 128336 && x2 <= 128359 || x2 === 128378 || x2 === 128405 || x2 === 128406 || x2 === 128420 || x2 >= 128507 && x2 <= 128591 || x2 >= 128640 && x2 <= 128709 || x2 === 128716 || x2 >= 128720 && x2 <= 128722 || x2 >= 128725 && x2 <= 128727 || x2 >= 128732 && x2 <= 128735 || x2 === 128747 || x2 === 128748 || x2 >= 128756 && x2 <= 128764 || x2 >= 128992 && x2 <= 129003 || x2 === 129008 || x2 >= 129292 && x2 <= 129338 || x2 >= 129340 && x2 <= 129349 || x2 >= 129351 && x2 <= 129535 || x2 >= 129648 && x2 <= 129660 || x2 >= 129664 && x2 <= 129673 || x2 >= 129679 && x2 <= 129734 || x2 >= 129742 && x2 <= 129756 || x2 >= 129759 && x2 <= 129769 || x2 >= 129776 && x2 <= 129784 || x2 >= 131072 && x2 <= 196605 || x2 >= 196608 && x2 <= 262141;
}
function validate2(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth2(codePoint, { ambiguousAsWide = false } = {}) {
  validate2(codePoint);
  if (isFullWidth2(codePoint) || isWide2(codePoint) || ambiguousAsWide && isAmbiguous2(codePoint)) {
    return 2;
  }
  return 1;
}
var emojiRegex2 = () => {
  return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
};
var segmenter2 = globalThis.Intl?.Segmenter ? new Intl.Segmenter : { segment: (str) => str.split("") };
var defaultIgnorableCodePointRegex2 = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth$1(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi3(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter2.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex2.test(character)) {
      continue;
    }
    if (emojiRegex2().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth2(codePoint, eastAsianWidthOptions);
  }
  return width;
}
function isUnicodeSupported() {
  const { env: env4 } = g$1;
  const { TERM, TERM_PROGRAM } = env4;
  if (g$1.platform !== "win32") {
    return TERM !== "linux";
  }
  return Boolean(env4.WT_SESSION) || Boolean(env4.TERMINUS_SUBLIME) || env4.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env4.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var TYPE_COLOR_MAP = {
  info: "cyan",
  fail: "red",
  success: "green",
  ready: "green",
  start: "magenta"
};
var LEVEL_COLOR_MAP = {
  0: "red",
  1: "yellow"
};
var unicode = isUnicodeSupported();
var s = (c3, fallback) => unicode ? c3 : fallback;
var TYPE_ICONS = {
  error: s("✖", "×"),
  fatal: s("✖", "×"),
  ready: s("✔", "√"),
  warn: s("⚠", "‼"),
  info: s("ℹ", "i"),
  success: s("✔", "√"),
  debug: s("⚙", "D"),
  trace: s("→", "→"),
  fail: s("✖", "×"),
  start: s("◐", "o"),
  log: ""
};
function stringWidth2(str) {
  const hasICU = typeof Intl === "object";
  if (!hasICU || !Intl.Segmenter) {
    return stripAnsi2(str).length;
  }
  return stringWidth$1(str);
}

class FancyReporter extends BasicReporter {
  formatStack(stack, message, opts) {
    const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
    return `
${indent}` + parseStack(stack, message).map((line) => "  " + line.replace(/^at +/, (m2) => colors.gray(m2)).replace(/\((.+)\)/, (_3, m2) => `(${colors.cyan(m2)})`)).join(`
${indent}`);
  }
  formatType(logObj, isBadge, opts) {
    const typeColor = TYPE_COLOR_MAP[logObj.type] || LEVEL_COLOR_MAP[logObj.level] || "gray";
    if (isBadge) {
      return getBgColor(typeColor)(colors.black(` ${logObj.type.toUpperCase()} `));
    }
    const _type = typeof TYPE_ICONS[logObj.type] === "string" ? TYPE_ICONS[logObj.type] : logObj.icon || logObj.type;
    return _type ? getColor2(typeColor)(_type) : "";
  }
  formatLogObj(logObj, opts) {
    const [message, ...additional] = this.formatArgs(logObj.args, opts).split(`
`);
    if (logObj.type === "box") {
      return box(characterFormat(message + (additional.length > 0 ? `
` + additional.join(`
`) : "")), {
        title: logObj.title ? characterFormat(logObj.title) : undefined,
        style: logObj.style
      });
    }
    const date = this.formatDate(logObj.date, opts);
    const coloredDate = date && colors.gray(date);
    const isBadge = logObj.badge ?? logObj.level < 2;
    const type = this.formatType(logObj, isBadge, opts);
    const tag = logObj.tag ? colors.gray(logObj.tag) : "";
    let line;
    const left = this.filterAndJoin([type, characterFormat(message)]);
    const right = this.filterAndJoin(opts.columns ? [tag, coloredDate] : [tag]);
    const space = (opts.columns || 0) - stringWidth2(left) - stringWidth2(right) - 2;
    line = space > 0 && (opts.columns || 0) >= 80 ? left + " ".repeat(space) + right : (right ? `${colors.gray(`[${right}]`)} ` : "") + left;
    line += characterFormat(additional.length > 0 ? `
` + additional.join(`
`) : "");
    if (logObj.type === "trace") {
      const _err = new Error("Trace: " + logObj.message);
      line += this.formatStack(_err.stack || "", _err.message);
    }
    return isBadge ? `
` + line + `
` : line;
  }
}
function characterFormat(str) {
  return str.replace(/`([^`]+)`/gm, (_3, m2) => colors.cyan(m2)).replace(/\s+_([^_]+)_\s+/gm, (_3, m2) => ` ${colors.underline(m2)} `);
}
function getColor2(color = "white") {
  return colors[color] || colors.white;
}
function getBgColor(color = "bgWhite") {
  return colors[`bg${color[0].toUpperCase()}${color.slice(1)}`] || colors.bgWhite;
}
function createConsola2(options = {}) {
  let level = _getDefaultLogLevel();
  if (process.env.CONSOLA_LEVEL) {
    level = Number.parseInt(process.env.CONSOLA_LEVEL) ?? level;
  }
  const consola2 = createConsola({
    level,
    defaults: { level },
    stdout: process.stdout,
    stderr: process.stderr,
    prompt: (...args2) => Promise.resolve().then(() => (init_prompt(), exports_prompt)).then((m2) => m2.prompt(...args2)),
    reporters: options.reporters || [
      options.fancy ?? !(T2 || R2) ? new FancyReporter : new BasicReporter
    ],
    ...options
  });
  return consola2;
}
function _getDefaultLogLevel() {
  if (g2) {
    return LogLevels.debug;
  }
  if (R2) {
    return LogLevels.warn;
  }
  return LogLevels.info;
}
var consola = createConsola2();

// scripts/main.ts
console.log(`Version ${package_default.version}`);
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(boxen("XFCE Desktop Installation", { borderStyle: "double" }));
consola.info("System Compatibility Check");
var systemCheckResults = await getSystemCheckResults();
var username = await rl.question("Please enter username for proot installation: ");
consola.start("Ensuring Termux storage access is granted...");
await ensureTermuxSetupStorage();
consola.start("Upgrading packages...");
if ((await pkgUpgrade()).code !== 0) {
  console.error("Failed to upgrade packages, exiting...");
  process.exit(1);
}
consola.start("Installing core dependencies...");
await pkgInstall(CORE_DEPENDENCIES);
consola.start("Creating default directories...");
for (const directory of DEFAULT_DIRECTORIES) {
  fs38.mkdirSync(directory, { recursive: true });
}
consola.start("Installing XFCE dependencies...");
await pkgInstall(XFCE_PACKAGES);
consola.start("Adding aliases to .bashrc...");
await addBashrcAliases({ username });
