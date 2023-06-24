import "./css/out/App.css";
import Header from "./components/header";
import ApplicationList from "./components/applicationsList";
import Item from "./components/item";
import { useSelector, useDispatch } from 'react-redux'
import AddItem from "./components/addItem";
import { useEffect, useState } from "react";
import { fetchData } from "./redux/items";
import { ReactSortable } from "react-sortablejs";


function App() {
  const data = useSelector((state) => [...state.items.value]);
  console.log(data);
  const [datalist, setDataList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    setDataList(data);
  }, [dispatch]) 

  
  return (
    <div className="mainContainer">
      <div className="container-xl">
        <Header />
        <AddItem />
        <div className="zzz">
          <ReactSortable list={datalist} setList={setDataList}>
            {data?.map((item) => {
              console.log(item);
              return <Item key={item.id} applied={item.applied} name={item.name} link={item.link} timeAdded={item.timeAdded}/>
            })}
          </ReactSortable>
        </div>
        <ApplicationList>
          {data.map(item => {
            return <Item key={item.id} applied={item.applied} name={item.name} link={item.link} timeAdded={item.timeAdded}/>
          })}
        </ApplicationList>
        <br />      
      </div>
    </div>
  );
}

export default App;
