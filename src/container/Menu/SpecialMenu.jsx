import React from 'react';

 import { SubHeading,MenuItem } from '../../components';
import './SpecialMenu.css';
import { images,data } from '../../constants';
function SpecialMenu() {
return(
    <div className='app__specialMenu flex__center section__padding' id='menu'>
   <div className='app__specialMenu-title'>
     <SubHeading title="Menu that fits your pallet" />
     <h1 className='headtext__cormorant'>Today's Special</h1>
   </div>
  
  <div className='app__specialMenu-menu'>
   <div className='app__specialMenu-menu_wine flex__center'>
   <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
   <div className='app__specialMenu_menu_items'>
   {data.wines.map((wine,idx)=>(
    <MenuItem key={idx} title={wine.title} price={wine.price} tags={wine.tags} />
   ))}
   </div>
   </div>
  <div className='app__specialMenu-menu_img'>
  <img src={images.menu} alt="menu-img" />
  </div>

  <div className='app__specialMenu-menu_cocktails flex__center'>
   <p className='app__specialMenu_menu_heading'>Cocktails</p>
   <div className='app__specialMenu_menu_items'>
   {data.cocktails.map((cocktail,idx)=>(
    
    <MenuItem key={idx} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
   ))}
   </div>
   </div>
  </div>
  <div style={{margin:'15px'}}>
   <button className='custom__button' type='button'>View More</button>
  </div>
    </div>
)
}

export default SpecialMenu;
