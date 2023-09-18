import { ImageProps } from "react-native";

export type ChatRowProps = {
    name: string;
    message: string;
    timestamp: number;
    imagePath: string;
    onPress: () => void;
}