import React from "react";
import TabelIsiMemo from "../tabel/tabelIsiMemo";
import Select from "react-select";
import CardMemo from "./cardMemo";

export default function MemoIsi(props) {
  const options = [
    { value: "mkahfi", label: "M. Kahfi" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <CardMemo
        name={props.name}
        title={
          <>
            <i className="fas fa-arrow-left mr-2" onClick={props.onClick} />
            <i className="far fa-comments" /> Baca Memo
          </>
        }
        body={
          <>
            <TabelIsiMemo id={props.name} text={props.textMemo} />
            <div className="text-xs mt-2">
              <div className="row">
                <div className="col">
                  Dengan hormat, Sebagai tindak lanjut dari surat penawaran yang
                  telah Bapak kirimkan kepada manajemen kami pada 1 September
                  2022, kami bermaksud untuk melakukan pemesanan sebagai
                  berikut:
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-3">Dibuat</div>
                <div className="col-3">Disetujui</div>
              </div>
            </div>
            <h6 className="nama mt-2">
              <i className="fa fa-paper-plane" style={{ color: "#619A3F" }} />
              Kirim Memo
            </h6>
            <form>
              <div className="form-group">
                <Select
                  options={options}
                  placeholder="Kepada:"
                  isMulti
                  name="colors"
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="form-group">
                <input className="form-control" placeholder="Subjek:" />
              </div>
            </form>
          </>
        }
        footer={
          <>
            <div className="float-right">
              <button type="button" className="btn btn-default mr-2">
                <i className="fas fa-print" /> Print
              </button>
              <button type="submit" className="btn btn-success">
                <i className="fa fa-paper-plane" /> Kirim
              </button>
            </div>
          </>
        }
      />
    </>
  );
}
