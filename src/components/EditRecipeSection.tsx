type Props = {
  title: string;
  isOrdered: boolean;
  data: string[];
  setData: (newData: string[]) => void;
};

export function EditRecipeSection(props: Props) {
  function updateHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const newData = [...props.data];
    newData[index] = e.target.value;
    props.setData(newData);
  }

  return (
    <div>
      <h2>{props.title}</h2>
      {props.data.map((item, i) => (
        <input key={i} value={item} onChange={(e) => updateHandler(e, i)} />
      ))}
    </div>
  );
}
