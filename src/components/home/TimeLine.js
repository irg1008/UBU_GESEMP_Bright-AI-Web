import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
}));

function getSteps() {
  return [
    "Toma una imágen o mira hacia lo quie quieras observar.",
    "La imágen será procesada por tres inteligencias artificiales.",
    "Coordinadas serán capaces de detectar los objetos y la distancia a ellos",
    "También estudiarán tu entorno en general y dará una visión completa del mismo",
    "Toda la información será procesada en un audio informativo completo",
  ];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper
        className="timeline-block"
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel className="timeline-label">{label}</StepLabel>
            <StepContent>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Atrás
                  </Button>
                  <Button
                    className={
                      activeStep === steps.length - 1
                        ? `${classes.button}`
                        : `${classes.button} next-button`
                    }
                    disabled={activeStep === steps.length - 1}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Siguiente
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
