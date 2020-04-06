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

              <div class="col col-lg-auto order-lg-4">
                <div class="text-left mt-4" v-for="(value, user) in userInfo" :key="user">
                  <h3 class="text-left">
                    {{value.Name}}
                    <base-button
                      type="default"
                      size="sm"
                      icon="ni ni-settings-gear-65"
                      @click="modals.modal1 = true"
                    ></base-button>
                  </h3>
                  {{user}} · {{value.Mobile}}
                  <p>{{value.Faculty}} - {{value.Major}}</p>
                  <hr />
                </div>
              </div>
            </div>

            <div class="row justify-content-left">
              <div class="col-lg-3 order-lg-2"></div>

              <div class="col col-lg-auto order-lg-4">
                <div class="text-left mt-2" v-for="(value, user) in userInfo" :key="user">
                  <h5 class="text-left">{{value.Intro}}</h5>
                </div>
              </div>
            </div>

            <div
              class="mt-2 py-4 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="container">
                <div class="row">
                  <div class="col col-lg-6">
                    <div class="row">
                      <h4>
                        <strong>Skills</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="ni ni-settings-gear-65"
                          @click="modals.modal1 = true"
                        ></base-button>

                        <br />
                      </h4>
                    </div>

                    <div class="row">
                      <base-button
                        size="sm"
                        type="secondary"
                        v-for="(value,item) in value['Skills']"
                        :key="item"
                      >{{value}}</base-button>
                    </div>
                  </div>
                  <div class="col col-lg-6">
                    <div class="row">
                      <h4>
                        <strong>Interests</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="ni ni-settings-gear-65"
                          @click="modals.modal1 = true"
                        ></base-button>

                        <br />
                      </h4>
                    </div>

                    <div class="row">
                      <base-button
                        size="sm"
                        type="secondary"
                        v-for="(value,item) in value['Interests']"
                        :key="item"
                      >{{item}}</base-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mt-2 py-4 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="container">
                <div class="row">
                  <div class="col col-lg-6">
                    <div class="row">
                      <h4>
                        <strong>Modules Taken</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="ni ni-settings-gear-65"
                          @click="modals.modal1 = true"
                        ></base-button>

                        <br />
                      </h4>
                    </div>

                    <div class="row">
                      <ul class="list-unstyled">
                        <li v-for="(value, item) in value['Past Modules']" :key="item">
                          <h5 class="text-left">
                            {{item}}
                            <small class="text-muted !text-right">Grade: {{ value.Grade }}</small>

                            <p>
                              <small class="text-muted">{{ value['Module Name']}}</small>
                            </p>
                            <td style="width:90px" class="tab">
                              <i
                                class="fa fa-pencil-square-o"
                                aria-hidden="true"
                                style="font-size:15px"
                                v-b-modal.editSubModal
                                v-on:click="editSubTask(details, subtask)"
                              ></i>
                              <i
                                v-on:click="deleteSubTask(list.subTaskID)"
                                class="fa fa-trash"
                                aria-hidden="true"
                                style="padding-left:40px;color:rgb(136, 43, 43);font-size:16px"
                              ></i>
                            </td>
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col col-lg-6">
                    <div class="row">
                      <h4>
                        <strong>Current Modules</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="ni ni-settings-gear-65"
                          @click="modals.modal1 = true"
                        ></base-button>

                        <br />
                      </h4>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mt-3 py-4 border-top text-center"
              v-for="(value, user) in userInfo"
              :key="user"
            >
              <div class="container">
                <div class="row">
                  <div class="col col-lg-6">
                    <div class="row">
                      <h4>
                        <strong>Past Projects</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="ni ni-settings-gear-65"
                          @click="modals.modal1 = true"
                        ></base-button>

                        <br />
                      </h4>
                    </div>

                    <div class="row">
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
                                <small>
                                  Team Members:
                                  <br />
                                  <span v-for="a in value['Team Members']" :key="a">
                                    {{a}}
                                    <slot></slot>
                                  </span>
                                </small>
                              </li>
                              <li>
                                <small>
                                  Project Description:
                                  <br />
                                  {{ value['Description'] }}
                                </small>
                              </li>
                            </ul>
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col col-lg-6">
                    <div class="row">
                      <h4>
                        <strong>Awards</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="ni ni-settings-gear-65"
                          @click="modals.modal1 = true"
                        ></base-button>

                        <br />
                      </h4>
                    </div>
                    <div class="row">
                      <br />
                      <ul class="list-unstyled">
                        <li v-for="(value,item) in value['Awards']" :key="item">{{item}} - {{value}}</li>
                      </ul>
                    </div>
                  </div>
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
