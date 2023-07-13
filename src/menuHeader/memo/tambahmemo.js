
import React from 'react'


const tambahmemo = () => {

// function tambahmemo() {
    return (
        <>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Memo</h1>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <a href="mailbox.html" className="btn btn-primary btn-block mb-3">Back to Inbox</a>
                                <div className="card">

                                    <div className="card-body p-0">

                                        <ul className="nav nav-pills flex-column">
                                            <li className="nav-item active">
                                                <a href="#" className="nav-link">
                                                    <i className="fas fa-file" /> Pengajuan
                                                    <span className="badge bg-primary float-right">12</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="fa fa-star" style={{ color: '#619A3F' }} />
                                                    Berbintang
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="fa fa-paper-plane" style={{ color: '#619A3F' }} /> Terkirim
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-file-alt" /> Arsip
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="fa fa-trash-alt" /> Sampah
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-9">
                                <div className="card card-outline">
                                    <div className="card-header">
                                        <i className="fas fa-envelope-open nama"> Memo Baru</i>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <select className="form-control" >
                                                        <option value="" key="">Jenis Memo</option>
                                                    </select>
                                                    {/* <input className="form-control" placeholder="To:" /> */}
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <input type='text' className="form-control" placeholder="No. Dokumen:" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <input type='date' className="form-control" placeholder="Subject:" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <input type='text' className="form-control" placeholder="No. Revisi:" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type='text' className="form-control" placeholder="Kepada:" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type='text' className="form-control" placeholder="CC:" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type='text' className="form-control" placeholder="Perihal:" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type='date' className="form-control" placeholder="Tgl Memo:" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type='text' className="form-control" placeholder="No. Memo:" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card card-light">
                                            <div className="card-header">
                                            <h3 className="card-title nama">Isi Memo</h3>
                                            </div>
                                            {/* <label className="nama">Isi Memo</label> */}
                                            <div className="card-body">
                                            <div className="form-group">
                                                <textarea id="compose-textarea" className="form-control" style={{ height: 300 }} />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="btn btn-primary btn-file">
                                                <i className="fas fa-paperclip" /> Attachment
                                                <input type="file" name="attachment" />
                                            </div>
                                            <p className="help-block">Max. 32MB</p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="float-right">
                                            <button type="button" className="btn btn-default"><i className="fas fa-pencil-alt" /> Draft</button>
                                            <button type="submit" className="btn btn-success"><i className="far fa-envelope" /> Ajukan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default tambahmemo