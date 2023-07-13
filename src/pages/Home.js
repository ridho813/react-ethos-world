import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Charts from './charts/chartsTotal/charts';
import Charts2 from './charts/chartsTotal/charts2';
import Charts3 from './charts/chartsTotal/charts3';
import Charts4 from './charts/chartsTotal/charts4';
import Charts5 from './charts/chartsTotal/charts5';
import Charts6 from './charts/chartsTotal/charts6';
import ChartsInternal from './charts/chartsInternal/charts';
import ChartsInternal2 from './charts/chartsInternal/charts2';
import ChartsInternal3 from './charts/chartsInternal/charts3';
import ChartsInternal4 from './charts/chartsInternal/charts4';
import ChartsInternal5 from './charts/chartsInternal/charts5';
import ChartsInternal6 from './charts/chartsInternal/charts6';
import ChartsInternal7 from './charts/chartsInternal/charts7';
import ChartsInternal8 from './charts/chartsInternal/charts8';
import ChartsInternal9 from './charts/chartsInternal/charts9';
import ChartsInternal10 from './charts/chartsInternal/charts10';
import ChartsInternal11 from './charts/chartsInternal/charts11';
import ChartsInternal12 from './charts/chartsInternal/charts12';
import ChartsInternal13 from './charts/chartsInternal/charts13';
import ChartsInternal14 from './charts/chartsInternal/charts14';
import ChartsInternal15 from './charts/chartsInternal/charts15';
import ChartsInternal16 from './charts/chartsInternal/charts16';
import ChartsInternal17 from './charts/chartsInternal/charts17';
import ChartsPartner from './charts/chartsPartner/charts';
import ChartsPartner2 from './charts/chartsPartner/charts2';
import ChartsPartner3 from './charts/chartsPartner/charts3';
import ChartsPartner4 from './charts/chartsPartner/charts4';
import ChartsPartner5 from './charts/chartsPartner/charts5';
import ChartsPartner6 from './charts/chartsPartner/charts6';
import ChartsPartner7 from './charts/chartsPartner/charts7';
import getCharts from '../api/getCharts';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const Home = () => {
  const selectOptions = [
    { value: 'mkahfi', label: 'M. Kahfi' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [isFetching, setIsFetching] = useState(false);


  useEffect(() => {
    if (!sessionStorage.getItem("chart")) {
      setIsFetching(true);
      // fetch Data ke sesion storage
      getCharts().then((data)=>{sessionStorage.setItem("chart", btoa(JSON.stringify(data))); setIsFetching(false);})
     
    }else{
      getCharts().then((data)=>{
        if (JSON.stringify(data) !== atob(sessionStorage.getItem("chart"))) {
        sessionStorage.setItem("chart", btoa(JSON.stringify(data)));
        setIsFetching(!isFetching);
      }})
      
      
    }
    }, []);
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header">
                <h1 className="m-0 text-center nama">Ethos Today</h1>
                <div className="row">
                  <div className="col-md-6">
                    <img src="logo/melompat.png" className="card-img" alt="User Image" />
                  </div>
                  <div className="col-md-6">
                    <img src="logo/Mask group.png" className="card-img" alt="User Image" />
                    <img src="logo/Group 14045.png" className="card-img" alt="User Image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className='card-header'>
                <div className='row'>
                  <div className='col-md-6'>
                    <h4 className='m-0 nama'>Report Sales Monthly</h4>
                    <p className='nama'>Last Update: <b>Saturday, 29 April 2023</b></p>
                  </div>
                  <div className='col-md-6'>
                  <ul className='nav' role='tablist' id="custom-tabs-four-tab">
                    <li className='nav-item'><button className='btn bg-light btn-xs active' id="custom-tabs-four-total-tab" data-toggle="pill" href="#custom-tabs-four-total" role="tab" aria-controls="custom-tabs-four-total" aria-selected="true"><span className='nama'>Total</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-internal-tab" data-toggle="pill" href="#custom-tabs-four-internal" role="tab" aria-controls="custom-tabs-four-internal" aria-selected="false"><span className='nama'>Internal</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-partner-tab" data-toggle="pill" href="#custom-tabs-four-partner" role="tab" aria-controls="custom-tabs-four-partner" aria-selected="false"><span className='nama'>Partner</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-offline-tab" data-toggle="pill" href="#custom-tabs-four-offline" role="tab" aria-controls="custom-tabs-four-offline" aria-selected="false"><span className='nama'>Offline</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-costiklan-tab" data-toggle="pill" href="#custom-tabs-four-costiklan" role="tab" aria-controls="custom-tabs-four-costiklan" aria-selected="false"><span className='nama'>Cost Iklan</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-manpower-tab" data-toggle="pill" href="#custom-tabs-four-manpower" role="tab" aria-controls="custom-tabs-four-manpower" aria-selected="false"><span className='nama'>Manpower</span></button></li>
                    <li className='nav-item'><button className='btn bg-light btn-xs' id="custom-tabs-four-stock-tab" data-toggle="pill" href="#custom-tabs-four-stock" role="tab" aria-controls="custom-tabs-four-stock" aria-selected="false"><span className='nama'>Stock</span></button></li>
                  </ul>
                  <div className=''>
                  <Select 
                  className='bg-light xs' 
                  options={selectOptions} placeholder="Kepada:" 
                  name="colors"
                  classNamePrefix="select"  />
                  </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <div className="card card-success">
                        <div className="card-header">
                          <p className="card-title">Omset Sampai Last Update</p>
                        </div>
                        <div className="card-body">
                          The body of the card
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className="card card-success">
                        <div className="card-header">
                          <p className="card-title">Perkiraan Omset Akhir Bulan</p>
                        </div>
                        <div className="card-body">
                          The body of the card
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className="card card-success">
                        <div className="card-header">
                          <p className="card-title">Selisih Kumulatif Target & Omset</p>
                        </div>
                        <div className="card-body">
                          The body of the card
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3'>            
                      <div className="card card-success">
                        <div className="card-header">
                          <p className="card-title">Kekurangan Target</p>
                        </div>
                        <div className="card-body">
                          The body of the card
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='card-body'>
                <div className='tab-content' id="custom-tabs-four-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-four-total" role="tabpanel" aria-labelledby="custom-tabs-four-total-tab">
                    <Charts isFetching={isFetching} />
                    <Charts2 isFetching={isFetching} />
                    <Charts3 isFetching={isFetching} />
                    <Charts4 isFetching={isFetching} />
                    <Charts5 isFetching={isFetching} />
                    <Charts6 isFetching={isFetching} />
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-internal" role="tabpanel" aria-labelledby="custom-tabs-four-internal-tab">
                    {/* <ChartsInternal />
                    <ChartsInternal2 />
                    <ChartsInternal3 />
                    <ChartsInternal4 />
                    <ChartsInternal5 />
                    <ChartsInternal6 />
                    <ChartsInternal7 />
                    <ChartsInternal8 />
                    <ChartsInternal9 />
                    <ChartsInternal10 />
                    <ChartsInternal11 />
                    <ChartsInternal12 />
                    <ChartsInternal13 />
                    <ChartsInternal14 />
                    <ChartsInternal15 />
                    <ChartsInternal16 />
                    <ChartsInternal17 /> */}
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-partner" role="tabpanel" aria-labelledby="custom-tabs-four-partner-tab">
                    {/* <ChartsPartner />
                    <ChartsPartner2 />
                    <ChartsPartner3 />
                    <ChartsPartner4 />
                    <ChartsPartner5 />
                    <ChartsPartner6 />
                    <ChartsPartner7 /> */}
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-offline" role="tabpanel" aria-labelledby="custom-tabs-four-offline-tab">
                    Offline
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-costiklan" role="tabpanel" aria-labelledby="custom-tabs-four-costiklan-tab">
                    Cost Iklan
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-manpower" role="tabpanel" aria-labelledby="custom-tabs-four-manpower-tab">
                    Manpower
                  </div>

                  <div className="tab-pane fade" id="custom-tabs-four-stock" role="tabpanel" aria-labelledby="custom-tabs-four-stock-tab">
                    Stock
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section >
        {/* /.content */}
      </div >
    </>
  )
}
