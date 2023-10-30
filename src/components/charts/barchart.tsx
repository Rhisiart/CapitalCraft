"use client"

import React from "react";

interface IProps {

}

const BarChart : React.FC<IProps> = () => {
  /*const canvasRef = React.useRef<HTMLCanvasElement>(null);

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
  }, [])*/

  return(
    /*<canvas ref={canvasRef} className="w-64 h-64" />*/
    <>
    </>
  )
}

export default React.memo(BarChart)