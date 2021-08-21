<template>
  <div
    id="Brymes Resume"
    class="font-rob"
  >
    <div class="bg-gray-800 text-gray-100 grid grid-cols-3 gap-8">
      <div class="col-span-3 grid lg:grid-cols-3 md:grid-cols-1 gap-16 lg:p-16 md:px-8 mb-24">
        <Profile class="lg:h-full" />
        <div>
          <p class="flex flex-wrap break-all lg:break-normal text-4xl lg:text-7xl text-purple-600 lg:self-center font-extrabold">
            Hi, I am Timothy Odebunmi
          </p>
          <div>
            <p class="text-5xl text-bold text-indigo-500 mt-10">
              About me
            </p>
            <p class="mt-3 text-xl font-semibold">
              I am a gentle, intuitive, self motivated person and I enjoy solving problems
            </p>
            
            <a  class="text-yellow-500 text-xl font-bold mt-8"> Email: dev.brymes@gmail.com</a>
          </div>
        </div>
        <div class="h-1/3 lg:self-center lg:mb-12 md:mt-8">
          <p class="font-bold text-4xl mb-10 lg:mb-6">
            My Experience
          </p>
          <Experience />
        </div>
      </div>
      
      <div class="h-full col-span-3">
        <p class="font-bold text-4xl mb-10 lg:mb-6 px-8">
          My Skills
        </p>
        <Skills class="" />
      </div>
      <ContactForm class="h-full col-span-1" />
    </div>
  </div>
</template>

<script setup>
import ContactForm from "./components/ContactForm.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Profile from "./components/Profile.vue";
</script>
