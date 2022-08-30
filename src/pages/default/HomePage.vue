<template>
  <div>
    <div class="grid-container" style="background-color: antiquewhite">
      <div class="title">
        <h5>Web Developer</h5>
        <h1>
          Jose <br />
          Cisneros
        </h1>
      </div>
      <div style="max-height: 400px; max-width: 400px; margin-top: 50px;">
        <v-img
          :src="require('../../assets/headshot.jpg')"
          alt="headshot of Jose Cisneros"
          class="rounded-circle"
          max-height="auto"
          max-width="auto"
        />
      </div>
    </div>
    <base-card style="max-width: 60rem;">
      <h2>Welcome to my page!</h2>
      <p class="introP">
        I am a full stack web developer. I am most familiar with vb.net, but
        have currently been working with Vuejs. I plan to learn more react,
        however I plan to continue improving my skillset with Vuejs and Vb.net.
        I am also familiar with SQL and relational databases.
      </p>
      <p>
        Check out my
        <a href="www.github.com/josecis0216" target="_blank">GitHub Page</a>
      </p>
    </base-card>
  </div>
</template>

<style scoped>
.title {
  text-align: left;
  max-width: 1005px;
  margin: auto;
}
.title h5 {
  font-size: 20px;
}
.title h1 {
  font-size: 64px;
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
