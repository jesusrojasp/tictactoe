import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

export interface PieData {
  name: string;
  y: number;
};

interface PieChartProps {
  data: Array<PieData>;
  title: string;
};

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const PieChart = ({data, title}: PieChartProps) => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>();

  useEffect(() => {
    setChartOptions({
      chart: {
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: title,
        align: "center"
    },
      tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
                enabled: true,
                format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                distance: -50,
                style: {
                    fontWeight: "bold",
                    color: "white"
                }
            }
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 640
          },
          chartOptions: {
            tooltip: {
              enabled: true
            }
          }
        }]
      },
      series: [{
          name: "Games",
          colorByPoint: true,
          type: "pie",
          data: data
      }]
    });
  }, [data]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
}

export default PieChart;
