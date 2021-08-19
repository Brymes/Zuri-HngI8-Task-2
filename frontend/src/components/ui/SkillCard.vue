<template>
  <!-- <div class="container bg-gray-900 shadow-lg rounded-xl p-6"> -->
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
      <div
        class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6"
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
          <font-awesome-icon :icon="skillIcon" />
        </div>
        <div class="flex-grow">
          <h2 class="text-xl title-font font-medium mb-3">{{ skill.title }}</h2>
          <p class="leading-relaxed text-sm text-justify">
            {{ skill.description }}
          </p>
        </div>
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
