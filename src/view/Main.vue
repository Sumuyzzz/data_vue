<template>
  <main>
    <div class="left-charts">
      <div class="chart1 chart"></div>
      <div class="chart2 chart"></div>
      <div class="chart3 chart"></div>
    </div>
    <div class="wrapper-map">
      <div class="map chart"></div>
      <div class="map-list chart"></div>
    </div>
    <div class="right-charts">
      <div class="chart1 chart"></div>
      <div class="chart2 chart"></div>
      <div class="chart3 chart"></div>
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
main {
  gap:30px;
  display: flex;
  flex: 1;

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
    border: 1px solid rgb(255, 255, 255);
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