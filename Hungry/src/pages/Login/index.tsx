import React from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import s from './styles';



const Login = ({ navigation }) => {

    const handleLogin = () => {
        navigation.navigate('Home');
    };
    return (
        <View style={s.container}>
            <Text style={s.title}>I'm Hungry</Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#FFFFFF"
                style={s.input}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="#FFFFFF"
                secureTextEntry
                style={s.input}
            />

            <TouchableOpacity style={s.button} onPress={handleLogin}>
                <Text style={s.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Login;
