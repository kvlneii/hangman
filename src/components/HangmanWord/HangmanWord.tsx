type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        fontSize: '4rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'Tilt Neon',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span
          style={{
            borderBottom: '.1em solid #1f1065',
            width: '3.1rem',
            textAlign: 'center',
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal
                  ? '#e11d48'
                  : '#1f1065',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
