import "./css/out/App.css";
import Header from "./components/header";
import ApplicationList from "./components/applicationsList";
import Item from "./components/item";
import { useSelector, useDispatch } from 'react-redux'
import AddItem from "./components/addItem";
import { useEffect } from "react";
import { fetchData } from "./redux/items";


function App() {
  const data = useSelector((state) => [...state.items.value]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]) 

  
  return (
    <div className="mainContainer">
      <div className="container-xl">
        <Header />
        <AddItem />
        <ApplicationList>
          {data.map(item => {
            return <Item key={item.id} id={item.id} applied={item.applied} name={item.name} link={item.link} timeAdded={item.timeAdded}/>
          })}
        </ApplicationList>
        <br />      
      </div>
    </div>
  );
}

export default App;
