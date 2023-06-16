import React from 'react'
import { NavLink, Link } from "react-router-dom";

const index = () => {
  return (
    <>
    <div className='content-wrapper'>
        {/* Content Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Memo</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* End Content Header */}

        {/* Main Content */}
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <a href="#" className="btn btn-primary btn-block mb-3">
                Buat Memo
              </a>
              <div className="card">
                <div className="card-body p-0">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item active">
                      <a href="#" className="nav-link">
                        <i className="fas fa-inbox" /> Pengajuan
                        {/* <span className="badge bg-primary float-right">12</span> */}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-star" /> Berbintang
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-paper-plane" /> Terkirim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-file-alt" /> Arsip
                      </a>
                    </li>
                    {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-filter" /> Arsip
                  <span className="badge bg-warning float-right">65</span>
                </a>
              </li> */}
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="far fa-trash-alt" /> Sampah
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Multi Tabs */}
          <div className="col-md-9">
            <div className="card card-outline card-tabs">
              <div className="card-header p-0 pt-1">
                <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                  <li className="nav-item">
                    <Link className="nav-link active" id="custom-tabs-one-pesan-tab" data-toggle="pill" to="/Memo" role="tab" aria-controls="custom-tabs-one-pesan" aria-selected="true">{" "}<i className="fas fa-arrow-left" /></Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" id="custom-tabs-one-pesan-tab" data-toggle="pill" href="#custom-tabs-one-pesan" role="tab" aria-controls="custom-tabs-one-pesan" aria-selected="true">{" "}<i className="fas fa-envelope" />Buat Memo</a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <div className="tab-content" id="custom-tabs-one-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-one-pesan" role="tabpanel" aria-labelledby="custom-tabs-one-pesan-tab">
                    {/* Buat Memo */}
                    <div className='box-body'>
                      <div className='row'>
                        <div className='form-group col-md-3'>
                          <select className="form-control select2" style={{width: '100%'}}>
                            <option selected="selected">Jenis Memo</option>
                            <option>Alaska</option>
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Washington</option>
                          </select>
                        </div>

                        <div className='form-group col-md-3'>
                          <input className="form-control" placeholder="No. Dokumen:" />
                        </div>

                        <div className="form-group col-md-3">
                          <div className="input-group date">
                            <input type="text" className="form-control pull-right" placeholder="Tgl. Efektif:" id="datepicker" />
                          </div>
                        </div>

                        <div className='form-group col-md-3'>
                          <input className="form-control" placeholder="No. Revisi:" />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='form-group col-md-6'>
                          <input className="form-control" placeholder="Kepada:" />
                        </div>

                        <div className='form-group col-md-6'>
                          <input className="form-control" placeholder="Cc:" />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='form-group col-md-6'>
                          <input className="form-control" placeholder="Perihal:" />
                        </div>

                        <div className="form-group col-md-3">
                          <div className="input-group date">
                            <input type="text" className="form-control pull-right" placeholder="Tgl. Memo:" id="datepicker" />
                          </div>
                        </div>

                        <div className='form-group col-md-3'>
                          <input className="form-control" placeholder="No. Memo:" />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='form-group col-md-12'>
                          <div className="box box-success">
                            <div className="box-header with-border">
                              <h6 className="box-title">Isi Memo</h6>
                            </div>
                            <div class="box-body">
                              <textarea className='col-md-12' />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='form-group col-md-12'>
                          <textarea className='col-md-12' placeholder="Komentar:" />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='form-group col-md-3'>
                        <input className="form-control" placeholder="Lampirkan File:" />
                          <span>Max 32Mb</span>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='form-group col-md-12'>
                        <input className="form-control" placeholder="Disetujui Oleh:" />
                        </div>
                      </div>

                    </div>
                    {/* End Buat Memo */}
                  </div>
                </div>
              </div>

              <div className="card-footer p-0">
                <div className="mailbox-controls">
                  <div className='float-right'>
                    <div className="btn-group">
                      <button type="button" className="btn btn-outline-success btn-sm">{" "}<i className="fas fa-file-alt" />Draft</button>
                    </div>
                    <div className='btn-group'>
                      <button type="button" className="btn btn-success btn-sm">{" "}<i className="fas fa-paper-plane" />Ajukan</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* End Multi Tabs */}
          </div>
        </section>
        {/* End Main Content */}
    </div>
    </>
  )
}

export default index
