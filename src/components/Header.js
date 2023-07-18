import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Devenez LOGEUSE et rentabilisez vos m² inutiles</h1>
        <div className="header-card">
          <h3>Combien pouvez-vous gagner ?</h3>
          <div className="header-card-content">
            <p>Jusqu'à</p>
            <h2>375€</h2>
            <p>
              /mois
              <br />
              /chambre
            </p>
          </div>
          <div className="star-icon">
            <p>
              net <br /> d'impôt !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
