import Header from "components/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <p>footer</p>
    </React.Fragment>
  );
};

export default Layout;
