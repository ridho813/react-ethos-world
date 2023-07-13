import React from "react";
import CardMemo from "./cardMemo";
import Select from "react-select";
export default function MemoRevisi(props) {
  const optionsKomunikasi = [
    { value: "PIC", label: "PIC" },
    { value: "Editor", label: "Editor" },
    { value: "Pelihat", label: "Pelihat" },
    { value: "Hapus Member", label: "Hapus Member" },
  ];
  const options = [
    { value: "Esa", label: "Esa" },
    { value: "Bambang", label: "Bambang" },
    { value: "Juniarto", label: "Juniarto" },
  ];
  return (
    <>
      <CardMemo
        name={props.name}
        title={
          <>
            <i className="fas fa-arrow-left mr-2" onClick={props.onClick} />
            <i className="far fa-comments" /> Revisi Memo
          </>
        }
        tools={
          <>
            {props.name == "berbintang" && <i className="fas fa-star text-warning" />}
            <span className="badge bg-danger">revisi</span>
          </>
        }
        body={
          <>
            <p className="nama">Catatan Revisi</p>
            <p className="border border-2 p-2 rounded">
              Produk Randon adalah inovasi terbaru dalam industri teknologi,
              yang dirancang untuk memenuhi kebutuhan dan keinginan konsumen
              modern. Dengan desain yang elegan dan fitur-fitur canggih, Randon
              menawarkan pengalaman yang luar biasa kepada pengguna.
            </p>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <Select
                  name="Komunikasi"
                  placeholder="Komunikasi"
                  options={optionsKomunikasi}
                  className="basic-multi-select input-xs"
                  classNamePrefix="select"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="FM-01-0"
                />
              </div>
              <div className="col-md-3">
                <input type="date" className="form-control form-control" />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <Select
                  defaultValue={[options[2], options[3]]}
                  isMulti
                  name="Tim Member"
                  placeholder="Tim Member"
                  options={options}
                  className="basic-multi-select input-xs"
                  classNamePrefix="select"
                />
              </div>
              <div className="col-md-6">
                <Select
                  defaultValue={[options[2], options[3]]}
                  isMulti
                  name="Tim Member"
                  placeholder="Tim Member"
                  options={options}
                  className="basic-multi-select input-xs"
                  classNamePrefix="select"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="Penghentian Sementara"
                />
              </div>
              <div className="col-md-3">
                <input type="date" className="form-control form-control" />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="FM-01-0"
                />
              </div>
            </div>
            <div className="mt-2">
              <CardMemo
                title={
                  <>
                    <h6 className="nama">Isi Memo</h6>
                  </>
                }
                body={
                  <>
                    <div className="text-xs mt-2">
                      <div className="row">
                        <div className="col">
                          Dengan hormat, Sebagai tindak lanjut dari surat
                          penawaran yang telah Bapak kirimkan kepada manajemen
                          kami pada 1 September 2022, kami bermaksud untuk
                          melakukan pemesanan sebagai berikut:
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-3">Dibuat</div>
                        <div className="col-3">Disetujui</div>
                      </div>
                    </div>
                  </>
                }
              />
            </div>
            <div>
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
              <div>
                <input
                  type="text"
                  className="form-control form-control"
                  placeholder="disetujui oleh"
                />
              </div>
            </div>
          </>
        }
        footer={
          <>
            <div className="float-right">
              <button type="button" className="btn btn-default mr-2">
                <i className="fas fa-print" /> Draft
              </button>
              <button type="submit" className="btn btn-success">
                <i className="fa fa-paper-plane" />
                Ajukan
              </button>
            </div>
          </>
        }
      />
    </>
  );
}
