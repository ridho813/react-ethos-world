import React, {useState, useEffect} from 'react'
import getCharts from '../../../api/getCharts'
import { Bar } from 'react-chartjs-2';
import Loading from '../loading';

const options = {
    responsive: true,
    staccked: true,
    plugins: {
      legend: {
        position: 'right',
        display: false,
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

const Charts6= ({isFetching}) => {
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
            label: 'ETA01',
            data: dataChart? dataChart.target : null,
            backgroundColor: "#619A3F",
            type: "bar"
          },
          {
            label: 'LIN01',
            data: dataChart? dataChart.omset : null,
            backgroundColor: "#FF9E1D",
            type: "bar"
          },
          {
            label: 'FRE01',
            data: dataChart? dataChart.target : null,
            backgroundColor: "#D9E021",
            type: "bar"
          },
          {
            label: 'NUT01',
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
        <div className='container form-group text-center'>
            <h3>Sales Total (Internal, Partner, Offline, Distributor)</h3>
            <i className='nama'>*Sales Maret (Internal & Partner) menggunakan perkiraan omset sampai akhir bulan, Distributor & Offline data real</i>
        </div>

        <div className='container form-group row'>
            <div className='col-md-12'>
              {isLoading && <Loading />}
              <Bar options={options} data={data} />
            </div>
            <div className='text-xs col-md-12 table-responsive'>
                <table className="table table-bordered table-sm">
                <thead className='bg-success'>
                    <tr>
                    <th></th>
                    <th>Jan-12</th>
                    <th>Feb-12</th>
                    <th>Mar-12</th>
                    <th>Apr-12</th>
                    <th>Mei-12</th>
                    <th>Jun-12</th>
                    <th>Jul-12</th>
                    <th>Agu-12</th>
                    <th>Sep-12</th>
                    <th>Okt-12</th>
                    </tr>
                </thead>
                {dataChart &&
                <tbody>
                    <tr>
                    <td><button className="btn btn-xs" style={{backgroundColor: "#619A3F",}}/> ETA01</td>
                    {dataChart.target.map((menuItem,idx) =>(
                      <td key={idx}>
                        {menuItem.y}
                      </td>
                    ))}
                    </tr>
                    <tr>
                    <td><button className="btn btn-xs" style={{backgroundColor: "#FF9E1D",}}/> LIN01</td>
                    {dataChart.omset.map((menuItem,idx) =>(
                      <td key={idx}>
                        {menuItem.y}
                      </td>
                    ))}
                    </tr>
                    <tr>
                    <td><button className="btn btn-xs" style={{backgroundColor: "#D9E021",}}/> FRE01</td>
                    {dataChart.target.map((menuItem,idx) =>(
                      <td key={idx}>
                        {menuItem.y}
                      </td>
                    ))}
                    </tr>
                    <tr>
                    <td><button className="btn btn-xs" style={{backgroundColor: "#06AAFF",}}/> NUT01</td>
                    {dataChart.omset.map((menuItem,idx) =>(
                      <td key={idx}>
                        {menuItem.y}
                      </td>
                    ))}
                    </tr>
                </tbody>
                }
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Charts6
