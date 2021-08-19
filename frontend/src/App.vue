<template>
  <div id="App" class="font-rob">
    <div class="bg-gray-800 text-gray-100 px-8 py-12 grid grid-cols-3 gap-8">
      <ContactForm class="relative h-80 col-span-2"></ContactForm>
    </div>
  </div>
</template>

<script>
import ContactForm from "./components/ContactForm";

export default {
  components: {
    ContactForm,
  },
};
</script>
