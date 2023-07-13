import React from "react";
import Select from "react-select";

export default function FormTimMember() {
  const options = [
    { value: "Esa", label: "Esa" },
    { value: "Bambang", label: "Bambang" },
    { value: "Juniarto", label: "Juniarto" },
  ];
  const optionsEditor = [
    { value: "PIC", label: "PIC" },
    { value: "Editor", label: "Editor" },
    { value: "Pelihat", label: "Pelihat" },
    { value: "Hapus Member", label: "Hapus Member" },
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-9">
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
        <div className="col-md-3">
          <Select
            name="Editor"
            placeholder="Editor"
            options={optionsEditor}
            className="basic-multi-select input-xs"
            classNamePrefix="select"
          />
        </div>
      </div>
    </>
  );
}
