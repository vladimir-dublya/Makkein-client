import React, { useContext } from "react";
import Header from "../../Base/Header";
import style from "./Authorization.module.scss";
import { createUser, loginUser } from "../../../http/userAPI.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../../Context";

export const Authorization = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUserIsInside } = useContext(Context);
  const onRegister = () => {
    createUser(login, password, "admin")
      .catch((err) => {
        toast.error(err, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .then((data) => {
        localStorage.setItem("user", data.token);
        setUserIsInside(true);
      });
  };

  const onLogin = () => {
    loginUser(login, password).then((data) => console.log(data));
  };
  return (
    <div>
      <div className={style.auth}>
        <div className={style.auth__box}>
          <input
            className={style.auth__box__input}
            type="email"
            id="email"
            placeholder="email"
            required
            onChange={(event) => {
              setLogin(event.target.value);
            }}
          />
          <input
            placeholder="password"
            className={style.auth__box__input}
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <div className={style.button_Con}>
            <div className={style.button} onClick={onLogin}>
              Вхід
            </div>
            <div className={style.button} onClick={onRegister}>
              Регістрація
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
