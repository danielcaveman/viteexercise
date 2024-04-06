import { RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { AuthContext } from "./contexts/AuthContext/AuthContext";
import { useState } from "react";
import { router } from "./configurations/Router";

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Header />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
