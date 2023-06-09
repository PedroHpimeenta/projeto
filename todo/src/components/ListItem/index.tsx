import * as C from './styles';
import {Item} from '../../types/Item';
import { useState } from 'react';

type Props = {
    item : Item
}
export const ListItem = ({item}: Props) => {
    const[isCheked,setIsChecked] = useState(item.done);

    return (
      <C.Container done={isCheked}>
      <input 
        type="checkbox"
        checked={isCheked}
        onChange={e => setIsChecked(e.target.checked)}/> 
      <label>{item.name}</label>
      </C.Container>
    );

}