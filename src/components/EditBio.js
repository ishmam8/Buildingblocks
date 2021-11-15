import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"

const instance = axios.create({
  withCredentials: true
})

function EditBio() {
  console.log(useSelector(state => state))
  const [open, setOpen] = React.useState(false)
  const [bio, setBio] = React.useState("")
  const [info, setInfo] = React.useState()
  
  const userid = useSelector(state => state._id)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()
  
  function onSubmit(e) {
    e.preventDefault();  
    const newBio = {
      bio: bio,
      club: ["neuroscience"],
      userRole: "Mentor",
    };
    
    const newInfo = {
      club: "neuroscience",
      userRole: "Mentor"
    };
    
    const authToken = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    
    instance
    .post("http://localhost:5000/users/update/" + userid, newBio, authToken)
    .then((res) => {
      if (res.status === 200) {
        if (res.data.token) {
          dispatch({type: "CHANGE_TOKEN", token: res.data.token})
        }
      dispatch({type: "CHANGE_BIO", bio: bio})
      //dispatch({type: "CHANGE_CLUB_USERROLE", club: ["neuroscience"], userRole: "Mentor"})
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
      <b>Change Bio</b>
      <br />
      <br />
        A summary of yourself that will help others get to know you on BuildingBlocks
    </div>}
    >
      <Modal.Header>Change Bio</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {/* <Header>Enter new username</Header> */}
          <form onSubmit={onSubmit}>
            <input 
              type="text" 
              placeholder="New bio"
              name = "bio"
              required
              onChange={(e) => setBio(e.target.value)}
              value={bio}
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

export default EditBio