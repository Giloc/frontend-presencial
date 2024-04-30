import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useForm from 'hooks/useForm';

const LuggageForm = ({open, handleClose} : {open: boolean, handleClose: () => void}) => {
    const {
        formState,
        onInputChange,
        onResetForm,
      } = useForm({
        description: "Maleta",
        weight: 4,
        luggageType: "De mano",
        width: 10,
        height: 10,
        length: 10,
        userId: "1",
        flightId: "1",
        bookingId: "1",
        placementAreaId: "1"
    });

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        console.log(formState)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Width"
                                type="number"
                                // step="0.01"
                                name="width"
                                value={formState.width}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Height"
                                type="number"
                                // step="0.01"
                                name="height"
                                value={formState.height}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Length"
                                type="number"
                                // step="0.01"
                                name="length"
                                value={formState.length}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Weight"
                                type="number"
                                // step="0.01"
                                name="weight"
                                value={formState.weight}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                type="text"
                                name="description"
                                value={formState.description}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Luggage Type"
                                type="text"
                                name="luggageType"
                                value={formState.luggageType}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="User ID"
                                type="number"
                                name="userId"
                                value={formState.userId}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Flight ID"
                                type="number"
                                name="flightId"
                                value={formState.flightId}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Booking ID"
                                type="number"
                                name="bookingId"
                                value={formState.bookingId}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Placement Area ID"
                                type="number"
                                name="placementAreaId"
                                value={formState.placementAreaId}
                                onChange={onInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button className='bg-[#1976d2]' type="submit" variant="contained" color="primary">
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    )
}

export default LuggageForm;