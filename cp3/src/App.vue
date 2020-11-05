<template>
<div id="app">
  <div id="menu">
    <div id="main">
      <router-link to="/">Browse All</router-link>
    </div>
    <div class="side">
      <router-link to="/city">
        <div class="menu-item browse">
          <img src="/images/city.jpg">
          <p>Browse by City</p>
        </div>
      </router-link>
    </div>
    <div class="side">
      <router-link to="/price">
        <div class="menu-item browse">
          <img src="/images/price.jpg">
          <p>Browse by Price</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

img {
  width: 50px;
  height: 50px;
}
</style>
