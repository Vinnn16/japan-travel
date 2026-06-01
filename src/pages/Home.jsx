import React from "react";
import SlideGambar from "../components/SlideGambar";
import KontenUtama from "../components/KontenUtama";
import KontenDua from "../components/KontenDua";
import CustomerReview from "../components/CustomerReview";

function Home() {
  return (
    <>
      <SlideGambar />
      <KontenUtama />
      <KontenDua />
      <CustomerReview />
    </>
  );
}

export default Home;
