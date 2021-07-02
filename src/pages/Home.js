import React from "react";
import Landing from "../components/Landing/Landing";
import SubLanding from "../components/SubLanding/SubLanding";
import Partners from "../components/Partners/Partners";
import FormSection from "../components/FormSection/FormSection";
import Dashboard from "../components/Dashboard/Dashboard";
const Home = () => {
  return (
    <>
      <Landing />
      <SubLanding />
      <Partners />
      <FormSection />
      <Dashboard />
    </>
  );
};

export default Home;
