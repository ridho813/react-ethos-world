import React from "react";

export default function ProgesBar(props) {
  return (
    <>
      <div className="progress rounded">
        <div
          className="progress-bar rounded"
          style={{
            width: props.value + "%",
            backgroundColor: "#87BD3D",
          }}
          role="progressbar"
          aria-valuenow={props.value}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <p className="nama">{`${props.value} % Selesai`}</p>
    </>
  );
}
