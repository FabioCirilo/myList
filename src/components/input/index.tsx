import React, { forwardRef, Fragment, LegacyRef } from "react";

import {
    View,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { themes } from "../../global/themes";
import { style } from "./style";

type IconComponent =
    | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
    | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
    | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent;
    IconRigth?: IconComponent;
    iconLeftName?: string;
    iconRigthName?: string;
    title?: string;
    onIconLeftPress?: () => void;
    onIconRigthPress?: () => void;
};

export const Input = forwardRef(
    (Props: Props, ref: LegacyRef<TextInput> | null) => {
        const {
            IconLeft,
            IconRigth,
            iconLeftName,
            iconRigthName,
            title,
            onIconLeftPress,
            onIconRigthPress,
            ...rest
        } = Props;

        const calculateSizeWidth = () => {
            if (IconLeft && IconRigth) {
                return "80%";
            } else if (IconLeft || IconRigth) {
                return "90%";
            } else {
                return "100%";
            }
        };

        const calaculateSizePaddingLeft = () => {
            if (IconLeft && IconRigth) {
                return 0;
            } else if (IconLeft || IconRigth) {
                return 10;
            } else {
                return 10;
            }
        };
        return (
            <Fragment>
                {title && <Text style={style.titleInput}>{title}</Text>}
                <View
                    style={[
                        style.boxInput,
                        { paddingLeft: calaculateSizePaddingLeft() },
                    ]}
                >
                    {IconLeft && iconLeftName && (
                        <TouchableOpacity
                            onPress={onIconLeftPress}
                            style={style.Button}
                        >
                            <IconLeft
                                name={iconLeftName as any}
                                size={20}
                                color={themes.colors.gray}
                                style={style.Icon}
                            />
                        </TouchableOpacity>
                    )}
                    <TextInput
                        style={[style.input, { width: calculateSizeWidth() }]}
                        {...rest}
                    />
                    {IconRigth && iconRigthName && (
                        <TouchableOpacity
                            onPress={onIconRigthPress}
                            style={style.Button}
                        >
                            <IconRigth
                                name={iconRigthName as any}
                                size={20}
                                color={themes.colors.gray}
                                style={style.Icon}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </Fragment>
        );
    }
);
