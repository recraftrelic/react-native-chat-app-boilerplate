import React from 'react';
import { StyleSheet, View, ViewStyle, TextInput } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import { isIOS } from "../../utils";

interface Props {
    firstPlaceholder: string;
    secondPlaceholder: string;
};

const PlaceholderField: React.FunctionComponent<Props> = ({
    firstPlaceholder,
    secondPlaceholder
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View>
            <View style={[style.containerNew, {borderColor: theme.lightBottomColor}]}>
                <TextInput
                    placeholder={firstPlaceholder}
                    placeholderTextColor={theme.lightTextColor}
                    style={{ color: theme.textColor }}
                />         
            </View>
            <View style={[style.containerNew, {borderColor: theme.lightBottomColor}]}>
                <TextInput
                    placeholder={secondPlaceholder}
                    placeholderTextColor={theme.lightTextColor}
                    style={{ color: theme.textColor }}
                />         
            </View>
           
        </View>
    );
};

export default PlaceholderField;

interface Style {
    container: ViewStyle;
    contentContainer: ViewStyle;
    materialStyle: ViewStyle;
    containerNew: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    containerNew: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: isIOS ? 10 : 0,
        marginTop: 10,
        borderBottomWidth: 2,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    materialStyle: {
        alignItems: "flex-end"
    },
})
