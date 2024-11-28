import { TextInput, TextInputProps } from "react-native";
import { styles } from "@/components/input/styles";
import { colors } from "@/styles/colors";

export function Input({ ...props }: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            placeholderTextColor={colors.gray[400]}
            {...props}
        />
    )
}