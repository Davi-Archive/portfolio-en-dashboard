


const requestData = async () => {
  const res = await axios
    .get(`${import.meta.env.VITE_SERVER_URI}portfolio/en/about`)
    .catch((err) => console.log(err));

  const data = await res.data;
  setData(data);
  return data;
};

export default { requestData };
