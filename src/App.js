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
import { getUser } from "./db/users";
import axios from "axios";
import { getUserMetadata, setUserMetaData } from "./redux/user";
import NewUserCreationModal from "./components/newUserCreationModal";
import LoadingScreen from "./components/loadingScreen";

const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

function App() {
  const user = useFirebaseAuthHook();
  const data = useSelector(selectAllItems);
  const user_metadata = useSelector(getUserMetadata);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [showNewAccountCreationModal, setShowNewAccountCreationModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (user && (isEmptyObject(user_metadata) || !user_metadata)) {
      console.log('User metadata fetch initiated.');
      user.getIdToken().then((token) => {
        getUser(token).then(res => {
          if (res.redirectToNewUserSetup) {
            setShowNewAccountCreationModal(true);
            setLoading(false);
          } else {
            console.log("User fetch successful!");
            dispatch(setUserMetaData(res.user));
            setLoading(false);
          }
        }).catch(e => {
          console.log(e);
        });
      });
    } else if (!isEmptyObject(user_metadata)) {
      console.log('Fetched user from redux state.');
      setLoading(false);
    }
  }, [user, user_metadata]);

  useEffect(() => {
    // dispatch(fetchData()).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="mainContainer">
      {showNewAccountCreationModal ?
        <NewUserCreationModal user={user} setShowNewAccountCreationModal={setShowNewAccountCreationModal} />
        :
        <div className="">
          <Header />
          <AddAndSearchBar searchText={searchText} setSearchText={setSearchText} />
          <AddItem />
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
      }
    </div>
  );
}

export default App;

