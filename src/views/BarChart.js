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
            data: [],
            backgroundColor:["#F4F5F5","#EBE0FF", "#DAECFC", "#DDF3F2", "#FFF3DA", "#FFE1E6"] 
        }]
      },
      options: {
        // animation: {
        //   onComplete: function(animation){
        //     var firstSet = animation.chart.datacollection.datasets[0].data;
        //     var dataSum = firstSet.reduce((accumulator, currentValue) => accumulator + currentValue);
        //     if (typeof firstSet !== "object" || dataSum === 0) {
        //       document.getElementById("no-data").style.display = "block";
        //       document.getElementById("data").style.display = "none";
        //     }
        //   }
        // },
        
        scales: {
          xAxes: [{
            barPercentage: 0.4
          }],
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

        let month = "";
        let num = "";
        for (let module in tasks) {
          for (let task in tasks[module]){
            month = this.getMonth(tasks[module][task]["deadline"]);
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
        //let length = Object.keys(time).length;
        this.renderChart(this.datacollection, this.options)
      });
    }
  },
  created () {
    this.fetchTasks()
  }
}


