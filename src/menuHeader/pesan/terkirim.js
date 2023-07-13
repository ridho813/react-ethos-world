import React from 'react'
import { NavLink, Link } from "react-router-dom";
import DataMemo from "../memo/dataMemo";

const Terkirim = () => {
  return (
    <>
      <div className='content-wrapper'>
        {/* Content Header */}
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1 className='nama'>Pesan</h1>
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
                <a href="/pesan/buatpesan" className="btn btn-primary btn-block mb-3">
                Buat Pesan
                </a>
                <div className="card">
                    <div className="card-header-green p-1">
                      <ul className="nav nav-pills2 flex-column">
                        <li className="nav-item active">
                          <Link to="/pesan" className="nav-link">
                            <i className="fas fa-inbox" /> Kotak Masuk
                            <span className="badge bg-primary float-right">12</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='card-body p-0'>
                      <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                          <Link to="/pesan/berbintang" className="nav-link">
                            <i className="fas fa-star" /> Berbintang
                            {/* <span className="badge bg-primary float-right">12</span> */}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/pesan/terkirim" className="nav-link">
                            <i className="fas fa-paper-plane" /> Terkirim
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/pesan/draft" className="nav-link">
                            <i className="fas fa-file-alt" /> Draft
                            <span className="badge bg-primary float-right">14</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/pesan/arsip" className="nav-link">
                            <i className="fas fa-archive" /> Arsip
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/pesan/sampah" className="nav-link">
                            <i className="fas fa-trash-alt" /> Sampah
                          </Link>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>

            {/* Multi Tabs */}
            <div className="col-md-9">
            <div className="card card-outline">
                <div className="card-header">
                    <h3 class="card-title fas fa-paper-plane"> Terkirim</h3>
                    <div className="card-tools">
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="Search Mail" />
                            <div className="input-group-append">
                                <div className="btn btn-primary">
                                    <i className="fas fa-search" />
                                </div>
                            </div>
                        </div>
                    </div>
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
                    
                    <div className="tab-pane fade" id="custom-tabs-one-memo" role="tabpanel" aria-labelledby="custom-tabs-one-memo-tab">
                    {/* Memo */}
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
                    {/* End Memo */}
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

export default Terkirim
