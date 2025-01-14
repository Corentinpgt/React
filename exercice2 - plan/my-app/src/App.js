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

function Pricing(props) {
  console.log(props);
  return (
    <>
      <ul className="offer-box">
        <li key={props.key} className="offer-box__header">
          <h3 className="offer-box__name">{props.data.title}</h3>
          <p className="offer-box__price">{props.which}</p>
        </li>
        <Items advs={props.data.advantages} />
        <a href="#Forms2" className="header__lien">
          <button className="header__button btn--hero__nav">
            Get Started
          </button>
        </a>
      </ul>
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
        price: {buy: "29 999.99", leasing: "299.99"},
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
        price: {buy: "35 999.99", leasing: "359.99"},
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
        price: {buy: "49 999.99", leasing: "499.99"},
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

  const [isActive, setIsActive] = useState(false);


  let handler = function() {
    setIsActive(!isActive);
  }

  return (
    <>
      <section>
        <div className="offer">
          <div className="offer-section">
            <h2 className="offer-section__title">{data.title}</h2>
            <p className="offer-section__description">{data.subtitle}</p>
            <div className="offer-section__description">
              <label className="switch">
                <input onClick={handler} type="checkbox"/>
                <span className="slider round"></span>
              </label>
            </div>
            <div className="box">
              {data.prices.map((price, index) => {
                console.log(isActive);
                <Pricing key={index} data={price} which={isActive ? price.leasing: price.buy} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );

  
}


// const ToggleButton = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleButton = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className={`toggle-button ${isActive ? 'active' : ''}`} onClick={toggleButton}>
//       <div className={`inner-circle ${isActive ? 'active' : ''}`} />
//     </div>
//   );
// };