import React from "react";
import { Paper, Button } from "@mui/material";

function Item({ item, key }) {
  return (
    <Paper>
      <img src={item.src} alt="src" />
    </Paper>
  );
}

export default Item;
