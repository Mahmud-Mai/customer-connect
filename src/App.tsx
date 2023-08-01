import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Conversations from "./pages/Conversations";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

function App(): JSX.Element {
  return (
    <div className="flex w-full h-full m-0 bg-main">
      <BrowserRouter>
        <Sidebar />
        <div className="relative basis-[79.44% border w-full h-screen">
          <TopNav />
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/orders"
              element={<Orders />}
            />
            <Route
              path="/customers"
              element={<Customers />}
            />
            <Route
              path="/inventory"
              element={<Inventory />}
            />
            <Route
              path="/conversations"
              element={<Conversations />}
            />
            <Route
              path="/settings"
              element={<Settings />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
