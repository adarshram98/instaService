import React, {useState} from 'react'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// } 
function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
const Home = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open,setOpen] = useState(false)
   
    // const login =() =>{
    //     if(user)
    // }
    
    const [{user}] = useStateValue();
    return (
        <div className="home">
            <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
       <div style={modalStyle} className={classes.paper}>
      <h3>Modalllll</h3>
      {/* <SimpleModal /> */}
    </div>
      </Modal>
            <img className="home__image" src="https://images.unsplash.com/photo-1533259588164-ccd44c690b85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBpbWFnZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            
            <div className="home__info">
            <div className="home__customer">
                <h1>Avail Service</h1>
                <p>Get work done in a zap</p>
                <form action="">
                    <h3 className="home__customerWork">Type Of work</h3>
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
                <Link to={!user && "/login"}>
                <button  className="home__businessLogin">Post a Job</button>
                </Link>
                {/* <button className="home__businessRegister">Register</button> */}
            </div>
            </div>
           {/* <Button onClick={()=> setOpen(true)}>Sign Up</Button> */}
        </div>
        
    )
}

export default Home
