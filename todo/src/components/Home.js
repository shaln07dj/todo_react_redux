import React from 'react';

import Grid from '@material-ui/core/Grid';
import Add from './add';


import View from './view';
import Progress from './progress';


function Home() {
    return (
        <div>
            
         <Add/> 
         <div style={{marginLeft:"-100px"}}>   
<Grid container spacing={0}>

<Grid item xs={4}>
<View/>

   
     
        </Grid>
    
        <div style={{marginLeft:"-40px"}}> 
        <Grid item xs={4}>
        <Progress/>
        
        </Grid>
        </div>
        <div style={{marginLeft:"-60px"}}> 
        <Grid item xs={3}>
        <Progress/>
        
        </Grid>
        </div>


</Grid>
</div>


        </div>
    )
}

export default Home
