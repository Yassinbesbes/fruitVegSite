import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Image from 'react-bootstrap/Image';
import './style.css';

import plus from '../../assets/images/icone/plus.png';
import mois from '../../assets/images/icone/mois.png';
import fleche_verslebas from '../../assets/images/icone/fleche_verslebas.png';

export default function MediaCard({ src, title }) {
  const CustomDropdown = () => {
    const [selected, setSelected] = useState('kg');
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
    };

    return (
    <div className="dropdown-container">
      <div className="custom-dropdown" onClick={handleClick}>
        <span>{selected}</span>
        <div className="dropdown-icon">
          <Image src={fleche_verslebas} alt="fleche"/>
        </div>
      </div>
      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleSelect('kg')}>kg</div>
          <div className="dropdown-item" onClick={() => handleSelect('g')}>g</div>
          <div className="dropdown-item" onClick={() => handleSelect('lb')}>lb</div>
          <div className="dropdown-item" onClick={() => handleSelect('oz')}>oz</div>
        </div>
      )}
    </div>
    );
  };

  const Counter = () => {
    const [value, setValue] = useState(2);

    const handleIncrement = () => {
      setValue(value + 1);
    };

    const handleDecrement = () => {
      if (value > 0) {
        setValue(value - 1);
      }
    };

    const handleChange = (e) => {
      const newValue = parseInt(e.target.value, 10);
      if (!isNaN(newValue)) {
        setValue(newValue);
      }
    };

    return (
      <div className="counter">
        <button className="counter-button" onClick={handleDecrement}><Image src={mois} alt="mois"/></button>
        <input type="number" value={value} onChange={handleChange} readOnly />
        <button className="counter-button" onClick={handleIncrement}><Image src={plus} alt="plus"/></button>
      </div>
    );
  };

  return (
    <Card sx={{ maxWidth: 300 }} style={{backgroundColor:"#d9d9d9", borderRadius:"30px"}}>
                <Box
        sx={{
          height: 200, // Updated height for the image
          width: 300, // Updated width for the image
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: '30px 30px 0 0', // Example of border radius for the top corners
          paddingTop:'12px',
        }}
      >
        <img
          src={src}
          alt={title}
          style={{
            height: '90%',
            width: '90%',
            objectFit: 'contain', // Ensure the image fits within the specified dimensions without stretching
          }}
        />
      </Box>
      <CardContent>
        <Typography textAlign="center" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Item>
                <Counter />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <CustomDropdown />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Grid display="flex" justifyContent="center" alignItems="center">
      <button size="small" className='bannerbutton'>Add to Banner</button>
      </Grid>
    </Card>
  );
}
