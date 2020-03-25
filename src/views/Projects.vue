<template>
<div>
  <div>
    <head>
      <title>Projects List</title>
    </head>
    <link
      href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
  </div>
  <!--   <section class="section-profile-cover section-shaped my-0">
    <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>-->
  <section class="section section-skew">
    <div class="container" style="width:1000px">
      <card class="border-0" shadow body-classes="py-5">
        <div class="container" style="width:fit-content">
          <card class="border-0" shadow body-classes="py-5">
            <div class="px-4">
              <div class="row justify-content-center">
                <h4 style="padding:20px">
                  <span
                    class="text-primary text-uppercase"
                    style="padding-right:20px"
                  >Tasks / Deadlines</span>
                  <b-button style="font-size:15px" v-b-modal.taskModal>Add Task</b-button>
                </h4>

                <b-modal id="taskModal" ref="modal" title="Add New Task" @ok="submitTask">
                  <form ref="form">
                    <b-form-group label="Module">
                      <b-form-select v-model="selectedModule" class="mb-3">
                        <b-form-select-option value="All Modules">Select a Module</b-form-select-option>
                        <b-form-select-option
                          v-for="(items,module) in taskList"
                          v-bind:key="module"
                          :value="module"
                        >{{module}}</b-form-select-option>
                      </b-form-select>
                    </b-form-group>
                    <b-form-group label="Due Date">
                      <b-form-datepicker v-model="deadline" :min="new Date()" locale="en"></b-form-datepicker>
                    </b-form-group>
                    <b-form-group label="Task">
                      <b-form-input id="task-input" v-model="inputTask"></b-form-input>
                    </b-form-group>
                  </form>
                </b-modal>

                <div class="container">
                  <div class="row justify-content-center">
                    <div style="background-color:lightpink;padding:10px;width:800px">
                      <select v-model="selectedModule">
                        <option>All Modules</option>
                        <option v-for="(items,module) in taskList" v-bind:key="module">{{module}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <table style="width:800px">
                      <tr v-for="(details, task) in getTasks()" v-bind:key="details.id">
                        <td
                          style="width:150px;font-size:15px"
                          class="timeline datebutton"
                        >{{fetchDate(details.date)}}</td>
                        <td class="taskbutton">
                          <i
                            class="fa fa-circle-thin"
                            style="color:rgb(170, 169, 169);vertical-align: middle;padding-right:15px"
                          ></i>
                          {{task}}
                          <br />
                          <i
                            style="font-size: 14px;padding-left:35px"
                          >{{showDaysLeft(details.date)}}</i>
                        </td>
                        <td style="width:90px" class="taskbutton">
                          <i
                            class="fa fa-pencil-square-o"
                            aria-hidden="true"
                            style="font-size:15px"
                            v-b-modal.editModal
                            v-on:click="editTask(details, task)"
                          ></i>
                          <i
                            v-on:click="deleteTask(details.id)"
                            class="fa fa-trash"
                            aria-hidden="true"
                            style="padding-left:40px;color:rgb(136, 43, 43)"
                          ></i>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </card>
          <!-- Task Edit Modal-->
          <b-modal id="editModal" ref="modal" title="Edit Task" @ok="submitEdit()">
            <form ref="form">
              <b-form-group label="Due Date">
                <b-form-datepicker v-model="editDate" :min="new Date()" locale="en"></b-form-datepicker>
              </b-form-group>
              <b-form-group label="Task">
                <b-form-input id="task-edit" v-model="editText"></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
          <br />
          <!-- subtasks -->
          <div class="container">
            <card class="border-0" shadow body-classes="py-5">
              <div class="px-4">
                <div class="row justify-content-center">
                  <h4>
                    <span
                      class="text-primary text-uppercase"
                      style="padding-right:20px"
                    >Delegate Sub-Tasks</span>
                    <b-button style="font-size:15px" v-b-modal.subTaskModal>Add Sub-Task</b-button>
                  </h4>

                  <span>
                    <b-modal
                      id="subTaskModal"
                      ref="modal"
                      title="Add New Sub-Task"
                      @ok="submitSubTask"
                    >
                      <form ref="form">
                        <b-form-group label="Module" style="width:fit-content">
                          <b-form-select v-model="selectedModule" class="mb-3">
                            <b-form-select-option value="All Modules">Select a Module</b-form-select-option>
                            <b-form-select-option
                              v-for="(items,module) in taskList"
                              v-bind:key="module"
                              :value="module"
                            >{{module}}</b-form-select-option>
                          </b-form-select>
                        </b-form-group>
                        <b-form-group
                          label="Task"
                          style="width:fit-content;padding-right:45px;float:left"
                        >
                          <b-form-select v-model="selectedTask" class="mb-3">
                            <b-form-select-option value="All Tasks">Select a Task</b-form-select-option>
                            <b-form-select-option
                              v-for="(details, task) in getTasks()"
                              v-bind:key="details.id"
                              :value="task"
                            >{{task}}</b-form-select-option>
                          </b-form-select>
                        </b-form-group>
                        <b-form-group
                          style="width:fit-content;float:center"
                          label="Member in Charge"
                        >
                          <b-form-select v-model="selectedMember" class="mb-3">
                            <b-form-select-option value="All Members">Select a Member</b-form-select-option>
                            <b-form-select-option
                              v-for="(member, key) in fetchMembers()"
                              v-bind:key="key"
                              :value="member"
                            >{{member}}</b-form-select-option>
                          </b-form-select>
                        </b-form-group>
                        <b-form-group label="Sub-Task Title" style="width:400px">
                          <b-form-input id="subTask-input" v-model="inputSubtask"></b-form-input>
                        </b-form-group>
                      </form>
                    </b-modal>
                  </span>
                  <div class="container" style="padding:20px">
                    <div class="row justify-content-center">
                      <select v-model="selectedMember">
                        <option>All Members</option>
                        <option v-for="members in fetchMembers()" v-bind:key="members">{{members}}</option>
                      </select>
                      <span style="padding-left:25px">
                        <select v-model="selectedTask">
                          <option>All Tasks</option>
                          <option
                            v-for="(details, task) in getTasks()"
                            v-bind:key="details.id"
                          >{{task}}</option>
                        </select>
                      </span>
                    </div>
                  </div>
                  <div>
                    <table style="width:800px">
                      <thead>
                        <tr>
                          <th>Member</th>
                          <th>Sub-Tasks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(details, member) in fetchSubTasks()" v-bind:key="member">
                          <td style="width:100px">{{member}}</td>

                          <td>
                            <table style="width:700px">
                              <tr
                                class="tab"
                                v-for="(list, subtask) in details"
                                v-bind:key="subtask"
                              >
                                <td>{{subtask}}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </card>
          </div>
          <br />
          <!--Comments -->
          <div class="container">
            <card class="border-0" shadow body-classes="py-5">
              <div class="px-4">
                <div class="container">
                  <div class="row justify-content-center">
                    <h4>
                      <span class="text-primary text-uppercase" style="padding-right:20px">Comments</span>
                    </h4>
                  </div>
                  <div class="row justify-content-center" style="padding:20px">
                    <select v-model="selectedSubtask">
                      <option>All Sub-Tasks</option>
                      <option
                        v-for="(details, subTask) in subTaskList()"
                        v-bind:key="details.subTaskID"
                      >{{subTask}}</option>
                    </select>
                  </div>

                  <div class="row justify-content-center">
                    <table style="width:800px">
                      <thead>
                        <tr>
                          <th style>Sub-Task</th>
                          <th>Comments</th>
                        </tr>
                      </thead>
                      <tbody v-for="(details, member) in fetchSubTasks()" v-bind:key="member">
                        <tr v-for="(list, subtask) in details" v-bind:key="subtask">
                          <td style="width:200px">{{subtask}}</td>
                          <td>
                            <table style="width:600px">
                              <tr
                                class="tab"
                                v-for="comment in list['comments']"
                                v-bind:key="comment"
                              >
                                <td>{{comment}}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </card>
          </div>
        </div>
      </card>
    </div>
  </section>
</div>
</template>


<script>
import firebase from "firebase";
import "firebase/firestore";
import database from "../firebase.js";
export default {
  data() {
    return {
      hover: false,
      user: "Bobby",
      groups: {},
      taskList: {},
      taskID: "",
      editDate: "",
      editText: "",
      oldSubEdit: "",
      editSubText: "",
      //Inputting
      inputTask: "",
      inputSubtask: "",
      inputComment: "",
      deadline: new Date(),
      selectedMember: "All Members",
      selectedModule: "All Modules",
      selectedTask: "All Tasks",
      selectedSubtask: "All Sub-Tasks"
    };
  },
  components: {},
  computed: {
    // Filter tasks by module selected
    filterByModule: function() {
      let filteredMods = [];
      for (let module in this.taskList) {
        if (
          this.selectedModule != "All Modules" &&
          !(this.selectedModule == module)
        ) {
          continue;
        }
        filteredMods[module] = this.taskList[module];
      }
      return filteredMods;
    }
  },

  methods: {
    deleteTask: function(taskID) {
      database
        .collection("Modules")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            for (let group in doc.data()) {
              if (group != "noGroup") {
                let assignments = doc.data()[group]["Assignments"];
                for (let assignment in assignments) {
                  if (assignments[assignment]["TaskID"] == taskID) {
                    database
                      .collection("Modules")
                      .doc(doc.id)
                      .update({
                        [group +
                        ".Assignments." +
                        assignment]: firebase.firestore.FieldValue.delete()
                      });
                  }
                }
              }
            }
          });
        });
    },
    submitEdit: function() {
      let currModule = "";
      let newTask = this.editText;
      let dueDate = this.editDate;
      let id = this.taskID;
      if (!(dueDate instanceof Date)) {
        let year = dueDate.substring(0, 4);
        let month = "0" + Number(dueDate.substring(6, 7)) - 1;
        let day = dueDate.substring(8, 10);
        dueDate = new Date(year, month, day);
      }
      if (newTask == "") {
        alert("Please enter the task name");
      } else {
        database
          .collection("Modules")
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              for (let group in doc.data()) {
                if (group != "noGroup") {
                  let assignments = doc.data()[group]["Assignments"];
                  for (let assignment in assignments) {
                    if (assignments[assignment]["TaskID"] == id) {
                      currModule = doc.id;

                      database
                        .collection("Modules")
                        .doc(doc.id)
                        .update({
                          [group + ".Assignments." + newTask]: assignments[
                            assignment
                          ],
                          [group +
                          ".Assignments." +
                          assignment]: firebase.firestore.FieldValue.delete(),
                          [group +
                          ".Assignments." +
                          newTask +
                          ".deadline"]: dueDate
                        });
                    }
                  }
                }
              }
            });
          });
      }
      /*           .update({
            [group + ".Assignments." + newTask]: {
              subTasks: {},
              TaskID: 10,
              completed: false,
              deadline: dueDate
            }
          }); */
    },
    editTask: function(details, task) {
      this.editText = task;
      this.editDate = details.date;
      this.taskID = details.id;
    },
    showDaysLeft: function(date) {
      let diff = Math.ceil((date - new Date()) / (86400 * 1000));
      if (diff >= 0) {
        return "Due in " + diff + " days";
      } else {
        return "Due " + Math.abs(diff) + " days ago";
      }
    },
    fetchDate: function(date) {
      let months = {
        "0": "Jan",
        "1": "Feb",
        "2": "Mar",
        "3": "Apr",
        "4": "May",
        "5": "Jun",
        "6": "Jul",
        "7": "Aug",
        "8": "Sep",
        "9": "Oct",
        "10": "Nov",
        "11": "Dec"
      };
      return (
        date.getDate() +
        "-" +
        months[date.getMonth()] +
        "-" +
        date.getFullYear()
      );
    },
    getTasks: function() {
      let myTasks = {};
      for (let module in this.filterByModule) {
        for (let task in this.taskList[module]) {
          myTasks[task] = {
            id: Number(this.taskList[module][task]["TaskID"]),
            date: this.taskList[module][task]["deadline"].toDate()
          };
        }
      }
      return myTasks;
    },
    submitSubTask: function() {
      let currModule = this.selectedModule;
      let currTask = this.selectedTask;
      let newSubTask = this.inputSubtask;
      let currMember = this.selectedMember;
      let group = this.groups["groupName"][currModule];
      if (this.selectedModule == "All Modules") {
        alert("Please choose the relevant module");
      } else if (this.selectedTask == "") {
        alert("Please choose the relevant task");
      } else if (this.inputSubtask == "") {
        alert("Please enter the sub-task title");
      } else {
        database
          .collection("Modules")
          .doc(currModule)
          .update({
            [group + ".Assignments." + currTask + ".subTasks." + newSubTask]: {
              member: currMember,
              subTaskID: 10,
              completed: false,
              date: new Date(),
              comments: {}
            }
          });
        this.inputSubtask = "";
      }
    },
    submitTask: function() {
      let currModule = this.selectedModule;
      let newTask = this.inputTask;
      let dueDate = this.deadline;
      let group = this.groups["groupName"][currModule];
      if (!(dueDate instanceof Date)) {
        let year = dueDate.substring(0, 4);
        let month = "0" + Number(dueDate.substring(6, 7)) - 1;
        let day = dueDate.substring(8, 10);
        dueDate = new Date(year, month, day);
      }
      if (this.selectedModule == "All Modules") {
        alert("Please choose the relevant module");
      } else if (this.inputTask == "") {
        alert("Please enter the task name");
      } else {
        database
          .collection("Modules")
          .doc(currModule)
          .update({
            [group + ".Assignments." + newTask]: {
              subTasks: {},
              TaskID: 10,
              completed: false,
              deadline: dueDate
            }
          });
      }

      /* {
                    projList[groups]["Assignments"]["new Assignment"] = "temp";

                    database
                      .collection("Modules")
                      .doc(module.id)
                      .set(projList);
                  } */

      /* if (groups == "GroupTest") {
                    database
                      .collection("Modules")
                      .doc(module.id)
                      .update({
                        "Group 1": module.data()["GroupTest"],
                        GroupTest: firebase.firestore.FieldValue.delete()
                      });

                  }*/

      this.deadline = new Date();

      this.inputTask = "";
    },
    fetchComments: function() {
      let workload = this.fetchSubTasks();
      let comments = {};
      for (let member in workload) {
        for (let subTask in workload[member]) {
          if (
            this.selectedSubtask != "All Sub-Tasks" &&
            this.selectedSubtask != subTask
          ) {
            continue;
          }

          let commentMap = workload[member][subTask]["comments"];
          for (let commentID in commentMap) {
            comments[commentID] = commentMap[commentID];
          }
        }
      }
      return comments;
    },
    subTaskList: function() {
      let list = {};
      let data = this.fetchSubTasks();

      for (let member in data) {
        for (let subTask in data[member]) {
          list[subTask] = data[member][subTask];
        }
      }
      return list;
    },
    fetchSubTasks: function() {
      let subTasks = {};
      for (let module in this.filterByModule) {
        for (let task in this.taskList[module]) {
          if (this.selectedTask != "All Tasks" && this.selectedTask != task) {
            continue;
          }
          let list = this.taskList[module][task]["subTasks"];
          for (let subtask in list) {
            if (
              this.selectedMember != "All Members" &&
              this.selectedMember != list[subtask].member
            ) {
              continue;
            }
            let currMember = list[subtask].member;
            if (!(currMember in subTasks)) {
              subTasks[currMember] = {};
            }
            subTasks[currMember][subtask] = list[subtask];
          }
        }
      }
      return subTasks;
    },
    fetchMembers: function() {
      let members = [];
      for (let module in this.groups["members"]) {
        if (
          this.selectedModule != "All Modules" &&
          this.selectedModule != module
        ) {
          continue;
        }
        for (let member of this.groups["members"][module]) {
          if (members.includes(member)) {
            continue;
          }
          members.push(member);
        }
      }
      return members;
    },

    fetchTasks: function() {
      let tasks = {};
      let myGroups = { members: {}, groupName: {} };
      let currUser = this.user;
      database.collection("Modules").onSnapshot(myModules => {
        myModules.forEach(function(module) {
          for (let groups in module.data()) {
            if (groups == "noGroup") {
              //groups = group name
              return;
            }
            if (!module.data()[groups]["Group Members"].includes(currUser)) {
              //filter to show only user's groups
              return;
            }
            myGroups["members"][module.id] = module.data()[groups][
              "Group Members"
            ];
            myGroups["groupName"][module.id] = groups;

            tasks[module.id] = module.data()[groups]["Assignments"];
          }
        });
        this.taskList = tasks;
        this.groups = myGroups;
      });
    },
    editGroup: function() {
      //for testing only
      database
        .collection("Modules")
        .get()
        .then(myModules => {
          myModules.forEach(function(module) {
            if (module.id == "BT3103") {
              return;
            }
            for (let groups in module.data()) {
              if (groups == "GroupTest") {
                database
                  .collection("Modules")
                  .doc(module.id)
                  .update({
                    "Group 1": module.data()["GroupTest"],
                    GroupTest: firebase.firestore.FieldValue.delete()
                  });
              }
            }
          });
        });
    },
    fetchModules: function() {
      let modules = [];
      database
        .collection("Modules")
        .get()
        .then(myModules => {
          myModules.forEach(function(module) {
            modules.push(module.id);
          });
          this.moduleList = modules;
          alert(modules);
        });

      /**
      database
        .collection("Modules")
        .doc("BT3103")
        .collection("Group Name")
        .get()
        .then(querySnapShot => {
          //let item = {};
          querySnapShot.forEach(doc => {// group names
            alert(doc.id);
          });

          //item.show = false;

          this.itemsList.push(3);
         
        });
    }
    **/
    }
  },
  created() {
    //this.fetchModules();
    this.fetchTasks();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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

body {
  height: 100%;
}

#modules {
  width: 100px;
  height: 30px;
}

