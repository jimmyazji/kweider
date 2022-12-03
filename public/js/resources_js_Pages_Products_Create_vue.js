"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Products_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: {
      type: String,
      "default": "submit"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Checkbox.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Checkbox.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["update:checked"],
  props: {
    checked: {
      type: [Array, Boolean],
      "default": false
    },
    value: {
      "default": null
    }
  },
  computed: {
    proxyChecked: {
      get: function get() {
        return this.checked;
      },
      set: function set(val) {
        this.$emit("update:checked", val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Input.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Input.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextArea.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextArea.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Components_Input_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Input.vue */ "./resources/js/Components/Input.vue");
/* harmony import */ var _Components_Button_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Button.vue */ "./resources/js/Components/Button.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Components_Checkbox_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Checkbox.vue */ "./resources/js/Components/Checkbox.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_TextArea_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/TextArea.vue */ "./resources/js/Components/TextArea.vue");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Create',
  props: {
    categories: Object,
    products: Object,
    filters: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var search = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(props.filters.search);
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      en_name: "",
      ar_name: "",
      en_description: "",
      ar_description: "",
      weight: "",
      category_id: "",
      box: false,
      box_l: "",
      box_w: "",
      box_h: "",
      box_q: "",
      box_w_c: "",
      box_w_a: "",
      "package": false,
      pack_l: "",
      pack_w: "",
      pack_h: "",
      pack_q: "",
      pack_w_c: "",
      pack_w_a: "",
      prod_image: null,
      prod_img_url: null,
      box_image: null,
      box_img_url: null,
      pack_image: null,
      pack_img_url: null,
      _method: "POST"
    });
    var prod_id = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(null);

    var edit = function edit(prod) {
      clear();
      prod_id.value = prod.id;
      form.en_name = prod.name.en;
      form.ar_name = prod.name.ar;
      form.weight = prod.weight;
      form.quantity = prod.quantity;
      form.category_id = prod.category_id;
      form.en_description = prod.description.en;
      form.ar_description = prod.description.ar;
      form.prod_img_url = prod.prod_url;
      form.box_img_url = prod.box_url;
      form.pack_img_url = prod.pack_url;

      if (prod.box_l) {
        form.box = true;
        form.box_l = prod.box_l;
        form.box_w = prod.box_w;
        form.box_h = prod.box_h;
        form.box_q = prod.box_q;
        form.box_w_c = prod.box_w_c;
        form.box_w_a = prod.box_w_a;
      }

      if (prod.pack_l) {
        form["package"] = true;
        form.pack_l = prod.pack_l;
        form.pack_w = prod.pack_w;
        form.pack_h = prod.pack_h;
        form.pack_q = prod.pack_q;
        form.pack_w_c = prod.pack_w_c;
        form.pack_w_a = prod.pack_w_a;
      }
    };

    var submit = function submit() {
      if (!prod_id.value) {
        form.post(route("products.index"), {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            return clear();
          }
        });
      } else {
        form._method = "PUT";
        form.post(route("products.update", prod_id.value), {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            return clear();
          }
        });
      }
    };

    var clear = function clear() {
      prod_id.value = null;
      form.reset();
    };

    var destroy = function destroy(id) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia["delete"]("/products/".concat(id), {
        onBefore: function onBefore() {
          return confirm("Are you sure you want to delete this product? this cannot be undone");
        },
        preserveScroll: true
      });
    };

    var previewProdImage = function previewProdImage(e) {
      form.prod_image = e.target.files[0];
      form.prod_img_url = URL.createObjectURL(form.prod_image);
    };

    var previewBoxImage = function previewBoxImage(e) {
      form.box_image = e.target.files[0];
      form.box_img_url = URL.createObjectURL(form.box_image);
    };

    var previewPackImage = function previewPackImage(e) {
      form.pack_image = e.target.files[0];
      form.pack_img_url = URL.createObjectURL(form.pack_image);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_5__.watch)(search, lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(function (value) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.get(route("product.create"), {
        search: value
      }, {
        preserveScroll: true,
        replace: true,
        preserveState: true
      });
    }, 300));
    var __returned__ = {
      props: props,
      search: search,
      form: form,
      prod_id: prod_id,
      edit: edit,
      submit: submit,
      clear: clear,
      destroy: destroy,
      previewProdImage: previewProdImage,
      previewBoxImage: previewBoxImage,
      previewPackImage: previewPackImage,
      Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Head,
      Input: _Components_Input_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Button: _Components_Button_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm,
      Inertia: _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia,
      Checkbox: _Components_Checkbox_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_5__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_5__.watch,
      debounce: (lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()),
      TextArea: _Components_TextArea_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=template&id=067f8786":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=template&id=067f8786 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    type: $props.type,
    "class": "border-lonestar-500 bg-lonestar-600 cursor-pointer inline-flex items-center select-none transform transition ease-in-out duration-200 rounded-lg px-3 h-8 min-h-8 font-semibold uppercase text-sm border text-almond-300 focus:outline-none active:scale-95 hover:bg-lonestar-500 hover:border-lonestar-500 focus:scale-105 hover:scale-105"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 8
  /* PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Checkbox.vue?vue&type=template&id=71756f8e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Checkbox.vue?vue&type=template&id=71756f8e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    type: "checkbox",
    value: $props.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $options.proxyChecked = $event;
    }),
    "class": "rounded-md border text-lonestar-500 border-lonestar-800 border-opacity-40 focus:ring-1 w-5 h-5 focus:ring-lonestar-600 focus:ring-opacity-50 focus:outline-none bg-almond-100"
  }, null, 8
  /* PROPS */
  , _hoisted_1)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $options.proxyChecked]]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Input.vue?vue&type=template&id=43da0f8f":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Input.vue?vue&type=template&id=43da0f8f ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-sm outline-none border-opacity-20 flex-shrink transition-all duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent text-lonestar-800 px-5 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10", $props.modelValue ? '' : 'focus:ltr:pl-8  focus:rtl:pr-8']),
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    ref: "input"
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextArea.vue?vue&type=template&id=60afdba5":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextArea.vue?vue&type=template&id=60afdba5 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
    "class": "text-sm bg-transparent outline-none border-opacity-20 flex-shrink transition-all duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent focus:ltr:pl-8 focus:rtl:pr-8 text-lonestar-800 px-5 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10 pt-4",
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    ref: "input"
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-almond-200 shadow"
};
var _hoisted_2 = {
  "class": "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
};
var _hoisted_3 = {
  "class": "font-semibold text-xl text-gray-800 leading-tight"
};
var _hoisted_4 = {
  "class": "py-12"
};
var _hoisted_5 = {
  "class": "max-w-7xl mx-auto sm:px-6 lg:px-8"
};
var _hoisted_6 = {
  "class": "bg-white overflow-hidden shadow-sm sm:rounded-md"
};
var _hoisted_7 = {
  "class": "p-6 bg-white border-b border-gray-200"
};
var _hoisted_8 = ["onSubmit"];
var _hoisted_9 = {
  "class": "grid md:grid-cols-2 gap-2"
};
var _hoisted_10 = ["textContent"];
var _hoisted_11 = ["textContent"];
var _hoisted_12 = {
  "class": "grid md:grid-cols-2 gap-2"
};
var _hoisted_13 = {
  disabled: "",
  value: ""
};
var _hoisted_14 = ["value"];
var _hoisted_15 = ["textContent"];
var _hoisted_16 = ["textContent"];
var _hoisted_17 = {
  "class": "grid md:grid-cols-2 gap-2"
};
var _hoisted_18 = ["textContent"];
var _hoisted_19 = ["textContent"];
var _hoisted_20 = {
  "class": "grid sm:grid-cols-2 gap-2 my-2 mt-3"
};
var _hoisted_21 = {
  "class": "flex justify-center"
};
var _hoisted_22 = {
  "class": "mx-2 text-sm text-lonestar-700"
};
var _hoisted_23 = {
  "class": "grid grid-cols-2 md:grid-cols-4 gap-2 sm:hidden"
};
var _hoisted_24 = {
  id: "tooltip-default",
  role: "tooltip",
  "class": "inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tooltip-arrow",
  "data-popper-arrow": ""
}, null, -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "flex justify-center"
};
var _hoisted_27 = {
  "class": "mx-2 text-sm text-lonestar-700"
};
var _hoisted_28 = {
  "class": "grid sm:grid-cols-2 gap-2 mt-3"
};
var _hoisted_29 = {
  "class": "hidden sm:grid grid-cols-2 md:grid-cols-4 gap-2"
};
var _hoisted_30 = {
  "class": "grid grid-cols-2 md:grid-cols-4 gap-2"
};
var _hoisted_31 = {
  "class": "grid grid-cols-2 gap-2 mt-1"
};
var _hoisted_32 = {
  "class": "hidden sm:grid grid-cols-1 md:grid-cols-2 gap-2"
};
var _hoisted_33 = {
  "class": "hidden sm:grid grid-cols-1 md:grid-cols-2 gap-2"
};
var _hoisted_34 = {
  "class": "grid grid-cols-1 md:grid-cols-2 gap-2 mt-1"
};
var _hoisted_35 = ["textContent"];
var _hoisted_36 = ["textContent"];
var _hoisted_37 = ["textContent"];
var _hoisted_38 = ["textContent"];
var _hoisted_39 = ["textContent"];
var _hoisted_40 = ["textContent"];
var _hoisted_41 = ["textContent"];
var _hoisted_42 = ["textContent"];
var _hoisted_43 = ["textContent"];
var _hoisted_44 = ["textContent"];
var _hoisted_45 = ["textContent"];
var _hoisted_46 = ["textContent"];
var _hoisted_47 = {
  "class": "flex flex-wrap justify-evenly items-center"
};
var _hoisted_48 = {
  "class": "max-w-screen w-80 h-80 mx-auto flex justify-center items-center rounded-md mt-5 border-2 border-lonestar-300 text-lonestar-400 cursor-pointer",
  "for": "prod_image"
};
var _hoisted_49 = ["src"];
var _hoisted_50 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "0.2",
  "class": "mx-auto w-1/2 md:w-40 md:h-40",
  viewBox: "0 0 24 24"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 5v14M5 12h14"
}, null, -1
/* HOISTED */
);

