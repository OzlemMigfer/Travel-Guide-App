import React from "react";
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './HomePage.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const HomePage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../components/assets/logo_transparent.png')} />
            <Text style={styles.header}>Travel Guide App</Text>
            <View style={styles.body_container}>
                <TouchableOpacity style={styles.google}>
                    <Icon name="google" size={35} />
                    <Text style={styles.google_text}>Google İle Kayıt Ol</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebook}>
                    <Icon name="facebook" size={40} />
                    <Text style={styles.facebook_text}>Facebook İle Kayıt Ol</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sign_in} onPress={() => navigation.navigate('SignIn') }>
                    <Text style={styles.sign_in_text}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer_container}>
                <Text style={styles.question_text}>Zaten bir hesabınız var mı?</Text>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.login_text}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomePage;