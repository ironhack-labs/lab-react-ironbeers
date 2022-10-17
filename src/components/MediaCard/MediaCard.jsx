import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FolderList from '../FolderList/FolderList';


export default function MediaCard(props) {

  const { image_url,  } = props;

  return (
    <Card sx={{ maxWidth: 800  }}>
      
      <CardMedia
        component="img"
        sx={{height: '140px', objectFit: 'contain'}}
        height='140'
        image={image_url}
        alt="beer"
      />
      <CardContent>
        <FolderList {...props} />
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
