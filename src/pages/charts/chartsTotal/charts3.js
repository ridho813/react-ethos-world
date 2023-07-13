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

const Charts3 = ({isFetching}) => {
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
        datasets: [
          {
            label: 'Akuisisi',
            data: dataChart? dataChart.target : null,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'CRM',
            data: dataChart? dataChart.omset : null,
            backgroundColor: "#FF9E1D",
            type: "bar"
          },
          {
            label: 'MP',
            data: dataChart? dataChart.target : null,
            backgroundColor: "#D9E021",
            type: "bar"
          },
          {
            label: 'Offline',
            data: dataChart? dataChart.omset : null,
            backgroundColor: "#06AAFF",
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
        <div className='container row form-group'>
            <div className='col-md-2'></div>
            <div className='col-md-8 text-center'>
                <h3>Kontribusi Per Channel By Omset</h3>
                <i className='nama'>*Belum dikurangi return, sales April menggunakan perkiraan sales akhir bulan</i>
            </div>
            <div className='col-md-2'>
                <select className="form-control">
                    <option>By Omset</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                </select>
            </div>
        </div>
        
        <div className='container row form-group'>
            <div className='col-md-6'>
                <h6 className='nama'>JK1</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            <div className='col-md-6'>
                <h6 className='nama'>GROUP 1</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
        </div>

        <div className='container row form-group'>
            <div className='col-md-6'>
                <h6 className='nama'>TEAM</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            <div className='col-md-6'>
                <h6 className='nama'>SKU</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
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

export default Charts3
