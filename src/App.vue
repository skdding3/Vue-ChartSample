<script setup>
import { DxChart, DxSeries, DxValueAxis, DxTitle, DxLegend, DxExport, DxTooltip, DxArgumentAxis } from 'devextreme-vue/chart';
import { DxPieChart, DxSeries as DxPieSeries, DxLabel, DxConnector } from 'devextreme-vue/pie-chart';
import { DxBarGauge, DxLabel as DxBarGaugeLabel } from 'devextreme-vue/bar-gauge';
import { DxButton } from 'devextreme-vue';
import { ref } from 'vue';

// 월별 매출 및 이익 데이터
const chartData = ref([
  { month: '1월', sales: 12000, profit: 8000, orders: 150 },
  { month: '2월', sales: 15000, profit: 10000, orders: 180 },
  { month: '3월', sales: 18000, profit: 12000, orders: 220 },
  { month: '4월', sales: 14000, profit: 9000, orders: 160 },
  { month: '5월', sales: 22000, profit: 15000, orders: 280 },
  { month: '6월', sales: 25000, profit: 18000, orders: 320 },
  { month: '7월', sales: 28000, profit: 20000, orders: 350 },
  { month: '8월', sales: 32000, profit: 24000, orders: 400 },
  { month: '9월', sales: 30000, profit: 22000, orders: 380 },
  { month: '10월', sales: 35000, profit: 26000, orders: 420 },
  { month: '11월', sales: 38000, profit: 29000, orders: 450 },
  { month: '12월', sales: 42000, profit: 32000, orders: 500 }
]);

// 제품 카테고리별 판매 데이터
const pieData = ref([
  { category: '노트북', value: 35, revenue: 150000 },
  { category: '태블릿', value: 25, revenue: 120000 },
  { category: '스마트폰', value: 30, revenue: 180000 },
  { category: '액세서리', value: 10, revenue: 50000 }
]);

// 지역별 매출 데이터
const regionData = ref([
  { region: '서울', sales: 45000, customers: 1200 },
  { region: '부산', sales: 32000, customers: 850 },
  { region: '대구', sales: 28000, customers: 720 },
  { region: '인천', sales: 25000, customers: 680 },
  { region: '광주', sales: 22000, customers: 580 },
  { region: '대전', sales: 20000, customers: 520 }
]);

// 시간대별 주문 데이터
const timeData = ref([
  { time: '09:00', orders: 45, revenue: 12000 },
  { time: '10:00', orders: 78, revenue: 21000 },
  { time: '11:00', orders: 92, revenue: 25000 },
  { time: '12:00', orders: 120, revenue: 32000 },
  { time: '13:00', orders: 85, revenue: 22000 },
  { time: '14:00', orders: 95, revenue: 24000 },
  { time: '15:00', orders: 110, revenue: 28000 },
  { time: '16:00', orders: 130, revenue: 35000 },
  { time: '17:00', orders: 145, revenue: 38000 },
  { time: '18:00', orders: 160, revenue: 42000 }
]);

// 성과 지표 데이터
const performanceData = ref({
  salesTarget: 85,
  customerSatisfaction: 92,
  orderFulfillment: 78,
  profitMargin: 88
});

// 실시간 데이터 업데이트 함수
const updatePerformanceData = () => {
  performanceData.value.salesTarget = Math.floor(Math.random() * 30) + 70;
  performanceData.value.customerSatisfaction = Math.floor(Math.random() * 20) + 80;
  performanceData.value.orderFulfillment = Math.floor(Math.random() * 30) + 70;
  performanceData.value.profitMargin = Math.floor(Math.random() * 25) + 75;
};

// 월별 데이터 추가 함수
const addMonthlyData = () => {
  const lastMonth = chartData.value[chartData.value.length - 1];
  const newMonth = chartData.value.length + 1;
  const newSales = lastMonth.sales + Math.floor(Math.random() * 5000) - 2000;
  const newProfit = Math.floor(newSales * 0.75);
  const newOrders = lastMonth.orders + Math.floor(Math.random() * 50) - 25;
  
  chartData.value.push({
    month: `${newMonth}월`,
    sales: Math.max(0, newSales),
    profit: Math.max(0, newProfit),
    orders: Math.max(0, newOrders)
  });
};
</script>

