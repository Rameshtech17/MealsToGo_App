import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  padding = ${(props) => props.theme.space[4]};
  margin-top:${(props) => props.theme.space[2]}
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding = ${(props) => props.theme.space[2]};
`;
export const AuthInput = styled(TextInput)`
  width: 250px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.9);
`;
export const Title = styled.Text`
  font-size: 30px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
