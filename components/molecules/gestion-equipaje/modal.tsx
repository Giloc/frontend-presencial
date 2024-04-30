import { Box, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { LuggageType } from 'models/Luggage';


const LuggageModal = ({open, handleClose, luggages} : {open: boolean, handleClose: () => void, luggages: LuggageType[]}) => {
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
    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <div>
                    {luggages.length > 0 ? (
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Anchura</TableCell>
                                        <TableCell>Altura</TableCell>
                                        <TableCell>Longitud</TableCell>
                                        <TableCell>Peso</TableCell>
                                        <TableCell>Descripción</TableCell>
                                        <TableCell>Tipo de Equipaje</TableCell>
                                        <TableCell>Eliminar</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {luggages.map((luggage, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{luggage.width}</TableCell>
                                            <TableCell>{luggage.height}</TableCell>
                                            <TableCell>{luggage.length}</TableCell>
                                            <TableCell>{luggage.weight}</TableCell>
                                            <TableCell>{luggage.description}</TableCell>
                                            <TableCell>{luggage.luggageType}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => {}}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <p>No hay equipaje</p>
                    )}
                </div>
            </Box>
        </Modal>
    )
}

export default LuggageModal