var _hoisted_52 = [_hoisted_51];
var _hoisted_53 = ["textContent"];
var _hoisted_54 = ["src"];
var _hoisted_55 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "0.2",
  "class": "mx-auto w-1/2 md:w-40 md:h-40",
  viewBox: "0 0 24 24"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 5v14M5 12h14"
}, null, -1
/* HOISTED */
);

var _hoisted_57 = [_hoisted_56];
var _hoisted_58 = ["disabled"];
var _hoisted_59 = ["textContent"];
var _hoisted_60 = ["src"];
var _hoisted_61 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "0.2",
  "class": "mx-auto w-1/2 md:w-40 md:h-40",
  viewBox: "0 0 24 24"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 5v14M5 12h14"
}, null, -1
/* HOISTED */
);

var _hoisted_63 = [_hoisted_62];
var _hoisted_64 = ["disabled"];
var _hoisted_65 = ["textContent"];
var _hoisted_66 = {
  "class": "lg:flex items-center justify-between mt-4"
};
var _hoisted_67 = {
  "class": "flex justify-between items-center mt-4 lg:mt-0"
};
var _hoisted_68 = {
  "class": "overflow-x-auto relative shadow-md sm:rounded-lg mt-6"
};
var _hoisted_69 = {
  "class": "w-full text-sm text-left text-lonestar-700"
};
var _hoisted_70 = {
  "class": "text-xs text-lonestar-700 uppercase bg-lonestar-500 bg-opacity-50"
};

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": ""
}, null, -1
/* HOISTED */
);

