import React,{useEffect} from 'react'
import './Service.css'
import { Button } from "@material-ui/core"
import ServiceComp from './ServiceComp'
import { useStateValue } from '../../StateProvider'
import {db} from '../../firebase'

const Service = () => {
    const [{jobs},dispatch] = useStateValue()
    // const [jobs,setJobs]=use
    useEffect(() => {
      db.collection('Jobs').onSnapshot(snap=>{
        dispatch({
          type:"ADD_TO_JOBS",
          jobs:snap.docs.map(doc => ({
              id:doc.id,
              post:doc.data()}))
        })
      })
      return () => {
        
      }
    }, [])
    //  const[{jobs},dispatch] = useStateValue();
    return (
        <div className="service">
            <div className="service__info">
            <h1>Services</h1>
            <Button variant="outlined">Experience</Button>
                <Button variant="outlined">Category</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Location</Button>
                <Button variant="outlined">More filters</Button>
            </div>

             {
                jobs[0]?.map(job => (
                    <ServiceComp key={job.id}
                    img={job.post.image}
                location={job?.post.location}
                title={job?.post.title}
                description={job?.post.description}
                star={4.73}
                price={job?.post.price} >

                    </ServiceComp>
                ))
            } 
           
        </div>
    )
}

export default Service
