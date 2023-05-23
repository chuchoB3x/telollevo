import { provide as b, inject as S, defineComponent as g, ref as p, toRefs as k, onMounted as h, onActivated as w, onDeactivated as O, openBlock as y, createBlock as B, resolveDynamicComponent as _, withCtx as j, renderSlot as E, reactive as x } from "vue";
import C from "simplebar";
function H(e) {
  return Object.keys(e).reduce((n, t) => {
    const r = e[t];
    return r ? { ...n, [t]: r } : n;
  }, {});
}
const f = Symbol("simplebar");
function M(e) {
  b(f, e);
}
function F() {
  return S(f);
}
const L = /* @__PURE__ */ g({
  __name: "ScrollView",
  props: {
    tag: { default: "div" },
    autoHide: null,
    classNames: null,
    clickOnTrack: null,
    direction: null,
    forceVisible: null,
    scrollbarMaxSize: null,
    scrollbarMinSize: null,
    timeout: null
  },
  emits: ["created", "scroll", "wheel"],
  setup(e, { expose: n, emit: t }) {
    const r = e, l = p(null), o = p(null), { tag: V, ...v } = k(r);
    n(l), M(l);
    function s(i) {
      if (!o.value || i === "activated" && l.value)
        return;
      const u = { ...x(v) }, d = H(u), a = new C(
        o.value,
        Object.keys(d).length > 0 ? d : void 0
      );
      l.value = a;
      const m = a.getScrollElement();
      m.addEventListener("scroll", (c) => {
        t("scroll", c);
      }), m.addEventListener("wheel", (c) => {
        t("wheel", c);
      }), t("created", a);
    }
    return h(() => s("mounted")), w(() => s("activated")), O(() => {
      l.value = null;
    }), (i, u) => (y(), B(_(e.tag), {
      ref_key: "element",
      ref: o
    }, {
      default: j(() => [
        E(i.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  L as SimpleBar,
  F as useSimplebar
};
