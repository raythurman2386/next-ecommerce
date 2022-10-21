import Image from "next/image";
import Link from "next/link";
import { useUrlFor } from "../hooks/useUrlFor";

const FooterBanner = ({
  data: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  const imageProps = useUrlFor(image && image);
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <div className="footer-banner-image">
          <Image {...imageProps} layout="intrinsic" alt={product} />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
