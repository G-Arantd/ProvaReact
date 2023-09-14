import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#383535",
    flexDirection: "column",
    alignItems: "center",
    gap: 15
  },

  conteinerLabel: {
    paddingTop: 40,
    backgroundColor: "red",
    width: "100%",
    height: 95,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  conteinerTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 100
  },

  conteinerText: {
    flexDirection: "row",
    gap: 135
  },

  conteinerOrdem: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10
},

  conteinerResultado: {
    backgroundColor: "white",
    width: "95%",
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  conteinerResultadoFood: {
    backgroundColor: "#20A082",
    width: 95,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  conteinerResultadoDrink: {
    backgroundColor: "#2A679F",
    width: "95%",
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  conteinerFood: {
    backgroundColor: "#B9E9DD",
    width: 95,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  conteinerDrink: {
    backgroundColor: "#B9C4E9",
    width: 95,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  title: {
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },

  text:{
    fontSize: 16,
    color: "#ffffff",
  },

  answerInput: {
    backgroundColor: "white",
    color: "grey",
    borderWidth: 1,
    borderRadius: 10,
    width: 95,
    height: 45,
    fontSize: 18,
    textAlign: "center",
  },

  button: {
    width: 95,
    height: 45,
    borderRadius: 5,
    marginBottom: 10,
  },

  textFont: {
    color: "white"
  }

});