import React, { FunctionComponent, useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "../Item";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
  },
}));

interface Props {
  todos:any[]
}

const ItemsContainer: React.FC<Props> = ({todos}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <Grid container justify="center">
        {todos.map((item:any ) => (
          <Item key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default ItemsContainer;
