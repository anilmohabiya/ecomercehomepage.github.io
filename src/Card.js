import React from 'react';

const Card =(props)=>{

    return(
        <>
    <div className="col-md-4 col-12 mx-auto ">
    <div className="card" >
    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
    <div className="card-body">
    <h5 className="card-title font font-weight-bold">{props.title}</h5>
    <p className="card-title font  font-weight-bold">{props.rating}</p>
    <p>250 BDH</p>
  </div>
</div>
    </div>            
        </>

        
    );
};
export default Card;