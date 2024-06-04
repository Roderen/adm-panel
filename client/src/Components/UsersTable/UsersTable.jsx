import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Box, Button} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import {useGetAllUsersQuery} from "../../store/api/api.js";

const UsersTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const { isLoading, data } = useGetAllUsersQuery();

  useEffect(() => {
    if (data) {
      setDataSource(
        data.map((item) => (
          {
            // eslint-disable-next-line no-underscore-dangle
            id: item._id,
            username: item.username,
            password: item.password,
            email: item.email,
            role: item.role,
          }
        )),
      );
    }
  }, [data]);

  return (
    <>
      {isLoading ? <p>Loading...</p> : (
        <Box sx={{ width: 1, boxSizing: "border-box" }}>
          <Button variant="text" href="/create-user/">Create user</Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSource.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell>{row.password}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell align="right">
                      <Button variant="outlined" href={"/edit-user/" + row.id}>Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default UsersTable;