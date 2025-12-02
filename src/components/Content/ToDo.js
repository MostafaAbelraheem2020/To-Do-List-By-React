import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { MyToastContext } from "../Context/ToastContext";
function ToDo({ toDo, updateDialogFn, deleteDialogFn }) {
  const { task, setTask } = useContext(MainContext);
  const { MySnackBarHandle, setMasage } = useContext(MyToastContext);

  // Event Handleer ===>
  function HandleTaskComplete() {
    const completed = task.map((t) => {
      if (t.id === toDo.id) {
        t.completed = !t.completed;
        if (t.completed) {
          setMasage("Task Completed");
        } else {
          setMasage("Task Not Completed");
        }
      }
      return t;
    });
    setTask(completed);

    MySnackBarHandle();
    localStorage.setItem("storageTasks", JSON.stringify(completed));
  }

  function HandleUpdateDialog() {
    updateDialogFn(toDo);
  }
  function HandleDeleteDialog() {
    deleteDialogFn(toDo);
  }

  // <===== Event Handleer
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#eee",
          minHeight: "80px",
          padding: " 10px",
          marginTop: "5px",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          border: "1px solid #ddd",
          borderRadius: "3px",
        }}
      >
        <div style={{ maxWidth: "69%", height: "100%" }}>
          <h3
            style={{
              margin: "0",
              overflowWrap: "break-word",
              color: "#7c3b87",
              textDecoration: toDo.completed ? "line-through" : "none",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {toDo.taskName}
          </h3>
          <p
            style={{
              margin: "0",
              overflowWrap: "break-word",
              color: toDo.completed ? "#d2caca" : "#5f6268",
              paddingLeft: "5px",
            }}
          >
            {toDo.taskDetailes}
          </p>
        </div>

        <Stack
          className="iconsStack"
          spacing={1}
          style={{
            maxWidth: "35%",
            textAlign: "center",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton
            className="icons"
            color="primary"
            aria-label="Checed"
            style={{
              margin: "0",
              height: "fit-content",
              color: toDo.completed ? "green" : "",
              padding: toDo.completed ? "" : "1px",
            }}
            onClick={HandleTaskComplete}
          >
            <PlaylistAddCheckCircleIcon style={{ fontSize: "24px" }} />
          </IconButton>
          <IconButton
            className="icons"
            color="secondary"
            aria-label="add an alarm"
            style={{ margin: "0" }}
            onClick={HandleUpdateDialog}
          >
            <BorderColorIcon style={{ fontSize: "24px" }} />
          </IconButton>
          <IconButton
            className="icons deleteBtn"
            aria-label="delete"
            style={{ margin: "0" }}
            onClick={() => {
              HandleDeleteDialog();
            }}
          >
            <DeleteForeverIcon style={{ fontSize: "24px" }} />
          </IconButton>
        </Stack>
      </div>
    </>
  );
}

export default ToDo;
