<template>
  <a-card class="card_chart">
    <template #title>
      <div class="card_chart_head">
        <a-avatar :size="32">
          <img class="card_chart_head_img" src="../../assets/logo.png" alt="">
        </a-avatar>
        <div class="card_chart_head_describe">
          <div>资源消耗情况</div>
          <div>图表类型</div>
        </div>
        <a-badge count="所选版本" />
        <div class="card_chart_head_date">生成时间：{{ Date.now() }}</div>
        <a-button type="link">删除</a-button>
      </div>
    </template>
    <div>
      分析目标：分析资源消耗情况
    </div>
    <p>

      分析结论：根据2023年7月的数据，工业增加值增长速度的情况如下： - 工业增加值增长率在本月达到了3.7%，累计达到了3.8%。 - 采矿业的增长率为1.3%，制造业为3.9%，电力、热力、燃气及水生产和供应业为4.1%。 -
      其中国有及国有控股企业的增长率为3.4%，私营企业为2.5%。 - 股份制企业的增长率达到了5.0%。 - 外商及港澳台商投资企业的增长率为-1.8%。
      综上所述，从数据中可以看出不同行业和企业类型的工业增加值增长速度存在差异，其中制造业表现较好，而外商及港澳台商投资企业的增长率下降。</p>
    <BarCharts />
  </a-card>
</template>

<script setup lang="ts">
import BarCharts from "./BarCharts.vue";
</script>

<style scoped lang="less">
@media screen and (max-width: 1028px) {
  .card_chart {
    min-width: 100%;
  }
}

.card_chart {
  width: 48%;
  font-size: 14px;
  overflow: hidden;
  margin: 10px;

  &_head {
    display: flex;
    align-items: center;
    font-size: 14px;

    &_date {
      margin-left: 10px;
    }

    &_describe {
      width: 50%;
      margin-left: 10px;
    }

    &_img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
  }
}
</style>