var _hoisted_72 = {
  colspan: "2",
  "class": "pt-1"
};
var _hoisted_73 = {
  "class": "flex justify-center bg-lonestar-500 rounded-md text-almond-100 py-2"
};
var _hoisted_74 = {
  colspan: "2",
  "class": "pt-1"
};
var _hoisted_75 = {
  "class": "flex justify-center bg-lonestar-500 rounded-md text-almond-100 py-2"
};

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  colspan: "2",
  "class": "pt-1"
}, null, -1
/* HOISTED */
);

var _hoisted_77 = {
  colspan: "6",
  "class": "pt-1"
};
var _hoisted_78 = {
  "class": "flex justify-center bg-lonestar-500 rounded-md text-almond-100 py-2"
};
var _hoisted_79 = {
  colspan: "6",
  "class": "pt-1"
};
var _hoisted_80 = {
  "class": "flex justify-center bg-lonestar-500 rounded-md text-almond-100 py-2"
};

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, null, -1
/* HOISTED */
);

var _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "py-2"
}, null, -1
/* HOISTED */
);

var _hoisted_83 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_84 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_85 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_86 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_87 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_88 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_89 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_90 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_91 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_92 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_93 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_94 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_95 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_96 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_97 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_98 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_99 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};
var _hoisted_100 = {
  scope: "col",
  "class": "py-2 px-6 text-start"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "py-3 text-start"
}, " Action ", -1
/* HOISTED */
);

