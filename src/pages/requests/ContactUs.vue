<template>
  <div>
    <base-card>
      <h2>Contact Me!</h2>
      <p>
        Leave me your name, email, along with a message, if you want, and I'll
        reach back out to you!
      </p>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="12">
            <v-form v-model="valid" ref="form">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>

              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submitData"
              >
                Submit
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      firstName: "",
      lastName: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    submitData() {
      this.$refs.form.validate();
    },
  },
};
</script>
