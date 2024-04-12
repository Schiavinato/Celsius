import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  txt: {
    fontSize: 30,
    color: "orange",
  },

  caixa: {
    width: "25%",
    height: "5%",
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 15,
    color: "orange",
    textAlign: "center",
    fontSize: 25,
    marginTop: "1%",
  },

  Btn: {
    width: "25%",
    height: "5%",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "orange",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
  },
  txtBtn: {
    fontSize: 30,
    color: "white",
  },
});

export default styles;
