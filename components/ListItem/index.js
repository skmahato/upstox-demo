import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const ListItem = ({ holding }) => {
  const currentValue = holding.ltp * holding.quantity;
  const investmentValue = holding.avgPrice * holding.quantity;
  const profitAndLoss = currentValue - investmentValue;

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperLeft}>
          <Text style={styles.symbolText}>{holding.symbol}</Text>
        </View>

        <View style={styles.upperRight}>
          <Text>
            LTP: <Text style={styles.ltpValue}>₹ {holding.ltp.toFixed(2)}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeft}>
          <Text>{holding.quantity}</Text>
        </View>

        <View style={styles.bottomRight}>
          <Text>
            P/L:{" "}
            <Text style={styles.profitAndLossValue}>
              ₹ {profitAndLoss.toFixed(2)}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
