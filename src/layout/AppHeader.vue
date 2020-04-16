<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/dashboard">
        <img src="img/bestlogo.png" alt="logo" style="width:150px; height: 120px" />
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
        <router-link to="/dashboard" class="nav-link nav-link-inner--text">Dashboard</router-link>
        <router-link to="/projects" class="nav-link nav-link-inner--text">Manage Projects</router-link>
        <router-link to="/projmates" class="nav-link nav-link-inner--text">Project Groups</router-link>
        <router-link to="/forum" class="nav-link nav-link-inner--text">Forum</router-link>
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
      currName: ""
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
