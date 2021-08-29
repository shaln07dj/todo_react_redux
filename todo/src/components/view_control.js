import { alpha, makeStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

const  style=['radial-gradient(#1fe4f5, #3fbafe)',

'radial-gradient(#fbc1cc, #fa99b2)',

'radial-gradient(#76b2fe, #b69efe)',

'radial-gradient(#60efbc, #58d5c9)',

'radial-gradient(#f588d8, #c0a3e5)']

let color

function GFG_Fun() {

   color= style[Math.floor(Math.random() * style.length)];
   return color

} 


export default makeStyles((theme) => ({

add_btn:{
    '&:hover': {
      backgroundColor:'#aa00ff'
    },

}


}));


export{GFG_Fun}

