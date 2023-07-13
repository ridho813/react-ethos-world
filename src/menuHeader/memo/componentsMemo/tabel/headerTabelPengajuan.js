import React from "react";

export default function HeaderTabelPengajuan() {
  return (
    <>
      <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="custom-tabs-one-pengajuan-tab"
            data-toggle="pill"
            href="#custom-tabs-one-pengajuan"
            role="tab"
            aria-controls="custom-tabs-one-pengajuan"
            aria-selected="true"
          >
            {" "}
            <i className="fas fa-inbox" />
            Pengajuan
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="custom-tabs-one-semua-tab"
            data-toggle="pill"
            href="#custom-tabs-one-semua"
            role="tab"
            aria-controls="custom-tabs-one-semua"
            aria-selected="false"
          >
            Semua
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="custom-tabs-one-draft-tab"
            data-toggle="pill"
            href="#custom-tabs-one-draft"
            role="tab"
            aria-controls="custom-tabs-one-draft"
            aria-selected="false"
          >
            Draft
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="custom-tabs-one-pending-tab"
            data-toggle="pill"
            href="#custom-tabs-one-pending"
            role="tab"
            aria-controls="custom-tabs-one-pending"
            aria-selected="false"
          >
            Pending
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="custom-tabs-one-revisi-tab"
            data-toggle="pill"
            href="#custom-tabs-one-revisi"
            role="tab"
            aria-controls="custom-tabs-one-revisi"
            aria-selected="false"
          >
            Revisi
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="custom-tabs-one-disetujui-tab"
            data-toggle="pill"
            href="#custom-tabs-one-disetujui"
            role="tab"
            aria-controls="custom-tabs-one-disetujui"
            aria-selected="false"
          >
            Disetujui
          </a>
        </li>
        <div className="card-tools">
          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Search Mail"
            />
            <div className="input-group-append">
              <div className="btn btn-primary">
                <i className="fas fa-search" />
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}
