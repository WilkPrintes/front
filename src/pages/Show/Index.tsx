import { Box, Typography } from "@/components";
import { Divider, List, ListItem, ListItemButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function Show() {
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
                        <List sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: "#1976D2",
                        }}>
                            <Typography variant="body1" sx={{
                                color: '#ffff',
                                padding: '1rem'
                            }}> Part Numbers relacionados</Typography>
                            <ListItem sx={{
                                bgcolor: "#ffff",
                                borderRadius: '.5rem',
                                border: '5px solid #1976D2'
                            }}>
                                <ListItemButton>
                                    1234567891
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{
                                bgcolor: "#ffff",
                                borderRadius: '.5rem',
                                border: '5px solid #1976D2'
                            }}>
                                <ListItemButton>
                                    1234567892
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{
                                bgcolor: "#ffff",
                                borderRadius: '.5rem',
                                border: '5px solid #1976D2'
                            }}>
                                <ListItemButton>
                                    1234567893
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{
                                bgcolor: "#ffff",
                                borderRadius: '.5rem',
                                border: '5px solid #1976D2'
                            }}>
                                <ListItemButton>
                                    1234567894
                                </ListItemButton>
                            </ListItem>
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