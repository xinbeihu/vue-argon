<template>
<div>
  <head>
    <title>Projects List</title>
  </head>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
    rel="stylesheet"
  />

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
      <div class="container" style="width:1000px">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section class="section mt--300 section-components">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col col-lg-2" v-for="(value, mod) in modules" v-bind:key="mod">
              <!-- <b-button
                v-on:click="updateGroups(mod)"
              
                
              >{{mod}}</b-button> -->
            </div>
            <div class="col">
              <div class="mt--100 col-lg-12">
                <!-- Menu -->
                <tabs fill class="flex-column flex-md-row">
                  <card shadow>
                    <tab-pane title="Students without Group">
                      <ol>
                        <div v-for="(value, mod) in modules" v-bind:key="mod">
                          <div v-if="mod == module">
                            <li v-for="person in modules.mod.noGroup" v-bind:key="person">
                              {{person}}
                              <a href="https://www.google.com" target="_blank">Profile</a>
                            </li>
                          </div>
                        </div>
                      </ol>
                    </tab-pane>

                    <tab-pane title="Formed Project Groups">
                      <div>
                        <div>
                          <label style="vertical-align: middle;">
                            <h6>Group Name:</h6>
                          </label>
                          <textarea v-model="newGroup.groupName" style="resize: none;" rows="1"></textarea>
                          <button
                            style="vertical-align: top;"
                            v-on:click="checkAvailable()"
                          >Check Availability</button>
                          <br />
                          <div class="good" v-if="good!=''" style="color: green">{{good}}</div>
                          <div class="bad" v-if="bad!=''" style="color: red">{{bad}}</div>
                        </div>
                        <br />
                        <h6>Size of group:</h6>
                        <input type="number" v-model="newGroup.size" @change="addMember()" />
                        <br />
                        <br />
                        <div style="text-align: left; font-size: 20px">
                          <h6>Add your peers who are without a group:</h6>
                          <select v-model="friend">
                            <option disabled selected value>Select a peer</option>
                            <option v-for="fren in noGroup" v-bind:key="fren">{{fren}}</option>
                          </select>
                          <button v-on:click="addFriend()">Add</button>
                          <br />
                          <br />
                          <h6>Remove your peers in your group:</h6>
                          <select v-model="friend">
                            <option disabled selected value>Select a peer</option>
                            <option
                              v-for="fren in newGroup.currGroup.slice(1)"
                              v-bind:key="fren"
                            >{{fren}}</option>
                          </select>
                          <button v-on:click="removeFriend()">Remove</button>
                        </div>

                        <br />
                        <div>Group as of now: {{newGroup.currGroup.join(', ')}}</div>
                        <br />
                        <div v-if="newGroup.size - newGroup.currGroup.length > 1">
                          You need
                          {{newGroup.size - newGroup.currGroup.length}}
                          more group mates.
                        </div>
                        <div v-if="newGroup.size - newGroup.currGroup.length <= 1">
                          You need
                          {{newGroup.size - newGroup.currGroup.length}} more group mate.
                        </div>
                        <br />
                        <br />
                        <div style="text-align: left; font-size: 20px">
                          <h6>I want to look for:</h6>
                        </div>
                        <div>
                          <h6>Add a new skill:</h6>
                          <textarea rows="1" v-model.lazy="skill" style="resize: none;"></textarea>

                          <button v-on:click="checkSkill()" style="vertical-align: top;">Add</button>
                          <br />
                          <div
                            v-if="hasNewSkill && newGroup.newSkill.length > 0 && skill != ''"
                            id="add"
                          >{{skill}} has been added!</div>
                          <div
                            v-if="!hasNewSkill && newGroup.newSkill.length > 0 && skill != ''"
                          >{{skill}} has already been added!</div>
                        </div>
                        <br />
                        <label>
                          <h6>Select Team Member</h6>
                        </label>
                        <select v-model="newGroup.currMember" v-on:change="checkCurr()">
                          <option
                            v-for="(value, index) in newGroup.skills"
                            v-bind:key="index+1"
                          >{{index + 1}}</option>
                        </select>

                        <br />
                        <div>
                          <div
                            v-for="(value, index) in newGroup.memberStatus"
                            v-show="value==true"
                            v-bind:key="value"
                          >
                            <p style="text-align: left">Team Member {{index + 1}}</p>
                            <div id="memberlist">
                              Desired Skills:
                              <br />
                              <input
                                type="checkbox"
                                id="skill1"
                                name="skill1"
                                value="Java"
                                @change="addRemoveSkills(index)"
                                v-model="newGroup.skills[index]"
                              />
                              <label for="skill1">Java</label>
                              <br />
                              <input
                                type="checkbox"
                                id="skill2"
                                name="skill2"
                                value="Python"
                                @change="addRemoveSkills(index)"
                                v-model="newGroup.skills[index]"
                              />
                              <label for="skill2">Python</label>
                              <br />
                              <input
                                type="checkbox"
                                id="skill3"
                                name="skill3"
                                value="HTML"
                                @change="addRemoveSkills(index)"
                                v-model="newGroup.skills[index]"
                              />
                              <label for="skill3">HTML</label>
                              <br />
                              <div v-for="curr in newGroup.newSkill" v-bind:key="curr">
                                <input
                                  type="checkbox"
                                  v-bind:value="curr"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label>{{curr}}</label>
                                <button
                                  v-on:click="newGroup.newSkill.splice(newGroup.newSkill.indexOf(skill), 1); newGroup.skills[index].splice(newGroup.skills[index].indexOf(skill), 1); 
                            addRemoveSkills(index)"
                                >Remove</button>
                                <br />
                              </div>
                              <div v-if="loadMore">
                                Year:
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill4"
                                  name="skill4"
                                  value="Year 1"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill4">Year 1</label>
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill5"
                                  name="skill5"
                                  value="Year 2"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill5">Year 2</label>
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill6"
                                  name="skill6"
                                  value="Year 3"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill6">Year 3</label>
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill7"
                                  name="skill7"
                                  value="Year 4"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill7">Year 4</label>
                                <br />Major:
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill8"
                                  name="skill8"
                                  value="Business Analytics"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill8">Business Analytics</label>
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill9"
                                  name="skill9"
                                  value="Computer Science"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill9">Computer Science</label>
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill10"
                                  name="skill10"
                                  value="Information Systems"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill10">Information Systems</label>
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill11"
                                  name="skill11"
                                  value="Information Security"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill11">Information Security</label>
                                <br />
                                <input
                                  type="checkbox"
                                  id="skill12"
                                  name="skill12"
                                  value="Computer Engineering"
                                  @change="addRemoveSkills(index)"
                                  v-model="newGroup.skills[index]"
                                />
                                <label for="skill12">Computer Engineering</label>
                                <br />
                              </div>
                              <button v-on:click="loadMore=!loadMore; changeText()">{{loadText}}</button>

                              <p>You have selected:</p>
                              <p>{{newGroup.members[index]}}</p>
                              <h6>Any comments for your group?</h6>
                              <textarea
                                v-model.lazy="newGroup.comment"
                                rows="1"
                                style="resize: none;"
                              ></textarea>
                              <br />
                              <br />
                              <button v-on:click="addGroup()">Submit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tab-pane>

                    <tab-pane title="Form New Group">
                      <p class="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                        cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                        keffiyeh dreamcatcher synth.
                      </p>
                    </tab-pane>
                    <tab-pane title="Existing Groups">
                      <p class="description">
                        Raw denim you probably haven't heard of them jean shorts
                        Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                        cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                        keffiyeh dreamcatcher synth.
                      </p>
                    </tab-pane>
                  </card>
                </tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</div>
