import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Divider } from '@mui/material';

export default function FolderList(props) {
    
  const { 
    name, 
    tagline, 
    first_brewed, 
    attenuation_level, 
    description, 
    contributed_by,
    _id } = props; 
    
        
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary={name} secondary={tagline} />
        <ListItemText />
        <ListItemText />
        <ListItemText primary={attenuation_level} secondary={first_brewed} />
      </ListItem>
      <ListItem>
      <ListItemText primary={description}  />
      </ListItem>
      <ListItem>
        <ListItemText  secondary={contributed_by} />
      </ListItem>
      
    </List>
  );
}
