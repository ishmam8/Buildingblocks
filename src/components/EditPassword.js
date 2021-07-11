import React, { useState } from 'react'
import { Button, Modal, Message, Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"

const instance = axios.create({
  withCredentials: true
})

function EditPassword() {
  const [open, setOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const userid = useSelector(state => state._id);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token)

  function onSubmit(e) {
    e.preventDefault();

    const authToken = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    
    if (newPassword != confirmPassword) {
      setErrorMessage("Passwords do not match");
      setShowError(true);
      setShowSuccess(false);
    }
    else {
      const newPasswordObj = {
        password: newPassword,
      };
      
      // setCurrentPassword("");
      // setNewPassword("");
      // setConfirmPassword("");
      
      instance
      .post("http://localhost:5000/users/update/" + userid, newPasswordObj, authToken)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.token) {
            dispatch({type: "CHANGE_TOKEN", token: res.data.token})
          }
          // dispatch({ type: "CHANGE_PASSWORD", password: res.data.password })
          setShowSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data == "Error: Invalid Current Password") {
          setErrorMessage("Invalid Current Password");
          setShowError(true);
          setShowSuccess(false);
        }
        else{
          setErrorMessage("An error occured.");
          setShowError(true);
          setShowSuccess(false);
        }
      });
    }
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className="modifySelection">
        <b>Change Password</b>
        <br />
        <br />
      The password you use to log-in to your BuildingBlocks account
    </div>}
    >
      <Modal.Header>Change password</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {/* <Header>Enter new password</Header> */}
          <div className="ui centered grid">
            <div className="ten wide column">
              <Message negative hidden={!showError}>
                <Message.Header>ERROR</Message.Header>
                <p>{errorMessage}</p>
              </Message>
              <Message positive hidden={!showSuccess}>
                <Message.Header>SUCESS</Message.Header>
                <p>Password successfully changed.</p>
              </Message>
              <form onSubmit={onSubmit}>
                <Input
                  type="password"
                  label="Current password"
                  required
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  value={currentPassword}
                  fluid
                />
                <br />
                <br />
                <Input
                  type="password"
                  label="New password"
                  name="Password"
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  fluid
                />
                <br />
                <br />
                <Input
                  type="password"
                  label="Confirm password"
                  name="Password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  fluid
                />
              </form>
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Set Password"
          labelPosition='right'
          icon='checkmark'
          onClick={onSubmit}
          positive
        />
      </Modal.Actions>
    </Modal >
  )
}

export default EditPassword

