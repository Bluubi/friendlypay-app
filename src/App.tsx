import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <h1> Welcome to Friendly App </h1>
      <Outlet />
    </>
  );
};

export default App;
