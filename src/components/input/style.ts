import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: themes.colors.lightGray,
        borderColor: themes.colors.lightGray,
    },
    input: {
        width: "100%",
        height: "90%",
        borderRadius: 40,
        paddingLeft: 5,
        backgroundColor: themes.colors.bgScreen,
    },
    titleInput: {
        marginLeft: 5,
        color: themes.colors.gray,
        marginTop: 20,
    },
    Icon: {
        width: "100%",
    },
    Button: {
        width: "10%",
    },
});
