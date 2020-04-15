<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <router-link to="/profile" class="dropdown-item">Profile</router-link>
                <router-link to="/login" class="dropdown-item">Login</router-link>
                <router-link to="/register" class="dropdown-item">Register</router-link>
                <router-link to = '/projects' class = 'dropdown-item'>Manage Projects</router-link>
                <router-link to = '/projmates' class = 'dropdown-item'>Find Project Group</router-link>
                <router-link to = '/forums' class = 'dropdown-item'>Forums</router-link>
                
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
