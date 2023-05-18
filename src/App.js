import FavouriteItem from "./Component/FavouriteItem";
import ListOfItem from "./Component/ListOfItem";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ListOfItem />} />
        <Route path="/my-favorite" element={<FavouriteItem />} />
      </Routes>
    </>
  );
}

export default App;
