import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ productsData, bannerData }) => {
  return (
    <div>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Candles of many variations</p>
      </div>
      <div className="products-container">
        {productsData?.map((product, index) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "product"] `;
  const productsData = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"] `;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      productsData,
      bannerData,
    },
  };
};

export default Home;
