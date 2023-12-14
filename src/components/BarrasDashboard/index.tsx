import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    Chart,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
// acima temos os códigos dos imports da tabela e as funções da biblioteca do chartjs
// aqui temos variaveis que guardam os dados da tabela
let projetos = [4, 8, 5, 1];
let desenvolvedores = ["Ricardo Souza", "Luciano Franca", "Richard Jesus", "Nicolas de Oliveira"];
// const config = {
//     type: 'bar',
//     options: {
//       indexAxis: 'y',
//     }
//   };
// Configurando fonte
// const font = new FontFace("Core Sans G", "url(../fonts/CoreSansG-Regular.ttf)", {
//     style: "normal",
//     weight: "400",
//     stretch: "condensed",
//   });

// document.fonts.add(font)
// font.load();
// document.fonts.ready.then(() => {
//     // Use the font to render text (for example, in a canvas)

//   });
Chart.defaults.font.size = 14;
Chart.defaults.font.family = "sans-serif";
// configurações do tamanho da tabela

let misoptions = {
    responsive: true,
    animation: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 14,
                    family: "sans-serif"
                }
            }
        }

    },
    scales: {
        y: {
            min: 0,
            max: 20
        },
        x: {
            ticks: { color: '#000000'}
        }
    }
};
// Cor e configurações visuais da tabela
let barchart = {
    labels: desenvolvedores,
    datasets: [
        {
            label: 'Projetos',
            data: projetos,
            // backgroundColor: '#0073EA',
            backgroundColor: [
                '#0073EA',
                '#405189',
                '#2C2E3E',
                '#7C7C7C',
            ],
            borderWidth: 0,
            // pointBorderColor: "#000000",
            // pointBackgroundColor: "#f96332",
            // pointBorderWidth: 2,
            // pointHoverRadius: 4,
            // pointHoverBorderWidth: 1,
            // pointRadius: 4,
            // fill: true,

        }
    ]
};

export default function Bars() {
    return <Bar data={barchart} options={misoptions} />
}