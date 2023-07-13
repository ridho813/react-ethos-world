import React from "react";

export default function Button(props) {
  return (
    <>
      <button
        className={
          props.type === "danger"
            ? `btn btn-outline-danger btn-block  ${props.className}`
            : props.type === "success"
            ? `btn btn-success btn-block ${props.className}`
            : `btn btn-primary btn-block ${props.className}`
        }
        data-toggle={props.dataToggle}
        data-target={props.dataTarget}
        data-dismiss={props.dataDismis}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <i className={`${props.icon}`} />
        {props.text}
      </button>
    </>
  );
}
