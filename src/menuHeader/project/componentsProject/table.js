import { useEffect, useState } from "react";
import ProgesBar from "./progesBar"
import { getData } from "../../../api/axios";

export default function Table() {
  const [dataApi, setDataAPi] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setDataAPi(res);
    });
    getData();
  }, [dataApi]);

  const column =
    dataApi.length > 0 && dataApi[0]
      ? Object.keys(dataApi[0]).filter((key) => key !== "id")
      : [];
  return (
    <div className="table-responsive">
      <table className="table table-striped projects">
        <thead>
          <tr>
            {column.map((item, i) => (
              <th
                key={i}
                className="nama"
                style={
                  item === "Status"
                    ? { width: "8%" }
                    : item === "Tim Member"
                    ? { width: "30%" }
                    : { width: "20%" }
                }
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataApi.map((item, i) => (
            <tr key={i}>
              {column.map((header, k) => (
                <td key={k} className="nama">
                  {header === "Tim Member" ? (
                    <>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <img
                            className="direct-chat-img"
                            src={item[header].linkPic1}
                            alt="A"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            className="direct-chat-img"
                            src={item[header].linkPic2}
                            alt="P2"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            className="direct-chat-img"
                            src={item[header].linkPic3}
                            alt="P3"
                          />
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      {header === "Proges" ? (
                        <>
                          <ProgesBar value={item[header]} />
                        </>
                      ) : (
                        <>
                          {header === "Status" ? (
                            <>
                              <button
                                className={`btn ${
                                  item[header] === "Revisi"
                                    ? "btn-danger block w-100 "
                                    : item[header] === "Dikerjakan"
                                    ? "btn-warning block w-100 "
                                    : "btn-success block w-100 "
                                }`}
                              >
                                {item[header]}
                              </button>
                            </>
                          ) : (
                            <>
                              <div>{item[header]}</div>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
