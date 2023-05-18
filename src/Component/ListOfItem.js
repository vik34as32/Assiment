import React,{useEffect, useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getAllProducts } from "../core/actions/products-action";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


// const SeracBox=()=>{
//   return(
//     <>
//     <div className='container'>
//       <div className='input-wrap'>
//         <i className="fas fa-search"></i>
//         <label 
//           for="product-search" 
//           id="input-label"
//         >
//           Product Search
//         </label>
//         <input 
//           type="text" 
//           name="product-search" 
//           id="product-search" 
//           placeholder="Search Products"
//         />
//         <i 
       
//           className="fas fa-times"
//         ></i>
//       </div>
//     </div>
//     </>
//   )
// }



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
const pageSize = 9;


  const dispatch = useDispatch();
  const { product, error, loading }= useSelector((state) => { return state.Product });
  const [ProductOfList,setProductOfList] =useState([])
  window.localStorage.setItem('wishtlist','')

  const addToWISHLIST=(data,index)=>{
    const items=[]
    const localStorageData =window.localStorage.getItem('wishtlist')

    if(localStorageData===''){
        items.push(data)
        const jsonData = JSON.stringify(items);
        window.localStorage.setItem('wishtlist', jsonData);
    }else{
          const parsedData = JSON.parse(localStorageData);
          items.push(...parsedData);
          items.push(data)
          const jsonData = JSON.stringify(items);
          window.localStorage.setItem('wishtlist', jsonData);
    }  
  }


  const Pagination=(page)=>{
    let startIndex = (page -1) * pageSize;
    let endIndex = startIndex + pageSize;
    const ProductData=product.slice(startIndex, endIndex)
    setProductOfList(ProductData)
  }


//  const calculatePagesCount =(totalCount,pageSize)=>{
//   return count = totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
//  } 
const  numberOfItems = product.length>0?product.length:0
const numberOfPages = Math.ceil(numberOfItems / pageSize);



  useEffect(()=>{
      dispatch(getAllProducts());
  },[]);

  useEffect(()=>{
    if(product.length>0){
      Pagination(1)
     
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
            {
              Array.from({ length: numberOfPages },(_, index)=>{
               
                 return  <Button  onClick={()=>{Pagination(index+1)}}>{index+1}</Button>
              })
            }
          </Grid>
         
        </div> 
      
      </>
    )
}

export default ListOfItem