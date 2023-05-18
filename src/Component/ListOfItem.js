import React, { useEffect }  from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem'
import { useDispatch,useSelector } from "react-redux";
import {getAllProducts} from '../core/actions/actions'
 
const ListOfh1 =()=>{
  const dispatch = useDispatch();


  useEffect(()=>{
      dispatch(getAllProducts())
  },[])
    return(
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
    )
}

export default ListOfh1