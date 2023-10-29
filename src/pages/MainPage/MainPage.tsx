import { useEffect, useState, useCallback } from 'react';

import { HangmanWord, Keyboard, Button } from '../../components/index';
import { HangmanDrawing } from '../../containers/index';

import words from '../../data/wordList.json';
import './MainPage.scss';

function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function MainPage() {
    const [wordToGuess, setWordToGuess] = useState(getWord());
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

    const isLoser = incorrectLetters.length >= 6;

    const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return;

            setGuessedLetters((currentLetters) => [...currentLetters, letter]);
        },
        [guessedLetters, isLoser, isWinner]
    );

    const restartGame = () => {
        setGuessedLetters([]);
        setWordToGuess(getWord());
    };

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) return;

            e.preventDefault();
            addGuessedLetter(key);
        };

        document.addEventListener('keypress', handler);

        return () => {
            document.removeEventListener('keypress', handler);
        };
    }, [addGuessedLetter]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (key !== 'Enter') return;

            e.preventDefault();
            restartGame();
        };

        document.addEventListener('keypress', handler);

        return () => {
            document.removeEventListener('keypress', handler);
        };
    }, []);

    return (
        <div
            style={{
                maxWidth: '1200px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0 auto',
                marginTop: '1.5rem'
            }}>
            <div
                style={{
                    alignSelf: 'stretch',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}>
                <Keyboard
                    disabled={isWinner || isLoser}
                    activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter}
                />

                <Button label={'Restart'} restartGame={restartGame} />

                <div
                    style={{
                        fontSize: '2rem',
                        marginTop: '1rem'
                    }}>
                    {isWinner && 'You win!'}
                    {isLoser && 'Nice try'}
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyItems: 'center',
                    minWidth: '700px',
                    overflow: 'hidden'
                }}>
                <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
                <HangmanWord
                    guessedLetters={guessedLetters}
                    wordToGuess={wordToGuess}
                    reveal={isLoser}
                />
            </div>
        </div>
    );
}

export default MainPage;
