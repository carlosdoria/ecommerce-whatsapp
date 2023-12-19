import { ProductProps } from "./types";

export function product({
  title,
  description,
  price,
  imgUrl,
  imgAlt,
}: ProductProps) {
  return (
    <div>
      <img src={imgUrl} alt={imgAlt} />
      <strong>{title}</strong>
      <p>{description}</p>
      <div>
        <p>{price}</p>
      </div>
    </div>
  );
}
