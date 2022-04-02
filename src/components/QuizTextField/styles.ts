import styled from '@emotion/styled'

export const Input = styled("input", {
    shouldForwardProp: (prop) => prop !== "borderColor" && prop !== "width",
})<{ borderColor?: string }>(({theme, borderColor, width}) => ({
    width,
    height: '5px',
    border: '1px solid #D1D6E3',
    borderColor,
    borderRadius: '18px',
    outline: 'none',
    padding: '10px',
}));
