import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"

const instance = axios.create({
  withCredentials: true
})

function EditUsername() {
  const [open, setOpen] = React.useState(false)
  const [username, setUsername] = React.useState("")
  const userid = useSelector(state => state._id)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()

  function onSubmit(e) {
    e.preventDefault();
    const newUsername = {
      username: username,
    };

    const authToken = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    
    instance
    .post("http://localhost:5000/users/update/"+userid, newUsername, authToken)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.token) {
          dispatch({type: "CHANGE_TOKEN", token: res.data.token})
        }
        dispatch({type: "CHANGE_USERNAME", username: username})
      } else {
        // useAlert("Sorry, can you please try again?");
        console.log(res.data);
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={ <div className="modifySelection">
      <b>Change Username</b>
      <br />
      <br />
      Your name that will be shown to others on BuildingBlocks
    </div>}
    >
      <Modal.Header>Change username</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {/* <Header>Enter new username</Header> */}
          <form onSubmit={onSubmit}>
            <input 
              type="text" 
              placeholder="New Username"
              name = "Username"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
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

export default EditUsername