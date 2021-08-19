<template>
  <!-- <div class="container bg-gray-900 shadow-lg rounded-xl p-6"> -->
    <div class="p-10 w-max h-max ">
      <div
        class="rounded bg-gray-700 p-4"
      >
        <div
          class="
            w-10
            h-10
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-green-100
            text-green-500
            mb-5
            flex-shrink-0
            p-2
          "
        >
          <img :src="skill.skillIcon" />
        </div>
        <div class="flex-grow">
          <h2 class="text-xl title-font font-medium mb-3">{{ skill.title }}</h2>
          <p class="leading-relaxed text-sm text-justify">
            {{ skill.description }}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "SkillCard",

  props: {
    icon: {
      required: true,
      type: String,
    },
    skill: {
      required: true,
      type: Object,
    },
  },
};
</script>
