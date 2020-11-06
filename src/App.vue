<template>
<meta name="viewport" content="width=device-width, user-scalable=no">
<div id="app">
  <div id="menu">
    <div id="main">
      <router-link to="/">
        <div class="menu-item browse">
          <img src="/images/all.jpg">
          <p>
            Browse All</p>
        </div>
      </router-link>
    </div>
    <div id="city" class="side">
      <router-link to="/city">
        <div class="menu-item browse">
          <img src="/images/city.jpg">
          <p>Browse by City</p>
        </div>
      </router-link>
    </div>
    <div id="price" class="side">
      <router-link to="/price">
        <div class="menu-item browse">
          <img src="/images/price.jpg">
          <p>Browse by Price</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class="footer"><a href="https://github.com/programjames/cs260cp3">Github Repository</a></div>
</div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Times New Roman;
}

#menu {
  display: flex;
  justify-content: center;
}

#main {
  order: 1;
}

#city {
  order: 0;
}

#price {
  order: 2;
}

.menu-item {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10pt;
  font-decoration: none;
}

img {
  width: 50px;
  height: 50px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: inherit;
}

@media only screen and (min-width: 1200px) {
  .menu-item {
    font-size: 32pt;
    margin-left: 50px;
    margin-right: 50px;
  }

  img {
    width: 150px;
    height: 150px;
  }
}

.footer {
  width: 100%;
  background-color: #eee;
  color: black;
  text-align: center;
  padding: 20px;
  font-size: 24pt;
}

.footer a {
  color: inherit;
}
</style>
