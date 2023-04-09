<template>
  <div>
    <div
      class="modal"
      :class="{
        active: isActive,
        animate: isAnimated,
        'animate-back': isAnimatedBack,
      }"
    >
      <div
        class="modal-trigger cursor-pointer flex items-center w-fit"
        @click="toggleModal"
      >
        <PlusIcon :isActive="isActive" />
        <p
          v-show="!isActive"
          class="text-[18px] sm:text-[25px] font-lato text-white w-max ml-4 letter-spc-md"
        >
          {{ data.triggerText }}
        </p>
      </div>
      <div class="modal-content p-7 md:p-14 relative">
        <div class="absolute right-5 top-5 z-30">
          <CloseIcon @closeModal="toggleModal" />
        </div>

        <h1 class="text-[66px] font-didot text-[#611818]">{{ data.title }}</h1>
        <p class="letter-spc-sm text-[18px] pt-6 pb-10">
          {{ data.text }}
        </p>
        <button
          @click="toggleModal"
          class="text-white gradient-main border border-gray-400 font-bold font-lato letter-spc-lg uppercase px-16 py-3.5 mb-5"
        >
          {{ data.buttonText }}
        </button>
      </div>
    </div>
    <div class="modalOverlay" v-show="isActive"></div>
  </div>
</template>

<script>
import PlusIcon from "./icons/PlusIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue";

export default {
  name: "modal-component",
  components: {
    PlusIcon,
    CloseIcon,
  },
  data() {
    return {
      isActive: false,
      isAnimated: false,
      isAnimatedBack: false,
      data: require('@/assets/content/static.json')
    };
  },
  methods: {
    toggleModal() {
      if (!this.isActive) {
        this.isActive = true;
        this.isAnimated = true;
        this.isAnimatedBack = false;
      } else {
        this.isActive = false;
        this.isAnimated = false;
        this.isAnimatedBack = true;
      }
      this.$emit("modalOpen");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/modal.scss";
</style>