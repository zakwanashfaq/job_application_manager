import "./css/out/App.css";
import Header from "./components/header";
import ApplicationList from "./components/applicationsList";
import Item from "./components/item";
import { useSelector, useDispatch } from 'react-redux'
import AddItem from "./components/addItem";
import { useEffect, useState } from "react";
import { fetchData, selectAllItems } from "./redux/items";
import { AddAndSearchBar } from "./components/addAndSearchBar";
import OldItem from "./components/old_item_v1";


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
      <div className="">
        <Header />
        <AddAndSearchBar />
        <AddItem />
        <ApplicationList>
          {data.sort((a, b) => b.index - a.index).map(item => {
            if (item.name) {
              const modifiedItem = {
                ...item, 
                jobTitle: item.name
              }
              return <Item key={item.id} {...modifiedItem}/>
            } else {
              return <Item key={item.id} {...item}/>
            }
          })}
        </ApplicationList>
        <br />      
      </div>
    </div>
  );
}

export default App;

