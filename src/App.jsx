import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { SingUp } from "./components/sing-up/SignUp";
import { Login } from "./components/login/Login";
import { Panel } from "./components/panel/Panel";
import { Profile } from "./components/profile/Profile";
import { Requirements } from "./components/requirements/Requirements";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
