<template>
  <div id="main" ref="chatRef"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const chatRef = ref();
onMounted(() => {
  console.log('====================================');
  console.log(chatRef.value);
  console.log('====================================');
  const myChart = echarts.init(chatRef.value);
  let option;
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
      },
    ],
  };

  myChart.setOption(option);

})


</script>

<style scoped lang="less">
#main {
  width: 600px;
  height: 300px;
}
</style>
