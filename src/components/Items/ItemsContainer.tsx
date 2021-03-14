import React, { FunctionComponent, useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "../Item";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

interface Props {
  todos:any[]
}

const ItemsContainer: React.FC<Props> = ({todos}) => {
  const [state, setState] = useState<any>([]);
  const classes = useStyles();

  useEffect(() => {
    setState([
      { id:1, title: "item 1 " },
      { id:2, title: "item 2 " },
      { id:3, title: "item 3 " },
      { id:4, title: "item 4 " },
      { id:5, title: "item 5 " },
      { id:6, title: "item 6 " },
    ]);
  }, []);

  const handleDeleteItem = (id:number)=>{
    console.log("testing")
    setState(state.filter((item:any) => item.id !== id))
  }

  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        {todos.map((item:any ) => (
          <Item key={item.id} item={item} remove={handleDeleteItem}/>
        ))}
      </Grid>
    </Container>
  );
};

export default ItemsContainer;
