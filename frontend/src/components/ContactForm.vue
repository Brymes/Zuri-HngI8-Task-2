<template>
  <div
    class="
      w-screen
      mt-24
      grid
      gap-8
      grid-cols-1
      md:grid-cols-2 md:px-12
      lg:px-16
      xl:px-32
      mx-auto
      bg-gray-200
      text-gray-900
      rounded-lg
      items-center 
    "
  >
    <div class="items-center flex flex-col justify-between">
      <div>
        <h2 class="text-4xl lg:text-6xl font-bold leading-tight">
          Let's Talk... Send me a message
        </h2>
      </div>
    </div>
    <div class="">
      <div>
        <span class="uppercase text-sm text-blue-400 font-bold">Full Name</span>
        <input
          class="
            w-full
            bg-gray-300
            text-gray-700
            mt-2
            p-3
            rounded-lg
            focus:outline-none focus:shadow-outline
          "
          type="text"
          placeholder=""
        />
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-blue-400 font-bold">Email</span>
        <input
          class="
            w-full
            bg-gray-300
            text-gray-700
            mt-2
            p-3
            rounded-lg
            focus:outline-none focus:shadow-outline
          "
          type="text"
        />
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-blue-400 font-bold">Message</span>
        <textarea
          class="
            w-full
            h-32
            bg-gray-300
            text-gray-700
            mt-2
            p-3
            rounded-lg
            focus:outline-none focus:shadow-outline
          "
        ></textarea>
      </div>
      <div class="mt-8">
        <button
          class="
            uppercase
            text-sm
            font-bold
            tracking-wide
            bg-indigo-500
            text-gray-100
            p-3
            rounded-lg
            w-full
            focus:outline-none focus:shadow-outline
          "
        >
          Send Message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const ContactForm = {
  name: "ContactForm",
  /* methods: {
    handleHome() {
      this.$router.push("/courses");
    },
  } */
};

export default ContactForm;
</script>
