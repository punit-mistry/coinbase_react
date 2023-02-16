import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Header from "../components/Header";
import TokenForm from "../Pages/Welcome";
const Homepage = () => {
  return (
    <>
   <Header name={TokenForm.data}  />
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;
