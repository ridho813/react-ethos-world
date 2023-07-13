import React from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";
import Select from 'react-select'

const BuatIde = () => {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
    }
  return (
    <>
      <div className='content-wrapper'>
        {/* Content Header */}
        <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1 className='nama'>Ide</h1>
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
                <Link to="/Ide/buatide" className="btn btn-primary btn-block mb-3">
                Buat Ide
                </Link>
                <div className="card">
                    <div className="card-header-green p-1">
                      <ul className="nav nav-pills2 flex-column">
                        <li className="nav-item active">
                          <Link to="/Ide" className="nav-link">
                            <i className="fas fa-lightbulb" /> Ruang Ide
                            <span className="badge bg-primary float-right">12</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className='card-body p-0'>
                      <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                          <Link to="/Ide/berbintang" className="nav-link">
                            <i className="fas fa-star" /> Berbintang
                            {/* <span className="badge bg-primary float-right">12</span> */}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/Ide/berbagiide" className="nav-link">
                            <i className="fas fa-users" /> Berbagi Ide
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/Ide/arsip" className="nav-link">
                            <i className="fas fa-archive" /> Arsip
                            <span className="badge bg-primary float-right">14</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/Ide/sampah" className="nav-link">
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
                    <h3 className="card-title"><a onClick={goBack} className='fas fa-arrow-left' /> <i className='fas fa-edit'> Ide Baru</i></h3>
                </div>

                <div className="card-body">
                <div className="tab-content" id="custom-tabs-one-tabContent">
                    <div className="tab-pane fade show active" id="custom-tabs-one-pesan" role="tabpanel" aria-labelledby="custom-tabs-one-pesan-tab">
                    {/* Buat Pesan */}
                    <div className='box-body'>
                      <div className='row'>
                        <div className='form-group col-md-12'>
                          <input className="form-control" placeholder="Judul Ide:" />
                        </div>
                      </div>

                      <div className='card card-light'>
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
                    {/* End Buat Pesan */}
                    </div>
                </div>
                </div>

                {/* Footer content card */}
                <div className="card-footer">
                    <div className="float-right">
                        <button type="button" className="btn btn-default "><i className="fas fa-pencil-alt" /> Draft</button>
                        <button type="submit" className="btn btn-success"><i className="far fa-envelope" /> Ajukan</button>
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

export default BuatIde
