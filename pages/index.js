import Head from "next/head";
import { client } from "../utils/client";
import { HeroBanner, Product, FooterBanner } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Ecommerce</title>
      </Head>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Headphones of all kinds</p>
      </div>

      <div className="products-container">
        {["Product1", "Product2"].map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>

      <FooterBanner />
    </>
  );
};

export default Home;
