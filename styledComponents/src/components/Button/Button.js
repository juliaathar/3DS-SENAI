import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const BaseButton = styled(TouchableOpacity)`
    width: 60%;
    height: 40px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const Button = styled(BaseButton)`
    background-color: #5936B4;
    margin-top: 180px;
`;

export const ButtonDecrement = styled(BaseButton)`
    background-color: #362A84;
`;
