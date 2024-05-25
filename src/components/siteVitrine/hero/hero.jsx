import React from "react";

const Hero = () => {
    return ( 
        <>
<header class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br/> your <span class="text-blue-500 ">destination</span></h1>
                    
                    <p class="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"/>
            </div>
        </div>
        
    </div>
    <div className="absolute bottom-20 w-full">
        <div className=" bg-white w-11/12 xl:w-4/5 m-auto grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
        <div className=" flex flex-col space-y-2 ">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder="USA" className="outline-0 text-xs"/>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="property">what do you search?</label>
          <input type="text" placeholder="property" className="outline-0 text-xs"/>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="price">Nb Guest</label>
          <input type="number" placeholder="1" className="outline-0 text-xs"/>
        </div>
        <div>
          <button className="bg-blue-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full text-white">Search</button>
        </div>
        </div>
       
      </div>
</header>
</>
     );
}
 
export default Hero;


/* */

