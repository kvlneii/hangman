import styles from './Keyboard.module.scss';
import { keys } from '../../consts/index';

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        maxWidth: '500px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem',
        fontFamily: 'Tilt Neon',
      }}
    >
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            disabled={isInactive || isActive || disabled}
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ''} ${
              isInactive ? styles.inactive : ''
            }`}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
