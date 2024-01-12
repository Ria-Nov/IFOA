import Dropdown from 'react-bootstrap/Dropdown';

function CustomProfile() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent" className="text-light" id="dropdown-basic">
        <img src="../src/assets/media/avatar.png" alt="avatar" width="30px"/>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-end">
        <Dropdown.Item href="#/action-1">Manage profiles</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Account</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Help Center</Dropdown.Item>
        <hr className="dropdown-divider"/>
        <Dropdown.Item href="#/action-3">Signout Netflix</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomProfile;