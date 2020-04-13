<template>
  <div class="chart">
    <h3>Tasks For Each Month</h3>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";

export default {
  components: {
    Chart
  }
};
</script>

<style>
#chart{
  text-align: center;
  align-content: center;
  margin: auto;
}
</style>