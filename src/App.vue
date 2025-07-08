<template>
  <main>
    <div>
     <highcharts :options="chartOptions"></highcharts>

     테스트
    </div>
  </main>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const chartOptions = ref({
  chart: {
    type: 'line'
  },
  title: {
    text: 'sample'
  },
  xAxis: {
    categories: ['1', '2', '3', '4', '5']
  },
  yAxis: {
    title: {
      text: 'value'
    }
  },
  series: [
    {
      name: 'data',
      data: [1, 2, 3, 4, 5]
    }
  ]
});

</script>

<style scoped>
/* .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5em;
}

.chart-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-section h2 {
  color: #555;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.5em;
}

.gauge-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.gauge-item {
  text-align: center;
}

.gauge-item h3 {
  color: #666;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.button-section {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
} */

/* 차트 컨테이너 스타일링 */
/* :deep(.dx-chart) {
  height: 400px;
}

:deep(.dx-piechart) {
  height: 400px;
}

:deep(.dx-bargauge) {
  height: 150px;
} */

/* 반응형 디자인 */
/* @media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  
  .gauge-container {
    grid-template-columns: 1fr;
  }
  
  .button-section {
    flex-direction: column;
    align-items: center;
  }
} */
</style>
