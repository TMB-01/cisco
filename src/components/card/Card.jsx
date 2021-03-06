import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import { addShops } from "../../actions";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "97%",
    },
  },
}));

const Card = (props) => {
  const classes = useStyles();
  const [postImage, setPostImage] = useState(null);
  const handleChange = (e) => {
    console.log(e.target);
    if (e.target.name === "image") {
      setPostImage(e.target.files[0]);
      console.log(e.target.files);
    }
  };

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const fd = new FormData();
    fd.append("photo", postImage);
    fd.append("shopName", data.shopName);
    fd.append("description", data.description);
    fd.append("number", data.number);
    fd.append("url", data.url);
    fd.append("location", data.location);
    props.addShops(fd);
  };

  return (
    <Paper className={classes.root} elevation={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          defaultValue=""
          name="shopName"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Наименование точки"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="url"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="URL-ссылка на сайт партнера"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="location"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Адрес"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="number"
          render={({ field }) => (
            <TextField
              id="filled-helperText"
              label="Телефон"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="description"
          render={({ field }) => (
            <TextareaAutosize
              id="filled-helperText"
              fullWidth
              name="description"
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Описание"
              style={{ width: "97%", resize: "none" }}
              label="Наименование точки"
              helperText="Введите новый текст"
              {...field}
            />
          )}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          {props.BtnText}
        </Button>
      </form>
    </Paper>
  );
};

export default connect(null, { addShops })(Card);