var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "py-4"
}, null, -1
/* HOISTED */
);

var _hoisted_103 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_104 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_105 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_106 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_107 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_108 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_109 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_110 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_111 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_112 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_113 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_114 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_115 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_116 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_117 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_118 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_119 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_120 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_121 = {
  "class": "py-4 px-6 text-start"
};
var _hoisted_122 = {
  "class": "flex justify-end px-2"
};
var _hoisted_123 = ["onClick"];

var _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-edit text-lonestar-500"
}, null, -1
/* HOISTED */
);

var _hoisted_125 = [_hoisted_124];
var _hoisted_126 = ["onClick"];

var _hoisted_127 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash text-red-700"
}, null, -1
/* HOISTED */
);

var _hoisted_128 = [_hoisted_127];
var _hoisted_129 = {
  key: 1
};
var _hoisted_130 = {
  colspan: "20",
  "class": "py-4 px-6"
};
var _hoisted_131 = {
  "class": "flex justify-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Head"], {
    title: _ctx.$t('manage products')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("manage products")), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "en_name",
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["block mt-1 w-full", {
      'input-error': $setup.form.errors.en_name
    }]),
    modelValue: $setup.form.en_name,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.en_name = $event;
    }),
    placeholder: _ctx.$t('en name'),
    autofocus: "",
    autocomplete: "en_name"
  }, null, 8
  /* PROPS */
  , ["modelValue", "placeholder", "class"]), $setup.form.errors.en_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.en_name),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "ar_name",
    type: "text",
    modelValue: $setup.form.ar_name,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.ar_name = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["block mt-1 w-full", {
      'input-error': $setup.form.errors.ar_name
    }]),
    autocomplete: "ar_name",
    placeholder: _ctx.$t('ar name')
  }, null, 8
  /* PROPS */
  , ["modelValue", "placeholder", "class"]), $setup.form.errors.ar_name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.ar_name),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "category_id",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["block mt-1 w-full appearance-none text-sm outline-none border-opacity-20 flex-shrink-0 transition-colors duration-200 h-12 border border-lonestar-500 rounded focus:border-transparent text-lonestar-500 px-5 pr-10 focus:ring-2 focus:ring-lonestar-500 focus:ring-opacity-10 font-normal", {
      'text-gray-500': !$setup.form.category_id,
      'select-error': $setup.form.errors.category_id
    }]),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.category_id = $event;
    }),
    autocomplete: "category_id"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("select category")), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: category.id,
      value: category.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 9
    /* TEXT, PROPS */
    , _hoisted_14);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.category_id]]), $setup.form.errors.category_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.category_id),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "weight",
    type: "number",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["block mt-1 w-full", {
      'input-error': $setup.form.errors.weight
    }]),
    modelValue: $setup.form.weight,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.weight = $event;
    }),
    placeholder: _ctx.$t('weight'),
    autocomplete: "weight"
  }, null, 8
  /* PROPS */
  , ["modelValue", "placeholder", "class"]), $setup.form.errors.weight ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.weight),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TextArea"], {
    id: "en_description",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none px-5", {
      'textarea-error': $setup.form.errors.en_description
    }]),
    autocomplete: "en_description",
    modelValue: $setup.form.en_description,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.en_description = $event;
    }),
    placeholder: _ctx.$t('en desc')
  }, null, 8
  /* PROPS */
  , ["modelValue", "placeholder", "class"]), $setup.form.errors.en_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.en_description),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_18)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TextArea"], {
    id: "ar_description",
    modelValue: $setup.form.ar_description,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.ar_description = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["block mt-1 w-full textarea h-24 textarea-bordered focus:border-transparent resize-none", {
      'textarea-error': $setup.form.errors.ar_description
    }]),
    autocomplete: "ar_description",
    placeholder: _ctx.$t('ar desc')
  }, null, 8
  /* PROPS */
  , ["modelValue", "placeholder", "class"]), $setup.form.errors.ar_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.ar_description),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Checkbox"], {
    name: "box",
    modelValue: $setup.form.box,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.form.box = $event;
    }),
    "class": "checkbox-primary"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("box")), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_w",
    type: "number",
    autocomplete: "box_w",
    modelValue: $setup.form.box_w,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form.box_w = $event;
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('width'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_w
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_l",
    type: "number",
    autocomplete: "box_l",
    modelValue: $setup.form.box_l,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form.box_l = $event;
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('length'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_l
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    "data-tooltip-target": "tooltip-default",
    id: "box_h",
    type: "number",
    autocomplete: "box_h",
    modelValue: $setup.form.box_h,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.form.box_h = $event;
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('height'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_h
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("height")) + " ", 1
  /* TEXT */
  ), _hoisted_25]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_q",
    type: "number",
    autocomplete: "box_q",
    modelValue: $setup.form.box_q,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.form.box_q = $event;
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('quantity'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_q
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_w_c",
    type: "number",
    autocomplete: "box_w_c",
    modelValue: $setup.form.box_w_c,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.form.box_w_c = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_w_c
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('clear weight')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_w_a",
    type: "number",
    autocomplete: "box_w_a",
    modelValue: $setup.form.box_w_a,
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.form.box_w_a = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_w_a
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('actual weight')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Checkbox"], {
    name: "package",
    modelValue: $setup.form["package"],
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.form["package"] = $event;
    }),
    "class": "checkbox-primary"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("package")), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_w",
    type: "number",
    autocomplete: "box_w",
    modelValue: $setup.form.box_w,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.form.box_w = $event;
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('width'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_w
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_l",
    type: "number",
    autocomplete: "box_l",
    modelValue: $setup.form.box_l,
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.form.box_l = $event;
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('length'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_l
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_h",
    type: "number",
    autocomplete: "box_h",
    modelValue: $setup.form.box_h,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.form.box_h = $event;
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('height'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_h
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_q",
    type: "number",
    autocomplete: "box_q",
    modelValue: $setup.form.box_q,
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.form.box_q = $event;
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('quantity'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_q
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "pack_w",
    type: "number",
    autocomplete: "pack_w",
    modelValue: $setup.form.pack_w,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.form.pack_w = $event;
    }),
    disabled: !$setup.form["package"],
    placeholder: _ctx.$t('width'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.pack_w
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "pack_l",
    type: "number",
    autocomplete: "pack_l",
    modelValue: $setup.form.pack_l,
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.form.pack_l = $event;
    }),
    disabled: !$setup.form["package"],
    placeholder: _ctx.$t('length'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.pack_l
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "pack_h",
    type: "number",
    autocomplete: "pack_h",
    modelValue: $setup.form.pack_h,
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.form.pack_h = $event;
    }),
    disabled: !$setup.form["package"],
    placeholder: _ctx.$t('height'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.pack_h
    })
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled", "placeholder", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "pack_q",
    type: "number",
    autocomplete: "pack_q",
    modelValue: $setup.form.pack_q,
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $setup.form.pack_q = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.pack_q
    }),
    disabled: !$setup.form["package"],
    placeholder: _ctx.$t('quantity')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "pack_w_c",
    type: "number",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sm:hidden", {
      'input-error': $setup.form.errors.pack_w_c
    }]),
    autocomplete: "pack_w_c",
    modelValue: $setup.form.pack_w_c,
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $setup.form.pack_w_c = $event;
    }),
    disabled: !$setup.form["package"],
    placeholder: _ctx.$t('clear weight')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "pack_w_a",
    type: "number",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["sm:hidden", {
      'input-error': $setup.form.errors.pack_w_a
    }]),
    autocomplete: "pack_w_a",
    modelValue: $setup.form.pack_w_a,
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $setup.form.pack_w_a = $event;
    }),
    disabled: !$setup.form["package"],
    placeholder: _ctx.$t('actual weight')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_w_c",
    type: "number",
    autocomplete: "box_w_c",
    modelValue: $setup.form.box_w_c,
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $setup.form.box_w_c = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_w_c
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('clear weight')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "box_w_a",
    type: "number",
    autocomplete: "box_w_a",
    modelValue: $setup.form.box_w_a,
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $setup.form.box_w_a = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.box_w_a
    }),
    disabled: !$setup.form.box,
    placeholder: _ctx.$t('actual weight')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "pack_w_c",
    type: "number",
    autocomplete: "pack_w_c",
    modelValue: $setup.form.pack_w_c,
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $setup.form.pack_w_c = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.pack_w_c
    }),
    disabled: !$setup.form["package"],
    placeholder: _ctx.$t('clear weight')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    id: "pack_w_a",
    type: "number",
    autocomplete: "pack_w_a",
    modelValue: $setup.form.pack_w_a,
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $setup.form.pack_w_a = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'input-error': $setup.form.errors.pack_w_a
    }),
    disabled: !$setup.form["package"],
    placeholder: _ctx.$t('actual weight')
  }, null, 8
  /* PROPS */
  , ["modelValue", "class", "disabled", "placeholder"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$setup.form.errors.box_w ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.box_w),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_35)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.box_l ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.box_l),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_36)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.box_h ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.box_h),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_37)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.box_q ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 3,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.box_q),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_38)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.box_w_c ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 4,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.box_w_c),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_39)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.box_w_a ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 5,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.box_w_a),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_40)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$setup.form.errors.pack_w ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.pack_w),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_41)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.pack_l ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.pack_l),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_42)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.pack_h ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.pack_h),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_43)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.pack_q ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 3,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.pack_q),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_44)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.pack_w_c ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 4,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.pack_w_c),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_45)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.pack_w_a ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 5,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.pack_w_a),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_46)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_48, [$setup.form.prod_img_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    "class": "w-full h-full object-cover rounded-md",
    src: $setup.form.prod_img_url,
    alt: "Product Image"
  }, null, 8
  /* PROPS */
  , _hoisted_49)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_50, _hoisted_52)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "prod_image",
    type: "file",
    accept: "image/*",
    onChange: $setup.previewProdImage,
    "class": "hidden",
    ref: "photo"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  )]), $setup.form.errors.prod_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.prod_image),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_53)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["max-w-screen w-80 h-80 mx-auto flex justify-center items-center rounded-md mt-5 border-2 border-lonestar-300 text-lonestar-400 cursor-pointer", $setup.form.box ? 'cursor-pointer' : 'cursor-not-allowed']),
    "for": "box_image"
  }, [$setup.form.box_img_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    "class": "w-full h-full object-cover rounded-md",
    src: $setup.form.box_img_url,
    alt: "Box Image"
  }, null, 8
  /* PROPS */
  , _hoisted_54)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_55, _hoisted_57)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "box_image",
    type: "file",
    disabled: $setup.form.box == false,
    accept: "image/*",
    onChange: $setup.previewBoxImage,
    "class": "hidden"
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_58)], 2
  /* CLASS */
  ), $setup.form.errors.box_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.box_image),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_59)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["max-w-screen w-80 h-80 mx-auto flex justify-center items-center rounded-md mt-5 border-2 border-lonestar-300 text-lonestar-400", $setup.form["package"] ? 'cursor-pointer' : 'cursor-not-allowed']),
    "for": "pack_image"
  }, [$setup.form.pack_img_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    "class": "w-full h-full object-cover rounded-md",
    src: $setup.form.pack_img_url,
    alt: "Package Image"
  }, null, 8
  /* PROPS */
  , _hoisted_60)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_61, _hoisted_63)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "pack_image",
    type: "file",
    accept: "image/*",
    disabled: $setup.form["package"] == false,
    onChange: $setup.previewPackImage,
    "class": "hidden"
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_64)], 2
  /* CLASS */
  ), $setup.form.errors.pack_image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.pack_image),
    "class": "text-red-700 text-sm ml-2 mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_65)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
    type: "text",
    "class": "input md:w-96 w-full mr-1 placeholder-lonestar-400 text-lonestar-800",
    placeholder: _ctx.$t('search'),
    modelValue: $setup.search,
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $setup.search = $event;
    }),
    autofocus: ""
  }, null, 8
  /* PROPS */
  , ["placeholder", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('menu.index'),
    "class": "text-sm underline hover:text-lonestar-500 font-semibold mx-1 hidden lg:inline-flex"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("back")), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Button"], {
    type: "button",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-5 mx-0.5", {
      'opacity-25': $setup.form.processing
    }]),
    onClick: _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.clear();
    }, ["prevent"]))
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("clear")), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Button"], {
    type: "submit",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-5 mx-0.5", {
      'opacity-25': $setup.form.processing
    }]),
    disabled: $setup.form.processing
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("submit")), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class", "disabled"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('menu.index'),
    "class": "text-sm underline hover:text-lonestar-500 font-semibold mx-1 lg:hidden"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("back")), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("english")), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("arabic")), 1
  /* TEXT */
  )]), _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("box")), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("package")), 1
  /* TEXT */
  )]), _hoisted_81]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("name")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("description")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("name")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("description")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("category")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("weight")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("width")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("length")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("height")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_92, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("quantity")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("clear weight")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("actual weight")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("width")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("length")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("height")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("quantity")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("clear weight")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("actual weight")), 1
  /* TEXT */
  ), _hoisted_101])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$props.products.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.products, function (product, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([index % 2 != 0 ? 'bg-lonestar-50' : 'bg-white', "border-b"])
    }, [_hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_103, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name.en), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.description.en), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name.ar), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.description.ar), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.category), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.weight ? product.weight : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.box_w ? product.box_w : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_110, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.box_l ? product.box_l : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_111, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.box_h ? product.box_h : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.box_q ? product.box_q : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_113, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.box_w_c ? product.box_w_c : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.box_w_a ? product.box_w_a : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.pack_w ? product.pack_w : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_116, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.pack_l ? product.pack_l : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_117, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.pack_h ? product.pack_h : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.pack_q ? product.pack_q : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_119, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.pack_w_c ? product.pack_w_c : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.pack_w_a ? product.pack_w_a : "-"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $setup.edit(product);
      }
    }, _hoisted_125, 8
    /* PROPS */
    , _hoisted_123), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $setup.destroy(product.id);
      }
    }, _hoisted_128, 8
    /* PROPS */
    , _hoisted_126)])])], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.products.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_129, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_131, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("no results")), 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Components/Button.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Button.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_067f8786__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=067f8786 */ "./resources/js/Components/Button.vue?vue&type=template&id=067f8786");
