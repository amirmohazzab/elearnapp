import React from "react";
import { View, StyleSheet } from "react-native";

const Screen = ({ children, style }) => {
    return <View style={[styles.screen, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
    screen: {
        paddingTop: 20,
        flex: 1,
    },
});
