<template>
  <div>
    <footer class="grid-container">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Me</router-link></li>
        <li><router-link to="/contact">Contact Me</router-link></li>
        <!-- <li v-if="isLoggedIn"><router-link to="/requests">Requests</router-link></li> -->
        <!-- <li v-else><router-link to="/auth">Log In</router-link></li> -->
        <!-- <li v-if="isLoggedIn"><base-button @click="logout">Logout</base-button></li> -->
      </ul>
      <div class="center">
        <h4>Copyright Jose Cisneros - 2022</h4>
      </div>
    </footer>
  </div>
</template>

<style scoped>
footer {
  width: 100%;
  /* background-color: #3d008d; */
  background-color: #433a50;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer a {
  text-decoration: none;
  /* color: #f391e3; */
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  /* border: 1px solid #f391e3; */
  color: black;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

footer nav {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
.center {
  display: flex;
  justify-content: center;
}
.grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
}
</style>
