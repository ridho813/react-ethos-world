import React from "react";

export default function SearchProject(props) {
  return (
    <>
      <div className="input-group">
        <input
          className={`form-control ${props.className}`}
          type="search"
          placeholder={props.placeholder}
          aria-label="Search"
        />
        <div className="input-group-append bg-success rounded-right">
          <button
            className="btn btn-success"
            type="submit"
            onClick={props.onClick}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
}
