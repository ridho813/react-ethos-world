import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function LinkMemo(props) {
  return (
    <>
      <Link to="./tambahmemo" className="btn btn-primary btn-block mb-3">
        Buat Memo
      </Link>
      <div className="card">
        <div className="card-header-green p-1">
          {/* <i className="fas fa-inbox" /> Pengajuan */}
          <ul className="nav nav-pills2 flex-column">
            <li className="nav-item active">
              <a href="#" className="nav-link" onClick={props.onClickPengajuan}>
                <i className="fas fa-inbox" /> Pengajuan
                <span className="badge bg-primary float-right">12</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body p-0">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={props.onClickBerbintang}
              >
                <i className="fa fa-star" style={{ color: "#619A3F" }} />
                Berbintang
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={props.onClickTerkirim}>
                <i className="fa fa-paper-plane" style={{ color: "#619A3F" }} />{" "}
                Terkirim
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={props.onClickArsip}>
                <i className="far fa-file-alt" /> Arsip
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={props.onClickSampah}>
                <i className="fa fa-trash-alt" /> Sampah
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
