
function Card(ppl) {
  return (
    <>
    <div className="gallery__pic">
      <img className="gallery__image" src={ppl.img}/>
      <div className="gallery__div">
        <img src="bgshapes.svg"/>
        <div className="gallery__txt">
          <h2> {ppl.name} </h2>
          <h3 className="gallery__work">{ppl.post}</h3>
        </div>
      </div>
    </div>
    </>
  );
}


export default function App() {

  const team = [
    {
      name: 'Édouard Jérémie',
      post: 'CEO',
      img: 'edouard.jpg',
    },
    {
      name: 'Amélie Christelle',
      post: 'Directeur des recherche',
      img: 'amelie.avif',
    },
    {
      name: 'Gilles Damien',
      post: 'Directeur commerciale',
      img: 'gilles.jpg',
    },
    {
      name: 'the memer',
      post: 'operagx comunity manager',
      img: 'gilles.jpg',
    },

  ]

  return (
    <>
    <h2 className="team__title">Notre équipe</h2>
    <h1 className="team__heading">Présentation de notre formidable équipe</h1>
    <h2 className="team__description">Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène.</h2>
    <ul className="gallery">

      {team.map((ppl) => {
        return (
        <Card name={ppl.name} post={ppl.post} img={ppl.img}/>
        )
      })}
      
      {/* <Card name="Édouard Jérémie" post="CEO" img="edouard.jpg"/>
      <Card name="Amélie Christelle" post="Directeur des recherche" img="amelie.avif"/>
      <Card name="Gilles Damien" post="Directeur commerciale" img="gilles.jpg"/> */}
    </ul>
    </>
  );
}