/* harmony import */ var _Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js */ "./resources/js/Components/Button.vue?vue&type=script&lang=js");
/* harmony import */ var _home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_067f8786__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Button.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Checkbox.vue":
/*!**********************************************!*\
  !*** ./resources/js/Components/Checkbox.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkbox_vue_vue_type_template_id_71756f8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=template&id=71756f8e */ "./resources/js/Components/Checkbox.vue?vue&type=template&id=71756f8e");
/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js */ "./resources/js/Components/Checkbox.vue?vue&type=script&lang=js");
/* harmony import */ var _home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Checkbox_vue_vue_type_template_id_71756f8e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Checkbox.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Input.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Input.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_vue_vue_type_template_id_43da0f8f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=43da0f8f */ "./resources/js/Components/Input.vue?vue&type=template&id=43da0f8f");
/* harmony import */ var _Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js */ "./resources/js/Components/Input.vue?vue&type=script&lang=js");
/* harmony import */ var _home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Input_vue_vue_type_template_id_43da0f8f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Input.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/TextArea.vue":
/*!**********************************************!*\
  !*** ./resources/js/Components/TextArea.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextArea_vue_vue_type_template_id_60afdba5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea.vue?vue&type=template&id=60afdba5 */ "./resources/js/Components/TextArea.vue?vue&type=template&id=60afdba5");
