var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
(function() {
  const y = document.createElement("link").relList;
  if (y && y.supports && y.supports("modulepreload")) return;
  for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) p(_);
  new MutationObserver((_) => {
    for (const D of _) if (D.type === "childList") for (const N of D.addedNodes) N.tagName === "LINK" && N.rel === "modulepreload" && p(N);
  }).observe(document, { childList: true, subtree: true });
  function S(_) {
    const D = {};
    return _.integrity && (D.integrity = _.integrity), _.referrerPolicy && (D.referrerPolicy = _.referrerPolicy), _.crossOrigin === "use-credentials" ? D.credentials = "include" : _.crossOrigin === "anonymous" ? D.credentials = "omit" : D.credentials = "same-origin", D;
  }
  function p(_) {
    if (_.ep) return;
    _.ep = true;
    const D = S(_);
    fetch(_.href, D);
  }
})();
function l0(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
function Gm(m) {
  if (Object.prototype.hasOwnProperty.call(m, "__esModule")) return m;
  var y = m.default;
  if (typeof y == "function") {
    var S = function p() {
      var _ = false;
      try {
        _ = this instanceof p;
      } catch {
      }
      return _ ? Reflect.construct(y, arguments, this.constructor) : y.apply(this, arguments);
    };
    S.prototype = y.prototype;
  } else S = {};
  return Object.defineProperty(S, "__esModule", { value: true }), Object.keys(m).forEach(function(p) {
    var _ = Object.getOwnPropertyDescriptor(m, p);
    Object.defineProperty(S, p, _.get ? _ : { enumerable: true, get: function() {
      return m[p];
    } });
  }), S;
}
var dc = { exports: {} }, Ds = {};
var gm;
function n0() {
  if (gm) return Ds;
  gm = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.fragment");
  function S(p, _, D) {
    var N = null;
    if (D !== void 0 && (N = "" + D), _.key !== void 0 && (N = "" + _.key), "key" in _) {
      D = {};
      for (var U in _) U !== "key" && (D[U] = _[U]);
    } else D = _;
    return _ = D.ref, { $$typeof: m, type: p, key: N, ref: _ !== void 0 ? _ : null, props: D };
  }
  return Ds.Fragment = y, Ds.jsx = S, Ds.jsxs = S, Ds;
}
var ym;
function a0() {
  return ym || (ym = 1, dc.exports = n0()), dc.exports;
}
var h = a0(), gc = { exports: {} }, Fe = {};
var pm;
function s0() {
  if (pm) return Fe;
  pm = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), p = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.consumer"), N = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), L = /* @__PURE__ */ Symbol.for("react.activity"), F = Symbol.iterator;
  function ue(j) {
    return j === null || typeof j != "object" ? null : (j = F && j[F] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var he = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ce = Object.assign, I = {};
  function ve(j, O, se) {
    this.props = j, this.context = O, this.refs = I, this.updater = se || he;
  }
  ve.prototype.isReactComponent = {}, ve.prototype.setState = function(j, O) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, O, "setState");
  }, ve.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function we() {
  }
  we.prototype = ve.prototype;
  function xe(j, O, se) {
    this.props = j, this.context = O, this.refs = I, this.updater = se || he;
  }
  var Je = xe.prototype = new we();
  Je.constructor = xe, ce(Je, ve.prototype), Je.isPureReactComponent = true;
  var Ne = Array.isArray;
  function P() {
  }
  var pe = { H: null, A: null, T: null, S: null }, Re = Object.prototype.hasOwnProperty;
  function _e(j, O, se) {
    var me = se.ref;
    return { $$typeof: m, type: j, key: O, ref: me !== void 0 ? me : null, props: se };
  }
  function Me(j, O) {
    return _e(j.type, O, j.props);
  }
  function ye(j) {
    return typeof j == "object" && j !== null && j.$$typeof === m;
  }
  function Be(j) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(se) {
      return O[se];
    });
  }
  var He = /\/+/g;
  function ke(j, O) {
    return typeof j == "object" && j !== null && j.key != null ? Be("" + j.key) : O.toString(36);
  }
  function Xe(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(P, P) : (j.status = "pending", j.then(function(O) {
          j.status === "pending" && (j.status = "fulfilled", j.value = O);
        }, function(O) {
          j.status === "pending" && (j.status = "rejected", j.reason = O);
        })), j.status) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function V(j, O, se, me, H) {
    var W = typeof j;
    (W === "undefined" || W === "boolean") && (j = null);
    var te = false;
    if (j === null) te = true;
    else switch (W) {
      case "bigint":
      case "string":
      case "number":
        te = true;
        break;
      case "object":
        switch (j.$$typeof) {
          case m:
          case y:
            te = true;
            break;
          case X:
            return te = j._init, V(te(j._payload), O, se, me, H);
        }
    }
    if (te) return H = H(j), te = me === "" ? "." + ke(j, 0) : me, Ne(H) ? (se = "", te != null && (se = te.replace(He, "$&/") + "/"), V(H, O, se, "", function(gt) {
      return gt;
    })) : H != null && (ye(H) && (H = Me(H, se + (H.key == null || j && j.key === H.key ? "" : ("" + H.key).replace(He, "$&/") + "/") + te)), O.push(H)), 1;
    te = 0;
    var Ge = me === "" ? "." : me + ":";
    if (Ne(j)) for (var qe = 0; qe < j.length; qe++) me = j[qe], W = Ge + ke(me, qe), te += V(me, O, se, W, H);
    else if (qe = ue(j), typeof qe == "function") for (j = qe.call(j), qe = 0; !(me = j.next()).done; ) me = me.value, W = Ge + ke(me, qe++), te += V(me, O, se, W, H);
    else if (W === "object") {
      if (typeof j.then == "function") return V(Xe(j), O, se, me, H);
      throw O = String(j), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
    }
    return te;
  }
  function $(j, O, se) {
    if (j == null) return j;
    var me = [], H = 0;
    return V(j, me, "", "", function(W) {
      return O.call(se, W, H++);
    }), me;
  }
  function fe(j) {
    if (j._status === -1) {
      var O = j._result;
      O = O(), O.then(function(se) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = se);
      }, function(se) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = se);
      }), j._status === -1 && (j._status = 0, j._result = O);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var Te = typeof reportError == "function" ? reportError : function(j) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j), error: j });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", j);
      return;
    }
    console.error(j);
  }, Ae = { map: $, forEach: function(j, O, se) {
    $(j, function() {
      O.apply(this, arguments);
    }, se);
  }, count: function(j) {
    var O = 0;
    return $(j, function() {
      O++;
    }), O;
  }, toArray: function(j) {
    return $(j, function(O) {
      return O;
    }) || [];
  }, only: function(j) {
    if (!ye(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } };
  return Fe.Activity = L, Fe.Children = Ae, Fe.Component = ve, Fe.Fragment = S, Fe.Profiler = _, Fe.PureComponent = xe, Fe.StrictMode = p, Fe.Suspense = B, Fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pe, Fe.__COMPILER_RUNTIME = { __proto__: null, c: function(j) {
    return pe.H.useMemoCache(j);
  } }, Fe.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, Fe.cacheSignal = function() {
    return null;
  }, Fe.cloneElement = function(j, O, se) {
    if (j == null) throw Error("The argument must be a React element, but you passed " + j + ".");
    var me = ce({}, j.props), H = j.key;
    if (O != null) for (W in O.key !== void 0 && (H = "" + O.key), O) !Re.call(O, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && O.ref === void 0 || (me[W] = O[W]);
    var W = arguments.length - 2;
    if (W === 1) me.children = se;
    else if (1 < W) {
      for (var te = Array(W), Ge = 0; Ge < W; Ge++) te[Ge] = arguments[Ge + 2];
      me.children = te;
    }
    return _e(j.type, H, me);
  }, Fe.createContext = function(j) {
    return j = { $$typeof: N, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null }, j.Provider = j, j.Consumer = { $$typeof: D, _context: j }, j;
  }, Fe.createElement = function(j, O, se) {
    var me, H = {}, W = null;
    if (O != null) for (me in O.key !== void 0 && (W = "" + O.key), O) Re.call(O, me) && me !== "key" && me !== "__self" && me !== "__source" && (H[me] = O[me]);
    var te = arguments.length - 2;
    if (te === 1) H.children = se;
    else if (1 < te) {
      for (var Ge = Array(te), qe = 0; qe < te; qe++) Ge[qe] = arguments[qe + 2];
      H.children = Ge;
    }
    if (j && j.defaultProps) for (me in te = j.defaultProps, te) H[me] === void 0 && (H[me] = te[me]);
    return _e(j, W, H);
  }, Fe.createRef = function() {
    return { current: null };
  }, Fe.forwardRef = function(j) {
    return { $$typeof: U, render: j };
  }, Fe.isValidElement = ye, Fe.lazy = function(j) {
    return { $$typeof: X, _payload: { _status: -1, _result: j }, _init: fe };
  }, Fe.memo = function(j, O) {
    return { $$typeof: E, type: j, compare: O === void 0 ? null : O };
  }, Fe.startTransition = function(j) {
    var O = pe.T, se = {};
    pe.T = se;
    try {
      var me = j(), H = pe.S;
      H !== null && H(se, me), typeof me == "object" && me !== null && typeof me.then == "function" && me.then(P, Te);
    } catch (W) {
      Te(W);
    } finally {
      O !== null && se.types !== null && (O.types = se.types), pe.T = O;
    }
  }, Fe.unstable_useCacheRefresh = function() {
    return pe.H.useCacheRefresh();
  }, Fe.use = function(j) {
    return pe.H.use(j);
  }, Fe.useActionState = function(j, O, se) {
    return pe.H.useActionState(j, O, se);
  }, Fe.useCallback = function(j, O) {
    return pe.H.useCallback(j, O);
  }, Fe.useContext = function(j) {
    return pe.H.useContext(j);
  }, Fe.useDebugValue = function() {
  }, Fe.useDeferredValue = function(j, O) {
    return pe.H.useDeferredValue(j, O);
  }, Fe.useEffect = function(j, O) {
    return pe.H.useEffect(j, O);
  }, Fe.useEffectEvent = function(j) {
    return pe.H.useEffectEvent(j);
  }, Fe.useId = function() {
    return pe.H.useId();
  }, Fe.useImperativeHandle = function(j, O, se) {
    return pe.H.useImperativeHandle(j, O, se);
  }, Fe.useInsertionEffect = function(j, O) {
    return pe.H.useInsertionEffect(j, O);
  }, Fe.useLayoutEffect = function(j, O) {
    return pe.H.useLayoutEffect(j, O);
  }, Fe.useMemo = function(j, O) {
    return pe.H.useMemo(j, O);
  }, Fe.useOptimistic = function(j, O) {
    return pe.H.useOptimistic(j, O);
  }, Fe.useReducer = function(j, O, se) {
    return pe.H.useReducer(j, O, se);
  }, Fe.useRef = function(j) {
    return pe.H.useRef(j);
  }, Fe.useState = function(j) {
    return pe.H.useState(j);
  }, Fe.useSyncExternalStore = function(j, O, se) {
    return pe.H.useSyncExternalStore(j, O, se);
  }, Fe.useTransition = function() {
    return pe.H.useTransition();
  }, Fe.version = "19.2.3", Fe;
}
var vm;
function Tc() {
  return vm || (vm = 1, gc.exports = s0()), gc.exports;
}
var J = Tc(), yc = { exports: {} }, Os = {}, pc = { exports: {} }, vc = {};
var bm;
function i0() {
  return bm || (bm = 1, (function(m) {
    function y(V, $) {
      var fe = V.length;
      V.push($);
      e: for (; 0 < fe; ) {
        var Te = fe - 1 >>> 1, Ae = V[Te];
        if (0 < _(Ae, $)) V[Te] = $, V[fe] = Ae, fe = Te;
        else break e;
      }
    }
    function S(V) {
      return V.length === 0 ? null : V[0];
    }
    function p(V) {
      if (V.length === 0) return null;
      var $ = V[0], fe = V.pop();
      if (fe !== $) {
        V[0] = fe;
        e: for (var Te = 0, Ae = V.length, j = Ae >>> 1; Te < j; ) {
          var O = 2 * (Te + 1) - 1, se = V[O], me = O + 1, H = V[me];
          if (0 > _(se, fe)) me < Ae && 0 > _(H, se) ? (V[Te] = H, V[me] = fe, Te = me) : (V[Te] = se, V[O] = fe, Te = O);
          else if (me < Ae && 0 > _(H, fe)) V[Te] = H, V[me] = fe, Te = me;
          else break e;
        }
      }
      return $;
    }
    function _(V, $) {
      var fe = V.sortIndex - $.sortIndex;
      return fe !== 0 ? fe : V.id - $.id;
    }
    if (m.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      m.unstable_now = function() {
        return D.now();
      };
    } else {
      var N = Date, U = N.now();
      m.unstable_now = function() {
        return N.now() - U;
      };
    }
    var B = [], E = [], X = 1, L = null, F = 3, ue = false, he = false, ce = false, I = false, ve = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
    function Je(V) {
      for (var $ = S(E); $ !== null; ) {
        if ($.callback === null) p(E);
        else if ($.startTime <= V) p(E), $.sortIndex = $.expirationTime, y(B, $);
        else break;
        $ = S(E);
      }
    }
    function Ne(V) {
      if (ce = false, Je(V), !he) if (S(B) !== null) he = true, P || (P = true, Be());
      else {
        var $ = S(E);
        $ !== null && Xe(Ne, $.startTime - V);
      }
    }
    var P = false, pe = -1, Re = 5, _e = -1;
    function Me() {
      return I ? true : !(m.unstable_now() - _e < Re);
    }
    function ye() {
      if (I = false, P) {
        var V = m.unstable_now();
        _e = V;
        var $ = true;
        try {
          e: {
            he = false, ce && (ce = false, we(pe), pe = -1), ue = true;
            var fe = F;
            try {
              t: {
                for (Je(V), L = S(B); L !== null && !(L.expirationTime > V && Me()); ) {
                  var Te = L.callback;
                  if (typeof Te == "function") {
                    L.callback = null, F = L.priorityLevel;
                    var Ae = Te(L.expirationTime <= V);
                    if (V = m.unstable_now(), typeof Ae == "function") {
                      L.callback = Ae, Je(V), $ = true;
                      break t;
                    }
                    L === S(B) && p(B), Je(V);
                  } else p(B);
                  L = S(B);
                }
                if (L !== null) $ = true;
                else {
                  var j = S(E);
                  j !== null && Xe(Ne, j.startTime - V), $ = false;
                }
              }
              break e;
            } finally {
              L = null, F = fe, ue = false;
            }
            $ = void 0;
          }
        } finally {
          $ ? Be() : P = false;
        }
      }
    }
    var Be;
    if (typeof xe == "function") Be = function() {
      xe(ye);
    };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), ke = He.port2;
      He.port1.onmessage = ye, Be = function() {
        ke.postMessage(null);
      };
    } else Be = function() {
      ve(ye, 0);
    };
    function Xe(V, $) {
      pe = ve(function() {
        V(m.unstable_now());
      }, $);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, m.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Re = 0 < V ? Math.floor(1e3 / V) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, m.unstable_next = function(V) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = F;
      }
      var fe = F;
      F = $;
      try {
        return V();
      } finally {
        F = fe;
      }
    }, m.unstable_requestPaint = function() {
      I = true;
    }, m.unstable_runWithPriority = function(V, $) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var fe = F;
      F = V;
      try {
        return $();
      } finally {
        F = fe;
      }
    }, m.unstable_scheduleCallback = function(V, $, fe) {
      var Te = m.unstable_now();
      switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? Te + fe : Te) : fe = Te, V) {
        case 1:
          var Ae = -1;
          break;
        case 2:
          Ae = 250;
          break;
        case 5:
          Ae = 1073741823;
          break;
        case 4:
          Ae = 1e4;
          break;
        default:
          Ae = 5e3;
      }
      return Ae = fe + Ae, V = { id: X++, callback: $, priorityLevel: V, startTime: fe, expirationTime: Ae, sortIndex: -1 }, fe > Te ? (V.sortIndex = fe, y(E, V), S(B) === null && V === S(E) && (ce ? (we(pe), pe = -1) : ce = true, Xe(Ne, fe - Te))) : (V.sortIndex = Ae, y(B, V), he || ue || (he = true, P || (P = true, Be()))), V;
    }, m.unstable_shouldYield = Me, m.unstable_wrapCallback = function(V) {
      var $ = F;
      return function() {
        var fe = F;
        F = $;
        try {
          return V.apply(this, arguments);
        } finally {
          F = fe;
        }
      };
    };
  })(vc)), vc;
}
var Sm;
function u0() {
  return Sm || (Sm = 1, pc.exports = i0()), pc.exports;
}
var bc = { exports: {} }, nl = {};
var wm;
function r0() {
  if (wm) return nl;
  wm = 1;
  var m = Tc();
  function y(B) {
    var E = "https://react.dev/errors/" + B;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++) E += "&args[]=" + encodeURIComponent(arguments[X]);
    }
    return "Minified React error #" + B + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function S() {
  }
  var p = { d: { f: S, r: function() {
    throw Error(y(522));
  }, D: S, C: S, L: S, m: S, X: S, S, M: S }, p: 0, findDOMNode: null }, _ = /* @__PURE__ */ Symbol.for("react.portal");
  function D(B, E, X) {
    var L = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _, key: L == null ? null : "" + L, children: B, containerInfo: E, implementation: X };
  }
  var N = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function U(B, E) {
    if (B === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return nl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = p, nl.createPortal = function(B, E) {
    var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11) throw Error(y(299));
    return D(B, E, null, X);
  }, nl.flushSync = function(B) {
    var E = N.T, X = p.p;
    try {
      if (N.T = null, p.p = 2, B) return B();
    } finally {
      N.T = E, p.p = X, p.d.f();
    }
  }, nl.preconnect = function(B, E) {
    typeof B == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, p.d.C(B, E));
  }, nl.prefetchDNS = function(B) {
    typeof B == "string" && p.d.D(B);
  }, nl.preinit = function(B, E) {
    if (typeof B == "string" && E && typeof E.as == "string") {
      var X = E.as, L = U(X, E.crossOrigin), F = typeof E.integrity == "string" ? E.integrity : void 0, ue = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      X === "style" ? p.d.S(B, typeof E.precedence == "string" ? E.precedence : void 0, { crossOrigin: L, integrity: F, fetchPriority: ue }) : X === "script" && p.d.X(B, { crossOrigin: L, integrity: F, fetchPriority: ue, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
    }
  }, nl.preinitModule = function(B, E) {
    if (typeof B == "string") if (typeof E == "object" && E !== null) {
      if (E.as == null || E.as === "script") {
        var X = U(E.as, E.crossOrigin);
        p.d.M(B, { crossOrigin: X, integrity: typeof E.integrity == "string" ? E.integrity : void 0, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
      }
    } else E == null && p.d.M(B);
  }, nl.preload = function(B, E) {
    if (typeof B == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var X = E.as, L = U(X, E.crossOrigin);
      p.d.L(B, X, { crossOrigin: L, integrity: typeof E.integrity == "string" ? E.integrity : void 0, nonce: typeof E.nonce == "string" ? E.nonce : void 0, type: typeof E.type == "string" ? E.type : void 0, fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0, referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0, imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0, imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0, media: typeof E.media == "string" ? E.media : void 0 });
    }
  }, nl.preloadModule = function(B, E) {
    if (typeof B == "string") if (E) {
      var X = U(E.as, E.crossOrigin);
      p.d.m(B, { as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0, crossOrigin: X, integrity: typeof E.integrity == "string" ? E.integrity : void 0 });
    } else p.d.m(B);
  }, nl.requestFormReset = function(B) {
    p.d.r(B);
  }, nl.unstable_batchedUpdates = function(B, E) {
    return B(E);
  }, nl.useFormState = function(B, E, X) {
    return N.H.useFormState(B, E, X);
  }, nl.useFormStatus = function() {
    return N.H.useHostTransitionStatus();
  }, nl.version = "19.2.3", nl;
}
var xm;
function c0() {
  if (xm) return bc.exports;
  xm = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
    } catch (y) {
      console.error(y);
    }
  }
  return m(), bc.exports = r0(), bc.exports;
}
var jm;
function o0() {
  if (jm) return Os;
  jm = 1;
  var m = u0(), y = Tc(), S = c0();
  function p(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function D(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function N(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function B(e) {
    if (D(e) !== e) throw Error(p(188));
  }
  function E(e) {
    var t = e.alternate;
    if (!t) {
      if (t = D(e), t === null) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var s = l.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (n = s.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === l) return B(s), e;
          if (c === n) return B(s), t;
          c = c.sibling;
        }
        throw Error(p(188));
      }
      if (l.return !== n.return) l = s, n = c;
      else {
        for (var f = false, g = s.child; g; ) {
          if (g === l) {
            f = true, l = s, n = c;
            break;
          }
          if (g === n) {
            f = true, n = s, l = c;
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = c.child; g; ) {
            if (g === l) {
              f = true, l = c, n = s;
              break;
            }
            if (g === n) {
              f = true, n = c, l = s;
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(p(189));
        }
      }
      if (l.alternate !== n) throw Error(p(190));
    }
    if (l.tag !== 3) throw Error(p(188));
    return l.stateNode.current === l ? e : t;
  }
  function X(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = X(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var L = Object.assign, F = /* @__PURE__ */ Symbol.for("react.element"), ue = /* @__PURE__ */ Symbol.for("react.transitional.element"), he = /* @__PURE__ */ Symbol.for("react.portal"), ce = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), ve = /* @__PURE__ */ Symbol.for("react.profiler"), we = /* @__PURE__ */ Symbol.for("react.consumer"), xe = /* @__PURE__ */ Symbol.for("react.context"), Je = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ne = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), pe = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), _e = /* @__PURE__ */ Symbol.for("react.activity"), Me = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ye = Symbol.iterator;
  function Be(e) {
    return e === null || typeof e != "object" ? null : (e = ye && e[ye] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var He = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === He ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ce:
        return "Fragment";
      case ve:
        return "Profiler";
      case I:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case P:
        return "SuspenseList";
      case _e:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case he:
        return "Portal";
      case xe:
        return e.displayName || "Context";
      case we:
        return (e._context.displayName || "Context") + ".Consumer";
      case Je:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case pe:
        return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
      case Re:
        t = e._payload, e = e._init;
        try {
          return ke(e(t));
        } catch {
        }
    }
    return null;
  }
  var Xe = Array.isArray, V = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = { pending: false, data: null, method: null, action: null }, Te = [], Ae = -1;
  function j(e) {
    return { current: e };
  }
  function O(e) {
    0 > Ae || (e.current = Te[Ae], Te[Ae] = null, Ae--);
  }
  function se(e, t) {
    Ae++, Te[Ae] = e.current, e.current = t;
  }
  var me = j(null), H = j(null), W = j(null), te = j(null);
  function Ge(e, t) {
    switch (se(W, t), se(H, e), se(me, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Lh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Lh(t), e = Gh(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    O(me), se(me, e);
  }
  function qe() {
    O(me), O(H), O(W);
  }
  function gt(e) {
    e.memoizedState !== null && se(te, e);
    var t = me.current, l = Gh(t, e.type);
    t !== l && (se(H, e), se(me, l));
  }
  function tl(e) {
    H.current === e && (O(me), O(H)), te.current === e && (O(te), Ts._currentValue = fe);
  }
  var $t, ll;
  function Mt(e) {
    if ($t === void 0) try {
      throw Error();
    } catch (l) {
      var t = l.stack.trim().match(/\n( *(at )?)/);
      $t = t && t[1] || "", ll = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + $t + e + ll;
  }
  var Zt = false;
  function Lt(e, t) {
    if (!e || Zt) return "";
    Zt = true;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (K) {
                var Q = K;
              }
              Reflect.construct(e, [], ae);
            } else {
              try {
                ae.call();
              } catch (K) {
                Q = K;
              }
              e.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (K) {
              Q = K;
            }
            (ae = e()) && typeof ae.catch == "function" && ae.catch(function() {
            });
          }
        } catch (K) {
          if (K && Q && typeof K.stack == "string") return [K.stack, Q.stack];
        }
        return [null, null];
      } };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
      s && s.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var c = n.DetermineComponentFrameRoot(), f = c[0], g = c[1];
      if (f && g) {
        var C = f.split(`
`), Y = g.split(`
`);
        for (s = n = 0; n < C.length && !C[n].includes("DetermineComponentFrameRoot"); ) n++;
        for (; s < Y.length && !Y[s].includes("DetermineComponentFrameRoot"); ) s++;
        if (n === C.length || s === Y.length) for (n = C.length - 1, s = Y.length - 1; 1 <= n && 0 <= s && C[n] !== Y[s]; ) s--;
        for (; 1 <= n && 0 <= s; n--, s--) if (C[n] !== Y[s]) {
          if (n !== 1 || s !== 1) do
            if (n--, s--, 0 > s || C[n] !== Y[s]) {
              var ee = `
` + C[n].replace(" at new ", " at ");
              return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), ee;
            }
          while (1 <= n && 0 <= s);
          break;
        }
      }
    } finally {
      Zt = false, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Mt(l) : "";
  }
  function Gt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Mt(e.type);
      case 16:
        return Mt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Mt("Suspense Fallback") : Mt("Suspense");
      case 19:
        return Mt("SuspenseList");
      case 0:
      case 15:
        return Lt(e.type, false);
      case 11:
        return Lt(e.type.render, false);
      case 1:
        return Lt(e.type, true);
      case 31:
        return Mt("Activity");
      default:
        return "";
    }
  }
  function al(e) {
    try {
      var t = "", l = null;
      do
        t += Gt(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var qt = Object.prototype.hasOwnProperty, de = m.unstable_scheduleCallback, Ye = m.unstable_cancelCallback, ot = m.unstable_shouldYield, ul = m.unstable_requestPaint, yt = m.unstable_now, on = m.unstable_getCurrentPriorityLevel, Bn = m.unstable_ImmediatePriority, sl = m.unstable_UserBlockingPriority, fn = m.unstable_NormalPriority, Zl = m.unstable_LowPriority, Kt = m.unstable_IdlePriority, hn = m.log, Gl = m.unstable_setDisableYieldValue, Yl = null, kt = null;
  function El(e) {
    if (typeof hn == "function" && Gl(e), kt && typeof kt.setStrictMode == "function") try {
      kt.setStrictMode(Yl, e);
    } catch {
    }
  }
  var Yt = Math.clz32 ? Math.clz32 : be, Xa = Math.log, ta = Math.LN2;
  function be(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Xa(e) / ta | 0) | 0;
  }
  var Ze = 256, Rl = 262144, d = 4194304;
  function i(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function u(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0, c = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var g = n & 134217727;
    return g !== 0 ? (n = g & ~c, n !== 0 ? s = i(n) : (f &= g, f !== 0 ? s = i(f) : l || (l = g & ~e, l !== 0 && (s = i(l))))) : (g = n & ~c, g !== 0 ? s = i(g) : f !== 0 ? s = i(f) : l || (l = n & ~e, l !== 0 && (s = i(l)))), s === 0 ? 0 : t !== 0 && t !== s && (t & c) === 0 && (c = s & -s, l = t & -t, c >= l || c === 32 && (l & 4194048) !== 0) ? t : s;
  }
  function a(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function r(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function o() {
    var e = d;
    return d <<= 1, (d & 62914560) === 0 && (d = 4194304), e;
  }
  function b(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function v(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function x(e, t, l, n, s, c) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var g = e.entanglements, C = e.expirationTimes, Y = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var ee = 31 - Yt(l), ae = 1 << ee;
      g[ee] = 0, C[ee] = -1;
      var Q = Y[ee];
      if (Q !== null) for (Y[ee] = null, ee = 0; ee < Q.length; ee++) {
        var K = Q[ee];
        K !== null && (K.lane &= -536870913);
      }
      l &= ~ae;
    }
    n !== 0 && w(e, n, 0), c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(f & ~t));
  }
  function w(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - Yt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function R(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - Yt(l), s = 1 << n;
      s & t | e[n] & t && (e[n] |= t), l &= ~s;
    }
  }
  function T(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : k(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function k(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ge(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Z() {
    var e = $.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : rm(e.type));
  }
  function le(e, t) {
    var l = $.p;
    try {
      return $.p = e, t();
    } finally {
      $.p = l;
    }
  }
  var Se = Math.random().toString(36).slice(2), M = "__reactFiber$" + Se, re = "__reactProps$" + Se, Ee = "__reactContainer$" + Se, Qe = "__reactEvents$" + Se, Ke = "__reactListeners$" + Se, xt = "__reactHandles$" + Se, Oe = "__reactResources$" + Se, Ue = "__reactMarker$" + Se;
  function ft(e) {
    delete e[M], delete e[re], delete e[Qe], delete e[Ke], delete e[xt];
  }
  function A(e) {
    var t = e[M];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[Ee] || l[M]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for (e = Kh(e); e !== null; ) {
          if (l = e[M]) return l;
          e = Kh(e);
        }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function ie(e) {
    if (e = e[M] || e[Ee]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function je(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(p(33));
  }
  function oe(e) {
    var t = e[Oe];
    return t || (t = e[Oe] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[Ue] = true;
  }
  var it = /* @__PURE__ */ new Set(), pt = {};
  function ut(e, t) {
    _t(e, t), _t(e + "Capture", t);
  }
  function _t(e, t) {
    for (pt[e] = t, e = 0; e < t.length; e++) it.add(t[e]);
  }
  var gl = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), zt = {}, yl = {};
  function ql(e) {
    return qt.call(yl, e) ? true : qt.call(zt, e) ? false : gl.test(e) ? yl[e] = true : (zt[e] = true, false);
  }
  function Ie(e, t, l) {
    if (ql(t)) if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var n = t.toLowerCase().slice(0, 5);
          if (n !== "data-" && n !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + l);
    }
  }
  function At(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Ct(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  function jt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Dt(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ru(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, c = n.set;
      return Object.defineProperty(e, t, { configurable: true, get: function() {
        return s.call(this);
      }, set: function(f) {
        l = "" + f, c.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(f) {
        l = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Qa(e) {
    if (!e._valueTracker) {
      var t = Dt(e) ? "checked" : "value";
      e._valueTracker = ru(e, t, "" + e[t]);
    }
  }
  function Vs(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var l = t.getValue(), n = "";
    return e && (n = Dt(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), true) : false;
  }
  function la(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var cu = /[\n"\\]/g;
  function rl(e) {
    return e.replace(cu, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Va(e, t, l, n, s, c, f, g) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Ha(e, f, jt(t)) : l != null ? Ha(e, f, jt(l)) : n != null && e.removeAttribute("value"), s == null && c != null && (e.defaultChecked = !!c), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + jt(g) : e.removeAttribute("name");
  }
  function Hs(e, t, l, n, s, c, f, g) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || l != null) {
      if (!(c !== "submit" && c !== "reset" || t != null)) {
        Qa(e);
        return;
      }
      l = l != null ? "" + jt(l) : "", t = t != null ? "" + jt(t) : l, g || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? s, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = g ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Qa(e);
  }
  function Ha(e, t, l) {
    t === "number" && la(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function na(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < l.length; s++) t["$" + l[s]] = true;
      for (l = 0; l < e.length; l++) s = t.hasOwnProperty("$" + e[l].value), e[l].selected !== s && (e[l].selected = s), s && n && (e[l].defaultSelected = true);
    } else {
      for (l = "" + jt(l), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === l) {
          e[s].selected = true, n && (e[s].defaultSelected = true);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Ac(e, t, l) {
    if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + jt(l) : "";
  }
  function Dc(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(p(92));
        if (Xe(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = jt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), Qa(e);
  }
  function aa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Wm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Oc(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Wm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Rc(e, t, l) {
    if (t != null && typeof t != "object") throw Error(p(62));
    if (e = e.style, l != null) {
      for (var n in l) !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var s in t) n = t[s], t.hasOwnProperty(s) && l[s] !== n && Oc(e, s, n);
    } else for (var c in t) t.hasOwnProperty(c) && Oc(e, c, t[c]);
  }
  function ou(e) {
    if (e.indexOf("-") === -1) return false;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Im = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Pm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zs(e) {
    return Pm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Kl() {
  }
  var fu = null;
  function hu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var sa = null, ia = null;
  function qc(e) {
    var t = ie(e);
    if (t && (e = t.stateNode)) {
      var l = e[re] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Va(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + rl("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var s = n[re] || null;
                if (!s) throw Error(p(90));
                Va(n, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name);
              }
            }
            for (t = 0; t < l.length; t++) n = l[t], n.form === e.form && Vs(n);
          }
          break e;
        case "textarea":
          Ac(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && na(e, !!l.multiple, t, false);
      }
    }
  }
  var mu = false;
  function Uc(e, t, l) {
    if (mu) return e(t, l);
    mu = true;
    try {
      var n = e(t);
      return n;
    } finally {
      if (mu = false, (sa !== null || ia !== null) && (Di(), sa && (t = sa, e = ia, ia = sa = null, qc(t), e))) for (t = 0; t < e.length; t++) qc(e[t]);
    }
  }
  function Za(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[re] || null;
    if (n === null) return null;
    l = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(p(231, t, typeof l));
    return l;
  }
  var Jl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), du = false;
  if (Jl) try {
    var Ka = {};
    Object.defineProperty(Ka, "passive", { get: function() {
      du = true;
    } }), window.addEventListener("test", Ka, Ka), window.removeEventListener("test", Ka, Ka);
  } catch {
    du = false;
  }
  var mn = null, gu = null, Ks = null;
  function Bc() {
    if (Ks) return Ks;
    var e, t = gu, l = t.length, n, s = "value" in mn ? mn.value : mn.textContent, c = s.length;
    for (e = 0; e < l && t[e] === s[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === s[c - n]; n++) ;
    return Ks = s.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Js(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ks() {
    return true;
  }
  function Lc() {
    return false;
  }
  function cl(e) {
    function t(l, n, s, c, f) {
      this._reactName = l, this._targetInst = s, this.type = n, this.nativeEvent = c, this.target = f, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (l = e[g], this[g] = l ? l(c) : c[g]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === false) ? ks : Lc, this.isPropagationStopped = Lc, this;
    }
    return L(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = ks);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = ks);
    }, persist: function() {
    }, isPersistent: ks }), t;
  }
  var Ln = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Fs = cl(Ln), Ja = L({}, Ln, { view: 0, detail: 0 }), ed = cl(Ja), yu, pu, ka, $s = L({}, Ja, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: bu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ka && (ka && e.type === "mousemove" ? (yu = e.screenX - ka.screenX, pu = e.screenY - ka.screenY) : pu = yu = 0, ka = e), yu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : pu;
  } }), Gc = cl($s), td = L({}, $s, { dataTransfer: 0 }), ld = cl(td), nd = L({}, Ja, { relatedTarget: 0 }), vu = cl(nd), ad = L({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sd = cl(ad), id = L({}, Ln, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ud = cl(id), rd = L({}, Ln, { data: 0 }), Yc = cl(rd), cd = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, od = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, fd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = fd[e]) ? !!t[e] : false;
  }
  function bu() {
    return hd;
  }
  var md = L({}, Ja, { key: function(e) {
    if (e.key) {
      var t = cd[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? od[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: bu, charCode: function(e) {
    return e.type === "keypress" ? Js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), dd = cl(md), gd = L({}, $s, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xc = cl(gd), yd = L({}, Ja, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: bu }), pd = cl(yd), vd = L({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bd = cl(vd), Sd = L({}, $s, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), wd = cl(Sd), xd = L({}, Ln, { newState: 0, oldState: 0 }), jd = cl(xd), Ed = [9, 13, 27, 32], Su = Jl && "CompositionEvent" in window, Fa = null;
  Jl && "documentMode" in document && (Fa = document.documentMode);
  var Nd = Jl && "TextEvent" in window && !Fa, Qc = Jl && (!Su || Fa && 8 < Fa && 11 >= Fa), Vc = " ", Hc = false;
  function Zc(e, t) {
    switch (e) {
      case "keyup":
        return Ed.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Kc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ua = false;
  function Md(e, t) {
    switch (e) {
      case "compositionend":
        return Kc(t);
      case "keypress":
        return t.which !== 32 ? null : (Hc = true, Vc);
      case "textInput":
        return e = t.data, e === Vc && Hc ? null : e;
      default:
        return null;
    }
  }
  function _d(e, t) {
    if (ua) return e === "compositionend" || !Su && Zc(e, t) ? (e = Bc(), Ks = gu = mn = null, ua = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Qc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Td = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Jc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Td[e.type] : t === "textarea";
  }
  function kc(e, t, l, n) {
    sa ? ia ? ia.push(n) : ia = [n] : sa = n, t = Gi(t, "onChange"), 0 < t.length && (l = new Fs("onChange", "change", null, l, n), e.push({ event: l, listeners: t }));
  }
  var $a = null, Wa = null;
  function Cd(e) {
    Dh(e, 0);
  }
  function Ws(e) {
    var t = je(e);
    if (Vs(t)) return e;
  }
  function Fc(e, t) {
    if (e === "change") return t;
  }
  var $c = false;
  if (Jl) {
    var wu;
    if (Jl) {
      var xu = "oninput" in document;
      if (!xu) {
        var Wc = document.createElement("div");
        Wc.setAttribute("oninput", "return;"), xu = typeof Wc.oninput == "function";
      }
      wu = xu;
    } else wu = false;
    $c = wu && (!document.documentMode || 9 < document.documentMode);
  }
  function Ic() {
    $a && ($a.detachEvent("onpropertychange", Pc), Wa = $a = null);
  }
  function Pc(e) {
    if (e.propertyName === "value" && Ws(Wa)) {
      var t = [];
      kc(t, Wa, e, hu(e)), Uc(Cd, t);
    }
  }
  function zd(e, t, l) {
    e === "focusin" ? (Ic(), $a = t, Wa = l, $a.attachEvent("onpropertychange", Pc)) : e === "focusout" && Ic();
  }
  function Ad(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ws(Wa);
  }
  function Dd(e, t) {
    if (e === "click") return Ws(t);
  }
  function Od(e, t) {
    if (e === "input" || e === "change") return Ws(t);
  }
  function Rd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var pl = typeof Object.is == "function" ? Object.is : Rd;
  function Ia(e, t) {
    if (pl(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return false;
    for (n = 0; n < l.length; n++) {
      var s = l[n];
      if (!qt.call(t, s) || !pl(e[s], t[s])) return false;
    }
    return true;
  }
  function eo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function to(e, t) {
    var l = eo(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = e + l.textContent.length, e <= t && n >= t) return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = eo(l);
    }
  }
  function lo(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? lo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function no(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = la(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) e = t.contentWindow;
      else break;
      t = la(e.document);
    }
    return t;
  }
  function ju(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var qd = Jl && "documentMode" in document && 11 >= document.documentMode, ra = null, Eu = null, Pa = null, Nu = false;
  function ao(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Nu || ra == null || ra !== la(n) || (n = ra, "selectionStart" in n && ju(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Pa && Ia(Pa, n) || (Pa = n, n = Gi(Eu, "onSelect"), 0 < n.length && (t = new Fs("onSelect", "select", null, t, l), e.push({ event: t, listeners: n }), t.target = ra)));
  }
  function Gn(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var ca = { animationend: Gn("Animation", "AnimationEnd"), animationiteration: Gn("Animation", "AnimationIteration"), animationstart: Gn("Animation", "AnimationStart"), transitionrun: Gn("Transition", "TransitionRun"), transitionstart: Gn("Transition", "TransitionStart"), transitioncancel: Gn("Transition", "TransitionCancel"), transitionend: Gn("Transition", "TransitionEnd") }, Mu = {}, so = {};
  Jl && (so = document.createElement("div").style, "AnimationEvent" in window || (delete ca.animationend.animation, delete ca.animationiteration.animation, delete ca.animationstart.animation), "TransitionEvent" in window || delete ca.transitionend.transition);
  function Yn(e) {
    if (Mu[e]) return Mu[e];
    if (!ca[e]) return e;
    var t = ca[e], l;
    for (l in t) if (t.hasOwnProperty(l) && l in so) return Mu[e] = t[l];
    return e;
  }
  var io = Yn("animationend"), uo = Yn("animationiteration"), ro = Yn("animationstart"), Ud = Yn("transitionrun"), Bd = Yn("transitionstart"), Ld = Yn("transitioncancel"), co = Yn("transitionend"), oo = /* @__PURE__ */ new Map(), _u = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  _u.push("scrollEnd");
  function Ul(e, t) {
    oo.set(e, t), ut(t, [e]);
  }
  var Is = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Nl = [], oa = 0, Tu = 0;
  function Ps() {
    for (var e = oa, t = Tu = oa = 0; t < e; ) {
      var l = Nl[t];
      Nl[t++] = null;
      var n = Nl[t];
      Nl[t++] = null;
      var s = Nl[t];
      Nl[t++] = null;
      var c = Nl[t];
      if (Nl[t++] = null, n !== null && s !== null) {
        var f = n.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), n.pending = s;
      }
      c !== 0 && fo(l, s, c);
    }
  }
  function ei(e, t, l, n) {
    Nl[oa++] = e, Nl[oa++] = t, Nl[oa++] = l, Nl[oa++] = n, Tu |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Cu(e, t, l, n) {
    return ei(e, t, l, n), ti(e);
  }
  function Xn(e, t) {
    return ei(e, null, null, t), ti(e);
  }
  function fo(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var s = false, c = e.return; c !== null; ) c.childLanes |= l, n = c.alternate, n !== null && (n.childLanes |= l), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (s = true)), e = c, c = c.return;
    return e.tag === 3 ? (c = e.stateNode, s && t !== null && (s = 31 - Yt(l), e = c.hiddenUpdates, n = e[s], n === null ? e[s] = [t] : n.push(t), t.lane = l | 536870912), c) : null;
  }
  function ti(e) {
    if (50 < ws) throw ws = 0, Lr = null, Error(p(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var fa = {};
  function Gd(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function vl(e, t, l, n) {
    return new Gd(e, t, l, n);
  }
  function zu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kl(e, t) {
    var l = e.alternate;
    return l === null ? (l = vl(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function ho(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
  }
  function li(e, t, l, n, s, c) {
    var f = 0;
    if (n = e, typeof e == "function") zu(e) && (f = 1);
    else if (typeof e == "string") f = Hg(e, l, me.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case _e:
        return e = vl(31, l, t, s), e.elementType = _e, e.lanes = c, e;
      case ce:
        return Qn(l.children, s, c, t);
      case I:
        f = 8, s |= 24;
        break;
      case ve:
        return e = vl(12, l, t, s | 2), e.elementType = ve, e.lanes = c, e;
      case Ne:
        return e = vl(13, l, t, s), e.elementType = Ne, e.lanes = c, e;
      case P:
        return e = vl(19, l, t, s), e.elementType = P, e.lanes = c, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            f = 10;
            break e;
          case we:
            f = 9;
            break e;
          case Je:
            f = 11;
            break e;
          case pe:
            f = 14;
            break e;
          case Re:
            f = 16, n = null;
            break e;
        }
        f = 29, l = Error(p(130, e === null ? "null" : typeof e, "")), n = null;
    }
    return t = vl(f, l, t, s), t.elementType = e, t.type = n, t.lanes = c, t;
  }
  function Qn(e, t, l, n) {
    return e = vl(7, e, n, t), e.lanes = l, e;
  }
  function Au(e, t, l) {
    return e = vl(6, e, null, t), e.lanes = l, e;
  }
  function mo(e) {
    var t = vl(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Du(e, t, l) {
    return t = vl(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  var go = /* @__PURE__ */ new WeakMap();
  function Ml(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = go.get(e);
      return l !== void 0 ? l : (t = { value: e, source: t, stack: al(t) }, go.set(e, t), t);
    }
    return { value: e, source: t, stack: al(t) };
  }
  var ha = [], ma = 0, ni = null, es = 0, _l = [], Tl = 0, dn = null, Xl = 1, Ql = "";
  function Fl(e, t) {
    ha[ma++] = es, ha[ma++] = ni, ni = e, es = t;
  }
  function yo(e, t, l) {
    _l[Tl++] = Xl, _l[Tl++] = Ql, _l[Tl++] = dn, dn = e;
    var n = Xl;
    e = Ql;
    var s = 32 - Yt(n) - 1;
    n &= ~(1 << s), l += 1;
    var c = 32 - Yt(t) + s;
    if (30 < c) {
      var f = s - s % 5;
      c = (n & (1 << f) - 1).toString(32), n >>= f, s -= f, Xl = 1 << 32 - Yt(t) + s | l << s | n, Ql = c + e;
    } else Xl = 1 << c | l << s | n, Ql = e;
  }
  function Ou(e) {
    e.return !== null && (Fl(e, 1), yo(e, 1, 0));
  }
  function Ru(e) {
    for (; e === ni; ) ni = ha[--ma], ha[ma] = null, es = ha[--ma], ha[ma] = null;
    for (; e === dn; ) dn = _l[--Tl], _l[Tl] = null, Ql = _l[--Tl], _l[Tl] = null, Xl = _l[--Tl], _l[Tl] = null;
  }
  function po(e, t) {
    _l[Tl++] = Xl, _l[Tl++] = Ql, _l[Tl++] = dn, Xl = t.id, Ql = t.overflow, dn = e;
  }
  var Wt = null, Et = null, st = false, gn = null, Cl = false, qu = Error(p(519));
  function yn(e) {
    var t = Error(p(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw ts(Ml(t, e)), qu;
  }
  function vo(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[M] = e, t[re] = n, l) {
      case "dialog":
        lt("cancel", t), lt("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        lt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < js.length; l++) lt(js[l], t);
        break;
      case "source":
        lt("error", t);
        break;
      case "img":
      case "image":
      case "link":
        lt("error", t), lt("load", t);
        break;
      case "details":
        lt("toggle", t);
        break;
      case "input":
        lt("invalid", t), Hs(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, true);
        break;
      case "select":
        lt("invalid", t);
        break;
      case "textarea":
        lt("invalid", t), Dc(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === true || Uh(t.textContent, l) ? (n.popover != null && (lt("beforetoggle", t), lt("toggle", t)), n.onScroll != null && lt("scroll", t), n.onScrollEnd != null && lt("scrollend", t), n.onClick != null && (t.onclick = Kl), t = true) : t = false, t || yn(e, true);
  }
  function bo(e) {
    for (Wt = e.return; Wt; ) switch (Wt.tag) {
      case 5:
      case 31:
      case 13:
        Cl = false;
        return;
      case 27:
      case 3:
        Cl = true;
        return;
      default:
        Wt = Wt.return;
    }
  }
  function da(e) {
    if (e !== Wt) return false;
    if (!st) return bo(e), st = true, false;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Pr(e.type, e.memoizedProps)), l = !l), l && Et && yn(e), bo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      Et = Zh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      Et = Zh(e);
    } else t === 27 ? (t = Et, zn(e.type) ? (e = ac, ac = null, Et = e) : Et = t) : Et = Wt ? Al(e.stateNode.nextSibling) : null;
    return true;
  }
  function Vn() {
    Et = Wt = null, st = false;
  }
  function Uu() {
    var e = gn;
    return e !== null && (ml === null ? ml = e : ml.push.apply(ml, e), gn = null), e;
  }
  function ts(e) {
    gn === null ? gn = [e] : gn.push(e);
  }
  var Bu = j(null), Hn = null, $l = null;
  function pn(e, t, l) {
    se(Bu, t._currentValue), t._currentValue = l;
  }
  function Wl(e) {
    e._currentValue = Bu.current, O(Bu);
  }
  function Lu(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Gu(e, t, l, n) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var f = s.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var g = c;
          c = s;
          for (var C = 0; C < t.length; C++) if (g.context === t[C]) {
            c.lanes |= l, g = c.alternate, g !== null && (g.lanes |= l), Lu(c.return, l, e), n || (f = null);
            break e;
          }
          c = g.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(p(341));
        f.lanes |= l, c = f.alternate, c !== null && (c.lanes |= l), Lu(f, l, e), f = null;
      } else f = s.child;
      if (f !== null) f.return = s;
      else for (f = s; f !== null; ) {
        if (f === e) {
          f = null;
          break;
        }
        if (s = f.sibling, s !== null) {
          s.return = f.return, f = s;
          break;
        }
        f = f.return;
      }
      s = f;
    }
  }
  function ga(e, t, l, n) {
    e = null;
    for (var s = t, c = false; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = true;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(p(387));
        if (f = f.memoizedProps, f !== null) {
          var g = s.type;
          pl(s.pendingProps.value, f.value) || (e !== null ? e.push(g) : e = [g]);
        }
      } else if (s === te.current) {
        if (f = s.alternate, f === null) throw Error(p(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(Ts) : e = [Ts]);
      }
      s = s.return;
    }
    e !== null && Gu(t, e, l, n), t.flags |= 262144;
  }
  function ai(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!pl(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function Zn(e) {
    Hn = e, $l = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function It(e) {
    return So(Hn, e);
  }
  function si(e, t) {
    return Hn === null && Zn(e), So(e, t);
  }
  function So(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, $l === null) {
      if (e === null) throw Error(p(308));
      $l = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else $l = $l.next = t;
    return l;
  }
  var Yd = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = { aborted: false, addEventListener: function(l, n) {
      e.push(n);
    } };
    this.abort = function() {
      t.aborted = true, e.forEach(function(l) {
        return l();
      });
    };
  }, Xd = m.unstable_scheduleCallback, Qd = m.unstable_NormalPriority, Xt = { $$typeof: xe, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Yu() {
    return { controller: new Yd(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function ls(e) {
    e.refCount--, e.refCount === 0 && Xd(Qd, function() {
      e.controller.abort();
    });
  }
  var ns = null, Xu = 0, ya = 0, pa = null;
  function Vd(e, t) {
    if (ns === null) {
      var l = ns = [];
      Xu = 0, ya = Hr(), pa = { status: "pending", value: void 0, then: function(n) {
        l.push(n);
      } };
    }
    return Xu++, t.then(wo, wo), t;
  }
  function wo() {
    if (--Xu === 0 && ns !== null) {
      pa !== null && (pa.status = "fulfilled");
      var e = ns;
      ns = null, ya = 0, pa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Hd(e, t) {
    var l = [], n = { status: "pending", value: null, reason: null, then: function(s) {
      l.push(s);
    } };
    return e.then(function() {
      n.status = "fulfilled", n.value = t;
      for (var s = 0; s < l.length; s++) (0, l[s])(t);
    }, function(s) {
      for (n.status = "rejected", n.reason = s, s = 0; s < l.length; s++) (0, l[s])(void 0);
    }), n;
  }
  var xo = V.S;
  V.S = function(e, t) {
    ih = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && Vd(e, t), xo !== null && xo(e, t);
  };
  var Kn = j(null);
  function Qu() {
    var e = Kn.current;
    return e !== null ? e : wt.pooledCache;
  }
  function ii(e, t) {
    t === null ? se(Kn, Kn.current) : se(Kn, t.pool);
  }
  function jo() {
    var e = Qu();
    return e === null ? null : { parent: Xt._currentValue, pool: e };
  }
  var va = Error(p(460)), Vu = Error(p(474)), ui = Error(p(542)), ri = { then: function() {
  } };
  function Eo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function No(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Kl, Kl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, _o(e), e;
      default:
        if (typeof t.status == "string") t.then(Kl, Kl);
        else {
          if (e = wt, e !== null && 100 < e.shellSuspendCounter) throw Error(p(482));
          e = t, e.status = "pending", e.then(function(n) {
            if (t.status === "pending") {
              var s = t;
              s.status = "fulfilled", s.value = n;
            }
          }, function(n) {
            if (t.status === "pending") {
              var s = t;
              s.status = "rejected", s.reason = n;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, _o(e), e;
        }
        throw kn = t, va;
    }
  }
  function Jn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (kn = l, va) : l;
    }
  }
  var kn = null;
  function Mo() {
    if (kn === null) throw Error(p(459));
    var e = kn;
    return kn = null, e;
  }
  function _o(e) {
    if (e === va || e === ui) throw Error(p(483));
  }
  var ba = null, as = 0;
  function ci(e) {
    var t = as;
    return as += 1, ba === null && (ba = []), No(ba, e, t);
  }
  function ss(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function oi(e, t) {
    throw t.$$typeof === F ? Error(p(525)) : (e = Object.prototype.toString.call(t), Error(p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function To(e) {
    function t(q, z) {
      if (e) {
        var G = q.deletions;
        G === null ? (q.deletions = [z], q.flags |= 16) : G.push(z);
      }
    }
    function l(q, z) {
      if (!e) return null;
      for (; z !== null; ) t(q, z), z = z.sibling;
      return null;
    }
    function n(q) {
      for (var z = /* @__PURE__ */ new Map(); q !== null; ) q.key !== null ? z.set(q.key, q) : z.set(q.index, q), q = q.sibling;
      return z;
    }
    function s(q, z) {
      return q = kl(q, z), q.index = 0, q.sibling = null, q;
    }
    function c(q, z, G) {
      return q.index = G, e ? (G = q.alternate, G !== null ? (G = G.index, G < z ? (q.flags |= 67108866, z) : G) : (q.flags |= 67108866, z)) : (q.flags |= 1048576, z);
    }
    function f(q) {
      return e && q.alternate === null && (q.flags |= 67108866), q;
    }
    function g(q, z, G, ne) {
      return z === null || z.tag !== 6 ? (z = Au(G, q.mode, ne), z.return = q, z) : (z = s(z, G), z.return = q, z);
    }
    function C(q, z, G, ne) {
      var Le = G.type;
      return Le === ce ? ee(q, z, G.props.children, ne, G.key) : z !== null && (z.elementType === Le || typeof Le == "object" && Le !== null && Le.$$typeof === Re && Jn(Le) === z.type) ? (z = s(z, G.props), ss(z, G), z.return = q, z) : (z = li(G.type, G.key, G.props, null, q.mode, ne), ss(z, G), z.return = q, z);
    }
    function Y(q, z, G, ne) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== G.containerInfo || z.stateNode.implementation !== G.implementation ? (z = Du(G, q.mode, ne), z.return = q, z) : (z = s(z, G.children || []), z.return = q, z);
    }
    function ee(q, z, G, ne, Le) {
      return z === null || z.tag !== 7 ? (z = Qn(G, q.mode, ne, Le), z.return = q, z) : (z = s(z, G), z.return = q, z);
    }
    function ae(q, z, G) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return z = Au("" + z, q.mode, G), z.return = q, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ue:
            return G = li(z.type, z.key, z.props, null, q.mode, G), ss(G, z), G.return = q, G;
          case he:
            return z = Du(z, q.mode, G), z.return = q, z;
          case Re:
            return z = Jn(z), ae(q, z, G);
        }
        if (Xe(z) || Be(z)) return z = Qn(z, q.mode, G, null), z.return = q, z;
        if (typeof z.then == "function") return ae(q, ci(z), G);
        if (z.$$typeof === xe) return ae(q, si(q, z), G);
        oi(q, z);
      }
      return null;
    }
    function Q(q, z, G, ne) {
      var Le = z !== null ? z.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint") return Le !== null ? null : g(q, z, "" + G, ne);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case ue:
            return G.key === Le ? C(q, z, G, ne) : null;
          case he:
            return G.key === Le ? Y(q, z, G, ne) : null;
          case Re:
            return G = Jn(G), Q(q, z, G, ne);
        }
        if (Xe(G) || Be(G)) return Le !== null ? null : ee(q, z, G, ne, null);
        if (typeof G.then == "function") return Q(q, z, ci(G), ne);
        if (G.$$typeof === xe) return Q(q, z, si(q, G), ne);
        oi(q, G);
      }
      return null;
    }
    function K(q, z, G, ne, Le) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number" || typeof ne == "bigint") return q = q.get(G) || null, g(z, q, "" + ne, Le);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case ue:
            return q = q.get(ne.key === null ? G : ne.key) || null, C(z, q, ne, Le);
          case he:
            return q = q.get(ne.key === null ? G : ne.key) || null, Y(z, q, ne, Le);
          case Re:
            return ne = Jn(ne), K(q, z, G, ne, Le);
        }
        if (Xe(ne) || Be(ne)) return q = q.get(G) || null, ee(z, q, ne, Le, null);
        if (typeof ne.then == "function") return K(q, z, G, ci(ne), Le);
        if (ne.$$typeof === xe) return K(q, z, G, si(z, ne), Le);
        oi(z, ne);
      }
      return null;
    }
    function Ce(q, z, G, ne) {
      for (var Le = null, rt = null, De = z, Pe = z = 0, at = null; De !== null && Pe < G.length; Pe++) {
        De.index > Pe ? (at = De, De = null) : at = De.sibling;
        var ct = Q(q, De, G[Pe], ne);
        if (ct === null) {
          De === null && (De = at);
          break;
        }
        e && De && ct.alternate === null && t(q, De), z = c(ct, z, Pe), rt === null ? Le = ct : rt.sibling = ct, rt = ct, De = at;
      }
      if (Pe === G.length) return l(q, De), st && Fl(q, Pe), Le;
      if (De === null) {
        for (; Pe < G.length; Pe++) De = ae(q, G[Pe], ne), De !== null && (z = c(De, z, Pe), rt === null ? Le = De : rt.sibling = De, rt = De);
        return st && Fl(q, Pe), Le;
      }
      for (De = n(De); Pe < G.length; Pe++) at = K(De, q, Pe, G[Pe], ne), at !== null && (e && at.alternate !== null && De.delete(at.key === null ? Pe : at.key), z = c(at, z, Pe), rt === null ? Le = at : rt.sibling = at, rt = at);
      return e && De.forEach(function(qn) {
        return t(q, qn);
      }), st && Fl(q, Pe), Le;
    }
    function Ve(q, z, G, ne) {
      if (G == null) throw Error(p(151));
      for (var Le = null, rt = null, De = z, Pe = z = 0, at = null, ct = G.next(); De !== null && !ct.done; Pe++, ct = G.next()) {
        De.index > Pe ? (at = De, De = null) : at = De.sibling;
        var qn = Q(q, De, ct.value, ne);
        if (qn === null) {
          De === null && (De = at);
          break;
        }
        e && De && qn.alternate === null && t(q, De), z = c(qn, z, Pe), rt === null ? Le = qn : rt.sibling = qn, rt = qn, De = at;
      }
      if (ct.done) return l(q, De), st && Fl(q, Pe), Le;
      if (De === null) {
        for (; !ct.done; Pe++, ct = G.next()) ct = ae(q, ct.value, ne), ct !== null && (z = c(ct, z, Pe), rt === null ? Le = ct : rt.sibling = ct, rt = ct);
        return st && Fl(q, Pe), Le;
      }
      for (De = n(De); !ct.done; Pe++, ct = G.next()) ct = K(De, q, Pe, ct.value, ne), ct !== null && (e && ct.alternate !== null && De.delete(ct.key === null ? Pe : ct.key), z = c(ct, z, Pe), rt === null ? Le = ct : rt.sibling = ct, rt = ct);
      return e && De.forEach(function(t0) {
        return t(q, t0);
      }), st && Fl(q, Pe), Le;
    }
    function St(q, z, G, ne) {
      if (typeof G == "object" && G !== null && G.type === ce && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case ue:
            e: {
              for (var Le = G.key; z !== null; ) {
                if (z.key === Le) {
                  if (Le = G.type, Le === ce) {
                    if (z.tag === 7) {
                      l(q, z.sibling), ne = s(z, G.props.children), ne.return = q, q = ne;
                      break e;
                    }
                  } else if (z.elementType === Le || typeof Le == "object" && Le !== null && Le.$$typeof === Re && Jn(Le) === z.type) {
                    l(q, z.sibling), ne = s(z, G.props), ss(ne, G), ne.return = q, q = ne;
                    break e;
                  }
                  l(q, z);
                  break;
                } else t(q, z);
                z = z.sibling;
              }
              G.type === ce ? (ne = Qn(G.props.children, q.mode, ne, G.key), ne.return = q, q = ne) : (ne = li(G.type, G.key, G.props, null, q.mode, ne), ss(ne, G), ne.return = q, q = ne);
            }
            return f(q);
          case he:
            e: {
              for (Le = G.key; z !== null; ) {
                if (z.key === Le) if (z.tag === 4 && z.stateNode.containerInfo === G.containerInfo && z.stateNode.implementation === G.implementation) {
                  l(q, z.sibling), ne = s(z, G.children || []), ne.return = q, q = ne;
                  break e;
                } else {
                  l(q, z);
                  break;
                }
                else t(q, z);
                z = z.sibling;
              }
              ne = Du(G, q.mode, ne), ne.return = q, q = ne;
            }
            return f(q);
          case Re:
            return G = Jn(G), St(q, z, G, ne);
        }
        if (Xe(G)) return Ce(q, z, G, ne);
        if (Be(G)) {
          if (Le = Be(G), typeof Le != "function") throw Error(p(150));
          return G = Le.call(G), Ve(q, z, G, ne);
        }
        if (typeof G.then == "function") return St(q, z, ci(G), ne);
        if (G.$$typeof === xe) return St(q, z, si(q, G), ne);
        oi(q, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint" ? (G = "" + G, z !== null && z.tag === 6 ? (l(q, z.sibling), ne = s(z, G), ne.return = q, q = ne) : (l(q, z), ne = Au(G, q.mode, ne), ne.return = q, q = ne), f(q)) : l(q, z);
    }
    return function(q, z, G, ne) {
      try {
        as = 0;
        var Le = St(q, z, G, ne);
        return ba = null, Le;
      } catch (De) {
        if (De === va || De === ui) throw De;
        var rt = vl(29, De, null, q.mode);
        return rt.lanes = ne, rt.return = q, rt;
      }
    };
  }
  var Fn = To(true), Co = To(false), vn = false;
  function Hu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Zu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function bn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (ht & 2) !== 0) {
      var s = n.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), n.pending = t, t = ti(e), fo(e, null, l), t;
    }
    return ei(e, n, t, l), ti(e);
  }
  function is(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, R(e, l);
    }
  }
  function Ku(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var s = null, c = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          c === null ? s = c = f : c = c.next = f, l = l.next;
        } while (l !== null);
        c === null ? s = c = t : c = c.next = t;
      } else s = c = t;
      l = { baseState: n.baseState, firstBaseUpdate: s, lastBaseUpdate: c, shared: n.shared, callbacks: n.callbacks }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Ju = false;
  function us() {
    if (Ju) {
      var e = pa;
      if (e !== null) throw e;
    }
  }
  function rs(e, t, l, n) {
    Ju = false;
    var s = e.updateQueue;
    vn = false;
    var c = s.firstBaseUpdate, f = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var C = g, Y = C.next;
      C.next = null, f === null ? c = Y : f.next = Y, f = C;
      var ee = e.alternate;
      ee !== null && (ee = ee.updateQueue, g = ee.lastBaseUpdate, g !== f && (g === null ? ee.firstBaseUpdate = Y : g.next = Y, ee.lastBaseUpdate = C));
    }
    if (c !== null) {
      var ae = s.baseState;
      f = 0, ee = Y = C = null, g = c;
      do {
        var Q = g.lane & -536870913, K = Q !== g.lane;
        if (K ? (nt & Q) === Q : (n & Q) === Q) {
          Q !== 0 && Q === ya && (Ju = true), ee !== null && (ee = ee.next = { lane: 0, tag: g.tag, payload: g.payload, callback: null, next: null });
          e: {
            var Ce = e, Ve = g;
            Q = t;
            var St = l;
            switch (Ve.tag) {
              case 1:
                if (Ce = Ve.payload, typeof Ce == "function") {
                  ae = Ce.call(St, ae, Q);
                  break e;
                }
                ae = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = Ve.payload, Q = typeof Ce == "function" ? Ce.call(St, ae, Q) : Ce, Q == null) break e;
                ae = L({}, ae, Q);
                break e;
              case 2:
                vn = true;
            }
          }
          Q = g.callback, Q !== null && (e.flags |= 64, K && (e.flags |= 8192), K = s.callbacks, K === null ? s.callbacks = [Q] : K.push(Q));
        } else K = { lane: Q, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, ee === null ? (Y = ee = K, C = ae) : ee = ee.next = K, f |= Q;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null) break;
          K = g, g = K.next, K.next = null, s.lastBaseUpdate = K, s.shared.pending = null;
        }
      } while (true);
      ee === null && (C = ae), s.baseState = C, s.firstBaseUpdate = Y, s.lastBaseUpdate = ee, c === null && (s.shared.lanes = 0), Nn |= f, e.lanes = f, e.memoizedState = ae;
    }
  }
  function zo(e, t) {
    if (typeof e != "function") throw Error(p(191, e));
    e.call(t);
  }
  function Ao(e, t) {
    var l = e.callbacks;
    if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) zo(l[e], t);
  }
  var Sa = j(null), fi = j(0);
  function Do(e, t) {
    e = un, se(fi, e), se(Sa, t), un = e | t.baseLanes;
  }
  function ku() {
    se(fi, un), se(Sa, Sa.current);
  }
  function Fu() {
    un = fi.current, O(Sa), O(fi);
  }
  var bl = j(null), zl = null;
  function wn(e) {
    var t = e.alternate;
    se(Ut, Ut.current & 1), se(bl, e), zl === null && (t === null || Sa.current !== null || t.memoizedState !== null) && (zl = e);
  }
  function $u(e) {
    se(Ut, Ut.current), se(bl, e), zl === null && (zl = e);
  }
  function Oo(e) {
    e.tag === 22 ? (se(Ut, Ut.current), se(bl, e), zl === null && (zl = e)) : xn();
  }
  function xn() {
    se(Ut, Ut.current), se(bl, bl.current);
  }
  function Sl(e) {
    O(bl), zl === e && (zl = null), O(Ut);
  }
  var Ut = j(0);
  function hi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || lc(l) || nc(l))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Il = 0, We = null, vt = null, Qt = null, mi = false, wa = false, $n = false, di = 0, cs = 0, xa = null, Zd = 0;
  function Ot() {
    throw Error(p(321));
  }
  function Wu(e, t) {
    if (t === null) return false;
    for (var l = 0; l < t.length && l < e.length; l++) if (!pl(e[l], t[l])) return false;
    return true;
  }
  function Iu(e, t, l, n, s, c) {
    return Il = c, We = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, V.H = e === null || e.memoizedState === null ? pf : mr, $n = false, c = l(n, s), $n = false, wa && (c = qo(t, l, n, s)), Ro(e), c;
  }
  function Ro(e) {
    V.H = hs;
    var t = vt !== null && vt.next !== null;
    if (Il = 0, Qt = vt = We = null, mi = false, cs = 0, xa = null, t) throw Error(p(300));
    e === null || Vt || (e = e.dependencies, e !== null && ai(e) && (Vt = true));
  }
  function qo(e, t, l, n) {
    We = e;
    var s = 0;
    do {
      if (wa && (xa = null), cs = 0, wa = false, 25 <= s) throw Error(p(301));
      if (s += 1, Qt = vt = null, e.updateQueue != null) {
        var c = e.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      V.H = vf, c = t(l, n);
    } while (wa);
    return c;
  }
  function Kd() {
    var e = V.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? os(t) : t, e = e.useState()[0], (vt !== null ? vt.memoizedState : null) !== e && (We.flags |= 1024), t;
  }
  function Pu() {
    var e = di !== 0;
    return di = 0, e;
  }
  function er(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function tr(e) {
    if (mi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      mi = false;
    }
    Il = 0, Qt = vt = We = null, wa = false, cs = di = 0, xa = null;
  }
  function il() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Qt === null ? We.memoizedState = Qt = e : Qt = Qt.next = e, Qt;
  }
  function Bt() {
    if (vt === null) {
      var e = We.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = vt.next;
    var t = Qt === null ? We.memoizedState : Qt.next;
    if (t !== null) Qt = t, vt = e;
    else {
      if (e === null) throw We.alternate === null ? Error(p(467)) : Error(p(310));
      vt = e, e = { memoizedState: vt.memoizedState, baseState: vt.baseState, baseQueue: vt.baseQueue, queue: vt.queue, next: null }, Qt === null ? We.memoizedState = Qt = e : Qt = Qt.next = e;
    }
    return Qt;
  }
  function gi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function os(e) {
    var t = cs;
    return cs += 1, xa === null && (xa = []), e = No(xa, e, t), t = We, (Qt === null ? t.memoizedState : Qt.next) === null && (t = t.alternate, V.H = t === null || t.memoizedState === null ? pf : mr), e;
  }
  function yi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return os(e);
      if (e.$$typeof === xe) return It(e);
    }
    throw Error(p(438, String(e)));
  }
  function lr(e) {
    var t = null, l = We.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = We.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = { data: n.data.map(function(s) {
        return s.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = gi(), We.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = Me;
    return t.index++, l;
  }
  function Pl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pi(e) {
    var t = Bt();
    return nr(t, vt, e);
  }
  function nr(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = l;
    var s = e.baseQueue, c = n.pending;
    if (c !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = c.next, c.next = f;
      }
      t.baseQueue = s = c, n.pending = null;
    }
    if (c = e.baseState, s === null) e.memoizedState = c;
    else {
      t = s.next;
      var g = f = null, C = null, Y = t, ee = false;
      do {
        var ae = Y.lane & -536870913;
        if (ae !== Y.lane ? (nt & ae) === ae : (Il & ae) === ae) {
          var Q = Y.revertLane;
          if (Q === 0) C !== null && (C = C.next = { lane: 0, revertLane: 0, gesture: null, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }), ae === ya && (ee = true);
          else if ((Il & Q) === Q) {
            Y = Y.next, Q === ya && (ee = true);
            continue;
          } else ae = { lane: 0, revertLane: Y.revertLane, gesture: null, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }, C === null ? (g = C = ae, f = c) : C = C.next = ae, We.lanes |= Q, Nn |= Q;
          ae = Y.action, $n && l(c, ae), c = Y.hasEagerState ? Y.eagerState : l(c, ae);
        } else Q = { lane: ae, revertLane: Y.revertLane, gesture: Y.gesture, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }, C === null ? (g = C = Q, f = c) : C = C.next = Q, We.lanes |= ae, Nn |= ae;
        Y = Y.next;
      } while (Y !== null && Y !== t);
      if (C === null ? f = c : C.next = g, !pl(c, e.memoizedState) && (Vt = true, ee && (l = pa, l !== null))) throw l;
      e.memoizedState = c, e.baseState = f, e.baseQueue = C, n.lastRenderedState = c;
    }
    return s === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function ar(e) {
    var t = Bt(), l = t.queue;
    if (l === null) throw Error(p(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, s = l.pending, c = t.memoizedState;
    if (s !== null) {
      l.pending = null;
      var f = s = s.next;
      do
        c = e(c, f.action), f = f.next;
      while (f !== s);
      pl(c, t.memoizedState) || (Vt = true), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), l.lastRenderedState = c;
    }
    return [c, n];
  }
  function Uo(e, t, l) {
    var n = We, s = Bt(), c = st;
    if (c) {
      if (l === void 0) throw Error(p(407));
      l = l();
    } else l = t();
    var f = !pl((vt || s).memoizedState, l);
    if (f && (s.memoizedState = l, Vt = true), s = s.queue, ur(Go.bind(null, n, s, e), [e]), s.getSnapshot !== t || f || Qt !== null && Qt.memoizedState.tag & 1) {
      if (n.flags |= 2048, ja(9, { destroy: void 0 }, Lo.bind(null, n, s, l, t), null), wt === null) throw Error(p(349));
      c || (Il & 127) !== 0 || Bo(n, t, l);
    }
    return l;
  }
  function Bo(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = We.updateQueue, t === null ? (t = gi(), We.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Lo(e, t, l, n) {
    t.value = l, t.getSnapshot = n, Yo(t) && Xo(e);
  }
  function Go(e, t, l) {
    return l(function() {
      Yo(t) && Xo(e);
    });
  }
  function Yo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !pl(e, l);
    } catch {
      return true;
    }
  }
  function Xo(e) {
    var t = Xn(e, 2);
    t !== null && dl(t, e, 2);
  }
  function sr(e) {
    var t = il();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), $n) {
        El(true);
        try {
          l();
        } finally {
          El(false);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pl, lastRenderedState: e }, t;
  }
  function Qo(e, t, l, n) {
    return e.baseState = l, nr(e, vt, typeof n == "function" ? n : Pl);
  }
  function Jd(e, t, l, n, s) {
    if (Si(e)) throw Error(p(485));
    if (e = t.action, e !== null) {
      var c = { payload: s, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(f) {
        c.listeners.push(f);
      } };
      V.T !== null ? l(true) : c.isTransition = false, n(c), l = t.pending, l === null ? (c.next = t.pending = c, Vo(t, c)) : (c.next = l.next, t.pending = l.next = c);
    }
  }
  function Vo(e, t) {
    var l = t.action, n = t.payload, s = e.state;
    if (t.isTransition) {
      var c = V.T, f = {};
      V.T = f;
      try {
        var g = l(s, n), C = V.S;
        C !== null && C(f, g), Ho(e, t, g);
      } catch (Y) {
        ir(e, t, Y);
      } finally {
        c !== null && f.types !== null && (c.types = f.types), V.T = c;
      }
    } else try {
      c = l(s, n), Ho(e, t, c);
    } catch (Y) {
      ir(e, t, Y);
    }
  }
  function Ho(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
      Zo(e, t, n);
    }, function(n) {
      return ir(e, t, n);
    }) : Zo(e, t, l);
  }
  function Zo(e, t, l) {
    t.status = "fulfilled", t.value = l, Ko(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Vo(e, l)));
  }
  function ir(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, Ko(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function Ko(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Jo(e, t) {
    return t;
  }
  function ko(e, t) {
    if (st) {
      var l = wt.formState;
      if (l !== null) {
        e: {
          var n = We;
          if (st) {
            if (Et) {
              t: {
                for (var s = Et, c = Cl; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break t;
                  }
                  if (s = Al(s.nextSibling), s === null) {
                    s = null;
                    break t;
                  }
                }
                c = s.data, s = c === "F!" || c === "F" ? s : null;
              }
              if (s) {
                Et = Al(s.nextSibling), n = s.data === "F!";
                break e;
              }
            }
            yn(n);
          }
          n = false;
        }
        n && (t = l[0]);
      }
    }
    return l = il(), l.memoizedState = l.baseState = t, n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Jo, lastRenderedState: t }, l.queue = n, l = df.bind(null, We, n), n.dispatch = l, n = sr(false), c = hr.bind(null, We, false, n.queue), n = il(), s = { state: t, dispatch: null, action: e, pending: null }, n.queue = s, l = Jd.bind(null, We, s, c, l), s.dispatch = l, n.memoizedState = e, [t, l, false];
  }
  function Fo(e) {
    var t = Bt();
    return $o(t, vt, e);
  }
  function $o(e, t, l) {
    if (t = nr(e, t, Jo)[0], e = pi(Pl)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var n = os(t);
    } catch (f) {
      throw f === va ? ui : f;
    }
    else n = t;
    t = Bt();
    var s = t.queue, c = s.dispatch;
    return l !== t.memoizedState && (We.flags |= 2048, ja(9, { destroy: void 0 }, kd.bind(null, s, l), null)), [n, c, e];
  }
  function kd(e, t) {
    e.action = t;
  }
  function Wo(e) {
    var t = Bt(), l = vt;
    if (l !== null) return $o(t, l, e);
    Bt(), t = t.memoizedState, l = Bt();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, false];
  }
  function ja(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = We.updateQueue, t === null && (t = gi(), We.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Io() {
    return Bt().memoizedState;
  }
  function vi(e, t, l, n) {
    var s = il();
    We.flags |= e, s.memoizedState = ja(1 | t, { destroy: void 0 }, l, n === void 0 ? null : n);
  }
  function bi(e, t, l, n) {
    var s = Bt();
    n = n === void 0 ? null : n;
    var c = s.memoizedState.inst;
    vt !== null && n !== null && Wu(n, vt.memoizedState.deps) ? s.memoizedState = ja(t, c, l, n) : (We.flags |= e, s.memoizedState = ja(1 | t, c, l, n));
  }
  function Po(e, t) {
    vi(8390656, 8, e, t);
  }
  function ur(e, t) {
    bi(2048, 8, e, t);
  }
  function Fd(e) {
    We.flags |= 4;
    var t = We.updateQueue;
    if (t === null) t = gi(), We.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function ef(e) {
    var t = Bt().memoizedState;
    return Fd({ ref: t, nextImpl: e }), function() {
      if ((ht & 2) !== 0) throw Error(p(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function tf(e, t) {
    return bi(4, 2, e, t);
  }
  function lf(e, t) {
    return bi(4, 4, e, t);
  }
  function nf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function af(e, t, l) {
    l = l != null ? l.concat([e]) : null, bi(4, 4, nf.bind(null, t, e), l);
  }
  function rr() {
  }
  function sf(e, t) {
    var l = Bt();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Wu(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function uf(e, t) {
    var l = Bt();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Wu(t, n[1])) return n[0];
    if (n = e(), $n) {
      El(true);
      try {
        e();
      } finally {
        El(false);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function cr(e, t, l) {
    return l === void 0 || (Il & 1073741824) !== 0 && (nt & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = rh(), We.lanes |= e, Nn |= e, l);
  }
  function rf(e, t, l, n) {
    return pl(l, t) ? l : Sa.current !== null ? (e = cr(e, l, n), pl(e, t) || (Vt = true), e) : (Il & 42) === 0 || (Il & 1073741824) !== 0 && (nt & 261930) === 0 ? (Vt = true, e.memoizedState = l) : (e = rh(), We.lanes |= e, Nn |= e, t);
  }
  function cf(e, t, l, n, s) {
    var c = $.p;
    $.p = c !== 0 && 8 > c ? c : 8;
    var f = V.T, g = {};
    V.T = g, hr(e, false, t, l);
    try {
      var C = s(), Y = V.S;
      if (Y !== null && Y(g, C), C !== null && typeof C == "object" && typeof C.then == "function") {
        var ee = Hd(C, n);
        fs(e, t, ee, jl(e));
      } else fs(e, t, n, jl(e));
    } catch (ae) {
      fs(e, t, { then: function() {
      }, status: "rejected", reason: ae }, jl());
    } finally {
      $.p = c, f !== null && g.types !== null && (f.types = g.types), V.T = f;
    }
  }
  function $d() {
  }
  function or(e, t, l, n) {
    if (e.tag !== 5) throw Error(p(476));
    var s = of(e).queue;
    cf(e, s, t, fe, l === null ? $d : function() {
      return ff(e), l(n);
    });
  }
  function of(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: fe, baseState: fe, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pl, lastRenderedState: fe }, next: null };
    var l = {};
    return t.next = { memoizedState: l, baseState: l, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pl, lastRenderedState: l }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ff(e) {
    var t = of(e);
    t.next === null && (t = e.alternate.memoizedState), fs(e, t.next.queue, {}, jl());
  }
  function fr() {
    return It(Ts);
  }
  function hf() {
    return Bt().memoizedState;
  }
  function mf() {
    return Bt().memoizedState;
  }
  function Wd(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = jl();
          e = bn(l);
          var n = Sn(t, e, l);
          n !== null && (dl(n, t, l), is(n, t, l)), t = { cache: Yu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Id(e, t, l) {
    var n = jl();
    l = { lane: n, revertLane: 0, gesture: null, action: l, hasEagerState: false, eagerState: null, next: null }, Si(e) ? gf(t, l) : (l = Cu(e, t, l, n), l !== null && (dl(l, e, n), yf(l, t, n)));
  }
  function df(e, t, l) {
    var n = jl();
    fs(e, t, l, n);
  }
  function fs(e, t, l, n) {
    var s = { lane: n, revertLane: 0, gesture: null, action: l, hasEagerState: false, eagerState: null, next: null };
    if (Si(e)) gf(t, s);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
        var f = t.lastRenderedState, g = c(f, l);
        if (s.hasEagerState = true, s.eagerState = g, pl(g, f)) return ei(e, t, s, 0), wt === null && Ps(), false;
      } catch {
      }
      if (l = Cu(e, t, s, n), l !== null) return dl(l, e, n), yf(l, t, n), true;
    }
    return false;
  }
  function hr(e, t, l, n) {
    if (n = { lane: 2, revertLane: Hr(), gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Si(e)) {
      if (t) throw Error(p(479));
    } else t = Cu(e, l, n, 2), t !== null && dl(t, e, 2);
  }
  function Si(e) {
    var t = e.alternate;
    return e === We || t !== null && t === We;
  }
  function gf(e, t) {
    wa = mi = true;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function yf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, R(e, l);
    }
  }
  var hs = { readContext: It, use: yi, useCallback: Ot, useContext: Ot, useEffect: Ot, useImperativeHandle: Ot, useLayoutEffect: Ot, useInsertionEffect: Ot, useMemo: Ot, useReducer: Ot, useRef: Ot, useState: Ot, useDebugValue: Ot, useDeferredValue: Ot, useTransition: Ot, useSyncExternalStore: Ot, useId: Ot, useHostTransitionStatus: Ot, useFormState: Ot, useActionState: Ot, useOptimistic: Ot, useMemoCache: Ot, useCacheRefresh: Ot };
  hs.useEffectEvent = Ot;
  var pf = { readContext: It, use: yi, useCallback: function(e, t) {
    return il().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: It, useEffect: Po, useImperativeHandle: function(e, t, l) {
    l = l != null ? l.concat([e]) : null, vi(4194308, 4, nf.bind(null, t, e), l);
  }, useLayoutEffect: function(e, t) {
    return vi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    vi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var l = il();
    t = t === void 0 ? null : t;
    var n = e();
    if ($n) {
      El(true);
      try {
        e();
      } finally {
        El(false);
      }
    }
    return l.memoizedState = [n, t], n;
  }, useReducer: function(e, t, l) {
    var n = il();
    if (l !== void 0) {
      var s = l(t);
      if ($n) {
        El(true);
        try {
          l(t);
        } finally {
          El(false);
        }
      }
    } else s = t;
    return n.memoizedState = n.baseState = s, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: s }, n.queue = e, e = e.dispatch = Id.bind(null, We, e), [n.memoizedState, e];
  }, useRef: function(e) {
    var t = il();
    return e = { current: e }, t.memoizedState = e;
  }, useState: function(e) {
    e = sr(e);
    var t = e.queue, l = df.bind(null, We, t);
    return t.dispatch = l, [e.memoizedState, l];
  }, useDebugValue: rr, useDeferredValue: function(e, t) {
    var l = il();
    return cr(l, e, t);
  }, useTransition: function() {
    var e = sr(false);
    return e = cf.bind(null, We, e.queue, true, false), il().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, t, l) {
    var n = We, s = il();
    if (st) {
      if (l === void 0) throw Error(p(407));
      l = l();
    } else {
      if (l = t(), wt === null) throw Error(p(349));
      (nt & 127) !== 0 || Bo(n, t, l);
    }
    s.memoizedState = l;
    var c = { value: l, getSnapshot: t };
    return s.queue = c, Po(Go.bind(null, n, c, e), [e]), n.flags |= 2048, ja(9, { destroy: void 0 }, Lo.bind(null, n, c, l, t), null), l;
  }, useId: function() {
    var e = il(), t = wt.identifierPrefix;
    if (st) {
      var l = Ql, n = Xl;
      l = (n & ~(1 << 32 - Yt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = di++, 0 < l && (t += "H" + l.toString(32)), t += "_";
    } else l = Zd++, t = "_" + t + "r_" + l.toString(32) + "_";
    return e.memoizedState = t;
  }, useHostTransitionStatus: fr, useFormState: ko, useActionState: ko, useOptimistic: function(e) {
    var t = il();
    t.memoizedState = t.baseState = e;
    var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = l, t = hr.bind(null, We, true, l), l.dispatch = t, [e, t];
  }, useMemoCache: lr, useCacheRefresh: function() {
    return il().memoizedState = Wd.bind(null, We);
  }, useEffectEvent: function(e) {
    var t = il(), l = { impl: e };
    return t.memoizedState = l, function() {
      if ((ht & 2) !== 0) throw Error(p(440));
      return l.impl.apply(void 0, arguments);
    };
  } }, mr = { readContext: It, use: yi, useCallback: sf, useContext: It, useEffect: ur, useImperativeHandle: af, useInsertionEffect: tf, useLayoutEffect: lf, useMemo: uf, useReducer: pi, useRef: Io, useState: function() {
    return pi(Pl);
  }, useDebugValue: rr, useDeferredValue: function(e, t) {
    var l = Bt();
    return rf(l, vt.memoizedState, e, t);
  }, useTransition: function() {
    var e = pi(Pl)[0], t = Bt().memoizedState;
    return [typeof e == "boolean" ? e : os(e), t];
  }, useSyncExternalStore: Uo, useId: hf, useHostTransitionStatus: fr, useFormState: Fo, useActionState: Fo, useOptimistic: function(e, t) {
    var l = Bt();
    return Qo(l, vt, e, t);
  }, useMemoCache: lr, useCacheRefresh: mf };
  mr.useEffectEvent = ef;
  var vf = { readContext: It, use: yi, useCallback: sf, useContext: It, useEffect: ur, useImperativeHandle: af, useInsertionEffect: tf, useLayoutEffect: lf, useMemo: uf, useReducer: ar, useRef: Io, useState: function() {
    return ar(Pl);
  }, useDebugValue: rr, useDeferredValue: function(e, t) {
    var l = Bt();
    return vt === null ? cr(l, e, t) : rf(l, vt.memoizedState, e, t);
  }, useTransition: function() {
    var e = ar(Pl)[0], t = Bt().memoizedState;
    return [typeof e == "boolean" ? e : os(e), t];
  }, useSyncExternalStore: Uo, useId: hf, useHostTransitionStatus: fr, useFormState: Wo, useActionState: Wo, useOptimistic: function(e, t) {
    var l = Bt();
    return vt !== null ? Qo(l, vt, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
  }, useMemoCache: lr, useCacheRefresh: mf };
  vf.useEffectEvent = ef;
  function dr(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : L({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var gr = { enqueueSetState: function(e, t, l) {
    e = e._reactInternals;
    var n = jl(), s = bn(n);
    s.payload = t, l != null && (s.callback = l), t = Sn(e, s, n), t !== null && (dl(t, e, n), is(t, e, n));
  }, enqueueReplaceState: function(e, t, l) {
    e = e._reactInternals;
    var n = jl(), s = bn(n);
    s.tag = 1, s.payload = t, l != null && (s.callback = l), t = Sn(e, s, n), t !== null && (dl(t, e, n), is(t, e, n));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var l = jl(), n = bn(l);
    n.tag = 2, t != null && (n.callback = t), t = Sn(e, n, l), t !== null && (dl(t, e, l), is(t, e, l));
  } };
  function bf(e, t, l, n, s, c, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, c, f) : t.prototype && t.prototype.isPureReactComponent ? !Ia(l, n) || !Ia(s, c) : true;
  }
  function Sf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && gr.enqueueReplaceState(t, t.state, null);
  }
  function Wn(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t) n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = L({}, l));
      for (var s in e) l[s] === void 0 && (l[s] = e[s]);
    }
    return l;
  }
  function wf(e) {
    Is(e);
  }
  function xf(e) {
    console.error(e);
  }
  function jf(e) {
    Is(e);
  }
  function wi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ef(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function yr(e, t, l) {
    return l = bn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      wi(e, t);
    }, l;
  }
  function Nf(e) {
    return e = bn(e), e.tag = 3, e;
  }
  function Mf(e, t, l, n) {
    var s = l.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = n.value;
      e.payload = function() {
        return s(c);
      }, e.callback = function() {
        Ef(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Ef(t, l, n), typeof s != "function" && (Mn === null ? Mn = /* @__PURE__ */ new Set([this]) : Mn.add(this));
      var g = n.stack;
      this.componentDidCatch(n.value, { componentStack: g !== null ? g : "" });
    });
  }
  function Pd(e, t, l, n, s) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && ga(t, l, s, true), l = bl.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return zl === null ? Oi() : l.alternate === null && Rt === 0 && (Rt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = s, n === ri ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Xr(e, n, s)), false;
          case 22:
            return l.flags |= 65536, n === ri ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([n]) }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Xr(e, n, s)), false;
        }
        throw Error(p(435, l.tag));
      }
      return Xr(e, n, s), Oi(), false;
    }
    if (st) return t = bl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, n !== qu && (e = Error(p(422), { cause: n }), ts(Ml(e, l)))) : (n !== qu && (t = Error(p(423), { cause: n }), ts(Ml(t, l))), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, n = Ml(n, l), s = yr(e.stateNode, n, s), Ku(e, s), Rt !== 4 && (Rt = 2)), false;
    var c = Error(p(520), { cause: n });
    if (c = Ml(c, l), Ss === null ? Ss = [c] : Ss.push(c), Rt !== 4 && (Rt = 2), t === null) return true;
    n = Ml(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = s & -s, l.lanes |= e, e = yr(l.stateNode, n, e), Ku(l, e), false;
        case 1:
          if (t = l.type, c = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Mn === null || !Mn.has(c)))) return l.flags |= 65536, s &= -s, l.lanes |= s, s = Nf(s), Mf(s, e, l, n), Ku(l, s), false;
      }
      l = l.return;
    } while (l !== null);
    return false;
  }
  var pr = Error(p(461)), Vt = false;
  function Pt(e, t, l, n) {
    t.child = e === null ? Co(t, null, l, n) : Fn(t, e.child, l, n);
  }
  function _f(e, t, l, n, s) {
    l = l.render;
    var c = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var g in n) g !== "ref" && (f[g] = n[g]);
    } else f = n;
    return Zn(t), n = Iu(e, t, l, f, c, s), g = Pu(), e !== null && !Vt ? (er(e, t, s), en(e, t, s)) : (st && g && Ou(t), t.flags |= 1, Pt(e, t, n, s), t.child);
  }
  function Tf(e, t, l, n, s) {
    if (e === null) {
      var c = l.type;
      return typeof c == "function" && !zu(c) && c.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = c, Cf(e, t, c, n, s)) : (e = li(l.type, null, n, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (c = e.child, !Nr(e, s)) {
      var f = c.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ia, l(f, n) && e.ref === t.ref) return en(e, t, s);
    }
    return t.flags |= 1, e = kl(c, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Cf(e, t, l, n, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Ia(c, n) && e.ref === t.ref) if (Vt = false, t.pendingProps = n = c, Nr(e, s)) (e.flags & 131072) !== 0 && (Vt = true);
      else return t.lanes = e.lanes, en(e, t, s);
    }
    return vr(e, t, l, n, s);
  }
  function zf(e, t, l, n) {
    var s = n.children, c = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, s = 0; n !== null; ) s = s | n.lanes | n.childLanes, n = n.sibling;
          n = s & ~c;
        } else n = 0, t.child = null;
        return Af(e, t, c, l, n);
      }
      if ((l & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ii(t, c !== null ? c.cachePool : null), c !== null ? Do(t, c) : ku(), Oo(t);
      else return n = t.lanes = 536870912, Af(e, t, c !== null ? c.baseLanes | l : l, l, n);
    } else c !== null ? (ii(t, c.cachePool), Do(t, c), xn(), t.memoizedState = null) : (e !== null && ii(t, null), ku(), xn());
    return Pt(e, t, s, l), t.child;
  }
  function ms(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function Af(e, t, l, n, s) {
    var c = Qu();
    return c = c === null ? null : { parent: Xt._currentValue, pool: c }, t.memoizedState = { baseLanes: l, cachePool: c }, e !== null && ii(t, null), ku(), Oo(t), e !== null && ga(e, t, n, true), t.childLanes = s, null;
  }
  function xi(e, t) {
    return t = Ei({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Df(e, t, l) {
    return Fn(t, e.child, null, l), e = xi(t, t.pendingProps), e.flags |= 2, Sl(t), t.memoizedState = null, e;
  }
  function eg(e, t, l) {
    var n = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (st) {
        if (n.mode === "hidden") return e = xi(t, n), t.lanes = 536870912, ms(null, e);
        if ($u(t), (e = Et) ? (e = Hh(e, Cl), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: dn !== null ? { id: Xl, overflow: Ql } : null, retryLane: 536870912, hydrationErrors: null }, l = mo(e), l.return = t, t.child = l, Wt = t, Et = null)) : e = null, e === null) throw yn(t);
        return t.lanes = 536870912, null;
      }
      return xi(t, n);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var f = c.dehydrated;
      if ($u(t), s) if (t.flags & 256) t.flags &= -257, t = Df(e, t, l);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(p(558));
      else if (Vt || ga(e, t, l, false), s = (l & e.childLanes) !== 0, Vt || s) {
        if (n = wt, n !== null && (f = T(n, l), f !== 0 && f !== c.retryLane)) throw c.retryLane = f, Xn(e, f), dl(n, e, f), pr;
        Oi(), t = Df(e, t, l);
      } else e = c.treeContext, Et = Al(f.nextSibling), Wt = t, st = true, gn = null, Cl = false, e !== null && po(t, e), t = xi(t, n), t.flags |= 4096;
      return t;
    }
    return e = kl(e.child, { mode: n.mode, children: n.children }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ji(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(p(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function vr(e, t, l, n, s) {
    return Zn(t), l = Iu(e, t, l, n, void 0, s), n = Pu(), e !== null && !Vt ? (er(e, t, s), en(e, t, s)) : (st && n && Ou(t), t.flags |= 1, Pt(e, t, l, s), t.child);
  }
  function Of(e, t, l, n, s, c) {
    return Zn(t), t.updateQueue = null, l = qo(t, n, l, s), Ro(e), n = Pu(), e !== null && !Vt ? (er(e, t, c), en(e, t, c)) : (st && n && Ou(t), t.flags |= 1, Pt(e, t, l, c), t.child);
  }
  function Rf(e, t, l, n, s) {
    if (Zn(t), t.stateNode === null) {
      var c = fa, f = l.contextType;
      typeof f == "object" && f !== null && (c = It(f)), c = new l(n, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = gr, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = n, c.state = t.memoizedState, c.refs = {}, Hu(t), f = l.contextType, c.context = typeof f == "object" && f !== null ? It(f) : fa, c.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (dr(t, l, f, n), c.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (f = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), f !== c.state && gr.enqueueReplaceState(c, c.state, null), rs(t, n, c, s), us(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), n = true;
    } else if (e === null) {
      c = t.stateNode;
      var g = t.memoizedProps, C = Wn(l, g);
      c.props = C;
      var Y = c.context, ee = l.contextType;
      f = fa, typeof ee == "object" && ee !== null && (f = It(ee));
      var ae = l.getDerivedStateFromProps;
      ee = typeof ae == "function" || typeof c.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, ee || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g || Y !== f) && Sf(t, c, n, f), vn = false;
      var Q = t.memoizedState;
      c.state = Q, rs(t, n, c, s), us(), Y = t.memoizedState, g || Q !== Y || vn ? (typeof ae == "function" && (dr(t, l, ae, n), Y = t.memoizedState), (C = vn || bf(t, l, C, n, Q, Y, f)) ? (ee || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = Y), c.props = n, c.state = Y, c.context = f, n = C) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), n = false);
    } else {
      c = t.stateNode, Zu(e, t), f = t.memoizedProps, ee = Wn(l, f), c.props = ee, ae = t.pendingProps, Q = c.context, Y = l.contextType, C = fa, typeof Y == "object" && Y !== null && (C = It(Y)), g = l.getDerivedStateFromProps, (Y = typeof g == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (f !== ae || Q !== C) && Sf(t, c, n, C), vn = false, Q = t.memoizedState, c.state = Q, rs(t, n, c, s), us();
      var K = t.memoizedState;
      f !== ae || Q !== K || vn || e !== null && e.dependencies !== null && ai(e.dependencies) ? (typeof g == "function" && (dr(t, l, g, n), K = t.memoizedState), (ee = vn || bf(t, l, ee, n, Q, K, C) || e !== null && e.dependencies !== null && ai(e.dependencies)) ? (Y || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(n, K, C), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(n, K, C)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || f === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = K), c.props = n, c.state = K, c.context = C, n = ee) : (typeof c.componentDidUpdate != "function" || f === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), n = false);
    }
    return c = n, ji(e, t), n = (t.flags & 128) !== 0, c || n ? (c = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && n ? (t.child = Fn(t, e.child, null, s), t.child = Fn(t, null, l, s)) : Pt(e, t, l, s), t.memoizedState = c.state, e = t.child) : e = en(e, t, s), e;
  }
  function qf(e, t, l, n) {
    return Vn(), t.flags |= 256, Pt(e, t, l, n), t.child;
  }
  var br = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Sr(e) {
    return { baseLanes: e, cachePool: jo() };
  }
  function wr(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= xl), e;
  }
  function Uf(e, t, l) {
    var n = t.pendingProps, s = false, c = (t.flags & 128) !== 0, f;
    if ((f = c) || (f = e !== null && e.memoizedState === null ? false : (Ut.current & 2) !== 0), f && (s = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (st) {
        if (s ? wn(t) : xn(), (e = Et) ? (e = Hh(e, Cl), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: dn !== null ? { id: Xl, overflow: Ql } : null, retryLane: 536870912, hydrationErrors: null }, l = mo(e), l.return = t, t.child = l, Wt = t, Et = null)) : e = null, e === null) throw yn(t);
        return nc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var g = n.children;
      return n = n.fallback, s ? (xn(), s = t.mode, g = Ei({ mode: "hidden", children: g }, s), n = Qn(n, s, l, null), g.return = t, n.return = t, g.sibling = n, t.child = g, n = t.child, n.memoizedState = Sr(l), n.childLanes = wr(e, f, l), t.memoizedState = br, ms(null, n)) : (wn(t), xr(t, g));
    }
    var C = e.memoizedState;
    if (C !== null && (g = C.dehydrated, g !== null)) {
      if (c) t.flags & 256 ? (wn(t), t.flags &= -257, t = jr(e, t, l)) : t.memoizedState !== null ? (xn(), t.child = e.child, t.flags |= 128, t = null) : (xn(), g = n.fallback, s = t.mode, n = Ei({ mode: "visible", children: n.children }, s), g = Qn(g, s, l, null), g.flags |= 2, n.return = t, g.return = t, n.sibling = g, t.child = n, Fn(t, e.child, null, l), n = t.child, n.memoizedState = Sr(l), n.childLanes = wr(e, f, l), t.memoizedState = br, t = ms(null, n));
      else if (wn(t), nc(g)) {
        if (f = g.nextSibling && g.nextSibling.dataset, f) var Y = f.dgst;
        f = Y, n = Error(p(419)), n.stack = "", n.digest = f, ts({ value: n, source: null, stack: null }), t = jr(e, t, l);
      } else if (Vt || ga(e, t, l, false), f = (l & e.childLanes) !== 0, Vt || f) {
        if (f = wt, f !== null && (n = T(f, l), n !== 0 && n !== C.retryLane)) throw C.retryLane = n, Xn(e, n), dl(f, e, n), pr;
        lc(g) || Oi(), t = jr(e, t, l);
      } else lc(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = C.treeContext, Et = Al(g.nextSibling), Wt = t, st = true, gn = null, Cl = false, e !== null && po(t, e), t = xr(t, n.children), t.flags |= 4096);
      return t;
    }
    return s ? (xn(), g = n.fallback, s = t.mode, C = e.child, Y = C.sibling, n = kl(C, { mode: "hidden", children: n.children }), n.subtreeFlags = C.subtreeFlags & 65011712, Y !== null ? g = kl(Y, g) : (g = Qn(g, s, l, null), g.flags |= 2), g.return = t, n.return = t, n.sibling = g, t.child = n, ms(null, n), n = t.child, g = e.child.memoizedState, g === null ? g = Sr(l) : (s = g.cachePool, s !== null ? (C = Xt._currentValue, s = s.parent !== C ? { parent: C, pool: C } : s) : s = jo(), g = { baseLanes: g.baseLanes | l, cachePool: s }), n.memoizedState = g, n.childLanes = wr(e, f, l), t.memoizedState = br, ms(e.child, n)) : (wn(t), l = e.child, e = l.sibling, l = kl(l, { mode: "visible", children: n.children }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function xr(e, t) {
    return t = Ei({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
  }
  function Ei(e, t) {
    return e = vl(22, e, null, t), e.lanes = 0, e;
  }
  function jr(e, t, l) {
    return Fn(t, e.child, null, l), e = xr(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bf(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Lu(e.return, t, l);
  }
  function Er(e, t, l, n, s, c) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: l, tailMode: s, treeForkCount: c } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = n, f.tail = l, f.tailMode = s, f.treeForkCount = c);
  }
  function Lf(e, t, l) {
    var n = t.pendingProps, s = n.revealOrder, c = n.tail;
    n = n.children;
    var f = Ut.current, g = (f & 2) !== 0;
    if (g ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, se(Ut, f), Pt(e, t, n, l), n = st ? es : 0, !g && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Bf(e, l, t);
      else if (e.tag === 19) Bf(e, l, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (s) {
      case "forwards":
        for (l = t.child, s = null; l !== null; ) e = l.alternate, e !== null && hi(e) === null && (s = l), l = l.sibling;
        l = s, l === null ? (s = t.child, t.child = null) : (s = l.sibling, l.sibling = null), Er(t, false, s, l, c, n);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && hi(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = l, l = s, s = e;
        }
        Er(t, true, l, null, c, n);
        break;
      case "together":
        Er(t, false, null, null, void 0, n);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function en(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
      if (ga(e, t, l, false), (l & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, l = kl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; ) e = e.sibling, l = l.sibling = kl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Nr(e, t) {
    return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && ai(e)));
  }
  function tg(e, t, l) {
    switch (t.tag) {
      case 3:
        Ge(t, t.stateNode.containerInfo), pn(t, Xt, e.memoizedState.cache), Vn();
        break;
      case 27:
      case 5:
        gt(t);
        break;
      case 4:
        Ge(t, t.stateNode.containerInfo);
        break;
      case 10:
        pn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, $u(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null) return n.dehydrated !== null ? (wn(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Uf(e, t, l) : (wn(t), e = en(e, t, l), e !== null ? e.sibling : null);
        wn(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (ga(e, t, l, false), n = (l & t.childLanes) !== 0), s) {
          if (n) return Lf(e, t, l);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), se(Ut, Ut.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, zf(e, t, l, t.pendingProps);
      case 24:
        pn(t, Xt, e.memoizedState.cache);
    }
    return en(e, t, l);
  }
  function Gf(e, t, l) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) Vt = true;
    else {
      if (!Nr(e, l) && (t.flags & 128) === 0) return Vt = false, tg(e, t, l);
      Vt = (e.flags & 131072) !== 0;
    }
    else Vt = false, st && (t.flags & 1048576) !== 0 && yo(t, es, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Jn(t.elementType), t.type = e, typeof e == "function") zu(e) ? (n = Wn(e, n), t.tag = 1, t = Rf(null, t, e, n, l)) : (t.tag = 0, t = vr(null, t, e, n, l));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === Je) {
                t.tag = 11, t = _f(null, t, e, n, l);
                break e;
              } else if (s === pe) {
                t.tag = 14, t = Tf(null, t, e, n, l);
                break e;
              }
            }
            throw t = ke(e) || e, Error(p(306, t, ""));
          }
        }
        return t;
      case 0:
        return vr(e, t, t.type, t.pendingProps, l);
      case 1:
        return n = t.type, s = Wn(n, t.pendingProps), Rf(e, t, n, s, l);
      case 3:
        e: {
          if (Ge(t, t.stateNode.containerInfo), e === null) throw Error(p(387));
          n = t.pendingProps;
          var c = t.memoizedState;
          s = c.element, Zu(e, t), rs(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, pn(t, Xt, n), n !== c.cache && Gu(t, [Xt], l, true), us(), n = f.element, c.isDehydrated) if (c = { element: n, isDehydrated: false, cache: f.cache }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
            t = qf(e, t, n, l);
            break e;
          } else if (n !== s) {
            s = Ml(Error(p(424)), t), ts(s), t = qf(e, t, n, l);
            break e;
          } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Et = Al(e.firstChild), Wt = t, st = true, gn = null, Cl = true, l = Co(t, null, n, l), t.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Vn(), n === s) {
              t = en(e, t, l);
              break e;
            }
            Pt(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ji(e, t), e === null ? (l = $h(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : st || (l = t.type, e = t.pendingProps, n = Yi(W.current).createElement(l), n[M] = t, n[re] = e, el(n, l, e), $e(n), t.stateNode = n) : t.memoizedState = $h(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return gt(t), e === null && st && (n = t.stateNode = Jh(t.type, t.pendingProps, W.current), Wt = t, Cl = true, s = Et, zn(t.type) ? (ac = s, Et = Al(n.firstChild)) : Et = s), Pt(e, t, t.pendingProps.children, l), ji(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && st && ((s = n = Et) && (n = Ag(n, t.type, t.pendingProps, Cl), n !== null ? (t.stateNode = n, Wt = t, Et = Al(n.firstChild), Cl = false, s = true) : s = false), s || yn(t)), gt(t), s = t.type, c = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = c.children, Pr(s, c) ? n = null : f !== null && Pr(s, f) && (t.flags |= 32), t.memoizedState !== null && (s = Iu(e, t, Kd, null, null, l), Ts._currentValue = s), ji(e, t), Pt(e, t, n, l), t.child;
      case 6:
        return e === null && st && ((e = l = Et) && (l = Dg(l, t.pendingProps, Cl), l !== null ? (t.stateNode = l, Wt = t, Et = null, e = true) : e = false), e || yn(t)), null;
      case 13:
        return Uf(e, t, l);
      case 4:
        return Ge(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Fn(t, null, n, l) : Pt(e, t, n, l), t.child;
      case 11:
        return _f(e, t, t.type, t.pendingProps, l);
      case 7:
        return Pt(e, t, t.pendingProps, l), t.child;
      case 8:
        return Pt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return Pt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return n = t.pendingProps, pn(t, t.type, n.value), Pt(e, t, n.children, l), t.child;
      case 9:
        return s = t.type._context, n = t.pendingProps.children, Zn(t), s = It(s), n = n(s), t.flags |= 1, Pt(e, t, n, l), t.child;
      case 14:
        return Tf(e, t, t.type, t.pendingProps, l);
      case 15:
        return Cf(e, t, t.type, t.pendingProps, l);
      case 19:
        return Lf(e, t, l);
      case 31:
        return eg(e, t, l);
      case 22:
        return zf(e, t, l, t.pendingProps);
      case 24:
        return Zn(t), n = It(Xt), e === null ? (s = Qu(), s === null && (s = wt, c = Yu(), s.pooledCache = c, c.refCount++, c !== null && (s.pooledCacheLanes |= l), s = c), t.memoizedState = { parent: n, cache: s }, Hu(t), pn(t, Xt, s)) : ((e.lanes & l) !== 0 && (Zu(e, t), rs(t, null, null, l), us()), s = e.memoizedState, c = t.memoizedState, s.parent !== n ? (s = { parent: n, cache: n }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), pn(t, Xt, n)) : (n = c.cache, pn(t, Xt, n), n !== s.cache && Gu(t, [Xt], l, true))), Pt(e, t, t.pendingProps.children, l), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(p(156, t.tag));
  }
  function tn(e) {
    e.flags |= 4;
  }
  function Mr(e, t, l, n, s) {
    if ((t = (e.mode & 32) !== 0) && (t = false), t) {
      if (e.flags |= 16777216, (s & 335544128) === s) if (e.stateNode.complete) e.flags |= 8192;
      else if (hh()) e.flags |= 8192;
      else throw kn = ri, Vu;
    } else e.flags &= -16777217;
  }
  function Yf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !tm(t)) if (hh()) e.flags |= 8192;
    else throw kn = ri, Vu;
  }
  function Ni(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? o() : 536870912, e.lanes |= t, _a |= t);
  }
  function ds(e, t) {
    if (!st) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var l = null; t !== null; ) t.alternate !== null && (l = t), t = t.sibling;
        l === null ? e.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = e.tail;
        for (var n = null; l !== null; ) l.alternate !== null && (n = l), l = l.sibling;
        n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
    }
  }
  function Nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t) for (var s = e.child; s !== null; ) l |= s.lanes | s.childLanes, n |= s.subtreeFlags & 65011712, n |= s.flags & 65011712, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) l |= s.lanes | s.childLanes, n |= s.subtreeFlags, n |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function lg(e, t, l) {
    var n = t.pendingProps;
    switch (Ru(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nt(t), null;
      case 1:
        return Nt(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Wl(Xt), qe(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (da(t) ? tn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uu())), Nt(t), null;
      case 26:
        var s = t.type, c = t.memoizedState;
        return e === null ? (tn(t), c !== null ? (Nt(t), Yf(t, c)) : (Nt(t), Mr(t, s, null, n, l))) : c ? c !== e.memoizedState ? (tn(t), Nt(t), Yf(t, c)) : (Nt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && tn(t), Nt(t), Mr(t, s, e, n, l)), null;
      case 27:
        if (tl(t), l = W.current, s = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && tn(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(p(166));
            return Nt(t), null;
          }
          e = me.current, da(t) ? vo(t) : (e = Jh(s, n, l), t.stateNode = e, tn(t));
        }
        return Nt(t), null;
      case 5:
        if (tl(t), s = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && tn(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(p(166));
            return Nt(t), null;
          }
          if (c = me.current, da(t)) vo(t);
          else {
            var f = Yi(W.current);
            switch (c) {
              case 1:
                c = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                c = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    c = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    c = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    c = f.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(c.firstChild);
                    break;
                  case "select":
                    c = typeof n.is == "string" ? f.createElement("select", { is: n.is }) : f.createElement("select"), n.multiple ? c.multiple = true : n.size && (c.size = n.size);
                    break;
                  default:
                    c = typeof n.is == "string" ? f.createElement(s, { is: n.is }) : f.createElement(s);
                }
            }
            c[M] = t, c[re] = n;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) c.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = c;
            e: switch (el(c, s, n), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = true;
                break e;
              default:
                n = false;
            }
            n && tn(t);
          }
        }
        return Nt(t), Mr(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && tn(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(p(166));
          if (e = W.current, da(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, s = Wt, s !== null) switch (s.tag) {
              case 27:
              case 5:
                n = s.memoizedProps;
            }
            e[M] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === true || Uh(e.nodeValue, l)), e || yn(t, true);
          } else e = Yi(e).createTextNode(n), e[M] = t, t.stateNode = e;
        }
        return Nt(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = da(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(p(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(557));
              e[M] = t;
            } else Vn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Nt(t), e = false;
          } else l = Uu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = true;
          if (!e) return t.flags & 256 ? (Sl(t), t) : (Sl(t), null);
          if ((t.flags & 128) !== 0) throw Error(p(558));
        }
        return Nt(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = da(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(p(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(p(317));
              s[M] = t;
            } else Vn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Nt(t), s = false;
          } else s = Uu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = true;
          if (!s) return t.flags & 256 ? (Sl(t), t) : (Sl(t), null);
        }
        return Sl(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, s = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (s = n.alternate.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== s && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Ni(t, t.updateQueue), Nt(t), null);
      case 4:
        return qe(), e === null && kr(t.stateNode.containerInfo), Nt(t), null;
      case 10:
        return Wl(t.type), Nt(t), null;
      case 19:
        if (O(Ut), n = t.memoizedState, n === null) return Nt(t), null;
        if (s = (t.flags & 128) !== 0, c = n.rendering, c === null) if (s) ds(n, false);
        else {
          if (Rt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (c = hi(e), c !== null) {
              for (t.flags |= 128, ds(n, false), e = c.updateQueue, t.updateQueue = e, Ni(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; ) ho(l, e), l = l.sibling;
              return se(Ut, Ut.current & 1 | 2), st && Fl(t, n.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          n.tail !== null && yt() > zi && (t.flags |= 128, s = true, ds(n, false), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = hi(c), e !== null) {
            if (t.flags |= 128, s = true, e = e.updateQueue, t.updateQueue = e, Ni(t, e), ds(n, true), n.tail === null && n.tailMode === "hidden" && !c.alternate && !st) return Nt(t), null;
          } else 2 * yt() - n.renderingStartTime > zi && l !== 536870912 && (t.flags |= 128, s = true, ds(n, false), t.lanes = 4194304);
          n.isBackwards ? (c.sibling = t.child, t.child = c) : (e = n.last, e !== null ? e.sibling = c : t.child = c, n.last = c);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Ut.current, se(Ut, s ? l & 1 | 2 : l & 1), st && Fl(t, n.treeForkCount), e) : (Nt(t), null);
      case 22:
      case 23:
        return Sl(t), Fu(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Nt(t), l = t.updateQueue, l !== null && Ni(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && O(Kn), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Wl(Xt), Nt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function ng(e, t) {
    switch (Ru(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wl(Xt), qe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return tl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Sl(t), t.alternate === null) throw Error(p(340));
          Vn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Sl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(p(340));
          Vn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return O(Ut), null;
      case 4:
        return qe(), null;
      case 10:
        return Wl(t.type), null;
      case 22:
      case 23:
        return Sl(t), Fu(), e !== null && O(Kn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Wl(Xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xf(e, t) {
    switch (Ru(t), t.tag) {
      case 3:
        Wl(Xt), qe();
        break;
      case 26:
      case 27:
      case 5:
        tl(t);
        break;
      case 4:
        qe();
        break;
      case 31:
        t.memoizedState !== null && Sl(t);
        break;
      case 13:
        Sl(t);
        break;
      case 19:
        O(Ut);
        break;
      case 10:
        Wl(t.type);
        break;
      case 22:
      case 23:
        Sl(t), Fu(), e !== null && O(Kn);
        break;
      case 24:
        Wl(Xt);
    }
  }
  function gs(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var s = n.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var c = l.create, f = l.inst;
            n = c(), f.destroy = n;
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (g) {
      dt(t, t.return, g);
    }
  }
  function jn(e, t, l) {
    try {
      var n = t.updateQueue, s = n !== null ? n.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        n = c;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst, g = f.destroy;
            if (g !== void 0) {
              f.destroy = void 0, s = t;
              var C = l, Y = g;
              try {
                Y();
              } catch (ee) {
                dt(s, C, ee);
              }
            }
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (ee) {
      dt(t, t.return, ee);
    }
  }
  function Qf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Ao(t, l);
      } catch (n) {
        dt(e, e.return, n);
      }
    }
  }
  function Vf(e, t, l) {
    l.props = Wn(e.type, e.memoizedProps), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      dt(e, t, n);
    }
  }
  function ys(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
      }
    } catch (s) {
      dt(e, t, s);
    }
  }
  function Vl(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null) if (typeof n == "function") try {
      n();
    } catch (s) {
      dt(e, t, s);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof l == "function") try {
      l(null);
    } catch (s) {
      dt(e, t, s);
    }
    else l.current = null;
  }
  function Hf(e) {
    var t = e.type, l = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (s) {
      dt(e, e.return, s);
    }
  }
  function _r(e, t, l) {
    try {
      var n = e.stateNode;
      Ng(n, e.type, l, t), n[re] = t;
    } catch (s) {
      dt(e, e.return, s);
    }
  }
  function Zf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zn(e.type) || e.tag === 4;
  }
  function Tr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && zn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Cr(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Kl));
    else if (n !== 4 && (n === 27 && zn(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for (Cr(e, t, l), e = e.sibling; e !== null; ) Cr(e, t, l), e = e.sibling;
  }
  function Mi(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && zn(e.type) && (l = e.stateNode), e = e.child, e !== null)) for (Mi(e, t, l), e = e.sibling; e !== null; ) Mi(e, t, l), e = e.sibling;
  }
  function Kf(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, s = t.attributes; s.length; ) t.removeAttributeNode(s[0]);
      el(t, n, l), t[M] = e, t[re] = l;
    } catch (c) {
      dt(e, e.return, c);
    }
  }
  var ln = false, Ht = false, zr = false, Jf = typeof WeakSet == "function" ? WeakSet : Set, Ft = null;
  function ag(e, t) {
    if (e = e.containerInfo, Wr = Ji, e = no(e), ju(e)) {
      if ("selectionStart" in e) var l = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        l = (l = e.ownerDocument) && l.defaultView || window;
        var n = l.getSelection && l.getSelection();
        if (n && n.rangeCount !== 0) {
          l = n.anchorNode;
          var s = n.anchorOffset, c = n.focusNode;
          n = n.focusOffset;
          try {
            l.nodeType, c.nodeType;
          } catch {
            l = null;
            break e;
          }
          var f = 0, g = -1, C = -1, Y = 0, ee = 0, ae = e, Q = null;
          t: for (; ; ) {
            for (var K; ae !== l || s !== 0 && ae.nodeType !== 3 || (g = f + s), ae !== c || n !== 0 && ae.nodeType !== 3 || (C = f + n), ae.nodeType === 3 && (f += ae.nodeValue.length), (K = ae.firstChild) !== null; ) Q = ae, ae = K;
            for (; ; ) {
              if (ae === e) break t;
              if (Q === l && ++Y === s && (g = f), Q === c && ++ee === n && (C = f), (K = ae.nextSibling) !== null) break;
              ae = Q, Q = ae.parentNode;
            }
            ae = K;
          }
          l = g === -1 || C === -1 ? null : { start: g, end: C };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ir = { focusedElem: e, selectionRange: l }, Ji = false, Ft = t; Ft !== null; ) if (t = Ft, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ft = e;
    else for (; Ft !== null; ) {
      switch (t = Ft, c = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (l = 0; l < e.length; l++) s = e[l], s.ref.impl = s.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && c !== null) {
            e = void 0, l = t, s = c.memoizedProps, c = c.memoizedState, n = l.stateNode;
            try {
              var Ce = Wn(l.type, s);
              e = n.getSnapshotBeforeUpdate(Ce, c), n.__reactInternalSnapshotBeforeUpdate = e;
            } catch (Ve) {
              dt(l, l.return, Ve);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) tc(e);
            else if (l === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                tc(e);
                break;
              default:
                e.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((e & 1024) !== 0) throw Error(p(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Ft = e;
        break;
      }
      Ft = t.return;
    }
  }
  function kf(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        an(e, l), n & 4 && gs(5, l);
        break;
      case 1:
        if (an(e, l), n & 4) if (e = l.stateNode, t === null) try {
          e.componentDidMount();
        } catch (f) {
          dt(l, l.return, f);
        }
        else {
          var s = Wn(l.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (f) {
            dt(l, l.return, f);
          }
        }
        n & 64 && Qf(l), n & 512 && ys(l, l.return);
        break;
      case 3:
        if (an(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              t = l.child.stateNode;
              break;
            case 1:
              t = l.child.stateNode;
          }
          try {
            Ao(e, t);
          } catch (f) {
            dt(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Kf(l);
      case 26:
      case 5:
        an(e, l), t === null && n & 4 && Hf(l), n & 512 && ys(l, l.return);
        break;
      case 12:
        an(e, l);
        break;
      case 31:
        an(e, l), n & 4 && Wf(e, l);
        break;
      case 13:
        an(e, l), n & 4 && If(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = mg.bind(null, l), Og(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || ln, !n) {
          t = t !== null && t.memoizedState !== null || Ht, s = ln;
          var c = Ht;
          ln = n, (Ht = t) && !c ? sn(e, l, (l.subtreeFlags & 8772) !== 0) : an(e, l), ln = s, Ht = c;
        }
        break;
      case 30:
        break;
      default:
        an(e, l);
    }
  }
  function Ff(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ff(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ft(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Tt = null, ol = false;
  function nn(e, t, l) {
    for (l = l.child; l !== null; ) $f(e, t, l), l = l.sibling;
  }
  function $f(e, t, l) {
    if (kt && typeof kt.onCommitFiberUnmount == "function") try {
      kt.onCommitFiberUnmount(Yl, l);
    } catch {
    }
    switch (l.tag) {
      case 26:
        Ht || Vl(l, t), nn(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ht || Vl(l, t);
        var n = Tt, s = ol;
        zn(l.type) && (Tt = l.stateNode, ol = false), nn(e, t, l), Ns(l.stateNode), Tt = n, ol = s;
        break;
      case 5:
        Ht || Vl(l, t);
      case 6:
        if (n = Tt, s = ol, Tt = null, nn(e, t, l), Tt = n, ol = s, Tt !== null) if (ol) try {
          (Tt.nodeType === 9 ? Tt.body : Tt.nodeName === "HTML" ? Tt.ownerDocument.body : Tt).removeChild(l.stateNode);
        } catch (c) {
          dt(l, t, c);
        }
        else try {
          Tt.removeChild(l.stateNode);
        } catch (c) {
          dt(l, t, c);
        }
        break;
      case 18:
        Tt !== null && (ol ? (e = Tt, Qh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), qa(e)) : Qh(Tt, l.stateNode));
        break;
      case 4:
        n = Tt, s = ol, Tt = l.stateNode.containerInfo, ol = true, nn(e, t, l), Tt = n, ol = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jn(2, l, t), Ht || jn(4, l, t), nn(e, t, l);
        break;
      case 1:
        Ht || (Vl(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && Vf(l, t, n)), nn(e, t, l);
        break;
      case 21:
        nn(e, t, l);
        break;
      case 22:
        Ht = (n = Ht) || l.memoizedState !== null, nn(e, t, l), Ht = n;
        break;
      default:
        nn(e, t, l);
    }
  }
  function Wf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        qa(e);
      } catch (l) {
        dt(t, t.return, l);
      }
    }
  }
  function If(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      qa(e);
    } catch (l) {
      dt(t, t.return, l);
    }
  }
  function sg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Jf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Jf()), t;
      default:
        throw Error(p(435, e.tag));
    }
  }
  function _i(e, t) {
    var l = sg(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var s = dg.bind(null, e, n);
        n.then(s, s);
      }
    });
  }
  function fl(e, t) {
    var l = t.deletions;
    if (l !== null) for (var n = 0; n < l.length; n++) {
      var s = l[n], c = e, f = t, g = f;
      e: for (; g !== null; ) {
        switch (g.tag) {
          case 27:
            if (zn(g.type)) {
              Tt = g.stateNode, ol = false;
              break e;
            }
            break;
          case 5:
            Tt = g.stateNode, ol = false;
            break e;
          case 3:
          case 4:
            Tt = g.stateNode.containerInfo, ol = true;
            break e;
        }
        g = g.return;
      }
      if (Tt === null) throw Error(p(160));
      $f(c, f, s), Tt = null, ol = false, c = s.alternate, c !== null && (c.return = null), s.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Pf(t, e), t = t.sibling;
  }
  var Bl = null;
  function Pf(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fl(t, e), hl(e), n & 4 && (jn(3, e, e.return), gs(3, e), jn(5, e, e.return));
        break;
      case 1:
        fl(t, e), hl(e), n & 512 && (Ht || l === null || Vl(l, l.return)), n & 64 && ln && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var s = Bl;
        if (fl(t, e), hl(e), n & 512 && (Ht || l === null || Vl(l, l.return)), n & 4) {
          var c = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
            e: {
              n = e.type, l = e.memoizedProps, s = s.ownerDocument || s;
              t: switch (n) {
                case "title":
                  c = s.getElementsByTagName("title")[0], (!c || c[Ue] || c[M] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = s.createElement(n), s.head.insertBefore(c, s.querySelector("head > title"))), el(c, n, l), c[M] = e, $e(c), n = c;
                  break e;
                case "link":
                  var f = Ph("link", "href", s).get(n + (l.href || ""));
                  if (f) {
                    for (var g = 0; g < f.length; g++) if (c = f[g], c.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && c.getAttribute("rel") === (l.rel == null ? null : l.rel) && c.getAttribute("title") === (l.title == null ? null : l.title) && c.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      f.splice(g, 1);
                      break t;
                    }
                  }
                  c = s.createElement(n), el(c, n, l), s.head.appendChild(c);
                  break;
                case "meta":
                  if (f = Ph("meta", "content", s).get(n + (l.content || ""))) {
                    for (g = 0; g < f.length; g++) if (c = f[g], c.getAttribute("content") === (l.content == null ? null : "" + l.content) && c.getAttribute("name") === (l.name == null ? null : l.name) && c.getAttribute("property") === (l.property == null ? null : l.property) && c.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && c.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      f.splice(g, 1);
                      break t;
                    }
                  }
                  c = s.createElement(n), el(c, n, l), s.head.appendChild(c);
                  break;
                default:
                  throw Error(p(468, n));
              }
              c[M] = e, $e(c), n = c;
            }
            e.stateNode = n;
          } else em(s, e.type, e.stateNode);
          else e.stateNode = Ih(s, n, e.memoizedProps);
          else c !== n ? (c === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : c.count--, n === null ? em(s, e.type, e.stateNode) : Ih(s, n, e.memoizedProps)) : n === null && e.stateNode !== null && _r(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        fl(t, e), hl(e), n & 512 && (Ht || l === null || Vl(l, l.return)), l !== null && n & 4 && _r(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (fl(t, e), hl(e), n & 512 && (Ht || l === null || Vl(l, l.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            aa(s, "");
          } catch (Ce) {
            dt(e, e.return, Ce);
          }
        }
        n & 4 && e.stateNode != null && (s = e.memoizedProps, _r(e, s, l !== null ? l.memoizedProps : s)), n & 1024 && (zr = true);
        break;
      case 6:
        if (fl(t, e), hl(e), n & 4) {
          if (e.stateNode === null) throw Error(p(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (Ce) {
            dt(e, e.return, Ce);
          }
        }
        break;
      case 3:
        if (Vi = null, s = Bl, Bl = Xi(t.containerInfo), fl(t, e), Bl = s, hl(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
          qa(t.containerInfo);
        } catch (Ce) {
          dt(e, e.return, Ce);
        }
        zr && (zr = false, eh(e));
        break;
      case 4:
        n = Bl, Bl = Xi(e.stateNode.containerInfo), fl(t, e), hl(e), Bl = n;
        break;
      case 12:
        fl(t, e), hl(e);
        break;
      case 31:
        fl(t, e), hl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _i(e, n)));
        break;
      case 13:
        fl(t, e), hl(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ci = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _i(e, n)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var C = l !== null && l.memoizedState !== null, Y = ln, ee = Ht;
        if (ln = Y || s, Ht = ee || C, fl(t, e), Ht = ee, ln = Y, hl(e), n & 8192) e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (l === null || C || ln || Ht || In(e)), l = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (l === null) {
              C = l = t;
              try {
                if (c = C.stateNode, s) f = c.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                else {
                  g = C.stateNode;
                  var ae = C.memoizedProps.style, Q = ae != null && ae.hasOwnProperty("display") ? ae.display : null;
                  g.style.display = Q == null || typeof Q == "boolean" ? "" : ("" + Q).trim();
                }
              } catch (Ce) {
                dt(C, C.return, Ce);
              }
            }
          } else if (t.tag === 6) {
            if (l === null) {
              C = t;
              try {
                C.stateNode.nodeValue = s ? "" : C.memoizedProps;
              } catch (Ce) {
                dt(C, C.return, Ce);
              }
            }
          } else if (t.tag === 18) {
            if (l === null) {
              C = t;
              try {
                var K = C.stateNode;
                s ? Vh(K, true) : Vh(C.stateNode, false);
              } catch (Ce) {
                dt(C, C.return, Ce);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            l === t && (l = null), t = t.return;
          }
          l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
        }
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, _i(e, l))));
        break;
      case 19:
        fl(t, e), hl(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _i(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fl(t, e), hl(e);
    }
  }
  function hl(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (Zf(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(p(160));
        switch (l.tag) {
          case 27:
            var s = l.stateNode, c = Tr(e);
            Mi(e, c, s);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (aa(f, ""), l.flags &= -33);
            var g = Tr(e);
            Mi(e, g, f);
            break;
          case 3:
          case 4:
            var C = l.stateNode.containerInfo, Y = Tr(e);
            Cr(e, Y, C);
            break;
          default:
            throw Error(p(161));
        }
      } catch (ee) {
        dt(e, e.return, ee);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function eh(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      eh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function an(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) kf(e, t.alternate, t), t = t.sibling;
  }
  function In(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jn(4, t, t.return), In(t);
          break;
        case 1:
          Vl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Vf(t, t.return, l), In(t);
          break;
        case 27:
          Ns(t.stateNode);
        case 26:
        case 5:
          Vl(t, t.return), In(t);
          break;
        case 22:
          t.memoizedState === null && In(t);
          break;
        case 30:
          In(t);
          break;
        default:
          In(t);
      }
      e = e.sibling;
    }
  }
  function sn(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, s = e, c = t, f = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          sn(s, c, l), gs(4, c);
          break;
        case 1:
          if (sn(s, c, l), n = c, s = n.stateNode, typeof s.componentDidMount == "function") try {
            s.componentDidMount();
          } catch (Y) {
            dt(n, n.return, Y);
          }
          if (n = c, s = n.updateQueue, s !== null) {
            var g = n.stateNode;
            try {
              var C = s.shared.hiddenCallbacks;
              if (C !== null) for (s.shared.hiddenCallbacks = null, s = 0; s < C.length; s++) zo(C[s], g);
            } catch (Y) {
              dt(n, n.return, Y);
            }
          }
          l && f & 64 && Qf(c), ys(c, c.return);
          break;
        case 27:
          Kf(c);
        case 26:
        case 5:
          sn(s, c, l), l && n === null && f & 4 && Hf(c), ys(c, c.return);
          break;
        case 12:
          sn(s, c, l);
          break;
        case 31:
          sn(s, c, l), l && f & 4 && Wf(s, c);
          break;
        case 13:
          sn(s, c, l), l && f & 4 && If(s, c);
          break;
        case 22:
          c.memoizedState === null && sn(s, c, l), ys(c, c.return);
          break;
        case 30:
          break;
        default:
          sn(s, c, l);
      }
      t = t.sibling;
    }
  }
  function Ar(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ls(l));
  }
  function Dr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ls(e));
  }
  function Ll(e, t, l, n) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) th(e, t, l, n), t = t.sibling;
  }
  function th(e, t, l, n) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ll(e, t, l, n), s & 2048 && gs(9, t);
        break;
      case 1:
        Ll(e, t, l, n);
        break;
      case 3:
        Ll(e, t, l, n), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ls(e)));
        break;
      case 12:
        if (s & 2048) {
          Ll(e, t, l, n), e = t.stateNode;
          try {
            var c = t.memoizedProps, f = c.id, g = c.onPostCommit;
            typeof g == "function" && g(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (C) {
            dt(t, t.return, C);
          }
        } else Ll(e, t, l, n);
        break;
      case 31:
        Ll(e, t, l, n);
        break;
      case 13:
        Ll(e, t, l, n);
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, f = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? Ll(e, t, l, n) : ps(e, t) : c._visibility & 2 ? Ll(e, t, l, n) : (c._visibility |= 2, Ea(e, t, l, n, (t.subtreeFlags & 10256) !== 0 || false)), s & 2048 && Ar(f, t);
        break;
      case 24:
        Ll(e, t, l, n), s & 2048 && Dr(t.alternate, t);
        break;
      default:
        Ll(e, t, l, n);
    }
  }
  function Ea(e, t, l, n, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var c = e, f = t, g = l, C = n, Y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ea(c, f, g, C, s), gs(8, f);
          break;
        case 23:
          break;
        case 22:
          var ee = f.stateNode;
          f.memoizedState !== null ? ee._visibility & 2 ? Ea(c, f, g, C, s) : ps(c, f) : (ee._visibility |= 2, Ea(c, f, g, C, s)), s && Y & 2048 && Ar(f.alternate, f);
          break;
        case 24:
          Ea(c, f, g, C, s), s && Y & 2048 && Dr(f.alternate, f);
          break;
        default:
          Ea(c, f, g, C, s);
      }
      t = t.sibling;
    }
  }
  function ps(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var l = e, n = t, s = n.flags;
      switch (n.tag) {
        case 22:
          ps(l, n), s & 2048 && Ar(n.alternate, n);
          break;
        case 24:
          ps(l, n), s & 2048 && Dr(n.alternate, n);
          break;
        default:
          ps(l, n);
      }
      t = t.sibling;
    }
  }
  var vs = 8192;
  function Na(e, t, l) {
    if (e.subtreeFlags & vs) for (e = e.child; e !== null; ) lh(e, t, l), e = e.sibling;
  }
  function lh(e, t, l) {
    switch (e.tag) {
      case 26:
        Na(e, t, l), e.flags & vs && e.memoizedState !== null && Zg(l, Bl, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Na(e, t, l);
        break;
      case 3:
      case 4:
        var n = Bl;
        Bl = Xi(e.stateNode.containerInfo), Na(e, t, l), Bl = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = vs, vs = 16777216, Na(e, t, l), vs = n) : Na(e, t, l));
        break;
      default:
        Na(e, t, l);
    }
  }
  function nh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function bs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var l = 0; l < t.length; l++) {
        var n = t[l];
        Ft = n, sh(n, e);
      }
      nh(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) ah(e), e = e.sibling;
  }
  function ah(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bs(e), e.flags & 2048 && jn(9, e, e.return);
        break;
      case 3:
        bs(e);
        break;
      case 12:
        bs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ti(e)) : bs(e);
        break;
      default:
        bs(e);
    }
  }
  function Ti(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var l = 0; l < t.length; l++) {
        var n = t[l];
        Ft = n, sh(n, e);
      }
      nh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          jn(8, t, t.return), Ti(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Ti(t));
          break;
        default:
          Ti(t);
      }
      e = e.sibling;
    }
  }
  function sh(e, t) {
    for (; Ft !== null; ) {
      var l = Ft;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          jn(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ls(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, Ft = n;
      else e: for (l = e; Ft !== null; ) {
        n = Ft;
        var s = n.sibling, c = n.return;
        if (Ff(n), n === l) {
          Ft = null;
          break e;
        }
        if (s !== null) {
          s.return = c, Ft = s;
          break e;
        }
        Ft = c;
      }
    }
  }
  var ig = { getCacheForType: function(e) {
    var t = It(Xt), l = t.data.get(e);
    return l === void 0 && (l = e(), t.data.set(e, l)), l;
  }, cacheSignal: function() {
    return It(Xt).controller.signal;
  } }, ug = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, wt = null, tt = null, nt = 0, mt = 0, wl = null, En = false, Ma = false, Or = false, un = 0, Rt = 0, Nn = 0, Pn = 0, Rr = 0, xl = 0, _a = 0, Ss = null, ml = null, qr = false, Ci = 0, ih = 0, zi = 1 / 0, Ai = null, Mn = null, Jt = 0, _n = null, Ta = null, rn = 0, Ur = 0, Br = null, uh = null, ws = 0, Lr = null;
  function jl() {
    return (ht & 2) !== 0 && nt !== 0 ? nt & -nt : V.T !== null ? Hr() : Z();
  }
  function rh() {
    if (xl === 0) if ((nt & 536870912) === 0 || st) {
      var e = Rl;
      Rl <<= 1, (Rl & 3932160) === 0 && (Rl = 262144), xl = e;
    } else xl = 536870912;
    return e = bl.current, e !== null && (e.flags |= 32), xl;
  }
  function dl(e, t, l) {
    (e === wt && (mt === 2 || mt === 9) || e.cancelPendingCommit !== null) && (Ca(e, 0), Tn(e, nt, xl, false)), v(e, l), ((ht & 2) === 0 || e !== wt) && (e === wt && ((ht & 2) === 0 && (Pn |= l), Rt === 4 && Tn(e, nt, xl, false)), Hl(e));
  }
  function ch(e, t, l) {
    if ((ht & 6) !== 0) throw Error(p(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || a(e, t), s = n ? og(e, t) : Yr(e, t, true), c = n;
    do {
      if (s === 0) {
        Ma && !n && Tn(e, t, 0, false);
        break;
      } else {
        if (l = e.current.alternate, c && !rg(l)) {
          s = Yr(e, t, false), c = false;
          continue;
        }
        if (s === 2) {
          if (c = t, e.errorRecoveryDisabledLanes & c) var f = 0;
          else f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var g = e;
              s = Ss;
              var C = g.current.memoizedState.isDehydrated;
              if (C && (Ca(g, f).flags |= 256), f = Yr(g, f, false), f !== 2) {
                if (Or && !C) {
                  g.errorRecoveryDisabledLanes |= c, Pn |= c, s = 4;
                  break e;
                }
                c = ml, ml = s, c !== null && (ml === null ? ml = c : ml.push.apply(ml, c));
              }
              s = f;
            }
            if (c = false, s !== 2) continue;
          }
        }
        if (s === 1) {
          Ca(e, 0), Tn(e, t, 0, true);
          break;
        }
        e: {
          switch (n = e, c = s, c) {
            case 0:
            case 1:
              throw Error(p(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Tn(n, t, xl, !En);
              break e;
            case 2:
              ml = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(p(329));
          }
          if ((t & 62914560) === t && (s = Ci + 300 - yt(), 10 < s)) {
            if (Tn(n, t, xl, !En), u(n, 0, true) !== 0) break e;
            rn = t, n.timeoutHandle = Yh(oh.bind(null, n, l, ml, Ai, qr, t, xl, Pn, _a, En, c, "Throttled", -0, 0), s);
            break e;
          }
          oh(n, l, ml, Ai, qr, t, xl, Pn, _a, En, c, null, -0, 0);
        }
      }
      break;
    } while (true);
    Hl(e);
  }
  function oh(e, t, l, n, s, c, f, g, C, Y, ee, ae, Q, K) {
    if (e.timeoutHandle = -1, ae = t.subtreeFlags, ae & 8192 || (ae & 16785408) === 16785408) {
      ae = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Kl }, lh(t, c, ae);
      var Ce = (c & 62914560) === c ? Ci - yt() : (c & 4194048) === c ? ih - yt() : 0;
      if (Ce = Kg(ae, Ce), Ce !== null) {
        rn = c, e.cancelPendingCommit = Ce(vh.bind(null, e, t, c, l, n, s, f, g, C, ee, ae, null, Q, K)), Tn(e, c, f, !Y);
        return;
      }
    }
    vh(e, t, c, l, n, s, f, g, C);
  }
  function rg(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for (var n = 0; n < l.length; n++) {
        var s = l[n], c = s.getSnapshot;
        s = s.value;
        try {
          if (!pl(c(), s)) return false;
        } catch {
          return false;
        }
      }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Tn(e, t, l, n) {
    t &= ~Rr, t &= ~Pn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var c = 31 - Yt(s), f = 1 << c;
      n[c] = -1, s &= ~f;
    }
    l !== 0 && w(e, l, t);
  }
  function Di() {
    return (ht & 6) === 0 ? (xs(0), false) : true;
  }
  function Gr() {
    if (tt !== null) {
      if (mt === 0) var e = tt.return;
      else e = tt, $l = Hn = null, tr(e), ba = null, as = 0, e = tt;
      for (; e !== null; ) Xf(e.alternate, e), e = e.return;
      tt = null;
    }
  }
  function Ca(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Tg(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), rn = 0, Gr(), wt = e, tt = l = kl(e.current, null), nt = t, mt = 0, wl = null, En = false, Ma = a(e, t), Or = false, _a = xl = Rr = Pn = Nn = Rt = 0, ml = Ss = null, qr = false, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0) for (e = e.entanglements, n &= t; 0 < n; ) {
      var s = 31 - Yt(n), c = 1 << s;
      t |= e[s], n &= ~c;
    }
    return un = t, Ps(), l;
  }
  function fh(e, t) {
    We = null, V.H = hs, t === va || t === ui ? (t = Mo(), mt = 3) : t === Vu ? (t = Mo(), mt = 4) : mt = t === pr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, wl = t, tt === null && (Rt = 1, wi(e, Ml(t, e.current)));
  }
  function hh() {
    var e = bl.current;
    return e === null ? true : (nt & 4194048) === nt ? zl === null : (nt & 62914560) === nt || (nt & 536870912) !== 0 ? e === zl : false;
  }
  function mh() {
    var e = V.H;
    return V.H = hs, e === null ? hs : e;
  }
  function dh() {
    var e = V.A;
    return V.A = ig, e;
  }
  function Oi() {
    Rt = 4, En || (nt & 4194048) !== nt && bl.current !== null || (Ma = true), (Nn & 134217727) === 0 && (Pn & 134217727) === 0 || wt === null || Tn(wt, nt, xl, false);
  }
  function Yr(e, t, l) {
    var n = ht;
    ht |= 2;
    var s = mh(), c = dh();
    (wt !== e || nt !== t) && (Ai = null, Ca(e, t)), t = false;
    var f = Rt;
    e: do
      try {
        if (mt !== 0 && tt !== null) {
          var g = tt, C = wl;
          switch (mt) {
            case 8:
              Gr(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bl.current === null && (t = true);
              var Y = mt;
              if (mt = 0, wl = null, za(e, g, C, Y), l && Ma) {
                f = 0;
                break e;
              }
              break;
            default:
              Y = mt, mt = 0, wl = null, za(e, g, C, Y);
          }
        }
        cg(), f = Rt;
        break;
      } catch (ee) {
        fh(e, ee);
      }
    while (true);
    return t && e.shellSuspendCounter++, $l = Hn = null, ht = n, V.H = s, V.A = c, tt === null && (wt = null, nt = 0, Ps()), f;
  }
  function cg() {
    for (; tt !== null; ) gh(tt);
  }
  function og(e, t) {
    var l = ht;
    ht |= 2;
    var n = mh(), s = dh();
    wt !== e || nt !== t ? (Ai = null, zi = yt() + 500, Ca(e, t)) : Ma = a(e, t);
    e: do
      try {
        if (mt !== 0 && tt !== null) {
          t = tt;
          var c = wl;
          t: switch (mt) {
            case 1:
              mt = 0, wl = null, za(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (Eo(c)) {
                mt = 0, wl = null, yh(t);
                break;
              }
              t = function() {
                mt !== 2 && mt !== 9 || wt !== e || (mt = 7), Hl(e);
              }, c.then(t, t);
              break e;
            case 3:
              mt = 7;
              break e;
            case 4:
              mt = 5;
              break e;
            case 7:
              Eo(c) ? (mt = 0, wl = null, yh(t)) : (mt = 0, wl = null, za(e, t, c, 7));
              break;
            case 5:
              var f = null;
              switch (tt.tag) {
                case 26:
                  f = tt.memoizedState;
                case 5:
                case 27:
                  var g = tt;
                  if (f ? tm(f) : g.stateNode.complete) {
                    mt = 0, wl = null;
                    var C = g.sibling;
                    if (C !== null) tt = C;
                    else {
                      var Y = g.return;
                      Y !== null ? (tt = Y, Ri(Y)) : tt = null;
                    }
                    break t;
                  }
              }
              mt = 0, wl = null, za(e, t, c, 5);
              break;
            case 6:
              mt = 0, wl = null, za(e, t, c, 6);
              break;
            case 8:
              Gr(), Rt = 6;
              break e;
            default:
              throw Error(p(462));
          }
        }
        fg();
        break;
      } catch (ee) {
        fh(e, ee);
      }
    while (true);
    return $l = Hn = null, V.H = n, V.A = s, ht = l, tt !== null ? 0 : (wt = null, nt = 0, Ps(), Rt);
  }
  function fg() {
    for (; tt !== null && !ot(); ) gh(tt);
  }
  function gh(e) {
    var t = Gf(e.alternate, e, un);
    e.memoizedProps = e.pendingProps, t === null ? Ri(e) : tt = t;
  }
  function yh(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Of(l, t, t.pendingProps, t.type, void 0, nt);
        break;
      case 11:
        t = Of(l, t, t.pendingProps, t.type.render, t.ref, nt);
        break;
      case 5:
        tr(t);
      default:
        Xf(l, t), t = tt = ho(t, un), t = Gf(l, t, un);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ri(e) : tt = t;
  }
  function za(e, t, l, n) {
    $l = Hn = null, tr(t), ba = null, as = 0;
    var s = t.return;
    try {
      if (Pd(e, s, t, l, nt)) {
        Rt = 1, wi(e, Ml(l, e.current)), tt = null;
        return;
      }
    } catch (c) {
      if (s !== null) throw tt = s, c;
      Rt = 1, wi(e, Ml(l, e.current)), tt = null;
      return;
    }
    t.flags & 32768 ? (st || n === 1 ? e = true : Ma || (nt & 536870912) !== 0 ? e = false : (En = e = true, (n === 2 || n === 9 || n === 3 || n === 6) && (n = bl.current, n !== null && n.tag === 13 && (n.flags |= 16384))), ph(t, e)) : Ri(t);
  }
  function Ri(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ph(t, En);
        return;
      }
      e = t.return;
      var l = lg(t.alternate, t, un);
      if (l !== null) {
        tt = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        tt = t;
        return;
      }
      tt = t = e;
    } while (t !== null);
    Rt === 0 && (Rt = 5);
  }
  function ph(e, t) {
    do {
      var l = ng(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, tt = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        tt = e;
        return;
      }
      tt = e = l;
    } while (e !== null);
    Rt = 6, tt = null;
  }
  function vh(e, t, l, n, s, c, f, g, C) {
    e.cancelPendingCommit = null;
    do
      qi();
    while (Jt !== 0);
    if ((ht & 6) !== 0) throw Error(p(327));
    if (t !== null) {
      if (t === e.current) throw Error(p(177));
      if (c = t.lanes | t.childLanes, c |= Tu, x(e, l, c, f, g, C), e === wt && (tt = wt = null, nt = 0), Ta = t, _n = e, rn = l, Ur = c, Br = s, uh = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, gg(fn, function() {
        return jh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = V.T, V.T = null, s = $.p, $.p = 2, f = ht, ht |= 4;
        try {
          ag(e, t, l);
        } finally {
          ht = f, $.p = s, V.T = n;
        }
      }
      Jt = 1, bh(), Sh(), wh();
    }
  }
  function bh() {
    if (Jt === 1) {
      Jt = 0;
      var e = _n, t = Ta, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = V.T, V.T = null;
        var n = $.p;
        $.p = 2;
        var s = ht;
        ht |= 4;
        try {
          Pf(t, e);
          var c = Ir, f = no(e.containerInfo), g = c.focusedElem, C = c.selectionRange;
          if (f !== g && g && g.ownerDocument && lo(g.ownerDocument.documentElement, g)) {
            if (C !== null && ju(g)) {
              var Y = C.start, ee = C.end;
              if (ee === void 0 && (ee = Y), "selectionStart" in g) g.selectionStart = Y, g.selectionEnd = Math.min(ee, g.value.length);
              else {
                var ae = g.ownerDocument || document, Q = ae && ae.defaultView || window;
                if (Q.getSelection) {
                  var K = Q.getSelection(), Ce = g.textContent.length, Ve = Math.min(C.start, Ce), St = C.end === void 0 ? Ve : Math.min(C.end, Ce);
                  !K.extend && Ve > St && (f = St, St = Ve, Ve = f);
                  var q = to(g, Ve), z = to(g, St);
                  if (q && z && (K.rangeCount !== 1 || K.anchorNode !== q.node || K.anchorOffset !== q.offset || K.focusNode !== z.node || K.focusOffset !== z.offset)) {
                    var G = ae.createRange();
                    G.setStart(q.node, q.offset), K.removeAllRanges(), Ve > St ? (K.addRange(G), K.extend(z.node, z.offset)) : (G.setEnd(z.node, z.offset), K.addRange(G));
                  }
                }
              }
            }
            for (ae = [], K = g; K = K.parentNode; ) K.nodeType === 1 && ae.push({ element: K, left: K.scrollLeft, top: K.scrollTop });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < ae.length; g++) {
              var ne = ae[g];
              ne.element.scrollLeft = ne.left, ne.element.scrollTop = ne.top;
            }
          }
          Ji = !!Wr, Ir = Wr = null;
        } finally {
          ht = s, $.p = n, V.T = l;
        }
      }
      e.current = t, Jt = 2;
    }
  }
  function Sh() {
    if (Jt === 2) {
      Jt = 0;
      var e = _n, t = Ta, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = V.T, V.T = null;
        var n = $.p;
        $.p = 2;
        var s = ht;
        ht |= 4;
        try {
          kf(e, t.alternate, t);
        } finally {
          ht = s, $.p = n, V.T = l;
        }
      }
      Jt = 3;
    }
  }
  function wh() {
    if (Jt === 4 || Jt === 3) {
      Jt = 0, ul();
      var e = _n, t = Ta, l = rn, n = uh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Jt = 5 : (Jt = 0, Ta = _n = null, xh(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (Mn = null), ge(l), t = t.stateNode, kt && typeof kt.onCommitFiberRoot == "function") try {
        kt.onCommitFiberRoot(Yl, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (n !== null) {
        t = V.T, s = $.p, $.p = 2, V.T = null;
        try {
          for (var c = e.onRecoverableError, f = 0; f < n.length; f++) {
            var g = n[f];
            c(g.value, { componentStack: g.stack });
          }
        } finally {
          V.T = t, $.p = s;
        }
      }
      (rn & 3) !== 0 && qi(), Hl(e), s = e.pendingLanes, (l & 261930) !== 0 && (s & 42) !== 0 ? e === Lr ? ws++ : (ws = 0, Lr = e) : ws = 0, xs(0);
    }
  }
  function xh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ls(t)));
  }
  function qi() {
    return bh(), Sh(), wh(), jh();
  }
  function jh() {
    if (Jt !== 5) return false;
    var e = _n, t = Ur;
    Ur = 0;
    var l = ge(rn), n = V.T, s = $.p;
    try {
      $.p = 32 > l ? 32 : l, V.T = null, l = Br, Br = null;
      var c = _n, f = rn;
      if (Jt = 0, Ta = _n = null, rn = 0, (ht & 6) !== 0) throw Error(p(331));
      var g = ht;
      if (ht |= 4, ah(c.current), th(c, c.current, f, l), ht = g, xs(0, false), kt && typeof kt.onPostCommitFiberRoot == "function") try {
        kt.onPostCommitFiberRoot(Yl, c);
      } catch {
      }
      return true;
    } finally {
      $.p = s, V.T = n, xh(e, t);
    }
  }
  function Eh(e, t, l) {
    t = Ml(l, t), t = yr(e.stateNode, t, 2), e = Sn(e, t, 2), e !== null && (v(e, 2), Hl(e));
  }
  function dt(e, t, l) {
    if (e.tag === 3) Eh(e, e, l);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Eh(t, e, l);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Mn === null || !Mn.has(n))) {
          e = Ml(l, e), l = Nf(2), n = Sn(t, l, 2), n !== null && (Mf(l, n, t, e), v(n, 2), Hl(n));
          break;
        }
      }
      t = t.return;
    }
  }
  function Xr(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new ug();
      var s = /* @__PURE__ */ new Set();
      n.set(t, s);
    } else s = n.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), n.set(t, s));
    s.has(l) || (Or = true, s.add(l), e = hg.bind(null, e, t, l), t.then(e, e));
  }
  function hg(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, wt === e && (nt & l) === l && (Rt === 4 || Rt === 3 && (nt & 62914560) === nt && 300 > yt() - Ci ? (ht & 2) === 0 && Ca(e, 0) : Rr |= l, _a === nt && (_a = 0)), Hl(e);
  }
  function Nh(e, t) {
    t === 0 && (t = o()), e = Xn(e, t), e !== null && (v(e, t), Hl(e));
  }
  function mg(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Nh(e, l);
  }
  function dg(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, s = e.memoizedState;
        s !== null && (l = s.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(p(314));
    }
    n !== null && n.delete(t), Nh(e, l);
  }
  function gg(e, t) {
    return de(e, t);
  }
  var Ui = null, Aa = null, Qr = false, Bi = false, Vr = false, Cn = 0;
  function Hl(e) {
    e !== Aa && e.next === null && (Aa === null ? Ui = Aa = e : Aa = Aa.next = e), Bi = true, Qr || (Qr = true, pg());
  }
  function xs(e, t) {
    if (!Vr && Bi) {
      Vr = true;
      do
        for (var l = false, n = Ui; n !== null; ) {
          if (e !== 0) {
            var s = n.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var f = n.suspendedLanes, g = n.pingedLanes;
              c = (1 << 31 - Yt(42 | e) + 1) - 1, c &= s & ~(f & ~g), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (l = true, Ch(n, c));
          } else c = nt, c = u(n, n === wt ? c : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (c & 3) === 0 || a(n, c) || (l = true, Ch(n, c));
          n = n.next;
        }
      while (l);
      Vr = false;
    }
  }
  function yg() {
    Mh();
  }
  function Mh() {
    Bi = Qr = false;
    var e = 0;
    Cn !== 0 && _g() && (e = Cn);
    for (var t = yt(), l = null, n = Ui; n !== null; ) {
      var s = n.next, c = _h(n, t);
      c === 0 ? (n.next = null, l === null ? Ui = s : l.next = s, s === null && (Aa = l)) : (l = n, (e !== 0 || (c & 3) !== 0) && (Bi = true)), n = s;
    }
    Jt !== 0 && Jt !== 5 || xs(e), Cn !== 0 && (Cn = 0);
  }
  function _h(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, s = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
      var f = 31 - Yt(c), g = 1 << f, C = s[f];
      C === -1 ? ((g & l) === 0 || (g & n) !== 0) && (s[f] = r(g, t)) : C <= t && (e.expiredLanes |= g), c &= ~g;
    }
    if (t = wt, l = nt, l = u(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (mt === 2 || mt === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Ye(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || a(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ye(n), ge(l)) {
        case 2:
        case 8:
          l = sl;
          break;
        case 32:
          l = fn;
          break;
        case 268435456:
          l = Kt;
          break;
        default:
          l = fn;
      }
      return n = Th.bind(null, e), l = de(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ye(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Th(e, t) {
    if (Jt !== 0 && Jt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (qi() && e.callbackNode !== l) return null;
    var n = nt;
    return n = u(e, e === wt ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (ch(e, n, t), _h(e, yt()), e.callbackNode != null && e.callbackNode === l ? Th.bind(null, e) : null);
  }
  function Ch(e, t) {
    if (qi()) return null;
    ch(e, t, true);
  }
  function pg() {
    Cg(function() {
      (ht & 6) !== 0 ? de(Bn, yg) : Mh();
    });
  }
  function Hr() {
    if (Cn === 0) {
      var e = ya;
      e === 0 && (e = Ze, Ze <<= 1, (Ze & 261888) === 0 && (Ze = 256)), Cn = e;
    }
    return Cn;
  }
  function zh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Zs("" + e);
  }
  function Ah(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function vg(e, t, l, n, s) {
    if (t === "submit" && l && l.stateNode === s) {
      var c = zh((s[re] || null).action), f = n.submitter;
      f && (t = (t = f[re] || null) ? zh(t.formAction) : f.getAttribute("formAction"), t !== null && (c = t, f = null));
      var g = new Fs("action", "action", null, n, s);
      e.push({ event: g, listeners: [{ instance: null, listener: function() {
        if (n.defaultPrevented) {
          if (Cn !== 0) {
            var C = f ? Ah(s, f) : new FormData(s);
            or(l, { pending: true, data: C, method: s.method, action: c }, null, C);
          }
        } else typeof c == "function" && (g.preventDefault(), C = f ? Ah(s, f) : new FormData(s), or(l, { pending: true, data: C, method: s.method, action: c }, c, C));
      }, currentTarget: s }] });
    }
  }
  for (var Zr = 0; Zr < _u.length; Zr++) {
    var Kr = _u[Zr], bg = Kr.toLowerCase(), Sg = Kr[0].toUpperCase() + Kr.slice(1);
    Ul(bg, "on" + Sg);
  }
  Ul(io, "onAnimationEnd"), Ul(uo, "onAnimationIteration"), Ul(ro, "onAnimationStart"), Ul("dblclick", "onDoubleClick"), Ul("focusin", "onFocus"), Ul("focusout", "onBlur"), Ul(Ud, "onTransitionRun"), Ul(Bd, "onTransitionStart"), Ul(Ld, "onTransitionCancel"), Ul(co, "onTransitionEnd"), _t("onMouseEnter", ["mouseout", "mouseover"]), _t("onMouseLeave", ["mouseout", "mouseover"]), _t("onPointerEnter", ["pointerout", "pointerover"]), _t("onPointerLeave", ["pointerout", "pointerover"]), ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var js = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(js));
  function Dh(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], s = n.event;
      n = n.listeners;
      e: {
        var c = void 0;
        if (t) for (var f = n.length - 1; 0 <= f; f--) {
          var g = n[f], C = g.instance, Y = g.currentTarget;
          if (g = g.listener, C !== c && s.isPropagationStopped()) break e;
          c = g, s.currentTarget = Y;
          try {
            c(s);
          } catch (ee) {
            Is(ee);
          }
          s.currentTarget = null, c = C;
        }
        else for (f = 0; f < n.length; f++) {
          if (g = n[f], C = g.instance, Y = g.currentTarget, g = g.listener, C !== c && s.isPropagationStopped()) break e;
          c = g, s.currentTarget = Y;
          try {
            c(s);
          } catch (ee) {
            Is(ee);
          }
          s.currentTarget = null, c = C;
        }
      }
    }
  }
  function lt(e, t) {
    var l = t[Qe];
    l === void 0 && (l = t[Qe] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (Oh(t, e, 2, false), l.add(n));
  }
  function Jr(e, t, l) {
    var n = 0;
    t && (n |= 4), Oh(l, e, n, t);
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function kr(e) {
    if (!e[Li]) {
      e[Li] = true, it.forEach(function(l) {
        l !== "selectionchange" && (wg.has(l) || Jr(l, false, e), Jr(l, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Li] || (t[Li] = true, Jr("selectionchange", false, t));
    }
  }
  function Oh(e, t, l, n) {
    switch (rm(t)) {
      case 2:
        var s = Fg;
        break;
      case 8:
        s = $g;
        break;
      default:
        s = cc;
    }
    l = s.bind(null, t, l, e), s = void 0, !du || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = true), n ? s !== void 0 ? e.addEventListener(t, l, { capture: true, passive: s }) : e.addEventListener(t, l, true) : s !== void 0 ? e.addEventListener(t, l, { passive: s }) : e.addEventListener(t, l, false);
  }
  function Fr(e, t, l, n, s) {
    var c = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (; ; ) {
      if (n === null) return;
      var f = n.tag;
      if (f === 3 || f === 4) {
        var g = n.stateNode.containerInfo;
        if (g === s) break;
        if (f === 4) for (f = n.return; f !== null; ) {
          var C = f.tag;
          if ((C === 3 || C === 4) && f.stateNode.containerInfo === s) return;
          f = f.return;
        }
        for (; g !== null; ) {
          if (f = A(g), f === null) return;
          if (C = f.tag, C === 5 || C === 6 || C === 26 || C === 27) {
            n = c = f;
            continue e;
          }
          g = g.parentNode;
        }
      }
      n = n.return;
    }
    Uc(function() {
      var Y = c, ee = hu(l), ae = [];
      e: {
        var Q = oo.get(e);
        if (Q !== void 0) {
          var K = Fs, Ce = e;
          switch (e) {
            case "keypress":
              if (Js(l) === 0) break e;
            case "keydown":
            case "keyup":
              K = dd;
              break;
            case "focusin":
              Ce = "focus", K = vu;
              break;
            case "focusout":
              Ce = "blur", K = vu;
              break;
            case "beforeblur":
            case "afterblur":
              K = vu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              K = Gc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = ld;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = pd;
              break;
            case io:
            case uo:
            case ro:
              K = sd;
              break;
            case co:
              K = bd;
              break;
            case "scroll":
            case "scrollend":
              K = ed;
              break;
            case "wheel":
              K = wd;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = ud;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = Xc;
              break;
            case "toggle":
            case "beforetoggle":
              K = jd;
          }
          var Ve = (t & 4) !== 0, St = !Ve && (e === "scroll" || e === "scrollend"), q = Ve ? Q !== null ? Q + "Capture" : null : Q;
          Ve = [];
          for (var z = Y, G; z !== null; ) {
            var ne = z;
            if (G = ne.stateNode, ne = ne.tag, ne !== 5 && ne !== 26 && ne !== 27 || G === null || q === null || (ne = Za(z, q), ne != null && Ve.push(Es(z, ne, G))), St) break;
            z = z.return;
          }
          0 < Ve.length && (Q = new K(Q, Ce, null, l, ee), ae.push({ event: Q, listeners: Ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", K = e === "mouseout" || e === "pointerout", Q && l !== fu && (Ce = l.relatedTarget || l.fromElement) && (A(Ce) || Ce[Ee])) break e;
          if ((K || Q) && (Q = ee.window === ee ? ee : (Q = ee.ownerDocument) ? Q.defaultView || Q.parentWindow : window, K ? (Ce = l.relatedTarget || l.toElement, K = Y, Ce = Ce ? A(Ce) : null, Ce !== null && (St = D(Ce), Ve = Ce.tag, Ce !== St || Ve !== 5 && Ve !== 27 && Ve !== 6) && (Ce = null)) : (K = null, Ce = Y), K !== Ce)) {
            if (Ve = Gc, ne = "onMouseLeave", q = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Ve = Xc, ne = "onPointerLeave", q = "onPointerEnter", z = "pointer"), St = K == null ? Q : je(K), G = Ce == null ? Q : je(Ce), Q = new Ve(ne, z + "leave", K, l, ee), Q.target = St, Q.relatedTarget = G, ne = null, A(ee) === Y && (Ve = new Ve(q, z + "enter", Ce, l, ee), Ve.target = G, Ve.relatedTarget = St, ne = Ve), St = ne, K && Ce) t: {
              for (Ve = xg, q = K, z = Ce, G = 0, ne = q; ne; ne = Ve(ne)) G++;
              ne = 0;
              for (var Le = z; Le; Le = Ve(Le)) ne++;
              for (; 0 < G - ne; ) q = Ve(q), G--;
              for (; 0 < ne - G; ) z = Ve(z), ne--;
              for (; G--; ) {
                if (q === z || z !== null && q === z.alternate) {
                  Ve = q;
                  break t;
                }
                q = Ve(q), z = Ve(z);
              }
              Ve = null;
            }
            else Ve = null;
            K !== null && Rh(ae, Q, K, Ve, false), Ce !== null && St !== null && Rh(ae, St, Ce, Ve, true);
          }
        }
        e: {
          if (Q = Y ? je(Y) : window, K = Q.nodeName && Q.nodeName.toLowerCase(), K === "select" || K === "input" && Q.type === "file") var rt = Fc;
          else if (Jc(Q)) if ($c) rt = Od;
          else {
            rt = Ad;
            var De = zd;
          }
          else K = Q.nodeName, !K || K.toLowerCase() !== "input" || Q.type !== "checkbox" && Q.type !== "radio" ? Y && ou(Y.elementType) && (rt = Fc) : rt = Dd;
          if (rt && (rt = rt(e, Y))) {
            kc(ae, rt, l, ee);
            break e;
          }
          De && De(e, Q, Y), e === "focusout" && Y && Q.type === "number" && Y.memoizedProps.value != null && Ha(Q, "number", Q.value);
        }
        switch (De = Y ? je(Y) : window, e) {
          case "focusin":
            (Jc(De) || De.contentEditable === "true") && (ra = De, Eu = Y, Pa = null);
            break;
          case "focusout":
            Pa = Eu = ra = null;
            break;
          case "mousedown":
            Nu = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Nu = false, ao(ae, l, ee);
            break;
          case "selectionchange":
            if (qd) break;
          case "keydown":
          case "keyup":
            ao(ae, l, ee);
        }
        var Pe;
        if (Su) e: {
          switch (e) {
            case "compositionstart":
              var at = "onCompositionStart";
              break e;
            case "compositionend":
              at = "onCompositionEnd";
              break e;
            case "compositionupdate":
              at = "onCompositionUpdate";
              break e;
          }
          at = void 0;
        }
        else ua ? Zc(e, l) && (at = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (at = "onCompositionStart");
        at && (Qc && l.locale !== "ko" && (ua || at !== "onCompositionStart" ? at === "onCompositionEnd" && ua && (Pe = Bc()) : (mn = ee, gu = "value" in mn ? mn.value : mn.textContent, ua = true)), De = Gi(Y, at), 0 < De.length && (at = new Yc(at, e, null, l, ee), ae.push({ event: at, listeners: De }), Pe ? at.data = Pe : (Pe = Kc(l), Pe !== null && (at.data = Pe)))), (Pe = Nd ? Md(e, l) : _d(e, l)) && (at = Gi(Y, "onBeforeInput"), 0 < at.length && (De = new Yc("onBeforeInput", "beforeinput", null, l, ee), ae.push({ event: De, listeners: at }), De.data = Pe)), vg(ae, e, Y, l, ee);
      }
      Dh(ae, t);
    });
  }
  function Es(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Gi(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var s = e, c = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || c === null || (s = Za(e, l), s != null && n.unshift(Es(e, s, c)), s = Za(e, t), s != null && n.push(Es(e, s, c))), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function xg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Rh(e, t, l, n, s) {
    for (var c = t._reactName, f = []; l !== null && l !== n; ) {
      var g = l, C = g.alternate, Y = g.stateNode;
      if (g = g.tag, C !== null && C === n) break;
      g !== 5 && g !== 26 && g !== 27 || Y === null || (C = Y, s ? (Y = Za(l, c), Y != null && f.unshift(Es(l, Y, C))) : s || (Y = Za(l, c), Y != null && f.push(Es(l, Y, C)))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var jg = /\r\n?/g, Eg = /\u0000|\uFFFD/g;
  function qh(e) {
    return (typeof e == "string" ? e : "" + e).replace(jg, `
`).replace(Eg, "");
  }
  function Uh(e, t) {
    return t = qh(t), qh(e) === t;
  }
  function bt(e, t, l, n, s, c) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || aa(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && aa(e, "" + n);
        break;
      case "className":
        At(e, "class", n);
        break;
      case "tabIndex":
        At(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        At(e, l, n);
        break;
      case "style":
        Rc(e, n, c);
        break;
      case "data":
        if (t !== "object") {
          At(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = Zs("" + n), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof c == "function" && (l === "formAction" ? (t !== "input" && bt(e, t, "name", s.name, s, null), bt(e, t, "formEncType", s.formEncType, s, null), bt(e, t, "formMethod", s.formMethod, s, null), bt(e, t, "formTarget", s.formTarget, s, null)) : (bt(e, t, "encType", s.encType, s, null), bt(e, t, "method", s.method, s, null), bt(e, t, "target", s.target, s, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = Zs("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Kl);
        break;
      case "onScroll":
        n != null && lt("scroll", e);
        break;
      case "onScrollEnd":
        n != null && lt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(p(61));
          if (l = n.__html, l != null) {
            if (s.children != null) throw Error(p(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = Zs("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === true ? e.setAttribute(l, "") : n !== false && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
        break;
      case "popover":
        lt("beforetoggle", e), lt("toggle", e), Ie(e, "popover", n);
        break;
      case "xlinkActuate":
        Ct(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        Ct(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        Ct(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        Ct(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        Ct(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        Ct(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        Ct(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        Ct(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        Ct(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        Ie(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Im.get(l) || l, Ie(e, l, n));
    }
  }
  function $r(e, t, l, n, s, c) {
    switch (l) {
      case "style":
        Rc(e, n, c);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(p(61));
          if (l = n.__html, l != null) {
            if (s.children != null) throw Error(p(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? aa(e, n) : (typeof n == "number" || typeof n == "bigint") && aa(e, "" + n);
        break;
      case "onScroll":
        n != null && lt("scroll", e);
        break;
      case "onScrollEnd":
        n != null && lt("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Kl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pt.hasOwnProperty(l)) e: {
          if (l[0] === "o" && l[1] === "n" && (s = l.endsWith("Capture"), t = l.slice(2, s ? l.length - 7 : void 0), c = e[re] || null, c = c != null ? c[l] : null, typeof c == "function" && e.removeEventListener(t, c, s), typeof n == "function")) {
            typeof c != "function" && c !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, s);
            break e;
          }
          l in e ? e[l] = n : n === true ? e.setAttribute(l, "") : Ie(e, l, n);
        }
    }
  }
  function el(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        lt("error", e), lt("load", e);
        var n = false, s = false, c;
        for (c in l) if (l.hasOwnProperty(c)) {
          var f = l[c];
          if (f != null) switch (c) {
            case "src":
              n = true;
              break;
            case "srcSet":
              s = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(p(137, t));
            default:
              bt(e, t, c, f, l, null);
          }
        }
        s && bt(e, t, "srcSet", l.srcSet, l, null), n && bt(e, t, "src", l.src, l, null);
        return;
      case "input":
        lt("invalid", e);
        var g = c = f = s = null, C = null, Y = null;
        for (n in l) if (l.hasOwnProperty(n)) {
          var ee = l[n];
          if (ee != null) switch (n) {
            case "name":
              s = ee;
              break;
            case "type":
              f = ee;
              break;
            case "checked":
              C = ee;
              break;
            case "defaultChecked":
              Y = ee;
              break;
            case "value":
              c = ee;
              break;
            case "defaultValue":
              g = ee;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (ee != null) throw Error(p(137, t));
              break;
            default:
              bt(e, t, n, ee, l, null);
          }
        }
        Hs(e, c, g, C, Y, f, s, false);
        return;
      case "select":
        lt("invalid", e), n = f = c = null;
        for (s in l) if (l.hasOwnProperty(s) && (g = l[s], g != null)) switch (s) {
          case "value":
            c = g;
            break;
          case "defaultValue":
            f = g;
            break;
          case "multiple":
            n = g;
          default:
            bt(e, t, s, g, l, null);
        }
        t = c, l = f, e.multiple = !!n, t != null ? na(e, !!n, t, false) : l != null && na(e, !!n, l, true);
        return;
      case "textarea":
        lt("invalid", e), c = s = n = null;
        for (f in l) if (l.hasOwnProperty(f) && (g = l[f], g != null)) switch (f) {
          case "value":
            n = g;
            break;
          case "defaultValue":
            s = g;
            break;
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            if (g != null) throw Error(p(91));
            break;
          default:
            bt(e, t, f, g, l, null);
        }
        Dc(e, n, s, c);
        return;
      case "option":
        for (C in l) l.hasOwnProperty(C) && (n = l[C], n != null) && (C === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : bt(e, t, C, n, l, null));
        return;
      case "dialog":
        lt("beforetoggle", e), lt("toggle", e), lt("cancel", e), lt("close", e);
        break;
      case "iframe":
      case "object":
        lt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < js.length; n++) lt(js[n], e);
        break;
      case "image":
        lt("error", e), lt("load", e);
        break;
      case "details":
        lt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        lt("error", e), lt("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Y in l) if (l.hasOwnProperty(Y) && (n = l[Y], n != null)) switch (Y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(p(137, t));
          default:
            bt(e, t, Y, n, l, null);
        }
        return;
      default:
        if (ou(t)) {
          for (ee in l) l.hasOwnProperty(ee) && (n = l[ee], n !== void 0 && $r(e, t, ee, n, l, void 0));
          return;
        }
    }
    for (g in l) l.hasOwnProperty(g) && (n = l[g], n != null && bt(e, t, g, n, l, null));
  }
  function Ng(e, t, l, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, c = null, f = null, g = null, C = null, Y = null, ee = null;
        for (K in l) {
          var ae = l[K];
          if (l.hasOwnProperty(K) && ae != null) switch (K) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              C = ae;
            default:
              n.hasOwnProperty(K) || bt(e, t, K, null, n, ae);
          }
        }
        for (var Q in n) {
          var K = n[Q];
          if (ae = l[Q], n.hasOwnProperty(Q) && (K != null || ae != null)) switch (Q) {
            case "type":
              c = K;
              break;
            case "name":
              s = K;
              break;
            case "checked":
              Y = K;
              break;
            case "defaultChecked":
              ee = K;
              break;
            case "value":
              f = K;
              break;
            case "defaultValue":
              g = K;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (K != null) throw Error(p(137, t));
              break;
            default:
              K !== ae && bt(e, t, Q, K, n, ae);
          }
        }
        Va(e, f, g, C, Y, ee, c, s);
        return;
      case "select":
        K = f = g = Q = null;
        for (c in l) if (C = l[c], l.hasOwnProperty(c) && C != null) switch (c) {
          case "value":
            break;
          case "multiple":
            K = C;
          default:
            n.hasOwnProperty(c) || bt(e, t, c, null, n, C);
        }
        for (s in n) if (c = n[s], C = l[s], n.hasOwnProperty(s) && (c != null || C != null)) switch (s) {
          case "value":
            Q = c;
            break;
          case "defaultValue":
            g = c;
            break;
          case "multiple":
            f = c;
          default:
            c !== C && bt(e, t, s, c, n, C);
        }
        t = g, l = f, n = K, Q != null ? na(e, !!l, Q, false) : !!n != !!l && (t != null ? na(e, !!l, t, true) : na(e, !!l, l ? [] : "", false));
        return;
      case "textarea":
        K = Q = null;
        for (g in l) if (s = l[g], l.hasOwnProperty(g) && s != null && !n.hasOwnProperty(g)) switch (g) {
          case "value":
            break;
          case "children":
            break;
          default:
            bt(e, t, g, null, n, s);
        }
        for (f in n) if (s = n[f], c = l[f], n.hasOwnProperty(f) && (s != null || c != null)) switch (f) {
          case "value":
            Q = s;
            break;
          case "defaultValue":
            K = s;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (s != null) throw Error(p(91));
            break;
          default:
            s !== c && bt(e, t, f, s, n, c);
        }
        Ac(e, Q, K);
        return;
      case "option":
        for (var Ce in l) Q = l[Ce], l.hasOwnProperty(Ce) && Q != null && !n.hasOwnProperty(Ce) && (Ce === "selected" ? e.selected = false : bt(e, t, Ce, null, n, Q));
        for (C in n) Q = n[C], K = l[C], n.hasOwnProperty(C) && Q !== K && (Q != null || K != null) && (C === "selected" ? e.selected = Q && typeof Q != "function" && typeof Q != "symbol" : bt(e, t, C, Q, n, K));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ve in l) Q = l[Ve], l.hasOwnProperty(Ve) && Q != null && !n.hasOwnProperty(Ve) && bt(e, t, Ve, null, n, Q);
        for (Y in n) if (Q = n[Y], K = l[Y], n.hasOwnProperty(Y) && Q !== K && (Q != null || K != null)) switch (Y) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (Q != null) throw Error(p(137, t));
            break;
          default:
            bt(e, t, Y, Q, n, K);
        }
        return;
      default:
        if (ou(t)) {
          for (var St in l) Q = l[St], l.hasOwnProperty(St) && Q !== void 0 && !n.hasOwnProperty(St) && $r(e, t, St, void 0, n, Q);
          for (ee in n) Q = n[ee], K = l[ee], !n.hasOwnProperty(ee) || Q === K || Q === void 0 && K === void 0 || $r(e, t, ee, Q, n, K);
          return;
        }
    }
    for (var q in l) Q = l[q], l.hasOwnProperty(q) && Q != null && !n.hasOwnProperty(q) && bt(e, t, q, null, n, Q);
    for (ae in n) Q = n[ae], K = l[ae], !n.hasOwnProperty(ae) || Q === K || Q == null && K == null || bt(e, t, ae, Q, n, K);
  }
  function Bh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function Mg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var s = l[n], c = s.transferSize, f = s.initiatorType, g = s.duration;
        if (c && g && Bh(f)) {
          for (f = 0, g = s.responseEnd, n += 1; n < l.length; n++) {
            var C = l[n], Y = C.startTime;
            if (Y > g) break;
            var ee = C.transferSize, ae = C.initiatorType;
            ee && Bh(ae) && (C = C.responseEnd, f += ee * (C < g ? 1 : (g - Y) / (C - Y)));
          }
          if (--n, t += 8 * (c + f) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Wr = null, Ir = null;
  function Yi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Lh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gh(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Pr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ec = null;
  function _g() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ec ? false : (ec = e, true) : (ec = null, false);
  }
  var Yh = typeof setTimeout == "function" ? setTimeout : void 0, Tg = typeof clearTimeout == "function" ? clearTimeout : void 0, Xh = typeof Promise == "function" ? Promise : void 0, Cg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xh < "u" ? function(e) {
    return Xh.resolve(null).then(e).catch(zg);
  } : Yh;
  function zg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function zn(e) {
    return e === "head";
  }
  function Qh(e, t) {
    var l = t, n = 0;
    do {
      var s = l.nextSibling;
      if (e.removeChild(l), s && s.nodeType === 8) if (l = s.data, l === "/$" || l === "/&") {
        if (n === 0) {
          e.removeChild(s), qa(t);
          return;
        }
        n--;
      } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") n++;
      else if (l === "html") Ns(e.ownerDocument.documentElement);
      else if (l === "head") {
        l = e.ownerDocument.head, Ns(l);
        for (var c = l.firstChild; c; ) {
          var f = c.nextSibling, g = c.nodeName;
          c[Ue] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c), c = f;
        }
      } else l === "body" && Ns(e.ownerDocument.body);
      l = s;
    } while (l);
    qa(t);
  }
  function Vh(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8) if (l = n.data, l === "/$") {
        if (e === 0) break;
        e--;
      } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = n;
    } while (l);
  }
  function tc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          tc(l), ft(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Ag(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var s = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[Ue]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (c !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (c = e.getAttribute("src"), (c !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (e = Al(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Dg(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Al(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hh(e, t) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Al(e.nextSibling), e === null)) return null;
    return e;
  }
  function lc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function nc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Og(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var n = function() {
        t(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function Al(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var ac = null;
  function Zh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Al(e.nextSibling);
          t--;
        } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Kh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Jh(e, t, l) {
    switch (t = Yi(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(p(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(p(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(p(454));
        return e;
      default:
        throw Error(p(451));
    }
  }
  function Ns(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ft(e);
  }
  var Dl = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Set();
  function Xi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var cn = $.d;
  $.d = { f: Rg, r: qg, D: Ug, C: Bg, L: Lg, m: Gg, X: Xg, S: Yg, M: Qg };
  function Rg() {
    var e = cn.f(), t = Di();
    return e || t;
  }
  function qg(e) {
    var t = ie(e);
    t !== null && t.tag === 5 && t.type === "form" ? ff(t) : cn.r(e);
  }
  var Da = typeof document > "u" ? null : document;
  function Fh(e, t, l) {
    var n = Da;
    if (n && typeof t == "string" && t) {
      var s = rl(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof l == "string" && (s += '[crossorigin="' + l + '"]'), kh.has(s) || (kh.add(s), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(s) === null && (t = n.createElement("link"), el(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function Ug(e) {
    cn.D(e), Fh("dns-prefetch", e, null);
  }
  function Bg(e, t) {
    cn.C(e, t), Fh("preconnect", e, t);
  }
  function Lg(e, t, l) {
    cn.L(e, t, l);
    var n = Da;
    if (n && e && t) {
      var s = 'link[rel="preload"][as="' + rl(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (s += '[imagesrcset="' + rl(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (s += '[imagesizes="' + rl(l.imageSizes) + '"]')) : s += '[href="' + rl(e) + '"]';
      var c = s;
      switch (t) {
        case "style":
          c = Oa(e);
          break;
        case "script":
          c = Ra(e);
      }
      Dl.has(c) || (e = L({ rel: "preload", href: t === "image" && l && l.imageSrcSet ? void 0 : e, as: t }, l), Dl.set(c, e), n.querySelector(s) !== null || t === "style" && n.querySelector(Ms(c)) || t === "script" && n.querySelector(_s(c)) || (t = n.createElement("link"), el(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function Gg(e, t) {
    cn.m(e, t);
    var l = Da;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + rl(n) + '"][href="' + rl(e) + '"]', c = s;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Ra(e);
      }
      if (!Dl.has(c) && (e = L({ rel: "modulepreload", href: e }, t), Dl.set(c, e), l.querySelector(s) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(_s(c))) return;
        }
        n = l.createElement("link"), el(n, "link", e), $e(n), l.head.appendChild(n);
      }
    }
  }
  function Yg(e, t, l) {
    cn.S(e, t, l);
    var n = Da;
    if (n && e) {
      var s = oe(n).hoistableStyles, c = Oa(e);
      t = t || "default";
      var f = s.get(c);
      if (!f) {
        var g = { loading: 0, preload: null };
        if (f = n.querySelector(Ms(c))) g.loading = 5;
        else {
          e = L({ rel: "stylesheet", href: e, "data-precedence": t }, l), (l = Dl.get(c)) && sc(e, l);
          var C = f = n.createElement("link");
          $e(C), el(C, "link", e), C._p = new Promise(function(Y, ee) {
            C.onload = Y, C.onerror = ee;
          }), C.addEventListener("load", function() {
            g.loading |= 1;
          }), C.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Qi(f, t, n);
        }
        f = { type: "stylesheet", instance: f, count: 1, state: g }, s.set(c, f);
      }
    }
  }
  function Xg(e, t) {
    cn.X(e, t);
    var l = Da;
    if (l && e) {
      var n = oe(l).hoistableScripts, s = Ra(e), c = n.get(s);
      c || (c = l.querySelector(_s(s)), c || (e = L({ src: e, async: true }, t), (t = Dl.get(s)) && ic(e, t), c = l.createElement("script"), $e(c), el(c, "link", e), l.head.appendChild(c)), c = { type: "script", instance: c, count: 1, state: null }, n.set(s, c));
    }
  }
  function Qg(e, t) {
    cn.M(e, t);
    var l = Da;
    if (l && e) {
      var n = oe(l).hoistableScripts, s = Ra(e), c = n.get(s);
      c || (c = l.querySelector(_s(s)), c || (e = L({ src: e, async: true, type: "module" }, t), (t = Dl.get(s)) && ic(e, t), c = l.createElement("script"), $e(c), el(c, "link", e), l.head.appendChild(c)), c = { type: "script", instance: c, count: 1, state: null }, n.set(s, c));
    }
  }
  function $h(e, t, l, n) {
    var s = (s = W.current) ? Xi(s) : null;
    if (!s) throw Error(p(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Oa(l.href), l = oe(s).hoistableStyles, n = l.get(t), n || (n = { type: "style", instance: null, count: 0, state: null }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Oa(l.href);
          var c = oe(s).hoistableStyles, f = c.get(e);
          if (f || (s = s.ownerDocument || s, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, c.set(e, f), (c = s.querySelector(Ms(e))) && !c._p && (f.instance = c, f.state.loading = 5), Dl.has(e) || (l = { rel: "preload", as: "style", href: l.href, crossOrigin: l.crossOrigin, integrity: l.integrity, media: l.media, hrefLang: l.hrefLang, referrerPolicy: l.referrerPolicy }, Dl.set(e, l), c || Vg(s, e, l, f.state))), t && n === null) throw Error(p(528, ""));
          return f;
        }
        if (t && n !== null) throw Error(p(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ra(l), l = oe(s).hoistableScripts, n = l.get(t), n || (n = { type: "script", instance: null, count: 0, state: null }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(p(444, e));
    }
  }
  function Oa(e) {
    return 'href="' + rl(e) + '"';
  }
  function Ms(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Wh(e) {
    return L({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Vg(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), el(t, "link", l), $e(t), e.head.appendChild(t));
  }
  function Ra(e) {
    return '[src="' + rl(e) + '"]';
  }
  function _s(e) {
    return "script[async]" + e;
  }
  function Ih(e, t, l) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var n = e.querySelector('style[data-href~="' + rl(l.href) + '"]');
        if (n) return t.instance = n, $e(n), n;
        var s = L({}, l, { "data-href": l.href, "data-precedence": l.precedence, href: null, precedence: null });
        return n = (e.ownerDocument || e).createElement("style"), $e(n), el(n, "style", s), Qi(n, l.precedence, e), t.instance = n;
      case "stylesheet":
        s = Oa(l.href);
        var c = e.querySelector(Ms(s));
        if (c) return t.state.loading |= 4, t.instance = c, $e(c), c;
        n = Wh(l), (s = Dl.get(s)) && sc(n, s), c = (e.ownerDocument || e).createElement("link"), $e(c);
        var f = c;
        return f._p = new Promise(function(g, C) {
          f.onload = g, f.onerror = C;
        }), el(c, "link", n), t.state.loading |= 4, Qi(c, l.precedence, e), t.instance = c;
      case "script":
        return c = Ra(l.src), (s = e.querySelector(_s(c))) ? (t.instance = s, $e(s), s) : (n = l, (s = Dl.get(c)) && (n = L({}, l), ic(n, s)), e = e.ownerDocument || e, s = e.createElement("script"), $e(s), el(s, "link", n), e.head.appendChild(s), t.instance = s);
      case "void":
        return null;
      default:
        throw Error(p(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, Qi(n, l.precedence, e));
    return t.instance;
  }
  function Qi(e, t, l) {
    for (var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = n.length ? n[n.length - 1] : null, c = s, f = 0; f < n.length; f++) {
      var g = n[f];
      if (g.dataset.precedence === t) c = g;
      else if (c !== s) break;
    }
    c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function sc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Vi = null;
  function Ph(e, t, l) {
    if (Vi === null) {
      var n = /* @__PURE__ */ new Map(), s = Vi = /* @__PURE__ */ new Map();
      s.set(l, n);
    } else s = Vi, n = s.get(l), n || (n = /* @__PURE__ */ new Map(), s.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), s = 0; s < l.length; s++) {
      var c = l[s];
      if (!(c[Ue] || c[M] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = c.getAttribute(t) || "";
        f = e + f;
        var g = n.get(f);
        g ? g.push(c) : n.set(f, [c]);
      }
    }
    return n;
  }
  function em(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
  }
  function Hg(e, t, l) {
    if (l === 1 || t.itemProp != null) return false;
    switch (e) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : true;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function tm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Zg(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var s = Oa(n.href), c = t.querySelector(Ms(s));
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Hi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = c, $e(c);
          return;
        }
        c = t.ownerDocument || t, n = Wh(n), (s = Dl.get(s)) && sc(n, s), c = c.createElement("link"), $e(c);
        var f = c;
        f._p = new Promise(function(g, C) {
          f.onload = g, f.onerror = C;
        }), el(c, "link", n), l.instance = c;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Hi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var uc = 0;
  function Kg(e, t) {
    return e.stylesheets && e.count === 0 && Ki(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && Ki(e, e.stylesheets), e.unsuspend) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, 6e4 + t);
      0 < e.imgBytes && uc === 0 && (uc = 62500 * Mg());
      var s = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Ki(e, e.stylesheets), e.unsuspend)) {
          var c = e.unsuspend;
          e.unsuspend = null, c();
        }
      }, (e.imgBytes > uc ? 50 : 800) + t);
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(s);
      };
    } : null;
  }
  function Hi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ki(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Zi = null;
  function Ki(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Zi = /* @__PURE__ */ new Map(), t.forEach(Jg, e), Zi = null, Hi.call(e));
  }
  function Jg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Zi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Zi.set(e, l);
        for (var s = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < s.length; c++) {
          var f = s[c];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      s = t.instance, f = s.getAttribute("data-precedence"), c = l.get(f) || n, c === n && l.set(null, s), l.set(f, s), this.count++, n = Hi.bind(this), s.addEventListener("load", n), s.addEventListener("error", n), c ? c.parentNode.insertBefore(s, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ts = { $$typeof: xe, Provider: null, Consumer: null, _currentValue: fe, _currentValue2: fe, _threadCount: 0 };
  function kg(e, t, l, n, s, c, f, g, C) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = b(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = b(0), this.hiddenUpdates = b(null), this.identifierPrefix = n, this.onUncaughtError = s, this.onCaughtError = c, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lm(e, t, l, n, s, c, f, g, C, Y, ee, ae) {
    return e = new kg(e, t, l, f, C, Y, ee, ae, g), t = 1, c === true && (t |= 24), c = vl(3, null, null, t), e.current = c, c.stateNode = e, t = Yu(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = { element: n, isDehydrated: l, cache: t }, Hu(c), e;
  }
  function nm(e) {
    return e ? (e = fa, e) : fa;
  }
  function am(e, t, l, n, s, c) {
    s = nm(s), n.context === null ? n.context = s : n.pendingContext = s, n = bn(t), n.payload = { element: l }, c = c === void 0 ? null : c, c !== null && (n.callback = c), l = Sn(e, n, t), l !== null && (dl(l, e, t), is(l, e, t));
  }
  function sm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function rc(e, t) {
    sm(e, t), (e = e.alternate) && sm(e, t);
  }
  function im(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xn(e, 67108864);
      t !== null && dl(t, e, 67108864), rc(e, 67108864);
    }
  }
  function um(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = jl();
      t = k(t);
      var l = Xn(e, t);
      l !== null && dl(l, e, t), rc(e, t);
    }
  }
  var Ji = true;
  function Fg(e, t, l, n) {
    var s = V.T;
    V.T = null;
    var c = $.p;
    try {
      $.p = 2, cc(e, t, l, n);
    } finally {
      $.p = c, V.T = s;
    }
  }
  function $g(e, t, l, n) {
    var s = V.T;
    V.T = null;
    var c = $.p;
    try {
      $.p = 8, cc(e, t, l, n);
    } finally {
      $.p = c, V.T = s;
    }
  }
  function cc(e, t, l, n) {
    if (Ji) {
      var s = oc(n);
      if (s === null) Fr(e, t, n, ki, l), cm(e, n);
      else if (Ig(s, e, t, l, n)) n.stopPropagation();
      else if (cm(e, n), t & 4 && -1 < Wg.indexOf(e)) {
        for (; s !== null; ) {
          var c = ie(s);
          if (c !== null) switch (c.tag) {
            case 3:
              if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                var f = i(c.pendingLanes);
                if (f !== 0) {
                  var g = c;
                  for (g.pendingLanes |= 2, g.entangledLanes |= 2; f; ) {
                    var C = 1 << 31 - Yt(f);
                    g.entanglements[1] |= C, f &= ~C;
                  }
                  Hl(c), (ht & 6) === 0 && (zi = yt() + 500, xs(0));
                }
              }
              break;
            case 31:
            case 13:
              g = Xn(c, 2), g !== null && dl(g, c, 2), Di(), rc(c, 2);
          }
          if (c = oc(n), c === null && Fr(e, t, n, ki, l), c === s) break;
          s = c;
        }
        s !== null && n.stopPropagation();
      } else Fr(e, t, n, null, l);
    }
  }
  function oc(e) {
    return e = hu(e), fc(e);
  }
  var ki = null;
  function fc(e) {
    if (ki = null, e = A(e), e !== null) {
      var t = D(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = N(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = U(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ki = e, null;
  }
  function rm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (on()) {
          case Bn:
            return 2;
          case sl:
            return 8;
          case fn:
          case Zl:
            return 32;
          case Kt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hc = false, An = null, Dn = null, On = null, Cs = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Map(), Rn = [], Wg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function cm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        An = null;
        break;
      case "dragenter":
      case "dragleave":
        Dn = null;
        break;
      case "mouseover":
      case "mouseout":
        On = null;
        break;
      case "pointerover":
      case "pointerout":
        Cs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zs.delete(t.pointerId);
    }
  }
  function As(e, t, l, n, s, c) {
    return e === null || e.nativeEvent !== c ? (e = { blockedOn: t, domEventName: l, eventSystemFlags: n, nativeEvent: c, targetContainers: [s] }, t !== null && (t = ie(t), t !== null && im(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function Ig(e, t, l, n, s) {
    switch (t) {
      case "focusin":
        return An = As(An, e, t, l, n, s), true;
      case "dragenter":
        return Dn = As(Dn, e, t, l, n, s), true;
      case "mouseover":
        return On = As(On, e, t, l, n, s), true;
      case "pointerover":
        var c = s.pointerId;
        return Cs.set(c, As(Cs.get(c) || null, e, t, l, n, s)), true;
      case "gotpointercapture":
        return c = s.pointerId, zs.set(c, As(zs.get(c) || null, e, t, l, n, s)), true;
    }
    return false;
  }
  function om(e) {
    var t = A(e.target);
    if (t !== null) {
      var l = D(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = N(l), t !== null) {
            e.blockedOn = t, le(e.priority, function() {
              um(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = U(l), t !== null) {
            e.blockedOn = t, le(e.priority, function() {
              um(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Fi(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = oc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(l.type, l);
        fu = n, l.target.dispatchEvent(n), fu = null;
      } else return t = ie(l), t !== null && im(t), e.blockedOn = l, false;
      t.shift();
    }
    return true;
  }
  function fm(e, t, l) {
    Fi(e) && l.delete(t);
  }
  function Pg() {
    hc = false, An !== null && Fi(An) && (An = null), Dn !== null && Fi(Dn) && (Dn = null), On !== null && Fi(On) && (On = null), Cs.forEach(fm), zs.forEach(fm);
  }
  function $i(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hc || (hc = true, m.unstable_scheduleCallback(m.unstable_NormalPriority, Pg)));
  }
  var Wi = null;
  function hm(e) {
    Wi !== e && (Wi = e, m.unstable_scheduleCallback(m.unstable_NormalPriority, function() {
      Wi === e && (Wi = null);
      for (var t = 0; t < e.length; t += 3) {
        var l = e[t], n = e[t + 1], s = e[t + 2];
        if (typeof n != "function") {
          if (fc(n || l) === null) continue;
          break;
        }
        var c = ie(l);
        c !== null && (e.splice(t, 3), t -= 3, or(c, { pending: true, data: s, method: l.method, action: n }, n, s));
      }
    }));
  }
  function qa(e) {
    function t(C) {
      return $i(C, e);
    }
    An !== null && $i(An, e), Dn !== null && $i(Dn, e), On !== null && $i(On, e), Cs.forEach(t), zs.forEach(t);
    for (var l = 0; l < Rn.length; l++) {
      var n = Rn[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Rn.length && (l = Rn[0], l.blockedOn === null); ) om(l), l.blockedOn === null && Rn.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for (n = 0; n < l.length; n += 3) {
      var s = l[n], c = l[n + 1], f = s[re] || null;
      if (typeof c == "function") f || hm(l);
      else if (f) {
        var g = null;
        if (c && c.hasAttribute("formAction")) {
          if (s = c, f = c[re] || null) g = f.formAction;
          else if (fc(s) !== null) continue;
        } else g = f.action;
        typeof g == "function" ? l[n + 1] = g : (l.splice(n, 3), n -= 3), hm(l);
      }
    }
  }
  function mm() {
    function e(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({ handler: function() {
        return new Promise(function(f) {
          return s = f;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      s !== null && (s(), s = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, { state: c.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var n = false, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        n = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function mc(e) {
    this._internalRoot = e;
  }
  Ii.prototype.render = mc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(p(409));
    var l = t.current, n = jl();
    am(l, n, e, t, null, null);
  }, Ii.prototype.unmount = mc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      am(e.current, 2, null, e, null, null), Di(), t[Ee] = null;
    }
  };
  function Ii(e) {
    this._internalRoot = e;
  }
  Ii.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Z();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Rn.length && t !== 0 && t < Rn[l].priority; l++) ;
      Rn.splice(l, 0, e), l === 0 && om(e);
    }
  };
  var dm = y.version;
  if (dm !== "19.2.3") throw Error(p(527, dm, "19.2.3"));
  $.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
    return e = E(t), e = e !== null ? X(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var e0 = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: V, reconcilerVersion: "19.2.3" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber) try {
      Yl = Pi.inject(e0), kt = Pi;
    } catch {
    }
  }
  return Os.createRoot = function(e, t) {
    if (!_(e)) throw Error(p(299));
    var l = false, n = "", s = wf, c = xf, f = jf;
    return t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = lm(e, 1, false, null, null, l, n, null, s, c, f, mm), e[Ee] = t.current, kr(e), new mc(t);
  }, Os.hydrateRoot = function(e, t, l) {
    if (!_(e)) throw Error(p(299));
    var n = false, s = "", c = wf, f = xf, g = jf, C = null;
    return l != null && (l.unstable_strictMode === true && (n = true), l.identifierPrefix !== void 0 && (s = l.identifierPrefix), l.onUncaughtError !== void 0 && (c = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (g = l.onRecoverableError), l.formState !== void 0 && (C = l.formState)), t = lm(e, 1, true, t, l ?? null, n, s, C, c, f, g, mm), t.context = nm(null), l = t.current, n = jl(), n = k(n), s = bn(n), s.callback = null, Sn(l, s, n), l = n, t.current.lanes = l, v(t, l), Hl(t), e[Ee] = t.current, kr(e), new Ii(t);
  }, Os.version = "19.2.3", Os;
}
var Em;
function f0() {
  if (Em) return yc.exports;
  Em = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
    } catch (y) {
      console.error(y);
    }
  }
  return m(), yc.exports = o0(), yc.exports;
}
var h0 = f0();
const iu = { aluminum: { name: "Aluminum 6061", E: 689e8, rho: 2700, nu: 0.33, category: "metal" }, aluminum7075: { name: "Aluminum 7075", E: 717e8, rho: 2810, nu: 0.33, category: "metal" }, brass: { name: "Brass C260", E: 11e10, rho: 8530, nu: 0.35, category: "metal" }, steel: { name: "Steel 1018", E: 205e9, rho: 7870, nu: 0.29, category: "metal" }, stainlessSteel: { name: "Stainless Steel 304", E: 193e9, rho: 8e3, nu: 0.29, category: "metal" }, bronze: { name: "Phosphor Bronze", E: 11e10, rho: 8800, nu: 0.34, category: "metal" }, bellBronze: { name: "Bell Bronze (B20)", E: 1e11, rho: 8600, nu: 0.34, category: "metal" }, rosewood: { name: "Honduran Rosewood", E: 125e8, rho: 850, nu: 0.37, category: "wood" }, africanRosewood: { name: "African Rosewood (Bubinga)", E: 158e8, rho: 890, nu: 0.36, category: "wood" }, padauk: { name: "African Padauk", E: 117e8, rho: 750, nu: 0.35, category: "wood" }, sapele: { name: "Sapele", E: 12e9, rho: 640, nu: 0.35, category: "wood" }, bubinga: { name: "Bubinga", E: 158e8, rho: 890, nu: 0.36, category: "wood" }, maple: { name: "Hard Maple", E: 126e8, rho: 705, nu: 0.35, category: "wood" }, purpleheart: { name: "Purpleheart", E: 17e9, rho: 880, nu: 0.35, category: "wood" }, wenge: { name: "Wenge", E: 14e9, rho: 870, nu: 0.35, category: "wood" }, bocote: { name: "Bocote", E: 141e8, rho: 930, nu: 0.36, category: "wood" }, zebrawood: { name: "Zebrawood", E: 152e8, rho: 780, nu: 0.35, category: "wood" }, cocobolo: { name: "Cocobolo", E: 141e8, rho: 1100, nu: 0.36, category: "wood" }, ebony: { name: "African Ebony", E: 174e8, rho: 1050, nu: 0.38, category: "wood" }, teak: { name: "Teak", E: 123e8, rho: 630, nu: 0.35, category: "wood" }, fiberglass: { name: "Fiberglass Composite", E: 17e9, rho: 1800, nu: 0.3, category: "metal" } };
function m0() {
  const m = Object.entries(iu);
  return { metals: m.filter(([, y]) => y.category === "metal"), woods: m.filter(([, y]) => y.category === "wood") };
}
function d0(m, y) {
  return m / (2 * (1 + y));
}
const g0 = 5 / 6, Cc = "01";
function y0(m) {
  const y = new ArrayBuffer(8), S = new DataView(y);
  S.setFloat64(0, m, false);
  let p = "";
  for (let _ = 0; _ < 8; _++) p += S.getUint8(_).toString(16).padStart(2, "0");
  return p;
}
function p0(m) {
  const y = new ArrayBuffer(8), S = new DataView(y);
  for (let p = 0; p < 8; p++) S.setUint8(p, parseInt(m.substr(p * 2, 2), 16));
  return S.getFloat64(0, false);
}
function lu(m) {
  const y = m.length.toString(16).padStart(2, "0"), S = m.map(y0).join("");
  return `${Cc}${y}${S}`;
}
function v0(m) {
  try {
    const y = m.replace(/[\s-]/g, "").toLowerCase();
    if (y.length < 4) return null;
    const S = y.substring(0, 2);
    if (S !== Cc) return console.warn(`Unknown gene code version: ${S}`), null;
    const p = parseInt(y.substring(2, 4), 16), _ = 4 + p * 16;
    if (y.length !== _) return console.warn(`Invalid gene code length: expected ${_}, got ${y.length}`), null;
    const D = [];
    for (let N = 0; N < p; N++) {
      const U = 4 + N * 16, B = y.substring(U, U + 16);
      D.push(p0(B));
    }
    return D;
  } catch (y) {
    return console.error("Failed to decode gene code:", y), null;
  }
}
function Nm(m) {
  try {
    const y = m.replace(/[\s-]/g, "").toLowerCase();
    if (y.length < 4 || y.substring(0, 2) !== Cc) return false;
    const _ = 4 + parseInt(y.substring(2, 4), 16) * 16;
    return y.length === _ && /^[0-9a-f]+$/.test(y);
  } catch {
    return false;
  }
}
function Ym(m) {
  var _a;
  const y = m.replace(/[\s-]/g, "").toLowerCase();
  return ((_a = y.match(/.{1,8}/g)) == null ? void 0 : _a.join("-")) || y;
}
function b0(m) {
  const { metals: y, woods: S } = m0(), p = iu[m.selectedMaterial], _ = m.disabled ?? false, D = m.mode === "rangeFinder" || _;
  return h.jsxs(h.Fragment, { children: [h.jsxs("div", { className: `panel ${_ ? "panel-disabled" : ""}`, children: [h.jsx("h3", { className: "panel-title", children: "Bar Dimensions" }), _ && h.jsx("div", { className: "panel-disabled-hint", children: "Locked during optimization" }), h.jsxs("div", { className: "input-row", style: { gridTemplateColumns: "1fr 1fr" }, children: [h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Width" }), h.jsxs("div", { className: "input-unit", children: [h.jsx("input", { type: "number", className: "form-input", value: m.barWidth, onChange: (N) => m.onBarWidthChange(parseFloat(N.target.value) || 0), min: 10, max: 200, disabled: _ }), h.jsx("span", { children: "mm" })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Thickness" }), h.jsxs("div", { className: "input-unit", children: [h.jsx("input", { type: "number", className: "form-input", value: m.barThickness, onChange: (N) => m.onBarThicknessChange(parseFloat(N.target.value) || 0), min: 5, max: 50, disabled: _ }), h.jsx("span", { children: "mm" })] })] })] })] }), h.jsxs("div", { className: `panel ${_ ? "panel-disabled" : ""}`, children: [h.jsx("h3", { className: "panel-title", children: "Material" }), h.jsxs("select", { className: "form-select", value: m.selectedMaterial, onChange: (N) => m.onMaterialChange(N.target.value), disabled: _, children: [h.jsx("optgroup", { label: "Metals", children: y.map(([N, U]) => h.jsx("option", { value: N, children: U.name }, N)) }), h.jsx("optgroup", { label: "Woods", children: S.map(([N, U]) => h.jsx("option", { value: N, children: U.name }, N)) })] }), p && h.jsxs("div", { className: "material-props", children: [h.jsxs("div", { className: "material-prop", children: [h.jsx("div", { className: "label", children: "E" }), h.jsxs("div", { className: "value", children: [(p.E / 1e9).toFixed(1), " GPa"] })] }), h.jsxs("div", { className: "material-prop", children: [h.jsx("div", { className: "label", children: "\u03C1" }), h.jsxs("div", { className: "value", children: [p.rho, " kg/m\xB3"] })] }), h.jsxs("div", { className: "material-prop", children: [h.jsx("div", { className: "label", children: "\u03BD" }), h.jsx("div", { className: "value", children: p.nu })] })] })] }), h.jsxs("div", { className: `panel ${_ ? "panel-disabled" : ""}`, children: [h.jsx("h3", { className: "panel-title", children: "Simulation" }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "FEM Elements" }), h.jsx("span", { className: "slider-value", children: m.numElements })] }), h.jsx("input", { type: "range", className: "slider", min: 40, max: 400, step: 10, value: m.numElements, onChange: (N) => m.onNumElementsChange(parseInt(N.target.value)), disabled: _ }), h.jsx("div", { className: "slider-hint", children: "Higher = more accurate but slower" })] })] }), h.jsxs("div", { className: `panel ${D ? "panel-disabled" : ""}`, children: [h.jsx("h3", { className: "panel-title", children: "Cut Constraints" }), D && h.jsx("div", { className: "panel-disabled-hint", children: "Used during optimization only" }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Number of Cuts" }), h.jsx("input", { type: "number", className: "form-input", min: 1, max: 20, value: m.numCuts, disabled: D, onChange: (N) => {
    const U = parseInt(N.target.value);
    !isNaN(U) && U >= 1 && m.onNumCutsChange(U);
  } })] }), h.jsxs("div", { className: "settings-subsection", children: [h.jsx("div", { className: "subsection-label", children: "Width" }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "Min" }), h.jsxs("span", { className: "slider-value", children: [m.minCutWidth, " mm"] })] }), h.jsx("input", { type: "range", className: "slider", min: 0.5, max: 20, step: 0.5, value: m.minCutWidth, disabled: D, onChange: (N) => m.onMinCutWidthChange(parseFloat(N.target.value)) })] }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "Max" }), h.jsx("span", { className: "slider-value", children: m.maxCutWidth === 0 ? "No limit" : `${m.maxCutWidth} mm` })] }), h.jsx("input", { type: "range", className: "slider", min: 0, max: m.referenceLength / 2, step: 5, value: m.maxCutWidth, disabled: D, onChange: (N) => m.onMaxCutWidthChange(parseFloat(N.target.value)) })] })] }), h.jsxs("div", { className: "settings-subsection", children: [h.jsx("div", { className: "subsection-label", children: "Depth" }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "Min" }), h.jsx("span", { className: "slider-value", children: m.minCutDepth === 0 ? "No limit" : `${m.minCutDepth} mm` })] }), h.jsx("input", { type: "range", className: "slider", min: 0, max: m.barThickness * 0.9, step: 0.5, value: m.minCutDepth, disabled: D, onChange: (N) => m.onMinCutDepthChange(parseFloat(N.target.value)) })] }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "Max" }), h.jsx("span", { className: "slider-value", children: m.maxCutDepth === 0 ? "No limit" : `${m.maxCutDepth} mm` })] }), h.jsx("input", { type: "range", className: "slider", min: 0, max: m.barThickness * 0.9, step: 0.5, value: m.maxCutDepth, disabled: D, onChange: (N) => m.onMaxCutDepthChange(parseFloat(N.target.value)) })] })] }), h.jsxs("div", { className: "settings-subsection", children: [h.jsx("div", { className: "subsection-label", children: "Length Adjustment" }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "Max Trim" }), h.jsx("span", { className: "slider-value", children: m.maxLengthTrim === 0 ? "Disabled" : `${m.maxLengthTrim} mm` })] }), h.jsx("input", { type: "range", className: "slider", min: 0, max: m.referenceLength * 0.2, step: 1, value: m.maxLengthTrim, disabled: D, onChange: (N) => m.onMaxLengthTrimChange(parseFloat(N.target.value)) })] }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "Max Extend" }), h.jsx("span", { className: "slider-value", children: m.maxLengthExtend === 0 ? "Disabled" : `${m.maxLengthExtend} mm` })] }), h.jsx("input", { type: "range", className: "slider", min: 0, max: m.referenceLength * 0.2, step: 1, value: m.maxLengthExtend, disabled: D, onChange: (N) => m.onMaxLengthExtendChange(parseFloat(N.target.value)) })] })] })] }), h.jsxs("div", { className: `panel ${D ? "panel-disabled" : ""}`, children: [h.jsx("h3", { className: "panel-title", children: "Fitness" }), D && h.jsx("div", { className: "panel-disabled-hint", children: "Used during optimization only" }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "f\u2081 Priority" }), h.jsxs("span", { className: "slider-value", children: [m.f1Priority.toFixed(1), "\xD7"] })] }), h.jsx("input", { type: "range", className: "slider", min: 1, max: 5, step: 0.5, value: m.f1Priority, disabled: D, onChange: (N) => m.onF1PriorityChange(parseFloat(N.target.value)) }), h.jsx("div", { className: "slider-hint", children: "Weight fundamental frequency errors higher" })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Penalty Type" }), h.jsxs("select", { className: "form-select", value: m.penaltyType, disabled: D, onChange: (N) => m.onPenaltyTypeChange(N.target.value), children: [h.jsx("option", { value: "none", children: "None" }), h.jsx("option", { value: "volume", children: "Volume (minimize removal)" }), h.jsx("option", { value: "roughness", children: "Roughness (smooth profile)" })] })] }), m.penaltyType !== "none" && h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "Penalty Weight (\u03B1)" }), h.jsx("span", { className: "slider-value", children: m.penaltyWeight.toFixed(2) })] }), h.jsx("input", { type: "range", className: "slider", min: 0, max: 0.3, step: 0.01, value: m.penaltyWeight, disabled: D, onChange: (N) => m.onPenaltyWeightChange(parseFloat(N.target.value)) })] })] }), h.jsxs("div", { className: `panel ${D ? "panel-disabled" : ""}`, children: [h.jsx("h3", { className: "panel-title", children: "Evolution" }), D && h.jsx("div", { className: "panel-disabled-hint", children: "Used during optimization only" }), h.jsxs("div", { className: "input-row", style: { gridTemplateColumns: "1fr 1fr" }, children: [h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Population" }), h.jsx("input", { type: "number", className: "form-input", value: m.populationSize, disabled: D, onChange: (N) => m.onPopulationSizeChange(parseInt(N.target.value) || 30), min: 20, max: 200 })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Generations" }), h.jsx("input", { type: "number", className: "form-input", value: m.maxGenerations, disabled: D, onChange: (N) => m.onMaxGenerationsChange(parseInt(N.target.value) || 50), min: 10, max: 500 })] })] }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "Target Error" }), h.jsxs("span", { className: "slider-value", children: [m.targetError < 0.01 ? m.targetError.toFixed(3) : m.targetError.toFixed(2), "%"] })] }), h.jsx("input", { type: "range", className: "slider", min: 1e-3, max: 1, step: 1e-3, value: m.targetError, disabled: D, onChange: (N) => m.onTargetErrorChange(parseFloat(N.target.value)) }), h.jsx("div", { className: "slider-hint", children: "Stop early if error below this threshold" })] }), h.jsxs("div", { className: "slider-group", children: [h.jsxs("div", { className: "slider-header", children: [h.jsx("span", { className: "slider-label", children: "CPU Cores" }), h.jsx("span", { className: "slider-value", children: m.maxCores === 0 ? "Auto" : m.maxCores })] }), h.jsx("input", { type: "range", className: "slider", min: 0, max: navigator.hardwareConcurrency || 8, step: 1, value: m.maxCores, disabled: D, onChange: (N) => m.onMaxCoresChange(parseInt(N.target.value)) })] }), m.showSeedInput && h.jsxs("div", { className: "form-group", style: { marginTop: 12 }, children: [h.jsx("label", { className: "form-label", children: "Seed Gene Code" }), h.jsx("input", { type: "text", className: `form-input seed-input ${m.seedGeneCode && !Nm(m.seedGeneCode) ? "input-error" : ""}`, value: m.seedGeneCode, disabled: D, onChange: (N) => m.onSeedGeneCodeChange(N.target.value), placeholder: "Paste gene code to resume" }), h.jsx("div", { className: "input-hint", children: m.seedGeneCode ? Nm(m.seedGeneCode) ? "Valid gene code" : "Invalid format" : "Optional: continue from previous result" })] })] }), h.jsxs("div", { className: "attribution", children: ["Based on", " ", h.jsx("a", { href: "https://hal.science/hal-04240657v1/file/soares2020.pdf", target: "_blank", rel: "noopener noreferrer", children: "Soares et al. (2020)" })] })] });
}
function S0({ length: m, thickness: y, cuts: S, showDimensions: p, effectiveLength: _ }) {
  const D = m > 0 && !isNaN(m) ? m : 100, N = y > 0 && !isNaN(y) ? y : 10, U = _ && !isNaN(_) ? _ : D, B = U - D, E = Math.abs(B) / 2, X = B < -0.01, L = B > 0.01, F = X || L, he = [...S.filter((He) => typeof He.lambda == "number" && typeof He.h == "number" && !isNaN(He.lambda) && !isNaN(He.h)).map((He) => ({ lambda: He.lambda * 1e3, h: He.h * 1e3 }))].sort((He, ke) => ke.lambda - He.lambda), ce = 800, I = { top: 40, right: 100, bottom: 130, left: 90 }, ve = ce - I.left - I.right, we = ve / D, xe = N * we, P = Math.max(30, Math.min(150, xe)), pe = I.top + P + I.bottom, Re = P / N, _e = I.top, Me = I.top + P, ye = I.left + D / 2 * we, Be = J.useMemo(() => {
    const He = D / 2, ke = (j) => {
      const O = Math.abs(j - He), se = he.filter((me) => me.lambda > 0 && O <= me.lambda);
      return se.length === 0 ? N : se[se.length - 1].h;
    }, Xe = [0];
    for (const j of he) if (j.lambda > 0) {
      const O = He - j.lambda, se = He + j.lambda;
      O > 0 && Xe.push(O), se < D && Xe.push(se);
    }
    Xe.push(D);
    const V = [...new Set(Xe)].sort((j, O) => j - O), $ = [];
    for (let j = 0; j < V.length; j++) {
      const O = V[j], se = I.left + O * we, me = ke(O + 1e-3), H = _e + me * Re, W = O > 0 ? ke(O - 1e-3) : me, te = _e + W * Re;
      j > 0 && Math.abs(te - H) > 0.5 ? ($.push({ x: se, y: te }), $.push({ x: se, y: H })) : $.push({ x: se, y: H });
    }
    let fe = `M ${I.left} ${_e}`;
    fe += ` L ${I.left + ve} ${_e}`;
    const Te = $[$.length - 1];
    fe += ` L ${I.left + ve} ${Te.y}`;
    for (let j = $.length - 1; j >= 0; j--) fe += ` L ${$[j].x} ${$[j].y}`;
    const Ae = $[0];
    return fe += ` L ${I.left} ${Ae.y}`, fe += ` L ${I.left} ${_e}`, fe += " Z", fe;
  }, [he, D, N, we, Re, _e, I.left, ve]);
  return h.jsxs("div", { className: "bar-profile-container panel", children: [h.jsx("h3", { className: "panel-title", children: "Bar Profile (Side View)" }), h.jsxs("svg", { className: "bar-profile-svg", viewBox: `0 0 ${ce} ${pe}`, preserveAspectRatio: "xMidYMid meet", children: [h.jsx("rect", { x: I.left, y: I.top - 10, width: ve, height: P + 20, fill: "#fafafa" }), h.jsx("line", { x1: ye, y1: _e - 10, x2: ye, y2: Me + 15, stroke: "#bbb", strokeWidth: "1", strokeDasharray: "4,4" }), h.jsx("path", { d: Be, fill: "#bbdefb", stroke: "#1976d2", strokeWidth: "2" }), X && h.jsxs(h.Fragment, { children: [h.jsx("rect", { x: I.left, y: _e, width: E * we, height: P, fill: "rgba(220, 38, 38, 0.2)", stroke: "#dc2626", strokeWidth: "1", strokeDasharray: "4,2" }), h.jsx("rect", { x: I.left + ve - E * we, y: _e, width: E * we, height: P, fill: "rgba(220, 38, 38, 0.2)", stroke: "#dc2626", strokeWidth: "1", strokeDasharray: "4,2" }), h.jsxs("text", { x: I.left + E * we / 2, y: _e - 5, textAnchor: "middle", fontSize: "9", fill: "#dc2626", children: ["-", E.toFixed(1), "mm"] }), h.jsxs("text", { x: I.left + ve - E * we / 2, y: _e - 5, textAnchor: "middle", fontSize: "9", fill: "#dc2626", children: ["-", E.toFixed(1), "mm"] })] }), L && h.jsxs(h.Fragment, { children: [h.jsx("rect", { x: I.left - E * we, y: _e, width: E * we, height: P, fill: "rgba(34, 197, 94, 0.2)", stroke: "#16a34a", strokeWidth: "1", strokeDasharray: "4,2" }), h.jsx("rect", { x: I.left + ve, y: _e, width: E * we, height: P, fill: "rgba(34, 197, 94, 0.2)", stroke: "#16a34a", strokeWidth: "1", strokeDasharray: "4,2" }), h.jsxs("text", { x: I.left - E * we / 2, y: _e - 5, textAnchor: "middle", fontSize: "9", fill: "#16a34a", children: ["+", E.toFixed(1), "mm"] }), h.jsxs("text", { x: I.left + ve + E * we / 2, y: _e - 5, textAnchor: "middle", fontSize: "9", fill: "#16a34a", children: ["+", E.toFixed(1), "mm"] })] }), h.jsxs("g", { children: [h.jsx("line", { x1: I.left - 25, y1: _e, x2: I.left - 10, y2: _e, stroke: "#444", strokeWidth: "1" }), h.jsx("line", { x1: I.left - 25, y1: Me, x2: I.left - 10, y2: Me, stroke: "#444", strokeWidth: "1" }), h.jsx("line", { x1: I.left - 17, y1: _e, x2: I.left - 17, y2: Me, stroke: "#444", strokeWidth: "1" }), h.jsx("polygon", { points: `${I.left - 17},${_e} ${I.left - 20},${_e + 6} ${I.left - 14},${_e + 6}`, fill: "#444" }), h.jsx("polygon", { points: `${I.left - 17},${Me} ${I.left - 20},${Me - 6} ${I.left - 14},${Me - 6}`, fill: "#444" }), h.jsxs("text", { x: I.left - 30, y: (_e + Me) / 2, textAnchor: "end", fontSize: "11", fill: "#333", dominantBaseline: "middle", children: ["h\u2080 = ", N, " mm"] })] }), h.jsxs("g", { children: [h.jsx("line", { x1: I.left, y1: Me + 25, x2: I.left, y2: Me + 40, stroke: "#444", strokeWidth: "1" }), h.jsx("line", { x1: I.left + ve, y1: Me + 25, x2: I.left + ve, y2: Me + 40, stroke: "#444", strokeWidth: "1" }), h.jsx("line", { x1: I.left, y1: Me + 32, x2: I.left + ve, y2: Me + 32, stroke: "#444", strokeWidth: "1" }), h.jsx("polygon", { points: `${I.left},${Me + 32} ${I.left + 6},${Me + 29} ${I.left + 6},${Me + 35}`, fill: "#444" }), h.jsx("polygon", { points: `${I.left + ve},${Me + 32} ${I.left + ve - 6},${Me + 29} ${I.left + ve - 6},${Me + 35}`, fill: "#444" }), h.jsx("text", { x: ye, y: Me + 48, textAnchor: "middle", fontSize: "11", fill: "#333", children: F ? `L = ${U.toFixed(1)} mm (original: ${D} mm)` : `L = ${D} mm` })] }), h.jsx("text", { x: ye, y: Me + 22, textAnchor: "middle", fontSize: "9", fill: "#888", children: "center" }), p && [...he].filter((ke) => ke.lambda > 0).sort((ke, Xe) => ke.lambda - Xe.lambda).map((ke, Xe) => {
    const V = D / 2, $ = V - ke.lambda, fe = ke.lambda * 2, Te = I.left + $ * we, Ae = I.left + (V + ke.lambda) * we, j = Me + 60 + Xe * 22;
    return h.jsxs("g", { children: [h.jsx("line", { x1: I.left, y1: j - 5, x2: I.left, y2: j + 5, stroke: "#666", strokeWidth: "1" }), h.jsx("line", { x1: Te, y1: j - 5, x2: Te, y2: j + 5, stroke: "#666", strokeWidth: "1" }), h.jsx("line", { x1: I.left, y1: j, x2: Te, y2: j, stroke: "#666", strokeWidth: "1" }), h.jsx("polygon", { points: `${I.left},${j} ${I.left + 5},${j - 3} ${I.left + 5},${j + 3}`, fill: "#666" }), h.jsx("polygon", { points: `${Te},${j} ${Te - 5},${j - 3} ${Te - 5},${j + 3}`, fill: "#666" }), h.jsx("text", { x: (I.left + Te) / 2, y: j - 7, textAnchor: "middle", fontSize: "9", fill: "#666", children: $.toFixed(1) }), h.jsx("line", { x1: Te, y1: j, x2: Ae, y2: j, stroke: "#e65100", strokeWidth: "2" }), h.jsx("polygon", { points: `${Te},${j} ${Te + 5},${j - 3} ${Te + 5},${j + 3}`, fill: "#e65100" }), h.jsx("polygon", { points: `${Ae},${j} ${Ae - 5},${j - 3} ${Ae - 5},${j + 3}`, fill: "#e65100" }), h.jsxs("text", { x: (Te + Ae) / 2, y: j - 7, textAnchor: "middle", fontSize: "10", fill: "#e65100", fontWeight: "600", children: [fe.toFixed(1), " mm"] }), h.jsxs("text", { x: Ae + 8, y: j + 3, fontSize: "9", fill: "#1565c0", children: ["Cut ", Xe + 1, ": depth ", (N - ke.h).toFixed(2), " mm"] })] }, `cut-dim-${Xe}`);
  }), p && (() => {
    const Xe = [...he].filter(($) => $.lambda > 0).sort(($, fe) => $.lambda - fe.lambda).map(($, fe) => ({ cut: $, index: fe, naturalY: _e + $.h * Re })).sort(($, fe) => $.naturalY - fe.naturalY);
    for (let $ = 1; $ < Xe.length; $++) {
      const fe = Xe[$ - 1], Te = Xe[$];
      Te.naturalY - fe.naturalY < 16 && (Xe[$] = { ...Te, naturalY: fe.naturalY + 16 });
    }
    const V = I.left + ve + 10;
    return Xe.map(({ cut: $, index: fe, naturalY: Te }) => {
      const Ae = _e + $.h * Re;
      return h.jsxs("g", { children: [h.jsx("line", { x1: I.left + ve + 2, y1: Ae, x2: I.left + ve + 8, y2: Ae, stroke: "#1565c0", strokeWidth: "1.5" }), Math.abs(Te - Ae) > 2 && h.jsx("line", { x1: I.left + ve + 8, y1: Ae, x2: V + 3, y2: Te, stroke: "#1565c0", strokeWidth: "0.5", strokeDasharray: "2,2" }), h.jsxs("text", { x: V + 5, y: Te, fontSize: "10", fill: "#1565c0", dominantBaseline: "middle", children: [$.h.toFixed(2), " mm"] })] }, `height-${fe}`);
    });
  })(), S.length === 0 && h.jsx("text", { x: ce / 2, y: pe / 2 - 30, textAnchor: "middle", fontSize: "14", fill: "#999", children: "Run optimization to see bar profile" })] })] });
}
function w0({ targetFrequencies: m, computedFrequencies: y, errorsInCents: S }) {
  const p = (N) => N >= 1e3 ? `${(N / 1e3).toFixed(2)} kHz` : `${N.toFixed(1)} Hz`, _ = (N) => `${N >= 0 ? "+" : ""}${N.toFixed(1)}`, D = (N) => {
    const U = Math.abs(N);
    return U <= 5 ? "error-excellent" : U <= 15 ? "error-good" : U <= 50 ? "error-ok" : "error-bad";
  };
  return h.jsxs("div", { className: "panel", children: [h.jsx("h3", { className: "panel-title", children: "Frequencies" }), h.jsxs("table", { className: "frequency-table", children: [h.jsx("thead", { children: h.jsxs("tr", { children: [h.jsx("th", { children: "Mode" }), h.jsx("th", { children: "Target" }), h.jsx("th", { children: "Computed" }), h.jsx("th", { children: "Error (cents)" })] }) }), h.jsx("tbody", { children: m.map((N, U) => h.jsxs("tr", { children: [h.jsxs("td", { children: ["f", U + 1] }), h.jsx("td", { children: p(N) }), h.jsx("td", { children: y[U] ? p(y[U]) : "\u2014" }), h.jsx("td", { className: S[U] !== void 0 ? D(S[U]) : "", children: S[U] !== void 0 ? _(S[U]) : "\u2014" })] }, U)) })] })] });
}
function x0({ tuningError: m, maxErrorCents: y, volumePercent: S, generations: p, cuts: _, lengthTrim: D, effectiveLength: N, genes: U }) {
  const [B, E] = J.useState(false), X = U ? Ym(lu(U)) : null, L = async () => {
    if (X) try {
      await navigator.clipboard.writeText(X.replace(/-/g, "")), E(true), setTimeout(() => E(false), 2e3);
    } catch (he) {
      console.error("Failed to copy:", he);
    }
  }, F = (he) => he <= 2 ? "success" : he <= 10 ? "warning" : "error", ue = [..._].sort((he, ce) => ce.lambda - he.lambda);
  return h.jsxs("div", { className: "panel", children: [h.jsx("h3", { className: "panel-title", children: "Results" }), h.jsxs("div", { className: "results-summary", children: [h.jsxs("div", { className: `result-card ${F(y)}`, children: [h.jsx("div", { className: "label", children: "Max Error" }), h.jsxs("div", { className: "value", children: [y.toFixed(1), " \xA2"] })] }), h.jsxs("div", { className: "result-card", children: [h.jsx("div", { className: "label", children: "Avg Error" }), h.jsxs("div", { className: "value", children: [m.toFixed(4), "%"] })] }), h.jsxs("div", { className: "result-card", children: [h.jsx("div", { className: "label", children: "Volume Removed" }), h.jsxs("div", { className: "value", children: [S.toFixed(1), "%"] })] }), h.jsxs("div", { className: "result-card", children: [h.jsx("div", { className: "label", children: "Generations" }), h.jsx("div", { className: "value", children: p })] })] }), D !== void 0 && D !== 0 && N && h.jsxs("div", { className: "cut-dimensions", style: { marginTop: 16 }, children: [h.jsx("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }, children: "Length Optimization:" }), h.jsxs("div", { className: "cut-item", children: [h.jsx("span", { className: "cut-label", children: D > 0 ? "Length Trim" : "Length Extend" }), h.jsxs("span", { className: "cut-values", children: [Math.abs(D * 1e3).toFixed(1), " mm ", D > 0 ? "removed from" : "added to", " each end"] })] }), h.jsxs("div", { className: "cut-item", children: [h.jsx("span", { className: "cut-label", children: "Effective Length" }), h.jsxs("span", { className: "cut-values", children: [(N * 1e3).toFixed(1), " mm (was ", ((N + 2 * D) * 1e3).toFixed(1), " mm)"] })] })] }), h.jsxs("div", { className: "cut-dimensions", children: [h.jsx("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 8, marginTop: D !== void 0 && D !== 0 ? 8 : 16 }, children: "Cut Dimensions:" }), ue.map((he, ce) => {
    const I = he.lambda * 2 * 1e3, ve = ue[ce + 1], we = ve ? (he.lambda - ve.lambda) * 1e3 : null;
    return h.jsxs("div", { className: "cut-item", children: [h.jsxs("span", { className: "cut-label", children: ["Cut ", ce + 1] }), h.jsxs("span", { className: "cut-values", children: ["width = ", I.toFixed(1), " mm, h = ", (he.h * 1e3).toFixed(2), " mm", we !== null && h.jsxs("span", { className: "cut-gap", children: ["(gap: ", we.toFixed(1), " mm)"] })] })] }, ce);
  })] }), X && h.jsxs("div", { className: "gene-code-container", children: [h.jsx("div", { className: "gene-code-label", children: "Gene Code" }), h.jsx("div", { className: "gene-code-value", onClick: L, title: "Click to copy", children: X }), h.jsx("div", { className: "gene-code-hint", children: B ? "Copied!" : 'Click to copy - paste into "Seed Gene Code" to resume optimization' })] })] });
}
function j0({ isRunning: m, currentGeneration: y, maxGenerations: S, bestFitness: p, onStart: _, onStop: D }) {
  const N = S > 0 ? y / S * 100 : 0;
  return h.jsxs("div", { className: "panel", children: [h.jsx("h3", { className: "panel-title", children: "Optimization Controls" }), h.jsxs("div", { className: "btn-group", children: [h.jsx("button", { className: "btn btn-primary", onClick: _, disabled: m, style: { flex: 1 }, children: m ? "Running..." : "\u25B6 Start Optimization" }), h.jsx("button", { className: "btn btn-danger", onClick: D, disabled: !m, children: "\u25A0 Stop" })] }), (m || y > 0) && h.jsxs("div", { className: "progress-container", children: [h.jsx("div", { className: "progress-bar-wrapper", children: h.jsx("div", { className: "progress-bar", style: { width: `${N}%` } }) }), h.jsxs("div", { className: "progress-stats", children: [h.jsxs("span", { children: ["Generation: ", y, " / ", S] }), h.jsxs("span", { children: ["Best: ", p < 1 / 0 ? p.toFixed(4) : "\u2014", "%"] })] })] })] });
}
function Mm({ entries: m, targetFrequencies: y, selectedGeneration: S, onSelectGeneration: p }) {
  const [_, D] = J.useState(false), [N, U] = J.useState("generation"), [B, E] = J.useState("asc"), [X, L] = J.useState(null), [F, ue] = J.useState(false), he = J.useRef(null), ce = J.useRef(null), I = J.useCallback(() => {
    const P = he.current;
    if (!P) return;
    const pe = P.scrollHeight - P.scrollTop - P.clientHeight < 20;
    ue(!pe);
  }, []), ve = async (P, pe, Re) => {
    P.stopPropagation();
    const _e = lu(pe);
    try {
      await navigator.clipboard.writeText(_e), L(Re), setTimeout(() => L(null), 2e3);
    } catch (Me) {
      console.error("Failed to copy:", Me);
    }
  }, we = J.useMemo(() => [...m].sort((pe, Re) => {
    let _e, Me;
    if (N === "generation") _e = pe.generation, Me = Re.generation;
    else if (N === "fitness") _e = pe.fitness, Me = Re.fitness;
    else {
      const ye = parseInt(N.replace("error", ""));
      _e = Math.abs(pe.errorsInCents[ye] ?? 0), Me = Math.abs(Re.errorsInCents[ye] ?? 0);
    }
    return B === "asc" ? _e - Me : Me - _e;
  }), [m, N, B]), xe = (P) => {
    N === P ? E((pe) => pe === "asc" ? "desc" : "asc") : (U(P), E("asc"));
  }, Je = (P) => N !== P ? null : B === "asc" ? " \u25B2" : " \u25BC";
  if (J.useEffect(() => {
    _ && ce.current && N === "generation" && B === "asc" && !F && ce.current.scrollIntoView({ behavior: "smooth" });
  }, [m.length, _, N, B, F]), J.useEffect(() => {
    ue(false);
  }, [_, N, B]), m.length === 0) return null;
  const Ne = (P) => {
    p(S === P ? null : P);
  };
  return h.jsxs("div", { className: "panel generation-log", children: [h.jsxs("button", { className: "log-header", onClick: () => D(!_), "aria-expanded": _, children: [h.jsxs("span", { className: "log-title", children: ["Generation Log (", m.length, ")", S !== null && h.jsxs("span", { className: "log-selected-badge", children: ["Viewing Gen ", S] })] }), h.jsx("span", { className: `log-chevron ${_ ? "expanded" : ""}`, children: "\u25B6" })] }), _ && h.jsxs("div", { className: "log-content", ref: he, onScroll: I, children: [h.jsxs("table", { className: "log-table", children: [h.jsx("thead", { children: h.jsxs("tr", { children: [h.jsxs("th", { className: "sortable", onClick: () => xe("generation"), children: ["Gen", Je("generation")] }), h.jsxs("th", { className: "sortable", onClick: () => xe("fitness"), children: ["Fitness", Je("fitness")] }), y.map((P, pe) => h.jsxs("th", { className: "sortable", onClick: () => xe(`error${pe}`), children: ["f", pe + 1, " err", Je(`error${pe}`)] }, pe)), h.jsx("th", { className: "gene-code-header", children: "Gene Code" })] }) }), h.jsxs("tbody", { children: [we.map((P) => h.jsxs("tr", { className: `log-row ${S === P.generation ? "selected" : ""}`, onClick: () => Ne(P.generation), children: [h.jsx("td", { className: "gen-num", children: P.generation }), h.jsxs("td", { className: "fitness", children: [P.fitness.toFixed(4), "%"] }), P.errorsInCents.map((pe, Re) => h.jsxs("td", { className: `error-cell ${E0(pe)}`, children: [pe >= 0 ? "+" : "", pe.toFixed(1), "\xA2"] }, Re)), h.jsx("td", { className: "gene-code-cell", children: h.jsx("button", { type: "button", className: "copy-gene-btn", onClick: (pe) => ve(pe, P.genes, P.generation), title: "Copy gene code to clipboard", children: X === P.generation ? "Copied!" : "Copy" }) })] }, P.generation)), S !== null && we.find((P) => P.generation === S) && h.jsx("tr", { className: "gene-code-detail-row", children: h.jsx("td", { colSpan: 3 + y.length, children: h.jsxs("div", { className: "gene-code-detail", children: [h.jsxs("span", { className: "gene-code-label", children: ["Gene Code (Gen ", S, "):"] }), h.jsx("code", { className: "gene-code-value", children: Ym(lu(we.find((P) => P.generation === S).genes)) })] }) }) })] })] }), h.jsx("div", { ref: ce })] })] });
}
function E0(m) {
  const y = Math.abs(m);
  return y <= 5 ? "error-excellent" : y <= 15 ? "error-good" : y <= 50 ? "error-ok" : "error-bad";
}
const Ua = [{ name: "1:2.76:5.40", ratios: [1, 2.756, 5.404], description: "Natural uniform bar frequencies (no tuning needed)", instrument: "Uniform Bar" }, { name: "1:4:10", ratios: [1, 4, 10], description: "Standard marimba tuning (triple tuning)", instrument: "Marimba" }, { name: "1:4:9", ratios: [1, 4, 9], description: "Alternative marimba/vibraphone tuning", instrument: "Vibraphone" }, { name: "1:3:6", ratios: [1, 3, 6], description: "Xylophone tuning", instrument: "Xylophone" }, { name: "1:3:6:12", ratios: [1, 3, 6, 12], description: "Extended harmonic series (quadruple tuning)", instrument: "Custom" }, { name: "1:2:4:8", ratios: [1, 2, 4, 8], description: "Octave series (demanding)", instrument: "Custom" }, { name: "1:2:4:8:16", ratios: [1, 2, 4, 8, 16], description: "Extended octave series (5 modes)", instrument: "Custom" }, { name: "1:5:10:15", ratios: [1, 5, 10, 15], description: "Unorthodox quintal tuning", instrument: "Custom" }, { name: "1:2:5:10", ratios: [1, 2, 5, 10], description: "Mixed interval tuning", instrument: "Custom" }, { name: "1:3:5:7:9", ratios: [1, 3, 5, 7, 9], description: "Odd harmonic series", instrument: "Custom" }];
function nu(m, y) {
  return m.map((S) => S * y);
}
function Xm(m) {
  return new Worker("/multi-modal-tuning/assets/optimizationWorker-glHieaEw.js", { type: "module", name: m == null ? void 0 : m.name });
}
function N0({ batchItems: m, barWidth: y, barThickness: S, material: p, optimizationSettings: _, selectedItemIndex: D, onSelectItem: N, onBatchUpdate: U, onClearBatch: B, isRunning: E, onRunningChange: X, onProgressUpdate: L }) {
  const [F, ue] = J.useState(null), [he, ce] = J.useState(0), I = J.useRef(null), ve = J.useRef(false), we = J.useCallback((ye) => {
    const Be = Ua.find((He) => He.name === _.tuningPreset);
    return Be ? nu(Be.ratios, ye) : [ye];
  }, [_.tuningPreset]), xe = J.useCallback((ye, Be) => {
    if (ve.current || ye >= Be.length) {
      X(false), ue(null);
      return;
    }
    const He = Be[ye], ke = He.barResult.optimalLength, Xe = He.barResult.targetFrequency, V = we(Xe), $ = Be.map((j, O) => O === ye ? { ...j, status: "running", currentGeneration: 0, maxGenerations: _.maxGenerations } : j);
    U($), ue(ye), ce(0);
    const fe = new Xm();
    I.current = fe, fe.onmessage = (j) => {
      const O = j.data;
      switch (O.type) {
        case "PROGRESS":
          const se = O.data;
          ce(se.generation);
          const me = se.computedFrequencies && se.errorsInCents ? { generation: se.generation, bestFitness: se.bestFitness, computedFrequencies: se.computedFrequencies, errorsInCents: se.errorsInCents, lengthTrim: se.lengthTrim, genes: [...se.bestIndividual.genes] } : void 0, H = Be.map((qe, gt) => gt === ye ? { ...qe, currentGeneration: se.generation, currentProgress: me } : qe);
          U(H), me && L && L(me);
          break;
        case "COMPLETE":
          L && L(null);
          const W = Be.map((qe, gt) => gt === ye ? { ...qe, status: "complete", optimizationResult: O.result, currentProgress: void 0 } : qe);
          U(W), fe.terminate(), I.current = null, setTimeout(() => xe(ye + 1, W), 100);
          break;
        case "ERROR":
          L && L(null);
          const te = Be.map((qe, gt) => gt === ye ? { ...qe, status: "error", error: O.message, currentProgress: void 0 } : qe);
          U(te), fe.terminate(), I.current = null, setTimeout(() => xe(ye + 1, te), 100);
          break;
        case "STOPPED":
          L && L(null);
          const Ge = Be.map((qe, gt) => gt === ye ? { ...qe, status: "pending", currentProgress: void 0 } : qe);
          U(Ge), fe.terminate(), I.current = null, X(false), ue(null);
          break;
      }
    };
    const Ae = { type: "START", params: { bar: { L: ke / 1e3, b: y / 1e3, h0: S / 1e3, hMin: S / 1e4 }, material: p, targetFrequencies: V, numCuts: _.numCuts, penaltyType: _.penaltyType, penaltyWeight: _.penaltyWeight, eaParams: { populationSize: _.populationSize, elitismPercent: 10, crossoverPercent: 30, mutationPercent: 60, mutationStrength: 0.1, maxGenerations: _.maxGenerations, targetError: _.targetError, numElements: _.numElements, f1Priority: _.f1Priority, minCutWidth: _.minCutWidth / 1e3, maxCutWidth: _.maxCutWidth / 1e3, minCutDepth: _.minCutDepth / 1e3, maxCutDepth: _.maxCutDepth / 1e3, maxLengthTrim: _.maxLengthTrim / 1e3, maxLengthExtend: _.maxLengthExtend / 1e3, maxCores: _.maxCores } } };
    fe.postMessage(Ae);
  }, [y, S, p, _, we, U, X]), Je = J.useCallback(() => {
    if (m.length === 0) return;
    ve.current = false, X(true);
    const ye = m.map((Be) => ({ ...Be, status: "pending", optimizationResult: void 0, error: void 0, currentGeneration: void 0 }));
    U(ye), xe(0, ye);
  }, [m, U, X, xe]), Ne = J.useCallback(() => {
    if (ve.current = true, I.current) {
      const ye = { type: "STOP" };
      I.current.postMessage(ye);
    }
  }, []);
  J.useEffect(() => () => {
    I.current && I.current.terminate();
  }, []);
  const P = m.filter((ye) => ye.status === "complete").length, pe = m.filter((ye) => ye.status === "error").length, Re = m.filter((ye) => ye.status === "pending").length, _e = (ye) => {
    switch (ye) {
      case "complete":
        return "\u2713";
      case "running":
        return "\u27F3";
      case "error":
        return "\u2717";
      case "pending":
        return "\u25CB";
      case "skipped":
        return "\u2013";
    }
  }, Me = (ye) => {
    switch (ye) {
      case "complete":
        return "status-complete";
      case "running":
        return "status-running";
      case "error":
        return "status-error";
      case "pending":
        return "status-pending";
      case "skipped":
        return "status-skipped";
    }
  };
  return m.length === 0 ? null : h.jsxs("div", { className: "panel batch-queue-panel", children: [h.jsxs("div", { className: "batch-queue-header", children: [h.jsx("h3", { className: "panel-title", children: "Batch Queue" }), h.jsx("button", { className: "btn btn-sm btn-ghost", onClick: B, disabled: E, title: "Clear batch queue", children: "Clear" })] }), h.jsx("div", { className: "batch-queue-list", children: m.map((ye, Be) => {
    const He = ye.status === "running" && ye.currentGeneration !== void 0 && ye.maxGenerations ? ye.currentGeneration / ye.maxGenerations * 100 : 0;
    return h.jsxs("div", { className: `batch-queue-item ${D === Be ? "selected" : ""} ${Me(ye.status)}`, onClick: () => N(D === Be ? null : Be), children: [h.jsx("span", { className: `batch-item-status ${Me(ye.status)}`, children: _e(ye.status) }), h.jsx("span", { className: "batch-item-note", children: ye.barResult.note.name }), h.jsxs("span", { className: "batch-item-length", children: [ye.barResult.optimalLength.toFixed(1), " mm"] }), ye.status === "running" && ye.currentGeneration !== void 0 && h.jsxs("span", { className: "batch-item-progress", children: ["Gen ", ye.currentGeneration, "/", ye.maxGenerations || _.maxGenerations, ye.currentProgress && h.jsxs("span", { className: "batch-item-live-error", children: [" ", "(", Math.max(...ye.currentProgress.errorsInCents.map(Math.abs)).toFixed(0), "\xA2)"] })] }), ye.status === "complete" && ye.optimizationResult && h.jsxs("span", { className: "batch-item-error", children: [ye.optimizationResult.tuningError.toFixed(2), "%"] }), ye.status === "running" && h.jsx("div", { className: "batch-item-progress-track", children: h.jsx("div", { className: "batch-item-progress-fill", style: { width: `${He}%` } }) })] }, ye.barResult.note.midiNumber);
  }) }), h.jsxs("div", { className: "batch-queue-stats", children: [h.jsxs("span", { className: "batch-stat", children: [h.jsx("span", { className: "stat-value", children: P }), h.jsx("span", { className: "stat-label", children: "done" })] }), pe > 0 && h.jsxs("span", { className: "batch-stat error", children: [h.jsx("span", { className: "stat-value", children: pe }), h.jsx("span", { className: "stat-label", children: "error" })] }), h.jsxs("span", { className: "batch-stat", children: [h.jsx("span", { className: "stat-value", children: Re }), h.jsx("span", { className: "stat-label", children: "pending" })] })] }), h.jsx("div", { className: "batch-queue-controls", children: E ? h.jsxs("button", { className: "btn btn-danger btn-block", onClick: Ne, children: ["Stop Batch", F !== null && h.jsxs("span", { className: "btn-info", children: ["(", F + 1, "/", m.length, ")"] })] }) : h.jsx("button", { className: "btn btn-primary btn-block", onClick: Je, disabled: m.length === 0, children: P > 0 ? "Re-run Batch" : "Start Batch Optimization" }) })] });
}
function Rs(m, y, S, p) {
  const _ = Math.abs(m - S / 2), N = [...y].sort((U, B) => B.lambda - U.lambda).filter((U) => U.lambda > 0 && _ <= U.lambda);
  return N.length === 0 ? p : N[N.length - 1].h;
}
function M0(m, y, S, p) {
  const _ = y / p, D = [], N = y / 2, U = [...m].sort((E, X) => X.lambda - E.lambda), B = [];
  for (const E of U) {
    if (E.lambda <= 0) continue;
    const X = N - E.lambda, L = N + E.lambda, F = Rs(X - 1e-4, U, y, S), ue = Rs(X + 1e-4, U, y, S);
    Math.abs(F - ue) > 1e-9 && B.push({ pos: X, hBefore: F, hAfter: ue });
    const he = Rs(L - 1e-4, U, y, S), ce = Rs(L + 1e-4, U, y, S);
    Math.abs(he - ce) > 1e-9 && B.push({ pos: L, hBefore: he, hAfter: ce });
  }
  B.sort((E, X) => E.pos - X.pos);
  for (let E = 0; E < p; E++) {
    const X = E * _, L = (E + 1) * _, F = (X + L) / 2;
    let ue = false;
    for (const he of B) if (he.pos > X && he.pos < L) {
      const ce = he.pos - X, I = L - he.pos, ve = he.hBefore, we = he.hAfter;
      D.push(Math.sqrt((ve * ve * ce + we * we * I) / (ce + I))), ue = true;
      break;
    }
    ue || D.push(Rs(F, U, y, S));
  }
  return D;
}
function tu(m) {
  const y = [];
  for (let S = 0; S + 1 < m.length; S += 2) {
    const p = m[S], _ = m[S + 1];
    typeof p == "number" && typeof _ == "number" && !isNaN(p) && !isNaN(_) && y.push({ lambda: p, h: _ });
  }
  return y.sort((S, p) => p.lambda - S.lambda);
}
const au = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function _c(m) {
  const y = m.match(/^([A-Ga-g])([#b]?)(\d)$/);
  if (!y) return null;
  const [, S, p, _] = y, D = parseInt(_);
  let N = au.indexOf(S.toUpperCase());
  if (N === -1) return null;
  p === "#" && (N += 1), p === "b" && (N -= 1), N < 0 && (N += 12), N >= 12 && (N -= 12);
  const U = (D - 4) * 12 + (N - 9);
  return 440 * Math.pow(2, U / 12);
}
function _m(m) {
  const y = 12 * Math.log2(m / 440), S = Math.round(69 + y), p = (S % 12 + 12) % 12, _ = Math.floor(S / 12) - 1;
  return `${au[p]}${_}`;
}
function _0() {
  const m = [];
  for (let y = 2; y <= 7; y++) for (let S = 0; S < au.length; S++) {
    const p = `${au[S]}${y}`, _ = _c(p);
    _ && _ >= 20 && _ <= 4e3 && m.push({ note: p, freq: Math.round(_ * 10) / 10 });
  }
  return m;
}
function T0({ barLength: m, barWidth: y, barThickness: S, onBarLengthChange: p, selectedMaterial: _, tuningPreset: D, onTuningPresetChange: N, fundamentalFrequency: U, onFundamentalChange: B, optimizationSettings: E, seedGeneCode: X, isRunning: L, onRunningChange: F, batchItems: ue, onBatchItemsChange: he }) {
  const [ce, I] = J.useState(null), [ve, we] = J.useState(false), [xe, Je] = J.useState([]), [Ne, P] = J.useState(null), [pe, Re] = J.useState(""), [_e, Me] = J.useState(false), [ye, Be] = J.useState(0), He = J.useRef(null), [ke, Xe] = J.useState(0), [V, $] = J.useState(1 / 0), [fe, Te] = J.useState(null), [Ae, j] = J.useState([]), [O, se] = J.useState([]), [me, H] = J.useState(0), [W, te] = J.useState(null), [Ge, qe] = J.useState([]), [gt, tl] = J.useState(null), $t = J.useRef(null), ll = J.useMemo(() => _0(), []), Mt = J.useMemo(() => {
    if (!pe) return ll.slice(0, 12);
    const be = pe.toUpperCase();
    return ll.filter((Ze) => Ze.note.toUpperCase().startsWith(be) || Ze.note.toUpperCase().includes(be)).slice(0, 12);
  }, [pe, ll]);
  J.useEffect(() => {
    const be = _m(U), Ze = _c(be);
    Ze && Math.abs(1200 * Math.log2(U / Ze)) < 5 && Re(be);
  }, [U]);
  const Lt = J.useCallback(() => {
    const be = Ua.find((Ze) => Ze.name === D);
    return be ? nu(be.ratios, U) : [U];
  }, [D, U])(), Gt = iu[_], al = (be, Ze) => {
    Re(be), B(Math.round(Ze * 10) / 10), Me(false);
  }, qt = (be) => {
    if (be.key === "ArrowDown") be.preventDefault(), Be((Ze) => Math.min(Ze + 1, Mt.length - 1));
    else if (be.key === "ArrowUp") be.preventDefault(), Be((Ze) => Math.max(Ze - 1, 0));
    else if (be.key === "Enter" && Mt.length > 0) {
      be.preventDefault();
      const Ze = Mt[ye];
      al(Ze.note, Ze.freq);
    } else be.key === "Escape" && Me(false);
  }, de = (be) => {
    Re(be), Be(0), Me(true);
    const Ze = _c(be);
    Ze && Ze >= 20 && Ze <= 4e3 && B(Math.round(Ze * 10) / 10);
  }, Ye = J.useCallback(() => {
    const be = new Xm();
    $t.current = be, be.onmessage = (i) => {
      const u = i.data;
      switch (u.type) {
        case "PROGRESS":
          const a = u.data;
          Xe(a.generation), $(a.bestFitness), Te(a.bestIndividual), a.computedFrequencies && j(a.computedFrequencies), a.errorsInCents && se(a.errorsInCents), a.lengthTrim !== void 0 && H(a.lengthTrim), a.computedFrequencies && a.errorsInCents && qe((r) => [...r, { generation: a.generation, fitness: a.bestFitness, errorsInCents: a.errorsInCents, computedFrequencies: a.computedFrequencies, genes: [...a.bestIndividual.genes] }]);
          break;
        case "COMPLETE":
          te(u.result), F(false);
          break;
        case "ERROR":
          console.error("Optimization error:", u.message), F(false);
          break;
        case "STOPPED":
          F(false);
          break;
      }
    };
    const Ze = X ? v0(X) : void 0, d = { type: "START", params: { bar: { L: m / 1e3, b: y / 1e3, h0: S / 1e3, hMin: S / 1e4 }, material: Gt, targetFrequencies: Lt, numCuts: E.numCuts, penaltyType: E.penaltyType, penaltyWeight: E.penaltyWeight, eaParams: { populationSize: E.populationSize, elitismPercent: 10, crossoverPercent: 30, mutationPercent: 60, mutationStrength: 0.1, maxGenerations: E.maxGenerations, targetError: E.targetError, numElements: E.numElements, f1Priority: E.f1Priority, minCutWidth: E.minCutWidth / 1e3, maxCutWidth: E.maxCutWidth / 1e3, minCutDepth: E.minCutDepth / 1e3, maxCutDepth: E.maxCutDepth / 1e3, maxLengthTrim: E.maxLengthTrim / 1e3, maxLengthExtend: E.maxLengthExtend / 1e3, maxCores: E.maxCores }, seedGenes: Ze || void 0 } };
    be.postMessage(d), F(true), Xe(0), $(1 / 0), Te(null), j([]), se([]), H(0), te(null), qe([]), tl(null);
  }, [m, y, S, Gt, Lt, E, X, F]), ot = J.useCallback(() => {
    if ($t.current) {
      const be = { type: "STOP" };
      $t.current.postMessage(be);
    }
  }, []);
  J.useEffect(() => () => {
    $t.current && $t.current.terminate();
  }, []);
  const ul = J.useCallback(() => {
    he([]), I(null), we(false), Je([]), P(null);
  }, [he]), yt = J.useCallback((be) => {
    be === null ? (Je([]), P(null)) : Je((Ze) => [...Ze, { generation: be.generation, fitness: be.bestFitness, errorsInCents: be.errorsInCents, computedFrequencies: be.computedFrequencies, genes: be.genes }]);
  }, []), on = J.useCallback(() => {
    const be = { barResult: { note: { name: pe || _m(U), frequency: U, midiNumber: Math.round(69 + 12 * Math.log2(U / 440)) }, targetFrequency: U, optimalLength: m, computedFrequency: U, errorCents: 0, searchIterations: 0, selected: true }, status: "pending" };
    ue.some((Rl) => Rl.barResult.note.name === be.barResult.note.name && Math.abs(Rl.barResult.optimalLength - be.barResult.optimalLength) < 0.1) || he([...ue, be]);
  }, [pe, U, m, ue, he]), Bn = J.useCallback((be) => {
    if (I(be), be !== null && ue[be]) {
      const Ze = ue[be];
      p(Ze.barResult.optimalLength), B(Ze.barResult.targetFrequency), Ze.optimizationResult ? te(Ze.optimizationResult) : te(null), qe([]), tl(null);
    }
  }, [ue, p, B]);
  J.useEffect(() => {
    ue.length > 0 && !ve ? we(true) : ue.length === 0 && ve && we(false);
  }, [ue.length, ve]);
  const sl = ce !== null ? ue[ce] : null, fn = ue.find((be) => be.status === "running"), Zl = ue.findIndex((be) => be.status === "running");
  J.useEffect(() => {
    if (Zl !== -1 && ce !== Zl) {
      I(Zl);
      const be = ue[Zl];
      p(be.barResult.optimalLength), B(be.barResult.targetFrequency);
    }
  }, [Zl, ce, ue, p, B]);
  const Kt = (sl == null ? void 0 : sl.optimizationResult) ?? W, hn = ue.length > 0 ? Ne !== null ? xe.find((be) => be.generation === Ne) : null : gt !== null ? Ge.find((be) => be.generation === gt) : null, Gl = (sl == null ? void 0 : sl.currentProgress) ?? (fn == null ? void 0 : fn.currentProgress), Yl = hn ? tu(hn.genes) : (Kt == null ? void 0 : Kt.cuts) ?? ((Gl == null ? void 0 : Gl.genes) ? tu(Gl.genes) : fe ? tu(fe.genes) : []), kt = (hn == null ? void 0 : hn.computedFrequencies) ?? (Kt == null ? void 0 : Kt.computedFrequencies) ?? (Gl == null ? void 0 : Gl.computedFrequencies) ?? Ae, El = (hn == null ? void 0 : hn.errorsInCents) ?? (Kt == null ? void 0 : Kt.errorsInCents) ?? (Gl == null ? void 0 : Gl.errorsInCents) ?? O, Yt = sl ? sl.barResult.optimalLength : m, Xa = (Kt == null ? void 0 : Kt.effectiveLength) ? Kt.effectiveLength * 1e3 : (Gl == null ? void 0 : Gl.lengthTrim) ? Yt - 2 * Gl.lengthTrim * 1e3 : me !== 0 ? Yt - 2 * me * 1e3 : Yt, ta = sl ? (() => {
    const be = Ua.find((Ze) => Ze.name === E.tuningPreset);
    return be ? nu(be.ratios, sl.barResult.targetFrequency) : [sl.barResult.targetFrequency];
  })() : Lt;
  return h.jsxs(h.Fragment, { children: [h.jsx("div", { className: "panel single-bar-inputs", children: h.jsxs("div", { className: "single-bar-input-row", children: [h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Bar Length" }), h.jsxs("div", { className: "input-unit", children: [h.jsx("input", { type: "number", className: "form-input", value: m, onChange: (be) => p(parseFloat(be.target.value) || 0), min: 50, max: 1e3 }), h.jsx("span", { children: "mm" })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Fundamental (f\u2081)" }), h.jsxs("div", { className: "frequency-input-row", children: [h.jsxs("div", { className: "note-input-container", children: [h.jsx("input", { ref: He, type: "text", className: "form-input note-input", value: pe, onChange: (be) => de(be.target.value), onFocus: () => Me(true), onBlur: () => setTimeout(() => Me(false), 150), onKeyDown: qt, placeholder: "C4" }), _e && Mt.length > 0 && h.jsx("div", { className: "note-suggestions", children: Mt.map((be, Ze) => h.jsxs("div", { className: `note-suggestion ${Ze === ye ? "selected" : ""}`, onMouseDown: () => al(be.note, be.freq), onMouseEnter: () => Be(Ze), children: [h.jsx("span", { className: "note-name", children: be.note }), h.jsxs("span", { className: "note-freq", children: [be.freq, " Hz"] })] }, be.note)) })] }), h.jsxs("div", { className: "input-unit", children: [h.jsx("input", { type: "number", className: "form-input", value: U, onChange: (be) => B(parseFloat(be.target.value) || 0), min: 20, max: 4e3, step: 0.1 }), h.jsx("span", { children: "Hz" })] })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", htmlFor: "tuning-preset-select", children: "Tuning Ratios" }), h.jsx("select", { id: "tuning-preset-select", className: "form-select", value: D, onChange: (be) => N(be.target.value), children: Ua.map((be) => h.jsxs("option", { value: be.name, children: [be.name, " (", be.instrument, ")"] }, be.name)) })] }), h.jsxs("div", { className: "form-group target-frequencies-group", children: [h.jsx("label", { className: "form-label", children: "Target Frequencies (Hz)" }), h.jsx("div", { className: "target-frequencies-inputs", children: Lt.map((be, Ze) => h.jsxs("div", { className: "target-freq-input", children: [h.jsxs("span", { className: "target-freq-label", children: ["f", Ze + 1] }), h.jsx("input", { type: "text", className: "form-input", value: be.toFixed(1), readOnly: true, title: `Target frequency f${Ze + 1}` })] }, Ze)) })] }), h.jsxs("div", { className: "form-group add-to-batch-group", children: [h.jsx("label", { className: "form-label", children: "\xA0" }), h.jsx("button", { type: "button", className: "btn btn-secondary add-to-batch-btn", onClick: on, disabled: L, title: "Add this bar to the batch queue", children: "+ Add to Batch" })] })] }) }), ue.length > 0 && h.jsx(N0, { batchItems: ue, barWidth: y, barThickness: S, material: Gt, optimizationSettings: E, selectedItemIndex: ce, onSelectItem: Bn, onBatchUpdate: he, onClearBatch: ul, isRunning: L, onRunningChange: F, onProgressUpdate: yt }), ue.length === 0 && h.jsx(j0, { isRunning: L, currentGeneration: ke, maxGenerations: E.maxGenerations, bestFitness: V, onStart: Ye, onStop: ot }), h.jsx(S0, { length: Yt, thickness: S, cuts: Yl, showDimensions: Yl.length > 0, effectiveLength: Xa }), h.jsx(w0, { targetFrequencies: ta, computedFrequencies: kt, errorsInCents: El }), ue.length === 0 ? h.jsx(Mm, { entries: Ge, targetFrequencies: Lt, selectedGeneration: gt, onSelectGeneration: tl }) : h.jsx(Mm, { entries: xe, targetFrequencies: ta, selectedGeneration: Ne, onSelectGeneration: P }), Kt && h.jsx(x0, { tuningError: Kt.tuningError, maxErrorCents: Kt.maxErrorCents, volumePercent: Kt.volumePercent, generations: Kt.generations, cuts: Kt.cuts, lengthTrim: Kt.lengthTrim, effectiveLength: Kt.effectiveLength, genes: Kt.bestIndividual.genes })] });
}
const Ba = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], C0 = ["C", "D", "E", "F", "G", "A", "B"];
function La(m) {
  const y = m.match(/^([A-Ga-g])([#b]?)(\d)$/);
  if (!y) return null;
  const [, S, p, _] = y, D = parseInt(_);
  let N = Ba.indexOf(S.toUpperCase());
  if (N === -1) return null;
  p === "#" && (N += 1), p === "b" && (N -= 1), N < 0 && (N += 12), N >= 12 && (N -= 12);
  const U = (D - 4) * 12 + (N - 9);
  return 440 * Math.pow(2, U / 12);
}
function z0(m) {
  const y = 12 * Math.log2(m / 440), S = Math.round(69 + y), p = (S % 12 + 12) % 12, _ = Math.floor(S / 12) - 1;
  return `${Ba[p]}${_}`;
}
function Tm(m) {
  const y = m.match(/^([A-Ga-g])([#b]?)(\d)$/);
  if (!y) return null;
  const [, S, p, _] = y, D = parseInt(_);
  let N = Ba.indexOf(S.toUpperCase());
  return N === -1 ? null : (p === "#" && (N += 1), p === "b" && (N -= 1), N < 0 && (N += 12), N >= 12 && (N -= 12), (D + 1) * 12 + N);
}
function A0(m, y, S, p) {
  const _ = Tm(m), D = Tm(y);
  if (_ === null || D === null) return [];
  const N = [], U = Math.min(_, D), B = Math.max(_, D);
  for (let E = U; E <= B; E++) {
    const X = (E % 12 + 12) % 12, L = Math.floor(E / 12) - 1, F = Ba[X], ue = `${F}${L}`;
    let he = false;
    if (S === "chromatic" ? he = true : S === "natural" && (he = C0.includes(F)), he) {
      const ce = La(ue);
      ce !== null && N.push({ name: ue, frequency: ce, midiNumber: E });
    }
  }
  return N;
}
function Qm() {
  const m = [];
  for (let y = 2; y <= 7; y++) for (let S = 0; S < Ba.length; S++) {
    const p = `${Ba[S]}${y}`, _ = La(p);
    _ && _ >= 20 && _ <= 4e3 && m.push({ note: p, freq: Math.round(_ * 10) / 10 });
  }
  return m;
}
function Sc(m, y) {
  return 1200 * Math.log2(m / y);
}
function D0(m, y, S, p, _, D) {
  const N = S * y, U = S * y * y * y / 12, B = d0(p, D), E = g0, X = 12 * p * U / (E * B * N * m * m), L = p * U, F = m, ue = F * F, he = F * F * F, ce = 1 + X, I = [[12 * L / (he * ce), 6 * L / (ue * ce), -12 * L / (he * ce), 6 * L / (ue * ce)], [6 * L / (ue * ce), (4 + X) * L / (F * ce), -6 * L / (ue * ce), (2 - X) * L / (F * ce)], [-12 * L / (he * ce), -6 * L / (ue * ce), 12 * L / (he * ce), -6 * L / (ue * ce)], [6 * L / (ue * ce), (2 - X) * L / (F * ce), -6 * L / (ue * ce), (4 + X) * L / (F * ce)]], ve = _ * N, we = _ * U, xe = ve * F / 420, Je = we / (30 * F), Ne = 156 * xe, P = 22 * F * xe, pe = 54 * xe, Re = -13 * F * xe, _e = 4 * F * F * xe + 36 * Je, Me = 3 * F * F * xe - 36 * Je, ye = [[Ne, P, pe, Re], [P, _e, -Re, Me], [pe, -Re, Ne, -P], [Re, Me, -P, _e]], Be = X * X, He = (1 + X) * (1 + X), ke = ye.map((Xe, V) => Xe.map(($, fe) => $ / He + (X > 0.01 ? Be * ve * F * (V === fe ? 0.01 : 0) : 0)));
  return { Ke: I, Me: ke };
}
function O0(m, y, S, p, _, D) {
  const N = /* @__PURE__ */ new Map();
  return m.map((U) => {
    const B = Math.round(U * 1e8) / 1e8;
    if (N.has(B)) return N.get(B);
    const E = D0(y, U, S, p, _, D);
    return N.set(B, E), E;
  });
}
function R0(m, y, S, p, _, D) {
  const N = m.length, B = (N + 1) * 2, E = Array(B).fill(null).map(() => Array(B).fill(0)), X = Array(B).fill(null).map(() => Array(B).fill(0)), L = O0(m, y, S, p, _, D);
  for (let F = 0; F < N; F++) {
    const { Ke: ue, Me: he } = L[F], ce = [2 * F, 2 * F + 1, 2 * (F + 1), 2 * (F + 1) + 1];
    for (let I = 0; I < 4; I++) {
      const ve = ce[I];
      for (let we = 0; we < 4; we++) {
        const xe = ce[we];
        E[ve][xe] += ue[I][we], X[ve][xe] += he[I][we];
      }
    }
  }
  return { K: E, M: X, numDOF: B };
}
function q0(m, y, S, p) {
  const _ = M0(m, y.L, y.h0, p), D = y.L / p;
  return R0(_, D, y.b, S.E, S.rho, S.nu);
}
var et = {};
const U0 = Object.prototype.toString;
function Xs(m) {
  const y = U0.call(m);
  return y.endsWith("Array]") && !y.includes("Big");
}
const B0 = Object.freeze(Object.defineProperty({ __proto__: null, isAnyArray: Xs }, Symbol.toStringTag, { value: "Module" })), L0 = Gm(B0);
function G0(m) {
  var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Xs(m)) throw new TypeError("input must be an array");
  if (m.length === 0) throw new TypeError("input must not be empty");
  var S = y.fromIndex, p = S === void 0 ? 0 : S, _ = y.toIndex, D = _ === void 0 ? m.length : _;
  if (p < 0 || p >= m.length || !Number.isInteger(p)) throw new Error("fromIndex must be a positive integer smaller than length");
  if (D <= p || D > m.length || !Number.isInteger(D)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
  for (var N = m[p], U = p + 1; U < D; U++) m[U] > N && (N = m[U]);
  return N;
}
function Y0(m) {
  var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Xs(m)) throw new TypeError("input must be an array");
  if (m.length === 0) throw new TypeError("input must not be empty");
  var S = y.fromIndex, p = S === void 0 ? 0 : S, _ = y.toIndex, D = _ === void 0 ? m.length : _;
  if (p < 0 || p >= m.length || !Number.isInteger(p)) throw new Error("fromIndex must be a positive integer smaller than length");
  if (D <= p || D > m.length || !Number.isInteger(D)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
  for (var N = m[p], U = p + 1; U < D; U++) m[U] < N && (N = m[U]);
  return N;
}
function X0(m) {
  var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (Xs(m)) {
    if (m.length === 0) throw new TypeError("input must not be empty");
  } else throw new TypeError("input must be an array");
  var S;
  if (y.output !== void 0) {
    if (!Xs(y.output)) throw new TypeError("output option must be an array if specified");
    S = y.output;
  } else S = new Array(m.length);
  var p = Y0(m), _ = G0(m);
  if (p === _) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
  var D = y.min, N = D === void 0 ? y.autoMinMax ? p : 0 : D, U = y.max, B = U === void 0 ? y.autoMinMax ? _ : 1 : U;
  if (N >= B) throw new RangeError("min option must be smaller than max option");
  for (var E = (B - N) / (_ - p), X = 0; X < m.length; X++) S[X] = (m[X] - p) * E + N;
  return S;
}
const Q0 = Object.freeze(Object.defineProperty({ __proto__: null, default: X0 }, Symbol.toStringTag, { value: "Module" })), V0 = Gm(Q0);
var Cm;
function H0() {
  var _H_instances, e_fn, _e2;
  if (Cm) return et;
  Cm = 1, Object.defineProperty(et, "__esModule", { value: true });
  var m = L0, y = V0;
  const S = " ".repeat(2), p = " ".repeat(4);
  function _() {
    return D(this);
  }
  function D(d, i = {}) {
    const { maxRows: u = 15, maxColumns: a = 10, maxNumSize: r = 8, padMinus: o = "auto" } = i;
    return `${d.constructor.name} {
${S}[
${p}${N(d, u, a, r, o)}
${S}]
${S}rows: ${d.rows}
${S}columns: ${d.columns}
}`;
  }
  function N(d, i, u, a, r) {
    const { rows: o, columns: b } = d, v = Math.min(o, i), x = Math.min(b, u), w = [];
    if (r === "auto") {
      r = false;
      e: for (let R = 0; R < v; R++) for (let T = 0; T < x; T++) if (d.get(R, T) < 0) {
        r = true;
        break e;
      }
    }
    for (let R = 0; R < v; R++) {
      let T = [];
      for (let k = 0; k < x; k++) T.push(U(d.get(R, k), a, r));
      w.push(`${T.join(" ")}`);
    }
    return x !== b && (w[w.length - 1] += ` ... ${b - u} more columns`), v !== o && w.push(`... ${o - i} more rows`), w.join(`
${p}`);
  }
  function U(d, i, u) {
    return (d >= 0 && u ? ` ${B(d, i - 1)}` : B(d, i)).padEnd(i);
  }
  function B(d, i) {
    let u = d.toString();
    if (u.length <= i) return u;
    let a = d.toFixed(i);
    if (a.length > i && (a = d.toFixed(Math.max(0, i - (a.length - i)))), a.length <= i && !a.startsWith("0.000") && !a.startsWith("-0.000")) return a;
    let r = d.toExponential(i);
    return r.length > i && (r = d.toExponential(Math.max(0, i - (r.length - i)))), r.slice(0);
  }
  function E(d, i) {
    d.prototype.add = function(a) {
      return typeof a == "number" ? this.addS(a) : this.addM(a);
    }, d.prototype.addS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) + a);
      return this;
    }, d.prototype.addM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) + a.get(r, o));
      return this;
    }, d.add = function(a, r) {
      return new i(a).add(r);
    }, d.prototype.sub = function(a) {
      return typeof a == "number" ? this.subS(a) : this.subM(a);
    }, d.prototype.subS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) - a);
      return this;
    }, d.prototype.subM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) - a.get(r, o));
      return this;
    }, d.sub = function(a, r) {
      return new i(a).sub(r);
    }, d.prototype.subtract = d.prototype.sub, d.prototype.subtractS = d.prototype.subS, d.prototype.subtractM = d.prototype.subM, d.subtract = d.sub, d.prototype.mul = function(a) {
      return typeof a == "number" ? this.mulS(a) : this.mulM(a);
    }, d.prototype.mulS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) * a);
      return this;
    }, d.prototype.mulM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) * a.get(r, o));
      return this;
    }, d.mul = function(a, r) {
      return new i(a).mul(r);
    }, d.prototype.multiply = d.prototype.mul, d.prototype.multiplyS = d.prototype.mulS, d.prototype.multiplyM = d.prototype.mulM, d.multiply = d.mul, d.prototype.div = function(a) {
      return typeof a == "number" ? this.divS(a) : this.divM(a);
    }, d.prototype.divS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) / a);
      return this;
    }, d.prototype.divM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) / a.get(r, o));
      return this;
    }, d.div = function(a, r) {
      return new i(a).div(r);
    }, d.prototype.divide = d.prototype.div, d.prototype.divideS = d.prototype.divS, d.prototype.divideM = d.prototype.divM, d.divide = d.div, d.prototype.mod = function(a) {
      return typeof a == "number" ? this.modS(a) : this.modM(a);
    }, d.prototype.modS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) % a);
      return this;
    }, d.prototype.modM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) % a.get(r, o));
      return this;
    }, d.mod = function(a, r) {
      return new i(a).mod(r);
    }, d.prototype.modulus = d.prototype.mod, d.prototype.modulusS = d.prototype.modS, d.prototype.modulusM = d.prototype.modM, d.modulus = d.mod, d.prototype.and = function(a) {
      return typeof a == "number" ? this.andS(a) : this.andM(a);
    }, d.prototype.andS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) & a);
      return this;
    }, d.prototype.andM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) & a.get(r, o));
      return this;
    }, d.and = function(a, r) {
      return new i(a).and(r);
    }, d.prototype.or = function(a) {
      return typeof a == "number" ? this.orS(a) : this.orM(a);
    }, d.prototype.orS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) | a);
      return this;
    }, d.prototype.orM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) | a.get(r, o));
      return this;
    }, d.or = function(a, r) {
      return new i(a).or(r);
    }, d.prototype.xor = function(a) {
      return typeof a == "number" ? this.xorS(a) : this.xorM(a);
    }, d.prototype.xorS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) ^ a);
      return this;
    }, d.prototype.xorM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) ^ a.get(r, o));
      return this;
    }, d.xor = function(a, r) {
      return new i(a).xor(r);
    }, d.prototype.leftShift = function(a) {
      return typeof a == "number" ? this.leftShiftS(a) : this.leftShiftM(a);
    }, d.prototype.leftShiftS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) << a);
      return this;
    }, d.prototype.leftShiftM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) << a.get(r, o));
      return this;
    }, d.leftShift = function(a, r) {
      return new i(a).leftShift(r);
    }, d.prototype.signPropagatingRightShift = function(a) {
      return typeof a == "number" ? this.signPropagatingRightShiftS(a) : this.signPropagatingRightShiftM(a);
    }, d.prototype.signPropagatingRightShiftS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) >> a);
      return this;
    }, d.prototype.signPropagatingRightShiftM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) >> a.get(r, o));
      return this;
    }, d.signPropagatingRightShift = function(a, r) {
      return new i(a).signPropagatingRightShift(r);
    }, d.prototype.rightShift = function(a) {
      return typeof a == "number" ? this.rightShiftS(a) : this.rightShiftM(a);
    }, d.prototype.rightShiftS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) >>> a);
      return this;
    }, d.prototype.rightShiftM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) >>> a.get(r, o));
      return this;
    }, d.rightShift = function(a, r) {
      return new i(a).rightShift(r);
    }, d.prototype.zeroFillRightShift = d.prototype.rightShift, d.prototype.zeroFillRightShiftS = d.prototype.rightShiftS, d.prototype.zeroFillRightShiftM = d.prototype.rightShiftM, d.zeroFillRightShift = d.rightShift, d.prototype.not = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, ~this.get(a, r));
      return this;
    }, d.not = function(a) {
      return new i(a).not();
    }, d.prototype.abs = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.abs(this.get(a, r)));
      return this;
    }, d.abs = function(a) {
      return new i(a).abs();
    }, d.prototype.acos = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.acos(this.get(a, r)));
      return this;
    }, d.acos = function(a) {
      return new i(a).acos();
    }, d.prototype.acosh = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.acosh(this.get(a, r)));
      return this;
    }, d.acosh = function(a) {
      return new i(a).acosh();
    }, d.prototype.asin = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.asin(this.get(a, r)));
      return this;
    }, d.asin = function(a) {
      return new i(a).asin();
    }, d.prototype.asinh = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.asinh(this.get(a, r)));
      return this;
    }, d.asinh = function(a) {
      return new i(a).asinh();
    }, d.prototype.atan = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.atan(this.get(a, r)));
      return this;
    }, d.atan = function(a) {
      return new i(a).atan();
    }, d.prototype.atanh = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.atanh(this.get(a, r)));
      return this;
    }, d.atanh = function(a) {
      return new i(a).atanh();
    }, d.prototype.cbrt = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.cbrt(this.get(a, r)));
      return this;
    }, d.cbrt = function(a) {
      return new i(a).cbrt();
    }, d.prototype.ceil = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.ceil(this.get(a, r)));
      return this;
    }, d.ceil = function(a) {
      return new i(a).ceil();
    }, d.prototype.clz32 = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.clz32(this.get(a, r)));
      return this;
    }, d.clz32 = function(a) {
      return new i(a).clz32();
    }, d.prototype.cos = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.cos(this.get(a, r)));
      return this;
    }, d.cos = function(a) {
      return new i(a).cos();
    }, d.prototype.cosh = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.cosh(this.get(a, r)));
      return this;
    }, d.cosh = function(a) {
      return new i(a).cosh();
    }, d.prototype.exp = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.exp(this.get(a, r)));
      return this;
    }, d.exp = function(a) {
      return new i(a).exp();
    }, d.prototype.expm1 = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.expm1(this.get(a, r)));
      return this;
    }, d.expm1 = function(a) {
      return new i(a).expm1();
    }, d.prototype.floor = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.floor(this.get(a, r)));
      return this;
    }, d.floor = function(a) {
      return new i(a).floor();
    }, d.prototype.fround = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.fround(this.get(a, r)));
      return this;
    }, d.fround = function(a) {
      return new i(a).fround();
    }, d.prototype.log = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.log(this.get(a, r)));
      return this;
    }, d.log = function(a) {
      return new i(a).log();
    }, d.prototype.log1p = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.log1p(this.get(a, r)));
      return this;
    }, d.log1p = function(a) {
      return new i(a).log1p();
    }, d.prototype.log10 = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.log10(this.get(a, r)));
      return this;
    }, d.log10 = function(a) {
      return new i(a).log10();
    }, d.prototype.log2 = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.log2(this.get(a, r)));
      return this;
    }, d.log2 = function(a) {
      return new i(a).log2();
    }, d.prototype.round = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.round(this.get(a, r)));
      return this;
    }, d.round = function(a) {
      return new i(a).round();
    }, d.prototype.sign = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.sign(this.get(a, r)));
      return this;
    }, d.sign = function(a) {
      return new i(a).sign();
    }, d.prototype.sin = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.sin(this.get(a, r)));
      return this;
    }, d.sin = function(a) {
      return new i(a).sin();
    }, d.prototype.sinh = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.sinh(this.get(a, r)));
      return this;
    }, d.sinh = function(a) {
      return new i(a).sinh();
    }, d.prototype.sqrt = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.sqrt(this.get(a, r)));
      return this;
    }, d.sqrt = function(a) {
      return new i(a).sqrt();
    }, d.prototype.tan = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.tan(this.get(a, r)));
      return this;
    }, d.tan = function(a) {
      return new i(a).tan();
    }, d.prototype.tanh = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.tanh(this.get(a, r)));
      return this;
    }, d.tanh = function(a) {
      return new i(a).tanh();
    }, d.prototype.trunc = function() {
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.set(a, r, Math.trunc(this.get(a, r)));
      return this;
    }, d.trunc = function(a) {
      return new i(a).trunc();
    }, d.pow = function(a, r) {
      return new i(a).pow(r);
    }, d.prototype.pow = function(a) {
      return typeof a == "number" ? this.powS(a) : this.powM(a);
    }, d.prototype.powS = function(a) {
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) ** a);
      return this;
    }, d.prototype.powM = function(a) {
      if (a = i.checkMatrix(a), this.rows !== a.rows || this.columns !== a.columns) throw new RangeError("Matrices dimensions must be equal");
      for (let r = 0; r < this.rows; r++) for (let o = 0; o < this.columns; o++) this.set(r, o, this.get(r, o) ** a.get(r, o));
      return this;
    };
  }
  function X(d, i, u) {
    let a = u ? d.rows : d.rows - 1;
    if (i < 0 || i > a) throw new RangeError("Row index out of range");
  }
  function L(d, i, u) {
    let a = u ? d.columns : d.columns - 1;
    if (i < 0 || i > a) throw new RangeError("Column index out of range");
  }
  function F(d, i) {
    if (i.to1DArray && (i = i.to1DArray()), i.length !== d.columns) throw new RangeError("vector size must be the same as the number of columns");
    return i;
  }
  function ue(d, i) {
    if (i.to1DArray && (i = i.to1DArray()), i.length !== d.rows) throw new RangeError("vector size must be the same as the number of rows");
    return i;
  }
  function he(d, i) {
    if (!m.isAnyArray(i)) throw new TypeError("row indices must be an array");
    for (let u = 0; u < i.length; u++) if (i[u] < 0 || i[u] >= d.rows) throw new RangeError("row indices are out of range");
  }
  function ce(d, i) {
    if (!m.isAnyArray(i)) throw new TypeError("column indices must be an array");
    for (let u = 0; u < i.length; u++) if (i[u] < 0 || i[u] >= d.columns) throw new RangeError("column indices are out of range");
  }
  function I(d, i, u, a, r) {
    if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
    if (we("startRow", i), we("endRow", u), we("startColumn", a), we("endColumn", r), i > u || a > r || i < 0 || i >= d.rows || u < 0 || u >= d.rows || a < 0 || a >= d.columns || r < 0 || r >= d.columns) throw new RangeError("Submatrix indices are out of range");
  }
  function ve(d, i = 0) {
    let u = [];
    for (let a = 0; a < d; a++) u.push(i);
    return u;
  }
  function we(d, i) {
    if (typeof i != "number") throw new TypeError(`${d} must be a number`);
  }
  function xe(d) {
    if (d.isEmpty()) throw new Error("Empty matrix has no elements to index");
  }
  function Je(d) {
    let i = ve(d.rows);
    for (let u = 0; u < d.rows; ++u) for (let a = 0; a < d.columns; ++a) i[u] += d.get(u, a);
    return i;
  }
  function Ne(d) {
    let i = ve(d.columns);
    for (let u = 0; u < d.rows; ++u) for (let a = 0; a < d.columns; ++a) i[a] += d.get(u, a);
    return i;
  }
  function P(d) {
    let i = 0;
    for (let u = 0; u < d.rows; u++) for (let a = 0; a < d.columns; a++) i += d.get(u, a);
    return i;
  }
  function pe(d) {
    let i = ve(d.rows, 1);
    for (let u = 0; u < d.rows; ++u) for (let a = 0; a < d.columns; ++a) i[u] *= d.get(u, a);
    return i;
  }
  function Re(d) {
    let i = ve(d.columns, 1);
    for (let u = 0; u < d.rows; ++u) for (let a = 0; a < d.columns; ++a) i[a] *= d.get(u, a);
    return i;
  }
  function _e(d) {
    let i = 1;
    for (let u = 0; u < d.rows; u++) for (let a = 0; a < d.columns; a++) i *= d.get(u, a);
    return i;
  }
  function Me(d, i, u) {
    const a = d.rows, r = d.columns, o = [];
    for (let b = 0; b < a; b++) {
      let v = 0, x = 0, w = 0;
      for (let R = 0; R < r; R++) w = d.get(b, R) - u[b], v += w, x += w * w;
      i ? o.push((x - v * v / r) / (r - 1)) : o.push((x - v * v / r) / r);
    }
    return o;
  }
  function ye(d, i, u) {
    const a = d.rows, r = d.columns, o = [];
    for (let b = 0; b < r; b++) {
      let v = 0, x = 0, w = 0;
      for (let R = 0; R < a; R++) w = d.get(R, b) - u[b], v += w, x += w * w;
      i ? o.push((x - v * v / a) / (a - 1)) : o.push((x - v * v / a) / a);
    }
    return o;
  }
  function Be(d, i, u) {
    const a = d.rows, r = d.columns, o = a * r;
    let b = 0, v = 0, x = 0;
    for (let w = 0; w < a; w++) for (let R = 0; R < r; R++) x = d.get(w, R) - u, b += x, v += x * x;
    return i ? (v - b * b / o) / (o - 1) : (v - b * b / o) / o;
  }
  function He(d, i) {
    for (let u = 0; u < d.rows; u++) for (let a = 0; a < d.columns; a++) d.set(u, a, d.get(u, a) - i[u]);
  }
  function ke(d, i) {
    for (let u = 0; u < d.rows; u++) for (let a = 0; a < d.columns; a++) d.set(u, a, d.get(u, a) - i[a]);
  }
  function Xe(d, i) {
    for (let u = 0; u < d.rows; u++) for (let a = 0; a < d.columns; a++) d.set(u, a, d.get(u, a) - i);
  }
  function V(d) {
    const i = [];
    for (let u = 0; u < d.rows; u++) {
      let a = 0;
      for (let r = 0; r < d.columns; r++) a += d.get(u, r) ** 2 / (d.columns - 1);
      i.push(Math.sqrt(a));
    }
    return i;
  }
  function $(d, i) {
    for (let u = 0; u < d.rows; u++) for (let a = 0; a < d.columns; a++) d.set(u, a, d.get(u, a) / i[u]);
  }
  function fe(d) {
    const i = [];
    for (let u = 0; u < d.columns; u++) {
      let a = 0;
      for (let r = 0; r < d.rows; r++) a += d.get(r, u) ** 2 / (d.rows - 1);
      i.push(Math.sqrt(a));
    }
    return i;
  }
  function Te(d, i) {
    for (let u = 0; u < d.rows; u++) for (let a = 0; a < d.columns; a++) d.set(u, a, d.get(u, a) / i[a]);
  }
  function Ae(d) {
    const i = d.size - 1;
    let u = 0;
    for (let a = 0; a < d.columns; a++) for (let r = 0; r < d.rows; r++) u += d.get(r, a) ** 2 / i;
    return Math.sqrt(u);
  }
  function j(d, i) {
    for (let u = 0; u < d.rows; u++) for (let a = 0; a < d.columns; a++) d.set(u, a, d.get(u, a) / i);
  }
  class O {
    static from1DArray(i, u, a) {
      if (i * u !== a.length) throw new RangeError("data length does not match given dimensions");
      let o = new H(i, u);
      for (let b = 0; b < i; b++) for (let v = 0; v < u; v++) o.set(b, v, a[b * u + v]);
      return o;
    }
    static rowVector(i) {
      let u = new H(1, i.length);
      for (let a = 0; a < i.length; a++) u.set(0, a, i[a]);
      return u;
    }
    static columnVector(i) {
      let u = new H(i.length, 1);
      for (let a = 0; a < i.length; a++) u.set(a, 0, i[a]);
      return u;
    }
    static zeros(i, u) {
      return new H(i, u);
    }
    static ones(i, u) {
      return new H(i, u).fill(1);
    }
    static rand(i, u, a = {}) {
      if (typeof a != "object") throw new TypeError("options must be an object");
      const { random: r = Math.random } = a;
      let o = new H(i, u);
      for (let b = 0; b < i; b++) for (let v = 0; v < u; v++) o.set(b, v, r());
      return o;
    }
    static randInt(i, u, a = {}) {
      if (typeof a != "object") throw new TypeError("options must be an object");
      const { min: r = 0, max: o = 1e3, random: b = Math.random } = a;
      if (!Number.isInteger(r)) throw new TypeError("min must be an integer");
      if (!Number.isInteger(o)) throw new TypeError("max must be an integer");
      if (r >= o) throw new RangeError("min must be smaller than max");
      let v = o - r, x = new H(i, u);
      for (let w = 0; w < i; w++) for (let R = 0; R < u; R++) {
        let T = r + Math.round(b() * v);
        x.set(w, R, T);
      }
      return x;
    }
    static eye(i, u, a) {
      u === void 0 && (u = i), a === void 0 && (a = 1);
      let r = Math.min(i, u), o = this.zeros(i, u);
      for (let b = 0; b < r; b++) o.set(b, b, a);
      return o;
    }
    static diag(i, u, a) {
      let r = i.length;
      u === void 0 && (u = r), a === void 0 && (a = u);
      let o = Math.min(r, u, a), b = this.zeros(u, a);
      for (let v = 0; v < o; v++) b.set(v, v, i[v]);
      return b;
    }
    static min(i, u) {
      i = this.checkMatrix(i), u = this.checkMatrix(u);
      let a = i.rows, r = i.columns, o = new H(a, r);
      for (let b = 0; b < a; b++) for (let v = 0; v < r; v++) o.set(b, v, Math.min(i.get(b, v), u.get(b, v)));
      return o;
    }
    static max(i, u) {
      i = this.checkMatrix(i), u = this.checkMatrix(u);
      let a = i.rows, r = i.columns, o = new this(a, r);
      for (let b = 0; b < a; b++) for (let v = 0; v < r; v++) o.set(b, v, Math.max(i.get(b, v), u.get(b, v)));
      return o;
    }
    static checkMatrix(i) {
      return O.isMatrix(i) ? i : new H(i);
    }
    static isMatrix(i) {
      return i != null && i.klass === "Matrix";
    }
    get size() {
      return this.rows * this.columns;
    }
    apply(i) {
      if (typeof i != "function") throw new TypeError("callback must be a function");
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) i.call(this, u, a);
      return this;
    }
    to1DArray() {
      let i = [];
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) i.push(this.get(u, a));
      return i;
    }
    to2DArray() {
      let i = [];
      for (let u = 0; u < this.rows; u++) {
        i.push([]);
        for (let a = 0; a < this.columns; a++) i[u].push(this.get(u, a));
      }
      return i;
    }
    toJSON() {
      return this.to2DArray();
    }
    isRowVector() {
      return this.rows === 1;
    }
    isColumnVector() {
      return this.columns === 1;
    }
    isVector() {
      return this.rows === 1 || this.columns === 1;
    }
    isSquare() {
      return this.rows === this.columns;
    }
    isEmpty() {
      return this.rows === 0 || this.columns === 0;
    }
    isSymmetric() {
      if (this.isSquare()) {
        for (let i = 0; i < this.rows; i++) for (let u = 0; u <= i; u++) if (this.get(i, u) !== this.get(u, i)) return false;
        return true;
      }
      return false;
    }
    isDistance() {
      if (!this.isSymmetric()) return false;
      for (let i = 0; i < this.rows; i++) if (this.get(i, i) !== 0) return false;
      return true;
    }
    isEchelonForm() {
      let i = 0, u = 0, a = -1, r = true, o = false;
      for (; i < this.rows && r; ) {
        for (u = 0, o = false; u < this.columns && o === false; ) this.get(i, u) === 0 ? u++ : this.get(i, u) === 1 && u > a ? (o = true, a = u) : (r = false, o = true);
        i++;
      }
      return r;
    }
    isReducedEchelonForm() {
      let i = 0, u = 0, a = -1, r = true, o = false;
      for (; i < this.rows && r; ) {
        for (u = 0, o = false; u < this.columns && o === false; ) this.get(i, u) === 0 ? u++ : this.get(i, u) === 1 && u > a ? (o = true, a = u) : (r = false, o = true);
        for (let b = u + 1; b < this.rows; b++) this.get(i, b) !== 0 && (r = false);
        i++;
      }
      return r;
    }
    echelonForm() {
      let i = this.clone(), u = 0, a = 0;
      for (; u < i.rows && a < i.columns; ) {
        let r = u;
        for (let o = u; o < i.rows; o++) i.get(o, a) > i.get(r, a) && (r = o);
        if (i.get(r, a) === 0) a++;
        else {
          i.swapRows(u, r);
          let o = i.get(u, a);
          for (let b = a; b < i.columns; b++) i.set(u, b, i.get(u, b) / o);
          for (let b = u + 1; b < i.rows; b++) {
            let v = i.get(b, a) / i.get(u, a);
            i.set(b, a, 0);
            for (let x = a + 1; x < i.columns; x++) i.set(b, x, i.get(b, x) - i.get(u, x) * v);
          }
          u++, a++;
        }
      }
      return i;
    }
    reducedEchelonForm() {
      let i = this.echelonForm(), u = i.columns, a = i.rows, r = a - 1;
      for (; r >= 0; ) if (i.maxRow(r) === 0) r--;
      else {
        let o = 0, b = false;
        for (; o < a && b === false; ) i.get(r, o) === 1 ? b = true : o++;
        for (let v = 0; v < r; v++) {
          let x = i.get(v, o);
          for (let w = o; w < u; w++) {
            let R = i.get(v, w) - x * i.get(r, w);
            i.set(v, w, R);
          }
        }
        r--;
      }
      return i;
    }
    set() {
      throw new Error("set method is unimplemented");
    }
    get() {
      throw new Error("get method is unimplemented");
    }
    repeat(i = {}) {
      if (typeof i != "object") throw new TypeError("options must be an object");
      const { rows: u = 1, columns: a = 1 } = i;
      if (!Number.isInteger(u) || u <= 0) throw new TypeError("rows must be a positive integer");
      if (!Number.isInteger(a) || a <= 0) throw new TypeError("columns must be a positive integer");
      let r = new H(this.rows * u, this.columns * a);
      for (let o = 0; o < u; o++) for (let b = 0; b < a; b++) r.setSubMatrix(this, this.rows * o, this.columns * b);
      return r;
    }
    fill(i) {
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, i);
      return this;
    }
    neg() {
      return this.mulS(-1);
    }
    getRow(i) {
      X(this, i);
      let u = [];
      for (let a = 0; a < this.columns; a++) u.push(this.get(i, a));
      return u;
    }
    getRowVector(i) {
      return H.rowVector(this.getRow(i));
    }
    setRow(i, u) {
      X(this, i), u = F(this, u);
      for (let a = 0; a < this.columns; a++) this.set(i, a, u[a]);
      return this;
    }
    swapRows(i, u) {
      X(this, i), X(this, u);
      for (let a = 0; a < this.columns; a++) {
        let r = this.get(i, a);
        this.set(i, a, this.get(u, a)), this.set(u, a, r);
      }
      return this;
    }
    getColumn(i) {
      L(this, i);
      let u = [];
      for (let a = 0; a < this.rows; a++) u.push(this.get(a, i));
      return u;
    }
    getColumnVector(i) {
      return H.columnVector(this.getColumn(i));
    }
    setColumn(i, u) {
      L(this, i), u = ue(this, u);
      for (let a = 0; a < this.rows; a++) this.set(a, i, u[a]);
      return this;
    }
    swapColumns(i, u) {
      L(this, i), L(this, u);
      for (let a = 0; a < this.rows; a++) {
        let r = this.get(a, i);
        this.set(a, i, this.get(a, u)), this.set(a, u, r);
      }
      return this;
    }
    addRowVector(i) {
      i = F(this, i);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, this.get(u, a) + i[a]);
      return this;
    }
    subRowVector(i) {
      i = F(this, i);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, this.get(u, a) - i[a]);
      return this;
    }
    mulRowVector(i) {
      i = F(this, i);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, this.get(u, a) * i[a]);
      return this;
    }
    divRowVector(i) {
      i = F(this, i);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, this.get(u, a) / i[a]);
      return this;
    }
    addColumnVector(i) {
      i = ue(this, i);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, this.get(u, a) + i[u]);
      return this;
    }
    subColumnVector(i) {
      i = ue(this, i);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, this.get(u, a) - i[u]);
      return this;
    }
    mulColumnVector(i) {
      i = ue(this, i);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, this.get(u, a) * i[u]);
      return this;
    }
    divColumnVector(i) {
      i = ue(this, i);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) this.set(u, a, this.get(u, a) / i[u]);
      return this;
    }
    mulRow(i, u) {
      X(this, i);
      for (let a = 0; a < this.columns; a++) this.set(i, a, this.get(i, a) * u);
      return this;
    }
    mulColumn(i, u) {
      L(this, i);
      for (let a = 0; a < this.rows; a++) this.set(a, i, this.get(a, i) * u);
      return this;
    }
    max(i) {
      if (this.isEmpty()) return NaN;
      switch (i) {
        case "row": {
          const u = new Array(this.rows).fill(Number.NEGATIVE_INFINITY);
          for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.get(a, r) > u[a] && (u[a] = this.get(a, r));
          return u;
        }
        case "column": {
          const u = new Array(this.columns).fill(Number.NEGATIVE_INFINITY);
          for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.get(a, r) > u[r] && (u[r] = this.get(a, r));
          return u;
        }
        case void 0: {
          let u = this.get(0, 0);
          for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.get(a, r) > u && (u = this.get(a, r));
          return u;
        }
        default:
          throw new Error(`invalid option: ${i}`);
      }
    }
    maxIndex() {
      xe(this);
      let i = this.get(0, 0), u = [0, 0];
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.get(a, r) > i && (i = this.get(a, r), u[0] = a, u[1] = r);
      return u;
    }
    min(i) {
      if (this.isEmpty()) return NaN;
      switch (i) {
        case "row": {
          const u = new Array(this.rows).fill(Number.POSITIVE_INFINITY);
          for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.get(a, r) < u[a] && (u[a] = this.get(a, r));
          return u;
        }
        case "column": {
          const u = new Array(this.columns).fill(Number.POSITIVE_INFINITY);
          for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.get(a, r) < u[r] && (u[r] = this.get(a, r));
          return u;
        }
        case void 0: {
          let u = this.get(0, 0);
          for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.get(a, r) < u && (u = this.get(a, r));
          return u;
        }
        default:
          throw new Error(`invalid option: ${i}`);
      }
    }
    minIndex() {
      xe(this);
      let i = this.get(0, 0), u = [0, 0];
      for (let a = 0; a < this.rows; a++) for (let r = 0; r < this.columns; r++) this.get(a, r) < i && (i = this.get(a, r), u[0] = a, u[1] = r);
      return u;
    }
    maxRow(i) {
      if (X(this, i), this.isEmpty()) return NaN;
      let u = this.get(i, 0);
      for (let a = 1; a < this.columns; a++) this.get(i, a) > u && (u = this.get(i, a));
      return u;
    }
    maxRowIndex(i) {
      X(this, i), xe(this);
      let u = this.get(i, 0), a = [i, 0];
      for (let r = 1; r < this.columns; r++) this.get(i, r) > u && (u = this.get(i, r), a[1] = r);
      return a;
    }
    minRow(i) {
      if (X(this, i), this.isEmpty()) return NaN;
      let u = this.get(i, 0);
      for (let a = 1; a < this.columns; a++) this.get(i, a) < u && (u = this.get(i, a));
      return u;
    }
    minRowIndex(i) {
      X(this, i), xe(this);
      let u = this.get(i, 0), a = [i, 0];
      for (let r = 1; r < this.columns; r++) this.get(i, r) < u && (u = this.get(i, r), a[1] = r);
      return a;
    }
    maxColumn(i) {
      if (L(this, i), this.isEmpty()) return NaN;
      let u = this.get(0, i);
      for (let a = 1; a < this.rows; a++) this.get(a, i) > u && (u = this.get(a, i));
      return u;
    }
    maxColumnIndex(i) {
      L(this, i), xe(this);
      let u = this.get(0, i), a = [0, i];
      for (let r = 1; r < this.rows; r++) this.get(r, i) > u && (u = this.get(r, i), a[0] = r);
      return a;
    }
    minColumn(i) {
      if (L(this, i), this.isEmpty()) return NaN;
      let u = this.get(0, i);
      for (let a = 1; a < this.rows; a++) this.get(a, i) < u && (u = this.get(a, i));
      return u;
    }
    minColumnIndex(i) {
      L(this, i), xe(this);
      let u = this.get(0, i), a = [0, i];
      for (let r = 1; r < this.rows; r++) this.get(r, i) < u && (u = this.get(r, i), a[0] = r);
      return a;
    }
    diag() {
      let i = Math.min(this.rows, this.columns), u = [];
      for (let a = 0; a < i; a++) u.push(this.get(a, a));
      return u;
    }
    norm(i = "frobenius") {
      switch (i) {
        case "max":
          return this.max();
        case "frobenius":
          return Math.sqrt(this.dot(this));
        default:
          throw new RangeError(`unknown norm type: ${i}`);
      }
    }
    cumulativeSum() {
      let i = 0;
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) i += this.get(u, a), this.set(u, a, i);
      return this;
    }
    dot(i) {
      O.isMatrix(i) && (i = i.to1DArray());
      let u = this.to1DArray();
      if (u.length !== i.length) throw new RangeError("vectors do not have the same size");
      let a = 0;
      for (let r = 0; r < u.length; r++) a += u[r] * i[r];
      return a;
    }
    mmul(i) {
      i = H.checkMatrix(i);
      let u = this.rows, a = this.columns, r = i.columns, o = new H(u, r), b = new Float64Array(a);
      for (let v = 0; v < r; v++) {
        for (let x = 0; x < a; x++) b[x] = i.get(x, v);
        for (let x = 0; x < u; x++) {
          let w = 0;
          for (let R = 0; R < a; R++) w += this.get(x, R) * b[R];
          o.set(x, v, w);
        }
      }
      return o;
    }
    mpow(i) {
      if (!this.isSquare()) throw new RangeError("Matrix must be square");
      if (!Number.isInteger(i) || i < 0) throw new RangeError("Exponent must be a non-negative integer");
      let u = H.eye(this.rows), a = this;
      for (let r = i; r >= 1; r /= 2) (r & 1) !== 0 && (u = u.mmul(a)), a = a.mmul(a);
      return u;
    }
    strassen2x2(i) {
      i = H.checkMatrix(i);
      let u = new H(2, 2);
      const a = this.get(0, 0), r = i.get(0, 0), o = this.get(0, 1), b = i.get(0, 1), v = this.get(1, 0), x = i.get(1, 0), w = this.get(1, 1), R = i.get(1, 1), T = (a + w) * (r + R), k = (v + w) * r, ge = a * (b - R), Z = w * (x - r), le = (a + o) * R, Se = (v - a) * (r + b), M = (o - w) * (x + R), re = T + Z - le + M, Ee = ge + le, Qe = k + Z, Ke = T - k + ge + Se;
      return u.set(0, 0, re), u.set(0, 1, Ee), u.set(1, 0, Qe), u.set(1, 1, Ke), u;
    }
    strassen3x3(i) {
      i = H.checkMatrix(i);
      let u = new H(3, 3);
      const a = this.get(0, 0), r = this.get(0, 1), o = this.get(0, 2), b = this.get(1, 0), v = this.get(1, 1), x = this.get(1, 2), w = this.get(2, 0), R = this.get(2, 1), T = this.get(2, 2), k = i.get(0, 0), ge = i.get(0, 1), Z = i.get(0, 2), le = i.get(1, 0), Se = i.get(1, 1), M = i.get(1, 2), re = i.get(2, 0), Ee = i.get(2, 1), Qe = i.get(2, 2), Ke = (a + r + o - b - v - R - T) * Se, xt = (a - b) * (-ge + Se), Oe = v * (-k + ge + le - Se - M - re + Qe), Ue = (-a + b + v) * (k - ge + Se), ft = (b + v) * (-k + ge), A = a * k, ie = (-a + w + R) * (k - Z + M), je = (-a + w) * (Z - M), oe = (w + R) * (-k + Z), $e = (a + r + o - v - x - w - R) * M, it = R * (-k + Z + le - Se - M - re + Ee), pt = (-o + R + T) * (Se + re - Ee), ut = (o - T) * (Se - Ee), _t = o * re, gl = (R + T) * (-re + Ee), zt = (-o + v + x) * (M + re - Qe), yl = (o - x) * (M - Qe), ql = (v + x) * (-re + Qe), Ie = r * le, At = x * Ee, Ct = b * Z, jt = w * ge, Dt = T * Qe, ru = A + _t + Ie, Qa = Ke + Ue + ft + A + pt + _t + gl, Vs = A + ie + oe + $e + _t + zt + ql, la = xt + Oe + Ue + A + _t + zt + yl, cu = xt + Ue + ft + A + At, rl = _t + zt + yl + ql + Ct, Va = A + ie + je + it + pt + ut + _t, Hs = pt + ut + _t + gl + jt, Ha = A + ie + je + oe + Dt;
      return u.set(0, 0, ru), u.set(0, 1, Qa), u.set(0, 2, Vs), u.set(1, 0, la), u.set(1, 1, cu), u.set(1, 2, rl), u.set(2, 0, Va), u.set(2, 1, Hs), u.set(2, 2, Ha), u;
    }
    mmulStrassen(i) {
      i = H.checkMatrix(i);
      let u = this.clone(), a = u.rows, r = u.columns, o = i.rows, b = i.columns;
      r !== o && console.warn(`Multiplying ${a} x ${r} and ${o} x ${b} matrix: dimensions do not match.`);
      function v(T, k, ge) {
        let Z = T.rows, le = T.columns;
        if (Z === k && le === ge) return T;
        {
          let Se = O.zeros(k, ge);
          return Se = Se.setSubMatrix(T, 0, 0), Se;
        }
      }
      let x = Math.max(a, o), w = Math.max(r, b);
      u = v(u, x, w), i = v(i, x, w);
      function R(T, k, ge, Z) {
        if (ge <= 512 || Z <= 512) return T.mmul(k);
        ge % 2 === 1 && Z % 2 === 1 ? (T = v(T, ge + 1, Z + 1), k = v(k, ge + 1, Z + 1)) : ge % 2 === 1 ? (T = v(T, ge + 1, Z), k = v(k, ge + 1, Z)) : Z % 2 === 1 && (T = v(T, ge, Z + 1), k = v(k, ge, Z + 1));
        let le = parseInt(T.rows / 2, 10), Se = parseInt(T.columns / 2, 10), M = T.subMatrix(0, le - 1, 0, Se - 1), re = k.subMatrix(0, le - 1, 0, Se - 1), Ee = T.subMatrix(0, le - 1, Se, T.columns - 1), Qe = k.subMatrix(0, le - 1, Se, k.columns - 1), Ke = T.subMatrix(le, T.rows - 1, 0, Se - 1), xt = k.subMatrix(le, k.rows - 1, 0, Se - 1), Oe = T.subMatrix(le, T.rows - 1, Se, T.columns - 1), Ue = k.subMatrix(le, k.rows - 1, Se, k.columns - 1), ft = R(O.add(M, Oe), O.add(re, Ue), le, Se), A = R(O.add(Ke, Oe), re, le, Se), ie = R(M, O.sub(Qe, Ue), le, Se), je = R(Oe, O.sub(xt, re), le, Se), oe = R(O.add(M, Ee), Ue, le, Se), $e = R(O.sub(Ke, M), O.add(re, Qe), le, Se), it = R(O.sub(Ee, Oe), O.add(xt, Ue), le, Se), pt = O.add(ft, je);
        pt.sub(oe), pt.add(it);
        let ut = O.add(ie, oe), _t = O.add(A, je), gl = O.sub(ft, A);
        gl.add(ie), gl.add($e);
        let zt = O.zeros(2 * pt.rows, 2 * pt.columns);
        return zt = zt.setSubMatrix(pt, 0, 0), zt = zt.setSubMatrix(ut, pt.rows, 0), zt = zt.setSubMatrix(_t, 0, pt.columns), zt = zt.setSubMatrix(gl, pt.rows, pt.columns), zt.subMatrix(0, ge - 1, 0, Z - 1);
      }
      return R(u, i, x, w);
    }
    scaleRows(i = {}) {
      if (typeof i != "object") throw new TypeError("options must be an object");
      const { min: u = 0, max: a = 1 } = i;
      if (!Number.isFinite(u)) throw new TypeError("min must be a number");
      if (!Number.isFinite(a)) throw new TypeError("max must be a number");
      if (u >= a) throw new RangeError("min must be smaller than max");
      let r = new H(this.rows, this.columns);
      for (let o = 0; o < this.rows; o++) {
        const b = this.getRow(o);
        b.length > 0 && y(b, { min: u, max: a, output: b }), r.setRow(o, b);
      }
      return r;
    }
    scaleColumns(i = {}) {
      if (typeof i != "object") throw new TypeError("options must be an object");
      const { min: u = 0, max: a = 1 } = i;
      if (!Number.isFinite(u)) throw new TypeError("min must be a number");
      if (!Number.isFinite(a)) throw new TypeError("max must be a number");
      if (u >= a) throw new RangeError("min must be smaller than max");
      let r = new H(this.rows, this.columns);
      for (let o = 0; o < this.columns; o++) {
        const b = this.getColumn(o);
        b.length && y(b, { min: u, max: a, output: b }), r.setColumn(o, b);
      }
      return r;
    }
    flipRows() {
      const i = Math.ceil(this.columns / 2);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < i; a++) {
        let r = this.get(u, a), o = this.get(u, this.columns - 1 - a);
        this.set(u, a, o), this.set(u, this.columns - 1 - a, r);
      }
      return this;
    }
    flipColumns() {
      const i = Math.ceil(this.rows / 2);
      for (let u = 0; u < this.columns; u++) for (let a = 0; a < i; a++) {
        let r = this.get(a, u), o = this.get(this.rows - 1 - a, u);
        this.set(a, u, o), this.set(this.rows - 1 - a, u, r);
      }
      return this;
    }
    kroneckerProduct(i) {
      i = H.checkMatrix(i);
      let u = this.rows, a = this.columns, r = i.rows, o = i.columns, b = new H(u * r, a * o);
      for (let v = 0; v < u; v++) for (let x = 0; x < a; x++) for (let w = 0; w < r; w++) for (let R = 0; R < o; R++) b.set(r * v + w, o * x + R, this.get(v, x) * i.get(w, R));
      return b;
    }
    kroneckerSum(i) {
      if (i = H.checkMatrix(i), !this.isSquare() || !i.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
      let u = this.rows, a = i.rows, r = this.kroneckerProduct(H.eye(a, a)), o = H.eye(u, u).kroneckerProduct(i);
      return r.add(o);
    }
    transpose() {
      let i = new H(this.columns, this.rows);
      for (let u = 0; u < this.rows; u++) for (let a = 0; a < this.columns; a++) i.set(a, u, this.get(u, a));
      return i;
    }
    sortRows(i = se) {
      for (let u = 0; u < this.rows; u++) this.setRow(u, this.getRow(u).sort(i));
      return this;
    }
    sortColumns(i = se) {
      for (let u = 0; u < this.columns; u++) this.setColumn(u, this.getColumn(u).sort(i));
      return this;
    }
    subMatrix(i, u, a, r) {
      I(this, i, u, a, r);
      let o = new H(u - i + 1, r - a + 1);
      for (let b = i; b <= u; b++) for (let v = a; v <= r; v++) o.set(b - i, v - a, this.get(b, v));
      return o;
    }
    subMatrixRow(i, u, a) {
      if (u === void 0 && (u = 0), a === void 0 && (a = this.columns - 1), u > a || u < 0 || u >= this.columns || a < 0 || a >= this.columns) throw new RangeError("Argument out of range");
      let r = new H(i.length, a - u + 1);
      for (let o = 0; o < i.length; o++) for (let b = u; b <= a; b++) {
        if (i[o] < 0 || i[o] >= this.rows) throw new RangeError(`Row index out of range: ${i[o]}`);
        r.set(o, b - u, this.get(i[o], b));
      }
      return r;
    }
    subMatrixColumn(i, u, a) {
      if (u === void 0 && (u = 0), a === void 0 && (a = this.rows - 1), u > a || u < 0 || u >= this.rows || a < 0 || a >= this.rows) throw new RangeError("Argument out of range");
      let r = new H(a - u + 1, i.length);
      for (let o = 0; o < i.length; o++) for (let b = u; b <= a; b++) {
        if (i[o] < 0 || i[o] >= this.columns) throw new RangeError(`Column index out of range: ${i[o]}`);
        r.set(b - u, o, this.get(b, i[o]));
      }
      return r;
    }
    setSubMatrix(i, u, a) {
      if (i = H.checkMatrix(i), i.isEmpty()) return this;
      let r = u + i.rows - 1, o = a + i.columns - 1;
      I(this, u, r, a, o);
      for (let b = 0; b < i.rows; b++) for (let v = 0; v < i.columns; v++) this.set(u + b, a + v, i.get(b, v));
      return this;
    }
    selection(i, u) {
      he(this, i), ce(this, u);
      let a = new H(i.length, u.length);
      for (let r = 0; r < i.length; r++) {
        let o = i[r];
        for (let b = 0; b < u.length; b++) {
          let v = u[b];
          a.set(r, b, this.get(o, v));
        }
      }
      return a;
    }
    trace() {
      let i = Math.min(this.rows, this.columns), u = 0;
      for (let a = 0; a < i; a++) u += this.get(a, a);
      return u;
    }
    clone() {
      return this.constructor.copy(this, new H(this.rows, this.columns));
    }
    static copy(i, u) {
      for (const [a, r, o] of i.entries()) u.set(a, r, o);
      return u;
    }
    sum(i) {
      switch (i) {
        case "row":
          return Je(this);
        case "column":
          return Ne(this);
        case void 0:
          return P(this);
        default:
          throw new Error(`invalid option: ${i}`);
      }
    }
    product(i) {
      switch (i) {
        case "row":
          return pe(this);
        case "column":
          return Re(this);
        case void 0:
          return _e(this);
        default:
          throw new Error(`invalid option: ${i}`);
      }
    }
    mean(i) {
      const u = this.sum(i);
      switch (i) {
        case "row": {
          for (let a = 0; a < this.rows; a++) u[a] /= this.columns;
          return u;
        }
        case "column": {
          for (let a = 0; a < this.columns; a++) u[a] /= this.rows;
          return u;
        }
        case void 0:
          return u / this.size;
        default:
          throw new Error(`invalid option: ${i}`);
      }
    }
    variance(i, u = {}) {
      if (typeof i == "object" && (u = i, i = void 0), typeof u != "object") throw new TypeError("options must be an object");
      const { unbiased: a = true, mean: r = this.mean(i) } = u;
      if (typeof a != "boolean") throw new TypeError("unbiased must be a boolean");
      switch (i) {
        case "row": {
          if (!m.isAnyArray(r)) throw new TypeError("mean must be an array");
          return Me(this, a, r);
        }
        case "column": {
          if (!m.isAnyArray(r)) throw new TypeError("mean must be an array");
          return ye(this, a, r);
        }
        case void 0: {
          if (typeof r != "number") throw new TypeError("mean must be a number");
          return Be(this, a, r);
        }
        default:
          throw new Error(`invalid option: ${i}`);
      }
    }
    standardDeviation(i, u) {
      typeof i == "object" && (u = i, i = void 0);
      const a = this.variance(i, u);
      if (i === void 0) return Math.sqrt(a);
      for (let r = 0; r < a.length; r++) a[r] = Math.sqrt(a[r]);
      return a;
    }
    center(i, u = {}) {
      if (typeof i == "object" && (u = i, i = void 0), typeof u != "object") throw new TypeError("options must be an object");
      const { center: a = this.mean(i) } = u;
      switch (i) {
        case "row": {
          if (!m.isAnyArray(a)) throw new TypeError("center must be an array");
          return He(this, a), this;
        }
        case "column": {
          if (!m.isAnyArray(a)) throw new TypeError("center must be an array");
          return ke(this, a), this;
        }
        case void 0: {
          if (typeof a != "number") throw new TypeError("center must be a number");
          return Xe(this, a), this;
        }
        default:
          throw new Error(`invalid option: ${i}`);
      }
    }
    scale(i, u = {}) {
      if (typeof i == "object" && (u = i, i = void 0), typeof u != "object") throw new TypeError("options must be an object");
      let a = u.scale;
      switch (i) {
        case "row": {
          if (a === void 0) a = V(this);
          else if (!m.isAnyArray(a)) throw new TypeError("scale must be an array");
          return $(this, a), this;
        }
        case "column": {
          if (a === void 0) a = fe(this);
          else if (!m.isAnyArray(a)) throw new TypeError("scale must be an array");
          return Te(this, a), this;
        }
        case void 0: {
          if (a === void 0) a = Ae(this);
          else if (typeof a != "number") throw new TypeError("scale must be a number");
          return j(this, a), this;
        }
        default:
          throw new Error(`invalid option: ${i}`);
      }
    }
    toString(i) {
      return D(this, i);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    *entries() {
      for (let i = 0; i < this.rows; i++) for (let u = 0; u < this.columns; u++) yield [i, u, this.get(i, u)];
    }
    *values() {
      for (let i = 0; i < this.rows; i++) for (let u = 0; u < this.columns; u++) yield this.get(i, u);
    }
  }
  O.prototype.klass = "Matrix", typeof Symbol < "u" && (O.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = _);
  function se(d, i) {
    return d - i;
  }
  function me(d) {
    return d.every((i) => typeof i == "number");
  }
  O.random = O.rand, O.randomInt = O.randInt, O.diagonal = O.diag, O.prototype.diagonal = O.prototype.diag, O.identity = O.eye, O.prototype.negate = O.prototype.neg, O.prototype.tensorProduct = O.prototype.kroneckerProduct;
  const _H = class _H extends O {
    constructor(i, u) {
      super();
      __privateAdd(this, _H_instances);
      __publicField(this, "data");
      if (_H.isMatrix(i)) __privateMethod(this, _H_instances, e_fn).call(this, i.rows, i.columns), _H.copy(i, this);
      else if (Number.isInteger(i) && i >= 0) __privateMethod(this, _H_instances, e_fn).call(this, i, u);
      else if (m.isAnyArray(i)) {
        const a = i;
        if (i = a.length, u = i ? a[0].length : 0, typeof u != "number") throw new TypeError("Data must be a 2D array with at least one element");
        this.data = [];
        for (let r = 0; r < i; r++) {
          if (a[r].length !== u) throw new RangeError("Inconsistent array dimensions");
          if (!me(a[r])) throw new TypeError("Input data contains non-numeric values");
          this.data.push(Float64Array.from(a[r]));
        }
        this.rows = i, this.columns = u;
      } else throw new TypeError("First argument must be a positive number or an array");
    }
    set(i, u, a) {
      return this.data[i][u] = a, this;
    }
    get(i, u) {
      return this.data[i][u];
    }
    removeRow(i) {
      return X(this, i), this.data.splice(i, 1), this.rows -= 1, this;
    }
    addRow(i, u) {
      return u === void 0 && (u = i, i = this.rows), X(this, i, true), u = Float64Array.from(F(this, u)), this.data.splice(i, 0, u), this.rows += 1, this;
    }
    removeColumn(i) {
      L(this, i);
      for (let u = 0; u < this.rows; u++) {
        const a = new Float64Array(this.columns - 1);
        for (let r = 0; r < i; r++) a[r] = this.data[u][r];
        for (let r = i + 1; r < this.columns; r++) a[r - 1] = this.data[u][r];
        this.data[u] = a;
      }
      return this.columns -= 1, this;
    }
    addColumn(i, u) {
      typeof u > "u" && (u = i, i = this.columns), L(this, i, true), u = ue(this, u);
      for (let a = 0; a < this.rows; a++) {
        const r = new Float64Array(this.columns + 1);
        let o = 0;
        for (; o < i; o++) r[o] = this.data[a][o];
        for (r[o++] = u[a]; o < this.columns + 1; o++) r[o] = this.data[a][o - 1];
        this.data[a] = r;
      }
      return this.columns += 1, this;
    }
  };
  _H_instances = new WeakSet();
  e_fn = function(i, u) {
    if (this.data = [], Number.isInteger(u) && u >= 0) for (let a = 0; a < i; a++) this.data.push(new Float64Array(u));
    else throw new TypeError("nColumns must be a positive integer");
    this.rows = i, this.columns = u;
  };
  let H = _H;
  E(O, H);
  const _W = class _W extends O {
    constructor(i) {
      super();
      __privateAdd(this, _e2);
      if (H.isMatrix(i)) {
        if (!i.isSymmetric()) throw new TypeError("not symmetric data");
        __privateSet(this, _e2, H.copy(i, new H(i.rows, i.rows)));
      } else if (Number.isInteger(i) && i >= 0) __privateSet(this, _e2, new H(i, i));
      else if (__privateSet(this, _e2, new H(i)), !this.isSymmetric()) throw new TypeError("not symmetric data");
    }
    get size() {
      return __privateGet(this, _e2).size;
    }
    get rows() {
      return __privateGet(this, _e2).rows;
    }
    get columns() {
      return __privateGet(this, _e2).columns;
    }
    get diagonalSize() {
      return this.rows;
    }
    static isSymmetricMatrix(i) {
      return H.isMatrix(i) && i.klassType === "SymmetricMatrix";
    }
    static zeros(i) {
      return new this(i);
    }
    static ones(i) {
      return new this(i).fill(1);
    }
    clone() {
      const i = new _W(this.diagonalSize);
      for (const [u, a, r] of this.upperRightEntries()) i.set(u, a, r);
      return i;
    }
    toMatrix() {
      return new H(this);
    }
    get(i, u) {
      return __privateGet(this, _e2).get(i, u);
    }
    set(i, u, a) {
      return __privateGet(this, _e2).set(i, u, a), __privateGet(this, _e2).set(u, i, a), this;
    }
    removeCross(i) {
      return __privateGet(this, _e2).removeRow(i), __privateGet(this, _e2).removeColumn(i), this;
    }
    addCross(i, u) {
      u === void 0 && (u = i, i = this.diagonalSize);
      const a = u.slice();
      return a.splice(i, 1), __privateGet(this, _e2).addRow(i, a), __privateGet(this, _e2).addColumn(i, u), this;
    }
    applyMask(i) {
      if (i.length !== this.diagonalSize) throw new RangeError("Mask size do not match with matrix size");
      const u = [];
      for (const [a, r] of i.entries()) r || u.push(a);
      u.reverse();
      for (const a of u) this.removeCross(a);
      return this;
    }
    toCompact() {
      const { diagonalSize: i } = this, u = new Array(i * (i + 1) / 2);
      for (let a = 0, r = 0, o = 0; o < u.length; o++) u[o] = this.get(r, a), ++a >= i && (a = ++r);
      return u;
    }
    static fromCompact(i) {
      const u = i.length, a = (Math.sqrt(8 * u + 1) - 1) / 2;
      if (!Number.isInteger(a)) throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(i)}`);
      const r = new _W(a);
      for (let o = 0, b = 0, v = 0; v < u; v++) r.set(o, b, i[v]), ++o >= a && (o = ++b);
      return r;
    }
    *upperRightEntries() {
      for (let i = 0, u = 0; i < this.diagonalSize; void 0) {
        const a = this.get(i, u);
        yield [i, u, a], ++u >= this.diagonalSize && (u = ++i);
      }
    }
    *upperRightValues() {
      for (let i = 0, u = 0; i < this.diagonalSize; void 0) yield this.get(i, u), ++u >= this.diagonalSize && (u = ++i);
    }
  };
  _e2 = new WeakMap();
  let W = _W;
  W.prototype.klassType = "SymmetricMatrix";
  class te extends W {
    static isDistanceMatrix(i) {
      return W.isSymmetricMatrix(i) && i.klassSubType === "DistanceMatrix";
    }
    constructor(i) {
      if (super(i), !this.isDistance()) throw new TypeError("Provided arguments do no produce a distance matrix");
    }
    set(i, u, a) {
      return i === u && (a = 0), super.set(i, u, a);
    }
    addCross(i, u) {
      return u === void 0 && (u = i, i = this.diagonalSize), u = u.slice(), u[i] = 0, super.addCross(i, u);
    }
    toSymmetricMatrix() {
      return new W(this);
    }
    clone() {
      const i = new te(this.diagonalSize);
      for (const [u, a, r] of this.upperRightEntries()) u !== a && i.set(u, a, r);
      return i;
    }
    toCompact() {
      const { diagonalSize: i } = this, u = (i - 1) * i / 2, a = new Array(u);
      for (let r = 1, o = 0, b = 0; b < a.length; b++) a[b] = this.get(o, r), ++r >= i && (r = ++o + 1);
      return a;
    }
    static fromCompact(i) {
      const u = i.length;
      if (u === 0) return new this(0);
      const a = (Math.sqrt(8 * u + 1) + 1) / 2;
      if (!Number.isInteger(a)) throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(i)}`);
      const r = new this(a);
      for (let o = 1, b = 0, v = 0; v < u; v++) r.set(o, b, i[v]), ++o >= a && (o = ++b + 1);
      return r;
    }
  }
  te.prototype.klassSubType = "DistanceMatrix";
  class Ge extends O {
    constructor(i, u, a) {
      super(), this.matrix = i, this.rows = u, this.columns = a;
    }
  }
  class qe extends Ge {
    constructor(i, u) {
      L(i, u), super(i, i.rows, 1), this.column = u;
    }
    set(i, u, a) {
      return this.matrix.set(i, this.column, a), this;
    }
    get(i) {
      return this.matrix.get(i, this.column);
    }
  }
  class gt extends Ge {
    constructor(i, u) {
      ce(i, u), super(i, i.rows, u.length), this.columnIndices = u;
    }
    set(i, u, a) {
      return this.matrix.set(i, this.columnIndices[u], a), this;
    }
    get(i, u) {
      return this.matrix.get(i, this.columnIndices[u]);
    }
  }
  class tl extends Ge {
    constructor(i) {
      super(i, i.rows, i.columns);
    }
    set(i, u, a) {
      return this.matrix.set(i, this.columns - u - 1, a), this;
    }
    get(i, u) {
      return this.matrix.get(i, this.columns - u - 1);
    }
  }
  class $t extends Ge {
    constructor(i) {
      super(i, i.rows, i.columns);
    }
    set(i, u, a) {
      return this.matrix.set(this.rows - i - 1, u, a), this;
    }
    get(i, u) {
      return this.matrix.get(this.rows - i - 1, u);
    }
  }
  class ll extends Ge {
    constructor(i, u) {
      X(i, u), super(i, 1, i.columns), this.row = u;
    }
    set(i, u, a) {
      return this.matrix.set(this.row, u, a), this;
    }
    get(i, u) {
      return this.matrix.get(this.row, u);
    }
  }
  class Mt extends Ge {
    constructor(i, u) {
      he(i, u), super(i, u.length, i.columns), this.rowIndices = u;
    }
    set(i, u, a) {
      return this.matrix.set(this.rowIndices[i], u, a), this;
    }
    get(i, u) {
      return this.matrix.get(this.rowIndices[i], u);
    }
  }
  class Zt extends Ge {
    constructor(i, u, a) {
      he(i, u), ce(i, a), super(i, u.length, a.length), this.rowIndices = u, this.columnIndices = a;
    }
    set(i, u, a) {
      return this.matrix.set(this.rowIndices[i], this.columnIndices[u], a), this;
    }
    get(i, u) {
      return this.matrix.get(this.rowIndices[i], this.columnIndices[u]);
    }
  }
  class Lt extends Ge {
    constructor(i, u, a, r, o) {
      I(i, u, a, r, o), super(i, a - u + 1, o - r + 1), this.startRow = u, this.startColumn = r;
    }
    set(i, u, a) {
      return this.matrix.set(this.startRow + i, this.startColumn + u, a), this;
    }
    get(i, u) {
      return this.matrix.get(this.startRow + i, this.startColumn + u);
    }
  }
  class Gt extends Ge {
    constructor(i) {
      super(i, i.columns, i.rows);
    }
    set(i, u, a) {
      return this.matrix.set(u, i, a), this;
    }
    get(i, u) {
      return this.matrix.get(u, i);
    }
  }
  class al extends O {
    constructor(i, u = {}) {
      const { rows: a = 1 } = u;
      if (i.length % a !== 0) throw new Error("the data length is not divisible by the number of rows");
      super(), this.rows = a, this.columns = i.length / a, this.data = i;
    }
    set(i, u, a) {
      let r = this._calculateIndex(i, u);
      return this.data[r] = a, this;
    }
    get(i, u) {
      let a = this._calculateIndex(i, u);
      return this.data[a];
    }
    _calculateIndex(i, u) {
      return i * this.columns + u;
    }
  }
  class qt extends O {
    constructor(i) {
      super(), this.data = i, this.rows = i.length, this.columns = i[0].length;
    }
    set(i, u, a) {
      return this.data[i][u] = a, this;
    }
    get(i, u) {
      return this.data[i][u];
    }
  }
  function de(d, i) {
    if (m.isAnyArray(d)) return d[0] && m.isAnyArray(d[0]) ? new qt(d) : new al(d, i);
    throw new Error("the argument is not an array");
  }
  class Ye {
    constructor(i) {
      i = qt.checkMatrix(i);
      let u = i.clone(), a = u.rows, r = u.columns, o = new Float64Array(a), b = 1, v, x, w, R, T, k, ge, Z, le;
      for (v = 0; v < a; v++) o[v] = v;
      for (Z = new Float64Array(a), x = 0; x < r; x++) {
        for (v = 0; v < a; v++) Z[v] = u.get(v, x);
        for (v = 0; v < a; v++) {
          for (le = Math.min(v, x), T = 0, w = 0; w < le; w++) T += u.get(v, w) * Z[w];
          Z[v] -= T, u.set(v, x, Z[v]);
        }
        for (R = x, v = x + 1; v < a; v++) Math.abs(Z[v]) > Math.abs(Z[R]) && (R = v);
        if (R !== x) {
          for (w = 0; w < r; w++) k = u.get(R, w), u.set(R, w, u.get(x, w)), u.set(x, w, k);
          ge = o[R], o[R] = o[x], o[x] = ge, b = -b;
        }
        if (x < a && u.get(x, x) !== 0) for (v = x + 1; v < a; v++) u.set(v, x, u.get(v, x) / u.get(x, x));
      }
      this.LU = u, this.pivotVector = o, this.pivotSign = b;
    }
    isSingular() {
      let i = this.LU, u = i.columns;
      for (let a = 0; a < u; a++) if (i.get(a, a) === 0) return true;
      return false;
    }
    solve(i) {
      i = H.checkMatrix(i);
      let u = this.LU;
      if (u.rows !== i.rows) throw new Error("Invalid matrix dimensions");
      if (this.isSingular()) throw new Error("LU matrix is singular");
      let r = i.columns, o = i.subMatrixRow(this.pivotVector, 0, r - 1), b = u.columns, v, x, w;
      for (w = 0; w < b; w++) for (v = w + 1; v < b; v++) for (x = 0; x < r; x++) o.set(v, x, o.get(v, x) - o.get(w, x) * u.get(v, w));
      for (w = b - 1; w >= 0; w--) {
        for (x = 0; x < r; x++) o.set(w, x, o.get(w, x) / u.get(w, w));
        for (v = 0; v < w; v++) for (x = 0; x < r; x++) o.set(v, x, o.get(v, x) - o.get(w, x) * u.get(v, w));
      }
      return o;
    }
    get determinant() {
      let i = this.LU;
      if (!i.isSquare()) throw new Error("Matrix must be square");
      let u = this.pivotSign, a = i.columns;
      for (let r = 0; r < a; r++) u *= i.get(r, r);
      return u;
    }
    get lowerTriangularMatrix() {
      let i = this.LU, u = i.rows, a = i.columns, r = new H(u, a);
      for (let o = 0; o < u; o++) for (let b = 0; b < a; b++) o > b ? r.set(o, b, i.get(o, b)) : o === b ? r.set(o, b, 1) : r.set(o, b, 0);
      return r;
    }
    get upperTriangularMatrix() {
      let i = this.LU, u = i.rows, a = i.columns, r = new H(u, a);
      for (let o = 0; o < u; o++) for (let b = 0; b < a; b++) o <= b ? r.set(o, b, i.get(o, b)) : r.set(o, b, 0);
      return r;
    }
    get pivotPermutationVector() {
      return Array.from(this.pivotVector);
    }
  }
  function ot(d, i) {
    let u = 0;
    return Math.abs(d) > Math.abs(i) ? (u = i / d, Math.abs(d) * Math.sqrt(1 + u * u)) : i !== 0 ? (u = d / i, Math.abs(i) * Math.sqrt(1 + u * u)) : 0;
  }
  class ul {
    constructor(i) {
      i = qt.checkMatrix(i);
      let u = i.clone(), a = i.rows, r = i.columns, o = new Float64Array(r), b, v, x, w;
      for (x = 0; x < r; x++) {
        let R = 0;
        for (b = x; b < a; b++) R = ot(R, u.get(b, x));
        if (R !== 0) {
          for (u.get(x, x) < 0 && (R = -R), b = x; b < a; b++) u.set(b, x, u.get(b, x) / R);
          for (u.set(x, x, u.get(x, x) + 1), v = x + 1; v < r; v++) {
            for (w = 0, b = x; b < a; b++) w += u.get(b, x) * u.get(b, v);
            for (w = -w / u.get(x, x), b = x; b < a; b++) u.set(b, v, u.get(b, v) + w * u.get(b, x));
          }
        }
        o[x] = -R;
      }
      this.QR = u, this.Rdiag = o;
    }
    solve(i) {
      i = H.checkMatrix(i);
      let u = this.QR, a = u.rows;
      if (i.rows !== a) throw new Error("Matrix row dimensions must agree");
      if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
      let r = i.columns, o = i.clone(), b = u.columns, v, x, w, R;
      for (w = 0; w < b; w++) for (x = 0; x < r; x++) {
        for (R = 0, v = w; v < a; v++) R += u.get(v, w) * o.get(v, x);
        for (R = -R / u.get(w, w), v = w; v < a; v++) o.set(v, x, o.get(v, x) + R * u.get(v, w));
      }
      for (w = b - 1; w >= 0; w--) {
        for (x = 0; x < r; x++) o.set(w, x, o.get(w, x) / this.Rdiag[w]);
        for (v = 0; v < w; v++) for (x = 0; x < r; x++) o.set(v, x, o.get(v, x) - o.get(w, x) * u.get(v, w));
      }
      return o.subMatrix(0, b - 1, 0, r - 1);
    }
    isFullRank() {
      let i = this.QR.columns;
      for (let u = 0; u < i; u++) if (this.Rdiag[u] === 0) return false;
      return true;
    }
    get upperTriangularMatrix() {
      let i = this.QR, u = i.columns, a = new H(u, u), r, o;
      for (r = 0; r < u; r++) for (o = 0; o < u; o++) r < o ? a.set(r, o, i.get(r, o)) : r === o ? a.set(r, o, this.Rdiag[r]) : a.set(r, o, 0);
      return a;
    }
    get orthogonalMatrix() {
      let i = this.QR, u = i.rows, a = i.columns, r = new H(u, a), o, b, v, x;
      for (v = a - 1; v >= 0; v--) {
        for (o = 0; o < u; o++) r.set(o, v, 0);
        for (r.set(v, v, 1), b = v; b < a; b++) if (i.get(v, v) !== 0) {
          for (x = 0, o = v; o < u; o++) x += i.get(o, v) * r.get(o, b);
          for (x = -x / i.get(v, v), o = v; o < u; o++) r.set(o, b, r.get(o, b) + x * i.get(o, v));
        }
      }
      return r;
    }
  }
  class yt {
    constructor(i, u = {}) {
      if (i = qt.checkMatrix(i), i.isEmpty()) throw new Error("Matrix must be non-empty");
      let a = i.rows, r = i.columns;
      const { computeLeftSingularVectors: o = true, computeRightSingularVectors: b = true, autoTranspose: v = false } = u;
      let x = !!o, w = !!b, R = false, T;
      if (a < r) if (!v) T = i.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
      else {
        T = i.transpose(), a = T.rows, r = T.columns, R = true;
        let A = x;
        x = w, w = A;
      }
      else T = i.clone();
      let k = Math.min(a, r), ge = Math.min(a + 1, r), Z = new Float64Array(ge), le = new H(a, k), Se = new H(r, r), M = new Float64Array(r), re = new Float64Array(a), Ee = new Float64Array(ge);
      for (let A = 0; A < ge; A++) Ee[A] = A;
      let Qe = Math.min(a - 1, r), Ke = Math.max(0, Math.min(r - 2, a)), xt = Math.max(Qe, Ke);
      for (let A = 0; A < xt; A++) {
        if (A < Qe) {
          Z[A] = 0;
          for (let ie = A; ie < a; ie++) Z[A] = ot(Z[A], T.get(ie, A));
          if (Z[A] !== 0) {
            T.get(A, A) < 0 && (Z[A] = -Z[A]);
            for (let ie = A; ie < a; ie++) T.set(ie, A, T.get(ie, A) / Z[A]);
            T.set(A, A, T.get(A, A) + 1);
          }
          Z[A] = -Z[A];
        }
        for (let ie = A + 1; ie < r; ie++) {
          if (A < Qe && Z[A] !== 0) {
            let je = 0;
            for (let oe = A; oe < a; oe++) je += T.get(oe, A) * T.get(oe, ie);
            je = -je / T.get(A, A);
            for (let oe = A; oe < a; oe++) T.set(oe, ie, T.get(oe, ie) + je * T.get(oe, A));
          }
          M[ie] = T.get(A, ie);
        }
        if (x && A < Qe) for (let ie = A; ie < a; ie++) le.set(ie, A, T.get(ie, A));
        if (A < Ke) {
          M[A] = 0;
          for (let ie = A + 1; ie < r; ie++) M[A] = ot(M[A], M[ie]);
          if (M[A] !== 0) {
            M[A + 1] < 0 && (M[A] = 0 - M[A]);
            for (let ie = A + 1; ie < r; ie++) M[ie] /= M[A];
            M[A + 1] += 1;
          }
          if (M[A] = -M[A], A + 1 < a && M[A] !== 0) {
            for (let ie = A + 1; ie < a; ie++) re[ie] = 0;
            for (let ie = A + 1; ie < a; ie++) for (let je = A + 1; je < r; je++) re[ie] += M[je] * T.get(ie, je);
            for (let ie = A + 1; ie < r; ie++) {
              let je = -M[ie] / M[A + 1];
              for (let oe = A + 1; oe < a; oe++) T.set(oe, ie, T.get(oe, ie) + je * re[oe]);
            }
          }
          if (w) for (let ie = A + 1; ie < r; ie++) Se.set(ie, A, M[ie]);
        }
      }
      let Oe = Math.min(r, a + 1);
      if (Qe < r && (Z[Qe] = T.get(Qe, Qe)), a < Oe && (Z[Oe - 1] = 0), Ke + 1 < Oe && (M[Ke] = T.get(Ke, Oe - 1)), M[Oe - 1] = 0, x) {
        for (let A = Qe; A < k; A++) {
          for (let ie = 0; ie < a; ie++) le.set(ie, A, 0);
          le.set(A, A, 1);
        }
        for (let A = Qe - 1; A >= 0; A--) if (Z[A] !== 0) {
          for (let ie = A + 1; ie < k; ie++) {
            let je = 0;
            for (let oe = A; oe < a; oe++) je += le.get(oe, A) * le.get(oe, ie);
            je = -je / le.get(A, A);
            for (let oe = A; oe < a; oe++) le.set(oe, ie, le.get(oe, ie) + je * le.get(oe, A));
          }
          for (let ie = A; ie < a; ie++) le.set(ie, A, -le.get(ie, A));
          le.set(A, A, 1 + le.get(A, A));
          for (let ie = 0; ie < A - 1; ie++) le.set(ie, A, 0);
        } else {
          for (let ie = 0; ie < a; ie++) le.set(ie, A, 0);
          le.set(A, A, 1);
        }
      }
      if (w) for (let A = r - 1; A >= 0; A--) {
        if (A < Ke && M[A] !== 0) for (let ie = A + 1; ie < r; ie++) {
          let je = 0;
          for (let oe = A + 1; oe < r; oe++) je += Se.get(oe, A) * Se.get(oe, ie);
          je = -je / Se.get(A + 1, A);
          for (let oe = A + 1; oe < r; oe++) Se.set(oe, ie, Se.get(oe, ie) + je * Se.get(oe, A));
        }
        for (let ie = 0; ie < r; ie++) Se.set(ie, A, 0);
        Se.set(A, A, 1);
      }
      let Ue = Oe - 1, ft = Number.EPSILON;
      for (; Oe > 0; ) {
        let A, ie;
        for (A = Oe - 2; A >= -1 && A !== -1; A--) {
          const je = Number.MIN_VALUE + ft * Math.abs(Z[A] + Math.abs(Z[A + 1]));
          if (Math.abs(M[A]) <= je || Number.isNaN(M[A])) {
            M[A] = 0;
            break;
          }
        }
        if (A === Oe - 2) ie = 4;
        else {
          let je;
          for (je = Oe - 1; je >= A && je !== A; je--) {
            let oe = (je !== Oe ? Math.abs(M[je]) : 0) + (je !== A + 1 ? Math.abs(M[je - 1]) : 0);
            if (Math.abs(Z[je]) <= ft * oe) {
              Z[je] = 0;
              break;
            }
          }
          je === A ? ie = 3 : je === Oe - 1 ? ie = 1 : (ie = 2, A = je);
        }
        switch (A++, ie) {
          case 1: {
            let je = M[Oe - 2];
            M[Oe - 2] = 0;
            for (let oe = Oe - 2; oe >= A; oe--) {
              let $e = ot(Z[oe], je), it = Z[oe] / $e, pt = je / $e;
              if (Z[oe] = $e, oe !== A && (je = -pt * M[oe - 1], M[oe - 1] = it * M[oe - 1]), w) for (let ut = 0; ut < r; ut++) $e = it * Se.get(ut, oe) + pt * Se.get(ut, Oe - 1), Se.set(ut, Oe - 1, -pt * Se.get(ut, oe) + it * Se.get(ut, Oe - 1)), Se.set(ut, oe, $e);
            }
            break;
          }
          case 2: {
            let je = M[A - 1];
            M[A - 1] = 0;
            for (let oe = A; oe < Oe; oe++) {
              let $e = ot(Z[oe], je), it = Z[oe] / $e, pt = je / $e;
              if (Z[oe] = $e, je = -pt * M[oe], M[oe] = it * M[oe], x) for (let ut = 0; ut < a; ut++) $e = it * le.get(ut, oe) + pt * le.get(ut, A - 1), le.set(ut, A - 1, -pt * le.get(ut, oe) + it * le.get(ut, A - 1)), le.set(ut, oe, $e);
            }
            break;
          }
          case 3: {
            const je = Math.max(Math.abs(Z[Oe - 1]), Math.abs(Z[Oe - 2]), Math.abs(M[Oe - 2]), Math.abs(Z[A]), Math.abs(M[A])), oe = Z[Oe - 1] / je, $e = Z[Oe - 2] / je, it = M[Oe - 2] / je, pt = Z[A] / je, ut = M[A] / je, _t = (($e + oe) * ($e - oe) + it * it) / 2, gl = oe * it * (oe * it);
            let zt = 0;
            (_t !== 0 || gl !== 0) && (_t < 0 ? zt = 0 - Math.sqrt(_t * _t + gl) : zt = Math.sqrt(_t * _t + gl), zt = gl / (_t + zt));
            let yl = (pt + oe) * (pt - oe) + zt, ql = pt * ut;
            for (let Ie = A; Ie < Oe - 1; Ie++) {
              let At = ot(yl, ql);
              At === 0 && (At = Number.MIN_VALUE);
              let Ct = yl / At, jt = ql / At;
              if (Ie !== A && (M[Ie - 1] = At), yl = Ct * Z[Ie] + jt * M[Ie], M[Ie] = Ct * M[Ie] - jt * Z[Ie], ql = jt * Z[Ie + 1], Z[Ie + 1] = Ct * Z[Ie + 1], w) for (let Dt = 0; Dt < r; Dt++) At = Ct * Se.get(Dt, Ie) + jt * Se.get(Dt, Ie + 1), Se.set(Dt, Ie + 1, -jt * Se.get(Dt, Ie) + Ct * Se.get(Dt, Ie + 1)), Se.set(Dt, Ie, At);
              if (At = ot(yl, ql), At === 0 && (At = Number.MIN_VALUE), Ct = yl / At, jt = ql / At, Z[Ie] = At, yl = Ct * M[Ie] + jt * Z[Ie + 1], Z[Ie + 1] = -jt * M[Ie] + Ct * Z[Ie + 1], ql = jt * M[Ie + 1], M[Ie + 1] = Ct * M[Ie + 1], x && Ie < a - 1) for (let Dt = 0; Dt < a; Dt++) At = Ct * le.get(Dt, Ie) + jt * le.get(Dt, Ie + 1), le.set(Dt, Ie + 1, -jt * le.get(Dt, Ie) + Ct * le.get(Dt, Ie + 1)), le.set(Dt, Ie, At);
            }
            M[Oe - 2] = yl;
            break;
          }
          case 4: {
            if (Z[A] <= 0 && (Z[A] = Z[A] < 0 ? -Z[A] : 0, w)) for (let je = 0; je <= Ue; je++) Se.set(je, A, -Se.get(je, A));
            for (; A < Ue && !(Z[A] >= Z[A + 1]); ) {
              let je = Z[A];
              if (Z[A] = Z[A + 1], Z[A + 1] = je, w && A < r - 1) for (let oe = 0; oe < r; oe++) je = Se.get(oe, A + 1), Se.set(oe, A + 1, Se.get(oe, A)), Se.set(oe, A, je);
              if (x && A < a - 1) for (let oe = 0; oe < a; oe++) je = le.get(oe, A + 1), le.set(oe, A + 1, le.get(oe, A)), le.set(oe, A, je);
              A++;
            }
            Oe--;
            break;
          }
        }
      }
      if (R) {
        let A = Se;
        Se = le, le = A;
      }
      this.m = a, this.n = r, this.s = Z, this.U = le, this.V = Se;
    }
    solve(i) {
      let u = i, a = this.threshold, r = this.s.length, o = H.zeros(r, r);
      for (let k = 0; k < r; k++) Math.abs(this.s[k]) <= a ? o.set(k, k, 0) : o.set(k, k, 1 / this.s[k]);
      let b = this.U, v = this.rightSingularVectors, x = v.mmul(o), w = v.rows, R = b.rows, T = H.zeros(w, R);
      for (let k = 0; k < w; k++) for (let ge = 0; ge < R; ge++) {
        let Z = 0;
        for (let le = 0; le < r; le++) Z += x.get(k, le) * b.get(ge, le);
        T.set(k, ge, Z);
      }
      return T.mmul(u);
    }
    solveForDiagonal(i) {
      return this.solve(H.diag(i));
    }
    inverse() {
      let i = this.V, u = this.threshold, a = i.rows, r = i.columns, o = new H(a, this.s.length);
      for (let R = 0; R < a; R++) for (let T = 0; T < r; T++) Math.abs(this.s[T]) > u && o.set(R, T, i.get(R, T) / this.s[T]);
      let b = this.U, v = b.rows, x = b.columns, w = new H(a, v);
      for (let R = 0; R < a; R++) for (let T = 0; T < v; T++) {
        let k = 0;
        for (let ge = 0; ge < x; ge++) k += o.get(R, ge) * b.get(T, ge);
        w.set(R, T, k);
      }
      return w;
    }
    get condition() {
      return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
    }
    get norm2() {
      return this.s[0];
    }
    get rank() {
      let i = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, u = 0, a = this.s;
      for (let r = 0, o = a.length; r < o; r++) a[r] > i && u++;
      return u;
    }
    get diagonal() {
      return Array.from(this.s);
    }
    get threshold() {
      return Number.EPSILON / 2 * Math.max(this.m, this.n) * this.s[0];
    }
    get leftSingularVectors() {
      return this.U;
    }
    get rightSingularVectors() {
      return this.V;
    }
    get diagonalMatrix() {
      return H.diag(this.s);
    }
  }
  function on(d, i = false) {
    return d = qt.checkMatrix(d), i ? new yt(d).inverse() : Bn(d, H.eye(d.rows));
  }
  function Bn(d, i, u = false) {
    return d = qt.checkMatrix(d), i = qt.checkMatrix(i), u ? new yt(d).solve(i) : d.isSquare() ? new Ye(d).solve(i) : new ul(d).solve(i);
  }
  function sl(d) {
    if (d = H.checkMatrix(d), d.isSquare()) {
      if (d.columns === 0) return 1;
      let i, u, a, r;
      if (d.columns === 2) return i = d.get(0, 0), u = d.get(0, 1), a = d.get(1, 0), r = d.get(1, 1), i * r - u * a;
      if (d.columns === 3) {
        let o, b, v;
        return o = new Zt(d, [1, 2], [1, 2]), b = new Zt(d, [1, 2], [0, 2]), v = new Zt(d, [1, 2], [0, 1]), i = d.get(0, 0), u = d.get(0, 1), a = d.get(0, 2), i * sl(o) - u * sl(b) + a * sl(v);
      } else return new Ye(d).determinant;
    } else throw Error("determinant can only be calculated for a square matrix");
  }
  function fn(d, i) {
    let u = [];
    for (let a = 0; a < d; a++) a !== i && u.push(a);
    return u;
  }
  function Zl(d, i, u, a = 1e-9, r = 1e-9) {
    if (d > r) return new Array(i.rows + 1).fill(0);
    {
      let o = i.addRow(u, [0]);
      for (let b = 0; b < o.rows; b++) Math.abs(o.get(b, 0)) < a && o.set(b, 0, 0);
      return o.to1DArray();
    }
  }
  function Kt(d, i = {}) {
    const { thresholdValue: u = 1e-9, thresholdError: a = 1e-9 } = i;
    d = H.checkMatrix(d);
    let r = d.rows, o = new H(r, r);
    for (let b = 0; b < r; b++) {
      let v = H.columnVector(d.getRow(b)), x = d.subMatrixRow(fn(r, b)).transpose(), R = new yt(x).solve(v), T = H.sub(v, x.mmul(R)).abs().max();
      o.setRow(b, Zl(T, R, b, u, a));
    }
    return o;
  }
  function hn(d, i = Number.EPSILON) {
    if (d = H.checkMatrix(d), d.isEmpty()) return d.transpose();
    let u = new yt(d, { autoTranspose: true }), a = u.leftSingularVectors, r = u.rightSingularVectors, o = u.diagonal;
    for (let b = 0; b < o.length; b++) Math.abs(o[b]) > i ? o[b] = 1 / o[b] : o[b] = 0;
    return r.mmul(H.diag(o).mmul(a.transpose()));
  }
  function Gl(d, i = d, u = {}) {
    d = new H(d);
    let a = false;
    if (typeof i == "object" && !H.isMatrix(i) && !m.isAnyArray(i) ? (u = i, i = d, a = true) : i = new H(i), d.rows !== i.rows) throw new TypeError("Both matrices must have the same number of rows");
    const { center: r = true } = u;
    r && (d = d.center("column"), a || (i = i.center("column")));
    const o = d.transpose().mmul(i);
    for (let b = 0; b < o.rows; b++) for (let v = 0; v < o.columns; v++) o.set(b, v, o.get(b, v) * (1 / (d.rows - 1)));
    return o;
  }
  function Yl(d, i = d, u = {}) {
    d = new H(d);
    let a = false;
    if (typeof i == "object" && !H.isMatrix(i) && !m.isAnyArray(i) ? (u = i, i = d, a = true) : i = new H(i), d.rows !== i.rows) throw new TypeError("Both matrices must have the same number of rows");
    const { center: r = true, scale: o = true } = u;
    r && (d.center("column"), a || i.center("column")), o && (d.scale("column"), a || i.scale("column"));
    const b = d.standardDeviation("column", { unbiased: true }), v = a ? b : i.standardDeviation("column", { unbiased: true }), x = d.transpose().mmul(i);
    for (let w = 0; w < x.rows; w++) for (let R = 0; R < x.columns; R++) x.set(w, R, x.get(w, R) * (1 / (b[w] * v[R])) * (1 / (d.rows - 1)));
    return x;
  }
  class kt {
    constructor(i, u = {}) {
      const { assumeSymmetric: a = false } = u;
      if (i = qt.checkMatrix(i), !i.isSquare()) throw new Error("Matrix is not a square matrix");
      if (i.isEmpty()) throw new Error("Matrix must be non-empty");
      let r = i.columns, o = new H(r, r), b = new Float64Array(r), v = new Float64Array(r), x = i, w, R, T = false;
      if (a ? T = true : T = i.isSymmetric(), T) {
        for (w = 0; w < r; w++) for (R = 0; R < r; R++) o.set(w, R, x.get(w, R));
        El(r, v, b, o), Yt(r, v, b, o);
      } else {
        let k = new H(r, r), ge = new Float64Array(r);
        for (R = 0; R < r; R++) for (w = 0; w < r; w++) k.set(w, R, x.get(w, R));
        Xa(r, k, ge, o), ta(r, v, b, o, k);
      }
      this.n = r, this.e = v, this.d = b, this.V = o;
    }
    get realEigenvalues() {
      return Array.from(this.d);
    }
    get imaginaryEigenvalues() {
      return Array.from(this.e);
    }
    get eigenvectorMatrix() {
      return this.V;
    }
    get diagonalMatrix() {
      let i = this.n, u = this.e, a = this.d, r = new H(i, i), o, b;
      for (o = 0; o < i; o++) {
        for (b = 0; b < i; b++) r.set(o, b, 0);
        r.set(o, o, a[o]), u[o] > 0 ? r.set(o, o + 1, u[o]) : u[o] < 0 && r.set(o, o - 1, u[o]);
      }
      return r;
    }
  }
  function El(d, i, u, a) {
    let r, o, b, v, x, w, R, T;
    for (x = 0; x < d; x++) u[x] = a.get(d - 1, x);
    for (v = d - 1; v > 0; v--) {
      for (T = 0, b = 0, w = 0; w < v; w++) T = T + Math.abs(u[w]);
      if (T === 0) for (i[v] = u[v - 1], x = 0; x < v; x++) u[x] = a.get(v - 1, x), a.set(v, x, 0), a.set(x, v, 0);
      else {
        for (w = 0; w < v; w++) u[w] /= T, b += u[w] * u[w];
        for (r = u[v - 1], o = Math.sqrt(b), r > 0 && (o = -o), i[v] = T * o, b = b - r * o, u[v - 1] = r - o, x = 0; x < v; x++) i[x] = 0;
        for (x = 0; x < v; x++) {
          for (r = u[x], a.set(x, v, r), o = i[x] + a.get(x, x) * r, w = x + 1; w <= v - 1; w++) o += a.get(w, x) * u[w], i[w] += a.get(w, x) * r;
          i[x] = o;
        }
        for (r = 0, x = 0; x < v; x++) i[x] /= b, r += i[x] * u[x];
        for (R = r / (b + b), x = 0; x < v; x++) i[x] -= R * u[x];
        for (x = 0; x < v; x++) {
          for (r = u[x], o = i[x], w = x; w <= v - 1; w++) a.set(w, x, a.get(w, x) - (r * i[w] + o * u[w]));
          u[x] = a.get(v - 1, x), a.set(v, x, 0);
        }
      }
      u[v] = b;
    }
    for (v = 0; v < d - 1; v++) {
      if (a.set(d - 1, v, a.get(v, v)), a.set(v, v, 1), b = u[v + 1], b !== 0) {
        for (w = 0; w <= v; w++) u[w] = a.get(w, v + 1) / b;
        for (x = 0; x <= v; x++) {
          for (o = 0, w = 0; w <= v; w++) o += a.get(w, v + 1) * a.get(w, x);
          for (w = 0; w <= v; w++) a.set(w, x, a.get(w, x) - o * u[w]);
        }
      }
      for (w = 0; w <= v; w++) a.set(w, v + 1, 0);
    }
    for (x = 0; x < d; x++) u[x] = a.get(d - 1, x), a.set(d - 1, x, 0);
    a.set(d - 1, d - 1, 1), i[0] = 0;
  }
  function Yt(d, i, u, a) {
    let r, o, b, v, x, w, R, T, k, ge, Z, le, Se, M, re, Ee;
    for (b = 1; b < d; b++) i[b - 1] = i[b];
    i[d - 1] = 0;
    let Qe = 0, Ke = 0, xt = Number.EPSILON;
    for (w = 0; w < d; w++) {
      for (Ke = Math.max(Ke, Math.abs(u[w]) + Math.abs(i[w])), R = w; R < d && !(Math.abs(i[R]) <= xt * Ke); ) R++;
      if (R > w) do {
        for (r = u[w], T = (u[w + 1] - r) / (2 * i[w]), k = ot(T, 1), T < 0 && (k = -k), u[w] = i[w] / (T + k), u[w + 1] = i[w] * (T + k), ge = u[w + 1], o = r - u[w], b = w + 2; b < d; b++) u[b] -= o;
        for (Qe = Qe + o, T = u[R], Z = 1, le = Z, Se = Z, M = i[w + 1], re = 0, Ee = 0, b = R - 1; b >= w; b--) for (Se = le, le = Z, Ee = re, r = Z * i[b], o = Z * T, k = ot(T, i[b]), i[b + 1] = re * k, re = i[b] / k, Z = T / k, T = Z * u[b] - re * r, u[b + 1] = o + re * (Z * r + re * u[b]), x = 0; x < d; x++) o = a.get(x, b + 1), a.set(x, b + 1, re * a.get(x, b) + Z * o), a.set(x, b, Z * a.get(x, b) - re * o);
        T = -re * Ee * Se * M * i[w] / ge, i[w] = re * T, u[w] = Z * T;
      } while (Math.abs(i[w]) > xt * Ke);
      u[w] = u[w] + Qe, i[w] = 0;
    }
    for (b = 0; b < d - 1; b++) {
      for (x = b, T = u[b], v = b + 1; v < d; v++) u[v] < T && (x = v, T = u[v]);
      if (x !== b) for (u[x] = u[b], u[b] = T, v = 0; v < d; v++) T = a.get(v, b), a.set(v, b, a.get(v, x)), a.set(v, x, T);
    }
  }
  function Xa(d, i, u, a) {
    let r = 0, o = d - 1, b, v, x, w, R, T, k;
    for (T = r + 1; T <= o - 1; T++) {
      for (k = 0, w = T; w <= o; w++) k = k + Math.abs(i.get(w, T - 1));
      if (k !== 0) {
        for (x = 0, w = o; w >= T; w--) u[w] = i.get(w, T - 1) / k, x += u[w] * u[w];
        for (v = Math.sqrt(x), u[T] > 0 && (v = -v), x = x - u[T] * v, u[T] = u[T] - v, R = T; R < d; R++) {
          for (b = 0, w = o; w >= T; w--) b += u[w] * i.get(w, R);
          for (b = b / x, w = T; w <= o; w++) i.set(w, R, i.get(w, R) - b * u[w]);
        }
        for (w = 0; w <= o; w++) {
          for (b = 0, R = o; R >= T; R--) b += u[R] * i.get(w, R);
          for (b = b / x, R = T; R <= o; R++) i.set(w, R, i.get(w, R) - b * u[R]);
        }
        u[T] = k * u[T], i.set(T, T - 1, k * v);
      }
    }
    for (w = 0; w < d; w++) for (R = 0; R < d; R++) a.set(w, R, w === R ? 1 : 0);
    for (T = o - 1; T >= r + 1; T--) if (i.get(T, T - 1) !== 0) {
      for (w = T + 1; w <= o; w++) u[w] = i.get(w, T - 1);
      for (R = T; R <= o; R++) {
        for (v = 0, w = T; w <= o; w++) v += u[w] * a.get(w, R);
        for (v = v / u[T] / i.get(T, T - 1), w = T; w <= o; w++) a.set(w, R, a.get(w, R) + v * u[w]);
      }
    }
  }
  function ta(d, i, u, a, r) {
    let o = d - 1, b = 0, v = d - 1, x = Number.EPSILON, w = 0, R = 0, T = 0, k = 0, ge = 0, Z = 0, le = 0, Se = 0, M, re, Ee, Qe, Ke, xt, Oe, Ue, ft, A, ie, je, oe, $e, it;
    for (M = 0; M < d; M++) for ((M < b || M > v) && (u[M] = r.get(M, M), i[M] = 0), re = Math.max(M - 1, 0); re < d; re++) R = R + Math.abs(r.get(M, re));
    for (; o >= b; ) {
      for (Qe = o; Qe > b && (Z = Math.abs(r.get(Qe - 1, Qe - 1)) + Math.abs(r.get(Qe, Qe)), Z === 0 && (Z = R), !(Math.abs(r.get(Qe, Qe - 1)) < x * Z)); ) Qe--;
      if (Qe === o) r.set(o, o, r.get(o, o) + w), u[o] = r.get(o, o), i[o] = 0, o--, Se = 0;
      else if (Qe === o - 1) {
        if (Oe = r.get(o, o - 1) * r.get(o - 1, o), T = (r.get(o - 1, o - 1) - r.get(o, o)) / 2, k = T * T + Oe, le = Math.sqrt(Math.abs(k)), r.set(o, o, r.get(o, o) + w), r.set(o - 1, o - 1, r.get(o - 1, o - 1) + w), Ue = r.get(o, o), k >= 0) {
          for (le = T >= 0 ? T + le : T - le, u[o - 1] = Ue + le, u[o] = u[o - 1], le !== 0 && (u[o] = Ue - Oe / le), i[o - 1] = 0, i[o] = 0, Ue = r.get(o, o - 1), Z = Math.abs(Ue) + Math.abs(le), T = Ue / Z, k = le / Z, ge = Math.sqrt(T * T + k * k), T = T / ge, k = k / ge, re = o - 1; re < d; re++) le = r.get(o - 1, re), r.set(o - 1, re, k * le + T * r.get(o, re)), r.set(o, re, k * r.get(o, re) - T * le);
          for (M = 0; M <= o; M++) le = r.get(M, o - 1), r.set(M, o - 1, k * le + T * r.get(M, o)), r.set(M, o, k * r.get(M, o) - T * le);
          for (M = b; M <= v; M++) le = a.get(M, o - 1), a.set(M, o - 1, k * le + T * a.get(M, o)), a.set(M, o, k * a.get(M, o) - T * le);
        } else u[o - 1] = Ue + T, u[o] = Ue + T, i[o - 1] = le, i[o] = -le;
        o = o - 2, Se = 0;
      } else {
        if (Ue = r.get(o, o), ft = 0, Oe = 0, Qe < o && (ft = r.get(o - 1, o - 1), Oe = r.get(o, o - 1) * r.get(o - 1, o)), Se === 10) {
          for (w += Ue, M = b; M <= o; M++) r.set(M, M, r.get(M, M) - Ue);
          Z = Math.abs(r.get(o, o - 1)) + Math.abs(r.get(o - 1, o - 2)), Ue = ft = 0.75 * Z, Oe = -0.4375 * Z * Z;
        }
        if (Se === 30 && (Z = (ft - Ue) / 2, Z = Z * Z + Oe, Z > 0)) {
          for (Z = Math.sqrt(Z), ft < Ue && (Z = -Z), Z = Ue - Oe / ((ft - Ue) / 2 + Z), M = b; M <= o; M++) r.set(M, M, r.get(M, M) - Z);
          w += Z, Ue = ft = Oe = 0.964;
        }
        for (Se = Se + 1, Ke = o - 2; Ke >= Qe && (le = r.get(Ke, Ke), ge = Ue - le, Z = ft - le, T = (ge * Z - Oe) / r.get(Ke + 1, Ke) + r.get(Ke, Ke + 1), k = r.get(Ke + 1, Ke + 1) - le - ge - Z, ge = r.get(Ke + 2, Ke + 1), Z = Math.abs(T) + Math.abs(k) + Math.abs(ge), T = T / Z, k = k / Z, ge = ge / Z, !(Ke === Qe || Math.abs(r.get(Ke, Ke - 1)) * (Math.abs(k) + Math.abs(ge)) < x * (Math.abs(T) * (Math.abs(r.get(Ke - 1, Ke - 1)) + Math.abs(le) + Math.abs(r.get(Ke + 1, Ke + 1)))))); ) Ke--;
        for (M = Ke + 2; M <= o; M++) r.set(M, M - 2, 0), M > Ke + 2 && r.set(M, M - 3, 0);
        for (Ee = Ke; Ee <= o - 1 && ($e = Ee !== o - 1, Ee !== Ke && (T = r.get(Ee, Ee - 1), k = r.get(Ee + 1, Ee - 1), ge = $e ? r.get(Ee + 2, Ee - 1) : 0, Ue = Math.abs(T) + Math.abs(k) + Math.abs(ge), Ue !== 0 && (T = T / Ue, k = k / Ue, ge = ge / Ue)), Ue !== 0); Ee++) if (Z = Math.sqrt(T * T + k * k + ge * ge), T < 0 && (Z = -Z), Z !== 0) {
          for (Ee !== Ke ? r.set(Ee, Ee - 1, -Z * Ue) : Qe !== Ke && r.set(Ee, Ee - 1, -r.get(Ee, Ee - 1)), T = T + Z, Ue = T / Z, ft = k / Z, le = ge / Z, k = k / T, ge = ge / T, re = Ee; re < d; re++) T = r.get(Ee, re) + k * r.get(Ee + 1, re), $e && (T = T + ge * r.get(Ee + 2, re), r.set(Ee + 2, re, r.get(Ee + 2, re) - T * le)), r.set(Ee, re, r.get(Ee, re) - T * Ue), r.set(Ee + 1, re, r.get(Ee + 1, re) - T * ft);
          for (M = 0; M <= Math.min(o, Ee + 3); M++) T = Ue * r.get(M, Ee) + ft * r.get(M, Ee + 1), $e && (T = T + le * r.get(M, Ee + 2), r.set(M, Ee + 2, r.get(M, Ee + 2) - T * ge)), r.set(M, Ee, r.get(M, Ee) - T), r.set(M, Ee + 1, r.get(M, Ee + 1) - T * k);
          for (M = b; M <= v; M++) T = Ue * a.get(M, Ee) + ft * a.get(M, Ee + 1), $e && (T = T + le * a.get(M, Ee + 2), a.set(M, Ee + 2, a.get(M, Ee + 2) - T * ge)), a.set(M, Ee, a.get(M, Ee) - T), a.set(M, Ee + 1, a.get(M, Ee + 1) - T * k);
        }
      }
    }
    if (R !== 0) {
      for (o = d - 1; o >= 0; o--) if (T = u[o], k = i[o], k === 0) for (Qe = o, r.set(o, o, 1), M = o - 1; M >= 0; M--) {
        for (Oe = r.get(M, M) - T, ge = 0, re = Qe; re <= o; re++) ge = ge + r.get(M, re) * r.get(re, o);
        if (i[M] < 0) le = Oe, Z = ge;
        else if (Qe = M, i[M] === 0 ? r.set(M, o, Oe !== 0 ? -ge / Oe : -ge / (x * R)) : (Ue = r.get(M, M + 1), ft = r.get(M + 1, M), k = (u[M] - T) * (u[M] - T) + i[M] * i[M], xt = (Ue * Z - le * ge) / k, r.set(M, o, xt), r.set(M + 1, o, Math.abs(Ue) > Math.abs(le) ? (-ge - Oe * xt) / Ue : (-Z - ft * xt) / le)), xt = Math.abs(r.get(M, o)), x * xt * xt > 1) for (re = M; re <= o; re++) r.set(re, o, r.get(re, o) / xt);
      }
      else if (k < 0) for (Qe = o - 1, Math.abs(r.get(o, o - 1)) > Math.abs(r.get(o - 1, o)) ? (r.set(o - 1, o - 1, k / r.get(o, o - 1)), r.set(o - 1, o, -(r.get(o, o) - T) / r.get(o, o - 1))) : (it = be(0, -r.get(o - 1, o), r.get(o - 1, o - 1) - T, k), r.set(o - 1, o - 1, it[0]), r.set(o - 1, o, it[1])), r.set(o, o - 1, 0), r.set(o, o, 1), M = o - 2; M >= 0; M--) {
        for (A = 0, ie = 0, re = Qe; re <= o; re++) A = A + r.get(M, re) * r.get(re, o - 1), ie = ie + r.get(M, re) * r.get(re, o);
        if (Oe = r.get(M, M) - T, i[M] < 0) le = Oe, ge = A, Z = ie;
        else if (Qe = M, i[M] === 0 ? (it = be(-A, -ie, Oe, k), r.set(M, o - 1, it[0]), r.set(M, o, it[1])) : (Ue = r.get(M, M + 1), ft = r.get(M + 1, M), je = (u[M] - T) * (u[M] - T) + i[M] * i[M] - k * k, oe = (u[M] - T) * 2 * k, je === 0 && oe === 0 && (je = x * R * (Math.abs(Oe) + Math.abs(k) + Math.abs(Ue) + Math.abs(ft) + Math.abs(le))), it = be(Ue * ge - le * A + k * ie, Ue * Z - le * ie - k * A, je, oe), r.set(M, o - 1, it[0]), r.set(M, o, it[1]), Math.abs(Ue) > Math.abs(le) + Math.abs(k) ? (r.set(M + 1, o - 1, (-A - Oe * r.get(M, o - 1) + k * r.get(M, o)) / Ue), r.set(M + 1, o, (-ie - Oe * r.get(M, o) - k * r.get(M, o - 1)) / Ue)) : (it = be(-ge - ft * r.get(M, o - 1), -Z - ft * r.get(M, o), le, k), r.set(M + 1, o - 1, it[0]), r.set(M + 1, o, it[1]))), xt = Math.max(Math.abs(r.get(M, o - 1)), Math.abs(r.get(M, o))), x * xt * xt > 1) for (re = M; re <= o; re++) r.set(re, o - 1, r.get(re, o - 1) / xt), r.set(re, o, r.get(re, o) / xt);
      }
      for (M = 0; M < d; M++) if (M < b || M > v) for (re = M; re < d; re++) a.set(M, re, r.get(M, re));
      for (re = d - 1; re >= b; re--) for (M = b; M <= v; M++) {
        for (le = 0, Ee = b; Ee <= Math.min(re, v); Ee++) le = le + a.get(M, Ee) * r.get(Ee, re);
        a.set(M, re, le);
      }
    }
  }
  function be(d, i, u, a) {
    let r, o;
    return Math.abs(u) > Math.abs(a) ? (r = a / u, o = u + r * a, [(d + r * i) / o, (i - r * d) / o]) : (r = u / a, o = a + r * u, [(r * d + i) / o, (r * i - d) / o]);
  }
  class Ze {
    constructor(i) {
      if (i = qt.checkMatrix(i), !i.isSymmetric()) throw new Error("Matrix is not symmetric");
      let u = i, a = u.rows, r = new H(a, a), o = true, b, v, x;
      for (v = 0; v < a; v++) {
        let w = 0;
        for (x = 0; x < v; x++) {
          let R = 0;
          for (b = 0; b < x; b++) R += r.get(x, b) * r.get(v, b);
          R = (u.get(v, x) - R) / r.get(x, x), r.set(v, x, R), w = w + R * R;
        }
        for (w = u.get(v, v) - w, o && (o = w > 0), r.set(v, v, Math.sqrt(Math.max(w, 0))), x = v + 1; x < a; x++) r.set(v, x, 0);
      }
      this.L = r, this.positiveDefinite = o;
    }
    isPositiveDefinite() {
      return this.positiveDefinite;
    }
    solve(i) {
      i = qt.checkMatrix(i);
      let u = this.L, a = u.rows;
      if (i.rows !== a) throw new Error("Matrix dimensions do not match");
      if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
      let r = i.columns, o = i.clone(), b, v, x;
      for (x = 0; x < a; x++) for (v = 0; v < r; v++) {
        for (b = 0; b < x; b++) o.set(x, v, o.get(x, v) - o.get(b, v) * u.get(x, b));
        o.set(x, v, o.get(x, v) / u.get(x, x));
      }
      for (x = a - 1; x >= 0; x--) for (v = 0; v < r; v++) {
        for (b = x + 1; b < a; b++) o.set(x, v, o.get(x, v) - o.get(b, v) * u.get(b, x));
        o.set(x, v, o.get(x, v) / u.get(x, x));
      }
      return o;
    }
    get lowerTriangularMatrix() {
      return this.L;
    }
  }
  class Rl {
    constructor(i, u = {}) {
      i = qt.checkMatrix(i);
      let { Y: a } = u;
      const { scaleScores: r = false, maxIterations: o = 1e3, terminationCriteria: b = 1e-10 } = u;
      let v;
      if (a) {
        if (m.isAnyArray(a) && typeof a[0] == "number" ? a = H.columnVector(a) : a = qt.checkMatrix(a), a.rows !== i.rows) throw new Error("Y should have the same number of rows as X");
        v = a.getColumnVector(0);
      } else v = i.getColumnVector(0);
      let x = 1, w, R, T, k;
      for (let ge = 0; ge < o && x > b; ge++) T = i.transpose().mmul(v).div(v.transpose().mmul(v).get(0, 0)), T = T.div(T.norm()), w = i.mmul(T).div(T.transpose().mmul(T).get(0, 0)), ge > 0 && (x = w.clone().sub(k).pow(2).sum()), k = w.clone(), a ? (R = a.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), R = R.div(R.norm()), v = a.mmul(R).div(R.transpose().mmul(R).get(0, 0))) : v = w;
      if (a) {
        let ge = i.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0));
        ge = ge.div(ge.norm());
        let Z = i.clone().sub(w.clone().mmul(ge.transpose())), le = v.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), Se = a.clone().sub(w.clone().mulS(le.get(0, 0)).mmul(R.transpose()));
        this.t = w, this.p = ge.transpose(), this.w = T.transpose(), this.q = R, this.u = v, this.s = w.transpose().mmul(w), this.xResidual = Z, this.yResidual = Se, this.betas = le;
      } else this.w = T.transpose(), this.s = w.transpose().mmul(w).sqrt(), r ? this.t = w.clone().div(this.s.get(0, 0)) : this.t = w, this.xResidual = i.sub(w.mmul(T.transpose()));
    }
  }
  return et.AbstractMatrix = O, et.CHO = Ze, et.CholeskyDecomposition = Ze, et.DistanceMatrix = te, et.EVD = kt, et.EigenvalueDecomposition = kt, et.LU = Ye, et.LuDecomposition = Ye, et.Matrix = H, et.MatrixColumnSelectionView = gt, et.MatrixColumnView = qe, et.MatrixFlipColumnView = tl, et.MatrixFlipRowView = $t, et.MatrixRowSelectionView = Mt, et.MatrixRowView = ll, et.MatrixSelectionView = Zt, et.MatrixSubView = Lt, et.MatrixTransposeView = Gt, et.NIPALS = Rl, et.Nipals = Rl, et.QR = ul, et.QrDecomposition = ul, et.SVD = yt, et.SingularValueDecomposition = yt, et.SymmetricMatrix = W, et.WrapperMatrix1D = al, et.WrapperMatrix2D = qt, et.correlation = Yl, et.covariance = Gl, et.default = H, et.determinant = sl, et.inverse = on, et.linearDependencies = Kt, et.pseudoInverse = hn, et.solve = Bn, et.wrap = de, et;
}
var Qs = H0();
const zm = l0(Qs), Z0 = Qs.EigenvalueDecomposition, Am = Qs.Matrix;
zm.Matrix ? zm.Matrix : Qs.Matrix;
const Dm = Qs.inverse;
function K0(m, y = 10, S = false) {
  const { K: p, M: _, numDOF: D } = m, N = new Am(p), U = new Am(_), B = 1e-10;
  for (let Ne = 0; Ne < D; Ne++) U.set(Ne, Ne, U.get(Ne, Ne) + B);
  let E;
  try {
    E = Dm(U);
  } catch {
    for (let Ne = 0; Ne < D; Ne++) U.set(Ne, Ne, U.get(Ne, Ne) + 1e-6);
    E = Dm(U);
  }
  const X = E.mmul(N), L = X.add(X.transpose()).mul(0.5), F = new Z0(L), he = F.realEigenvalues.map((Ne, P) => ({ idx: P, val: Ne }));
  he.sort((Ne, P) => Ne.val - P.val);
  const ce = 1e-4, I = he.filter((Ne) => Ne.val > ce), ve = I.slice(0, Math.min(y, I.length)), we = ve.map((Ne) => Ne.val), xe = we.map((Ne) => Math.sqrt(Math.max(0, Ne)) / (2 * Math.PI));
  let Je;
  if (S) {
    const Ne = F.eigenvectorMatrix;
    Je = ve.map((P) => Ne.getColumn(P.idx));
  }
  return { eigenvalues: we, frequencies: xe, eigenvectors: Je };
}
const J0 = "modulepreload", k0 = function(m) {
  return "/multi-modal-tuning/" + m;
}, Om = {}, F0 = function(y, S, p) {
  let _ = Promise.resolve();
  if (S && S.length > 0) {
    let B = function(E) {
      return Promise.all(E.map((X) => Promise.resolve(X).then((L) => ({ status: "fulfilled", value: L }), (L) => ({ status: "rejected", reason: L }))));
    };
    document.getElementsByTagName("link");
    const N = document.querySelector("meta[property=csp-nonce]"), U = (N == null ? void 0 : N.nonce) || (N == null ? void 0 : N.getAttribute("nonce"));
    _ = B(S.map((E) => {
      if (E = k0(E), E in Om) return;
      Om[E] = true;
      const X = E.endsWith(".css"), L = X ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${E}"]${L}`)) return;
      const F = document.createElement("link");
      if (F.rel = X ? "stylesheet" : J0, X || (F.as = "script"), F.crossOrigin = "", F.href = E, U && F.setAttribute("nonce", U), document.head.appendChild(F), X) return new Promise((ue, he) => {
        F.addEventListener("load", ue), F.addEventListener("error", () => he(new Error(`Unable to preload CSS for ${E}`)));
      });
    }));
  }
  function D(N) {
    const U = new Event("vite:preloadError", { cancelable: true });
    if (U.payload = N, window.dispatchEvent(U), !U.defaultPrevented) throw N;
  }
  return _.then((N) => {
    for (const U of N || []) U.status === "rejected" && D(U.reason);
    return y().catch(D);
  });
};
function Vm(m, y) {
  return new Promise((S) => {
    m.addEventListener("message", function p({ data: _ }) {
      (_ == null ? void 0 : _.type) === y && (m.removeEventListener("message", p), S(_));
    });
  });
}
Vm(self, "wasm_bindgen_worker_init").then(async ({ init: m, receiver: y }) => {
  const S = await F0(() => Promise.resolve().then(() => m1), void 0);
  await S.default(m), postMessage({ type: "wasm_bindgen_worker_ready" }), S.wbg_rayon_start_worker(y);
});
async function $0(m, y, S) {
  if (S.numThreads() === 0) throw new Error("num_threads must be > 0.");
  const p = { type: "wasm_bindgen_worker_init", init: { module_or_path: m, memory: y }, receiver: S.receiver() };
  await Promise.all(Array.from({ length: S.numThreads() }, async () => {
    const _ = new Worker(new URL("/multi-modal-tuning/assets/workerHelpers-BsCiD9Tk.js", import.meta.url), { type: "module" });
    return _.postMessage(p), await Vm(_, "wasm_bindgen_worker_ready"), _;
  })), S.build();
}
let ze;
function qs(m) {
  const y = ze.__externref_table_alloc();
  return ze.__wbindgen_externrefs.set(y, m), y;
}
function Un(m, y) {
  return m = m >>> 0, Hm().subarray(m / 8, m / 8 + y);
}
function W0(m, y) {
  m = m >>> 0;
  const S = P0(), p = [];
  for (let _ = m; _ < m + 4 * y; _ += 4) p.push(ze.__wbindgen_externrefs.get(S.getUint32(_, true)));
  return ze.__externref_drop_slice(m, y), p;
}
function I0(m, y) {
  return m = m >>> 0, Zm().subarray(m / 4, m / 4 + y);
}
let Us = null;
function P0() {
  return (Us === null || Us.buffer !== ze.memory.buffer) && (Us = new DataView(ze.memory.buffer)), Us;
}
let Bs = null;
function Hm() {
  return (Bs === null || Bs.buffer !== ze.memory.buffer) && (Bs = new Float64Array(ze.memory.buffer)), Bs;
}
function wc(m, y) {
  return m = m >>> 0, n1(m, y);
}
let Ls = null;
function Zm() {
  return (Ls === null || Ls.buffer !== ze.memory.buffer) && (Ls = new Uint32Array(ze.memory.buffer)), Ls;
}
let Gs = null;
function e1() {
  return (Gs === null || Gs.buffer !== ze.memory.buffer) && (Gs = new Uint8Array(ze.memory.buffer)), Gs;
}
function t1(m, y) {
  try {
    return m.apply(this, y);
  } catch (S) {
    const p = qs(S);
    ze.__wbindgen_exn_store(p);
  }
}
function eu(m) {
  return m == null;
}
function zc(m, y) {
  const S = y(m.length * 4, 4) >>> 0;
  return Zm().set(m, S / 4), Ol = m.length, S;
}
function ea(m, y) {
  const S = y(m.length * 8, 8) >>> 0;
  return Hm().set(m, S / 8), Ol = m.length, S;
}
let Ys = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : void 0;
Ys && Ys.decode();
const l1 = 2146435072;
let xc = 0;
function n1(m, y) {
  return xc += y, xc >= l1 && (Ys = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Ys.decode(), xc = y), Ys.decode(e1().slice(m, m + y));
}
let Ol = 0;
const Rm = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((m) => ze.__wbg_fem3dresult_free(m >>> 0, 1)), qm = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((m) => ze.__wbg_wbg_rayon_poolbuilder_free(m >>> 0, 1));
class Ga {
  static __wrap(y) {
    y = y >>> 0;
    const S = Object.create(Ga.prototype);
    return S.__wbg_ptr = y, Rm.register(S, S.__wbg_ptr, S), S;
  }
  __destroy_into_raw() {
    const y = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Rm.unregister(this), y;
  }
  free() {
    const y = this.__destroy_into_raw();
    ze.__wbg_fem3dresult_free(y, 0);
  }
  get_mode_type(y) {
    return ze.fem3dresult_get_mode_type(this.__wbg_ptr, y) >>> 0;
  }
  get_mode_index(y) {
    return ze.fem3dresult_get_mode_index(this.__wbg_ptr, y) >>> 0;
  }
  get_mode_types() {
    const y = ze.fem3dresult_get_mode_types(this.__wbg_ptr);
    var S = W0(y[0], y[1]).slice();
    return ze.__wbindgen_free(y[0], y[1] * 4, 4), S;
  }
  get_frequencies() {
    const y = ze.fem3dresult_get_frequencies(this.__wbg_ptr);
    var S = Un(y[0], y[1]).slice();
    return ze.__wbindgen_free(y[0], y[1] * 8, 8), S;
  }
  get_mode_numbers() {
    const y = ze.fem3dresult_get_mode_numbers(this.__wbg_ptr);
    var S = I0(y[0], y[1]).slice();
    return ze.__wbindgen_free(y[0], y[1] * 4, 4), S;
  }
  torsional_frequencies() {
    const y = ze.fem3dresult_torsional_frequencies(this.__wbg_ptr);
    var S = Un(y[0], y[1]).slice();
    return ze.__wbindgen_free(y[0], y[1] * 8, 8), S;
  }
  vertical_bending_frequencies() {
    const y = ze.fem3dresult_vertical_bending_frequencies(this.__wbg_ptr);
    var S = Un(y[0], y[1]).slice();
    return ze.__wbindgen_free(y[0], y[1] * 8, 8), S;
  }
  num_modes() {
    return ze.fem3dresult_num_modes(this.__wbg_ptr) >>> 0;
  }
}
Symbol.dispose && (Ga.prototype[Symbol.dispose] = Ga.prototype.free);
function a1(m, y, S, p, _, D, N, U, B, E, X, L) {
  const F = ea(m, ze.__wbindgen_malloc), ue = Ol, he = ea(p, ze.__wbindgen_malloc), ce = Ol, I = ze.batch_compute_fitness(F, ue, y, S, he, ce, _, D, N, U, B, E, X, L);
  var ve = Un(I[0], I[1]).slice();
  return ze.__wbindgen_free(I[0], I[1] * 8, 8), ve;
}
function s1(m, y, S, p, _, D, N) {
  const U = ea(m, ze.__wbindgen_malloc), B = Ol, E = ze.compute_frequencies(U, B, y, S, p, _, D, N);
  var X = Un(E[0], E[1]).slice();
  return ze.__wbindgen_free(E[0], E[1] * 8, 8), X;
}
function i1(m, y, S, p, _, D, N, U) {
  const B = ea(m, ze.__wbindgen_malloc), E = Ol, X = zc(y, ze.__wbindgen_malloc), L = Ol, F = ze.compute_frequencies_3d(B, E, X, L, S, p, _, D, N, U);
  var ue = Un(F[0], F[1]).slice();
  return ze.__wbindgen_free(F[0], F[1] * 8, 8), ue;
}
function u1(m, y, S, p, _, D, N, U, B, E, X) {
  const L = ea(m, ze.__wbindgen_malloc), F = Ol, ue = zc(y, ze.__wbindgen_malloc), he = Ol, ce = ze.compute_frequencies_3d_classified(L, F, ue, he, S, p, _, D, N, U, B, E, X);
  var I = Un(ce[0], ce[1]).slice();
  return ze.__wbindgen_free(ce[0], ce[1] * 8, 8), I;
}
function r1(m, y, S, p, _, D, N, U, B, E, X) {
  const L = ea(m, ze.__wbindgen_malloc), F = Ol, ue = zc(y, ze.__wbindgen_malloc), he = Ol, ce = ze.compute_frequencies_3d_full(L, F, ue, he, S, p, _, D, N, U, B, E, X);
  return Ga.__wrap(ce);
}
function Km(m, y, S, p, _, D, N, U, B) {
  const E = ea(m, ze.__wbindgen_malloc), X = Ol, L = ze.compute_frequencies_from_genes(E, X, y, S, p, _, D, N, U, B);
  var F = Un(L[0], L[1]).slice();
  return ze.__wbindgen_free(L[0], L[1] * 8, 8), F;
}
function Jm(m) {
  return ze.initThreadPool(m);
}
class Ya {
  static __wrap(y) {
    y = y >>> 0;
    const S = Object.create(Ya.prototype);
    return S.__wbg_ptr = y, qm.register(S, S.__wbg_ptr, S), S;
  }
  __destroy_into_raw() {
    const y = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qm.unregister(this), y;
  }
  free() {
    const y = this.__destroy_into_raw();
    ze.__wbg_wbg_rayon_poolbuilder_free(y, 0);
  }
  numThreads() {
    return ze.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr) >>> 0;
  }
  build() {
    ze.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
  }
  receiver() {
    return ze.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr) >>> 0;
  }
}
Symbol.dispose && (Ya.prototype[Symbol.dispose] = Ya.prototype.free);
function c1(m) {
  ze.wbg_rayon_start_worker(m);
}
const o1 = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function f1(m, y) {
  if (typeof Response == "function" && m instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(m, y);
    } catch (p) {
      if (m.ok && o1.has(m.type) && m.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", p);
      else throw p;
    }
    const S = await m.arrayBuffer();
    return await WebAssembly.instantiate(S, y);
  } else {
    const S = await WebAssembly.instantiate(m, y);
    return S instanceof WebAssembly.Instance ? { instance: S, module: m } : S;
  }
}
function km(m) {
  const y = {};
  return y.wbg = {}, y.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(S) {
    return S === void 0;
  }, y.wbg.__wbg___wbindgen_memory_a342e963fbcabd68 = function() {
    return ze.memory;
  }, y.wbg.__wbg___wbindgen_module_967adef62ea6cbf8 = function() {
    return uu.__wbindgen_wasm_module;
  }, y.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(S, p) {
    throw new Error(wc(S, p));
  }, y.wbg.__wbg_call_abb4ff46ce38be40 = function() {
    return t1(function(S, p) {
      return S.call(p);
    }, arguments);
  }, y.wbg.__wbg_instanceof_Window_b5cf7783caa68180 = function(S) {
    let p;
    try {
      p = S instanceof Window;
    } catch {
      p = false;
    }
    return p;
  }, y.wbg.__wbg_log_1d990106d99dacb7 = function(S) {
    console.log(S);
  }, y.wbg.__wbg_new_no_args_cb138f77cf6151ee = function(S, p) {
    return new Function(wc(S, p));
  }, y.wbg.__wbg_startWorkers_2ca11761e08ff5d5 = function(S, p, _) {
    return $0(S, p, Ya.__wrap(_));
  }, y.wbg.__wbg_static_accessor_GLOBAL_769e6b65d6557335 = function() {
    const S = typeof global > "u" ? null : global;
    return eu(S) ? 0 : qs(S);
  }, y.wbg.__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1 = function() {
    const S = typeof globalThis > "u" ? null : globalThis;
    return eu(S) ? 0 : qs(S);
  }, y.wbg.__wbg_static_accessor_SELF_08f5a74c69739274 = function() {
    const S = typeof self > "u" ? null : self;
    return eu(S) ? 0 : qs(S);
  }, y.wbg.__wbg_static_accessor_WINDOW_a8924b26aa92d024 = function() {
    const S = typeof window > "u" ? null : window;
    return eu(S) ? 0 : qs(S);
  }, y.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(S, p) {
    return wc(S, p);
  }, y.wbg.__wbindgen_init_externref_table = function() {
    const S = ze.__wbindgen_externrefs, p = S.grow(4);
    S.set(0, void 0), S.set(p + 0, void 0), S.set(p + 1, null), S.set(p + 2, true), S.set(p + 3, false);
  }, y.wbg.memory = m || new WebAssembly.Memory({ initial: 18, maximum: 16384, shared: true }), y;
}
function Fm(m, y, S) {
  if (ze = m.exports, uu.__wbindgen_wasm_module = y, Us = null, Bs = null, Ls = null, Gs = null, typeof S < "u" && (typeof S != "number" || S === 0 || S % 65536 !== 0)) throw "invalid stack size";
  return ze.__wbindgen_start(S), ze;
}
function h1(m, y) {
  if (ze !== void 0) return ze;
  let S;
  typeof m < "u" && (Object.getPrototypeOf(m) === Object.prototype ? { module: m, memory: y, thread_stack_size: S } = m : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const p = km(y);
  m instanceof WebAssembly.Module || (m = new WebAssembly.Module(m));
  const _ = new WebAssembly.Instance(m, p);
  return Fm(_, m, S);
}
async function uu(m, y) {
  if (ze !== void 0) return ze;
  let S;
  typeof m < "u" && (Object.getPrototypeOf(m) === Object.prototype ? { module_or_path: m, memory: y, thread_stack_size: S } = m : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof m > "u" && (m = new URL("/multi-modal-tuning/assets/wasm_physics_bg-4ZGpg7iK.wasm", import.meta.url));
  const p = km(y);
  (typeof m == "string" || typeof Request == "function" && m instanceof Request || typeof URL == "function" && m instanceof URL) && (m = fetch(m));
  const { instance: _, module: D } = await f1(await m, p);
  return Fm(_, D, S);
}
const m1 = Object.freeze(Object.defineProperty({ __proto__: null, Fem3DResult: Ga, batch_compute_fitness: a1, compute_frequencies: s1, compute_frequencies_3d: i1, compute_frequencies_3d_classified: u1, compute_frequencies_3d_full: r1, compute_frequencies_from_genes: Km, default: uu, initSync: h1, initThreadPool: Jm, wbg_rayon_PoolBuilder: Ya, wbg_rayon_start_worker: c1 }, Symbol.toStringTag, { value: "Module" }));
let su = false, jc = null, Um = false, Ec = 0;
function d1() {
  try {
    return typeof SharedArrayBuffer < "u";
  } catch {
    return false;
  }
}
async function g1(m = 0) {
  su || (jc || (jc = (async () => {
    if (await uu(), d1()) try {
      const y = navigator.hardwareConcurrency || 4, S = m > 0 ? Math.min(m, y) : y;
      console.log(`Attempting to initialize thread pool with ${S} threads (maxCores=${m}, available=${y})...`), await Jm(S), Um = true, Ec = S, console.log(`WASM physics module initialized with ${S} threads`);
    } catch (y) {
      console.error("Failed to initialize thread pool:", y), y instanceof Error && (console.error("Error name:", y.name), console.error("Error message:", y.message), console.error("Error stack:", y.stack)), Um = false, Ec = 1, console.log("WASM physics module initialized (single-threaded fallback)");
    }
    else Ec = 1, console.log("WASM physics module initialized (single-threaded, SharedArrayBuffer not available)");
    su = true;
  })()), await jc);
}
function $m() {
  return su;
}
function y1(m, y, S, p, _, D, N, U, B) {
  if (!su) throw new Error("WASM not initialized. Call initWasm() first.");
  return Array.from(Km(new Float64Array(m), y, S, p, _, D, N, U, B));
}
function p1(m, y, S, p = 10, _ = 150) {
  const D = q0(m, y, S, _);
  return K0(D, p, false).frequencies;
}
function v1(m, y) {
  const S = y * 2;
  return m.length > S ? m[S] : 0;
}
function b1(m, y, S, p = 10, _ = 150, D) {
  const N = D, U = v1(m, N), B = U !== 0 ? { ...y, L: y.L - 2 * U } : y, E = m.slice(0, N * 2);
  if ($m()) return y1(E, B.L, B.b, B.h0, _, S.E, S.rho, S.nu, p);
  const X = tu(E);
  return p1(X, B, S, p, _);
}
function Nc(m, y, S, p, _ = 80) {
  const D = { L: m / 1e3, b: y / 1e3, h0: S / 1e3, hMin: S / 1e4 };
  return b1([], D, p, 1, _, 0)[0] || 0;
}
function S1(m, y, S, p, _, D, N = 1, U = 50, B = 80) {
  let E = _, X = D, L = 0, F = (E + X) / 2, ue = 0, he = 1 / 0;
  const ce = Nc(_, y, S, p, B), I = Nc(D, y, S, p, B);
  if (m >= ce) return { length: _, computedFreq: ce, iterations: 1, errorCents: Sc(ce, m) };
  if (m <= I) return { length: D, computedFreq: I, iterations: 1, errorCents: Sc(I, m) };
  for (; L < U && X - E > 0.01; ) {
    L++;
    const ve = (E + X) / 2, we = Nc(ve, y, S, p, B), xe = Sc(we, m);
    if (Math.abs(xe) < Math.abs(he) && (F = ve, ue = we, he = xe), Math.abs(xe) <= N) break;
    we > m ? E = ve : X = ve;
  }
  return { length: F, computedFreq: ue, iterations: L, errorCents: he };
}
function w1(m, y, S, p, _, D, N = 1, U = 80, B) {
  const E = [];
  for (let X = 0; X < m.length; X++) {
    const L = m[X], F = S1(L.frequency, y, S, p, _, D, N, 50, U);
    E.push({ note: { name: L.name, frequency: L.frequency, midiNumber: L.midiNumber }, targetFrequency: L.frequency, optimalLength: F.length, computedFrequency: F.computedFreq, errorCents: F.errorCents, searchIterations: F.iterations, selected: false });
  }
  return E;
}
function Bm(m, y, S, p) {
  const _ = 4.73004074, D = p.E, N = p.rho, U = y / 1e3, B = S / 1e3, E = U * Math.pow(B, 3) / 12, X = U * B, L = Math.pow(_, 2) / (2 * Math.PI * m), F = Math.sqrt(D * E / (N * X));
  return Math.sqrt(L * F) * 1e3;
}
function x1({ barWidth: m, barThickness: y, selectedMaterial: S, optimizationSettings: p, onLoadBar: _, onAddToBatch: D }) {
  const N = iu[S], [U, B] = J.useState("C4"), [E, X] = J.useState("C5"), [L, F] = J.useState("natural"), [ue, he] = J.useState(100), [ce, I] = J.useState(500), [ve, we] = J.useState(1), [xe, Je] = J.useState([]), [Ne, P] = J.useState(false), [pe, Re] = J.useState({ note: "", index: 0, total: 0 }), _e = J.useRef(false), [Me, ye] = J.useState("C4"), [Be, He] = J.useState(false), [ke, Xe] = J.useState(0), V = J.useRef(null), [$, fe] = J.useState("C5"), [Te, Ae] = J.useState(false), [j, O] = J.useState(0), se = J.useRef(null), me = J.useMemo(() => Qm(), []), H = J.useMemo(() => {
    if (!Me) return me.slice(0, 12);
    const de = Me.toUpperCase();
    return me.filter((Ye) => Ye.note.toUpperCase().startsWith(de) || Ye.note.toUpperCase().includes(de)).slice(0, 12);
  }, [Me, me]), W = J.useMemo(() => {
    if (!$) return me.slice(0, 12);
    const de = $.toUpperCase();
    return me.filter((Ye) => Ye.note.toUpperCase().startsWith(de) || Ye.note.toUpperCase().includes(de)).slice(0, 12);
  }, [$, me]), te = J.useMemo(() => A0(U, E, L), [U, E, L]), Ge = (de) => {
    ye(de), B(de), He(false);
  }, qe = (de) => {
    fe(de), X(de), Ae(false);
  }, gt = (de) => {
    ye(de), Xe(0), He(true), La(de) && B(de);
  }, tl = (de) => {
    fe(de), O(0), Ae(true), La(de) && X(de);
  }, $t = (de) => {
    de.key === "ArrowDown" ? (de.preventDefault(), Xe((Ye) => Math.min(Ye + 1, H.length - 1))) : de.key === "ArrowUp" ? (de.preventDefault(), Xe((Ye) => Math.max(Ye - 1, 0))) : de.key === "Enter" && H.length > 0 ? (de.preventDefault(), Ge(H[ke].note)) : de.key === "Escape" && He(false);
  }, ll = (de) => {
    de.key === "ArrowDown" ? (de.preventDefault(), O((Ye) => Math.min(Ye + 1, W.length - 1))) : de.key === "ArrowUp" ? (de.preventDefault(), O((Ye) => Math.max(Ye - 1, 0))) : de.key === "Enter" && W.length > 0 ? (de.preventDefault(), qe(W[j].note)) : de.key === "Escape" && Ae(false);
  }, Mt = J.useCallback(async () => {
    if (!N || te.length === 0) return;
    P(true), Je([]), _e.current = false, $m() || await g1();
    const de = (Ye, ot) => {
      if (_e.current) {
        Je(ot), P(false);
        return;
      }
      if (Ye >= te.length) {
        Je(ot), P(false);
        return;
      }
      const ul = te[Ye];
      Re({ note: ul.name, index: Ye, total: te.length });
      const yt = w1([ul], m, y, N, ue, ce, ve, p.numElements), on = [...ot, ...yt];
      Je(on), setTimeout(() => de(Ye + 1, on), 0);
    };
    setTimeout(() => de(0, []), 50);
  }, [N, te, m, y, ue, ce, ve, p.numElements]), Zt = J.useCallback(() => {
    _e.current = true;
  }, []), Lt = (de) => {
    Je((Ye) => Ye.map((ot, ul) => ul === de ? { ...ot, selected: !ot.selected } : ot));
  }, Gt = () => {
    const de = xe.every((Ye) => Ye.selected);
    Je((Ye) => Ye.map((ot) => ({ ...ot, selected: !de })));
  }, al = xe.filter((de) => de.selected).length, qt = (de) => {
    const Ye = Math.abs(de);
    return Ye <= 5 ? "error-excellent" : Ye <= 15 ? "error-good" : Ye <= 50 ? "error-ok" : "error-bad";
  };
  return J.useEffect(() => {
    if (te.length > 0 && N) {
      const de = Math.min(...te.map((yt) => yt.frequency)), Ye = Math.max(...te.map((yt) => yt.frequency)), ot = Bm(de, m, y, N) * 1.2, ul = Bm(Ye, m, y, N) * 0.8;
      he(Math.max(50, Math.floor(ul / 10) * 10)), I(Math.min(1e3, Math.ceil(ot / 10) * 10));
    }
  }, [te, N, m, y]), h.jsxs(h.Fragment, { children: [h.jsxs("div", { className: "panel", children: [h.jsx("h3", { className: "panel-title", children: "Note Range" }), h.jsxs("div", { className: "input-row", children: [h.jsxs("div", { className: "form-group", style: { position: "relative" }, children: [h.jsx("label", { className: "form-label", children: "Start Note" }), h.jsx("input", { ref: V, type: "text", className: "form-input", value: Me, onChange: (de) => gt(de.target.value), onFocus: () => He(true), onBlur: () => setTimeout(() => He(false), 150), onKeyDown: $t, placeholder: "e.g., C4" }), Be && H.length > 0 && h.jsx("div", { className: "note-suggestions", children: H.map((de, Ye) => h.jsxs("div", { className: `note-suggestion ${Ye === ke ? "selected" : ""}`, onMouseDown: () => Ge(de.note), children: [h.jsx("span", { className: "note-name", children: de.note }), h.jsxs("span", { className: "note-freq", children: [de.freq, " Hz"] })] }, de.note)) })] }), h.jsxs("div", { className: "form-group", style: { position: "relative" }, children: [h.jsx("label", { className: "form-label", children: "End Note" }), h.jsx("input", { ref: se, type: "text", className: "form-input", value: $, onChange: (de) => tl(de.target.value), onFocus: () => Ae(true), onBlur: () => setTimeout(() => Ae(false), 150), onKeyDown: ll, placeholder: "e.g., C5" }), Te && W.length > 0 && h.jsx("div", { className: "note-suggestions", children: W.map((de, Ye) => h.jsxs("div", { className: `note-suggestion ${Ye === j ? "selected" : ""}`, onMouseDown: () => qe(de.note), children: [h.jsx("span", { className: "note-name", children: de.note }), h.jsxs("span", { className: "note-freq", children: [de.freq, " Hz"] })] }, de.note)) })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Scale Type" }), h.jsxs("select", { className: "form-select", value: L, onChange: (de) => F(de.target.value), children: [h.jsx("option", { value: "chromatic", children: "Chromatic (all semitones)" }), h.jsx("option", { value: "natural", children: "Natural notes only" })] })] }), h.jsxs("div", { className: "note-preview", children: [h.jsx("span", { className: "preview-label", children: "Notes to find:" }), h.jsxs("span", { className: "preview-count", children: [te.length, " notes"] }), h.jsxs("div", { className: "preview-notes", children: [te.slice(0, 12).map((de) => h.jsx("span", { className: "preview-note", children: de.name }, de.midiNumber)), te.length > 12 && h.jsxs("span", { className: "preview-more", children: ["+", te.length - 12, " more"] })] })] })] }), h.jsxs("div", { className: "panel", children: [h.jsx("h3", { className: "panel-title", children: "Search Parameters" }), h.jsxs("div", { className: "input-row", children: [h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Min Length" }), h.jsxs("div", { className: "input-unit", children: [h.jsx("input", { type: "number", className: "form-input", value: ue, onChange: (de) => he(parseFloat(de.target.value) || 50), min: 50, max: ce - 10 }), h.jsx("span", { children: "mm" })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Max Length" }), h.jsxs("div", { className: "input-unit", children: [h.jsx("input", { type: "number", className: "form-input", value: ce, onChange: (de) => I(parseFloat(de.target.value) || 500), min: ue + 10, max: 1e3 }), h.jsx("span", { children: "mm" })] })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", children: "Tolerance" }), h.jsxs("div", { className: "input-unit", children: [h.jsx("input", { type: "number", className: "form-input", value: ve, onChange: (de) => we(parseFloat(de.target.value) || 1), min: 0.1, max: 50, step: 0.5 }), h.jsx("span", { children: "cents" })] })] })] }), Ne ? h.jsx("div", { className: "search-buttons", children: h.jsxs("button", { type: "button", className: "btn btn-danger btn-block", onClick: Zt, children: ["Stop (", pe.index + 1, "/", pe.total, ")"] }) }) : h.jsx("button", { type: "button", className: "btn btn-primary btn-block", onClick: Mt, disabled: te.length === 0, children: "Find Optimal Bar Lengths" }), xe.length > 0 && h.jsxs("div", { className: "panel results-panel", children: [h.jsxs("div", { className: "results-header", children: [h.jsx("h3", { className: "panel-title", children: "Results" }), h.jsxs("div", { className: "results-actions", children: [h.jsx("button", { className: "btn btn-sm", onClick: Gt, children: xe.every((de) => de.selected) ? "Deselect All" : "Select All" }), h.jsxs("span", { className: "selected-count", children: [al, " of ", xe.length, " selected"] })] })] }), h.jsx("div", { className: "results-table-container", children: h.jsxs("table", { className: "results-table", children: [h.jsx("thead", { children: h.jsxs("tr", { children: [h.jsx("th", { className: "col-select" }), h.jsx("th", { className: "col-note", children: "Note" }), h.jsx("th", { className: "col-freq", children: "Target (Hz)" }), h.jsx("th", { className: "col-length", children: "Length (mm)" }), h.jsx("th", { className: "col-computed", children: "Computed (Hz)" }), h.jsx("th", { className: "col-error", children: "Error" })] }) }), h.jsx("tbody", { children: xe.map((de, Ye) => h.jsxs("tr", { className: de.selected ? "selected" : "", onClick: () => Lt(Ye), children: [h.jsx("td", { className: "col-select", children: h.jsx("input", { type: "checkbox", checked: de.selected, onChange: () => Lt(Ye), onClick: (ot) => ot.stopPropagation() }) }), h.jsx("td", { className: "col-note", children: de.note.name }), h.jsx("td", { className: "col-freq", children: de.targetFrequency.toFixed(2) }), h.jsx("td", { className: "col-length", children: de.optimalLength.toFixed(2) }), h.jsx("td", { className: "col-computed", children: de.computedFrequency.toFixed(2) }), h.jsxs("td", { className: `col-error ${qt(de.errorCents)}`, children: [de.errorCents >= 0 ? "+" : "", de.errorCents.toFixed(1), "\xA2"] })] }, de.note.midiNumber)) })] }) }), al > 0 && h.jsxs("div", { className: "batch-actions", children: [h.jsxs("button", { className: "btn btn-primary", onClick: () => {
    const Ye = xe.filter((ot) => ot.selected).map((ot) => ({ barResult: ot, status: "pending" }));
    D && D(Ye);
  }, children: ["Optimize ", al, " Bar", al !== 1 ? "s" : ""] }), h.jsx("span", { className: "batch-info", children: "Transfer to batch queue in optimizer" })] })] }), xe.length === 0 && !Ne && h.jsx("div", { className: "panel empty-results", children: h.jsxs("div", { className: "empty-message", children: [h.jsx("h3", { children: "Find Optimal Bar Lengths" }), h.jsx("p", { children: 'Select a note range above and click "Find Optimal Bar Lengths" to search for the bar length that produces each target frequency.' })] }) })] });
}
function Mc(m) {
  return Math.pow(2, m / 1200);
}
function Lm(m, y) {
  return y <= 0 || m <= 0 ? 0 : 1200 * Math.log2(m / y);
}
function j1(m, y, S, p, _) {
  const D = y / S, N = Math.max(0, Math.floor(p / D)), U = Math.min(m.length - 1, Math.ceil(_ / D));
  let B = -1 / 0, E = N;
  for (let X = N; X <= U; X++) m[X] > B && (B = m[X], E = X);
  if (B < -60) return null;
  if (E > 0 && E < m.length - 1) {
    const X = m[E - 1], L = m[E], F = m[E + 1], ue = X - 2 * L + F;
    if (Math.abs(ue) > 1e-4) {
      const he = 0.5 * (X - F) / ue;
      return { frequency: (E + he) * D, magnitude: B };
    }
  }
  return { frequency: E * D, magnitude: B };
}
function E1({ targetFrequency: m, label: y, analyserNode: S, sampleRate: p, isListening: _, windowCents: D, minDecibels: N, maxDecibels: U, displayMode: B }) {
  const E = J.useRef(null), X = J.useRef(null), L = J.useRef(void 0), [F, ue] = J.useState(null), [he, ce] = J.useState(0), [I, ve] = J.useState({ width: 800, height: 200 }), we = m * Mc(-D), xe = m * Mc(D);
  J.useEffect(() => {
    const Ne = X.current;
    if (!Ne) return;
    const P = new ResizeObserver((pe) => {
      for (const Re of pe) {
        const { width: _e, height: Me } = Re.contentRect;
        if (_e > 0 && Me > 0) {
          const ye = window.devicePixelRatio || 1;
          ve({ width: Math.floor(_e * ye), height: Math.floor(Me * ye) });
        }
      }
    });
    return P.observe(Ne), () => P.disconnect();
  }, []), J.useEffect(() => {
    const Ne = E.current;
    if (!Ne || !S || !_) {
      if (Ne) {
        const Xe = Ne.getContext("2d");
        Xe && (Xe.fillStyle = "#1a1a2e", Xe.fillRect(0, 0, Ne.width, Ne.height));
      }
      return;
    }
    const P = Ne.getContext("2d");
    if (!P) return;
    const pe = S.fftSize, Re = new Float32Array(S.frequencyBinCount), _e = p / pe, Me = Math.max(0, Math.floor(we / _e)), ye = Math.min(Re.length - 1, Math.ceil(xe / _e)), Be = ye - Me;
    let He = true;
    const ke = () => {
      if (!He) return;
      const Xe = Ne.width, V = Ne.height, $ = window.devicePixelRatio || 1;
      P.setTransform($, 0, 0, $, 0, 0);
      const fe = Xe / $, Te = V / $;
      S.getFloatFrequencyData(Re), P.fillStyle = "#1a1a2e", P.fillRect(0, 0, fe, Te), P.strokeStyle = "#333355", P.lineWidth = 1;
      const Ae = [0], j = D <= 50 ? 10 : D <= 100 ? 25 : D <= 200 ? 50 : 100;
      for (let te = j; te <= D; te += j) Ae.push(-te), Ae.push(te);
      Ae.sort((te, Ge) => te - Ge), P.font = "12px monospace", P.textAlign = "center";
      for (const te of Ae) {
        const qe = (m * Mc(te) - we) / (xe - we) * fe;
        P.beginPath(), P.moveTo(qe, 0), P.lineTo(qe, Te - 25), P.stroke(), P.fillStyle = te === 0 ? "#4ade80" : "#666688", P.fillText(`${te > 0 ? "+" : ""}${te}`, qe, Te - 8);
      }
      const O = fe / Be, se = U - N;
      let me = -1 / 0;
      if (B === "peaks") for (let te = Me; te <= ye && te < Re.length; te++) Re[te] > me && (me = Re[te]);
      for (let te = Me; te <= ye && te < Re.length; te++) {
        const Ge = Re[te];
        let qe;
        if (B === "linear") qe = Math.max(0, Math.min(1, (Ge - N) / se));
        else if (B === "log") {
          const Lt = Math.max(0, Math.min(1, (Ge - N) / se));
          qe = Math.pow(Lt, 0.5);
        } else {
          const Lt = Math.max(0, Math.min(1, (Ge - N) / se));
          if (qe = Math.pow(Lt, 3), me > N) {
            const Gt = Math.max(0, Math.min(1, (me - N) / se));
            Gt > 0.01 && (qe = qe / Math.pow(Gt, 2));
          }
          qe = Math.min(1, qe);
        }
        const gt = qe * (Te - 35), tl = (te - Me) * O, $t = te * _e, ll = Lm($t, m), Mt = Math.abs(ll);
        let Zt;
        Mt < 5 ? Zt = "#4ade80" : Mt < 15 ? Zt = "#22c55e" : Mt < 30 ? Zt = "#fbbf24" : Zt = "#3b82f6", P.fillStyle = Zt, P.fillRect(tl, Te - 30 - gt, Math.max(1, O - 1), gt);
      }
      const H = j1(Re, p, pe, we, xe);
      if (H && H.magnitude > -50) {
        ue(H.frequency), ce(Lm(H.frequency, m));
        const te = (H.frequency - we) / (xe - we) * fe;
        P.strokeStyle = "#ffffff", P.lineWidth = 2, P.beginPath(), P.moveTo(te, 0), P.lineTo(te, Te - 30), P.stroke(), P.fillStyle = "#ffffff", P.font = "bold 14px monospace", P.textAlign = "center", P.fillText(`${H.frequency.toFixed(1)} Hz`, te, 20);
      } else ue(null), ce(0);
      const W = (m - we) / (xe - we) * fe;
      P.strokeStyle = "#4ade80", P.lineWidth = 2, P.setLineDash([5, 5]), P.beginPath(), P.moveTo(W, 0), P.lineTo(W, Te - 30), P.stroke(), P.setLineDash([]), L.current = requestAnimationFrame(ke);
    };
    return ke(), () => {
      He = false, L.current && cancelAnimationFrame(L.current);
    };
  }, [S, p, m, we, xe, _, I, D, N, U, B]);
  const Je = (Ne) => {
    const P = Math.abs(Ne);
    return P < 5 ? "error-excellent" : P < 15 ? "error-good" : P < 30 ? "error-ok" : "error-bad";
  };
  return h.jsxs("div", { className: "tuner-frequency-window", children: [h.jsxs("div", { className: "tuner-window-header", children: [h.jsx("span", { className: "tuner-window-label", children: y }), h.jsxs("span", { className: "tuner-window-target", children: [m.toFixed(1), " Hz"] }), F !== null && _ && h.jsxs("span", { className: `tuner-window-error ${Je(he)}`, children: [he > 0 ? "+" : "", he.toFixed(0), "\xA2"] })] }), h.jsx("div", { ref: X, className: "tuner-canvas-container", children: h.jsx("canvas", { ref: E, className: "tuner-canvas", width: I.width, height: I.height }) })] });
}
const N1 = [{ value: 2048, label: "Very Fast (2048)" }, { value: 4096, label: "Fast (4096)" }, { value: 8192, label: "Balanced (8192)" }, { value: 16384, label: "Accurate (16384)" }, { value: 32768, label: "Maximum (32768)" }];
function M1({ tuningPreset: m, fundamentalFrequency: y, onTuningPresetChange: S, onFundamentalChange: p }) {
  var _a;
  const [_, D] = J.useState(false), [N, U] = J.useState(null), [B, E] = J.useState(null), [X, L] = J.useState(null), F = J.useRef(null), [ue, he] = J.useState(8192), [ce, I] = J.useState(0.2), [ve, we] = J.useState(-100), [xe, Je] = J.useState(-10), [Ne, P] = J.useState(100), [pe, Re] = J.useState("peaks"), [_e, Me] = J.useState(""), [ye, Be] = J.useState(false), [He, ke] = J.useState(0), Xe = J.useRef(null), V = J.useMemo(() => Qm(), []), $ = J.useMemo(() => {
    if (!_e) return V.slice(0, 12);
    const W = _e.toUpperCase();
    return V.filter((te) => te.note.toUpperCase().startsWith(W) || te.note.toUpperCase().includes(W)).slice(0, 12);
  }, [_e, V]);
  J.useEffect(() => {
    const W = z0(y), te = La(W);
    te && Math.abs(1200 * Math.log2(y / te)) < 5 && Me(W);
  }, [y]);
  const fe = (W, te) => {
    Me(W), p(Math.round(te * 10) / 10), Be(false);
  }, Te = (W) => {
    if (W.key === "ArrowDown") W.preventDefault(), ke((te) => Math.min(te + 1, $.length - 1));
    else if (W.key === "ArrowUp") W.preventDefault(), ke((te) => Math.max(te - 1, 0));
    else if (W.key === "Enter" && $.length > 0) {
      W.preventDefault();
      const te = $[He];
      fe(te.note, te.freq);
    } else W.key === "Escape" && Be(false);
  }, Ae = (W) => {
    Me(W), ke(0), Be(true);
    const te = La(W);
    te && te >= 20 && te <= 4e3 && p(Math.round(te * 10) / 10);
  }, O = ((_a = Ua.find((W) => W.name === m)) == null ? void 0 : _a.ratios) ?? [1, 4, 10], se = nu(O, y), me = J.useCallback(async () => {
    try {
      L(null);
      const W = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
      F.current = W;
      const te = new AudioContext(), Ge = te.createAnalyser();
      Ge.fftSize = ue, Ge.smoothingTimeConstant = ce, Ge.minDecibels = ve, Ge.maxDecibels = xe, te.createMediaStreamSource(W).connect(Ge), U(te), E(Ge), D(true), console.log("Tuner started:", { sampleRate: te.sampleRate, fftSize: Ge.fftSize, frequencyBinCount: Ge.frequencyBinCount });
    } catch (W) {
      console.error("Failed to access microphone:", W), L("Failed to access microphone. Please ensure microphone permissions are granted.");
    }
  }, [ue, ce, ve, xe]), H = J.useCallback(() => {
    F.current && (F.current.getTracks().forEach((W) => W.stop()), F.current = null), N && (N.close(), U(null)), E(null), D(false);
  }, [N]);
  return J.useEffect(() => {
    B && (B.smoothingTimeConstant = ce, B.minDecibels = ve, B.maxDecibels = xe);
  }, [B, ce, ve, xe]), J.useEffect(() => {
    if (_ && N) {
      H();
      const W = setTimeout(() => {
        me();
      }, 100);
      return () => clearTimeout(W);
    }
  }, [ue]), J.useEffect(() => () => {
    F.current && F.current.getTracks().forEach((W) => W.stop()), N && N.close();
  }, []), h.jsxs("div", { className: "tuner-tab", children: [h.jsxs("div", { className: "tuner-controls panel", children: [h.jsxs("div", { className: "tuner-controls-row", children: [h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", htmlFor: "tuner-note", children: "Note" }), h.jsxs("div", { className: "note-input-container", children: [h.jsx("input", { ref: Xe, id: "tuner-note", type: "text", className: "form-input note-input", value: _e, onChange: (W) => Ae(W.target.value), onFocus: () => Be(true), onBlur: () => setTimeout(() => Be(false), 150), onKeyDown: Te, placeholder: "F4", "aria-label": "Note name" }), ye && $.length > 0 && h.jsx("div", { className: "note-suggestions", children: $.map((W, te) => h.jsxs("div", { className: `note-suggestion ${te === He ? "selected" : ""}`, onMouseDown: () => fe(W.note, W.freq), children: [h.jsx("span", { className: "note-name", children: W.note }), h.jsxs("span", { className: "note-freq", children: [W.freq, " Hz"] })] }, W.note)) })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", htmlFor: "tuner-fundamental", children: "Frequency (f1)" }), h.jsxs("div", { className: "input-unit", children: [h.jsx("input", { id: "tuner-fundamental", type: "number", className: "form-input", value: y, onChange: (W) => p(parseFloat(W.target.value) || 0), min: 20, max: 2e3, step: 0.1, "aria-label": "Fundamental frequency in Hz" }), h.jsx("span", { children: "Hz" })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", htmlFor: "tuner-preset", children: "Tuning Preset" }), h.jsx("select", { id: "tuner-preset", className: "form-select", value: m, onChange: (W) => S(W.target.value), "aria-label": "Tuning preset", children: Ua.map((W) => h.jsxs("option", { value: W.name, children: [W.name, " - ", W.instrument] }, W.name)) })] }), h.jsx("div", { className: "tuner-button-group", children: _ ? h.jsx("button", { type: "button", className: "btn btn-danger", onClick: H, children: "Stop Tuner" }) : h.jsx("button", { type: "button", className: "btn btn-primary", onClick: me, children: "Start Tuner" }) }), _ && h.jsxs("div", { className: "tuner-status", children: [h.jsx("span", { className: "tuner-status-indicator" }), "Listening..."] })] }), h.jsxs("div", { className: "tuner-controls-row tuner-fft-controls", children: [h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", htmlFor: "tuner-fft-size", children: "FFT Size" }), h.jsx("select", { id: "tuner-fft-size", className: "form-select", value: ue, onChange: (W) => he(Number(W.target.value)), "aria-label": "FFT size for frequency analysis", children: N1.map((W) => h.jsx("option", { value: W.value, children: W.label }, W.value)) })] }), h.jsxs("div", { className: "form-group", children: [h.jsxs("label", { className: "form-label", htmlFor: "tuner-smoothing", children: ["Smoothing: ", ce.toFixed(2)] }), h.jsx("input", { id: "tuner-smoothing", type: "range", className: "form-range", value: ce, onChange: (W) => I(parseFloat(W.target.value)), min: 0, max: 0.99, step: 0.01, "aria-label": "Smoothing time constant" }), h.jsxs("div", { className: "form-range-labels", children: [h.jsx("span", { children: "Responsive" }), h.jsx("span", { children: "Smooth" })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsxs("label", { className: "form-label", htmlFor: "tuner-min-db", children: ["Sensitivity: ", ve, " dB"] }), h.jsx("input", { id: "tuner-min-db", type: "range", className: "form-range", value: ve, onChange: (W) => we(parseInt(W.target.value)), min: -120, max: -40, step: 5, "aria-label": "Minimum decibels threshold" }), h.jsxs("div", { className: "form-range-labels", children: [h.jsx("span", { children: "Very Sensitive" }), h.jsx("span", { children: "Less Sensitive" })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsxs("label", { className: "form-label", htmlFor: "tuner-max-db", children: ["Ceiling: ", xe, " dB"] }), h.jsx("input", { id: "tuner-max-db", type: "range", className: "form-range", value: xe, onChange: (W) => Je(parseInt(W.target.value)), min: -30, max: 0, step: 5, "aria-label": "Maximum decibels ceiling" }), h.jsxs("div", { className: "form-range-labels", children: [h.jsx("span", { children: "Quieter" }), h.jsx("span", { children: "Louder" })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsxs("label", { className: "form-label", htmlFor: "tuner-window-cents", children: ["Window: \xB1", Ne, "\xA2"] }), h.jsx("input", { id: "tuner-window-cents", type: "range", className: "form-range", value: Ne, onChange: (W) => P(parseInt(W.target.value)), min: 25, max: 400, step: 25, "aria-label": "Frequency window width in cents" }), h.jsxs("div", { className: "form-range-labels", children: [h.jsx("span", { children: "Narrow" }), h.jsx("span", { children: "Wide" })] })] }), h.jsxs("div", { className: "form-group", children: [h.jsx("label", { className: "form-label", htmlFor: "tuner-display-mode", children: "Display" }), h.jsxs("select", { id: "tuner-display-mode", className: "form-select", value: pe, onChange: (W) => Re(W.target.value), "aria-label": "Display mode for spectrum", children: [h.jsx("option", { value: "peaks", children: "Peaks (auto-gain)" }), h.jsx("option", { value: "log", children: "Logarithmic" }), h.jsx("option", { value: "linear", children: "Linear" })] })] })] }), X && h.jsx("div", { className: "tuner-error", children: X })] }), h.jsx("div", { className: "tuner-windows", children: se.map((W, te) => h.jsx(E1, { targetFrequency: W, label: `f${te + 1} (${O[te]}x)`, analyserNode: B, sampleRate: (N == null ? void 0 : N.sampleRate) ?? 44100, isListening: _, windowCents: Ne, minDecibels: ve, maxDecibels: xe, displayMode: pe }, te)) }), !_ && !X && h.jsxs("div", { className: "tuner-instructions", children: [h.jsx("h3", { children: "Spectrum Analyzer Tuner" }), h.jsx("p", { children: 'Click "Start Tuner" to begin analyzing audio from your microphone.' }), h.jsx("p", { children: "Each window shows a frequency range of +/- 100 cents around the target frequency." }), h.jsx("p", { children: "Strike your bar and watch the spectrum to see how close it is to the target frequencies." })] })] });
}
function _1({ activeTab: m, onTabChange: y, disabled: S = false }) {
  return h.jsxs("div", { className: "tab-switcher", children: [h.jsx("button", { className: `tab-btn ${m === "optimizer" ? "active" : ""}`, onClick: () => y("optimizer"), disabled: S, children: "Single Bar Optimizer" }), h.jsx("button", { className: `tab-btn ${m === "rangeFinder" ? "active" : ""}`, onClick: () => y("rangeFinder"), disabled: S, children: "Bar Range Finder" }), h.jsx("button", { className: `tab-btn ${m === "tuner" ? "active" : ""}`, onClick: () => y("tuner"), disabled: S, children: "Tuner" })] });
}
function T1() {
  const [m, y] = J.useState("optimizer"), [S, p] = J.useState(350), [_, D] = J.useState(50), [N, U] = J.useState(10), [B, E] = J.useState("aluminum"), [X, L] = J.useState("1:4:10"), [F, ue] = J.useState(175), [he, ce] = J.useState(3), [I, ve] = J.useState("volume"), [we, xe] = J.useState(0.05), [Je, Ne] = J.useState(50), [P, pe] = J.useState(100), [Re, _e] = J.useState(2), [Me, ye] = J.useState(80), [Be, He] = J.useState(2), [ke, Xe] = J.useState(0), [V, $] = J.useState(0), [fe, Te] = J.useState(0), [Ae, j] = J.useState(0), [O, se] = J.useState(0), [me, H] = J.useState(0), [W, te] = J.useState(0.01), [Ge, qe] = J.useState(""), [gt, tl] = J.useState(false), [$t, ll] = J.useState([]), Mt = { tuningPreset: X, numCuts: he, penaltyType: I, penaltyWeight: we, populationSize: Je, maxGenerations: P, targetError: W, f1Priority: Re, numElements: Me, minCutWidth: Be, maxCutWidth: ke, minCutDepth: V, maxCutDepth: fe, maxLengthTrim: Ae, maxLengthExtend: O, maxCores: me }, Zt = J.useCallback((Gt) => {
    ll(Gt), y("optimizer");
  }, []), Lt = J.useCallback((Gt) => {
    if (Gt.optimizationResult) {
      if (p(Gt.barResult.optimalLength), ue(Gt.barResult.targetFrequency), Gt.optimizationResult.bestIndividual) {
        const al = lu(Gt.optimizationResult.bestIndividual.genes);
        qe(al);
      }
      ll([]), y("optimizer");
    }
  }, []);
  return h.jsxs("div", { className: "app-container", children: [h.jsx(_1, { activeTab: m, onTabChange: y, disabled: gt }), h.jsx("div", { className: "sidebar", children: h.jsx(b0, { barWidth: _, barThickness: N, onBarWidthChange: D, onBarThicknessChange: U, selectedMaterial: B, onMaterialChange: E, numCuts: he, penaltyType: I, penaltyWeight: we, populationSize: Je, maxGenerations: P, f1Priority: Re, numElements: Me, minCutWidth: Be, maxCutWidth: ke, minCutDepth: V, maxCutDepth: fe, maxLengthTrim: Ae, maxLengthExtend: O, maxCores: me, targetError: W, seedGeneCode: Ge, onNumCutsChange: ce, onPenaltyTypeChange: ve, onPenaltyWeightChange: xe, onPopulationSizeChange: Ne, onMaxGenerationsChange: pe, onF1PriorityChange: _e, onNumElementsChange: ye, onMinCutWidthChange: He, onMaxCutWidthChange: Xe, onMinCutDepthChange: $, onMaxCutDepthChange: Te, onMaxLengthTrimChange: j, onMaxLengthExtendChange: se, onMaxCoresChange: H, onTargetErrorChange: te, onSeedGeneCodeChange: qe, referenceLength: S, showSeedInput: m === "optimizer", mode: m, disabled: gt }) }), h.jsxs("div", { className: `main-content ${m === "tuner" ? "tuner-mode" : ""}`, children: [m === "optimizer" && h.jsx(T0, { barLength: S, barWidth: _, barThickness: N, onBarLengthChange: p, selectedMaterial: B, tuningPreset: X, onTuningPresetChange: L, fundamentalFrequency: F, onFundamentalChange: ue, optimizationSettings: Mt, seedGeneCode: Ge, isRunning: gt, onRunningChange: tl, batchItems: $t, onBatchItemsChange: ll }), m === "rangeFinder" && h.jsx(x1, { barWidth: _, barThickness: N, selectedMaterial: B, optimizationSettings: Mt, onLoadBar: Lt, onAddToBatch: Zt }), m === "tuner" && h.jsx(M1, { tuningPreset: X, fundamentalFrequency: F, onTuningPresetChange: L, onFundamentalChange: ue })] })] });
}
h0.createRoot(document.getElementById("root")).render(h.jsx(J.StrictMode, { children: h.jsx(T1, {}) }));
