import HomeBar from "./Header/HomeBar";
import Content from "./Content/Content";
import Footer from "./FooterFolder/Footer";
import Container from "@mui/material/Container";
import { FilterdContext } from "./Context/FilterdContext";
import { useState } from "react";
function ToDoList() {
  const [filterdTaskesValue, setFilterdTaskesValue] = useState("not-completed");

  return (
    <FilterdContext.Provider
      value={{ filterdTaskesValue, setFilterdTaskesValue }}
    >
      <Container maxWidth="sm">
        <HomeBar />
        <Content />
        <Footer />
      </Container>
    </FilterdContext.Provider>
  );
}

export default ToDoList;