<template>
  <main>
    <div class="container">
      <h1>DevExtreme 차트 데이터 샘플</h1>
      
      <!-- 월별 매출 및 이익 차트 -->
      <div class="chart-section">
        <h2>월별 매출 및 이익 추이</h2>
        <DxChart
          :data-source="chartData"
          title="월별 비즈니스 성과"
          palette="Soft"
        >
          <DxSeries
            argument-field="month"
            value-field="sales"
            name="매출"
            type="line"
            color="#ff6b6b"
          />
          <DxSeries
            argument-field="month"
            value-field="profit"
            name="이익"
            type="line"
            color="#4ecdc4"
          />
          <DxSeries
            argument-field="month"
            value-field="orders"
            name="주문수"
            type="bar"
            color="#45b7d1"
            y-axis="orders"
          />
          <DxValueAxis name="sales">
            <DxTitle text="금액 (원)" />
          </DxValueAxis>
          <DxValueAxis name="orders" position="right">
            <DxTitle text="주문 수" />
          </DxValueAxis>
          <DxArgumentAxis>
            <DxTitle text="월" />
          </DxArgumentAxis>
          <DxLegend />
          <DxExport />
          <DxTooltip enabled="true" />
        </DxChart>
      </div>

      <!-- 제품 카테고리 분포 -->
      <div class="chart-section">
        <h2>제품 카테고리별 판매 비율</h2>
        <DxPieChart
          :data-source="pieData"
          palette="Soft"
          title="제품 카테고리별 판매 비율"
        >
          <DxPieSeries
            argument-field="category"
            value-field="value"
          >
            <DxLabel visible="true">
              <DxConnector visible="true" />
            </DxLabel>
          </DxPieSeries>
          <DxLegend />
          <DxExport />
          <DxTooltip enabled="true" />
        </DxPieChart>
      </div>

      <!-- 지역별 매출 차트 -->
      <div class="chart-section">
        <h2>지역별 매출 현황</h2>
        <DxChart
          :data-source="regionData"
          title="지역별 매출 및 고객 수"
          palette="Soft"
        >
          <DxSeries
            argument-field="region"
            value-field="sales"
            name="매출"
            type="bar"
            color="#ff9ff3"
          />
          <DxSeries
            argument-field="region"
            value-field="sales"
            name="고객수"
            type="line"
            color="#feca57"
            y-axis="customers"
          />
          <DxValueAxis name="sales">
            <DxTitle text="매출 (원)" />
          </DxValueAxis>
          <DxValueAxis name="customers" position="right">
            <DxTitle text="고객 수" />
          </DxValueAxis>
          <DxArgumentAxis>
            <DxTitle text="지역" />
          </DxArgumentAxis>
          <DxLegend />
          <DxExport />
          <DxTooltip enabled="true" />
        </DxChart>
      </div>

      <!-- 시간대별 주문 현황 -->
      <div class="chart-section">
        <h2>시간대별 주문 현황</h2>
        <DxChart
          :data-source="timeData"
          title="시간대별 주문 및 매출"
          palette="Soft"
        >
          <DxSeries
            argument-field="time"
            value-field="orders"
            name="주문수"
            type="area"
            color="#48dbfb"
          />
          <DxSeries
            argument-field="time"
            value-field="revenue"
            name="매출"
            type="line"
            color="#ff9ff3"
            y-axis="revenue"
          />
          <DxValueAxis name="orders">
            <DxTitle text="주문 수" />
          </DxValueAxis>
          <DxValueAxis name="revenue" position="right">
            <DxTitle text="매출 (원)" />
          </DxValueAxis>
          <DxArgumentAxis>
            <DxTitle text="시간" />
          </DxArgumentAxis>
          <DxLegend />
          <DxExport />
          <DxTooltip enabled="true" />
        </DxChart>
      </div>

      <!-- 성과 지표 게이지들 -->
      <div class="chart-section">
        <h2>실시간 성과 지표</h2>
        <div class="gauge-container">
          <div class="gauge-item">
            <h3>매출 목표 달성률</h3>
            <DxBarGauge
              :values="[performanceData.salesTarget]"
              start-value="0"
              end-value="100"
              palette="Soft"
            >
              <DxBarGaugeLabel visible="true" />
              <DxTooltip enabled="true" />
            </DxBarGauge>
          </div>
          
          <div class="gauge-item">
            <h3>고객 만족도</h3>
            <DxBarGauge
              :values="[performanceData.customerSatisfaction]"
              start-value="0"
              end-value="100"
              palette="Soft"
            >
              <DxBarGaugeLabel visible="true" />
              <DxTooltip enabled="true" />
            </DxBarGauge>
          </div>
          
          <div class="gauge-item">
            <h3>주문 처리율</h3>
            <DxBarGauge
              :values="[performanceData.orderFulfillment]"
              start-value="0"
              end-value="100"
              palette="Soft"
            >
              <DxBarGaugeLabel visible="true" />
              <DxTooltip enabled="true" />
            </DxBarGauge>
          </div>
          
          <div class="gauge-item">
            <h3>수익률</h3>
            <DxBarGauge
              :values="[performanceData.profitMargin]"
              start-value="0"
              end-value="100"
              palette="Soft"
            >
              <DxBarGaugeLabel visible="true" />
              <DxTooltip enabled="true" />
            </DxBarGauge>
          </div>
        </div>
      </div>

      <!-- 인터랙티브 버튼들 -->
      <div class="button-section">
        <DxButton 
          text="성과 지표 업데이트" 
          @click="updatePerformanceData"
          type="success"
          icon="refresh"
        />
        <DxButton 
          text="새 월 데이터 추가" 
          @click="addMonthlyData"
          type="default"
          icon="plus"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
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
}

/* 차트 컨테이너 스타일링 */
:deep(.dx-chart) {
  height: 400px;
}

:deep(.dx-piechart) {
  height: 400px;
}

:deep(.dx-bargauge) {
  height: 150px;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
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
}
</style>
