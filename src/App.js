import "./App.css";
import { useForm, Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const App = () => {
  const { handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>سامانه مقایسه، مشاوره و خرید آنلاین بیمه</h2>
      <ul className="insurance">
        <li>
          <a>بیمه شخص ثالث</a>
        </li>
        <li>
          <a>بیمه بدنه</a>
        </li>
        <li>
          <a>بیمه موتور</a>
        </li>
      </ul>
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
              <TextField {...params} label="نوع وسیله نقلیه" />
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
            renderInput={(params) => <TextField {...params} label="برند" />}
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
            renderInput={(params) => <TextField {...params} label="مدل" />}
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
      <Controller
        control={control}
        defaultValue=" "
        render={({ field }) => (
          <Autocomplete
            disablePortal
            id="previousInsurance"
            options={vehicleType}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="شرکت بیمه قبلی" />
            )}
          />
        )}
      />
      <Button variant="contained" type="submit" size="medium">
        ثبت اطلاعات و مرحله بعد
      </Button>
    </form>
  );
};

const vehicleType = [{ label: "سواری" }, { label: "وانت" }, { label: "تاکسی" }];
const vehicleBrand = [{ label: "پراید" }, { label: "پژو" }, { label: "سمند" }];
export default App;
