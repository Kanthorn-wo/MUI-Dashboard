// EditModal.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { userUpdate } from '../../Function/Settings';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const EditUserModal = ({ open, onClose, userId, userData, onSave }) => {
  const [editedData, setEditedData] = useState({});
  const token = useSelector((state) => state.user.user.token)



  useEffect(() => {

    setEditedData(userData || {});
  }, [userData]);

  const handleSave = () => {
    userUpdate(token, editedData, userId)
      .then((res) => {
        toast.success(res.data.message)
        onSave(userId, editedData);
      }).catch((err) => {
        console.log(err)
        toast.error(err.response.data.error)
      })

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          value={editedData.name || ''}
          onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
          fullWidth
          margin="dense"
        />
        {/* Add other input fields for editing as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserModal;
