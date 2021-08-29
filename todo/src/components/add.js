import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";

import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";

import useStyles from "./view_control";
import { addTodos } from "../slice/todolist";
function Add() {
  const classes = useStyles();

  const [todoData, setTodoData] = useState({
    title: "",
    summary: "",
    date: "",
    current_date: "",
    id: "fjdfj5",
    dead_line: "",
    total: "",
  });

  const dispatch = useDispatch();
  let count = 0;

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    return result;
  }

  let current_date = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  let currentDate = formatDate(current_date);
  console.log(currentDate);

  const handleChange = (event) => {
    setTodoData({
      ...todoData,
      [event.target.name]: event.target.value,
      current_date: currentDate,
    });
  };
  const handleSubmit = () => {
    console.log("I got clicked");
    count = count + 1;
    setTodoData({ ...todoData, id: makeid(5) });
    console.log(todoData);
    dispatch(addTodos(todoData));
  };

  return (
    <div>
      <div className="addContainer">
        <TextField
          id="standard-full-width"
          label="Please Enter  Title"
          style={{ margin: 8 }}
          placeholder="Title"
          onChange={handleChange}
          name="title"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <div>
          <textarea
            className="form-control summary_style"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            name="summary"
            onChange={handleChange}
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
          <div>
            <input type="date" name="date" onChange={handleChange}></input>
          </div>
        </div>
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker">
  <input placeholder="Select date" type="text" id="example" class="form-control"/>
  <label for="example">Try me...</label>
  <i class="fas fa-calendar input-prefix" tabindex='0'></i>
</div>

        
        <button type="button" className="" onClick={handleSubmit}>
          Success
        </button>
      </div>
    </div>
  );
}

export default Add;
