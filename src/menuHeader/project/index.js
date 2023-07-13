import React from "react";
import Button from "./componentsProject/button";
import Table from "./componentsProject/table";
import Modal from "./componentsProject/modal";
import SearchProject from "./componentsProject/searchProject";

const index = () => {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="row">
            <div className="col-md-1">
              <h4 className="nama">Project</h4>
            </div>
            <div className="col-md-2">
              <Button
                text="Buat Project"
                icon="fas fa-plus"
                dataToggle="modal"
                dataTarget="#modal-default"
              />
              <Modal />
            </div>
            <div className="col-md-4">
              <SearchProject placeholder="Cari Project" />
            </div>
            <div className="col-1"></div>
            <div className="col-md-2">
              <Button text="Project Selesai" icon="fas fa-tasks" />
            </div>
            <div className="col-md-2 ">
              <Button text="Sampah" icon="fas fa-solid fa-trash" />
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
