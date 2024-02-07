import "./css/base.css";

export default function App() {
  return (
    <>
      <h2 className="offer-section__title">Prix et option à l'achat</h2>
      <p className="offer-section__description">
        Découvrez l'avenir de la mobilité avec des prix compétitifs et des
        options d'achat flexibles chez Auto Innovation.
      </p>
      <Pricing name="Starter Package" price="29999.99" />
    </>
  );
}

function Items(value) {
  if (value.check) {
    mark = "✓";
  } else {
    mark = "";
  }
  return (
    <li className="advantage">
      <span className="advantage__checkmark">{mark}</span>
      <p className="advantage__text">{value.text}</p>
    </li>
  );
}

function Pricing(value) {
  return (
    <ul className="offer-box">
      <li className="offer-box__header">
        <h3 className="offer-box__name">{value.name}</h3>
        <p className="offer-box__price">{value.price}</p>
      </li>
      <Items value='[]'/>
    </ul>
  );
}

<ul class="offer-box">
  <li class="offer-box__header">
    <h3 class="offer-box__name">Premium Package</h3>
    <p class="offer-box__price">35 999.99</p>
  </li>
  <li class="offer-box__advantages"></li>
  <li class="advantage">
    <span class="advantage__checkmark">✓</span>
    <p class="advantage__text">Assurance auto complémentaire</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">✓</span>
    <p class="advantage__text">Première recharge offerte</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">✓</span>
    <p class="advantage__text">Assurance contre le vol</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">✓</span>
    <p class="advantage__text">Service de rappel d'entretien</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">✓</span>
    <p class="advantage__text">Nettoyage hebdomadaire</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">✓</span>
    <p class="advantage__text">Service de diagnostic à distance</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">✓</span>
    <p class="advantage__text">Service de remplissage du réservoir</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">  &nbsp;</span>
    <p class="advantage__text">Service de réparation à domicile</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">  &nbsp;</span>
    <p class="advantage__text">Entretien régulier</p>
  </li>
  <li class="advantage">
    <span class="advantage__checkmark">  &nbsp;</span>
    <p class="advantage__text">Recharge d'hydrogène illimité</p>
  </li>

  <li>
    <a href="#Forms2" class="header__lien">
      <button class="header__button btn--hero__nav"> Get Started</button>
    </a>
  </li>
</ul>;
