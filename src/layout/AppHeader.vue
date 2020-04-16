<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/profile">
        <img src="img/bestlogo.jpg" alt="logo" style="width:150px; height: 80px" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <router-link to="/projects" class="nav-link nav-link-inner--text">Manage Projects</router-link>
        <router-link to="/projmates" class="nav-link nav-link-inner--text">Project Groups</router-link>
        <router-link to="/forum" class="nav-link nav-link-inner--text">Forum</router-link>
        <router-link
          to="/projmatestemp"
          class="nav-link nav-link-inner--text"
        >Project Groups Editing</router-link>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link nav-link-inner--text">
            <i class="fa fa-user-circle"></i>
            {{currName}}
          </router-link>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import firebase from "firebase";
import database from "../firebase.js";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data() {
    return {
      currName: "Victor Cheong"
    };
  },
  methods: {
    fetchData: function() {
      var user = firebase.auth().currentUser;
      var emailVerified = user.email;
      var tempName;
      database.collection("User Info").onSnapshot(user => {
        user.forEach(function(currUser) {
          if (currUser.id == emailVerified) {
            tempName = currUser.data()["Name"];
          }
        });
        this.currName = tempName;
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
<style>
</style>
