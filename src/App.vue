<template>
  <div id="nav">
    <h1>User List</h1>
    <!-- <router-link to="/">Users</router-link> -->
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md m-1.5 mt-6;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700 text-white;
}
</style>
