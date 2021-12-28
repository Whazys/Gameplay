import { StyleSheet } from "react-native";
import {theme} from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        paddingRight: 25,
        alignItems: 'center',
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
    }
})