import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 12
    },
    details: {
        flex: 1
    },
    name: {
        fontSize: 16,
        color: colors.gray[100],
        fontWeight: "600"
    },
    url: {
        fontSize: 14,
        color: colors.gray[400]
    }
});