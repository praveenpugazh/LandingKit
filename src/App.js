import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import SubLanding from "./components/SubLanding/SubLanding";
import Partners from "./components/Partners/Partners";
import FormSection from "./components/FormSection/FormSection";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <SubLanding />
      <Partners />
      <FormSection />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
