import React from 'react';
import Header from './Header'

function NewBeer (props) {

    let container={
        display:'flex', 
        paddingTop:'10px',
        paddingBottom:'10px',
        paddingLeft:'20px',
        paddingRight:'20px',
    }
    let inpuStyle={
        width:'100%',
        borderRadius:'20px',
        height:'20px',
        border:'solid grey 1px',
       
    }
    let formContainer={
        width:'100%',
    }
    let formElement={
        paddingBottom:'20px',
        paddingRight:'40px'
    }
    let labelStyle={
        fontSize:'12px',
        fontWeight:'600',
        paddingLeft:'10px',
    }
    let btn={
        width:'100%',
        height:'30px',
        backgroundColor:'#00E0FF',
        color:'white',
        border:'none',
        borderRadius:'20px'
    }

    

        return (
            <div>
                <Header/>
                 <div  style={container}>
                    <form onSubmit={props.onSubmit} style={formContainer}>

                    <div style={formElement}>
                    <label style={labelStyle}>Name</label>
                    <br/>
                    <input type="text" placeholder="Introduce a beer name" name="name" style={inpuStyle} ></input>
                    <br/>
                    </div>
        
                    <div style={formElement}>
                    <label style={labelStyle}>Tagline</label>
                    <br/>
                    <input type="text" placeholder="Introduce a tagline" name="tagline" style={inpuStyle}></input>
                    <br/>
                    </div>

                    <div style={formElement}>
                    <label style={labelStyle}>Description</label>
                    <br/>
                    <textarea type="text" placeholder="Write your description here" name="description" style={inpuStyle}></textarea>
                    <br/>
                    </div>

                    <div style={formElement}>
                    <label style={labelStyle}>First Brewed</label>
                    <br/>
                    <input type="text" placeholder="Insert first brewed date" name="first_brewed" style={inpuStyle}></input>
                    <br/>
                    </div>

                    <div style={formElement}>
                    <label style={labelStyle}>Brewers Tips</label>
                    <br/>
                    <input type="text" placeholder="Insert brewers tips" name="brewers_tips" style={inpuStyle}></input>
                    <br/>
                    </div>

                    <div style={formElement}>
                    <label style={labelStyle}>Atenuation Level</label>
                    <br/>
                    <input type="number" placeholder="Insert atenuation level" name="attenuation_level" style={inpuStyle}></input>
                    <br/>
                    </div>

                    <div style={formElement}>
                    <label style={labelStyle}>Contributed By</label>
                    <br/>
                    <input type="text" placeholder="Insert contributed by" name="contributed_by" style={inpuStyle}></input>
                    <br/>
                    </div>

                    <button type="submit" style={btn}>ADD NEW</button>
                    </form>
                 </div>
            </div>
        )
}
export default NewBeer
