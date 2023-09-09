import "./css/out/App.css";
import Header from "./components/header";
import ApplicationList from "./components/applicationsList";
import Item from "./components/item";
import { useSelector, useDispatch } from 'react-redux'
import AddItem from "./components/addItem";
import { useEffect, useState } from "react";
import { fetchData, selectAllItems } from "./redux/items";
import { AddAndSearchBar } from "./components/addAndSearchBar";
import { useFirebaseAuth as useFirebaseAuthHook } from "./firebaseAuthHook";

function App() {
  const user = useFirebaseAuthHook();
  console.log(user);
  const data = useSelector(selectAllItems);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

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
        <AddAndSearchBar searchText={searchText} setSearchText={setSearchText}/>
        <AddItem/>
        <ApplicationList>
          {data
            .filter(item => {
              // Check if either jobTitle or companyName contains the searchText
              const title = item.jobTitle || item.name;  // Considering 'name' might be used as a fallback for jobTitle
              return (title?.toLocaleLowerCase() && title?.toLocaleLowerCase().includes(searchText?.toLocaleLowerCase())) || (item.companyName?.toLocaleLowerCase() && item.companyName?.toLocaleLowerCase().includes(searchText?.toLocaleLowerCase()));
            })
            .sort((a, b) => b.index - a.index)
            .map(item => {
              if (!item.jobTitle && item.name) {
                const modifiedItem = {
                  ...item,
                  jobTitle: item.name
                }
                delete modifiedItem.name;
                return <Item key={item.id} {...modifiedItem} />
              } else {
                return <Item key={item.id} {...item} />
              }
            })}
        </ApplicationList>

        <br />
      </div>
    </div>
  );
}

export default App;

