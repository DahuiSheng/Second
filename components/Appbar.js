import {
    Text,
    StatusBar,
    HStack,
    Box,
} from "native-base";

export default function Appbar() {
    return <>
        <StatusBar bg="violet.600" barStyle="light-content" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center">
            <Text color="white" fontSize="20" fontWeight="bold" ml={4}>
                Home
            </Text>
            </HStack>
        </HStack>
      </>;
  }