import * as React from 'react';
import './Navbar.css'
import Switch from '@mui/material/Switch';

function SwitchUse() {
   

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
  return (
   
      
        <Switch checked={checked} onChange={handleChange} label="Open" defaultChecked />

      )
    
}
export default SwitchUse;