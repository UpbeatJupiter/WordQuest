import { Container, Typography } from '@mui/material';
import Flashcard from './components/Flashcard';

function App() {
  const words = [
    { word: "Hello", example: "Hello! How are you?" },
    { word: "World", example: "The world is beautiful." },
  ];

  return (
    <Container maxWidth="sm" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        WordQuest Flashcards
      </Typography>
      {words.map((w, idx) => (
        <Flashcard key={idx} word={w.word} example={w.example} />
      ))}
    </Container>
  );
}

export default App;
