<template>
  <footer>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
        <!-- <li v-if="isLoggedIn"><router-link to="/requests">Requests</router-link></li> -->
        <!-- <li v-else><router-link to="/auth">Log In</router-link></li> -->
        <!-- <li v-if="isLoggedIn"><base-button @click="logout">Logout</base-button></li> -->
      </ul>
      <div class="center">
        <h4>Copyright Jose Cisneros - 2022</h4>
      </div>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 5rem;
  /* background-color: #3d008d; */
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
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
  width: 90%;
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
  margin: 25px auto 0 auto;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
