import styled from "@emotion/styled";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, MenuItem } from "@mui/material";
import tw from "twin.macro";
import { motion } from "framer-motion";
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

  // const container = {
  //   animate={{ x: 100 }}
  //   transition={{ delay: 1 }}
  // };

  return (
    <ApplyLeaveFormWrapper>
      <Grid container spacing={{ xs: 5, md: 10, lg: 15 }}>
        <Grid item xs={12} md={6} lg={4}>
          <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select Leave Type"
              value={type}
              onChange={handleChange}
              sx={{ width: 220, backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <TextField
              id="date"
              label="From Date"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220, backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <TextField
              id="date"
              label="To Date"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220, backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </ApplyLeaveFormWrapper>
  );
};

const ApplyLeaveFormWrapper = styled.div`
  ${tw` mt-10 bg-gray-100 p-20 w-5/6 mx-auto`}
`;

export default ApplyLeaveForm;
