import React from 'react';
import {Box, Button} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";

const CustomTable = ({ data }) => {
  return (
    <Box sx={{ width: 1, boxSizing: "border-box" }}>
      <Button variant="text" href="/create-user/">Create user</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
              {data.email ? <TableCell>Email</TableCell> : null}
              {data.role ? <TableCell>Role</TableCell> : null}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell>{row.password}</TableCell>
                {row.email ? <TableCell>{row.email}</TableCell> : null}
                {row.role ? <TableCell>{row.role}</TableCell> : null}
                <TableCell align="right">
                  <Button variant="outlined" href={"/edit-user/" + row.id}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomTable;