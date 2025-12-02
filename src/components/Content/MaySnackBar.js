import * as React from "react";

import Snackbar from "@mui/material/Snackbar";

export default function MySnackBar({ open, msg }) {
  return (
    <div>
      <Snackbar open={open} message={msg} />
    </div>
  );
}
