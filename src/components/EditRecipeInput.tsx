type Props = {
  value: string;
  onUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
};

export function EditRecipeInput(props: Props) {
  return (
    <div className='recipe-form-item'>
      <input value={props.value} onChange={(e) => props.onUpdate(e)} />
      <button type='button' onClick={props.onDelete}>X</button>
    </div>
  );
}
