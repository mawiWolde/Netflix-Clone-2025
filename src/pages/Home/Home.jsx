// Home.jsx
import React from "react";
import Header from "@/components/header/Header.jsx";
import Footer from "@/components/footer/Footer.jsx";
import Banner from "@/components/banner/Banner.jsx";
import RowList from "@/components/rows/rowList/RowList.jsx";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
};

export default Home;
