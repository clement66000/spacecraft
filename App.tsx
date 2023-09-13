import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkProvider } from "react-native-offline";
import Constants from "expo-constants";

import LoginScreen from "./src/screens/LoginScreen";

import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";
import { TermsScreen } from "~/screens/TermsScreen";
import { Offline } from "~/components/Offline";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NetworkProvider>
          <Offline />
          {/*<LoginScreen />*/}
          {/*<TermsScreen/>*/}
          <StarshipFeedScreen />
        </NetworkProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
