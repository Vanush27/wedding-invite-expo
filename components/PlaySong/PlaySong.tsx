import React, { useState, useEffect, useRef } from "react";
import { Audio } from "expo-av"; // Import Audio API from Expo
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons from Expo
import { useStyles } from "./styles";

const PlaySong = ({ isInvitationOpen }: any) => {
  const { styles } = useStyles();
  const [isPlaying, setIsPlaying] = useState(true);
  const sound = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    async function loadSound() {
      if (sound.current) {
        await sound.current.unloadAsync(); // Unload previous sound if any
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        require("../../assets/siro-hasak.mp3"), // Adjust path for Expo
        { shouldPlay: isPlaying, isLooping: true } // Set looping and play state
      );
      sound.current = newSound;
      if (isPlaying) await sound.current.playAsync();
    }

    loadSound();

    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, [isInvitationOpen, isPlaying]);

  const togglePlayPause = async () => {
    if (isPlaying) {
      await sound.current?.pauseAsync();
    } else {
      await sound.current?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <TouchableOpacity style={styles.playSongButton} onPress={togglePlayPause}>
      {isPlaying ? (
        <MaterialIcons name="volume-up" size={30} color="black" />
      ) : (
        <MaterialIcons name="volume-off" size={30} color="black" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default PlaySong;
