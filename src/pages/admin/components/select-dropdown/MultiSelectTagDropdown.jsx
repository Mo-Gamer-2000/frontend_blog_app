import AsyncSelect from "react-select/async";

const MultiSelectTagDropdown = ({
  defaultValue = [],
  loadOptions,
  onChange,
}) => {
  return (
    <AsyncSelect
      defaultValue={defaultValue}
      defaultOptions={true}
      isMulti={true}
      loadOptions={loadOptions}
      className="relative z-20"
      onChange={onChange}
    />
  );
};

export default MultiSelectTagDropdown;
