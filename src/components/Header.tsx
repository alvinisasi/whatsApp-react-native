import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import SearchIcon from 'react-native-vector-icons/Ionicons'
import DotIcon from 'react-native-vector-icons/Entypo'
import CameraIcon from 'react-native-vector-icons/FontAwesome'

function Header(): JSX.Element {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>WhatsApp</Text>
            </View>
            <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.menu}>
                    <SearchIcon name="search" size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <CameraIcon name="camera" size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <DotIcon name="dots-three-vertical" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#128C7E',
        padding: 16,
        maxHeight: 70,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerTitle: {
        width: '50%',
    },
    containerMenu: {
        flex: 1,
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    menu: {
        margin: 4
    }
})

export default Header