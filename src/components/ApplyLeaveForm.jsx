import styled from "@emotion/styled";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Grid, MenuItem } from "@mui/material";

const types = [
  {
    value: "sick leave",
    label: "Sick Leave",
  },
  {
    value: "casual leave",
    label: "Casual Leave",
  },
];

const ApplyLeaveForm = () => {
  const [type, setType] = useState("casual leave");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <ApplyLeaveFormWrapper>
      <Grid container spacing={{ xs: 5, md: 10, lg: 15 }}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField id="outlined-select-currency" select label="Select Leave Type" value={type} onChange={handleChange} helperText="Please select your leave" sx={{ width: 220 }}>
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="date"
            label="From Date"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="date"
            label="To Date"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </ApplyLeaveFormWrapper>
  );
};

const ApplyLeaveFormWrapper = styled.div``;

export default ApplyLeaveForm;
