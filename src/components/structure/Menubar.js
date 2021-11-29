import * as React from 'react';
import { CssBaseline, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logo from '../../resources/img/logo.svg';
import Navigation from './Navigation';
import Settings from '../../resources/data/Settings.json';
import CurrentDate from '../modules/CurrentDate';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: 10,
  },
  header: {
    width: '100%',
    "&:hover": {
      opacity: 0.8
    },
    "&:active": {
      opacity: 0.6
    }
  },
  body: {
    width: '100%'
  },
});

export default function About( props ) {
  const documentRoot = Settings.documentRoot;
  const siteTitle = Settings.siteTitle;
  const siteDescription = Settings.siteDescription;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid id="menubarHeader" className={ classes.header } item xl={ 12 }>
        <Link id="logo" href={ documentRoot + '/' }>
          <img src={ Logo } alt="logoImage" />
        </Link>
      </Grid>
      <Grid id="menubarBody" className={ classes.body } item xl={ 12 }>
        <Navigation pageid={ props.pageid } />
      </Grid>
      <Grid id="siteInfo" item xl={ 12 }>
        <Typography id="siteTitle" variant="h5" component="h1">
          { siteTitle }
        </Typography>
        <Typography id="siteDescription" variant="body1" component="h2">
          { siteDescription }
        </Typography>
        <Typography id="currentDate" variant="body1" component="h2">
          Date : { CurrentDate() }
        </Typography>
      </Grid>
    </React.Fragment>
  );
}