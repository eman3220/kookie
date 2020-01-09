import React from 'react';
import './StartGlyph.css';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import DropForm from '../DropForm/DropForm';
import SocialMediaBar from '../SocialMediaBar/SocialMediaBar';
import logo from './logo.png'

function StartGlyph() {
  const [showForm, setForm] = React.useState(false)
  
  const handleGlyphClick = () => {
    document.getElementsByClassName('StartGlyph')[0].style.borderRadius = "0%"
    setForm(prev => !prev);
  };
  
  return (
    <div>
      <Fade 
        in={showForm}
        timeout={{ enter: 1800, exit: 400 }}
      >
        <div>
          <DropForm setForm={setForm}/>
        </div>
      </Fade>
      <Fade
        in={!showForm}
        timeout={{ enter: 1800, exit: 400 }}
      >
        <div>
          <div className="StartGlyphContent noselect centerish">
            <img className="logo" src={logo} alt="Logo" />
            <Typography>
              Click to start
            </Typography>
          </div>
          <div className="StartGlyph centerish" onClick={handleGlyphClick} />
          <SocialMediaBar />
        </div>
      </Fade>
    </div>
  );
}

export default StartGlyph;
