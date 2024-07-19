import { Grid } from '@mui/material'
import React from 'react'
import IngredientTable from './IngredientTable'
import IngredientCategoryTable from './IngredientCategoryTable'

const Ingredients = () => {
  return (
    <div className='px-1'>
      <Grid container>
         <Grid item xs={12} lg={8} className='p-1'>
            <IngredientTable/>
         </Grid>
         <Grid item xs={12} lg={4} className='p-1'>
            <IngredientCategoryTable/>
         </Grid>
      </Grid>
    </div>
  )
}

export default Ingredients
