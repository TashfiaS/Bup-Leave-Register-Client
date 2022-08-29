import styled from "@emotion/styled";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, MenuItem } from "@mui/material";
import tw from "twin.macro";
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
          <TextField id="outlined-select-currency" select label="Select Leave Type" value={type} onChange={handleChange} sx={{ width: 220 , backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
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
            sx={{ width: 220,backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}
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
            sx={{ width: 220,backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </ApplyLeaveFormWrapper>
  );
};

const ApplyLeaveFormWrapper = styled.div`
  ${tw` mt-10 bg-gray-100 p-20 w-5/6 mx-auto`}
`;

export default ApplyLeaveForm;
