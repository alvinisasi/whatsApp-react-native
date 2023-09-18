import { SafeAreaView, StyleSheet, useColorScheme } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";
import ChatList from "./ChatList/ChatList";

const ChatListScreen = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'light';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return(
        <SafeAreaView >
            <ChatList />
            {/* <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>
                <Section title="Step One">
                    Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                    screen and then come back to see your edits.
                </Section>
                <Section title="See Your Changes">
                    <ReloadInstructions />
                </Section>
                <Section title="Debug">
                    <DebugInstructions />
                </Section>
                <Section title="Learn More">
                    Read the docs to discover what to do next:
                </Section>
                <LearnMoreLinks />
                </View>
            </ScrollView> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});

export default ChatListScreen