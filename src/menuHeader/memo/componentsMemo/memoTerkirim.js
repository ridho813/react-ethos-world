import React from "react";
import BoxControl from "./boxControl";
import TabelMemo from "./tabel/tabelMemo";

export default function MemoTerkirim() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa fa-paper-plane" />
            Terkirim
          </h3>
          <div className="card-tools">
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Search Mail"
              />
              <div className="input-group-append">
                <div className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <BoxControl />
          <TabelMemo id={"terkirim"} />
        </div>
        <div className="card-footer p-0">
          <BoxControl />
        </div>
      </div>
    </>
  );
}