</template>
<script>
import firebase from "firebase";
import "firebase/firestore";
import database from "../firebase.js";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
  name: "App",
  components: {
    Tabs,
    TabPane
  },
  data() {
    return {
      userInfo: [],
      modules: {},
      hover: false,
      module: "",
      good: "",
      bad: "",
      loadMore: false,
      loadText: "Load More",
      my_skills: [],
      currName: "",
      skill: "",
      hasNewSkill: false,
      currSkill: "",
      taken: [],
      friend: "",
      noGroup: [],
      newGroupFormed: {},
      newGroup: {
        module: "",
        groupName: "",
        size: 2,
        currGroup: ["You"],
        newSkill: [],
        comment: "",
        compatibility: [],
        memberStatus: ["true"],
        members: ["None"],
        skills: [[]],
        currMember: 1,
        skills1: [],
        skills2: [],
        skills3: []
      },
      newGroups: {},
      currGroups: {},
      my_compatibility: {},
      currPage: "Students not in any group"
    };
  },
  methods: {
    checkAvailable: function() {
      let temp = {};
      //Get all the items from DB
      database.collection("Modules").onSnapshot(myModules => {
        myModules.forEach(function(module) {
          temp[module.id] = module.data();
        });
        this.modules = temp;
      });
      this.taken = [];
      for (var mod in this.modules) {
        for (var groupName in this.modules[mod]) {
          this.taken.push(groupName);
        }
      }
      var el = this.newGroup.groupName;
      if (el.length == 0) {
        this.bad = "Group name must contain at least 1 character.";
        this.good = "";
      } else if (el == "NoGroup" || el == "show" || el == "id") {
        this.bad = "This group name is not allowed. Please choose another one.";
        this.good = "";
      } else if (this.taken.indexOf(el) >= 0) {
        this.bad = "This group name is taken. Please choose another one.";
        this.good = "";
      } else {
        this.good = "This group name is available";
        this.bad = "";
      }
    },

    changeText: function() {
      if (this.loadText == "Load More") {
        this.loadText = "Load Less";
      } else {
        this.loadText = "Load More";
      }
    },

    addFriend: function() {
      if (this.newGroup.currGroup.indexOf("" + this.friend) > -1) {
        alert("You have already added this name.");
      } else if (this.friend == "") {
        alert("Please select 1 friend to add.");
      } else {
        this.newGroup.currGroup.push(this.friend);
        this.newGroup.skills.pop();
      }
      this.friend = "";
    },

    removeFriend: function() {
      if (this.friend == "") {
        alert("Please select 1 friend to remove.");
      } else if (this.newGroup.currGroup.indexOf("" + this.friend) == -1) {
        alert(
          "You have entered the name of your group mate incorrectly. Please try again."
        );
      } else {
        this.newGroup.currGroup.splice(
          this.newGroup.currGroup.indexOf("" + this.friend),
          1
        );
        this.newGroup.skills.push([]);
      }
      this.friend = "";
    },

    addRemoveSkills: function(index) {
      if (this.newGroup.skills[index].length > 0) {
        this.newGroup.members[index] = this.newGroup.skills[index].join(", ");
      } else {
        this.newGroup.members[index] = "None";
      }
    },

    checkSkill: function() {
      if (this.skill == "") {
        alert("Please enter at least 1 character.");
      } else if (this.newGroup.newSkill.indexOf(this.skill) == -1) {
        this.hasNewSkill = true;
        this.newGroup.newSkill.push(this.skill);
      } else {
        this.hasNewSkill = false;
      }
    },

    addGroup: function() {
      if (this.newGroup.groupName == "") {
        alert("Please fill in a group name.");
      } else if (this.newGroup.comment.length == 0) {
        alert("Please write a comment for your group.");
      } else if (this.newGroup.size < 1) {
        alert("Please enter a valid group size.");
      } else if (this.newGroup.size == 1) {
        alert("Group size should be at least 2");
      } else if (this.newGroupFormed[this.module]) {
        alert("You have already created a group for this module.");
      } else {
        for (var i = 0; i < this.newGroup.skills.length; i++) {
          if (this.newGroup.skills[i].length == 0) {
            alert("Please choose at least 1 option for team mate " + (i + 1));
            return;
          }
        }
        alert(
          "Your group has been sucessfully created! Click the Join Existing Groups tab to see your group."
        );
        var newGroupFormat = {};
        newGroupFormat[this.newGroup.groupName] = {
          "Group Members": this.newGroup["currGroup"],
          MaxSize: this.newGroup["size"],
          Vacancies: {},
          Comment: this.newGroup.comment
        };
        var counter = 1;
        for (i = 0; i < this.newGroup["members"].length; i++) {
          if (Number.isInteger((counter - 1) / 2)) {
            newGroupFormat[this.newGroup.groupName]["Vacancies"][
              "Vacancies " + Math.floor((counter - 1) / 2)
            ] = {};
          }
          newGroupFormat[this.newGroup.groupName]["Vacancies"][
            "Vacancies " + Math.floor((counter - 1) / 2)
          ]["Group Member " + counter] = {};
          newGroupFormat[this.newGroup.groupName]["Vacancies"][
            "Vacancies " + Math.floor((counter - 1) / 2)
          ]["Group Member " + counter]["FilledOrNot"] = false;
          if (this.newGroup["members"][i].indexOf(",") > -1) {
            newGroupFormat[this.newGroup.groupName]["Vacancies"][
              "Vacancies " + Math.floor((counter - 1) / 2)
            ]["Group Member " + counter]["Skills Required"] = this.newGroup[
              "members"
            ][i].split(",");
          } else {
            newGroupFormat[this.newGroup.groupName]["Vacancies"][
              "Vacancies " + Math.floor((counter - 1) / 2)
            ]["Group Member " + counter]["Skills Required"] = [
              this.newGroup["members"][i]
            ];
          }
          counter += 1;
        }
        for (i = 0; i < this.newGroup["currGroup"].length; i++) {
          if (Number.isInteger((counter - 1) / 2)) {
            newGroupFormat[this.newGroup.groupName]["Vacancies"][
              "Vacancies " + Math.floor((counter - 1) / 2)
            ] = {};
          }
          newGroupFormat[this.newGroup.groupName]["Vacancies"][
            "Vacancies " + Math.floor((counter - 1) / 2)
          ]["Group Member " + counter] = {};
          newGroupFormat[this.newGroup.groupName]["Vacancies"][
            "Vacancies " + Math.floor((counter - 1) / 2)
          ]["Group Member " + counter]["FilledOrNot"] = true;
          counter += 1;
        }
        this.newGroupFormed[this.module] = true;
        this.newGroups[this.newGroup.groupName] = this.newGroup;
        database
          .collection("Modules")
          .doc(this.module)
          .set(newGroupFormat, { merge: true });
        this.newGroup = {
          module: "",
          groupName: "",
          size: 2,
          currGroup: ["You"],
          newSkill: [],
          comment: "",
          compatibility: [],
          memberStatus: ["true"],
          members: ["None"],
          skills: [[]],
          currMember: 1,
          skills1: [],
          skills2: [],
          skills3: []
        };
      }
    },
    addMember: function() {
      var add = this.newGroup.size - this.newGroup.currGroup.length;
      this.newGroup.memberStatus = ["true"];
      this.newGroup.skills = [[]];
      for (var i = 1; i < add; i++) {
        this.newGroup.memberStatus.push("false");
        this.newGroup.skills.push([]);
      }
    },
    checkCurr: function() {
      var index = this.newGroup.currMember - 1;
      this.newGroup.memberStatus[index] = "true";
      for (var i = 0; i < this.newGroup.memberStatus.length; i++) {
        if (i != index) {
          this.newGroup.memberStatus[i] = "false";
        }
      }
    },
    join: function(teamName, person) {
      var temp = {};
      for (var mod in this.modules) {
        if (this.module == mod) {
          for (var group in this.modules[mod]) {
            if (group == teamName) {
              temp[teamName] = this.modules[mod][group];
              break;
            }
          }
        }
      }
      temp[teamName]["Group Members"].push("You");
      for (var index in temp[teamName]["Vacancies"]) {
        for (var mem in temp[teamName]["Vacancies"][index]) {
          if (
            "FilledOrNot" in temp[teamName]["Vacancies"][index][mem] &&
            mem == person
          ) {
            temp[teamName]["Vacancies"][index][mem]["FilledOrNot"] = true;
            break;
          }
        }
      }
      database
        .collection("Modules")
        .doc(this.module)
        .set(temp, { merge: true });
    },
    leave: function(teamName, person) {
      var temp = {};
      for (var mod in this.modules) {
        if (this.module == mod) {
          for (var group in this.modules[mod]) {
            if (group == teamName) {
              temp[teamName] = this.modules[mod][group];
              break;
            }
          }
        }
      }
      temp[teamName]["Group Members"].pop();
      for (var index in temp[teamName]["Vacancies"]) {
        for (var mem in temp[teamName]["Vacancies"][index]) {
          if (
            "FilledOrNot" in temp[teamName]["Vacancies"][index][mem] &&
            mem == person
          ) {
            temp[teamName]["Vacancies"][index][mem]["FilledOrNot"] = false;
            break;
          }
        }
      }
      database
        .collection("Modules")
        .doc(this.module)
        .set(temp, { merge: true });
    },
    fetchData: function() {
      let temp = {};
      //Get all the items from DB
      database.collection("Modules").onSnapshot(myModules => {
        myModules.forEach(function(module) {
          temp[module.id] = module.data();
        });
        this.modules = temp;
      });

      let temp1 = [];
      let tempName = "";
      var user = firebase.auth().currentUser;
      var emailVerified = "vcjw97@gmail.com"; //user.email;
      database.collection("User Info").onSnapshot(user => {
        user.forEach(function(currUser) {
          if (currUser.id == emailVerified) {
            temp1 = currUser.data()["Skills"];
            tempName = currUser.data()["Name"];
          }
        });
        this.currName = tempName;
        this.my_skills = temp1;
      });
    },
    updateGroups: function(mod) {
      this.newGroups = {};
      console.log(mod);
      for (let mod in this.modules) {
        if (this.module == mod) {
          this.noGroup = this.modules[mod]["NoGroup"];
          for (var group in this.modules[mod]) {
            if (
              "Group Members" in this.modules[mod][group] &&
              this.modules[mod][group]["Group Members"].indexOf("You") > -1
            ) {
              this.newGroups[group] = this.modules[mod][group];
            }
          }
        }
      }
      this.currGroups = {};
      for (let mod in this.modules) {
        if (this.module == mod) {
          for (group in this.modules[mod]) {
            if (
              "Vacancies" in this.modules[mod][group] &&
              this.modules[mod][group]["Group Members"].indexOf("You") == -1
            ) {
              this.currGroups[group] = this.modules[mod][group];
              this.my_compatibility[group] = {};
              for (var vacancy in this.modules[mod][group]["Vacancies"]) {
                for (var member in this.modules[mod][group]["Vacancies"][
                  vacancy
                ]) {
                  if (
                    !this.modules[mod][group]["Vacancies"][vacancy][member][
                      "FilledOrNot"
                    ]
                  ) {
                    var tot = 0;
                    var match = 0;
                    for (
                      var i = 0;
                      i <
                      this.modules[mod][group]["Vacancies"][vacancy][member][
                        "Skills Required"
                      ].length;
                      i++
                    ) {
                      tot += 1;
                      if (
                        this.my_skills.indexOf(
                          this.modules[mod][group]["Vacancies"][vacancy][
                            member
                          ]["Skills Required"][i]
                        ) > -1
                      ) {
                        match += 1;
                      }
                    }
                    var compat = parseFloat((match / tot) * 100 + "").toFixed(
                      2
                    );
                    this.my_compatibility[group][member] = compat;
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
<style>
</style>
