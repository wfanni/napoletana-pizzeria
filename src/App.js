import './App.css';
import Navbar from "./components/navbar/Navbar";
import Welcome from './components/welcome/Welcome';
// import Introduction from './components/introduction/Introduction';
import Menu from "./components/menu/Menu";
import Button from "./components/button/Button";
import Footer from './components/footer/Footer';

import BookingTable from './components/booking_table/BookingTable';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>
        {/* <hr /> */}
        <Switch>

          <Route exact path="/">
            <Home />
            <Footer />
          </Route>

          <Route exact path="/book">
            <BookingTablePage />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Menu />
      <Button />
      <Footer />
    </div>
  );
}

function BookingTablePage() {
  return (
    <div>
      <Navbar />
      <BookingTable />
      <Footer />
    </div>

  );
}

// export default App;
