import { Line } from 'vue-chartjs'
import database from '../firebase.js'
import firebase from "firebase";
import "firebase/firestore";

export default {
  extends: Line,
  data: function () {
    return {
        user: "",
        taskList: "",
        groups:"",
        datacollection: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
              // { 
              //   data: [],
              //   label: "",
              //   borderColor: "#3e95cd",
              //   fill: false
              // }
          ]
        },
        options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            // responsive: true,
            // maintainAspectRatio: false
        }
    }
  },

  methods: {

    getColor: function() {
      let colors = ["#C9CBCF", "#9966FE", "#36A2EB", "#4BC0C0", "#FFC134", "#FF6383"];
      let randomNumber = Math.round(Math.random() * 5);
      return colors[randomNumber];
    },

    getUser: function() {
      let tempName = '';
      let user1 = firebase.auth().currentUser;
      let emailVerified = user1.email;
      database.collection('User Info').onSnapshot(user => {
        user.forEach(function(currUser) {
          if(currUser.id == emailVerified) {
            tempName = currUser.data()['Name']
          }
        })
        this.user = tempName;
        console.log("tempUser")
        console.log(this.user)
        return this.user;
        
      })
      // this.user = firebase.auth().currentUser;
      // var emailVerified = this.user.email;
      // database.collection("User Info").onSnapshot(user1 => {
      //   user1.forEach(function(currUser1) {
      //     if (currUser1.id == emailVerified) {
      //       let tempName = currUser1.data()["Name"];
      //     }
      //   });
      //   return tempName;
      // });
    },
  
    fetchTasks: function() {
      let currUser = this.getUser();
      console.log("currUser here")
      console.log(this.currUser) 
      let tasks = {};
      let myGroups = { members: {}, groupName: {} };
      let time = {};

      database.collection("Modules").onSnapshot(myModules => {
        myModules.forEach(function(module) {
          for (let groups in module.data()) {
            if (groups == "NoGroup") {
              return;
            }
            if (!module.data()[groups]["Group Members"].includes(currUser)) {
              return;
            }
            myGroups["members"][module.id] = module.data()[groups]["Group Members"];
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
          for (let task in tasks[selectedModule]){
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
          for (month in time){
            taskArray[month] = time[month];
          }
          this.datacollection.datasets.push({data:taskArray, label: selectedModule, borderColor: this.getColor(),fill:false})
        }
        this.renderChart(this.datacollection, this.options)
      });
    }
  },
  created () {
    this.fetchTasks()
  }
}