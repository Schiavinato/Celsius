import { TextInput } from "react-native";

export default function CaixaTexto({ Txt, Estilo, Valor, Change }) {
  return (
    <TextInput
      style={Estilo}
      placeholder={Txt}
      value={Valor}
      onChangeText={Change}
    />
  );
}
