import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import FontAwesomeIcons from "@expo/vector-icons/AntDesign";

import styles from "./styles";

export default function SummaryContainer({ computedValues }) {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleExpanded = () => {
    const newValue = expanded ? 0 : 1;
    setExpanded(!expanded);
    Animated.spring(animation, {
      toValue: newValue,
      useNativeDriver: false,
    }).start();
  };

  const expandedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["8%", "18%"],
  });

  return (
    <Animated.View style={[styles.bottomContainer, { height: expandedHeight }]}>
      <TouchableOpacity onPress={toggleExpanded}>
        {expanded ? (
          <FontAwesomeIcons
            name="caretdown"
            size={22}
            style={{ textAlign: "center" }}
          />
        ) : (
          <FontAwesomeIcons
            name="caretup"
            size={22}
            style={{ textAlign: "center" }}
          />
        )}
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        {expanded && (
          <View style={styles.expandedStyle}>
            <View style={styles.summaryContainerAlignment}>
              <Text style={styles.valueTitle}>Current Value:</Text>
              <Text>${computedValues.totalCurrentValue.toFixed(2)}</Text>
            </View>

            <View style={styles.summaryContainerAlignment}>
              <Text style={styles.valueTitle}>Total Investment:</Text>
              <Text>${computedValues.totalInvestment.toFixed(2)}</Text>
            </View>

            <View style={styles.summaryContainerAlignment}>
              <Text style={styles.valueTitle}>Today's Profit & Loss:</Text>
              <Text>${computedValues.todaysProfitAndLoss.toFixed(2)}</Text>
            </View>
          </View>
        )}

        <View style={styles.summaryContainerAlignment}>
          <Text style={styles.valueTitle}>Profit & Loss:</Text>
          <Text>${computedValues.totalProfitAndLoss.toFixed(2)}</Text>
        </View>
      </View>
    </Animated.View>
  );
}
