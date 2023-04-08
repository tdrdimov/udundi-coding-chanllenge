<template>
  <div class="home">
    <section
      class="bg-cover bg-center min-h-screen relative overflow-hidden"
      :style="`background-image: url(${imageUrl})`"
    >
      <div class="absolute max-w-413 w-screen bg-main h-screen z-0"></div>
      <div class="mx-auto max-w-screen-xl min-h-screen z-10 relative">
        <div class="hero-content">
          <h1
            :class="isOpen ? 'fade-out' : 'fade-in'"
            class="relative top-7 font-bold font-didot text-[224px] text-white"
          >
            Explore
          </h1>
          <div class="relative">
            <Modal @modalOpen="isOpen = !isOpen" />
          </div>
        </div>
      </div>
      <SocialLinks />
    </section>
  </div>
</template>

<script>
import SocialLinks from "./SocialLinks.vue";
import Modal from "./Modal.vue";

export default {
  name: "landing-page",
  components: {
    SocialLinks,
    Modal,
  },
  data() {
    return {
      isOpen: false,
      imageUrl: "",
    };
  },
  mounted() {
    import("@/assets/images/coding-challenge-image.jpg").then((image) => {
      this.imageUrl = image.default;
    });
  },
};
</script>

<style scoped lang="scss">
@import '../assets/styles/landing_page.scss';
</style>