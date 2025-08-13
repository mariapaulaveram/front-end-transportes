import Dropdown from 'react-bootstrap/Dropdown';

function NosotrosDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Nosotros
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Quienes Somos</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Reseña Historica</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Nuestros Clientes</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NosotrosDropdown;
