import Offer from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
};

function FavoriteOfferCard({ offer }: OfferCardProps): JSX.Element {
  const { isPremium, isFavorite, previewImage, price, rating, type, title } = offer;
  const ratingPercent = 100 / 5 * rating;
  const formatedType = type[0].toUpperCase() + type.slice(1);

  return (
    <article className="favorites__card place-card">
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={type} />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{formatedType}</p>
      </div>
    </article>
  );
}

export default FavoriteOfferCard;
