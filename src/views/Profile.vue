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
                      icon="fa fa-pencil"
                      v-b-modal.profileModal
                      v-on:click="getProfile"
                    ></base-button>
                  </h3>
                  <b-modal
                    id="profileModal"
                    ref="modal"
                    title="Edit Personal Information"
                    @ok="editProfile"
                  >
                    <form ref="form">
                      <b-form-group label="Name">
                        <b-form-input id="project-module" v-model="editName"></b-form-input>
                      </b-form-group>
                      <b-form-group label="Mobile Number">
                        <b-form-input id="project-module-name" v-model="editMobileNumber"></b-form-input>
                      </b-form-group>
                      <b-form-group label="Faculty">
                        <b-form-input id="project-module-name" v-model="editFaculty"></b-form-input>
                      </b-form-group>
                      <b-form-group label="Major">
                        <b-form-input id="project-module-name" v-model="editMajor"></b-form-input>
                      </b-form-group>
                      <b-form-group label="Self Introduction">
                        <b-form-input id="project-module-name" v-model="editSelfIntro"></b-form-input>
                      </b-form-group>
                    </form>
                  </b-modal>
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
                        <strong>
                          Skills
                          <slot></slot>
                        </strong>

                        <base-button
                          type="default"
                          size="sm"
                          icon="fa fa-plus"
                          v-b-modal.skillModal
                        ></base-button>

                        <br />
                      </h4>

                      <b-modal id="skillModal" ref="modal" title="Add New Skill" @ok="submitSkill">
                        <form ref="form">
                          <b-form-group label="Skill">
                            <b-form-input id="skill-input" v-model="inputSkill"></b-form-input>
                          </b-form-group>
                        </form>
                      </b-modal>
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
                        <strong>
                          Interests
                          <slot></slot>
                        </strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="fa fa-plus"
                          v-b-modal.interestModal
                        ></base-button>

                        <br />
                      </h4>
                      <b-modal
                        id="interestModal"
                        ref="modal"
                        title="Add New Interest"
                        @ok="submitInterest"
                      >
                        <form ref="form">
                          <b-form-group label="Interest">
                            <b-form-input id="interest-input" v-model="inputInterest"></b-form-input>
                          </b-form-group>
                        </form>
                      </b-modal>
                    </div>

                    <div class="row">
                      <base-button
                        size="sm"
                        type="secondary"
                        v-for="(value,item) in value['Interests']"
                        :key="item"
                      >{{value}}</base-button>
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
                        <strong>
                          Modules Taken
                          <slot></slot>
                        </strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="fa fa-plus"
                          v-b-modal.pastModModal
                        ></base-button>

                        <br />
                      </h4>
                      <b-modal
                        id="pastModModal"
                        ref="modal"
                        title="Add New Past Module"
                        @ok="submitPastMod"
                      >
                        <form ref="form">
                          <b-form-group label="Module Code">
                            <b-form-input id="project-module" v-model="inputPastModCode"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Module Name">
                            <b-form-input id="project-module-name" v-model="inputPastModName"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Module Grade">
                            <b-form-input id="project-module-name" v-model="inputPastModGrade"></b-form-input>
                          </b-form-group>
                        </form>
                      </b-modal>
                    </div>

                    <div class="row">
                      <ul class="list-unstyled">
                        <li v-for="(value, item) in value['Past Modules']" :key="item">
                          <h5 style="text-align:left;">
                            {{item}}&nbsp;
                            <small
                              class="text-muted !text-right"
                            >Grade: &nbsp;{{ value.Grade }}</small>
                            <span style="float:right;">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <i
                                class="fa fa-pencil-square-o"
                                aria-hidden="true"
                                style="font-size:15px"
                                v-b-modal.editSubModal
                                v-on:click="editSubTask(details, subtask)"
                              ></i>
                              <i
                                v-on:click="deletePastModule(item)"
                                class="fa fa-trash"
                                aria-hidden="true"
                                style="padding-left:10px;color:rgb(136, 43, 43);font-size:16px"
                              ></i>
                            </span>
                            <p>
                              <small class="text-muted">{{ value['Module Name']}}</small>
                            </p>
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col col-lg-6">
                    <div class="row">
                      <h4>
                        <strong>Current Modules&nbsp;</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="fa fa-plus"
                          v-b-modal.currModModal
                        ></base-button>

                        <br />
                      </h4>
                      <b-modal
                        id="currModModal"
                        ref="modal"
                        title="Add New Current Module"
                        @ok="submitCurrMod"
                      >
                        <form ref="form">
                          <b-form-group label="Module Code">
                            <b-form-input id="project-module" v-model="inputCurrModCode"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Module Name">
                            <b-form-input id="project-module-name" v-model="inputCurrModName"></b-form-input>
                          </b-form-group>
                        </form>
                      </b-modal>
                      <br />
                      <ul class="list-unstyled">
                        <li v-for="(value, item) in value['Current Modules']" :key="item">
                          <h5 class="text-left">
                            {{item}}
                            <span style="float:right;">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <i
                                class="fa fa-pencil-square-o"
                                aria-hidden="true"
                                style="font-size:15px"
                                v-b-modal.editSubModal
                                v-on:click="editSubTask(details, subtask)"
                              ></i>
                              <i
                                v-on:click="deleteCurrModule(item)"
                                class="fa fa-trash"
                                aria-hidden="true"
                                style="padding-left:10px;color:rgb(136, 43, 43);font-size:16px"
                              ></i>
                            </span>
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
                        <strong>Past Projects&nbsp;</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="fa fa-plus"
                          v-b-modal.projectModal
                        ></base-button>

                        <br />
                      </h4>
                      <b-modal
                        id="projectModal"
                        ref="modal"
                        title="Add New Project"
                        @ok="submitProject"
                      >
                        <form ref="form">
                          <b-form-group label="Module Code">
                            <b-form-input id="project-module" v-model="inputProjMod"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Module Name">
                            <b-form-input id="project-module-name" v-model="inputProjModName"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Project Name">
                            <b-form-input id="project-name" v-model="inputProjName"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Project Description">
                            <b-form-input id="project-desc" v-model="inputProjDesc"></b-form-input>
                          </b-form-group>
                        </form>
                      </b-modal>
                    </div>

                    <div class="row">
                      <ul class="list-unstyled">
                        <li v-for="(value, item) in value['Past Projects']" :key="item">
                          <h5 class="text-left">
                            {{item}}
                            <span style="float:right;">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <i
                                class="fa fa-pencil-square-o"
                                aria-hidden="true"
                                style="font-size:15px"
                                v-b-modal.editSubModal
                                v-on:click="editSubTask(details, subtask)"
                              ></i>
                              <i
                                v-on:click="deleteProject(item)"
                                class="fa fa-trash"
                                aria-hidden="true"
                                style="padding-left:10px;color:rgb(136, 43, 43);font-size:16px"
                              ></i>
                            </span>
                            <br />
                            <small
                              class="text-muted"
                            >{{ value['Module Name'] }} - {{ value['Project Name'] }}</small>
                            <br />
                            <ul>
                              <li>
                                <small>
                                  Team Members:
                                  <span
                                    class="text-muted"
                                    v-for="a in value['Team Members']"
                                    :key="a"
                                  >
                                    {{a}}
                                    <slot></slot>
                                  </span>
                                </small>
                              </li>
                              <li>
                                <small>
                                  Project Description:
                                  <span
                                    class="text-muted"
                                  >{{ value['Description'] }}</span>
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
                        <strong>Awards&nbsp;</strong>
                        <base-button
                          type="default"
                          size="sm"
                          icon="fa fa-plus"
                          v-b-modal.awardModal
                        ></base-button>

                        <br />
                      </h4>
                      <b-modal id="awardModal" ref="modal" title="Add New Award" @ok="submitAward">
                        <form ref="form">
                          <b-form-group label="Award">
                            <b-form-input id="award-input" v-model="inputAward"></b-form-input>
                          </b-form-group>
                          <b-form-group label="Description">
                            <b-form-input id="award-description" v-model="inputAwardDescription"></b-form-input>
                          </b-form-group>
                        </form>
                      </b-modal>
                    </div>
                    <div class="row">
                      <br />
                      <ul class="list text-left">
                        <li v-for="(value,item) in value['Awards']" :key="item">
                          {{item}} -
                          <span class="text-muted">{{value}}</span>
                          <span style="float:right;">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                              style="font-size:15px"
                              v-b-modal.editSubModal
                              v-on:click="editSubTask(details, subtask)"
                            ></i>
                            <i
                              v-on:click="deleteAward(item)"
                              class="fa fa-trash"
                              aria-hidden="true"
                              style="padding-left:10px;color:rgb(136, 43, 43);font-size:16px"
                            ></i>
                          </span>
                        </li>
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
import firebase from "firebase";
import Modal from "../components/Modal.vue";
export default {
  name: "App",
  components: Modal,
  data() {
    return {
      userInfo: {},
      curruser: "Victor Cheong",
      inputSkill: "",
      inputInterest: "",
      currID: "vcjw97@gmail.com",
      inputAward: "",
      inputAwardDescription: "",
      inputProjDesc: "",
      inputProjMod: "",
      inputProjModName: "",
      inputProjName: "",
      inputCurrModCode: "",
      inputCurrModName: "",
      inputPastModCode: "",
      inputPastModGrade: "",
      inputPastModName: "",
      editName: "",
      editSelfIntro: "",
      editFaculty: "",
      editMajor: "",
      editMobileNumber: ""
    };
  },
  methods: {
    fetchData: function() {
      let temp = {};
      let me = this.curruser;
      let tempid = "";
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
    },
    getProfile: function() {
      let name = this.userInfo[this.currID]["Name"];
      console.log(name);
      console.log(this.userInfo);
      this.editName = name;
    },
    editProfile: function() {},
    submitSkill: function() {
      let newSkill = this.inputSkill;
      let currUser = this.currID;
      if (this.inputSkill == "") {
        alert("Please enter a skill");
      } else {
        database
          .collection("User Info")
          .doc(currUser)
          .update({
            Skills: firebase.firestore.FieldValue.arrayUnion(newSkill)
          });
        this.inputSkill = "";
      }
    },
    submitInterest: function() {
      let newInterest = this.inputInterest;
      let currUser = this.currID;
      if (this.inputInterest == "") {
        alert("Please enter an interest");
      } else {
        database
          .collection("User Info")
          .doc(currUser)
          .update({
            Interests: firebase.firestore.FieldValue.arrayUnion(newInterest)
          });
        this.inputInterest = "";
      }
    },
    submitAward: function() {
      let newAward = this.inputAward;
      let newAwardDesc = this.inputAwardDescription;
      let currUser = this.currID;
      if (this.inputAward == "") {
        alert("Please enter an award");
      } else if (this.inputAwardDesc == "") {
        alert("Please enter description");
      } else {
        database
          .collection("User Info")
          .doc(currUser)
          .update({
            ["Awards." + newAward]: newAwardDesc
          });
        this.inputAward = "";
        this.inputAwardDescription = "";
      }
    },
    submitProject: function() {
      let newProjMod = this.inputProjMod;
      let newProjModName = this.inputProjModName;
      let newProjName = this.inputProjName;
      let newProjDesc = this.inputProjDesc;
      let currUser = this.currID;
      if (this.inputProjMod == "") {
        alert("Please enter module code");
      } else if (this.inputProjModName == "") {
        alert("Please enter module name");
      } else if (this.inputProjName == "") {
        alert("Please enter project name");
      } else if (this.inputProjDesc == "") {
        alert("Please enter Project Description");
      } else {
        database
          .collection("User Info")
          .doc(currUser)
          .update({});
        this.inputAward = "";
        this.inputAwardDescription = "";
      }
    },
    submitCurrMod: function() {
      let newCurrModCode = this.inputCurrModCode;
      let newCurrModName = this.inputCurrModName;
      let currUser = this.currID;
      if (this.inputCurrModCode == "") {
        alert("Please enter module code");
      } else if (this.inputCurrModName == "") {
        alert("Please enter module name");
      } else {
        database
          .collection("User Info")
          .doc(currUser)
          .update({
            ["Current Modules." + newCurrModCode]: newCurrModName
          });
        this.inputCurrModCode = "";
        this.inputCurrModName = "";
      }
    },
    submitPastMod: function() {
      let newPastModCode = this.inputPastModCode;
      let newPastModName = this.inputPastModName;
      let newPastModGrade = this.inputPastModGrade;
      let currUser = this.currID;
      if (this.inputPastModCode == "") {
        alert("Please enter module code");
      } else if (this.inputPastModName == "") {
        alert("Please enter module name");
      } else if (this.inputPastModGrade == "") {
        alert("Please enter module grade");
      } else {
        database
          .collection("User Info")
          .doc(currUser)
          .update({
            ["Past Modules." + newPastModCode + ".Grade"]: newPastModGrade,
            ["Past Modules." + newPastModCode + ".Module Name"]: newPastModName
          });
        this.inputPastModCode = "";
        this.inputPastModName = "";
        this.inputPastModGrade = "";
      }
    },
    deleteCurrModule: function(ModCode) {
      let currUser = this.currID;
      database
        .collection("User Info")
        .doc(currUser)
        .update({
          ["Current Modules." + ModCode]: firebase.firestore.FieldValue.delete()
        });
    },
    deletePastModule: function(ModCode) {
      let currUser = this.currID;
      database
        .collection("User Info")
        .doc(currUser)
        .update({
          ["Past Modules." + ModCode]: firebase.firestore.FieldValue.delete()
        });
    },
    deleteProject: function(ModCode) {
      let currUser = this.currID;
      database
        .collection("User Info")
        .doc(currUser)
        .update({
          ["Past Projects." + ModCode]: firebase.firestore.FieldValue.delete()
        });
    },
    deleteAward: function(award) {
      let currUser = this.currID;
      database
        .collection("User Info")
        .doc(currUser)
        .update({
          ["Awards." + award]: firebase.firestore.FieldValue.delete()
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
