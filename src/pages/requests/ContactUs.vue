<template>
  <div>
    <base-card>
      <h2>Contact Me!</h2>
      <p>
        Leave me your email, along with a message, if you want, and I'll
        reach out to you as soon as possible!
      </p>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="12">
            <form @submit.prevent="submitForm">
              <div class="form-control">
                <label for="email"> Your E-mail </label>
                <input type="email" id="email" v-model.trim="email" />
              </div>
              <div class="form-control">
                <label for="message"> Your Message </label>
                <textarea
                  rows="5"
                  id="message"
                  v-model.trim="message"
                ></textarea>
              </div>
              <div class="actions">
                <base-button>Send Message</base-button>
              </div>
            </form>
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
      email: '',
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      message: ''
    };
  },
  methods: {
    submitForm() {
      this.valid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.valid = false;
        return;
      }
      this.$store.dispatch("reqs/contactMe", {
        email: this.email,
        message: this.message,
      });
      this.$router.replace("/home");
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
