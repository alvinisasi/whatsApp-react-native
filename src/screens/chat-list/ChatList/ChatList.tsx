import { ScrollView } from "react-native-gesture-handler"
import ChatRow from "../ChatRow/ChatRow"
import { fetchAllChats } from "../../../services"
import { useEffect, useState } from "react"
import { Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

const ChatList = () => {
    const [chats, setChats] = useState([])
    const navigation = useNavigation()
    const getAllChats = () => {
        try{
            fetchAllChats()
                .then(res => {
                    const items = res.data.data.items
                    console.log(items);
                    
                    setChats(items)
                })
                .catch(err => console.log('Error get chat : ', err))
        }catch(e){
            console.log('error getALlChats ', e);
            
        }
    }

    const handleSelectChat = () =>{
        navigation.navigate('ChatScreen')
    }

    useEffect(() => {
        getAllChats()
    }, [])

    return(
        <ScrollView>
            {
                chats.length > 0 ? 
                    chats?.map((item, index) => (
                        <ChatRow 
                            key={item.id}
                            name={item.name}
                            message={item.lastMessage}
                            timestamp={item.updatedDate}
                            imagePath={item.avatar}
                            onPress={handleSelectChat}
                        />
                    ))
                    :
                    <Text>Chat is Empty</Text>
            }
        </ScrollView>
    )
}

export default ChatList