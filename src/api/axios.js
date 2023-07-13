import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_PROD,
});

export const getDataMemo = async () => {
  const data = await axios.get(`${process.env.REACT_APP_API_LOCAL}DataMemo`);
  return data.data;
};

export const addPesan = async (body) => {
  const save = await axios.post(`${process.env.REACT_APP_API_LOCAL}DataMemo`, body);
  return save;
};

export const deletePesan = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_API_LOCAL}DataMemo/${id}`);
};
export const getData = async () => {
  const data = await axios.get(`${process.env.REACT_APP_API_LOCAL}dataProject`);
  return data.data;
};

export const addData = async (body) => {
  const save = await axios.post(`${process.env.REACT_APP_API_LOCAL}dataProject`, body);
  return save;
};

export const getDataPesan = async () => {
  const data = await axios.get(`${process.env.REACT_APP_API_PROD_VIEW}pesan`, {
    headers: {
      secretcode: process.env.REACT_APP_API_SECRETCODE,
      secretkey: process.env.REACT_APP_API_SECRETKEY,
    },
  });
  return data.data.data;
};
export const countPesan = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_PROD_VIEW}count/pesan`,
    {
      headers: {
        secretcode: process.env.REACT_APP_API_SECRETCODE,
        secretkey: process.env.REACT_APP_API_SECRETKEY,
      },
    }
  );
  return data.data[0];
};

export const getUsers = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_PROD_VIEW}users`,
    {
      headers: {
        secretcode: process.env.REACT_APP_API_SECRETCODE,
        secretkey: process.env.REACT_APP_API_SECRETKEY,
      },
    }
  );
  return data.data;
};