import React, { useRef } from "react";
import "./Modal.scss";
import logo from "../Assets/Images/bmw-logo.svg";

export default function Modal({ user, modal, setModal }) {
  const wrapper = useRef();

  const closeModal = () => {
    setModal(false);
  };

  const handleWrapper = (e) => {
    if (e.target == wrapper.current) {
      setModal(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        setModal(false);
      }
    });
  }, [modal]);

  return (
    <div
      onClick={handleWrapper}
      ref={wrapper}
      className={modal ? "modal__container" : "close-modal"}
    >
      <div className="Modal">
        <div className="modal__header">
          <img src={logo} alt="logo" width={40} height={40} />
          <h2 className="modal__title">Yangi o'quvchilar</h2>
          <button className="btn" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal__body">
          {user.length > 0 && (
            <ol className={modal ? "modal__list" : "close-modal"}>
              {user.map((item) => (
                <li className="modal__item" key={item.id}>
                  <div className="item__content">
                    <h4 className="user__name"><strong>Ism & Familiya:</strong> {item.Name}</h4>
                    <p className="user__number"><strong>Telefon raqam: </strong>{item.Number}</p>
                    <p className="user__course">
                      <strong>Kurs: </strong>{item.Course}
                    </p>
                  </div>
                  <div className="item__content2">
                    <button className="btn-success">+</button>
                    <button className="btn-danger">&times;</button>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
