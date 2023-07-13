import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import Select from 'react-select'
import { Pie } from 'react-chartjs-2';
import Loading from '../loading';

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

const ChartsInternal12 = () => {
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
        labels:[
            'Facebook',
            'Tiktok',
            'Google',
            'SMO',
            'WEH01',
            'GIZ01',
            'ZYM01',
            'BIO02',
            'RUB01',
            'VIS01',
        ],
        datasets: [
          {
            data: dataChart ? dataChart.map((data)=>{return data.y}) : null,
            backgroundColor: [
                "#619A3F",
                "#FF9E1D",
                "#D9E021",
                "#06AAFF",
                "#FB9A99",
                "#E31A1C",
                "#FDBF6F",
                "#FF7F00",
                "#CAB2D6",
                "#6A3D9A",
            ],
          },
        ],
      };

      const selectOptions = [
        { value: 'mkahfi', label: 'M. Kahfi' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div className="card" style={{width: '30rem'}}>
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container form-group text-center'>
            <h3>Kontribusi Sales Channel Akuisisi By Omset</h3>
        </div>
        
        <div className='container row form-group'>
            <div className='col-md-12'>
                <h6 className='nama'>Bulan</h6>
                <Select options={selectOptions} placeholder="Bulan"
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
        </div>
        {isLoading && <Loading />}
        <Pie options={options} data={data} />
      </div>
    </div>
  )
}

export default ChartsInternal12
