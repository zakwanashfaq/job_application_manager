import "./css/out/App.css";
import Header from "./components/header";
import ApplicationList from "./components/applicationsList";
import Item from "./components/item";
function App() {
  return (
    <div className="mainContainer">
      <div className="container-xl">
        <Header />
        <ApplicationList>
          <Item />
          <Item />
        </ApplicationList>
      </div>
    </div>
  );
}

export default App;
