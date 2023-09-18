import { Image, StyleSheet, Text, View } from "react-native"
import { ChatRowProps } from "./ChatRowProps"
import { generateMessageDate, truncateText } from "../../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
// import UserIcon from "react-native-vector-icons/AntDesign"

const ChatRow = ({ name, message, timestamp, imagePath, onPress }: ChatRowProps): JSX.Element => {
    console.log(name);
    
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* <UserIcon name="user" size={25}/> */}
            <Image style={styles.imageProfile} source={{ uri: imagePath}} width={50} height={50} />
            <View style={styles.containerMessage}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textMessage}>{truncateText(message, 35)}</Text>
            </View>
            <Text style={styles.textDate}>{generateMessageDate(timestamp)}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: '100%',
        padding: 16,
        alignItems: 'center'
    },
    containerMessage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 16
    },
    textName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000'
    },
    textMessage: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#555'
    },
    textDate: {
        color: '#555',
        fontSize: 12,
        alignSelf: 'flex-start'
    },
    imageProfile: {
        borderRadius: 50
    }
})

export default ChatRow