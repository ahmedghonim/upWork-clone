import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
import Layout from "./Layout";
import RoutesC from "./Routes";

function App() {
  return (
    <Router>
      <Layout>
        <RoutesC />
      </Layout>
    </Router>
  );
}

export default App;
