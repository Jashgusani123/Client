import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from "chart.js";
import { BorderColor } from "@mui/icons-material";
import { getlast7Days } from "../../lib/Features";
import { Perper, PerperLight, red } from "../../Constants/Color";

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
//   scales:{
//     x:{
//         grid:{
//             display:false,
//         },
//     },
//     y:{
//         beginAtZero:true,
//         grid:{
//             display:false,
//         }
//     },
//   },
};
const label = getlast7Days()
const LineChart = ({value=[]}) => {
  const data = {
    labels: label,
    datasets: [{
       data: value,
       label:"Revenue",
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

export { LineChart, DoughnutChart };
