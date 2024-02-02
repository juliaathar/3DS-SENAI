//Import Styled
import { FieldContent } from "./style"

//Componente Label e Input
import { Label } from "../Label"
import { Input } from "../Input"

export const BoxInput = ({
    fieldWidth = 100, 
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {
    return(

        <FieldContent fieldWidth={fieldWidth} >
            <Label textLabel={textLabel}/>
            <Input
                placeholder={placeholder}
                editable={editable}
                keyType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />
        </FieldContent>
        
    )
}