import React from 'react'

const index = () => {
  return (
    <>
    <div className='content-wrapper'>
        {/* Content Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>User</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* End Content Header */}

        {/* Main Content */}
        <section className="content">
            <div className="row">
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
            </div>

            <div className="row">
                <div className='form-group col-md-9'>
                    <div className="input-group input-group">
                        <input type="search" className="form-control form-control" placeholder="Type your keywords here" defaultValue="Lorem ipsum" />
                        <div className="input-group-append">
                        <button type="submit" className="btn btn btn-default">
                            <i className="fa fa-search" />
                        </button>
                        </div>
                    </div>
                </div>

                <div className='form-group col-md-3'>
                    <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">{" "}<i className="fas fa-plus" />Tambah User</button>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover text-nowrap">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Reason</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>11-7-2014</td>
                                    <td><span className="tag tag-success">Approved</span></td>
                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                    <td><button>{" "}<i className="fas fa-paint-brush" /></button></td>
                                </tr>
                                <tr>
                                    <td>219</td>
                                    <td>Alexander Pierce</td>
                                    <td>11-7-2014</td>
                                    <td><span className="tag tag-warning">Pending</span></td>
                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                    <td><button>{" "}<i className="fas fa-paint-brush" /></button></td>
                                </tr>
                                <tr>
                                    <td>657</td>
                                    <td>Bob Doe</td>
                                    <td>11-7-2014</td>
                                    <td><span className="tag tag-primary">Approved</span></td>
                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                    <td><button>{" "}<i className="fas fa-paint-brush" /></button></td>
                                </tr>
                                <tr>
                                    <td>175</td>
                                    <td>Mike Doe</td>
                                    <td>11-7-2014</td>
                                    <td><span className="tag tag-danger">Denied</span></td>
                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                    <td><button>{" "}<i className="fas fa-paint-brush" /></button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Main Content */}

        <div className="modal fade" id="modal-default" style={{display: 'none'}} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <div className='col'>
                    <h4 className="modal-title">Tambah User</h4>
                    <p>Isi form dibawah ini untuk menambah data user</p>
                    </div>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='form-group col-md-6'>
                            Nama
                            <input className="form-control" />
                        </div>

                        <div className='form-group col-md-6'>
                            Nomor HP
                            <input className="form-control" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='form-group col-md-6'>
                            Nomor Induk Karyawan
                            <input className="form-control" />
                        </div>

                        <div className='form-group col-md-3'>
                            Tempat Lahir
                            <input className="form-control" />
                        </div>

                        <div className='form-group col-md-3'>
                            Role
                          <select className="form-control select2" style={{width: '100%'}}>
                            <option selected="selected">Role</option>
                            <option>Alaska</option>
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Washington</option>
                          </select>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='form-group col-md-6'>
                            Nomor KTP
                            <input className="form-control" />
                        </div>

                        <div className='form-group col-md-3'>
                            Jenis Kelamin
                          <select className="form-control select2" style={{width: '100%'}}>
                            <option selected="selected">Select...</option>
                            <option>Laki-laki</option>
                            <option>Perempuan</option>
                          </select>
                        </div>

                        <div className='form-group col-md-3'>
                            Status
                          <select className="form-control select2" style={{width: '100%'}}>
                            <option selected="selected">Select...</option>
                            <option>Lajang</option>
                            <option>Sudah Menikah</option>
                          </select>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='form-group col-md-6'>
                            Alamat
                            <input className="form-control" />
                        </div>

                        <div className='form-group col-md-6'>
                            Email
                            <input className="form-control" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='form-group col-md-6'>
                            Password
                            <input className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer justify-content-between">
                    <button type="button" className="btn btn-primary col-md-12">Save changes</button>
                </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default index
