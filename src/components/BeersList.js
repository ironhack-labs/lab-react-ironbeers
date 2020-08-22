import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default function BeersList(props) {
    let beersStyle ={ 
        width: '23rem',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        textAlign: 'center', 
        margin: '20px',
        padding: '5px'
    }

    return (
        <div>
            <Link to={'/home'}><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' width ='100%'/></Link>
            <input onChange={props.onFilter} style={{marginLeft: '20px', width:'300px', fontSize: '12px'}} type='text' placeholder ='Type here the name of the beer you are looking for'/>
           {
            props.beers.map((beer,i)=>{
                  return (
                    <Link key= {i} to={`/beer/${beer._id}`}>
                        <Card style={beersStyle}>
                            <img src={beer.image_url} alt='BeerImg' width='60px'/>
                            <div style={{marginLeft: '10px'}}>
                                <h6>{beer.name}</h6>
                                <p style={{color:'gray'}}>{beer.tagline}</p>
                                <b><p>{beer.contributed_by}</p></b>
                                
                            </div>
                        </Card>
                    </Link>
                  ) 
               })
           }
        </div>
    )
}
