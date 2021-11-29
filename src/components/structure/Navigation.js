import * as React from 'react';
import { 
  CssBaseline, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText
} from '@mui/material';
import Settings from '../../resources/data/Settings.json';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  navul: {
    borderTop: '1px solid #333'
  },
  navli: {
    borderBottom: '1px solid #333'
  },
  navbtn: {
    height: 40,
    backgroundColor: '#000',
    fontSize: 12,
    color: '#fff',
    "&:hover": {
      backgroundColor: '#111'
    },
  }
});

export default function Navigation( props ) {
  const documentRoot = Settings.documentRoot;
  const classes = useStyles();
  const activeBtnStyle = { backgroundColor: '#fff', color: '#666' };
  let topActiveBtnStyle, aboutActiveBtnStyle, productsActiveBtnStyle, contactActiveBtnStyle;
  if( props.pageid === '2' )
  {
    aboutActiveBtnStyle = activeBtnStyle;
  }
  else if( props.pageid === '3' )
  {
    productsActiveBtnStyle = activeBtnStyle;
  }
  else if( props.pageid === '4' )
  {
    contactActiveBtnStyle = activeBtnStyle;
  }
  else
  {
    topActiveBtnStyle = activeBtnStyle;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <nav id="navigation" aria-label="secondary mailbox folders">
        <List id="navul" className={ classes.navul } disablePadding>
          <ListItem id="navli" className={ classes.navli } disablePadding>
            <ListItemButton id="navbtn" className={ classes.navbtn } style={ topActiveBtnStyle } component="a" href={ documentRoot + '/' }>
              <ListItemText primary="Top" />
            </ListItemButton>
          </ListItem>
          <ListItem id="navli" className={ classes.navli } disablePadding>
            <ListItemButton id="navbtn" className={ classes.navbtn } style={ aboutActiveBtnStyle } component="a" href={ documentRoot + '/about' }>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem id="navli" className={ classes.navli } disablePadding>
            <ListItemButton id="navbtn" className={ classes.navbtn } style={ productsActiveBtnStyle } component="a" href={ documentRoot + '/products' }>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          <ListItem id="navli" className={ classes.navli } disablePadding>
            <ListItemButton id="navbtn" className={ classes.navbtn } style={ contactActiveBtnStyle } component="a" href={ documentRoot + '/contact' }>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </React.Fragment>
  );
}