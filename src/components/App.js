import Discussion from "./Discussion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../layout/Layout";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewComment from "./NewComment";

const App = () => {
  return (
    <BrowserRouter>
       <Layout>
        <Routes>
          <Route path="homepage" element={<HomePage/>}/>
          <Route path="newcomment" element={<NewComment/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
