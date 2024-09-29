import DraggableButton from "@/ui-kit/DraggableBtn/DraggableButton";
import { useStyles } from "./styles";
import { View, Text } from "react-native";

const FrontPageInvitation = ({ setInvitationOpen }: any) => {
  const { styles } = useStyles();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.invitationText}>Save the date Vanush & Lusine</Text>
        <>
          <DraggableButton setInvitationOpen={setInvitationOpen} />
        </>
      </View>
    </View>
  );
};

export default FrontPageInvitation;
