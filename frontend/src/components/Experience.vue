<template>
  <div
    class="
      h-auto
      w-max
      flex-auto
      grid 
      grid-cols-1
      justify-self-end
      gap-4
    "
  >
    <div
      v-for="experience in experienceJson"
      :key="experience.title"
      class="h-full w-auto rounded bg-purple-900 p-4"
    >
      <div class="">
        <h2 class="text-xl title-font font-bold mb-3">
          {{ experience.title }}
        </h2>
        <p class="leading-relaxed text-lg text-justify">
          {{ experience.description }}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import experienceJson from "../assets/experience.json";
export default {
  name: "Experience",
  data() {
    return {
      experienceJson: experienceJson,
    };
  },
};
</script>