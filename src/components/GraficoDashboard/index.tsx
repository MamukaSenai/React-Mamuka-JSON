//  import Chart from "chart.js/auto";
//  import { Pie } from "react-chartjs-2";
// {/* <Pie data={...} /> */}

// // TESTANDO CODIGO DE TUTORIAIS DE TERCEIROS

// // const labels = ["January", "February", "March", "April", "May", "June"];
// // const data = {
// //   labels: labels,
// //   datasets: [
// //     {
// //       label: "My First dataset",
// //       backgroundColor: "rgb(255, 99, 132)",
// //       borderColor: "rgb(0,0,255)",
// //       data: [0, 10, 5, 2, 20, 30, 45],
// //     },
// //   ],
// // };

// const PieChart = () => {
//     return (
//       <div>
//         <Pie data={data} />
//       </div>
//     );
//   };


//   export default PieChart;



// // TESTANDO CODIGO DIRETAMENTE DO CHART.JS
//   // <block:setup:1>
// const data = {
//   labels: [
//     'Red',
//     'Blue',
//     'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }]
// };
// // </block:setup>

// // <block:config:0>
// const config = {
//   type: 'pie',
//   data: data,
// };
// // </block:config>

// module.exports = {
//   actions: [],
//   config: config,
// };

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: ['Cancelado', 'Em Andamento', 'Concluidos', 'Não alocados'],
    datasets: [
        {
            label: 'Projetos',
            data: [3, 43, 10, 13],
            backgroundColor: [
                '#E44358',
                '#FFCB00',
                // 'rgba(54, 162, 235, 0.2)',
                '#00CA72',
                '#DBDBDB',
            ],
            borderColor: [
                '#E44358',
                '#FFCB00',
                // 'rgba(54, 162, 235, 1)',
                '#00CA72',
                '#DBDBDB',
            ],
            borderWidth: 1,
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}