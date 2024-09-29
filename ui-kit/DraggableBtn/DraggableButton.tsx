import React, { useState } from "react";
import Draggable from "react-draggable";
import { useStyles } from "./styles";
import { Button, Text, View } from "react-native";
// import chevron_right from "../../assets/chevronR.svg";

const DraggableButton = ({ setInvitationOpen }: any) => {
  const { styles } = useStyles();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const initialPosition = { x: 0, y: 0 };

  const calculateCircleCenter = () => {
    const windowWidth = window.innerWidth;
    return windowWidth * 0.6;
  };

  const handleDrag = (e: any, data: any) => {
    if (data.x >= position.x) {
      setPosition({ x: data.x, y: position.y });
    }
  };

  const handleStop = (e: any, data: any) => {
    const circleCenter = calculateCircleCenter();
    if (data.x >= circleCenter) {
      setTimeout(() => {
        setInvitationOpen(true);
      }, 200);
    } else {
      setPosition(initialPosition);
    }
  };

  const handleOpen = () => {
    setInvitationOpen(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* <Draggable
          axis="x"
          bounds="parent"
          position={position}
          onDrag={handleDrag}
          onStop={handleStop}
        >
          <Button title="Open" />
        </Draggable> */}

        <Text style={styles.open_text} onPress={handleOpen}>
          Open Invitation
        </Text>
        {/* <Draggable axis="x" bounds="parent" disabled>

        </Draggable> */}
      </View>
    </View>
  );
};

export default DraggableButton;
