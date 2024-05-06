import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white bg-[#242424] p-5 md:p-10 lg:p-15 xl:p-20">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
