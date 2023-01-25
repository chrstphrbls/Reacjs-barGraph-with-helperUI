
import Button from '@mui/material/Button';
import { useState } from "react";

const ShowGraphButton = () =>{
  const [isShowBar,set_isShowBar] = useState(true);

 const HandleClick = () => {
   if(isShowBar){
    document.getElementById('BarChart').style.display = 'none';
    set_isShowBar(false)
   }
   if(!isShowBar){
    document.getElementById('BarChart').style.display = 'inline';
    set_isShowBar(true)
   }
 }
  return <Button variant="text" onClick={HandleClick}> Show/Hide Graph </Button>
}
export default ShowGraphButton;