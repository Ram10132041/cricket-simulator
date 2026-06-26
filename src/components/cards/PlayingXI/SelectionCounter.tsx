interface Props {
  count: number;
}

const SelectionCounter = ({ count }: Props) => {
  return <div className="mb-4 text-center">Selected: {count} / 11</div>;
};

export default SelectionCounter;
