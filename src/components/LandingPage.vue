<template>
  <div class="home">
    <section
      class="bg-cover bg-center min-h-screen relative md:overflow-hidden"
      :style="`background-image: url(${imageUrl})`"
    >
      <div
        class="absolute max-w-413 w-screen bg-main h-24 bottom-0 md:bottom-auto md:h-screen z-10 md:z-0"
      ></div>
      <div class="mx-auto max-w-screen-xl min-h-screen z-20 relative">
        <div class="hero-content">
          <div class="fade-in-init relative top-7">
            <h1
            :class="{'fade-out': isOpen, 'fade-in': !isOpen}"
            class="font-bold font-didot text-[80px] sm:text-[140px] md:text-[180px] lg:text-[224px] text-white"
          >
            {{ data.title }}
          </h1>
          </div>
          <div class="relative">
            <Modal @modalOpen="isOpen = !isOpen" />
          </div>
        </div>
      </div>
      <SocialLinks :isOpen="isOpen" />
    </section>
    <div class="overlay"></div>
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
      data: require("@/assets/content/static.json"),
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
@import "../assets/styles/landing_page.scss";
</style>