type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: 'name' | 'externalLink';
  isValid: boolean;
};

const invalidMessage = {
  name: 'Name cannot be blank',
  externalLink: 'Please enter a valid URL',
};

export function ValidatedInput(props: Props) {
  return (
    <>
      <input value={props.value} onChange={props.onChange} />
      {props.isValid ? <></> : <p>{invalidMessage[props.type]}</p>}
    </>
  );
}
