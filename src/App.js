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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="92.5"
        height="111"
        viewBox="0 0 92.5 111"
      >
        <g id="insurance" transform="translate(-7 -2)">
          <path
            id="Path_4"
            d="M43.05 28v11.1h-11.1a3.7 3.7 0 0 0-7.4 0H19v-9.25A1.85 1.85 0 0 1 20.85 28z"
            class="cls-1"
            data-name="Path 4"
            transform="translate(10.2 22.1)"
          />
          <path
            id="Path_5"
            d="M56.05 31.7v7.4H50.5a3.7 3.7 0 1 0-7.4 0H32V28h20.368z"
            class="cls-1"
            data-name="Path 5"
            transform="translate(21.25 22.1)"
          />
          <circle
            id="Ellipse_2"
            cx="4"
            cy="4"
            r="4"
            class="cls-1"
            data-name="Ellipse 2"
            transform="translate(34.5 57)"
          />
          <ellipse
            id="Ellipse_3"
            cx="3.5"
            cy="4"
            class="cls-1"
            data-name="Ellipse 3"
            rx="3.5"
            ry="4"
            transform="translate(64.5 57)"
          />
          <path
            id="Path_6"
            d="M96.8 21.5v37.425A40.7 40.7 0 0 1 78.67 92.78L52.4 110.3 26.13 92.78A40.7 40.7 0 0 1 8 58.925V21.5L37.6 3h29.6zm-7.4 37.425V25.607L65.072 10.4H39.727L15.4 25.607v33.318A33.23 33.23 0 0 0 30.237 86.62L52.4 101.4l22.163-14.78A33.23 33.23 0 0 0 89.4 58.925z"
            class="cls-1"
            data-name="Path 6"
            transform="translate(.85 .85)"
          />
          <g id="Group_1" data-name="Group 1" transform="translate(7 2)">
            <path
              id="Path_7"
              d="M98.63 20.781l-29.6-18.5A1.85 1.85 0 0 0 68.05 2h-29.6a1.85 1.85 0 0 0-.981.281l-29.6 18.5A1.85 1.85 0 0 0 7 22.35v37.425a42.459 42.459 0 0 0 18.953 35.394l26.27 17.519a1.85 1.85 0 0 0 2.053 0l26.27-17.519A42.459 42.459 0 0 0 99.5 59.775V22.35a1.85 1.85 0 0 0-.87-1.569zM95.8 59.775a38.767 38.767 0 0 1-17.3 32.319L53.25 108.93 28 92.095a38.767 38.767 0 0 1-17.3-32.32v-36.4L38.981 5.7h28.538L95.8 23.375z"
              class="cls-2"
              data-name="Path 7"
              transform="translate(-7 -2)"
            />
            <path
              id="Path_8"
              d="M62.528 6H37.172a1.85 1.85 0 0 0-.981.281L11.87 21.483a1.85 1.85 0 0 0-.87 1.568v33.324a35.072 35.072 0 0 0 15.658 29.23l22.165 14.781a1.85 1.85 0 0 0 2.053 0l22.165-14.781A35.072 35.072 0 0 0 88.7 56.375V23.051a1.85 1.85 0 0 0-.87-1.569L63.507 6.281A1.85 1.85 0 0 0 62.528 6zM85 56.375a31.381 31.381 0 0 1-14.01 26.159l-21.14 14.1-21.138-14.1A31.387 31.387 0 0 1 14.7 56.375v-32.3L37.7 9.7H62l23 14.376z"
              class="cls-2"
              data-name="Path 8"
              transform="translate(-3.6 1.4)"
            />
            <path
              id="Path_9"
              d="M51.17 21H35.087a5.519 5.519 0 0 0-4.964 3.067L26.107 32.1H21.7a3.7 3.7 0 0 0-3.7 3.7v9.25a1.85 1.85 0 0 0 1.85 1.85h4.04a5.517 5.517 0 0 0 10.419 0H53.49a5.517 5.517 0 0 0 10.419 0h4.04a1.85 1.85 0 0 0 1.85-1.85v-7.4a1.85 1.85 0 0 0-.538-1.306l-3.683-3.7a1.85 1.85 0 0 0-1.312-.544H61.54l-5.752-8.628A5.55 5.55 0 0 0 51.17 21zm1.539 4.523l4.385 6.577H45.75v-7.4h5.42a1.85 1.85 0 0 1 1.539.823zm-19.277.2a1.839 1.839 0 0 1 1.655-1.023h6.963v7.4H30.243zM21.7 35.8h20.35v7.4h-7.74a5.517 5.517 0 0 0-10.419 0H21.7zm7.4 11.1a1.85 1.85 0 1 1 1.85-1.85 1.85 1.85 0 0 1-1.85 1.85zm29.6 0a1.85 1.85 0 1 1 1.85-1.85 1.85 1.85 0 0 1-1.85 1.85zm4.8-11.1l2.6 2.614V43.2h-2.19a5.517 5.517 0 0 0-10.419 0H45.75v-7.4z"
              class="cls-2"
              data-name="Path 9"
              transform="translate(2.35 14.15)"
            />
            <path
              id="Path_10"
              d="M31 15h3.7v3.7H31z"
              class="cls-2"
              data-name="Path 10"
              transform="translate(13.4 9.05)"
            />
            <path
              id="Path_11"
              d="M0 0h3.7v3.7H0z"
              class="cls-2"
              data-name="Path 11"
              transform="rotate(-30 68.918 -44.926)"
            />
            <path
              id="Path_12"
              d="M0 0h3.7v3.7H0z"
              class="cls-2"
              data-name="Path 12"
              transform="rotate(-60 44.885 -.524)"
            />
            <path
              id="Path_13"
              d="M0 0h3.7v3.7H0z"
              class="cls-2"
              data-name="Path 13"
              transform="rotate(-60 77.738 8.284)"
            />
            <path
              id="Path_14"
              d="M31 41h3.7v3.7H31z"
              class="cls-2"
              data-name="Path 14"
              transform="translate(13.4 31.15)"
            />
            <path
              id="Path_15"
              d="M0 0h3.7v3.7H0z"
              class="cls-2"
              data-name="Path 15"
              transform="rotate(-30 158.665 -68.974)"
            />
            <path
              id="Path_16"
              d="M0 0h3.7v3.7H0z"
              class="cls-2"
              data-name="Path 16"
              transform="rotate(-30 101.766 -101.82)"
            />
            <path
              id="Path_17"
              d="M0 0h3.7v3.7H0z"
              class="cls-2"
              data-name="Path 17"
              transform="rotate(-60 53.692 -33.38)"
            />
          </g>
        </g>
      </svg>
      <h2>انتخاب بیمه نامه</h2>
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
