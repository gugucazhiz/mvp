'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {addTest}

export default function FormColaborador() {
    return (
        <form action={addTest}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', margin: 4, gap: 2, width: "300px" }}>

                    <TextField id='filled-basic' label="Nome" variant="filled" sx={{
                        '& .MuiInputBase-root': {
                            backgroundColor: '#f0f0f0', // aqui muda o fundo do input!
                            marginBottom: 2,
                        },
                    }} />

                    <TextField id='filled-basic' label="Matricula" variant="filled" sx={{
                        '& .MuiInputBase-root': {
                            backgroundColor: '#f0f0f0',
                        }
                    }} />

                    <Button variant="contained" color="primary"> Salvar </Button>
                </Box>
            </Box>
        </form>
    )
}