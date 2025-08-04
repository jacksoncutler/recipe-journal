import { EditRecipeInput } from './EditRecipeInput';

type Props = {
  title: string;
  isOrdered: boolean;
  data: string[];
  setData: React.Dispatch<React.SetStateAction<string[]>>;
};

export function EditRecipeSection(props: Props) {
  function updateHandlerFactory(index: number) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      props.setData((prevData) => {
        prevData[index] = event.target.value;
        return [...prevData];
      });
    };
  }

  function deleteHandlerFactory(index: number) {
    return () => {
      props.setData(props.data.filter((_, i) => i !== index));
    };
  }

  function newInputHandler() {
    props.setData((prevData) => [...prevData, '']);
  }

  return (
    <div className='recipe-form section'>
      <h2>{props.title}</h2>
      {props.data.map((item, i) => (
        <EditRecipeInput
          key={i}
          value={item}
          onUpdate={updateHandlerFactory(i)}
          onDelete={deleteHandlerFactory(i)}
        />
      ))}
      <button onClick={newInputHandler} className='button-icon' type='button'>+</button>
    </div>
  );
}
