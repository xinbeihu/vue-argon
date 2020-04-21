import { Line } from 'vue-chartjs'
import database from '../firebase.js'
import firebase from "firebase";

export default {

  extends: Line,
  data: function () {
    return {
      // user: "Bobby",
      taskList: "",
      groups: "",
      datacollection: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: []
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
      }
    }
  },

  methods: {
    getColor: function () {
      let colors = ["#C9CBCF", "#9966FE", "#36A2EB", "#4BC0C0", "#FFC134", "#FF6383"];
      let randomNumber = Math.round(Math.random() * 5);
      return colors[randomNumber];
    },

    fetchTasks: function () {
      var user = firebase.auth().currentUser;
      var emailVerified = user.email;
      var tempName = "";
      let time = {};

      database.collection("User Info").onSnapshot(users => {
        users.forEach(function (currUser) {
          if (currUser.id == emailVerified) {
            tempName = currUser.data()["Name"];
          }
        });
        let currUser = tempName;

        database.collection("Modules").onSnapshot(myModules => {
          let tasks = {};
          let myGroups = { members: {}, groupName: {} };
          myModules.forEach(function (module) {
            console.log(Object.keys(module.data()));
            for (let groups of Object.keys(module.data())) {
              if (groups == "NoGroup") {
                //groups = group name
                continue;
              }

              if (!module.data()[groups]["Group Members"].includes(currUser)) {
                //filter to show only user's groups
                continue;
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

          let selectedModule = "";
          let month = "";
          let num = "";
          for (let module in tasks) {
            selectedModule = module;
            let taskArray = [];
            for (let task in tasks[selectedModule]) {
              month = tasks[selectedModule][task]["deadline"].toDate().getMonth();
              if (tasks[selectedModule][task]["completed"] == true) {
                if (month in time) {
                  num = time[month];
                  time[month] = num + 1;
                } else {
                  time[month] = 1;
                }
              }
            }
            for (month in time) {
              taskArray[month] = time[month];
            }
            this.datacollection.datasets.push({ data: taskArray, label: selectedModule, borderColor: this.getColor(), fill: false })
          }
          this.renderChart(this.datacollection, this.options)
        });
      });
    }

    // fetchTasks: function () {
    //   // get current user
    //   var user1 = firebase.auth().currentUser;
    //   var emailVerified = user1.email;
    //   let tempName = "";
    //   database.collection("User Info").onSnapshot(user2 => {
    //     user2.forEach(function (currUser) {
    //       if (currUser.id == emailVerified) {
    //         tempName = currUser.data()["Name"];
    //       }
    //     });
    //     let currUser = tempName;
    //     // console.log("currUser for LineChart here")
    //     // console.log(currUser)

    //     let tasks = {};
    //     let myGroups = { members: {}, groupName: {} };
    //     let time = {};

    //     database.collection("Modules").onSnapshot(myModules => {
    //       myModules.forEach(function (module) {
    //         for (let groups in module.data()) {
    //           if (groups == "NoGroup") {
    //             return;
    //           }
    //           if (!module.data()[groups]["Group Members"].includes(currUser)) {
    //             return;
    //           }
    //           myGroups["members"][module.id] = module.data()[groups]["Group Members"];
    //           myGroups["groupName"][module.id] = groups;
    //           tasks[module.id] = module.data()[groups]["Assignments"];
    //         }
    //       });
    //       this.taskList = tasks;
    //       this.groups = myGroups;

    //       let selectedModule = "";
    //       let month = "";
    //       let num = "";
    //       for (let module in tasks) {
    //         selectedModule = module;
    //         let taskArray = [];
    //         for (let task in tasks[selectedModule]) {
    //           month = tasks[selectedModule][task]["deadline"].toDate().getMonth();
    //           if (tasks[selectedModule][task]["completed"] == true) {
    //             if (month in time) {
    //               num = time[month];
    //               time[month] = num + 1;
    //             } else {
    //               time[month] = 1;
    //             }
    //           }
    //         }
    //         for (month in time) {
    //           taskArray[month] = time[month];
    //         }
    //         this.datacollection.datasets.push({ data: taskArray, label: selectedModule, borderColor: this.getColor(), fill: false })
    //       }
    //       this.renderChart(this.datacollection, this.options)
    //     });
    //   });
    // }
  },
  created() {
    this.fetchTasks()
  }
}