import React from "react";
import { NavigationContainer as AppContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";
// enableScreens();

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
    return (
        <AppContainer>
            <Navigator initialRouteName="Business Search">
                <Screen name="Business Search" component={SearchScreen} />
                <Screen name="Business Detail" component={ResultShowScreen} />
            </Navigator>
        </AppContainer>
    );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
