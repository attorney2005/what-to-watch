

interface ShowMoreButtonProps {
  onShowMoreButtonClick(): void;
}

function ShowMoreButton(props:ShowMoreButtonProps): JSX.Element {
  const{onShowMoreButtonClick}=props;
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          onShowMoreButtonClick();
        }}>
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
