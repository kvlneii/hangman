import { Body, Head, LeftArm, LeftLeg, RightArm, RightLeg } from '../../components/index';

type HangmanDrawingProps = {
    numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    const bodyParts = [Head(), Body(), RightArm(), LeftArm(), RightLeg(), LeftLeg()].slice(
        0,
        numberOfGuesses
    );

    return (
        <div
            style={{
                position: 'relative',
                marginLeft: '70px'
            }}>
            {bodyParts}

            <div
                style={{
                    height: '50px',
                    width: '10px',
                    background: '#1f1065',
                    top: 0,
                    right: 0,
                    position: 'absolute'
                }}
            />
            <div
                style={{
                    height: '10px',
                    width: '200px',
                    background: '#1f1065',
                    marginLeft: '120px'
                }}
            />
            <div
                style={{
                    height: '400px',
                    width: '10px',
                    background: '#1f1065',
                    marginLeft: '120px'
                }}
            />
            <div style={{ height: '10px', width: '250px', background: '#1f1065' }} />
        </div>
    );
}
