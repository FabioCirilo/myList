import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";
import { style } from "./style";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);
            if (!email || !password) {
                return Alert.alert("Atenção", "Informe os campos obrigatórios");
            }

            setTimeout(() => {
                Alert.alert("Sucesso", "Login realizado com sucesso");
                setLoading(false);
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE EMAIL  "
                    IconRigth={MaterialIcons}
                    iconRigthName="email"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA  "
                    IconRigth={Octicons}
                    iconRigthName={showPassword ? "eye-closed" : "eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />
                {/* <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons
                        name="remove-red-eye"
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>{" "}
                */}
            </View>
            <View style={style.boxBotton}>
                <Button
                    text="ENTRAR"
                    loading={loading}
                    onPress={() => getLogin()}
                />
                {/* <TouchableOpacity
                    style={style.button}
                    onPress={() => getLogin()}
                >
                   {loading ? (
                        <ActivityIndicator color={"#FFF"} size={"small"} />
                    ) : (
                        <Text style={style.textButton}>Entrar</Text>
                    )}
                </TouchableOpacity>*/}
            </View>
            <Text style={style.textBottom}>
                Não tem conta?{" "}
                <Text style={{ color: themes.colors.primary }}>
                    Crie agora!
                </Text>
            </Text>
        </View>
    );
}
