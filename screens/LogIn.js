import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, } from "react-native";

export default function LogIn() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePasswordVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <Image style={styles.imgStyle} source={require("../assets/GodBulla.png")} />
            {/* login inputs */}
            <TextInput style={styles.inputStyle} placeholder="Correo" placeholderTextColor={'gray'} />
            <View style={styles.inputPasswordStyle}>
                <TextInput placeholder="Contraseña" placeholderTextColor={'gray'} secureTextEntry={!isPasswordVisible} />
                <TouchableOpacity style={styles.showPaswordIconContainer} onPress={handlePasswordVisible}>
                    <Text>{'<>'}</Text>
                </TouchableOpacity>
            </View>
            {/* SingIn button */}
            <TouchableOpacity style={styles.singInButtonStyle}>
                <Text style={styles.singInButtonTextStyle}>Iniciar sesión</Text>
            </TouchableOpacity>
            {/* Account recovery */}
            <TouchableOpacity style={styles.forgotPasswordInputStyle}>
                <Text style={styles.footerText}>Recuperar cuenta</Text>
            </TouchableOpacity>
            {/* SingUp option */}
            <View style={styles.singUpContainerStyle}>
                <Text style={styles.singUpTextStyle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity style={styles.singUpButtonStyle}>
                    <Text style={styles.footerText}>Regístrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    imgStyle: {
        width: 250,
        height: 250,
    },

    forgotPasswordInputStyle: {
        marginTop: 20,
    },

    inputStyle: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        color: '#111',
        height: 50,
        marginTop: 20,
        paddingLeft: 10,
        width: '90%',
    },

    singInButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#48C9B0',
        borderRadius: 5,
        height: 45,
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
        width: '90%',
    },

    inputPasswordStyle: {
        backgroundColor: '#f0f0f0',
        color: '#111',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        marginTop: 20,
        paddingLeft: 10,
    },

    singInButtonTextStyle: {
        fontSize: 16,
        color: '#fff',
    },

    singUpButtonStyle: {
        marginLeft: 5,
    },

    singUpContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    footerText: {
        borderBottomColor: '#99f6e4',
        borderBottomWidth: 1,
        color: '#76d7c4',
    },

    singUpTextStyle: {
        color: '#000',
    },

    showPaswordIconContainer: {
        marginRight: 20,
    },
});