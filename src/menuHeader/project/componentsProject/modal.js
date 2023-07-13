import React, { useState } from "react";
import Button from "./button";
import Form from "./form";
import { addData, getData } from "../../../api/axios";

export default function Modal() {
  const [createProject, setCreateProject] = useState({
    "Nama Project": "",
    "Tim Member": {
      linkPic1: "dist/img/user2-160x160.jpg",
      linkPic2: "linkGambar18",
      linkPic3: "linkGambar19",
    },
    Proges: 70,
    Status: "Ditugaskan",
    Deadline: "2023-08-01",
  });
  const handlerCreateProject = (item) => (event) => {
    setCreateProject({ ...createProject, [item]: event.target.value });
  };

  const submitProject = (e) => {
    e.preventDefault();
    addData(createProject);
    getData();
  };
  return (
    <>
      <div className="modal fade" id="modal-default">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Project Baru</h3>
            </div>
            <div className="modal-body">
              <Form
                valueNama={createProject["Nama Project"]}
                onChangeNama={handlerCreateProject("Nama Project")}
              />
            </div>
            <div className="modal-footer">
              <Button
                text="Batal"
                icon="fas fa-times"
                dataDismis="modal"
                type="danger"
                className="w-25 pull-right"
              />
              <Button
                text="Buat"
                icon="fas fa-file"
                className="w-25"
                dataDismis="modal"
                onClick={submitProject}
                disabled={createProject["Nama Project"] === "" ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
