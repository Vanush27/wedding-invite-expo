import { StyleSheet } from "react-native";

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      width: " 80%",
    },

    wrapper: {
      // justify-content: space-between;
      // align-items: center;
      // position: relative;
    },
    draggable_btn: {
      backgroundColor: "#ffffff",
      // border-radius: 50%;
      // width: 60px;
      // height: 60px;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // cursor: pointer;
      // z-index: 111;
      // border: 1px solid #ffffff;
    },
    open_text: {
      color: "#ffffff",
      fontSize: 30,
      padding: 20,
      justifyContent: "center",
    },
  });

  return {
    styles,
  };
}
