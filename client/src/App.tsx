import { Outlet } from "react-router-dom";
import UseAuth from './hooks/UseAuth';
import { useEffect } from "react";

function App() {
  const {fetchUser} = UseAuth();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Outlet />
    </div>
  );
}

export default App;
