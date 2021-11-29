import * as React from 'react';
import { CssBaseline, Grid, Link, Typography } from '@mui/material';
import '../../resources/css/App.css';
import Menubar from '../structure/Menubar';
import Footer from '../structure/Footer';
import pageImage from '../../resources/img/pageImages/4.jpg';

export default function Contact( props ) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid id="container" container>
        <Grid id="menubar" item xs={ 12 } md={ 3 }>
          <Menubar pageid={ props.pageid } />
        </Grid>
        <Grid id="content" item xs={ 12 } md={ 9 }>
          <Grid id="contentImage">
            <Link id="pageImageLink" className="clickable" href={ pageImage } target="_blank">
              <img style={{ width: '100%' }} src={ pageImage } alt="pageImage" />
            </Link>
          </Grid>
          <Grid id="contentText">
            <Typography id="pageTitle" variant="h5" component="h3">
              Contact
            </Typography>
            <Typography id="pageDescription" variant="body1" component="p">
              Eveniet tempor, vehicula vulputate ante adipisci! Qui tortor congue ac enim tincidunt incidunt architecto faucibus! Velit. Nunc. Accumsan. Nesciunt cras itaque bibendum officia libero. Occaecat eros porro iste et iste earum saepe? Inventore quaerat vehicula posuere, vehicula vivamus metus ac? Dolores egestas alias, ante. Sed lacinia diam at quisque dolor lacus magnam, incididunt aut commodi tempor deserunt sint urna placeat! Sapien euismod ligula placeat inventore quasi pariatur dicta dicta aliquid, natoque rhoncus habitant proident eu, nihil nostra tempor iusto maiores proin facere, mollis voluptatem itaque, condimentum pulvinar beatae. Faucibus, voluptate! Aliquam minima, alias quasi et nec hendrerit molestiae praesent, ipsa.
            </Typography>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </React.Fragment>
  );
}