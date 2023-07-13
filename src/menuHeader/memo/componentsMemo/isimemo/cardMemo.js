import React from "react";

export default function CardMemo(props) {
  return (
    <div>
      <div className="card" name={props.name}>
        <div className="card-header">
          <div className="card-title">{props.title}</div>
          <div className="card-tools">{props.tools}</div>
        </div>
        <div className="card-body">{props.body}</div>
        <div className="card-footer">{props.footer}</div>
      </div>
    </div>
  );
}
