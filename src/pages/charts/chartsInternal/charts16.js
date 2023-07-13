import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import Select from 'react-select'
import { Bar } from 'react-chartjs-2';
import Loading from '../loading';

const options = {
    responsive: true,
    staccked: true,
    plugins: {
      legend: {
        position: 'right',
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

const ChartsInternal16 = () => {
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
            label: 'Shopee',
            data: dataChart,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'Lazada',
            data: dataChart,
            backgroundColor: "#FF9E1D",
            type: "bar"
          },
          {
            label: 'Tokopedia',
            data: dataChart,
            backgroundColor: "#D9E021",
            type: "bar"
          },
          {
            label: 'Tik Tok',
            data: dataChart,
            backgroundColor: "#06AAFF",
            type: "bar"
          },
          {
            label: 'Bukalapak',
            data: dataChart,
            backgroundColor: "#FB9A99",
            type: "bar"
          },
          {
            label: 'Akulaku',
            data: dataChart,
            backgroundColor: "#E31A1C",
            type: "bar"
          },
          {
            label: 'Blibli',
            data: dataChart,
            backgroundColor: "#FDBF6F",
            type: "bar"
          },
          {
            label: 'Lainnya',
            data: dataChart,
            backgroundColor: "#FF7F00",
            type: "bar"
          },
          {
            label: 'COD',
            data: dataChart,
            backgroundColor: "#B15928",
            type: "bar"
          },
          {
            label: 'JD.ID',
            data: dataChart,
            backgroundColor: "#C3DE9E",
            type: "bar"
          },
          {
            label: 'Transfer',
            data: dataChart,
            backgroundColor: "#87BD3D",
            type: "bar"
          },
        ],
      };

      const selectOptions = [
        { value: 'mkahfi', label: 'M. Kahfi' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column align-items-center'>
        <div className='container form-group text-center'>
            <h3>Omset MP Per Platform</h3>
            <i className='nama'>*Belum dikurangi return, sales April menggunakan sales update terakhir</i>
        </div>
        
        <div className='container row form-group'>
            <div className='col-md-6'>
                <h6 className='nama'>PLATFORM</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            <div className='col-md-6'>
                <h6 className='nama'>SKU 1</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
        </div>

        <div className='container form-group row'>
          {isLoading && <Loading />}
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default ChartsInternal16
