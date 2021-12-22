import React from 'react';
import './profilePhotos.css';
import yasser from '../../Photoyasser.jpg'; 


function profilePhotos() {
    
  return(      
       <div>
       <img className="Photo" src={yasser} alt='image in the src folder'/>
       </div>     
        
    );
};

export default profilePhotos;