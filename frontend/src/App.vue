<template>
    <div id="Brymes Resume" class="font-rob">
    <div class="bg-gray-800 text-gray-100 grid grid-cols-3 gap-8">
      <div class="relative h-70 col-span-1"></div>
      <Skills class="h-full col-span-3"></Skills>
      <ContactForm class="h-full col-span-1"></ContactForm>
    </div>
  </div>
</template>

<script setup>
import ContactForm from "./components/ContactForm.vue";
import Skills from "./components/Skills.vue";
</script>
