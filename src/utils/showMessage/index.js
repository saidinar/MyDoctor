import { colors } from "../colors";

const { showMessage } = require("react-native-flash-message");

const showError = (message) => {
    showMessage({
        message: message,
        type: "default",
        backgroundColor: colors.error,
        color: colors.white
    })
}

export default showError;