import {films} from "../../mocks/films";
import {Films} from "../../types/films";

type AddReviewProps = {
  films: Films
}

function AddReview(props:AddReviewProps): JSX.Element {
  // const {films} = props;
  // const {title, rating, id, src} = films;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={films.src} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <div className="film-card__poster film-card__poster--small">
          <img src={films.src} alt="The Grand Budapest Hotel poster" width="218"
               height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input
                className="rating__input"
                id={`star-${films.rating}`}
                type="radio"
                name="rating"
                value={films.rating}
                // disabled={isRadioDisabled}
              />
              <label className="rating__label" htmlFor={`star-${films.rating}`}>Rating {films.rating}</label>
            </div>
          </div>

          <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text"
                  placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default AddReview
