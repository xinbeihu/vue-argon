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
            datasets: [{ 
                data: [],
                label: "Number of tasks completed",
                borderColor: "#3e95cd",
                fill: false
            }]
        },
        options: {
            title: {
              display: true,
              //text: 'My Contribution'
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
      let membercontribution = {};

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

        let member = "";
        let num = "";
        for (let module in tasks) {
          for (let task in tasks[module]){
            for (let assignment in tasks[module][task]) {
              if (assignment == "subTasks") {
                for (let subTask in tasks[module][task][assignment]) {
                  member = tasks[module][task][assignment][subTask]["member"];
                  if (member in membercontribution) {
                    num = membercontribution[member];
                    membercontribution[member] = num + 1;
                  } else {
                    membercontribution[member] = 1;
                  }
                  console.log(membercontribution)
                }
              }
            }
          }
        }
        for (member in membercontribution){
          this.datacollection.labels.push(member);
          this.datacollection.datasets[0].data.push(membercontribution[member]);
        }
        this.renderChart(this.datacollection, this.options)
      });
    }
  },
  created () {
    this.fetchTasks()
  }
}