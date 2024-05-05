import { Typography } from '@mui/material'
import React from 'react'

const CopyRight = (props) => {
    return (

            <Typography variant="body1" fontWeight="bold" color="text.secondary" align="center" {...props} style={{ color: '#1976d2',  }}>
                {' '}
                {new Date().getFullYear()}
                {/* {'.'} */}
                {' © '}
                Developed By Ranu Mali
            </Typography>
    )
}

export default CopyRight