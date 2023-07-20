import "./Card.scss";

export function Card({ image }) {
  const imageUrl = image.poster_path;
  return (
    <>
      <div className="card-conteiner">
        <li className="li-imagenes">
          <img
            className="li-imagenes__img-desktop"
            src={imageUrl}
            alt={image.title}
          />
          <h2>{image.title}</h2>
        </li>
      </div>
    </>
  );
}

export function CardMobile ({ image }) {
    const imageUrlMobile = image.poster_path_mobile;
    return (
      <>
        <div className="card-conteiner-mobile">
          <li className="card-conteiner-mobile__li-imagenes">
            <img
              className="li-imagenes__img-mobile"
              src={imageUrlMobile}
              alt={image.title}
            />
            <h2>{image.title}</h2>
          </li>
        </div>
      </>
    );
  }