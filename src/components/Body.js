import React from "react";
import xeniaCard from "../assets/img/xenia-cards(1).png";

const Body = () => {
  return (
    <div className="body">
      <p>
        des milliers de Français rentabilisent leur m2 inutilisés en les louant,
        pourquoi pas vous ?{" "}
      </p>
      <div className="xenia-cards">
        <img
          src={xeniaCard}
          alt="image expliquant comment récupérer un devis ?"
        />
      </div>
      <div className="xenia-real-cards">
        <div className="card">
          <h4>
            Un conseiller vous appelle pour construire votre dossier de Logeuse
          </h4>
        </div>
        <div className="card">
          <h4>Vous choisissez votre locataire et la durée de la location</h4>
        </div>
        <div className="card">
          <h4>Vous empochez vos euros dès le premier jour !</h4>
        </div>
      </div>
    </div>
  );
};

export default Body;
