import React from 'react'
import DataMemo from "../Memo/DataMemo";

const index = () => {
  return (
    <>
    <div className='content-wrapper'>
        {/* Content Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Ide</h1>
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
              <a href="compose.html" className="btn btn-primary btn-block mb-3">
                Buat Ide
              </a>
              <div className="card">
              <div className="card-header-green p-1">
                <ul className="nav nav-pills2 flex-column">
                    <li className="nav-item active">
                      <a href="#" className="nav-link">
                        <i className="fas fa-certificate" /> Ruang Ide
                      </a>
                    </li>
                  </ul>
              </div>
              
              <div className='card-body p-0'>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item active">
                    <a href="#" className="nav-link">
                      <i className="fas fa-star" /> Berbintang
                      {/* <span className="badge bg-primary float-right">12</span> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-users" /> Berbagi Ide
                      <span className="badge bg-primary float-right">14</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-archive" /> Arsip
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="fas fa-trash-alt" /> Sampah
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            </div>

            {/* Multi Tabs */}
          <div className="col-md-9">
            <div className="card card-outline card-tabs">
              <div className="card-header p-1 border-bottom-0">
                <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="custom-tabs-one-pesan-tab" data-toggle="pill" href="#custom-tabs-one-pesan" role="tab" aria-controls="custom-tabs-one-pesan" aria-selected="true">{" "}<i className="fas fa-certificate" />Ruang Ide</a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <div className="tab-content" id="custom-tabs-one-tabContent">
                  <div className="tab-pane fade show active" id="custom-tabs-one-pesan" role="tabpanel" aria-labelledby="custom-tabs-one-pesan-tab">
                    {/* Pesan */}
                    <div className="mailbox-controls">
                      {/* Check all button */}
                      <button
                        type="button"
                        className="btn btn-default btn-sm checkbox-toggle">
                        <i className="far fa-square" />
                      </button>
                      <div className="btn-group">
                        <button type="button" className="btn btn-default btn-sm">
                          <i className="far fa-trash-alt" />
                        </button>
                        <button type="button" className="btn btn-default btn-sm">
                          <i className="fas fa-reply" />
                        </button>
                        <button type="button" className="btn btn-default btn-sm">
                          <i className="fas fa-share" />
                        </button>
                      </div>
                      {/* /.btn-group */}
                      <button type="button" className="btn btn-default btn-sm">
                        <i className="fas fa-sync-alt" />
                      </button>
                      <div className="float-right">
                        1-50/200
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-default btn-sm">
                            <i className="fas fa-chevron-left" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-default btn-sm">
                            <i className="fas fa-chevron-right" />
                          </button>
                        </div>
                        {/* /.btn-group */}
                      </div>
                      {/* /.float-right */}
                    </div>

                    <div className="table-responsive mailbox-messages">
                      <table className="table table-hover table-striped">
                        <tbody>
                          {DataMemo.map((DataMemo, idx) => (
                            <tr key={idx} >
                              <td>
                                <div className="icheck-primary">
                                  <input
                                    type="checkbox"
                                    defaultValue
                                    id="check1"
                                  />
                                  <label htmlFor="check1" />
                                </div>
                              </td>
                              <td className="mailbox-star">
                                <a href="#">
                                  <i className="fas fa-star text-warning" />
                                </a>
                              </td>
                              <td className="mailbox-name">
                                <a href="read-mail.html">{DataMemo.nama}</a>
                              </td>
                              <td className="mailbox-subject">
                                <b>{DataMemo.nama}</b> - {DataMemo.isipesan}
                              </td>
                              <td className="mailbox-attachment" />
                              <td className="mailbox-date">{DataMemo.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* /.table */}
                    </div>
                    {/* End Pesan */}
                  </div>
                </div>
              </div>

              {/* Footer content card */}
              <div className="card-footer p-0">
                <div className="mailbox-controls">
                  {/* Check all button */}
                  <button
                    type="button"
                    className="btn btn-default btn-sm checkbox-toggle">
                    <i className="far fa-square" />
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="far fa-trash-alt" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-reply" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm">
                      <i className="fas fa-share" />
                    </button>
                  </div>
                  {/* /.btn-group */}
                  <button type="button" className="btn btn-default btn-sm">
                    <i className="fas fa-sync-alt" />
                  </button>
                  <div className="float-right">
                    1-50/200
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-left" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-sm">
                        <i className="fas fa-chevron-right" />
                      </button>
                    </div>
                    {/* /.btn-group */}
                  </div>
                  {/* /.float-right */}
                </div>
              </div>
              {/* End Footer content card */}
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