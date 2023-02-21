

function MovieCard(props) {
  return (
    <div className="cards__card">
      <img src={props.src} alt={props.name} className="cards__picture" />
      <div className="cards__description">
        <h2 className="cards__title">{props.name}</h2>
        <button className="cards__like" type="button"></button>
      </div>
      <p className="cards__movie-duration">{props.duration}</p>
    </div>
  );
}

export default MovieCard;
