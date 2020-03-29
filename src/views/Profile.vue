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
            <div class="row justify-content-left">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div class="container ct-example-row">
              <div class="row justify-content-md-center">
                <div class="col col-lg-3"></div>
                <div class="col col-md-auto">
                  <div class="text-left mt-5" v-for="(value, user) in userInfo" :key="user">
                    <h3 class="text-left">{{value.Name}}</h3>
                    {{user}} · {{value.Mobile}}
                    <p>{{value.Faculty}} - {{value.Major}}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center" v-for="(value, user) in userInfo" :key="user">
              <p>{{value.Intro}}</p>
            </div>
            <div>
              <base-button
                outline
                type="default"
                size="sm"
                icon="ni ni-atom"
                @click="modals.modal1 = true"
              ></base-button>
            </div>

            <div
              class="mt-5 py-5 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="row justify-content-center">
                <div class="col-lg-5">
                  <h3 class="display-4">Modules Taken</h3>
                  <br />
                  <ul class="list-unstyled">
                    <li v-for="(value, item) in value['Past Modules']" :key="item">
                      <h5 class="text-left">
                        {{item}}
                        <small class="text-muted">{{ value['Module Name']}}</small>
                        <p>
                          <small class="text-muted !text-right">Grade: {{ value.Grade }}</small>
                        </p>
                      </h5>
                    </li>
                  </ul>
                  <base-button
                    outline
                    type="default"
                    size="sm"
                    icon="ni ni-atom"
                    @click="modals.modal1 = true"
                  ></base-button>
                </div>
                <div class="col-lg-5">
                  <h3 class="display-4">Current Modules</h3>
                  <br />
                  <ul class="list-unstyled">
                    <li v-for="(value, item) in value['Current Modules']" :key="item">
                      <h5 class="text-left">
                        {{item}}
                        <p>
                          <small class="text-muted">{{ value}}</small>
                        </p>
                      </h5>
                    </li>
                  </ul>
                  <base-button
                    outline
                    type="default"
                    size="sm"
                    icon="ni ni-atom"
                    @click="modals.modal1 = true"
                  ></base-button>
                </div>
              </div>
            </div>

            <div
              class="mt-1 py-5 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="row justify-content-center">
                <div class="col-lg-5">
                  <h3 class="display-4">Skills</h3>
                  <br />
                  <ul class="list-unstyled">
                    <li v-for="(value,item) in value['Skills']" :key="item">
                      <base-progress
                        striped="True"
                        type="success"
                        v-bind:value="value"
                        v-bind:label="item"
                      ></base-progress>
                    </li>
                  </ul>
                  <base-button
                    outline
                    type="default"
                    size="sm"
                    icon="ni ni-atom"
                    @click="modals.modal1 = true"
                  ></base-button>
                </div>
                <div class="col-lg-5">
                  <h3 class="display-4">Interests</h3>
                  <br />
                  <ul class="list-unstyled">
                    <li v-for="(value,item) in value['Interests']" :key="item">
                      <base-progress
                        striped="True"
                        type="primary"
                        v-bind:value="value"
                        v-bind:label="item"
                      ></base-progress>
                    </li>
                  </ul>
                  <base-button
                    outline
                    type="default"
                    size="sm"
                    icon="ni ni-atom"
                    @click="modals.modal1 = true"
                  ></base-button>
                </div>
              </div>
            </div>

            <div
              class="mt-5 py-5 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <h3 class="display-4">Past Projects</h3>
                  <br />
                  <ul class="list-unstyled">
                    <li v-for="(value, item) in value['Past Projects']" :key="item">
                      <h5 class="text-left">
                        {{item}}
                        <br />
                        <small
                          class="text-muted"
                        >{{ value['Module Name'] }} - {{ value['Project Name'] }}</small>
                        <br />
                        <ul>
                          <li>
                            <small>Team Members:{{value['Team Members']}}</small>
                          </li>
                          <li>
                            <small>Project Description: {{ value['Description'] }}</small>
                          </li>
                        </ul>
                      </h5>
                    </li>
                  </ul>
                  <base-button
                    outline
                    type="default"
                    size="sm"
                    icon="ni ni-atom"
                    @click="modals.modal1 = true"
                  ></base-button>
                </div>
              </div>
            </div>

            <div
              class="mt-1 py-5 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="row justify-content-center">
                <div class="col-lg-5">
                  <h3 class="display-4">Awards</h3>
                  <br />
                  <ul class="list-unstyled">
                    <li v-for="(value,item) in value['Awards']" :key="item">{{item}} - {{value}}</li>
                  </ul>
                  <base-button
                    outline
                    type="default"
                    size="sm"
                    icon="ni ni-atom"
                    @click="modals.modal1 = true"
                  ></base-button>
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
import Modal from "../components/Modal.vue";
export default {
  name: "App",
  components: Modal,
  data() {
    return {
      userInfo: {},
      curruser: "Victor Cheong",
      modals: {
        modal1: false
      }
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
