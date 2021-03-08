
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {PersonaliNfo} from '../firstForm/FIrstForm'
import {SensitiveInf0} from'../SecondFrom/secretInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Add Address', 'Add payment', 'Review'];
}

function getStepContent(stepIndex, setActiveStep,setFormValues,formValues) {
    switch (stepIndex) {
        case 0:  
            return <PersonaliNfo submit={setActiveStep} setValues={setFormValues} previousValue={formValues} /> 
        case 1:
            return  <SensitiveInf0/>
        case 2:
            return 
            default:
            return 'Unknown stepIndex';
    }
}

export default function RegistrationForm() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setFormValues] = React.useState({})
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {
                getStepContent(activeStep, setActiveStep,setFormValues,formValues)
            }

        </div>
    );
}