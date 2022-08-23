<template>
  <div>
    <h2>Past Projects</h2>
    <base-card>
      <p>
        Most of the projects here, I have completed following along a course on
        Udemy. It was taught by Max from Academind, and I feel he's one of the
        best instructors on udemy covering Vuejs. I have another website that I
        started to build for a friend that was starting a epoxy floor business
        that never really took off. Please play around with the projects and
        check out the links to my other projects. Thanks for taking a look!
      </p>
      <div class="grid-container">
        <div>
            <h4>Epoxy Floors Website</h4>
            <a href="https://epicfloors.netlify.app/" alt="link to epic site for epoxy floors" target="_blank">Epic Flooring</a>
        </div>
        <div>
            <h4>Coaches List Website</h4>
            <a href="https://vue-practice-88f8e.web.app/coaches" alt="link to coaches site" target="_blank">Coaches</a>
        </div>
      </div>
    </base-card>
    <div class="grid-container">
      <base-card>
        <h4>Monster Slayer Project</h4>
        <p>
          This was my first project completed through the Vuejs course on udemy.
          It is a game that allows a player to attack a monster and inflict
          stronger damage upon using the 'strong attack' button. Likewise, the
          monster can attack the player. The game was built using Vuejs and
          includes a lot of css styles to get the healthbar working.
        </p>
        <monster-slayer></monster-slayer>
      </base-card>
      <base-card>
        <h4>Add Task Project</h4>
        <p>
          Another project that I created following the Vuejs course. This one is
          more simple but it taught me how to use props, and be able to
          dynamically show/hide elements using the virutal dom.
        </p>
        <test-component></test-component>
      </base-card>
    </div>
  </div>
</template>

<script>
import MonsterSlayer from "../../projects/MonsterSlayer/App.vue";
import TestComponent from "../../projects/AddTasks/App.vue";

export default {
  components: {
    MonsterSlayer,
    TestComponent,
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
}
</style>
