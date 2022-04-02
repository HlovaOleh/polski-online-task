import {styled} from '@mui/material'

export const Dot = styled("div", {
    shouldForwardProp: (prop) => prop !== "backgroundColor",
})<{ backgroundColor?: string }>(({ theme, backgroundColor }) => ({
    height: '7px',
    width: '7px',
    borderRadius: '50%',
    backgroundColor,
}));
