import React from 'react'

export default function BoxControl() {
  return (
    <>
      <div className="mailbox-controls">
        <button
          type="button"
          className="btn btn-default btn-sm checkbox-toggle"
        >
          <i className="far fa-square"></i>
        </button>
        <div className="btn-group">
          <button type="button" className="btn btn-default btn-sm">
            <i className="far fa-trash-alt"></i>
          </button>
          <button type="button" className="btn btn-default btn-sm">
            <i className="fas fa-reply"></i>
          </button>
          <button type="button" className="btn btn-default btn-sm">
            <i className="fas fa-share"></i>
          </button>
        </div>

        <button type="button" className="btn btn-default btn-sm">
          <i className="fas fa-sync-alt"></i>
        </button>
        <div className="float-right">
          1-50/200
          <div className="btn-group">
            <button type="button" className="btn btn-default btn-sm">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button type="button" className="btn btn-default btn-sm">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
