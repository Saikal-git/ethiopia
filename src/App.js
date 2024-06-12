import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import AdminCreate from "./components/AdminCreate";
import Category from "./components/Category";
import Basket from "./components/Basket";
import CategoryChange from "./components/CategoryChange";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AdminCreate />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category/:proTitle" element={<CategoryChange />} />
      </Routes>
    </div>
  );
}

export default App;
