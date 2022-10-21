import Image from "next/image";
import Link from "next/link";
import { useUrlFor } from "../hooks/useUrlFor";

const Product = ({ product: { image, name, slug, price } }) => {
  const imageProps = useUrlFor(image && image[0]);
  return (
    <div className="product">
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <div className="product-image">
            <Image
              {...imageProps}
              alt={name}
              layout="intrinsic"
              width={250}
              height={250}
            />
          </div>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
