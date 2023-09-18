import { Image, StyleSheet, Text, View } from "react-native"

import Avatar from '../../../assets/avatar.png'
import { Icon } from "react-native-elements"

const ChatHeader = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerView}>
                <View style={styles.containerProfile}>
                    <Icon 
                        style={{ width: 25, height: 25 }}
                        name='arrowleft'
                        color="white"
                        type="antdesign"
                    />
                    <Image 
                    style={styles.imageProfile}
                    source={ Avatar }/>
                    <Text style={styles.textProfile} numberOfLines={1}>
                        Dear 😘
                    </Text>
                </View>
                <Icon 
                    style={{ marginLeft: 8, marginRight: 8 }}
                    rotate="100"
                    name='videocam'
                    color="white"
                    solid={true}
                    type="ionicon"
                    />
                <Icon 
                    style={{ marginLeft: 8, marginRight: 8 }}
                    name='phone'
                    color="white"
                    type="FontAwesome5"
                    />
                <Icon
                    name='more-vertical'
                    color="white"
                    type="feather"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#128C7E',
        padding: 8,
        maxHeight: 70,
        // position: "fixed"
    },
    containerView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#128C7E',
        padding: 16,
        maxHeight: 70,
        // position: "absolute"
    },
    containerProfile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textProfile: {
        marginLeft: 8
    },
    imageProfile: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        borderRadius: 50,
        marginLeft: 8
    }
})

export default ChatHeader