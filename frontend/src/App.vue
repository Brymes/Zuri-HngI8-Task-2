<template>
  <div id="Brymes Resume" class="font-rob">
    <div class="bg-gray-800 text-gray-100 px-8 py-12 grid grid-cols-3 gap-8">
      <div class="relative h-70 col-span-1"></div>
      <Skills class="relative h-120 col-span-2"></Skills>
      <ContactForm class="relative h-80 col-span-2"></ContactForm>
    </div>
  </div>
</template>

<script>
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";

export default {
  components: {
    ContactForm,
    Skills,
  },
};
</script>
