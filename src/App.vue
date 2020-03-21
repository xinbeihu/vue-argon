<template>
  <div id="app">
    <div>
      <link
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <table>
        <tr>
          <th style="position:absolute; top:25px; right:0 left:0 padding:10px">
            <ul style="list-style-type:none; margin:0; padding:0; overflow:hidden" id="header">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#forum">My Projects</a>
              </li>
              <li>
                <a href="#forum">Find Group Mates</a>
              </li>
              <li>
                <a href="#forum">Forum</a>
              </li>
              <li @mouseover="hover = true">
                <a>
                  <i class="fa fa-user"></i> Peppa Pig
                </a>
              </li>
            </ul>
          </th>
          <div v-if="hover" style="position:absolute; right:10px; top: 60px;">
            <ul
              style="list-style-type:none; text-align: left"
              @mouseleave="hover = false"
              id="userinfo"
            >
              <li>
                <a href="#">Alerts</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Log Out</a>
              </li>
            </ul>
          </div>
        </tr>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//Registering components Locally
//import PageContent from './components/PageContent.vue'
export default {
  name: "App",
  data() {
    return { hover: false };
  },
  components: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#header li a {
  display: block;
  color: black;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

#header li {
  float: left;
}

#header li a:hover {
  background-color: darksalmon;
}

#userinfo li {
  padding-top: 10px;
  background-color: #f1f1f1;
  width: 60px;
  padding-right: 50px;
}

#userinfo li a {
  text-decoration: none;
  color: black;
}

#userinfo li a:hover {
  background-color: darkgray;
}
</style>
