import React from "react";

export default function TabelIsiMemo(props) {
  return (
    <>
      <div className="table-responsive mailbox-messages">
        <table className="table table-bordered" id={props.id}>
          <tbody>
            <tr>
              <td className="text-lg text-bold">komunikasi</td>
              <td className="text-xs w-25" style={{ color: "#D4D4D4" }}>
                dokumen: FM-SSD-01
              </td>
              <td className="text-xs w-25" style={{ color: "#D4D4D4" }}>
                tgl:Efektif: 01 Oktober 2022
              </td>
              <td className="text-xs w-25" style={{ color: "#D4D4D4" }}>
                No.Revisi:0.0
              </td>
              <td className="w-25">
                <div className="text-xs ml-3">8 mei 2023</div>
                <div>
                  <i
                    className={`fas fa-star text-xs ${
                      props.id == "berbintang" ? "text-warning" : ""
                    }`}
                    style={{ color: "#D4D4D4" }}
                  />
                  <span
                    className={`badge text-xs ${
                      props.text == "disetujui" && "text-white "
                    }`}
                    style={
                      props.text == "disetujui"
                        ? { backgroundColor: "#87BD3D" }
                        : props.text == "pending"
                        ? { backgroundColor: "#D9E021" }
                        : ""
                    }
                  >
                    {props.text}
                  </span>
                </div>
              </td>
            </tr>
            <tr key="">
              <td colSpan={3} className="">
                <div>
                  <div className="row text-sm text-bold">
                    <div className="col-3">Perihal:</div>
                    <div className="col-9">
                      Pengertian Sementara Fulfilment Etawaku FC Sampang
                    </div>
                  </div>

                  <div className="row text-xs" style={{ color: "#D4D4D4" }}>
                    <div className="col-3">No :</div>
                    <div className="col-9">001/1B/ET.ops/v/2023</div>
                  </div>
                  <div className="row text-xs" style={{ color: "#D4D4D4" }}>
                    <div className="col-3">Lampiran :</div>
                    <div className="col-9">3</div>
                  </div>
                </div>
              </td>
              <td colSpan={2} className="">
                <div>
                  <div className="row text-sm text-bold">
                    <div className="col-3">Dari:</div>
                    <div className="col-9">Suply and demand</div>
                  </div>
                  <div className="row text-xs" style={{ color: "#D4D4D4" }}>
                    <div className="col-3">Kepada :</div>
                    <div className="col-9">digital sales, branding,</div>
                  </div>
                  <div className="row text-xs" style={{ color: "#D4D4D4" }}>
                    <div className="col-3">CC :</div>
                    <div className="col-9">Edn, Commercial</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
