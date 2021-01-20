import React from 'react';
import anil9 from './images/anil8.jpg';
import jaket from './images/jacket.jpg';
import beans from './images/beans.jpg';
import sky from './images/sky.jpg';
import camera from './images/camera.jpg'
import blazer from './images/blazer2.jpg';
import mulfoot from './images/mulfoot2.jpg';
import nikesport from './images/nikesport.jpg';
import bb from './images/bb2.jpg';
import blue from './images/blue1.jpg';
const Material =()=>{
    return(
        <>
           
{/*Our Team */}
    <section className="ourteam">
        <div className="container text-center mt-3 ">
        <h3 style={{fontWeight:"bold", color:"Green"}}>Trending Product</h3>
            <div className='row'>
            
 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={jaket} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p>Levi's <br/>40% OFF</p></figcaption>
  
</figure>
 </div>
            
 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={beans} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p>Beans Bags<br/>10% OFF</p></figcaption>
</figure>
 </div>

 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={sky} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p>Skybegs <br/>20% OFF </p></figcaption>
</figure>
 </div>

 <div className ="col-md-3 col-3">
 <figure class="figure">
  <img src={camera} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p>Camera <br/>40% OFF</p></figcaption>
</figure>
 </div>
            </div>

            <div className='row'>
            
 <div className ="col-md-4 col-4 mt-2">
 <figure class="figure">
 <p style={{fontWeight:"bold",color:"blue"}}>Flash</p>
  <img src={blazer} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption">
 <p style={{fontWeight:"bold",color:"red"}}>50% OFF</p></figcaption>
  
</figure>
 </div>
 <div className ="col-md-4 col-4 mt-2">

 <figure class="figure">
 <p style={{fontWeight:"bold",color:"blue"}}>Crocs</p>
  <img src={mulfoot} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p style={{fontWeight:"bold",color:"red"}}>70% OFF</p></figcaption>
  
</figure>
 </div>
 <div className ="col-md-4 col-4 mt-2">
 <figure class="figure">

 <p style={{fontWeight:"bold",color:"blue"}}>Nike</p>
  <img src={nikesport} class="figure-img img-fluid rounded" alt={anil9}/>
  <figcaption class="figure-caption"><p style={{fontWeight:"bold",color:"red"}}>30% OFF</p></figcaption>
  
</figure>
 </div>
           
        </div>

        <div class="row">
          
          {/*right side div */} 
           <div class="col-md-6 col-12 main_header_right mt-3">
 
           <div class="card bg-dark text-white">
  <img class="card-img" src={blue} alt="Card " / >
  <div class="card-img-overlay">
    <h5 class="card-title mt-3 text-center">SALE AND DISSCOUNT</h5>
    <p class="card-text text-center mt-3">ADVERTISEMENT</p>
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
           { /*left side div*/}
           <div class="col-md-6 col-12 main_header_left mt-2 ">
           <div class="card bg-dark text-white mt-3">
  <img class="card-img" src={bb} alt="Card "/>
 
</div>
           </div>
           </div>
        </div>
    </section>

        </>
    );
};
export default Material;
