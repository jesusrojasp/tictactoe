import { useEffect, useRef, useState } from "react";
import PieChart, { PieData } from "../components/charts/pie";
import Navbar from "../components/ui/navbar";

const Stats = () => {
  const [gamesData, setGamesData] = useState<Array<PieData>>([]);

  useEffect(() => {
    setGamesData([
      {
        name: "WINS BY X",
        y:  parseInt(localStorage.getItem("X") || "0")
      },
      {
        name: "WINS BY O",
        y:  parseInt(localStorage.getItem("O") || "0")
      },
      {
        name: "Draw",
        y: parseInt(localStorage.getItem("Draw") || "0")
      }
    ]);
  }, []);

  return (
    <div>
      <Navbar btnText='HOME' btnRoute='/' />
      <div className="flex flex-col w-full p-4 justify-center items-center gap-6">
        <PieChart data={gamesData} title="Game stats" />
      </div>
    </div>
  )
}

export default Stats;
