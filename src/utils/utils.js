const handleResponse = (res) => {
  if (res.ok) {
    // console.log(res)
    // return res.json();
    return res.body.locked ? res.json() : res;
  }
  return Promise.reject(`Извините, ошибка: ${res.status}`);
};

export default handleResponse;
