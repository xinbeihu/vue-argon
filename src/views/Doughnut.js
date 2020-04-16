import {Doughnut} from 'vue-chartjs'
import database from '../firebase.js'

export default{
    extends:Doughnut,
    data: function () {
        return {
            user: "Bobby",
            taskList: "",
            groups:"",
            datacollection: {
                labels: [],
                datasets: [
                    {
                    label: "Number of Tasks Completed",
                    backgroundColor: ["#DAECFC", "#DDF3F2", "#F4F5F5","#EBE0FF", "#FFF3DA", "#FFE1E6"],
                    borderColor: ["#36A2EB", "#4BC0C0", "#C9CBCF", "#9966FE", "#FFC134", "#FF6383"],
                    // light ["#F4F5F5","#EBE0FF", "#DAECFC", "#DDF3F2", "#FFF3DA", "#FFE1E6"]
                    // dark ["#C9CBCF", "#9966FE", "#36A2EB", "#4BC0C0", "#FFC134", "#FF6383"]
                    data: []
                }
            ]
            },
            options: {
                // responsive: true,
                // maintainAspectRatio: false
            }
        }
    },
    methods: {

        fetchTasks: function() {
            var user = firebase.auth().currentUser;
            var emailVerified = user.email;
            database.collection("User Info").onSnapshot(user => {
                user.forEach(function(currUser) {
                    if (currUser.id == emailVerified) {
                        tempName = currUser.data()["Name"];
                    }
                });
                this.user = tempName;
            });
          let currUser = this.user;
          let tasks = {};
          let myGroups = { members: {}, groupName: {} };
          let membercontribution = {};
    
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
            // console.log(myGroups)
    
            // let selectedModule = "";
            let member = "";
            let num = "";
            for (let module in tasks) {
                // selectedModule = module;
                // let taskArray = [];
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
                            }
                        }
                    }
                }
                // for (member in membercontribution) {
                //     this.datacollection.labels.push(member);
                //     taskArray.push(membercontribution[member]);
                // }
                // this.datacollection.datasets.push({data:taskArray, label:selectedModule, backgroundColor: ["#FF6383", "#FF9F40", "#FFC134", "#4BC0C0", "#36A2EB"], borderWidth: 0.5});
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


    