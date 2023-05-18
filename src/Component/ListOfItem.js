import React,{useEffect, useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getAllProducts } from "../core/actions/products-action";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";



const classes = {
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue"
  }
};


const ListOfItem =()=>{
  const dispatch = useDispatch();
  const { product, error, loading }= useSelector((state) => { return state.Product });
  const [ProductOfList,setProductOfList] =useState([])




  console.log(ProductOfList)

  const addToWISHLIST=(data,index)=>{
    const itemdata =JSON.stringify(data)
    window.localStorage.setItem(index,itemdata)
  }


  const Pagination=()=>{
    const pageSize = 9;
    const startIndex = (1 - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const ProductData=product.slice(startIndex, endIndex)
    setProductOfList(ProductData)
  }



  useEffect(()=>{
      dispatch(getAllProducts());
  },[]);

  useEffect(()=>{
    if(product.length>0){
      Pagination()
    }

  },[product])

    return(
      <>
        <div style={classes.root}>
          <Grid container spacing={2}>
            {
              ProductOfList.length > 0 ?
                ProductOfList.map((item, index) => {
                  return (
                    <>
                      <Grid item xs={4} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            height="194"
                            image={item.thumbnail}
                            alt="Paella dish"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {item.title}
                            </Typography>

                            <Typography gutterBottom variant="h5" component="div">
                              Price: {item.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </CardContent>
                          <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                              <Button onClick={()=>{addToWISHLIST(item,index)}}>WISHLIST</Button>
                            </IconButton>
                          </CardActions>
                        </Card>
                      </Grid>
                    </>
                  )
                }) :
                <h1>No Data</h1>
            }
          </Grid>
        </div>

      </>
    )
}

export default ListOfItem