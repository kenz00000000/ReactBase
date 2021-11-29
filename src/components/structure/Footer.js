import * as React from 'react';
import { CssBaseline, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Settings from '../../resources/data/Settings.json';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(30,30,30,0.9)'
  },
  copyright: {
    display: 'block',
    width: '100%',
    marginTop: 12,
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  }
});

export default function About( props ) {
  const copyright = Settings.copyright;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid id="footer" className={ classes.root }>
        <Typography id="copyright" variant="body1" component="p">
          { copyright }
        </Typography>
      </Grid>
    </React.Fragment>
  );
}