<template>
  <main>
    <div class="left-charts">
      <div class="chart1 chart">
        <Chart1></Chart1>
      </div>
      <div class="chart2 chart">
        <Chart2></Chart2>
      </div>
      <div class="chart3 chart">
        <Chart3></Chart3>
      </div>
    </div>
    <div class="wrapper-map">
      <div class="map chart">
        <Map></Map>
      </div>
      <div class="map-list chart"></div>
    </div>
    <div class="right-charts">
      <div class="chart1 chart">
        <Chart4></Chart4>
      </div>
      <div class="chart2 chart"></div>
      <div class="chart3 chart"></div>
    </div>
  </main>
</template>

<script setup>
import Chart1 from "@/components/Chart1.vue"
import Chart2 from "@/components/Chart2.vue"
import Chart3 from "@/components/Chart3.vue"
import Chart4 from "@/components/Chart4.vue"
import Map from "@/components/Map.vue"
</script>

<style lang="scss" scoped>





main {
  gap: 30px;
  display: flex;
  flex: 1;
  width: 95%;
  margin-bottom: 30px;
  .left-charts,
  .right-charts {
    width: 310px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px 0px;
  }


  .wrapper-map {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .map-list {
      height: 240px;
    }

    .map {
      flex: 1;
    }
  }


  .chart {
    border: 1px solid #2495b9;
    background:#05457aa3;
    


  }

  .chart1 {
    height: 160px;
  }

  .chart2 {
    flex: 1;
  }

  .chart3 {
    height: 400px;
  }

}
</style>