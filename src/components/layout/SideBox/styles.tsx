import { Box, styled } from '@mui/material';

const CustomSideBox = styled(Box)(({ theme }) => ({
    bgcolor: '#fffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '50vw',
    padding: '10rem',
    gap: '5rem'
}));

export default CustomSideBox;
