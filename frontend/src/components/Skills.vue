<template>
  <div
    class="
      h-full
      w-full
      flex-auto
      grid 
      lg:grid-cols-5
      md:grid-cols-auto
      sm:grid-cols-auto
      gap-10
    "
  >
    <div
      v-for="skill in skills"
      :key="skill.title"
    >
      <SkillCard
        :skill="skill"
      />
    </div>
  </div>
</template>

<script>
import SkillCard from "./ui/SkillCard.vue";
import skillsJson from "../assets/skills.json";
export default {
  name: "Skills",
  components: {
    SkillCard,
  },
  data() {
    return {
      skills: skillsJson,
    };
  },
};
</script>
