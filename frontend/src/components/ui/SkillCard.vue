<template>
  <!-- <div class="container bg-gray-900 shadow-lg rounded-xl p-6"> -->
  <div
    class="h-full w-full rounded bg-purple-900 p-8"
  >
    <Icons
      class="
            w-16
            h-10
            inline-flex
            items-center
            justify-center
            rounded-full
            mb-2
            flex-shrink-0
            p-2
          "
      :name="skill.skillIcon"
    />
    <div class="object-fill">
      <h2 class="text-xl title-font font-bold mb-3">
        {{ skill.title }}
      </h2>
      <p class="leading-relaxed text-md text-justify">
        {{ skill.description }}
      </p>
    </div>
  </div>
</template>

<script>
import Icons from "./Icons.vue"

export default {
  name: "SkillCard",

  components:{
    Icons //the name of the component you imported
  },

  props: {
    skill: {
      required: true,
      type: Object,
    },
  },
};
</script>
