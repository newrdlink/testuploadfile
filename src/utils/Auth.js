import React from "react";
import handleResponse from "./utils";

class Api extends React.Component {
  constructor({ address, headers }) {
    super();
    this.address = address;
    this.headers = headers;
  }

  // pullUserData(data) {
  //     return fetch(`${this.address}/users/me`, {
  //         method: "GET",
  //         headers: {
  //             encType="multipart/form-data",
  //             "Authorization": `Bearer ${data}`
  //         },
  //     }).then(handleResponse)
  // }

  signIn(data) {
    console.log(data)
    return fetch(`${this.address}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then(handleResponse);
  }

  // upload(fd) {
  //   console.log("11")
  //   console.log(fd)
  //   return fetch(`${this.address}/public/workers`, {
  //     method: "POST",
  //     headers: this.headers,
  //     // body: JSON.stringify(fd),
  //     body: fd,
  //   }).then(handleResponse);
  // }

  createWorker(data) {
    // console.log(data)
    // console.log("11")
    return fetch(`${this.address}/workers`, {
      method: "POST",
      headers: this.headers,
      // {
      // "Content-Type": "application/json"

      // },
      body: data,
      // body: JSON.stringify({
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   middleName: data.middleName,
      //   image: data.image,
      //   position: data.position,
      // }),
    }).then(handleResponse);
  }

  getWorkers() {
    return fetch(`${this.address}/workers`, {
      method: "GET",
      headers: this.headers,
    }
    ).then(handleResponse);
  }

  rmWorker(_id) {
    return fetch(`${this.address}/workers/${_id}`, {
      method: "DELETE",
      headers: this.headers,
    }
    )
  }

}

//создаем экземпляр
const api = new Api({
  address: "http://localhost:5000",
  // address: "http://api.vstorona.didrom.ru",
  headers: {
    "Contetnt-Type": "multipart/form-data",
    // "Content-Type": "application/json",
  },
});
export default api;
