import {Button, Paper, styled, TextField} from "@mui/material";
import {useState} from "react";

const InputPaper = styled(Paper)({
  padding: 5
});

interface InputItemBoxProps {
  label: string;
  items?: string[];
  type?: string;
  onAdd?: (item: string) => void;
}

const InputItemBox = ({label, items = [], type="Item", onAdd} : InputItemBoxProps) => {

  const [addValue, setAddValue] = useState("");

  const handleAddValueChange = (event: any) => {
    setAddValue(event.target.value);
  }

  const fireOnAdd = () => {
    if (onAdd) {
      onAdd(addValue);
    }
    setAddValue('');
  }

  const handleAddItemEnter = (event: any) => {
    if (event.key === 'Enter') {
      fireOnAdd();
    }
  }

  const handleAddItemClick = (event: any) => {
    fireOnAdd();
  }

  return (
    <InputPaper>
      <label>{label}</label>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <TextField value={addValue} label={`Add ${type}`} size='small' sx={{minWidth: 500}} onChange={handleAddValueChange} onKeyPress={handleAddItemEnter}/><Button onClick={handleAddItemClick}>Add</Button>
    </InputPaper>
  );
}

export default InputItemBox;
