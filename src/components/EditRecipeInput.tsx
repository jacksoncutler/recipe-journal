type Props = {
  value: string;
  onUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function EditRecipeInput(props: Props) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onUpdate(e)}
    />
  );
}