#studentlist {
  text-align: left;
}

#memberlist {
  width: 500px;
  text-align: left;
}

.button {
  text-align: center;
  border-radius: 25px;
  border: 2px solid gray;
  background-color: white;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.hidden {
  display: none;
  overflow: hidden;
  text-align: center;
  border-radius: 25px;
  border: 2px solid gray;
  background-color: white;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.group {
  display: inline-block;
}

.group:hover .group-content {
  display: block;
  position: absolute;
}

.group-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: auto;
  height: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  text-align: left;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: fit-content;
}

h1 {
  color: ivory;
}
h2 {
  text-align: center;
}
#itemsList {
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 5px;
  box-sizing: border-box;
}
img {
  width: 100px;
  height: 100px;
}
.container {
  max-width: 1300px;
}
a {
  font-family: "Poppins", sans-serif;
  color: #1a1a1a;
}

/* Remove margins and padding from the list */

/** line **/
.timeline:before {
  content: "";
  background-color: rgb(255, 2, 99);
  position: absolute;
  left: 125px;
  bottom: 0px;
  top: 0px;
  width: 4px;
}

/** circle **/
.timeline:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  right: -17px;
  background-color: white;
  border: 4px solid rgb(255, 2, 99);
  top: 20px;
  left: 119.5px;
  bottom: 20px;
  border-radius: 50%;
}
th {
  font-size: 20px;
  text-align: left;
  padding: 10px;
  color: #888;
}

td {
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  position: relative;
  padding: 5px 10px 5px 10px;
  width: 500px;
  font-size: 18px;
  transition: 0.2s;
}

ul.ba {
  list-style-type: none;
}

.taskbutton {
  padding: 10px;
  background: #f8f8ff;
  color: #555;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
  list-style-type: none;
}

.todoDone {
  color: #c0c0c0;
  text-decoration: line-through;
}

.datebutton {
  width: 150px;
  background: #f8f8ff;
  font-size: 14px;
}
.tab {
  border: none;
  background-color: #f8f8ff;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
}

.tab:hover {
  background-color: #e0ffff;
}
</style>
