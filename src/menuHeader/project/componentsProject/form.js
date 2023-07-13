import React from "react";
import ModalTimMember from "./modalTimMember"

export default function Form(props) {
  return (
    <>
      <form action="">
        <div className="form-group">
          <label className="nama" htmlFor="nama-project">
            Nama Project
          </label>
          <input
            type="text"
            className="form-control form-control"
            id="nama-project"
            placeholder="Masukan nama project"
            value={props.valueNama}
            onChange={props.onChangeNama}
          />
        </div>
        <div className="form-group">
          <label className="nama" htmlFor="deskripsi-area">
            Deskripsi Project
          </label>
          <textarea
            className="form-control"
            rows={3}
            id="deskripsi-area"
            placeholder="Masukan deskripsi project"
          />
        </div>
        <div className="form-group">
          <label className="nama">Tim Member</label>
        </div>
        <div className="form-group">
          <ModalTimMember />
        </div>
        <div className="form-group">
          <label className="nama">Lampiran</label>
        </div>
        <div className="form-group">
          <div className="btn btn-primary btn-file">
            <i className="fas fa-paperclip"></i> lampirkan File
            <input className="" type="file" name="lampirkan" />
          </div>
          <p className="help-block">Max. 32MB</p>
        </div>
      </form>
    </>
  );
}
