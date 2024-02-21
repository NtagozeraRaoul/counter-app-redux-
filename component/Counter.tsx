import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { decrement, increment, incrementByAmount, incrementAsync } from "../store/counter/counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <Text style={{ fontSize: 40 }}>Count: {count}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <TouchableOpacity
          style={{
            width: 120,
            height: 40,
            marginTop: 14,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
          }}
          onPress={() => dispatch(incrementAsync(10))}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 120,
            height: 40,
            marginTop: 14,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
          }}
          onPress={() => dispatch(decrement())}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Counter;
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 20,
  },
});
