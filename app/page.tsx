'use client';

import { useState } from 'react';
import Image from 'next/image'
import { Box, Container, Card, CardHeader, CardContent, TextField, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  const [auth, setAuth] = useState<void>(undefined);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <main className="flex flex-col items-center justify-center w-full h-full">
        <Container>
          <Box>
            {auth == null ? <SigIn setAuth={setAuth}/> : null}
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  )
}

type SigInProps = {
  setAuth: (auth: void) => void,
};

function SigIn({setAuth}: SigInProps) {
  return (
    <Card>
      <CardHeader>
        <Typography variant="subtitle1">Subtitle</Typography>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <TextField required id="username" label="Username"/>
          <TextField required id="password" type="password" label="Password" autoComplete="current-password"/>
          <Button variant="contained">Sig in</Button>
        </div>
      </CardContent>
    </Card>
  );
}