import './App.css'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main.jsx";
import CreateUser from "./pages/CreateUser/CreateUser.jsx";
import EditUser from "./pages/EditUser/EditUser.jsx";
import { Box } from "@mui/material";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
// import Admins from "./pages/Admins/Admins.jsx";

function App() {
  return (
    <div className="App">
      <Box>
        <Sidebar />
        <Box sx={{ paddingLeft: "60px" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            {/*<Route path="/admins/" element={<Admins />} />*/}
            <Route path="/create-user/" element={<CreateUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="*" element={<p>Path not resolved</p>} />
          </Routes>
        </Box>
      </Box>
    </div>
  )
}

export default App
