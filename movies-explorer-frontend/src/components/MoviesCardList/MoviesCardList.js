import MovieCard from "../MoviesCard/MoviesCard";
import movie_33 from "../../images/33.svg";
import movie_100 from "../../images/100.svg";
import movie_run from "../../images/Погоня.svg";
import movie_baskia from "../../images/Баския.svg";
import movie_jogging from "../../images/Бег.svg";
import movie_bookselleres from "../../images/Книготорговцы.svg";
import movie_when from "../../images/Когда.svg";
import movie_jimme from "../../images/Gimme.svg";
import movie_jenis from "../../images/Дженис.svg";
import movie_keepup from "../../images/Соберись.svg";
import movie_pi from "../../images/Пи.svg";
import movie_on from "../../images/По.svg";

function MoviesCardList(props) {
    return(
        <div className="cards">
            <MovieCard name={"33 слова о дизайне"} src={movie_33} duration={"1ч 47м"} />
            <MovieCard name={"Киноальманах «100 лет дизайна»"} src={movie_100} duration={"1ч 3м"} />
            <MovieCard name={"В погоне за Бенкси"} src={movie_run} duration={"1ч 42м"} />
            <MovieCard name={"Баския: Взрыв реальности"} src={movie_baskia} duration={"1ч 21м"} />
            <MovieCard name={"Бег это свобода"} src={movie_jogging} duration={"1ч 44м"} />
            <MovieCard name={"Книготорговцы"} src={movie_bookselleres} duration={"1ч 37м"} />
            <MovieCard name={"Когда я думаю о Германии ночью"} src={movie_when} duration={"1ч 56м"} />
            <MovieCard name={"Gimme Danger: История Игги и The Stooge..."} src={movie_jimme} duration={"1ч 59м"} />
            <MovieCard name={"Дженис: Маленькая девочка грустит"} src={movie_jenis} duration={"1ч 42м"} />
            <MovieCard name={"Соберись перед прыжком"} src={movie_keepup} duration={"1ч 10м"} />
            <MovieCard name={"Пи Джей Харви: A dog called money"} src={movie_pi} duration={"1ч 4м"} />
            <MovieCard name={"По волнам: Искусство звука в кино"} src={movie_on} duration={"1ч 7м"} />
        </div>
    )
}

export default MoviesCardList;