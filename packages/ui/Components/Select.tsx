import * as React from 'react';
import { inputContainer } from "../Theme/input";
import { Label } from "../Components/Label";
import { Button, ButtonType } from '../Components/Button';
import { FiChevronDown } from 'react-icons/fi';
import { selectIconCSS, selectInputCSS, optionCSS, optionsCSS } from '../Theme/select';

export interface Selected<ValueType> {
  name: string,
  value: ValueType
}

export interface SelectProps<ValueType> {
  label?: string,
  value?: Selected<ValueType>,
  placeholder?: string,
  children: React.ReactElement[],
  onChange?: (value: Selected<ValueType>, isValid?: boolean) => any
}

const SelectContext = React.createContext([]);

export function Select<ValueType>(props: SelectProps<ValueType>) {

  const initalValue: Selected<ValueType> = props.value;
  const [value, setValue] = React.useState(initalValue);
  const [isOpen, setOpen] = React.useState(false);

  const changeTo = (selected: Selected<ValueType>) => {
    setValue(selected);
    setOpen(false);
    props.onChange && props.onChange(selected);
  };

  return (
    <SelectContext.Provider value={[changeTo]}>
      <div
        style={inputContainer()}>
        <Label>{props.label}</Label>
        <div style={selectIconCSS(isOpen)}><FiChevronDown /></div>
        <input
          onClick={() => setOpen(true)}
          onFocus={() => setOpen(true)}
          placeholder={props.placeholder}
          style={selectInputCSS()}
          onChange={() => setOpen(false)} //TODO: set blur action to close
          value={value.name} />
        <div style={optionsCSS(isOpen)}>
          {props.children}
        </div>
      </div>
    </SelectContext.Provider>
  );
};

export interface OptionProps {
  children: string,
  value: string
}

export const Option = (props: OptionProps) => {
  const [changeTo] = React.useContext(SelectContext);
  const onClickEvent = () => {
    changeTo({ name: props.children, value: props.value });
  }

  return (
    <div style={optionCSS()}>
      <Button
        asBlock={true}
        onClick={onClickEvent}
        type={ButtonType.Link}>
        {props.children}
      </Button>
    </div>
  )
} 
