<template>
  <div>
    <div class="grid-container">
      <base-card>
        <h2>Welcome to my page!</h2>
        <p class="introP">
          My name is Jose Cisneros, and I am a full stack web developer. I am
          most familiar with vb.net, but have currently been working with Vuejs.
          I plan to learn more react, however I plan to continue improving my
          skillset with Vuejs and Vb.net. I am also familiar with SQL and
          relational databases.
        </p>
        <p>
          Check out my
          <a href="www.github.com/josecis0216" target="_blank">GitHub Page</a>
        </p>
      </base-card>
      <v-img
        :src="require('../../assets/headshot.jpg')"
        alt="headshot of Jose Cisneros"
        class="headshotStyles"
      />
    </div>
    <div>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      model: 0,
      colors: [
        'blue darken-4',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  };
</script>

<style scoped>
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
.headshotStyles {
  height: 65%;
  margin-top: 25px;
}
* {
  box-sizing: border-box;
}
</style>
