import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function MyCard({ title, subtitle, description, img, link }) {
  return (
    <div style={{ maxWidth: '400px', padding: '10px' }}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Card sx={{ minWidth: '250px', padding: '10px' }}>
          <img src={img} style={{ height: '200px' }} alt="something here" />
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
      </Link>
    </div>
  );
}
export default MyCard;
