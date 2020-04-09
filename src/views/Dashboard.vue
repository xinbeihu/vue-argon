<template>
  <div id="main">
    <div id="chart">
      <BarChart></BarChart>
    </div>
    <div id="chart">
      <LineChart></LineChart>
    </div>
    <div id="chart">
      <PieChart></PieChart>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  /* height:240px;
  width:240px; */
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>