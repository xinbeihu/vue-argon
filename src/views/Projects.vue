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
    <table>
      <tr>
        <th></th>
        <th style="position:absolute; top:25px; right:0">
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
  <br />
  <h4>
    <span style="padding-right:20px">Tasks / Deadlines</span>
    <b-button style="font-size:15px" v-b-modal.taskModal>Add Task</b-button>
  </h4>

  <span>
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
  </span>
  <div class="container">
    <select v-model="selectedModule">
      <option>All Modules</option>
      <option v-for="(items,module) in taskList" v-bind:key="module">{{module}}</option>
    </select>
    <div class="row justify-content-center">
      <table>
        <tr v-for="(TaskID, task) in getTasks()" v-bind:key="TaskID">
          <td>{{task}}</td>
        </tr>
      </table>
    </div>
  </div>
  <br />
  <!-- subtasks -->
  <div class="container">
    <h4>
      <span style="padding-right:20px">Delegate Sub-Tasks</span>
      <b-button style="font-size:15px" v-b-modal.subTaskModal>Add Sub-Task</b-button>
    </h4>

    <span>
      <b-modal id="subTaskModal" ref="modal" title="Add New Sub-Task" @ok="submitSubTask">
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
          <b-form-group label="Task" style="width:fit-content;padding-right:45px;float:left">
            <b-form-select v-model="selectedTask" class="mb-3">
              <b-form-select-option value="All Tasks">Select a Task</b-form-select-option>
              <b-form-select-option
                v-for="(TaskID, task) in getTasks()"
                v-bind:key="TaskID"
                :value="task"
              >{{task}}</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group style="width:fit-content;float:center" label="Member in Charge">
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

    <select v-model="selectedMember">
      <option>All Members</option>
      <option v-for="members in fetchMembers()" v-bind:key="members">{{members}}</option>
    </select>
    <span style="padding:25px">
      <select v-model="selectedTask">
        <option>All Tasks</option>
        <option v-for="(TaskID, task) in getTasks()" v-bind:key="TaskID">{{task}}</option>
      </select>
    </span>
    <div class="row justify-content-center">
      <table>
        <tr v-for="(details, subtask) in fetchSubTasks()" v-bind:key="subtask">
          <td>{{subtask}}</td>
        </tr>
      </table>
    </div>
  </div>
  <br />
  <!--Comments -->
  <div class="container">
    <select v-model="selectedSubtask">
      <option>All Sub-Tasks</option>
      <option
        v-for="(details, subtask) in fetchSubTasks()"
        v-bind:key="details.subTaskID"
      >{{subtask}}</option>
    </select>
    <div class="row justify-content-center">
      <table>
        <tr v-for="(comment, id) in fetchComments()" v-bind:key="id">
          <td>{{comment}}</td>
        </tr>
      </table>
    </div>
  </div>
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

      oldEdit: "",
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
    getTasks: function() {
      let myTasks = {};
      for (let module in this.filterByModule) {
        for (let task in this.taskList[module]) {
          myTasks[task] = this.taskList[module][task]["TaskID"];
        }
      }
      return myTasks;
    },
    submitSubTask: function() {
      let currUser = this.user;
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
      }
    },
    submitTask: function() {
      let currUser = this.user;
      let currModule = this.selectedModule;
      let newTask = this.inputTask;
      let dueDate = this.deadline;
      if (this.selectedModule == "All Modules") {
        alert("Please choose the relevant module");
      } else if (this.inputTask == "") {
        alert("Please enter the task name");
      } else {
        database
          .collection("Modules")
          .get()
          .then(myModules => {
            myModules.forEach(function(module) {
              if (module.id != currModule) {
                return;
              }
              for (let groups in module.data()) {
                if (groups != "NoGroup" && groups != "testing") {
                  if (
                    module.data()[groups]["Group Members"].includes(currUser)
                  ) {
                    database
                      .collection("Modules")
                      .doc(module.id)
                      .update({
                        [groups + ".Assignments." + newTask]: {
                          subTasks: {},
                          TaskID: 10,
                          completed: false,
                          deadline: dueDate
                        }
                      });
                  }
                  /* {
                    projList[groups]["Assignments"]["new Assignment"] = "temp";
                    console.log(projList);
                    database
                      .collection("Modules")
                      .doc(module.id)
                      .set(projList);
                  } */
                }

                /* if (groups == "GroupTest") {
                    database
                      .collection("Modules")
                      .doc(module.id)
                      .update({
                        "Group 1": module.data()["GroupTest"],
                        GroupTest: firebase.firestore.FieldValue.delete()
                      });
                    console.log(module.data()[groups]); 
                  }*/
              }
            });
          });

        this.deadline = new Date();
        this.inputTask = "";
      }
    },
    fetchComments: function() {
      let subTasks = this.fetchSubTasks();
      let comments = {};
      for (let subTask in subTasks) {
        if (
          this.selectedSubtask != "All Sub-Tasks" &&
          this.selectedSubtask != subTask
        ) {
          continue;
        }
        for (let commentID in subTasks[subTask]["comments"]) {
          comments[commentID] = subTasks[subTask]["comments"][commentID];
        }
      }
      return comments;
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
            subTasks[subtask] = list[subtask];
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
            if (groups == "NoGroup") {
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
            //console.log(module.data()[groups]["Group Members"]);
            tasks[module.id] = module.data()[groups]["Assignments"];
          }
        });
        this.taskList = tasks;
        this.groups = myGroups;
        //console.log(this.groups["IS3103"]);
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
                console.log(module.data()[groups]);
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

table {
  padding: 2px;
  background-color: bisque;
  text-align: left;
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
</style>
