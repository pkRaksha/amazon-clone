import React from "react"
import  "./Home.css"
import Product from "./Product"

function Home()
{
    return (
        
        <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg">

            </img>
            <div className="home_row">
                <Product
                title="The lean startup"
                price="29.99"
                image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
                rating ={5}/>
                <Product
                title="The Kendwood mixer"
                price="4.24"
                image="http://images.standmixer.biz/l-m/electric-food-stand-mixer-6-speed-4-N8jeZ6RyPwC_Iw-v-2874001904.jpg"
                rating ={5}/>
            </div>
            <div className="home_row">
                <Product
                title="Resin chains"
                price="45.67"
                image="https://tse4.mm.bing.net/th?id=OIP.VzqFOA1e_qyWqriJm0Ef5QHaHa&pid=Api&P=0&w=300&h=300"
                rating ={1}/>
                <Product
                title="Redmi mobile"
                price="29.56"
                image="https://www.eezepc.com/wp-content/uploads/2020/07/Redmi-Note-9-Pro-Tropical-Green-7.jpg"
                rating ={2}/>
                <Product
                title="Trendy tops slim fit sleeves"
                price="57.9"
                image="https://tse4.mm.bing.net/th?id=OIP.1hjgNvh1E1TVIjZE68FxPQHaJ4&pid=Api&P=0&w=300&h=300"
                rating ={3}/>
            </div>
            <div className="home_row">
                <Product
                title="N94 masks protection 100%"
                price="10.96"
                image="https://n3.sdlcdn.com/imgs/j/e/5/NP-N95-MASK-PACK-OF-SDL580468259-6-77a72.jpg"
                rating ={4}/>
               
            </div>
            
        </div>
        </div>
    )
}

export default Home;
