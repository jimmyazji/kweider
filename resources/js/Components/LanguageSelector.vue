
<template>
  <BreezeDropdown :align=align width="32">
    <template #trigger>
      <slot />
    </template>
    <template #content>
      <BreezeDropdownLink @click="setLocale('en')"
        ><span class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="1235"
            height="650"
            viewBox="0 0 7410 3900"
            class="w-6 h-6 mx-1"
          >
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path
              d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
              stroke="#fff"
              stroke-width="300"
            />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
              <g id="d">
                <g id="c">
                  <g id="e">
                    <g id="b">
                      <path
                        id="a"
                        d="m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                      />
                      <use xlink:href="#a" y="420" />
                      <use xlink:href="#a" y="840" />
                      <use xlink:href="#a" y="1260" />
                    </g>
                    <use xlink:href="#a" y="1680" />
                  </g>
                  <use xlink:href="#b" x="247" y="210" />
                </g>
                <use xlink:href="#c" x="494" />
              </g>
              <use xlink:href="#d" x="988" />
              <use xlink:href="#c" x="1976" />
              <use xlink:href="#e" x="2470" />
            </g>
          </svg>
          English
        </span></BreezeDropdownLink
      >
      <BreezeDropdownLink @click="setLocale('ar')"
        ><span class="flex items-center"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 180 120"
            class="w-6 h-6 mx-1"
          >
            <path d="M0 0h180v120H0z" />
            <path fill="#fff" d="M0 0h180v80H0z" />
            <path fill="#ce1126" d="M0 0h180v40H0z" />
            <g id="d" fill="#007a3d">
              <g id="c">
                <g id="b">
                  <path d="M54 47v13h8" transform="rotate(18 54 47)" id="a" />
                  <use xlink:href="#a" x="-108" transform="scale(-1 1)" />
                </g>
                <use xlink:href="#b" transform="rotate(72 54 60)" />
              </g>
              <use xlink:href="#b" transform="rotate(-72 54 60)" />
              <use xlink:href="#c" transform="rotate(144 54 60)" />
            </g>
            <use xlink:href="#d" x="72" />
          </svg>
          العربية
        </span>
      </BreezeDropdownLink>
    </template>
  </BreezeDropdown>
</template>
<script>
import BreezeDropdown from "@/Components/Dropdown.vue";
import BreezeDropdownLink from "@/Components/DropdownLink.vue";

export default {
  props: {
    align: {
      default: "right",
    },
  },
  components: {
    BreezeDropdown,
    BreezeDropdownLink,
  },
  methods: {
    setLocale(locale) {
      if (localStorage.getItem("lang") != locale) {
        localStorage.setItem("lang", locale);
        location.reload();
      }
    },
  },
};
</script>