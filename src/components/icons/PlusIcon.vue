<template>
  <span class="w-[43px] h-[43px]">
    <svg
      ref="button"
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      class="rounded-full bg-main"
      v-show="!isOpen"
    >
      <g>
        <g>
          <path
            fill="#fff"
            d="M29.295 22.139h-6.833v7.17h-1.934v-7.17h-6.833v-1.815h6.833v-7.11h1.934v7.11h6.833zM21.5 0C9.626 0 0 9.626 0 21.5S9.626 43 21.5 43 43 33.374 43 21.5A21.5 21.5 0 0 0 21.5 0z"
          />
        </g>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    isActive: Boolean
  },
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    isActive(nV) {
      if (!nV) {
        setTimeout(() => {
          this.isOpen = nV
        }, 500)
      } else {
        this.isOpen = nV
      }
    }
  }
}
</script>