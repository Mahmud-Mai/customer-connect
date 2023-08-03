interface IDropDown {
  dropdownProps: {
    label: string;
    color: string;
    bg_color?: string;
  };
}

const DropDown = ({ label, color, bg_color }: IDropDown["dropdownProps"]) => {
  return (
    <select
      className={`text-3 bg-[${bg_color}] text-[${color}] hover:cursor-pointer font-normal px-3`}
      name="duration"
      id="duration"
    >
      <option value={label}>{label}</option>
    </select>
  );
};

export default DropDown;
