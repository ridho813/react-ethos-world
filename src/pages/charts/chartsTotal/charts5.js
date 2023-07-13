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

const Charts5 = ({isFetching}) => {
  const [dataChart, setChart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem("chart")) {
          setIsLoading(true)
          // Restore the contents of the text field
          const data = (JSON.parse(atob(sessionStorage.getItem("chart")))).data.sales;
          if(data===null) {
            alert("DATA TIDAK ADA")
          }
          setChart(data)
          setIsLoading(false)
        }
    }, [isFetching]);

      const data = {
        labels:[
            'ETA01',
            'LIN01',
            'FRE01',
            'NUT01',
            'WEH01',
        ],
        datasets: [
          {
            data: dataChart ? dataChart.target.map((data)=>{return data.y}) : null,
            backgroundColor: [
                "#619A3F",
                "#FF9E1D",
                "#D9E021",
                "#06AAFF",
                "#FB9A99",
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
    <div className="card">
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container form-group text-center'>
            <h3>Persentase Kontribusi Sales Per SKU Berdasarkan Quantity</h3>
        </div>
        
        <div className='container row form-group'>
            <div className='col-md-12'>
                <h6 className='nama'>JK1</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            <div className='col-md-12'>
                <h6 className='nama'>Bulan</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            {isLoading && <Loading />}
            <Pie options={options} data={data} />
        </div>
        
      </div>
    </div>
  )
}

export default Charts5
