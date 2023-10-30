import React, { useContext } from 'react'
import { Context } from './context'
import { Card } from "react-bootstrap";



function Productdetails() {
    const { details }=useContext(Context)
    console.log(details)
  return (
    <div className='container'>
        <div>
        <Card className='w-50 col-md-6 m-3' >
                    <Card.Img src={details.image} />
                  
                        <Card.Body>
                        
                            <Card.Title>
                                {details.title}
                            </Card.Title>
                            <p>{details.description}</p>
                            <h3>{details.price}</h3>
                        </Card.Body>

                    </Card>

        </div>

      
    </div>
  )
}

export default Productdetails
