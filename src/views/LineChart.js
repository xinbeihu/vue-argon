import { Line } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Line,
  data: function () {
    return {
        user: "Bobby",
        taskList: "",
        groups:"",
        datacollection: {
            labels: [],
            datasets: [
              { 
                data: [],
                label: "",
                borderColor: "#3e95cd",
                fill: false
              }
          ]
        },
        options: {
            title: {
              display: true,
              //text: 'My Contribution'
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },

  methods: {
    getMonth: function(timestamp) {
      let monthNumber = timestamp.toDate().getMonth();
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
      let month = months[monthNumber];
      return month;
    },

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
        // console.log(this.taskList)
        // console.log(this.groups)

        let selectedModule = "";
        let numOfModules = Object.keys(tasks).length;
        let month = "";
        let num = "";
        let count = 0;
        for (let module in tasks) {
          selectedModule = module;
          for (let task in tasks[module]){
            month = this.getMonth(tasks[module][task]["deadline"]);
            if (tasks[module][task]["completed"] == true) {
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
            this.datacollection.datasets[count].data.push(time[month]);
            this.datacollection.datasets[count].label = selectedModule;
          }
          count++;
        }
        this.renderChart(this.datacollection, this.options)
      });
    }
  },
  created () {
    this.fetchTasks()
  }
}