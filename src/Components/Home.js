import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://images.unsplash.com/photo-1533259588164-ccd44c690b85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBpbWFnZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            
            <div className="home__info">
            <div className="home__customer">
                <h1>Avail Service</h1>
                <p>Get work done in a zap</p>
                <form action="">
                    <h3>Type Of work</h3>
                    <input placeholder="Search for services,contracts" type="text"/>
                    <h3>Price Estimate</h3>
                    <input placeholder="Price Estimate" type="text"/>
                    
                </form>
                <button>Get Quotes</button>
            </div>
            <div className="home__business">
                <div className="home_businessInfo">
                <h1>Do Business</h1>
                <p>Provide Service</p>
                </div>
                <button className="home__businessLogin">Login</button>
                <button className="home__businessRegister">Register</button>
            </div>
            </div>
           
        </div>
        
    )
}

export default Home
