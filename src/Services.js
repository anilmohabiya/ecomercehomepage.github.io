import React from 'react';
import anil from './images/web6.jpg';
import women from './images/women.jpg'
import kid from './images/kid.jpg';
import bag from './images/bag.jpg';
import sport from './images/sport1.jpg';
import home from './images/home.jpg';
import anil8 from './images/anil8.jpg';
import anil9 from './images/anil9.jpg';


const Services=()=>{
    return(
        <>
         <div className="head text-center mt-2 ourteam">  
       </div>
    
       <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-block mx-auto mt-2">
                <figure className="figure">
                
                <img src={anil} className="figure-img img-fluid rounded-circle" style={{width:"5rem",height:"5rem" }}
               alt={anil}/>
               <figcaption>
                  
                   <p className="figure-caption">Mens Formal</p>
               </figcaption>
                </figure>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-block mx-auto mt-2">
                <figure className="figure">
                
                <img src={women} className="figure-img img-fluid rounded-circle" style={{width:"5rem",height:"5rem" }}
               alt={anil}/>
               <figcaption>
                  
                   <p className="figure-caption">womens Dress</p>
               </figcaption>
                </figure>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-block mx-auto mt-2">
                <figure className="figure">
                
                <img src={kid} className="figure-img img-fluid rounded-circle" style={{width:"5rem",height:"5rem" }}
               alt={anil}/>
               <figcaption>
                  
                   <p className="figure-caption">kids wear</p>
               </figcaption>
                </figure>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-block mx-auto mt-2">
                <figure className="figure">
                
                <img src={bag} className="figure-img img-fluid rounded-circle" style={{width:"5rem",height:"5rem" }}
               alt={anil}/>
               <figcaption>
                  
                   <p className="figure-caption">bags & Luggage</p>
               </figcaption>
                </figure>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-block mx-auto mt-2">
                <figure className="figure">
                
                <img src={sport} className="figure-img img-fluid rounded-circle" style={{width:"5rem",height:"5rem" }}
               alt={anil}/>
               <figcaption>
                  
                   <p className="figure-caption">Sport wear</p>
               </figcaption>
                </figure>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-block mx-auto mt-2">
                <figure className="figure">
                
                <img src={home} className="figure-img img-fluid rounded-circle" style={{width:"5rem",height:"5rem" }}
               alt={anil}/>
               <figcaption>
                  
                   <p className="figure-caption">Home & Furniture</p>
               </figcaption>
                </figure>
            </div>
             
   
            <div class="row">
          
          {/*right side div */} 
           <div class="col-md-6 col-12 main_header_right mt-4 align-items-center ">
 
           <div class="card bg-dark text-white">
  <img class="card-img" src={anil9} alt="Card " / >
  <div class="card-img-overlay">
    <h5 class="card-title mt-4 text-center">Card title</h5>
    <p class="card-text text-center mt-4">This is a wider card with supporting text below as a natural.</p>
  
  </div>
</div>
 
           </div>
           { /*left side div*/}
           <div class="col-md-6 col-12 main_header_left mt-2 align-items-center ">
           <div class="card bg-dark text-white mt-3">
  <img class="card-img" src={anil8} alt="Card "/>
  <div class="card-img-overlay">
    <h5 class="card-title text-center mt-2">Great Discount on</h5>
    <p class="card-text text-center mt-2">On new Product upt 50% OFF .</p>   
<div class="container">
  <div class="row">
    <div class="col text-center">
    <button type="button" class="btn btn-warning text-center">Shop now</button>
    
    </div>
  </div>
</div>
 
  </div>
</div>
           </div>
           </div>
          
     
        </>

    );
};

export default Services;