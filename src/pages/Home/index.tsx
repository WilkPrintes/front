import { Box, Container, TextField, Typography, SideBox, Button } from "@components";

export default function Home() {
    return (
        <>
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <SideBox >
                    <Typography variant="h4">
                        Pesquise e avalie opções equivalentes de injetores com todos seus dados disponíveis em um só lugar
                    </Typography>
                    <Box component="img" src="logoBosch.png" sx={{
                        width: '70%',
                        alignSelf: 'center'
                    }}/>
                </SideBox>

                {/* <SideBox sx={{ bgcolor: "#000E5A" }}> */}
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
                            <Button variant="contained">Buscar</Button>
                            <Button variant="contained">Pequisa Avançada</Button>
                        </Box>
                    </Box>
                </SideBox>
            </Box>
        </>
    )
}