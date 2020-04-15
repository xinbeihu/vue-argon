<template>
    <div>
        <div >
                <!-- Post Details Content Area -->
            <div >
                  <section class="section-profile-cover section-shaped my-0">
                    <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </section>
                    
              <section class="section section-skew">
                <div class="container">
                  <card shadow class="card-profile mt--300" no-body>
                    <!-- Comment Area Start -->
                        <!-- Section Title -->
                      <div>
                        <h4><strong>Forum for Module&nbsp;</strong></h4>
                            <form ref="form">
                                <b-form-group label="Module" style="width:fit-content">
                                    <b-form-select v-model="selectedModule" class="mb-3">
                                      
                                        <b-form-select-option value="All Modules">Select a Module</b-form-select-option>
                                        <b-form-select-option
                                        v-for="module in displaymodules()"
                                        v-bind:key="module"
                                        :value="module"
                                        >
                                        {{module}}
                                        </b-form-select-option>
                                    </b-form-select>
                                </b-form-group>
                            </form>
                    </div>


                  <ol>
                    <li class="single_comment_area" v-for="post of displayposts()" v-bind:key="post">
                      <div class="comment-content d-flex">
                        <!-- Comment Author -->
                                    <div class="comment-author">
                                        <img src="img/bg-img/53.jpg" alt="author">
                                    </div>
                        <!-- Comment Meta -->
                        <div class="comment-meta">
                              <a href="#" class="comment-date">{{fetchDate(post.date)}}</a>
                              <h6>{{post.email}}</h6>
                              <p>{{post.content}}</p>
                              <div >
                                <b-button style="font-size:15px" v-b-modal.replypostmodal>Reply to this post</b-button>
                                                <!-- <button class="like" type = "submit" data-toggle="modal" data-target="#myModal_reply">reply to this post</button> -->
                                <button class="like" v-on:click="deletepost(post.id)" v-show = 'post.email=="swsw@u.nus.edu"'>Delete</button>
                              </div>
                        </div>
                        <span>
                            <b-modal id="replypostmodal" ref="modal" title="Add your comment" @ok="addcomment(post.id)">   
                            <b-form-input id="task-input" v-model="inputcomment"></b-form-input>
                             
                            </b-modal>
                        </span>
                      </div>
                      <ol>
                        <li v-for="comment of displaycomments(post.id)" v-bind:key="comment">
                          <div class="comment-content d-flex">
                        <!-- Comment Author -->
                                    <div class="comment-author">
                                        <img src="img/bg-img/53.jpg" alt="author">
                                    </div>
                        <!-- Comment Meta -->
                        <div class="comment-meta">
                              <a href="#" class="comment-date">{{fetchDate(comment.date)}}</a>
                              <h6>{{comment.email}}</h6>
                              <p>{{comment.content}}</p>
                              <div >
                                <b-button style="font-size:15px" v-b-modal.replycommentmodal>Reply to this post</b-button>
                                <button class="like" v-on:click="deletecomment(comment.id)" v-show = 'comment.email=="swsw@u.nus.edu"'>Delete</button>
                              </div>
                        </div>
                        <span>
                            <b-modal id="replycommentmodal" ref="modal" title="Add your comment" @ok="addcomment(post.id)">   
                            <b-form-input id="task-input" v-model="inputcomment"></b-form-input>
                             
                            </b-modal>
                        </span>
                      </div>
                        </li>
                      </ol>


                    </li>
                  </ol>
                    

                    <!-- Post A Comment Area -->
                    <div class="post-a-comment-area bg-white mb-30 p-30 box-shadow clearfix">
                        <!-- Section Title -->
                        <div class="section-heading">
                            <h5>POST SOMETHING HERE</h5>
                        </div>

                        <!-- Reply Form -->
                        <div class="contact-form-area">
                            <form >
                                <div >
                                    <input id="postsection" class="form-control" type="text" v-model="inputpost" placeholder="post here!" cols="30" rows="10">
                                        <button class="btn mag-btn mt-30" v-on:click="addpost" type="button">Submit Post</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>

                  </card>
                </div>
                  </section>
                </div>

            </div>

    </div>
</template>

