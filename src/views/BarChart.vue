<template>
  <div class="chart">
    <h4>Tasks For Each Month</h4>
    <!-- <div id="no-data"> 
      <br>
      <h5>You do not have any task...</h5>
    </div> -->
    <!-- <div id="data"> -->
      <chart></chart>
    <!-- </div> -->
  </div>
</template>

<script>
import Chart from "./BarChart.js";

export default {
  components: {
    Chart,
  }
};
</script>

<style>
#chart{
  text-align: center;
  align-content: center;
  margin: auto;
  /* height: 440px;
  width:440px; */
}
</style>