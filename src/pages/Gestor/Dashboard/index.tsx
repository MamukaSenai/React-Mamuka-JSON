import "./style.css"
// import PieChart from "../../../components/GraficoDashboard";
import Pies from "../../../components/GraficoDashboard";
import Bars from "../../../components/BarrasDashboard";
export default function Dashboard() {
  return (
    <>
      <div className="alinhamentogeral">
        <div className="graficobarras configconteudo">
          <Bars />
        </div>
        <div className="graficopizza configconteudo">
          <Pies />
        </div>
      </div>
    </>
  );
}
