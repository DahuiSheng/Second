import React from "react";
import { View, Text } from "native-base"
import { useFocusEffect } from "@react-navigation/native";

const UserScreen = () => {
    useFocusEffect(
        React.useCallback(() => {
            console.log("User Focus");

            return () => {
                console.log("User UnFocus");
            };
        }, [])
    );

    return (
        <View>
            <Text>
                ユーザ画面
            </Text>
        </View>
    );
};

export default UserScreen;