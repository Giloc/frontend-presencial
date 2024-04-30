'use client';
import React from 'react';
import BaggageTable from 'components/organisms/gestion-equipaje/baggageTable';
import { useState } from 'react';
import Button from '@mui/material/Button';
import BuggageModal from 'components/molecules/gestion-equipaje/modal';


const BaggageSection = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [luggages, setLuggages] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //pendiente integrar get y delete de luggages request

  return (
    <div>
      <div className="flex justify-center mt-28">
        <div className="mx-auto max-w-screen-lg">
          <h1 className="text-3xl font-semibold text-cyan-500 mb-4">Reserva: ########</h1>
          <h2 className="text-2xl text-cyan-500 mb-4">Nombre de Pasajero</h2>
          <p className="text-gray-500 text-xl">
            Ten en cuenta nuestras políticas para equipaje, peso, dimensiones, equipaje
            especial, entre otros.
          </p>
          <BaggageTable />
          <div className='flex justify-center mb-8'>
            <Button className='bg-[#1976d2]' variant='contained' onClick={handleOpen}>Ver mi equipaje</Button>
          </div>
          <BuggageModal open={open} handleClose={handleClose} luggages={luggages}></BuggageModal>
        </div>
      </div>
    </div>
  )
}

export default BaggageSection
