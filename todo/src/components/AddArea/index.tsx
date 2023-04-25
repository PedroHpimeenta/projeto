import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter : (taskname : string) => void
};
export const AddArea = ({onEnter}:Props) => {
    const [inputText, setInputText] = useState('');

    const handlekeyup = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
    };
    }
    return (
        <C.Container>
            <div className="image">+</div>
            <input type="text"
            placeholder="Adicione"
            value={inputText}
            onChange={e=> setInputText(e.target.value)}
            onKeyUp={handlekeyup}
            />
        </C.Container>
    );
};