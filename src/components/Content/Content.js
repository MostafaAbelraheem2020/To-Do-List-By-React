import ToDo from "./ToDo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { FilterdContext } from "../Context/FilterdContext";
import { MyToastContext } from "../Context/ToastContext";

// dialog ===>

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Content() {
  const { task, setTask } = useContext(MainContext);
  const [textInput, setTextInput] = useState("");
  const { filterdTaskesValue } = useContext(FilterdContext);
  const { MySnackBarHandle, setMasage } = useContext(MyToastContext);

  // dialog ===>
  const [toDo, setToDo] = useState({});
  const [UpdateDialog, setUpdateDialog] = useState(false);
  const [DeleteDialog, setDeleteDialog] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
    details: "",
  });

  const filterdTasks = useMemo(() => {
    if (filterdTaskesValue === "all") {
      return task;
    } else if (filterdTaskesValue === "Completed") {
      return task.filter((t) => t.completed);
    } else if (filterdTaskesValue === "not-completed") {
      return task.filter((t) => !t.completed);
    }
  }, [task, filterdTaskesValue]);

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem("storageTasks")) ?? [];
    setTask(storageTasks);
  }, []);
  function HandleAddTask() {
    if (textInput !== "") {
      const newTask = {
        id: uuidv4(),
        taskName: textInput,
        taskDetailes: "",
        completed: false,
      };
      const updatedTask = [...task, newTask];
      setTask(updatedTask);
      setMasage("New Task In Your List");
      MySnackBarHandle();
      setTextInput("");
      localStorage.setItem("storageTasks", JSON.stringify(updatedTask));
    }
  }
  // dialog Handlers
  // UpdatedDialog ====>
  function HandleUpdateDialog(toDdo) {
    setToDo(toDdo);
    setUpdateDialog(true);
  }
  function HandleCloseUpdateDialog() {
    setUpdateDialog(false);
  }

  function HandleUpdate() {
    if (updatedTask.title !== "" || updatedTask.details !== "") {
      const updated = task.map((t) => {
        if (t.id === toDo.id) {
          return {
            ...t,
            taskName: updatedTask.title !== "" ? updatedTask.title : t.taskName,
            taskDetailes:
              updatedTask.details !== "" ? updatedTask.details : t.taskDetailes,
            completed: false,
          };
        }

        return t;
      });
      setTask(updated);
      setUpdateDialog(false);
      localStorage.setItem("storageTasks", JSON.stringify(updated));
      setUpdatedTask({ title: "", details: "" });

      if (toDo.taskName !== updatedTask.title && updatedTask.title !== "") {
        setMasage("Task Name  Updated");
      }
      if (
        toDo.taskDetailes !== updatedTask.details &&
        updatedTask.details !== ""
      ) {
        setMasage("Task Details  Updated");
      }
      MySnackBarHandle();
    }
  }
  // delete dialog ===>
  function HandleDeleteDialog(toDdo) {
    setToDo(toDdo);
    setDeleteDialog(true);
  }
  function HandleCloseDialog() {
    setDeleteDialog(false);
  }
  function HandleDeleteTask() {
    const filterdTaskes = task.filter((t) => {
      return t.id !== toDo.id;
    });
    setTask(filterdTaskes);
    localStorage.setItem("storageTasks", JSON.stringify(filterdTaskes));
    setDeleteDialog(false);
    setMasage("Task Deleted");
    MySnackBarHandle();
  }
  // main content jsx Ui ===>
  const Tasks = useMemo(() => {
    return filterdTasks.map((task) => (
      <ToDo
        key={task.id}
        toDo={task}
        updateDialogFn={HandleUpdateDialog}
        deleteDialogFn={HandleDeleteDialog}
      />
    ));
  }, [filterdTasks]);

  return (
    <>
      {" "}
      {/* UpdatedDialog ====>  */}
      <Dialog
        open={UpdateDialog}
        onClose={HandleCloseUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit ... "}</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="standard-basic"
            style={{ fontWeight: "bold" }}
            label="Task Name"
            value={updatedTask.title}
            variant="standard"
            onChange={(e) => {
              setUpdatedTask({ ...updatedTask, title: e.target.value });
            }}
          />
          <TextField
            id="standard-basic"
            label="Task Detailes"
            variant="standard"
            value={updatedTask.details}
            onChange={(d) => {
              setUpdatedTask({
                ...updatedTask,
                details: d.target.value,
              });
            }}
          />
          <DialogTitle
            style={{
              fontSize: "12px",
              color: "rgb(156, 48, 48)",
              padding: "10px 5px ",
              marginTop: "5px",
            }}
            id="alert-dialog-"
          >
            {"Warning: Changes cannot be undone !! "}
          </DialogTitle>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={HandleCloseUpdateDialog}
            style={{ color: "rgba(0, 0, 0, 0.54)" }}
          >
            Back
          </Button>
          <Button
            autoFocus
            color="primary"
            style={{ fontWeight: "bold" }}
            onClick={HandleUpdate}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* <==== UpdatedDialog   */}
      {/* DeletedDialog ====>  */}
      <Dialog
        open={DeleteDialog}
        onClose={HandleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do You Want To Delete This Task ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You cannot undo this action .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={HandleCloseDialog}>Close</Button>
          <Button
            autoFocus
            style={{ color: "rgb(156, 48, 48)", fontWeight: "bold" }}
            onClick={HandleDeleteTask}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* <==== DeletedDialog   */}
      <div
        className="ContentDev"
        style={{
          padding: "5px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          flex: 1,
          justifyContent: "space-between",
          border: "1px solid #eee",
        }}
      >
        <div style={{ width: "100%" }}>{Tasks}</div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            padding: "10px",
          }}
        >
          <TextField
            id="outlined-search"
            label="Type your task here"
            type="search"
            style={{ flex: 1 }}
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
          />
          <Button
            style={{ width: "15%", fontWeight: "bold", fontSize: "1.2rem" }}
            variant="contained"
            onClick={HandleAddTask}
            disabled={textInput === ""}
          >
            Add
          </Button>
        </div>
      </div>
    </>
  );
}

export default Content;
