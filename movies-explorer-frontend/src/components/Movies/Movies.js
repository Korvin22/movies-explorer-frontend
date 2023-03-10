import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function Movies(props) {
  return (
    <main>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <div className="movies__more">
        <button className="movies__button">Ещё</button>
      </div>
      <Footer />
    </main>
  );
}

export default Movies;
