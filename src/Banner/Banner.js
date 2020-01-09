import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    padding: 10,
    top: 0,
    width: '100%',
    backgroundColor: 'red',
  },
}));

function StartGlyph() {
  const classes = useStyles()
  const [showBanner, setShowBanner] = React.useState(true)
  
  if (showBanner){
    return (
      <div className={classes.root}>
        This is just a test.
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
  
}

export default StartGlyph;