/* harmony import */ var _TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextArea.vue?vue&type=script&lang=js */ "./resources/js/Components/TextArea.vue?vue&type=script&lang=js");
/* harmony import */ var _home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TextArea_vue_vue_type_template_id_60afdba5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/TextArea.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Products/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Products/Create.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_53ba9be4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=53ba9be4 */ "./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4");
/* harmony import */ var _Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Products/Create.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_jimmyazji_projects_kweider_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_53ba9be4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Products/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Button.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Components/Button.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Checkbox.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/Checkbox.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Checkbox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Checkbox.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Input.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Input.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Input.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Input.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/TextArea.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/TextArea.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextArea.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextArea.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Products/Create.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Products/Create.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Button.vue?vue&type=template&id=067f8786":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/Button.vue?vue&type=template&id=067f8786 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_067f8786__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Button_vue_vue_type_template_id_067f8786__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Button.vue?vue&type=template&id=067f8786 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Button.vue?vue&type=template&id=067f8786");


/***/ }),

/***/ "./resources/js/Components/Checkbox.vue?vue&type=template&id=71756f8e":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Checkbox.vue?vue&type=template&id=71756f8e ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkbox_vue_vue_type_template_id_71756f8e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkbox_vue_vue_type_template_id_71756f8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Checkbox.vue?vue&type=template&id=71756f8e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Checkbox.vue?vue&type=template&id=71756f8e");


/***/ }),

/***/ "./resources/js/Components/Input.vue?vue&type=template&id=43da0f8f":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/Input.vue?vue&type=template&id=43da0f8f ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_template_id_43da0f8f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Input_vue_vue_type_template_id_43da0f8f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Input.vue?vue&type=template&id=43da0f8f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Input.vue?vue&type=template&id=43da0f8f");


/***/ }),

/***/ "./resources/js/Components/TextArea.vue?vue&type=template&id=60afdba5":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/TextArea.vue?vue&type=template&id=60afdba5 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_template_id_60afdba5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextArea_vue_vue_type_template_id_60afdba5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextArea.vue?vue&type=template&id=60afdba5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/TextArea.vue?vue&type=template&id=60afdba5");


/***/ }),

/***/ "./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_53ba9be4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_53ba9be4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=53ba9be4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4");


/***/ })

}]);