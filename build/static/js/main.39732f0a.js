/*! For license information please see main.39732f0a.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          i = n(853);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var s = new Set(),
          a = {};
        function l(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (a[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          p = {};
        function m(e, t, n, r, i, o, s) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = s);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function _(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(f, e) &&
                      (h.test(e) ? (p[e] = !0) : ((f[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, _);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, _);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, _);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          C = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          I = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          x = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function L(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          U = Object.assign;
        function F(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var j = !1;
        function z(e, t) {
          if (!e || j) return "";
          j = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var i = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  s = i.length - 1,
                  a = o.length - 1;
                1 <= s && 0 <= a && i[s] !== o[a];

              )
                a--;
              for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                  if (1 !== s || 1 !== a)
                    do {
                      if ((s--, 0 > --a || i[s] !== o[a])) {
                        var l = "\n" + i[s].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= s && 0 <= a);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case C:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case S:
              return "StrictMode";
            case P:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case I:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case x:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function B(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function $(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = H(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return U({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + q(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return U({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function oe(e, t) {
          var n = q(t.value),
            r = q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ae(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ae(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function he(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var fe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (fe.hasOwnProperty(e) && fe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(fe).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (fe[t] = fe[e]);
          });
        });
        var ve = U(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function _e(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var be = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ce = null,
          Se = null;
        function Ee(e) {
          if ((e = yi(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wi(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ie(e) {
          Ce ? (Se ? Se.push(e) : (Se = [e])) : (Ce = e);
        }
        function Te() {
          if (Ce) {
            var e = Ce,
              t = Se;
            if (((Se = Ce = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Pe() {}
        var Re = !1;
        function xe(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Re = !1), (null !== Ce || null !== Se) && (Pe(), Te());
          }
        }
        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wi(n);
          if (null === r) return null;
          n = r[t];
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (u)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ue) {
            Ae = !1;
          }
        function Le(e, t, n, r, i, o, s, a, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Me = !1,
          Ue = null,
          Fe = !1,
          je = null,
          ze = {
            onError: function (e) {
              (Me = !0), (Ue = e);
            },
          };
        function We(e, t, n, r, i, o, s, a, l) {
          (Me = !1), (Ue = null), Le.apply(ze, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function qe(e) {
          if (Ve(e) !== e) throw Error(o(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var s = i.alternate;
                if (null === s) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === s.child) {
                  for (s = i.child; s; ) {
                    if (s === n) return qe(i), e;
                    if (s === r) return qe(i), t;
                    s = s.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = s);
                else {
                  for (var a = !1, l = i.child; l; ) {
                    if (l === n) {
                      (a = !0), (n = i), (r = s);
                      break;
                    }
                    if (l === r) {
                      (a = !0), (r = i), (n = s);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!a) {
                    for (l = s.child; l; ) {
                      if (l === n) {
                        (a = !0), (n = s), (r = i);
                        break;
                      }
                      if (l === r) {
                        (a = !0), (r = s), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!a) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var $e = i.unstable_scheduleCallback,
          Ge = i.unstable_cancelCallback,
          Ye = i.unstable_shouldYield,
          Qe = i.unstable_requestPaint,
          Je = i.unstable_now,
          Xe = i.unstable_getCurrentPriorityLevel,
          Ze = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          ot = null;
        var st = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((at(e) / lt) | 0)) | 0;
              },
          at = Math.log,
          lt = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ht(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes,
            s = 268435455 & n;
          if (0 !== s) {
            var a = s & ~i;
            0 !== a ? (r = dt(a)) : 0 !== (o &= s) && (r = dt(o));
          } else 0 !== (s = n & ~i) ? (r = dt(s)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (o = t & -t) || (16 === i && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - st(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function ft(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - st(t))] = n);
        }
        function _t(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - st(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var yt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          Ct,
          St,
          Et,
          It = !1,
          Tt = [],
          Nt = null,
          Pt = null,
          Rt = null,
          xt = new Map(),
          Ot = new Map(),
          At = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Lt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              xt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, i, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [i],
              }),
              null !== t && null !== (t = yi(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function Ut(e) {
          var t = _i(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Be(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      Ct(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = yi(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (be = r), n.target.dispatchEvent(r), (be = null), t.shift();
          }
          return !0;
        }
        function jt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function zt() {
          (It = !1),
            null !== Nt && Ft(Nt) && (Nt = null),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Rt && Ft(Rt) && (Rt = null),
            xt.forEach(jt),
            Ot.forEach(jt);
        }
        function Wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            It ||
              ((It = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, zt)));
        }
        function Vt(e) {
          function t(t) {
            return Wt(t, e);
          }
          if (0 < Tt.length) {
            Wt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Wt(Nt, e),
              null !== Pt && Wt(Pt, e),
              null !== Rt && Wt(Rt, e),
              xt.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Ut(n), null === n.blockedOn && At.shift();
        }
        var Bt = b.ReactCurrentBatchConfig,
          qt = !0;
        function Ht(e, t, n, r) {
          var i = yt,
            o = Bt.transition;
          Bt.transition = null;
          try {
            (yt = 1), $t(e, t, n, r);
          } finally {
            (yt = i), (Bt.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var i = yt,
            o = Bt.transition;
          Bt.transition = null;
          try {
            (yt = 4), $t(e, t, n, r);
          } finally {
            (yt = i), (Bt.transition = o);
          }
        }
        function $t(e, t, n, r) {
          if (qt) {
            var i = Yt(e, t, n, r);
            if (null === i) qr(e, t, r, Gt, n), Lt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Nt = Mt(Nt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Pt = Mt(Pt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Rt = Mt(Rt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var o = i.pointerId;
                    return xt.set(o, Mt(xt.get(o) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (o = i.pointerId),
                      Ot.set(o, Mt(Ot.get(o) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Lt(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== i; ) {
                var o = yi(i);
                if (
                  (null !== o && wt(o),
                  null === (o = Yt(e, t, n, r)) && qr(e, t, r, Gt, n),
                  o === i)
                )
                  break;
                i = o;
              }
              null !== i && r.stopPropagation();
            } else qr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Yt(e, t, n, r) {
          if (((Gt = null), null !== (e = _i((e = we(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Be(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Qt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            i = "value" in Jt ? Jt.value : Jt.textContent,
            o = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var s = r - e;
          for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
          return (Zt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, i, o) {
            for (var s in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(s) && ((t = e[s]), (this[s] = t ? t(i) : i[s]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            U(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var sn,
          an,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = on(cn),
          dn = U({}, cn, { view: 0, detail: 0 }),
          hn = on(dn),
          fn = U({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((sn = e.screenX - ln.screenX),
                        (an = e.screenY - ln.screenY))
                      : (an = sn = 0),
                    (ln = e)),
                  sn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : an;
            },
          }),
          pn = on(fn),
          mn = on(U({}, fn, { dataTransfer: 0 })),
          gn = on(U({}, dn, { relatedTarget: 0 })),
          vn = on(
            U({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          _n = U({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = on(_n),
          bn = on(U({}, cn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cn[e]) && !!t[e];
        }
        function En() {
          return Sn;
        }
        var In = U({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = on(In),
          Nn = on(
            U({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pn = on(
            U({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Rn = on(
            U({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          xn = U({}, fn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = on(xn),
          An = [9, 13, 27, 32],
          Dn = u && "CompositionEvent" in window,
          Ln = null;
        u && "documentMode" in document && (Ln = document.documentMode);
        var Mn = u && "TextEvent" in window && !Ln,
          Un = u && (!Dn || (Ln && 8 < Ln && 11 >= Ln)),
          Fn = String.fromCharCode(32),
          jn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Bn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Bn[e.type] : "textarea" === t;
        }
        function Hn(e, t, n, r) {
          Ie(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          $n = null;
        function Gn(e) {
          Fr(e, 0);
        }
        function Yn(e) {
          if ($(bi(e))) return e;
        }
        function Qn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (u) {
          var Xn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), ($n = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn($n)) {
            var t = [];
            Hn(t, $n, e, we(e)), xe(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), ($n = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn($n);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function sr(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var ar =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (ar(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!d.call(t, i) || !ar(e[i], t[i])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = hr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && fr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  o = Math.min(r.start, i);
                (r = void 0 === r.end ? o : Math.min(r.end, i)),
                  !e.extend && o > r && ((i = r), (r = o), (o = i)),
                  (i = ur(n, o));
                var s = ur(n, r);
                i &&
                  s &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== s.node ||
                    e.focusOffset !== s.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(s.node, s.offset))
                    : (t.setEnd(s.node, s.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = u && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          _r = null,
          yr = !1;
        function br(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          yr ||
            null == gr ||
            gr !== G(r) ||
            ("selectionStart" in (r = gr) && fr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (_r && lr(_r, r)) ||
              ((_r = r),
              0 < (r = Kr(vr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Cr = {},
          Sr = {};
        function Er(e) {
          if (Cr[e]) return Cr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (Cr[e] = n[t]);
          return e;
        }
        u &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Ir = Er("animationend"),
          Tr = Er("animationiteration"),
          Nr = Er("animationstart"),
          Pr = Er("transitionend"),
          Rr = new Map(),
          xr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Or(e, t) {
          Rr.set(e, t), l(t, [e]);
        }
        for (var Ar = 0; Ar < xr.length; Ar++) {
          var Dr = xr[Ar];
          Or(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Or(Ir, "onAnimationEnd"),
          Or(Tr, "onAnimationIteration"),
          Or(Nr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Pr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Lr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Lr)
          );
        function Ur(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, s, a, l, c) {
              if ((We.apply(this, arguments), Me)) {
                if (!Me) throw Error(o(198));
                var u = Ue;
                (Me = !1), (Ue = null), Fe || ((Fe = !0), (je = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                  var a = r[s],
                    l = a.instance,
                    c = a.currentTarget;
                  if (((a = a.listener), l !== o && i.isPropagationStopped()))
                    break e;
                  Ur(i, a, c), (o = l);
                }
              else
                for (s = 0; s < r.length; s++) {
                  if (
                    ((l = (a = r[s]).instance),
                    (c = a.currentTarget),
                    (a = a.listener),
                    l !== o && i.isPropagationStopped())
                  )
                    break e;
                  Ur(i, a, c), (o = l);
                }
            }
          }
          if (Fe) throw ((e = je), (Fe = !1), (je = null), e);
        }
        function jr(e, t) {
          var n = t[mi];
          void 0 === n && (n = t[mi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Br(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Br(n, e, r, t);
        }
        var Wr = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Wr]) {
            (e[Wr] = !0),
              s.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Wr] || ((t[Wr] = !0), zr("selectionchange", !1, t));
          }
        }
        function Br(e, t, n, r) {
          switch (Qt(t)) {
            case 1:
              var i = Ht;
              break;
            case 4:
              i = Kt;
              break;
            default:
              i = $t;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function qr(e, t, n, r, i) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var s = r.tag;
              if (3 === s || 4 === s) {
                var a = r.stateNode.containerInfo;
                if (a === i || (8 === a.nodeType && a.parentNode === i)) break;
                if (4 === s)
                  for (s = r.return; null !== s; ) {
                    var l = s.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = s.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    s = s.return;
                  }
                for (; null !== a; ) {
                  if (null === (s = _i(a))) return;
                  if (5 === (l = s.tag) || 6 === l) {
                    r = o = s;
                    continue e;
                  }
                  a = a.parentNode;
                }
              }
              r = r.return;
            }
          xe(function () {
            var r = o,
              i = we(n),
              s = [];
            e: {
              var a = Rr.get(e);
              if (void 0 !== a) {
                var l = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Tn;
                    break;
                  case "focusin":
                    (c = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Pn;
                    break;
                  case Ir:
                  case Tr:
                  case Nr:
                    l = vn;
                    break;
                  case Pr:
                    l = Rn;
                    break;
                  case "scroll":
                    l = hn;
                    break;
                  case "wheel":
                    l = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Nn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  h = u ? (null !== a ? a + "Capture" : null) : a;
                u = [];
                for (var f, p = r; null !== p; ) {
                  var m = (f = p).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== m &&
                      ((f = m),
                      null !== h &&
                        null != (m = Oe(p, h)) &&
                        u.push(Hr(p, m, f))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < u.length &&
                  ((a = new l(a, c, null, n, i)),
                  s.push({ event: a, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(a = "mouseover" === e || "pointerover" === e) ||
                  n === be ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!_i(c) && !c[pi])) &&
                  (l || a) &&
                  ((a =
                    i.window === i
                      ? i
                      : (a = i.ownerDocument)
                      ? a.defaultView || a.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? _i(c)
                          : null) &&
                        (c !== (d = Ve(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = r)),
                  l !== c))
              ) {
                if (
                  ((u = pn),
                  (m = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Nn),
                    (m = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? a : bi(l)),
                  (f = null == c ? a : bi(c)),
                  ((a = new u(m, p + "leave", l, n, i)).target = d),
                  (a.relatedTarget = f),
                  (m = null),
                  _i(i) === r &&
                    (((u = new u(h, p + "enter", c, n, i)).target = f),
                    (u.relatedTarget = d),
                    (m = u)),
                  (d = m),
                  l && c)
                )
                  e: {
                    for (h = c, p = 0, f = u = l; f; f = $r(f)) p++;
                    for (f = 0, m = h; m; m = $r(m)) f++;
                    for (; 0 < p - f; ) (u = $r(u)), p--;
                    for (; 0 < f - p; ) (h = $r(h)), f--;
                    for (; p--; ) {
                      if (u === h || (null !== h && u === h.alternate)) break e;
                      (u = $r(u)), (h = $r(h));
                    }
                    u = null;
                  }
                else u = null;
                null !== l && Gr(s, a, l, u, !1),
                  null !== c && null !== d && Gr(s, d, c, u, !0);
              }
              if (
                "select" ===
                  (l =
                    (a = r ? bi(r) : window).nodeName &&
                    a.nodeName.toLowerCase()) ||
                ("input" === l && "file" === a.type)
              )
                var g = Qn;
              else if (qn(a))
                if (Jn) g = sr;
                else {
                  g = ir;
                  var v = rr;
                }
              else
                (l = a.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === a.type || "radio" === a.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Hn(s, g, n, i)
                  : (v && v(e, a, r),
                    "focusout" === e &&
                      (v = a._wrapperState) &&
                      v.controlled &&
                      "number" === a.type &&
                      ee(a, "number", a.value)),
                (v = r ? bi(r) : window),
                e)
              ) {
                case "focusin":
                  (qn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (_r = null));
                  break;
                case "focusout":
                  _r = vr = gr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), br(s, n, i);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  br(s, n, i);
              }
              var _;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Vn
                  ? zn(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (Un &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Vn && (_ = en())
                    : ((Xt = "value" in (Jt = i) ? Jt.value : Jt.textContent),
                      (Vn = !0))),
                0 < (v = Kr(r, y)).length &&
                  ((y = new bn(y, e, null, n, i)),
                  s.push({ event: y, listeners: v }),
                  _ ? (y.data = _) : null !== (_ = Wn(n)) && (y.data = _))),
                (_ = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Wn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((jn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!Dn && zn(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Un && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((i = new bn("onBeforeInput", "beforeinput", null, n, i)),
                  s.push({ event: i, listeners: r }),
                  (i.data = _));
            }
            Fr(s, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              o = i.stateNode;
            5 === i.tag &&
              null !== o &&
              ((i = o),
              null != (o = Oe(e, n)) && r.unshift(Hr(e, o, i)),
              null != (o = Oe(e, t)) && r.push(Hr(e, o, i))),
              (e = e.return);
          }
          return r;
        }
        function $r(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, i) {
          for (var o = t._reactName, s = []; null !== n && n !== r; ) {
            var a = n,
              l = a.alternate,
              c = a.stateNode;
            if (null !== l && l === r) break;
            5 === a.tag &&
              null !== c &&
              ((a = c),
              i
                ? null != (l = Oe(n, o)) && s.unshift(Hr(n, l, a))
                : i || (null != (l = Oe(n, o)) && s.push(Hr(n, l, a)))),
              (n = n.return);
          }
          0 !== s.length && e.push({ event: t, listeners: s });
        }
        var Yr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Qr, "");
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oi = "function" === typeof Promise ? Promise : void 0,
          si =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oi
              ? function (e) {
                  return oi.resolve(null).then(e).catch(ai);
                }
              : ri;
        function ai(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function li(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Vt(t);
        }
        function ci(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ui(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var di = Math.random().toString(36).slice(2),
          hi = "__reactFiber$" + di,
          fi = "__reactProps$" + di,
          pi = "__reactContainer$" + di,
          mi = "__reactEvents$" + di,
          gi = "__reactListeners$" + di,
          vi = "__reactHandles$" + di;
        function _i(e) {
          var t = e[hi];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pi] || n[hi])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ui(e); null !== e; ) {
                  if ((n = e[hi])) return n;
                  e = ui(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function yi(e) {
          return !(e = e[hi] || e[pi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function bi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wi(e) {
          return e[fi] || null;
        }
        var ki = [],
          Ci = -1;
        function Si(e) {
          return { current: e };
        }
        function Ei(e) {
          0 > Ci || ((e.current = ki[Ci]), (ki[Ci] = null), Ci--);
        }
        function Ii(e, t) {
          Ci++, (ki[Ci] = e.current), (e.current = t);
        }
        var Ti = {},
          Ni = Si(Ti),
          Pi = Si(!1),
          Ri = Ti;
        function xi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ti;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            o = {};
          for (i in n) o[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Oi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ai() {
          Ei(Pi), Ei(Ni);
        }
        function Di(e, t, n) {
          if (Ni.current !== Ti) throw Error(o(168));
          Ii(Ni, t), Ii(Pi, n);
        }
        function Li(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(o(108, B(e) || "Unknown", i));
          return U({}, n, r);
        }
        function Mi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ti),
            (Ri = Ni.current),
            Ii(Ni, e),
            Ii(Pi, Pi.current),
            !0
          );
        }
        function Ui(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Li(e, t, Ri)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ei(Pi),
              Ei(Ni),
              Ii(Ni, e))
            : Ei(Pi),
            Ii(Pi, n);
        }
        var Fi = null,
          ji = !1,
          zi = !1;
        function Wi(e) {
          null === Fi ? (Fi = [e]) : Fi.push(e);
        }
        function Vi() {
          if (!zi && null !== Fi) {
            zi = !0;
            var e = 0,
              t = yt;
            try {
              var n = Fi;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fi = null), (ji = !1);
            } catch (i) {
              throw (null !== Fi && (Fi = Fi.slice(e + 1)), $e(Ze, Vi), i);
            } finally {
              (yt = t), (zi = !1);
            }
          }
          return null;
        }
        var Bi = [],
          qi = 0,
          Hi = null,
          Ki = 0,
          $i = [],
          Gi = 0,
          Yi = null,
          Qi = 1,
          Ji = "";
        function Xi(e, t) {
          (Bi[qi++] = Ki), (Bi[qi++] = Hi), (Hi = e), (Ki = t);
        }
        function Zi(e, t, n) {
          ($i[Gi++] = Qi), ($i[Gi++] = Ji), ($i[Gi++] = Yi), (Yi = e);
          var r = Qi;
          e = Ji;
          var i = 32 - st(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var o = 32 - st(t) + i;
          if (30 < o) {
            var s = i - (i % 5);
            (o = (r & ((1 << s) - 1)).toString(32)),
              (r >>= s),
              (i -= s),
              (Qi = (1 << (32 - st(t) + i)) | (n << i) | r),
              (Ji = o + e);
          } else (Qi = (1 << o) | (n << i) | r), (Ji = e);
        }
        function eo(e) {
          null !== e.return && (Xi(e, 1), Zi(e, 1, 0));
        }
        function to(e) {
          for (; e === Hi; )
            (Hi = Bi[--qi]), (Bi[qi] = null), (Ki = Bi[--qi]), (Bi[qi] = null);
          for (; e === Yi; )
            (Yi = $i[--Gi]),
              ($i[Gi] = null),
              (Ji = $i[--Gi]),
              ($i[Gi] = null),
              (Qi = $i[--Gi]),
              ($i[Gi] = null);
        }
        var no = null,
          ro = null,
          io = !1,
          oo = null;
        function so(e, t) {
          var n = xc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ao(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ci(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yi ? { id: Qi, overflow: Ji } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = xc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function lo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (io) {
            var t = ro;
            if (t) {
              var n = t;
              if (!ao(e, t)) {
                if (lo(e)) throw Error(o(418));
                t = ci(n.nextSibling);
                var r = no;
                t && ao(e, t)
                  ? so(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e));
              }
            } else {
              if (lo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e);
            }
          }
        }
        function uo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function ho(e) {
          if (e !== no) return !1;
          if (!io) return uo(e), (io = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (lo(e)) throw (fo(), Error(o(418)));
            for (; t; ) so(e, t), (t = ci(t.nextSibling));
          }
          if ((uo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ci(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ci(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fo() {
          for (var e = ro; e; ) e = ci(e.nextSibling);
        }
        function po() {
          (ro = no = null), (io = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = b.ReactCurrentBatchConfig;
        function vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var i = r,
                s = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === s
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    null === e ? delete t[s] : (t[s] = e);
                  }),
                  (t._stringRef = s),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function _o(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function yo(e) {
          return (0, e._init)(e._payload);
        }
        function bo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Ac(e, t)).index = 0), (e.sibling = null), e;
          }
          function s(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function a(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Uc(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === C
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === O &&
                    yo(o) === t.type))
              ? (((r = i(t, n.props)).ref = vo(e, t, n)), (r.return = e), r)
              : (((r = Dc(n.type, n.key, n.props, null, e.mode, r)).ref = vo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fc(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Lc(n, e.mode, r, o)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Uc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Dc(t.type, t.key, t.props, null, e.mode, n)).ref = vo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Fc(t, e.mode, n)).return = e), t;
                case O:
                  return h(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || L(t))
                return ((t = Lc(t, e.mode, n, null)).return = e), t;
              _o(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === i ? c(e, t, n, r) : null;
                case k:
                  return n.key === i ? u(e, t, n, r) : null;
                case O:
                  return f(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || L(n)) return null !== i ? null : d(e, t, n, r, null);
              _o(e, n);
            }
            return null;
          }
          function p(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case O:
                  return p(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || L(r))
                return d(t, (e = e.get(n) || null), r, i, null);
              _o(t, r);
            }
            return null;
          }
          function m(i, o, a, l) {
            for (
              var c = null, u = null, d = o, m = (o = 0), g = null;
              null !== d && m < a.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = f(i, d, a[m], l);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(i, d),
                (o = s(v, o, m)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v),
                (d = g);
            }
            if (m === a.length) return n(i, d), io && Xi(i, m), c;
            if (null === d) {
              for (; m < a.length; m++)
                null !== (d = h(i, a[m], l)) &&
                  ((o = s(d, o, m)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return io && Xi(i, m), c;
            }
            for (d = r(i, d); m < a.length; m++)
              null !== (g = p(d, i, m, a[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (o = s(g, o, m)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(i, e);
                }),
              io && Xi(i, m),
              c
            );
          }
          function g(i, a, l, c) {
            var u = L(l);
            if ("function" !== typeof u) throw Error(o(150));
            if (null == (l = u.call(l))) throw Error(o(151));
            for (
              var d = (u = null), m = a, g = (a = 0), v = null, _ = l.next();
              null !== m && !_.done;
              g++, _ = l.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var y = f(i, m, _.value, c);
              if (null === y) {
                null === m && (m = v);
                break;
              }
              e && m && null === y.alternate && t(i, m),
                (a = s(y, a, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y),
                (m = v);
            }
            if (_.done) return n(i, m), io && Xi(i, g), u;
            if (null === m) {
              for (; !_.done; g++, _ = l.next())
                null !== (_ = h(i, _.value, c)) &&
                  ((a = s(_, a, g)),
                  null === d ? (u = _) : (d.sibling = _),
                  (d = _));
              return io && Xi(i, g), u;
            }
            for (m = r(i, m); !_.done; g++, _ = l.next())
              null !== (_ = p(m, i, g, _.value, c)) &&
                (e &&
                  null !== _.alternate &&
                  m.delete(null === _.key ? g : _.key),
                (a = s(_, a, g)),
                null === d ? (u = _) : (d.sibling = _),
                (d = _));
            return (
              e &&
                m.forEach(function (e) {
                  return t(i, e);
                }),
              io && Xi(i, g),
              u
            );
          }
          return function e(r, o, s, l) {
            if (
              ("object" === typeof s &&
                null !== s &&
                s.type === C &&
                null === s.key &&
                (s = s.props.children),
              "object" === typeof s && null !== s)
            ) {
              switch (s.$$typeof) {
                case w:
                  e: {
                    for (var c = s.key, u = o; null !== u; ) {
                      if (u.key === c) {
                        if ((c = s.type) === C) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((o = i(u, s.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === O &&
                            yo(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((o = i(u, s.props)).ref = vo(r, u, s)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    s.type === C
                      ? (((o = Lc(s.props.children, r.mode, l, s.key)).return =
                          r),
                        (r = o))
                      : (((l = Dc(
                          s.type,
                          s.key,
                          s.props,
                          null,
                          r.mode,
                          l
                        )).ref = vo(r, o, s)),
                        (l.return = r),
                        (r = l));
                  }
                  return a(r);
                case k:
                  e: {
                    for (u = s.key; null !== o; ) {
                      if (o.key === u) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === s.containerInfo &&
                          o.stateNode.implementation === s.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = i(o, s.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Fc(s, r.mode, l)).return = r), (r = o);
                  }
                  return a(r);
                case O:
                  return e(r, o, (u = s._init)(s._payload), l);
              }
              if (te(s)) return m(r, o, s, l);
              if (L(s)) return g(r, o, s, l);
              _o(r, s);
            }
            return ("string" === typeof s && "" !== s) || "number" === typeof s
              ? ((s = "" + s),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = i(o, s)).return = r), (r = o))
                  : (n(r, o), ((o = Uc(s, r.mode, l)).return = r), (r = o)),
                a(r))
              : n(r, o);
          };
        }
        var wo = bo(!0),
          ko = bo(!1),
          Co = Si(null),
          So = null,
          Eo = null,
          Io = null;
        function To() {
          Io = Eo = So = null;
        }
        function No(e) {
          var t = Co.current;
          Ei(Co), (e._currentValue = t);
        }
        function Po(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ro(e, t) {
          (So = e),
            (Io = Eo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ya = !0), (e.firstContext = null));
        }
        function xo(e) {
          var t = e._currentValue;
          if (Io !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Eo)
            ) {
              if (null === So) throw Error(o(308));
              (Eo = e), (So.dependencies = { lanes: 0, firstContext: e });
            } else Eo = Eo.next = e;
          return t;
        }
        var Oo = null;
        function Ao(e) {
          null === Oo ? (Oo = [e]) : Oo.push(e);
        }
        function Do(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Ao(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Lo(e, r)
          );
        }
        function Lo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Mo = !1;
        function Uo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Fo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function jo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function zo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nl))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Lo(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Ao(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Lo(e, n)
          );
        }
        function Wo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), _t(e, n);
          }
        }
        function Vo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var s = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (i = o = s) : (o = o.next = s), (n = n.next);
              } while (null !== n);
              null === o ? (i = o = t) : (o = o.next = t);
            } else i = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Bo(e, t, n, r) {
          var i = e.updateQueue;
          Mo = !1;
          var o = i.firstBaseUpdate,
            s = i.lastBaseUpdate,
            a = i.shared.pending;
          if (null !== a) {
            i.shared.pending = null;
            var l = a,
              c = l.next;
            (l.next = null), null === s ? (o = c) : (s.next = c), (s = l);
            var u = e.alternate;
            null !== u &&
              (a = (u = u.updateQueue).lastBaseUpdate) !== s &&
              (null === a ? (u.firstBaseUpdate = c) : (a.next = c),
              (u.lastBaseUpdate = l));
          }
          if (null !== o) {
            var d = i.baseState;
            for (s = 0, u = c = l = null, a = o; ; ) {
              var h = a.lane,
                f = a.eventTime;
              if ((r & h) === h) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = a;
                  switch (((h = t), (f = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(f, d, h);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (h =
                            "function" === typeof (p = m.payload)
                              ? p.call(f, d, h)
                              : p) ||
                        void 0 === h
                      )
                        break e;
                      d = U({}, d, h);
                      break e;
                    case 2:
                      Mo = !0;
                  }
                }
                null !== a.callback &&
                  0 !== a.lane &&
                  ((e.flags |= 64),
                  null === (h = i.effects) ? (i.effects = [a]) : h.push(a));
              } else
                (f = {
                  eventTime: f,
                  lane: h,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                }),
                  null === u ? ((c = u = f), (l = d)) : (u = u.next = f),
                  (s |= h);
              if (null === (a = a.next)) {
                if (null === (a = i.shared.pending)) break;
                (a = (h = a).next),
                  (h.next = null),
                  (i.lastBaseUpdate = h),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === u && (l = d),
              (i.baseState = l),
              (i.firstBaseUpdate = c),
              (i.lastBaseUpdate = u),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (s |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === o && (i.shared.lanes = 0);
            (Ml |= s), (e.lanes = s), (e.memoizedState = d);
          }
        }
        function qo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var Ho = {},
          Ko = Si(Ho),
          $o = Si(Ho),
          Go = Si(Ho);
        function Yo(e) {
          if (e === Ho) throw Error(o(174));
          return e;
        }
        function Qo(e, t) {
          switch ((Ii(Go, t), Ii($o, e), Ii(Ko, Ho), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ei(Ko), Ii(Ko, t);
        }
        function Jo() {
          Ei(Ko), Ei($o), Ei(Go);
        }
        function Xo(e) {
          Yo(Go.current);
          var t = Yo(Ko.current),
            n = le(t, e.type);
          t !== n && (Ii($o, e), Ii(Ko, n));
        }
        function Zo(e) {
          $o.current === e && (Ei(Ko), Ei($o));
        }
        var es = Si(0);
        function ts(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ns = [];
        function rs() {
          for (var e = 0; e < ns.length; e++)
            ns[e]._workInProgressVersionPrimary = null;
          ns.length = 0;
        }
        var is = b.ReactCurrentDispatcher,
          os = b.ReactCurrentBatchConfig,
          ss = 0,
          as = null,
          ls = null,
          cs = null,
          us = !1,
          ds = !1,
          hs = 0,
          fs = 0;
        function ps() {
          throw Error(o(321));
        }
        function ms(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ar(e[n], t[n])) return !1;
          return !0;
        }
        function gs(e, t, n, r, i, s) {
          if (
            ((ss = s),
            (as = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (is.current = null === e || null === e.memoizedState ? Zs : ea),
            (e = n(r, i)),
            ds)
          ) {
            s = 0;
            do {
              if (((ds = !1), (hs = 0), 25 <= s)) throw Error(o(301));
              (s += 1),
                (cs = ls = null),
                (t.updateQueue = null),
                (is.current = ta),
                (e = n(r, i));
            } while (ds);
          }
          if (
            ((is.current = Xs),
            (t = null !== ls && null !== ls.next),
            (ss = 0),
            (cs = ls = as = null),
            (us = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function vs() {
          var e = 0 !== hs;
          return (hs = 0), e;
        }
        function _s() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === cs ? (as.memoizedState = cs = e) : (cs = cs.next = e), cs
          );
        }
        function ys() {
          if (null === ls) {
            var e = as.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ls.next;
          var t = null === cs ? as.memoizedState : cs.next;
          if (null !== t) (cs = t), (ls = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (ls = e).memoizedState,
              baseState: ls.baseState,
              baseQueue: ls.baseQueue,
              queue: ls.queue,
              next: null,
            }),
              null === cs ? (as.memoizedState = cs = e) : (cs = cs.next = e);
          }
          return cs;
        }
        function bs(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function ws(e) {
          var t = ys(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = ls,
            i = r.baseQueue,
            s = n.pending;
          if (null !== s) {
            if (null !== i) {
              var a = i.next;
              (i.next = s.next), (s.next = a);
            }
            (r.baseQueue = i = s), (n.pending = null);
          }
          if (null !== i) {
            (s = i.next), (r = r.baseState);
            var l = (a = null),
              c = null,
              u = s;
            do {
              var d = u.lane;
              if ((ss & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var h = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = h), (a = r)) : (c = c.next = h),
                  (as.lanes |= d),
                  (Ml |= d);
              }
              u = u.next;
            } while (null !== u && u !== s);
            null === c ? (a = r) : (c.next = l),
              ar(r, t.memoizedState) || (ya = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (s = i.lane), (as.lanes |= s), (Ml |= s), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ks(e) {
          var t = ys(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            s = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var a = (i = i.next);
            do {
              (s = e(s, a.action)), (a = a.next);
            } while (a !== i);
            ar(s, t.memoizedState) || (ya = !0),
              (t.memoizedState = s),
              null === t.baseQueue && (t.baseState = s),
              (n.lastRenderedState = s);
          }
          return [s, r];
        }
        function Cs() {}
        function Ss(e, t) {
          var n = as,
            r = ys(),
            i = t(),
            s = !ar(r.memoizedState, i);
          if (
            (s && ((r.memoizedState = i), (ya = !0)),
            (r = r.queue),
            Ms(Ts.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              s ||
              (null !== cs && 1 & cs.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              xs(9, Is.bind(null, n, r, i, t), void 0, null),
              null === Pl)
            )
              throw Error(o(349));
            0 !== (30 & ss) || Es(n, t, i);
          }
          return i;
        }
        function Es(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = as.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (as.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Is(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ns(t) && Ps(e);
        }
        function Ts(e, t, n) {
          return n(function () {
            Ns(t) && Ps(e);
          });
        }
        function Ns(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ar(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ps(e) {
          var t = Lo(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Rs(e) {
          var t = _s();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: bs,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Gs.bind(null, as, e)),
            [t.memoizedState, e]
          );
        }
        function xs(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = as.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (as.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Os() {
          return ys().memoizedState;
        }
        function As(e, t, n, r) {
          var i = _s();
          (as.flags |= e),
            (i.memoizedState = xs(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ds(e, t, n, r) {
          var i = ys();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ls) {
            var s = ls.memoizedState;
            if (((o = s.destroy), null !== r && ms(r, s.deps)))
              return void (i.memoizedState = xs(t, n, o, r));
          }
          (as.flags |= e), (i.memoizedState = xs(1 | t, n, o, r));
        }
        function Ls(e, t) {
          return As(8390656, 8, e, t);
        }
        function Ms(e, t) {
          return Ds(2048, 8, e, t);
        }
        function Us(e, t) {
          return Ds(4, 2, e, t);
        }
        function Fs(e, t) {
          return Ds(4, 4, e, t);
        }
        function js(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function zs(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ds(4, 4, js.bind(null, t, e), n)
          );
        }
        function Ws() {}
        function Vs(e, t) {
          var n = ys();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ms(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Bs(e, t) {
          var n = ys();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ms(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function qs(e, t, n) {
          return 0 === (21 & ss)
            ? (e.baseState && ((e.baseState = !1), (ya = !0)),
              (e.memoizedState = n))
            : (ar(n, t) ||
                ((n = mt()), (as.lanes |= n), (Ml |= n), (e.baseState = !0)),
              t);
        }
        function Hs(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = os.transition;
          os.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (os.transition = r);
          }
        }
        function Ks() {
          return ys().memoizedState;
        }
        function $s(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ys(e))
          )
            Qs(t, n);
          else if (null !== (n = Do(e, t, n, r))) {
            nc(n, e, r, ec()), Js(n, t, r);
          }
        }
        function Gs(e, t, n) {
          var r = tc(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ys(e)) Qs(t, i);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var s = t.lastRenderedState,
                  a = o(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = a), ar(a, s))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((i.next = i), Ao(t))
                      : ((i.next = l.next), (l.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (c) {}
            null !== (n = Do(e, t, i, r)) &&
              (nc(n, e, r, (i = ec())), Js(n, t, r));
          }
        }
        function Ys(e) {
          var t = e.alternate;
          return e === as || (null !== t && t === as);
        }
        function Qs(e, t) {
          ds = us = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Js(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), _t(e, n);
          }
        }
        var Xs = {
            readContext: xo,
            useCallback: ps,
            useContext: ps,
            useEffect: ps,
            useImperativeHandle: ps,
            useInsertionEffect: ps,
            useLayoutEffect: ps,
            useMemo: ps,
            useReducer: ps,
            useRef: ps,
            useState: ps,
            useDebugValue: ps,
            useDeferredValue: ps,
            useTransition: ps,
            useMutableSource: ps,
            useSyncExternalStore: ps,
            useId: ps,
            unstable_isNewReconciler: !1,
          },
          Zs = {
            readContext: xo,
            useCallback: function (e, t) {
              return (_s().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: xo,
            useEffect: Ls,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                As(4194308, 4, js.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return As(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return As(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = _s();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = _s();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = $s.bind(null, as, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (_s().memoizedState = e);
            },
            useState: Rs,
            useDebugValue: Ws,
            useDeferredValue: function (e) {
              return (_s().memoizedState = e);
            },
            useTransition: function () {
              var e = Rs(!1),
                t = e[0];
              return (
                (e = Hs.bind(null, e[1])), (_s().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = as,
                i = _s();
              if (io) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Pl)) throw Error(o(349));
                0 !== (30 & ss) || Es(r, t, n);
              }
              i.memoizedState = n;
              var s = { value: n, getSnapshot: t };
              return (
                (i.queue = s),
                Ls(Ts.bind(null, r, s, e), [e]),
                (r.flags |= 2048),
                xs(9, Is.bind(null, r, s, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = _s(),
                t = Pl.identifierPrefix;
              if (io) {
                var n = Ji;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Qi & ~(1 << (32 - st(Qi) - 1))).toString(32) + n)),
                  0 < (n = hs++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = fs++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ea = {
            readContext: xo,
            useCallback: Vs,
            useContext: xo,
            useEffect: Ms,
            useImperativeHandle: zs,
            useInsertionEffect: Us,
            useLayoutEffect: Fs,
            useMemo: Bs,
            useReducer: ws,
            useRef: Os,
            useState: function () {
              return ws(bs);
            },
            useDebugValue: Ws,
            useDeferredValue: function (e) {
              return qs(ys(), ls.memoizedState, e);
            },
            useTransition: function () {
              return [ws(bs)[0], ys().memoizedState];
            },
            useMutableSource: Cs,
            useSyncExternalStore: Ss,
            useId: Ks,
            unstable_isNewReconciler: !1,
          },
          ta = {
            readContext: xo,
            useCallback: Vs,
            useContext: xo,
            useEffect: Ms,
            useImperativeHandle: zs,
            useInsertionEffect: Us,
            useLayoutEffect: Fs,
            useMemo: Bs,
            useReducer: ks,
            useRef: Os,
            useState: function () {
              return ks(bs);
            },
            useDebugValue: Ws,
            useDeferredValue: function (e) {
              var t = ys();
              return null === ls
                ? (t.memoizedState = e)
                : qs(t, ls.memoizedState, e);
            },
            useTransition: function () {
              return [ks(bs)[0], ys().memoizedState];
            },
            useMutableSource: Cs,
            useSyncExternalStore: Ss,
            useId: Ks,
            unstable_isNewReconciler: !1,
          };
        function na(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = U({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ra(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : U({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ia = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              i = tc(e),
              o = jo(r, i);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, i)) && (nc(t, e, i, r), Wo(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              i = tc(e),
              o = jo(r, i);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = zo(e, o, i)) && (nc(t, e, i, r), Wo(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              i = jo(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = zo(e, i, r)) && (nc(t, e, r, n), Wo(t, e, r));
          },
        };
        function oa(e, t, n, r, i, o, s) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, s)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(i, o);
        }
        function sa(e, t, n) {
          var r = !1,
            i = Ti,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = xo(o))
              : ((i = Oi(t) ? Ri : Ni.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? xi(e, i)
                  : Ti)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ia),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function aa(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ia.enqueueReplaceState(t, t.state, null);
        }
        function la(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Uo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (i.context = xo(o))
            : ((o = Oi(t) ? Ri : Ni.current), (i.context = xi(e, o))),
            (i.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (ra(e, t, o, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && ia.enqueueReplaceState(i, i.state, null),
              Bo(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function ca(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += W(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (o) {
            i = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function ua(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function da(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ha = "function" === typeof WeakMap ? WeakMap : Map;
        function fa(e, t, n) {
          ((n = jo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              ql || ((ql = !0), (Hl = r)), da(0, t);
            }),
            n
          );
        }
        function pa(e, t, n) {
          (n = jo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                da(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                da(0, t),
                  "function" !== typeof r &&
                    (null === Kl ? (Kl = new Set([this])) : Kl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ma(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ha();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Ec.bind(null, e, t, n)), t.then(e, e));
        }
        function ga(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function va(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = jo(-1, 1)).tag = 2), zo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var _a = b.ReactCurrentOwner,
          ya = !1;
        function ba(e, t, n, r) {
          t.child = null === e ? ko(t, null, n, r) : wo(t, e.child, n, r);
        }
        function wa(e, t, n, r, i) {
          n = n.render;
          var o = t.ref;
          return (
            Ro(t, i),
            (r = gs(e, t, n, r, o, i)),
            (n = vs()),
            null === e || ya
              ? (io && n && eo(t), (t.flags |= 1), ba(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                qa(e, t, i))
          );
        }
        function ka(e, t, n, r, i) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Oc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Dc(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ca(e, t, o, r, i));
          }
          if (((o = e.child), 0 === (e.lanes & i))) {
            var s = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(s, r) &&
              e.ref === t.ref
            )
              return qa(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Ac(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ca(e, t, n, r, i) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (lr(o, r) && e.ref === t.ref) {
              if (((ya = !1), (t.pendingProps = r = o), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), qa(e, t, i);
              0 !== (131072 & e.flags) && (ya = !0);
            }
          }
          return Ia(e, t, n, r, i);
        }
        function Sa(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ii(Al, Ol),
                (Ol |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ii(Al, Ol),
                  (Ol |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ii(Al, Ol),
                (Ol |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ii(Al, Ol),
              (Ol |= r);
          return ba(e, t, i, n), t.child;
        }
        function Ea(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ia(e, t, n, r, i) {
          var o = Oi(n) ? Ri : Ni.current;
          return (
            (o = xi(t, o)),
            Ro(t, i),
            (n = gs(e, t, n, r, o, i)),
            (r = vs()),
            null === e || ya
              ? (io && r && eo(t), (t.flags |= 1), ba(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                qa(e, t, i))
          );
        }
        function Ta(e, t, n, r, i) {
          if (Oi(n)) {
            var o = !0;
            Mi(t);
          } else o = !1;
          if ((Ro(t, i), null === t.stateNode))
            Ba(e, t), sa(t, n, r), la(t, n, r, i), (r = !0);
          else if (null === e) {
            var s = t.stateNode,
              a = t.memoizedProps;
            s.props = a;
            var l = s.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = xo(c))
              : (c = xi(t, (c = Oi(n) ? Ri : Ni.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof s.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof s.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof s.componentWillReceiveProps) ||
              ((a !== r || l !== c) && aa(t, s, r, c)),
              (Mo = !1);
            var h = t.memoizedState;
            (s.state = h),
              Bo(t, r, s, i),
              (l = t.memoizedState),
              a !== r || h !== l || Pi.current || Mo
                ? ("function" === typeof u &&
                    (ra(t, n, u, r), (l = t.memoizedState)),
                  (a = Mo || oa(t, n, a, r, h, l, c))
                    ? (d ||
                        ("function" !== typeof s.UNSAFE_componentWillMount &&
                          "function" !== typeof s.componentWillMount) ||
                        ("function" === typeof s.componentWillMount &&
                          s.componentWillMount(),
                        "function" === typeof s.UNSAFE_componentWillMount &&
                          s.UNSAFE_componentWillMount()),
                      "function" === typeof s.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof s.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = c),
                  (r = a))
                : ("function" === typeof s.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (s = t.stateNode),
              Fo(e, t),
              (a = t.memoizedProps),
              (c = t.type === t.elementType ? a : na(t.type, a)),
              (s.props = c),
              (d = t.pendingProps),
              (h = s.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = xo(l))
                : (l = xi(t, (l = Oi(n) ? Ri : Ni.current)));
            var f = n.getDerivedStateFromProps;
            (u =
              "function" === typeof f ||
              "function" === typeof s.getSnapshotBeforeUpdate) ||
              ("function" !== typeof s.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof s.componentWillReceiveProps) ||
              ((a !== d || h !== l) && aa(t, s, r, l)),
              (Mo = !1),
              (h = t.memoizedState),
              (s.state = h),
              Bo(t, r, s, i);
            var p = t.memoizedState;
            a !== d || h !== p || Pi.current || Mo
              ? ("function" === typeof f &&
                  (ra(t, n, f, r), (p = t.memoizedState)),
                (c = Mo || oa(t, n, c, r, h, p, l) || !1)
                  ? (u ||
                      ("function" !== typeof s.UNSAFE_componentWillUpdate &&
                        "function" !== typeof s.componentWillUpdate) ||
                      ("function" === typeof s.componentWillUpdate &&
                        s.componentWillUpdate(r, p, l),
                      "function" === typeof s.UNSAFE_componentWillUpdate &&
                        s.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof s.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof s.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof s.componentDidUpdate ||
                      (a === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof s.getSnapshotBeforeUpdate ||
                      (a === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (s.props = r),
                (s.state = p),
                (s.context = l),
                (r = c))
              : ("function" !== typeof s.componentDidUpdate ||
                  (a === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof s.getSnapshotBeforeUpdate ||
                  (a === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Na(e, t, n, r, o, i);
        }
        function Na(e, t, n, r, i, o) {
          Ea(e, t);
          var s = 0 !== (128 & t.flags);
          if (!r && !s) return i && Ui(t, n, !1), qa(e, t, o);
          (r = t.stateNode), (_a.current = t);
          var a =
            s && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && s
              ? ((t.child = wo(t, e.child, null, o)),
                (t.child = wo(t, null, a, o)))
              : ba(e, t, a, o),
            (t.memoizedState = r.state),
            i && Ui(t, n, !0),
            t.child
          );
        }
        function Pa(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Di(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Di(0, t.context, !1),
            Qo(e, t.containerInfo);
        }
        function Ra(e, t, n, r, i) {
          return po(), mo(i), (t.flags |= 256), ba(e, t, n, r), t.child;
        }
        var xa,
          Oa,
          Aa,
          Da,
          La = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ma(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ua(e, t, n) {
          var r,
            i = t.pendingProps,
            s = es.current,
            a = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & s)),
            r
              ? ((a = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (s |= 1),
            Ii(es, 1 & s),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = i.children),
                  (e = i.fallback),
                  a
                    ? ((i = t.mode),
                      (a = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & i) && null !== a
                        ? ((a.childLanes = 0), (a.pendingProps = l))
                        : (a = Mc(l, i, 0, null)),
                      (e = Lc(e, i, n, null)),
                      (a.return = t),
                      (e.return = t),
                      (a.sibling = e),
                      (t.child = a),
                      (t.child.memoizedState = Ma(n)),
                      (t.memoizedState = La),
                      e)
                    : Fa(t, l))
            );
          if (null !== (s = e.memoizedState) && null !== (r = s.dehydrated))
            return (function (e, t, n, r, i, s, a) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), ja(e, t, a, (r = ua(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = r.fallback),
                    (i = t.mode),
                    (r = Mc(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((s = Lc(s, i, a, null)).flags |= 2),
                    (r.return = t),
                    (s.return = t),
                    (r.sibling = s),
                    (t.child = r),
                    0 !== (1 & t.mode) && wo(t, e.child, null, a),
                    (t.child.memoizedState = Ma(a)),
                    (t.memoizedState = La),
                    s);
              if (0 === (1 & t.mode)) return ja(e, t, a, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), ja(e, t, a, (r = ua((s = Error(o(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (a & e.childLanes)), ya || l)) {
                if (null !== (r = Pl)) {
                  switch (a & -a) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | a)) ? 0 : i) &&
                    i !== s.retryLane &&
                    ((s.retryLane = i), Lo(e, i), nc(r, e, i, -1));
                }
                return mc(), ja(e, t, a, (r = ua(Error(o(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tc.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = s.treeContext),
                  (ro = ci(i.nextSibling)),
                  (no = t),
                  (io = !0),
                  (oo = null),
                  null !== e &&
                    (($i[Gi++] = Qi),
                    ($i[Gi++] = Ji),
                    ($i[Gi++] = Yi),
                    (Qi = e.id),
                    (Ji = e.overflow),
                    (Yi = t)),
                  (t = Fa(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, i, r, s, n);
          if (a) {
            (a = i.fallback), (l = t.mode), (r = (s = e.child).sibling);
            var c = { mode: "hidden", children: i.children };
            return (
              0 === (1 & l) && t.child !== s
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = c),
                  (t.deletions = null))
                : ((i = Ac(s, c)).subtreeFlags = 14680064 & s.subtreeFlags),
              null !== r
                ? (a = Ac(r, a))
                : ((a = Lc(a, l, n, null)).flags |= 2),
              (a.return = t),
              (i.return = t),
              (i.sibling = a),
              (t.child = i),
              (i = a),
              (a = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Ma(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (a.memoizedState = l),
              (a.childLanes = e.childLanes & ~n),
              (t.memoizedState = La),
              i
            );
          }
          return (
            (e = (a = e.child).sibling),
            (i = Ac(a, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function Fa(e, t) {
          return (
            ((t = Mc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function ja(e, t, n, r) {
          return (
            null !== r && mo(r),
            wo(t, e.child, null, n),
            ((e = Fa(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function za(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Po(e.return, t, n);
        }
        function Wa(e, t, n, r, i) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i));
        }
        function Va(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            o = r.tail;
          if ((ba(e, t, r.children, n), 0 !== (2 & (r = es.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && za(e, n, t);
                else if (19 === e.tag) za(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ii(es, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === ts(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Wa(t, !1, i, n, o);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === ts(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Wa(t, !0, n, null, o);
                break;
              case "together":
                Wa(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ba(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function qa(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ml |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ac((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ac(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ha(e, t) {
          if (!io)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ka(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function $a(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ka(t), null;
            case 1:
            case 17:
              return Oi(t.type) && Ai(), Ka(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Jo(),
                Ei(Pi),
                Ei(Ni),
                rs(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ho(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (sc(oo), (oo = null)))),
                Oa(e, t),
                Ka(t),
                null
              );
            case 5:
              Zo(t);
              var i = Yo(Go.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Aa(e, t, n, r, i),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ka(t), null;
                }
                if (((e = Yo(Ko.current)), ho(t))) {
                  (r = t.stateNode), (n = t.type);
                  var s = t.memoizedProps;
                  switch (
                    ((r[hi] = t), (r[fi] = s), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      jr("cancel", r), jr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      jr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Lr.length; i++) jr(Lr[i], r);
                      break;
                    case "source":
                      jr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      jr("error", r), jr("load", r);
                      break;
                    case "details":
                      jr("toggle", r);
                      break;
                    case "input":
                      Q(r, s), jr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!s.multiple }),
                        jr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, s), jr("invalid", r);
                  }
                  for (var l in (_e(n, s), (i = null), s))
                    if (s.hasOwnProperty(l)) {
                      var c = s[l];
                      "children" === l
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== s.suppressHydrationWarning &&
                              Xr(r.textContent, c, e),
                            (i = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== s.suppressHydrationWarning &&
                              Xr(r.textContent, c, e),
                            (i = ["children", "" + c]))
                        : a.hasOwnProperty(l) &&
                          null != c &&
                          "onScroll" === l &&
                          jr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), Z(r, s, !0);
                      break;
                    case "textarea":
                      K(r), se(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof s.onClick && (r.onclick = Zr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ae(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[hi] = t),
                    (e[fi] = r),
                    xa(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = ye(n, r)), n)) {
                      case "dialog":
                        jr("cancel", e), jr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        jr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Lr.length; i++) jr(Lr[i], e);
                        i = r;
                        break;
                      case "source":
                        jr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        jr("error", e), jr("load", e), (i = r);
                        break;
                      case "details":
                        jr("toggle", e), (i = r);
                        break;
                      case "input":
                        Q(e, r), (i = Y(e, r)), jr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = U({}, r, { value: void 0 })),
                          jr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), jr("invalid", e);
                    }
                    for (s in (_e(n, i), (c = i)))
                      if (c.hasOwnProperty(s)) {
                        var u = c[s];
                        "style" === s
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === s
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === s
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && he(e, u)
                            : "number" === typeof u && he(e, "" + u)
                          : "suppressContentEditableWarning" !== s &&
                            "suppressHydrationWarning" !== s &&
                            "autoFocus" !== s &&
                            (a.hasOwnProperty(s)
                              ? null != u && "onScroll" === s && jr("scroll", e)
                              : null != u && y(e, s, u, l));
                      }
                    switch (n) {
                      case "input":
                        K(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        K(e), se(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + q(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (s = r.value)
                            ? ne(e, !!r.multiple, s, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ka(t), null;
            case 6:
              if (e && null != t.stateNode) Da(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Yo(Go.current)), Yo(Ko.current), ho(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[hi] = t),
                    (s = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  s && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[hi] = t),
                    (t.stateNode = r);
              }
              return Ka(t), null;
            case 13:
              if (
                (Ei(es),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  io &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fo(), po(), (t.flags |= 98560), (s = !1);
                else if (((s = ho(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!s) throw Error(o(318));
                    if (
                      !(s =
                        null !== (s = t.memoizedState) ? s.dehydrated : null)
                    )
                      throw Error(o(317));
                    s[hi] = t;
                  } else
                    po(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ka(t), (s = !1);
                } else null !== oo && (sc(oo), (oo = null)), (s = !0);
                if (!s) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & es.current)
                        ? 0 === Dl && (Dl = 3)
                        : mc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ka(t),
                  null);
            case 4:
              return (
                Jo(),
                Oa(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                Ka(t),
                null
              );
            case 10:
              return No(t.type._context), Ka(t), null;
            case 19:
              if ((Ei(es), null === (s = t.memoizedState))) return Ka(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = s.rendering)))
                if (r) Ha(s, !1);
                else {
                  if (0 !== Dl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ts(e))) {
                        for (
                          t.flags |= 128,
                            Ha(s, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((s = n).flags &= 14680066),
                            null === (l = s.alternate)
                              ? ((s.childLanes = 0),
                                (s.lanes = e),
                                (s.child = null),
                                (s.subtreeFlags = 0),
                                (s.memoizedProps = null),
                                (s.memoizedState = null),
                                (s.updateQueue = null),
                                (s.dependencies = null),
                                (s.stateNode = null))
                              : ((s.childLanes = l.childLanes),
                                (s.lanes = l.lanes),
                                (s.child = l.child),
                                (s.subtreeFlags = 0),
                                (s.deletions = null),
                                (s.memoizedProps = l.memoizedProps),
                                (s.memoizedState = l.memoizedState),
                                (s.updateQueue = l.updateQueue),
                                (s.type = l.type),
                                (e = l.dependencies),
                                (s.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ii(es, (1 & es.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== s.tail &&
                    Je() > Vl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ha(s, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ts(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ha(s, !0),
                      null === s.tail &&
                        "hidden" === s.tailMode &&
                        !l.alternate &&
                        !io)
                    )
                      return Ka(t), null;
                  } else
                    2 * Je() - s.renderingStartTime > Vl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ha(s, !1),
                      (t.lanes = 4194304));
                s.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = s.last) ? (n.sibling = l) : (t.child = l),
                    (s.last = l));
              }
              return null !== s.tail
                ? ((t = s.tail),
                  (s.rendering = t),
                  (s.tail = t.sibling),
                  (s.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = es.current),
                  Ii(es, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ka(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ol) &&
                    (Ka(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ka(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Ga(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Oi(t.type) && Ai(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Jo(),
                Ei(Pi),
                Ei(Ni),
                rs(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if (
                (Ei(es),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                po();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ei(es), null;
            case 4:
              return Jo(), null;
            case 10:
              return No(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (xa = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Oa = function () {}),
          (Aa = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), Yo(Ko.current);
              var o,
                s = null;
              switch (n) {
                case "input":
                  (i = Y(e, i)), (r = Y(e, r)), (s = []);
                  break;
                case "select":
                  (i = U({}, i, { value: void 0 })),
                    (r = U({}, r, { value: void 0 })),
                    (s = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (s = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (_e(n, r), (n = null), i))
                if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u])
                  if ("style" === u) {
                    var l = i[u];
                    for (o in l)
                      l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (a.hasOwnProperty(u)
                        ? s || (s = [])
                        : (s = s || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((l = null != i ? i[u] : void 0),
                  r.hasOwnProperty(u) && c !== l && (null != c || null != l))
                )
                  if ("style" === u)
                    if (l) {
                      for (o in l)
                        !l.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          l[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (s || (s = []), s.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != c && l !== c && (s = s || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (s = s || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (a.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && jr("scroll", e),
                            s || l === c || (s = []))
                          : (s = s || []).push(u, c));
              }
              n && (s = s || []).push("style", n);
              var u = s;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Da = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ya = !1,
          Qa = !1,
          Ja = "function" === typeof WeakSet ? WeakSet : Set,
          Xa = null;
        function Za(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sc(e, t, r);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (r) {
            Sc(e, t, r);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), void 0 !== o && el(t, n, o);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function il(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ol(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ol(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[hi],
              delete t[fi],
              delete t[mi],
              delete t[gi],
              delete t[vi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function al(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var ul = null,
          dl = !1;
        function hl(e, t, n) {
          for (n = n.child; null !== n; ) fl(e, t, n), (n = n.sibling);
        }
        function fl(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(it, n);
            } catch (a) {}
          switch (n.tag) {
            case 5:
              Qa || Za(n, t);
            case 6:
              var r = ul,
                i = dl;
              (ul = null),
                hl(e, t, n),
                (dl = i),
                null !== (ul = r) &&
                  (dl
                    ? ((e = ul),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ul.removeChild(n.stateNode));
              break;
            case 18:
              null !== ul &&
                (dl
                  ? ((e = ul),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? li(e.parentNode, n)
                      : 1 === e.nodeType && li(e, n),
                    Vt(e))
                  : li(ul, n.stateNode));
              break;
            case 4:
              (r = ul),
                (i = dl),
                (ul = n.stateNode.containerInfo),
                (dl = !0),
                hl(e, t, n),
                (ul = r),
                (dl = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Qa &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var o = i,
                    s = o.destroy;
                  (o = o.tag),
                    void 0 !== s &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      el(n, t, s),
                    (i = i.next);
                } while (i !== r);
              }
              hl(e, t, n);
              break;
            case 1:
              if (
                !Qa &&
                (Za(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (a) {
                  Sc(n, t, a);
                }
              hl(e, t, n);
              break;
            case 21:
              hl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Qa = (r = Qa) || null !== n.memoizedState),
                  hl(e, t, n),
                  (Qa = r))
                : hl(e, t, n);
              break;
            default:
              hl(e, t, n);
          }
        }
        function pl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ja()),
              t.forEach(function (t) {
                var r = Nc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var s = e,
                  a = t,
                  l = a;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (ul = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (ul = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === ul) throw Error(o(160));
                fl(s, a, i), (ul = null), (dl = !1);
                var c = i.alternate;
                null !== c && (c.return = null), (i.return = null);
              } catch (u) {
                Sc(i, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), vl(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (g) {
                  Sc(e, e.return, g);
                }
                try {
                  nl(5, e, e.return);
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              break;
            case 1:
              ml(t, e), vl(e), 512 & r && null !== n && Za(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                vl(e),
                512 & r && null !== n && Za(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  he(i, "");
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var s = e.memoizedProps,
                  a = null !== n ? n.memoizedProps : s,
                  l = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === l &&
                      "radio" === s.type &&
                      null != s.name &&
                      J(i, s),
                      ye(l, a);
                    var u = ye(l, s);
                    for (a = 0; a < c.length; a += 2) {
                      var d = c[a],
                        h = c[a + 1];
                      "style" === d
                        ? ge(i, h)
                        : "dangerouslySetInnerHTML" === d
                        ? de(i, h)
                        : "children" === d
                        ? he(i, h)
                        : y(i, d, h, u);
                    }
                    switch (l) {
                      case "input":
                        X(i, s);
                        break;
                      case "textarea":
                        oe(i, s);
                        break;
                      case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        null != p
                          ? ne(i, !!s.multiple, p, !1)
                          : f !== !!s.multiple &&
                            (null != s.defaultValue
                              ? ne(i, !!s.multiple, s.defaultValue, !0)
                              : ne(i, !!s.multiple, s.multiple ? [] : "", !1));
                    }
                    i[fi] = s;
                  } catch (g) {
                    Sc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), vl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (i = e.stateNode), (s = e.memoizedProps);
                try {
                  i.nodeValue = s;
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                vl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (g) {
                  Sc(e, e.return, g);
                }
              break;
            case 4:
            default:
              ml(t, e), vl(e);
              break;
            case 13:
              ml(t, e),
                vl(e),
                8192 & (i = e.child).flags &&
                  ((s = null !== i.memoizedState),
                  (i.stateNode.isHidden = s),
                  !s ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Wl = Je())),
                4 & r && pl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Qa = (u = Qa) || d), ml(t, e), (Qa = u))
                  : ml(t, e),
                vl(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Xa = e, d = e.child; null !== d; ) {
                    for (h = Xa = d; null !== Xa; ) {
                      switch (((p = (f = Xa).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, f, f.return);
                          break;
                        case 1:
                          Za(f, f.return);
                          var m = f.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = f), (n = f.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Sc(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Za(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            wl(h);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = f), (Xa = p)) : wl(h);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, h = e; ; ) {
                  if (5 === h.tag) {
                    if (null === d) {
                      d = h;
                      try {
                        (i = h.stateNode),
                          u
                            ? "function" === typeof (s = i.style).setProperty
                              ? s.setProperty("display", "none", "important")
                              : (s.display = "none")
                            : ((l = h.stateNode),
                              (a =
                                void 0 !== (c = h.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (l.style.display = me("display", a)));
                      } catch (g) {
                        Sc(e, e.return, g);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === d)
                      try {
                        h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                      } catch (g) {
                        Sc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== h.tag && 23 !== h.tag) ||
                      null === h.memoizedState ||
                      h === e) &&
                    null !== h.child
                  ) {
                    (h.child.return = h), (h = h.child);
                    continue;
                  }
                  if (h === e) break e;
                  for (; null === h.sibling; ) {
                    if (null === h.return || h.return === e) break e;
                    d === h && (d = null), (h = h.return);
                  }
                  d === h && (d = null),
                    (h.sibling.return = h.return),
                    (h = h.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), vl(e), 4 & r && pl(e);
            case 21:
          }
        }
        function vl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (he(i, ""), (r.flags &= -33)),
                    cl(e, al(e), i);
                  break;
                case 3:
                case 4:
                  var s = r.stateNode.containerInfo;
                  ll(e, al(e), s);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (a) {
              Sc(e, e.return, a);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function _l(e, t, n) {
          (Xa = e), yl(e, t, n);
        }
        function yl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xa; ) {
            var i = Xa,
              o = i.child;
            if (22 === i.tag && r) {
              var s = null !== i.memoizedState || Ya;
              if (!s) {
                var a = i.alternate,
                  l = (null !== a && null !== a.memoizedState) || Qa;
                a = Ya;
                var c = Qa;
                if (((Ya = s), (Qa = l) && !c))
                  for (Xa = i; null !== Xa; )
                    (l = (s = Xa).child),
                      22 === s.tag && null !== s.memoizedState
                        ? kl(i)
                        : null !== l
                        ? ((l.return = s), (Xa = l))
                        : kl(i);
                for (; null !== o; ) (Xa = o), yl(o, t, n), (o = o.sibling);
                (Xa = i), (Ya = a), (Qa = c);
              }
              bl(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== o
                ? ((o.return = i), (Xa = o))
                : bl(e);
          }
        }
        function bl(e) {
          for (; null !== Xa; ) {
            var t = Xa;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qa || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Qa)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : na(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var s = t.updateQueue;
                      null !== s && qo(t, s, r);
                      break;
                    case 3:
                      var a = t.updateQueue;
                      if (null !== a) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        qo(t, a, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var h = d.dehydrated;
                            null !== h && Vt(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Qa || (512 & t.flags && il(t));
              } catch (f) {
                Sc(t, t.return, f);
              }
            }
            if (t === e) {
              Xa = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xa = n);
              break;
            }
            Xa = t.return;
          }
        }
        function wl(e) {
          for (; null !== Xa; ) {
            var t = Xa;
            if (t === e) {
              Xa = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xa = n);
              break;
            }
            Xa = t.return;
          }
        }
        function kl(e) {
          for (; null !== Xa; ) {
            var t = Xa;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (l) {
                    Sc(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Sc(t, i, l);
                    }
                  }
                  var o = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Sc(t, o, l);
                  }
                  break;
                case 5:
                  var s = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Sc(t, s, l);
                  }
              }
            } catch (l) {
              Sc(t, t.return, l);
            }
            if (t === e) {
              Xa = null;
              break;
            }
            var a = t.sibling;
            if (null !== a) {
              (a.return = t.return), (Xa = a);
              break;
            }
            Xa = t.return;
          }
        }
        var Cl,
          Sl = Math.ceil,
          El = b.ReactCurrentDispatcher,
          Il = b.ReactCurrentOwner,
          Tl = b.ReactCurrentBatchConfig,
          Nl = 0,
          Pl = null,
          Rl = null,
          xl = 0,
          Ol = 0,
          Al = Si(0),
          Dl = 0,
          Ll = null,
          Ml = 0,
          Ul = 0,
          Fl = 0,
          jl = null,
          zl = null,
          Wl = 0,
          Vl = 1 / 0,
          Bl = null,
          ql = !1,
          Hl = null,
          Kl = null,
          $l = !1,
          Gl = null,
          Yl = 0,
          Ql = 0,
          Jl = null,
          Xl = -1,
          Zl = 0;
        function ec() {
          return 0 !== (6 & Nl) ? Je() : -1 !== Xl ? Xl : (Xl = Je());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nl) && 0 !== xl
            ? xl & -xl
            : null !== go.transition
            ? (0 === Zl && (Zl = mt()), Zl)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Qt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Ql) throw ((Ql = 0), (Jl = null), Error(o(185)));
          vt(e, n, r),
            (0 !== (2 & Nl) && e === Pl) ||
              (e === Pl && (0 === (2 & Nl) && (Ul |= n), 4 === Dl && ac(e, xl)),
              rc(e, r),
              1 === n &&
                0 === Nl &&
                0 === (1 & t.mode) &&
                ((Vl = Je() + 500), ji && Vi()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var s = 31 - st(o),
                a = 1 << s,
                l = i[s];
              -1 === l
                ? (0 !== (a & n) && 0 === (a & r)) || (i[s] = ft(a, t))
                : l <= t && (e.expiredLanes |= a),
                (o &= ~a);
            }
          })(e, t);
          var r = ht(e, e === Pl ? xl : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (ji = !0), Wi(e);
                  })(lc.bind(null, e))
                : Wi(lc.bind(null, e)),
                si(function () {
                  0 === (6 & Nl) && Vi();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pc(n, ic.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ic(e, t) {
          if (((Xl = -1), (Zl = 0), 0 !== (6 & Nl))) throw Error(o(327));
          var n = e.callbackNode;
          if (kc() && e.callbackNode !== n) return null;
          var r = ht(e, e === Pl ? xl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var i = Nl;
            Nl |= 2;
            var s = pc();
            for (
              (Pl === e && xl === t) ||
              ((Bl = null), (Vl = Je() + 500), hc(e, t));
              ;

            )
              try {
                _c();
                break;
              } catch (l) {
                fc(e, l);
              }
            To(),
              (El.current = s),
              (Nl = i),
              null !== Rl ? (t = 0) : ((Pl = null), (xl = 0), (t = Dl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = pt(e)) && ((r = i), (t = oc(e, i))),
              1 === t)
            )
              throw ((n = Ll), hc(e, 0), ac(e, r), rc(e, Je()), n);
            if (6 === t) ac(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              o = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!ar(o(), i)) return !1;
                            } catch (a) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (s = pt(e)) &&
                    ((r = s), (t = oc(e, s))),
                  1 === t))
              )
                throw ((n = Ll), hc(e, 0), ac(e, r), rc(e, Je()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wc(e, zl, Bl);
                  break;
                case 3:
                  if (
                    (ac(e, r),
                    (130023424 & r) === r && 10 < (t = Wl + 500 - Je()))
                  ) {
                    if (0 !== ht(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(wc.bind(null, e, zl, Bl), t);
                    break;
                  }
                  wc(e, zl, Bl);
                  break;
                case 4:
                  if ((ac(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var a = 31 - st(r);
                    (s = 1 << a), (a = t[a]) > i && (i = a), (r &= ~s);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Sl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(wc.bind(null, e, zl, Bl), r);
                    break;
                  }
                  wc(e, zl, Bl);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rc(e, Je()), e.callbackNode === n ? ic.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = jl;
          return (
            e.current.memoizedState.isDehydrated && (hc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = zl), (zl = n), null !== t && sc(t)),
            e
          );
        }
        function sc(e) {
          null === zl ? (zl = e) : zl.push.apply(zl, e);
        }
        function ac(e, t) {
          for (
            t &= ~Fl,
              t &= ~Ul,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - st(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lc(e) {
          if (0 !== (6 & Nl)) throw Error(o(327));
          kc();
          var t = ht(e, 0);
          if (0 === (1 & t)) return rc(e, Je()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = Ll), hc(e, 0), ac(e, t), rc(e, Je()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wc(e, zl, Bl),
            rc(e, Je()),
            null
          );
        }
        function cc(e, t) {
          var n = Nl;
          Nl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && ((Vl = Je() + 500), ji && Vi());
          }
        }
        function uc(e) {
          null !== Gl && 0 === Gl.tag && 0 === (6 & Nl) && kc();
          var t = Nl;
          Nl |= 1;
          var n = Tl.transition,
            r = yt;
          try {
            if (((Tl.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (Tl.transition = n), 0 === (6 & (Nl = t)) && Vi();
          }
        }
        function dc() {
          (Ol = Al.current), Ei(Al);
        }
        function hc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Rl))
            for (n = Rl.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ai();
                  break;
                case 3:
                  Jo(), Ei(Pi), Ei(Ni), rs();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Jo();
                  break;
                case 13:
                case 19:
                  Ei(es);
                  break;
                case 10:
                  No(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((Pl = e),
            (Rl = e = Ac(e.current, null)),
            (xl = Ol = t),
            (Dl = 0),
            (Ll = null),
            (Fl = Ul = Ml = 0),
            (zl = jl = null),
            null !== Oo)
          ) {
            for (t = 0; t < Oo.length; t++)
              if (null !== (r = (n = Oo[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  o = n.pending;
                if (null !== o) {
                  var s = o.next;
                  (o.next = i), (r.next = s);
                }
                n.pending = r;
              }
            Oo = null;
          }
          return e;
        }
        function fc(e, t) {
          for (;;) {
            var n = Rl;
            try {
              if ((To(), (is.current = Xs), us)) {
                for (var r = as.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                us = !1;
              }
              if (
                ((ss = 0),
                (cs = ls = as = null),
                (ds = !1),
                (hs = 0),
                (Il.current = null),
                null === n || null === n.return)
              ) {
                (Dl = 1), (Ll = t), (Rl = null);
                break;
              }
              e: {
                var s = e,
                  a = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = xl),
                  (l.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = l,
                    h = d.tag;
                  if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                    var f = d.alternate;
                    f
                      ? ((d.updateQueue = f.updateQueue),
                        (d.memoizedState = f.memoizedState),
                        (d.lanes = f.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = ga(a);
                  if (null !== p) {
                    (p.flags &= -257),
                      va(p, a, l, 0, t),
                      1 & p.mode && ma(s, u, t),
                      (c = u);
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ma(s, u, t), mc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (io && 1 & l.mode) {
                  var v = ga(a);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      va(v, a, l, 0, t),
                      mo(ca(c, l));
                    break e;
                  }
                }
                (s = c = ca(c, l)),
                  4 !== Dl && (Dl = 2),
                  null === jl ? (jl = [s]) : jl.push(s),
                  (s = a);
                do {
                  switch (s.tag) {
                    case 3:
                      (s.flags |= 65536),
                        (t &= -t),
                        (s.lanes |= t),
                        Vo(s, fa(0, c, t));
                      break e;
                    case 1:
                      l = c;
                      var _ = s.type,
                        y = s.stateNode;
                      if (
                        0 === (128 & s.flags) &&
                        ("function" === typeof _.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === Kl || !Kl.has(y))))
                      ) {
                        (s.flags |= 65536),
                          (t &= -t),
                          (s.lanes |= t),
                          Vo(s, pa(s, l, t));
                        break e;
                      }
                  }
                  s = s.return;
                } while (null !== s);
              }
              bc(n);
            } catch (b) {
              (t = b), Rl === n && null !== n && (Rl = n = n.return);
              continue;
            }
            break;
          }
        }
        function pc() {
          var e = El.current;
          return (El.current = Xs), null === e ? Xs : e;
        }
        function mc() {
          (0 !== Dl && 3 !== Dl && 2 !== Dl) || (Dl = 4),
            null === Pl ||
              (0 === (268435455 & Ml) && 0 === (268435455 & Ul)) ||
              ac(Pl, xl);
        }
        function gc(e, t) {
          var n = Nl;
          Nl |= 2;
          var r = pc();
          for ((Pl === e && xl === t) || ((Bl = null), hc(e, t)); ; )
            try {
              vc();
              break;
            } catch (i) {
              fc(e, i);
            }
          if ((To(), (Nl = n), (El.current = r), null !== Rl))
            throw Error(o(261));
          return (Pl = null), (xl = 0), Dl;
        }
        function vc() {
          for (; null !== Rl; ) yc(Rl);
        }
        function _c() {
          for (; null !== Rl && !Ye(); ) yc(Rl);
        }
        function yc(e) {
          var t = Cl(e.alternate, e, Ol);
          (e.memoizedProps = e.pendingProps),
            null === t ? bc(e) : (Rl = t),
            (Il.current = null);
        }
        function bc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = $a(n, t, Ol))) return void (Rl = n);
            } else {
              if (null !== (n = Ga(n, t)))
                return (n.flags &= 32767), void (Rl = n);
              if (null === e) return (Dl = 6), void (Rl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Rl = t);
            Rl = t = e;
          } while (null !== t);
          0 === Dl && (Dl = 5);
        }
        function wc(e, t, n) {
          var r = yt,
            i = Tl.transition;
          try {
            (Tl.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  kc();
                } while (null !== Gl);
                if (0 !== (6 & Nl)) throw Error(o(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var s = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - st(n),
                        o = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
                    }
                  })(e, s),
                  e === Pl && ((Rl = Pl = null), (xl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    $l ||
                    (($l = !0),
                    Pc(tt, function () {
                      return kc(), null;
                    })),
                  (s = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || s)
                ) {
                  (s = Tl.transition), (Tl.transition = null);
                  var a = yt;
                  yt = 1;
                  var l = Nl;
                  (Nl |= 4),
                    (Il.current = null),
                    (function (e, t) {
                      if (((ei = qt), fr((e = hr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                s = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, s.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var a = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                h = e,
                                f = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  h !== n ||
                                    (0 !== i && 3 !== h.nodeType) ||
                                    (l = a + i),
                                    h !== s ||
                                      (0 !== r && 3 !== h.nodeType) ||
                                      (c = a + r),
                                    3 === h.nodeType &&
                                      (a += h.nodeValue.length),
                                    null !== (p = h.firstChild);

                                )
                                  (f = h), (h = p);
                                for (;;) {
                                  if (h === e) break t;
                                  if (
                                    (f === n && ++u === i && (l = a),
                                    f === s && ++d === r && (c = a),
                                    null !== (p = h.nextSibling))
                                  )
                                    break;
                                  f = (h = f).parentNode;
                                }
                                h = p;
                              }
                              n =
                                -1 === l || -1 === c
                                  ? null
                                  : { start: l, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          qt = !1,
                          Xa = t;
                        null !== Xa;

                      )
                        if (
                          ((e = (t = Xa).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xa = e);
                        else
                          for (; null !== Xa; ) {
                            t = Xa;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        _ = t.stateNode,
                                        y = _.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : na(t.type, g),
                                          v
                                        );
                                      _.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = "")
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              Sc(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xa = e);
                              break;
                            }
                            Xa = t.return;
                          }
                      (m = tl), (tl = !1);
                    })(e, n),
                    gl(n, e),
                    pr(ti),
                    (qt = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    _l(n, e, i),
                    Qe(),
                    (Nl = l),
                    (yt = a),
                    (Tl.transition = s);
                } else e.current = n;
                if (
                  ($l && (($l = !1), (Gl = e), (Yl = i)),
                  (s = e.pendingLanes),
                  0 === s && (Kl = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]),
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                if (ql) throw ((ql = !1), (e = Hl), (Hl = null), e);
                0 !== (1 & Yl) && 0 !== e.tag && kc(),
                  (s = e.pendingLanes),
                  0 !== (1 & s)
                    ? e === Jl
                      ? Ql++
                      : ((Ql = 0), (Jl = e))
                    : (Ql = 0),
                  Vi();
              })(e, t, n, r);
          } finally {
            (Tl.transition = i), (yt = r);
          }
          return null;
        }
        function kc() {
          if (null !== Gl) {
            var e = bt(Yl),
              t = Tl.transition,
              n = yt;
            try {
              if (((Tl.transition = null), (yt = 16 > e ? 16 : e), null === Gl))
                var r = !1;
              else {
                if (((e = Gl), (Gl = null), (Yl = 0), 0 !== (6 & Nl)))
                  throw Error(o(331));
                var i = Nl;
                for (Nl |= 4, Xa = e.current; null !== Xa; ) {
                  var s = Xa,
                    a = s.child;
                  if (0 !== (16 & Xa.flags)) {
                    var l = s.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Xa = u; null !== Xa; ) {
                          var d = Xa;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, s);
                          }
                          var h = d.child;
                          if (null !== h) (h.return = d), (Xa = h);
                          else
                            for (; null !== Xa; ) {
                              var f = (d = Xa).sibling,
                                p = d.return;
                              if ((ol(d), d === u)) {
                                Xa = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = p), (Xa = f);
                                break;
                              }
                              Xa = p;
                            }
                        }
                      }
                      var m = s.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Xa = s;
                    }
                  }
                  if (0 !== (2064 & s.subtreeFlags) && null !== a)
                    (a.return = s), (Xa = a);
                  else
                    e: for (; null !== Xa; ) {
                      if (0 !== (2048 & (s = Xa).flags))
                        switch (s.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, s, s.return);
                        }
                      var _ = s.sibling;
                      if (null !== _) {
                        (_.return = s.return), (Xa = _);
                        break e;
                      }
                      Xa = s.return;
                    }
                }
                var y = e.current;
                for (Xa = y; null !== Xa; ) {
                  var b = (a = Xa).child;
                  if (0 !== (2064 & a.subtreeFlags) && null !== b)
                    (b.return = a), (Xa = b);
                  else
                    e: for (a = y; null !== Xa; ) {
                      if (0 !== (2048 & (l = Xa).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (k) {
                          Sc(l, l.return, k);
                        }
                      if (l === a) {
                        Xa = null;
                        break e;
                      }
                      var w = l.sibling;
                      if (null !== w) {
                        (w.return = l.return), (Xa = w);
                        break e;
                      }
                      Xa = l.return;
                    }
                }
                if (
                  ((Nl = i),
                  Vi(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(it, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (Tl.transition = t);
            }
          }
          return !1;
        }
        function Cc(e, t, n) {
          (e = zo(e, (t = fa(0, (t = ca(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (vt(e, 1, t), rc(e, t));
        }
        function Sc(e, t, n) {
          if (3 === e.tag) Cc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Cc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Kl || !Kl.has(r)))
                ) {
                  (t = zo(t, (e = pa(t, (e = ca(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (vt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ec(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Pl === e &&
              (xl & n) === n &&
              (4 === Dl ||
              (3 === Dl && (130023424 & xl) === xl && 500 > Je() - Wl)
                ? hc(e, 0)
                : (Fl |= n)),
            rc(e, t);
        }
        function Ic(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = Lo(e, t)) && (vt(e, t, n), rc(e, n));
        }
        function Tc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ic(e, n);
        }
        function Nc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Ic(e, n);
        }
        function Pc(e, t) {
          return $e(e, t);
        }
        function Rc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function xc(e, t, n, r) {
          return new Rc(e, t, n, r);
        }
        function Oc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ac(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = xc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Dc(e, t, n, r, i, s) {
          var a = 2;
          if (((r = e), "function" === typeof e)) Oc(e) && (a = 1);
          else if ("string" === typeof e) a = 5;
          else
            e: switch (e) {
              case C:
                return Lc(n.children, i, s, t);
              case S:
                (a = 8), (i |= 8);
                break;
              case E:
                return (
                  ((e = xc(12, n, t, 2 | i)).elementType = E), (e.lanes = s), e
                );
              case P:
                return (
                  ((e = xc(13, n, t, i)).elementType = P), (e.lanes = s), e
                );
              case R:
                return (
                  ((e = xc(19, n, t, i)).elementType = R), (e.lanes = s), e
                );
              case A:
                return Mc(n, i, s, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case I:
                      a = 10;
                      break e;
                    case T:
                      a = 9;
                      break e;
                    case N:
                      a = 11;
                      break e;
                    case x:
                      a = 14;
                      break e;
                    case O:
                      (a = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = xc(a, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = s),
            t
          );
        }
        function Lc(e, t, n, r) {
          return ((e = xc(7, e, r, t)).lanes = n), e;
        }
        function Mc(e, t, n, r) {
          return (
            ((e = xc(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Uc(e, t, n) {
          return ((e = xc(6, e, null, t)).lanes = n), e;
        }
        function Fc(e, t, n) {
          return (
            ((t = xc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function jc(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zc(e, t, n, r, i, o, s, a, l) {
          return (
            (e = new jc(e, t, n, a, l)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = xc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Uo(o),
            e
          );
        }
        function Wc(e) {
          if (!e) return Ti;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Oi(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Oi(n)) return Li(e, n, t);
          }
          return t;
        }
        function Vc(e, t, n, r, i, o, s, a, l) {
          return (
            ((e = zc(n, r, !0, e, 0, o, 0, a, l)).context = Wc(null)),
            (n = e.current),
            ((o = jo((r = ec()), (i = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            zo(n, o, i),
            (e.current.lanes = i),
            vt(e, i, r),
            rc(e, r),
            e
          );
        }
        function Bc(e, t, n, r) {
          var i = t.current,
            o = ec(),
            s = tc(i);
          return (
            (n = Wc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = jo(o, s)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = zo(i, t, s)) && (nc(e, i, s, o), Wo(e, i, s)),
            s
          );
        }
        function qc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Hc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Kc(e, t) {
          Hc(e, t), (e = e.alternate) && Hc(e, t);
        }
        Cl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pi.current) ya = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ya = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pa(t), po();
                        break;
                      case 5:
                        Xo(t);
                        break;
                      case 1:
                        Oi(t.type) && Mi(t);
                        break;
                      case 4:
                        Qo(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Ii(Co, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ii(es, 1 & es.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ua(e, t, n)
                            : (Ii(es, 1 & es.current),
                              null !== (e = qa(e, t, n)) ? e.sibling : null);
                        Ii(es, 1 & es.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Va(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Ii(es, es.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Sa(e, t, n);
                    }
                    return qa(e, t, n);
                  })(e, t, n)
                );
              ya = 0 !== (131072 & e.flags);
            }
          else (ya = !1), io && 0 !== (1048576 & t.flags) && Zi(t, Ki, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ba(e, t), (e = t.pendingProps);
              var i = xi(t, Ni.current);
              Ro(t, n), (i = gs(null, t, r, e, i, n));
              var s = vs();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oi(r) ? ((s = !0), Mi(t)) : (s = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Uo(t),
                    (i.updater = ia),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    la(t, r, e, n),
                    (t = Na(null, t, r, !0, s, n)))
                  : ((t.tag = 0),
                    io && s && eo(t),
                    ba(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ba(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Oc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === x) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = na(r, e)),
                  i)
                ) {
                  case 0:
                    t = Ia(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ta(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wa(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ka(null, t, r, na(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ia(e, t, r, (i = t.elementType === r ? i : na(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ta(e, t, r, (i = t.elementType === r ? i : na(r, i)), n)
              );
            case 3:
              e: {
                if ((Pa(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (i = (s = t.memoizedState).element),
                  Fo(e, t),
                  Bo(t, r, null, n);
                var a = t.memoizedState;
                if (((r = a.element), s.isDehydrated)) {
                  if (
                    ((s = {
                      element: r,
                      isDehydrated: !1,
                      cache: a.cache,
                      pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                      transitions: a.transitions,
                    }),
                    (t.updateQueue.baseState = s),
                    (t.memoizedState = s),
                    256 & t.flags)
                  ) {
                    t = Ra(e, t, r, n, (i = ca(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Ra(e, t, r, n, (i = ca(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ci(t.stateNode.containerInfo.firstChild),
                      no = t,
                      io = !0,
                      oo = null,
                      n = ko(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((po(), r === i)) {
                    t = qa(e, t, n);
                    break e;
                  }
                  ba(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xo(t),
                null === e && co(t),
                (r = t.type),
                (i = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (a = i.children),
                ni(r, i)
                  ? (a = null)
                  : null !== s && ni(r, s) && (t.flags |= 32),
                Ea(e, t),
                ba(e, t, a, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Ua(e, t, n);
            case 4:
              return (
                Qo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wo(t, null, r, n)) : ba(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                wa(e, t, r, (i = t.elementType === r ? i : na(r, i)), n)
              );
            case 7:
              return ba(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ba(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (s = t.memoizedProps),
                  (a = i.value),
                  Ii(Co, r._currentValue),
                  (r._currentValue = a),
                  null !== s)
                )
                  if (ar(s.value, a)) {
                    if (s.children === i.children && !Pi.current) {
                      t = qa(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var l = s.dependencies;
                      if (null !== l) {
                        a = s.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === s.tag) {
                              (c = jo(-1, n & -n)).tag = 2;
                              var u = s.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (s.lanes |= n),
                              null !== (c = s.alternate) && (c.lanes |= n),
                              Po(s.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === s.tag)
                        a = s.type === t.type ? null : s.child;
                      else if (18 === s.tag) {
                        if (null === (a = s.return)) throw Error(o(341));
                        (a.lanes |= n),
                          null !== (l = a.alternate) && (l.lanes |= n),
                          Po(a, n, t),
                          (a = s.sibling);
                      } else a = s.child;
                      if (null !== a) a.return = s;
                      else
                        for (a = s; null !== a; ) {
                          if (a === t) {
                            a = null;
                            break;
                          }
                          if (null !== (s = a.sibling)) {
                            (s.return = a.return), (a = s);
                            break;
                          }
                          a = a.return;
                        }
                      s = a;
                    }
                ba(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Ro(t, n),
                (r = r((i = xo(i)))),
                (t.flags |= 1),
                ba(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = na((r = t.type), t.pendingProps)),
                ka(e, t, r, (i = na(r.type, i)), n)
              );
            case 15:
              return Ca(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : na(r, i)),
                Ba(e, t),
                (t.tag = 1),
                Oi(r) ? ((e = !0), Mi(t)) : (e = !1),
                Ro(t, n),
                sa(t, r, i),
                la(t, r, i, n),
                Na(null, t, r, !0, e, n)
              );
            case 19:
              return Va(e, t, n);
            case 22:
              return Sa(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var $c =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Qc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xc() {}
        function Zc(e, t, n, r, i) {
          var o = n._reactRootContainer;
          if (o) {
            var s = o;
            if ("function" === typeof i) {
              var a = i;
              i = function () {
                var e = qc(s);
                a.call(e);
              };
            }
            Bc(t, s, e, i);
          } else
            s = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = qc(s);
                    o.call(e);
                  };
                }
                var s = Vc(t, r, e, 0, null, !1, 0, "", Xc);
                return (
                  (e._reactRootContainer = s),
                  (e[pi] = s.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  s
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var a = r;
                r = function () {
                  var e = qc(l);
                  a.call(e);
                };
              }
              var l = zc(e, 0, !1, null, 0, !1, 0, "", Xc);
              return (
                (e._reactRootContainer = l),
                (e[pi] = l.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Bc(t, l, n, r);
                }),
                l
              );
            })(n, t, e, i, r);
          return qc(s);
        }
        (Yc.prototype.render = Gc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Bc(e, t, null, null);
          }),
          (Yc.prototype.unmount = Gc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  Bc(null, e, null, null);
                }),
                  (t[pi] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Ut(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (_t(t, 1 | n),
                    rc(t, Je()),
                    0 === (6 & Nl) && ((Vl = Je() + 500), Vi()));
                }
                break;
              case 13:
                uc(function () {
                  var t = Lo(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  Kc(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Lo(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              Kc(e, 134217728);
            }
          }),
          (Ct = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Lo(e, t);
              if (null !== n) nc(n, e, t, ec());
              Kc(e, t);
            }
          }),
          (St = function () {
            return yt;
          }),
          (Et = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = wi(r);
                      if (!i) throw Error(o(90));
                      $(r), X(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = cc),
          (Pe = uc);
        var eu = {
            usingClientEntryPoint: !1,
            Events: [yi, bi, wi, Ie, Te, cc],
          },
          tu = {
            findFiberByHostInstance: _i,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (it = ru.inject(nu)), (ot = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Qc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Qc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              i = $c;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = zc(e, 1, !1, null, 0, n, 0, r, i)),
              (e[pi] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Gc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = He(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return Zc(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Qc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              s = "",
              a = $c;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (s = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
              (t = Vc(t, null, e, 1, null != n ? n : null, i, 0, s, a)),
              (e[pi] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Jc(t)) throw Error(o(200));
            return Zc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Jc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                Zc(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Jc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zc(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          i = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          s = Object.prototype.hasOwnProperty,
          a =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            s.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: c,
            ref: u,
            props: o,
            _owner: a.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          s = Symbol.for("react.profiler"),
          a = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function _() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (_.prototype = v.prototype);
        var b = (y.prototype = new _());
        (b.constructor = y), m(b, v.prototype), (b.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          C = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var i,
            o = {},
            s = null,
            a = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (a = t.ref),
            void 0 !== t.key && (s = "" + t.key),
            t))
              k.call(t, i) && !S.hasOwnProperty(i) && (o[i] = t[i]);
          var l = arguments.length - 2;
          if (1 === l) o.children = r;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (i in (l = e.defaultProps)) void 0 === o[i] && (o[i] = l[i]);
          return {
            $$typeof: n,
            type: e,
            key: s,
            ref: a,
            props: o,
            _owner: C.current,
          };
        }
        function I(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, i, o, s) {
          var a = typeof e;
          ("undefined" !== a && "boolean" !== a) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (a) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (s = s((l = e))),
              (e = "" === o ? "." + N(l, 0) : o),
              w(s)
                ? ((i = ""),
                  null != e && (i = e.replace(T, "$&/") + "/"),
                  P(s, t, i, "", function (e) {
                    return e;
                  }))
                : null != s &&
                  (I(s) &&
                    (s = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      s,
                      i +
                        (!s.key || (l && l.key === s.key)
                          ? ""
                          : ("" + s.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(s)),
              1
            );
          if (((l = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var c = 0; c < e.length; c++) {
              var u = o + N((a = e[c]), c);
              l += P(a, t, i, u, s);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(a = e.next()).done; )
              l += P((a = a.value), t, i, (u = o + N(a, c++)), s);
          else if ("object" === a)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function x(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          A = { transition: null },
          D = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: C,
          };
        function L() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!I(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = i),
          (t.Profiler = s),
          (t.PureComponent = y),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.act = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = m({}, e.props),
              o = e.key,
              s = e.ref,
              a = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((s = t.ref), (a = C.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !S.hasOwnProperty(c) &&
                  (i[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) i.children = r;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              i.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: s,
              props: i,
              _owner: a,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = I),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: e },
              _init: x,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = L),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < o(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, s = i >>> 1; r < s; ) {
              var a = 2 * (r + 1) - 1,
                l = e[a],
                c = a + 1,
                u = e[c];
              if (0 > o(l, n))
                c < i && 0 > o(u, l)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = l), (e[a] = n), (r = a));
              else {
                if (!(c < i && 0 > o(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var s = performance;
          t.unstable_now = function () {
            return s.now();
          };
        } else {
          var a = Date,
            l = a.now();
          t.unstable_now = function () {
            return a.now() - l;
          };
        }
        var c = [],
          u = [],
          d = 1,
          h = null,
          f = 3,
          p = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          _ = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) i(u);
            else {
              if (!(t.startTime <= e)) break;
              i(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function w(e) {
          if (((g = !1), b(e), !m))
            if (null !== r(c)) (m = !0), A(k);
            else {
              var t = r(u);
              null !== t && D(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), _(I), (I = -1)), (p = !0);
          var o = f;
          try {
            for (
              b(n), h = r(c);
              null !== h && (!(h.expirationTime > n) || (e && !P()));

            ) {
              var s = h.callback;
              if ("function" === typeof s) {
                (h.callback = null), (f = h.priorityLevel);
                var a = s(h.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof a
                    ? (h.callback = a)
                    : h === r(c) && i(c),
                  b(n);
              } else i(c);
              h = r(c);
            }
            if (null !== h) var l = !0;
            else {
              var d = r(u);
              null !== d && D(w, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (h = null), (f = o), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var C,
          S = !1,
          E = null,
          I = -1,
          T = 5,
          N = -1;
        function P() {
          return !(t.unstable_now() - N < T);
        }
        function R() {
          if (null !== E) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? C() : ((S = !1), (E = null));
            }
          } else S = !1;
        }
        if ("function" === typeof y)
          C = function () {
            y(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var x = new MessageChannel(),
            O = x.port2;
          (x.port1.onmessage = R),
            (C = function () {
              O.postMessage(null);
            });
        } else
          C = function () {
            v(R, 0);
          };
        function A(e) {
          (E = e), S || ((S = !0), C());
        }
        function D(e, n) {
          I = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), A(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, o) {
            var s = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? s + o : s)
                : (o = s),
              e)
            ) {
              case 1:
                var a = -1;
                break;
              case 2:
                a = 250;
                break;
              case 5:
                a = 1073741823;
                break;
              case 4:
                a = 1e4;
                break;
              default:
                a = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: (a = o + a),
                sortIndex: -1,
              }),
              o > s
                ? ((e.sortIndex = o),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (g ? (_(I), (I = -1)) : (g = !0), D(w, o - s)))
                : ((e.sortIndex = a), n(c, e), m || p || ((m = !0), A(k))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, i) {
      if ((1 & i && (r = this(r)), 8 & i)) return r;
      if ("object" === typeof r && r) {
        if (4 & i && r.__esModule) return r;
        if (16 & i && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var s = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var a = 2 & i && r; "object" == typeof a && !~e.indexOf(a); a = t(a))
        Object.getOwnPropertyNames(a).forEach((e) => (s[e] = () => r[e]));
      return (s.default = () => r), n.d(o, s), o;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var r,
    i = n(43),
    o = n.t(i, 2),
    s = n(391),
    a = n(950),
    l = n.t(a, 2);
  function c() {
    return (
      (c = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      c.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(r || (r = {}));
  const u = "popstate";
  function d(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function h(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function f(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function p(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      c(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? g(t) : t,
        {
          state: n,
          key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function m(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function g(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function v(e, t, n, i) {
    void 0 === i && (i = {});
    let { window: o = document.defaultView, v5Compat: s = !1 } = i,
      a = o.history,
      l = r.Pop,
      h = null,
      g = v();
    function v() {
      return (a.state || { idx: null }).idx;
    }
    function _() {
      l = r.Pop;
      let e = v(),
        t = null == e ? null : e - g;
      (g = e), h && h({ action: l, location: b.location, delta: t });
    }
    function y(e) {
      let t =
          "null" !== o.location.origin ? o.location.origin : o.location.href,
        n = "string" === typeof e ? e : m(e);
      return (
        (n = n.replace(/ $/, "%20")),
        d(
          t,
          "No window.location.(origin|href) available to create URL for href: " +
            n
        ),
        new URL(n, t)
      );
    }
    null == g && ((g = 0), a.replaceState(c({}, a.state, { idx: g }), ""));
    let b = {
      get action() {
        return l;
      },
      get location() {
        return e(o, a);
      },
      listen(e) {
        if (h) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(u, _),
          (h = e),
          () => {
            o.removeEventListener(u, _), (h = null);
          }
        );
      },
      createHref: (e) => t(o, e),
      createURL: y,
      encodeLocation(e) {
        let t = y(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        l = r.Push;
        let i = p(b.location, e, t);
        n && n(i, e), (g = v() + 1);
        let c = f(i, g),
          u = b.createHref(i);
        try {
          a.pushState(c, "", u);
        } catch (vr) {
          if (vr instanceof DOMException && "DataCloneError" === vr.name)
            throw vr;
          o.location.assign(u);
        }
        s && h && h({ action: l, location: b.location, delta: 1 });
      },
      replace: function (e, t) {
        l = r.Replace;
        let i = p(b.location, e, t);
        n && n(i, e), (g = v());
        let o = f(i, g),
          c = b.createHref(i);
        a.replaceState(o, "", c),
          s && h && h({ action: l, location: b.location, delta: 0 });
      },
      go: (e) => a.go(e),
    };
    return b;
  }
  var _;
  !(function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(_ || (_ = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function y(e, t, n) {
    return void 0 === n && (n = "/"), b(e, t, n, !1);
  }
  function b(e, t, n, r) {
    let i = D(("string" === typeof t ? g(t) : t).pathname || "/", n);
    if (null == i) return null;
    let o = w(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(o);
    let s = null;
    for (let a = 0; null == s && a < o.length; ++a) {
      let e = A(i);
      s = x(o[a], e, r);
    }
    return s;
  }
  function w(e, t, n, r) {
    void 0 === t && (t = []),
      void 0 === n && (n = []),
      void 0 === r && (r = "");
    let i = (e, i, o) => {
      let s = {
        relativePath: void 0 === o ? e.path || "" : o,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: i,
        route: e,
      };
      s.relativePath.startsWith("/") &&
        (d(
          s.relativePath.startsWith(r),
          'Absolute route path "' +
            s.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (s.relativePath = s.relativePath.slice(r.length)));
      let a = j([r, s.relativePath]),
        l = n.concat(s);
      e.children &&
        e.children.length > 0 &&
        (d(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            a +
            '".'
        ),
        w(e.children, t, l, a)),
        (null != e.path || e.index) &&
          t.push({ path: a, score: R(a, e.index), routesMeta: l });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let r of k(e.path)) i(e, t, r);
        else i(e, t);
      }),
      t
    );
  }
  function k(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      i = n.endsWith("?"),
      o = n.replace(/\?$/, "");
    if (0 === r.length) return i ? [o, ""] : [o];
    let s = k(r.join("/")),
      a = [];
    return (
      a.push(...s.map((e) => ("" === e ? o : [o, e].join("/")))),
      i && a.push(...s),
      a.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  const C = /^:[\w-]+$/,
    S = 3,
    E = 2,
    I = 1,
    T = 10,
    N = -2,
    P = (e) => "*" === e;
  function R(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(P) && (r += N),
      t && (r += E),
      n
        .filter((e) => !P(e))
        .reduce((e, t) => e + (C.test(t) ? S : "" === t ? I : T), r)
    );
  }
  function x(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      i = {},
      o = "/",
      s = [];
    for (let a = 0; a < r.length; ++a) {
      let e = r[a],
        l = a === r.length - 1,
        c = "/" === o ? t : t.slice(o.length) || "/",
        u = O(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
          c
        ),
        d = e.route;
      if (
        (!u &&
          l &&
          n &&
          !r[r.length - 1].route.index &&
          (u = O(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            c
          )),
        !u)
      )
        return null;
      Object.assign(i, u.params),
        s.push({
          params: i,
          pathname: j([o, u.pathname]),
          pathnameBase: z(j([o, u.pathnameBase])),
          route: d,
        }),
        "/" !== u.pathnameBase && (o = j([o, u.pathnameBase]));
    }
    return s;
  }
  function O(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        h(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, "/*") +
            '".'
        );
        let r = [],
          i =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (i += "\\/*$")
          : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))");
        let o = new RegExp(i, t ? void 0 : "i");
        return [o, r];
      })(e.path, e.caseSensitive, e.end),
      i = t.match(n);
    if (!i) return null;
    let o = i[0],
      s = o.replace(/(.)\/+$/, "$1"),
      a = i.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: i } = t;
        if ("*" === r) {
          let e = a[n] || "";
          s = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const l = a[n];
        return (e[r] = i && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: o,
      pathnameBase: s,
      pattern: e,
    };
  }
  function A(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (vr) {
      return (
        h(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            vr +
            ")."
        ),
        e
      );
    }
  }
  function D(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function L(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified `to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the `to." +
      n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function M(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function U(e, t) {
    let n = M(e);
    return t
      ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
      : n.map((e) => e.pathnameBase);
  }
  function F(e, t, n, r) {
    let i;
    void 0 === r && (r = !1),
      "string" === typeof e
        ? (i = g(e))
        : ((i = c({}, e)),
          d(
            !i.pathname || !i.pathname.includes("?"),
            L("?", "pathname", "search", i)
          ),
          d(
            !i.pathname || !i.pathname.includes("#"),
            L("#", "pathname", "hash", i)
          ),
          d(!i.search || !i.search.includes("#"), L("#", "search", "hash", i)));
    let o,
      s = "" === e || "" === i.pathname,
      a = s ? "/" : i.pathname;
    if (null == a) o = n;
    else {
      let e = t.length - 1;
      if (!r && a.startsWith("..")) {
        let t = a.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        i.pathname = t.join("/");
      }
      o = e >= 0 ? t[e] : "/";
    }
    let l = (function (e, t) {
        void 0 === t && (t = "/");
        let {
            pathname: n,
            search: r = "",
            hash: i = "",
          } = "string" === typeof e ? g(e) : e,
          o = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: o, search: W(r), hash: V(i) };
      })(i, o),
      u = a && "/" !== a && a.endsWith("/"),
      h = (s || "." === a) && n.endsWith("/");
    return l.pathname.endsWith("/") || (!u && !h) || (l.pathname += "/"), l;
  }
  const j = (e) => e.join("/").replace(/\/\/+/g, "/"),
    z = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    W = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    V = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  Error;
  function B(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  const q = ["post", "put", "patch", "delete"],
    H = (new Set(q), ["get", ...q]);
  new Set(H), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function K() {
    return (
      (K = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      K.apply(this, arguments)
    );
  }
  const $ = i.createContext(null);
  const G = i.createContext(null);
  const Y = i.createContext(null);
  const Q = i.createContext(null);
  const J = i.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const X = i.createContext(null);
  function Z() {
    return null != i.useContext(Q);
  }
  function ee() {
    return Z() || d(!1), i.useContext(Q).location;
  }
  function te(e) {
    i.useContext(Y).static || i.useLayoutEffect(e);
  }
  function ne() {
    let { isDataRoute: e } = i.useContext(J);
    return e
      ? (function () {
          let { router: e } = he(ue.UseNavigateStable),
            t = pe(de.UseNavigateStable),
            n = i.useRef(!1);
          return (
            te(() => {
              n.current = !0;
            }),
            i.useCallback(
              function (r, i) {
                void 0 === i && (i = {}),
                  n.current &&
                    ("number" === typeof r
                      ? e.navigate(r)
                      : e.navigate(r, K({ fromRouteId: t }, i)));
              },
              [e, t]
            )
          );
        })()
      : (function () {
          Z() || d(!1);
          let e = i.useContext($),
            { basename: t, future: n, navigator: r } = i.useContext(Y),
            { matches: o } = i.useContext(J),
            { pathname: s } = ee(),
            a = JSON.stringify(U(o, n.v7_relativeSplatPath)),
            l = i.useRef(!1);
          return (
            te(() => {
              l.current = !0;
            }),
            i.useCallback(
              function (n, i) {
                if ((void 0 === i && (i = {}), !l.current)) return;
                if ("number" === typeof n) return void r.go(n);
                let o = F(n, JSON.parse(a), s, "path" === i.relative);
                null == e &&
                  "/" !== t &&
                  (o.pathname = "/" === o.pathname ? t : j([t, o.pathname])),
                  (i.replace ? r.replace : r.push)(o, i.state, i);
              },
              [t, r, a, s, e]
            )
          );
        })();
  }
  function re(e, t) {
    let { relative: n } = void 0 === t ? {} : t,
      { future: r } = i.useContext(Y),
      { matches: o } = i.useContext(J),
      { pathname: s } = ee(),
      a = JSON.stringify(U(o, r.v7_relativeSplatPath));
    return i.useMemo(() => F(e, JSON.parse(a), s, "path" === n), [e, a, s, n]);
  }
  function ie(e, t, n, o) {
    Z() || d(!1);
    let { navigator: s } = i.useContext(Y),
      { matches: a } = i.useContext(J),
      l = a[a.length - 1],
      c = l ? l.params : {},
      u = (l && l.pathname, l ? l.pathnameBase : "/");
    l && l.route;
    let h,
      f = ee();
    if (t) {
      var p;
      let e = "string" === typeof t ? g(t) : t;
      "/" === u ||
        (null == (p = e.pathname) ? void 0 : p.startsWith(u)) ||
        d(!1),
        (h = e);
    } else h = f;
    let m = h.pathname || "/",
      v = m;
    if ("/" !== u) {
      let e = u.replace(/^\//, "").split("/");
      v = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let _ = y(e, { pathname: v });
    let b = ce(
      _ &&
        _.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, c, e.params),
            pathname: j([
              u,
              s.encodeLocation
                ? s.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? u
                : j([
                    u,
                    s.encodeLocation
                      ? s.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      o
    );
    return t && b
      ? i.createElement(
          Q.Provider,
          {
            value: {
              location: K(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                h
              ),
              navigationType: r.Pop,
            },
          },
          b
        )
      : b;
  }
  function oe() {
    let e = (function () {
        var e;
        let t = i.useContext(X),
          n = fe(de.UseRouteError),
          r = pe(de.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = B(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      o = { padding: "0.5rem", backgroundColor: r };
    return i.createElement(
      i.Fragment,
      null,
      i.createElement("h2", null, "Unexpected Application Error!"),
      i.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? i.createElement("pre", { style: o }, n) : null,
      null
    );
  }
  const se = i.createElement(oe, null);
  class ae extends i.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        ("idle" !== t.revalidation && "idle" === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return void 0 !== this.state.error
        ? i.createElement(
            J.Provider,
            { value: this.props.routeContext },
            i.createElement(X.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function le(e) {
    let { routeContext: t, match: n, children: r } = e,
      o = i.useContext($);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      i.createElement(J.Provider, { value: t }, r)
    );
  }
  function ce(e, t, n, r) {
    var o;
    if (
      (void 0 === t && (t = []),
      void 0 === n && (n = null),
      void 0 === r && (r = null),
      null == e)
    ) {
      var s;
      if (null == (s = n) || !s.errors) return null;
      e = n.matches;
    }
    let a = e,
      l = null == (o = n) ? void 0 : o.errors;
    if (null != l) {
      let e = a.findIndex(
        (e) => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])
      );
      e >= 0 || d(!1), (a = a.slice(0, Math.min(a.length, e + 1)));
    }
    let c = !1,
      u = -1;
    if (n && r && r.v7_partialHydration)
      for (let i = 0; i < a.length; i++) {
        let e = a[i];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (u = i),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            i =
              e.route.loader &&
              void 0 === t[e.route.id] &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || i) {
            (c = !0), (a = u >= 0 ? a.slice(0, u + 1) : [a[0]]);
            break;
          }
        }
      }
    return a.reduceRight((e, r, o) => {
      let s,
        d = !1,
        h = null,
        f = null;
      var p;
      n &&
        ((s = l && r.route.id ? l[r.route.id] : void 0),
        (h = r.route.errorElement || se),
        c &&
          (u < 0 && 0 === o
            ? ((p = "route-fallback"),
              !1 || me[p] || (me[p] = !0),
              (d = !0),
              (f = null))
            : u === o &&
              ((d = !0), (f = r.route.hydrateFallbackElement || null))));
      let m = t.concat(a.slice(0, o + 1)),
        g = () => {
          let t;
          return (
            (t = s
              ? h
              : d
              ? f
              : r.route.Component
              ? i.createElement(r.route.Component, null)
              : r.route.element
              ? r.route.element
              : e),
            i.createElement(le, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o)
        ? i.createElement(ae, {
            location: n.location,
            revalidation: n.revalidation,
            component: h,
            error: s,
            children: g(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : g();
    }, null);
  }
  var ue = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(ue || {}),
    de = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(de || {});
  function he(e) {
    let t = i.useContext($);
    return t || d(!1), t;
  }
  function fe(e) {
    let t = i.useContext(G);
    return t || d(!1), t;
  }
  function pe(e) {
    let t = (function (e) {
        let t = i.useContext(J);
        return t || d(!1), t;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || d(!1), n.route.id;
  }
  const me = {};
  o.startTransition;
  function ge(e) {
    d(!1);
  }
  function ve(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: o,
      navigationType: s = r.Pop,
      navigator: a,
      static: l = !1,
      future: c,
    } = e;
    Z() && d(!1);
    let u = t.replace(/^\/*/, "/"),
      h = i.useMemo(
        () => ({
          basename: u,
          navigator: a,
          static: l,
          future: K({ v7_relativeSplatPath: !1 }, c),
        }),
        [u, c, a, l]
      );
    "string" === typeof o && (o = g(o));
    let {
        pathname: f = "/",
        search: p = "",
        hash: m = "",
        state: v = null,
        key: _ = "default",
      } = o,
      y = i.useMemo(() => {
        let e = D(f, u);
        return null == e
          ? null
          : {
              location: { pathname: e, search: p, hash: m, state: v, key: _ },
              navigationType: s,
            };
      }, [u, f, p, m, v, _, s]);
    return null == y
      ? null
      : i.createElement(
          Y.Provider,
          { value: h },
          i.createElement(Q.Provider, { children: n, value: y })
        );
  }
  function _e(e) {
    let { children: t, location: n } = e;
    return ie(ye(t), n);
  }
  new Promise(() => {});
  i.Component;
  function ye(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      i.Children.forEach(e, (e, r) => {
        if (!i.isValidElement(e)) return;
        let o = [...t, r];
        if (e.type === i.Fragment)
          return void n.push.apply(n, ye(e.props.children, o));
        e.type !== ge && d(!1), e.props.index && e.props.children && d(!1);
        let s = {
          id: e.props.id || o.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (s.children = ye(e.props.children, o)), n.push(s);
      }),
      n
    );
  }
  function be() {
    return (
      (be = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      be.apply(this, arguments)
    );
  }
  function we(e, t) {
    if (null == e) return {};
    var n,
      r,
      i = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++)
      (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
  }
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  const ke = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ];
  try {
    window.__reactRouterVersion = "6";
  } catch (Sf) {}
  new Map();
  const Ce = o.startTransition;
  l.flushSync, o.useId;
  function Se(e) {
    let { basename: t, children: n, future: r, window: o } = e,
      s = i.useRef();
    var a;
    null == s.current &&
      (s.current =
        (void 0 === (a = { window: o, v5Compat: !0 }) && (a = {}),
        v(
          function (e, t) {
            let { pathname: n, search: r, hash: i } = e.location;
            return p(
              "",
              { pathname: n, search: r, hash: i },
              (t.state && t.state.usr) || null,
              (t.state && t.state.key) || "default"
            );
          },
          function (e, t) {
            return "string" === typeof t ? t : m(t);
          },
          null,
          a
        )));
    let l = s.current,
      [c, u] = i.useState({ action: l.action, location: l.location }),
      { v7_startTransition: d } = r || {},
      h = i.useCallback(
        (e) => {
          d && Ce ? Ce(() => u(e)) : u(e);
        },
        [u, d]
      );
    return (
      i.useLayoutEffect(() => l.listen(h), [l, h]),
      i.createElement(ve, {
        basename: t,
        children: n,
        location: c.location,
        navigationType: c.action,
        navigator: l,
        future: r,
      })
    );
  }
  const Ee =
      "undefined" !== typeof window &&
      "undefined" !== typeof window.document &&
      "undefined" !== typeof window.document.createElement,
    Ie = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Te = i.forwardRef(function (e, t) {
      let n,
        {
          onClick: r,
          relative: o,
          reloadDocument: s,
          replace: a,
          state: l,
          target: c,
          to: u,
          preventScrollReset: h,
          unstable_viewTransition: f,
        } = e,
        p = we(e, ke),
        { basename: g } = i.useContext(Y),
        v = !1;
      if ("string" === typeof u && Ie.test(u) && ((n = u), Ee))
        try {
          let e = new URL(window.location.href),
            t = u.startsWith("//") ? new URL(e.protocol + u) : new URL(u),
            n = D(t.pathname, g);
          t.origin === e.origin && null != n
            ? (u = n + t.search + t.hash)
            : (v = !0);
        } catch (Sf) {}
      let _ = (function (e, t) {
          let { relative: n } = void 0 === t ? {} : t;
          Z() || d(!1);
          let { basename: r, navigator: o } = i.useContext(Y),
            { hash: s, pathname: a, search: l } = re(e, { relative: n }),
            c = a;
          return (
            "/" !== r && (c = "/" === a ? r : j([r, a])),
            o.createHref({ pathname: c, search: l, hash: s })
          );
        })(u, { relative: o }),
        y = (function (e, t) {
          let {
              target: n,
              replace: r,
              state: o,
              preventScrollReset: s,
              relative: a,
              unstable_viewTransition: l,
            } = void 0 === t ? {} : t,
            c = ne(),
            u = ee(),
            d = re(e, { relative: a });
          return i.useCallback(
            (t) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(t, n)
              ) {
                t.preventDefault();
                let n = void 0 !== r ? r : m(u) === m(d);
                c(e, {
                  replace: n,
                  state: o,
                  preventScrollReset: s,
                  relative: a,
                  unstable_viewTransition: l,
                });
              }
            },
            [u, c, d, r, o, n, e, s, a, l]
          );
        })(u, {
          replace: a,
          state: l,
          target: c,
          preventScrollReset: h,
          relative: o,
          unstable_viewTransition: f,
        });
      return i.createElement(
        "a",
        be({}, p, {
          href: n || _,
          onClick:
            v || s
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || y(e);
                },
          ref: t,
          target: c,
        })
      );
    });
  var Ne, Pe;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Ne || (Ne = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(Pe || (Pe = {}));
  const Re = !1,
    xe = !1,
    Oe = "${JSCORE_VERSION}",
    Ae = function (e, t) {
      if (!e) throw De(t);
    },
    De = function (e) {
      return new Error(
        "Firebase Database (" + Oe + ") INTERNAL ASSERT FAILED: " + e
      );
    },
    Le = function (e) {
      const t = [];
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r);
        i < 128
          ? (t[n++] = i)
          : i < 2048
          ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
          : 55296 === (64512 & i) &&
            r + 1 < e.length &&
            56320 === (64512 & e.charCodeAt(r + 1))
          ? ((i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r))),
            (t[n++] = (i >> 18) | 240),
            (t[n++] = ((i >> 12) & 63) | 128),
            (t[n++] = ((i >> 6) & 63) | 128),
            (t[n++] = (63 & i) | 128))
          : ((t[n++] = (i >> 12) | 224),
            (t[n++] = ((i >> 6) & 63) | 128),
            (t[n++] = (63 & i) | 128));
      }
      return t;
    },
    Me = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/=";
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_.";
      },
      HAS_NATIVE_SUPPORT: "function" === typeof atob,
      encodeByteArray(e, t) {
        if (!Array.isArray(e))
          throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
          r = [];
        for (let i = 0; i < e.length; i += 3) {
          const t = e[i],
            o = i + 1 < e.length,
            s = o ? e[i + 1] : 0,
            a = i + 2 < e.length,
            l = a ? e[i + 2] : 0,
            c = t >> 2,
            u = ((3 & t) << 4) | (s >> 4);
          let d = ((15 & s) << 2) | (l >> 6),
            h = 63 & l;
          a || ((h = 64), o || (d = 64)), r.push(n[c], n[u], n[d], n[h]);
        }
        return r.join("");
      },
      encodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t
          ? btoa(e)
          : this.encodeByteArray(Le(e), t);
      },
      decodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t
          ? atob(e)
          : (function (e) {
              const t = [];
              let n = 0,
                r = 0;
              for (; n < e.length; ) {
                const i = e[n++];
                if (i < 128) t[r++] = String.fromCharCode(i);
                else if (i > 191 && i < 224) {
                  const o = e[n++];
                  t[r++] = String.fromCharCode(((31 & i) << 6) | (63 & o));
                } else if (i > 239 && i < 365) {
                  const o =
                    (((7 & i) << 18) |
                      ((63 & e[n++]) << 12) |
                      ((63 & e[n++]) << 6) |
                      (63 & e[n++])) -
                    65536;
                  (t[r++] = String.fromCharCode(55296 + (o >> 10))),
                    (t[r++] = String.fromCharCode(56320 + (1023 & o)));
                } else {
                  const o = e[n++],
                    s = e[n++];
                  t[r++] = String.fromCharCode(
                    ((15 & i) << 12) | ((63 & o) << 6) | (63 & s)
                  );
                }
              }
              return t.join("");
            })(this.decodeStringToByteArray(e, t));
      },
      decodeStringToByteArray(e, t) {
        this.init_();
        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
          r = [];
        for (let i = 0; i < e.length; ) {
          const t = n[e.charAt(i++)],
            o = i < e.length ? n[e.charAt(i)] : 0;
          ++i;
          const s = i < e.length ? n[e.charAt(i)] : 64;
          ++i;
          const a = i < e.length ? n[e.charAt(i)] : 64;
          if ((++i, null == t || null == o || null == s || null == a))
            throw new Ue();
          const l = (t << 2) | (o >> 4);
          if ((r.push(l), 64 !== s)) {
            const e = ((o << 4) & 240) | (s >> 2);
            if ((r.push(e), 64 !== a)) {
              const e = ((s << 6) & 192) | a;
              r.push(e);
            }
          }
        }
        return r;
      },
      init_() {
        if (!this.byteToCharMap_) {
          (this.byteToCharMap_ = {}),
            (this.charToByteMap_ = {}),
            (this.byteToCharMapWebSafe_ = {}),
            (this.charToByteMapWebSafe_ = {});
          for (let e = 0; e < this.ENCODED_VALS.length; e++)
            (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
              (this.charToByteMap_[this.byteToCharMap_[e]] = e),
              (this.byteToCharMapWebSafe_[e] =
                this.ENCODED_VALS_WEBSAFE.charAt(e)),
              (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
              e >= this.ENCODED_VALS_BASE.length &&
                ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
                (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
        }
      },
    };
  class Ue extends Error {
    constructor() {
      super(...arguments), (this.name = "DecodeBase64StringError");
    }
  }
  const Fe = function (e) {
      const t = Le(e);
      return Me.encodeByteArray(t, !0);
    },
    je = function (e) {
      return Fe(e).replace(/\./g, "");
    },
    ze = function (e) {
      try {
        return Me.decodeString(e, !0);
      } catch (Sf) {
        console.error("base64Decode failed: ", Sf);
      }
      return null;
    };
  function We(e) {
    return Ve(void 0, e);
  }
  function Ve(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());
      case Object:
        void 0 === e && (e = {});
        break;
      case Array:
        e = [];
        break;
      default:
        return t;
    }
    for (const n in t)
      t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = Ve(e[n], t[n]));
    return e;
  }
  const Be = () =>
      (function () {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof n.g) return n.g;
        throw new Error("Unable to locate global object.");
      })().__FIREBASE_DEFAULTS__,
    qe = () => {
      try {
        return (
          Be() ||
          (() => {
            if ("undefined" === typeof process) return;
            const e = {
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.__FIREBASE_DEFAULTS__;
            return e ? JSON.parse(e) : void 0;
          })() ||
          (() => {
            if ("undefined" === typeof document) return;
            let e;
            try {
              e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
            } catch (Sf) {
              return;
            }
            const t = e && ze(e[1]);
            return t && JSON.parse(t);
          })()
        );
      } catch (Sf) {
        return void console.info(
          "Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(Sf)
        );
      }
    },
    He = (e) => {
      var t, n;
      return null ===
        (n = null === (t = qe()) || void 0 === t ? void 0 : t.emulatorHosts) ||
        void 0 === n
        ? void 0
        : n[e];
    },
    Ke = (e) => {
      const t = He(e);
      if (!t) return;
      const n = t.lastIndexOf(":");
      if (n <= 0 || n + 1 === t.length)
        throw new Error(
          "Invalid host ".concat(t, " with no separate hostname and port!")
        );
      const r = parseInt(t.substring(n + 1), 10);
      return "[" === t[0] ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
    },
    $e = () => {
      var e;
      return null === (e = qe()) || void 0 === e ? void 0 : e.config;
    },
    Ge = (e) => {
      var t;
      return null === (t = qe()) || void 0 === t ? void 0 : t["_".concat(e)];
    };
  class Ye {
    constructor() {
      (this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((e, t) => {
          (this.resolve = e), (this.reject = t);
        }));
    }
    wrapCallback(e) {
      return (t, n) => {
        t ? this.reject(t) : this.resolve(n),
          "function" === typeof e &&
            (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n));
      };
    }
  }
  function Qe(e, t) {
    if (e.uid)
      throw new Error(
        'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
      );
    const n = t || "demo-project",
      r = e.iat || 0,
      i = e.sub || e.user_id;
    if (!i)
      throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const o = Object.assign(
      {
        iss: "https://securetoken.google.com/".concat(n),
        aud: n,
        iat: r,
        exp: r + 3600,
        auth_time: r,
        sub: i,
        user_id: i,
        firebase: { sign_in_provider: "custom", identities: {} },
      },
      e
    );
    return [
      je(JSON.stringify({ alg: "none", type: "JWT" })),
      je(JSON.stringify(o)),
      "",
    ].join(".");
  }
  function Je() {
    return "undefined" !== typeof navigator &&
      "string" === typeof navigator.userAgent
      ? navigator.userAgent
      : "";
  }
  function Xe() {
    return (
      "undefined" !== typeof window &&
      !!(window.cordova || window.phonegap || window.PhoneGap) &&
      /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())
    );
  }
  function Ze() {
    return "object" === typeof navigator && "ReactNative" === navigator.product;
  }
  function et() {
    return !0 === Re || !0 === xe;
  }
  class tt extends Error {
    constructor(e, t, n) {
      super(t),
        (this.code = e),
        (this.customData = n),
        (this.name = "FirebaseError"),
        Object.setPrototypeOf(this, tt.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, nt.prototype.create);
    }
  }
  class nt {
    constructor(e, t, n) {
      (this.service = e), (this.serviceName = t), (this.errors = n);
    }
    create(e) {
      const t = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
        n = "".concat(this.service, "/").concat(e),
        r = this.errors[e],
        i = r
          ? (function (e, t) {
              return e.replace(rt, (e, n) => {
                const r = t[n];
                return null != r ? String(r) : "<".concat(n, "?>");
              });
            })(r, t)
          : "Error",
        o = "".concat(this.serviceName, ": ").concat(i, " (").concat(n, ").");
      return new tt(n, o, t);
    }
  }
  const rt = /\{\$([^}]+)}/g;
  function it(e) {
    return JSON.parse(e);
  }
  function ot(e) {
    return JSON.stringify(e);
  }
  const st = function (e) {
    let t = {},
      n = {},
      r = {},
      i = "";
    try {
      const o = e.split(".");
      (t = it(ze(o[0]) || "")),
        (n = it(ze(o[1]) || "")),
        (i = o[2]),
        (r = n.d || {}),
        delete n.d;
    } catch (Sf) {}
    return { header: t, claims: n, data: r, signature: i };
  };
  function at(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function lt(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  }
  function ct(e) {
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
    return !0;
  }
  function ut(e, t, n) {
    const r = {};
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        (r[i] = t.call(n, e[i], i, e));
    return r;
  }
  function dt(e, t) {
    if (e === t) return !0;
    const n = Object.keys(e),
      r = Object.keys(t);
    for (const i of n) {
      if (!r.includes(i)) return !1;
      const n = e[i],
        o = t[i];
      if (ht(n) && ht(o)) {
        if (!dt(n, o)) return !1;
      } else if (n !== o) return !1;
    }
    for (const i of r) if (!n.includes(i)) return !1;
    return !0;
  }
  function ht(e) {
    return null !== e && "object" === typeof e;
  }
  function ft(e) {
    const t = [];
    for (const [n, r] of Object.entries(e))
      Array.isArray(r)
        ? r.forEach((e) => {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
          })
        : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    return t.length ? "&" + t.join("&") : "";
  }
  function pt(e) {
    const t = {};
    return (
      e
        .replace(/^\?/, "")
        .split("&")
        .forEach((e) => {
          if (e) {
            const [n, r] = e.split("=");
            t[decodeURIComponent(n)] = decodeURIComponent(r);
          }
        }),
      t
    );
  }
  function mt(e) {
    const t = e.indexOf("?");
    if (!t) return "";
    const n = e.indexOf("#", t);
    return e.substring(t, n > 0 ? n : void 0);
  }
  class gt {
    constructor() {
      (this.chain_ = []),
        (this.buf_ = []),
        (this.W_ = []),
        (this.pad_ = []),
        (this.inbuf_ = 0),
        (this.total_ = 0),
        (this.blockSize = 64),
        (this.pad_[0] = 128);
      for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
      this.reset();
    }
    reset() {
      (this.chain_[0] = 1732584193),
        (this.chain_[1] = 4023233417),
        (this.chain_[2] = 2562383102),
        (this.chain_[3] = 271733878),
        (this.chain_[4] = 3285377520),
        (this.inbuf_ = 0),
        (this.total_ = 0);
    }
    compress_(e, t) {
      t || (t = 0);
      const n = this.W_;
      if ("string" === typeof e)
        for (let u = 0; u < 16; u++)
          (n[u] =
            (e.charCodeAt(t) << 24) |
            (e.charCodeAt(t + 1) << 16) |
            (e.charCodeAt(t + 2) << 8) |
            e.charCodeAt(t + 3)),
            (t += 4);
      else
        for (let u = 0; u < 16; u++)
          (n[u] = (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]),
            (t += 4);
      for (let u = 16; u < 80; u++) {
        const e = n[u - 3] ^ n[u - 8] ^ n[u - 14] ^ n[u - 16];
        n[u] = 4294967295 & ((e << 1) | (e >>> 31));
      }
      let r,
        i,
        o = this.chain_[0],
        s = this.chain_[1],
        a = this.chain_[2],
        l = this.chain_[3],
        c = this.chain_[4];
      for (let u = 0; u < 80; u++) {
        u < 40
          ? u < 20
            ? ((r = l ^ (s & (a ^ l))), (i = 1518500249))
            : ((r = s ^ a ^ l), (i = 1859775393))
          : u < 60
          ? ((r = (s & a) | (l & (s | a))), (i = 2400959708))
          : ((r = s ^ a ^ l), (i = 3395469782));
        const e = (((o << 5) | (o >>> 27)) + r + c + i + n[u]) & 4294967295;
        (c = l),
          (l = a),
          (a = 4294967295 & ((s << 30) | (s >>> 2))),
          (s = o),
          (o = e);
      }
      (this.chain_[0] = (this.chain_[0] + o) & 4294967295),
        (this.chain_[1] = (this.chain_[1] + s) & 4294967295),
        (this.chain_[2] = (this.chain_[2] + a) & 4294967295),
        (this.chain_[3] = (this.chain_[3] + l) & 4294967295),
        (this.chain_[4] = (this.chain_[4] + c) & 4294967295);
    }
    update(e, t) {
      if (null == e) return;
      void 0 === t && (t = e.length);
      const n = t - this.blockSize;
      let r = 0;
      const i = this.buf_;
      let o = this.inbuf_;
      for (; r < t; ) {
        if (0 === o)
          for (; r <= n; ) this.compress_(e, r), (r += this.blockSize);
        if ("string" === typeof e) {
          for (; r < t; )
            if (((i[o] = e.charCodeAt(r)), ++o, ++r, o === this.blockSize)) {
              this.compress_(i), (o = 0);
              break;
            }
        } else
          for (; r < t; )
            if (((i[o] = e[r]), ++o, ++r, o === this.blockSize)) {
              this.compress_(i), (o = 0);
              break;
            }
      }
      (this.inbuf_ = o), (this.total_ += t);
    }
    digest() {
      const e = [];
      let t = 8 * this.total_;
      this.inbuf_ < 56
        ? this.update(this.pad_, 56 - this.inbuf_)
        : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
      for (let r = this.blockSize - 1; r >= 56; r--)
        (this.buf_[r] = 255 & t), (t /= 256);
      this.compress_(this.buf_);
      let n = 0;
      for (let r = 0; r < 5; r++)
        for (let t = 24; t >= 0; t -= 8)
          (e[n] = (this.chain_[r] >> t) & 255), ++n;
      return e;
    }
  }
  class vt {
    constructor(e, t) {
      (this.observers = []),
        (this.unsubscribes = []),
        (this.observerCount = 0),
        (this.task = Promise.resolve()),
        (this.finalized = !1),
        (this.onNoObservers = t),
        this.task
          .then(() => {
            e(this);
          })
          .catch((e) => {
            this.error(e);
          });
    }
    next(e) {
      this.forEachObserver((t) => {
        t.next(e);
      });
    }
    error(e) {
      this.forEachObserver((t) => {
        t.error(e);
      }),
        this.close(e);
    }
    complete() {
      this.forEachObserver((e) => {
        e.complete();
      }),
        this.close();
    }
    subscribe(e, t, n) {
      let r;
      if (void 0 === e && void 0 === t && void 0 === n)
        throw new Error("Missing Observer.");
      (r = (function (e, t) {
        if ("object" !== typeof e || null === e) return !1;
        for (const n of t) if (n in e && "function" === typeof e[n]) return !0;
        return !1;
      })(e, ["next", "error", "complete"])
        ? e
        : { next: e, error: t, complete: n }),
        void 0 === r.next && (r.next = _t),
        void 0 === r.error && (r.error = _t),
        void 0 === r.complete && (r.complete = _t);
      const i = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(() => {
            try {
              this.finalError ? r.error(this.finalError) : r.complete();
            } catch (Sf) {}
          }),
        this.observers.push(r),
        i
      );
    }
    unsubscribeOne(e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        (this.observerCount -= 1),
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }
    forEachObserver(e) {
      if (!this.finalized)
        for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }
    sendOne(e, t) {
      this.task.then(() => {
        if (void 0 !== this.observers && void 0 !== this.observers[e])
          try {
            t(this.observers[e]);
          } catch (Sf) {
            "undefined" !== typeof console &&
              console.error &&
              console.error(Sf);
          }
      });
    }
    close(e) {
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(() => {
          (this.observers = void 0), (this.onNoObservers = void 0);
        }));
    }
  }
  function _t() {}
  function yt(e, t) {
    return "".concat(e, " failed: ").concat(t, " argument ");
  }
  const bt = function (e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
      const r = e.charCodeAt(n);
      r < 128
        ? t++
        : r < 2048
        ? (t += 2)
        : r >= 55296 && r <= 56319
        ? ((t += 4), n++)
        : (t += 3);
    }
    return t;
  };
  function wt(e) {
    return e && e._delegate ? e._delegate : e;
  }
  class kt {
    constructor(e, t, n) {
      (this.name = e),
        (this.instanceFactory = t),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY"),
        (this.onInstanceCreated = null);
    }
    setInstantiationMode(e) {
      return (this.instantiationMode = e), this;
    }
    setMultipleInstances(e) {
      return (this.multipleInstances = e), this;
    }
    setServiceProps(e) {
      return (this.serviceProps = e), this;
    }
    setInstanceCreatedCallback(e) {
      return (this.onInstanceCreated = e), this;
    }
  }
  const Ct = "[DEFAULT]";
  class St {
    constructor(e, t) {
      (this.name = e),
        (this.container = t),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map());
    }
    get(e) {
      const t = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(t)) {
        const e = new Ye();
        if (
          (this.instancesDeferred.set(t, e),
          this.isInitialized(t) || this.shouldAutoInitialize())
        )
          try {
            const n = this.getOrInitializeService({ instanceIdentifier: t });
            n && e.resolve(n);
          } catch (Sf) {}
      }
      return this.instancesDeferred.get(t).promise;
    }
    getImmediate(e) {
      var t;
      const n = this.normalizeInstanceIdentifier(
          null === e || void 0 === e ? void 0 : e.identifier
        ),
        r =
          null !== (t = null === e || void 0 === e ? void 0 : e.optional) &&
          void 0 !== t &&
          t;
      if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
        if (r) return null;
        throw Error("Service ".concat(this.name, " is not available"));
      }
      try {
        return this.getOrInitializeService({ instanceIdentifier: n });
      } catch (Sf) {
        if (r) return null;
        throw Sf;
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(e) {
      if (e.name !== this.name)
        throw Error(
          "Mismatching Component "
            .concat(e.name, " for Provider ")
            .concat(this.name, ".")
        );
      if (this.component)
        throw Error(
          "Component for ".concat(this.name, " has already been provided")
        );
      if (((this.component = e), this.shouldAutoInitialize())) {
        if (
          (function (e) {
            return "EAGER" === e.instantiationMode;
          })(e)
        )
          try {
            this.getOrInitializeService({ instanceIdentifier: Ct });
          } catch (Sf) {}
        for (const [e, t] of this.instancesDeferred.entries()) {
          const n = this.normalizeInstanceIdentifier(e);
          try {
            const e = this.getOrInitializeService({ instanceIdentifier: n });
            t.resolve(e);
          } catch (Sf) {}
        }
      }
    }
    clearInstance() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct;
      this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e);
    }
    async delete() {
      const e = Array.from(this.instances.values());
      await Promise.all([
        ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
        ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
      ]);
    }
    isComponentSet() {
      return null != this.component;
    }
    isInitialized() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct;
      return this.instances.has(e);
    }
    getOptions() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct;
      return this.instancesOptions.get(e) || {};
    }
    initialize() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const { options: t = {} } = e,
        n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
      if (this.isInitialized(n))
        throw Error(
          "".concat(this.name, "(").concat(n, ") has already been initialized")
        );
      if (!this.isComponentSet())
        throw Error(
          "Component ".concat(this.name, " has not been registered yet")
        );
      const r = this.getOrInitializeService({
        instanceIdentifier: n,
        options: t,
      });
      for (const [i, o] of this.instancesDeferred.entries()) {
        n === this.normalizeInstanceIdentifier(i) && o.resolve(r);
      }
      return r;
    }
    onInit(e, t) {
      var n;
      const r = this.normalizeInstanceIdentifier(t),
        i =
          null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
            ? n
            : new Set();
      i.add(e), this.onInitCallbacks.set(r, i);
      const o = this.instances.get(r);
      return (
        o && e(o, r),
        () => {
          i.delete(e);
        }
      );
    }
    invokeOnInitCallbacks(e, t) {
      const n = this.onInitCallbacks.get(t);
      if (n)
        for (const i of n)
          try {
            i(e, t);
          } catch (r) {}
    }
    getOrInitializeService(e) {
      let { instanceIdentifier: t, options: n = {} } = e,
        r = this.instances.get(t);
      if (
        !r &&
        this.component &&
        ((r = this.component.instanceFactory(this.container, {
          instanceIdentifier: ((i = t), i === Ct ? void 0 : i),
          options: n,
        })),
        this.instances.set(t, r),
        this.instancesOptions.set(t, n),
        this.invokeOnInitCallbacks(r, t),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, t, r);
        } catch (o) {}
      var i;
      return r || null;
    }
    normalizeInstanceIdentifier() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct;
      return this.component ? (this.component.multipleInstances ? e : Ct) : e;
    }
    shouldAutoInitialize() {
      return (
        !!this.component && "EXPLICIT" !== this.component.instantiationMode
      );
    }
  }
  class Et {
    constructor(e) {
      (this.name = e), (this.providers = new Map());
    }
    addComponent(e) {
      const t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw new Error(
          "Component "
            .concat(e.name, " has already been registered with ")
            .concat(this.name)
        );
      t.setComponent(e);
    }
    addOrOverwriteComponent(e) {
      this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e);
    }
    getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e);
      const t = new St(e, this);
      return this.providers.set(e, t), t;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  }
  const It = [];
  var Tt;
  !(function (e) {
    (e[(e.DEBUG = 0)] = "DEBUG"),
      (e[(e.VERBOSE = 1)] = "VERBOSE"),
      (e[(e.INFO = 2)] = "INFO"),
      (e[(e.WARN = 3)] = "WARN"),
      (e[(e.ERROR = 4)] = "ERROR"),
      (e[(e.SILENT = 5)] = "SILENT");
  })(Tt || (Tt = {}));
  const Nt = {
      debug: Tt.DEBUG,
      verbose: Tt.VERBOSE,
      info: Tt.INFO,
      warn: Tt.WARN,
      error: Tt.ERROR,
      silent: Tt.SILENT,
    },
    Pt = Tt.INFO,
    Rt = {
      [Tt.DEBUG]: "log",
      [Tt.VERBOSE]: "log",
      [Tt.INFO]: "info",
      [Tt.WARN]: "warn",
      [Tt.ERROR]: "error",
    },
    xt = function (e, t) {
      if (t < e.logLevel) return;
      const n = new Date().toISOString(),
        r = Rt[t];
      if (!r)
        throw new Error(
          "Attempted to log a message with an invalid logType (value: ".concat(
            t,
            ")"
          )
        );
      for (
        var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), s = 2;
        s < i;
        s++
      )
        o[s - 2] = arguments[s];
      console[r]("[".concat(n, "]  ").concat(e.name, ":"), ...o);
    };
  class Ot {
    constructor(e) {
      (this.name = e),
        (this._logLevel = Pt),
        (this._logHandler = xt),
        (this._userLogHandler = null),
        It.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(e) {
      if (!(e in Tt))
        throw new TypeError(
          'Invalid value "'.concat(e, '" assigned to `logLevel`')
        );
      this._logLevel = e;
    }
    setLogLevel(e) {
      this._logLevel = "string" === typeof e ? Nt[e] : e;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(e) {
      if ("function" !== typeof e)
        throw new TypeError(
          "Value assigned to `logHandler` must be a function"
        );
      this._logHandler = e;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(e) {
      this._userLogHandler = e;
    }
    debug() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Tt.DEBUG, ...t),
        this._logHandler(this, Tt.DEBUG, ...t);
    }
    log() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Tt.VERBOSE, ...t),
        this._logHandler(this, Tt.VERBOSE, ...t);
    }
    info() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Tt.INFO, ...t),
        this._logHandler(this, Tt.INFO, ...t);
    }
    warn() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Tt.WARN, ...t),
        this._logHandler(this, Tt.WARN, ...t);
    }
    error() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this._userLogHandler && this._userLogHandler(this, Tt.ERROR, ...t),
        this._logHandler(this, Tt.ERROR, ...t);
    }
  }
  const At = (e, t) => t.some((t) => e instanceof t);
  let Dt, Lt;
  const Mt = new WeakMap(),
    Ut = new WeakMap(),
    Ft = new WeakMap(),
    jt = new WeakMap(),
    zt = new WeakMap();
  let Wt = {
    get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if ("done" === t) return Ut.get(e);
        if ("objectStoreNames" === t) return e.objectStoreNames || Ft.get(e);
        if ("store" === t)
          return n.objectStoreNames[1]
            ? void 0
            : n.objectStore(n.objectStoreNames[0]);
      }
      return qt(e[t]);
    },
    set: (e, t, n) => ((e[t] = n), !0),
    has: (e, t) =>
      (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
      t in e,
  };
  function Vt(e) {
    return e !== IDBDatabase.prototype.transaction ||
      "objectStoreNames" in IDBTransaction.prototype
      ? (
          Lt ||
          (Lt = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
          ])
        ).includes(e)
        ? function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return e.apply(Ht(this), n), qt(Mt.get(this));
          }
        : function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return qt(e.apply(Ht(this), n));
          }
      : function (t) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          const o = e.call(Ht(this), t, ...r);
          return Ft.set(o, t.sort ? t.sort() : [t]), qt(o);
        };
  }
  function Bt(e) {
    return "function" === typeof e
      ? Vt(e)
      : (e instanceof IDBTransaction &&
          (function (e) {
            if (Ut.has(e)) return;
            const t = new Promise((t, n) => {
              const r = () => {
                  e.removeEventListener("complete", i),
                    e.removeEventListener("error", o),
                    e.removeEventListener("abort", o);
                },
                i = () => {
                  t(), r();
                },
                o = () => {
                  n(e.error || new DOMException("AbortError", "AbortError")),
                    r();
                };
              e.addEventListener("complete", i),
                e.addEventListener("error", o),
                e.addEventListener("abort", o);
            });
            Ut.set(e, t);
          })(e),
        At(
          e,
          Dt ||
            (Dt = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
        )
          ? new Proxy(e, Wt)
          : e);
  }
  function qt(e) {
    if (e instanceof IDBRequest)
      return (function (e) {
        const t = new Promise((t, n) => {
          const r = () => {
              e.removeEventListener("success", i),
                e.removeEventListener("error", o);
            },
            i = () => {
              t(qt(e.result)), r();
            },
            o = () => {
              n(e.error), r();
            };
          e.addEventListener("success", i), e.addEventListener("error", o);
        });
        return (
          t
            .then((t) => {
              t instanceof IDBCursor && Mt.set(t, e);
            })
            .catch(() => {}),
          zt.set(t, e),
          t
        );
      })(e);
    if (jt.has(e)) return jt.get(e);
    const t = Bt(e);
    return t !== e && (jt.set(e, t), zt.set(t, e)), t;
  }
  const Ht = (e) => zt.get(e);
  const Kt = ["get", "getKey", "getAll", "getAllKeys", "count"],
    $t = ["put", "add", "delete", "clear"],
    Gt = new Map();
  function Yt(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t) return;
    if (Gt.get(t)) return Gt.get(t);
    const n = t.replace(/FromIndex$/, ""),
      r = t !== n,
      i = $t.includes(n);
    if (
      !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
      (!i && !Kt.includes(n))
    )
      return;
    const o = async function (e) {
      const t = this.transaction(e, i ? "readwrite" : "readonly");
      let o = t.store;
      for (
        var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), l = 1;
        l < s;
        l++
      )
        a[l - 1] = arguments[l];
      return (
        r && (o = o.index(a.shift())),
        (await Promise.all([o[n](...a), i && t.done]))[0]
      );
    };
    return Gt.set(t, o), o;
  }
  Wt = ((e) => ({
    ...e,
    get: (t, n, r) => Yt(t, n) || e.get(t, n, r),
    has: (t, n) => !!Yt(t, n) || e.has(t, n),
  }))(Wt);
  class Qt {
    constructor(e) {
      this.container = e;
    }
    getPlatformInfoString() {
      return this.container
        .getProviders()
        .map((e) => {
          if (
            (function (e) {
              const t = e.getComponent();
              return (
                "VERSION" === (null === t || void 0 === t ? void 0 : t.type)
              );
            })(e)
          ) {
            const t = e.getImmediate();
            return "".concat(t.library, "/").concat(t.version);
          }
          return null;
        })
        .filter((e) => e)
        .join(" ");
    }
  }
  const Jt = "@firebase/app",
    Xt = "0.10.6",
    Zt = new Ot("@firebase/app"),
    en = "@firebase/app-compat",
    tn = "@firebase/analytics-compat",
    nn = "@firebase/analytics",
    rn = "@firebase/app-check-compat",
    on = "@firebase/app-check",
    sn = "@firebase/auth",
    an = "@firebase/auth-compat",
    ln = "@firebase/database",
    cn = "@firebase/database-compat",
    un = "@firebase/functions",
    dn = "@firebase/functions-compat",
    hn = "@firebase/installations",
    fn = "@firebase/installations-compat",
    pn = "@firebase/messaging",
    mn = "@firebase/messaging-compat",
    gn = "@firebase/performance",
    vn = "@firebase/performance-compat",
    _n = "@firebase/remote-config",
    yn = "@firebase/remote-config-compat",
    bn = "@firebase/storage",
    wn = "@firebase/storage-compat",
    kn = "@firebase/firestore",
    Cn = "@firebase/vertexai-preview",
    Sn = "@firebase/firestore-compat",
    En = "firebase",
    In = "[DEFAULT]",
    Tn = {
      [Jt]: "fire-core",
      [en]: "fire-core-compat",
      [nn]: "fire-analytics",
      [tn]: "fire-analytics-compat",
      [on]: "fire-app-check",
      [rn]: "fire-app-check-compat",
      [sn]: "fire-auth",
      [an]: "fire-auth-compat",
      [ln]: "fire-rtdb",
      [cn]: "fire-rtdb-compat",
      [un]: "fire-fn",
      [dn]: "fire-fn-compat",
      [hn]: "fire-iid",
      [fn]: "fire-iid-compat",
      [pn]: "fire-fcm",
      [mn]: "fire-fcm-compat",
      [gn]: "fire-perf",
      [vn]: "fire-perf-compat",
      [_n]: "fire-rc",
      [yn]: "fire-rc-compat",
      [bn]: "fire-gcs",
      [wn]: "fire-gcs-compat",
      [kn]: "fire-fst",
      [Sn]: "fire-fst-compat",
      [Cn]: "fire-vertex",
      "fire-js": "fire-js",
      [En]: "fire-js-all",
    },
    Nn = new Map(),
    Pn = new Map(),
    Rn = new Map();
  function xn(e, t) {
    try {
      e.container.addComponent(t);
    } catch (Sf) {
      Zt.debug(
        "Component "
          .concat(t.name, " failed to register with FirebaseApp ")
          .concat(e.name),
        Sf
      );
    }
  }
  function On(e) {
    const t = e.name;
    if (Rn.has(t))
      return (
        Zt.debug(
          "There were multiple attempts to register component ".concat(t, ".")
        ),
        !1
      );
    Rn.set(t, e);
    for (const n of Nn.values()) xn(n, e);
    for (const n of Pn.values()) xn(n, e);
    return !0;
  }
  function An(e, t) {
    const n = e.container
      .getProvider("heartbeat")
      .getImmediate({ optional: !0 });
    return n && n.triggerHeartbeat(), e.container.getProvider(t);
  }
  function Dn(e) {
    return void 0 !== e.settings;
  }
  const Ln = new nt("app", "Firebase", {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  });
  class Mn {
    constructor(e, t, n) {
      (this._isDeleted = !1),
        (this._options = Object.assign({}, e)),
        (this._config = Object.assign({}, t)),
        (this._name = t.name),
        (this._automaticDataCollectionEnabled =
          t.automaticDataCollectionEnabled),
        (this._container = n),
        this.container.addComponent(new kt("app", () => this, "PUBLIC"));
    }
    get automaticDataCollectionEnabled() {
      return this.checkDestroyed(), this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(e) {
      this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
    }
    get name() {
      return this.checkDestroyed(), this._name;
    }
    get options() {
      return this.checkDestroyed(), this._options;
    }
    get config() {
      return this.checkDestroyed(), this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(e) {
      this._isDeleted = e;
    }
    checkDestroyed() {
      if (this.isDeleted)
        throw Ln.create("app-deleted", { appName: this._name });
    }
  }
  const Un = "10.12.3";
  function Fn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = e;
    if ("object" !== typeof t) {
      t = { name: t };
    }
    const r = Object.assign(
        { name: In, automaticDataCollectionEnabled: !1 },
        t
      ),
      i = r.name;
    if ("string" !== typeof i || !i)
      throw Ln.create("bad-app-name", { appName: String(i) });
    if ((n || (n = $e()), !n)) throw Ln.create("no-options");
    const o = Nn.get(i);
    if (o) {
      if (dt(n, o.options) && dt(r, o.config)) return o;
      throw Ln.create("duplicate-app", { appName: i });
    }
    const s = new Et(i);
    for (const l of Rn.values()) s.addComponent(l);
    const a = new Mn(n, r, s);
    return Nn.set(i, a), a;
  }
  function jn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In;
    const t = Nn.get(e);
    if (!t && e === In && $e()) return Fn();
    if (!t) throw Ln.create("no-app", { appName: e });
    return t;
  }
  function zn(e, t, n) {
    var r;
    let i = null !== (r = Tn[e]) && void 0 !== r ? r : e;
    n && (i += "-".concat(n));
    const o = i.match(/\s|\//),
      s = t.match(/\s|\//);
    if (o || s) {
      const e = [
        'Unable to register library "'
          .concat(i, '" with version "')
          .concat(t, '":'),
      ];
      return (
        o &&
          e.push(
            'library name "'.concat(
              i,
              '" contains illegal characters (whitespace or "/")'
            )
          ),
        o && s && e.push("and"),
        s &&
          e.push(
            'version name "'.concat(
              t,
              '" contains illegal characters (whitespace or "/")'
            )
          ),
        void Zt.warn(e.join(" "))
      );
    }
    On(
      new kt(
        "".concat(i, "-version"),
        () => ({ library: i, version: t }),
        "VERSION"
      )
    );
  }
  const Wn = "firebase-heartbeat-database",
    Vn = 1,
    Bn = "firebase-heartbeat-store";
  let qn = null;
  function Hn() {
    return (
      qn ||
        (qn = (function (e, t) {
          let {
            blocked: n,
            upgrade: r,
            blocking: i,
            terminated: o,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {};
          const s = indexedDB.open(e, t),
            a = qt(s);
          return (
            r &&
              s.addEventListener("upgradeneeded", (e) => {
                r(
                  qt(s.result),
                  e.oldVersion,
                  e.newVersion,
                  qt(s.transaction),
                  e
                );
              }),
            n &&
              s.addEventListener("blocked", (e) =>
                n(e.oldVersion, e.newVersion, e)
              ),
            a
              .then((e) => {
                o && e.addEventListener("close", () => o()),
                  i &&
                    e.addEventListener("versionchange", (e) =>
                      i(e.oldVersion, e.newVersion, e)
                    );
              })
              .catch(() => {}),
            a
          );
        })(Wn, Vn, {
          upgrade: (e, t) => {
            if (0 === t)
              try {
                e.createObjectStore(Bn);
              } catch (Sf) {
                console.warn(Sf);
              }
          },
        }).catch((e) => {
          throw Ln.create("idb-open", { originalErrorMessage: e.message });
        })),
      qn
    );
  }
  async function Kn(e, t) {
    try {
      const n = (await Hn()).transaction(Bn, "readwrite"),
        r = n.objectStore(Bn);
      await r.put(t, $n(e)), await n.done;
    } catch (Sf) {
      if (Sf instanceof tt) Zt.warn(Sf.message);
      else {
        const t = Ln.create("idb-set", {
          originalErrorMessage:
            null === Sf || void 0 === Sf ? void 0 : Sf.message,
        });
        Zt.warn(t.message);
      }
    }
  }
  function $n(e) {
    return "".concat(e.name, "!").concat(e.options.appId);
  }
  class Gn {
    constructor(e) {
      (this.container = e), (this._heartbeatsCache = null);
      const t = this.container.getProvider("app").getImmediate();
      (this._storage = new Qn(t)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((e) => ((this._heartbeatsCache = e), e)));
    }
    async triggerHeartbeat() {
      var e, t;
      const n = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        r = Yn();
      if (
        (null !=
          (null === (e = this._heartbeatsCache) || void 0 === e
            ? void 0
            : e.heartbeats) ||
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          null !=
            (null === (t = this._heartbeatsCache) || void 0 === t
              ? void 0
              : t.heartbeats))) &&
        this._heartbeatsCache.lastSentHeartbeatDate !== r &&
        !this._heartbeatsCache.heartbeats.some((e) => e.date === r)
      )
        return (
          this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((e) => {
              const t = new Date(e.date).valueOf();
              return Date.now() - t <= 2592e6;
            })),
          this._storage.overwrite(this._heartbeatsCache)
        );
    }
    async getHeartbeatsHeader() {
      var e;
      if (
        (null === this._heartbeatsCache && (await this._heartbeatsCachePromise),
        null ==
          (null === (e = this._heartbeatsCache) || void 0 === e
            ? void 0
            : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length)
      )
        return "";
      const t = Yn(),
        { heartbeatsToSend: n, unsentEntries: r } = (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1024;
          const n = [];
          let r = e.slice();
          for (const i of e) {
            const e = n.find((e) => e.agent === i.agent);
            if (e) {
              if ((e.dates.push(i.date), Jn(n) > t)) {
                e.dates.pop();
                break;
              }
            } else if (
              (n.push({ agent: i.agent, dates: [i.date] }), Jn(n) > t)
            ) {
              n.pop();
              break;
            }
            r = r.slice(1);
          }
          return { heartbeatsToSend: n, unsentEntries: r };
        })(this._heartbeatsCache.heartbeats),
        i = je(JSON.stringify({ version: 2, heartbeats: n }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = t),
        r.length > 0
          ? ((this._heartbeatsCache.heartbeats = r),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        i
      );
    }
  }
  function Yn() {
    return new Date().toISOString().substring(0, 10);
  }
  class Qn {
    constructor(e) {
      (this.app = e),
        (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
    }
    async runIndexedDBEnvironmentCheck() {
      return (
        !!(function () {
          try {
            return "object" === typeof indexedDB;
          } catch (Sf) {
            return !1;
          }
        })() &&
        new Promise((e, t) => {
          try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
              i = self.indexedDB.open(r);
            (i.onsuccess = () => {
              i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
            }),
              (i.onupgradeneeded = () => {
                n = !1;
              }),
              (i.onerror = () => {
                var e;
                t(
                  (null === (e = i.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (vr) {
            t(vr);
          }
        })
          .then(() => !0)
          .catch(() => !1)
      );
    }
    async read() {
      if (await this._canUseIndexedDBPromise) {
        const e = await (async function (e) {
          try {
            const t = (await Hn()).transaction(Bn),
              n = await t.objectStore(Bn).get($n(e));
            return await t.done, n;
          } catch (Sf) {
            if (Sf instanceof tt) Zt.warn(Sf.message);
            else {
              const t = Ln.create("idb-get", {
                originalErrorMessage:
                  null === Sf || void 0 === Sf ? void 0 : Sf.message,
              });
              Zt.warn(t.message);
            }
          }
        })(this.app);
        return (null === e || void 0 === e ? void 0 : e.heartbeats)
          ? e
          : { heartbeats: [] };
      }
      return { heartbeats: [] };
    }
    async overwrite(e) {
      var t;
      if (await this._canUseIndexedDBPromise) {
        const n = await this.read();
        return Kn(this.app, {
          lastSentHeartbeatDate:
            null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
              ? t
              : n.lastSentHeartbeatDate,
          heartbeats: e.heartbeats,
        });
      }
    }
    async add(e) {
      var t;
      if (await this._canUseIndexedDBPromise) {
        const n = await this.read();
        return Kn(this.app, {
          lastSentHeartbeatDate:
            null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
              ? t
              : n.lastSentHeartbeatDate,
          heartbeats: [...n.heartbeats, ...e.heartbeats],
        });
      }
    }
  }
  function Jn(e) {
    return je(JSON.stringify({ version: 2, heartbeats: e })).length;
  }
  var Xn;
  (Xn = ""),
    On(new kt("platform-logger", (e) => new Qt(e), "PRIVATE")),
    On(new kt("heartbeat", (e) => new Gn(e), "PRIVATE")),
    zn(Jt, Xt, Xn),
    zn(Jt, Xt, "esm2017"),
    zn("fire-js", "");
  zn("firebase", "10.12.3", "app");
  const Zn = "@firebase/database",
    er = "1.0.6";
  let tr = "";
  function nr(e) {
    tr = e;
  }
  class rr {
    constructor(e) {
      (this.domStorage_ = e), (this.prefix_ = "firebase:");
    }
    set(e, t) {
      null == t
        ? this.domStorage_.removeItem(this.prefixedName_(e))
        : this.domStorage_.setItem(this.prefixedName_(e), ot(t));
    }
    get(e) {
      const t = this.domStorage_.getItem(this.prefixedName_(e));
      return null == t ? null : it(t);
    }
    remove(e) {
      this.domStorage_.removeItem(this.prefixedName_(e));
    }
    prefixedName_(e) {
      return this.prefix_ + e;
    }
    toString() {
      return this.domStorage_.toString();
    }
  }
  class ir {
    constructor() {
      (this.cache_ = {}), (this.isInMemoryStorage = !0);
    }
    set(e, t) {
      null == t ? delete this.cache_[e] : (this.cache_[e] = t);
    }
    get(e) {
      return at(this.cache_, e) ? this.cache_[e] : null;
    }
    remove(e) {
      delete this.cache_[e];
    }
  }
  const or = function (e) {
      try {
        if ("undefined" !== typeof window && "undefined" !== typeof window[e]) {
          const t = window[e];
          return (
            t.setItem("firebase:sentinel", "cache"),
            t.removeItem("firebase:sentinel"),
            new rr(t)
          );
        }
      } catch (Sf) {}
      return new ir();
    },
    sr = or("localStorage"),
    ar = or("sessionStorage"),
    lr = new Ot("@firebase/database"),
    cr = (function () {
      let e = 1;
      return function () {
        return e++;
      };
    })(),
    ur = function (e) {
      const t = (function (e) {
          const t = [];
          let n = 0;
          for (let r = 0; r < e.length; r++) {
            let i = e.charCodeAt(r);
            if (i >= 55296 && i <= 56319) {
              const t = i - 55296;
              r++,
                Ae(r < e.length, "Surrogate pair missing trail surrogate."),
                (i = 65536 + (t << 10) + (e.charCodeAt(r) - 56320));
            }
            i < 128
              ? (t[n++] = i)
              : i < 2048
              ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
              : i < 65536
              ? ((t[n++] = (i >> 12) | 224),
                (t[n++] = ((i >> 6) & 63) | 128),
                (t[n++] = (63 & i) | 128))
              : ((t[n++] = (i >> 18) | 240),
                (t[n++] = ((i >> 12) & 63) | 128),
                (t[n++] = ((i >> 6) & 63) | 128),
                (t[n++] = (63 & i) | 128));
          }
          return t;
        })(e),
        n = new gt();
      n.update(t);
      const r = n.digest();
      return Me.encodeByteArray(r);
    },
    dr = function () {
      let e = "";
      for (let t = 0; t < arguments.length; t++) {
        const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        Array.isArray(n) ||
        (n && "object" === typeof n && "number" === typeof n.length)
          ? (e += dr.apply(null, n))
          : (e += "object" === typeof n ? ot(n) : n),
          (e += " ");
      }
      return e;
    };
  let hr = null,
    fr = !0;
  const pr = function (e, t) {
      Ae(
        !t || !0 === e || !1 === e,
        "Can't turn on custom loggers persistently."
      ),
        !0 === e
          ? ((lr.logLevel = Tt.VERBOSE),
            (hr = lr.log.bind(lr)),
            t && ar.set("logging_enabled", !0))
          : "function" === typeof e
          ? (hr = e)
          : ((hr = null), ar.remove("logging_enabled"));
    },
    mr = function () {
      if (
        (!0 === fr &&
          ((fr = !1),
          null === hr && !0 === ar.get("logging_enabled") && pr(!0)),
        hr)
      ) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const r = dr.apply(null, t);
        hr(r);
      }
    },
    gr = function (e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        mr(e, ...n);
      };
    },
    vr = function () {
      const e = "FIREBASE INTERNAL ERROR: " + dr(...arguments);
      lr.error(e);
    },
    _r = function () {
      const e = "FIREBASE FATAL ERROR: ".concat(dr(...arguments));
      throw (lr.error(e), new Error(e));
    },
    yr = function () {
      const e = "FIREBASE WARNING: " + dr(...arguments);
      lr.warn(e);
    },
    br = function (e) {
      return (
        "number" === typeof e &&
        (e !== e ||
          e === Number.POSITIVE_INFINITY ||
          e === Number.NEGATIVE_INFINITY)
      );
    },
    wr = "[MIN_NAME]",
    kr = "[MAX_NAME]",
    Cr = function (e, t) {
      if (e === t) return 0;
      if (e === wr || t === kr) return -1;
      if (t === wr || e === kr) return 1;
      {
        const n = xr(e),
          r = xr(t);
        return null !== n
          ? null !== r
            ? n - r === 0
              ? e.length - t.length
              : n - r
            : -1
          : null !== r
          ? 1
          : e < t
          ? -1
          : 1;
      }
    },
    Sr = function (e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    },
    Er = function (e, t) {
      if (t && e in t) return t[e];
      throw new Error("Missing required key (" + e + ") in object: " + ot(t));
    },
    Ir = function (e) {
      if ("object" !== typeof e || null === e) return ot(e);
      const t = [];
      for (const r in e) t.push(r);
      t.sort();
      let n = "{";
      for (let r = 0; r < t.length; r++)
        0 !== r && (n += ","), (n += ot(t[r])), (n += ":"), (n += Ir(e[t[r]]));
      return (n += "}"), n;
    },
    Tr = function (e, t) {
      const n = e.length;
      if (n <= t) return [e];
      const r = [];
      for (let i = 0; i < n; i += t)
        i + t > n ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
      return r;
    };
  function Nr(e, t) {
    for (const n in e) e.hasOwnProperty(n) && t(n, e[n]);
  }
  const Pr = function (e) {
    Ae(!br(e), "Invalid JSON number");
    const t = 1023;
    let n, r, i, o, s;
    0 === e
      ? ((r = 0), (i = 0), (n = 1 / e === -1 / 0 ? 1 : 0))
      : ((n = e < 0),
        (e = Math.abs(e)) >= Math.pow(2, -1022)
          ? ((o = Math.min(Math.floor(Math.log(e) / Math.LN2), t)),
            (r = o + t),
            (i = Math.round(e * Math.pow(2, 52 - o) - Math.pow(2, 52))))
          : ((r = 0), (i = Math.round(e / Math.pow(2, -1074)))));
    const a = [];
    for (s = 52; s; s -= 1) a.push(i % 2 ? 1 : 0), (i = Math.floor(i / 2));
    for (s = 11; s; s -= 1) a.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2));
    a.push(n ? 1 : 0), a.reverse();
    const l = a.join("");
    let c = "";
    for (s = 0; s < 64; s += 8) {
      let e = parseInt(l.substr(s, 8), 2).toString(16);
      1 === e.length && (e = "0" + e), (c += e);
    }
    return c.toLowerCase();
  };
  const Rr = new RegExp("^-?(0*)\\d{1,10}$"),
    xr = function (e) {
      if (Rr.test(e)) {
        const t = Number(e);
        if (t >= -2147483648 && t <= 2147483647) return t;
      }
      return null;
    },
    Or = function (e) {
      try {
        e();
      } catch (Sf) {
        setTimeout(() => {
          const t = Sf.stack || "";
          throw (yr("Exception was thrown by user callback.", t), Sf);
        }, Math.floor(0));
      }
    },
    Ar = function (e, t) {
      const n = setTimeout(e, t);
      return (
        "number" === typeof n && "undefined" !== typeof Deno && Deno.unrefTimer
          ? Deno.unrefTimer(n)
          : "object" === typeof n && n.unref && n.unref(),
        n
      );
    };
  class Dr {
    constructor(e, t) {
      (this.appName_ = e),
        (this.appCheckProvider = t),
        (this.appCheck =
          null === t || void 0 === t
            ? void 0
            : t.getImmediate({ optional: !0 })),
        this.appCheck ||
          null === t ||
          void 0 === t ||
          t.get().then((e) => (this.appCheck = e));
    }
    getToken(e) {
      return this.appCheck
        ? this.appCheck.getToken(e)
        : new Promise((t, n) => {
            setTimeout(() => {
              this.appCheck ? this.getToken(e).then(t, n) : t(null);
            }, 0);
          });
    }
    addTokenChangeListener(e) {
      var t;
      null === (t = this.appCheckProvider) ||
        void 0 === t ||
        t.get().then((t) => t.addTokenListener(e));
    }
    notifyForInvalidToken() {
      yr(
        'Provided AppCheck credentials for the app named "'.concat(
          this.appName_,
          '" '
        ) +
          "are invalid. This usually indicates your app was not initialized correctly."
      );
    }
  }
  class Lr {
    constructor(e, t, n) {
      (this.appName_ = e),
        (this.firebaseOptions_ = t),
        (this.authProvider_ = n),
        (this.auth_ = null),
        (this.auth_ = n.getImmediate({ optional: !0 })),
        this.auth_ || n.onInit((e) => (this.auth_ = e));
    }
    getToken(e) {
      return this.auth_
        ? this.auth_
            .getToken(e)
            .catch((e) =>
              e && "auth/token-not-initialized" === e.code
                ? (mr(
                    "Got auth/token-not-initialized error.  Treating as null token."
                  ),
                  null)
                : Promise.reject(e)
            )
        : new Promise((t, n) => {
            setTimeout(() => {
              this.auth_ ? this.getToken(e).then(t, n) : t(null);
            }, 0);
          });
    }
    addTokenChangeListener(e) {
      this.auth_
        ? this.auth_.addAuthTokenListener(e)
        : this.authProvider_.get().then((t) => t.addAuthTokenListener(e));
    }
    removeTokenChangeListener(e) {
      this.authProvider_.get().then((t) => t.removeAuthTokenListener(e));
    }
    notifyForInvalidToken() {
      let e =
        'Provided authentication credentials for the app named "' +
        this.appName_ +
        '" are invalid. This usually indicates your app was not initialized correctly. ';
      "credential" in this.firebaseOptions_
        ? (e +=
            'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
        : "serviceAccount" in this.firebaseOptions_
        ? (e +=
            'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
        : (e +=
            'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
        yr(e);
    }
  }
  class Mr {
    constructor(e) {
      this.accessToken = e;
    }
    getToken(e) {
      return Promise.resolve({ accessToken: this.accessToken });
    }
    addTokenChangeListener(e) {
      e(this.accessToken);
    }
    removeTokenChangeListener(e) {}
    notifyForInvalidToken() {}
  }
  Mr.OWNER = "owner";
  const Ur = "5",
    Fr =
      /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
    jr = "ac",
    zr = "websocket",
    Wr = "long_polling";
  class Vr {
    constructor(e, t, n, r) {
      let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
        s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        a = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      (this.secure = t),
        (this.namespace = n),
        (this.webSocketOnly = r),
        (this.nodeAdmin = i),
        (this.persistenceKey = o),
        (this.includeNamespaceInQueryParams = s),
        (this.isUsingEmulator = a),
        (this._host = e.toLowerCase()),
        (this._domain = this._host.substr(this._host.indexOf(".") + 1)),
        (this.internalHost = sr.get("host:" + e) || this._host);
    }
    isCacheableHost() {
      return "s-" === this.internalHost.substr(0, 2);
    }
    isCustomHost() {
      return (
        "firebaseio.com" !== this._domain &&
        "firebaseio-demo.com" !== this._domain
      );
    }
    get host() {
      return this._host;
    }
    set host(e) {
      e !== this.internalHost &&
        ((this.internalHost = e),
        this.isCacheableHost() &&
          sr.set("host:" + this._host, this.internalHost));
    }
    toString() {
      let e = this.toURLString();
      return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e;
    }
    toURLString() {
      const e = this.secure ? "https://" : "http://",
        t = this.includeNamespaceInQueryParams
          ? "?ns=".concat(this.namespace)
          : "";
      return "".concat(e).concat(this.host, "/").concat(t);
    }
  }
  function Br(e, t, n) {
    let r;
    if (
      (Ae("string" === typeof t, "typeof type must == string"),
      Ae("object" === typeof n, "typeof params must == object"),
      t === zr)
    )
      r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
    else {
      if (t !== Wr) throw new Error("Unknown connection type: " + t);
      r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?";
    }
    (function (e) {
      return (
        e.host !== e.internalHost ||
        e.isCustomHost() ||
        e.includeNamespaceInQueryParams
      );
    })(e) && (n.ns = e.namespace);
    const i = [];
    return (
      Nr(n, (e, t) => {
        i.push(e + "=" + t);
      }),
      r + i.join("&")
    );
  }
  class qr {
    constructor() {
      this.counters_ = {};
    }
    incrementCounter(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      at(this.counters_, e) || (this.counters_[e] = 0),
        (this.counters_[e] += t);
    }
    get() {
      return We(this.counters_);
    }
  }
  const Hr = {},
    Kr = {};
  function $r(e) {
    const t = e.toString();
    return Hr[t] || (Hr[t] = new qr()), Hr[t];
  }
  class Gr {
    constructor(e) {
      (this.onMessage_ = e),
        (this.pendingResponses = []),
        (this.currentResponseNum = 0),
        (this.closeAfterResponse = -1),
        (this.onClose = null);
    }
    closeAfter(e, t) {
      (this.closeAfterResponse = e),
        (this.onClose = t),
        this.closeAfterResponse < this.currentResponseNum &&
          (this.onClose(), (this.onClose = null));
    }
    handleResponse(e, t) {
      for (
        this.pendingResponses[e] = t;
        this.pendingResponses[this.currentResponseNum];

      ) {
        const e = this.pendingResponses[this.currentResponseNum];
        delete this.pendingResponses[this.currentResponseNum];
        for (let t = 0; t < e.length; ++t)
          e[t] &&
            Or(() => {
              this.onMessage_(e[t]);
            });
        if (this.currentResponseNum === this.closeAfterResponse) {
          this.onClose && (this.onClose(), (this.onClose = null));
          break;
        }
        this.currentResponseNum++;
      }
    }
  }
  const Yr = "start";
  class Qr {
    constructor(e, t, n, r, i, o, s) {
      (this.connId = e),
        (this.repoInfo = t),
        (this.applicationId = n),
        (this.appCheckToken = r),
        (this.authToken = i),
        (this.transportSessionId = o),
        (this.lastSessionId = s),
        (this.bytesSent = 0),
        (this.bytesReceived = 0),
        (this.everConnected_ = !1),
        (this.log_ = gr(e)),
        (this.stats_ = $r(t)),
        (this.urlFn = (e) => (
          this.appCheckToken && (e[jr] = this.appCheckToken), Br(t, Wr, e)
        ));
    }
    open(e, t) {
      var n = this;
      (this.curSegmentNum = 0),
        (this.onDisconnect_ = t),
        (this.myPacketOrderer = new Gr(e)),
        (this.isClosed_ = !1),
        (this.connectTimeoutTimer_ = setTimeout(() => {
          this.log_("Timed out trying to connect."),
            this.onClosed_(),
            (this.connectTimeoutTimer_ = null);
        }, Math.floor(3e4))),
        (function (e) {
          if (et() || "complete" === document.readyState) e();
          else {
            let t = !1;
            const n = function () {
              document.body
                ? t || ((t = !0), e())
                : setTimeout(n, Math.floor(10));
            };
            document.addEventListener
              ? (document.addEventListener("DOMContentLoaded", n, !1),
                window.addEventListener("load", n, !1))
              : document.attachEvent &&
                (document.attachEvent("onreadystatechange", () => {
                  "complete" === document.readyState && n();
                }),
                window.attachEvent("onload", n));
          }
        })(() => {
          if (this.isClosed_) return;
          this.scriptTagHolder = new Jr(
            function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              const [i, o, s, a, l] = t;
              if ((n.incrementIncomingBytes_(t), n.scriptTagHolder))
                if (
                  (n.connectTimeoutTimer_ &&
                    (clearTimeout(n.connectTimeoutTimer_),
                    (n.connectTimeoutTimer_ = null)),
                  (n.everConnected_ = !0),
                  i === Yr)
                )
                  (n.id = o), (n.password = s);
                else {
                  if ("close" !== i)
                    throw new Error("Unrecognized command received: " + i);
                  o
                    ? ((n.scriptTagHolder.sendNewPolls = !1),
                      n.myPacketOrderer.closeAfter(o, () => {
                        n.onClosed_();
                      }))
                    : n.onClosed_();
                }
            },
            function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              const [i, o] = t;
              n.incrementIncomingBytes_(t),
                n.myPacketOrderer.handleResponse(i, o);
            },
            () => {
              this.onClosed_();
            },
            this.urlFn
          );
          const e = {};
          (e[Yr] = "t"),
            (e.ser = Math.floor(1e8 * Math.random())),
            this.scriptTagHolder.uniqueCallbackIdentifier &&
              (e.cb = this.scriptTagHolder.uniqueCallbackIdentifier),
            (e.v = Ur),
            this.transportSessionId && (e.s = this.transportSessionId),
            this.lastSessionId && (e.ls = this.lastSessionId),
            this.applicationId && (e.p = this.applicationId),
            this.appCheckToken && (e[jr] = this.appCheckToken),
            "undefined" !== typeof location &&
              location.hostname &&
              Fr.test(location.hostname) &&
              (e.r = "f");
          const t = this.urlFn(e);
          this.log_("Connecting via long-poll to " + t),
            this.scriptTagHolder.addTag(t, () => {});
        });
    }
    start() {
      this.scriptTagHolder.startLongPoll(this.id, this.password),
        this.addDisconnectPingFrame(this.id, this.password);
    }
    static forceAllow() {
      Qr.forceAllow_ = !0;
    }
    static forceDisallow() {
      Qr.forceDisallow_ = !0;
    }
    static isAvailable() {
      return (
        !et() &&
        (!!Qr.forceAllow_ ||
          (!Qr.forceDisallow_ &&
            "undefined" !== typeof document &&
            null != document.createElement &&
            !(
              "object" === typeof window &&
              window.chrome &&
              window.chrome.extension &&
              !/^chrome/.test(window.location.href)
            ) &&
            !("object" === typeof Windows && "object" === typeof Windows.UI)))
      );
    }
    markConnectionHealthy() {}
    shutdown_() {
      (this.isClosed_ = !0),
        this.scriptTagHolder &&
          (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
        this.myDisconnFrame &&
          (document.body.removeChild(this.myDisconnFrame),
          (this.myDisconnFrame = null)),
        this.connectTimeoutTimer_ &&
          (clearTimeout(this.connectTimeoutTimer_),
          (this.connectTimeoutTimer_ = null));
    }
    onClosed_() {
      this.isClosed_ ||
        (this.log_("Longpoll is closing itself"),
        this.shutdown_(),
        this.onDisconnect_ &&
          (this.onDisconnect_(this.everConnected_),
          (this.onDisconnect_ = null)));
    }
    close() {
      this.isClosed_ ||
        (this.log_("Longpoll is being closed."), this.shutdown_());
    }
    send(e) {
      const t = ot(e);
      (this.bytesSent += t.length),
        this.stats_.incrementCounter("bytes_sent", t.length);
      const n = Fe(t),
        r = Tr(n, 1840);
      for (let i = 0; i < r.length; i++)
        this.scriptTagHolder.enqueueSegment(this.curSegmentNum, r.length, r[i]),
          this.curSegmentNum++;
    }
    addDisconnectPingFrame(e, t) {
      if (et()) return;
      this.myDisconnFrame = document.createElement("iframe");
      const n = { dframe: "t" };
      (n.id = e),
        (n.pw = t),
        (this.myDisconnFrame.src = this.urlFn(n)),
        (this.myDisconnFrame.style.display = "none"),
        document.body.appendChild(this.myDisconnFrame);
    }
    incrementIncomingBytes_(e) {
      const t = ot(e).length;
      (this.bytesReceived += t),
        this.stats_.incrementCounter("bytes_received", t);
    }
  }
  class Jr {
    constructor(e, t, n, r) {
      if (
        ((this.onDisconnect = n),
        (this.urlFn = r),
        (this.outstandingRequests = new Set()),
        (this.pendingSegs = []),
        (this.currentSerial = Math.floor(1e8 * Math.random())),
        (this.sendNewPolls = !0),
        et())
      )
        (this.commandCB = e), (this.onMessageCB = t);
      else {
        (this.uniqueCallbackIdentifier = cr()),
          (window["pLPCommand" + this.uniqueCallbackIdentifier] = e),
          (window["pRTLPCB" + this.uniqueCallbackIdentifier] = t),
          (this.myIFrame = Jr.createIFrame_());
        let n = "";
        if (
          this.myIFrame.src &&
          "javascript:" === this.myIFrame.src.substr(0, 11)
        ) {
          n = '<script>document.domain="' + document.domain + '";</script>';
        }
        const r = "<html><body>" + n + "</body></html>";
        try {
          this.myIFrame.doc.open(),
            this.myIFrame.doc.write(r),
            this.myIFrame.doc.close();
        } catch (Sf) {
          mr("frame writing exception"), Sf.stack && mr(Sf.stack), mr(Sf);
        }
      }
    }
    static createIFrame_() {
      const e = document.createElement("iframe");
      if (((e.style.display = "none"), !document.body))
        throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
      document.body.appendChild(e);
      try {
        e.contentWindow.document || mr("No IE domain setting required");
      } catch (Sf) {
        const n = document.domain;
        e.src =
          "javascript:void((function(){document.open();document.domain='" +
          n +
          "';document.close();})())";
      }
      return (
        e.contentDocument
          ? (e.doc = e.contentDocument)
          : e.contentWindow
          ? (e.doc = e.contentWindow.document)
          : e.document && (e.doc = e.document),
        e
      );
    }
    close() {
      (this.alive = !1),
        this.myIFrame &&
          ((this.myIFrame.doc.body.textContent = ""),
          setTimeout(() => {
            null !== this.myIFrame &&
              (document.body.removeChild(this.myIFrame),
              (this.myIFrame = null));
          }, Math.floor(0)));
      const e = this.onDisconnect;
      e && ((this.onDisconnect = null), e());
    }
    startLongPoll(e, t) {
      for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(); );
    }
    newRequest_() {
      if (
        this.alive &&
        this.sendNewPolls &&
        this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)
      ) {
        this.currentSerial++;
        const e = {};
        (e.id = this.myID), (e.pw = this.myPW), (e.ser = this.currentSerial);
        let t = this.urlFn(e),
          n = "",
          r = 0;
        for (; this.pendingSegs.length > 0; ) {
          if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break;
          {
            const e = this.pendingSegs.shift();
            (n =
              n +
              "&seg" +
              r +
              "=" +
              e.seg +
              "&ts" +
              r +
              "=" +
              e.ts +
              "&d" +
              r +
              "=" +
              e.d),
              r++;
          }
        }
        return (t += n), this.addLongPollTag_(t, this.currentSerial), !0;
      }
      return !1;
    }
    enqueueSegment(e, t, n) {
      this.pendingSegs.push({ seg: e, ts: t, d: n }),
        this.alive && this.newRequest_();
    }
    addLongPollTag_(e, t) {
      this.outstandingRequests.add(t);
      const n = () => {
          this.outstandingRequests.delete(t), this.newRequest_();
        },
        r = setTimeout(n, Math.floor(25e3));
      this.addTag(e, () => {
        clearTimeout(r), n();
      });
    }
    addTag(e, t) {
      et()
        ? this.doNodeLongPoll(e, t)
        : setTimeout(() => {
            try {
              if (!this.sendNewPolls) return;
              const n = this.myIFrame.doc.createElement("script");
              (n.type = "text/javascript"),
                (n.async = !0),
                (n.src = e),
                (n.onload = n.onreadystatechange =
                  function () {
                    const e = n.readyState;
                    (e && "loaded" !== e && "complete" !== e) ||
                      ((n.onload = n.onreadystatechange = null),
                      n.parentNode && n.parentNode.removeChild(n),
                      t());
                  }),
                (n.onerror = () => {
                  mr("Long-poll script failed to load: " + e),
                    (this.sendNewPolls = !1),
                    this.close();
                }),
                this.myIFrame.doc.body.appendChild(n);
            } catch (Sf) {}
          }, Math.floor(1));
    }
  }
  let Xr = null;
  "undefined" !== typeof MozWebSocket
    ? (Xr = MozWebSocket)
    : "undefined" !== typeof WebSocket && (Xr = WebSocket);
  class Zr {
    constructor(e, t, n, r, i, o, s) {
      (this.connId = e),
        (this.applicationId = n),
        (this.appCheckToken = r),
        (this.authToken = i),
        (this.keepaliveTimer = null),
        (this.frames = null),
        (this.totalFrames = 0),
        (this.bytesSent = 0),
        (this.bytesReceived = 0),
        (this.log_ = gr(this.connId)),
        (this.stats_ = $r(t)),
        (this.connURL = Zr.connectionURL_(t, o, s, r, n)),
        (this.nodeAdmin = t.nodeAdmin);
    }
    static connectionURL_(e, t, n, r, i) {
      const o = {};
      return (
        (o.v = Ur),
        !et() &&
          "undefined" !== typeof location &&
          location.hostname &&
          Fr.test(location.hostname) &&
          (o.r = "f"),
        t && (o.s = t),
        n && (o.ls = n),
        r && (o[jr] = r),
        i && (o.p = i),
        Br(e, zr, o)
      );
    }
    open(e, t) {
      (this.onDisconnect = t),
        (this.onMessage = e),
        this.log_("Websocket connecting to " + this.connURL),
        (this.everConnected_ = !1),
        sr.set("previous_websocket_failure", !0);
      try {
        let e;
        if (et()) {
          const t = this.nodeAdmin ? "AdminNode" : "Node";
          (e = {
            headers: {
              "User-Agent": "Firebase/"
                .concat(Ur, "/")
                .concat(tr, "/")
                .concat(process.platform, "/")
                .concat(t),
              "X-Firebase-GMPID": this.applicationId || "",
            },
          }),
            this.authToken &&
              (e.headers.Authorization = "Bearer ".concat(this.authToken)),
            this.appCheckToken &&
              (e.headers["X-Firebase-AppCheck"] = this.appCheckToken);
          const n = {
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            },
            r =
              0 === this.connURL.indexOf("wss://")
                ? n.HTTPS_PROXY || n.https_proxy
                : n.HTTP_PROXY || n.http_proxy;
          r && (e.proxy = { origin: r });
        }
        this.mySock = new Xr(this.connURL, [], e);
      } catch (Sf) {
        this.log_("Error instantiating WebSocket.");
        const t = Sf.message || Sf.data;
        return t && this.log_(t), void this.onClosed_();
      }
      (this.mySock.onopen = () => {
        this.log_("Websocket connected."), (this.everConnected_ = !0);
      }),
        (this.mySock.onclose = () => {
          this.log_("Websocket connection was disconnected."),
            (this.mySock = null),
            this.onClosed_();
        }),
        (this.mySock.onmessage = (e) => {
          this.handleIncomingFrame(e);
        }),
        (this.mySock.onerror = (e) => {
          this.log_("WebSocket error.  Closing connection.");
          const t = e.message || e.data;
          t && this.log_(t), this.onClosed_();
        });
    }
    start() {}
    static forceDisallow() {
      Zr.forceDisallow_ = !0;
    }
    static isAvailable() {
      let e = !1;
      if ("undefined" !== typeof navigator && navigator.userAgent) {
        const t = /Android ([0-9]{0,}\.[0-9]{0,})/,
          n = navigator.userAgent.match(t);
        n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0);
      }
      return !e && null !== Xr && !Zr.forceDisallow_;
    }
    static previouslyFailed() {
      return (
        sr.isInMemoryStorage || !0 === sr.get("previous_websocket_failure")
      );
    }
    markConnectionHealthy() {
      sr.remove("previous_websocket_failure");
    }
    appendFrame_(e) {
      if ((this.frames.push(e), this.frames.length === this.totalFrames)) {
        const e = this.frames.join("");
        this.frames = null;
        const t = it(e);
        this.onMessage(t);
      }
    }
    handleNewFrameCount_(e) {
      (this.totalFrames = e), (this.frames = []);
    }
    extractFrameCount_(e) {
      if (
        (Ae(null === this.frames, "We already have a frame buffer"),
        e.length <= 6)
      ) {
        const t = Number(e);
        if (!isNaN(t)) return this.handleNewFrameCount_(t), null;
      }
      return this.handleNewFrameCount_(1), e;
    }
    handleIncomingFrame(e) {
      if (null === this.mySock) return;
      const t = e.data;
      if (
        ((this.bytesReceived += t.length),
        this.stats_.incrementCounter("bytes_received", t.length),
        this.resetKeepAlive(),
        null !== this.frames)
      )
        this.appendFrame_(t);
      else {
        const e = this.extractFrameCount_(t);
        null !== e && this.appendFrame_(e);
      }
    }
    send(e) {
      this.resetKeepAlive();
      const t = ot(e);
      (this.bytesSent += t.length),
        this.stats_.incrementCounter("bytes_sent", t.length);
      const n = Tr(t, 16384);
      n.length > 1 && this.sendString_(String(n.length));
      for (let r = 0; r < n.length; r++) this.sendString_(n[r]);
    }
    shutdown_() {
      (this.isClosed_ = !0),
        this.keepaliveTimer &&
          (clearInterval(this.keepaliveTimer), (this.keepaliveTimer = null)),
        this.mySock && (this.mySock.close(), (this.mySock = null));
    }
    onClosed_() {
      this.isClosed_ ||
        (this.log_("WebSocket is closing itself"),
        this.shutdown_(),
        this.onDisconnect &&
          (this.onDisconnect(this.everConnected_), (this.onDisconnect = null)));
    }
    close() {
      this.isClosed_ ||
        (this.log_("WebSocket is being closed"), this.shutdown_());
    }
    resetKeepAlive() {
      clearInterval(this.keepaliveTimer),
        (this.keepaliveTimer = setInterval(() => {
          this.mySock && this.sendString_("0"), this.resetKeepAlive();
        }, Math.floor(45e3)));
    }
    sendString_(e) {
      try {
        this.mySock.send(e);
      } catch (Sf) {
        this.log_(
          "Exception thrown from WebSocket.send():",
          Sf.message || Sf.data,
          "Closing connection."
        ),
          setTimeout(this.onClosed_.bind(this), 0);
      }
    }
  }
  (Zr.responsesRequiredToBeHealthy = 2), (Zr.healthyTimeout = 3e4);
  class ei {
    constructor(e) {
      this.initTransports_(e);
    }
    static get ALL_TRANSPORTS() {
      return [Qr, Zr];
    }
    static get IS_TRANSPORT_INITIALIZED() {
      return this.globalTransportInitialized_;
    }
    initTransports_(e) {
      const t = Zr && Zr.isAvailable();
      let n = t && !Zr.previouslyFailed();
      if (
        (e.webSocketOnly &&
          (t ||
            yr(
              "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
            ),
          (n = !0)),
        n)
      )
        this.transports_ = [Zr];
      else {
        const e = (this.transports_ = []);
        for (const t of ei.ALL_TRANSPORTS) t && t.isAvailable() && e.push(t);
        ei.globalTransportInitialized_ = !0;
      }
    }
    initialTransport() {
      if (this.transports_.length > 0) return this.transports_[0];
      throw new Error("No transports available");
    }
    upgradeTransport() {
      return this.transports_.length > 1 ? this.transports_[1] : null;
    }
  }
  ei.globalTransportInitialized_ = !1;
  class ti {
    constructor(e, t, n, r, i, o, s, a, l, c) {
      (this.id = e),
        (this.repoInfo_ = t),
        (this.applicationId_ = n),
        (this.appCheckToken_ = r),
        (this.authToken_ = i),
        (this.onMessage_ = o),
        (this.onReady_ = s),
        (this.onDisconnect_ = a),
        (this.onKill_ = l),
        (this.lastSessionId = c),
        (this.connectionCount = 0),
        (this.pendingDataMessages = []),
        (this.state_ = 0),
        (this.log_ = gr("c:" + this.id + ":")),
        (this.transportManager_ = new ei(t)),
        this.log_("Connection created"),
        this.start_();
    }
    start_() {
      const e = this.transportManager_.initialTransport();
      (this.conn_ = new e(
        this.nextTransportId_(),
        this.repoInfo_,
        this.applicationId_,
        this.appCheckToken_,
        this.authToken_,
        null,
        this.lastSessionId
      )),
        (this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0);
      const t = this.connReceiver_(this.conn_),
        n = this.disconnReceiver_(this.conn_);
      (this.tx_ = this.conn_),
        (this.rx_ = this.conn_),
        (this.secondaryConn_ = null),
        (this.isHealthy_ = !1),
        setTimeout(() => {
          this.conn_ && this.conn_.open(t, n);
        }, Math.floor(0));
      const r = e.healthyTimeout || 0;
      r > 0 &&
        (this.healthyTimeout_ = Ar(() => {
          (this.healthyTimeout_ = null),
            this.isHealthy_ ||
              (this.conn_ && this.conn_.bytesReceived > 102400
                ? (this.log_(
                    "Connection exceeded healthy timeout but has received " +
                      this.conn_.bytesReceived +
                      " bytes.  Marking connection healthy."
                  ),
                  (this.isHealthy_ = !0),
                  this.conn_.markConnectionHealthy())
                : this.conn_ && this.conn_.bytesSent > 10240
                ? this.log_(
                    "Connection exceeded healthy timeout but has sent " +
                      this.conn_.bytesSent +
                      " bytes.  Leaving connection alive."
                  )
                : (this.log_("Closing unhealthy connection after timeout."),
                  this.close()));
        }, Math.floor(r)));
    }
    nextTransportId_() {
      return "c:" + this.id + ":" + this.connectionCount++;
    }
    disconnReceiver_(e) {
      return (t) => {
        e === this.conn_
          ? this.onConnectionLost_(t)
          : e === this.secondaryConn_
          ? (this.log_("Secondary connection lost."),
            this.onSecondaryConnectionLost_())
          : this.log_("closing an old connection");
      };
    }
    connReceiver_(e) {
      return (t) => {
        2 !== this.state_ &&
          (e === this.rx_
            ? this.onPrimaryMessageReceived_(t)
            : e === this.secondaryConn_
            ? this.onSecondaryMessageReceived_(t)
            : this.log_("message on old connection"));
      };
    }
    sendRequest(e) {
      const t = { t: "d", d: e };
      this.sendData_(t);
    }
    tryCleanupConnection() {
      this.tx_ === this.secondaryConn_ &&
        this.rx_ === this.secondaryConn_ &&
        (this.log_(
          "cleaning up and promoting a connection: " +
            this.secondaryConn_.connId
        ),
        (this.conn_ = this.secondaryConn_),
        (this.secondaryConn_ = null));
    }
    onSecondaryControl_(e) {
      if ("t" in e) {
        const t = e.t;
        "a" === t
          ? this.upgradeIfSecondaryHealthy_()
          : "r" === t
          ? (this.log_("Got a reset on secondary, closing it"),
            this.secondaryConn_.close(),
            (this.tx_ !== this.secondaryConn_ &&
              this.rx_ !== this.secondaryConn_) ||
              this.close())
          : "o" === t &&
            (this.log_("got pong on secondary."),
            this.secondaryResponsesRequired_--,
            this.upgradeIfSecondaryHealthy_());
      }
    }
    onSecondaryMessageReceived_(e) {
      const t = Er("t", e),
        n = Er("d", e);
      if ("c" === t) this.onSecondaryControl_(n);
      else {
        if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
        this.pendingDataMessages.push(n);
      }
    }
    upgradeIfSecondaryHealthy_() {
      this.secondaryResponsesRequired_ <= 0
        ? (this.log_("Secondary connection is healthy."),
          (this.isHealthy_ = !0),
          this.secondaryConn_.markConnectionHealthy(),
          this.proceedWithUpgrade_())
        : (this.log_("sending ping on secondary."),
          this.secondaryConn_.send({ t: "c", d: { t: "p", d: {} } }));
    }
    proceedWithUpgrade_() {
      this.secondaryConn_.start(),
        this.log_("sending client ack on secondary"),
        this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }),
        this.log_("Ending transmission on primary"),
        this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
        (this.tx_ = this.secondaryConn_),
        this.tryCleanupConnection();
    }
    onPrimaryMessageReceived_(e) {
      const t = Er("t", e),
        n = Er("d", e);
      "c" === t ? this.onControl_(n) : "d" === t && this.onDataMessage_(n);
    }
    onDataMessage_(e) {
      this.onPrimaryResponse_(), this.onMessage_(e);
    }
    onPrimaryResponse_() {
      this.isHealthy_ ||
        (this.primaryResponsesRequired_--,
        this.primaryResponsesRequired_ <= 0 &&
          (this.log_("Primary connection is healthy."),
          (this.isHealthy_ = !0),
          this.conn_.markConnectionHealthy()));
    }
    onControl_(e) {
      const t = Er("t", e);
      if ("d" in e) {
        const n = e.d;
        if ("h" === t) {
          const e = Object.assign({}, n);
          this.repoInfo_.isUsingEmulator && (e.h = this.repoInfo_.host),
            this.onHandshake_(e);
        } else if ("n" === t) {
          this.log_("recvd end transmission on primary"),
            (this.rx_ = this.secondaryConn_);
          for (let e = 0; e < this.pendingDataMessages.length; ++e)
            this.onDataMessage_(this.pendingDataMessages[e]);
          (this.pendingDataMessages = []), this.tryCleanupConnection();
        } else
          "s" === t
            ? this.onConnectionShutdown_(n)
            : "r" === t
            ? this.onReset_(n)
            : "e" === t
            ? vr("Server Error: " + n)
            : "o" === t
            ? (this.log_("got pong on primary."),
              this.onPrimaryResponse_(),
              this.sendPingOnPrimaryIfNecessary_())
            : vr("Unknown control packet command: " + t);
      }
    }
    onHandshake_(e) {
      const t = e.ts,
        n = e.v,
        r = e.h;
      (this.sessionId = e.s),
        (this.repoInfo_.host = r),
        0 === this.state_ &&
          (this.conn_.start(),
          this.onConnectionEstablished_(this.conn_, t),
          Ur !== n && yr("Protocol version mismatch detected"),
          this.tryStartUpgrade_());
    }
    tryStartUpgrade_() {
      const e = this.transportManager_.upgradeTransport();
      e && this.startUpgrade_(e);
    }
    startUpgrade_(e) {
      (this.secondaryConn_ = new e(
        this.nextTransportId_(),
        this.repoInfo_,
        this.applicationId_,
        this.appCheckToken_,
        this.authToken_,
        this.sessionId
      )),
        (this.secondaryResponsesRequired_ =
          e.responsesRequiredToBeHealthy || 0);
      const t = this.connReceiver_(this.secondaryConn_),
        n = this.disconnReceiver_(this.secondaryConn_);
      this.secondaryConn_.open(t, n),
        Ar(() => {
          this.secondaryConn_ &&
            (this.log_("Timed out trying to upgrade."),
            this.secondaryConn_.close());
        }, Math.floor(6e4));
    }
    onReset_(e) {
      this.log_("Reset packet received.  New host: " + e),
        (this.repoInfo_.host = e),
        1 === this.state_
          ? this.close()
          : (this.closeConnections_(), this.start_());
    }
    onConnectionEstablished_(e, t) {
      this.log_("Realtime connection established."),
        (this.conn_ = e),
        (this.state_ = 1),
        this.onReady_ &&
          (this.onReady_(t, this.sessionId), (this.onReady_ = null)),
        0 === this.primaryResponsesRequired_
          ? (this.log_("Primary connection is healthy."),
            (this.isHealthy_ = !0))
          : Ar(() => {
              this.sendPingOnPrimaryIfNecessary_();
            }, Math.floor(5e3));
    }
    sendPingOnPrimaryIfNecessary_() {
      this.isHealthy_ ||
        1 !== this.state_ ||
        (this.log_("sending ping on primary."),
        this.sendData_({ t: "c", d: { t: "p", d: {} } }));
    }
    onSecondaryConnectionLost_() {
      const e = this.secondaryConn_;
      (this.secondaryConn_ = null),
        (this.tx_ !== e && this.rx_ !== e) || this.close();
    }
    onConnectionLost_(e) {
      (this.conn_ = null),
        e || 0 !== this.state_
          ? 1 === this.state_ && this.log_("Realtime connection lost.")
          : (this.log_("Realtime connection failed."),
            this.repoInfo_.isCacheableHost() &&
              (sr.remove("host:" + this.repoInfo_.host),
              (this.repoInfo_.internalHost = this.repoInfo_.host))),
        this.close();
    }
    onConnectionShutdown_(e) {
      this.log_("Connection shutdown command received. Shutting down..."),
        this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
        (this.onDisconnect_ = null),
        this.close();
    }
    sendData_(e) {
      if (1 !== this.state_) throw "Connection is not connected";
      this.tx_.send(e);
    }
    close() {
      2 !== this.state_ &&
        (this.log_("Closing realtime connection."),
        (this.state_ = 2),
        this.closeConnections_(),
        this.onDisconnect_ &&
          (this.onDisconnect_(), (this.onDisconnect_ = null)));
    }
    closeConnections_() {
      this.log_("Shutting down all connections"),
        this.conn_ && (this.conn_.close(), (this.conn_ = null)),
        this.secondaryConn_ &&
          (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
        this.healthyTimeout_ &&
          (clearTimeout(this.healthyTimeout_), (this.healthyTimeout_ = null));
    }
  }
  class ni {
    put(e, t, n, r) {}
    merge(e, t, n, r) {}
    refreshAuthToken(e) {}
    refreshAppCheckToken(e) {}
    onDisconnectPut(e, t, n) {}
    onDisconnectMerge(e, t, n) {}
    onDisconnectCancel(e, t) {}
    reportStats(e) {}
  }
  class ri {
    constructor(e) {
      (this.allowedEvents_ = e),
        (this.listeners_ = {}),
        Ae(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
    }
    trigger(e) {
      if (Array.isArray(this.listeners_[e])) {
        const i = [...this.listeners_[e]];
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        for (let e = 0; e < i.length; e++) i[e].callback.apply(i[e].context, n);
      }
    }
    on(e, t, n) {
      this.validateEventType_(e),
        (this.listeners_[e] = this.listeners_[e] || []),
        this.listeners_[e].push({ callback: t, context: n });
      const r = this.getInitialEvent(e);
      r && t.apply(n, r);
    }
    off(e, t, n) {
      this.validateEventType_(e);
      const r = this.listeners_[e] || [];
      for (let i = 0; i < r.length; i++)
        if (r[i].callback === t && (!n || n === r[i].context))
          return void r.splice(i, 1);
    }
    validateEventType_(e) {
      Ae(
        this.allowedEvents_.find((t) => t === e),
        "Unknown event: " + e
      );
    }
  }
  class ii extends ri {
    constructor() {
      super(["online"]),
        (this.online_ = !0),
        "undefined" === typeof window ||
          "undefined" === typeof window.addEventListener ||
          Xe() ||
          (window.addEventListener(
            "online",
            () => {
              this.online_ || ((this.online_ = !0), this.trigger("online", !0));
            },
            !1
          ),
          window.addEventListener(
            "offline",
            () => {
              this.online_ && ((this.online_ = !1), this.trigger("online", !1));
            },
            !1
          ));
    }
    static getInstance() {
      return new ii();
    }
    getInitialEvent(e) {
      return Ae("online" === e, "Unknown event type: " + e), [this.online_];
    }
    currentlyOnline() {
      return this.online_;
    }
  }
  const oi = 32,
    si = 768;
  class ai {
    constructor(e, t) {
      if (void 0 === t) {
        this.pieces_ = e.split("/");
        let t = 0;
        for (let e = 0; e < this.pieces_.length; e++)
          this.pieces_[e].length > 0 &&
            ((this.pieces_[t] = this.pieces_[e]), t++);
        (this.pieces_.length = t), (this.pieceNum_ = 0);
      } else (this.pieces_ = e), (this.pieceNum_ = t);
    }
    toString() {
      let e = "";
      for (let t = this.pieceNum_; t < this.pieces_.length; t++)
        "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
      return e || "/";
    }
  }
  function li() {
    return new ai("");
  }
  function ci(e) {
    return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_];
  }
  function ui(e) {
    return e.pieces_.length - e.pieceNum_;
  }
  function di(e) {
    let t = e.pieceNum_;
    return t < e.pieces_.length && t++, new ai(e.pieces_, t);
  }
  function hi(e) {
    return e.pieceNum_ < e.pieces_.length
      ? e.pieces_[e.pieces_.length - 1]
      : null;
  }
  function fi(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return e.pieces_.slice(e.pieceNum_ + t);
  }
  function pi(e) {
    if (e.pieceNum_ >= e.pieces_.length) return null;
    const t = [];
    for (let n = e.pieceNum_; n < e.pieces_.length - 1; n++)
      t.push(e.pieces_[n]);
    return new ai(t, 0);
  }
  function mi(e, t) {
    const n = [];
    for (let r = e.pieceNum_; r < e.pieces_.length; r++) n.push(e.pieces_[r]);
    if (t instanceof ai)
      for (let r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
    else {
      const e = t.split("/");
      for (let t = 0; t < e.length; t++) e[t].length > 0 && n.push(e[t]);
    }
    return new ai(n, 0);
  }
  function gi(e) {
    return e.pieceNum_ >= e.pieces_.length;
  }
  function vi(e, t) {
    const n = ci(e),
      r = ci(t);
    if (null === n) return t;
    if (n === r) return vi(di(e), di(t));
    throw new Error(
      "INTERNAL ERROR: innerPath (" +
        t +
        ") is not within outerPath (" +
        e +
        ")"
    );
  }
  function _i(e, t) {
    const n = fi(e, 0),
      r = fi(t, 0);
    for (let i = 0; i < n.length && i < r.length; i++) {
      const e = Cr(n[i], r[i]);
      if (0 !== e) return e;
    }
    return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
  }
  function yi(e, t) {
    if (ui(e) !== ui(t)) return !1;
    for (let n = e.pieceNum_, r = t.pieceNum_; n <= e.pieces_.length; n++, r++)
      if (e.pieces_[n] !== t.pieces_[r]) return !1;
    return !0;
  }
  function bi(e, t) {
    let n = e.pieceNum_,
      r = t.pieceNum_;
    if (ui(e) > ui(t)) return !1;
    for (; n < e.pieces_.length; ) {
      if (e.pieces_[n] !== t.pieces_[r]) return !1;
      ++n, ++r;
    }
    return !0;
  }
  class wi {
    constructor(e, t) {
      (this.errorPrefix_ = t),
        (this.parts_ = fi(e, 0)),
        (this.byteLength_ = Math.max(1, this.parts_.length));
      for (let n = 0; n < this.parts_.length; n++)
        this.byteLength_ += bt(this.parts_[n]);
      ki(this);
    }
  }
  function ki(e) {
    if (e.byteLength_ > si)
      throw new Error(
        e.errorPrefix_ +
          "has a key path longer than " +
          si +
          " bytes (" +
          e.byteLength_ +
          ")."
      );
    if (e.parts_.length > oi)
      throw new Error(
        e.errorPrefix_ +
          "path specified exceeds the maximum depth that can be written (" +
          oi +
          ") or object contains a cycle " +
          Ci(e)
      );
  }
  function Ci(e) {
    return 0 === e.parts_.length
      ? ""
      : "in property '" + e.parts_.join(".") + "'";
  }
  class Si extends ri {
    constructor() {
      let e, t;
      super(["visible"]),
        "undefined" !== typeof document &&
          "undefined" !== typeof document.addEventListener &&
          ("undefined" !== typeof document.hidden
            ? ((t = "visibilitychange"), (e = "hidden"))
            : "undefined" !== typeof document.mozHidden
            ? ((t = "mozvisibilitychange"), (e = "mozHidden"))
            : "undefined" !== typeof document.msHidden
            ? ((t = "msvisibilitychange"), (e = "msHidden"))
            : "undefined" !== typeof document.webkitHidden &&
              ((t = "webkitvisibilitychange"), (e = "webkitHidden"))),
        (this.visible_ = !0),
        t &&
          document.addEventListener(
            t,
            () => {
              const t = !document[e];
              t !== this.visible_ &&
                ((this.visible_ = t), this.trigger("visible", t));
            },
            !1
          );
    }
    static getInstance() {
      return new Si();
    }
    getInitialEvent(e) {
      return Ae("visible" === e, "Unknown event type: " + e), [this.visible_];
    }
  }
  const Ei = 1e3;
  class Ii extends ni {
    constructor(e, t, n, r, i, o, s, a) {
      if (
        (super(),
        (this.repoInfo_ = e),
        (this.applicationId_ = t),
        (this.onDataUpdate_ = n),
        (this.onConnectStatus_ = r),
        (this.onServerInfoUpdate_ = i),
        (this.authTokenProvider_ = o),
        (this.appCheckTokenProvider_ = s),
        (this.authOverride_ = a),
        (this.id = Ii.nextPersistentConnectionId_++),
        (this.log_ = gr("p:" + this.id + ":")),
        (this.interruptReasons_ = {}),
        (this.listens = new Map()),
        (this.outstandingPuts_ = []),
        (this.outstandingGets_ = []),
        (this.outstandingPutCount_ = 0),
        (this.outstandingGetCount_ = 0),
        (this.onDisconnectRequestQueue_ = []),
        (this.connected_ = !1),
        (this.reconnectDelay_ = Ei),
        (this.maxReconnectDelay_ = 3e5),
        (this.securityDebugCallback_ = null),
        (this.lastSessionId = null),
        (this.establishConnectionTimer_ = null),
        (this.visible_ = !1),
        (this.requestCBHash_ = {}),
        (this.requestNumber_ = 0),
        (this.realtime_ = null),
        (this.authToken_ = null),
        (this.appCheckToken_ = null),
        (this.forceTokenRefresh_ = !1),
        (this.invalidAuthTokenCount_ = 0),
        (this.invalidAppCheckTokenCount_ = 0),
        (this.firstConnection_ = !0),
        (this.lastConnectionAttemptTime_ = null),
        (this.lastConnectionEstablishedTime_ = null),
        a && !et())
      )
        throw new Error(
          "Auth override specified in options, but not supported on non Node.js platforms"
        );
      Si.getInstance().on("visible", this.onVisible_, this),
        -1 === e.host.indexOf("fblocal") &&
          ii.getInstance().on("online", this.onOnline_, this);
    }
    sendRequest(e, t, n) {
      const r = ++this.requestNumber_,
        i = { r: r, a: e, b: t };
      this.log_(ot(i)),
        Ae(
          this.connected_,
          "sendRequest call when we're not connected not allowed."
        ),
        this.realtime_.sendRequest(i),
        n && (this.requestCBHash_[r] = n);
    }
    get(e) {
      this.initConnection_();
      const t = new Ye(),
        n = {
          action: "g",
          request: { p: e._path.toString(), q: e._queryObject },
          onComplete: (e) => {
            const n = e.d;
            "ok" === e.s ? t.resolve(n) : t.reject(n);
          },
        };
      this.outstandingGets_.push(n), this.outstandingGetCount_++;
      const r = this.outstandingGets_.length - 1;
      return this.connected_ && this.sendGet_(r), t.promise;
    }
    listen(e, t, n, r) {
      this.initConnection_();
      const i = e._queryIdentifier,
        o = e._path.toString();
      this.log_("Listen called for " + o + " " + i),
        this.listens.has(o) || this.listens.set(o, new Map()),
        Ae(
          e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
          "listen() called for non-default but complete query"
        ),
        Ae(
          !this.listens.get(o).has(i),
          "listen() called twice for same path/queryId."
        );
      const s = { onComplete: r, hashFn: t, query: e, tag: n };
      this.listens.get(o).set(i, s), this.connected_ && this.sendListen_(s);
    }
    sendGet_(e) {
      const t = this.outstandingGets_[e];
      this.sendRequest("g", t.request, (n) => {
        delete this.outstandingGets_[e],
          this.outstandingGetCount_--,
          0 === this.outstandingGetCount_ && (this.outstandingGets_ = []),
          t.onComplete && t.onComplete(n);
      });
    }
    sendListen_(e) {
      const t = e.query,
        n = t._path.toString(),
        r = t._queryIdentifier;
      this.log_("Listen on " + n + " for " + r);
      const i = { p: n };
      e.tag && ((i.q = t._queryObject), (i.t = e.tag)),
        (i.h = e.hashFn()),
        this.sendRequest("q", i, (i) => {
          const o = i.d,
            s = i.s;
          Ii.warnOnListenWarnings_(o, t);
          (this.listens.get(n) && this.listens.get(n).get(r)) === e &&
            (this.log_("listen response", i),
            "ok" !== s && this.removeListen_(n, r),
            e.onComplete && e.onComplete(s, o));
        });
    }
    static warnOnListenWarnings_(e, t) {
      if (e && "object" === typeof e && at(e, "w")) {
        const n = lt(e, "w");
        if (Array.isArray(n) && ~n.indexOf("no_index")) {
          const e =
              '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
            n = t._path.toString();
          yr(
            "Using an unspecified index. Your data will be downloaded and " +
              "filtered on the client. Consider adding ".concat(e, " at ") +
              "".concat(n, " to your security rules for better performance.")
          );
        }
      }
    }
    refreshAuthToken(e) {
      (this.authToken_ = e),
        this.log_("Auth token refreshed"),
        this.authToken_
          ? this.tryAuth()
          : this.connected_ && this.sendRequest("unauth", {}, () => {}),
        this.reduceReconnectDelayIfAdminCredential_(e);
    }
    reduceReconnectDelayIfAdminCredential_(e) {
      ((e && 40 === e.length) ||
        (function (e) {
          const t = st(e).claims;
          return "object" === typeof t && !0 === t.admin;
        })(e)) &&
        (this.log_(
          "Admin auth credential detected.  Reducing max reconnect time."
        ),
        (this.maxReconnectDelay_ = 3e4));
    }
    refreshAppCheckToken(e) {
      (this.appCheckToken_ = e),
        this.log_("App check token refreshed"),
        this.appCheckToken_
          ? this.tryAppCheck()
          : this.connected_ && this.sendRequest("unappeck", {}, () => {});
    }
    tryAuth() {
      if (this.connected_ && this.authToken_) {
        const e = this.authToken_,
          t = (function (e) {
            const t = st(e).claims;
            return !!t && "object" === typeof t && t.hasOwnProperty("iat");
          })(e)
            ? "auth"
            : "gauth",
          n = { cred: e };
        null === this.authOverride_
          ? (n.noauth = !0)
          : "object" === typeof this.authOverride_ &&
            (n.authvar = this.authOverride_),
          this.sendRequest(t, n, (t) => {
            const n = t.s,
              r = t.d || "error";
            this.authToken_ === e &&
              ("ok" === n
                ? (this.invalidAuthTokenCount_ = 0)
                : this.onAuthRevoked_(n, r));
          });
      }
    }
    tryAppCheck() {
      this.connected_ &&
        this.appCheckToken_ &&
        this.sendRequest("appcheck", { token: this.appCheckToken_ }, (e) => {
          const t = e.s,
            n = e.d || "error";
          "ok" === t
            ? (this.invalidAppCheckTokenCount_ = 0)
            : this.onAppCheckRevoked_(t, n);
        });
    }
    unlisten(e, t) {
      const n = e._path.toString(),
        r = e._queryIdentifier;
      this.log_("Unlisten called for " + n + " " + r),
        Ae(
          e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
          "unlisten() called for non-default but complete query"
        );
      this.removeListen_(n, r) &&
        this.connected_ &&
        this.sendUnlisten_(n, r, e._queryObject, t);
    }
    sendUnlisten_(e, t, n, r) {
      this.log_("Unlisten on " + e + " for " + t);
      const i = { p: e };
      r && ((i.q = n), (i.t = r)), this.sendRequest("n", i);
    }
    onDisconnectPut(e, t, n) {
      this.initConnection_(),
        this.connected_
          ? this.sendOnDisconnect_("o", e, t, n)
          : this.onDisconnectRequestQueue_.push({
              pathString: e,
              action: "o",
              data: t,
              onComplete: n,
            });
    }
    onDisconnectMerge(e, t, n) {
      this.initConnection_(),
        this.connected_
          ? this.sendOnDisconnect_("om", e, t, n)
          : this.onDisconnectRequestQueue_.push({
              pathString: e,
              action: "om",
              data: t,
              onComplete: n,
            });
    }
    onDisconnectCancel(e, t) {
      this.initConnection_(),
        this.connected_
          ? this.sendOnDisconnect_("oc", e, null, t)
          : this.onDisconnectRequestQueue_.push({
              pathString: e,
              action: "oc",
              data: null,
              onComplete: t,
            });
    }
    sendOnDisconnect_(e, t, n, r) {
      const i = { p: t, d: n };
      this.log_("onDisconnect " + e, i),
        this.sendRequest(e, i, (e) => {
          r &&
            setTimeout(() => {
              r(e.s, e.d);
            }, Math.floor(0));
        });
    }
    put(e, t, n, r) {
      this.putInternal("p", e, t, n, r);
    }
    merge(e, t, n, r) {
      this.putInternal("m", e, t, n, r);
    }
    putInternal(e, t, n, r, i) {
      this.initConnection_();
      const o = { p: t, d: n };
      void 0 !== i && (o.h = i),
        this.outstandingPuts_.push({ action: e, request: o, onComplete: r }),
        this.outstandingPutCount_++;
      const s = this.outstandingPuts_.length - 1;
      this.connected_ ? this.sendPut_(s) : this.log_("Buffering put: " + t);
    }
    sendPut_(e) {
      const t = this.outstandingPuts_[e].action,
        n = this.outstandingPuts_[e].request,
        r = this.outstandingPuts_[e].onComplete;
      (this.outstandingPuts_[e].queued = this.connected_),
        this.sendRequest(t, n, (n) => {
          this.log_(t + " response", n),
            delete this.outstandingPuts_[e],
            this.outstandingPutCount_--,
            0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []),
            r && r(n.s, n.d);
        });
    }
    reportStats(e) {
      if (this.connected_) {
        const t = { c: e };
        this.log_("reportStats", t),
          this.sendRequest("s", t, (e) => {
            if ("ok" !== e.s) {
              const t = e.d;
              this.log_("reportStats", "Error sending stats: " + t);
            }
          });
      }
    }
    onDataMessage_(e) {
      if ("r" in e) {
        this.log_("from server: " + ot(e));
        const t = e.r,
          n = this.requestCBHash_[t];
        n && (delete this.requestCBHash_[t], n(e.b));
      } else {
        if ("error" in e) throw "A server-side error has occurred: " + e.error;
        "a" in e && this.onDataPush_(e.a, e.b);
      }
    }
    onDataPush_(e, t) {
      this.log_("handleServerMessage", e, t),
        "d" === e
          ? this.onDataUpdate_(t.p, t.d, !1, t.t)
          : "m" === e
          ? this.onDataUpdate_(t.p, t.d, !0, t.t)
          : "c" === e
          ? this.onListenRevoked_(t.p, t.q)
          : "ac" === e
          ? this.onAuthRevoked_(t.s, t.d)
          : "apc" === e
          ? this.onAppCheckRevoked_(t.s, t.d)
          : "sd" === e
          ? this.onSecurityDebugPacket_(t)
          : vr(
              "Unrecognized action received from server: " +
                ot(e) +
                "\nAre you using the latest client?"
            );
    }
    onReady_(e, t) {
      this.log_("connection ready"),
        (this.connected_ = !0),
        (this.lastConnectionEstablishedTime_ = new Date().getTime()),
        this.handleTimestamp_(e),
        (this.lastSessionId = t),
        this.firstConnection_ && this.sendConnectStats_(),
        this.restoreState_(),
        (this.firstConnection_ = !1),
        this.onConnectStatus_(!0);
    }
    scheduleConnect_(e) {
      Ae(
        !this.realtime_,
        "Scheduling a connect when we're already connected/ing?"
      ),
        this.establishConnectionTimer_ &&
          clearTimeout(this.establishConnectionTimer_),
        (this.establishConnectionTimer_ = setTimeout(() => {
          (this.establishConnectionTimer_ = null), this.establishConnection_();
        }, Math.floor(e)));
    }
    initConnection_() {
      !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
    }
    onVisible_(e) {
      e &&
        !this.visible_ &&
        this.reconnectDelay_ === this.maxReconnectDelay_ &&
        (this.log_("Window became visible.  Reducing delay."),
        (this.reconnectDelay_ = Ei),
        this.realtime_ || this.scheduleConnect_(0)),
        (this.visible_ = e);
    }
    onOnline_(e) {
      e
        ? (this.log_("Browser went online."),
          (this.reconnectDelay_ = Ei),
          this.realtime_ || this.scheduleConnect_(0))
        : (this.log_("Browser went offline.  Killing connection."),
          this.realtime_ && this.realtime_.close());
    }
    onRealtimeDisconnect_() {
      if (
        (this.log_("data client disconnected"),
        (this.connected_ = !1),
        (this.realtime_ = null),
        this.cancelSentTransactions_(),
        (this.requestCBHash_ = {}),
        this.shouldReconnect_())
      ) {
        if (this.visible_) {
          if (this.lastConnectionEstablishedTime_) {
            new Date().getTime() - this.lastConnectionEstablishedTime_ > 3e4 &&
              (this.reconnectDelay_ = Ei),
              (this.lastConnectionEstablishedTime_ = null);
          }
        } else
          this.log_("Window isn't visible.  Delaying reconnect."),
            (this.reconnectDelay_ = this.maxReconnectDelay_),
            (this.lastConnectionAttemptTime_ = new Date().getTime());
        const e = new Date().getTime() - this.lastConnectionAttemptTime_;
        let t = Math.max(0, this.reconnectDelay_ - e);
        (t = Math.random() * t),
          this.log_("Trying to reconnect in " + t + "ms"),
          this.scheduleConnect_(t),
          (this.reconnectDelay_ = Math.min(
            this.maxReconnectDelay_,
            1.3 * this.reconnectDelay_
          ));
      }
      this.onConnectStatus_(!1);
    }
    async establishConnection_() {
      if (this.shouldReconnect_()) {
        this.log_("Making a connection attempt"),
          (this.lastConnectionAttemptTime_ = new Date().getTime()),
          (this.lastConnectionEstablishedTime_ = null);
        const e = this.onDataMessage_.bind(this),
          t = this.onReady_.bind(this),
          n = this.onRealtimeDisconnect_.bind(this),
          r = this.id + ":" + Ii.nextConnectionId_++,
          i = this.lastSessionId;
        let o = !1,
          s = null;
        const a = function () {
            s ? s.close() : ((o = !0), n());
          },
          l = function (e) {
            Ae(s, "sendRequest call when we're not connected not allowed."),
              s.sendRequest(e);
          };
        this.realtime_ = { close: a, sendRequest: l };
        const c = this.forceTokenRefresh_;
        this.forceTokenRefresh_ = !1;
        try {
          const [a, l] = await Promise.all([
            this.authTokenProvider_.getToken(c),
            this.appCheckTokenProvider_.getToken(c),
          ]);
          o
            ? mr("getToken() completed but was canceled")
            : (mr("getToken() completed. Creating connection."),
              (this.authToken_ = a && a.accessToken),
              (this.appCheckToken_ = l && l.token),
              (s = new ti(
                r,
                this.repoInfo_,
                this.applicationId_,
                this.appCheckToken_,
                this.authToken_,
                e,
                t,
                n,
                (e) => {
                  yr(e + " (" + this.repoInfo_.toString() + ")"),
                    this.interrupt("server_kill");
                },
                i
              )));
        } catch (vr) {
          this.log_("Failed to get token: " + vr),
            o || (this.repoInfo_.nodeAdmin && yr(vr), a());
        }
      }
    }
    interrupt(e) {
      mr("Interrupting connection for reason: " + e),
        (this.interruptReasons_[e] = !0),
        this.realtime_
          ? this.realtime_.close()
          : (this.establishConnectionTimer_ &&
              (clearTimeout(this.establishConnectionTimer_),
              (this.establishConnectionTimer_ = null)),
            this.connected_ && this.onRealtimeDisconnect_());
    }
    resume(e) {
      mr("Resuming connection for reason: " + e),
        delete this.interruptReasons_[e],
        ct(this.interruptReasons_) &&
          ((this.reconnectDelay_ = Ei),
          this.realtime_ || this.scheduleConnect_(0));
    }
    handleTimestamp_(e) {
      const t = e - new Date().getTime();
      this.onServerInfoUpdate_({ serverTimeOffset: t });
    }
    cancelSentTransactions_() {
      for (let e = 0; e < this.outstandingPuts_.length; e++) {
        const t = this.outstandingPuts_[e];
        t &&
          "h" in t.request &&
          t.queued &&
          (t.onComplete && t.onComplete("disconnect"),
          delete this.outstandingPuts_[e],
          this.outstandingPutCount_--);
      }
      0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
    }
    onListenRevoked_(e, t) {
      let n;
      n = t ? t.map((e) => Ir(e)).join("$") : "default";
      const r = this.removeListen_(e, n);
      r && r.onComplete && r.onComplete("permission_denied");
    }
    removeListen_(e, t) {
      const n = new ai(e).toString();
      let r;
      if (this.listens.has(n)) {
        const e = this.listens.get(n);
        (r = e.get(t)), e.delete(t), 0 === e.size && this.listens.delete(n);
      } else r = void 0;
      return r;
    }
    onAuthRevoked_(e, t) {
      mr("Auth token revoked: " + e + "/" + t),
        (this.authToken_ = null),
        (this.forceTokenRefresh_ = !0),
        this.realtime_.close(),
        ("invalid_token" !== e && "permission_denied" !== e) ||
          (this.invalidAuthTokenCount_++,
          this.invalidAuthTokenCount_ >= 3 &&
            ((this.reconnectDelay_ = 3e4),
            this.authTokenProvider_.notifyForInvalidToken()));
    }
    onAppCheckRevoked_(e, t) {
      mr("App check token revoked: " + e + "/" + t),
        (this.appCheckToken_ = null),
        (this.forceTokenRefresh_ = !0),
        ("invalid_token" !== e && "permission_denied" !== e) ||
          (this.invalidAppCheckTokenCount_++,
          this.invalidAppCheckTokenCount_ >= 3 &&
            this.appCheckTokenProvider_.notifyForInvalidToken());
    }
    onSecurityDebugPacket_(e) {
      this.securityDebugCallback_
        ? this.securityDebugCallback_(e)
        : "msg" in e &&
          console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "));
    }
    restoreState_() {
      this.tryAuth(), this.tryAppCheck();
      for (const e of this.listens.values())
        for (const t of e.values()) this.sendListen_(t);
      for (let e = 0; e < this.outstandingPuts_.length; e++)
        this.outstandingPuts_[e] && this.sendPut_(e);
      for (; this.onDisconnectRequestQueue_.length; ) {
        const e = this.onDisconnectRequestQueue_.shift();
        this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete);
      }
      for (let e = 0; e < this.outstandingGets_.length; e++)
        this.outstandingGets_[e] && this.sendGet_(e);
    }
    sendConnectStats_() {
      const e = {};
      let t = "js";
      et() && (t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"),
        (e["sdk." + t + "." + tr.replace(/\./g, "-")] = 1),
        Xe()
          ? (e["framework.cordova"] = 1)
          : Ze() && (e["framework.reactnative"] = 1),
        this.reportStats(e);
    }
    shouldReconnect_() {
      const e = ii.getInstance().currentlyOnline();
      return ct(this.interruptReasons_) && e;
    }
  }
  (Ii.nextPersistentConnectionId_ = 0), (Ii.nextConnectionId_ = 0);
  class Ti {
    constructor(e, t) {
      (this.name = e), (this.node = t);
    }
    static Wrap(e, t) {
      return new Ti(e, t);
    }
  }
  class Ni {
    getCompare() {
      return this.compare.bind(this);
    }
    indexedValueChanged(e, t) {
      const n = new Ti(wr, e),
        r = new Ti(wr, t);
      return 0 !== this.compare(n, r);
    }
    minPost() {
      return Ti.MIN;
    }
  }
  let Pi;
  class Ri extends Ni {
    static get __EMPTY_NODE() {
      return Pi;
    }
    static set __EMPTY_NODE(e) {
      Pi = e;
    }
    compare(e, t) {
      return Cr(e.name, t.name);
    }
    isDefinedOn(e) {
      throw De("KeyIndex.isDefinedOn not expected to be called.");
    }
    indexedValueChanged(e, t) {
      return !1;
    }
    minPost() {
      return Ti.MIN;
    }
    maxPost() {
      return new Ti(kr, Pi);
    }
    makePost(e, t) {
      return (
        Ae(
          "string" === typeof e,
          "KeyIndex indexValue must always be a string."
        ),
        new Ti(e, Pi)
      );
    }
    toString() {
      return ".key";
    }
  }
  const xi = new Ri();
  class Oi {
    constructor(e, t, n, r) {
      let i =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      (this.isReverse_ = r),
        (this.resultGenerator_ = i),
        (this.nodeStack_ = []);
      let o = 1;
      for (; !e.isEmpty(); )
        if (((o = t ? n(e.key, t) : 1), r && (o *= -1), o < 0))
          e = this.isReverse_ ? e.left : e.right;
        else {
          if (0 === o) {
            this.nodeStack_.push(e);
            break;
          }
          this.nodeStack_.push(e), (e = this.isReverse_ ? e.right : e.left);
        }
    }
    getNext() {
      if (0 === this.nodeStack_.length) return null;
      let e,
        t = this.nodeStack_.pop();
      if (
        ((e = this.resultGenerator_
          ? this.resultGenerator_(t.key, t.value)
          : { key: t.key, value: t.value }),
        this.isReverse_)
      )
        for (t = t.left; !t.isEmpty(); ) this.nodeStack_.push(t), (t = t.right);
      else
        for (t = t.right; !t.isEmpty(); ) this.nodeStack_.push(t), (t = t.left);
      return e;
    }
    hasNext() {
      return this.nodeStack_.length > 0;
    }
    peek() {
      if (0 === this.nodeStack_.length) return null;
      const e = this.nodeStack_[this.nodeStack_.length - 1];
      return this.resultGenerator_
        ? this.resultGenerator_(e.key, e.value)
        : { key: e.key, value: e.value };
    }
  }
  class Ai {
    constructor(e, t, n, r, i) {
      (this.key = e),
        (this.value = t),
        (this.color = null != n ? n : Ai.RED),
        (this.left = null != r ? r : Di.EMPTY_NODE),
        (this.right = null != i ? i : Di.EMPTY_NODE);
    }
    copy(e, t, n, r, i) {
      return new Ai(
        null != e ? e : this.key,
        null != t ? t : this.value,
        null != n ? n : this.color,
        null != r ? r : this.left,
        null != i ? i : this.right
      );
    }
    count() {
      return this.left.count() + 1 + this.right.count();
    }
    isEmpty() {
      return !1;
    }
    inorderTraversal(e) {
      return (
        this.left.inorderTraversal(e) ||
        !!e(this.key, this.value) ||
        this.right.inorderTraversal(e)
      );
    }
    reverseTraversal(e) {
      return (
        this.right.reverseTraversal(e) ||
        e(this.key, this.value) ||
        this.left.reverseTraversal(e)
      );
    }
    min_() {
      return this.left.isEmpty() ? this : this.left.min_();
    }
    minKey() {
      return this.min_().key;
    }
    maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    insert(e, t, n) {
      let r = this;
      const i = n(e, r.key);
      return (
        (r =
          i < 0
            ? r.copy(null, null, null, r.left.insert(e, t, n), null)
            : 0 === i
            ? r.copy(null, t, null, null, null)
            : r.copy(null, null, null, null, r.right.insert(e, t, n))),
        r.fixUp_()
      );
    }
    removeMin_() {
      if (this.left.isEmpty()) return Di.EMPTY_NODE;
      let e = this;
      return (
        e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()),
        (e = e.copy(null, null, null, e.left.removeMin_(), null)),
        e.fixUp_()
      );
    }
    remove(e, t) {
      let n, r;
      if (((n = this), t(e, n.key) < 0))
        n.left.isEmpty() ||
          n.left.isRed_() ||
          n.left.left.isRed_() ||
          (n = n.moveRedLeft_()),
          (n = n.copy(null, null, null, n.left.remove(e, t), null));
      else {
        if (
          (n.left.isRed_() && (n = n.rotateRight_()),
          n.right.isEmpty() ||
            n.right.isRed_() ||
            n.right.left.isRed_() ||
            (n = n.moveRedRight_()),
          0 === t(e, n.key))
        ) {
          if (n.right.isEmpty()) return Di.EMPTY_NODE;
          (r = n.right.min_()),
            (n = n.copy(r.key, r.value, null, null, n.right.removeMin_()));
        }
        n = n.copy(null, null, null, null, n.right.remove(e, t));
      }
      return n.fixUp_();
    }
    isRed_() {
      return this.color;
    }
    fixUp_() {
      let e = this;
      return (
        e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
        e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
        e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
        e
      );
    }
    moveRedLeft_() {
      let e = this.colorFlip_();
      return (
        e.right.left.isRed_() &&
          ((e = e.copy(null, null, null, null, e.right.rotateRight_())),
          (e = e.rotateLeft_()),
          (e = e.colorFlip_())),
        e
      );
    }
    moveRedRight_() {
      let e = this.colorFlip_();
      return (
        e.left.left.isRed_() && ((e = e.rotateRight_()), (e = e.colorFlip_())),
        e
      );
    }
    rotateLeft_() {
      const e = this.copy(null, null, Ai.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, e, null);
    }
    rotateRight_() {
      const e = this.copy(null, null, Ai.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, e);
    }
    colorFlip_() {
      const e = this.left.copy(null, null, !this.left.color, null, null),
        t = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, e, t);
    }
    checkMaxDepth_() {
      const e = this.check_();
      return Math.pow(2, e) <= this.count() + 1;
    }
    check_() {
      if (this.isRed_() && this.left.isRed_())
        throw new Error(
          "Red node has red child(" + this.key + "," + this.value + ")"
        );
      if (this.right.isRed_())
        throw new Error(
          "Right child of (" + this.key + "," + this.value + ") is red"
        );
      const e = this.left.check_();
      if (e !== this.right.check_()) throw new Error("Black depths differ");
      return e + (this.isRed_() ? 0 : 1);
    }
  }
  (Ai.RED = !0), (Ai.BLACK = !1);
  class Di {
    constructor(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Di.EMPTY_NODE;
      (this.comparator_ = e), (this.root_ = t);
    }
    insert(e, t) {
      return new Di(
        this.comparator_,
        this.root_
          .insert(e, t, this.comparator_)
          .copy(null, null, Ai.BLACK, null, null)
      );
    }
    remove(e) {
      return new Di(
        this.comparator_,
        this.root_
          .remove(e, this.comparator_)
          .copy(null, null, Ai.BLACK, null, null)
      );
    }
    get(e) {
      let t,
        n = this.root_;
      for (; !n.isEmpty(); ) {
        if (((t = this.comparator_(e, n.key)), 0 === t)) return n.value;
        t < 0 ? (n = n.left) : t > 0 && (n = n.right);
      }
      return null;
    }
    getPredecessorKey(e) {
      let t,
        n = this.root_,
        r = null;
      for (; !n.isEmpty(); ) {
        if (((t = this.comparator_(e, n.key)), 0 === t)) {
          if (n.left.isEmpty()) return r ? r.key : null;
          for (n = n.left; !n.right.isEmpty(); ) n = n.right;
          return n.key;
        }
        t < 0 ? (n = n.left) : t > 0 && ((r = n), (n = n.right));
      }
      throw new Error(
        "Attempted to find predecessor key for a nonexistent key.  What gives?"
      );
    }
    isEmpty() {
      return this.root_.isEmpty();
    }
    count() {
      return this.root_.count();
    }
    minKey() {
      return this.root_.minKey();
    }
    maxKey() {
      return this.root_.maxKey();
    }
    inorderTraversal(e) {
      return this.root_.inorderTraversal(e);
    }
    reverseTraversal(e) {
      return this.root_.reverseTraversal(e);
    }
    getIterator(e) {
      return new Oi(this.root_, null, this.comparator_, !1, e);
    }
    getIteratorFrom(e, t) {
      return new Oi(this.root_, e, this.comparator_, !1, t);
    }
    getReverseIteratorFrom(e, t) {
      return new Oi(this.root_, e, this.comparator_, !0, t);
    }
    getReverseIterator(e) {
      return new Oi(this.root_, null, this.comparator_, !0, e);
    }
  }
  function Li(e, t) {
    return Cr(e.name, t.name);
  }
  function Mi(e, t) {
    return Cr(e, t);
  }
  let Ui;
  Di.EMPTY_NODE = new (class {
    copy(e, t, n, r, i) {
      return this;
    }
    insert(e, t, n) {
      return new Ai(e, t, null);
    }
    remove(e, t) {
      return this;
    }
    count() {
      return 0;
    }
    isEmpty() {
      return !0;
    }
    inorderTraversal(e) {
      return !1;
    }
    reverseTraversal(e) {
      return !1;
    }
    minKey() {
      return null;
    }
    maxKey() {
      return null;
    }
    check_() {
      return 0;
    }
    isRed_() {
      return !1;
    }
  })();
  const Fi = function (e) {
      return "number" === typeof e ? "number:" + Pr(e) : "string:" + e;
    },
    ji = function (e) {
      if (e.isLeafNode()) {
        const t = e.val();
        Ae(
          "string" === typeof t ||
            "number" === typeof t ||
            ("object" === typeof t && at(t, ".sv")),
          "Priority must be a string or number."
        );
      } else Ae(e === Ui || e.isEmpty(), "priority of unexpected type.");
      Ae(
        e === Ui || e.getPriority().isEmpty(),
        "Priority nodes can't have a priority of their own."
      );
    };
  let zi, Wi, Vi;
  class Bi {
    constructor(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Bi.__childrenNodeConstructor.EMPTY_NODE;
      (this.value_ = e),
        (this.priorityNode_ = t),
        (this.lazyHash_ = null),
        Ae(
          void 0 !== this.value_ && null !== this.value_,
          "LeafNode shouldn't be created with null/undefined value."
        ),
        ji(this.priorityNode_);
    }
    static set __childrenNodeConstructor(e) {
      zi = e;
    }
    static get __childrenNodeConstructor() {
      return zi;
    }
    isLeafNode() {
      return !0;
    }
    getPriority() {
      return this.priorityNode_;
    }
    updatePriority(e) {
      return new Bi(this.value_, e);
    }
    getImmediateChild(e) {
      return ".priority" === e
        ? this.priorityNode_
        : Bi.__childrenNodeConstructor.EMPTY_NODE;
    }
    getChild(e) {
      return gi(e)
        ? this
        : ".priority" === ci(e)
        ? this.priorityNode_
        : Bi.__childrenNodeConstructor.EMPTY_NODE;
    }
    hasChild() {
      return !1;
    }
    getPredecessorChildName(e, t) {
      return null;
    }
    updateImmediateChild(e, t) {
      return ".priority" === e
        ? this.updatePriority(t)
        : t.isEmpty() && ".priority" !== e
        ? this
        : Bi.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
            e,
            t
          ).updatePriority(this.priorityNode_);
    }
    updateChild(e, t) {
      const n = ci(e);
      return null === n
        ? t
        : t.isEmpty() && ".priority" !== n
        ? this
        : (Ae(
            ".priority" !== n || 1 === ui(e),
            ".priority must be the last token in a path"
          ),
          this.updateImmediateChild(
            n,
            Bi.__childrenNodeConstructor.EMPTY_NODE.updateChild(di(e), t)
          ));
    }
    isEmpty() {
      return !1;
    }
    numChildren() {
      return 0;
    }
    forEachChild(e, t) {
      return !1;
    }
    val(e) {
      return e && !this.getPriority().isEmpty()
        ? { ".value": this.getValue(), ".priority": this.getPriority().val() }
        : this.getValue();
    }
    hash() {
      if (null === this.lazyHash_) {
        let e = "";
        this.priorityNode_.isEmpty() ||
          (e += "priority:" + Fi(this.priorityNode_.val()) + ":");
        const t = typeof this.value_;
        (e += t + ":"),
          (e += "number" === t ? Pr(this.value_) : this.value_),
          (this.lazyHash_ = ur(e));
      }
      return this.lazyHash_;
    }
    getValue() {
      return this.value_;
    }
    compareTo(e) {
      return e === Bi.__childrenNodeConstructor.EMPTY_NODE
        ? 1
        : e instanceof Bi.__childrenNodeConstructor
        ? -1
        : (Ae(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
    }
    compareToLeafNode_(e) {
      const t = typeof e.value_,
        n = typeof this.value_,
        r = Bi.VALUE_TYPE_ORDER.indexOf(t),
        i = Bi.VALUE_TYPE_ORDER.indexOf(n);
      return (
        Ae(r >= 0, "Unknown leaf type: " + t),
        Ae(i >= 0, "Unknown leaf type: " + n),
        r === i
          ? "object" === n
            ? 0
            : this.value_ < e.value_
            ? -1
            : this.value_ === e.value_
            ? 0
            : 1
          : i - r
      );
    }
    withIndex() {
      return this;
    }
    isIndexed() {
      return !0;
    }
    equals(e) {
      if (e === this) return !0;
      if (e.isLeafNode()) {
        const t = e;
        return (
          this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
        );
      }
      return !1;
    }
  }
  Bi.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
  const qi = new (class extends Ni {
      compare(e, t) {
        const n = e.node.getPriority(),
          r = t.node.getPriority(),
          i = n.compareTo(r);
        return 0 === i ? Cr(e.name, t.name) : i;
      }
      isDefinedOn(e) {
        return !e.getPriority().isEmpty();
      }
      indexedValueChanged(e, t) {
        return !e.getPriority().equals(t.getPriority());
      }
      minPost() {
        return Ti.MIN;
      }
      maxPost() {
        return new Ti(kr, new Bi("[PRIORITY-POST]", Vi));
      }
      makePost(e, t) {
        const n = Wi(e);
        return new Ti(t, new Bi("[PRIORITY-POST]", n));
      }
      toString() {
        return ".priority";
      }
    })(),
    Hi = Math.log(2);
  class Ki {
    constructor(e) {
      var t;
      (this.count = ((t = e + 1), parseInt(Math.log(t) / Hi, 10))),
        (this.current_ = this.count - 1);
      const n = ((r = this.count), parseInt(Array(r + 1).join("1"), 2));
      var r;
      this.bits_ = (e + 1) & n;
    }
    nextBitIsOne() {
      const e = !(this.bits_ & (1 << this.current_));
      return this.current_--, e;
    }
  }
  const $i = function (e, t, n, r) {
    e.sort(t);
    const i = function (t, r) {
        const o = r - t;
        let s, a;
        if (0 === o) return null;
        if (1 === o)
          return (
            (s = e[t]),
            (a = n ? n(s) : s),
            new Ai(a, s.node, Ai.BLACK, null, null)
          );
        {
          const l = parseInt(o / 2, 10) + t,
            c = i(t, l),
            u = i(l + 1, r);
          return (
            (s = e[l]), (a = n ? n(s) : s), new Ai(a, s.node, Ai.BLACK, c, u)
          );
        }
      },
      o = (function (t) {
        let r = null,
          o = null,
          s = e.length;
        const a = function (t, r) {
            const o = s - t,
              a = s;
            s -= t;
            const c = i(o + 1, a),
              u = e[o],
              d = n ? n(u) : u;
            l(new Ai(d, u.node, r, null, c));
          },
          l = function (e) {
            r ? ((r.left = e), (r = e)) : ((o = e), (r = e));
          };
        for (let e = 0; e < t.count; ++e) {
          const n = t.nextBitIsOne(),
            r = Math.pow(2, t.count - (e + 1));
          n ? a(r, Ai.BLACK) : (a(r, Ai.BLACK), a(r, Ai.RED));
        }
        return o;
      })(new Ki(e.length));
    return new Di(r || t, o);
  };
  let Gi;
  const Yi = {};
  class Qi {
    constructor(e, t) {
      (this.indexes_ = e), (this.indexSet_ = t);
    }
    static get Default() {
      return (
        Ae(Yi && qi, "ChildrenNode.ts has not been loaded"),
        (Gi = Gi || new Qi({ ".priority": Yi }, { ".priority": qi })),
        Gi
      );
    }
    get(e) {
      const t = lt(this.indexes_, e);
      if (!t) throw new Error("No index defined for " + e);
      return t instanceof Di ? t : null;
    }
    hasIndex(e) {
      return at(this.indexSet_, e.toString());
    }
    addIndex(e, t) {
      Ae(
        e !== xi,
        "KeyIndex always exists and isn't meant to be added to the IndexMap."
      );
      const n = [];
      let r = !1;
      const i = t.getIterator(Ti.Wrap);
      let o,
        s = i.getNext();
      for (; s; )
        (r = r || e.isDefinedOn(s.node)), n.push(s), (s = i.getNext());
      o = r ? $i(n, e.getCompare()) : Yi;
      const a = e.toString(),
        l = Object.assign({}, this.indexSet_);
      l[a] = e;
      const c = Object.assign({}, this.indexes_);
      return (c[a] = o), new Qi(c, l);
    }
    addToIndexes(e, t) {
      const n = ut(this.indexes_, (n, r) => {
        const i = lt(this.indexSet_, r);
        if ((Ae(i, "Missing index implementation for " + r), n === Yi)) {
          if (i.isDefinedOn(e.node)) {
            const n = [],
              r = t.getIterator(Ti.Wrap);
            let o = r.getNext();
            for (; o; ) o.name !== e.name && n.push(o), (o = r.getNext());
            return n.push(e), $i(n, i.getCompare());
          }
          return Yi;
        }
        {
          const r = t.get(e.name);
          let i = n;
          return r && (i = i.remove(new Ti(e.name, r))), i.insert(e, e.node);
        }
      });
      return new Qi(n, this.indexSet_);
    }
    removeFromIndexes(e, t) {
      const n = ut(this.indexes_, (n) => {
        if (n === Yi) return n;
        {
          const r = t.get(e.name);
          return r ? n.remove(new Ti(e.name, r)) : n;
        }
      });
      return new Qi(n, this.indexSet_);
    }
  }
  let Ji;
  class Xi {
    constructor(e, t, n) {
      (this.children_ = e),
        (this.priorityNode_ = t),
        (this.indexMap_ = n),
        (this.lazyHash_ = null),
        this.priorityNode_ && ji(this.priorityNode_),
        this.children_.isEmpty() &&
          Ae(
            !this.priorityNode_ || this.priorityNode_.isEmpty(),
            "An empty node cannot have a priority"
          );
    }
    static get EMPTY_NODE() {
      return Ji || (Ji = new Xi(new Di(Mi), null, Qi.Default));
    }
    isLeafNode() {
      return !1;
    }
    getPriority() {
      return this.priorityNode_ || Ji;
    }
    updatePriority(e) {
      return this.children_.isEmpty()
        ? this
        : new Xi(this.children_, e, this.indexMap_);
    }
    getImmediateChild(e) {
      if (".priority" === e) return this.getPriority();
      {
        const t = this.children_.get(e);
        return null === t ? Ji : t;
      }
    }
    getChild(e) {
      const t = ci(e);
      return null === t ? this : this.getImmediateChild(t).getChild(di(e));
    }
    hasChild(e) {
      return null !== this.children_.get(e);
    }
    updateImmediateChild(e, t) {
      if (
        (Ae(t, "We should always be passing snapshot nodes"), ".priority" === e)
      )
        return this.updatePriority(t);
      {
        const n = new Ti(e, t);
        let r, i;
        t.isEmpty()
          ? ((r = this.children_.remove(e)),
            (i = this.indexMap_.removeFromIndexes(n, this.children_)))
          : ((r = this.children_.insert(e, t)),
            (i = this.indexMap_.addToIndexes(n, this.children_)));
        const o = r.isEmpty() ? Ji : this.priorityNode_;
        return new Xi(r, o, i);
      }
    }
    updateChild(e, t) {
      const n = ci(e);
      if (null === n) return t;
      {
        Ae(
          ".priority" !== ci(e) || 1 === ui(e),
          ".priority must be the last token in a path"
        );
        const r = this.getImmediateChild(n).updateChild(di(e), t);
        return this.updateImmediateChild(n, r);
      }
    }
    isEmpty() {
      return this.children_.isEmpty();
    }
    numChildren() {
      return this.children_.count();
    }
    val(e) {
      if (this.isEmpty()) return null;
      const t = {};
      let n = 0,
        r = 0,
        i = !0;
      if (
        (this.forEachChild(qi, (o, s) => {
          (t[o] = s.val(e)),
            n++,
            i && Xi.INTEGER_REGEXP_.test(o)
              ? (r = Math.max(r, Number(o)))
              : (i = !1);
        }),
        !e && i && r < 2 * n)
      ) {
        const e = [];
        for (const n in t) e[n] = t[n];
        return e;
      }
      return (
        e &&
          !this.getPriority().isEmpty() &&
          (t[".priority"] = this.getPriority().val()),
        t
      );
    }
    hash() {
      if (null === this.lazyHash_) {
        let e = "";
        this.getPriority().isEmpty() ||
          (e += "priority:" + Fi(this.getPriority().val()) + ":"),
          this.forEachChild(qi, (t, n) => {
            const r = n.hash();
            "" !== r && (e += ":" + t + ":" + r);
          }),
          (this.lazyHash_ = "" === e ? "" : ur(e));
      }
      return this.lazyHash_;
    }
    getPredecessorChildName(e, t, n) {
      const r = this.resolveIndex_(n);
      if (r) {
        const n = r.getPredecessorKey(new Ti(e, t));
        return n ? n.name : null;
      }
      return this.children_.getPredecessorKey(e);
    }
    getFirstChildName(e) {
      const t = this.resolveIndex_(e);
      if (t) {
        const e = t.minKey();
        return e && e.name;
      }
      return this.children_.minKey();
    }
    getFirstChild(e) {
      const t = this.getFirstChildName(e);
      return t ? new Ti(t, this.children_.get(t)) : null;
    }
    getLastChildName(e) {
      const t = this.resolveIndex_(e);
      if (t) {
        const e = t.maxKey();
        return e && e.name;
      }
      return this.children_.maxKey();
    }
    getLastChild(e) {
      const t = this.getLastChildName(e);
      return t ? new Ti(t, this.children_.get(t)) : null;
    }
    forEachChild(e, t) {
      const n = this.resolveIndex_(e);
      return n
        ? n.inorderTraversal((e) => t(e.name, e.node))
        : this.children_.inorderTraversal(t);
    }
    getIterator(e) {
      return this.getIteratorFrom(e.minPost(), e);
    }
    getIteratorFrom(e, t) {
      const n = this.resolveIndex_(t);
      if (n) return n.getIteratorFrom(e, (e) => e);
      {
        const n = this.children_.getIteratorFrom(e.name, Ti.Wrap);
        let r = n.peek();
        for (; null != r && t.compare(r, e) < 0; ) n.getNext(), (r = n.peek());
        return n;
      }
    }
    getReverseIterator(e) {
      return this.getReverseIteratorFrom(e.maxPost(), e);
    }
    getReverseIteratorFrom(e, t) {
      const n = this.resolveIndex_(t);
      if (n) return n.getReverseIteratorFrom(e, (e) => e);
      {
        const n = this.children_.getReverseIteratorFrom(e.name, Ti.Wrap);
        let r = n.peek();
        for (; null != r && t.compare(r, e) > 0; ) n.getNext(), (r = n.peek());
        return n;
      }
    }
    compareTo(e) {
      return this.isEmpty()
        ? e.isEmpty()
          ? 0
          : -1
        : e.isLeafNode() || e.isEmpty()
        ? 1
        : e === Zi
        ? -1
        : 0;
    }
    withIndex(e) {
      if (e === xi || this.indexMap_.hasIndex(e)) return this;
      {
        const t = this.indexMap_.addIndex(e, this.children_);
        return new Xi(this.children_, this.priorityNode_, t);
      }
    }
    isIndexed(e) {
      return e === xi || this.indexMap_.hasIndex(e);
    }
    equals(e) {
      if (e === this) return !0;
      if (e.isLeafNode()) return !1;
      {
        const t = e;
        if (this.getPriority().equals(t.getPriority())) {
          if (this.children_.count() === t.children_.count()) {
            const e = this.getIterator(qi),
              n = t.getIterator(qi);
            let r = e.getNext(),
              i = n.getNext();
            for (; r && i; ) {
              if (r.name !== i.name || !r.node.equals(i.node)) return !1;
              (r = e.getNext()), (i = n.getNext());
            }
            return null === r && null === i;
          }
          return !1;
        }
        return !1;
      }
    }
    resolveIndex_(e) {
      return e === xi ? null : this.indexMap_.get(e.toString());
    }
  }
  Xi.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
  const Zi = new (class extends Xi {
    constructor() {
      super(new Di(Mi), Xi.EMPTY_NODE, Qi.Default);
    }
    compareTo(e) {
      return e === this ? 0 : 1;
    }
    equals(e) {
      return e === this;
    }
    getPriority() {
      return this;
    }
    getImmediateChild(e) {
      return Xi.EMPTY_NODE;
    }
    isEmpty() {
      return !1;
    }
  })();
  Object.defineProperties(Ti, {
    MIN: { value: new Ti(wr, Xi.EMPTY_NODE) },
    MAX: { value: new Ti(kr, Zi) },
  }),
    (Ri.__EMPTY_NODE = Xi.EMPTY_NODE),
    (Bi.__childrenNodeConstructor = Xi),
    (Ui = Zi),
    (function (e) {
      Vi = e;
    })(Zi);
  const eo = !0;
  function to(e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (null === e) return Xi.EMPTY_NODE;
    if (
      ("object" === typeof e && ".priority" in e && (t = e[".priority"]),
      Ae(
        null === t ||
          "string" === typeof t ||
          "number" === typeof t ||
          ("object" === typeof t && ".sv" in t),
        "Invalid priority type found: " + typeof t
      ),
      "object" === typeof e &&
        ".value" in e &&
        null !== e[".value"] &&
        (e = e[".value"]),
      "object" !== typeof e || ".sv" in e)
    ) {
      return new Bi(e, to(t));
    }
    if (e instanceof Array || !eo) {
      let n = Xi.EMPTY_NODE;
      return (
        Nr(e, (t, r) => {
          if (at(e, t) && "." !== t.substring(0, 1)) {
            const e = to(r);
            (!e.isLeafNode() && e.isEmpty()) ||
              (n = n.updateImmediateChild(t, e));
          }
        }),
        n.updatePriority(to(t))
      );
    }
    {
      const n = [];
      let r = !1;
      if (
        (Nr(e, (e, t) => {
          if ("." !== e.substring(0, 1)) {
            const i = to(t);
            i.isEmpty() ||
              ((r = r || !i.getPriority().isEmpty()), n.push(new Ti(e, i)));
          }
        }),
        0 === n.length)
      )
        return Xi.EMPTY_NODE;
      const i = $i(n, Li, (e) => e.name, Mi);
      if (r) {
        const e = $i(n, qi.getCompare());
        return new Xi(
          i,
          to(t),
          new Qi({ ".priority": e }, { ".priority": qi })
        );
      }
      return new Xi(i, to(t), Qi.Default);
    }
  }
  !(function (e) {
    Wi = e;
  })(to);
  class no extends Ni {
    constructor(e) {
      super(),
        (this.indexPath_ = e),
        Ae(
          !gi(e) && ".priority" !== ci(e),
          "Can't create PathIndex with empty path or .priority key"
        );
    }
    extractChild(e) {
      return e.getChild(this.indexPath_);
    }
    isDefinedOn(e) {
      return !e.getChild(this.indexPath_).isEmpty();
    }
    compare(e, t) {
      const n = this.extractChild(e.node),
        r = this.extractChild(t.node),
        i = n.compareTo(r);
      return 0 === i ? Cr(e.name, t.name) : i;
    }
    makePost(e, t) {
      const n = to(e),
        r = Xi.EMPTY_NODE.updateChild(this.indexPath_, n);
      return new Ti(t, r);
    }
    maxPost() {
      const e = Xi.EMPTY_NODE.updateChild(this.indexPath_, Zi);
      return new Ti(kr, e);
    }
    toString() {
      return fi(this.indexPath_, 0).join("/");
    }
  }
  const ro = new (class extends Ni {
    compare(e, t) {
      const n = e.node.compareTo(t.node);
      return 0 === n ? Cr(e.name, t.name) : n;
    }
    isDefinedOn(e) {
      return !0;
    }
    indexedValueChanged(e, t) {
      return !e.equals(t);
    }
    minPost() {
      return Ti.MIN;
    }
    maxPost() {
      return Ti.MAX;
    }
    makePost(e, t) {
      const n = to(e);
      return new Ti(t, n);
    }
    toString() {
      return ".value";
    }
  })();
  function io(e) {
    return { type: "value", snapshotNode: e };
  }
  function oo(e, t) {
    return { type: "child_added", snapshotNode: t, childName: e };
  }
  function so(e, t) {
    return { type: "child_removed", snapshotNode: t, childName: e };
  }
  function ao(e, t, n) {
    return { type: "child_changed", snapshotNode: t, childName: e, oldSnap: n };
  }
  class lo {
    constructor(e) {
      this.index_ = e;
    }
    updateChild(e, t, n, r, i, o) {
      Ae(
        e.isIndexed(this.index_),
        "A node must be indexed if only a child is updated"
      );
      const s = e.getImmediateChild(t);
      return s.getChild(r).equals(n.getChild(r)) && s.isEmpty() === n.isEmpty()
        ? e
        : (null != o &&
            (n.isEmpty()
              ? e.hasChild(t)
                ? o.trackChildChange(so(t, s))
                : Ae(
                    e.isLeafNode(),
                    "A child remove without an old child only makes sense on a leaf node"
                  )
              : s.isEmpty()
              ? o.trackChildChange(oo(t, n))
              : o.trackChildChange(ao(t, n, s))),
          e.isLeafNode() && n.isEmpty()
            ? e
            : e.updateImmediateChild(t, n).withIndex(this.index_));
    }
    updateFullNode(e, t, n) {
      return (
        null != n &&
          (e.isLeafNode() ||
            e.forEachChild(qi, (e, r) => {
              t.hasChild(e) || n.trackChildChange(so(e, r));
            }),
          t.isLeafNode() ||
            t.forEachChild(qi, (t, r) => {
              if (e.hasChild(t)) {
                const i = e.getImmediateChild(t);
                i.equals(r) || n.trackChildChange(ao(t, r, i));
              } else n.trackChildChange(oo(t, r));
            })),
        t.withIndex(this.index_)
      );
    }
    updatePriority(e, t) {
      return e.isEmpty() ? Xi.EMPTY_NODE : e.updatePriority(t);
    }
    filtersNodes() {
      return !1;
    }
    getIndexedFilter() {
      return this;
    }
    getIndex() {
      return this.index_;
    }
  }
  class co {
    constructor(e) {
      (this.indexedFilter_ = new lo(e.getIndex())),
        (this.index_ = e.getIndex()),
        (this.startPost_ = co.getStartPost_(e)),
        (this.endPost_ = co.getEndPost_(e)),
        (this.startIsInclusive_ = !e.startAfterSet_),
        (this.endIsInclusive_ = !e.endBeforeSet_);
    }
    getStartPost() {
      return this.startPost_;
    }
    getEndPost() {
      return this.endPost_;
    }
    matches(e) {
      const t = this.startIsInclusive_
          ? this.index_.compare(this.getStartPost(), e) <= 0
          : this.index_.compare(this.getStartPost(), e) < 0,
        n = this.endIsInclusive_
          ? this.index_.compare(e, this.getEndPost()) <= 0
          : this.index_.compare(e, this.getEndPost()) < 0;
      return t && n;
    }
    updateChild(e, t, n, r, i, o) {
      return (
        this.matches(new Ti(t, n)) || (n = Xi.EMPTY_NODE),
        this.indexedFilter_.updateChild(e, t, n, r, i, o)
      );
    }
    updateFullNode(e, t, n) {
      t.isLeafNode() && (t = Xi.EMPTY_NODE);
      let r = t.withIndex(this.index_);
      r = r.updatePriority(Xi.EMPTY_NODE);
      const i = this;
      return (
        t.forEachChild(qi, (e, t) => {
          i.matches(new Ti(e, t)) ||
            (r = r.updateImmediateChild(e, Xi.EMPTY_NODE));
        }),
        this.indexedFilter_.updateFullNode(e, r, n)
      );
    }
    updatePriority(e, t) {
      return e;
    }
    filtersNodes() {
      return !0;
    }
    getIndexedFilter() {
      return this.indexedFilter_;
    }
    getIndex() {
      return this.index_;
    }
    static getStartPost_(e) {
      if (e.hasStart()) {
        const t = e.getIndexStartName();
        return e.getIndex().makePost(e.getIndexStartValue(), t);
      }
      return e.getIndex().minPost();
    }
    static getEndPost_(e) {
      if (e.hasEnd()) {
        const t = e.getIndexEndName();
        return e.getIndex().makePost(e.getIndexEndValue(), t);
      }
      return e.getIndex().maxPost();
    }
  }
  class uo {
    constructor(e) {
      (this.withinDirectionalStart = (e) =>
        this.reverse_ ? this.withinEndPost(e) : this.withinStartPost(e)),
        (this.withinDirectionalEnd = (e) =>
          this.reverse_ ? this.withinStartPost(e) : this.withinEndPost(e)),
        (this.withinStartPost = (e) => {
          const t = this.index_.compare(this.rangedFilter_.getStartPost(), e);
          return this.startIsInclusive_ ? t <= 0 : t < 0;
        }),
        (this.withinEndPost = (e) => {
          const t = this.index_.compare(e, this.rangedFilter_.getEndPost());
          return this.endIsInclusive_ ? t <= 0 : t < 0;
        }),
        (this.rangedFilter_ = new co(e)),
        (this.index_ = e.getIndex()),
        (this.limit_ = e.getLimit()),
        (this.reverse_ = !e.isViewFromLeft()),
        (this.startIsInclusive_ = !e.startAfterSet_),
        (this.endIsInclusive_ = !e.endBeforeSet_);
    }
    updateChild(e, t, n, r, i, o) {
      return (
        this.rangedFilter_.matches(new Ti(t, n)) || (n = Xi.EMPTY_NODE),
        e.getImmediateChild(t).equals(n)
          ? e
          : e.numChildren() < this.limit_
          ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, i, o)
          : this.fullLimitUpdateChild_(e, t, n, i, o)
      );
    }
    updateFullNode(e, t, n) {
      let r;
      if (t.isLeafNode() || t.isEmpty())
        r = Xi.EMPTY_NODE.withIndex(this.index_);
      else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
        let e;
        (r = Xi.EMPTY_NODE.withIndex(this.index_)),
          (e = this.reverse_
            ? t.getReverseIteratorFrom(
                this.rangedFilter_.getEndPost(),
                this.index_
              )
            : t.getIteratorFrom(
                this.rangedFilter_.getStartPost(),
                this.index_
              ));
        let n = 0;
        for (; e.hasNext() && n < this.limit_; ) {
          const t = e.getNext();
          if (this.withinDirectionalStart(t)) {
            if (!this.withinDirectionalEnd(t)) break;
            (r = r.updateImmediateChild(t.name, t.node)), n++;
          }
        }
      } else {
        let e;
        (r = t.withIndex(this.index_)),
          (r = r.updatePriority(Xi.EMPTY_NODE)),
          (e = this.reverse_
            ? r.getReverseIterator(this.index_)
            : r.getIterator(this.index_));
        let n = 0;
        for (; e.hasNext(); ) {
          const t = e.getNext();
          n < this.limit_ &&
          this.withinDirectionalStart(t) &&
          this.withinDirectionalEnd(t)
            ? n++
            : (r = r.updateImmediateChild(t.name, Xi.EMPTY_NODE));
        }
      }
      return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n);
    }
    updatePriority(e, t) {
      return e;
    }
    filtersNodes() {
      return !0;
    }
    getIndexedFilter() {
      return this.rangedFilter_.getIndexedFilter();
    }
    getIndex() {
      return this.index_;
    }
    fullLimitUpdateChild_(e, t, n, r, i) {
      let o;
      if (this.reverse_) {
        const e = this.index_.getCompare();
        o = (t, n) => e(n, t);
      } else o = this.index_.getCompare();
      const s = e;
      Ae(s.numChildren() === this.limit_, "");
      const a = new Ti(t, n),
        l = this.reverse_
          ? s.getFirstChild(this.index_)
          : s.getLastChild(this.index_),
        c = this.rangedFilter_.matches(a);
      if (s.hasChild(t)) {
        const e = s.getImmediateChild(t);
        let u = r.getChildAfterChild(this.index_, l, this.reverse_);
        for (; null != u && (u.name === t || s.hasChild(u.name)); )
          u = r.getChildAfterChild(this.index_, u, this.reverse_);
        const d = null == u ? 1 : o(u, a);
        if (c && !n.isEmpty() && d >= 0)
          return (
            null != i && i.trackChildChange(ao(t, n, e)),
            s.updateImmediateChild(t, n)
          );
        {
          null != i && i.trackChildChange(so(t, e));
          const n = s.updateImmediateChild(t, Xi.EMPTY_NODE);
          return null != u && this.rangedFilter_.matches(u)
            ? (null != i && i.trackChildChange(oo(u.name, u.node)),
              n.updateImmediateChild(u.name, u.node))
            : n;
        }
      }
      return n.isEmpty()
        ? e
        : c && o(l, a) >= 0
        ? (null != i &&
            (i.trackChildChange(so(l.name, l.node)),
            i.trackChildChange(oo(t, n))),
          s
            .updateImmediateChild(t, n)
            .updateImmediateChild(l.name, Xi.EMPTY_NODE))
        : e;
    }
  }
  class ho {
    constructor() {
      (this.limitSet_ = !1),
        (this.startSet_ = !1),
        (this.startNameSet_ = !1),
        (this.startAfterSet_ = !1),
        (this.endSet_ = !1),
        (this.endNameSet_ = !1),
        (this.endBeforeSet_ = !1),
        (this.limit_ = 0),
        (this.viewFrom_ = ""),
        (this.indexStartValue_ = null),
        (this.indexStartName_ = ""),
        (this.indexEndValue_ = null),
        (this.indexEndName_ = ""),
        (this.index_ = qi);
    }
    hasStart() {
      return this.startSet_;
    }
    isViewFromLeft() {
      return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_;
    }
    getIndexStartValue() {
      return (
        Ae(this.startSet_, "Only valid if start has been set"),
        this.indexStartValue_
      );
    }
    getIndexStartName() {
      return (
        Ae(this.startSet_, "Only valid if start has been set"),
        this.startNameSet_ ? this.indexStartName_ : wr
      );
    }
    hasEnd() {
      return this.endSet_;
    }
    getIndexEndValue() {
      return (
        Ae(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
      );
    }
    getIndexEndName() {
      return (
        Ae(this.endSet_, "Only valid if end has been set"),
        this.endNameSet_ ? this.indexEndName_ : kr
      );
    }
    hasLimit() {
      return this.limitSet_;
    }
    hasAnchoredLimit() {
      return this.limitSet_ && "" !== this.viewFrom_;
    }
    getLimit() {
      return (
        Ae(this.limitSet_, "Only valid if limit has been set"), this.limit_
      );
    }
    getIndex() {
      return this.index_;
    }
    loadsAllData() {
      return !(this.startSet_ || this.endSet_ || this.limitSet_);
    }
    isDefault() {
      return this.loadsAllData() && this.index_ === qi;
    }
    copy() {
      const e = new ho();
      return (
        (e.limitSet_ = this.limitSet_),
        (e.limit_ = this.limit_),
        (e.startSet_ = this.startSet_),
        (e.startAfterSet_ = this.startAfterSet_),
        (e.indexStartValue_ = this.indexStartValue_),
        (e.startNameSet_ = this.startNameSet_),
        (e.indexStartName_ = this.indexStartName_),
        (e.endSet_ = this.endSet_),
        (e.endBeforeSet_ = this.endBeforeSet_),
        (e.indexEndValue_ = this.indexEndValue_),
        (e.endNameSet_ = this.endNameSet_),
        (e.indexEndName_ = this.indexEndName_),
        (e.index_ = this.index_),
        (e.viewFrom_ = this.viewFrom_),
        e
      );
    }
  }
  function fo(e) {
    const t = {};
    if (e.isDefault()) return t;
    let n;
    if (
      (e.index_ === qi
        ? (n = "$priority")
        : e.index_ === ro
        ? (n = "$value")
        : e.index_ === xi
        ? (n = "$key")
        : (Ae(e.index_ instanceof no, "Unrecognized index type!"),
          (n = e.index_.toString())),
      (t.orderBy = ot(n)),
      e.startSet_)
    ) {
      const n = e.startAfterSet_ ? "startAfter" : "startAt";
      (t[n] = ot(e.indexStartValue_)),
        e.startNameSet_ && (t[n] += "," + ot(e.indexStartName_));
    }
    if (e.endSet_) {
      const n = e.endBeforeSet_ ? "endBefore" : "endAt";
      (t[n] = ot(e.indexEndValue_)),
        e.endNameSet_ && (t[n] += "," + ot(e.indexEndName_));
    }
    return (
      e.limitSet_ &&
        (e.isViewFromLeft()
          ? (t.limitToFirst = e.limit_)
          : (t.limitToLast = e.limit_)),
      t
    );
  }
  function po(e) {
    const t = {};
    if (
      (e.startSet_ &&
        ((t.sp = e.indexStartValue_),
        e.startNameSet_ && (t.sn = e.indexStartName_),
        (t.sin = !e.startAfterSet_)),
      e.endSet_ &&
        ((t.ep = e.indexEndValue_),
        e.endNameSet_ && (t.en = e.indexEndName_),
        (t.ein = !e.endBeforeSet_)),
      e.limitSet_)
    ) {
      t.l = e.limit_;
      let n = e.viewFrom_;
      "" === n && (n = e.isViewFromLeft() ? "l" : "r"), (t.vf = n);
    }
    return e.index_ !== qi && (t.i = e.index_.toString()), t;
  }
  class mo extends ni {
    constructor(e, t, n, r) {
      super(),
        (this.repoInfo_ = e),
        (this.onDataUpdate_ = t),
        (this.authTokenProvider_ = n),
        (this.appCheckTokenProvider_ = r),
        (this.log_ = gr("p:rest:")),
        (this.listens_ = {});
    }
    reportStats(e) {
      throw new Error("Method not implemented.");
    }
    static getListenId_(e, t) {
      return void 0 !== t
        ? "tag$" + t
        : (Ae(
            e._queryParams.isDefault(),
            "should have a tag if it's not a default query."
          ),
          e._path.toString());
    }
    listen(e, t, n, r) {
      const i = e._path.toString();
      this.log_("Listen called for " + i + " " + e._queryIdentifier);
      const o = mo.getListenId_(e, n),
        s = {};
      this.listens_[o] = s;
      const a = fo(e._queryParams);
      this.restRequest_(i + ".json", a, (e, t) => {
        let a = t;
        if (
          (404 === e && ((a = null), (e = null)),
          null === e && this.onDataUpdate_(i, a, !1, n),
          lt(this.listens_, o) === s)
        ) {
          let t;
          (t = e
            ? 401 === e
              ? "permission_denied"
              : "rest_error:" + e
            : "ok"),
            r(t, null);
        }
      });
    }
    unlisten(e, t) {
      const n = mo.getListenId_(e, t);
      delete this.listens_[n];
    }
    get(e) {
      const t = fo(e._queryParams),
        n = e._path.toString(),
        r = new Ye();
      return (
        this.restRequest_(n + ".json", t, (e, t) => {
          let i = t;
          404 === e && ((i = null), (e = null)),
            null === e
              ? (this.onDataUpdate_(n, i, !1, null), r.resolve(i))
              : r.reject(new Error(i));
        }),
        r.promise
      );
    }
    refreshAuthToken(e) {}
    restRequest_(e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0;
      return (
        (t.format = "export"),
        Promise.all([
          this.authTokenProvider_.getToken(!1),
          this.appCheckTokenProvider_.getToken(!1),
        ]).then((r) => {
          let [i, o] = r;
          i && i.accessToken && (t.auth = i.accessToken),
            o && o.token && (t.ac = o.token);
          const s =
            (this.repoInfo_.secure ? "https://" : "http://") +
            this.repoInfo_.host +
            e +
            "?ns=" +
            this.repoInfo_.namespace +
            ft(t);
          this.log_("Sending REST request for " + s);
          const a = new XMLHttpRequest();
          (a.onreadystatechange = () => {
            if (n && 4 === a.readyState) {
              this.log_(
                "REST Response for " + s + " received. status:",
                a.status,
                "response:",
                a.responseText
              );
              let e = null;
              if (a.status >= 200 && a.status < 300) {
                try {
                  e = it(a.responseText);
                } catch (Sf) {
                  yr(
                    "Failed to parse JSON response for " +
                      s +
                      ": " +
                      a.responseText
                  );
                }
                n(null, e);
              } else
                401 !== a.status &&
                  404 !== a.status &&
                  yr(
                    "Got unsuccessful REST response for " +
                      s +
                      " Status: " +
                      a.status
                  ),
                  n(a.status);
              n = null;
            }
          }),
            a.open("GET", s, !0),
            a.send();
        })
      );
    }
  }
  class go {
    constructor() {
      this.rootNode_ = Xi.EMPTY_NODE;
    }
    getNode(e) {
      return this.rootNode_.getChild(e);
    }
    updateSnapshot(e, t) {
      this.rootNode_ = this.rootNode_.updateChild(e, t);
    }
  }
  function vo() {
    return { value: null, children: new Map() };
  }
  function _o(e, t, n) {
    if (gi(t)) (e.value = n), e.children.clear();
    else if (null !== e.value) e.value = e.value.updateChild(t, n);
    else {
      const r = ci(t);
      e.children.has(r) || e.children.set(r, vo());
      _o(e.children.get(r), (t = di(t)), n);
    }
  }
  function yo(e, t, n) {
    null !== e.value
      ? n(t, e.value)
      : (function (e, t) {
          e.children.forEach((e, n) => {
            t(n, e);
          });
        })(e, (e, r) => {
          yo(r, new ai(t.toString() + "/" + e), n);
        });
  }
  class bo {
    constructor(e) {
      (this.collection_ = e), (this.last_ = null);
    }
    get() {
      const e = this.collection_.get(),
        t = Object.assign({}, e);
      return (
        this.last_ &&
          Nr(this.last_, (e, n) => {
            t[e] = t[e] - n;
          }),
        (this.last_ = e),
        t
      );
    }
  }
  class wo {
    constructor(e, t) {
      (this.server_ = t),
        (this.statsToReport_ = {}),
        (this.statsListener_ = new bo(e));
      const n = 1e4 + 2e4 * Math.random();
      Ar(this.reportStats_.bind(this), Math.floor(n));
    }
    reportStats_() {
      const e = this.statsListener_.get(),
        t = {};
      let n = !1;
      Nr(e, (e, r) => {
        r > 0 && at(this.statsToReport_, e) && ((t[e] = r), (n = !0));
      }),
        n && this.server_.reportStats(t),
        Ar(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5));
    }
  }
  var ko;
  function Co(e) {
    return { fromUser: !1, fromServer: !0, queryId: e, tagged: !0 };
  }
  !(function (e) {
    (e[(e.OVERWRITE = 0)] = "OVERWRITE"),
      (e[(e.MERGE = 1)] = "MERGE"),
      (e[(e.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
      (e[(e.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
  })(ko || (ko = {}));
  class So {
    constructor(e, t, n) {
      (this.path = e),
        (this.affectedTree = t),
        (this.revert = n),
        (this.type = ko.ACK_USER_WRITE),
        (this.source = {
          fromUser: !0,
          fromServer: !1,
          queryId: null,
          tagged: !1,
        });
    }
    operationForChild(e) {
      if (gi(this.path)) {
        if (null != this.affectedTree.value)
          return (
            Ae(
              this.affectedTree.children.isEmpty(),
              "affectedTree should not have overlapping affected paths."
            ),
            this
          );
        {
          const t = this.affectedTree.subtree(new ai(e));
          return new So(li(), t, this.revert);
        }
      }
      return (
        Ae(
          ci(this.path) === e,
          "operationForChild called for unrelated child."
        ),
        new So(di(this.path), this.affectedTree, this.revert)
      );
    }
  }
  class Eo {
    constructor(e, t) {
      (this.source = e), (this.path = t), (this.type = ko.LISTEN_COMPLETE);
    }
    operationForChild(e) {
      return gi(this.path)
        ? new Eo(this.source, li())
        : new Eo(this.source, di(this.path));
    }
  }
  class Io {
    constructor(e, t, n) {
      (this.source = e),
        (this.path = t),
        (this.snap = n),
        (this.type = ko.OVERWRITE);
    }
    operationForChild(e) {
      return gi(this.path)
        ? new Io(this.source, li(), this.snap.getImmediateChild(e))
        : new Io(this.source, di(this.path), this.snap);
    }
  }
  class To {
    constructor(e, t, n) {
      (this.source = e),
        (this.path = t),
        (this.children = n),
        (this.type = ko.MERGE);
    }
    operationForChild(e) {
      if (gi(this.path)) {
        const t = this.children.subtree(new ai(e));
        return t.isEmpty()
          ? null
          : t.value
          ? new Io(this.source, li(), t.value)
          : new To(this.source, li(), t);
      }
      return (
        Ae(
          ci(this.path) === e,
          "Can't get a merge for a child not on the path of the operation"
        ),
        new To(this.source, di(this.path), this.children)
      );
    }
    toString() {
      return (
        "Operation(" +
        this.path +
        ": " +
        this.source.toString() +
        " merge: " +
        this.children.toString() +
        ")"
      );
    }
  }
  class No {
    constructor(e, t, n) {
      (this.node_ = e), (this.fullyInitialized_ = t), (this.filtered_ = n);
    }
    isFullyInitialized() {
      return this.fullyInitialized_;
    }
    isFiltered() {
      return this.filtered_;
    }
    isCompleteForPath(e) {
      if (gi(e)) return this.isFullyInitialized() && !this.filtered_;
      const t = ci(e);
      return this.isCompleteForChild(t);
    }
    isCompleteForChild(e) {
      return (
        (this.isFullyInitialized() && !this.filtered_) || this.node_.hasChild(e)
      );
    }
    getNode() {
      return this.node_;
    }
  }
  class Po {
    constructor(e) {
      (this.query_ = e), (this.index_ = this.query_._queryParams.getIndex());
    }
  }
  function Ro(e, t, n, r, i, o) {
    const s = r.filter((e) => e.type === n);
    s.sort((t, n) =>
      (function (e, t, n) {
        if (null == t.childName || null == n.childName)
          throw De("Should only compare child_ events.");
        const r = new Ti(t.childName, t.snapshotNode),
          i = new Ti(n.childName, n.snapshotNode);
        return e.index_.compare(r, i);
      })(e, t, n)
    ),
      s.forEach((n) => {
        const r = (function (e, t, n) {
          return (
            "value" === t.type ||
              "child_removed" === t.type ||
              (t.prevName = n.getPredecessorChildName(
                t.childName,
                t.snapshotNode,
                e.index_
              )),
            t
          );
        })(e, n, o);
        i.forEach((i) => {
          i.respondsTo(n.type) && t.push(i.createEvent(r, e.query_));
        });
      });
  }
  function xo(e, t) {
    return { eventCache: e, serverCache: t };
  }
  function Oo(e, t, n, r) {
    return xo(new No(t, n, r), e.serverCache);
  }
  function Ao(e, t, n, r) {
    return xo(e.eventCache, new No(t, n, r));
  }
  function Do(e) {
    return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null;
  }
  function Lo(e) {
    return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null;
  }
  let Mo;
  class Uo {
    constructor(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : (Mo || (Mo = new Di(Sr)), Mo);
      (this.value = e), (this.children = t);
    }
    static fromObject(e) {
      let t = new Uo(null);
      return (
        Nr(e, (e, n) => {
          t = t.set(new ai(e), n);
        }),
        t
      );
    }
    isEmpty() {
      return null === this.value && this.children.isEmpty();
    }
    findRootMostMatchingPathAndValue(e, t) {
      if (null != this.value && t(this.value))
        return { path: li(), value: this.value };
      if (gi(e)) return null;
      {
        const n = ci(e),
          r = this.children.get(n);
        if (null !== r) {
          const i = r.findRootMostMatchingPathAndValue(di(e), t);
          if (null != i) {
            return { path: mi(new ai(n), i.path), value: i.value };
          }
          return null;
        }
        return null;
      }
    }
    findRootMostValueAndPath(e) {
      return this.findRootMostMatchingPathAndValue(e, () => !0);
    }
    subtree(e) {
      if (gi(e)) return this;
      {
        const t = ci(e),
          n = this.children.get(t);
        return null !== n ? n.subtree(di(e)) : new Uo(null);
      }
    }
    set(e, t) {
      if (gi(e)) return new Uo(t, this.children);
      {
        const n = ci(e),
          r = (this.children.get(n) || new Uo(null)).set(di(e), t),
          i = this.children.insert(n, r);
        return new Uo(this.value, i);
      }
    }
    remove(e) {
      if (gi(e))
        return this.children.isEmpty()
          ? new Uo(null)
          : new Uo(null, this.children);
      {
        const t = ci(e),
          n = this.children.get(t);
        if (n) {
          const r = n.remove(di(e));
          let i;
          return (
            (i = r.isEmpty()
              ? this.children.remove(t)
              : this.children.insert(t, r)),
            null === this.value && i.isEmpty()
              ? new Uo(null)
              : new Uo(this.value, i)
          );
        }
        return this;
      }
    }
    get(e) {
      if (gi(e)) return this.value;
      {
        const t = ci(e),
          n = this.children.get(t);
        return n ? n.get(di(e)) : null;
      }
    }
    setTree(e, t) {
      if (gi(e)) return t;
      {
        const n = ci(e),
          r = (this.children.get(n) || new Uo(null)).setTree(di(e), t);
        let i;
        return (
          (i = r.isEmpty()
            ? this.children.remove(n)
            : this.children.insert(n, r)),
          new Uo(this.value, i)
        );
      }
    }
    fold(e) {
      return this.fold_(li(), e);
    }
    fold_(e, t) {
      const n = {};
      return (
        this.children.inorderTraversal((r, i) => {
          n[r] = i.fold_(mi(e, r), t);
        }),
        t(e, this.value, n)
      );
    }
    findOnPath(e, t) {
      return this.findOnPath_(e, li(), t);
    }
    findOnPath_(e, t, n) {
      const r = !!this.value && n(t, this.value);
      if (r) return r;
      if (gi(e)) return null;
      {
        const r = ci(e),
          i = this.children.get(r);
        return i ? i.findOnPath_(di(e), mi(t, r), n) : null;
      }
    }
    foreachOnPath(e, t) {
      return this.foreachOnPath_(e, li(), t);
    }
    foreachOnPath_(e, t, n) {
      if (gi(e)) return this;
      {
        this.value && n(t, this.value);
        const r = ci(e),
          i = this.children.get(r);
        return i ? i.foreachOnPath_(di(e), mi(t, r), n) : new Uo(null);
      }
    }
    foreach(e) {
      this.foreach_(li(), e);
    }
    foreach_(e, t) {
      this.children.inorderTraversal((n, r) => {
        r.foreach_(mi(e, n), t);
      }),
        this.value && t(e, this.value);
    }
    foreachChild(e) {
      this.children.inorderTraversal((t, n) => {
        n.value && e(t, n.value);
      });
    }
  }
  class Fo {
    constructor(e) {
      this.writeTree_ = e;
    }
    static empty() {
      return new Fo(new Uo(null));
    }
  }
  function jo(e, t, n) {
    if (gi(t)) return new Fo(new Uo(n));
    {
      const r = e.writeTree_.findRootMostValueAndPath(t);
      if (null != r) {
        const i = r.path;
        let o = r.value;
        const s = vi(i, t);
        return (o = o.updateChild(s, n)), new Fo(e.writeTree_.set(i, o));
      }
      {
        const r = new Uo(n),
          i = e.writeTree_.setTree(t, r);
        return new Fo(i);
      }
    }
  }
  function zo(e, t, n) {
    let r = e;
    return (
      Nr(n, (e, n) => {
        r = jo(r, mi(t, e), n);
      }),
      r
    );
  }
  function Wo(e, t) {
    if (gi(t)) return Fo.empty();
    {
      const n = e.writeTree_.setTree(t, new Uo(null));
      return new Fo(n);
    }
  }
  function Vo(e, t) {
    return null != Bo(e, t);
  }
  function Bo(e, t) {
    const n = e.writeTree_.findRootMostValueAndPath(t);
    return null != n ? e.writeTree_.get(n.path).getChild(vi(n.path, t)) : null;
  }
  function qo(e) {
    const t = [],
      n = e.writeTree_.value;
    return (
      null != n
        ? n.isLeafNode() ||
          n.forEachChild(qi, (e, n) => {
            t.push(new Ti(e, n));
          })
        : e.writeTree_.children.inorderTraversal((e, n) => {
            null != n.value && t.push(new Ti(e, n.value));
          }),
      t
    );
  }
  function Ho(e, t) {
    if (gi(t)) return e;
    {
      const n = Bo(e, t);
      return new Fo(null != n ? new Uo(n) : e.writeTree_.subtree(t));
    }
  }
  function Ko(e) {
    return e.writeTree_.isEmpty();
  }
  function $o(e, t) {
    return Go(li(), e.writeTree_, t);
  }
  function Go(e, t, n) {
    if (null != t.value) return n.updateChild(e, t.value);
    {
      let r = null;
      return (
        t.children.inorderTraversal((t, i) => {
          ".priority" === t
            ? (Ae(
                null !== i.value,
                "Priority writes must always be leaf nodes"
              ),
              (r = i.value))
            : (n = Go(mi(e, t), i, n));
        }),
        n.getChild(e).isEmpty() ||
          null === r ||
          (n = n.updateChild(mi(e, ".priority"), r)),
        n
      );
    }
  }
  function Yo(e, t) {
    return ls(t, e);
  }
  function Qo(e, t) {
    const n = e.allWrites.findIndex((e) => e.writeId === t);
    Ae(n >= 0, "removeWrite called with nonexistent writeId.");
    const r = e.allWrites[n];
    e.allWrites.splice(n, 1);
    let i = r.visible,
      o = !1,
      s = e.allWrites.length - 1;
    for (; i && s >= 0; ) {
      const t = e.allWrites[s];
      t.visible &&
        (s >= n && Jo(t, r.path) ? (i = !1) : bi(r.path, t.path) && (o = !0)),
        s--;
    }
    if (i) {
      if (o)
        return (
          (function (e) {
            (e.visibleWrites = Zo(e.allWrites, Xo, li())),
              e.allWrites.length > 0
                ? (e.lastWriteId = e.allWrites[e.allWrites.length - 1].writeId)
                : (e.lastWriteId = -1);
          })(e),
          !0
        );
      if (r.snap) e.visibleWrites = Wo(e.visibleWrites, r.path);
      else {
        Nr(r.children, (t) => {
          e.visibleWrites = Wo(e.visibleWrites, mi(r.path, t));
        });
      }
      return !0;
    }
    return !1;
  }
  function Jo(e, t) {
    if (e.snap) return bi(e.path, t);
    for (const n in e.children)
      if (e.children.hasOwnProperty(n) && bi(mi(e.path, n), t)) return !0;
    return !1;
  }
  function Xo(e) {
    return e.visible;
  }
  function Zo(e, t, n) {
    let r = Fo.empty();
    for (let i = 0; i < e.length; ++i) {
      const o = e[i];
      if (t(o)) {
        const e = o.path;
        let t;
        if (o.snap)
          bi(n, e)
            ? ((t = vi(n, e)), (r = jo(r, t, o.snap)))
            : bi(e, n) &&
              ((t = vi(e, n)), (r = jo(r, li(), o.snap.getChild(t))));
        else {
          if (!o.children)
            throw De("WriteRecord should have .snap or .children");
          if (bi(n, e)) (t = vi(n, e)), (r = zo(r, t, o.children));
          else if (bi(e, n))
            if (((t = vi(e, n)), gi(t))) r = zo(r, li(), o.children);
            else {
              const e = lt(o.children, ci(t));
              if (e) {
                const n = e.getChild(di(t));
                r = jo(r, li(), n);
              }
            }
        }
      }
    }
    return r;
  }
  function es(e, t, n, r, i) {
    if (r || i) {
      const o = Ho(e.visibleWrites, t);
      if (!i && Ko(o)) return n;
      if (i || null != n || Vo(o, li())) {
        const o = function (e) {
          return (
            (e.visible || i) &&
            (!r || !~r.indexOf(e.writeId)) &&
            (bi(e.path, t) || bi(t, e.path))
          );
        };
        return $o(Zo(e.allWrites, o, t), n || Xi.EMPTY_NODE);
      }
      return null;
    }
    {
      const r = Bo(e.visibleWrites, t);
      if (null != r) return r;
      {
        const r = Ho(e.visibleWrites, t);
        if (Ko(r)) return n;
        if (null != n || Vo(r, li())) {
          return $o(r, n || Xi.EMPTY_NODE);
        }
        return null;
      }
    }
  }
  function ts(e, t, n, r) {
    return es(e.writeTree, e.treePath, t, n, r);
  }
  function ns(e, t) {
    return (function (e, t, n) {
      let r = Xi.EMPTY_NODE;
      const i = Bo(e.visibleWrites, t);
      if (i)
        return (
          i.isLeafNode() ||
            i.forEachChild(qi, (e, t) => {
              r = r.updateImmediateChild(e, t);
            }),
          r
        );
      if (n) {
        const i = Ho(e.visibleWrites, t);
        return (
          n.forEachChild(qi, (e, t) => {
            const n = $o(Ho(i, new ai(e)), t);
            r = r.updateImmediateChild(e, n);
          }),
          qo(i).forEach((e) => {
            r = r.updateImmediateChild(e.name, e.node);
          }),
          r
        );
      }
      return (
        qo(Ho(e.visibleWrites, t)).forEach((e) => {
          r = r.updateImmediateChild(e.name, e.node);
        }),
        r
      );
    })(e.writeTree, e.treePath, t);
  }
  function rs(e, t, n, r) {
    return (function (e, t, n, r, i) {
      Ae(r || i, "Either existingEventSnap or existingServerSnap must exist");
      const o = mi(t, n);
      if (Vo(e.visibleWrites, o)) return null;
      {
        const t = Ho(e.visibleWrites, o);
        return Ko(t) ? i.getChild(n) : $o(t, i.getChild(n));
      }
    })(e.writeTree, e.treePath, t, n, r);
  }
  function is(e, t) {
    return (function (e, t) {
      return Bo(e.visibleWrites, t);
    })(e.writeTree, mi(e.treePath, t));
  }
  function os(e, t, n, r, i, o) {
    return (function (e, t, n, r, i, o, s) {
      let a;
      const l = Ho(e.visibleWrites, t),
        c = Bo(l, li());
      if (null != c) a = c;
      else {
        if (null == n) return [];
        a = $o(l, n);
      }
      if (((a = a.withIndex(s)), a.isEmpty() || a.isLeafNode())) return [];
      {
        const e = [],
          t = s.getCompare(),
          n = o ? a.getReverseIteratorFrom(r, s) : a.getIteratorFrom(r, s);
        let l = n.getNext();
        for (; l && e.length < i; )
          0 !== t(l, r) && e.push(l), (l = n.getNext());
        return e;
      }
    })(e.writeTree, e.treePath, t, n, r, i, o);
  }
  function ss(e, t, n) {
    return (function (e, t, n, r) {
      const i = mi(t, n),
        o = Bo(e.visibleWrites, i);
      if (null != o) return o;
      if (r.isCompleteForChild(n))
        return $o(Ho(e.visibleWrites, i), r.getNode().getImmediateChild(n));
      return null;
    })(e.writeTree, e.treePath, t, n);
  }
  function as(e, t) {
    return ls(mi(e.treePath, t), e.writeTree);
  }
  function ls(e, t) {
    return { treePath: e, writeTree: t };
  }
  class cs {
    constructor() {
      this.changeMap = new Map();
    }
    trackChildChange(e) {
      const t = e.type,
        n = e.childName;
      Ae(
        "child_added" === t || "child_changed" === t || "child_removed" === t,
        "Only child changes supported for tracking"
      ),
        Ae(
          ".priority" !== n,
          "Only non-priority child changes can be tracked."
        );
      const r = this.changeMap.get(n);
      if (r) {
        const i = r.type;
        if ("child_added" === t && "child_removed" === i)
          this.changeMap.set(n, ao(n, e.snapshotNode, r.snapshotNode));
        else if ("child_removed" === t && "child_added" === i)
          this.changeMap.delete(n);
        else if ("child_removed" === t && "child_changed" === i)
          this.changeMap.set(n, so(n, r.oldSnap));
        else if ("child_changed" === t && "child_added" === i)
          this.changeMap.set(n, oo(n, e.snapshotNode));
        else {
          if ("child_changed" !== t || "child_changed" !== i)
            throw De(
              "Illegal combination of changes: " + e + " occurred after " + r
            );
          this.changeMap.set(n, ao(n, e.snapshotNode, r.oldSnap));
        }
      } else this.changeMap.set(n, e);
    }
    getChanges() {
      return Array.from(this.changeMap.values());
    }
  }
  const us = new (class {
    getCompleteChild(e) {
      return null;
    }
    getChildAfterChild(e, t, n) {
      return null;
    }
  })();
  class ds {
    constructor(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (this.writes_ = e),
        (this.viewCache_ = t),
        (this.optCompleteServerCache_ = n);
    }
    getCompleteChild(e) {
      const t = this.viewCache_.eventCache;
      if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
      {
        const t =
          null != this.optCompleteServerCache_
            ? new No(this.optCompleteServerCache_, !0, !1)
            : this.viewCache_.serverCache;
        return ss(this.writes_, e, t);
      }
    }
    getChildAfterChild(e, t, n) {
      const r =
          null != this.optCompleteServerCache_
            ? this.optCompleteServerCache_
            : Lo(this.viewCache_),
        i = os(this.writes_, r, t, 1, n, e);
      return 0 === i.length ? null : i[0];
    }
  }
  function hs(e, t, n, r, i) {
    const o = new cs();
    let s, a;
    if (n.type === ko.OVERWRITE) {
      const l = n;
      l.source.fromUser
        ? (s = ms(e, t, l.path, l.snap, r, i, o))
        : (Ae(l.source.fromServer, "Unknown source."),
          (a = l.source.tagged || (t.serverCache.isFiltered() && !gi(l.path))),
          (s = ps(e, t, l.path, l.snap, r, i, a, o)));
    } else if (n.type === ko.MERGE) {
      const l = n;
      l.source.fromUser
        ? (s = (function (e, t, n, r, i, o, s) {
            let a = t;
            return (
              r.foreach((r, l) => {
                const c = mi(n, r);
                gs(t, ci(c)) && (a = ms(e, a, c, l, i, o, s));
              }),
              r.foreach((r, l) => {
                const c = mi(n, r);
                gs(t, ci(c)) || (a = ms(e, a, c, l, i, o, s));
              }),
              a
            );
          })(e, t, l.path, l.children, r, i, o))
        : (Ae(l.source.fromServer, "Unknown source."),
          (a = l.source.tagged || t.serverCache.isFiltered()),
          (s = _s(e, t, l.path, l.children, r, i, a, o)));
    } else if (n.type === ko.ACK_USER_WRITE) {
      const a = n;
      s = a.revert
        ? (function (e, t, n, r, i, o) {
            let s;
            if (null != is(r, n)) return t;
            {
              const a = new ds(r, t, i),
                l = t.eventCache.getNode();
              let c;
              if (gi(n) || ".priority" === ci(n)) {
                let n;
                if (t.serverCache.isFullyInitialized()) n = ts(r, Lo(t));
                else {
                  const e = t.serverCache.getNode();
                  Ae(
                    e instanceof Xi,
                    "serverChildren would be complete if leaf node"
                  ),
                    (n = ns(r, e));
                }
                c = e.filter.updateFullNode(l, n, o);
              } else {
                const i = ci(n);
                let u = ss(r, i, t.serverCache);
                null == u &&
                  t.serverCache.isCompleteForChild(i) &&
                  (u = l.getImmediateChild(i)),
                  (c =
                    null != u
                      ? e.filter.updateChild(l, i, u, di(n), a, o)
                      : t.eventCache.getNode().hasChild(i)
                      ? e.filter.updateChild(l, i, Xi.EMPTY_NODE, di(n), a, o)
                      : l),
                  c.isEmpty() &&
                    t.serverCache.isFullyInitialized() &&
                    ((s = ts(r, Lo(t))),
                    s.isLeafNode() && (c = e.filter.updateFullNode(c, s, o)));
              }
              return (
                (s = t.serverCache.isFullyInitialized() || null != is(r, li())),
                Oo(t, c, s, e.filter.filtersNodes())
              );
            }
          })(e, t, a.path, r, i, o)
        : (function (e, t, n, r, i, o, s) {
            if (null != is(i, n)) return t;
            const a = t.serverCache.isFiltered(),
              l = t.serverCache;
            if (null != r.value) {
              if ((gi(n) && l.isFullyInitialized()) || l.isCompleteForPath(n))
                return ps(e, t, n, l.getNode().getChild(n), i, o, a, s);
              if (gi(n)) {
                let r = new Uo(null);
                return (
                  l.getNode().forEachChild(xi, (e, t) => {
                    r = r.set(new ai(e), t);
                  }),
                  _s(e, t, n, r, i, o, a, s)
                );
              }
              return t;
            }
            {
              let c = new Uo(null);
              return (
                r.foreach((e, t) => {
                  const r = mi(n, e);
                  l.isCompleteForPath(r) &&
                    (c = c.set(e, l.getNode().getChild(r)));
                }),
                _s(e, t, n, c, i, o, a, s)
              );
            }
          })(e, t, a.path, a.affectedTree, r, i, o);
    } else {
      if (n.type !== ko.LISTEN_COMPLETE)
        throw De("Unknown operation type: " + n.type);
      s = (function (e, t, n, r, i) {
        const o = t.serverCache,
          s = Ao(
            t,
            o.getNode(),
            o.isFullyInitialized() || gi(n),
            o.isFiltered()
          );
        return fs(e, s, n, r, us, i);
      })(e, t, n.path, r, o);
    }
    const l = o.getChanges();
    return (
      (function (e, t, n) {
        const r = t.eventCache;
        if (r.isFullyInitialized()) {
          const i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
            o = Do(e);
          (n.length > 0 ||
            !e.eventCache.isFullyInitialized() ||
            (i && !r.getNode().equals(o)) ||
            !r.getNode().getPriority().equals(o.getPriority())) &&
            n.push(io(Do(t)));
        }
      })(t, s, l),
      { viewCache: s, changes: l }
    );
  }
  function fs(e, t, n, r, i, o) {
    const s = t.eventCache;
    if (null != is(r, n)) return t;
    {
      let a, l;
      if (gi(n))
        if (
          (Ae(
            t.serverCache.isFullyInitialized(),
            "If change path is empty, we must have complete server data"
          ),
          t.serverCache.isFiltered())
        ) {
          const n = Lo(t),
            i = ns(r, n instanceof Xi ? n : Xi.EMPTY_NODE);
          a = e.filter.updateFullNode(t.eventCache.getNode(), i, o);
        } else {
          const n = ts(r, Lo(t));
          a = e.filter.updateFullNode(t.eventCache.getNode(), n, o);
        }
      else {
        const c = ci(n);
        if (".priority" === c) {
          Ae(
            1 === ui(n),
            "Can't have a priority with additional path components"
          );
          const i = s.getNode();
          l = t.serverCache.getNode();
          const o = rs(r, n, i, l);
          a = null != o ? e.filter.updatePriority(i, o) : s.getNode();
        } else {
          const u = di(n);
          let d;
          if (s.isCompleteForChild(c)) {
            l = t.serverCache.getNode();
            const e = rs(r, n, s.getNode(), l);
            d =
              null != e
                ? s.getNode().getImmediateChild(c).updateChild(u, e)
                : s.getNode().getImmediateChild(c);
          } else d = ss(r, c, t.serverCache);
          a =
            null != d
              ? e.filter.updateChild(s.getNode(), c, d, u, i, o)
              : s.getNode();
        }
      }
      return Oo(t, a, s.isFullyInitialized() || gi(n), e.filter.filtersNodes());
    }
  }
  function ps(e, t, n, r, i, o, s, a) {
    const l = t.serverCache;
    let c;
    const u = s ? e.filter : e.filter.getIndexedFilter();
    if (gi(n)) c = u.updateFullNode(l.getNode(), r, null);
    else if (u.filtersNodes() && !l.isFiltered()) {
      const e = l.getNode().updateChild(n, r);
      c = u.updateFullNode(l.getNode(), e, null);
    } else {
      const e = ci(n);
      if (!l.isCompleteForPath(n) && ui(n) > 1) return t;
      const i = di(n),
        o = l.getNode().getImmediateChild(e).updateChild(i, r);
      c =
        ".priority" === e
          ? u.updatePriority(l.getNode(), o)
          : u.updateChild(l.getNode(), e, o, i, us, null);
    }
    const d = Ao(t, c, l.isFullyInitialized() || gi(n), u.filtersNodes());
    return fs(e, d, n, i, new ds(i, d, o), a);
  }
  function ms(e, t, n, r, i, o, s) {
    const a = t.eventCache;
    let l, c;
    const u = new ds(i, t, o);
    if (gi(n))
      (c = e.filter.updateFullNode(t.eventCache.getNode(), r, s)),
        (l = Oo(t, c, !0, e.filter.filtersNodes()));
    else {
      const i = ci(n);
      if (".priority" === i)
        (c = e.filter.updatePriority(t.eventCache.getNode(), r)),
          (l = Oo(t, c, a.isFullyInitialized(), a.isFiltered()));
      else {
        const o = di(n),
          c = a.getNode().getImmediateChild(i);
        let d;
        if (gi(o)) d = r;
        else {
          const e = u.getCompleteChild(i);
          d =
            null != e
              ? ".priority" === hi(o) && e.getChild(pi(o)).isEmpty()
                ? e
                : e.updateChild(o, r)
              : Xi.EMPTY_NODE;
        }
        if (c.equals(d)) l = t;
        else {
          l = Oo(
            t,
            e.filter.updateChild(a.getNode(), i, d, o, u, s),
            a.isFullyInitialized(),
            e.filter.filtersNodes()
          );
        }
      }
    }
    return l;
  }
  function gs(e, t) {
    return e.eventCache.isCompleteForChild(t);
  }
  function vs(e, t, n) {
    return (
      n.foreach((e, n) => {
        t = t.updateChild(e, n);
      }),
      t
    );
  }
  function _s(e, t, n, r, i, o, s, a) {
    if (
      t.serverCache.getNode().isEmpty() &&
      !t.serverCache.isFullyInitialized()
    )
      return t;
    let l,
      c = t;
    l = gi(n) ? r : new Uo(null).setTree(n, r);
    const u = t.serverCache.getNode();
    return (
      l.children.inorderTraversal((n, r) => {
        if (u.hasChild(n)) {
          const l = vs(0, t.serverCache.getNode().getImmediateChild(n), r);
          c = ps(e, c, new ai(n), l, i, o, s, a);
        }
      }),
      l.children.inorderTraversal((n, r) => {
        const l = !t.serverCache.isCompleteForChild(n) && null === r.value;
        if (!u.hasChild(n) && !l) {
          const l = vs(0, t.serverCache.getNode().getImmediateChild(n), r);
          c = ps(e, c, new ai(n), l, i, o, s, a);
        }
      }),
      c
    );
  }
  class ys {
    constructor(e, t) {
      (this.query_ = e), (this.eventRegistrations_ = []);
      const n = this.query_._queryParams,
        r = new lo(n.getIndex()),
        i = (o = n).loadsAllData()
          ? new lo(o.getIndex())
          : o.hasLimit()
          ? new uo(o)
          : new co(o);
      var o;
      this.processor_ = (function (e) {
        return { filter: e };
      })(i);
      const s = t.serverCache,
        a = t.eventCache,
        l = r.updateFullNode(Xi.EMPTY_NODE, s.getNode(), null),
        c = i.updateFullNode(Xi.EMPTY_NODE, a.getNode(), null),
        u = new No(l, s.isFullyInitialized(), r.filtersNodes()),
        d = new No(c, a.isFullyInitialized(), i.filtersNodes());
      (this.viewCache_ = xo(d, u)),
        (this.eventGenerator_ = new Po(this.query_));
    }
    get query() {
      return this.query_;
    }
  }
  function bs(e, t) {
    const n = Lo(e.viewCache_);
    return n &&
      (e.query._queryParams.loadsAllData() ||
        (!gi(t) && !n.getImmediateChild(ci(t)).isEmpty()))
      ? n.getChild(t)
      : null;
  }
  function ws(e) {
    return 0 === e.eventRegistrations_.length;
  }
  function ks(e, t, n) {
    const r = [];
    if (n) {
      Ae(null == t, "A cancel should cancel all event registrations.");
      const i = e.query._path;
      e.eventRegistrations_.forEach((e) => {
        const t = e.createCancelEvent(n, i);
        t && r.push(t);
      });
    }
    if (t) {
      let n = [];
      for (let r = 0; r < e.eventRegistrations_.length; ++r) {
        const i = e.eventRegistrations_[r];
        if (i.matches(t)) {
          if (t.hasAnyCallback()) {
            n = n.concat(e.eventRegistrations_.slice(r + 1));
            break;
          }
        } else n.push(i);
      }
      e.eventRegistrations_ = n;
    } else e.eventRegistrations_ = [];
    return r;
  }
  function Cs(e, t, n, r) {
    t.type === ko.MERGE &&
      null !== t.source.queryId &&
      (Ae(
        Lo(e.viewCache_),
        "We should always have a full cache before handling merges"
      ),
      Ae(
        Do(e.viewCache_),
        "Missing event cache, even though we have a server cache"
      ));
    const i = e.viewCache_,
      o = hs(e.processor_, i, t, n, r);
    var s, a;
    return (
      (s = e.processor_),
      (a = o.viewCache),
      Ae(
        a.eventCache.getNode().isIndexed(s.filter.getIndex()),
        "Event snap not indexed"
      ),
      Ae(
        a.serverCache.getNode().isIndexed(s.filter.getIndex()),
        "Server snap not indexed"
      ),
      Ae(
        o.viewCache.serverCache.isFullyInitialized() ||
          !i.serverCache.isFullyInitialized(),
        "Once a server snap is complete, it should never go back"
      ),
      (e.viewCache_ = o.viewCache),
      Ss(e, o.changes, o.viewCache.eventCache.getNode(), null)
    );
  }
  function Ss(e, t, n, r) {
    const i = r ? [r] : e.eventRegistrations_;
    return (function (e, t, n, r) {
      const i = [],
        o = [];
      return (
        t.forEach((t) => {
          var n;
          "child_changed" === t.type &&
            e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
            o.push(
              ((n = t.childName),
              {
                type: "child_moved",
                snapshotNode: t.snapshotNode,
                childName: n,
              })
            );
        }),
        Ro(e, i, "child_removed", t, r, n),
        Ro(e, i, "child_added", t, r, n),
        Ro(e, i, "child_moved", o, r, n),
        Ro(e, i, "child_changed", t, r, n),
        Ro(e, i, "value", t, r, n),
        i
      );
    })(e.eventGenerator_, t, n, i);
  }
  let Es, Is;
  class Ts {
    constructor() {
      this.views = new Map();
    }
  }
  function Ns(e, t, n, r) {
    const i = t.source.queryId;
    if (null !== i) {
      const o = e.views.get(i);
      return (
        Ae(null != o, "SyncTree gave us an op for an invalid query."),
        Cs(o, t, n, r)
      );
    }
    {
      let i = [];
      for (const o of e.views.values()) i = i.concat(Cs(o, t, n, r));
      return i;
    }
  }
  function Ps(e, t, n, r, i) {
    const o = t._queryIdentifier,
      s = e.views.get(o);
    if (!s) {
      let e = ts(n, i ? r : null),
        o = !1;
      e
        ? (o = !0)
        : r instanceof Xi
        ? ((e = ns(n, r)), (o = !1))
        : ((e = Xi.EMPTY_NODE), (o = !1));
      const s = xo(new No(e, o, !1), new No(r, i, !1));
      return new ys(t, s);
    }
    return s;
  }
  function Rs(e, t, n, r, i, o) {
    const s = Ps(e, t, r, i, o);
    return (
      e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, s),
      (function (e, t) {
        e.eventRegistrations_.push(t);
      })(s, n),
      (function (e, t) {
        const n = e.viewCache_.eventCache,
          r = [];
        n.getNode().isLeafNode() ||
          n.getNode().forEachChild(qi, (e, t) => {
            r.push(oo(e, t));
          });
        return (
          n.isFullyInitialized() && r.push(io(n.getNode())),
          Ss(e, r, n.getNode(), t)
        );
      })(s, n)
    );
  }
  function xs(e, t, n, r) {
    const i = t._queryIdentifier,
      o = [];
    let s = [];
    const a = Ms(e);
    if ("default" === i)
      for (const [l, c] of e.views.entries())
        (s = s.concat(ks(c, n, r))),
          ws(c) &&
            (e.views.delete(l),
            c.query._queryParams.loadsAllData() || o.push(c.query));
    else {
      const t = e.views.get(i);
      t &&
        ((s = s.concat(ks(t, n, r))),
        ws(t) &&
          (e.views.delete(i),
          t.query._queryParams.loadsAllData() || o.push(t.query)));
    }
    return (
      a &&
        !Ms(e) &&
        o.push(
          new (Ae(Es, "Reference.ts has not been loaded"), Es)(t._repo, t._path)
        ),
      { removed: o, events: s }
    );
  }
  function Os(e) {
    const t = [];
    for (const n of e.views.values())
      n.query._queryParams.loadsAllData() || t.push(n);
    return t;
  }
  function As(e, t) {
    let n = null;
    for (const r of e.views.values()) n = n || bs(r, t);
    return n;
  }
  function Ds(e, t) {
    if (t._queryParams.loadsAllData()) return Us(e);
    {
      const n = t._queryIdentifier;
      return e.views.get(n);
    }
  }
  function Ls(e, t) {
    return null != Ds(e, t);
  }
  function Ms(e) {
    return null != Us(e);
  }
  function Us(e) {
    for (const t of e.views.values())
      if (t.query._queryParams.loadsAllData()) return t;
    return null;
  }
  let Fs = 1;
  class js {
    constructor(e) {
      (this.listenProvider_ = e),
        (this.syncPointTree_ = new Uo(null)),
        (this.pendingWriteTree_ = {
          visibleWrites: Fo.empty(),
          allWrites: [],
          lastWriteId: -1,
        }),
        (this.tagToQueryMap = new Map()),
        (this.queryToTagMap = new Map());
    }
  }
  function zs(e, t, n, r, i) {
    return (
      (function (e, t, n, r, i) {
        Ae(r > e.lastWriteId, "Stacking an older write on top of newer ones"),
          void 0 === i && (i = !0),
          e.allWrites.push({ path: t, snap: n, writeId: r, visible: i }),
          i && (e.visibleWrites = jo(e.visibleWrites, t, n)),
          (e.lastWriteId = r);
      })(e.pendingWriteTree_, t, n, r, i),
      i
        ? Gs(
            e,
            new Io(
              { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 },
              t,
              n
            )
          )
        : []
    );
  }
  function Ws(e, t, n, r) {
    !(function (e, t, n, r) {
      Ae(r > e.lastWriteId, "Stacking an older merge on top of newer ones"),
        e.allWrites.push({ path: t, children: n, writeId: r, visible: !0 }),
        (e.visibleWrites = zo(e.visibleWrites, t, n)),
        (e.lastWriteId = r);
    })(e.pendingWriteTree_, t, n, r);
    const i = Uo.fromObject(n);
    return Gs(
      e,
      new To({ fromUser: !0, fromServer: !1, queryId: null, tagged: !1 }, t, i)
    );
  }
  function Vs(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const r = (function (e, t) {
      for (let n = 0; n < e.allWrites.length; n++) {
        const r = e.allWrites[n];
        if (r.writeId === t) return r;
      }
      return null;
    })(e.pendingWriteTree_, t);
    if (Qo(e.pendingWriteTree_, t)) {
      let t = new Uo(null);
      return (
        null != r.snap
          ? (t = t.set(li(), !0))
          : Nr(r.children, (e) => {
              t = t.set(new ai(e), !0);
            }),
        Gs(e, new So(r.path, t, n))
      );
    }
    return [];
  }
  function Bs(e, t, n) {
    return Gs(
      e,
      new Io({ fromUser: !1, fromServer: !0, queryId: null, tagged: !1 }, t, n)
    );
  }
  function qs(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    const o = t._path,
      s = e.syncPointTree_.get(o);
    let a = [];
    if (s && ("default" === t._queryIdentifier || Ls(s, t))) {
      const l = xs(s, t, n, r);
      0 === s.views.size && (e.syncPointTree_ = e.syncPointTree_.remove(o));
      const c = l.removed;
      if (((a = l.events), !i)) {
        const n = -1 !== c.findIndex((e) => e._queryParams.loadsAllData()),
          i = e.syncPointTree_.findOnPath(o, (e, t) => Ms(t));
        if (n && !i) {
          const t = e.syncPointTree_.subtree(o);
          if (!t.isEmpty()) {
            const n = (function (e) {
              return e.fold((e, t, n) => {
                if (t && Ms(t)) {
                  return [Us(t)];
                }
                {
                  let e = [];
                  return (
                    t && (e = Os(t)),
                    Nr(n, (t, n) => {
                      e = e.concat(n);
                    }),
                    e
                  );
                }
              });
            })(t);
            for (let t = 0; t < n.length; ++t) {
              const r = n[t],
                i = r.query,
                o = Js(e, r);
              e.listenProvider_.startListening(
                ra(i),
                Xs(e, i),
                o.hashFn,
                o.onComplete
              );
            }
          }
        }
        if (!i && c.length > 0 && !r)
          if (n) {
            const n = null;
            e.listenProvider_.stopListening(ra(t), n);
          } else
            c.forEach((t) => {
              const n = e.queryToTagMap.get(Zs(t));
              e.listenProvider_.stopListening(ra(t), n);
            });
      }
      !(function (e, t) {
        for (let n = 0; n < t.length; ++n) {
          const r = t[n];
          if (!r._queryParams.loadsAllData()) {
            const t = Zs(r),
              n = e.queryToTagMap.get(t);
            e.queryToTagMap.delete(t), e.tagToQueryMap.delete(n);
          }
        }
      })(e, c);
    }
    return a;
  }
  function Hs(e, t, n, r) {
    const i = ea(e, r);
    if (null != i) {
      const r = ta(i),
        o = r.path,
        s = r.queryId,
        a = vi(o, t);
      return na(e, o, new Io(Co(s), a, n));
    }
    return [];
  }
  function Ks(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    const i = t._path;
    let o = null,
      s = !1;
    e.syncPointTree_.foreachOnPath(i, (e, t) => {
      const n = vi(e, i);
      (o = o || As(t, n)), (s = s || Ms(t));
    });
    let a,
      l = e.syncPointTree_.get(i);
    if (
      (l
        ? ((s = s || Ms(l)), (o = o || As(l, li())))
        : ((l = new Ts()), (e.syncPointTree_ = e.syncPointTree_.set(i, l))),
      null != o)
    )
      a = !0;
    else {
      (a = !1), (o = Xi.EMPTY_NODE);
      e.syncPointTree_.subtree(i).foreachChild((e, t) => {
        const n = As(t, li());
        n && (o = o.updateImmediateChild(e, n));
      });
    }
    const c = Ls(l, t);
    if (!c && !t._queryParams.loadsAllData()) {
      const n = Zs(t);
      Ae(!e.queryToTagMap.has(n), "View does not exist, but we have a tag");
      const r = Fs++;
      e.queryToTagMap.set(n, r), e.tagToQueryMap.set(r, n);
    }
    let u = Rs(l, t, n, Yo(e.pendingWriteTree_, i), o, a);
    if (!c && !s && !r) {
      const n = Ds(l, t);
      u = u.concat(
        (function (e, t, n) {
          const r = t._path,
            i = Xs(e, t),
            o = Js(e, n),
            s = e.listenProvider_.startListening(
              ra(t),
              i,
              o.hashFn,
              o.onComplete
            ),
            a = e.syncPointTree_.subtree(r);
          if (i)
            Ae(
              !Ms(a.value),
              "If we're adding a query, it shouldn't be shadowed"
            );
          else {
            const t = a.fold((e, t, n) => {
              if (!gi(e) && t && Ms(t)) return [Us(t).query];
              {
                let e = [];
                return (
                  t && (e = e.concat(Os(t).map((e) => e.query))),
                  Nr(n, (t, n) => {
                    e = e.concat(n);
                  }),
                  e
                );
              }
            });
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              e.listenProvider_.stopListening(ra(r), Xs(e, r));
            }
          }
          return s;
        })(e, t, n)
      );
    }
    return u;
  }
  function $s(e, t, n) {
    const r = e.pendingWriteTree_,
      i = e.syncPointTree_.findOnPath(t, (e, n) => {
        const r = As(n, vi(e, t));
        if (r) return r;
      });
    return es(r, t, i, n, !0);
  }
  function Gs(e, t) {
    return Ys(t, e.syncPointTree_, null, Yo(e.pendingWriteTree_, li()));
  }
  function Ys(e, t, n, r) {
    if (gi(e.path)) return Qs(e, t, n, r);
    {
      const i = t.get(li());
      null == n && null != i && (n = As(i, li()));
      let o = [];
      const s = ci(e.path),
        a = e.operationForChild(s),
        l = t.children.get(s);
      if (l && a) {
        const e = n ? n.getImmediateChild(s) : null,
          t = as(r, s);
        o = o.concat(Ys(a, l, e, t));
      }
      return i && (o = o.concat(Ns(i, e, r, n))), o;
    }
  }
  function Qs(e, t, n, r) {
    const i = t.get(li());
    null == n && null != i && (n = As(i, li()));
    let o = [];
    return (
      t.children.inorderTraversal((t, i) => {
        const s = n ? n.getImmediateChild(t) : null,
          a = as(r, t),
          l = e.operationForChild(t);
        l && (o = o.concat(Qs(l, i, s, a)));
      }),
      i && (o = o.concat(Ns(i, e, r, n))),
      o
    );
  }
  function Js(e, t) {
    const n = t.query,
      r = Xs(e, n);
    return {
      hashFn: () => {
        const e =
          (function (e) {
            return e.viewCache_.serverCache.getNode();
          })(t) || Xi.EMPTY_NODE;
        return e.hash();
      },
      onComplete: (t) => {
        if ("ok" === t)
          return r
            ? (function (e, t, n) {
                const r = ea(e, n);
                if (r) {
                  const n = ta(r),
                    i = n.path,
                    o = n.queryId,
                    s = vi(i, t);
                  return na(e, i, new Eo(Co(o), s));
                }
                return [];
              })(e, n._path, r)
            : (function (e, t) {
                return Gs(
                  e,
                  new Eo(
                    { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 },
                    t
                  )
                );
              })(e, n._path);
        {
          const r = (function (e, t) {
            let n = "Unknown Error";
            "too_big" === e
              ? (n =
                  "The data requested exceeds the maximum size that can be accessed with a single request.")
              : "permission_denied" === e
              ? (n =
                  "Client doesn't have permission to access the desired data.")
              : "unavailable" === e && (n = "The service is unavailable");
            const r = new Error(e + " at " + t._path.toString() + ": " + n);
            return (r.code = e.toUpperCase()), r;
          })(t, n);
          return qs(e, n, null, r);
        }
      },
    };
  }
  function Xs(e, t) {
    const n = Zs(t);
    return e.queryToTagMap.get(n);
  }
  function Zs(e) {
    return e._path.toString() + "$" + e._queryIdentifier;
  }
  function ea(e, t) {
    return e.tagToQueryMap.get(t);
  }
  function ta(e) {
    const t = e.indexOf("$");
    return (
      Ae(-1 !== t && t < e.length - 1, "Bad queryKey."),
      { queryId: e.substr(t + 1), path: new ai(e.substr(0, t)) }
    );
  }
  function na(e, t, n) {
    const r = e.syncPointTree_.get(t);
    Ae(r, "Missing sync point for query tag that we're tracking");
    return Ns(r, n, Yo(e.pendingWriteTree_, t), null);
  }
  function ra(e) {
    return e._queryParams.loadsAllData() && !e._queryParams.isDefault()
      ? new (Ae(Is, "Reference.ts has not been loaded"), Is)(e._repo, e._path)
      : e;
  }
  class ia {
    constructor(e) {
      this.node_ = e;
    }
    getImmediateChild(e) {
      const t = this.node_.getImmediateChild(e);
      return new ia(t);
    }
    node() {
      return this.node_;
    }
  }
  class oa {
    constructor(e, t) {
      (this.syncTree_ = e), (this.path_ = t);
    }
    getImmediateChild(e) {
      const t = mi(this.path_, e);
      return new oa(this.syncTree_, t);
    }
    node() {
      return $s(this.syncTree_, this.path_);
    }
  }
  const sa = function (e) {
      return ((e = e || {}).timestamp = e.timestamp || new Date().getTime()), e;
    },
    aa = function (e, t, n) {
      return e && "object" === typeof e
        ? (Ae(".sv" in e, "Unexpected leaf node or priority contents"),
          "string" === typeof e[".sv"]
            ? la(e[".sv"], t, n)
            : "object" === typeof e[".sv"]
            ? ca(e[".sv"], t)
            : void Ae(
                !1,
                "Unexpected server value: " + JSON.stringify(e, null, 2)
              ))
        : e;
    },
    la = function (e, t, n) {
      if ("timestamp" === e) return n.timestamp;
      Ae(!1, "Unexpected server value: " + e);
    },
    ca = function (e, t, n) {
      e.hasOwnProperty("increment") ||
        Ae(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
      const r = e.increment;
      "number" !== typeof r && Ae(!1, "Unexpected increment value: " + r);
      const i = t.node();
      if (
        (Ae(
          null !== i && "undefined" !== typeof i,
          "Expected ChildrenNode.EMPTY_NODE for nulls"
        ),
        !i.isLeafNode())
      )
        return r;
      const o = i.getValue();
      return "number" !== typeof o ? r : o + r;
    },
    ua = function (e, t, n, r) {
      return ha(t, new oa(n, e), r);
    },
    da = function (e, t, n) {
      return ha(e, new ia(t), n);
    };
  function ha(e, t, n) {
    const r = e.getPriority().val(),
      i = aa(r, t.getImmediateChild(".priority"), n);
    let o;
    if (e.isLeafNode()) {
      const r = e,
        o = aa(r.getValue(), t, n);
      return o !== r.getValue() || i !== r.getPriority().val()
        ? new Bi(o, to(i))
        : e;
    }
    {
      const r = e;
      return (
        (o = r),
        i !== r.getPriority().val() && (o = o.updatePriority(new Bi(i))),
        r.forEachChild(qi, (e, r) => {
          const i = ha(r, t.getImmediateChild(e), n);
          i !== r && (o = o.updateImmediateChild(e, i));
        }),
        o
      );
    }
  }
  class fa {
    constructor() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { children: {}, childCount: 0 };
      (this.name = e), (this.parent = t), (this.node = n);
    }
  }
  function pa(e, t) {
    let n = t instanceof ai ? t : new ai(t),
      r = e,
      i = ci(n);
    for (; null !== i; ) {
      const e = lt(r.node.children, i) || { children: {}, childCount: 0 };
      (r = new fa(i, r, e)), (n = di(n)), (i = ci(n));
    }
    return r;
  }
  function ma(e) {
    return e.node.value;
  }
  function ga(e, t) {
    (e.node.value = t), wa(e);
  }
  function va(e) {
    return e.node.childCount > 0;
  }
  function _a(e, t) {
    Nr(e.node.children, (n, r) => {
      t(new fa(n, e, r));
    });
  }
  function ya(e, t, n, r) {
    n && !r && t(e),
      _a(e, (e) => {
        ya(e, t, !0, r);
      }),
      n && r && t(e);
  }
  function ba(e) {
    return new ai(null === e.parent ? e.name : ba(e.parent) + "/" + e.name);
  }
  function wa(e) {
    null !== e.parent &&
      (function (e, t, n) {
        const r = (function (e) {
            return void 0 === ma(e) && !va(e);
          })(n),
          i = at(e.node.children, t);
        r && i
          ? (delete e.node.children[t], e.node.childCount--, wa(e))
          : r ||
            i ||
            ((e.node.children[t] = n.node), e.node.childCount++, wa(e));
      })(e.parent, e.name, e);
  }
  const ka = /[\[\].#$\/\u0000-\u001F\u007F]/,
    Ca = /[\[\].#$\u0000-\u001F\u007F]/,
    Sa = 10485760,
    Ea = function (e) {
      return "string" === typeof e && 0 !== e.length && !ka.test(e);
    },
    Ia = function (e) {
      return "string" === typeof e && 0 !== e.length && !Ca.test(e);
    },
    Ta = function (e) {
      return (
        null === e ||
        "string" === typeof e ||
        ("number" === typeof e && !br(e)) ||
        (e && "object" === typeof e && at(e, ".sv"))
      );
    },
    Na = function (e, t, n, r) {
      (r && void 0 === t) || Pa(yt(e, "value"), t, n);
    },
    Pa = function (e, t, n) {
      const r = n instanceof ai ? new wi(n, e) : n;
      if (void 0 === t) throw new Error(e + "contains undefined " + Ci(r));
      if ("function" === typeof t)
        throw new Error(
          e +
            "contains a function " +
            Ci(r) +
            " with contents = " +
            t.toString()
        );
      if (br(t)) throw new Error(e + "contains " + t.toString() + " " + Ci(r));
      if ("string" === typeof t && t.length > Sa / 3 && bt(t) > Sa)
        throw new Error(
          e +
            "contains a string greater than " +
            Sa +
            " utf8 bytes " +
            Ci(r) +
            " ('" +
            t.substring(0, 50) +
            "...')"
        );
      if (t && "object" === typeof t) {
        let n = !1,
          i = !1;
        if (
          (Nr(t, (t, o) => {
            if (".value" === t) n = !0;
            else if (".priority" !== t && ".sv" !== t && ((i = !0), !Ea(t)))
              throw new Error(
                e +
                  " contains an invalid key (" +
                  t +
                  ") " +
                  Ci(r) +
                  '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
              );
            !(function (e, t) {
              e.parts_.length > 0 && (e.byteLength_ += 1),
                e.parts_.push(t),
                (e.byteLength_ += bt(t)),
                ki(e);
            })(r, t),
              Pa(e, o, r),
              (function (e) {
                const t = e.parts_.pop();
                (e.byteLength_ -= bt(t)),
                  e.parts_.length > 0 && (e.byteLength_ -= 1);
              })(r);
          }),
          n && i)
        )
          throw new Error(
            e +
              ' contains ".value" child ' +
              Ci(r) +
              " in addition to actual children."
          );
      }
    },
    Ra = function (e, t, n, r) {
      if (r && void 0 === t) return;
      const i = yt(e, "values");
      if (!t || "object" !== typeof t || Array.isArray(t))
        throw new Error(
          i + " must be an object containing the children to replace."
        );
      const o = [];
      Nr(t, (e, t) => {
        const r = new ai(e);
        if ((Pa(i, t, mi(n, r)), ".priority" === hi(r) && !Ta(t)))
          throw new Error(
            i +
              "contains an invalid value for '" +
              r.toString() +
              "', which must be a valid Firebase priority (a string, finite number, server value, or null)."
          );
        o.push(r);
      }),
        (function (e, t) {
          let n, r;
          for (n = 0; n < t.length; n++) {
            r = t[n];
            const i = fi(r);
            for (let t = 0; t < i.length; t++)
              if (".priority" === i[t] && t === i.length - 1);
              else if (!Ea(i[t]))
                throw new Error(
                  e +
                    "contains an invalid key (" +
                    i[t] +
                    ") in path " +
                    r.toString() +
                    '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                );
          }
          t.sort(_i);
          let i = null;
          for (n = 0; n < t.length; n++) {
            if (((r = t[n]), null !== i && bi(i, r)))
              throw new Error(
                e +
                  "contains a path " +
                  i.toString() +
                  " that is ancestor of another path " +
                  r.toString()
              );
            i = r;
          }
        })(i, o);
    },
    xa = function (e, t, n, r) {
      if ((!r || void 0 !== n) && !Ia(n))
        throw new Error(
          yt(e, t) +
            'was an invalid path = "' +
            n +
            '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
        );
    },
    Oa = function (e, t, n, r) {
      n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), xa(e, t, n, r);
    },
    Aa = function (e, t) {
      if (".info" === ci(t))
        throw new Error(e + " failed = Can't modify data under /.info/");
    },
    Da = function (e, t) {
      const n = t.path.toString();
      if (
        "string" !== typeof t.repoInfo.host ||
        0 === t.repoInfo.host.length ||
        (!Ea(t.repoInfo.namespace) &&
          "localhost" !== t.repoInfo.host.split(":")[0]) ||
        (0 !== n.length &&
          !(function (e) {
            return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), Ia(e);
          })(n))
      )
        throw new Error(
          yt(e, "url") +
            'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
        );
    };
  class La {
    constructor() {
      (this.eventLists_ = []), (this.recursionDepth_ = 0);
    }
  }
  function Ma(e, t) {
    let n = null;
    for (let r = 0; r < t.length; r++) {
      const i = t[r],
        o = i.getPath();
      null === n || yi(o, n.path) || (e.eventLists_.push(n), (n = null)),
        null === n && (n = { events: [], path: o }),
        n.events.push(i);
    }
    n && e.eventLists_.push(n);
  }
  function Ua(e, t, n) {
    Ma(e, n), ja(e, (e) => yi(e, t));
  }
  function Fa(e, t, n) {
    Ma(e, n), ja(e, (e) => bi(e, t) || bi(t, e));
  }
  function ja(e, t) {
    e.recursionDepth_++;
    let n = !0;
    for (let r = 0; r < e.eventLists_.length; r++) {
      const i = e.eventLists_[r];
      if (i) {
        t(i.path)
          ? (za(e.eventLists_[r]), (e.eventLists_[r] = null))
          : (n = !1);
      }
    }
    n && (e.eventLists_ = []), e.recursionDepth_--;
  }
  function za(e) {
    for (let t = 0; t < e.events.length; t++) {
      const n = e.events[t];
      if (null !== n) {
        e.events[t] = null;
        const r = n.getEventRunner();
        hr && mr("event: " + n.toString()), Or(r);
      }
    }
  }
  const Wa = "repo_interrupt",
    Va = 25;
  class Ba {
    constructor(e, t, n, r) {
      (this.repoInfo_ = e),
        (this.forceRestClient_ = t),
        (this.authTokenProvider_ = n),
        (this.appCheckProvider_ = r),
        (this.dataUpdateCount = 0),
        (this.statsListener_ = null),
        (this.eventQueue_ = new La()),
        (this.nextWriteId_ = 1),
        (this.interceptServerDataCallback_ = null),
        (this.onDisconnect_ = vo()),
        (this.transactionQueueTree_ = new fa()),
        (this.persistentConnection_ = null),
        (this.key = this.repoInfo_.toURLString());
    }
    toString() {
      return (
        (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
      );
    }
  }
  function qa(e, t, n) {
    if (
      ((e.stats_ = $r(e.repoInfo_)),
      e.forceRestClient_ ||
        (
          ("object" === typeof window &&
            window.navigator &&
            window.navigator.userAgent) ||
          ""
        ).search(
          /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
        ) >= 0)
    )
      (e.server_ = new mo(
        e.repoInfo_,
        (t, n, r, i) => {
          $a(e, t, n, r, i);
        },
        e.authTokenProvider_,
        e.appCheckProvider_
      )),
        setTimeout(() => Ga(e, !0), 0);
    else {
      if ("undefined" !== typeof n && null !== n) {
        if ("object" !== typeof n)
          throw new Error(
            "Only objects are supported for option databaseAuthVariableOverride"
          );
        try {
          ot(n);
        } catch (Sf) {
          throw new Error("Invalid authOverride provided: " + Sf);
        }
      }
      (e.persistentConnection_ = new Ii(
        e.repoInfo_,
        t,
        (t, n, r, i) => {
          $a(e, t, n, r, i);
        },
        (t) => {
          Ga(e, t);
        },
        (t) => {
          !(function (e, t) {
            Nr(t, (t, n) => {
              Ya(e, t, n);
            });
          })(e, t);
        },
        e.authTokenProvider_,
        e.appCheckProvider_,
        n
      )),
        (e.server_ = e.persistentConnection_);
    }
    e.authTokenProvider_.addTokenChangeListener((t) => {
      e.server_.refreshAuthToken(t);
    }),
      e.appCheckProvider_.addTokenChangeListener((t) => {
        e.server_.refreshAppCheckToken(t.token);
      }),
      (e.statsReporter_ = (function (e, t) {
        const n = e.toString();
        return Kr[n] || (Kr[n] = t()), Kr[n];
      })(e.repoInfo_, () => new wo(e.stats_, e.server_))),
      (e.infoData_ = new go()),
      (e.infoSyncTree_ = new js({
        startListening: (t, n, r, i) => {
          let o = [];
          const s = e.infoData_.getNode(t._path);
          return (
            s.isEmpty() ||
              ((o = Bs(e.infoSyncTree_, t._path, s)),
              setTimeout(() => {
                i("ok");
              }, 0)),
            o
          );
        },
        stopListening: () => {},
      })),
      Ya(e, "connected", !1),
      (e.serverSyncTree_ = new js({
        startListening: (t, n, r, i) => (
          e.server_.listen(t, r, n, (n, r) => {
            const o = i(n, r);
            Fa(e.eventQueue_, t._path, o);
          }),
          []
        ),
        stopListening: (t, n) => {
          e.server_.unlisten(t, n);
        },
      }));
  }
  function Ha(e) {
    const t = e.infoData_.getNode(new ai(".info/serverTimeOffset")).val() || 0;
    return new Date().getTime() + t;
  }
  function Ka(e) {
    return sa({ timestamp: Ha(e) });
  }
  function $a(e, t, n, r, i) {
    e.dataUpdateCount++;
    const o = new ai(t);
    n = e.interceptServerDataCallback_
      ? e.interceptServerDataCallback_(t, n)
      : n;
    let s = [];
    if (i)
      if (r) {
        const t = ut(n, (e) => to(e));
        s = (function (e, t, n, r) {
          const i = ea(e, r);
          if (i) {
            const r = ta(i),
              o = r.path,
              s = r.queryId,
              a = vi(o, t),
              l = Uo.fromObject(n);
            return na(e, o, new To(Co(s), a, l));
          }
          return [];
        })(e.serverSyncTree_, o, t, i);
      } else {
        const t = to(n);
        s = Hs(e.serverSyncTree_, o, t, i);
      }
    else if (r) {
      const t = ut(n, (e) => to(e));
      s = (function (e, t, n) {
        const r = Uo.fromObject(n);
        return Gs(
          e,
          new To(
            { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 },
            t,
            r
          )
        );
      })(e.serverSyncTree_, o, t);
    } else {
      const t = to(n);
      s = Bs(e.serverSyncTree_, o, t);
    }
    let a = o;
    s.length > 0 && (a = il(e, o)), Fa(e.eventQueue_, a, s);
  }
  function Ga(e, t) {
    Ya(e, "connected", t),
      !1 === t &&
        (function (e) {
          el(e, "onDisconnectEvents");
          const t = Ka(e),
            n = vo();
          yo(e.onDisconnect_, li(), (r, i) => {
            const o = ua(r, i, e.serverSyncTree_, t);
            _o(n, r, o);
          });
          let r = [];
          yo(n, li(), (t, n) => {
            r = r.concat(Bs(e.serverSyncTree_, t, n));
            const i = cl(e, t);
            il(e, i);
          }),
            (e.onDisconnect_ = vo()),
            Fa(e.eventQueue_, li(), r);
        })(e);
  }
  function Ya(e, t, n) {
    const r = new ai("/.info/" + t),
      i = to(n);
    e.infoData_.updateSnapshot(r, i);
    const o = Bs(e.infoSyncTree_, r, i);
    Fa(e.eventQueue_, r, o);
  }
  function Qa(e) {
    return e.nextWriteId_++;
  }
  function Ja(e, t, n, r, i) {
    el(e, "set", { path: t.toString(), value: n, priority: r });
    const o = Ka(e),
      s = to(n, r),
      a = $s(e.serverSyncTree_, t),
      l = da(s, a, o),
      c = Qa(e),
      u = zs(e.serverSyncTree_, t, l, c, !0);
    Ma(e.eventQueue_, u),
      e.server_.put(t.toString(), s.val(!0), (n, r) => {
        const o = "ok" === n;
        o || yr("set at " + t + " failed: " + n);
        const s = Vs(e.serverSyncTree_, c, !o);
        Fa(e.eventQueue_, t, s), tl(e, i, n, r);
      });
    const d = cl(e, t);
    il(e, d), Fa(e.eventQueue_, d, []);
  }
  function Xa(e, t, n) {
    let r;
    (r =
      ".info" === ci(t._path)
        ? qs(e.infoSyncTree_, t, n)
        : qs(e.serverSyncTree_, t, n)),
      Ua(e.eventQueue_, t._path, r);
  }
  function Za(e) {
    e.persistentConnection_ && e.persistentConnection_.interrupt(Wa);
  }
  function el(e) {
    let t = "";
    e.persistentConnection_ && (t = e.persistentConnection_.id + ":");
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    mr(t, ...r);
  }
  function tl(e, t, n, r) {
    t &&
      Or(() => {
        if ("ok" === n) t(null);
        else {
          const e = (n || "error").toUpperCase();
          let i = e;
          r && (i += ": " + r);
          const o = new Error(i);
          (o.code = e), t(o);
        }
      });
  }
  function nl(e, t, n) {
    return $s(e.serverSyncTree_, t, n) || Xi.EMPTY_NODE;
  }
  function rl(e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : e.transactionQueueTree_;
    if ((t || ll(e, t), ma(t))) {
      const n = sl(e, t);
      Ae(n.length > 0, "Sending zero length transaction queue");
      n.every((e) => 0 === e.status) &&
        (function (e, t, n) {
          const r = n.map((e) => e.currentWriteId),
            i = nl(e, t, r);
          let o = i;
          const s = i.hash();
          for (let c = 0; c < n.length; c++) {
            const e = n[c];
            Ae(
              0 === e.status,
              "tryToSendTransactionQueue_: items in queue should all be run."
            ),
              (e.status = 1),
              e.retryCount++;
            const r = vi(t, e.path);
            o = o.updateChild(r, e.currentOutputSnapshotRaw);
          }
          const a = o.val(!0),
            l = t;
          e.server_.put(
            l.toString(),
            a,
            (r) => {
              el(e, "transaction put response", {
                path: l.toString(),
                status: r,
              });
              let i = [];
              if ("ok" === r) {
                const r = [];
                for (let t = 0; t < n.length; t++)
                  (n[t].status = 2),
                    (i = i.concat(Vs(e.serverSyncTree_, n[t].currentWriteId))),
                    n[t].onComplete &&
                      r.push(() =>
                        n[t].onComplete(
                          null,
                          !0,
                          n[t].currentOutputSnapshotResolved
                        )
                      ),
                    n[t].unwatcher();
                ll(e, pa(e.transactionQueueTree_, t)),
                  rl(e, e.transactionQueueTree_),
                  Fa(e.eventQueue_, t, i);
                for (let e = 0; e < r.length; e++) Or(r[e]);
              } else {
                if ("datastale" === r)
                  for (let e = 0; e < n.length; e++)
                    3 === n[e].status ? (n[e].status = 4) : (n[e].status = 0);
                else {
                  yr("transaction at " + l.toString() + " failed: " + r);
                  for (let e = 0; e < n.length; e++)
                    (n[e].status = 4), (n[e].abortReason = r);
                }
                il(e, t);
              }
            },
            s
          );
        })(e, ba(t), n);
    } else
      va(t) &&
        _a(t, (t) => {
          rl(e, t);
        });
  }
  function il(e, t) {
    const n = ol(e, t),
      r = ba(n);
    return (
      (function (e, t, n) {
        if (0 === t.length) return;
        const r = [];
        let i = [];
        const o = t.filter((e) => 0 === e.status),
          s = o.map((e) => e.currentWriteId);
        for (let l = 0; l < t.length; l++) {
          const o = t[l],
            c = vi(n, o.path);
          let u,
            d = !1;
          if (
            (Ae(
              null !== c,
              "rerunTransactionsUnderNode_: relativePath should not be null."
            ),
            4 === o.status)
          )
            (d = !0),
              (u = o.abortReason),
              (i = i.concat(Vs(e.serverSyncTree_, o.currentWriteId, !0)));
          else if (0 === o.status)
            if (o.retryCount >= Va)
              (d = !0),
                (u = "maxretry"),
                (i = i.concat(Vs(e.serverSyncTree_, o.currentWriteId, !0)));
            else {
              const n = nl(e, o.path, s);
              o.currentInputSnapshot = n;
              const r = t[l].update(n.val());
              if (void 0 !== r) {
                Pa("transaction failed: Data returned ", r, o.path);
                let t = to(r);
                ("object" === typeof r && null != r && at(r, ".priority")) ||
                  (t = t.updatePriority(n.getPriority()));
                const a = o.currentWriteId,
                  l = Ka(e),
                  c = da(t, n, l);
                (o.currentOutputSnapshotRaw = t),
                  (o.currentOutputSnapshotResolved = c),
                  (o.currentWriteId = Qa(e)),
                  s.splice(s.indexOf(a), 1),
                  (i = i.concat(
                    zs(
                      e.serverSyncTree_,
                      o.path,
                      c,
                      o.currentWriteId,
                      o.applyLocally
                    )
                  )),
                  (i = i.concat(Vs(e.serverSyncTree_, a, !0)));
              } else
                (d = !0),
                  (u = "nodata"),
                  (i = i.concat(Vs(e.serverSyncTree_, o.currentWriteId, !0)));
            }
          Fa(e.eventQueue_, n, i),
            (i = []),
            d &&
              ((t[l].status = 2),
              (a = t[l].unwatcher),
              setTimeout(a, Math.floor(0)),
              t[l].onComplete &&
                ("nodata" === u
                  ? r.push(() =>
                      t[l].onComplete(null, !1, t[l].currentInputSnapshot)
                    )
                  : r.push(() => t[l].onComplete(new Error(u), !1, null))));
        }
        var a;
        ll(e, e.transactionQueueTree_);
        for (let l = 0; l < r.length; l++) Or(r[l]);
        rl(e, e.transactionQueueTree_);
      })(e, sl(e, n), r),
      r
    );
  }
  function ol(e, t) {
    let n,
      r = e.transactionQueueTree_;
    for (n = ci(t); null !== n && void 0 === ma(r); )
      (r = pa(r, n)), (n = ci((t = di(t))));
    return r;
  }
  function sl(e, t) {
    const n = [];
    return al(e, t, n), n.sort((e, t) => e.order - t.order), n;
  }
  function al(e, t, n) {
    const r = ma(t);
    if (r) for (let i = 0; i < r.length; i++) n.push(r[i]);
    _a(t, (t) => {
      al(e, t, n);
    });
  }
  function ll(e, t) {
    const n = ma(t);
    if (n) {
      let e = 0;
      for (let t = 0; t < n.length; t++)
        2 !== n[t].status && ((n[e] = n[t]), e++);
      (n.length = e), ga(t, n.length > 0 ? n : void 0);
    }
    _a(t, (t) => {
      ll(e, t);
    });
  }
  function cl(e, t) {
    const n = ba(ol(e, t)),
      r = pa(e.transactionQueueTree_, t);
    return (
      (function (e, t, n) {
        let r = n ? e : e.parent;
        for (; null !== r; ) {
          if (t(r)) return !0;
          r = r.parent;
        }
      })(r, (t) => {
        ul(e, t);
      }),
      ul(e, r),
      ya(r, (t) => {
        ul(e, t);
      }),
      n
    );
  }
  function ul(e, t) {
    const n = ma(t);
    if (n) {
      const r = [];
      let i = [],
        o = -1;
      for (let t = 0; t < n.length; t++)
        3 === n[t].status ||
          (1 === n[t].status
            ? (Ae(
                o === t - 1,
                "All SENT items should be at beginning of queue."
              ),
              (o = t),
              (n[t].status = 3),
              (n[t].abortReason = "set"))
            : (Ae(0 === n[t].status, "Unexpected transaction status in abort"),
              n[t].unwatcher(),
              (i = i.concat(Vs(e.serverSyncTree_, n[t].currentWriteId, !0))),
              n[t].onComplete &&
                r.push(
                  n[t].onComplete.bind(null, new Error("set"), !1, null)
                )));
      -1 === o ? ga(t, void 0) : (n.length = o + 1),
        Fa(e.eventQueue_, ba(t), i);
      for (let e = 0; e < r.length; e++) Or(r[e]);
    }
  }
  const dl = function (e, t) {
      const n = hl(e),
        r = n.namespace;
      "firebase.com" === n.domain &&
        _r(
          n.host +
            " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
        ),
        (r && "undefined" !== r) ||
          "localhost" === n.domain ||
          _r(
            "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
          ),
        n.secure ||
          ("undefined" !== typeof window &&
            window.location &&
            window.location.protocol &&
            -1 !== window.location.protocol.indexOf("https:") &&
            yr(
              "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
            ));
      const i = "ws" === n.scheme || "wss" === n.scheme;
      return {
        repoInfo: new Vr(n.host, n.secure, r, i, t, "", r !== n.subdomain),
        path: new ai(n.pathString),
      };
    },
    hl = function (e) {
      let t = "",
        n = "",
        r = "",
        i = "",
        o = "",
        s = !0,
        a = "https",
        l = 443;
      if ("string" === typeof e) {
        let c = e.indexOf("//");
        c >= 0 && ((a = e.substring(0, c - 1)), (e = e.substring(c + 2)));
        let u = e.indexOf("/");
        -1 === u && (u = e.length);
        let d = e.indexOf("?");
        -1 === d && (d = e.length),
          (t = e.substring(0, Math.min(u, d))),
          u < d &&
            (i = (function (e) {
              let t = "";
              const n = e.split("/");
              for (let r = 0; r < n.length; r++)
                if (n[r].length > 0) {
                  let e = n[r];
                  try {
                    e = decodeURIComponent(e.replace(/\+/g, " "));
                  } catch (Sf) {}
                  t += "/" + e;
                }
              return t;
            })(e.substring(u, d)));
        const h = (function (e) {
          const t = {};
          "?" === e.charAt(0) && (e = e.substring(1));
          for (const n of e.split("&")) {
            if (0 === n.length) continue;
            const r = n.split("=");
            2 === r.length
              ? (t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]))
              : yr(
                  "Invalid query segment '"
                    .concat(n, "' in query '")
                    .concat(e, "'")
                );
          }
          return t;
        })(e.substring(Math.min(e.length, d)));
        (c = t.indexOf(":")),
          c >= 0
            ? ((s = "https" === a || "wss" === a),
              (l = parseInt(t.substring(c + 1), 10)))
            : (c = t.length);
        const f = t.slice(0, c);
        if ("localhost" === f.toLowerCase()) n = "localhost";
        else if (f.split(".").length <= 2) n = f;
        else {
          const e = t.indexOf(".");
          (r = t.substring(0, e).toLowerCase()),
            (n = t.substring(e + 1)),
            (o = r);
        }
        "ns" in h && (o = h.ns);
      }
      return {
        host: t,
        port: l,
        domain: n,
        subdomain: r,
        secure: s,
        scheme: a,
        pathString: i,
        namespace: o,
      };
    },
    fl = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
  !(function () {
    let e = 0;
    const t = [];
  })();
  class pl {
    constructor(e, t, n, r) {
      (this.eventType = e),
        (this.eventRegistration = t),
        (this.snapshot = n),
        (this.prevName = r);
    }
    getPath() {
      const e = this.snapshot.ref;
      return "value" === this.eventType ? e._path : e.parent._path;
    }
    getEventType() {
      return this.eventType;
    }
    getEventRunner() {
      return this.eventRegistration.getEventRunner(this);
    }
    toString() {
      return (
        this.getPath().toString() +
        ":" +
        this.eventType +
        ":" +
        ot(this.snapshot.exportVal())
      );
    }
  }
  class ml {
    constructor(e, t, n) {
      (this.eventRegistration = e), (this.error = t), (this.path = n);
    }
    getPath() {
      return this.path;
    }
    getEventType() {
      return "cancel";
    }
    getEventRunner() {
      return this.eventRegistration.getEventRunner(this);
    }
    toString() {
      return this.path.toString() + ":cancel";
    }
  }
  class gl {
    constructor(e, t) {
      (this.snapshotCallback = e), (this.cancelCallback = t);
    }
    onValue(e, t) {
      this.snapshotCallback.call(null, e, t);
    }
    onCancel(e) {
      return (
        Ae(
          this.hasCancelCallback,
          "Raising a cancel event on a listener with no cancel callback"
        ),
        this.cancelCallback.call(null, e)
      );
    }
    get hasCancelCallback() {
      return !!this.cancelCallback;
    }
    matches(e) {
      return (
        this.snapshotCallback === e.snapshotCallback ||
        (void 0 !== this.snapshotCallback.userCallback &&
          this.snapshotCallback.userCallback ===
            e.snapshotCallback.userCallback &&
          this.snapshotCallback.context === e.snapshotCallback.context)
      );
    }
  }
  class vl {
    constructor(e, t, n, r) {
      (this._repo = e),
        (this._path = t),
        (this._queryParams = n),
        (this._orderByCalled = r);
    }
    get key() {
      return gi(this._path) ? null : hi(this._path);
    }
    get ref() {
      return new _l(this._repo, this._path);
    }
    get _queryIdentifier() {
      const e = po(this._queryParams),
        t = Ir(e);
      return "{}" === t ? "default" : t;
    }
    get _queryObject() {
      return po(this._queryParams);
    }
    isEqual(e) {
      if (!((e = wt(e)) instanceof vl)) return !1;
      const t = this._repo === e._repo,
        n = yi(this._path, e._path),
        r = this._queryIdentifier === e._queryIdentifier;
      return t && n && r;
    }
    toJSON() {
      return this.toString();
    }
    toString() {
      return (
        this._repo.toString() +
        (function (e) {
          let t = "";
          for (let n = e.pieceNum_; n < e.pieces_.length; n++)
            "" !== e.pieces_[n] &&
              (t += "/" + encodeURIComponent(String(e.pieces_[n])));
          return t || "/";
        })(this._path)
      );
    }
  }
  class _l extends vl {
    constructor(e, t) {
      super(e, t, new ho(), !1);
    }
    get parent() {
      const e = pi(this._path);
      return null === e ? null : new _l(this._repo, e);
    }
    get root() {
      let e = this;
      for (; null !== e.parent; ) e = e.parent;
      return e;
    }
  }
  class yl {
    constructor(e, t, n) {
      (this._node = e), (this.ref = t), (this._index = n);
    }
    get priority() {
      return this._node.getPriority().val();
    }
    get key() {
      return this.ref.key;
    }
    get size() {
      return this._node.numChildren();
    }
    child(e) {
      const t = new ai(e),
        n = wl(this.ref, e);
      return new yl(this._node.getChild(t), n, qi);
    }
    exists() {
      return !this._node.isEmpty();
    }
    exportVal() {
      return this._node.val(!0);
    }
    forEach(e) {
      if (this._node.isLeafNode()) return !1;
      return !!this._node.forEachChild(this._index, (t, n) =>
        e(new yl(n, wl(this.ref, t), qi))
      );
    }
    hasChild(e) {
      const t = new ai(e);
      return !this._node.getChild(t).isEmpty();
    }
    hasChildren() {
      return !this._node.isLeafNode() && !this._node.isEmpty();
    }
    toJSON() {
      return this.exportVal();
    }
    val() {
      return this._node.val();
    }
  }
  function bl(e, t) {
    return (
      (e = wt(e))._checkNotDeleted("ref"),
      void 0 !== t ? wl(e._root, t) : e._root
    );
  }
  function wl(e, t) {
    return (
      null === ci((e = wt(e))._path)
        ? Oa("child", "path", t, !1)
        : xa("child", "path", t, !1),
      new _l(e._repo, mi(e._path, t))
    );
  }
  function kl(e, t) {
    (e = wt(e)), Aa("set", e._path), Na("set", t, e._path, !1);
    const n = new Ye();
    return (
      Ja(
        e._repo,
        e._path,
        t,
        null,
        n.wrapCallback(() => {})
      ),
      n.promise
    );
  }
  function Cl(e, t) {
    Ra("update", t, e._path, !1);
    const n = new Ye();
    return (
      (function (e, t, n, r) {
        el(e, "update", { path: t.toString(), value: n });
        let i = !0;
        const o = Ka(e),
          s = {};
        if (
          (Nr(n, (n, r) => {
            (i = !1), (s[n] = ua(mi(t, n), to(r), e.serverSyncTree_, o));
          }),
          i)
        )
          mr("update() called with empty data.  Don't do anything."),
            tl(0, r, "ok", void 0);
        else {
          const i = Qa(e),
            o = Ws(e.serverSyncTree_, t, s, i);
          Ma(e.eventQueue_, o),
            e.server_.merge(t.toString(), n, (n, o) => {
              const s = "ok" === n;
              s || yr("update at " + t + " failed: " + n);
              const a = Vs(e.serverSyncTree_, i, !s),
                l = a.length > 0 ? il(e, t) : t;
              Fa(e.eventQueue_, l, a), tl(0, r, n, o);
            }),
            Nr(n, (n) => {
              const r = cl(e, mi(t, n));
              il(e, r);
            }),
            Fa(e.eventQueue_, t, []);
        }
      })(
        e._repo,
        e._path,
        t,
        n.wrapCallback(() => {})
      ),
      n.promise
    );
  }
  class Sl {
    constructor(e) {
      this.callbackContext = e;
    }
    respondsTo(e) {
      return "value" === e;
    }
    createEvent(e, t) {
      const n = t._queryParams.getIndex();
      return new pl(
        "value",
        this,
        new yl(e.snapshotNode, new _l(t._repo, t._path), n)
      );
    }
    getEventRunner(e) {
      return "cancel" === e.getEventType()
        ? () => this.callbackContext.onCancel(e.error)
        : () => this.callbackContext.onValue(e.snapshot, null);
    }
    createCancelEvent(e, t) {
      return this.callbackContext.hasCancelCallback ? new ml(this, e, t) : null;
    }
    matches(e) {
      return (
        e instanceof Sl &&
        (!e.callbackContext ||
          !this.callbackContext ||
          e.callbackContext.matches(this.callbackContext))
      );
    }
    hasAnyCallback() {
      return null !== this.callbackContext;
    }
  }
  class El {
    constructor(e, t) {
      (this.eventType = e), (this.callbackContext = t);
    }
    respondsTo(e) {
      let t = "children_added" === e ? "child_added" : e;
      return (
        (t = "children_removed" === t ? "child_removed" : t),
        this.eventType === t
      );
    }
    createCancelEvent(e, t) {
      return this.callbackContext.hasCancelCallback ? new ml(this, e, t) : null;
    }
    createEvent(e, t) {
      Ae(null != e.childName, "Child events should have a childName.");
      const n = wl(new _l(t._repo, t._path), e.childName),
        r = t._queryParams.getIndex();
      return new pl(e.type, this, new yl(e.snapshotNode, n, r), e.prevName);
    }
    getEventRunner(e) {
      return "cancel" === e.getEventType()
        ? () => this.callbackContext.onCancel(e.error)
        : () => this.callbackContext.onValue(e.snapshot, e.prevName);
    }
    matches(e) {
      return (
        e instanceof El &&
        this.eventType === e.eventType &&
        (!this.callbackContext ||
          !e.callbackContext ||
          this.callbackContext.matches(e.callbackContext))
      );
    }
    hasAnyCallback() {
      return !!this.callbackContext;
    }
  }
  function Il(e, t, n, r, i) {
    let o;
    if (
      ("object" === typeof r && ((o = void 0), (i = r)),
      "function" === typeof r && (o = r),
      i && i.onlyOnce)
    ) {
      const t = n,
        r = (n, r) => {
          Xa(e._repo, e, a), t(n, r);
        };
      (r.userCallback = n.userCallback), (r.context = n.context), (n = r);
    }
    const s = new gl(n, o || void 0),
      a = "value" === t ? new Sl(s) : new El(t, s);
    return (
      (function (e, t, n) {
        let r;
        (r =
          ".info" === ci(t._path)
            ? Ks(e.infoSyncTree_, t, n)
            : Ks(e.serverSyncTree_, t, n)),
          Ua(e.eventQueue_, t._path, r);
      })(e._repo, e, a),
      () => Xa(e._repo, e, a)
    );
  }
  function Tl(e, t, n, r) {
    return Il(e, "value", t, n, r);
  }
  !(function (e) {
    Ae(!Es, "__referenceConstructor has already been defined"), (Es = e);
  })(_l),
    (function (e) {
      Ae(!Is, "__referenceConstructor has already been defined"), (Is = e);
    })(_l);
  const Nl = "FIREBASE_DATABASE_EMULATOR_HOST",
    Pl = {};
  let Rl = !1;
  function xl(e, t, n, r, i) {
    let o = r || e.options.databaseURL;
    void 0 === o &&
      (e.options.projectId ||
        _r(
          "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
        ),
      mr("Using default host for project ", e.options.projectId),
      (o = "".concat(e.options.projectId, "-default-rtdb.firebaseio.com")));
    let s,
      a,
      l = dl(o, i),
      c = l.repoInfo;
    "undefined" !== typeof process &&
      (a = {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
      }[Nl]),
      a
        ? ((s = !0),
          (o = "http://".concat(a, "?ns=").concat(c.namespace)),
          (l = dl(o, i)),
          (c = l.repoInfo))
        : (s = !l.repoInfo.secure);
    const u = i && s ? new Mr(Mr.OWNER) : new Lr(e.name, e.options, t);
    Da("Invalid Firebase Database URL", l),
      gi(l.path) ||
        _r(
          "Database URL must point to the root of a Firebase Database (not including a child path)."
        );
    const d = (function (e, t, n, r) {
      let i = Pl[t.name];
      i || ((i = {}), (Pl[t.name] = i));
      let o = i[e.toURLString()];
      o &&
        _r(
          "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
        );
      return (o = new Ba(e, Rl, n, r)), (i[e.toURLString()] = o), o;
    })(c, e, u, new Dr(e.name, n));
    return new Ol(d, e);
  }
  class Ol {
    constructor(e, t) {
      (this._repoInternal = e),
        (this.app = t),
        (this.type = "database"),
        (this._instanceStarted = !1);
    }
    get _repo() {
      return (
        this._instanceStarted ||
          (qa(
            this._repoInternal,
            this.app.options.appId,
            this.app.options.databaseAuthVariableOverride
          ),
          (this._instanceStarted = !0)),
        this._repoInternal
      );
    }
    get _root() {
      return (
        this._rootInternal || (this._rootInternal = new _l(this._repo, li())),
        this._rootInternal
      );
    }
    _delete() {
      return (
        null !== this._rootInternal &&
          (!(function (e, t) {
            const n = Pl[t];
            (n && n[e.key] === e) ||
              _r(
                "Database "
                  .concat(t, "(")
                  .concat(e.repoInfo_, ") has already been deleted.")
              ),
              Za(e),
              delete n[e.key];
          })(this._repo, this.app.name),
          (this._repoInternal = null),
          (this._rootInternal = null)),
        Promise.resolve()
      );
    }
    _checkNotDeleted(e) {
      null === this._rootInternal &&
        _r("Cannot call " + e + " on a deleted database.");
    }
  }
  (Ii.prototype.simpleListen = function (e, t) {
    this.sendRequest("q", { p: e }, t);
  }),
    (Ii.prototype.echo = function (e, t) {
      this.sendRequest("echo", { d: e }, t);
    });
  !(function (e) {
    nr(Un),
      On(
        new kt(
          "database",
          (e, t) => {
            let { instanceIdentifier: n } = t;
            return xl(
              e.getProvider("app").getImmediate(),
              e.getProvider("auth-internal"),
              e.getProvider("app-check-internal"),
              n
            );
          },
          "PUBLIC"
        ).setMultipleInstances(!0)
      ),
      zn(Zn, er, e),
      zn(Zn, er, "esm2017");
  })();
  const Al = "firebasestorage.googleapis.com",
    Dl = "storageBucket";
  class Ll extends tt {
    constructor(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      super(Fl(e), "Firebase Storage: ".concat(t, " (").concat(Fl(e), ")")),
        (this.status_ = n),
        (this.customData = { serverResponse: null }),
        (this._baseMessage = this.message),
        Object.setPrototypeOf(this, Ll.prototype);
    }
    get status() {
      return this.status_;
    }
    set status(e) {
      this.status_ = e;
    }
    _codeEquals(e) {
      return Fl(e) === this.code;
    }
    get serverResponse() {
      return this.customData.serverResponse;
    }
    set serverResponse(e) {
      (this.customData.serverResponse = e),
        this.customData.serverResponse
          ? (this.message = ""
              .concat(this._baseMessage, "\n")
              .concat(this.customData.serverResponse))
          : (this.message = this._baseMessage);
    }
  }
  var Ml, Ul;
  function Fl(e) {
    return "storage/" + e;
  }
  function jl() {
    return new Ll(
      Ml.UNKNOWN,
      "An unknown error occurred, please check the error payload for server response."
    );
  }
  function zl() {
    return new Ll(
      Ml.RETRY_LIMIT_EXCEEDED,
      "Max retry time for operation exceeded, please try again."
    );
  }
  function Wl() {
    return new Ll(Ml.CANCELED, "User canceled the upload/download.");
  }
  function Vl() {
    return new Ll(
      Ml.CANNOT_SLICE_BLOB,
      "Cannot slice blob for upload. Please retry the upload."
    );
  }
  function Bl(e) {
    return new Ll(Ml.INVALID_ARGUMENT, e);
  }
  function ql() {
    return new Ll(Ml.APP_DELETED, "The Firebase app was deleted.");
  }
  function Hl(e, t) {
    return new Ll(
      Ml.INVALID_FORMAT,
      "String does not match format '" + e + "': " + t
    );
  }
  function Kl(e) {
    throw new Ll(Ml.INTERNAL_ERROR, "Internal error: " + e);
  }
  !(function (e) {
    (e.UNKNOWN = "unknown"),
      (e.OBJECT_NOT_FOUND = "object-not-found"),
      (e.BUCKET_NOT_FOUND = "bucket-not-found"),
      (e.PROJECT_NOT_FOUND = "project-not-found"),
      (e.QUOTA_EXCEEDED = "quota-exceeded"),
      (e.UNAUTHENTICATED = "unauthenticated"),
      (e.UNAUTHORIZED = "unauthorized"),
      (e.UNAUTHORIZED_APP = "unauthorized-app"),
      (e.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded"),
      (e.INVALID_CHECKSUM = "invalid-checksum"),
      (e.CANCELED = "canceled"),
      (e.INVALID_EVENT_NAME = "invalid-event-name"),
      (e.INVALID_URL = "invalid-url"),
      (e.INVALID_DEFAULT_BUCKET = "invalid-default-bucket"),
      (e.NO_DEFAULT_BUCKET = "no-default-bucket"),
      (e.CANNOT_SLICE_BLOB = "cannot-slice-blob"),
      (e.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size"),
      (e.NO_DOWNLOAD_URL = "no-download-url"),
      (e.INVALID_ARGUMENT = "invalid-argument"),
      (e.INVALID_ARGUMENT_COUNT = "invalid-argument-count"),
      (e.APP_DELETED = "app-deleted"),
      (e.INVALID_ROOT_OPERATION = "invalid-root-operation"),
      (e.INVALID_FORMAT = "invalid-format"),
      (e.INTERNAL_ERROR = "internal-error"),
      (e.UNSUPPORTED_ENVIRONMENT = "unsupported-environment");
  })(Ml || (Ml = {}));
  class $l {
    constructor(e, t) {
      (this.bucket = e), (this.path_ = t);
    }
    get path() {
      return this.path_;
    }
    get isRoot() {
      return 0 === this.path.length;
    }
    fullServerUrl() {
      const e = encodeURIComponent;
      return "/b/" + e(this.bucket) + "/o/" + e(this.path);
    }
    bucketOnlyServerUrl() {
      return "/b/" + encodeURIComponent(this.bucket) + "/o";
    }
    static makeFromBucketSpec(e, t) {
      let n;
      try {
        n = $l.makeFromUrl(e, t);
      } catch (Sf) {
        return new $l(e, "");
      }
      if ("" === n.path) return n;
      throw (
        ((r = e),
        new Ll(
          Ml.INVALID_DEFAULT_BUCKET,
          "Invalid default bucket '" + r + "'."
        ))
      );
      var r;
    }
    static makeFromUrl(e, t) {
      let n = null;
      const r = "([A-Za-z0-9.\\-_]+)";
      const i = new RegExp("^gs://" + r + "(/(.*))?$", "i");
      function o(e) {
        e.path_ = decodeURIComponent(e.path);
      }
      const s = t.replace(/[.]/g, "\\."),
        a = [
          {
            regex: i,
            indices: { bucket: 1, path: 3 },
            postModify: function (e) {
              "/" === e.path.charAt(e.path.length - 1) &&
                (e.path_ = e.path_.slice(0, -1));
            },
          },
          {
            regex: new RegExp(
              "^https?://"
                .concat(s, "/")
                .concat("v[A-Za-z0-9_]+", "/b/")
                .concat(r, "/o")
                .concat("(/([^?#]*).*)?$"),
              "i"
            ),
            indices: { bucket: 1, path: 3 },
            postModify: o,
          },
          {
            regex: new RegExp(
              "^https?://"
                .concat(
                  t === Al
                    ? "(?:storage.googleapis.com|storage.cloud.google.com)"
                    : t,
                  "/"
                )
                .concat(r, "/")
                .concat("([^?#]*)"),
              "i"
            ),
            indices: { bucket: 1, path: 2 },
            postModify: o,
          },
        ];
      for (let l = 0; l < a.length; l++) {
        const t = a[l],
          r = t.regex.exec(e);
        if (r) {
          const e = r[t.indices.bucket];
          let i = r[t.indices.path];
          i || (i = ""), (n = new $l(e, i)), t.postModify(n);
          break;
        }
      }
      if (null == n)
        throw (function (e) {
          return new Ll(Ml.INVALID_URL, "Invalid URL '" + e + "'.");
        })(e);
      return n;
    }
  }
  class Gl {
    constructor(e) {
      this.promise_ = Promise.reject(e);
    }
    getPromise() {
      return this.promise_;
    }
    cancel() {}
  }
  function Yl(e) {
    return "string" === typeof e || e instanceof String;
  }
  function Ql(e) {
    return Jl() && e instanceof Blob;
  }
  function Jl() {
    return "undefined" !== typeof Blob;
  }
  function Xl(e, t, n, r) {
    if (r < t)
      throw Bl(
        "Invalid value for '"
          .concat(e, "'. Expected ")
          .concat(t, " or greater.")
      );
    if (r > n)
      throw Bl(
        "Invalid value for '".concat(e, "'. Expected ").concat(n, " or less.")
      );
  }
  function Zl(e, t, n) {
    let r = t;
    return (
      null == n && (r = "https://".concat(t)),
      "".concat(n, "://").concat(r, "/v0").concat(e)
    );
  }
  function ec(e) {
    const t = encodeURIComponent;
    let n = "?";
    for (const r in e)
      if (e.hasOwnProperty(r)) {
        n = n + (t(r) + "=" + t(e[r])) + "&";
      }
    return (n = n.slice(0, -1)), n;
  }
  function tc(e, t) {
    const n = e >= 500 && e < 600,
      r = -1 !== [408, 429].indexOf(e),
      i = -1 !== t.indexOf(e);
    return n || r || i;
  }
  !(function (e) {
    (e[(e.NO_ERROR = 0)] = "NO_ERROR"),
      (e[(e.NETWORK_ERROR = 1)] = "NETWORK_ERROR"),
      (e[(e.ABORT = 2)] = "ABORT");
  })(Ul || (Ul = {}));
  class nc {
    constructor(e, t, n, r, i, o, s, a, l, c, u) {
      let d =
        !(arguments.length > 11 && void 0 !== arguments[11]) || arguments[11];
      (this.url_ = e),
        (this.method_ = t),
        (this.headers_ = n),
        (this.body_ = r),
        (this.successCodes_ = i),
        (this.additionalRetryCodes_ = o),
        (this.callback_ = s),
        (this.errorCallback_ = a),
        (this.timeout_ = l),
        (this.progressCallback_ = c),
        (this.connectionFactory_ = u),
        (this.retry = d),
        (this.pendingConnection_ = null),
        (this.backoffId_ = null),
        (this.canceled_ = !1),
        (this.appDelete_ = !1),
        (this.promise_ = new Promise((e, t) => {
          (this.resolve_ = e), (this.reject_ = t), this.start_();
        }));
    }
    start_() {
      const e = (e, t) => {
          if (t) return void e(!1, new rc(!1, null, !0));
          const n = this.connectionFactory_();
          this.pendingConnection_ = n;
          const r = (e) => {
            const t = e.loaded,
              n = e.lengthComputable ? e.total : -1;
            null !== this.progressCallback_ && this.progressCallback_(t, n);
          };
          null !== this.progressCallback_ && n.addUploadProgressListener(r),
            n
              .send(this.url_, this.method_, this.body_, this.headers_)
              .then(() => {
                null !== this.progressCallback_ &&
                  n.removeUploadProgressListener(r),
                  (this.pendingConnection_ = null);
                const t = n.getErrorCode() === Ul.NO_ERROR,
                  i = n.getStatus();
                if (!t || (tc(i, this.additionalRetryCodes_) && this.retry)) {
                  const t = n.getErrorCode() === Ul.ABORT;
                  return void e(!1, new rc(!1, null, t));
                }
                const o = -1 !== this.successCodes_.indexOf(i);
                e(!0, new rc(o, n));
              });
        },
        t = (e, t) => {
          const n = this.resolve_,
            r = this.reject_,
            i = t.connection;
          if (t.wasSuccessCode)
            try {
              const e = this.callback_(i, i.getResponse());
              void 0 !== e ? n(e) : n();
            } catch (Sf) {
              r(Sf);
            }
          else if (null !== i) {
            const e = jl();
            (e.serverResponse = i.getErrorText()),
              this.errorCallback_ ? r(this.errorCallback_(i, e)) : r(e);
          } else if (t.canceled) {
            r(this.appDelete_ ? ql() : Wl());
          } else {
            r(zl());
          }
        };
      this.canceled_
        ? t(0, new rc(!1, null, !0))
        : (this.backoffId_ = (function (e, t, n) {
            let r = 1,
              i = null,
              o = null,
              s = !1,
              a = 0;
            function l() {
              return 2 === a;
            }
            let c = !1;
            function u() {
              if (!c) {
                c = !0;
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.apply(null, n);
              }
            }
            function d(t) {
              i = setTimeout(() => {
                (i = null), e(f, l());
              }, t);
            }
            function h() {
              o && clearTimeout(o);
            }
            function f(e) {
              if (c) return void h();
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                n[i - 1] = arguments[i];
              if (e) return h(), void u.call(null, e, ...n);
              if (l() || s) return h(), void u.call(null, e, ...n);
              let o;
              r < 64 && (r *= 2),
                1 === a ? ((a = 2), (o = 0)) : (o = 1e3 * (r + Math.random())),
                d(o);
            }
            let p = !1;
            function m(e) {
              p ||
                ((p = !0),
                h(),
                c ||
                  (null !== i
                    ? (e || (a = 2), clearTimeout(i), d(0))
                    : e || (a = 1)));
            }
            return (
              d(0),
              (o = setTimeout(() => {
                (s = !0), m(!0);
              }, n)),
              m
            );
          })(e, t, this.timeout_));
    }
    getPromise() {
      return this.promise_;
    }
    cancel(e) {
      (this.canceled_ = !0),
        (this.appDelete_ = e || !1),
        null !== this.backoffId_ && (0, this.backoffId_)(!1),
        null !== this.pendingConnection_ && this.pendingConnection_.abort();
    }
  }
  class rc {
    constructor(e, t, n) {
      (this.wasSuccessCode = e), (this.connection = t), (this.canceled = !!n);
    }
  }
  function ic() {
    return "undefined" !== typeof BlobBuilder
      ? BlobBuilder
      : "undefined" !== typeof WebKitBlobBuilder
      ? WebKitBlobBuilder
      : void 0;
  }
  function oc() {
    const e = ic();
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    if (void 0 !== e) {
      const t = new e();
      for (let e = 0; e < n.length; e++) t.append(n[e]);
      return t.getBlob();
    }
    if (Jl()) return new Blob(n);
    throw new Ll(
      Ml.UNSUPPORTED_ENVIRONMENT,
      "This browser doesn't seem to support creating Blobs"
    );
  }
  function sc(e) {
    if ("undefined" === typeof atob)
      throw (
        ((t = "base-64"),
        new Ll(
          Ml.UNSUPPORTED_ENVIRONMENT,
          "".concat(
            t,
            " is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information."
          )
        ))
      );
    var t;
    return atob(e);
  }
  const ac = {
    RAW: "raw",
    BASE64: "base64",
    BASE64URL: "base64url",
    DATA_URL: "data_url",
  };
  class lc {
    constructor(e, t) {
      (this.data = e), (this.contentType = t || null);
    }
  }
  function cc(e, t) {
    switch (e) {
      case ac.RAW:
        return new lc(uc(t));
      case ac.BASE64:
      case ac.BASE64URL:
        return new lc(dc(e, t));
      case ac.DATA_URL:
        return new lc(
          (function (e) {
            const t = new hc(e);
            return t.base64
              ? dc(ac.BASE64, t.rest)
              : (function (e) {
                  let t;
                  try {
                    t = decodeURIComponent(e);
                  } catch (Sf) {
                    throw Hl(ac.DATA_URL, "Malformed data URL.");
                  }
                  return uc(t);
                })(t.rest);
          })(t),
          new hc(t).contentType
        );
    }
    throw jl();
  }
  function uc(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      let r = e.charCodeAt(n);
      if (r <= 127) t.push(r);
      else if (r <= 2047) t.push(192 | (r >> 6), 128 | (63 & r));
      else if (55296 === (64512 & r)) {
        if (n < e.length - 1 && 56320 === (64512 & e.charCodeAt(n + 1))) {
          (r = 65536 | ((1023 & r) << 10) | (1023 & e.charCodeAt(++n))),
            t.push(
              240 | (r >> 18),
              128 | ((r >> 12) & 63),
              128 | ((r >> 6) & 63),
              128 | (63 & r)
            );
        } else t.push(239, 191, 189);
      } else
        56320 === (64512 & r)
          ? t.push(239, 191, 189)
          : t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r));
    }
    return new Uint8Array(t);
  }
  function dc(e, t) {
    switch (e) {
      case ac.BASE64: {
        const n = -1 !== t.indexOf("-"),
          r = -1 !== t.indexOf("_");
        if (n || r) {
          throw Hl(
            e,
            "Invalid character '" +
              (n ? "-" : "_") +
              "' found: is it base64url encoded?"
          );
        }
        break;
      }
      case ac.BASE64URL: {
        const n = -1 !== t.indexOf("+"),
          r = -1 !== t.indexOf("/");
        if (n || r) {
          throw Hl(
            e,
            "Invalid character '" +
              (n ? "+" : "/") +
              "' found: is it base64 encoded?"
          );
        }
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        break;
      }
    }
    let n;
    try {
      n = sc(t);
    } catch (Sf) {
      if (Sf.message.includes("polyfill")) throw Sf;
      throw Hl(e, "Invalid character found");
    }
    const r = new Uint8Array(n.length);
    for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
    return r;
  }
  class hc {
    constructor(e) {
      (this.base64 = !1), (this.contentType = null);
      const t = e.match(/^data:([^,]+)?,/);
      if (null === t)
        throw Hl(
          ac.DATA_URL,
          "Must be formatted 'data:[<mediatype>][;base64],<data>"
        );
      const n = t[1] || null;
      null != n &&
        ((this.base64 = (function (e, t) {
          if (!(e.length >= t.length)) return !1;
          return e.substring(e.length - t.length) === t;
        })(n, ";base64")),
        (this.contentType = this.base64 ? n.substring(0, n.length - 7) : n)),
        (this.rest = e.substring(e.indexOf(",") + 1));
    }
  }
  class fc {
    constructor(e, t) {
      let n = 0,
        r = "";
      Ql(e)
        ? ((this.data_ = e), (n = e.size), (r = e.type))
        : e instanceof ArrayBuffer
        ? (t
            ? (this.data_ = new Uint8Array(e))
            : ((this.data_ = new Uint8Array(e.byteLength)),
              this.data_.set(new Uint8Array(e))),
          (n = this.data_.length))
        : e instanceof Uint8Array &&
          (t
            ? (this.data_ = e)
            : ((this.data_ = new Uint8Array(e.length)), this.data_.set(e)),
          (n = e.length)),
        (this.size_ = n),
        (this.type_ = r);
    }
    size() {
      return this.size_;
    }
    type() {
      return this.type_;
    }
    slice(e, t) {
      if (Ql(this.data_)) {
        const n = (function (e, t, n) {
          return e.webkitSlice
            ? e.webkitSlice(t, n)
            : e.mozSlice
            ? e.mozSlice(t, n)
            : e.slice
            ? e.slice(t, n)
            : null;
        })(this.data_, e, t);
        return null === n ? null : new fc(n);
      }
      {
        const n = new Uint8Array(this.data_.buffer, e, t - e);
        return new fc(n, !0);
      }
    }
    static getBlob() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (Jl()) {
        const e = t.map((e) => (e instanceof fc ? e.data_ : e));
        return new fc(oc.apply(null, e));
      }
      {
        const e = t.map((e) => (Yl(e) ? cc(ac.RAW, e).data : e.data_));
        let n = 0;
        e.forEach((e) => {
          n += e.byteLength;
        });
        const r = new Uint8Array(n);
        let i = 0;
        return (
          e.forEach((e) => {
            for (let t = 0; t < e.length; t++) r[i++] = e[t];
          }),
          new fc(r, !0)
        );
      }
    }
    uploadData() {
      return this.data_;
    }
  }
  function pc(e) {
    let t;
    try {
      t = JSON.parse(e);
    } catch (Sf) {
      return null;
    }
    return "object" !== typeof (n = t) || Array.isArray(n) ? null : t;
    var n;
  }
  function mc(e) {
    const t = e.lastIndexOf("/", e.length - 2);
    return -1 === t ? e : e.slice(t + 1);
  }
  function gc(e, t) {
    return t;
  }
  class vc {
    constructor(e, t, n, r) {
      (this.server = e),
        (this.local = t || e),
        (this.writable = !!n),
        (this.xform = r || gc);
    }
  }
  let _c = null;
  function yc() {
    if (_c) return _c;
    const e = [];
    e.push(new vc("bucket")),
      e.push(new vc("generation")),
      e.push(new vc("metageneration")),
      e.push(new vc("name", "fullPath", !0));
    const t = new vc("name");
    (t.xform = function (e, t) {
      return (function (e) {
        return !Yl(e) || e.length < 2 ? e : mc(e);
      })(t);
    }),
      e.push(t);
    const n = new vc("size");
    return (
      (n.xform = function (e, t) {
        return void 0 !== t ? Number(t) : t;
      }),
      e.push(n),
      e.push(new vc("timeCreated")),
      e.push(new vc("updated")),
      e.push(new vc("md5Hash", null, !0)),
      e.push(new vc("cacheControl", null, !0)),
      e.push(new vc("contentDisposition", null, !0)),
      e.push(new vc("contentEncoding", null, !0)),
      e.push(new vc("contentLanguage", null, !0)),
      e.push(new vc("contentType", null, !0)),
      e.push(new vc("metadata", "customMetadata", !0)),
      (_c = e),
      _c
    );
  }
  function bc(e, t, n) {
    const r = { type: "file" },
      i = n.length;
    for (let o = 0; o < i; o++) {
      const e = n[o];
      r[e.local] = e.xform(r, t[e.server]);
    }
    return (
      (function (e, t) {
        Object.defineProperty(e, "ref", {
          get: function () {
            const n = e.bucket,
              r = e.fullPath,
              i = new $l(n, r);
            return t._makeStorageReference(i);
          },
        });
      })(r, e),
      r
    );
  }
  function wc(e, t, n) {
    const r = pc(t);
    if (null === r) return null;
    return bc(e, r, n);
  }
  function kc(e, t) {
    const n = {},
      r = t.length;
    for (let i = 0; i < r; i++) {
      const r = t[i];
      r.writable && (n[r.server] = e[r.local]);
    }
    return JSON.stringify(n);
  }
  class Cc {
    constructor(e, t, n, r) {
      (this.url = e),
        (this.method = t),
        (this.handler = n),
        (this.timeout = r),
        (this.urlParams = {}),
        (this.headers = {}),
        (this.body = null),
        (this.errorHandler = null),
        (this.progressCallback = null),
        (this.successCodes = [200]),
        (this.additionalRetryCodes = []);
    }
  }
  function Sc(e) {
    if (!e) throw jl();
  }
  function Ec(e, t) {
    return function (n, r) {
      const i = wc(e, r, t);
      return Sc(null !== i), i;
    };
  }
  function Ic(e, t) {
    return function (n, r) {
      const i = wc(e, r, t);
      return (
        Sc(null !== i),
        (function (e, t, n, r) {
          const i = pc(t);
          if (null === i) return null;
          if (!Yl(i.downloadTokens)) return null;
          const o = i.downloadTokens;
          if (0 === o.length) return null;
          const s = encodeURIComponent;
          return o.split(",").map((t) => {
            const i = e.bucket,
              o = e.fullPath;
            return (
              Zl("/b/" + s(i) + "/o/" + s(o), n, r) +
              ec({ alt: "media", token: t })
            );
          })[0];
        })(i, r, e.host, e._protocol)
      );
    };
  }
  function Tc(e) {
    return function (t, n) {
      let r;
      var i, o;
      return (
        401 === t.getStatus()
          ? (r = t
              .getErrorText()
              .includes("Firebase App Check token is invalid")
              ? new Ll(
                  Ml.UNAUTHORIZED_APP,
                  "This app does not have permission to access Firebase Storage on this project."
                )
              : new Ll(
                  Ml.UNAUTHENTICATED,
                  "User is not authenticated, please authenticate using Firebase Authentication and try again."
                ))
          : 402 === t.getStatus()
          ? ((o = e.bucket),
            (r = new Ll(
              Ml.QUOTA_EXCEEDED,
              "Quota for bucket '" +
                o +
                "' exceeded, please view quota on https://firebase.google.com/pricing/."
            )))
          : 403 === t.getStatus()
          ? ((i = e.path),
            (r = new Ll(
              Ml.UNAUTHORIZED,
              "User does not have permission to access '" + i + "'."
            )))
          : (r = n),
        (r.status = t.getStatus()),
        (r.serverResponse = n.serverResponse),
        r
      );
    };
  }
  function Nc(e) {
    const t = Tc(e);
    return function (n, r) {
      let i = t(n, r);
      var o;
      return (
        404 === n.getStatus() &&
          ((o = e.path),
          (i = new Ll(
            Ml.OBJECT_NOT_FOUND,
            "Object '" + o + "' does not exist."
          ))),
        (i.serverResponse = r.serverResponse),
        i
      );
    };
  }
  function Pc(e, t, n) {
    const r = Object.assign({}, n);
    return (
      (r.fullPath = e.path),
      (r.size = t.size()),
      r.contentType ||
        (r.contentType = (function (e, t) {
          return (
            (e && e.contentType) ||
            (t && t.type()) ||
            "application/octet-stream"
          );
        })(null, t)),
      r
    );
  }
  function Rc(e, t, n, r, i) {
    const o = t.bucketOnlyServerUrl(),
      s = { "X-Goog-Upload-Protocol": "multipart" };
    const a = (function () {
      let e = "";
      for (let t = 0; t < 2; t++) e += Math.random().toString().slice(2);
      return e;
    })();
    s["Content-Type"] = "multipart/related; boundary=" + a;
    const l = Pc(t, r, i),
      c =
        "--" +
        a +
        "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" +
        kc(l, n) +
        "\r\n--" +
        a +
        "\r\nContent-Type: " +
        l.contentType +
        "\r\n\r\n",
      u = "\r\n--" + a + "--",
      d = fc.getBlob(c, r, u);
    if (null === d) throw Vl();
    const h = { name: l.fullPath },
      f = Zl(o, e.host, e._protocol),
      p = e.maxUploadRetryTime,
      m = new Cc(f, "POST", Ec(e, n), p);
    return (
      (m.urlParams = h),
      (m.headers = s),
      (m.body = d.uploadData()),
      (m.errorHandler = Tc(t)),
      m
    );
  }
  let xc = null;
  class Oc {
    constructor() {
      (this.sent_ = !1),
        (this.xhr_ = new XMLHttpRequest()),
        this.initXhr(),
        (this.errorCode_ = Ul.NO_ERROR),
        (this.sendPromise_ = new Promise((e) => {
          this.xhr_.addEventListener("abort", () => {
            (this.errorCode_ = Ul.ABORT), e();
          }),
            this.xhr_.addEventListener("error", () => {
              (this.errorCode_ = Ul.NETWORK_ERROR), e();
            }),
            this.xhr_.addEventListener("load", () => {
              e();
            });
        }));
    }
    send(e, t, n, r) {
      if (this.sent_) throw Kl("cannot .send() more than once");
      if (((this.sent_ = !0), this.xhr_.open(t, e, !0), void 0 !== r))
        for (const i in r)
          r.hasOwnProperty(i) && this.xhr_.setRequestHeader(i, r[i].toString());
      return (
        void 0 !== n ? this.xhr_.send(n) : this.xhr_.send(), this.sendPromise_
      );
    }
    getErrorCode() {
      if (!this.sent_) throw Kl("cannot .getErrorCode() before sending");
      return this.errorCode_;
    }
    getStatus() {
      if (!this.sent_) throw Kl("cannot .getStatus() before sending");
      try {
        return this.xhr_.status;
      } catch (Sf) {
        return -1;
      }
    }
    getResponse() {
      if (!this.sent_) throw Kl("cannot .getResponse() before sending");
      return this.xhr_.response;
    }
    getErrorText() {
      if (!this.sent_) throw Kl("cannot .getErrorText() before sending");
      return this.xhr_.statusText;
    }
    abort() {
      this.xhr_.abort();
    }
    getResponseHeader(e) {
      return this.xhr_.getResponseHeader(e);
    }
    addUploadProgressListener(e) {
      null != this.xhr_.upload &&
        this.xhr_.upload.addEventListener("progress", e);
    }
    removeUploadProgressListener(e) {
      null != this.xhr_.upload &&
        this.xhr_.upload.removeEventListener("progress", e);
    }
  }
  class Ac extends Oc {
    initXhr() {
      this.xhr_.responseType = "text";
    }
  }
  function Dc() {
    return xc ? xc() : new Ac();
  }
  class Lc {
    constructor(e, t) {
      (this._service = e),
        (this._location = t instanceof $l ? t : $l.makeFromUrl(t, e.host));
    }
    toString() {
      return "gs://" + this._location.bucket + "/" + this._location.path;
    }
    _newRef(e, t) {
      return new Lc(e, t);
    }
    get root() {
      const e = new $l(this._location.bucket, "");
      return this._newRef(this._service, e);
    }
    get bucket() {
      return this._location.bucket;
    }
    get fullPath() {
      return this._location.path;
    }
    get name() {
      return mc(this._location.path);
    }
    get storage() {
      return this._service;
    }
    get parent() {
      const e = (function (e) {
        if (0 === e.length) return null;
        const t = e.lastIndexOf("/");
        return -1 === t ? "" : e.slice(0, t);
      })(this._location.path);
      if (null === e) return null;
      const t = new $l(this._location.bucket, e);
      return new Lc(this._service, t);
    }
    _throwIfRoot(e) {
      if ("" === this._location.path)
        throw (function (e) {
          return new Ll(
            Ml.INVALID_ROOT_OPERATION,
            "The operation '" +
              e +
              "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
          );
        })(e);
    }
  }
  function Mc(e, t, n) {
    e._throwIfRoot("uploadBytes");
    const r = Rc(e.storage, e._location, yc(), new fc(t, !0), n);
    return e.storage
      .makeRequestWithTokens(r, Dc)
      .then((t) => ({ metadata: t, ref: e }));
  }
  function Uc(e) {
    e._throwIfRoot("getDownloadURL");
    const t = (function (e, t, n) {
      const r = Zl(t.fullServerUrl(), e.host, e._protocol),
        i = e.maxOperationRetryTime,
        o = new Cc(r, "GET", Ic(e, n), i);
      return (o.errorHandler = Nc(t)), o;
    })(e.storage, e._location, yc());
    return e.storage.makeRequestWithTokens(t, Dc).then((e) => {
      if (null === e)
        throw new Ll(
          Ml.NO_DOWNLOAD_URL,
          "The given file does not have any download URLs."
        );
      return e;
    });
  }
  function Fc(e, t) {
    const n = (function (e, t) {
        const n = t
          .split("/")
          .filter((e) => e.length > 0)
          .join("/");
        return 0 === e.length ? n : e + "/" + n;
      })(e._location.path, t),
      r = new $l(e._location.bucket, n);
    return new Lc(e.storage, r);
  }
  function jc(e, t) {
    if (e instanceof Vc) {
      const n = e;
      if (null == n._bucket)
        throw new Ll(
          Ml.NO_DEFAULT_BUCKET,
          "No default bucket found. Did you set the '" +
            Dl +
            "' property when initializing the app?"
        );
      const r = new Lc(n, n._bucket);
      return null != t ? jc(r, t) : r;
    }
    return void 0 !== t ? Fc(e, t) : e;
  }
  function zc(e, t) {
    if (t && /^[A-Za-z]+:\/\//.test(t)) {
      if (e instanceof Vc) return new Lc(e, t);
      throw Bl(
        "To use ref(service, url), the first argument must be a Storage instance."
      );
    }
    return jc(e, t);
  }
  function Wc(e, t) {
    const n = null === t || void 0 === t ? void 0 : t[Dl];
    return null == n ? null : $l.makeFromBucketSpec(n, e);
  }
  class Vc {
    constructor(e, t, n, r, i) {
      (this.app = e),
        (this._authProvider = t),
        (this._appCheckProvider = n),
        (this._url = r),
        (this._firebaseVersion = i),
        (this._bucket = null),
        (this._host = Al),
        (this._protocol = "https"),
        (this._appId = null),
        (this._deleted = !1),
        (this._maxOperationRetryTime = 12e4),
        (this._maxUploadRetryTime = 6e5),
        (this._requests = new Set()),
        (this._bucket =
          null != r
            ? $l.makeFromBucketSpec(r, this._host)
            : Wc(this._host, this.app.options));
    }
    get host() {
      return this._host;
    }
    set host(e) {
      (this._host = e),
        null != this._url
          ? (this._bucket = $l.makeFromBucketSpec(this._url, e))
          : (this._bucket = Wc(e, this.app.options));
    }
    get maxUploadRetryTime() {
      return this._maxUploadRetryTime;
    }
    set maxUploadRetryTime(e) {
      Xl("time", 0, Number.POSITIVE_INFINITY, e),
        (this._maxUploadRetryTime = e);
    }
    get maxOperationRetryTime() {
      return this._maxOperationRetryTime;
    }
    set maxOperationRetryTime(e) {
      Xl("time", 0, Number.POSITIVE_INFINITY, e),
        (this._maxOperationRetryTime = e);
    }
    async _getAuthToken() {
      if (this._overrideAuthToken) return this._overrideAuthToken;
      const e = this._authProvider.getImmediate({ optional: !0 });
      if (e) {
        const t = await e.getToken();
        if (null !== t) return t.accessToken;
      }
      return null;
    }
    async _getAppCheckToken() {
      const e = this._appCheckProvider.getImmediate({ optional: !0 });
      if (e) {
        return (await e.getToken()).token;
      }
      return null;
    }
    _delete() {
      return (
        this._deleted ||
          ((this._deleted = !0),
          this._requests.forEach((e) => e.cancel()),
          this._requests.clear()),
        Promise.resolve()
      );
    }
    _makeStorageReference(e) {
      return new Lc(this, e);
    }
    _makeRequest(e, t, n, r) {
      let i =
        !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
      if (this._deleted) return new Gl(ql());
      {
        const o = (function (e, t, n, r, i, o) {
          let s =
            !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
          const a = ec(e.urlParams),
            l = e.url + a,
            c = Object.assign({}, e.headers);
          return (
            (function (e, t) {
              t && (e["X-Firebase-GMPID"] = t);
            })(c, t),
            (function (e, t) {
              null !== t && t.length > 0 && (e.Authorization = "Firebase " + t);
            })(c, n),
            (function (e, t) {
              e["X-Firebase-Storage-Version"] =
                "webjs/" + (null !== t && void 0 !== t ? t : "AppManager");
            })(c, o),
            (function (e, t) {
              null !== t && (e["X-Firebase-AppCheck"] = t);
            })(c, r),
            new nc(
              l,
              e.method,
              c,
              e.body,
              e.successCodes,
              e.additionalRetryCodes,
              e.handler,
              e.errorHandler,
              e.timeout,
              e.progressCallback,
              i,
              s
            )
          );
        })(e, this._appId, n, r, t, this._firebaseVersion, i);
        return (
          this._requests.add(o),
          o.getPromise().then(
            () => this._requests.delete(o),
            () => this._requests.delete(o)
          ),
          o
        );
      }
    }
    async makeRequestWithTokens(e, t) {
      const [n, r] = await Promise.all([
        this._getAuthToken(),
        this._getAppCheckToken(),
      ]);
      return this._makeRequest(e, t, n, r).getPromise();
    }
  }
  const Bc = "@firebase/storage",
    qc = "0.12.6",
    Hc = "storage";
  function Kc(e, t) {
    let { instanceIdentifier: n } = t;
    const r = e.getProvider("app").getImmediate(),
      i = e.getProvider("auth-internal"),
      o = e.getProvider("app-check-internal");
    return new Vc(r, i, o, n, Un);
  }
  On(new kt(Hc, Kc, "PUBLIC").setMultipleInstances(!0)),
    zn(Bc, qc, ""),
    zn(Bc, qc, "esm2017");
  function $c(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
      var i = 0;
      for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    }
    return n;
  }
  Object.create;
  Object.create;
  "function" === typeof SuppressedError && SuppressedError;
  function Gc() {
    return {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    };
  }
  const Yc = Gc,
    Qc = new nt("auth", "Firebase", {
      "dependent-sdk-initialized-before-auth":
        "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    }),
    Jc = new Ot("@firebase/auth");
  function Xc(e) {
    if (Jc.logLevel <= Tt.ERROR) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      Jc.error("Auth (".concat(Un, "): ").concat(e), ...n);
    }
  }
  function Zc(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    throw ru(e, ...n);
  }
  function eu(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return ru(e, ...n);
  }
  function tu(e, t, n) {
    const r = Object.assign(Object.assign({}, Yc()), { [t]: n });
    return new nt("auth", "Firebase", r).create(t, { appName: e.name });
  }
  function nu(e) {
    return tu(
      e,
      "operation-not-supported-in-this-environment",
      "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
    );
  }
  function ru(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    if ("string" !== typeof e) {
      const t = n[0],
        r = [...n.slice(1)];
      return r[0] && (r[0].appName = e.name), e._errorFactory.create(t, ...r);
    }
    return Qc.create(e, ...n);
  }
  function iu(e, t) {
    if (!e) {
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
        i < n;
        i++
      )
        r[i - 2] = arguments[i];
      throw ru(t, ...r);
    }
  }
  function ou(e) {
    const t = "INTERNAL ASSERTION FAILED: " + e;
    throw (Xc(t), new Error(t));
  }
  function su(e, t) {
    e || ou(t);
  }
  function au() {
    var e;
    return (
      ("undefined" !== typeof self &&
        (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
      ""
    );
  }
  function lu() {
    return "http:" === cu() || "https:" === cu();
  }
  function cu() {
    var e;
    return (
      ("undefined" !== typeof self &&
        (null === (e = self.location) || void 0 === e ? void 0 : e.protocol)) ||
      null
    );
  }
  function uu() {
    return (
      !(
        "undefined" !== typeof navigator &&
        navigator &&
        "onLine" in navigator &&
        "boolean" === typeof navigator.onLine &&
        (lu() ||
          (function () {
            const e =
              "object" === typeof chrome
                ? chrome.runtime
                : "object" === typeof browser
                ? browser.runtime
                : void 0;
            return "object" === typeof e && void 0 !== e.id;
          })() ||
          "connection" in navigator)
      ) || navigator.onLine
    );
  }
  class du {
    constructor(e, t) {
      (this.shortDelay = e),
        (this.longDelay = t),
        su(t > e, "Short delay should be less than long delay!"),
        (this.isMobile = Xe() || Ze());
    }
    get() {
      return uu()
        ? this.isMobile
          ? this.longDelay
          : this.shortDelay
        : Math.min(5e3, this.shortDelay);
    }
  }
  function hu(e, t) {
    su(e.emulator, "Emulator should always be set here");
    const { url: n } = e.emulator;
    return t ? "".concat(n).concat(t.startsWith("/") ? t.slice(1) : t) : n;
  }
  class fu {
    static initialize(e, t, n) {
      (this.fetchImpl = e),
        t && (this.headersImpl = t),
        n && (this.responseImpl = n);
    }
    static fetch() {
      return this.fetchImpl
        ? this.fetchImpl
        : "undefined" !== typeof self && "fetch" in self
        ? self.fetch
        : "undefined" !== typeof globalThis && globalThis.fetch
        ? globalThis.fetch
        : "undefined" !== typeof fetch
        ? fetch
        : void ou(
            "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
    static headers() {
      return this.headersImpl
        ? this.headersImpl
        : "undefined" !== typeof self && "Headers" in self
        ? self.Headers
        : "undefined" !== typeof globalThis && globalThis.Headers
        ? globalThis.Headers
        : "undefined" !== typeof Headers
        ? Headers
        : void ou(
            "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
    static response() {
      return this.responseImpl
        ? this.responseImpl
        : "undefined" !== typeof self && "Response" in self
        ? self.Response
        : "undefined" !== typeof globalThis && globalThis.Response
        ? globalThis.Response
        : "undefined" !== typeof Response
        ? Response
        : void ou(
            "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
          );
    }
  }
  const pu = {
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_PASSWORD: "wrong-password",
      MISSING_PASSWORD: "missing-password",
      INVALID_LOGIN_CREDENTIALS: "invalid-credential",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_REQ_TYPE: "internal-error",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      PASSWORD_DOES_NOT_MEET_REQUIREMENTS:
        "password-does-not-meet-requirements",
      INVALID_CODE: "invalid-verification-code",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_SESSION_INFO: "missing-verification-id",
      SESSION_EXPIRED: "code-expired",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
      RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
      MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
      INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
      INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
      MISSING_CLIENT_TYPE: "missing-client-type",
      MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
      INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
      INVALID_REQ_TYPE: "invalid-req-type",
    },
    mu = new du(3e4, 6e4);
  function gu(e, t) {
    return e.tenantId && !t.tenantId
      ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
      : t;
  }
  async function vu(e, t, n, r) {
    return _u(
      e,
      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
      async () => {
        let i = {},
          o = {};
        r && ("GET" === t ? (o = r) : (i = { body: JSON.stringify(r) }));
        const s = ft(Object.assign({ key: e.config.apiKey }, o)).slice(1),
          a = await e._getAdditionalHeaders();
        return (
          (a["Content-Type"] = "application/json"),
          e.languageCode && (a["X-Firebase-Locale"] = e.languageCode),
          fu.fetch()(
            bu(e, e.config.apiHost, n, s),
            Object.assign(
              { method: t, headers: a, referrerPolicy: "no-referrer" },
              i
            )
          )
        );
      }
    );
  }
  async function _u(e, t, n) {
    e._canInitEmulator = !1;
    const r = Object.assign(Object.assign({}, pu), t);
    try {
      const t = new ku(e),
        i = await Promise.race([n(), t.promise]);
      t.clearNetworkTimeout();
      const o = await i.json();
      if ("needConfirmation" in o)
        throw Cu(e, "account-exists-with-different-credential", o);
      if (i.ok && !("errorMessage" in o)) return o;
      {
        const t = i.ok ? o.errorMessage : o.error.message,
          [n, s] = t.split(" : ");
        if ("FEDERATED_USER_ID_ALREADY_LINKED" === n)
          throw Cu(e, "credential-already-in-use", o);
        if ("EMAIL_EXISTS" === n) throw Cu(e, "email-already-in-use", o);
        if ("USER_DISABLED" === n) throw Cu(e, "user-disabled", o);
        const a = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
        if (s) throw tu(e, a, s);
        Zc(e, a);
      }
    } catch (Sf) {
      if (Sf instanceof tt) throw Sf;
      Zc(e, "network-request-failed", { message: String(Sf) });
    }
  }
  async function yu(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    const o = await vu(e, t, n, r, i);
    return (
      "mfaPendingCredential" in o &&
        Zc(e, "multi-factor-auth-required", { _serverResponse: o }),
      o
    );
  }
  function bu(e, t, n, r) {
    const i = "".concat(t).concat(n, "?").concat(r);
    return e.config.emulator
      ? hu(e.config, i)
      : "".concat(e.config.apiScheme, "://").concat(i);
  }
  function wu(e) {
    switch (e) {
      case "ENFORCE":
        return "ENFORCE";
      case "AUDIT":
        return "AUDIT";
      case "OFF":
        return "OFF";
      default:
        return "ENFORCEMENT_STATE_UNSPECIFIED";
    }
  }
  class ku {
    constructor(e) {
      (this.auth = e),
        (this.timer = null),
        (this.promise = new Promise((e, t) => {
          this.timer = setTimeout(
            () => t(eu(this.auth, "network-request-failed")),
            mu.get()
          );
        }));
    }
    clearNetworkTimeout() {
      clearTimeout(this.timer);
    }
  }
  function Cu(e, t, n) {
    const r = { appName: e.name };
    n.email && (r.email = n.email),
      n.phoneNumber && (r.phoneNumber = n.phoneNumber);
    const i = eu(e, t, r);
    return (i.customData._tokenResponse = n), i;
  }
  function Su(e) {
    return void 0 !== e && void 0 !== e.enterprise;
  }
  class Eu {
    constructor(e) {
      if (
        ((this.siteKey = ""),
        (this.recaptchaEnforcementState = []),
        void 0 === e.recaptchaKey)
      )
        throw new Error("recaptchaKey undefined");
      (this.siteKey = e.recaptchaKey.split("/")[3]),
        (this.recaptchaEnforcementState = e.recaptchaEnforcementState);
    }
    getProviderEnforcementState(e) {
      if (
        !this.recaptchaEnforcementState ||
        0 === this.recaptchaEnforcementState.length
      )
        return null;
      for (const t of this.recaptchaEnforcementState)
        if (t.provider && t.provider === e) return wu(t.enforcementState);
      return null;
    }
    isProviderEnabled(e) {
      return (
        "ENFORCE" === this.getProviderEnforcementState(e) ||
        "AUDIT" === this.getProviderEnforcementState(e)
      );
    }
  }
  async function Iu(e, t) {
    return vu(e, "GET", "/v2/recaptchaConfig", gu(e, t));
  }
  async function Tu(e, t) {
    return vu(e, "POST", "/v1/accounts:lookup", t);
  }
  function Nu(e) {
    if (e)
      try {
        const t = new Date(Number(e));
        if (!isNaN(t.getTime())) return t.toUTCString();
      } catch (Sf) {}
  }
  function Pu(e) {
    return 1e3 * Number(e);
  }
  function Ru(e) {
    const [t, n, r] = e.split(".");
    if (void 0 === t || void 0 === n || void 0 === r)
      return Xc("JWT malformed, contained fewer than 3 sections"), null;
    try {
      const e = ze(n);
      return e
        ? JSON.parse(e)
        : (Xc("Failed to decode base64 JWT payload"), null);
    } catch (Sf) {
      return (
        Xc(
          "Caught error parsing JWT payload as JSON",
          null === Sf || void 0 === Sf ? void 0 : Sf.toString()
        ),
        null
      );
    }
  }
  function xu(e) {
    const t = Ru(e);
    return (
      iu(t, "internal-error"),
      iu("undefined" !== typeof t.exp, "internal-error"),
      iu("undefined" !== typeof t.iat, "internal-error"),
      Number(t.exp) - Number(t.iat)
    );
  }
  async function Ou(e, t) {
    if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
      return t;
    try {
      return await t;
    } catch (Sf) {
      throw (
        (Sf instanceof tt &&
          (function (e) {
            let { code: t } = e;
            return (
              t === "auth/".concat("user-disabled") ||
              t === "auth/".concat("user-token-expired")
            );
          })(Sf) &&
          e.auth.currentUser === e &&
          (await e.auth.signOut()),
        Sf)
      );
    }
  }
  class Au {
    constructor(e) {
      (this.user = e),
        (this.isRunning = !1),
        (this.timerId = null),
        (this.errorBackoff = 3e4);
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule());
    }
    _stop() {
      this.isRunning &&
        ((this.isRunning = !1),
        null !== this.timerId && clearTimeout(this.timerId));
    }
    getInterval(e) {
      var t;
      if (e) {
        const e = this.errorBackoff;
        return (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), e;
      }
      {
        this.errorBackoff = 3e4;
        const e =
          (null !== (t = this.user.stsTokenManager.expirationTime) &&
          void 0 !== t
            ? t
            : 0) -
          Date.now() -
          3e5;
        return Math.max(0, e);
      }
    }
    schedule() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!this.isRunning) return;
      const t = this.getInterval(e);
      this.timerId = setTimeout(async () => {
        await this.iteration();
      }, t);
    }
    async iteration() {
      try {
        await this.user.getIdToken(!0);
      } catch (Sf) {
        return void (
          (null === Sf || void 0 === Sf ? void 0 : Sf.code) ===
            "auth/".concat("network-request-failed") && this.schedule(!0)
        );
      }
      this.schedule();
    }
  }
  class Du {
    constructor(e, t) {
      (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
    }
    _initializeTime() {
      (this.lastSignInTime = Nu(this.lastLoginAt)),
        (this.creationTime = Nu(this.createdAt));
    }
    _copy(e) {
      (this.createdAt = e.createdAt),
        (this.lastLoginAt = e.lastLoginAt),
        this._initializeTime();
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
    }
  }
  async function Lu(e) {
    var t;
    const n = e.auth,
      r = await e.getIdToken(),
      i = await Ou(e, Tu(n, { idToken: r }));
    iu(
      null === i || void 0 === i ? void 0 : i.users.length,
      n,
      "internal-error"
    );
    const o = i.users[0];
    e._notifyReloadListener(o);
    const s = (
        null === (t = o.providerUserInfo) || void 0 === t ? void 0 : t.length
      )
        ? Mu(o.providerUserInfo)
        : [],
      a =
        ((l = e.providerData),
        (c = s),
        [
          ...l.filter((e) => !c.some((t) => t.providerId === e.providerId)),
          ...c,
        ]);
    var l, c;
    const u = e.isAnonymous,
      d =
        !(e.email && o.passwordHash) &&
        !(null === a || void 0 === a ? void 0 : a.length),
      h = !!u && d,
      f = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: a,
        metadata: new Du(o.createdAt, o.lastLoginAt),
        isAnonymous: h,
      };
    Object.assign(e, f);
  }
  function Mu(e) {
    return e.map((e) => {
      var { providerId: t } = e,
        n = $c(e, ["providerId"]);
      return {
        providerId: t,
        uid: n.rawId || "",
        displayName: n.displayName || null,
        email: n.email || null,
        phoneNumber: n.phoneNumber || null,
        photoURL: n.photoUrl || null,
      };
    });
  }
  class Uu {
    constructor() {
      (this.refreshToken = null),
        (this.accessToken = null),
        (this.expirationTime = null);
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
    }
    updateFromServerResponse(e) {
      iu(e.idToken, "internal-error"),
        iu("undefined" !== typeof e.idToken, "internal-error"),
        iu("undefined" !== typeof e.refreshToken, "internal-error");
      const t =
        "expiresIn" in e && "undefined" !== typeof e.expiresIn
          ? Number(e.expiresIn)
          : xu(e.idToken);
      this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
    }
    updateFromIdToken(e) {
      iu(0 !== e.length, "internal-error");
      const t = xu(e);
      this.updateTokensAndExpiration(e, null, t);
    }
    async getToken(e) {
      return (arguments.length > 1 &&
        void 0 !== arguments[1] &&
        arguments[1]) ||
        !this.accessToken ||
        this.isExpired
        ? (iu(this.refreshToken, e, "user-token-expired"),
          this.refreshToken
            ? (await this.refresh(e, this.refreshToken), this.accessToken)
            : null)
        : this.accessToken;
    }
    clearRefreshToken() {
      this.refreshToken = null;
    }
    async refresh(e, t) {
      const {
        accessToken: n,
        refreshToken: r,
        expiresIn: i,
      } = await (async function (e, t) {
        const n = await _u(e, {}, async () => {
          const n = ft({ grant_type: "refresh_token", refresh_token: t }).slice(
              1
            ),
            { tokenApiHost: r, apiKey: i } = e.config,
            o = bu(e, r, "/v1/token", "key=".concat(i)),
            s = await e._getAdditionalHeaders();
          return (
            (s["Content-Type"] = "application/x-www-form-urlencoded"),
            fu.fetch()(o, { method: "POST", headers: s, body: n })
          );
        });
        return {
          accessToken: n.access_token,
          expiresIn: n.expires_in,
          refreshToken: n.refresh_token,
        };
      })(e, t);
      this.updateTokensAndExpiration(n, r, Number(i));
    }
    updateTokensAndExpiration(e, t, n) {
      (this.refreshToken = t || null),
        (this.accessToken = e || null),
        (this.expirationTime = Date.now() + 1e3 * n);
    }
    static fromJSON(e, t) {
      const { refreshToken: n, accessToken: r, expirationTime: i } = t,
        o = new Uu();
      return (
        n &&
          (iu("string" === typeof n, "internal-error", { appName: e }),
          (o.refreshToken = n)),
        r &&
          (iu("string" === typeof r, "internal-error", { appName: e }),
          (o.accessToken = r)),
        i &&
          (iu("number" === typeof i, "internal-error", { appName: e }),
          (o.expirationTime = i)),
        o
      );
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime,
      };
    }
    _assign(e) {
      (this.accessToken = e.accessToken),
        (this.refreshToken = e.refreshToken),
        (this.expirationTime = e.expirationTime);
    }
    _clone() {
      return Object.assign(new Uu(), this.toJSON());
    }
    _performRefresh() {
      return ou("not implemented");
    }
  }
  function Fu(e, t) {
    iu("string" === typeof e || "undefined" === typeof e, "internal-error", {
      appName: t,
    });
  }
  class ju {
    constructor(e) {
      var { uid: t, auth: n, stsTokenManager: r } = e,
        i = $c(e, ["uid", "auth", "stsTokenManager"]);
      (this.providerId = "firebase"),
        (this.proactiveRefresh = new Au(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = t),
        (this.auth = n),
        (this.stsTokenManager = r),
        (this.accessToken = r.accessToken),
        (this.displayName = i.displayName || null),
        (this.email = i.email || null),
        (this.emailVerified = i.emailVerified || !1),
        (this.phoneNumber = i.phoneNumber || null),
        (this.photoURL = i.photoURL || null),
        (this.isAnonymous = i.isAnonymous || !1),
        (this.tenantId = i.tenantId || null),
        (this.providerData = i.providerData ? [...i.providerData] : []),
        (this.metadata = new Du(
          i.createdAt || void 0,
          i.lastLoginAt || void 0
        ));
    }
    async getIdToken(e) {
      const t = await Ou(this, this.stsTokenManager.getToken(this.auth, e));
      return (
        iu(t, this.auth, "internal-error"),
        this.accessToken !== t &&
          ((this.accessToken = t),
          await this.auth._persistUserIfCurrent(this),
          this.auth._notifyListenersIfCurrent(this)),
        t
      );
    }
    getIdTokenResult(e) {
      return (async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = wt(e),
          r = await n.getIdToken(t),
          i = Ru(r);
        iu(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
        const o = "object" === typeof i.firebase ? i.firebase : void 0,
          s = null === o || void 0 === o ? void 0 : o.sign_in_provider;
        return {
          claims: i,
          token: r,
          authTime: Nu(Pu(i.auth_time)),
          issuedAtTime: Nu(Pu(i.iat)),
          expirationTime: Nu(Pu(i.exp)),
          signInProvider: s || null,
          signInSecondFactor:
            (null === o || void 0 === o ? void 0 : o.sign_in_second_factor) ||
            null,
        };
      })(this, e);
    }
    reload() {
      return (async function (e) {
        const t = wt(e);
        await Lu(t),
          await t.auth._persistUserIfCurrent(t),
          t.auth._notifyListenersIfCurrent(t);
      })(this);
    }
    _assign(e) {
      this !== e &&
        (iu(this.uid === e.uid, this.auth, "internal-error"),
        (this.displayName = e.displayName),
        (this.photoURL = e.photoURL),
        (this.email = e.email),
        (this.emailVerified = e.emailVerified),
        (this.phoneNumber = e.phoneNumber),
        (this.isAnonymous = e.isAnonymous),
        (this.tenantId = e.tenantId),
        (this.providerData = e.providerData.map((e) => Object.assign({}, e))),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager));
    }
    _clone(e) {
      const t = new ju(
        Object.assign(Object.assign({}, this), {
          auth: e,
          stsTokenManager: this.stsTokenManager._clone(),
        })
      );
      return t.metadata._copy(this.metadata), t;
    }
    _onReload(e) {
      iu(!this.reloadListener, this.auth, "internal-error"),
        (this.reloadListener = e),
        this.reloadUserInfo &&
          (this._notifyReloadListener(this.reloadUserInfo),
          (this.reloadUserInfo = null));
    }
    _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
      e.idToken &&
        e.idToken !== this.stsTokenManager.accessToken &&
        (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
        t && (await Lu(this)),
        await this.auth._persistUserIfCurrent(this),
        n && this.auth._notifyListenersIfCurrent(this);
    }
    async delete() {
      if (Dn(this.auth.app)) return Promise.reject(nu(this.auth));
      const e = await this.getIdToken();
      return (
        await Ou(
          this,
          (async function (e, t) {
            return vu(e, "POST", "/v1/accounts:delete", t);
          })(this.auth, { idToken: e })
        ),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
      );
    }
    toJSON() {
      return Object.assign(
        Object.assign(
          {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((e) => Object.assign({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
          },
          this.metadata.toJSON()
        ),
        { apiKey: this.auth.config.apiKey, appName: this.auth.name }
      );
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || "";
    }
    static _fromJSON(e, t) {
      var n, r, i, o, s, a, l, c;
      const u = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
        d = null !== (r = t.email) && void 0 !== r ? r : void 0,
        h = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0,
        f = null !== (o = t.photoURL) && void 0 !== o ? o : void 0,
        p = null !== (s = t.tenantId) && void 0 !== s ? s : void 0,
        m = null !== (a = t._redirectEventId) && void 0 !== a ? a : void 0,
        g = null !== (l = t.createdAt) && void 0 !== l ? l : void 0,
        v = null !== (c = t.lastLoginAt) && void 0 !== c ? c : void 0,
        {
          uid: _,
          emailVerified: y,
          isAnonymous: b,
          providerData: w,
          stsTokenManager: k,
        } = t;
      iu(_ && k, e, "internal-error");
      const C = Uu.fromJSON(this.name, k);
      iu("string" === typeof _, e, "internal-error"),
        Fu(u, e.name),
        Fu(d, e.name),
        iu("boolean" === typeof y, e, "internal-error"),
        iu("boolean" === typeof b, e, "internal-error"),
        Fu(h, e.name),
        Fu(f, e.name),
        Fu(p, e.name),
        Fu(m, e.name),
        Fu(g, e.name),
        Fu(v, e.name);
      const S = new ju({
        uid: _,
        auth: e,
        email: d,
        emailVerified: y,
        displayName: u,
        isAnonymous: b,
        photoURL: f,
        phoneNumber: h,
        tenantId: p,
        stsTokenManager: C,
        createdAt: g,
        lastLoginAt: v,
      });
      return (
        w &&
          Array.isArray(w) &&
          (S.providerData = w.map((e) => Object.assign({}, e))),
        m && (S._redirectEventId = m),
        S
      );
    }
    static async _fromIdTokenResponse(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const r = new Uu();
      r.updateFromServerResponse(t);
      const i = new ju({
        uid: t.localId,
        auth: e,
        stsTokenManager: r,
        isAnonymous: n,
      });
      return await Lu(i), i;
    }
    static async _fromGetAccountInfoResponse(e, t, n) {
      const r = t.users[0];
      iu(void 0 !== r.localId, "internal-error");
      const i = void 0 !== r.providerUserInfo ? Mu(r.providerUserInfo) : [],
        o =
          !(r.email && r.passwordHash) &&
          !(null === i || void 0 === i ? void 0 : i.length),
        s = new Uu();
      s.updateFromIdToken(n);
      const a = new ju({
          uid: r.localId,
          auth: e,
          stsTokenManager: s,
          isAnonymous: o,
        }),
        l = {
          uid: r.localId,
          displayName: r.displayName || null,
          photoURL: r.photoUrl || null,
          email: r.email || null,
          emailVerified: r.emailVerified || !1,
          phoneNumber: r.phoneNumber || null,
          tenantId: r.tenantId || null,
          providerData: i,
          metadata: new Du(r.createdAt, r.lastLoginAt),
          isAnonymous:
            !(r.email && r.passwordHash) &&
            !(null === i || void 0 === i ? void 0 : i.length),
        };
      return Object.assign(a, l), a;
    }
  }
  const zu = new Map();
  function Wu(e) {
    su(e instanceof Function, "Expected a class definition");
    let t = zu.get(e);
    return t
      ? (su(t instanceof e, "Instance stored in cache mismatched with class"),
        t)
      : ((t = new e()), zu.set(e, t), t);
  }
  class Vu {
    constructor() {
      (this.type = "NONE"), (this.storage = {});
    }
    async _isAvailable() {
      return !0;
    }
    async _set(e, t) {
      this.storage[e] = t;
    }
    async _get(e) {
      const t = this.storage[e];
      return void 0 === t ? null : t;
    }
    async _remove(e) {
      delete this.storage[e];
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  Vu.type = "NONE";
  const Bu = Vu;
  function qu(e, t, n) {
    return "firebase".concat(":", e, ":").concat(t, ":").concat(n);
  }
  class Hu {
    constructor(e, t, n) {
      (this.persistence = e), (this.auth = t), (this.userKey = n);
      const { config: r, name: i } = this.auth;
      (this.fullUserKey = qu(this.userKey, r.apiKey, i)),
        (this.fullPersistenceKey = qu("persistence", r.apiKey, i)),
        (this.boundEventHandler = t._onStorageEvent.bind(t)),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(e) {
      return this.persistence._set(this.fullUserKey, e.toJSON());
    }
    async getCurrentUser() {
      const e = await this.persistence._get(this.fullUserKey);
      return e ? ju._fromJSON(this.auth, e) : null;
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
      return this.persistence._set(
        this.fullPersistenceKey,
        this.persistence.type
      );
    }
    async setPersistence(e) {
      if (this.persistence === e) return;
      const t = await this.getCurrentUser();
      return (
        await this.removeCurrentUser(),
        (this.persistence = e),
        t ? this.setCurrentUser(t) : void 0
      );
    }
    delete() {
      this.persistence._removeListener(
        this.fullUserKey,
        this.boundEventHandler
      );
    }
    static async create(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "authUser";
      if (!t.length) return new Hu(Wu(Bu), e, n);
      const r = (
        await Promise.all(
          t.map(async (e) => {
            if (await e._isAvailable()) return e;
          })
        )
      ).filter((e) => e);
      let i = r[0] || Wu(Bu);
      const o = qu(n, e.config.apiKey, e.name);
      let s = null;
      for (const c of t)
        try {
          const t = await c._get(o);
          if (t) {
            const n = ju._fromJSON(e, t);
            c !== i && (s = n), (i = c);
            break;
          }
        } catch (l) {}
      const a = r.filter((e) => e._shouldAllowMigration);
      return i._shouldAllowMigration && a.length
        ? ((i = a[0]),
          s && (await i._set(o, s.toJSON())),
          await Promise.all(
            t.map(async (e) => {
              if (e !== i)
                try {
                  await e._remove(o);
                } catch (l) {}
            })
          ),
          new Hu(i, e, n))
        : new Hu(i, e, n);
    }
  }
  function Ku(e) {
    const t = e.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
      return "Opera";
    if (Qu(t)) return "IEMobile";
    if (t.includes("msie") || t.includes("trident/")) return "IE";
    if (t.includes("edge/")) return "Edge";
    if ($u(t)) return "Firefox";
    if (t.includes("silk/")) return "Silk";
    if (Xu(t)) return "Blackberry";
    if (Zu(t)) return "Webos";
    if (Gu(t)) return "Safari";
    if ((t.includes("chrome/") || Yu(t)) && !t.includes("edge/"))
      return "Chrome";
    if (Ju(t)) return "Android";
    {
      const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
        n = e.match(t);
      if (2 === (null === n || void 0 === n ? void 0 : n.length)) return n[1];
    }
    return "Other";
  }
  function $u() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je();
    return /firefox\//i.test(e);
  }
  function Gu() {
    const e = (
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je()
    ).toLowerCase();
    return (
      e.includes("safari/") &&
      !e.includes("chrome/") &&
      !e.includes("crios/") &&
      !e.includes("android")
    );
  }
  function Yu() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je();
    return /crios\//i.test(e);
  }
  function Qu() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je();
    return /iemobile/i.test(e);
  }
  function Ju() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je();
    return /android/i.test(e);
  }
  function Xu() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je();
    return /blackberry/i.test(e);
  }
  function Zu() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je();
    return /webos/i.test(e);
  }
  function ed() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je();
    return (
      /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
    );
  }
  function td() {
    return (
      (function () {
        const e = Je();
        return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
      })() && 10 === document.documentMode
    );
  }
  function nd() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je();
    return (
      ed(e) || Ju(e) || Zu(e) || Xu(e) || /windows phone/i.test(e) || Qu(e)
    );
  }
  function rd(e) {
    let t,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    switch (e) {
      case "Browser":
        t = Ku(Je());
        break;
      case "Worker":
        t = "".concat(Ku(Je()), "-").concat(e);
        break;
      default:
        t = e;
    }
    const r = n.length ? n.join(",") : "FirebaseCore-web";
    return "".concat(t, "/", "JsCore", "/").concat(Un, "/").concat(r);
  }
  class id {
    constructor(e) {
      (this.auth = e), (this.queue = []);
    }
    pushCallback(e, t) {
      const n = (t) =>
        new Promise((n, r) => {
          try {
            n(e(t));
          } catch (Sf) {
            r(Sf);
          }
        });
      (n.onAbort = t), this.queue.push(n);
      const r = this.queue.length - 1;
      return () => {
        this.queue[r] = () => Promise.resolve();
      };
    }
    async runMiddleware(e) {
      if (this.auth.currentUser === e) return;
      const t = [];
      try {
        for (const n of this.queue) await n(e), n.onAbort && t.push(n.onAbort);
      } catch (Sf) {
        t.reverse();
        for (const r of t)
          try {
            r();
          } catch (n) {}
        throw this.auth._errorFactory.create("login-blocked", {
          originalMessage: null === Sf || void 0 === Sf ? void 0 : Sf.message,
        });
      }
    }
  }
  class od {
    constructor(e) {
      var t, n, r, i;
      const o = e.customStrengthOptions;
      (this.customStrengthOptions = {}),
        (this.customStrengthOptions.minPasswordLength =
          null !== (t = o.minPasswordLength) && void 0 !== t ? t : 6),
        o.maxPasswordLength &&
          (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
        void 0 !== o.containsLowercaseCharacter &&
          (this.customStrengthOptions.containsLowercaseLetter =
            o.containsLowercaseCharacter),
        void 0 !== o.containsUppercaseCharacter &&
          (this.customStrengthOptions.containsUppercaseLetter =
            o.containsUppercaseCharacter),
        void 0 !== o.containsNumericCharacter &&
          (this.customStrengthOptions.containsNumericCharacter =
            o.containsNumericCharacter),
        void 0 !== o.containsNonAlphanumericCharacter &&
          (this.customStrengthOptions.containsNonAlphanumericCharacter =
            o.containsNonAlphanumericCharacter),
        (this.enforcementState = e.enforcementState),
        "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState &&
          (this.enforcementState = "OFF"),
        (this.allowedNonAlphanumericCharacters =
          null !==
            (r =
              null === (n = e.allowedNonAlphanumericCharacters) || void 0 === n
                ? void 0
                : n.join("")) && void 0 !== r
            ? r
            : ""),
        (this.forceUpgradeOnSignin =
          null !== (i = e.forceUpgradeOnSignin) && void 0 !== i && i),
        (this.schemaVersion = e.schemaVersion);
    }
    validatePassword(e) {
      var t, n, r, i, o, s;
      const a = { isValid: !0, passwordPolicy: this };
      return (
        this.validatePasswordLengthOptions(e, a),
        this.validatePasswordCharacterOptions(e, a),
        a.isValid &&
          (a.isValid =
            null === (t = a.meetsMinPasswordLength) || void 0 === t || t),
        a.isValid &&
          (a.isValid =
            null === (n = a.meetsMaxPasswordLength) || void 0 === n || n),
        a.isValid &&
          (a.isValid =
            null === (r = a.containsLowercaseLetter) || void 0 === r || r),
        a.isValid &&
          (a.isValid =
            null === (i = a.containsUppercaseLetter) || void 0 === i || i),
        a.isValid &&
          (a.isValid =
            null === (o = a.containsNumericCharacter) || void 0 === o || o),
        a.isValid &&
          (a.isValid =
            null === (s = a.containsNonAlphanumericCharacter) ||
            void 0 === s ||
            s),
        a
      );
    }
    validatePasswordLengthOptions(e, t) {
      const n = this.customStrengthOptions.minPasswordLength,
        r = this.customStrengthOptions.maxPasswordLength;
      n && (t.meetsMinPasswordLength = e.length >= n),
        r && (t.meetsMaxPasswordLength = e.length <= r);
    }
    validatePasswordCharacterOptions(e, t) {
      let n;
      this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
      for (let r = 0; r < e.length; r++)
        (n = e.charAt(r)),
          this.updatePasswordCharacterOptionsStatuses(
            t,
            n >= "a" && n <= "z",
            n >= "A" && n <= "Z",
            n >= "0" && n <= "9",
            this.allowedNonAlphanumericCharacters.includes(n)
          );
    }
    updatePasswordCharacterOptionsStatuses(e, t, n, r, i) {
      this.customStrengthOptions.containsLowercaseLetter &&
        (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
        this.customStrengthOptions.containsUppercaseLetter &&
          (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)),
        this.customStrengthOptions.containsNumericCharacter &&
          (e.containsNumericCharacter || (e.containsNumericCharacter = r)),
        this.customStrengthOptions.containsNonAlphanumericCharacter &&
          (e.containsNonAlphanumericCharacter ||
            (e.containsNonAlphanumericCharacter = i));
    }
  }
  class sd {
    constructor(e, t, n, r) {
      (this.app = e),
        (this.heartbeatServiceProvider = t),
        (this.appCheckServiceProvider = n),
        (this.config = r),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new ld(this)),
        (this.idTokenSubscription = new ld(this)),
        (this.beforeStateQueue = new id(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = Qc),
        (this._agentRecaptchaConfig = null),
        (this._tenantRecaptchaConfigs = {}),
        (this._projectPasswordPolicy = null),
        (this._tenantPasswordPolicies = {}),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = e.name),
        (this.clientVersion = r.sdkClientVersion);
    }
    _initializeWithPersistence(e, t) {
      return (
        t && (this._popupRedirectResolver = Wu(t)),
        (this._initializationPromise = this.queue(async () => {
          var n, r;
          if (
            !this._deleted &&
            ((this.persistenceManager = await Hu.create(this, e)),
            !this._deleted)
          ) {
            if (
              null === (n = this._popupRedirectResolver) || void 0 === n
                ? void 0
                : n._shouldInitProactively
            )
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch (Sf) {}
            await this.initializeCurrentUser(t),
              (this.lastNotifiedUid =
                (null === (r = this.currentUser) || void 0 === r
                  ? void 0
                  : r.uid) || null),
              this._deleted || (this._isInitialized = !0);
          }
        })),
        this._initializationPromise
      );
    }
    async _onStorageEvent() {
      if (this._deleted) return;
      const e = await this.assertedPersistence.getCurrentUser();
      return this.currentUser || e
        ? this.currentUser && e && this.currentUser.uid === e.uid
          ? (this._currentUser._assign(e),
            void (await this.currentUser.getIdToken()))
          : void (await this._updateCurrentUser(e, !0))
        : void 0;
    }
    async initializeCurrentUserFromIdToken(e) {
      try {
        const t = await Tu(this, { idToken: e }),
          n = await ju._fromGetAccountInfoResponse(this, t, e);
        await this.directlySetCurrentUser(n);
      } catch (t) {
        console.warn(
          "FirebaseServerApp could not login user with provided authIdToken: ",
          t
        ),
          await this.directlySetCurrentUser(null);
      }
    }
    async initializeCurrentUser(e) {
      var t;
      if (Dn(this.app)) {
        const e = this.app.settings.authIdToken;
        return e
          ? new Promise((t) => {
              setTimeout(() =>
                this.initializeCurrentUserFromIdToken(e).then(t, t)
              );
            })
          : this.directlySetCurrentUser(null);
      }
      const n = await this.assertedPersistence.getCurrentUser();
      let r = n,
        i = !1;
      if (e && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager();
        const n =
            null === (t = this.redirectUser) || void 0 === t
              ? void 0
              : t._redirectEventId,
          o = null === r || void 0 === r ? void 0 : r._redirectEventId,
          s = await this.tryRedirectSignIn(e);
        (n && n !== o) ||
          !(null === s || void 0 === s ? void 0 : s.user) ||
          ((r = s.user), (i = !0));
      }
      if (!r) return this.directlySetCurrentUser(null);
      if (!r._redirectEventId) {
        if (i)
          try {
            await this.beforeStateQueue.runMiddleware(r);
          } catch (Sf) {
            (r = n),
              this._popupRedirectResolver._overrideRedirectResult(this, () =>
                Promise.reject(Sf)
              );
          }
        return r
          ? this.reloadAndSetCurrentUserOrClear(r)
          : this.directlySetCurrentUser(null);
      }
      return (
        iu(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser &&
        this.redirectUser._redirectEventId === r._redirectEventId
          ? this.directlySetCurrentUser(r)
          : this.reloadAndSetCurrentUserOrClear(r)
      );
    }
    async tryRedirectSignIn(e) {
      let t = null;
      try {
        t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
      } catch (Sf) {
        await this._setRedirectUser(null);
      }
      return t;
    }
    async reloadAndSetCurrentUserOrClear(e) {
      try {
        await Lu(e);
      } catch (Sf) {
        if (
          (null === Sf || void 0 === Sf ? void 0 : Sf.code) !==
          "auth/".concat("network-request-failed")
        )
          return this.directlySetCurrentUser(null);
      }
      return this.directlySetCurrentUser(e);
    }
    useDeviceLanguage() {
      this.languageCode = (function () {
        if ("undefined" === typeof navigator) return null;
        const e = navigator;
        return (e.languages && e.languages[0]) || e.language || null;
      })();
    }
    async _delete() {
      this._deleted = !0;
    }
    async updateCurrentUser(e) {
      if (Dn(this.app)) return Promise.reject(nu(this));
      const t = e ? wt(e) : null;
      return (
        t &&
          iu(
            t.auth.config.apiKey === this.config.apiKey,
            this,
            "invalid-user-token"
          ),
        this._updateCurrentUser(t && t._clone(this))
      );
    }
    async _updateCurrentUser(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!this._deleted)
        return (
          e && iu(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
          t || (await this.beforeStateQueue.runMiddleware(e)),
          this.queue(async () => {
            await this.directlySetCurrentUser(e), this.notifyAuthListeners();
          })
        );
    }
    async signOut() {
      return Dn(this.app)
        ? Promise.reject(nu(this))
        : (await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this._popupRedirectResolver) &&
            (await this._setRedirectUser(null)),
          this._updateCurrentUser(null, !0));
    }
    setPersistence(e) {
      return Dn(this.app)
        ? Promise.reject(nu(this))
        : this.queue(async () => {
            await this.assertedPersistence.setPersistence(Wu(e));
          });
    }
    _getRecaptchaConfig() {
      return null == this.tenantId
        ? this._agentRecaptchaConfig
        : this._tenantRecaptchaConfigs[this.tenantId];
    }
    async validatePassword(e) {
      this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
      const t = this._getPasswordPolicyInternal();
      return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
        ? Promise.reject(
            this._errorFactory.create(
              "unsupported-password-policy-schema-version",
              {}
            )
          )
        : t.validatePassword(e);
    }
    _getPasswordPolicyInternal() {
      return null === this.tenantId
        ? this._projectPasswordPolicy
        : this._tenantPasswordPolicies[this.tenantId];
    }
    async _updatePasswordPolicy() {
      const e = await (async function (e) {
          return vu(
            e,
            "GET",
            "/v2/passwordPolicy",
            gu(
              e,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            )
          );
        })(this),
        t = new od(e);
      null === this.tenantId
        ? (this._projectPasswordPolicy = t)
        : (this._tenantPasswordPolicies[this.tenantId] = t);
    }
    _getPersistence() {
      return this.assertedPersistence.persistence.type;
    }
    _updateErrorMap(e) {
      this._errorFactory = new nt("auth", "Firebase", e());
    }
    onAuthStateChanged(e, t, n) {
      return this.registerStateListener(this.authStateSubscription, e, t, n);
    }
    beforeAuthStateChanged(e, t) {
      return this.beforeStateQueue.pushCallback(e, t);
    }
    onIdTokenChanged(e, t, n) {
      return this.registerStateListener(this.idTokenSubscription, e, t, n);
    }
    authStateReady() {
      return new Promise((e, t) => {
        if (this.currentUser) e();
        else {
          const n = this.onAuthStateChanged(() => {
            n(), e();
          }, t);
        }
      });
    }
    async revokeAccessToken(e) {
      if (this.currentUser) {
        const t = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: e,
          idToken: await this.currentUser.getIdToken(),
        };
        null != this.tenantId && (t.tenantId = this.tenantId),
          await (async function (e, t) {
            return vu(e, "POST", "/v2/accounts:revokeToken", gu(e, t));
          })(this, t);
      }
    }
    toJSON() {
      var e;
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser:
          null === (e = this._currentUser) || void 0 === e
            ? void 0
            : e.toJSON(),
      };
    }
    async _setRedirectUser(e, t) {
      const n = await this.getOrInitRedirectPersistenceManager(t);
      return null === e ? n.removeCurrentUser() : n.setCurrentUser(e);
    }
    async getOrInitRedirectPersistenceManager(e) {
      if (!this.redirectPersistenceManager) {
        const t = (e && Wu(e)) || this._popupRedirectResolver;
        iu(t, this, "argument-error"),
          (this.redirectPersistenceManager = await Hu.create(
            this,
            [Wu(t._redirectPersistence)],
            "redirectUser"
          )),
          (this.redirectUser =
            await this.redirectPersistenceManager.getCurrentUser());
      }
      return this.redirectPersistenceManager;
    }
    async _redirectUserForId(e) {
      var t, n;
      return (
        this._isInitialized && (await this.queue(async () => {})),
        (null === (t = this._currentUser) || void 0 === t
          ? void 0
          : t._redirectEventId) === e
          ? this._currentUser
          : (null === (n = this.redirectUser) || void 0 === n
              ? void 0
              : n._redirectEventId) === e
          ? this.redirectUser
          : null
      );
    }
    async _persistUserIfCurrent(e) {
      if (e === this.currentUser)
        return this.queue(async () => this.directlySetCurrentUser(e));
    }
    _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners();
    }
    _key() {
      return ""
        .concat(this.config.authDomain, ":")
        .concat(this.config.apiKey, ":")
        .concat(this.name);
    }
    _startProactiveRefresh() {
      (this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh();
    }
    _stopProactiveRefresh() {
      (this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh();
    }
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      var e, t;
      if (!this._isInitialized) return;
      this.idTokenSubscription.next(this.currentUser);
      const n =
        null !==
          (t =
            null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) &&
        void 0 !== t
          ? t
          : null;
      this.lastNotifiedUid !== n &&
        ((this.lastNotifiedUid = n),
        this.authStateSubscription.next(this.currentUser));
    }
    registerStateListener(e, t, n, r) {
      if (this._deleted) return () => {};
      const i = "function" === typeof t ? t : t.next.bind(t);
      let o = !1;
      const s = this._isInitialized
        ? Promise.resolve()
        : this._initializationPromise;
      if (
        (iu(s, this, "internal-error"),
        s.then(() => {
          o || i(this.currentUser);
        }),
        "function" === typeof t)
      ) {
        const i = e.addObserver(t, n, r);
        return () => {
          (o = !0), i();
        };
      }
      {
        const n = e.addObserver(t);
        return () => {
          (o = !0), n();
        };
      }
    }
    async directlySetCurrentUser(e) {
      this.currentUser &&
        this.currentUser !== e &&
        this._currentUser._stopProactiveRefresh(),
        e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
        (this.currentUser = e),
        e
          ? await this.assertedPersistence.setCurrentUser(e)
          : await this.assertedPersistence.removeCurrentUser();
    }
    queue(e) {
      return (this.operations = this.operations.then(e, e)), this.operations;
    }
    get assertedPersistence() {
      return (
        iu(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
      );
    }
    _logFramework(e) {
      e &&
        !this.frameworks.includes(e) &&
        (this.frameworks.push(e),
        this.frameworks.sort(),
        (this.clientVersion = rd(
          this.config.clientPlatform,
          this._getFrameworks()
        )));
    }
    _getFrameworks() {
      return this.frameworks;
    }
    async _getAdditionalHeaders() {
      var e;
      const t = { "X-Client-Version": this.clientVersion };
      this.app.options.appId &&
        (t["X-Firebase-gmpid"] = this.app.options.appId);
      const n = await (null ===
        (e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) ||
      void 0 === e
        ? void 0
        : e.getHeartbeatsHeader());
      n && (t["X-Firebase-Client"] = n);
      const r = await this._getAppCheckToken();
      return r && (t["X-Firebase-AppCheck"] = r), t;
    }
    async _getAppCheckToken() {
      var e;
      const t = await (null ===
        (e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) ||
      void 0 === e
        ? void 0
        : e.getToken());
      return (
        (null === t || void 0 === t ? void 0 : t.error) &&
          (function (e) {
            if (Jc.logLevel <= Tt.WARN) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              Jc.warn("Auth (".concat(Un, "): ").concat(e), ...n);
            }
          })("Error while retrieving App Check token: ".concat(t.error)),
        null === t || void 0 === t ? void 0 : t.token
      );
    }
  }
  function ad(e) {
    return wt(e);
  }
  class ld {
    constructor(e) {
      (this.auth = e),
        (this.observer = null),
        (this.addObserver = (function (e, t) {
          const n = new vt(e, t);
          return n.subscribe.bind(n);
        })((e) => (this.observer = e)));
    }
    get next() {
      return (
        iu(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
      );
    }
  }
  let cd = {
    async loadJS() {
      throw new Error("Unable to load external scripts");
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: "",
  };
  function ud(e) {
    return cd.loadJS(e);
  }
  function dd(e) {
    return "__".concat(e).concat(Math.floor(1e6 * Math.random()));
  }
  class hd {
    constructor(e) {
      (this.type = "recaptcha-enterprise"), (this.auth = ad(e));
    }
    async verify() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "verify",
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      function n(t, n, r) {
        const i = window.grecaptcha;
        Su(i)
          ? i.enterprise.ready(() => {
              i.enterprise
                .execute(t, { action: e })
                .then((e) => {
                  n(e);
                })
                .catch(() => {
                  n("NO_RECAPTCHA");
                });
            })
          : r(Error("No reCAPTCHA enterprise script loaded."));
      }
      return new Promise((e, r) => {
        (async function (e) {
          if (!t) {
            if (null == e.tenantId && null != e._agentRecaptchaConfig)
              return e._agentRecaptchaConfig.siteKey;
            if (
              null != e.tenantId &&
              void 0 !== e._tenantRecaptchaConfigs[e.tenantId]
            )
              return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
          }
          return new Promise(async (t, n) => {
            Iu(e, {
              clientType: "CLIENT_TYPE_WEB",
              version: "RECAPTCHA_ENTERPRISE",
            })
              .then((r) => {
                if (void 0 !== r.recaptchaKey) {
                  const n = new Eu(r);
                  return (
                    null == e.tenantId
                      ? (e._agentRecaptchaConfig = n)
                      : (e._tenantRecaptchaConfigs[e.tenantId] = n),
                    t(n.siteKey)
                  );
                }
                n(new Error("recaptcha Enterprise site key undefined"));
              })
              .catch((e) => {
                n(e);
              });
          });
        })(this.auth)
          .then((i) => {
            if (!t && Su(window.grecaptcha)) n(i, e, r);
            else {
              if ("undefined" === typeof window)
                return void r(
                  new Error("RecaptchaVerifier is only supported in browser")
                );
              let t = cd.recaptchaEnterpriseScript;
              0 !== t.length && (t += i),
                ud(t)
                  .then(() => {
                    n(i, e, r);
                  })
                  .catch((e) => {
                    r(e);
                  });
            }
          })
          .catch((e) => {
            r(e);
          });
      });
    }
  }
  async function fd(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    const i = new hd(e);
    let o;
    try {
      o = await i.verify(n);
    } catch (vr) {
      o = await i.verify(n, !0);
    }
    const s = Object.assign({}, t);
    return (
      r
        ? Object.assign(s, { captchaResp: o })
        : Object.assign(s, { captchaResponse: o }),
      Object.assign(s, { clientType: "CLIENT_TYPE_WEB" }),
      Object.assign(s, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
      s
    );
  }
  async function pd(e, t, n, r) {
    var i;
    if (
      null === (i = e._getRecaptchaConfig()) || void 0 === i
        ? void 0
        : i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
    ) {
      const i = await fd(e, t, n, "getOobCode" === n);
      return r(e, i);
    }
    return r(e, t).catch(async (i) => {
      if (i.code === "auth/".concat("missing-recaptcha-token")) {
        console.log(
          "".concat(
            n,
            " is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow."
          )
        );
        const i = await fd(e, t, n, "getOobCode" === n);
        return r(e, i);
      }
      return Promise.reject(i);
    });
  }
  function md(e, t, n) {
    const r = ad(e);
    iu(r._canInitEmulator, r, "emulator-config-failed"),
      iu(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
    const i = !!(null === n || void 0 === n ? void 0 : n.disableWarnings),
      o = gd(t),
      { host: s, port: a } = (function (e) {
        const t = gd(e),
          n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
        if (!n) return { host: "", port: null };
        const r = n[2].split("@").pop() || "",
          i = /^(\[[^\]]+\])(:|$)/.exec(r);
        if (i) {
          const e = i[1];
          return { host: e, port: vd(r.substr(e.length + 1)) };
        }
        {
          const [e, t] = r.split(":");
          return { host: e, port: vd(t) };
        }
      })(t),
      l = null === a ? "" : ":".concat(a);
    (r.config.emulator = { url: "".concat(o, "//").concat(s).concat(l, "/") }),
      (r.settings.appVerificationDisabledForTesting = !0),
      (r.emulatorConfig = Object.freeze({
        host: s,
        port: a,
        protocol: o.replace(":", ""),
        options: Object.freeze({ disableWarnings: i }),
      })),
      i ||
        (function () {
          function e() {
            const e = document.createElement("p"),
              t = e.style;
            (e.innerText =
              "Running in emulator mode. Do not use with production credentials."),
              (t.position = "fixed"),
              (t.width = "100%"),
              (t.backgroundColor = "#ffffff"),
              (t.border = ".1em solid #000000"),
              (t.color = "#b50000"),
              (t.bottom = "0px"),
              (t.left = "0px"),
              (t.margin = "0px"),
              (t.zIndex = "10000"),
              (t.textAlign = "center"),
              e.classList.add("firebase-emulator-warning"),
              document.body.appendChild(e);
          }
          "undefined" !== typeof console &&
            "function" === typeof console.info &&
            console.info(
              "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
            );
          "undefined" !== typeof window &&
            "undefined" !== typeof document &&
            ("loading" === document.readyState
              ? window.addEventListener("DOMContentLoaded", e)
              : e());
        })();
  }
  function gd(e) {
    const t = e.indexOf(":");
    return t < 0 ? "" : e.substr(0, t + 1);
  }
  function vd(e) {
    if (!e) return null;
    const t = Number(e);
    return isNaN(t) ? null : t;
  }
  class _d {
    constructor(e, t) {
      (this.providerId = e), (this.signInMethod = t);
    }
    toJSON() {
      return ou("not implemented");
    }
    _getIdTokenResponse(e) {
      return ou("not implemented");
    }
    _linkToIdToken(e, t) {
      return ou("not implemented");
    }
    _getReauthenticationResolver(e) {
      return ou("not implemented");
    }
  }
  async function yd(e, t) {
    return vu(e, "POST", "/v1/accounts:signUp", t);
  }
  async function bd(e, t) {
    return yu(e, "POST", "/v1/accounts:signInWithPassword", gu(e, t));
  }
  async function wd(e, t) {
    return vu(e, "POST", "/v1/accounts:sendOobCode", gu(e, t));
  }
  class kd extends _d {
    constructor(e, t, n) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      super("password", n),
        (this._email = e),
        (this._password = t),
        (this._tenantId = r);
    }
    static _fromEmailAndPassword(e, t) {
      return new kd(e, t, "password");
    }
    static _fromEmailAndCode(e, t) {
      return new kd(
        e,
        t,
        "emailLink",
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
      );
    }
    toJSON() {
      return {
        email: this._email,
        password: this._password,
        signInMethod: this.signInMethod,
        tenantId: this._tenantId,
      };
    }
    static fromJSON(e) {
      const t = "string" === typeof e ? JSON.parse(e) : e;
      if (
        (null === t || void 0 === t ? void 0 : t.email) &&
        (null === t || void 0 === t ? void 0 : t.password)
      ) {
        if ("password" === t.signInMethod)
          return this._fromEmailAndPassword(t.email, t.password);
        if ("emailLink" === t.signInMethod)
          return this._fromEmailAndCode(t.email, t.password, t.tenantId);
      }
      return null;
    }
    async _getIdTokenResponse(e) {
      switch (this.signInMethod) {
        case "password":
          return pd(
            e,
            {
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB",
            },
            "signInWithPassword",
            bd
          );
        case "emailLink":
          return (async function (e, t) {
            return yu(e, "POST", "/v1/accounts:signInWithEmailLink", gu(e, t));
          })(e, { email: this._email, oobCode: this._password });
        default:
          Zc(e, "internal-error");
      }
    }
    async _linkToIdToken(e, t) {
      switch (this.signInMethod) {
        case "password":
          return pd(
            e,
            {
              idToken: t,
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB",
            },
            "signUpPassword",
            yd
          );
        case "emailLink":
          return (async function (e, t) {
            return yu(e, "POST", "/v1/accounts:signInWithEmailLink", gu(e, t));
          })(e, { idToken: t, email: this._email, oobCode: this._password });
        default:
          Zc(e, "internal-error");
      }
    }
    _getReauthenticationResolver(e) {
      return this._getIdTokenResponse(e);
    }
  }
  async function Cd(e, t) {
    return yu(e, "POST", "/v1/accounts:signInWithIdp", gu(e, t));
  }
  class Sd extends _d {
    constructor() {
      super(...arguments), (this.pendingToken = null);
    }
    static _fromParams(e) {
      const t = new Sd(e.providerId, e.signInMethod);
      return (
        e.idToken || e.accessToken
          ? (e.idToken && (t.idToken = e.idToken),
            e.accessToken && (t.accessToken = e.accessToken),
            e.nonce && !e.pendingToken && (t.nonce = e.nonce),
            e.pendingToken && (t.pendingToken = e.pendingToken))
          : e.oauthToken && e.oauthTokenSecret
          ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
          : Zc("argument-error"),
        t
      );
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod,
      };
    }
    static fromJSON(e) {
      const t = "string" === typeof e ? JSON.parse(e) : e,
        { providerId: n, signInMethod: r } = t,
        i = $c(t, ["providerId", "signInMethod"]);
      if (!n || !r) return null;
      const o = new Sd(n, r);
      return (
        (o.idToken = i.idToken || void 0),
        (o.accessToken = i.accessToken || void 0),
        (o.secret = i.secret),
        (o.nonce = i.nonce),
        (o.pendingToken = i.pendingToken || null),
        o
      );
    }
    _getIdTokenResponse(e) {
      return Cd(e, this.buildRequest());
    }
    _linkToIdToken(e, t) {
      const n = this.buildRequest();
      return (n.idToken = t), Cd(e, n);
    }
    _getReauthenticationResolver(e) {
      const t = this.buildRequest();
      return (t.autoCreate = !1), Cd(e, t);
    }
    buildRequest() {
      const e = { requestUri: "http://localhost", returnSecureToken: !0 };
      if (this.pendingToken) e.pendingToken = this.pendingToken;
      else {
        const t = {};
        this.idToken && (t.id_token = this.idToken),
          this.accessToken && (t.access_token = this.accessToken),
          this.secret && (t.oauth_token_secret = this.secret),
          (t.providerId = this.providerId),
          this.nonce && !this.pendingToken && (t.nonce = this.nonce),
          (e.postBody = ft(t));
      }
      return e;
    }
  }
  const Ed = { USER_NOT_FOUND: "user-not-found" };
  class Id extends _d {
    constructor(e) {
      super("phone", "phone"), (this.params = e);
    }
    static _fromVerification(e, t) {
      return new Id({ verificationId: e, verificationCode: t });
    }
    static _fromTokenResponse(e, t) {
      return new Id({ phoneNumber: e, temporaryProof: t });
    }
    _getIdTokenResponse(e) {
      return (async function (e, t) {
        return yu(e, "POST", "/v1/accounts:signInWithPhoneNumber", gu(e, t));
      })(e, this._makeVerificationRequest());
    }
    _linkToIdToken(e, t) {
      return (async function (e, t) {
        const n = await yu(
          e,
          "POST",
          "/v1/accounts:signInWithPhoneNumber",
          gu(e, t)
        );
        if (n.temporaryProof)
          throw Cu(e, "account-exists-with-different-credential", n);
        return n;
      })(e, Object.assign({ idToken: t }, this._makeVerificationRequest()));
    }
    _getReauthenticationResolver(e) {
      return (async function (e, t) {
        return yu(
          e,
          "POST",
          "/v1/accounts:signInWithPhoneNumber",
          gu(e, Object.assign(Object.assign({}, t), { operation: "REAUTH" })),
          Ed
        );
      })(e, this._makeVerificationRequest());
    }
    _makeVerificationRequest() {
      const {
        temporaryProof: e,
        phoneNumber: t,
        verificationId: n,
        verificationCode: r,
      } = this.params;
      return e && t
        ? { temporaryProof: e, phoneNumber: t }
        : { sessionInfo: n, code: r };
    }
    toJSON() {
      const e = { providerId: this.providerId };
      return (
        this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
        this.params.temporaryProof &&
          (e.temporaryProof = this.params.temporaryProof),
        this.params.verificationCode &&
          (e.verificationCode = this.params.verificationCode),
        this.params.verificationId &&
          (e.verificationId = this.params.verificationId),
        e
      );
    }
    static fromJSON(e) {
      "string" === typeof e && (e = JSON.parse(e));
      const {
        verificationId: t,
        verificationCode: n,
        phoneNumber: r,
        temporaryProof: i,
      } = e;
      return n || t || r || i
        ? new Id({
            verificationId: t,
            verificationCode: n,
            phoneNumber: r,
            temporaryProof: i,
          })
        : null;
    }
  }
  class Td {
    constructor(e) {
      var t, n, r, i, o, s;
      const a = pt(mt(e)),
        l = null !== (t = a.apiKey) && void 0 !== t ? t : null,
        c = null !== (n = a.oobCode) && void 0 !== n ? n : null,
        u = (function (e) {
          switch (e) {
            case "recoverEmail":
              return "RECOVER_EMAIL";
            case "resetPassword":
              return "PASSWORD_RESET";
            case "signIn":
              return "EMAIL_SIGNIN";
            case "verifyEmail":
              return "VERIFY_EMAIL";
            case "verifyAndChangeEmail":
              return "VERIFY_AND_CHANGE_EMAIL";
            case "revertSecondFactorAddition":
              return "REVERT_SECOND_FACTOR_ADDITION";
            default:
              return null;
          }
        })(null !== (r = a.mode) && void 0 !== r ? r : null);
      iu(l && c && u, "argument-error"),
        (this.apiKey = l),
        (this.operation = u),
        (this.code = c),
        (this.continueUrl =
          null !== (i = a.continueUrl) && void 0 !== i ? i : null),
        (this.languageCode =
          null !== (o = a.languageCode) && void 0 !== o ? o : null),
        (this.tenantId = null !== (s = a.tenantId) && void 0 !== s ? s : null);
    }
    static parseLink(e) {
      const t = (function (e) {
        const t = pt(mt(e)).link,
          n = t ? pt(mt(t)).deep_link_id : null,
          r = pt(mt(e)).deep_link_id;
        return (r ? pt(mt(r)).link : null) || r || n || t || e;
      })(e);
      try {
        return new Td(t);
      } catch (n) {
        return null;
      }
    }
  }
  class Nd {
    constructor() {
      this.providerId = Nd.PROVIDER_ID;
    }
    static credential(e, t) {
      return kd._fromEmailAndPassword(e, t);
    }
    static credentialWithLink(e, t) {
      const n = Td.parseLink(t);
      return (
        iu(n, "argument-error"), kd._fromEmailAndCode(e, n.code, n.tenantId)
      );
    }
  }
  (Nd.PROVIDER_ID = "password"),
    (Nd.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
    (Nd.EMAIL_LINK_SIGN_IN_METHOD = "emailLink");
  class Pd {
    constructor(e) {
      (this.providerId = e),
        (this.defaultLanguageCode = null),
        (this.customParameters = {});
    }
    setDefaultLanguage(e) {
      this.defaultLanguageCode = e;
    }
    setCustomParameters(e) {
      return (this.customParameters = e), this;
    }
    getCustomParameters() {
      return this.customParameters;
    }
  }
  class Rd extends Pd {
    constructor() {
      super(...arguments), (this.scopes = []);
    }
    addScope(e) {
      return this.scopes.includes(e) || this.scopes.push(e), this;
    }
    getScopes() {
      return [...this.scopes];
    }
  }
  class xd extends Rd {
    constructor() {
      super("facebook.com");
    }
    static credential(e) {
      return Sd._fromParams({
        providerId: xd.PROVIDER_ID,
        signInMethod: xd.FACEBOOK_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return xd.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return xd.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t || !("oauthAccessToken" in t)) return null;
      if (!t.oauthAccessToken) return null;
      try {
        return xd.credential(t.oauthAccessToken);
      } catch (n) {
        return null;
      }
    }
  }
  (xd.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
    (xd.PROVIDER_ID = "facebook.com");
  class Od extends Rd {
    constructor() {
      super("google.com"), this.addScope("profile");
    }
    static credential(e, t) {
      return Sd._fromParams({
        providerId: Od.PROVIDER_ID,
        signInMethod: Od.GOOGLE_SIGN_IN_METHOD,
        idToken: e,
        accessToken: t,
      });
    }
    static credentialFromResult(e) {
      return Od.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Od.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { oauthIdToken: n, oauthAccessToken: r } = t;
      if (!n && !r) return null;
      try {
        return Od.credential(n, r);
      } catch (i) {
        return null;
      }
    }
  }
  (Od.GOOGLE_SIGN_IN_METHOD = "google.com"), (Od.PROVIDER_ID = "google.com");
  class Ad extends Rd {
    constructor() {
      super("github.com");
    }
    static credential(e) {
      return Sd._fromParams({
        providerId: Ad.PROVIDER_ID,
        signInMethod: Ad.GITHUB_SIGN_IN_METHOD,
        accessToken: e,
      });
    }
    static credentialFromResult(e) {
      return Ad.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Ad.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t || !("oauthAccessToken" in t)) return null;
      if (!t.oauthAccessToken) return null;
      try {
        return Ad.credential(t.oauthAccessToken);
      } catch (n) {
        return null;
      }
    }
  }
  (Ad.GITHUB_SIGN_IN_METHOD = "github.com"), (Ad.PROVIDER_ID = "github.com");
  class Dd extends Rd {
    constructor() {
      super("twitter.com");
    }
    static credential(e, t) {
      return Sd._fromParams({
        providerId: Dd.PROVIDER_ID,
        signInMethod: Dd.TWITTER_SIGN_IN_METHOD,
        oauthToken: e,
        oauthTokenSecret: t,
      });
    }
    static credentialFromResult(e) {
      return Dd.credentialFromTaggedObject(e);
    }
    static credentialFromError(e) {
      return Dd.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { oauthAccessToken: n, oauthTokenSecret: r } = t;
      if (!n || !r) return null;
      try {
        return Dd.credential(n, r);
      } catch (i) {
        return null;
      }
    }
  }
  async function Ld(e, t) {
    return yu(e, "POST", "/v1/accounts:signUp", gu(e, t));
  }
  (Dd.TWITTER_SIGN_IN_METHOD = "twitter.com"), (Dd.PROVIDER_ID = "twitter.com");
  class Md {
    constructor(e) {
      (this.user = e.user),
        (this.providerId = e.providerId),
        (this._tokenResponse = e._tokenResponse),
        (this.operationType = e.operationType);
    }
    static async _fromIdTokenResponse(e, t, n) {
      let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const i = await ju._fromIdTokenResponse(e, n, r),
        o = Ud(n);
      return new Md({
        user: i,
        providerId: o,
        _tokenResponse: n,
        operationType: t,
      });
    }
    static async _forOperation(e, t, n) {
      await e._updateTokensIfNecessary(n, !0);
      const r = Ud(n);
      return new Md({
        user: e,
        providerId: r,
        _tokenResponse: n,
        operationType: t,
      });
    }
  }
  function Ud(e) {
    return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
  }
  class Fd extends tt {
    constructor(e, t, n, r) {
      var i;
      super(t.code, t.message),
        (this.operationType = n),
        (this.user = r),
        Object.setPrototypeOf(this, Fd.prototype),
        (this.customData = {
          appName: e.name,
          tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
          _serverResponse: t.customData._serverResponse,
          operationType: n,
        });
    }
    static _fromErrorAndOperation(e, t, n, r) {
      return new Fd(e, t, n, r);
    }
  }
  function jd(e, t, n, r) {
    return (
      "reauthenticate" === t
        ? n._getReauthenticationResolver(e)
        : n._getIdTokenResponse(e)
    ).catch((n) => {
      if (n.code === "auth/".concat("multi-factor-auth-required"))
        throw Fd._fromErrorAndOperation(e, n, t, r);
      throw n;
    });
  }
  async function zd(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const r = await Ou(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
    return Md._forOperation(e, "link", r);
  }
  async function Wd(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const { auth: r } = e;
    if (Dn(r.app)) return Promise.reject(nu(r));
    const i = "reauthenticate";
    try {
      const o = await Ou(e, jd(r, i, t, e), n);
      iu(o.idToken, r, "internal-error");
      const s = Ru(o.idToken);
      iu(s, r, "internal-error");
      const { sub: a } = s;
      return iu(e.uid === a, r, "user-mismatch"), Md._forOperation(e, i, o);
    } catch (Sf) {
      throw (
        ((null === Sf || void 0 === Sf ? void 0 : Sf.code) ===
          "auth/".concat("user-not-found") && Zc(r, "user-mismatch"),
        Sf)
      );
    }
  }
  async function Vd(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (Dn(e.app)) return Promise.reject(nu(e));
    const r = "signIn",
      i = await jd(e, r, t),
      o = await Md._fromIdTokenResponse(e, r, i);
    return n || (await e._updateCurrentUser(o.user)), o;
  }
  async function Bd(e, t) {
    return Vd(ad(e), t);
  }
  function qd(e, t, n) {
    var r;
    iu(
      (null === (r = n.url) || void 0 === r ? void 0 : r.length) > 0,
      e,
      "invalid-continue-uri"
    ),
      iu(
        "undefined" === typeof n.dynamicLinkDomain ||
          n.dynamicLinkDomain.length > 0,
        e,
        "invalid-dynamic-link-domain"
      ),
      (t.continueUrl = n.url),
      (t.dynamicLinkDomain = n.dynamicLinkDomain),
      (t.canHandleCodeInApp = n.handleCodeInApp),
      n.iOS &&
        (iu(n.iOS.bundleId.length > 0, e, "missing-ios-bundle-id"),
        (t.iOSBundleId = n.iOS.bundleId)),
      n.android &&
        (iu(n.android.packageName.length > 0, e, "missing-android-pkg-name"),
        (t.androidInstallApp = n.android.installApp),
        (t.androidMinimumVersionCode = n.android.minimumVersion),
        (t.androidPackageName = n.android.packageName));
  }
  async function Hd(e) {
    const t = ad(e);
    t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
  }
  async function Kd(e, t) {
    const n = wt(e),
      r = { requestType: "VERIFY_EMAIL", idToken: await e.getIdToken() };
    t && qd(n.auth, r, t);
    const { email: i } = await (async function (e, t) {
      return wd(e, t);
    })(n.auth, r);
    i !== e.email && (await e.reload());
  }
  new WeakMap();
  const $d = "__sak";
  class Gd {
    constructor(e, t) {
      (this.storageRetriever = e), (this.type = t);
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem($d, "1"),
            this.storage.removeItem($d),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      } catch (e) {
        return Promise.resolve(!1);
      }
    }
    _set(e, t) {
      return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
    }
    _get(e) {
      const t = this.storage.getItem(e);
      return Promise.resolve(t ? JSON.parse(t) : null);
    }
    _remove(e) {
      return this.storage.removeItem(e), Promise.resolve();
    }
    get storage() {
      return this.storageRetriever();
    }
  }
  class Yd extends Gd {
    constructor() {
      super(() => window.localStorage, "LOCAL"),
        (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.safariLocalStorageNotSynced =
          (function () {
            const e = Je();
            return Gu(e) || ed(e);
          })() &&
          (function () {
            try {
              return !(!window || window === window.top);
            } catch (Sf) {
              return !1;
            }
          })()),
        (this.fallbackToPolling = nd()),
        (this._shouldAllowMigration = !0);
    }
    forAllChangedKeys(e) {
      for (const t of Object.keys(this.listeners)) {
        const n = this.storage.getItem(t),
          r = this.localCache[t];
        n !== r && e(t, r, n);
      }
    }
    onStorageEvent(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!e.key)
        return void this.forAllChangedKeys((e, t, n) => {
          this.notifyListeners(e, n);
        });
      const n = e.key;
      if (
        (t ? this.detachListener() : this.stopPolling(),
        this.safariLocalStorageNotSynced)
      ) {
        const r = this.storage.getItem(n);
        if (e.newValue !== r)
          null !== e.newValue
            ? this.storage.setItem(n, e.newValue)
            : this.storage.removeItem(n);
        else if (this.localCache[n] === e.newValue && !t) return;
      }
      const r = () => {
          const e = this.storage.getItem(n);
          (t || this.localCache[n] !== e) && this.notifyListeners(n, e);
        },
        i = this.storage.getItem(n);
      td() && i !== e.newValue && e.newValue !== e.oldValue
        ? setTimeout(r, 10)
        : r();
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      const n = this.listeners[e];
      if (n) for (const r of Array.from(n)) r(t ? JSON.parse(t) : t);
    }
    startPolling() {
      this.stopPolling(),
        (this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((e, t, n) => {
            this.onStorageEvent(
              new StorageEvent("storage", { key: e, oldValue: t, newValue: n }),
              !0
            );
          });
        }, 1e3));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    attachListener() {
      window.addEventListener("storage", this.boundEventHandler);
    }
    detachListener() {
      window.removeEventListener("storage", this.boundEventHandler);
    }
    _addListener(e, t) {
      0 === Object.keys(this.listeners).length &&
        (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] ||
          ((this.listeners[e] = new Set()),
          (this.localCache[e] = this.storage.getItem(e))),
        this.listeners[e].add(t);
    }
    _removeListener(e, t) {
      this.listeners[e] &&
        (this.listeners[e].delete(t),
        0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length &&
          (this.detachListener(), this.stopPolling());
    }
    async _set(e, t) {
      await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
    }
    async _get(e) {
      const t = await super._get(e);
      return (this.localCache[e] = JSON.stringify(t)), t;
    }
    async _remove(e) {
      await super._remove(e), delete this.localCache[e];
    }
  }
  Yd.type = "LOCAL";
  const Qd = Yd;
  class Jd extends Gd {
    constructor() {
      super(() => window.sessionStorage, "SESSION");
    }
    _addListener(e, t) {}
    _removeListener(e, t) {}
  }
  Jd.type = "SESSION";
  const Xd = Jd;
  class Zd {
    constructor(e) {
      (this.eventTarget = e),
        (this.handlersMap = {}),
        (this.boundEventHandler = this.handleEvent.bind(this));
    }
    static _getInstance(e) {
      const t = this.receivers.find((t) => t.isListeningto(e));
      if (t) return t;
      const n = new Zd(e);
      return this.receivers.push(n), n;
    }
    isListeningto(e) {
      return this.eventTarget === e;
    }
    async handleEvent(e) {
      const t = e,
        { eventId: n, eventType: r, data: i } = t.data,
        o = this.handlersMap[r];
      if (!(null === o || void 0 === o ? void 0 : o.size)) return;
      t.ports[0].postMessage({ status: "ack", eventId: n, eventType: r });
      const s = Array.from(o).map(async (e) => e(t.origin, i)),
        a = await (function (e) {
          return Promise.all(
            e.map(async (e) => {
              try {
                return { fulfilled: !0, value: await e };
              } catch (t) {
                return { fulfilled: !1, reason: t };
              }
            })
          );
        })(s);
      t.ports[0].postMessage({
        status: "done",
        eventId: n,
        eventType: r,
        response: a,
      });
    }
    _subscribe(e, t) {
      0 === Object.keys(this.handlersMap).length &&
        this.eventTarget.addEventListener("message", this.boundEventHandler),
        this.handlersMap[e] || (this.handlersMap[e] = new Set()),
        this.handlersMap[e].add(t);
    }
    _unsubscribe(e, t) {
      this.handlersMap[e] && t && this.handlersMap[e].delete(t),
        (t && 0 !== this.handlersMap[e].size) || delete this.handlersMap[e],
        0 === Object.keys(this.handlersMap).length &&
          this.eventTarget.removeEventListener(
            "message",
            this.boundEventHandler
          );
    }
  }
  function eh() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
      n = "";
    for (let r = 0; r < t; r++) n += Math.floor(10 * Math.random());
    return e + n;
  }
  Zd.receivers = [];
  class th {
    constructor(e) {
      (this.target = e), (this.handlers = new Set());
    }
    removeMessageHandler(e) {
      e.messageChannel &&
        (e.messageChannel.port1.removeEventListener("message", e.onMessage),
        e.messageChannel.port1.close()),
        this.handlers.delete(e);
    }
    async _send(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
      const r =
        "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
      if (!r) throw new Error("connection_unavailable");
      let i, o;
      return new Promise((s, a) => {
        const l = eh("", 20);
        r.port1.start();
        const c = setTimeout(() => {
          a(new Error("unsupported_event"));
        }, n);
        (o = {
          messageChannel: r,
          onMessage(e) {
            const t = e;
            if (t.data.eventId === l)
              switch (t.data.status) {
                case "ack":
                  clearTimeout(c),
                    (i = setTimeout(() => {
                      a(new Error("timeout"));
                    }, 3e3));
                  break;
                case "done":
                  clearTimeout(i), s(t.data.response);
                  break;
                default:
                  clearTimeout(c),
                    clearTimeout(i),
                    a(new Error("invalid_response"));
              }
          },
        }),
          this.handlers.add(o),
          r.port1.addEventListener("message", o.onMessage),
          this.target.postMessage({ eventType: e, eventId: l, data: t }, [
            r.port2,
          ]);
      }).finally(() => {
        o && this.removeMessageHandler(o);
      });
    }
  }
  function nh() {
    return window;
  }
  function rh() {
    return (
      "undefined" !== typeof nh().WorkerGlobalScope &&
      "function" === typeof nh().importScripts
    );
  }
  const ih = "firebaseLocalStorageDb",
    oh = "firebaseLocalStorage",
    sh = "fbase_key";
  class ah {
    constructor(e) {
      this.request = e;
    }
    toPromise() {
      return new Promise((e, t) => {
        this.request.addEventListener("success", () => {
          e(this.request.result);
        }),
          this.request.addEventListener("error", () => {
            t(this.request.error);
          });
      });
    }
  }
  function lh(e, t) {
    return e.transaction([oh], t ? "readwrite" : "readonly").objectStore(oh);
  }
  function ch() {
    const e = indexedDB.open(ih, 1);
    return new Promise((t, n) => {
      e.addEventListener("error", () => {
        n(e.error);
      }),
        e.addEventListener("upgradeneeded", () => {
          const t = e.result;
          try {
            t.createObjectStore(oh, { keyPath: sh });
          } catch (Sf) {
            n(Sf);
          }
        }),
        e.addEventListener("success", async () => {
          const n = e.result;
          n.objectStoreNames.contains(oh)
            ? t(n)
            : (n.close(),
              await (function () {
                const e = indexedDB.deleteDatabase(ih);
                return new ah(e).toPromise();
              })(),
              t(await ch()));
        });
    });
  }
  async function uh(e, t, n) {
    const r = lh(e, !0).put({ [sh]: t, value: n });
    return new ah(r).toPromise();
  }
  function dh(e, t) {
    const n = lh(e, !0).delete(t);
    return new ah(n).toPromise();
  }
  class hh {
    constructor() {
      (this.type = "LOCAL"),
        (this._shouldAllowMigration = !0),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.pendingWrites = 0),
        (this.receiver = null),
        (this.sender = null),
        (this.serviceWorkerReceiverAvailable = !1),
        (this.activeServiceWorker = null),
        (this._workerInitializationPromise =
          this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {}
          ));
    }
    async _openDb() {
      return this.db || (this.db = await ch()), this.db;
    }
    async _withRetries(e) {
      let t = 0;
      for (;;)
        try {
          const t = await this._openDb();
          return await e(t);
        } catch (Sf) {
          if (t++ > 3) throw Sf;
          this.db && (this.db.close(), (this.db = void 0));
        }
    }
    async initializeServiceWorkerMessaging() {
      return rh() ? this.initializeReceiver() : this.initializeSender();
    }
    async initializeReceiver() {
      (this.receiver = Zd._getInstance(rh() ? self : null)),
        this.receiver._subscribe("keyChanged", async (e, t) => ({
          keyProcessed: (await this._poll()).includes(t.key),
        })),
        this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]);
    }
    async initializeSender() {
      var e, t;
      if (
        ((this.activeServiceWorker = await (async function () {
          if (
            !(null === navigator || void 0 === navigator
              ? void 0
              : navigator.serviceWorker)
          )
            return null;
          try {
            return (await navigator.serviceWorker.ready).active;
          } catch (e) {
            return null;
          }
        })()),
        !this.activeServiceWorker)
      )
        return;
      this.sender = new th(this.activeServiceWorker);
      const n = await this.sender._send("ping", {}, 800);
      n &&
        (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) &&
        (null === (t = n[0]) || void 0 === t
          ? void 0
          : t.value.includes("keyChanged")) &&
        (this.serviceWorkerReceiverAvailable = !0);
    }
    async notifyServiceWorker(e) {
      if (
        this.sender &&
        this.activeServiceWorker &&
        (function () {
          var e;
          return (
            (null ===
              (e =
                null === navigator || void 0 === navigator
                  ? void 0
                  : navigator.serviceWorker) || void 0 === e
              ? void 0
              : e.controller) || null
          );
        })() === this.activeServiceWorker
      )
        try {
          await this.sender._send(
            "keyChanged",
            { key: e },
            this.serviceWorkerReceiverAvailable ? 800 : 50
          );
        } catch (t) {}
    }
    async _isAvailable() {
      try {
        if (!indexedDB) return !1;
        const e = await ch();
        return await uh(e, $d, "1"), await dh(e, $d), !0;
      } catch (e) {}
      return !1;
    }
    async _withPendingWrite(e) {
      this.pendingWrites++;
      try {
        await e();
      } finally {
        this.pendingWrites--;
      }
    }
    async _set(e, t) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((n) => uh(n, e, t)),
          (this.localCache[e] = t),
          this.notifyServiceWorker(e)
        )
      );
    }
    async _get(e) {
      const t = await this._withRetries((t) =>
        (async function (e, t) {
          const n = lh(e, !1).get(t),
            r = await new ah(n).toPromise();
          return void 0 === r ? null : r.value;
        })(t, e)
      );
      return (this.localCache[e] = t), t;
    }
    async _remove(e) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((t) => dh(t, e)),
          delete this.localCache[e],
          this.notifyServiceWorker(e)
        )
      );
    }
    async _poll() {
      const e = await this._withRetries((e) => {
        const t = lh(e, !1).getAll();
        return new ah(t).toPromise();
      });
      if (!e) return [];
      if (0 !== this.pendingWrites) return [];
      const t = [],
        n = new Set();
      if (0 !== e.length)
        for (const { fbase_key: r, value: i } of e)
          n.add(r),
            JSON.stringify(this.localCache[r]) !== JSON.stringify(i) &&
              (this.notifyListeners(r, i), t.push(r));
      for (const r of Object.keys(this.localCache))
        this.localCache[r] &&
          !n.has(r) &&
          (this.notifyListeners(r, null), t.push(r));
      return t;
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      const n = this.listeners[e];
      if (n) for (const r of Array.from(n)) r(t);
    }
    startPolling() {
      this.stopPolling(),
        (this.pollTimer = setInterval(async () => this._poll(), 800));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    _addListener(e, t) {
      0 === Object.keys(this.listeners).length && this.startPolling(),
        this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
        this.listeners[e].add(t);
    }
    _removeListener(e, t) {
      this.listeners[e] &&
        (this.listeners[e].delete(t),
        0 === this.listeners[e].size && delete this.listeners[e]),
        0 === Object.keys(this.listeners).length && this.stopPolling();
    }
  }
  hh.type = "LOCAL";
  const fh = hh;
  dd("rcb"), new du(3e4, 6e4);
  const ph = "recaptcha";
  async function mh(e, t, n) {
    var r;
    const i = await n.verify();
    try {
      let o;
      if (
        (iu("string" === typeof i, e, "argument-error"),
        iu(n.type === ph, e, "argument-error"),
        (o = "string" === typeof t ? { phoneNumber: t } : t),
        "session" in o)
      ) {
        const t = o.session;
        if ("phoneNumber" in o) {
          iu("enroll" === t.type, e, "internal-error");
          const n = await (function (e, t) {
            return vu(e, "POST", "/v2/accounts/mfaEnrollment:start", gu(e, t));
          })(e, {
            idToken: t.credential,
            phoneEnrollmentInfo: {
              phoneNumber: o.phoneNumber,
              recaptchaToken: i,
            },
          });
          return n.phoneSessionInfo.sessionInfo;
        }
        {
          iu("signin" === t.type, e, "internal-error");
          const n =
            (null === (r = o.multiFactorHint) || void 0 === r
              ? void 0
              : r.uid) || o.multiFactorUid;
          iu(n, e, "missing-multi-factor-info");
          const s = await (function (e, t) {
            return vu(e, "POST", "/v2/accounts/mfaSignIn:start", gu(e, t));
          })(e, {
            mfaPendingCredential: t.credential,
            mfaEnrollmentId: n,
            phoneSignInInfo: { recaptchaToken: i },
          });
          return s.phoneResponseInfo.sessionInfo;
        }
      }
      {
        const { sessionInfo: t } = await (async function (e, t) {
          return vu(e, "POST", "/v1/accounts:sendVerificationCode", gu(e, t));
        })(e, { phoneNumber: o.phoneNumber, recaptchaToken: i });
        return t;
      }
    } finally {
      n._reset();
    }
  }
  class gh {
    constructor(e) {
      (this.providerId = gh.PROVIDER_ID), (this.auth = ad(e));
    }
    verifyPhoneNumber(e, t) {
      return mh(this.auth, e, wt(t));
    }
    static credential(e, t) {
      return Id._fromVerification(e, t);
    }
    static credentialFromResult(e) {
      const t = e;
      return gh.credentialFromTaggedObject(t);
    }
    static credentialFromError(e) {
      return gh.credentialFromTaggedObject(e.customData || {});
    }
    static credentialFromTaggedObject(e) {
      let { _tokenResponse: t } = e;
      if (!t) return null;
      const { phoneNumber: n, temporaryProof: r } = t;
      return n && r ? Id._fromTokenResponse(n, r) : null;
    }
  }
  function vh(e, t) {
    return t
      ? Wu(t)
      : (iu(e._popupRedirectResolver, e, "argument-error"),
        e._popupRedirectResolver);
  }
  (gh.PROVIDER_ID = "phone"), (gh.PHONE_SIGN_IN_METHOD = "phone");
  class _h extends _d {
    constructor(e) {
      super("custom", "custom"), (this.params = e);
    }
    _getIdTokenResponse(e) {
      return Cd(e, this._buildIdpRequest());
    }
    _linkToIdToken(e, t) {
      return Cd(e, this._buildIdpRequest(t));
    }
    _getReauthenticationResolver(e) {
      return Cd(e, this._buildIdpRequest());
    }
    _buildIdpRequest(e) {
      const t = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: !0,
        returnIdpCredential: !0,
      };
      return e && (t.idToken = e), t;
    }
  }
  function yh(e) {
    return Vd(e.auth, new _h(e), e.bypassAuthState);
  }
  function bh(e) {
    const { auth: t, user: n } = e;
    return iu(n, t, "internal-error"), Wd(n, new _h(e), e.bypassAuthState);
  }
  async function wh(e) {
    const { auth: t, user: n } = e;
    return iu(n, t, "internal-error"), zd(n, new _h(e), e.bypassAuthState);
  }
  class kh {
    constructor(e, t, n, r) {
      let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      (this.auth = e),
        (this.resolver = n),
        (this.user = r),
        (this.bypassAuthState = i),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(t) ? t : [t]);
    }
    execute() {
      return new Promise(async (e, t) => {
        this.pendingPromise = { resolve: e, reject: t };
        try {
          (this.eventManager = await this.resolver._initialize(this.auth)),
            await this.onExecution(),
            this.eventManager.registerConsumer(this);
        } catch (Sf) {
          this.reject(Sf);
        }
      });
    }
    async onAuthEvent(e) {
      const {
        urlResponse: t,
        sessionId: n,
        postBody: r,
        tenantId: i,
        error: o,
        type: s,
      } = e;
      if (o) return void this.reject(o);
      const a = {
        auth: this.auth,
        requestUri: t,
        sessionId: n,
        tenantId: i || void 0,
        postBody: r || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState,
      };
      try {
        this.resolve(await this.getIdpTask(s)(a));
      } catch (Sf) {
        this.reject(Sf);
      }
    }
    onError(e) {
      this.reject(e);
    }
    getIdpTask(e) {
      switch (e) {
        case "signInViaPopup":
        case "signInViaRedirect":
          return yh;
        case "linkViaPopup":
        case "linkViaRedirect":
          return wh;
        case "reauthViaPopup":
        case "reauthViaRedirect":
          return bh;
        default:
          Zc(this.auth, "internal-error");
      }
    }
    resolve(e) {
      su(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp();
    }
    reject(e) {
      su(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
      this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp();
    }
  }
  const Ch = new du(2e3, 1e4);
  class Sh extends kh {
    constructor(e, t, n, r, i) {
      super(e, t, r, i),
        (this.provider = n),
        (this.authWindow = null),
        (this.pollId = null),
        Sh.currentPopupAction && Sh.currentPopupAction.cancel(),
        (Sh.currentPopupAction = this);
    }
    async executeNotNull() {
      const e = await this.execute();
      return iu(e, this.auth, "internal-error"), e;
    }
    async onExecution() {
      su(1 === this.filter.length, "Popup operations only handle one event");
      const e = eh();
      (this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        e
      )),
        (this.authWindow.associatedEvent = e),
        this.resolver._originValidation(this.auth).catch((e) => {
          this.reject(e);
        }),
        this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
          e || this.reject(eu(this.auth, "web-storage-unsupported"));
        }),
        this.pollUserCancellation();
    }
    get eventId() {
      var e;
      return (
        (null === (e = this.authWindow) || void 0 === e
          ? void 0
          : e.associatedEvent) || null
      );
    }
    cancel() {
      this.reject(eu(this.auth, "cancelled-popup-request"));
    }
    cleanUp() {
      this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        (this.authWindow = null),
        (this.pollId = null),
        (Sh.currentPopupAction = null);
    }
    pollUserCancellation() {
      const e = () => {
        var t, n;
        (
          null ===
            (n =
              null === (t = this.authWindow) || void 0 === t
                ? void 0
                : t.window) || void 0 === n
            ? void 0
            : n.closed
        )
          ? (this.pollId = window.setTimeout(() => {
              (this.pollId = null),
                this.reject(eu(this.auth, "popup-closed-by-user"));
            }, 8e3))
          : (this.pollId = window.setTimeout(e, Ch.get()));
      };
      e();
    }
  }
  Sh.currentPopupAction = null;
  const Eh = "pendingRedirect",
    Ih = new Map();
  class Th extends kh {
    constructor(e, t) {
      super(
        e,
        [
          "signInViaRedirect",
          "linkViaRedirect",
          "reauthViaRedirect",
          "unknown",
        ],
        t,
        void 0,
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
      ),
        (this.eventId = null);
    }
    async execute() {
      let e = Ih.get(this.auth._key());
      if (!e) {
        try {
          const t = await (async function (e, t) {
              const n = Rh(t),
                r = Ph(e);
              if (!(await r._isAvailable())) return !1;
              const i = "true" === (await r._get(n));
              return await r._remove(n), i;
            })(this.resolver, this.auth),
            n = t ? await super.execute() : null;
          e = () => Promise.resolve(n);
        } catch (Sf) {
          e = () => Promise.reject(Sf);
        }
        Ih.set(this.auth._key(), e);
      }
      return (
        this.bypassAuthState ||
          Ih.set(this.auth._key(), () => Promise.resolve(null)),
        e()
      );
    }
    async onAuthEvent(e) {
      if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
      if ("unknown" !== e.type) {
        if (e.eventId) {
          const t = await this.auth._redirectUserForId(e.eventId);
          if (t) return (this.user = t), super.onAuthEvent(e);
          this.resolve(null);
        }
      } else this.resolve(null);
    }
    async onExecution() {}
    cleanUp() {}
  }
  function Nh(e, t) {
    Ih.set(e._key(), t);
  }
  function Ph(e) {
    return Wu(e._redirectPersistence);
  }
  function Rh(e) {
    return qu(Eh, e.config.apiKey, e.name);
  }
  async function xh(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (Dn(e.app)) return Promise.reject(nu(e));
    const r = ad(e),
      i = vh(r, t),
      o = new Th(r, i, n),
      s = await o.execute();
    return (
      s &&
        !n &&
        (delete s.user._redirectEventId,
        await r._persistUserIfCurrent(s.user),
        await r._setRedirectUser(null, t)),
      s
    );
  }
  class Oh {
    constructor(e) {
      (this.auth = e),
        (this.cachedEventUids = new Set()),
        (this.consumers = new Set()),
        (this.queuedRedirectEvent = null),
        (this.hasHandledPotentialRedirect = !1),
        (this.lastProcessedEventTime = Date.now());
    }
    registerConsumer(e) {
      this.consumers.add(e),
        this.queuedRedirectEvent &&
          this.isEventForConsumer(this.queuedRedirectEvent, e) &&
          (this.sendToConsumer(this.queuedRedirectEvent, e),
          this.saveEventToCache(this.queuedRedirectEvent),
          (this.queuedRedirectEvent = null));
    }
    unregisterConsumer(e) {
      this.consumers.delete(e);
    }
    onEvent(e) {
      if (this.hasEventBeenHandled(e)) return !1;
      let t = !1;
      return (
        this.consumers.forEach((n) => {
          this.isEventForConsumer(e, n) &&
            ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
        }),
        this.hasHandledPotentialRedirect ||
          !(function (e) {
            switch (e.type) {
              case "signInViaRedirect":
              case "linkViaRedirect":
              case "reauthViaRedirect":
                return !0;
              case "unknown":
                return Dh(e);
              default:
                return !1;
            }
          })(e) ||
          ((this.hasHandledPotentialRedirect = !0),
          t || ((this.queuedRedirectEvent = e), (t = !0))),
        t
      );
    }
    sendToConsumer(e, t) {
      var n;
      if (e.error && !Dh(e)) {
        const r =
          (null === (n = e.error.code) || void 0 === n
            ? void 0
            : n.split("auth/")[1]) || "internal-error";
        t.onError(eu(this.auth, r));
      } else t.onAuthEvent(e);
    }
    isEventForConsumer(e, t) {
      const n = null === t.eventId || (!!e.eventId && e.eventId === t.eventId);
      return t.filter.includes(e.type) && n;
    }
    hasEventBeenHandled(e) {
      return (
        Date.now() - this.lastProcessedEventTime >= 6e5 &&
          this.cachedEventUids.clear(),
        this.cachedEventUids.has(Ah(e))
      );
    }
    saveEventToCache(e) {
      this.cachedEventUids.add(Ah(e)),
        (this.lastProcessedEventTime = Date.now());
    }
  }
  function Ah(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId]
      .filter((e) => e)
      .join("-");
  }
  function Dh(e) {
    let { type: t, error: n } = e;
    return (
      "unknown" === t &&
      (null === n || void 0 === n ? void 0 : n.code) ===
        "auth/".concat("no-auth-event")
    );
  }
  const Lh = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    Mh = /^https?/;
  async function Uh(e) {
    if (e.config.emulator) return;
    const { authorizedDomains: t } = await (async function (e) {
      return vu(
        e,
        "GET",
        "/v1/projects",
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      );
    })(e);
    for (const r of t)
      try {
        if (Fh(r)) return;
      } catch (n) {}
    Zc(e, "unauthorized-domain");
  }
  function Fh(e) {
    const t = au(),
      { protocol: n, hostname: r } = new URL(t);
    if (e.startsWith("chrome-extension://")) {
      const i = new URL(e);
      return "" === i.hostname && "" === r
        ? "chrome-extension:" === n &&
            e.replace("chrome-extension://", "") ===
              t.replace("chrome-extension://", "")
        : "chrome-extension:" === n && i.hostname === r;
    }
    if (!Mh.test(n)) return !1;
    if (Lh.test(e)) return r === e;
    const i = e.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
  }
  const jh = new du(3e4, 6e4);
  function zh() {
    const e = nh().___jsl;
    if (null === e || void 0 === e ? void 0 : e.H)
      for (const t of Object.keys(e.H))
        if (
          ((e.H[t].r = e.H[t].r || []),
          (e.H[t].L = e.H[t].L || []),
          (e.H[t].r = [...e.H[t].L]),
          e.CP)
        )
          for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
  function Wh(e) {
    return new Promise((t, n) => {
      var r, i, o;
      function s() {
        zh(),
          gapi.load("gapi.iframes", {
            callback: () => {
              t(gapi.iframes.getContext());
            },
            ontimeout: () => {
              zh(), n(eu(e, "network-request-failed"));
            },
            timeout: jh.get(),
          });
      }
      if (
        null ===
          (i = null === (r = nh().gapi) || void 0 === r ? void 0 : r.iframes) ||
        void 0 === i
          ? void 0
          : i.Iframe
      )
        t(gapi.iframes.getContext());
      else {
        if (!(null === (o = nh().gapi) || void 0 === o ? void 0 : o.load)) {
          const t = dd("iframefcb");
          return (
            (nh()[t] = () => {
              gapi.load ? s() : n(eu(e, "network-request-failed"));
            }),
            ud("".concat(cd.gapiScript, "?onload=").concat(t)).catch((e) =>
              n(e)
            )
          );
        }
        s();
      }
    }).catch((e) => {
      throw ((Vh = null), e);
    });
  }
  let Vh = null;
  const Bh = new du(5e3, 15e3),
    qh = "__/auth/iframe",
    Hh = "emulator/auth/iframe",
    Kh = {
      style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px",
      },
      "aria-hidden": "true",
      tabindex: "-1",
    },
    $h = new Map([
      ["identitytoolkit.googleapis.com", "p"],
      ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
      ["test-identitytoolkit.sandbox.googleapis.com", "t"],
    ]);
  function Gh(e) {
    const t = e.config;
    iu(t.authDomain, e, "auth-domain-config-required");
    const n = t.emulator
        ? hu(t, Hh)
        : "https://".concat(e.config.authDomain, "/").concat(qh),
      r = { apiKey: t.apiKey, appName: e.name, v: Un },
      i = $h.get(e.config.apiHost);
    i && (r.eid = i);
    const o = e._getFrameworks();
    return (
      o.length && (r.fw = o.join(",")), "".concat(n, "?").concat(ft(r).slice(1))
    );
  }
  async function Yh(e) {
    const t = await (function (e) {
        return (Vh = Vh || Wh(e)), Vh;
      })(e),
      n = nh().gapi;
    return (
      iu(n, e, "internal-error"),
      t.open(
        {
          where: document.body,
          url: Gh(e),
          messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: Kh,
          dontclear: !0,
        },
        (t) =>
          new Promise(async (n, r) => {
            await t.restyle({ setHideOnLeave: !1 });
            const i = eu(e, "network-request-failed"),
              o = nh().setTimeout(() => {
                r(i);
              }, Bh.get());
            function s() {
              nh().clearTimeout(o), n(t);
            }
            t.ping(s).then(s, () => {
              r(i);
            });
          })
      )
    );
  }
  const Qh = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  };
  class Jh {
    constructor(e) {
      (this.window = e), (this.associatedEvent = null);
    }
    close() {
      if (this.window)
        try {
          this.window.close();
        } catch (Sf) {}
    }
  }
  function Xh(e, t, n) {
    let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
      i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
    const o = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
      s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
    let a = "";
    const l = Object.assign(Object.assign({}, Qh), {
        width: r.toString(),
        height: i.toString(),
        top: o,
        left: s,
      }),
      c = Je().toLowerCase();
    n && (a = Yu(c) ? "_blank" : n),
      $u(c) && ((t = t || "http://localhost"), (l.scrollbars = "yes"));
    const u = Object.entries(l).reduce((e, t) => {
      let [n, r] = t;
      return "".concat(e).concat(n, "=").concat(r, ",");
    }, "");
    if (
      (function () {
        var e;
        return (
          ed(
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Je()
          ) &&
          !!(null === (e = window.navigator) || void 0 === e
            ? void 0
            : e.standalone)
        );
      })(c) &&
      "_self" !== a
    )
      return (
        (function (e, t) {
          const n = document.createElement("a");
          (n.href = e), (n.target = t);
          const r = document.createEvent("MouseEvent");
          r.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            1,
            0,
            0,
            0,
            0,
            !1,
            !1,
            !1,
            !1,
            1,
            null
          ),
            n.dispatchEvent(r);
        })(t || "", a),
        new Jh(null)
      );
    const d = window.open(t || "", a, u);
    iu(d, e, "popup-blocked");
    try {
      d.focus();
    } catch (Sf) {}
    return new Jh(d);
  }
  const Zh = "__/auth/handler",
    ef = "emulator/auth/handler",
    tf = encodeURIComponent("fac");
  async function nf(e, t, n, r, i, o) {
    iu(e.config.authDomain, e, "auth-domain-config-required"),
      iu(e.config.apiKey, e, "invalid-api-key");
    const s = {
      apiKey: e.config.apiKey,
      appName: e.name,
      authType: n,
      redirectUrl: r,
      v: Un,
      eventId: i,
    };
    if (t instanceof Pd) {
      t.setDefaultLanguage(e.languageCode),
        (s.providerId = t.providerId || ""),
        ct(t.getCustomParameters()) ||
          (s.customParameters = JSON.stringify(t.getCustomParameters()));
      for (const [e, t] of Object.entries(o || {})) s[e] = t;
    }
    if (t instanceof Rd) {
      const e = t.getScopes().filter((e) => "" !== e);
      e.length > 0 && (s.scopes = e.join(","));
    }
    e.tenantId && (s.tid = e.tenantId);
    const a = s;
    for (const u of Object.keys(a)) void 0 === a[u] && delete a[u];
    const l = await e._getAppCheckToken(),
      c = l ? "#".concat(tf, "=").concat(encodeURIComponent(l)) : "";
    return ""
      .concat(
        (function (e) {
          let { config: t } = e;
          if (!t.emulator)
            return "https://".concat(t.authDomain, "/").concat(Zh);
          return hu(t, ef);
        })(e),
        "?"
      )
      .concat(ft(a).slice(1))
      .concat(c);
  }
  const rf = "webStorageSupport";
  const of = class {
    constructor() {
      (this.eventManagers = {}),
        (this.iframes = {}),
        (this.originValidationPromises = {}),
        (this._redirectPersistence = Xd),
        (this._completeRedirectFn = xh),
        (this._overrideRedirectResult = Nh);
    }
    async _openPopup(e, t, n, r) {
      var i;
      su(
        null === (i = this.eventManagers[e._key()]) || void 0 === i
          ? void 0
          : i.manager,
        "_initialize() not called before _openPopup()"
      );
      return Xh(e, await nf(e, t, n, au(), r), eh());
    }
    async _openRedirect(e, t, n, r) {
      await this._originValidation(e);
      return (
        (function (e) {
          nh().location.href = e;
        })(await nf(e, t, n, au(), r)),
        new Promise(() => {})
      );
    }
    _initialize(e) {
      const t = e._key();
      if (this.eventManagers[t]) {
        const { manager: e, promise: n } = this.eventManagers[t];
        return e
          ? Promise.resolve(e)
          : (su(n, "If manager is not set, promise should be"), n);
      }
      const n = this.initAndGetManager(e);
      return (
        (this.eventManagers[t] = { promise: n }),
        n.catch(() => {
          delete this.eventManagers[t];
        }),
        n
      );
    }
    async initAndGetManager(e) {
      const t = await Yh(e),
        n = new Oh(e);
      return (
        t.register(
          "authEvent",
          (t) => {
            iu(
              null === t || void 0 === t ? void 0 : t.authEvent,
              e,
              "invalid-auth-event"
            );
            return { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" };
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        ),
        (this.eventManagers[e._key()] = { manager: n }),
        (this.iframes[e._key()] = t),
        n
      );
    }
    _isIframeWebStorageSupported(e, t) {
      this.iframes[e._key()].send(
        rf,
        { type: rf },
        (n) => {
          var r;
          const i =
            null === (r = null === n || void 0 === n ? void 0 : n[0]) ||
            void 0 === r
              ? void 0
              : r[rf];
          void 0 !== i && t(!!i), Zc(e, "internal-error");
        },
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      );
    }
    _originValidation(e) {
      const t = e._key();
      return (
        this.originValidationPromises[t] ||
          (this.originValidationPromises[t] = Uh(e)),
        this.originValidationPromises[t]
      );
    }
    get _shouldInitProactively() {
      return nd() || Gu() || ed();
    }
  };
  var sf = "@firebase/auth",
    af = "1.7.5";
  class lf {
    constructor(e) {
      (this.auth = e), (this.internalListeners = new Map());
    }
    getUid() {
      var e;
      return (
        this.assertAuthConfigured(),
        (null === (e = this.auth.currentUser) || void 0 === e
          ? void 0
          : e.uid) || null
      );
    }
    async getToken(e) {
      if (
        (this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        !this.auth.currentUser)
      )
        return null;
      return { accessToken: await this.auth.currentUser.getIdToken(e) };
    }
    addAuthTokenListener(e) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
      const t = this.auth.onIdTokenChanged((t) => {
        e(
          (null === t || void 0 === t
            ? void 0
            : t.stsTokenManager.accessToken) || null
        );
      });
      this.internalListeners.set(e, t), this.updateProactiveRefresh();
    }
    removeAuthTokenListener(e) {
      this.assertAuthConfigured();
      const t = this.internalListeners.get(e);
      t &&
        (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
    }
    assertAuthConfigured() {
      iu(
        this.auth._initializationPromise,
        "dependent-sdk-initialized-before-auth"
      );
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh();
    }
  }
  const cf = Ge("authIdTokenMaxAge") || 300;
  let uf = null;
  var df, hf;
  (df = {
    loadJS: (e) =>
      new Promise((t, n) => {
        const r = document.createElement("script");
        r.setAttribute("src", e),
          (r.onload = t),
          (r.onerror = (e) => {
            const t = eu("internal-error");
            (t.customData = e), n(t);
          }),
          (r.type = "text/javascript"),
          (r.charset = "UTF-8"),
          (function () {
            var e, t;
            return null !==
              (t =
                null === (e = document.getElementsByTagName("head")) ||
                void 0 === e
                  ? void 0
                  : e[0]) && void 0 !== t
              ? t
              : document;
          })().appendChild(r);
      }),
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript:
      "https://www.google.com/recaptcha/enterprise.js?render=",
  }),
    (cd = df),
    (hf = "Browser"),
    On(
      new kt(
        "auth",
        (e, t) => {
          let { options: n } = t;
          const r = e.getProvider("app").getImmediate(),
            i = e.getProvider("heartbeat"),
            o = e.getProvider("app-check-internal"),
            { apiKey: s, authDomain: a } = r.options;
          iu(s && !s.includes(":"), "invalid-api-key", { appName: r.name });
          const l = {
              apiKey: s,
              authDomain: a,
              clientPlatform: hf,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: rd(hf),
            },
            c = new sd(r, i, o, l);
          return (
            (function (e, t) {
              const n =
                  (null === t || void 0 === t ? void 0 : t.persistence) || [],
                r = (Array.isArray(n) ? n : [n]).map(Wu);
              (null === t || void 0 === t ? void 0 : t.errorMap) &&
                e._updateErrorMap(t.errorMap),
                e._initializeWithPersistence(
                  r,
                  null === t || void 0 === t ? void 0 : t.popupRedirectResolver
                );
            })(c, n),
            c
          );
        },
        "PUBLIC"
      )
        .setInstantiationMode("EXPLICIT")
        .setInstanceCreatedCallback((e, t, n) => {
          e.getProvider("auth-internal").initialize();
        })
    ),
    On(
      new kt(
        "auth-internal",
        (e) => ((e) => new lf(e))(ad(e.getProvider("auth").getImmediate())),
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    zn(
      sf,
      af,
      (function (e) {
        switch (e) {
          case "Node":
            return "node";
          case "ReactNative":
            return "rn";
          case "Worker":
            return "webworker";
          case "Cordova":
            return "cordova";
          case "WebExtension":
            return "web-extension";
          default:
            return;
        }
      })(hf)
    ),
    zn(sf, af, "esm2017");
  const ff = Fn({
      apiKey: "AIzaSyBfvdcX2ennJtMMXyxFmqZUSMxprMzywZY",
      authDomain: "shopkeeper-web.firebaseapp.com",
      projectId: "shopkeeper-web",
      storageBucket: "shopkeeper-web.appspot.com",
      messagingSenderId: "540289475485",
      appId: "1:540289475485:web:e52fb48969c4051c5f8574",
    }),
    pf = (function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jn(),
        t = arguments.length > 1 ? arguments[1] : void 0;
      const n = An(e, "database").getImmediate({ identifier: t });
      if (!n._instanceStarted) {
        const e = Ke("database");
        e &&
          (function (e, t, n) {
            let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            (e = wt(e)),
              e._checkNotDeleted("useEmulator"),
              e._instanceStarted &&
                _r(
                  "Cannot call useEmulator() after instance has already been initialized."
                );
            const i = e._repoInternal;
            let o;
            if (i.repoInfo_.nodeAdmin)
              r.mockUserToken &&
                _r(
                  'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
                ),
                (o = new Mr(Mr.OWNER));
            else if (r.mockUserToken) {
              const t =
                "string" === typeof r.mockUserToken
                  ? r.mockUserToken
                  : Qe(r.mockUserToken, e.app.options.projectId);
              o = new Mr(t);
            }
            !(function (e, t, n, r) {
              (e.repoInfo_ = new Vr(
                "".concat(t, ":").concat(n),
                !1,
                e.repoInfo_.namespace,
                e.repoInfo_.webSocketOnly,
                e.repoInfo_.nodeAdmin,
                e.repoInfo_.persistenceKey,
                e.repoInfo_.includeNamespaceInQueryParams,
                !0
              )),
                r && (e.authTokenProvider_ = r);
            })(i, t, n, o);
          })(n, ...e);
      }
      return n;
    })(ff),
    mf = (function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jn(),
        t = arguments.length > 1 ? arguments[1] : void 0;
      e = wt(e);
      const n = An(e, Hc).getImmediate({ identifier: t }),
        r = Ke("storage");
      return (
        r &&
          (function (e, t, n) {
            let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            !(function (e, t, n) {
              let r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
              (e.host = "".concat(t, ":").concat(n)), (e._protocol = "http");
              const { mockUserToken: i } = r;
              i &&
                (e._overrideAuthToken =
                  "string" === typeof i ? i : Qe(i, e.app.options.projectId));
            })(e, t, n, r);
          })(n, ...r),
        n
      );
    })(ff),
    gf = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jn();
      const t = An(e, "auth");
      if (t.isInitialized()) return t.getImmediate();
      const n = (function (e, t) {
          const n = An(e, "auth");
          if (n.isInitialized()) {
            const e = n.getImmediate();
            if (dt(n.getOptions(), null !== t && void 0 !== t ? t : {}))
              return e;
            Zc(e, "already-initialized");
          }
          return n.initialize({ options: t });
        })(e, { popupRedirectResolver: of, persistence: [fh, Qd, Xd] }),
        r = Ge("authTokenSyncURL");
      if (r && "boolean" === typeof isSecureContext && isSecureContext) {
        const e = new URL(r, location.origin);
        if (location.origin === e.origin) {
          const t =
            ((i = e.toString()),
            async (e) => {
              const t = e && (await e.getIdTokenResult()),
                n =
                  t &&
                  (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
              if (n && n > cf) return;
              const r = null === t || void 0 === t ? void 0 : t.token;
              uf !== r &&
                ((uf = r),
                await fetch(i, {
                  method: r ? "POST" : "DELETE",
                  headers: r ? { Authorization: "Bearer ".concat(r) } : {},
                }));
            });
          !(function (e, t, n) {
            wt(e).beforeAuthStateChanged(t, n);
          })(n, t, () => t(n.currentUser)),
            (function (e, t, n, r) {
              wt(e).onIdTokenChanged(t, n, r);
            })(n, (e) => t(e));
        }
      }
      var i;
      const o = He("auth");
      return o && md(n, "http://".concat(o)), n;
    })(ff);
  var vf = n(579);
  const _f = () => {
      const [e, t] = (0, i.useState)(!0),
        [n, r] = (0, i.useState)(""),
        [o, s] = (0, i.useState)(""),
        [a, l] = (0, i.useState)(!1),
        c = ne(),
        u = () => {
          t(!e), r(""), s("");
        };
      return (0, vf.jsxs)("div", {
        className: "container",
        children: [
          (0, vf.jsx)("h1", { children: "LAXMI KIRANA STORE" }),
          e
            ? (0, vf.jsxs)("div", {
                id: "loginForm",
                children: [
                  (0, vf.jsx)("h2", { children: "Login" }),
                  (0, vf.jsxs)("form", {
                    children: [
                      (0, vf.jsx)("input", {
                        type: "text",
                        id: "email",
                        placeholder: "Email",
                        required: !0,
                      }),
                      (0, vf.jsx)("input", {
                        type: "password",
                        id: "password",
                        placeholder: "Password",
                        required: !0,
                      }),
                      o &&
                        (0, vf.jsx)("p", { className: "error", children: o }),
                      (0, vf.jsx)("button", {
                        type: "button",
                        onClick: async () => {
                          const e = document.getElementById("email").value,
                            t = document.getElementById("password").value;
                          if (e && t)
                            try {
                              const n = await (function (e, t, n) {
                                return Dn(e.app)
                                  ? Promise.reject(nu(e))
                                  : Bd(wt(e), Nd.credential(t, n)).catch(
                                      async (t) => {
                                        throw (
                                          (t.code ===
                                            "auth/".concat(
                                              "password-does-not-meet-requirements"
                                            ) && Hd(e),
                                          t)
                                        );
                                      }
                                    );
                              })(gf, e, t);
                              if (!n.user.emailVerified)
                                return void s(
                                  "Please verify your email before logging in."
                                );
                              localStorage.setItem("token", n.user.uid),
                                c(
                                  "laxmiretail@gmail.com" === e
                                    ? "/shopkeeperCart"
                                    : "/items"
                                );
                            } catch (vr) {
                              s("Invalid credentials. Please try again.");
                            }
                          else s("Please enter both email and password.");
                        },
                        children: "Login",
                      }),
                    ],
                  }),
                  (0, vf.jsx)("p", {
                    className: "toggle",
                    onClick: u,
                    children: "Don't have an account? Register here",
                  }),
                  (0, vf.jsx)("p", {
                    className: "toggle",
                    children: (0, vf.jsx)(Te, {
                      to: "/shopkeeper",
                      children: "Login here if you are a shopkeeper",
                    }),
                  }),
                ],
              })
            : (0, vf.jsxs)("div", {
                id: "registerForm",
                children: [
                  (0, vf.jsx)("h2", { children: "Register" }),
                  (0, vf.jsxs)("form", {
                    children: [
                      (0, vf.jsx)("input", {
                        type: "text",
                        id: "newEmail",
                        placeholder: "Email",
                        required: !0,
                      }),
                      (0, vf.jsx)("input", {
                        type: "tel",
                        id: "phone",
                        placeholder: "Phone Number",
                        required: !0,
                      }),
                      (0, vf.jsx)("input", {
                        type: "password",
                        id: "newPassword",
                        placeholder: "Password",
                        required: !0,
                      }),
                      n &&
                        (0, vf.jsx)("p", { className: "error", children: n }),
                      (0, vf.jsx)("button", {
                        type: "button",
                        onClick: async () => {
                          const e = document.getElementById("newEmail").value,
                            t = document.getElementById("phone").value,
                            n = document.getElementById("newPassword").value;
                          if (
                            ((e) =>
                              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                                String(e).toLowerCase()
                              ))(e)
                          )
                            if (((e) => /^\d{10}$/.test(String(e)))(t))
                              if (((e) => e.length >= 6)(n))
                                try {
                                  const t = await (async function (e, t, n) {
                                    if (Dn(e.app)) return Promise.reject(nu(e));
                                    const r = ad(e),
                                      i = pd(
                                        r,
                                        {
                                          returnSecureToken: !0,
                                          email: t,
                                          password: n,
                                          clientType: "CLIENT_TYPE_WEB",
                                        },
                                        "signUpPassword",
                                        Ld
                                      ),
                                      o = await i.catch((t) => {
                                        throw (
                                          (t.code ===
                                            "auth/".concat(
                                              "password-does-not-meet-requirements"
                                            ) && Hd(e),
                                          t)
                                        );
                                      }),
                                      s = await Md._fromIdTokenResponse(
                                        r,
                                        "signIn",
                                        o
                                      );
                                    return (
                                      await r._updateCurrentUser(s.user), s
                                    );
                                  })(gf, e, n);
                                  await Kd(t.user),
                                    alert(
                                      "Registration successful! Please check your email to verify your account."
                                    ),
                                    u();
                                } catch (vr) {
                                  r(vr.message);
                                }
                              else
                                r(
                                  "Password must be at least 6 characters long."
                                );
                            else r("Phone number must be 10 digits.");
                          else r("Please enter a valid email address.");
                        },
                        children: "Register",
                      }),
                    ],
                  }),
                  (0, vf.jsx)("p", {
                    className: "toggle",
                    onClick: u,
                    children: "Already have an account? Login here",
                  }),
                  (0, vf.jsx)("p", {
                    className: "toggle",
                    children: (0, vf.jsx)(Te, {
                      to: "/shopkeeper",
                      children: "Login here if you are a shopkeeper",
                    }),
                  }),
                ],
              }),
          (0, vf.jsx)("div", {
            className: "contact-us",
            onClick: () => l(!a),
            children: "Contact Us",
          }),
          a &&
            (0, vf.jsxs)("div", {
              className: "contact-info",
              children: [
                (0, vf.jsx)("p", { children: "Phone: 7702387254" }),
                (0, vf.jsx)("p", { children: "Email: laxmiretail@gmail.com" }),
              ],
            }),
        ],
      });
    },
    yf = () => {
      const [e, t] = (0, i.useState)(""),
        n = ne();
      return (0, vf.jsxs)("div", {
        className: "container",
        children: [
          (0, vf.jsx)("h1", { children: "LAXMI KIRANA STORE" }),
          (0, vf.jsxs)("form", {
            children: [
              (0, vf.jsx)("input", {
                type: "text",
                id: "shopkeeperEmail",
                placeholder: "Email",
                required: !0,
              }),
              (0, vf.jsx)("input", {
                type: "password",
                id: "shopkeeperPassword",
                placeholder: "Password",
                required: !0,
              }),
              e && (0, vf.jsx)("p", { className: "error", children: e }),
              (0, vf.jsx)("button", {
                type: "button",
                onClick: async () => {
                  const e = document.getElementById("shopkeeperEmail").value,
                    r = document.getElementById("shopkeeperPassword").value;
                  "laxmiretail@gmail.com" === e && "laxmi2000" === r
                    ? (localStorage.setItem("shopkeeperToken", e),
                      n("/shopkeeperCart"))
                    : t("Invalid credentials. Please try again.");
                },
                children: "Login",
              }),
            ],
          }),
        ],
      });
    },
    bf = () => {
      const [e, t] = (0, i.useState)(""),
        [n, r] = (0, i.useState)(null),
        [o, s] = (0, i.useState)(""),
        [a, l] = (0, i.useState)(""),
        [c, u] = (0, i.useState)(""),
        [d, h] = (0, i.useState)("pickup"),
        [f, p] = (0, i.useState)(""),
        [m, g] = (0, i.useState)(!1),
        v = ne();
      (0, i.useEffect)(() => {
        localStorage.getItem("token") || v("/");
      }, [v]);
      return (0, vf.jsxs)("div", {
        className: "Userpagecontainer",
        children: [
          (0, vf.jsx)("h1", {
            className: "heading",
            children: "Write the items to be packed",
          }),
          (0, vf.jsx)("input", {
            type: "text",
            placeholder: "Enter your Name",
            value: a,
            onChange: (e) => l(e.target.value),
          }),
          (0, vf.jsx)("input", {
            type: "text",
            placeholder: "Enter your Phone Number",
            value: o,
            onChange: (e) => s(e.target.value),
          }),
          (0, vf.jsx)("textarea", {
            placeholder: "Write the items to be packed",
            value: e,
            onChange: (e) => t(e.target.value),
          }),
          (0, vf.jsx)("input", {
            type: "file",
            accept: "image/*",
            onChange: (e) => r(e.target.files[0]),
          }),
          (0, vf.jsxs)("fieldset", {
            className: "order-method",
            children: [
              (0, vf.jsx)("legend", { children: "Select Order Method" }),
              (0, vf.jsxs)("select", {
                className: "OrderSelect",
                value: d,
                onChange: (e) => h(e.target.value),
                children: [
                  (0, vf.jsx)("option", {
                    value: "pickup",
                    children: "Pick up order",
                  }),
                  (0, vf.jsx)("option", {
                    value: "delivery",
                    children: "Deliver to your doorstep",
                  }),
                ],
              }),
            ],
          }),
          "delivery" === d &&
            (0, vf.jsx)("textarea", {
              placeholder: "Enter your Address",
              value: f,
              onChange: (e) => p(e.target.value),
            }),
          (0, vf.jsx)("button", {
            onClick: async () => {
              const i = localStorage.getItem("token");
              var c, h;
              if (i)
                if (e || n) {
                  let m = "";
                  if (n) {
                    const e =
                      ((c = mf),
                      (h = "images/".concat(n.name)),
                      zc((c = wt(c)), h));
                    await (function (e, t, n) {
                      return Mc((e = wt(e)), t, n);
                    })(e, n),
                      (m = await (function (e) {
                        return Uc((e = wt(e)));
                      })(e));
                  }
                  const g = {
                      customer: i,
                      name: a,
                      phoneNumber: o,
                      items: e,
                      imageUrl: m,
                      date: new Date().toLocaleString(),
                      status: "Pending",
                      shopkeeper: "laxmiretail@gmail.com",
                      deliveryMethod: d,
                      address: "delivery" === d ? f : "",
                    },
                    v = bl(pf, "orders/".concat(Date.now()));
                  await kl(v, g),
                    t(""),
                    r(null),
                    s(""),
                    l(""),
                    p(""),
                    u("Your order has been placed!"),
                    alert("Successfully placed the order!");
                } else alert("Please write items or upload a file.");
              else alert("You must be logged in to send items.");
            },
            children: "Send",
          }),
          c && (0, vf.jsx)("p", { className: "success-message", children: c }),
          (0, vf.jsx)(Te, {
            to: "/orderhistory",
            className: "orders-link",
            children: (0, vf.jsx)("button", {
              className: "orders-link",
              children: "View Your Previous Orders",
            }),
          }),
          (0, vf.jsx)("button", {
            onClick: () => {
              (function (e) {
                return wt(e).signOut();
              })(gf)
                .then(() => {
                  localStorage.removeItem("token"), v("/");
                })
                .catch((e) => {
                  console.error("Error logging out: ", e);
                });
            },
            className: "logout-button",
            children: "Logout",
          }),
          (0, vf.jsx)("div", {
            className: "contact-us",
            onClick: () => g(!m),
            children: "Contact Us",
          }),
          m &&
            (0, vf.jsxs)("div", {
              className: "contact-info",
              children: [
                (0, vf.jsx)("p", { children: "Phone: 7702387254" }),
                (0, vf.jsx)("p", { children: "Email: laxmiretail@gmail.com" }),
              ],
            }),
        ],
      });
    },
    wf = () => {
      const [e, t] = (0, i.useState)([]);
      (0, i.useEffect)(() => {
        const e = localStorage.getItem("shopkeeperToken");
        Tl(
          bl(pf, "orders"),
          (n) => {
            const r = [];
            n.forEach((t) => {
              const n = { id: t.key, ...t.val() };
              n.shopkeeper === e && r.push(n);
            }),
              t(r.reverse());
          },
          (e) => {
            console.error("Error fetching orders:", e);
          }
        );
      }, []);
      return (0, vf.jsx)("div", {
        className: "shopkeeper-cart",
        children: (0, vf.jsxs)("div", {
          className: "container",
          children: [
            (0, vf.jsx)("header", {
              children: (0, vf.jsx)("h1", { children: "Shopkeeper Dashboard" }),
            }),
            (0, vf.jsx)("div", {
              className: "product",
              children:
                0 === e.length
                  ? (0, vf.jsx)("p", { children: "No orders available." })
                  : e.map((e) =>
                      (0, vf.jsxs)(
                        "div",
                        {
                          className: "product-item",
                          children: [
                            e.imageUrl &&
                              (0, vf.jsx)("img", {
                                src: e.imageUrl,
                                alt: "Order ".concat(e.id),
                              }),
                            (0, vf.jsxs)("h3", {
                              className: "customer",
                              children: ["Customer: ", e.name],
                            }),
                            (0, vf.jsxs)("h3", {
                              className: "customer",
                              children: ["Phone: ", e.phoneNumber],
                            }),
                            (0, vf.jsxs)("p", {
                              className: "customer",
                              children: ["Date: ", e.date],
                            }),
                            (0, vf.jsxs)("p", {
                              className: "customer_items",
                              children: ["Items: ", e.items],
                            }),
                            "delivery" === e.deliveryMethod &&
                              (0, vf.jsxs)("p", {
                                className: "customer_address",
                                children: ["Address: ", e.address],
                              }),
                            (0, vf.jsx)("button", {
                              onClick: () =>
                                ((e) => {
                                  const t = {
                                    ...e,
                                    status: "Completed",
                                    message: "Your order has been packed!",
                                  };
                                  Cl(bl(pf, "orders/".concat(e.id)), t)
                                    .then(() => {
                                      alert(
                                        "Order completed for Customer: ".concat(
                                          e.name
                                        )
                                      );
                                    })
                                    .catch((e) => {
                                      console.error("Error updating order:", e);
                                    });
                                })(e),
                              className: "place-order-btn ".concat(
                                "Completed" === e.status ? "completed" : ""
                              ),
                              children:
                                "Completed" === e.status
                                  ? "Completed"
                                  : "Order Packed",
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
            }),
          ],
        }),
      });
    },
    kf = () => {
      const [e, t] = (0, i.useState)([]),
        [n, r] = (0, i.useState)(!0),
        o = localStorage.getItem("token"),
        [s, a] = (0, i.useState)(!1);
      (0, i.useEffect)(() => {
        o && l(o);
      }, [o]);
      const l = (e) => {
        Tl(bl(pf, "orders"), (n) => {
          const i = [];
          n.forEach((t) => {
            const n = t.val();
            (n.customer !== e && n.shopkeeper !== e) || i.push(n);
          }),
            t(i),
            r(!1);
        });
      };
      return (0, vf.jsxs)("div", {
        className: "orders-container",
        children: [
          (0, vf.jsx)("h2", { children: "Your Previous Orders" }),
          n
            ? (0, vf.jsx)("p", { children: "Loading..." })
            : (0, vf.jsx)("div", {
                className: "orders",
                children:
                  0 === e.length
                    ? (0, vf.jsx)("p", {
                        children: "No previous orders available.",
                      })
                    : e
                        .slice()
                        .reverse()
                        .map((e, t) =>
                          (0, vf.jsxs)(
                            "div",
                            {
                              className: "order-item",
                              children: [
                                e.imageUrl &&
                                  (0, vf.jsx)("img", {
                                    src: e.imageUrl,
                                    alt: "Order ".concat(t + 1),
                                  }),
                                (0, vf.jsxs)("h3", {
                                  children: ["Customer: ", e.name],
                                }),
                                (0, vf.jsxs)("p", {
                                  children: ["Phone: ", e.phoneNumber],
                                }),
                                (0, vf.jsxs)("p", {
                                  children: ["Date: ", e.date],
                                }),
                                (0, vf.jsxs)("p", {
                                  children: ["Items: ", e.items],
                                }),
                                e.status &&
                                  (0, vf.jsxs)("p", {
                                    children: ["Status: ", e.status],
                                  }),
                                e.message &&
                                  (0, vf.jsx)("p", {
                                    className: "order-message",
                                    children: e.message,
                                  }),
                              ],
                            },
                            t
                          )
                        ),
              }),
          (0, vf.jsx)("div", {
            className: "contact-us",
            onClick: () => a(!s),
            children: "Contact Us",
          }),
          s &&
            (0, vf.jsxs)("div", {
              className: "contact-info",
              children: [
                (0, vf.jsx)("p", { children: "Phone: 7702387254" }),
                (0, vf.jsx)("p", { children: "Email: laxmiretail@gmail.com" }),
              ],
            }),
        ],
      });
    },
    Cf = () =>
      (0, vf.jsx)(Se, {
        children: (0, vf.jsxs)(_e, {
          children: [
            (0, vf.jsx)(ge, {
              path: "/",
              index: !0,
              element: (0, vf.jsx)(_f, {}),
            }),
            (0, vf.jsx)(ge, {
              path: "/shopkeeper",
              element: (0, vf.jsx)(yf, {}),
            }),
            (0, vf.jsx)(ge, { path: "/items", element: (0, vf.jsx)(bf, {}) }),
            (0, vf.jsx)(ge, {
              path: "/shopkeeperCart",
              element: (0, vf.jsx)(wf, {}),
            }),
            (0, vf.jsx)(ge, {
              path: "/orderhistory",
              element: (0, vf.jsx)(kf, {}),
            }),
          ],
        }),
      });
  s.createRoot(document.getElementById("root")).render(
    (0, vf.jsx)(i.StrictMode, { children: (0, vf.jsx)(Cf, {}) })
  );
})();
//# sourceMappingURL=main.39732f0a.js.map
