import { StyleSheet, TextInput, View } from "react-native"
import { Icon } from "react-native-elements"

const FormMessage = ({ inputValue, onChangeInput }): JSX.Element => {
    return (
        <View style={styles.container}>
         
            <View style={styles.containerIcon}>
                <Icon 
                    style={styles.iconSmile}
                    name='smile'
                    type="feather"
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Type a mess..."
                    underlineColorAndroid="transparent"
                    value={inputValue}
                    onChange={onChangeInput}
                />
                <Icon 
                    iconStyle={styles.iconAttach}
                    name='attach'
                    type="ionicon"
                />
                <Icon 
                    iconStyle={styles.iconCamera}
                    name='camera'
                    type="ionicon"
                    solid={true}
                />
            </View>
        
        
            <Icon 
                style={styles.iconMic}
                name='mic'
                color="white"
                type="FontAwesome5"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerIcon: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 100,
        marginLeft: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        height: '16.66667%', // 1/6 of the parent height (assuming you have the parent container's height set)
        width: '100%',
        bottom: -5,
        position: 'absolute'
    },
    input: {
        width: 200,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        margin: 'auto'
    },
    iconSmile: {
        margin: 8,
        borderRadius: 100,
        padding: 8, 
    },
    iconCamera: {
        marginHorizontal: 8,
        borderRadius: 100, 
        paddingVertical: 4,
        paddingHorizontal: 4,
    },
    iconAttach: {
        marginHorizontal: 2,
        borderRadius: 100,
        backgroundColor: "#34D399",
        padding: 4,
        transform: [
            { rotate: '-40deg' },
            { scale: 1.2 }
        ] 
    },
    iconMic: {
        marginHorizontal: 2,
        borderRadius: 100, 
        backgroundColor: "#34D399", 
        padding: 4
    }
  });

export default FormMessage