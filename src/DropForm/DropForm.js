import React from 'react';
import './DropForm.css';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '60vh',
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    background: 'linear-gradient(45deg, #cc9933 30%, #FF8E53 90%)',
  },
  actionsContainer: {
    marginBottom: theme.spacing(3)
  },
  resetContainer: {
    padding: theme.spacing(3),
    backgroundColor: 'transparent'
  },
}));

const DropForm = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const formSectionTitle = "body1"

  // === name ==============================================
  const [name, setName] = React.useState('');
  
  const [validName, setValidName] = React.useState(false);
  
  const handleNewName = (event) => {
    var value = event.target.value.slice(0,30)
    setName(value);
    validateNewName(value);
  };

  const validateNewName = (value) => {
    var result = value.match("^[A-Za-z-']+ [A-Za-z-']+$");
    if (result != null) {
      setValidName((result.length === 1))
    } else {
      setValidName(false);
    }
  }
  
  // ===  email ==============================================
  const [email, setEmail] = React.useState('');

  const [validEmail, setValidEmail] = React.useState(false);
  
  const handleNewEmail = (event) => {
    var value = event.target.value.slice(0,320)
    setEmail(value);
    validateNewEmail(value);
  };

  const validateNewEmail = (value) => {
    var result = value.match("^[a-zA-Z0-9\\_\\-\\\.]+@[a-zA-Z0-9\\_\\-\\\.]+$");
    if (result != null) {
      setValidEmail((result.length === 1))
    } else {
      setValidEmail(false);
    }
  }

  // ===  mobile ==============================================
  const [mobile, setMobile] = React.useState('+64');

  const [validMobile, setValidMobile] = React.useState(false);
  
  const handleNewMobile = (event) => {
    var value = event.target.value.slice(0,13)
    setMobile(value);
    validateNewMobile(value);
  };

  const validateNewMobile = (value) => {
    var result = value.match("^\\+64([0-9]{8,10})$");
    if (result != null) {
      setValidMobile((result.length > 0))
    } else {
      setValidMobile(false);
    }
  }
  
  // ===  location ==============================================
  // https://anypoint.mulesoft.com/exchange/portals/nz-post-group/b8271f09-2ad8-4e1c-b6b1-322c5727d148/parceladdress-api/
  const [location, setLocation] = React.useState('');

  // ===  payment ==============================================
  const [hasPaid, setHasPaid] = React.useState(false);

  const handleNewLocation = (event) => {
    setLocation(event.target.value);
  };

  const handlePayment = () => {
    setHasPaid(true);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);

    // TODO: Scroll next element into view
    // document.getElementById("content").scrollIntoView();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);

    // TODO: Scroll next element into view
    // document.getElementById("content").scrollIntoView();
  };

  const handleReset = () => {
    setActiveStep(0);
    document.getElementsByClassName('StartGlyph')[0].style.borderRadius = "50%"
    props.setForm(false)
  };

  const renderActionsContainer = () => {
    return (
      <div className={classes.actionsContainer}>
        <div>
          <Button
            disabled={activeStep === 0}
            variant="contained"
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            className={classes.button}
          >
            Next
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="DropForm center">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical" style={{ backgroundColor: "transparent"}}>
          <Step>
            {/* --------------------------------------------------------------------------------------------------- */}
            {/* ---------------------------------------- Step One: Read me ---------------------------------------- */}
            {/* --------------------------------------------------------------------------------------------------- */}
            <StepLabel>
              <Typography variant={formSectionTitle}>
                Welcome to Kookie...
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2">Let's get straight to the point.</Typography>
              <br />
              <Typography variant="body2">You're here because you found out about our luxurious cookies.</Typography>
              <br />
              <Typography variant="body2">You've come to the right place so let's jump straight into it.</Typography>
              <br />
              <Typography variant="body2">The process is simple.</Typography>
              <br />
              <Typography variant="body2">Fill out the form, make the payment, and you'll be scheduled in for the next drop on the [date].</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button variant="contained" onClick={handleReset} className={classes.button}>
                    Return
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>

          {/* --------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------- Step Two: Name ------------------------------------------ */}
          {/* --------------------------------------------------------------------------------------------------- */}
          <Step>
            <StepLabel>
              <Typography variant={formSectionTitle}>Your first and last name...</Typography>
            </StepLabel>
            <StepContent>
              <TextField 
                autoFocus 
                color="primary" 
                inputProps={{style: { textAlign: "center", width: '50vw'}}} 
                onChange={handleNewName}
                value={name}
              />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!validName}
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>

          {/* --------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------- Step Three: Email --------------------------------------- */}
          {/* --------------------------------------------------------------------------------------------------- */}
          <Step>
            <StepLabel>
              <Typography variant={formSectionTitle}>Your email address...</Typography>
            </StepLabel>
            <StepContent>
              <TextField 
                autoFocus 
                color="primary" 
                inputProps={{style: { textAlign: "center", width: '50vw'}}} 
                onChange={handleNewEmail}
                value={email}
              />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!validEmail}
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>

          {/* --------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------- Step Four: Mobile Number -------------------------------- */}
          {/* --------------------------------------------------------------------------------------------------- */}
          <Step>
            <StepLabel>
              <Typography variant={formSectionTitle}>Your mobile number...</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="subtitle">eg. +6421123456</Typography>
              <br />
              <TextField 
                autoFocus 
                color="primary" 
                inputProps={{style: { textAlign: "center", width: '50vw'}}} 
                onChange={handleNewMobile}
                value={mobile}
              />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!validMobile}
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          
          {/* --------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------- Step Five: Drop Location -------------------------------- */}
          {/* --------------------------------------------------------------------------------------------------- */}
          <Step>
            <StepLabel>
              <Typography variant={formSectionTitle}>Your drop location...</Typography>
            </StepLabel>
            <StepContent>
              <TextField 
                autoFocus 
                color="primary" 
                inputProps={{style: { textAlign: "center", width: '50vw'}}} 
                onChange={handleNewLocation}
                value={location}
              />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    variant="contained"
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          
          {/* --------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------- Step Six: Payment --------------------------------------- */}
          {/* --------------------------------------------------------------------------------------------------- */}
          <Step>
            <StepLabel>
              <Typography variant={formSectionTitle}>Payment...</Typography>
            </StepLabel>
            <StepContent>
              <Typography>Price: $30.00</Typography>
              {
                hasPaid === true ?
                <Button color="secondary" disabled onClick={handlePayment}>Pay</Button>
                :
                <Button color="secondary" onClick={handlePayment}>Pay</Button>
              }
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    variant="contained"
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!hasPaid}
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          
          {/* --------------------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------- Step Seven: Finish -------------------------------------- */}
          {/* --------------------------------------------------------------------------------------------------- */}
          <Step>
            <StepLabel>
              <Typography variant={formSectionTitle}>Done.</Typography>
            </StepLabel>
            <StepContent>
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography variant="body2">All steps completed.</Typography>
                <br />
                <Typography variant="body2">You are all set for the next drop on the [date].</Typography>
                <br />
                <Typography variant="body2">You will receive a confirmation email shortly and we will message you closer to the date.</Typography>
                <br />
                <Button variant="contained" onClick={handleReset} className={classes.button}>
                  Return
                </Button>
              </Paper>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}

export default DropForm