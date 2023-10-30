"use client"

import Chart from 'chart.js/auto';
import React from "react";

interface IProps {

}

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const CandleStickChart : React.FC<IProps> = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if(canvasRef && canvasRef.current) {
      new Chart(canvasRef.current, {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      });
    }
  }, [])

  return(
    <canvas ref={canvasRef} className="w-64 h-64" />
  )
}

export default React.memo(CandleStickChart)