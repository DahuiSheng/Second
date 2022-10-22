import React from "react";
import { View, Text, Button } from "native-base"
import { useFocusEffect } from "@react-navigation/native"

const HomeScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            console.log("Home Focus");

            return () => {
                console.log("Home UnFocus");
            };
        }, [])
    );

    return (
        <View>
            <Text>ホーム画面</Text>
            <Button
                onPress={() => 
                    navigation.navigate("User", {
                        userId: 1,
                    })
                }
            >
                ユーザページ 
            </Button>
        </View>
    );
};

export default HomeScreen;