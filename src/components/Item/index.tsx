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
    id: number;
  };
  remove: (id: number) => void;
}

const Item: FunctionComponent<ItemProps> = ({ item, remove }) => {
  const classes = useStyles();

  const handleDeleteItem = (id: number) => {
    remove(id);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={item.title} className={classes.title} />
      <CardContent>
        <Typography>
          Diam sed ipsum invidunt lorem voluptua. Aliquyam magna aliquyam diam
          eirmod, aliquyam eirmod elitr at consetetur consetetur no, no no.
        </Typography>
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
