//Import do Styled
import { InputText } from "./style";

export function Input  ({ 
    placeholder,
    editable,
    keyType,
    maxLength,
    fieldValue,
    onChangeText
}) 
{
    return(
       <InputText 
       placeholder={placeholder}
       editable={editable}
       keyboardType={keyType}
       maxLength={maxLength}
       value={fieldValue}
       onChangeText={onChangeText}/>
    )
}