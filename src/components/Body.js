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
    </div>
  );
};

export default Body;
