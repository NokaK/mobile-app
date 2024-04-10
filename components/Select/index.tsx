import React, { useEffect, useRef } from "react";
import RNPickerSelect from "react-native-picker-select";

interface SelectProps {
  isPickerVisible?: boolean;
  items: { label: string; value: number }[];
  onEdit: (value: number) => void;
  onDonePress?: () => void;
  value?: number;
}
const Select = ({
  isPickerVisible,
  items,
  onEdit,
  onDonePress,
  value,
}: SelectProps) => {
  const pickerRef = useRef<RNPickerSelect>(null);

  useEffect(() => {
    if (isPickerVisible && pickerRef.current) {
      pickerRef.current.togglePicker();
    }
  }, [isPickerVisible]);
  return (
    <RNPickerSelect
      ref={pickerRef}
      onValueChange={(value) => onEdit(value)}
      items={items}
      onDonePress={onDonePress}
      value={value}
    />
  );
};
export default Select;
