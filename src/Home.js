import React from 'react';

import Footer from './Footer';
import Services from './Services';

import foot1 from './images/foot1.jpg';
import foot2 from './images/foot2.jpg';
import foot3 from './images/foot3.jpg';
import Product from './Product';
import Material from './Material';

const Home =()=>{
    return(
        <>
      {/* main header */}
    <div class="container-fluid main_header">
      <div class="row">
       <div class="col-md-10 col-12 mx-auto">

        <div class="row">
          
         {/*right side div */} 
        {/*right side div */} 
        <div class="col-md-6 col-12 main_header_right">

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={foot1} class=" w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={foot2} class=" w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={foot3} class=" w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>
          { /*left side div*/}
          <div class="col-md-6 col-12 main_header_left mt-2 ">
         <h2>Sales upto 31st January</h2><br/>
             <h3 >CASUAL SPORT SHOES</h3>
         
             <p>Enjoy the world of shopping online</p>
     
             <button type="button" class="btn btn-secondary">50% OFF</button>
            
          </div>
          {/* our services*/ }
              <Services/>
     {/* OUR TEAM */}
         <Material/>

    {/* contact form */}

    <section className="Contact us">
        <div className="container text-center">
           
            <div className='row'>
            <Product/>
            </div>     
      </div>
      </section>
     
    
        </div>   
      </div>
      <Footer/>
    </div>
</div>



        </>
    )
}

export default Home;