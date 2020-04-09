import { Bar } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
      user: "Bobby",
      taskList: "",
      groups: "",
      datacollection: {
        labels: [],
        datasets: [{
            label: "Number of Tasks",
            data: []
        }]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          // text: 'Number of Tasks for Each Month'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  methods: {
    fetchTasks: function() {
      let currUser = this.user;
      let tasks = {};
      let myGroups = { members: {}, groupName: {} };
      let time = {};

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
            myGroups["members"][module.id] = module.data()[groups]["Group Members"];
            myGroups["groupName"][module.id] = groups;
            tasks[module.id] = module.data()[groups]["Assignments"];
          }
        });
        this.taskList = tasks;
        this.groups = myGroups;

        let month = "";
        let num = "";
        for (let module in tasks) {
          for (let task in tasks[module]){
            month = tasks[module][task]["deadline"].toDate().getMonth();
            //console.log(month)
            if (month in time) {
              num = time[month];
              time[month] = num + 1;
            } else {
              time[month] = 1;
            }
          }
        }
        for (month in time){
          this.datacollection.labels.push(month);
          this.datacollection.datasets[0].data.push(time[month]);
        }
        this.renderChart(this.datacollection, this.options)
      });
    }
  },
  created () {
    this.fetchTasks()
  }
}






//   computed: {
//     filterByModule: function() {
//       let filteredMods = [];
//       for (let module in this.taskList) {
//         if (
//           this.selectedModule != "All Modules" &&
//           !(this.selectedModule == module)
//         ) {
//           continue;
//         }
//         filteredMods[module] = this.taskList[module];
//       }
//       return filteredMods;
//     }
//   },

//   methods: {

//     fetchTasks: function() {
//       let tasks = {};
//       let myGroups = { members: {}, groupName: {} };
//       let currUser = this.user;
//       database.collection("Modules").onSnapshot(myModules => {
//         myModules.forEach(function(module) {
//           for (let groups in module.data()) {
//             if (groups == "noGroup") {
//               //groups = group name
//               return;
//             }
//             if (!module.data()[groups]["Group Members"].includes(currUser)) {
//               //filter to show only user's groups
//               return;
//             }
//             myGroups["members"][module.id] = module.data()[groups]["Group Members"];
//             myGroups["groupName"][module.id] = groups;
//             tasks[module.id] = module.data()[groups]["Assignments"];
//           }
//         });
//         this.taskList = tasks;
//         this.groups = myGroups;
//       });
//     },

//     fetchSubTasks: function() {
//       let subTasks = {};
//       for (let module in this.filterByModule) {
//         for (let task in this.taskList[module]) {
//           if (this.selectedTask != "All Tasks" && this.selectedTask != task) {
//             continue;
//           }
//           let list = this.taskList[module][task]["subTasks"];
//           for (let subtask in list) {
//             let currMember = list[subtask].member;
//             if (!(currMember in subTasks)) {
//               subTasks[currMember] = {};
//             }
//             subTasks[currMember][subtask] = list[subtask];
//             console.log(subTasks);
//           }
//         }
//       }
//       return subTasks;
//     },

//     getGraphs: function() {
//       console.log(this.taskList);
//       let result = {};
//       for (let module in this.taskList) {
//         let assignments = this.taskList[module];
//         for (let assignment in assignments) {
//           let subtasks = assignments[assignment]["subTasks"];
//           for (let subtask in subtasks) {
//             let member = subtasks[subtask]["member"];
//             if (!(member in result)) {
//               result[member] = { completed: 0, incomplete: 0 };
//             }
//             if (subtasks[subtask]["completed"]) {
//               result[member]["completed"] = result[member]["completed"] + 1;
//             } else {
//               result[member]["incomplete"] = result[member]["incomplete"] + 1;
//             }
//           }
//         }
//       }
//       console.log(result);
//       for (let member in result) {
//         if (member == this.user) {
//           this.datacollection.datasets[0].data.push(result[member]["completed"]);
//           this.datacollection.datasets[0].data.push(result[member]["incompleted"]);
//         }
//       }
//       this.renderChart(this.datacollection, this.options)
//     }

//     // fetchItems: function () {
//     //   let dict = {};
//     //   let currUser = this.user;
//     //   let ddl = 0;
//     //   let num = 0;
//     //   database.collection('Modules').onSnapshot(myModules => {
//     //     myModules.forEach(function(module){
//     //       for (let groups in module.data()) {
//     //         if (groups != "NoGroup") {
//     //           let assignments = module.data()[groups]["Assignments"];
//     //           for (let assignment in assignments) {
//     //             ddl = assignments[assignment]["deadline"].toDate().getMonth(); //0 is january 
//     //             console.log(ddl) 
//     //           }
            
//     //             if (assignments[assignment]["comments"]["member"] == currUser) {
//     //               if (! (month in dict)){
//     //                 dict[month] = 1;
//     //               } else {
//     //                 num = dict[month];
//     //                 delete dict[month];
//     //                 dict[month] = num + 1;
//     //               }
//     //             }
//     //           }
            
//     //       }
//     //       for (let key in dict) {
//     //         this.datacollection.labels.push(key);
//     //         this.datacollection.datasets[0].data.push(dict[key]);
//     //       }
//     //     })
        
//   //     })
//   //   }
//   // },
//   },
//   created () {
//     this.getGraphs()
//   }  
// }