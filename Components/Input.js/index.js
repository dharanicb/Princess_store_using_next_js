import { INPUT_STYLE, LABEL_STYLES } from "../utils/constants/InputStyles";

const Input = ({
    label,
    value,
    onChange,
    className,
    labelStyle,
    keyValue,
    keyName,
    optionValue,
    type,
    checked,
    ModuleName,
    placeholder,
    ReadInput,
    style,
    name,
    containerStyle,
}) => {


    const renderInputs = () => {
        switch (type) {
          case "textarea":
            return (
              <textarea
                className={`${INPUT_STYLE} ${ReadInput}`}
                name={label}
                value={value}
                onChange={onChange}
                rows={4}
                placeholder={placeholder}
                style={style}
              />
            );
    
          case "select":
            return (
              <select
                className={`text-md ${INPUT_STYLE} ${ReadInput}`}
                style={style}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
              >
                <option value={""}>
                  {optionValue && optionValue}
                </option>
                {ModuleName?.map((each, index) => (
                  <option key={index} value={each[keyValue]}>
                    {each[keyName]}
                  </option>
                ))}
              </select>
            );
    
          default:
            return (
                <input type={type ? type : "text"}
                id="floating_outlined"
                // className={`${Inpu_Styles} ${ReadInput} border-2 border-slate-300`}
                className={`${INPUT_STYLE} ${ReadInput}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                style={style}
                checked={checked}
            />
            );
        }
      };


    return (
        <div className={`relative ${className}`}>
            {renderInputs()}
            <label htmlFor="floating_outlined" className= {`${LABEL_STYLES} ${labelStyle}`}>{label}</label>
        </div>
    );
};

export default Input;
