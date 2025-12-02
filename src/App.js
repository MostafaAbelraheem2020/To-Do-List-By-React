import "./App.css";
import ToDoList from "./components/ToDoList";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/themes";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { MainContext } from "./components/Context/MainContext";
import MySnackBar from "./components/Content/MaySnackBar";
import { MyToastContext } from "./components/Context/ToastContext";
function App() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [masage, setMasage] = useState("");

  function MySnackBarHandle() {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MainContext.Provider value={{ task, setTask }}>
          <MyToastContext.Provider value={{ MySnackBarHandle, setMasage }}>
            <MySnackBar open={open} msg={masage} />
            <ToDoList />
          </MyToastContext.Provider>
        </MainContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
