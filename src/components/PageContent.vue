<template>
  <div>
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
          <tr v-for="(items,module) in taskList" v-bind:key="module">
            <div v-for="(subtasks, tasks) in filterByModule[module]" v-bind:key="tasks">
              <td>{{tasks}}</td>
            </div>
          </tr>
        </table>
      </div>
    </div>
    <br />
    <!-- subtasks -->
    <div class="container">
      <select v-model="selectedMember">
        <option>All Members</option>
        <option v-for="members in fetchMembers()" v-bind:key="members">{{members}}</option>
      </select>
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
    submitTask: function() {
      if (this.selectedModule == "All Modules") {
        alert("Please choose the relevant module");
      } else if (this.inputTask == "") {
        alert("Please enter the task name");
      } else {
        //database.collection('Modules').doc(this.selectedModule).
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
      for (let module in this.groups) {
        if (
          this.selectedModule != "All Modules" &&
          this.selectedModule != module
        ) {
          continue;
        }
        for (let member of this.groups[module]) {
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
      let myGroups = {};
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
            myGroups[module.id] = module.data()[groups]["Group Members"];
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
header {
  background: rgb(122, 63, 100);
  padding: 10px;
  border-style: solid;
  border-color: black;
  border-width: 2px;
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