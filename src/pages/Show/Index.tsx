import { Box, Typography, List, ListItem, ListItemButton } from "@/components";
import { Divider, Paper, TableBody, TableCell, TableRow } from "@mui/material";

export default function Show() {

    const PN = ['1234567891', '1234567892', '1234567893', '1234567894']

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                gap: '1rem'
            }} >
                <Typography variant="h4"> Part Number: xxxxxxxxxx</Typography>
                <Box sx={{
                    display: 'flex',
                    gap: '1rem'
                }}>
                    <Box>
                        <List>
                            <Typography variant="body1" sx={{
                                color: '#ffff',
                                padding: '1rem'
                            }}> Part Numbers relacionados</Typography>
                            {PN.map((e) => {
                                return (
                                    <ListItem>
                                        <ListItemButton>
                                            {e}
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                    <Box component={Paper} sx={{
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '5px solid #1976D2'
                    }}>
                        <Typography sx={{
                            bgcolor: '#1976D2',
                            padding: '5px',
                            color: '#ffff'
                        }} >XXXXXXXXXX</Typography>
                        <TableBody>
                            <TableRow >
                                <TableCell sx={{
                                    color: '#1976D2',
                                    fontWeight: '600',
                                }} > Identificador </TableCell>
                                <TableCell> Valor </TableCell>
                                <Divider variant="inset" />
                                <TableCell sx={{
                                    color: '#1976D2',
                                    fontWeight: '600',
                                }} > Identificador </TableCell>
                                <TableCell> Valor </TableCell>
                            </TableRow>
                        </TableBody>
                    </Box>
                </Box>
            </Box>
        </>
    )
}