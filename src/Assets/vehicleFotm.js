import React from "react";
import "./App.css";
import { useForm, Controller } from "react-hook-form";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
//import { withStyles } from "@mui/styles";

//const Styles = () => {};
const Form = () => {
  const { handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        defaultValue=" "
        render={({ field }) => (
          <Autocomplete
            disablePortal
            id="vehicleType"
            options={vehicleType}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="نوع خودرو" />
            )}
          />
        )}
      />
      <br />
      <Controller
        control={control}
        defaultValue=" "
        render={({ field }) => (
          <Autocomplete
            disablePortal
            id="vehicleBrand"
            options={vehicleBrand}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="مدل خودرو" />
            )}
          />
        )}
      />
      <br />
      <Controller
        control={control}
        defaultValue=" "
        render={({ field }) => (
          <Autocomplete
            disablePortal
            id="vehicleMake"
            options={vehicleType}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="خودرو شما بیمه بدنه دارد" />
            )}
          />
        )}
      />
      <br />
      <Controller
        control={control}
        defaultValue=" "
        render={({ field }) => (
          <Autocomplete
            disablePortal
            id="vehicleMakeYear"
            options={vehicleType}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="سال ساخت" />}
          />
        )}
      />
      <br />
      <Button
        variant="contained"
        type="submit"
        size="medium"
        className="button"
        color="primary"
      >
        ثبت اطلاعات
      </Button>
    </form>
  );
};

const vehicleType = [{ label: "سواری" }, { label: "وانت" }, { label: "تاکسی" }];
const vehicleBrand = [{ label: "پراید" }, { label: "پژو" }, { label: "سمند" }];

export default Form;
