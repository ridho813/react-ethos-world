import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import { Bar } from 'react-chartjs-2';
import Loading from '../loading';

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

const ChartsInternal11 = () => {
    const [dataChart, setChart] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      if (sessionStorage.getItem("chart")) {
          // Restore the contents of the text field
          const data = JSON.parse(sessionStorage.getItem("chart"));
          setChart(data)
        }else{
          getCharts().then((data) => {
              setChart(data)
              // Save data to sessionStorage
              sessionStorage.setItem("chart", JSON.stringify(data));
            });
        }
      setIsLoading(false)
      }, []);

      const data = {
        labels: ["Chocolate", "Vanilla", "Strawberry"],
        datasets: [
          {
            label: 'Target',
            data: dataChart,
            backgroundColor: "#619A3F",
          },
          {
            label: 'Omset',
            data: dataChart,
            backgroundColor: "#FF9E1D",
          },
          {
            label: 'Omset',
            data: dataChart,
            backgroundColor: "#D9E021",
          },
        ],
      };
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container form-group text-center'>
          <h3>Omset Akuisisi Per Channel</h3>
          <i className='nama'>*Sales April menggunakan proyeksi total sales akhir bulan</i>
        </div>
        
        <div className='container form-group row'>
          <h1>URUNG BERES!!</h1>
          {isLoading && <Loading />}
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default ChartsInternal11
