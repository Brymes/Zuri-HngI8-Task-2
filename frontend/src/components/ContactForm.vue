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
          Let's Connect... Send me a message
        </h2>
      </div>
    </div>
    <Form
      :validation-schema="schema"
      @submit="submitForm"
    >
      <div class="form-group">
        <span class="uppercase text-sm text-blue-400 font-bold">Full Name</span>
        <Field
          class="
            w-full
            bg-gray-300
            text-gray-700
            mt-2
            p-3
            rounded-lg
            focus:outline-none focus:shadow-outline
          "
          name="fullName"
          type="text"
          placeholder="John Doe"
        />
        <ErrorMessage
          name="fullName"
          class="error-feedback"
        />
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-blue-400 font-bold">Email</span>
        <Field
          class="
            w-full
            bg-gray-300
            text-gray-700
            mt-2
            p-3
            rounded-lg
            focus:outline-none focus:shadow-outline
          "
          name="email"
          type="text"
          placeholder="johndoe@gmail.com"
        />
        <ErrorMessage
          name="email"
          class="error-feedback"
        />
      </div>
      <div class="mt-8">
        <span class="uppercase text-sm text-blue-400 font-bold">Message</span>
        <Field
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
          name="messages"
          type="text"
        />
        <ErrorMessage
          name="messages"
          class="error-feedback"
        />
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
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import axios from "axios";
const API_URL = "https://brymeshngtask2.herokuapp.com/graphql";

const ContactForm = {
  name: "ContactForm",

  components: {
    Form,
    Field,
    ErrorMessage,
  },

    data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(80, "Must be maximum 80 characters!"),
      fullName: yup
        .string()
        .required("First Name is required!")
        .min(4, "Must be at least 4 characters!")
        .max(50, "Must be maximum 50 characters!"),
      messages: yup
        .string()
        .required("Password is required!")
        .min(10, "Must be at least 6 characters!")
    });

    return {
      successful: false,
      loading: false,
      message: null,
      schema,
    };
  },

  async submitForm(msgData) {
    var data = JSON.stringify({
  query: `mutation{
    sendMessage(fullName:"${msgData.fullName}", message:"${msgData.message}", email:"${msgData.email}"){
        status,
        msg {
            fullName
        }
    }
}`,
  variables: {}
});

var config = {
  method: 'post',
  url: API_URL,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  this.successful = true
})
.catch(function (error) {
  console.log(error);
});

  }
};

export default ContactForm;
</script>

<style>
.error-feedback {
  color: red;
}
</style>
