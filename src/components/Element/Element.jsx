import React from 'react'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';
import { padding } from '@mui/system';
import Typography from '@mui/material/Typography'

const Element = (props) => {
    const { 
        image_url, 
        name, 
        tagline, 
        contributed_by,
        _id } = props;

    const imgStyle = {
        objectFit: 'contain'

    }

  return (
    <div>
        <Grid 
          container 
          borderBottom={1}
          sx={{ 
            
            maxHeight: '40vh' }}
        >
        <Grid 
            item 
            xs={3} 
            sx={{
              maxHeight: '40vh',
              padding: '1rem'
            }}
            
          >
            <Link to={ `/beers/${_id}` }>
              <img src={image_url} alt="" style={imgStyle}/>
            </Link>
            

          </Grid>

          <Grid 
            item 
            xs={9} 
            
            sx={{
              flexDirection: 'column',
              padding:'1rem',
            }}
          >
            <Link to={ `/beers/${_id}` } style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="initial" gutterBottom> 
                {name} 
              </Typography>    
            </Link>

            <Typography variant='body1' color='gray' gutterBottom>{tagline}</Typography>
            <Typography variant='body2' color='dodgerblue'>{contributed_by}</Typography>
          </Grid>
        </Grid>
    </div>
  )
}

export default Element