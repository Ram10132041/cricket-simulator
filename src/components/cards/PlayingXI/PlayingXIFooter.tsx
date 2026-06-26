interface Props {
  disabled: boolean;
  onSubmit: () => void;
}

const PlayingXIFooter = ({ disabled, onSubmit }: Props) => {
  return (
    <button
      onClick={onSubmit}
      disabled={disabled}
      className="
        w-full
        py-3
        bg-green-600
        text-white
        rounded-lg
        hover:bg-green-700
        disabled:opacity-50
      "
    >
      Submit Playing XI
    </button>
  );
};

export default PlayingXIFooter;
