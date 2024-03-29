import { TextField, TextFieldProps } from '@mui/material';
import React, { memo } from 'react';

const CustomInput = ({ fullWidth, variant, ...props }: TextFieldProps) => {
    return (
        <TextField fullWidth={true} variant={variant || 'standard'} {...props} />

    )

}
export default memo(CustomInput)