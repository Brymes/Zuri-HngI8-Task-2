<template>
  <div
    class="
      flex-auto
      w-full
      max-w-sm
      grid grid-cols-2
      gap-6
      md:grid-cols-1 md:px-8
    "
  >
    <div v-for="skill in skills" :key="skill.title">
      <SkillCard :skill="skill" :skillIcon="skill.skillIcon" />
    </div>
  </div>
</template>

<script>
import SkillCard from "./ui/SkillCard";
import skillsJson from "../assets/skills";
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
