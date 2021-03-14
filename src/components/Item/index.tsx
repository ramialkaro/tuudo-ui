import React, { FunctionComponent } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import apiFetch from "../../config/apiFetch";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(1.4),
  },
  title: {
    textAlign: "center",
  },
  btn: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export interface ItemProps {
  key: number;
  item: {
    title: string;
    description: string;
    status: any;
    id: number;
  };
}

const Item: FunctionComponent<ItemProps> = ({ item }) => {
  const classes = useStyles();
  const handleDeleteItem = (id: number) => {
    apiFetch
      .delete(`/api/todos/${id}`)
      .then((res) => res.status === 200 && console.log("done"))
      .catch((err) => console.error(err));
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={item.title} className={classes.title} />
      <CardContent>
        <Typography color="secondary">
          Status: {item.status.toLowerCase()}
        </Typography>
        <Typography>{item.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          className={classes.btn}
          variant="contained"
          onClick={() => handleDeleteItem(item.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
