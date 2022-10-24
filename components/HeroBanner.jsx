import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { useUrlFor } from "../hooks/useUrlFor";

const HeroBanner = ({ data }) => {
  const {
    smallText,
    midText,
    largeText1,
    largeText2,
    discount,
    saleTime,
    desc,
    buttonText,
    image,
    product,
  } = data;
  const imageProps = useUrlFor(image);

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText || <Skeleton />}</p>
        <h3>{midText || <Skeleton width={400} />}</h3>
        <h1>{largeText1 || <Skeleton />}</h1>
        <div className="hero-banner-image">
          <Image {...imageProps} layout="intrinsic" alt="headphones" />
        </div>
        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText || <Skeleton />}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc || <Skeleton count={2} />}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
