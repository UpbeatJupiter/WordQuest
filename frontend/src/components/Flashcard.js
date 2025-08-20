import { Card, CardContent, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function Flashcard({ word, example }) {
  const [showExample, setShowExample] = useState(false);

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{word}</Typography>
        {showExample && <Typography variant="body1">{example}</Typography>}
        <Button variant="contained" sx={{ marginTop: 1 }} onClick={() => setShowExample(!showExample)}>
          {showExample ? "Hide Example" : "Show Example"}
        </Button>
      </CardContent>
    </Card>
  );
}
