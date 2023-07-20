import { Card } from "../card/Card.jsx";
import { CardMobile } from "../card/Card.jsx";
import Images from "./Images.json";
import './ImagesGrid.scss';


export function ImagesGrid() {
  return (
    <ul className="imagenes-grid">
      {Images.map((image) => <Card key={image.id} image={image} />)}
    </ul>
  );
}

export function ImagesMobile() {
  return (
    <ul className="imagenes-mobile">
      {Images.map((image) => <CardMobile key={image.id} image={image} />)}
    </ul>
  );
}