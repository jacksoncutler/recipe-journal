import { EditRecipeInput } from './EditRecipeInput';

type Props = {
  title: string;
  isOrdered: boolean;
  data: string[];
  setData: (newData: string[]) => void;
};

export function EditRecipeSection(props: Props) {
  function updateHandlerFactory(index: number) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const newData = [...props.data];
      newData[index] = event.target.value;
      props.setData(newData);
    };
  }

  return (
    <div>
      <h2>{props.title}</h2>
      {props.data.map((item, i) => (
        <EditRecipeInput
          key={i}
          value={item}
          onUpdate={updateHandlerFactory(i)}
        />
      ))}
    </div>
  );
}
