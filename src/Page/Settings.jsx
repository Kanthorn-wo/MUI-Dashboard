import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { list, changeRole, userActive } from '../Function/ManageUser';
import { useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Settings = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);
  const roleSelect = ['admin', 'user']
  useEffect(() => {
    getUserList(user.user.token);
  }, [user]);

  const getUserList = async (authtoken) => {
    try {
      const response = await list(authtoken);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getRowId = (row) => row._id;

  const handleAction = (id) => {
    alert(`ID ${id}`)
    console.log(`ID ${id}`);

  };
  const handleToggleActive = (event, id) => {

    const value = {
      id: id,
      active: event.target.checked
    }
    userActive(user.user.token, value)
      .then((res) => {
        console.log('userActive', res.data)
        getUserList(user.user.token)
      }).catch((err) => {
        console.log(err)
      })
  };

  const handleRoleChange = async (event, id) => {
    const value = {
      id: id,
      role: event.target.value
    }
    await changeRole(user.user.token, value)
      .then((res) => {
        console.log('change role:', res.data)
        getUserList(user.user.token)
      }).catch((err) => { console.log(err) })
  };


  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const columns = [
    { field: '_id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    {
      field: 'role',
      headerName: 'Role',
      flex: 1,

      renderCell: (params) => (
        <div style={{ width: '100%' }}>
          <Select
            value={params.row.role}
            onChange={(event) => handleRoleChange(event, params.row._id)}
            label="role"
            style={{ width: '100%' }}
          >
            {roleSelect?.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </div>
      ),
    },
    {
      field: 'switch',
      headerName: 'Active',
      flex: 1,
      renderCell: (params) => (
        <Switch {...label}
          onChange={(event) => handleToggleActive(event, params.row._id)}
          checked={params.row.active}
          color='primary'
        />
      ),
    },
    {
      field: 'edit',
      headerName: 'Edit',
      flex: 1,
      renderCell: (params) => (
        <EditIcon
          variant="contained"
          color="primary"
          onClick={() => handleAction(params.row._id)}
        >
          Edit
        </EditIcon>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      flex: 1,
      renderCell: (params) => (
        <DeleteIcon
          variant="contained"
          color="error"
          onClick={() => handleAction(params.row._id)}
        >
          Delete
        </DeleteIcon>
      ),
    },
  ];
  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 30]}
        // checkboxSelection
        getRowId={getRowId} // Set the getRowId prop

      />
    </div>
  );
};

export default Settings;
