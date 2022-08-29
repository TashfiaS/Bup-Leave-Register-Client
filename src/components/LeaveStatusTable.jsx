import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { motion } from "framer-motion";
const ApproveStyle = {
  color: "black",
  fontWeight: "bold",
};
const RejectedStyle = {
  color: "red",
  fontWeight: "bold",
};
const PendingStyle = {
  color: "  #727645  ",
  fontWeight: "bold",
};

const columns = [
  { id: "type", label: "Type", minWidth: 170 },
  { id: "from", label: "From", minWidth: 100 },
  { id: "to", label: "To", minWidth: 100 },
  {
    id: "duration",
    label: "Duration",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "status", label: "Status", minWidth: 100 },
];

function createData(type, from, to, duration, status) {
  //   const density = population / size;
  return { type, from, to, duration, status };
}

const rows = [
  createData("Casual Leave", "Apr 22, 2023", "Apr 24, 2023", 2, "Approved"),
  createData("Sick Leave", "Jun 01, 2023", "Jun 02, 2023", 1, "Rejected"),
  createData("Casual Leave", "Aug 18, 2023", "Aug 21, 2023", 3, "Pending"),
  createData("Casual Leave", "Sep 14, 2022", "Sep 19, 2022", 5, "Rejected"),
  createData("Sick Leave", "Nov 08, 2022", "Nov 10, 2022", 2, "Approved"),
  createData("Casual Leave", "Apr 22, 2023", "Apr 24, 2023", 2, "Approved"),
  createData("Sick Leave", "Jun 01, 2023", "Jun 02, 2023", 1, "Rejected"),
  createData("Casual Leave", "Aug 18, 2023", "Aug 21, 2023", 3, "Pending"),
  createData("Casual Leave", "Sep 14, 2022", "Sep 19, 2022", 5, "Rejected"),
  createData("Sick Leave", "Nov 08, 2022", "Nov 10, 2022", 2, "Approved"),
  createData("Casual Leave", "Apr 22, 2023", "Apr 24, 2023", 2, "Approved"),
  createData("Sick Leave", "Jun 01, 2023", "Jun 02, 2023", 1, "Rejected"),
  createData("Casual Leave", "Aug 18, 2023", "Aug 21, 2023", 3, "Pending"),
  createData("Casual Leave", "Sep 14, 2022", "Sep 19, 2022", 5, "Rejected"),
  createData("Sick Leave", "Nov 08, 2022", "Nov 10, 2022", 2, "Approved"),
  createData("Casual Leave", "Apr 22, 2023", "Apr 24, 2023", 2, "Approved"),
  createData("Sick Leave", "Jun 01, 2023", "Jun 02, 2023", 1, "Rejected"),
  createData("Casual Leave", "Aug 18, 2023", "Aug 21, 2023", 3, "Pending"),
  createData("Casual Leave", "Sep 14, 2022", "Sep 19, 2022", 5, "Rejected"),
  createData("Sick Leave", "Nov 08, 2022", "Nov 10, 2022", 2, "Approved"),
  createData("Casual Leave", "Apr 22, 2023", "Apr 24, 2023", 2, "Approved"),
  createData("Sick Leave", "Jun 01, 2023", "Jun 02, 2023", 1, "Rejected"),
  createData("Casual Leave", "Aug 18, 2023", "Aug 21, 2023", 3, "Pending"),
  createData("Casual Leave", "Sep 14, 2022", "Sep 19, 2022", 5, "Rejected"),
  createData("Sick Leave", "Nov 08, 2022", "Nov 10, 2022", 2, "Approved"),
  createData("Casual Leave", "Apr 22, 2023", "Apr 24, 2023", 2, "Approved"),
  createData("Sick Leave", "Jun 01, 2023", "Jun 02, 2023", 1, "Rejected"),
  createData("Casual Leave", "Aug 18, 2023", "Aug 21, 2023", 3, "Pending"),
  createData("Casual Leave", "Sep 14, 2022", "Sep 19, 2022", 5, "Rejected"),
  createData("Sick Leave", "Nov 08, 2022", "Nov 10, 2022", 2, "Approved"),
  createData("Casual Leave", "Apr 22, 2023", "Apr 24, 2023", 2, "Approved"),
  createData("Sick Leave", "Jun 01, 2023", "Jun 02, 2023", 1, "Rejected"),
  createData("Casual Leave", "Aug 18, 2023", "Aug 21, 2023", 3, "Pending"),
  createData("Casual Leave", "Sep 14, 2022", "Sep 19, 2022", 5, "Rejected"),
  createData("Sick Leave", "Nov 08, 2022", "Nov 10, 2022", 2, "Approved"),
];

export default function LeaveStatusTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
      <Paper sx={{ width: "90%", mx: "auto", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} sx={{ backgroundColor: "gray", color: "white", fontWeight: "bold" }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <span style={value === "Approved" ? ApproveStyle : value === "Rejected" ? RejectedStyle : value === "Pending" ? PendingStyle : {}}>
                            {column.format && typeof value === "number" ? column.format(value) : value}
                          </span>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </motion.div>
  );
}