<script>
//import firebase from "firebase";
//import "firebase/firestore";
import database from "../firebase.js";
import { connect } from 'tls';
import { constants } from 'zlib';
export default {
    name: 'home',
    data(){
        return{
        currentuser:"swsw@u.nus.edu",
        selectedModule:"All Modules",
        previouspost:0,
        inputpost:"",
        showing:[],
        inputcomment:"",
        allmodules:[],  //updated by getModules()
        //groupcounter:2, //whenever a new post is started, groupcounter increases by 1
        //idcounter: 4, //keep track of the latest comment id
        idcounters:{},
        allposts:{},
        allcomments:{}
        
        }
    },
    methods:{

        displaymodules: function(){
          return this.allmodules;
        },

        displayposts: function(){
          console.log(this.selectedModule);

          let postlist = [];
          for(let postid in this.allposts[this.selectedModule]){
            //adding in the value of posts under this selected module to a list
            postlist.push(this.allposts[this.selectedModule][postid]);
          }

          //function to sort by time
          let sortingmethod = function(a,b){
                //console.log(b.date - a.date);
                return b.date - a.date;
              }
          return postlist.sort(sortingmethod);
        },


        displaycomments: function(post){
          console.log("under displaycomments");
          //console.log(post);
          console.log(this.allcomments[post]);
          let commentlist =[];
          for(let commentid in this.allcomments[this.selectedModule][post]){
            commentlist.push(this.allcomments[this.selectedModule][post][commentid]);
          }

          //function to sort by time
          let sortingmethod = function(a,b){
                //console.log(b.date - a.date);
                return b.date - a.date;
              }
          return commentlist.sort(sortingmethod);
        },


        // to fetch all the necessary data from 2 collections user info and forums
        getModules: function () {
            let mods = []
            let curruser = this.currentuser;
            database.collection('User Info').onSnapshot(allusers=> {
              console.log(1);
                allusers.forEach(function(user){
                    if (curruser != user.id){
                        return;
                    }
                    if (curruser== user.id){
                      console.log(user.id);
                        for (let mod in user.data()['Current Modules']){
                            console.log(mod);
                            if(!mods.includes(mod)){
                                mods.push(mod);
                            }
                        }
                    }
                });
                this.allmodules = mods;
                console.log(this.allmodules); 
            });

            let allpostsinfunction = {};
            let allcominfuntion = {};
            let allcounters = {};
            //let currmod = this.allmodules;
            //console.log(this.selectedModule);
            database.collection("Forums").onSnapshot(allmodules=>{
                allmodules.forEach(function(module){
                    // if(currmod=="All Modules"){
                    //   return;
                    // }
                    if(!mods.includes(module.id)){ //if this module is not taken by curruser, skip this loop and go to the next module
                      return;
                    }
                    //add idcounter for every mod
                    allcounters[module.id] = module.data()["idcounter"];
                    //else add all posts under this module id
                    allpostsinfunction[module.id] = module.data()["posts"];
                    //retrieve all comments here
                    allcominfuntion[module.id]={};
                    for(let post in allpostsinfunction[module.id]){
                      let postid = post;
                      let comforeachpost = {};

                      for(let subpost in module.data()["comments"]){
                        if(module.data()["comments"][subpost]["replyto"]==postid){
                          // console.log("subpost is");
                          // console.log(subpost);
                          comforeachpost[subpost] = module.data()["comments"][subpost];
                          //console.log(comforeachpost);
                        }
                      }
                      // console.log("post id is");
                      // console.log(postid);
                      allcominfuntion[module.id][postid] = comforeachpost;
                      // console.log(allcominfuntion);
                    }
                });
                this.allposts = allpostsinfunction;
                this.allcomments = allcominfuntion;
                this.idcounters = allcounters;
            });
            
          },


        addpost: function(){
          let currmod = this.selectedModule;
          let input = this.inputpost;
          let curruser = this.currentuser;
          if(this.selectedModule=="All Modules"){
            alert("Please choose the relevant module");
          }else if (this.inputpost==""){
            alert("Please enter your post");
          }else{
            this.idcounters[this.selectedModule]++;
            let count = this.idcounters[this.selectedModule];
            this.allposts[this.selectedModule][count] = {
                        content: input,
                        date: new Date(),
                        email: curruser,
                        username: "Shi Wen",
                        id: count
            };
            let posts = this.allposts[this.selectedModule];
            console.log(this.allposts[this.selectedModule]);
            database.collection("Forums")
                    .doc(currmod)
                    .update({
                      posts,
                      "idcounter": count
                    })
                    .then(() => {
                      console.log('addpost done');
                    })
          }
          this.inputpost="";
        },

        addcomment: function(post){ //work for both reply button under a post and reply button under a comment because input is always the post id
          let currmod = this.selectedModule;
          let input = this.inputcomment;
          let curruser = this.currentuser;
          console.log(post);
          if(this.selectedModule=="All Modules"){ //will never reach here
            alert("Please choose the relevant module");
          }else if (input==""){
            alert("Please enter your comment");
          }else{
            this.idcounters[this.selectedModule]++;
            let count = this.idcounters[this.selectedModule];
            console.log(count);
            this.allcomments[this.selectedModule][post][count] = {
                        content: input,
                        date: new Date(),
                        email: curruser,
                        username: "Shi Wen",
                        replyto: post,
                        id: count
            };
            let comments ={};
            for(let postkey in this.allcomments[this.selectedModule]){
              for (let comkey in this.allcomments[this.selectedModule][postkey]){
                comments[comkey] = this.allcomments[this.selectedModule][postkey][comkey];
              }
            };
            console.log("dictionary of comments to be added");
            console.log(comments);
            //let comments = this.allcomments[this.selectedModule][post];
            database.collection("Forums")
                    .doc(currmod)
                    .update({
                      comments,
                      "idcounter": count
                    })
                    .then(() => {
                      console.log('addcomment done');
                    })
          }
          this.inputcomment = "";
        },

        deletepost: function(post){ //input is a post id
          let currmod = this.selectedModule;
          //delete post from allposts first
          delete this.allposts[this.selectedModule][post];
          //update database
          let posts = this.allposts[this.selectedModule];
            //console.log(this.allposts[this.selectedModule]);
            database.collection("Forums")
                    .doc(currmod)
                    .update({
                      posts
                    })
                    .then(() => {
                      console.log('delete post under deletepost done');
                    });
          
          //then delete all comments under this post
          delete this.allcomments[this.selectedModule][post];
          //update database
          let comments = {};
          for(let postkey in this.allcomments[this.selectedModule]){
              for (let comkey in this.allcomments[this.selectedModule][postkey]){
                comments[comkey] = this.allcomments[this.selectedModule][postkey][comkey];
              }
            };
          console.log(comments);
            database.collection("Forums")
                    .doc(currmod)
                    .update({
                      comments
                    })
                    .then(() => {
                      console.log('delete comment under deletpost done');
                    })



          // database.collection("Forums")
          //         .get()
          //         .then(snapshot =>{
          //           snapshot.forEach(doc=>{
          //             if(doc.id == currmod){
          //               console.log("deleting for mod code");
          //               console.log(currmod);
          //               for(let p in doc.data()["posts"]){
          //                 if(p["id"]==post){
          //                   database.collection("Forums")
          //                           .doc(doc.id)["posts"]
          //                           .update({
          //                             [post]: firebase.firestore.FieldValue.delete()
          //                           });
          //                 }
          //               };

          //               //deleting the comments under this post
          //               for(let c in doc.data()["comments"]){
          //                 if(c["replyto"]==post){
          //                   let comid = c["id"];
          //                   database.collection("Forums")
          //                           .doc(doc.id)["comments"]
          //                           .update({
          //                             [comid]: firebase.firestore.FieldValue.delete()
          //                           });
          //                 }
          //               }
          //             }
          //           })
          //         });
          
        },

        deletecomment: function(comment){ //this is only taking in commentid, need to loop through because we dont know the postid
          let currmod = this.selectedModule;
          for(let postid in this.allcomments[this.selectedModule]){
            for(let comid in this.allcomments[this.selectedModule][postid]){
              if(comment == comid){
                delete this.allcomments[this.selectedModule][postid][comid];
                break;
              }
            }
          }
          console.log("after deletion:");
          let comments = {};
          for(let postkey in this.allcomments[this.selectedModule]){
              for (let comkey in this.allcomments[this.selectedModule][postkey]){
                comments[comkey] = this.allcomments[this.selectedModule][postkey][comkey];
              }
            };
          console.log(comments);
            database.collection("Forums")
                    .doc(currmod)
                    .update({
                      comments
                    })
                    .then(() => {
                      console.log('deletecomment done');
                    })

        },
        
        fetchDate: function(timestamp) {
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
          let date = timestamp.toDate();
          // hours as 2 digits (hh)
          var hours = ("0" + date.getHours()).slice(-2);

          // minutes as 2 digits (mm)
          var minutes = ("0" + date.getMinutes()).slice(-2);

          // seconds as 2 digits (ss)
          var seconds = ("0" + date.getSeconds()).slice(-2);

          return (
            date.getDate() +
            "-" +
            months[date.getMonth()] +
            "-" +
            date.getFullYear()+
            "  "+
            hours+":"+
            minutes+":"+
            seconds
            );
          },

        

    },
    created(){
          console.log("created ");
          this.getModules();
    }
    
}
</script>

<style scoped>

</style>

