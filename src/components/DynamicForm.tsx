type SectionProps = {
  title: string;
  isOrdered: boolean;
  data: string[];
  setData: React.Dispatch<React.SetStateAction<string[]>>;
};

export function DynamicFormSection(props: SectionProps) {
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
        <DynamicFormInput
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

type InputProps = {
  value: string;
  onUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
};

export function DynamicFormInput(props: InputProps) {
  return (
    <div className='recipe-form-item'>
      <input value={props.value} onChange={(e) => props.onUpdate(e)} />
      <button onClick={props.onDelete} className='button-icon' type='button'>X</button>
    </div>
  );
}