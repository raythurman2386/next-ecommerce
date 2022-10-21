import { client } from "../utils/client";
import { HeroBanner, Product, FooterBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner data={bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Headphones of all kinds</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner data={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
