import React from "react";
import { View, Text } from "native-base"
const UserScreen = ({ route }) => {

    return (
        <View>
            <Text>
                ユーザ画面{route.params.userId}
            </Text>
        </View>
    );
};

export default UserScreen;