import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { categorizeIngredients } from '../util/CategorizeIngredients';
import { addItemToCart } from '../State/Cart/Action';
import { useDispatch } from 'react-redux';


// const ingredients = [{
//     category:"protien",
//     ingredients:["egg", "chicken", "mutton"]
// },
// {
//     category:"vegetables",
//     ingredients:["onion", "cabbage", "tomato"]
// },
// ]

const MenuCard = ({item}) => {
  const dispatch = useDispatch();
const [selectedIngredients, setSelectedIngredients] = useState([])
const handleItemAddToCart = (e) =>{
  e.preventDefault();
  const reqData = {jwt:localStorage.getItem("jwt"),
    cartItem:{
      foodId:item.id,
      quantity:1,
      ingredients:selectedIngredients
    }
  }
  dispatch(addItemToCart(reqData));
  console.log("menu card Data",reqData)
  setSelectedIngredients([])
}
const handleCheckBoxChange=(itemName)=>{
        if(selectedIngredients.includes(itemName)){
          setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName))
        }
        else{
          setSelectedIngredients([...selectedIngredients, itemName])
        }
        console.log("menu card",itemName);
    }
  return (
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5 ">
                <img src={item.images[0]} alt="" className='w-[7rem] h-[7rem] object-cover'/>
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>
                         {item.name}
                    </p>
                   <p>
                    Rupee:{item.price}
                   </p>
                   <p className='text-gray-00'>
                    {item.description}
                   </p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
         <form onSubmit={handleItemAddToCart}>
            <div className="flex gap-5 flex-wrap">
                {
                    Object.keys(categorizeIngredients(item.ingredients)).map((category) => {
                       return(
                        <div><p>{category}</p>
                        <FormGroup>
                            {
                          categorizeIngredients(item.ingredients)[category].map((item) => 
                          <FormControlLabel ket={item.id} control={
                          <Checkbox  onChange={()=>handleCheckBoxChange(item.name)}
                           name="ingredient" /> } label={item.name} />)
                          }
                        </FormGroup>
                        </div>
                       )
                    })
                }
            </div>
            <div className="">
             <div className="pt-5">
                <Button type="submit" variant='contained' disabled={false}>
                    {item.available?"Add to cart":"Out of stock"}
                </Button>
             </div>
            </div>
         </form>
        </AccordionDetails>
      </Accordion>

  )
}

export default MenuCard
