import React from "react";
import Button from "./button";
import { useState } from "react";
import FormTimMember from "./formTimMember";

export default function ModalTimMember() {
  const [openModal, setOpenModal] = useState(false);

  const handlerClose = () => {
    setOpenModal(false);
  };
  const handlerOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-default btn-sm"
        style={{ width: "30px", borderRadius: "50%" }}
        onClick={handlerOpen}
      >
        <i className="fas fa-plus nama" />
      </button>
      {openModal && (
        <div>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <p className="modal-title">
                  Tim Member "merupakan judul project
                </p>
                <button type="button" className="close" onClick={handlerClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <FormTimMember />
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <div className="row">
                  <div className="col">
                    <Button text="kirim link" icon="fas fa-paperclip" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Button
                      text="Kirim"
                      icon="fas fa-paper-plane"
                      type="success"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
