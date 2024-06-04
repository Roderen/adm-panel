import React, {useEffect, useState} from 'react';
import {useGetAllAdminsQuery} from "../../../store/api/adminUsers.js";
import CustomTable from "../CustomTable.jsx";

const AdminsTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const { isLoading, data } = useGetAllAdminsQuery();

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
      {isLoading ? <p>Loading...</p> : <CustomTable data={dataSource} />}
    </>
  );
};

export default AdminsTable;