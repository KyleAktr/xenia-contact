import React, { useState } from "react";
import Phone from "../assets/img/phone.svg";
import FormImg from "../assets/img/xenia-img-form.png";

const Form = () => {
  const [selectedRoom, setSelectedRoom] = useState(undefined);
  const [selectedGender, setSelectedGender] = useState(undefined);

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div className="form">
      <div className="form-title">
        <div className="form-title-content">
          <img src={FormImg} alt="image correspondant à Xenia" />
          <h2>Ca m'intéresse !</h2>
        </div>
      </div>
      <form>
        <h3>Je propose :</h3>
        <div>
          <label
            className={` ${
              selectedRoom === "1" ? "activeLink" : "radio-container"
            }`}
          >
            <input
              type="radio"
              name="chambre"
              value={1}
              onChange={handleRoomChange}
            />
            <span>1</span>
          </label>
          <label
            className={` ${
              selectedRoom === "2" ? "activeLink" : "radio-container"
            }`}
          >
            <input
              type="radio"
              name="chambre"
              value={2}
              onChange={handleRoomChange}
            />
            <span>2</span>
          </label>
          <label
            className={`${
              selectedRoom === "3" ? "activeLink" : "radio-container"
            }`}
          >
            <input
              type="radio"
              name="chambre"
              value={3}
              onChange={handleRoomChange}
            />
            <span>3</span>
          </label>
          <label>chambre(s)</label>
        </div>
        <h3>Sur la commune de :</h3>
        <input className="commune" type="text" placeholder="Commune" />
        <br />
        <input className="cp" type="text" placeholder="Code postal" />
        <h3>Je suis :</h3>
        <div>
          <label
            className={`${
              selectedGender === "Mr"
                ? "activeLinkGender"
                : "radio-container-gender"
            }`}
          >
            <input
              type="radio"
              name="sexe"
              value={"Mr"}
              onChange={handleGenderChange}
            />
            <span>Mme</span>
          </label>
          <label
            className={`${
              selectedGender === "Mme"
                ? "activeLinkGender"
                : "radio-container-gender"
            }`}
          >
            <input
              type="radio"
              name="sexe"
              value={"Mme"}
              onChange={handleGenderChange}
            />
            <span>Mr</span>
          </label>
        </div>
        <input className="nom" type="text" placeholder="Prénom NOM" />
        <div className="phone">
          <img className="phone-logo" src={Phone} alt="phone logo" />
          <input className="phone-number" type="text" placeholder="Téléphone" />
          <button type="submit">être appelé</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
