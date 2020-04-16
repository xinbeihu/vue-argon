<template>
  <div class="chart">
    <h5>Member Contribution</h5>
    <div class="row justify-content-center">
      <div style="padding:10px;width:800px">
        <select v-model="selectedModule">
          <option>All Modules</option>
          <option v-for="(items,module) in taskList" v-bind:key="module">{{module}}</option>
        </select>
      </div>
    </div>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./Doughnut.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>
</style>