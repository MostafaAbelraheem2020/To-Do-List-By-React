// App Bar UI

import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import MyAvatar from "./myAvatar";
import { Link } from "react-router-dom";
import { FilterdContext } from "../Context/FilterdContext";

export default function HomeBar() {
  const { filterdTaskesValue, setFilterdTaskesValue } =
    useContext(FilterdContext);
  return (
    <AppBar position="sticky" sx={{ width: "100% !important" }}>
      <Container sx={{ marginBottom: "0" }}>
        <Toolbar
          className="appBarC"
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: "86px",
            paddingBottom: "5px",
            backgroundColor: "#357dc4",

            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "3px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              My To Do List
            </Typography>
            <MyAvatar />
          </div>
          <Stack
            className="appBarBtnsStack"
            spacing={1}
            direction="row"
            sx={{
              alignSelf: { xs: "center", sm: "center" },

              flexWrap: { xs: "wrap", sm: "nowrap" },
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: { xs: "10px", sm: "10px" },
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "white",
                backgroundColor:
                  filterdTaskesValue === "Completed" ? "#2196F3" : "#625656",
                padding: "15px !important",
                fontSize: "16px !important",
                height: "25px",
                margin: { xs: "5px 0", sm: "0" },
              }}
              onClick={() => {
                setFilterdTaskesValue("Completed");
              }}
            >
              Completed
            </Button>
            <Link to="/home">
              <Button
                variant="text"
                sx={{
                  backgroundColor:
                    filterdTaskesValue === "not-completed"
                      ? "#2196F3"
                      : "#625656",
                  color: "white",
                  padding: "15px !important",
                  fontSize: "16px !important",
                  height: "25px",
                  margin: "0",
                }}
                style={{}}
                onClick={() => {
                  setFilterdTaskesValue("not-completed");
                }}
              >
                To do
              </Button>
            </Link>
            <Button
              variant="text"
              sx={{
                backgroundColor:
                  filterdTaskesValue === "all" ? "#2196F3" : "#625656",
                color: "white",
                padding: "15px !important",
                fontSize: "16px !important",
                height: "25px",
                margin: "0",
              }}
              onClick={() => {
                setFilterdTaskesValue("all");
              }}
            >
              All tasks
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
