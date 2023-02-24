interface TileProps {
  onClick: () => void;
  value: string | null;
  label: string;
};

const Tile = ({ value, onClick }: TileProps) => {
  return (
    <button
      aria-label={"tile"}
      className="rounded-xl font-bold text-4xl sm:text-6xl text-white bg-indigo-500 w-20 h-20 sm:w-32 sm:h-32"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Tile;
