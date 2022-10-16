// import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import ToTopButton from "./Components/Navbar/toTopButton";
import Footer from "./Components/Footer/footer";
import TeamContainer from "./Components/team/team";
import Contact from "./Components/Contact/Contact";

// Pages
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/*<ScrollToTop />*/}
      <Navbar />
      <ToTopButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team" component={TeamContainer} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [pathname]);

//   return null;
// };

export default App;
