import React from "react";
import { View, Text, Button } from "native-base"

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>ホーム画面</Text>
            <Button
                title="ユーザ"
                onPress={() =>
                    navigation.navigate("User", {
                        userId: 1,
                    }) }
            >
                ユーザページ 
            </Button>
        </View>
    );
};

export default HomeScreen;