import {
  Router
} from "./chunk-SAI37TO6.js";
import "./chunk-Y45YODVY.js";
import "./chunk-TANCBZP2.js";
import {
  Location
} from "./chunk-3452DFFK.js";
import "./chunk-AGCF4D2E.js";
import {
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  Optional,
  VERSION,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-WBEHRU3H.js";
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  catchError,
  concatMap,
  defer,
  distinctUntilChanged,
  filter,
  first,
  from,
  iif,
  map,
  mapTo,
  merge,
  mergeMap,
  of,
  pluck,
  scan,
  shareReplay,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  withLatestFrom
} from "./chunk-RSS3ODKE.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js
function e(e2, t2) {
  var n2 = {};
  for (var o2 in e2) Object.prototype.hasOwnProperty.call(e2, o2) && t2.indexOf(o2) < 0 && (n2[o2] = e2[o2]);
  if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
    var i2 = 0;
    for (o2 = Object.getOwnPropertySymbols(e2); i2 < o2.length; i2++) t2.indexOf(o2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, o2[i2]) && (n2[o2[i2]] = e2[o2[i2]]);
  }
  return n2;
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function n(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
function o(e2, t2) {
  return e2(t2 = { exports: {} }, t2.exports), t2.exports;
}
var i = o((function(e2, t2) {
  Object.defineProperty(t2, "__esModule", { value: true });
  var n2 = (function() {
    function e3() {
      var e4 = this;
      this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(t3, n3) {
        var o2 = e4.locked.get(t3);
        void 0 === o2 ? void 0 === n3 ? e4.locked.set(t3, []) : e4.locked.set(t3, [n3]) : void 0 !== n3 && (o2.unshift(n3), e4.locked.set(t3, o2));
      }, this.isLocked = function(t3) {
        return e4.locked.has(t3);
      }, this.lock = function(t3) {
        return new Promise((function(n3, o2) {
          e4.isLocked(t3) ? e4.addToLocked(t3, n3) : (e4.addToLocked(t3), n3());
        }));
      }, this.unlock = function(t3) {
        var n3 = e4.locked.get(t3);
        if (void 0 !== n3 && 0 !== n3.length) {
          var o2 = n3.pop();
          e4.locked.set(t3, n3), void 0 !== o2 && setTimeout(o2, 0);
        } else e4.locked.delete(t3);
      };
    }
    return e3.getInstance = function() {
      return void 0 === e3.instance && (e3.instance = new e3()), e3.instance;
    }, e3;
  })();
  t2.default = function() {
    return n2.getInstance();
  };
}));
n(i);
var r = n(o((function(e2, n2) {
  var o2 = t && t.__awaiter || function(e3, t2, n3, o3) {
    return new (n3 || (n3 = Promise))((function(i2, r3) {
      function s3(e4) {
        try {
          c3(o3.next(e4));
        } catch (e5) {
          r3(e5);
        }
      }
      function a3(e4) {
        try {
          c3(o3.throw(e4));
        } catch (e5) {
          r3(e5);
        }
      }
      function c3(e4) {
        e4.done ? i2(e4.value) : new n3((function(t3) {
          t3(e4.value);
        })).then(s3, a3);
      }
      c3((o3 = o3.apply(e3, t2 || [])).next());
    }));
  }, r2 = t && t.__generator || function(e3, t2) {
    var n3, o3, i2, r3, s3 = { label: 0, sent: function() {
      if (1 & i2[0]) throw i2[1];
      return i2[1];
    }, trys: [], ops: [] };
    return r3 = { next: a3(0), throw: a3(1), return: a3(2) }, "function" == typeof Symbol && (r3[Symbol.iterator] = function() {
      return this;
    }), r3;
    function a3(r4) {
      return function(a4) {
        return (function(r5) {
          if (n3) throw new TypeError("Generator is already executing.");
          for (; s3; ) try {
            if (n3 = 1, o3 && (i2 = 2 & r5[0] ? o3.return : r5[0] ? o3.throw || ((i2 = o3.return) && i2.call(o3), 0) : o3.next) && !(i2 = i2.call(o3, r5[1])).done) return i2;
            switch (o3 = 0, i2 && (r5 = [2 & r5[0], i2.value]), r5[0]) {
              case 0:
              case 1:
                i2 = r5;
                break;
              case 4:
                return s3.label++, { value: r5[1], done: false };
              case 5:
                s3.label++, o3 = r5[1], r5 = [0];
                continue;
              case 7:
                r5 = s3.ops.pop(), s3.trys.pop();
                continue;
              default:
                if (!(i2 = s3.trys, (i2 = i2.length > 0 && i2[i2.length - 1]) || 6 !== r5[0] && 2 !== r5[0])) {
                  s3 = 0;
                  continue;
                }
                if (3 === r5[0] && (!i2 || r5[1] > i2[0] && r5[1] < i2[3])) {
                  s3.label = r5[1];
                  break;
                }
                if (6 === r5[0] && s3.label < i2[1]) {
                  s3.label = i2[1], i2 = r5;
                  break;
                }
                if (i2 && s3.label < i2[2]) {
                  s3.label = i2[2], s3.ops.push(r5);
                  break;
                }
                i2[2] && s3.ops.pop(), s3.trys.pop();
                continue;
            }
            r5 = t2.call(e3, s3);
          } catch (e4) {
            r5 = [6, e4], o3 = 0;
          } finally {
            n3 = i2 = 0;
          }
          if (5 & r5[0]) throw r5[1];
          return { value: r5[0] ? r5[1] : void 0, done: true };
        })([r4, a4]);
      };
    }
  }, s2 = t;
  Object.defineProperty(n2, "__esModule", { value: true });
  var a2 = "browser-tabs-lock-key", c2 = { key: function(e3) {
    return o2(s2, void 0, void 0, (function() {
      return r2(this, (function(e4) {
        throw new Error("Unsupported");
      }));
    }));
  }, getItem: function(e3) {
    return o2(s2, void 0, void 0, (function() {
      return r2(this, (function(e4) {
        throw new Error("Unsupported");
      }));
    }));
  }, clear: function() {
    return o2(s2, void 0, void 0, (function() {
      return r2(this, (function(e3) {
        return [2, window.localStorage.clear()];
      }));
    }));
  }, removeItem: function(e3) {
    return o2(s2, void 0, void 0, (function() {
      return r2(this, (function(e4) {
        throw new Error("Unsupported");
      }));
    }));
  }, setItem: function(e3, t2) {
    return o2(s2, void 0, void 0, (function() {
      return r2(this, (function(e4) {
        throw new Error("Unsupported");
      }));
    }));
  }, keySync: function(e3) {
    return window.localStorage.key(e3);
  }, getItemSync: function(e3) {
    return window.localStorage.getItem(e3);
  }, clearSync: function() {
    return window.localStorage.clear();
  }, removeItemSync: function(e3) {
    return window.localStorage.removeItem(e3);
  }, setItemSync: function(e3, t2) {
    return window.localStorage.setItem(e3, t2);
  } };
  function u2(e3) {
    return new Promise((function(t2) {
      return setTimeout(t2, e3);
    }));
  }
  function d2(e3) {
    for (var t2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", n3 = "", o3 = 0; o3 < e3; o3++) {
      n3 += t2[Math.floor(Math.random() * t2.length)];
    }
    return n3;
  }
  var h2 = (function() {
    function e3(t2) {
      this.acquiredIatSet = /* @__PURE__ */ new Set(), this.storageHandler = void 0, this.id = Date.now().toString() + d2(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), this.storageHandler = t2, void 0 === e3.waiters && (e3.waiters = []);
    }
    return e3.prototype.acquireLock = function(t2, n3) {
      return void 0 === n3 && (n3 = 5e3), o2(this, void 0, void 0, (function() {
        var o3, i2, s3, h3, l2, p2, m2;
        return r2(this, (function(r3) {
          switch (r3.label) {
            case 0:
              o3 = Date.now() + d2(4), i2 = Date.now() + n3, s3 = a2 + "-" + t2, h3 = void 0 === this.storageHandler ? c2 : this.storageHandler, r3.label = 1;
            case 1:
              return Date.now() < i2 ? [4, u2(30)] : [3, 8];
            case 2:
              return r3.sent(), null !== h3.getItemSync(s3) ? [3, 5] : (l2 = this.id + "-" + t2 + "-" + o3, [4, u2(Math.floor(25 * Math.random()))]);
            case 3:
              return r3.sent(), h3.setItemSync(s3, JSON.stringify({ id: this.id, iat: o3, timeoutKey: l2, timeAcquired: Date.now(), timeRefreshed: Date.now() })), [4, u2(30)];
            case 4:
              return r3.sent(), null !== (p2 = h3.getItemSync(s3)) && (m2 = JSON.parse(p2)).id === this.id && m2.iat === o3 ? (this.acquiredIatSet.add(o3), this.refreshLockWhileAcquired(s3, o3), [2, true]) : [3, 7];
            case 5:
              return e3.lockCorrector(void 0 === this.storageHandler ? c2 : this.storageHandler), [4, this.waitForSomethingToChange(i2)];
            case 6:
              r3.sent(), r3.label = 7;
            case 7:
              return o3 = Date.now() + d2(4), [3, 1];
            case 8:
              return [2, false];
          }
        }));
      }));
    }, e3.prototype.refreshLockWhileAcquired = function(e4, t2) {
      return o2(this, void 0, void 0, (function() {
        var n3 = this;
        return r2(this, (function(s3) {
          return setTimeout((function() {
            return o2(n3, void 0, void 0, (function() {
              var n4, o3, s4;
              return r2(this, (function(r3) {
                switch (r3.label) {
                  case 0:
                    return [4, i.default().lock(t2)];
                  case 1:
                    return r3.sent(), this.acquiredIatSet.has(t2) ? (n4 = void 0 === this.storageHandler ? c2 : this.storageHandler, null === (o3 = n4.getItemSync(e4)) ? (i.default().unlock(t2), [2]) : ((s4 = JSON.parse(o3)).timeRefreshed = Date.now(), n4.setItemSync(e4, JSON.stringify(s4)), i.default().unlock(t2), this.refreshLockWhileAcquired(e4, t2), [2])) : (i.default().unlock(t2), [2]);
                }
              }));
            }));
          }), 1e3), [2];
        }));
      }));
    }, e3.prototype.waitForSomethingToChange = function(t2) {
      return o2(this, void 0, void 0, (function() {
        return r2(this, (function(n3) {
          switch (n3.label) {
            case 0:
              return [4, new Promise((function(n4) {
                var o3 = false, i2 = Date.now(), r3 = false;
                function s3() {
                  if (r3 || (window.removeEventListener("storage", s3), e3.removeFromWaiting(s3), clearTimeout(a3), r3 = true), !o3) {
                    o3 = true;
                    var t3 = 50 - (Date.now() - i2);
                    t3 > 0 ? setTimeout(n4, t3) : n4(null);
                  }
                }
                window.addEventListener("storage", s3), e3.addToWaiting(s3);
                var a3 = setTimeout(s3, Math.max(0, t2 - Date.now()));
              }))];
            case 1:
              return n3.sent(), [2];
          }
        }));
      }));
    }, e3.addToWaiting = function(t2) {
      this.removeFromWaiting(t2), void 0 !== e3.waiters && e3.waiters.push(t2);
    }, e3.removeFromWaiting = function(t2) {
      void 0 !== e3.waiters && (e3.waiters = e3.waiters.filter((function(e4) {
        return e4 !== t2;
      })));
    }, e3.notifyWaiters = function() {
      void 0 !== e3.waiters && e3.waiters.slice().forEach((function(e4) {
        return e4();
      }));
    }, e3.prototype.releaseLock = function(e4) {
      return o2(this, void 0, void 0, (function() {
        return r2(this, (function(t2) {
          switch (t2.label) {
            case 0:
              return [4, this.releaseLock__private__(e4)];
            case 1:
              return [2, t2.sent()];
          }
        }));
      }));
    }, e3.prototype.releaseLock__private__ = function(t2) {
      return o2(this, void 0, void 0, (function() {
        var n3, o3, s3, u3;
        return r2(this, (function(r3) {
          switch (r3.label) {
            case 0:
              return n3 = void 0 === this.storageHandler ? c2 : this.storageHandler, o3 = a2 + "-" + t2, null === (s3 = n3.getItemSync(o3)) ? [2] : (u3 = JSON.parse(s3)).id !== this.id ? [3, 2] : [4, i.default().lock(u3.iat)];
            case 1:
              r3.sent(), this.acquiredIatSet.delete(u3.iat), n3.removeItemSync(o3), i.default().unlock(u3.iat), e3.notifyWaiters(), r3.label = 2;
            case 2:
              return [2];
          }
        }));
      }));
    }, e3.lockCorrector = function(t2) {
      for (var n3 = Date.now() - 5e3, o3 = t2, i2 = [], r3 = 0; ; ) {
        var s3 = o3.keySync(r3);
        if (null === s3) break;
        i2.push(s3), r3++;
      }
      for (var c3 = false, u3 = 0; u3 < i2.length; u3++) {
        var d3 = i2[u3];
        if (d3.includes(a2)) {
          var h3 = o3.getItemSync(d3);
          if (null !== h3) {
            var l2 = JSON.parse(h3);
            (void 0 === l2.timeRefreshed && l2.timeAcquired < n3 || void 0 !== l2.timeRefreshed && l2.timeRefreshed < n3) && (o3.removeItemSync(d3), c3 = true);
          }
        }
      }
      c3 && e3.notifyWaiters();
    }, e3.waiters = void 0, e3;
  })();
  n2.default = h2;
})));
var s = { timeoutInSeconds: 60 };
var a = { name: "auth0-spa-js", version: "2.8.0" };
var c = () => Date.now();
var u = class _u extends Error {
  constructor(e2, t2) {
    super(t2), this.error = e2, this.error_description = t2, Object.setPrototypeOf(this, _u.prototype);
  }
  static fromPayload({ error: e2, error_description: t2 }) {
    return new _u(e2, t2);
  }
};
var d = class _d extends u {
  constructor(e2, t2, n2, o2 = null) {
    super(e2, t2), this.state = n2, this.appState = o2, Object.setPrototypeOf(this, _d.prototype);
  }
};
var h = class _h extends u {
  constructor(e2, t2, n2, o2, i2 = null) {
    super(e2, t2), this.connection = n2, this.state = o2, this.appState = i2, Object.setPrototypeOf(this, _h.prototype);
  }
};
var l = class _l extends u {
  constructor() {
    super("timeout", "Timeout"), Object.setPrototypeOf(this, _l.prototype);
  }
};
var p = class _p extends l {
  constructor(e2) {
    super(), this.popup = e2, Object.setPrototypeOf(this, _p.prototype);
  }
};
var m = class _m extends u {
  constructor(e2) {
    super("cancelled", "Popup closed"), this.popup = e2, Object.setPrototypeOf(this, _m.prototype);
  }
};
var f = class _f extends u {
  constructor(e2, t2, n2) {
    super(e2, t2), this.mfa_token = n2, Object.setPrototypeOf(this, _f.prototype);
  }
};
var g = class _g extends u {
  constructor(e2, t2) {
    super("missing_refresh_token", `Missing Refresh Token (audience: '${b(e2, ["default"])}', scope: '${b(t2)}')`), this.audience = e2, this.scope = t2, Object.setPrototypeOf(this, _g.prototype);
  }
};
var y = class _y extends u {
  constructor(e2, t2) {
    super("missing_scopes", `Missing requested scopes after refresh (audience: '${b(e2, ["default"])}', missing scope: '${b(t2)}')`), this.audience = e2, this.scope = t2, Object.setPrototypeOf(this, _y.prototype);
  }
};
var w = class _w extends u {
  constructor(e2) {
    super("use_dpop_nonce", "Server rejected DPoP proof: wrong nonce"), this.newDpopNonce = e2, Object.setPrototypeOf(this, _w.prototype);
  }
};
function b(e2, t2 = []) {
  return e2 && !t2.includes(e2) ? e2 : "";
}
var k = () => window.crypto;
var v = () => {
  const e2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
  let t2 = "";
  return Array.from(k().getRandomValues(new Uint8Array(43))).forEach(((n2) => t2 += e2[n2 % e2.length])), t2;
};
var _ = (e2) => btoa(e2);
var S = [{ key: "name", type: ["string"] }, { key: "version", type: ["string", "number"] }, { key: "env", type: ["object"] }];
var I = (e2) => Object.keys(e2).reduce(((t2, n2) => {
  const o2 = S.find(((e3) => e3.key === n2));
  return o2 && o2.type.includes(typeof e2[n2]) && (t2[n2] = e2[n2]), t2;
}), {});
var P = (t2) => {
  var { clientId: n2 } = t2, o2 = e(t2, ["clientId"]);
  return new URLSearchParams(((e2) => Object.keys(e2).filter(((t3) => void 0 !== e2[t3])).reduce(((t3, n3) => Object.assign(Object.assign({}, t3), { [n3]: e2[n3] })), {}))(Object.assign({ client_id: n2 }, o2))).toString();
};
var T = (e2) => __async(null, null, function* () {
  const t2 = k().subtle.digest({ name: "SHA-256" }, new TextEncoder().encode(e2));
  return yield t2;
});
var O = (e2) => ((e3) => decodeURIComponent(atob(e3).split("").map(((e4) => "%" + ("00" + e4.charCodeAt(0).toString(16)).slice(-2))).join("")))(e2.replace(/_/g, "/").replace(/-/g, "+"));
var j = (e2) => {
  const t2 = new Uint8Array(e2);
  return ((e3) => {
    const t3 = { "+": "-", "/": "_", "=": "" };
    return e3.replace(/[+/=]/g, ((e4) => t3[e4]));
  })(window.btoa(String.fromCharCode(...Array.from(t2))));
};
var C = new TextEncoder();
var K = new TextDecoder();
function x(e2) {
  return "string" == typeof e2 ? C.encode(e2) : K.decode(e2);
}
function z(e2) {
  if ("number" != typeof e2.modulusLength || e2.modulusLength < 2048) throw new A(`${e2.name} modulusLength must be at least 2048 bits`);
}
function E(e2, t2, n2) {
  return __async(this, null, function* () {
    if (false === n2.usages.includes("sign")) throw new TypeError('private CryptoKey instances used for signing assertions must include "sign" in their "usages"');
    const o2 = `${R(x(JSON.stringify(e2)))}.${R(x(JSON.stringify(t2)))}`;
    return `${o2}.${R(yield crypto.subtle.sign((function(e3) {
      switch (e3.algorithm.name) {
        case "ECDSA":
          return { name: e3.algorithm.name, hash: "SHA-256" };
        case "RSA-PSS":
          return z(e3.algorithm), { name: e3.algorithm.name, saltLength: 32 };
        case "RSASSA-PKCS1-v1_5":
          return z(e3.algorithm), { name: e3.algorithm.name };
        case "Ed25519":
          return { name: e3.algorithm.name };
      }
      throw new D();
    })(n2), n2, x(o2)))}`;
  });
}
var N;
if (Uint8Array.prototype.toBase64) N = (e2) => (e2 instanceof ArrayBuffer && (e2 = new Uint8Array(e2)), e2.toBase64({ alphabet: "base64url", omitPadding: true }));
else {
  const e2 = 32768;
  N = (t2) => {
    t2 instanceof ArrayBuffer && (t2 = new Uint8Array(t2));
    const n2 = [];
    for (let o2 = 0; o2 < t2.byteLength; o2 += e2) n2.push(String.fromCharCode.apply(null, t2.subarray(o2, o2 + e2)));
    return btoa(n2.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  };
}
function R(e2) {
  return N(e2);
}
var D = class extends Error {
  constructor(e2) {
    var t2;
    super(null != e2 ? e2 : "operation not supported"), this.name = this.constructor.name, null === (t2 = Error.captureStackTrace) || void 0 === t2 || t2.call(Error, this, this.constructor);
  }
};
var A = class extends Error {
  constructor(e2) {
    var t2;
    super(e2), this.name = this.constructor.name, null === (t2 = Error.captureStackTrace) || void 0 === t2 || t2.call(Error, this, this.constructor);
  }
};
function U(e2) {
  switch (e2.algorithm.name) {
    case "RSA-PSS":
      return (function(e3) {
        if ("SHA-256" === e3.algorithm.hash.name) return "PS256";
        throw new D("unsupported RsaHashedKeyAlgorithm hash name");
      })(e2);
    case "RSASSA-PKCS1-v1_5":
      return (function(e3) {
        if ("SHA-256" === e3.algorithm.hash.name) return "RS256";
        throw new D("unsupported RsaHashedKeyAlgorithm hash name");
      })(e2);
    case "ECDSA":
      return (function(e3) {
        if ("P-256" === e3.algorithm.namedCurve) return "ES256";
        throw new D("unsupported EcKeyAlgorithm namedCurve");
      })(e2);
    case "Ed25519":
      return "Ed25519";
    default:
      throw new D("unsupported CryptoKey algorithm name");
  }
}
function L(e2) {
  return e2 instanceof CryptoKey;
}
function Z(e2) {
  return L(e2) && "public" === e2.type;
}
function H(e2, t2, n2, o2, i2, r2) {
  return __async(this, null, function* () {
    const s2 = null == e2 ? void 0 : e2.privateKey, a2 = null == e2 ? void 0 : e2.publicKey;
    if (!L(c2 = s2) || "private" !== c2.type) throw new TypeError('"keypair.privateKey" must be a private CryptoKey');
    var c2;
    if (!Z(a2)) throw new TypeError('"keypair.publicKey" must be a public CryptoKey');
    if (true !== a2.extractable) throw new TypeError('"keypair.publicKey.extractable" must be true');
    if ("string" != typeof t2) throw new TypeError('"htu" must be a string');
    if ("string" != typeof n2) throw new TypeError('"htm" must be a string');
    if (void 0 !== o2 && "string" != typeof o2) throw new TypeError('"nonce" must be a string or undefined');
    if (void 0 !== i2 && "string" != typeof i2) throw new TypeError('"accessToken" must be a string or undefined');
    if (void 0 !== r2 && ("object" != typeof r2 || null === r2 || Array.isArray(r2))) throw new TypeError('"additional" must be an object');
    return E({ alg: U(s2), typ: "dpop+jwt", jwk: yield W(a2) }, Object.assign(Object.assign({}, r2), { iat: Math.floor(Date.now() / 1e3), jti: crypto.randomUUID(), htm: n2, nonce: o2, htu: t2, ath: i2 ? R(yield crypto.subtle.digest("SHA-256", x(i2))) : void 0 }), s2);
  });
}
function W(e2) {
  return __async(this, null, function* () {
    const { kty: t2, e: n2, n: o2, x: i2, y: r2, crv: s2 } = yield crypto.subtle.exportKey("jwk", e2);
    return { kty: t2, crv: s2, e: n2, n: o2, x: i2, y: r2 };
  });
}
var J = ["authorization_code", "refresh_token", "urn:ietf:params:oauth:grant-type:token-exchange"];
function X() {
  return (function(e2, t2) {
    return __async(this, null, function* () {
      var n2;
      let o2;
      if ("string" != typeof e2 || 0 === e2.length) throw new TypeError('"alg" must be a non-empty string');
      switch (e2) {
        case "PS256":
          o2 = { name: "RSA-PSS", hash: "SHA-256", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]) };
          break;
        case "RS256":
          o2 = { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]) };
          break;
        case "ES256":
          o2 = { name: "ECDSA", namedCurve: "P-256" };
          break;
        case "Ed25519":
          o2 = { name: "Ed25519" };
          break;
        default:
          throw new D();
      }
      return crypto.subtle.generateKey(o2, null !== (n2 = null == t2 ? void 0 : t2.extractable) && void 0 !== n2 && n2, ["sign", "verify"]);
    });
  })("ES256", { extractable: false });
}
function V(e2) {
  return (function(e3) {
    return __async(this, null, function* () {
      if (!Z(e3)) throw new TypeError('"publicKey" must be a public CryptoKey');
      if (true !== e3.extractable) throw new TypeError('"publicKey.extractable" must be true');
      const t2 = yield W(e3);
      let n2;
      switch (t2.kty) {
        case "EC":
          n2 = { crv: t2.crv, kty: t2.kty, x: t2.x, y: t2.y };
          break;
        case "OKP":
          n2 = { crv: t2.crv, kty: t2.kty, x: t2.x };
          break;
        case "RSA":
          n2 = { e: t2.e, kty: t2.kty, n: t2.n };
          break;
        default:
          throw new D("unsupported JWK kty");
      }
      return R(yield crypto.subtle.digest({ name: "SHA-256" }, x(JSON.stringify(n2))));
    });
  })(e2.publicKey);
}
function F({ keyPair: e2, url: t2, method: n2, nonce: o2, accessToken: i2 }) {
  const r2 = (function(e3) {
    const t3 = new URL(e3);
    return t3.search = "", t3.hash = "", t3.href;
  })(t2);
  return H(e2, r2, n2, o2, i2);
}
var G = (e2, t2) => __async(null, null, function* () {
  const n2 = yield fetch(e2, t2);
  return { ok: n2.ok, json: yield n2.json(), headers: (o2 = n2.headers, [...o2].reduce(((e3, [t3, n3]) => (e3[t3] = n3, e3)), {})) };
  var o2;
});
var M = (e2, t2, n2) => __async(null, null, function* () {
  const o2 = new AbortController();
  let i2;
  return t2.signal = o2.signal, Promise.race([G(e2, t2), new Promise(((e3, t3) => {
    i2 = setTimeout((() => {
      o2.abort(), t3(new Error("Timeout when executing 'fetch'"));
    }), n2);
  }))]).finally((() => {
    clearTimeout(i2);
  }));
});
var Y = (e2, t2, n2, o2, i2, r2, s2, a2) => __async(null, null, function* () {
  return c2 = { auth: { audience: t2, scope: n2 }, timeout: i2, fetchUrl: e2, fetchOptions: o2, useFormData: s2, useMrrt: a2 }, u2 = r2, new Promise((function(e3, t3) {
    const n3 = new MessageChannel();
    n3.port1.onmessage = function(o3) {
      o3.data.error ? t3(new Error(o3.data.error)) : e3(o3.data), n3.port1.close();
    }, u2.postMessage(c2, [n3.port2]);
  }));
  var c2, u2;
});
var $ = (e2, t2, n2, o2, i2, r2, s2 = 1e4, a2) => __async(null, null, function* () {
  return i2 ? Y(e2, t2, n2, o2, s2, i2, r2, a2) : M(e2, o2, s2);
});
function B(t2, n2, o2, i2, r2, s2, a2, c2, d2, h2) {
  return __async(this, null, function* () {
    if (d2) {
      const e2 = yield d2.generateProof({ url: t2, method: r2.method || "GET", nonce: yield d2.getNonce() });
      r2.headers = Object.assign(Object.assign({}, r2.headers), { dpop: e2 });
    }
    let l2, p2 = null;
    for (let e2 = 0; e2 < 3; e2++) try {
      l2 = yield $(t2, o2, i2, r2, s2, a2, n2, c2), p2 = null;
      break;
    } catch (e3) {
      p2 = e3;
    }
    if (p2) throw p2;
    const m2 = l2.json, { error: y2, error_description: b2 } = m2, k2 = e(m2, ["error", "error_description"]), { headers: v2, ok: _2 } = l2;
    let S2;
    if (d2 && (S2 = v2["dpop-nonce"], S2 && (yield d2.setNonce(S2))), !_2) {
      const e2 = b2 || `HTTP error. Unable to fetch ${t2}`;
      if ("mfa_required" === y2) throw new f(y2, e2, k2.mfa_token);
      if ("missing_refresh_token" === y2) throw new g(o2, i2);
      if ("use_dpop_nonce" === y2) {
        if (!d2 || !S2 || h2) throw new w(S2);
        return B(t2, n2, o2, i2, r2, s2, a2, c2, d2, true);
      }
      throw new u(y2 || "request_error", e2);
    }
    return k2;
  });
}
function q(t2, n2) {
  return __async(this, null, function* () {
    var { baseUrl: o2, timeout: i2, audience: r2, scope: s2, auth0Client: c2, useFormData: u2, useMrrt: d2, dpop: h2 } = t2, l2 = e(t2, ["baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData", "useMrrt", "dpop"]);
    const p2 = "urn:ietf:params:oauth:grant-type:token-exchange" === l2.grant_type, m2 = "refresh_token" === l2.grant_type && d2, f2 = Object.assign(Object.assign(Object.assign(Object.assign({}, l2), p2 && r2 && { audience: r2 }), p2 && s2 && { scope: s2 }), m2 && { audience: r2, scope: s2 }), g2 = u2 ? P(f2) : JSON.stringify(f2), y2 = (w2 = l2.grant_type, J.includes(w2));
    var w2;
    return yield B(`${o2}/oauth/token`, i2, r2 || "default", s2, { method: "POST", body: g2, headers: { "Content-Type": u2 ? "application/x-www-form-urlencoded" : "application/json", "Auth0-Client": btoa(JSON.stringify(I(c2 || a))) } }, n2, u2, d2, y2 ? h2 : void 0);
  });
}
var Q = (...e2) => {
  return (t2 = e2.filter(Boolean).join(" ").trim().split(/\s+/), Array.from(new Set(t2))).join(" ");
  var t2;
};
var ee = (e2, t2, n2) => {
  let o2;
  return n2 && (o2 = e2[n2]), o2 || (o2 = e2.default), Q(o2, t2);
};
var te = class _te {
  constructor(e2, t2 = "@@auth0spajs@@", n2) {
    this.prefix = t2, this.suffix = n2, this.clientId = e2.clientId, this.scope = e2.scope, this.audience = e2.audience;
  }
  toKey() {
    return [this.prefix, this.clientId, this.audience, this.scope, this.suffix].filter(Boolean).join("::");
  }
  static fromKey(e2) {
    const [t2, n2, o2, i2] = e2.split("::");
    return new _te({ clientId: n2, scope: i2, audience: o2 }, t2);
  }
  static fromCacheEntry(e2) {
    const { scope: t2, audience: n2, client_id: o2 } = e2;
    return new _te({ scope: t2, audience: n2, clientId: o2 });
  }
};
var ne = class {
  set(e2, t2) {
    localStorage.setItem(e2, JSON.stringify(t2));
  }
  get(e2) {
    const t2 = window.localStorage.getItem(e2);
    if (t2) try {
      return JSON.parse(t2);
    } catch (e3) {
      return;
    }
  }
  remove(e2) {
    localStorage.removeItem(e2);
  }
  allKeys() {
    return Object.keys(window.localStorage).filter(((e2) => e2.startsWith("@@auth0spajs@@")));
  }
};
var oe = class {
  constructor() {
    this.enclosedCache = /* @__PURE__ */ (function() {
      let e2 = {};
      return { set(t2, n2) {
        e2[t2] = n2;
      }, get(t2) {
        const n2 = e2[t2];
        if (n2) return n2;
      }, remove(t2) {
        delete e2[t2];
      }, allKeys: () => Object.keys(e2) };
    })();
  }
};
var ie = class {
  constructor(e2, t2, n2) {
    this.cache = e2, this.keyManifest = t2, this.nowProvider = n2 || c;
  }
  setIdToken(e2, t2, n2) {
    return __async(this, null, function* () {
      var o2;
      const i2 = this.getIdTokenCacheKey(e2);
      yield this.cache.set(i2, { id_token: t2, decodedToken: n2 }), yield null === (o2 = this.keyManifest) || void 0 === o2 ? void 0 : o2.add(i2);
    });
  }
  getIdToken(e2) {
    return __async(this, null, function* () {
      const t2 = yield this.cache.get(this.getIdTokenCacheKey(e2.clientId));
      if (!t2 && e2.scope && e2.audience) {
        const t3 = yield this.get(e2);
        if (!t3) return;
        if (!t3.id_token || !t3.decodedToken) return;
        return { id_token: t3.id_token, decodedToken: t3.decodedToken };
      }
      if (t2) return { id_token: t2.id_token, decodedToken: t2.decodedToken };
    });
  }
  get(e2, t2 = 0, n2 = false, o2) {
    return __async(this, null, function* () {
      var i2;
      let r2 = yield this.cache.get(e2.toKey());
      if (!r2) {
        const t3 = yield this.getCacheKeys();
        if (!t3) return;
        const i3 = this.matchExistingCacheKey(e2, t3);
        if (i3 && (r2 = yield this.cache.get(i3)), !i3 && n2 && "cache-only" !== o2) return this.getEntryWithRefreshToken(e2, t3);
      }
      if (!r2) return;
      const s2 = yield this.nowProvider(), a2 = Math.floor(s2 / 1e3);
      return r2.expiresAt - t2 < a2 ? r2.body.refresh_token ? this.modifiedCachedEntry(r2, e2) : (yield this.cache.remove(e2.toKey()), void (yield null === (i2 = this.keyManifest) || void 0 === i2 ? void 0 : i2.remove(e2.toKey()))) : r2.body;
    });
  }
  modifiedCachedEntry(e2, t2) {
    return __async(this, null, function* () {
      return e2.body = { refresh_token: e2.body.refresh_token, audience: e2.body.audience, scope: e2.body.scope }, yield this.cache.set(t2.toKey(), e2), { refresh_token: e2.body.refresh_token, audience: e2.body.audience, scope: e2.body.scope };
    });
  }
  set(e2) {
    return __async(this, null, function* () {
      var t2;
      const n2 = new te({ clientId: e2.client_id, scope: e2.scope, audience: e2.audience }), o2 = yield this.wrapCacheEntry(e2);
      yield this.cache.set(n2.toKey(), o2), yield null === (t2 = this.keyManifest) || void 0 === t2 ? void 0 : t2.add(n2.toKey());
    });
  }
  remove(e2, t2, n2) {
    return __async(this, null, function* () {
      const o2 = new te({ clientId: e2, scope: n2, audience: t2 });
      yield this.cache.remove(o2.toKey());
    });
  }
  clear(e2) {
    return __async(this, null, function* () {
      var t2;
      const n2 = yield this.getCacheKeys();
      n2 && (yield n2.filter(((t3) => !e2 || t3.includes(e2))).reduce(((e3, t3) => __async(this, null, function* () {
        yield e3, yield this.cache.remove(t3);
      })), Promise.resolve()), yield null === (t2 = this.keyManifest) || void 0 === t2 ? void 0 : t2.clear());
    });
  }
  wrapCacheEntry(e2) {
    return __async(this, null, function* () {
      const t2 = yield this.nowProvider();
      return { body: e2, expiresAt: Math.floor(t2 / 1e3) + e2.expires_in };
    });
  }
  getCacheKeys() {
    return __async(this, null, function* () {
      var e2;
      return this.keyManifest ? null === (e2 = yield this.keyManifest.get()) || void 0 === e2 ? void 0 : e2.keys : this.cache.allKeys ? this.cache.allKeys() : void 0;
    });
  }
  getIdTokenCacheKey(e2) {
    return new te({ clientId: e2 }, "@@auth0spajs@@", "@@user@@").toKey();
  }
  matchExistingCacheKey(e2, t2) {
    return t2.filter(((t3) => {
      var n2;
      const o2 = te.fromKey(t3), i2 = new Set(o2.scope && o2.scope.split(" ")), r2 = (null === (n2 = e2.scope) || void 0 === n2 ? void 0 : n2.split(" ")) || [], s2 = o2.scope && r2.reduce(((e3, t4) => e3 && i2.has(t4)), true);
      return "@@auth0spajs@@" === o2.prefix && o2.clientId === e2.clientId && o2.audience === e2.audience && s2;
    }))[0];
  }
  getEntryWithRefreshToken(e2, t2) {
    return __async(this, null, function* () {
      var n2;
      for (const o2 of t2) {
        const t3 = te.fromKey(o2);
        if ("@@auth0spajs@@" === t3.prefix && t3.clientId === e2.clientId) {
          const t4 = yield this.cache.get(o2);
          if (null === (n2 = null == t4 ? void 0 : t4.body) || void 0 === n2 ? void 0 : n2.refresh_token) return this.modifiedCachedEntry(t4, e2);
        }
      }
    });
  }
  updateEntry(e2, t2) {
    return __async(this, null, function* () {
      var n2;
      const o2 = yield this.getCacheKeys();
      if (o2) for (const i2 of o2) {
        const o3 = yield this.cache.get(i2);
        if ((null === (n2 = null == o3 ? void 0 : o3.body) || void 0 === n2 ? void 0 : n2.refresh_token) === e2) {
          const e3 = Object.assign(Object.assign({}, o3.body), { refresh_token: t2 });
          yield this.set(e3);
        }
      }
    });
  }
};
var re = class {
  constructor(e2, t2, n2) {
    this.storage = e2, this.clientId = t2, this.cookieDomain = n2, this.storageKey = `a0.spajs.txs.${this.clientId}`;
  }
  create(e2) {
    this.storage.save(this.storageKey, e2, { daysUntilExpire: 1, cookieDomain: this.cookieDomain });
  }
  get() {
    return this.storage.get(this.storageKey);
  }
  remove() {
    this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
  }
};
var se = (e2) => "number" == typeof e2;
var ae = ["iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm"];
var ce = (e2) => {
  if (!e2.id_token) throw new Error("ID token is required but missing");
  const t2 = ((e3) => {
    const t3 = e3.split("."), [n3, o3, i3] = t3;
    if (3 !== t3.length || !n3 || !o3 || !i3) throw new Error("ID token could not be decoded");
    const r2 = JSON.parse(O(o3)), s2 = { __raw: e3 }, a2 = {};
    return Object.keys(r2).forEach(((e4) => {
      s2[e4] = r2[e4], ae.includes(e4) || (a2[e4] = r2[e4]);
    })), { encoded: { header: n3, payload: o3, signature: i3 }, header: JSON.parse(O(n3)), claims: s2, user: a2 };
  })(e2.id_token);
  if (!t2.claims.iss) throw new Error("Issuer (iss) claim must be a string present in the ID token");
  if (t2.claims.iss !== e2.iss) throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e2.iss}", found "${t2.claims.iss}"`);
  if (!t2.user.sub) throw new Error("Subject (sub) claim must be a string present in the ID token");
  if ("RS256" !== t2.header.alg) throw new Error(`Signature algorithm of "${t2.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
  if (!t2.claims.aud || "string" != typeof t2.claims.aud && !Array.isArray(t2.claims.aud)) throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
  if (Array.isArray(t2.claims.aud)) {
    if (!t2.claims.aud.includes(e2.aud)) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but was not one of "${t2.claims.aud.join(", ")}"`);
    if (t2.claims.aud.length > 1) {
      if (!t2.claims.azp) throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
      if (t2.claims.azp !== e2.aud) throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e2.aud}", found "${t2.claims.azp}"`);
    }
  } else if (t2.claims.aud !== e2.aud) throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but found "${t2.claims.aud}"`);
  if (e2.nonce) {
    if (!t2.claims.nonce) throw new Error("Nonce (nonce) claim must be a string present in the ID token");
    if (t2.claims.nonce !== e2.nonce) throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e2.nonce}", found "${t2.claims.nonce}"`);
  }
  if (e2.max_age && !se(t2.claims.auth_time)) throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
  if (null == t2.claims.exp || !se(t2.claims.exp)) throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
  if (!se(t2.claims.iat)) throw new Error("Issued At (iat) claim must be a number present in the ID token");
  const n2 = e2.leeway || 60, o2 = new Date(e2.now || Date.now()), i2 = /* @__PURE__ */ new Date(0);
  if (i2.setUTCSeconds(t2.claims.exp + n2), o2 > i2) throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${o2}) is after expiration time (${i2})`);
  if (null != t2.claims.nbf && se(t2.claims.nbf)) {
    const e3 = /* @__PURE__ */ new Date(0);
    if (e3.setUTCSeconds(t2.claims.nbf - n2), o2 < e3) throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${o2}) is before ${e3}`);
  }
  if (null != t2.claims.auth_time && se(t2.claims.auth_time)) {
    const i3 = /* @__PURE__ */ new Date(0);
    if (i3.setUTCSeconds(parseInt(t2.claims.auth_time) + e2.max_age + n2), o2 > i3) throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${o2}) is after last auth at ${i3}`);
  }
  if (e2.organization) {
    const n3 = e2.organization.trim();
    if (n3.startsWith("org_")) {
      const e3 = n3;
      if (!t2.claims.org_id) throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
      if (e3 !== t2.claims.org_id) throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e3}", found "${t2.claims.org_id}"`);
    } else {
      const e3 = n3.toLowerCase();
      if (!t2.claims.org_name) throw new Error("Organization Name (org_name) claim must be a string present in the ID token");
      if (e3 !== t2.claims.org_name) throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${e3}", found "${t2.claims.org_name}"`);
    }
  }
  return t2;
};
var ue = o((function(e2, n2) {
  var o2 = t && t.__assign || function() {
    return o2 = Object.assign || function(e3) {
      for (var t2, n3 = 1, o3 = arguments.length; n3 < o3; n3++) for (var i3 in t2 = arguments[n3]) Object.prototype.hasOwnProperty.call(t2, i3) && (e3[i3] = t2[i3]);
      return e3;
    }, o2.apply(this, arguments);
  };
  function i2(e3, t2) {
    if (!t2) return "";
    var n3 = "; " + e3;
    return true === t2 ? n3 : n3 + "=" + t2;
  }
  function r2(e3, t2, n3) {
    return encodeURIComponent(e3).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(t2).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + (function(e4) {
      if ("number" == typeof e4.expires) {
        var t3 = /* @__PURE__ */ new Date();
        t3.setMilliseconds(t3.getMilliseconds() + 864e5 * e4.expires), e4.expires = t3;
      }
      return i2("Expires", e4.expires ? e4.expires.toUTCString() : "") + i2("Domain", e4.domain) + i2("Path", e4.path) + i2("Secure", e4.secure) + i2("SameSite", e4.sameSite);
    })(n3);
  }
  function s2(e3) {
    for (var t2 = {}, n3 = e3 ? e3.split("; ") : [], o3 = /(%[\dA-F]{2})+/gi, i3 = 0; i3 < n3.length; i3++) {
      var r3 = n3[i3].split("="), s3 = r3.slice(1).join("=");
      '"' === s3.charAt(0) && (s3 = s3.slice(1, -1));
      try {
        t2[r3[0].replace(o3, decodeURIComponent)] = s3.replace(o3, decodeURIComponent);
      } catch (e4) {
      }
    }
    return t2;
  }
  function a2() {
    return s2(document.cookie);
  }
  function c2(e3, t2, n3) {
    document.cookie = r2(e3, t2, o2({ path: "/" }, n3));
  }
  n2.__esModule = true, n2.encode = r2, n2.parse = s2, n2.getAll = a2, n2.get = function(e3) {
    return a2()[e3];
  }, n2.set = c2, n2.remove = function(e3, t2) {
    c2(e3, "", o2(o2({}, t2), { expires: -1 }));
  };
}));
n(ue), ue.encode, ue.parse, ue.getAll;
var de = ue.get;
var he = ue.set;
var le = ue.remove;
var pe = { get(e2) {
  const t2 = de(e2);
  if (void 0 !== t2) return JSON.parse(t2);
}, save(e2, t2, n2) {
  let o2 = {};
  "https:" === window.location.protocol && (o2 = { secure: true, sameSite: "none" }), (null == n2 ? void 0 : n2.daysUntilExpire) && (o2.expires = n2.daysUntilExpire), (null == n2 ? void 0 : n2.cookieDomain) && (o2.domain = n2.cookieDomain), he(e2, JSON.stringify(t2), o2);
}, remove(e2, t2) {
  let n2 = {};
  (null == t2 ? void 0 : t2.cookieDomain) && (n2.domain = t2.cookieDomain), le(e2, n2);
} };
var me = { get(e2) {
  const t2 = pe.get(e2);
  return t2 || pe.get(`_legacy_${e2}`);
}, save(e2, t2, n2) {
  let o2 = {};
  "https:" === window.location.protocol && (o2 = { secure: true }), (null == n2 ? void 0 : n2.daysUntilExpire) && (o2.expires = n2.daysUntilExpire), (null == n2 ? void 0 : n2.cookieDomain) && (o2.domain = n2.cookieDomain), he(`_legacy_${e2}`, JSON.stringify(t2), o2), pe.save(e2, t2, n2);
}, remove(e2, t2) {
  let n2 = {};
  (null == t2 ? void 0 : t2.cookieDomain) && (n2.domain = t2.cookieDomain), le(e2, n2), pe.remove(e2, t2), pe.remove(`_legacy_${e2}`, t2);
} };
var fe = { get(e2) {
  if ("undefined" == typeof sessionStorage) return;
  const t2 = sessionStorage.getItem(e2);
  return null != t2 ? JSON.parse(t2) : void 0;
}, save(e2, t2) {
  sessionStorage.setItem(e2, JSON.stringify(t2));
}, remove(e2) {
  sessionStorage.removeItem(e2);
} };
var ge;
!(function(e2) {
  e2.Code = "code", e2.ConnectCode = "connect_code";
})(ge || (ge = {}));
var ye = class {
};
function we(e2, t2, n2) {
  var o2 = void 0 === t2 ? null : t2, i2 = (function(e3, t3) {
    var n3 = atob(e3);
    if (t3) {
      for (var o3 = new Uint8Array(n3.length), i3 = 0, r3 = n3.length; i3 < r3; ++i3) o3[i3] = n3.charCodeAt(i3);
      return String.fromCharCode.apply(null, new Uint16Array(o3.buffer));
    }
    return n3;
  })(e2, void 0 !== n2 && n2), r2 = i2.indexOf("\n", 10) + 1, s2 = i2.substring(r2) + (o2 ? "//# sourceMappingURL=" + o2 : ""), a2 = new Blob([s2], { type: "application/javascript" });
  return URL.createObjectURL(a2);
}
var be;
var ke;
var ve;
var _e;
var Se = (be = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YSx1c2VNcnJ0OmZ9LHBvcnRzOltwXX0pPT57bGV0IGgsdSxsPXt9O2NvbnN0e2F1ZGllbmNlOmQsc2NvcGU6eX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2lmKHU9KChlLHQpPT5vW24oZSx0KV0pKGQseSksIXUmJmYpe2NvbnN0IGU9by5sYXRlc3RfcmVmcmVzaF90b2tlbix0PSgoZSx0KT0+e2NvbnN0IHI9T2JqZWN0LmtleXMobykuZmluZCgocj0+e2lmKCJsYXRlc3RfcmVmcmVzaF90b2tlbiIhPT1yKXtjb25zdCBzPSgoZSx0KT0+dC5zdGFydHNXaXRoKGAke2V9fGApKSh0LHIpLG89ci5zcGxpdCgifCIpWzFdLnNwbGl0KCIgIiksbj1lLnNwbGl0KCIgIikuZXZlcnkoKGU9Pm8uaW5jbHVkZXMoZSkpKTtyZXR1cm4gcyYmbn19KSk7cmV0dXJuISFyfSkoeSxkKTtlJiYhdCYmKHU9ZSl9aWYoIXUpdGhyb3cgbmV3IHQoZCx5KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjp1fSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjp1fSkpfWxldCBqLGs7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGo9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1qLnNpZ25hbCk7dHJ5e2s9YXdhaXQgUHJvbWlzZS5yYWNlKFsoXz1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsXykpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIHAucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFrKXJldHVybiBqJiZqLmFib3J0KCksdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO2c9ay5oZWFkZXJzLGw9Wy4uLmddLnJlZHVjZSgoKGUsW3Qscl0pPT4oZVt0XT1yLGUpKSx7fSksaD1hd2FpdCBrLmpzb24oKSxoLnJlZnJlc2hfdG9rZW4/KGYmJihvLmxhdGVzdF9yZWZyZXNoX3Rva2VuPWgucmVmcmVzaF90b2tlbixPPXUsYj1oLnJlZnJlc2hfdG9rZW4sT2JqZWN0LmVudHJpZXMobykuZm9yRWFjaCgoKFtlLHRdKT0+e3Q9PT1PJiYob1tlXT1iKX0pKSksKChlLHQscik9PntvW24odCxyKV09ZX0pKGgucmVmcmVzaF90b2tlbixkLHkpLGRlbGV0ZSBoLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KShkLHkpLHAucG9zdE1lc3NhZ2Uoe29rOmsub2ssanNvbjpoLGhlYWRlcnM6bH0pfWNhdGNoKGUpe3AucG9zdE1lc3NhZ2Uoe29rOiExLGpzb246e2Vycm9yOmUuZXJyb3IsZXJyb3JfZGVzY3JpcHRpb246ZS5tZXNzYWdlfSxoZWFkZXJzOmx9KX12YXIgTyxiLGcsX30pKX0oKTsKCg==", ke = null, ve = false, function(e2) {
  return _e = _e || we(be, ke, ve), new Worker(_e, e2);
});
var Ie = {};
var Pe = class {
  constructor(e2, t2) {
    this.cache = e2, this.clientId = t2, this.manifestKey = this.createManifestKeyFrom(this.clientId);
  }
  add(e2) {
    return __async(this, null, function* () {
      var t2;
      const n2 = new Set((null === (t2 = yield this.cache.get(this.manifestKey)) || void 0 === t2 ? void 0 : t2.keys) || []);
      n2.add(e2), yield this.cache.set(this.manifestKey, { keys: [...n2] });
    });
  }
  remove(e2) {
    return __async(this, null, function* () {
      const t2 = yield this.cache.get(this.manifestKey);
      if (t2) {
        const n2 = new Set(t2.keys);
        return n2.delete(e2), n2.size > 0 ? yield this.cache.set(this.manifestKey, { keys: [...n2] }) : yield this.cache.remove(this.manifestKey);
      }
    });
  }
  get() {
    return this.cache.get(this.manifestKey);
  }
  clear() {
    return this.cache.remove(this.manifestKey);
  }
  createManifestKeyFrom(e2) {
    return `@@auth0spajs@@::${e2}`;
  }
};
var Te = { memory: () => new oe().enclosedCache, localstorage: () => new ne() };
var Oe = (e2) => Te[e2];
var je = (t2) => {
  const { openUrl: n2, onRedirect: o2 } = t2, i2 = e(t2, ["openUrl", "onRedirect"]);
  return Object.assign(Object.assign({}, i2), { openUrl: false === n2 || n2 ? n2 : o2 });
};
var Ce = (e2, t2) => {
  const n2 = (null == t2 ? void 0 : t2.split(" ")) || [];
  return ((null == e2 ? void 0 : e2.split(" ")) || []).every(((e3) => n2.includes(e3)));
};
var Ke = { NONCE: "nonce", KEYPAIR: "keypair" };
var xe = class {
  constructor(e2) {
    this.clientId = e2;
  }
  getVersion() {
    return 1;
  }
  createDbHandle() {
    const e2 = window.indexedDB.open("auth0-spa-js", this.getVersion());
    return new Promise(((t2, n2) => {
      e2.onupgradeneeded = () => Object.values(Ke).forEach(((t3) => e2.result.createObjectStore(t3))), e2.onerror = () => n2(e2.error), e2.onsuccess = () => t2(e2.result);
    }));
  }
  getDbHandle() {
    return __async(this, null, function* () {
      return this.dbHandle || (this.dbHandle = yield this.createDbHandle()), this.dbHandle;
    });
  }
  executeDbRequest(e2, t2, n2) {
    return __async(this, null, function* () {
      const o2 = n2((yield this.getDbHandle()).transaction(e2, t2).objectStore(e2));
      return new Promise(((e3, t3) => {
        o2.onsuccess = () => e3(o2.result), o2.onerror = () => t3(o2.error);
      }));
    });
  }
  buildKey(e2) {
    const t2 = e2 ? `_${e2}` : "auth0";
    return `${this.clientId}::${t2}`;
  }
  setNonce(e2, t2) {
    return this.save(Ke.NONCE, this.buildKey(t2), e2);
  }
  setKeyPair(e2) {
    return this.save(Ke.KEYPAIR, this.buildKey(), e2);
  }
  save(e2, t2, n2) {
    return __async(this, null, function* () {
      yield this.executeDbRequest(e2, "readwrite", ((e3) => e3.put(n2, t2)));
    });
  }
  findNonce(e2) {
    return this.find(Ke.NONCE, this.buildKey(e2));
  }
  findKeyPair() {
    return this.find(Ke.KEYPAIR, this.buildKey());
  }
  find(e2, t2) {
    return this.executeDbRequest(e2, "readonly", ((e3) => e3.get(t2)));
  }
  deleteBy(e2, t2) {
    return __async(this, null, function* () {
      const n2 = yield this.executeDbRequest(e2, "readonly", ((e3) => e3.getAllKeys()));
      null == n2 || n2.filter(t2).map(((t3) => this.executeDbRequest(e2, "readwrite", ((e3) => e3.delete(t3)))));
    });
  }
  deleteByClientId(e2, t2) {
    return this.deleteBy(e2, ((e3) => "string" == typeof e3 && e3.startsWith(`${t2}::`)));
  }
  clearNonces() {
    return this.deleteByClientId(Ke.NONCE, this.clientId);
  }
  clearKeyPairs() {
    return this.deleteByClientId(Ke.KEYPAIR, this.clientId);
  }
};
var ze = class {
  constructor(e2) {
    this.storage = new xe(e2);
  }
  getNonce(e2) {
    return this.storage.findNonce(e2);
  }
  setNonce(e2, t2) {
    return this.storage.setNonce(e2, t2);
  }
  getOrGenerateKeyPair() {
    return __async(this, null, function* () {
      let e2 = yield this.storage.findKeyPair();
      return e2 || (e2 = yield X(), yield this.storage.setKeyPair(e2)), e2;
    });
  }
  generateProof(e2) {
    return __async(this, null, function* () {
      const t2 = yield this.getOrGenerateKeyPair();
      return F(Object.assign({ keyPair: t2 }, e2));
    });
  }
  calculateThumbprint() {
    return __async(this, null, function* () {
      return V(yield this.getOrGenerateKeyPair());
    });
  }
  clear() {
    return __async(this, null, function* () {
      yield Promise.all([this.storage.clearNonces(), this.storage.clearKeyPairs()]);
    });
  }
};
var Ee;
!(function(e2) {
  e2.Bearer = "Bearer", e2.DPoP = "DPoP";
})(Ee || (Ee = {}));
var Ne = class {
  constructor(e2, t2) {
    this.hooks = t2, this.config = Object.assign(Object.assign({}, e2), { fetch: e2.fetch || ("undefined" == typeof window ? fetch : window.fetch.bind(window)) });
  }
  isAbsoluteUrl(e2) {
    return /^(https?:)?\/\//i.test(e2);
  }
  buildUrl(e2, t2) {
    if (t2) {
      if (this.isAbsoluteUrl(t2)) return t2;
      if (e2) return `${e2.replace(/\/?\/$/, "")}/${t2.replace(/^\/+/, "")}`;
    }
    throw new TypeError("`url` must be absolute or `baseUrl` non-empty.");
  }
  getAccessToken(e2) {
    return this.config.getAccessToken ? this.config.getAccessToken(e2) : this.hooks.getAccessToken(e2);
  }
  extractUrl(e2) {
    return "string" == typeof e2 ? e2 : e2 instanceof URL ? e2.href : e2.url;
  }
  buildBaseRequest(e2, t2) {
    if (!this.config.baseUrl) return new Request(e2, t2);
    const n2 = this.buildUrl(this.config.baseUrl, this.extractUrl(e2)), o2 = e2 instanceof Request ? new Request(n2, e2) : n2;
    return new Request(o2, t2);
  }
  setAuthorizationHeader(e2, t2, n2 = Ee.Bearer) {
    e2.headers.set("authorization", `${n2} ${t2}`);
  }
  setDpopProofHeader(e2, t2) {
    return __async(this, null, function* () {
      if (!this.config.dpopNonceId) return;
      const n2 = yield this.hooks.getDpopNonce(), o2 = yield this.hooks.generateDpopProof({ accessToken: t2, method: e2.method, nonce: n2, url: e2.url });
      e2.headers.set("dpop", o2);
    });
  }
  prepareRequest(e2, t2) {
    return __async(this, null, function* () {
      const n2 = yield this.getAccessToken(t2);
      let o2, i2;
      "string" == typeof n2 ? (o2 = this.config.dpopNonceId ? Ee.DPoP : Ee.Bearer, i2 = n2) : (o2 = n2.token_type, i2 = n2.access_token), this.setAuthorizationHeader(e2, i2, o2), o2 === Ee.DPoP && (yield this.setDpopProofHeader(e2, i2));
    });
  }
  getHeader(e2, t2) {
    return Array.isArray(e2) ? new Headers(e2).get(t2) || "" : "function" == typeof e2.get ? e2.get(t2) || "" : e2[t2] || "";
  }
  hasUseDpopNonceError(e2) {
    if (401 !== e2.status) return false;
    const t2 = this.getHeader(e2.headers, "www-authenticate");
    return t2.includes("invalid_dpop_nonce") || t2.includes("use_dpop_nonce");
  }
  handleResponse(e2, t2) {
    return __async(this, null, function* () {
      const n2 = this.getHeader(e2.headers, "dpop-nonce");
      if (n2 && (yield this.hooks.setDpopNonce(n2)), !this.hasUseDpopNonceError(e2)) return e2;
      if (!n2 || !t2.onUseDpopNonceError) throw new w(n2);
      return t2.onUseDpopNonceError();
    });
  }
  internalFetchWithAuth(e2, t2, n2, o2) {
    return __async(this, null, function* () {
      const i2 = this.buildBaseRequest(e2, t2);
      yield this.prepareRequest(i2, o2);
      const r2 = yield this.config.fetch(i2);
      return this.handleResponse(r2, n2);
    });
  }
  fetchWithAuth(e2, t2, n2) {
    const o2 = { onUseDpopNonceError: () => this.internalFetchWithAuth(e2, t2, Object.assign(Object.assign({}, o2), { onUseDpopNonceError: void 0 }), n2) };
    return this.internalFetchWithAuth(e2, t2, o2, n2);
  }
};
var Re = class {
  constructor(e2, t2) {
    this.myAccountFetcher = e2, this.apiBase = t2;
  }
  connectAccount(e2) {
    return __async(this, null, function* () {
      const t2 = yield this.myAccountFetcher.fetchWithAuth(`${this.apiBase}v1/connected-accounts/connect`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e2) });
      return this._handleResponse(t2);
    });
  }
  completeAccount(e2) {
    return __async(this, null, function* () {
      const t2 = yield this.myAccountFetcher.fetchWithAuth(`${this.apiBase}v1/connected-accounts/complete`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e2) });
      return this._handleResponse(t2);
    });
  }
  _handleResponse(e2) {
    return __async(this, null, function* () {
      let t2;
      try {
        t2 = yield e2.text(), t2 = JSON.parse(t2);
      } catch (n2) {
        throw new De({ type: "invalid_json", status: e2.status, title: "Invalid JSON response", detail: t2 || String(n2) });
      }
      if (e2.ok) return t2;
      throw new De(t2);
    });
  }
};
var De = class _De extends Error {
  constructor({ type: e2, status: t2, title: n2, detail: o2, validation_errors: i2 }) {
    super(o2), this.name = "MyAccountApiError", this.type = e2, this.status = t2, this.title = n2, this.detail = o2, this.validation_errors = i2, Object.setPrototypeOf(this, _De.prototype);
  }
};
var Ae = new r();
var Ue = class {
  constructor(e2) {
    let t2, n2;
    if (this.userCache = new oe().enclosedCache, this.activeLockKeys = /* @__PURE__ */ new Set(), this.defaultOptions = { authorizationParams: { scope: "openid profile email" }, useRefreshTokensFallback: false, useFormData: true }, this._releaseLockOnPageHide = () => __async(this, null, function* () {
      const e3 = Array.from(this.activeLockKeys);
      for (const t3 of e3) yield Ae.releaseLock(t3);
      this.activeLockKeys.clear(), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
    }), this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), e2), { authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), e2.authorizationParams) }), "undefined" != typeof window && (() => {
      if (!k()) throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
      if (void 0 === k().subtle) throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
    })(), e2.cache && e2.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."), e2.cache) n2 = e2.cache;
    else {
      if (t2 = e2.cacheLocation || "memory", !Oe(t2)) throw new Error(`Invalid cache location "${t2}"`);
      n2 = Oe(t2)();
    }
    this.httpTimeoutMs = e2.httpTimeoutInSeconds ? 1e3 * e2.httpTimeoutInSeconds : 1e4, this.cookieStorage = false === e2.legacySameSiteCookie ? pe : me, this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`, this.isAuthenticatedCookieName = ((e3) => `auth0.${e3}.is.authenticated`)(this.options.clientId), this.sessionCheckExpiryDays = e2.sessionCheckExpiryDays || 1;
    const o2 = e2.useCookiesForTransactions ? this.cookieStorage : fe;
    var i2;
    this.scope = ((e3, t3, ...n3) => {
      if ("object" != typeof e3) return { default: Q(t3, e3, ...n3) };
      let o3 = { default: Q(t3, ...n3) };
      return Object.keys(e3).forEach(((i3) => {
        const r3 = e3[i3];
        o3[i3] = Q(t3, r3, ...n3);
      })), o3;
    })(this.options.authorizationParams.scope, "openid", this.options.useRefreshTokens ? "offline_access" : ""), this.transactionManager = new re(o2, this.options.clientId, this.options.cookieDomain), this.nowProvider = this.options.nowProvider || c, this.cacheManager = new ie(n2, n2.allKeys ? void 0 : new Pe(n2, this.options.clientId), this.nowProvider), this.dpop = this.options.useDpop ? new ze(this.options.clientId) : void 0, this.domainUrl = (i2 = this.options.domain, /^https?:\/\//.test(i2) ? i2 : `https://${i2}`), this.tokenIssuer = ((e3, t3) => e3 ? e3.startsWith("https://") ? e3 : `https://${e3}/` : `${t3}/`)(this.options.issuer, this.domainUrl);
    const r2 = `${this.domainUrl}/me/`, s2 = this.createFetcher(Object.assign(Object.assign({}, this.options.useDpop && { dpopNonceId: "__auth0_my_account_api__" }), { getAccessToken: () => this.getTokenSilently({ authorizationParams: { scope: "create:me:connected_accounts", audience: r2 }, detailedResponse: true }) }));
    this.myAccountApi = new Re(s2, r2), "undefined" != typeof window && window.Worker && this.options.useRefreshTokens && "memory" === t2 && (this.options.workerUrl ? this.worker = new Worker(this.options.workerUrl) : this.worker = new Se());
  }
  _url(e2) {
    const t2 = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || a)));
    return `${this.domainUrl}${e2}&auth0Client=${t2}`;
  }
  _authorizeUrl(e2) {
    return this._url(`/authorize?${P(e2)}`);
  }
  _verifyIdToken(e2, t2, n2) {
    return __async(this, null, function* () {
      const o2 = yield this.nowProvider();
      return ce({ iss: this.tokenIssuer, aud: this.options.clientId, id_token: e2, nonce: t2, organization: n2, leeway: this.options.leeway, max_age: (i2 = this.options.authorizationParams.max_age, "string" != typeof i2 ? i2 : parseInt(i2, 10) || void 0), now: o2 });
      var i2;
    });
  }
  _processOrgHint(e2) {
    e2 ? this.cookieStorage.save(this.orgHintCookieName, e2, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }) : this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain });
  }
  _prepareAuthorizeUrl(e2, t2, n2) {
    return __async(this, null, function* () {
      var o2;
      const i2 = _(v()), r2 = _(v()), s2 = v(), a2 = yield T(s2), c2 = j(a2), u2 = yield null === (o2 = this.dpop) || void 0 === o2 ? void 0 : o2.calculateThumbprint(), d2 = ((e3, t3, n3, o3, i3, r3, s3, a3, c3) => Object.assign(Object.assign(Object.assign({ client_id: e3.clientId }, e3.authorizationParams), n3), { scope: ee(t3, n3.scope, n3.audience), response_type: "code", response_mode: a3 || "query", state: o3, nonce: i3, redirect_uri: s3 || e3.authorizationParams.redirect_uri, code_challenge: r3, code_challenge_method: "S256", dpop_jkt: c3 }))(this.options, this.scope, e2, i2, r2, c2, e2.redirect_uri || this.options.authorizationParams.redirect_uri || n2, null == t2 ? void 0 : t2.response_mode, u2), h2 = this._authorizeUrl(d2);
      return { nonce: r2, code_verifier: s2, scope: d2.scope, audience: d2.audience || "default", redirect_uri: d2.redirect_uri, state: i2, url: h2 };
    });
  }
  loginWithPopup(e2, t2) {
    return __async(this, null, function* () {
      var n2;
      if (e2 = e2 || {}, !(t2 = t2 || {}).popup && (t2.popup = ((e3) => {
        const t3 = window.screenX + (window.innerWidth - 400) / 2, n3 = window.screenY + (window.innerHeight - 600) / 2;
        return window.open(e3, "auth0:authorize:popup", `left=${t3},top=${n3},width=400,height=600,resizable,scrollbars=yes,status=1`);
      })(""), !t2.popup)) throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
      const o2 = yield this._prepareAuthorizeUrl(e2.authorizationParams || {}, { response_mode: "web_message" }, window.location.origin);
      t2.popup.location.href = o2.url;
      const i2 = yield ((e3) => new Promise(((t3, n3) => {
        let o3;
        const i3 = setInterval((() => {
          e3.popup && e3.popup.closed && (clearInterval(i3), clearTimeout(r3), window.removeEventListener("message", o3, false), n3(new m(e3.popup)));
        }), 1e3), r3 = setTimeout((() => {
          clearInterval(i3), n3(new p(e3.popup)), window.removeEventListener("message", o3, false);
        }), 1e3 * (e3.timeoutInSeconds || 60));
        o3 = function(s2) {
          if (s2.data && "authorization_response" === s2.data.type) {
            if (clearTimeout(r3), clearInterval(i3), window.removeEventListener("message", o3, false), e3.popup.close(), s2.data.response.error) return n3(u.fromPayload(s2.data.response));
            t3(s2.data.response);
          }
        }, window.addEventListener("message", o3);
      })))(Object.assign(Object.assign({}, t2), { timeoutInSeconds: t2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60 }));
      if (o2.state !== i2.state) throw new u("state_mismatch", "Invalid state");
      const r2 = (null === (n2 = e2.authorizationParams) || void 0 === n2 ? void 0 : n2.organization) || this.options.authorizationParams.organization;
      yield this._requestToken({ audience: o2.audience, scope: o2.scope, code_verifier: o2.code_verifier, grant_type: "authorization_code", code: i2.code, redirect_uri: o2.redirect_uri }, { nonceIn: o2.nonce, organization: r2 });
    });
  }
  getUser() {
    return __async(this, null, function* () {
      var e2;
      const t2 = yield this._getIdTokenFromCache();
      return null === (e2 = null == t2 ? void 0 : t2.decodedToken) || void 0 === e2 ? void 0 : e2.user;
    });
  }
  getIdTokenClaims() {
    return __async(this, null, function* () {
      var e2;
      const t2 = yield this._getIdTokenFromCache();
      return null === (e2 = null == t2 ? void 0 : t2.decodedToken) || void 0 === e2 ? void 0 : e2.claims;
    });
  }
  loginWithRedirect() {
    return __async(this, arguments, function* (t2 = {}) {
      var n2;
      const o2 = je(t2), { openUrl: i2, fragment: r2, appState: s2 } = o2, a2 = e(o2, ["openUrl", "fragment", "appState"]), c2 = (null === (n2 = a2.authorizationParams) || void 0 === n2 ? void 0 : n2.organization) || this.options.authorizationParams.organization, u2 = yield this._prepareAuthorizeUrl(a2.authorizationParams || {}), { url: d2 } = u2, h2 = e(u2, ["url"]);
      this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, h2), { appState: s2, response_type: ge.Code }), c2 && { organization: c2 }));
      const l2 = r2 ? `${d2}#${r2}` : d2;
      i2 ? yield i2(l2) : window.location.assign(l2);
    });
  }
  handleRedirectCallback() {
    return __async(this, arguments, function* (e2 = window.location.href) {
      const t2 = e2.split("?").slice(1);
      if (0 === t2.length) throw new Error("There are no query params available for parsing.");
      const n2 = this.transactionManager.get();
      if (!n2) throw new u("missing_transaction", "Invalid state");
      this.transactionManager.remove();
      const o2 = ((e3) => {
        e3.indexOf("#") > -1 && (e3 = e3.substring(0, e3.indexOf("#")));
        const t3 = new URLSearchParams(e3);
        return { state: t3.get("state"), code: t3.get("code") || void 0, connect_code: t3.get("connect_code") || void 0, error: t3.get("error") || void 0, error_description: t3.get("error_description") || void 0 };
      })(t2.join(""));
      return n2.response_type === ge.ConnectCode ? this._handleConnectAccountRedirectCallback(o2, n2) : this._handleLoginRedirectCallback(o2, n2);
    });
  }
  _handleLoginRedirectCallback(e2, t2) {
    return __async(this, null, function* () {
      const { code: n2, state: o2, error: i2, error_description: r2 } = e2;
      if (i2) throw new d(i2, r2 || i2, o2, t2.appState);
      if (!t2.code_verifier || t2.state && t2.state !== o2) throw new u("state_mismatch", "Invalid state");
      const s2 = t2.organization, a2 = t2.nonce, c2 = t2.redirect_uri;
      return yield this._requestToken(Object.assign({ audience: t2.audience, scope: t2.scope, code_verifier: t2.code_verifier, grant_type: "authorization_code", code: n2 }, c2 ? { redirect_uri: c2 } : {}), { nonceIn: a2, organization: s2 }), { appState: t2.appState, response_type: ge.Code };
    });
  }
  _handleConnectAccountRedirectCallback(e2, t2) {
    return __async(this, null, function* () {
      const { connect_code: n2, state: o2, error: i2, error_description: r2 } = e2;
      if (i2) throw new h(i2, r2 || i2, t2.connection, o2, t2.appState);
      if (!n2) throw new u("missing_connect_code", "Missing connect code");
      if (!(t2.code_verifier && t2.state && t2.auth_session && t2.redirect_uri && t2.state === o2)) throw new u("state_mismatch", "Invalid state");
      const s2 = yield this.myAccountApi.completeAccount({ auth_session: t2.auth_session, connect_code: n2, redirect_uri: t2.redirect_uri, code_verifier: t2.code_verifier });
      return Object.assign(Object.assign({}, s2), { appState: t2.appState, response_type: ge.ConnectCode });
    });
  }
  checkSession(e2) {
    return __async(this, null, function* () {
      if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
        if (!this.cookieStorage.get("auth0.is.authenticated")) return;
        this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove("auth0.is.authenticated");
      }
      try {
        yield this.getTokenSilently(e2);
      } catch (e3) {
      }
    });
  }
  getTokenSilently() {
    return __async(this, arguments, function* (e2 = {}) {
      var t2, n2;
      const o2 = Object.assign(Object.assign({ cacheMode: "on" }, e2), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e2.authorizationParams), { scope: ee(this.scope, null === (t2 = e2.authorizationParams) || void 0 === t2 ? void 0 : t2.scope, (null === (n2 = e2.authorizationParams) || void 0 === n2 ? void 0 : n2.audience) || this.options.authorizationParams.audience) }) }), i2 = yield ((e3, t3) => {
        let n3 = Ie[t3];
        return n3 || (n3 = e3().finally((() => {
          delete Ie[t3], n3 = null;
        })), Ie[t3] = n3), n3;
      })((() => this._getTokenSilently(o2)), `${this.options.clientId}::${o2.authorizationParams.audience}::${o2.authorizationParams.scope}`);
      return e2.detailedResponse ? i2 : null == i2 ? void 0 : i2.access_token;
    });
  }
  _getTokenSilently(t2) {
    return __async(this, null, function* () {
      const { cacheMode: n2 } = t2, o2 = e(t2, ["cacheMode"]);
      if ("off" !== n2) {
        const e2 = yield this._getEntryFromCache({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId, cacheMode: n2 });
        if (e2) return e2;
      }
      if ("cache-only" === n2) return;
      const i2 = (r2 = this.options.clientId, s2 = o2.authorizationParams.audience || "default", `auth0.lock.getTokenSilently.${r2}.${s2}`);
      var r2, s2;
      if (!(yield ((e2, t3 = 3) => __async(this, null, function* () {
        for (let n3 = 0; n3 < t3; n3++) if (yield e2()) return true;
        return false;
      }))((() => Ae.acquireLock(i2, 5e3)), 10))) throw new l();
      this.activeLockKeys.add(i2), 1 === this.activeLockKeys.size && window.addEventListener("pagehide", this._releaseLockOnPageHide);
      try {
        if ("off" !== n2) {
          const e3 = yield this._getEntryFromCache({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId });
          if (e3) return e3;
        }
        const e2 = this.options.useRefreshTokens ? yield this._getTokenUsingRefreshToken(o2) : yield this._getTokenFromIFrame(o2), { id_token: t3, token_type: r3, access_token: s3, oauthTokenScope: a2, expires_in: c2 } = e2;
        return Object.assign(Object.assign({ id_token: t3, token_type: r3, access_token: s3 }, a2 ? { scope: a2 } : null), { expires_in: c2 });
      } finally {
        yield Ae.releaseLock(i2), this.activeLockKeys.delete(i2), 0 === this.activeLockKeys.size && window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }
    });
  }
  getTokenWithPopup() {
    return __async(this, arguments, function* (e2 = {}, t2 = {}) {
      var n2, o2;
      const i2 = Object.assign(Object.assign({}, e2), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e2.authorizationParams), { scope: ee(this.scope, null === (n2 = e2.authorizationParams) || void 0 === n2 ? void 0 : n2.scope, (null === (o2 = e2.authorizationParams) || void 0 === o2 ? void 0 : o2.audience) || this.options.authorizationParams.audience) }) });
      t2 = Object.assign(Object.assign({}, s), t2), yield this.loginWithPopup(i2, t2);
      return (yield this.cacheManager.get(new te({ scope: i2.authorizationParams.scope, audience: i2.authorizationParams.audience || "default", clientId: this.options.clientId }), void 0, this.options.useMrrt)).access_token;
    });
  }
  isAuthenticated() {
    return __async(this, null, function* () {
      return !!(yield this.getUser());
    });
  }
  _buildLogoutUrl(t2) {
    null !== t2.clientId ? t2.clientId = t2.clientId || this.options.clientId : delete t2.clientId;
    const n2 = t2.logoutParams || {}, { federated: o2 } = n2, i2 = e(n2, ["federated"]), r2 = o2 ? "&federated" : "";
    return this._url(`/v2/logout?${P(Object.assign({ clientId: t2.clientId }, i2))}`) + r2;
  }
  logout() {
    return __async(this, arguments, function* (t2 = {}) {
      var n2;
      const o2 = je(t2), { openUrl: i2 } = o2, r2 = e(o2, ["openUrl"]);
      null === t2.clientId ? yield this.cacheManager.clear() : yield this.cacheManager.clear(t2.clientId || this.options.clientId), this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove(this.isAuthenticatedCookieName, { cookieDomain: this.options.cookieDomain }), this.userCache.remove("@@user@@"), yield null === (n2 = this.dpop) || void 0 === n2 ? void 0 : n2.clear();
      const s2 = this._buildLogoutUrl(r2);
      i2 ? yield i2(s2) : false !== i2 && window.location.assign(s2);
    });
  }
  _getTokenFromIFrame(e2) {
    return __async(this, null, function* () {
      const t2 = Object.assign(Object.assign({}, e2.authorizationParams), { prompt: "none" }), n2 = this.cookieStorage.get(this.orgHintCookieName);
      n2 && !t2.organization && (t2.organization = n2);
      const { url: o2, state: i2, nonce: r2, code_verifier: s2, redirect_uri: a2, scope: c2, audience: d2 } = yield this._prepareAuthorizeUrl(t2, { response_mode: "web_message" }, window.location.origin);
      try {
        if (window.crossOriginIsolated) throw new u("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
        const n3 = e2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds;
        let h2;
        try {
          h2 = new URL(this.domainUrl).origin;
        } catch (e3) {
          h2 = this.domainUrl;
        }
        const p2 = yield ((e3, t3, n4 = 60) => new Promise(((o3, i3) => {
          const r3 = window.document.createElement("iframe");
          r3.setAttribute("width", "0"), r3.setAttribute("height", "0"), r3.style.display = "none";
          const s3 = () => {
            window.document.body.contains(r3) && (window.document.body.removeChild(r3), window.removeEventListener("message", a3, false));
          };
          let a3;
          const c3 = setTimeout((() => {
            i3(new l()), s3();
          }), 1e3 * n4);
          a3 = function(e4) {
            if (e4.origin != t3) return;
            if (!e4.data || "authorization_response" !== e4.data.type) return;
            const n5 = e4.source;
            n5 && n5.close(), e4.data.response.error ? i3(u.fromPayload(e4.data.response)) : o3(e4.data.response), clearTimeout(c3), window.removeEventListener("message", a3, false), setTimeout(s3, 2e3);
          }, window.addEventListener("message", a3, false), window.document.body.appendChild(r3), r3.setAttribute("src", e3);
        })))(o2, h2, n3);
        if (i2 !== p2.state) throw new u("state_mismatch", "Invalid state");
        const m2 = yield this._requestToken(Object.assign(Object.assign({}, e2.authorizationParams), { code_verifier: s2, code: p2.code, grant_type: "authorization_code", redirect_uri: a2, timeout: e2.authorizationParams.timeout || this.httpTimeoutMs }), { nonceIn: r2, organization: t2.organization });
        return Object.assign(Object.assign({}, m2), { scope: c2, oauthTokenScope: m2.scope, audience: d2 });
      } catch (e3) {
        throw "login_required" === e3.error && this.logout({ openUrl: false }), e3;
      }
    });
  }
  _getTokenUsingRefreshToken(e2) {
    return __async(this, null, function* () {
      const t2 = yield this.cacheManager.get(new te({ scope: e2.authorizationParams.scope, audience: e2.authorizationParams.audience || "default", clientId: this.options.clientId }), void 0, this.options.useMrrt);
      if (!(t2 && t2.refresh_token || this.worker)) {
        if (this.options.useRefreshTokensFallback) return yield this._getTokenFromIFrame(e2);
        throw new g(e2.authorizationParams.audience || "default", e2.authorizationParams.scope);
      }
      const n2 = e2.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin, o2 = "number" == typeof e2.timeoutInSeconds ? 1e3 * e2.timeoutInSeconds : null, i2 = ((e3, t3, n3, o3) => {
        var i3;
        if (e3 && n3 && o3) {
          if (t3.audience !== n3) return t3.scope;
          const e4 = o3.split(" "), r3 = (null === (i3 = t3.scope) || void 0 === i3 ? void 0 : i3.split(" ")) || [], s3 = r3.every(((t4) => e4.includes(t4)));
          return e4.length >= r3.length && s3 ? o3 : t3.scope;
        }
        return t3.scope;
      })(this.options.useMrrt, e2.authorizationParams, null == t2 ? void 0 : t2.audience, null == t2 ? void 0 : t2.scope);
      try {
        const u2 = yield this._requestToken(Object.assign(Object.assign(Object.assign({}, e2.authorizationParams), { grant_type: "refresh_token", refresh_token: t2 && t2.refresh_token, redirect_uri: n2 }), o2 && { timeout: o2 }), { scopesToRequest: i2 });
        if (u2.refresh_token && this.options.useMrrt && (null == t2 ? void 0 : t2.refresh_token) && (yield this.cacheManager.updateEntry(t2.refresh_token, u2.refresh_token)), this.options.useMrrt) {
          if (r2 = null == t2 ? void 0 : t2.audience, s2 = null == t2 ? void 0 : t2.scope, a2 = e2.authorizationParams.audience, c2 = e2.authorizationParams.scope, r2 !== a2 || !Ce(c2, s2)) {
            if (!Ce(i2, u2.scope)) {
              if (this.options.useRefreshTokensFallback) return yield this._getTokenFromIFrame(e2);
              yield this.cacheManager.remove(this.options.clientId, e2.authorizationParams.audience, e2.authorizationParams.scope);
              const t3 = ((e3, t4) => {
                const n3 = (null == e3 ? void 0 : e3.split(" ")) || [], o3 = (null == t4 ? void 0 : t4.split(" ")) || [];
                return n3.filter(((e4) => -1 == o3.indexOf(e4))).join(",");
              })(i2, u2.scope);
              throw new y(e2.authorizationParams.audience || "default", t3);
            }
          }
        }
        return Object.assign(Object.assign({}, u2), { scope: e2.authorizationParams.scope, oauthTokenScope: u2.scope, audience: e2.authorizationParams.audience || "default" });
      } catch (t3) {
        if ((t3.message.indexOf("Missing Refresh Token") > -1 || t3.message && t3.message.indexOf("invalid refresh token") > -1) && this.options.useRefreshTokensFallback) return yield this._getTokenFromIFrame(e2);
        throw t3;
      }
      var r2, s2, a2, c2;
    });
  }
  _saveEntryInCache(t2) {
    return __async(this, null, function* () {
      const { id_token: n2, decodedToken: o2 } = t2, i2 = e(t2, ["id_token", "decodedToken"]);
      this.userCache.set("@@user@@", { id_token: n2, decodedToken: o2 }), yield this.cacheManager.setIdToken(this.options.clientId, t2.id_token, t2.decodedToken), yield this.cacheManager.set(i2);
    });
  }
  _getIdTokenFromCache() {
    return __async(this, null, function* () {
      const e2 = this.options.authorizationParams.audience || "default", t2 = this.scope[e2], n2 = yield this.cacheManager.getIdToken(new te({ clientId: this.options.clientId, audience: e2, scope: t2 })), o2 = this.userCache.get("@@user@@");
      return n2 && n2.id_token === (null == o2 ? void 0 : o2.id_token) ? o2 : (this.userCache.set("@@user@@", n2), n2);
    });
  }
  _getEntryFromCache(_0) {
    return __async(this, arguments, function* ({ scope: e2, audience: t2, clientId: n2, cacheMode: o2 }) {
      const i2 = yield this.cacheManager.get(new te({ scope: e2, audience: t2, clientId: n2 }), 60, this.options.useMrrt, o2);
      if (i2 && i2.access_token) {
        const { token_type: e3, access_token: t3, oauthTokenScope: n3, expires_in: o3 } = i2, r2 = yield this._getIdTokenFromCache();
        return r2 && Object.assign(Object.assign({ id_token: r2.id_token, token_type: e3 || "Bearer", access_token: t3 }, n3 ? { scope: n3 } : null), { expires_in: o3 });
      }
    });
  }
  _requestToken(e2, t2) {
    return __async(this, null, function* () {
      const { nonceIn: n2, organization: o2, scopesToRequest: i2 } = t2 || {}, r2 = yield q(Object.assign(Object.assign({ baseUrl: this.domainUrl, client_id: this.options.clientId, auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: this.httpTimeoutMs, useMrrt: this.options.useMrrt, dpop: this.dpop }, e2), { scope: i2 || e2.scope }), this.worker), s2 = yield this._verifyIdToken(r2.id_token, n2, o2);
      return yield this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, r2), { decodedToken: s2, scope: e2.scope, audience: e2.audience || "default" }), r2.scope ? { oauthTokenScope: r2.scope } : null), { client_id: this.options.clientId })), this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this._processOrgHint(o2 || s2.claims.org_id), Object.assign(Object.assign({}, r2), { decodedToken: s2 });
    });
  }
  exchangeToken(e2) {
    return __async(this, null, function* () {
      return this._requestToken({ grant_type: "urn:ietf:params:oauth:grant-type:token-exchange", subject_token: e2.subject_token, subject_token_type: e2.subject_token_type, scope: ee(this.scope, e2.scope, e2.audience || this.options.authorizationParams.audience), audience: e2.audience || this.options.authorizationParams.audience });
    });
  }
  _assertDpop(e2) {
    if (!e2) throw new Error("`useDpop` option must be enabled before using DPoP.");
  }
  getDpopNonce(e2) {
    return this._assertDpop(this.dpop), this.dpop.getNonce(e2);
  }
  setDpopNonce(e2, t2) {
    return this._assertDpop(this.dpop), this.dpop.setNonce(e2, t2);
  }
  generateDpopProof(e2) {
    return this._assertDpop(this.dpop), this.dpop.generateProof(e2);
  }
  createFetcher(e2 = {}) {
    return new Ne(e2, { isDpopEnabled: () => !!this.options.useDpop, getAccessToken: (e3) => {
      var t2;
      return this.getTokenSilently({ authorizationParams: { scope: null === (t2 = null == e3 ? void 0 : e3.scope) || void 0 === t2 ? void 0 : t2.join(" "), audience: null == e3 ? void 0 : e3.audience }, detailedResponse: true });
    }, getDpopNonce: () => this.getDpopNonce(e2.dpopNonceId), setDpopNonce: (t2) => this.setDpopNonce(t2, e2.dpopNonceId), generateDpopProof: (e3) => this.generateDpopProof(e3) });
  }
  connectAccountWithRedirect(e2) {
    return __async(this, null, function* () {
      const { openUrl: t2, appState: n2, connection: o2, authorization_params: i2, redirectUri: r2 = this.options.authorizationParams.redirect_uri || window.location.origin } = e2;
      if (!o2) throw new Error("connection is required");
      const s2 = _(v()), a2 = v(), c2 = yield T(a2), u2 = j(c2), { connect_uri: d2, connect_params: h2, auth_session: l2 } = yield this.myAccountApi.connectAccount({ connection: o2, redirect_uri: r2, state: s2, code_challenge: u2, code_challenge_method: "S256", authorization_params: i2 });
      this.transactionManager.create({ state: s2, code_verifier: a2, auth_session: l2, redirect_uri: r2, appState: n2, connection: o2, response_type: ge.ConnectCode });
      const p2 = new URL(d2);
      p2.searchParams.set("ticket", h2.ticket), t2 ? yield t2(p2.toString()) : window.location.assign(p2);
    });
  }
};

