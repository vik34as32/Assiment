import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";


const Wishtlist =()=>{
    const [Wishtlist,setWishList]=useState([])
    const localStorageData =window.localStorage.getItem('wishtlist')

    
    const removeToWihsList=(data)=>{
        const localStorageData = Wishtlist.flat().filter(item =>item.id !== data.id);
        window.localStorage.removeItem('wishtlist')
        const localdata =JSON.stringify(localStorageData)
        window.localStorage.setItem('wishtlist',localdata)
    }
    useEffect(()=>{
        if (localStorageData !== '') {
            const MyWishList = JSON.parse(localStorageData);
            setWishList(prevWishlist => [...prevWishlist, MyWishList]);
          }
        
    },[])

    return(
        <>
            <Grid container spacing={2}>
                {
                    Wishtlist.length>0?
                    Wishtlist.flat().map((item,index)=>{
                        return(
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
                              <Button onClick={()=>{removeToWihsList(item,index)}}> Remove WISHLIST</Button>
                            </IconButton>
                          </CardActions>
                        </Card>
                      </Grid>
                            </>
                        )
                    }):<h5>Loading..................</h5>
                   
                 
                }
            </Grid>
        </>
    )
}


export default  Wishtlist