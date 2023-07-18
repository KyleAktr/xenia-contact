import React from "react";
import Phone from "../assets/img/phone.svg";
import FormImg from "../assets/img/xenia-img-form.png";

const Form = () => {
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
          <label className="radio-container">
            <input type="radio" name="chambre" value={1} />
            <span>1</span>
          </label>
          <label className="radio-container">
            <input type="radio" name="chambre" value={2} />
            <span>2</span>
          </label>
          <label className="radio-container">
            <input type="radio" name="chambre" value={3} />
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
          <label className="radio-container-genre">
            <input type="radio" name="sexe" value={"Mr"} />
            <span>Mme</span>
          </label>
          <label className="radio-container-genre">
            <input type="radio" name="sexe" value={"Mme"} />
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
