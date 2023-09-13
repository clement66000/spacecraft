import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';
import {StarshipFeedScreen} from "~/screens/StarshipFeedScreen";
import {SafeAreaView} from "react-native";
import {TermsScreen} from "~/screens/TermsScreen";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {NetworkProvider} from "react-native-offline";
import {Offline} from "~/components/Offline";

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PaperProvider>
                <NetworkProvider>
                    <Offline/>
                    {/*<LoginScreen />*/}
                    {/*<TermsScreen/>*/}
                    <StarshipFeedScreen/>
                </NetworkProvider>
            </PaperProvider>
        </QueryClientProvider>
    );
}


export default App;
