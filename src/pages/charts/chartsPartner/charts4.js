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

const ChartsPartner4 = () => {
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
                <h3>Kontribusi Per Channel Partner By Omset</h3>
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
                <h6 className='nama'>GROUP 1</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
            <div className='col-md-6'>
                <h6 className='nama'>TEAM</h6>
                <Select options={selectOptions} placeholder="Kepada:" 
                    isMulti
                    name="colors"
                    className="basic-multi-select"
                    classNamePrefix="select" 
                />
            </div>
        </div>

        <div className='container row form-group'>
            <div className='col-md-12'>
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

export default ChartsPartner4
