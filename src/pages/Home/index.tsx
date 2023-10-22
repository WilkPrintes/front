import { Box, Container, TextField, Typography, SideBox, Button } from "@components";
import { Alert, CircularProgress, Collapse, Modal } from "@mui/material";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [errorExist, setErrorExist] = useState(false);
    const handleAlert = () => {
        setErrorExist(true);
        setInterval(() => {
            setErrorExist(false);
        }, 5000)
    };

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '20rem',
        bgcolor: 'background.paper',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '1rem'
    };

    const styledAlert = {
        position: 'absolute' as 'absolute',
        left: '100%',
        transform: 'translate(-100%, 0%)',
        width: '20rem',
    }

    //test delele this after
    function delayTest() {
        handleOpen();

        setTimeout(() => {
            handleAlert()
            handleClose()
        }, 3000)
    }

    return (
        <>
            <Modal
                open={open}
            >
                <Box sx={style}>
                    <Typography variant="h5" > Aguarde </Typography>
                    <CircularProgress sx={{
                        margin: '1rem'
                    }} />
                </Box>
            </Modal>

            <Box sx={styledAlert}>
                <Collapse in={errorExist}>
                    <Alert severity="warning" variant="filled">
                        Não foi possível encontrar o Part Number
                    </Alert>
                </Collapse>
            </Box>

            <Box sx={{ display: 'flex', height: '100vh' }}>
                <SideBox >
                    <Typography variant="h4">
                        Pesquise e avalie opções equivalentes de injetores com todos seus dados disponíveis em um só lugar
                    </Typography>
                    <Box component="img" src="logoBosch.png" sx={{
                        width: '70%',
                        alignSelf: 'center'
                    }} />
                </SideBox>

                <SideBox>
                    <Box sx={{
                        display: 'flex',
                        width: '35vw',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '5rem',
                        bgcolor: "#D9D9D9",
                        padding: '3rem',
                        borderRadius: '1rem',
                    }}>
                        <Typography variant="h4"> Insira o Part Number </Typography>
                        <TextField label="Part Number" variant="filled" required />
                        <Box sx={{ display: 'flex', width: '100%', gap: '1rem' }}>
                            <Button variant="contained" onClick={delayTest}>Buscar</Button>
                            <Button variant="contained">Pequisa Avançada</Button>
                        </Box>
                    </Box>
                </SideBox>
            </Box>
        </>
    )
}