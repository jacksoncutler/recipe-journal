type Props = {
  value: string;
  onUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
};

export function DynamicFormInput(props: Props) {
  return (
    <div className='recipe-form-item'>
      <input value={props.value} onChange={(e) => props.onUpdate(e)} />
      <button onClick={props.onDelete} className='button-icon' type='button'>X</button>
    </div>
  );
}
