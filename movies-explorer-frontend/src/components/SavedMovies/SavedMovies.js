import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MovieCard from "../MoviesCard/MoviesCard";
import movie_33 from "../../images/33.svg";
import movie_100 from "../../images/100.svg";
import movie_run from "../../images/Погоня.svg";

function SavedMovies(props) {
  return (
    <>
      <Header />
      <SearchForm />
      <div className="cards">
            <MovieCard name={"33 слова о дизайне"} src={movie_33} duration={"1ч 47м"} />
            <MovieCard name={"Киноальманах «100 лет дизайна»"} src={movie_100} duration={"1ч 3м"} />
            <MovieCard name={"В погоне за Бенкси"} src={movie_run} duration={"1ч 42м"} />
        </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
