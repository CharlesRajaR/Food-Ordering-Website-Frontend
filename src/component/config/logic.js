export const isPresentInFavorite = (favorites, restaurants )=>{
    for(let item of favorites){
      if(restaurants.id === item.id){
        return true;
      }
    }
    return false;
}