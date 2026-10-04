import Icon from '../Icon.jsx';

export default function OptionItem({ option, name, selected, onSelect }) {
  const focusRing = 'focus-within:ring-2 focus-within:ring-secondary/40';

  if (selected) {
    return (
      <label
        className={`group relative flex items-center justify-between p-4 rounded-xl cursor-pointer bg-secondary-container/30 shadow-sm transition-all ${focusRing}`}
      >
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary text-on-secondary font-label-md text-label-md font-semibold">
            {option.id}
          </span>
          <div className="flex flex-col">
            <span className="font-body-md text-body-md text-on-surface font-semibold">{option.text}</span>
            <span className="font-label-sm text-label-sm text-on-secondary-container">
              Candidate selected option
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="check_circle" filled className="text-secondary text-[22px]" />
          <input
            className="sr-only"
            type="radio"
            name={name}
            value={option.id}
            checked
            onChange={() => onSelect(option.id)}
          />
        </div>
      </label>
    );
  }

  return (
    <label
      className={`group relative flex items-center justify-between p-4 rounded-xl cursor-pointer bg-surface-container-lowest hover:bg-surface-container-low transition-all shadow-sm ${focusRing}`}
    >
      <div className="flex items-center gap-4">
        <span className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors">
          {option.id}
        </span>
        <span className="font-body-md text-body-md text-on-surface">{option.text}</span>
      </div>
      <input
        className="w-4 h-4 text-secondary accent-secondary focus:ring-0"
        type="radio"
        name={name}
        value={option.id}
        checked={false}
        onChange={() => onSelect(option.id)}
      />
    </label>
  );
}
