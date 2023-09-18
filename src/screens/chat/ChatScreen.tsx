import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { fetchConversetion } from "../../services"
import { useEffect, useState } from "react"
import { generateMessageDate, timestampToHHSS } from "../../utils"
import Background from '../../assets/background.png'
import ChatHeader from "./header/ChatHeader"

const ChatScreen = (): JSX.Element => {
    const [chats, setChats] = useState([])

    const getConversetion = () => {
        fetchConversetion()
            .then(res => {
                console.log(res.data);
                
                setChats(res.data)
            })
            .catch(err => console.log('error fetchConversetion ', err))    
    }

    useEffect(() => {
        getConversetion()
        console.log('isi chats', chats);
        
    }, [])

    return(
        // <SafeAreaView>
            <ImageBackground 
                style={styles.containerBackground}
                source={Background}  
                resizeMode="cover"
            >
                <ChatHeader />
                <ScrollView style={styles.containerScrollView} scrollEnabled={true}>
                    <View>
                        {chats.length > 0 ? chats.map((chat,i) => (
                        <View  
                            key={i} 
                            style={ chat.sender === "owner" ? styles.ownerView : styles.nonOwnerView }>
                                {/* {chat.image ? <Image
                                style={{ marginLeft: 10, width: 150, height: 160, resizeMode: 'contain' }}
                                    source={require('../../assets/store.jpeg') }
                                /> : <></>} */}
                                { chat.messages?.map((text, i) => <Text key={i} style={chat.sender === "owner" ? styles.ownerText : styles.nonOwnerText}>{text}</Text>) }
                                <View style={styles.containerText}>
                                    <Text style={chat.sender === "owner" ? styles.ownerTextTime : styles.nonOwnerTextTime}>{timestampToHHSS(chat.timestamp)}</Text>
                                    <Image 
                                        style={styles.tickIcon}
                                        source={require('../../assets/tick.png') }
                                    />
                                </View> 
                        </View>
                        
                        )) : <Text style={styles.text}>TEXTTT</Text>}
                    </View>
                </ScrollView>
            </ImageBackground>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 15
    },
    containerBackground: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    containerScrollView: {
        flex: 1,
        marginBottom: 75
    },
    containerText: {
        flex: 1,
        // flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 16,
        width: '100%',
        justifyContent: 'flex-end'
    },
    ownerText:{
        color:"#000",
        fontSize: 15,
    },
    ownerTextTime:{
        color:"#00000073",
        fontSize: 11,
        marginTop: 8,
    },
    //   ownerView: tw `flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44 my-1`,
    ownerView:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 16,
        width: '80%',
        borderRadius: 8,
        marginTop: 4,
        marginLeft: 44,
        backgroundColor: '#dbf8c6'
    },
    nonOwnerText: {
        color:"#000",
        fontSize: 15,
    },
    nonOwnerTextTime: {
        color:"#00000073",
        fontSize: 11,
        marginTop: 8
    },
    // nonOwnerView: tw `flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2 my-1`
    nonOwnerView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 16,
        width: '80%',
        borderRadius: 8,
        marginTop: 4,
        margin: 16,
        backgroundColor: '#FFF'
    },
    tickIcon: { 
        width: 15, 
        height: 15, 
        marginLeft: 4, 
        marginTop: 8,
        resizeMode: 'contain' 
    }
})

export default ChatScreen