import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"

function EditEmail() {
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const userid = useSelector(state => state._id)
  const dispatch = useDispatch()

  function onSubmit(e) {
    e.preventDefault();

    const newEmail = {
      email: email,
    };

    setEmail("");
    
    axios.post("http://localhost:5000/users/update/"+userid, newEmail).then((res) => {
      if (res.data === "User updated!") {
        console.log(res.data);
        dispatch({type: "CHANGE_EMAIL", email: email})
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
      <b>Change Email</b>
      <br />
      <br />
      The email associated with your BuildingBlocks account
    </div>}
    >
      <Modal.Header>Change email</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {/* <Header>Enter new email</Header> */}
          <form onSubmit={onSubmit}>
            <input 
               type="text" 
               placeholder="New Email"
               name = "Email"
               required
               onChange={(e) => setEmail(e.target.value)}
               value={email}
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

export default EditEmail

