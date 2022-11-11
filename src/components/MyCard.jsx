import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// src\assets\beers.png

function MyCard({ title, subtitle, description, img, link }) {
  return (
    <>
      <Link to={link}>
        <img src={img} sx={{ maxWidth: '90%' }} alt="something here" />
      </Link>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </>
  );
}
export default MyCard;
