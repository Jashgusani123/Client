import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Perper, PerperLight, red } from "../../Constants/Color";
import { getlast7Days } from "../../lib/Features";

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const lineChartOption = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

};
const label = getlast7Days()
const LineChart = ({value=[]}) => {
  const data = {
    labels: label,
    datasets: [{
       data: value,
       label:"Messages",
       fill:true,
       backgroundColor:PerperLight,
       borderColor:Perper
    }],
  };

  return <Line data={data} options={lineChartOption} />;
};

const DoughnutChartOptions = {
    responsive:true ,
    plugins:{
        legend:{
            display:false
        }
    },
    cutout:90
}

const DoughnutChart = ({value=[] , label=[]}) => {
    const data = {
        labels: label,
        datasets: [{
           data: value,
           fill:true,
           backgroundColor:[PerperLight , red],
           borderColor:[Perper,red],
           offset:20
        }],
      }; 
    return <Doughnut style={{zIndex:10}} data={data} options={DoughnutChartOptions}/>;
};

export { DoughnutChart, LineChart };
