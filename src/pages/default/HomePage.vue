<template>
  <v-container>
    <v-row style="background-color: antiquewhite">
      <v-col cols="12" sm="6" md="6" lg="6">
        <div class="title">
          <h5>Web Developer</h5>
          <h1>
            Jose <br />
            Cisneros
          </h1>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <div class="img-styles">
          <v-img
            :src="require('../../assets/headshot.jpg')"
            alt="headshot of Jose Cisneros"
            class="rounded-circle"
            max-height="auto"
            max-width="auto"
          />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <base-card style="max-width: 60rem">
          <h2>Welcome!</h2>
          <p class="introP">
            I am a full stack web developer. I am most familiar with vb.net, but
            have currently been working with Vuejs. I am currently working on building
            web apps using nuxt.js and want to increase my knowledge using Vuejs. Along with
            vb.net, I am very familiar with ms SQL and relational databases. I've learned some GraphQL,
            but have a lot to learn still. Anyway, keep looking around and let me know if you want to 
            get in touch! <base-button link="true" to="/contact">Get In Contact!</base-button>
          </p>
          <p>
            Check out my
            <a href="https://www.github.com/josecis0216" target="_blank">GitHub Page</a>
          </p>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-container {
  max-width: 100%;
}
.title {
  text-align: left;
  max-width: 260px;
  margin: auto;
}
.title h5 {
  font-size: 20px;
}
.title h1 {
  font-size: 64px;
}
.img-styles {
  max-height: 400px;
  max-width: 400px;
  margin-top: 50px;
  margin-bottom: 30px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
}
.introP {
  line-height: 50px;
  font-size: 22px;
  font-weight: bold;
}
* {
  box-sizing: border-box;
}
</style>
