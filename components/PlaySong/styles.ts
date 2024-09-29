import { StyleSheet } from "react-native";

export function useStyles() {
  const styles = StyleSheet.create({
    playSongButton: {
      // z-index: 1000,
      position: "relative",
      top: 10,
      right: 5,
      padding: 15,
      // color: #055491;
      // border: none;
      // border-radius: 10px;
      // background-color: transparent;
    },

    // buttonText: {
    //   fontSize: 14,
    //   fontWeight: '600',
    // },
  });

  return {
    styles,
  };
}
