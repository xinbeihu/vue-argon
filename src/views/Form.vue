<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>We need more information from you!</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            v-model="name">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Faculty"
                                            v-model="faculty">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Major"
                                            v-model="major">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Contact No"
                                            v-model="phone">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="update">Go to Profile</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import firebase from 'firebase';
import router from '../router';

export default {
  name:"signup",
  data(){
    return{
          email:'',
          password:''
    }
  },
  methods:{
    signup:  function () {
          //Save item to database
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  .then(function() {
    alert('You have created an account');
  });
        }
  }
}
</script>
<style>
</style>
