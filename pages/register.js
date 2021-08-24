import React from "react";
import {
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
} from "@material-ui/core";
import Header from "../components/Header";
import { register } from "../api/Api";
import { useRouter } from "next/router";

export default function Register() {
  // Step 1
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");

  // Step 2
  const [zip, setZip] = React.useState("");
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");

  // Step 3
  const [CPF, setCPF] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [income, setIncome] = React.useState("");

  const getSteps = () => {
    return ["Name and contacts", "Address", "Personal data"];
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <TextField
              required
              color="secondary"
              name="name"
              label="Name"
              value={name}
              type="text"
              variant="filled"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              color="secondary"
              name="lastname"
              label="Lastname"
              value={lastname}
              type="text"
              variant="filled"
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
              required
              color="secondary"
              name="email"
              label="Email"
              value={email}
              type="email"
              variant="filled"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              color="secondary"
              name="number"
              label="Number"
              value={number}
              type="number"
              variant="filled"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        );

      case 1:
        return (
          <div>
            <TextField
              required
              color="secondary"
              name="zip"
              label="Zip Code"
              value={zip}
              type="number"
              variant="filled"
              onChange={(e) => setZip(e.target.value)}
            />
            <TextField
              required
              color="secondary"
              name="address1"
              label="Address1"
              value={address1}
              type="text"
              variant="filled"
              onChange={(e) => setAddress1(e.target.value)}
            />
            <TextField
              color="secondary"
              name="address2"
              label="Address2"
              value={address2}
              type="text"
              variant="filled"
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
        );
      case 2:
        return (
          <>
            <TextField
              required
              color="secondary"
              name="CPF"
              label="CPF"
              value={CPF}
              type="number"
              variant="filled"
              onChange={(e) => setCPF(e.target.value)}
            />
            <TextField
              required
              color="secondary"
              name="birthday"
              label="Birthday"
              value={birthday}
              type="date"
              variant="filled"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <TextField
              required
              color="secondary"
              name="income"
              label="Income"
              value={income}
              type="number"
              variant="filled"
              onChange={(e) => setIncome(e.target.value)}
            />
          </>
        );
      default:
        return "Unknown step";
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await register(
        name,
        lastname,
        email,
        number,
        zip,
        address1,
        address2,
        birthday,
        CPF,
        income
      );
      router.push("/client");
    } catch (err) {
      console.log(err);
      true;
    }
  };

  return (
    <div>
      <Header title="There is still time to register" />

      <br />

      <Typography variant="h5">
        Save your peach from being bitten by a zombie, sign up for rent a
        bunker!
      </Typography>

      <br />

      <form onSubmit={submitHandler}>
        <div>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div>
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        type={activeStep === steps.length - 1 ? "submit" : null}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length && (
            <Paper square elevation={0}>
              <Typography>
                Done - We will send you an email or SMS when the apocalypse
                comes around with the address of your bunker, so stay tuned!
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </Paper>
          )}
        </div>
      </form>
    </div>
  );
}
