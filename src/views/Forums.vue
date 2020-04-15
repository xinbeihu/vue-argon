<template>
    <div>
<<<<<<< HEAD:src/views/Landing.vue

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">A beautiful Design System
                                    <span>completed with examples</span>
                                </h1>
                                <p class="lead  text-white">The design system comes with four pre-built pages to help
                                    you get started faster. You can change the text and images and you're good to
                                    go.</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 icon="fa fa-code">
                                        Components
                                    </base-button>
                                    <base-button tag="a"
                                                 href="https://www.creative-tim.com/product/argon-design-system"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="ni ni-cloud-download-95">
                                        Download HTML
                                    </base-button>
                                </div>
                            </div>
                        </div>
=======
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
>>>>>>> a0123d225b31eef6d46ad5856ef65fc0dc6920ac:src/views/Forums.vue
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Download Argon</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4
                                        that includes the most important components and features.</p>
                                    <div>
                                        <badge type="primary" rounded>design</badge>
                                        <badge type="primary" rounded>system</badge>
                                        <badge type="primary" rounded>creative</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Build Something</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>Awesome features</h3>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0">Carefully crafted components</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge>
                                        <h6 class="mb-0">Amazing page examples</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">Super friendly support team</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
<<<<<<< HEAD:src/views/Landing.vue
                    </div>
                </div>
            </div>
        </section>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                                <p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
                                    the sea-ice then thaws every summer, and that process will continue whatever
                                    happens.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                            <h3>Our customers</h3>
                            <p class="lead">Don't let your uses guess by attaching tooltips and popoves to any element.
                                Just make sure you enable them first via JavaScript.</p>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <a href="#" class="font-weight-bold text-warning mt-5">A beautiful UI Kit for impactful
                                websites</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Modern Interface</h4>
                                <p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then
                                    thaws every summer, and that process will continue whatever happens.</p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Awesome Support</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-success">Learn more</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Modular Components</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-warning">Learn more</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">The amazing Team</h2>
                        <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-1-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Ryan Tompson</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="warning" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="warning" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="warning" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-2-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Romina Hadid</span>
                                    <small class="h6 text-muted">Marketing Strategist</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
=======
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
                                    
>>>>>>> a0123d225b31eef6d46ad5856ef65fc0dc6920ac:src/views/Forums.vue
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-3-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Alexander Smith</span>
                                    <small class="h6 text-muted">UI/UX Designer</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="info" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="info" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="info" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-4-800x800.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">John Doe</span>
                                    <small class="h6 text-muted">Founder and CEO</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="success" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="success" icon="fa fa-facebook" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="#" type="success" icon="fa fa-dribbble" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>

                  </card>
                </div>
                  </section>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="warning"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">We made website building easier for you.</h3>
                                <p class="lead text-white mt-3">I will be the leader of a company that ends up being
                                    worth billions of dollars, because I got the answers. I understand culture.</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="https://www.creative-tim.com/product/vue-argon-design-system"
                                             type="white" block size="lg">
                                    Download Vue
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Build something</h2>
                        <p class="lead text-white">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent
                            tihs year down to low ice.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Building tools</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Grow your market</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="text-white mt-3">Launch time</h5>
                        <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Want to work with us?</h4>
                            <p class="mt-0">Your project is very important to us.</p>
                            <base-input class="mt-5"
                                        alternative
                                        placeholder="Your name"
                                        addon-left-icon="ni ni-user-run">
                            </base-input>
                            <base-input alternative
                                        placeholder="Email address"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."></textarea>
                            </base-input>
                            <base-button type="default" round block size="lg">
                                Send Message
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="display-3">Do you love this awesome
                            <span class="text-success">Design System for Bootstrap 4?</span>
                        </h2>
                        <p class="lead">Cause if you do, it can be yours for FREE. Hit the button below to navigate to
                            Creative Tim where you can find the Design System in HTML. Start a new project or give an
                            old Bootstrap project a new look!</p>
                        <div class="btn-wrapper">
                            <a href="https://www.creative-tim.com/product/vue-argon-design-system"
                               class="btn btn-primary mb-3 mb-sm-0">Download Vue</a>
                        </div>
                        <div class="text-center">
                            <h4 class="display-4 mb-5 mt-5">Available on these technologies</h4>
                            <div class="row justify-content-center">
                                <div class="col-lg-2 col-4">
                                    <a href="https://getbootstrap.com/" target="_blank" data-toggle="tooltip"
                                       data-original-title="Bootstrap 4 - Most popular front-end component library">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://www.sketchapp.com/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Sketch - Digital design toolkit">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://www.adobe.com/products/photoshop.html" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Adobe Photoshop - Software for digital images manipulation">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg'"
                                             class="img-fluid  opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://vuejs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="Vue.js - The progressive javascript framework">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://angularjs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Angular - One framework. Mobile &amp; desktop">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://reactjs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
<<<<<<< HEAD:src/views/Landing.vue
  name: "home",
  components: {}
};
=======
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
>>>>>>> a0123d225b31eef6d46ad5856ef65fc0dc6920ac:src/views/Forums.vue
</script>
