import React, { useRef, useState } from "react";
import Modal from "./Modal/Modal";
import "./App.css";

export default function App() {
  const localUser = JSON.parse(localStorage.getItem('user')) || []
  const [user, setUser] = useState(localUser);
  const [modal, setModal] = useState(false);
  const userName = useRef();
  const userNumber = useRef();
  const userCourse = useRef();
  const date = new Date();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newUser = {
      id: Math.ceil(Math.random() * 1000),
      Name: userName.current.value,
      Number: userNumber.current.value,
      Course: userCourse.current.value,
      Date: date,
    };
    setUser([...user, newUser]);
    window.localStorage.setItem('user', JSON.stringify([newUser, ...user]))
  };

  const handleModal = () => {
    setModal(true);
  };

  return (
    <div className="container">
      <div className="content">
        <h2 className="content__title">Contact Info</h2>
        <p className="content__text">
          
          <span className="warning">! </span>
          You must enter your name & surname as: <br />
          <span className="content__span">"Odilbek Mukhamedov"</span>
        </p>
        <p className="content__text">
          
          <span className="warning">! </span>
          You must enter your phone numbar as: <br />
          <span className="content__span">
            "<strong>+998</strong>909887599"
          </span>
        </p>
        <p className="content__text">
          
          <span className="warning">! </span>
          Select course which you need to do learn
          <span className="content__span">➡️</span>
        </p>
        <p className="content__text">
          
          <span className="warning">! </span>Write you massage about our company
          😊
        </p>
        <span className="content__admin">Admin: <a className="content__link" href="https://instagram.com/1sheraliyev1c">Odilbek Mukhamedov 👨🏻‍💻</a>
        </span>
      </div>
      <div className="contact">
        <h2 className="contact__title">Kursga yozilish</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="flex__content">
            <div>
              <label htmlFor="userName">
                <code>Ism & Familiya</code>
              </label>
              <br />
              <input id="userName" ref={userName} type="text" />
            </div>
            <div>
              <label htmlFor="userNumber">
                <code>Telefon Raqam</code>
              </label>
              <br />
              <input
                id="userNumber"
                ref={userNumber}
                type="tel"
                defaultValue={"+" + 998}
              />
            </div>
          </div>
          <br />
          <label htmlFor="userCourse">
            <code>Kursni Tanlang</code>
          </label>
          <br />
          <select ref={userCourse} id="userCourse">
            <option disabled>
              Kursni tanlang
            </option>
            <option value="Ingliz tili">Ingliz Tili</option>
            <option value="IT Dasturlash">IT Dasturlash</option>
            <option value="Rus tili">Rus Tili</option>
          </select>
          <br />
          <label htmlFor="massage">
            <code>Fikringizni yozib qoldiring!</code>
          </label>
          <br />
          <textarea id="massage" cols="58"></textarea>
          <br />
          <button className="contact__btn">Jo'natish</button>
        </form>
        <button onClick={handleModal} className="admin__btn">Admin paneli</button>
        <Modal user={user} modal={modal} setModal={setModal} />
      </div>
    </div>
  );
}
