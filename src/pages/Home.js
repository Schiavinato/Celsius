import { TouchableOpacity, View } from "react-native";
import Texto from "../components/text";
import styles from "../styles/styleSheet";
import CaixaTexto from "../components/textInput";
import React, { useState } from "react";

export default function Home() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const resultado = () => {
    if (celsius != "") {
      const calculo = (celsius * 9) / 5 + 32;
      setFahrenheit(calculo);
    } else {
      alert("não há nada a ser calculado!");
    }
  };
  return (
    <View style={styles.container}>
      <Texto Txt="Transforme Celsius em Fahrenheit" Estilo={styles.txt} />
      <CaixaTexto
        Txt="Digite Aqui"
        Estilo={styles.caixa}
        Valor={celsius}
        Change={setCelsius}
      />
      <TouchableOpacity style={styles.Btn} onPress={resultado}>
        <Texto Txt="Calcular" Estilo={styles.txtBtn} />
      </TouchableOpacity>
      <Texto Txt={fahrenheit} Estilo={styles.txt} />
    </View>
  );
}
