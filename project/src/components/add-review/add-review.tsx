import {Films} from '../../types/films';
import {TEXTAREA_COLOR, RATINGS_QUANTITY, Review, reviewSubmitButton} from '../const/const';

type AddReviewProps = {
  films: Films,
  isDataSending: boolean;
  isSendingError: boolean;
  isSubmitDisabled: boolean;
  onSubmitClick(): void;
  onFormChange(): void;
  onRatingChange(): void;
  onReviewChange(): void;
}

function AddReview({
  films,
  isDataSending,
  isSendingError,
  isSubmitDisabled,
  onSubmitClick,
  onFormChange,
  onRatingChange,
  onReviewChange,
}: AddReviewProps): JSX.Element {

  return (
    <>
      <div className="film-card__poster film-card__poster--small">
        <img src={films.src} alt="The Grand Budapest Hotel poster" width="218"
          height="327"
        />
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={onSubmitClick}
          onChange={onFormChange}
        >
          <div className="rating">
            <div className="rating__stars"
              onChange={onRatingChange}
            >
              {Array.from(Array(RATINGS_QUANTITY)).map((_, index) => {
                const rating = index + 1;
                return (
                  <>
                    <input
                      className="rating__input"
                      id={`star-${rating}`}
                      type="radio"
                      name="rating"
                      value={rating}
                    />
                    <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                  </>
                );
              },
              )}
            </div>
          </div>
          <div
            className="add-review__text"
            style={{backgroundColor: TEXTAREA_COLOR}}
          >
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength={Review.MIN_LENGTH}
              maxLength={Review.MAX_LENGTH}
              onChange={onReviewChange}
              required
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={isSubmitDisabled}
              >
                {isDataSending ? reviewSubmitButton.sending : reviewSubmitButton.post}
              </button>
            </div>

          </div>
        </form>
        {isSendingError &&
        <p style={{color: 'red'}}>Error while sending data. Please, try again later.</p>}
      </div>
    </>
  );
}

export default AddReview;
