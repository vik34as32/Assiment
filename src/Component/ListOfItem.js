import React,{useEffect, useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getAllProducts } from "../core/actions/products-action";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
  const [inputValue,setinputValue]=useState("")
  const [suggestion,setsuggestion]=useState([])
  

  const addToWISHLIST=(data,index)=>{
    const items=[]
    const localStorageData =window.localStorage.getItem('wishtlist')
      debugger
    if(localStorageData==''){
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


const  numberOfItems = product.length>0?product.length:0
const numberOfPages = Math.ceil(numberOfItems / pageSize);


const handleInputChange =(event)=>{
    const inputValue =event.target.value
    setinputValue(inputValue)
    // Filter the suggestions based on the search query
    const filteredSuggestions = product.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  setsuggestion(filteredSuggestions);
  setProductOfList(filteredSuggestions)
}


const handleClickSuggestion=(data)=>{
  setinputValue(data.title)
  setsuggestion([])
}

const SuggestList =suggestion.map((data,index)=>{
    return(
      <li key={index} onClick={()=>{handleClickSuggestion(data)}}>{data.title}</li>
    )
})




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
      
             <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '120ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Search" variant="standard" value={inputValue}   onChange={handleInputChange} />
    </Box>
     {
      suggestion.length>0 &&
      <ul>
          {SuggestList}
      </ul>
     } 
 <br/><br/>

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