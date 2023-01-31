function SearchForm(props) {
  return (
    <form className="search__form">
      <input
        type="text"
        className="search__input"
        placeholder="Фильм"
        name="movie"
      />
      <button className="search__button">Поиск</button>
      <div className="search__wrapper">
          <input
            className="search__radio"
            id="radio"
            type="radio"
            name="radio"
          />
        <p className="search__label">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
