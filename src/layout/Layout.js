import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({children}) => {
  return (
    <div className="applayout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
