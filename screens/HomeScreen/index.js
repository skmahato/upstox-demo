import React, { useState, useEffect, useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import axios from "axios";

import ListItem from "../../components/ListItem";
import SummaryContainer from "../../components/SummaryContainer";
import styles from "./styles";

export default function HomeScreen() {
  const [userHolding, setUserHolding] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8"
      );
      setUserHolding(response.data.userHolding);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const computedValues = useMemo(() => {
    const totalCurrentValue = userHolding.reduce(
      (acc, holding) => acc + holding.ltp * holding.quantity,
      0
    );
    const totalInvestment = userHolding.reduce(
      (acc, holding) => acc + holding.avgPrice * holding.quantity,
      0
    );
    const todaysProfitAndLoss = userHolding.reduce(
      (acc, holding) => acc + (holding.close - holding.ltp) * holding.quantity,
      0
    );
    const totalProfitAndLoss = totalCurrentValue - totalInvestment;

    return {
      totalCurrentValue,
      totalInvestment,
      todaysProfitAndLoss,
      totalProfitAndLoss,
    };
  }, [userHolding]);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Upstox Holding</Text>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
      >
        {userHolding.map((holding) => (
          <ListItem holding={holding} key={holding.symbol} />
        ))}
      </ScrollView>

      <SummaryContainer computedValues={computedValues} />
    </View>
  );
}
