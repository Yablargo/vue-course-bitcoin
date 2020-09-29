<template>
  <div class="small">
    <line-chart :chart-data="datacollection" id="mychart"></line-chart>
  </div>
</template>

<script>
import LineChart from "../LineChart.js";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: {
        labels: [0, 1, 2, 3],
        datasets: [
          {
            label: "Google",
            data: [1, 2, 3, 4],
            borderColor: "#3e95cd",
            fill: false,
          },
        ],
      },
    };
  },
  created() {
    this.getRealtimeData();
  },
  methods: {
    fillData(fetchedData) {
      console.log(`TCL:  -> fetchedData `, fetchedData);
      const newPrice = this.getRandomChartValues(fetchedData);
      const labels = this.datacollection.labels;
      labels.push(labels[labels.length - 1] + 1);

      const prices = [...this.datacollection.datasets[0].data, newPrice];

      this.datacollection = {
        labels: labels,
        datasets: [
          {
            label: "Google",
            data: prices,
            borderColor: "#3e95cd",
            fill: false,
          },
        ],
      };
    },
    getRealtimeData() {
      socket.on("newdata", (fetchedData) => {
        this.fillData(fetchedData);
      });
    },
    getRandomChartValues(number) {
      return Math.floor(Math.random() * number);
    },
  },
};
</script>
<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
