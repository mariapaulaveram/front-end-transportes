
import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return(
      
        <div className="novedad"> 
            <h1>{title}</h1>  
            <hr/>
            <h4>{subtitle}</h4>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{__html:body}} />
        </div>
    );
}
export default NovedadItem;