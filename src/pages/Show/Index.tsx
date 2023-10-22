import { Box, Typography } from "@/components";
import { Divider, List, ListItem, ListItemButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function Show() {
    return (
        <>
            <Box sx={{
                // bgcolor: '#000E5A',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                // padding: '10rem',
                // gap: '5rem'
            }} >
                <Box sx={{
                    bgcolor: "#D9D9D9",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    padding: '2rem',
                    alignSelf: 'center',
                    borderRadius: '1rem'
                }}>
                    <Typography variant="h3"> Part Number: xxxxxxxxxx</Typography>
                    <Box sx={{
                        display: 'flex',
                    }}>
                        <Box>
                            <List>
                                <ListItem>
                                    <ListItemButton>
                                        1234567891
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        1234567892
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        1234567893
                                    </ListItemButton>
                                </ListItem><ListItem>
                                    <ListItemButton>
                                        1234567894
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <Box component={Paper} sx={{
                            // padding: '1rem',
                            alignItems: 'center',
                            textAlign: 'center',
                            border: '5px solid #1976D2'
                        }}>
                           <Typography sx={{
                            bgcolor: '#1976D2',
                            padding: '5px'
                           }} >XXXXXXXXXX</Typography>
                            <TableBody>
                                <TableRow>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                    <TableCell> Identificador </TableCell>
                                    <TableCell> Valor </TableCell>
                                </TableRow>
                            </TableBody>
                        </Box>
                        <Table>

                        </Table>
                    </Box>
                </Box>
            </Box>
        </>
    )
}