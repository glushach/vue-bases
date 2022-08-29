<template>
  <header class="navbar">
    <strong>Vue Composition Api</strong>
    
    <div class="navbar-menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/reusable">Reusable</router-link>
      </li>
      <li>
        <router-link to="/vuex">Reusable</router-link>
      </li>
    </div>
  </header>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>

</script>
