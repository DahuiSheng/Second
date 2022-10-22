import { View } from "native-base"
import Appbar from "../components/Appbar";
import Introduce from "../components/Introduce";
import Footer from "../components/Footer";

const TopScreen = () => {
    return (
        <View>
            {/* <Appbar /> */}
            <Introduce/>
            {/* <Footer /> */}
        </View>
    );
};

export default TopScreen;