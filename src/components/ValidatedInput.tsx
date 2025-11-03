import { invalidInputMessages } from '../validation';
import type { InvalidInputMessages } from '../types';

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: keyof InvalidInputMessages;
  isValid: boolean;
};

export function ValidatedInput(props: Props) {
  return (
    <span className='recipe-form-item'>
      <input value={props.value} onChange={props.onChange} />
      {props.isValid ? <></> : <p>{invalidInputMessages[props.type]}</p>}
    </span>
  );
}