// node_modules/@auth0/auth0-angular/fesm2022/auth0-auth0-angular.mjs
var useragent = {
  name: "@auth0/auth0-angular",
  version: "2.3.0"
};
var Auth0ClientFactory = class {
  static createClient(configFactory) {
    const config = configFactory.get();
    if (!config) {
      throw new Error("Configuration must be specified either through AuthModule.forRoot or through AuthClientConfig.set");
    }
    return new Ue(__spreadProps(__spreadValues({}, config), {
      auth0Client: {
        name: useragent.name,
        version: useragent.version,
        env: {
          "angular/core": VERSION.full
        }
      }
    }));
  }
};
var Auth0ClientService = new InjectionToken("auth0.client");
function isHttpInterceptorRouteConfig(def) {
  return typeof def !== "string";
}
var AuthConfigService = new InjectionToken("auth0-angular.config");
var _AuthClientConfig = class _AuthClientConfig {
  constructor(config) {
    if (config) {
      this.set(config);
    }
  }
  /**
   * Sets configuration to be read by other consumers of the service (see usage notes)
   *
   * @param config The configuration to set
   */
  set(config) {
    this.config = config;
  }
  /**
   * Gets the config that has been set by other consumers of the service
   */
  get() {
    return this.config;
  }
};
_AuthClientConfig.ɵfac = function AuthClientConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthClientConfig)(ɵɵinject(AuthConfigService, 8));
};
_AuthClientConfig.ɵprov = ɵɵdefineInjectable({
  token: _AuthClientConfig,
  factory: _AuthClientConfig.ɵfac,
  providedIn: "root"
});
var AuthClientConfig = _AuthClientConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthClientConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [AuthConfigService]
    }]
  }], null);
})();
var _AbstractNavigator = class _AbstractNavigator {
  constructor(location2, injector) {
    this.location = location2;
    try {
      this.router = injector.get(Router);
    } catch {
    }
  }
  /**
   * Navigates to the specified url. The router will be used if one is available, otherwise it falls back
   * to `window.history.replaceState`.
   *
   * @param url The url to navigate to
   */
  navigateByUrl(url) {
    if (this.router) {
      this.router.navigateByUrl(url);
      return;
    }
    this.location.replaceState(url);
  }
};
_AbstractNavigator.ɵfac = function AbstractNavigator_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbstractNavigator)(ɵɵinject(Location), ɵɵinject(Injector));
};
_AbstractNavigator.ɵprov = ɵɵdefineInjectable({
  token: _AbstractNavigator,
  factory: _AbstractNavigator.ɵfac,
  providedIn: "root"
});
var AbstractNavigator = _AbstractNavigator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractNavigator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Location
  }, {
    type: Injector
  }], null);
})();
var _AuthState = class _AuthState {
  constructor(auth0Client) {
    this.auth0Client = auth0Client;
    this.isLoadingSubject$ = new BehaviorSubject(true);
    this.refresh$ = new Subject();
    this.accessToken$ = new ReplaySubject(1);
    this.errorSubject$ = new ReplaySubject(1);
    this.isLoading$ = this.isLoadingSubject$.asObservable();
    this.accessTokenTrigger$ = this.accessToken$.pipe(scan((acc, current) => ({
      previous: acc.current,
      current
    }), {
      current: null,
      previous: null
    }), filter(({
      previous,
      current
    }) => previous !== current));
    this.isAuthenticatedTrigger$ = this.isLoading$.pipe(filter((loading) => !loading), distinctUntilChanged(), switchMap(() => (
      // To track the value of isAuthenticated over time, we need to merge:
      //  - the current value
      //  - the value whenever the access token changes. (this should always be true of there is an access token
      //    but it is safer to pass this through this.auth0Client.isAuthenticated() nevertheless)
      //  - the value whenever refreshState$ emits
      merge(defer(() => this.auth0Client.isAuthenticated()), this.accessTokenTrigger$.pipe(mergeMap(() => this.auth0Client.isAuthenticated())), this.refresh$.pipe(mergeMap(() => this.auth0Client.isAuthenticated())))
    )));
    this.isAuthenticated$ = this.isAuthenticatedTrigger$.pipe(distinctUntilChanged(), shareReplay(1));
    this.user$ = this.isAuthenticatedTrigger$.pipe(concatMap((authenticated) => authenticated ? this.auth0Client.getUser() : of(null)), distinctUntilChanged());
    this.idTokenClaims$ = this.isAuthenticatedTrigger$.pipe(concatMap((authenticated) => authenticated ? this.auth0Client.getIdTokenClaims() : of(null)));
    this.error$ = this.errorSubject$.asObservable();
  }
  /**
   * Update the isLoading state using the provided value
   *
   * @param isLoading The new value for isLoading
   */
  setIsLoading(isLoading) {
    this.isLoadingSubject$.next(isLoading);
  }
  /**
   * Refresh the state to ensure the `isAuthenticated`, `user$` and `idTokenClaims$`
   * reflect the most up-to-date values from  Auth0Client.
   */
  refresh() {
    this.refresh$.next();
  }
  /**
   * Update the access token, doing so will also refresh the state.
   *
   * @param accessToken The new Access Token
   */
  setAccessToken(accessToken) {
    this.accessToken$.next(accessToken);
  }
  /**
   * Emits the error in the `error$` observable.
   *
   * @param error The new error
   */
  setError(error) {
    this.errorSubject$.next(error);
  }
};
_AuthState.ɵfac = function AuthState_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthState)(ɵɵinject(Auth0ClientService));
};
_AuthState.ɵprov = ɵɵdefineInjectable({
  token: _AuthState,
  factory: _AuthState.ɵfac,
  providedIn: "root"
});
var AuthState = _AuthState;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Ue,
    decorators: [{
      type: Inject,
      args: [Auth0ClientService]
    }]
  }], null);
})();
var _AuthService = class _AuthService {
  constructor(auth0Client, configFactory, navigator, authState) {
    this.auth0Client = auth0Client;
    this.configFactory = configFactory;
    this.navigator = navigator;
    this.authState = authState;
    this.appStateSubject$ = new ReplaySubject(1);
    this.ngUnsubscribe$ = new Subject();
    this.isLoading$ = this.authState.isLoading$;
    this.isAuthenticated$ = this.authState.isAuthenticated$;
    this.user$ = this.authState.user$;
    this.idTokenClaims$ = this.authState.idTokenClaims$;
    this.error$ = this.authState.error$;
    this.appState$ = this.appStateSubject$.asObservable();
    const checkSessionOrCallback$ = (isCallback) => iif(() => isCallback, this.handleRedirectCallback(), defer(() => this.auth0Client.checkSession()));
    this.shouldHandleCallback().pipe(switchMap((isCallback) => checkSessionOrCallback$(isCallback).pipe(catchError((error) => {
      const config = this.configFactory.get();
      this.navigator.navigateByUrl(config.errorPath || "/");
      this.authState.setError(error);
      return of(void 0);
    }))), tap(() => {
      this.authState.setIsLoading(false);
    }), takeUntil(this.ngUnsubscribe$)).subscribe();
  }
  /**
   * Called when the service is destroyed
   */
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
  /**
   * ```js
   * loginWithRedirect(options);
   * ```
   *
   * Performs a redirect to `/authorize` using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated.
   *
   * @param options The login options
   */
  loginWithRedirect(options) {
    return from(this.auth0Client.loginWithRedirect(options));
  }
  /**
   * ```js
   * await loginWithPopup(options);
   * ```
   *
   * Opens a popup with the `/authorize` URL using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated. If the response is successful,
   * results will be valid according to their expiration times.
   *
   * IMPORTANT: This method has to be called from an event handler
   * that was started by the user like a button click, for example,
   * otherwise the popup will be blocked in most browsers.
   *
   * @param options The login options
   * @param config Configuration for the popup window
   */
  loginWithPopup(options, config) {
    return from(this.auth0Client.loginWithPopup(options, config).then(() => {
      this.authState.refresh();
    }));
  }
  /**
   * ```js
   * logout();
   * ```
   *
   * Clears the application session and performs a redirect to `/v2/logout`, using
   * the parameters provided as arguments, to clear the Auth0 session.
   * If the `federated` option is specified it also clears the Identity Provider session.
   * If the `openUrl` option is set to false, it only clears the application session.
   * It is invalid to set both the `federated` to true and `openUrl` to `false`,
   * and an error will be thrown if you do.
   * [Read more about how Logout works at Auth0](https://auth0.com/docs/logout).
   *
   * @param options The logout options
   */
  logout(options) {
    return from(this.auth0Client.logout(options).then(() => {
      if (options?.openUrl === false || options?.openUrl) {
        this.authState.refresh();
      }
    }));
  }
  /**
   * ```js
   * getAccessTokenSilently(options).subscribe(token => ...)
   * ```
   *
   * If there's a valid token stored, return it. Otherwise, opens an
   * iframe with the `/authorize` URL using the parameters provided
   * as arguments. Random and secure `state` and `nonce` parameters
   * will be auto-generated. If the response is successful, results
   * will be valid according to their expiration times.
   *
   * If refresh tokens are used, the token endpoint is called directly with the
   * 'refresh_token' grant. If no refresh token is available to make this call,
   * the SDK falls back to using an iframe to the '/authorize' URL.
   *
   * This method may use a web worker to perform the token call if the in-memory
   * cache is used.
   *
   * If an `audience` value is given to this function, the SDK always falls
   * back to using an iframe to make the token exchange.
   *
   * Note that in all cases, falling back to an iframe requires access to
   * the `auth0` cookie, and thus will not work in browsers that block third-party
   * cookies by default (Safari, Brave, etc).
   *
   * @param options The options for configuring the token fetch.
   */
  getAccessTokenSilently(options = {}) {
    return of(this.auth0Client).pipe(concatMap((client) => options.detailedResponse === true ? client.getTokenSilently(__spreadProps(__spreadValues({}, options), {
      detailedResponse: true
    })) : client.getTokenSilently(options)), tap((token) => {
      if (token) {
        this.authState.setAccessToken(typeof token === "string" ? token : token.access_token);
      }
    }), catchError((error) => {
      this.authState.setError(error);
      this.authState.refresh();
      return throwError(error);
    }));
  }
  /**
   * ```js
   * getTokenWithPopup(options).subscribe(token => ...)
   * ```
   *
   * Get an access token interactively.
   *
   * Opens a popup with the `/authorize` URL using the parameters
   * provided as arguments. Random and secure `state` and `nonce`
   * parameters will be auto-generated. If the response is successful,
   * results will be valid according to their expiration times.
   */
  getAccessTokenWithPopup(options) {
    return of(this.auth0Client).pipe(concatMap((client) => client.getTokenWithPopup(options)), tap((token) => {
      if (token) {
        this.authState.setAccessToken(token);
      }
    }), catchError((error) => {
      this.authState.setError(error);
      this.authState.refresh();
      return throwError(error);
    }));
  }
  /**
   * ```js
   * handleRedirectCallback(url).subscribe(result => ...)
   * ```
   *
   * After the browser redirects back to the callback page,
   * call `handleRedirectCallback` to handle success and error
   * responses from Auth0. If the response is successful, results
   * will be valid according to their expiration times.
   *
   * Calling this method also refreshes the authentication and user states.
   *
   * @param url The URL to that should be used to retrieve the `state` and `code` values. Defaults to `window.location.href` if not given.
   */
  handleRedirectCallback(url) {
    return defer(() => this.auth0Client.handleRedirectCallback(url)).pipe(withLatestFrom(this.authState.isLoading$), tap(([result, isLoading]) => {
      if (!isLoading) {
        this.authState.refresh();
      }
      const appState = result?.appState;
      const target = appState?.target ?? "/";
      if (appState) {
        this.appStateSubject$.next(appState);
      }
      this.navigator.navigateByUrl(target);
    }), map(([result]) => result));
  }
  shouldHandleCallback() {
    return of(location.search).pipe(map((search) => {
      const searchParams = new URLSearchParams(search);
      return (searchParams.has("code") || searchParams.has("error")) && searchParams.has("state") && !this.configFactory.get().skipRedirectCallback;
    }));
  }
};
_AuthService.ɵfac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(ɵɵinject(Auth0ClientService), ɵɵinject(AuthClientConfig), ɵɵinject(AbstractNavigator), ɵɵinject(AuthState));
};
_AuthService.ɵprov = ɵɵdefineInjectable({
  token: _AuthService,
  factory: _AuthService.ɵfac,
  providedIn: "root"
});
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Ue,
    decorators: [{
      type: Inject,
      args: [Auth0ClientService]
    }]
  }, {
    type: AuthClientConfig
  }, {
    type: AbstractNavigator
  }, {
    type: AuthState
  }], null);
})();
var _AuthGuard = class _AuthGuard {
  constructor(auth) {
    this.auth = auth;
  }
  canLoad(route, segments) {
    return this.auth.isAuthenticated$.pipe(take(1));
  }
  canActivate(next, state) {
    return this.redirectIfUnauthenticated(state);
  }
  canActivateChild(childRoute, state) {
    return this.redirectIfUnauthenticated(state);
  }
  redirectIfUnauthenticated(state) {
    return this.auth.isAuthenticated$.pipe(switchMap((loggedIn) => {
      if (!loggedIn) {
        return this.auth.loginWithRedirect({
          appState: {
            target: state.url
          }
        }).pipe(map(() => false));
      }
      return of(true);
    }));
  }
};
_AuthGuard.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthGuard)(ɵɵinject(AuthService));
};
_AuthGuard.ɵprov = ɵɵdefineInjectable({
  token: _AuthGuard,
  factory: _AuthGuard.ɵfac,
  providedIn: "root"
});
var AuthGuard = _AuthGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AuthService
  }], null);
})();
var _AuthModule = class _AuthModule {
  /**
   * Initialize the authentication module system. Configuration can either be specified here,
   * or by calling AuthClientConfig.set (perhaps from an APP_INITIALIZER factory function).
   *
   * @param config The optional configuration for the SDK.
   */
  static forRoot(config) {
    return {
      ngModule: _AuthModule,
      providers: [AuthService, AuthGuard, {
        provide: AuthConfigService,
        useValue: config
      }, {
        provide: Auth0ClientService,
        useFactory: Auth0ClientFactory.createClient,
        deps: [AuthClientConfig]
      }]
    };
  }
};
_AuthModule.ɵfac = function AuthModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthModule)();
};
_AuthModule.ɵmod = ɵɵdefineNgModule({
  type: _AuthModule
});
_AuthModule.ɵinj = ɵɵdefineInjector({});
var AuthModule = _AuthModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule
  }], null, null);
})();
var waitUntil = (signal$) => (source$) => source$.pipe(mergeMap((value) => signal$.pipe(first(), mapTo(value))));
var _AuthHttpInterceptor = class _AuthHttpInterceptor {
  constructor(configFactory, auth0Client, authState, authService) {
    this.configFactory = configFactory;
    this.auth0Client = auth0Client;
    this.authState = authState;
    this.authService = authService;
  }
  intercept(req, next) {
    const config = this.configFactory.get();
    if (!config.httpInterceptor?.allowedList) {
      return next.handle(req);
    }
    const isLoaded$ = this.authService.isLoading$.pipe(filter((isLoading) => !isLoading));
    return this.findMatchingRoute(req, config.httpInterceptor).pipe(concatMap((route) => iif(
      // Check if a route was matched
      () => route !== null,
      // If we have a matching route, call getTokenSilently and attach the token to the
      // outgoing request
      of(route).pipe(waitUntil(isLoaded$), pluck("tokenOptions"), concatMap((options) => this.getAccessTokenSilently(options).pipe(catchError((err) => {
        if (this.allowAnonymous(route, err)) {
          return of("");
        }
        this.authState.setError(err);
        return throwError(err);
      }))), switchMap((token) => {
        const clone = token ? req.clone({
          headers: req.headers.set("Authorization", `Bearer ${token}`)
        }) : req;
        return next.handle(clone);
      })),
      // If the URI being called was not found in our httpInterceptor config, simply
      // pass the request through without attaching a token
      next.handle(req)
    )));
  }
  /**
   * Duplicate of AuthService.getAccessTokenSilently, but with a slightly different error handling.
   * Only used internally in the interceptor.
   *
   * @param options The options for configuring the token fetch.
   */
  getAccessTokenSilently(options) {
    return of(this.auth0Client).pipe(concatMap((client) => client.getTokenSilently(options)), tap((token) => this.authState.setAccessToken(token)), catchError((error) => {
      this.authState.refresh();
      return throwError(error);
    }));
  }
  /**
   * Strips the query and fragment from the given uri
   *
   * @param uri The uri to remove the query and fragment from
   */
  stripQueryFrom(uri) {
    if (uri.indexOf("?") > -1) {
      uri = uri.substr(0, uri.indexOf("?"));
    }
    if (uri.indexOf("#") > -1) {
      uri = uri.substr(0, uri.indexOf("#"));
    }
    return uri;
  }
  /**
   * Determines whether the specified route can have an access token attached to it, based on matching the HTTP request against
   * the interceptor route configuration.
   *
   * @param route The route to test
   * @param request The HTTP request
   */
  canAttachToken(route, request) {
    const testPrimitive = (value) => {
      if (!value) {
        return false;
      }
      const requestPath = this.stripQueryFrom(request.url);
      if (value === requestPath) {
        return true;
      }
      return value.indexOf("*") === value.length - 1 && request.url.startsWith(value.substr(0, value.length - 1));
    };
    if (isHttpInterceptorRouteConfig(route)) {
      if (route.httpMethod && route.httpMethod !== request.method) {
        return false;
      }
      if (!route.uri && !route.uriMatcher) {
        console.warn("Either a uri or uriMatcher is required when configuring the HTTP interceptor.");
      }
      return route.uriMatcher ? route.uriMatcher(request.url) : testPrimitive(route.uri);
    }
    return testPrimitive(route);
  }
  /**
   * Tries to match a route from the SDK configuration to the HTTP request.
   * If a match is found, the route configuration is returned.
   *
   * @param request The Http request
   * @param config HttpInterceptorConfig
   */
  findMatchingRoute(request, config) {
    return from(config.allowedList).pipe(first((route) => this.canAttachToken(route, request), null));
  }
  allowAnonymous(route, err) {
    return !!route && isHttpInterceptorRouteConfig(route) && !!route.allowAnonymous && ["login_required", "consent_required", "missing_refresh_token"].includes(err.error);
  }
};
_AuthHttpInterceptor.ɵfac = function AuthHttpInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthHttpInterceptor)(ɵɵinject(AuthClientConfig), ɵɵinject(Auth0ClientService), ɵɵinject(AuthState), ɵɵinject(AuthService));
};
_AuthHttpInterceptor.ɵprov = ɵɵdefineInjectable({
  token: _AuthHttpInterceptor,
  factory: _AuthHttpInterceptor.ɵfac
});
var AuthHttpInterceptor = _AuthHttpInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthHttpInterceptor, [{
    type: Injectable
  }], () => [{
    type: AuthClientConfig
  }, {
    type: Ue,
    decorators: [{
      type: Inject,
      args: [Auth0ClientService]
    }]
  }, {
    type: AuthState
  }, {
    type: AuthService
  }], null);
})();
function provideAuth0(config) {
  return [AuthService, AuthHttpInterceptor, AuthGuard, {
    provide: AuthConfigService,
    useValue: config
  }, {
    provide: Auth0ClientService,
    useFactory: Auth0ClientFactory.createClient,
    deps: [AuthClientConfig]
  }];
}
var authGuardFn = (route, state) => inject(AuthGuard).canActivate(route, state);
var authHttpInterceptorFn = (req, handle) => inject(AuthHttpInterceptor).intercept(req, {
  handle
});
export {
  AbstractNavigator,
  Auth0ClientFactory,
  Auth0ClientService,
  AuthClientConfig,
  AuthConfigService,
  AuthGuard,
  AuthHttpInterceptor,
  AuthModule,
  AuthService,
  AuthState,
  d as AuthenticationError,
  u as GenericError,
  oe as InMemoryCache,
  ne as LocalStorageCache,
  f as MfaRequiredError,
  g as MissingRefreshTokenError,
  m as PopupCancelledError,
  p as PopupTimeoutError,
  l as TimeoutError,
  ye as User,
  authGuardFn,
  authHttpInterceptorFn,
  isHttpInterceptorRouteConfig,
  provideAuth0
};
//# sourceMappingURL=@auth0_auth0-angular.js.map
