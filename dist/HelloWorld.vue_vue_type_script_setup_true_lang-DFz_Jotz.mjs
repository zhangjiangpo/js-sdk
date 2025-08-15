import { defineComponent as o, createElementBlock as t, openBlock as n, createElementVNode as r, toDisplayString as s } from "vue";
const l = { class: "greetings" }, m = /* @__PURE__ */ o({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(c) {
    return (e, p) => (n(), t("div", l, [
      r("h1", null, s(e.msg), 1)
    ]));
  }
});
export {
  m as _
};
