import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import { Bar } from 'react-chartjs-2';
import Loading from '../loading';

 const options = {
    responsive: true,
    staccked: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
  };

const ChartsPartner3 = () => {
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
        datasets: [
          {
            label: 'Akuisisi',
            data: dataChart,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'CRM',
            data: dataChart,
            backgroundColor: "#FF9E1D",
            type: "bar"
          },
          {
            label: 'MP',
            data: dataChart,
            backgroundColor: "#D9E021",
            type: "bar"
          },
        ],
      };
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container row form-group'>
            <div className='col-md-12 text-center'>
                <h3>Omset Partner Per Channel</h3>
                <i className='nama'>*Belum dikurangi return, sales April menggunakan perkiraan sales akhir bulan</i>
            </div>
        </div>

        <div className='container row form-group'>
          {isLoading && <Loading />}
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default ChartsPartner3
