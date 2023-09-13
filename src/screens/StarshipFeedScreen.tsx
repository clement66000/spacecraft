import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { Card, Text } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";

import { useImage } from "~/hooks/useImage";
import { fetchStarships, useStarships } from "~/hooks/useStarships";

interface ShipProps {
  name: string;
  // model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
  manufacturer: string;
}

interface RenderItemProps {
  item: ShipProps;
}

export const StarshipFeedScreen = () => {
  const { isLoading, isError, error, data } = useStarships();

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "yellow",
          },
        ]}
      >
        <Text>Loading…</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View
        style={[
          styles.container,
          {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
          },
        ]}
      >
        <Text>Something bad happened…</Text>
        {/*<Text>{JSON.stringify(error)}</Text>*/}
      </View>
    );
  }
  const renderItem = (props: RenderItemProps) => {
    const { item } = props;
    const title = item.name;
    const { crew } = item;
    const { hyperdrive_rating } = item;
    const price = item.cost_in_credits;
    const { manufacturer } = item;

    return (
      <Card mode={"outlined"}>
        <Image
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          source={useImage(item.name)}
        />
        <Card.Title title={title} subtitle={manufacturer} />
        <Card.Content>
          <Text>{crew}</Text>
          <Text>{hyperdrive_rating}</Text>
          <Text variant="titleMedium">{price} credits</Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.headerContainer}>
        <Text variant="displaySmall">Starships</Text>
        <FlatList
          contentContainerStyle={{ gap: 12 }}
          data={data.results}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    paddingHorizontal: 12,
  },
  headerContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
});
