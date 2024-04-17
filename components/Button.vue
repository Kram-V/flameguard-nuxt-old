<template>
  <button
    class="shadow-lg outline-none" 
    :class="`
    ${
      btnRed
        ? 'shadow-lg bg-red-color hover:bg-dark-red-color duration-500  text-white font-semibold text-base px-2 py-2 sm:px-3 '
        : ''
    }
    ${
      btnRedOutlined
        ? 'shadow-lg border border-red-color hover:bg-red-color duration-500 text-red-color hover:text-white py-2 px-3 '
        : ''
    }
    ${
      btnWhite
        ? 'shadow-lg bg-white hover:bg-gray-300 duration-500  text-black font-semibold text-base px-2 py-2 sm:px-3 '
        : ''
    }
    ${
      btnWhiteOutlined
        ? 'bg-transparent  text-white font-bold hover:text-black hover:bg-white border border-white hover:border-transparent duration-500 py-2 px-3 '
        : ''
    }
    ${
      btnGray
        ? 'shadow-lg bg-gray-color text-white transition-transform duration-300 transform hover:-translate-y-1 py-2 px-3 '
        : ''
    }
    ${
      btnGrayOutlined
        ? 'bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white border border-gray-500 hover:border-transparent transition duration-300 py-2 px-3 '
        : ''
    }
    ${btnMinWidth}
    ${classBtn}

    ${isRounded ? 'rounded-md' : ''}
    ${isRoundedRight ? 'rounded-r' : ''}
    `"
  >
    <slot>Click Me!</slot>
  </button>
</template>

<script setup>
defineProps({
  btnRed: {
    type: Boolean,
  },

  btnRedOutlined: {
    type: Boolean,
  },

  btnWhite: {
    type: Boolean,
  },

  btnWhiteOutlined: {
    type: Boolean,
  },

  btnGray: {
    type: Boolean,
  },

  btnGrayOutlined: {
    type: Boolean,
  },

  isRounded: {
    type: Boolean,
  },

  isRoundedRight: {
    type: Boolean,
  },

  btnMinWidth: {
    type: String,
    default: "min-w-[100px]",
  },

  classBtn: {
    type: String,
  },
});
</script>

<style scoped>
.rounded-r {
  border-top-right-radius: 0.5rem; 
  border-bottom-right-radius: 0.5rem; 
}
</style>