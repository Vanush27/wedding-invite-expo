import { StyleSheet } from "react-native";

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: "red",
      height: "100%",
      // background: require("../../assets/images/favicon.png"),
      // background-repeat: no-repeat;
      // background-position: center center;
      // background-attachment: fixed;
      // background-size: cover;
    },
    invitationText: {
      color: "#ffffff",
      fontWeight: "600",
      padding: 15,
      fontSize: 37,
      // font-family: cursive;
      // text-align: center;
      // position: absolute;
      // top: 6%;
    },
  });

  return {
    styles,
  };
}
