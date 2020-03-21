<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                  <base-button type="default" size="sm" class="float-right">Message</base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">22</span>
                    <span class="description">Friends</span>
                  </div>
                  <div>
                    <span class="heading">10</span>
                    <span class="description">Photos</span>
                  </div>
                  <div>
                    <span class="heading">89</span>
                    <span class="description">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5" v-for="(value, user) in userInfo" :key="user">
              <h3>{{value.Name}}</h3>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>
                {{user}} · {{value.Mobile}}
              </div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>
                {{value.Faculty}} - {{value.Major}}
              </div>
              <div>
                <i class="ni education_hat mr-2"></i>National University of Singapore
              </div>
            </div>
            <div
              class="mt-3 py-5 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <h3>Introduction</h3>
                  <p>{{value.Intro}}</p>
                </div>
              </div>
            </div>
            <div
              class="mt-5 py-5 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>Modules Taken</p>
                  <ul>
                    <li v-for="item in items" :key="item.message">{{ item.message }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import database from "../firebase.js";
export default {
  name: "App",
  data() {
    return {
      userInfo: {},
      curruser: "Victor Cheong"
    };
  },
  methods: {
    fetchData: function() {
      let temp = {};
      let me = this.curruser;
      console.log(2);
      //Get all the items from DB
      database.collection("User Info").onSnapshot(currentUser => {
        currentUser.forEach(function(user) {
          console.log(1);
          if (user.data().Name == me) {
            temp[user.id] = user.data();
          }
        });
        this.userInfo = temp;
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
