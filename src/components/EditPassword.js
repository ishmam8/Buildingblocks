import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"

function EditPassword() {
  const [open, setOpen] = React.useState(false)
  const [password, setPassword] = React.useState("")
  const userid = useSelector(state => state._id)
  const dispatch = useDispatch()

  function onSubmit(e) {
    e.preventDefault();

    const newPassword = {
      password: password,
    };

    setPassword("");
    
    axios.post("http://localhost:5000/users/update/"+userid, newPassword).then((res) => {
      if (res.data === "User updated!") {
        console.log(res.data);
        dispatch({type: "CHANGE_PASSWORD", password: password})
      } else {
        // useAlert("Sorry, can you please try again?");
        console.log(res.data);
      }
    });
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={ <div className="modifySelection">
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
          <form onSubmit={onSubmit}>
            <input 
               type="text" 
               placeholder="New Password"
               name = "Password"
               required
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               /> 
          </form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Return
        </Button>
        <Button
          content="Save"
          labelPosition='right'
          icon='checkmark'
          onClick={onSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditPassword

