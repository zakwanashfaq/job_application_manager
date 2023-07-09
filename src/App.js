import "./css/out/App.css";
import Header from "./components/header";
import ApplicationList from "./components/applicationsList";
import Item from "./components/item";
import { useSelector, useDispatch } from 'react-redux'
import AddItem from "./components/addItem";
import { useEffect, useState } from "react";
import { fetchData, selectAllItems } from "./redux/items";


function App() {
  const data = useSelector(selectAllItems);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    dispatch(fetchData()).then(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="mainContainer">
      <div className="container-xl">
        <Header />
        <AddItem />
        <ApplicationList>
          {data.sort((a, b) => b.index - a.index).map(item => {
            return <Item key={item.id} id={item.id} applied={item.applied} name={item.name} link={item.link} timeAdded={item.timeAdded}/>
          })}
        </ApplicationList>
        <br />      
      </div>
    </div>
  );
}

export default App;

