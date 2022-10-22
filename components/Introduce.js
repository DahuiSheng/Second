import * as React from 'react';
import {
    Box,
    HStack,
    VStack,
    Text,
    Pressable,
    Image,
    Container,
} from 'native-base';

export default function Introduce() {
  return <>
        {/* 背景画像の色 */}
        <Box bg="gray.200" my="4" mx="4%" borderRadius="5" rounded="md" py="4">

            {/* 画像とテキスト */}
            <HStack justifyContent="center">

                {/* 画像の部分 */}
                <Box py="1" pr="4">
                    <Image source={{
                    uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
                    }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100"
                    />
                </Box>
                
                {/* テキスト部分 */}
                <Box justifyContent="space-between">
                    {/* 名前 */}
                    <VStack space="1" mt="3">
                        <Text fontSize="xl" color="black" bold="true">
                            森 大輝
                        </Text>
                    </VStack>

                    {/* 所属 */}
                    <VStack space="1">
                        <Text fontSize="md" color="black" bold="true">
                            名古屋工業大学
                        </Text>
                        <Text fontSize="sm" color="black" bold="true">
                            創造工学教育課程 知能情報学科
                        </Text>
                    </VStack>

                </Box>

            </HStack>
        </Box>

    </>;
}