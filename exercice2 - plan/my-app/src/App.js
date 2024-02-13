import "./css/base.css";
import React, { useState } from "react";



function Items(advs) {
  return (
    <>
      {advs.advs.map((adv) => {
        let mark;
        if (adv.included) {
          mark = <span className="advantage__checkmark">✓</span>;
        } else {
          mark = "";
        }
        return (
          <li key={advs.advs.indexOf(adv)} className="advantage">
            {mark}
            <p className="advantage__text">{adv.option}</p>
          </li>
        );
      })}
    </>
  );
}

function Pricing(prices) {
  return (
    <>
      <div className="box">
        {prices.prices.map((price) => {
          return (
            <>
              <ul className="offer-box">
                <li key={prices.prices.indexOf(price)} className="offer-box__header">
                  <h3 className="offer-box__name">{price.title}</h3>
                  <p className="offer-box__price">{price.price}</p>
                </li>
                <Items advs={price.advantages} />
                <a href="#Forms2" className="header__lien">
                  <button className="header__button btn--hero__nav">
                    Get Started
                  </button>
                </a>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
}

export default function App() {



  let data = {
    title: "Prix et option à l'achat",
    subtitle:
      "Découvrez l'avenir de la mobilité avec des prix compétitifs et des options d'achat flexibles chez Auto Innovation.",
    prices: [
      {
        title: "Starter Package",
        price: "29 999.99",
        advantages: [
          { included: true, option: "Assurance auto complémentaire" },
          { included: true, option: "Première recharge offerte" },
          { included: true, option: "Assurance contre le vol" },
          { included: true, option: "Service de rappel d'entretien" },
          { included: false, option: "Nettoyage hebdomadaire" },
          { included: false, option: "Service de diagnostic à distance" },
          { included: false, option: "Service de remplissage du réservoir" },
          { included: false, option: "Service de réparation à domicile" },
          { included: false, option: "Entretien régulier" },
          { included: false, option: "Recharge d'hydrogène illimité" },
        ],
      },
      {
        title: "Prenium Package",
        price: "35 999.99",
        advantages: [
          { included: true, option: "Assurance auto complémentaire" },
          { included: true, option: "Première recharge offerte" },
          { included: true, option: "Assurance contre le vol" },
          { included: true, option: "Service de rappel d'entretien" },
          { included: true, option: "Nettoyage hebdomadaire" },
          { included: true, option: "Service de diagnostic à distance" },
          { included: true, option: "Service de remplissage du réservoir" },
          { included: false, option: "Service de réparation à domicile" },
          { included: false, option: "Entretien régulier" },
          { included: false, option: "Recharge d'hydrogène illimité" },
        ],
      },
      {
        title: "Prestige Package",
        price: "49 999.99",
        advantages: [
          { included: true, option: "Assurance auto complémentaire" },
          { included: true, option: "Première recharge offerte" },
          { included: true, option: "Assurance contre le vol" },
          { included: true, option: "Service de rappel d'entretien" },
          { included: true, option: "Nettoyage hebdomadaire" },
          { included: true, option: "Service de diagnostic à distance" },
          { included: true, option: "Service de remplissage du réservoir" },
          { included: true, option: "Service de réparation à domicile" },
          { included: true, option: "Entretien régulier" },
          { included: true, option: "Recharge d'hydrogène illimité" },
        ],
      },
    ],
  };
  if (isActive) {

  }
  else {
    return (
      <>
        <section>
          <div className="offer">
            <div className="offer-section">
              <h2 className="offer-section__title">{data.title}</h2>
              <p className="offer-section__description">{data.subtitle}</p>
              <ToggleButton />
              <Pricing prices={data.prices} />
            </div>
          </div>
        </section>
      </>
    );
  }

  
}


const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`toggle-button ${isActive ? 'active' : ''}`} onClick={toggleButton}>
      <div className={`inner-circle ${isActive ? 'active' : ''}`} />
    </div>
  );
};