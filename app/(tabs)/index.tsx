import { Text, StyleSheet, Platform, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useState } from "react";
import PlaySong from "@/components/PlaySong/PlaySong";
import FrontPageInvitation from "@/components/FrontPageInvitation/FrontPageInvitation";

export default function HomeScreen() {
  const [isInvitationOpen, setInvitationOpen] = useState(false);

  return (
    <View style={{ paddingTop: 100, alignItems: "center" }}>
      {isInvitationOpen ? (
        <View style={{ width: "100%" }}>
          <PlaySong isInvitationOpen={isInvitationOpen} />
          {/* <WeddingInvitation /> */}
        </View>
      ) : (
        <View>
          <Text>dfdfdf</Text>
          <FrontPageInvitation setInvitationOpen={setInvitationOpen} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
