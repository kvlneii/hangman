import styles from './Button.module.scss';

type ButtonProps = {
  label: string;
  restartGame: () => void;
};

export function Button({ label, restartGame }: ButtonProps) {
  return (
    <button className={`${styles.btn}`} onClick={restartGame}>
      {label}
    </button>
  );
}
