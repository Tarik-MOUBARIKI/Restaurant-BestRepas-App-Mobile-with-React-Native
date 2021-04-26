import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Text, Button, Alert, Modal, Pressable } from 'react-native';
import { Card, ListItem, Icon, Image } from 'react-native-elements';

import AsyncStorage from '@react-native-async-storage/async-storage';

const image = { uri: "https://cdn.nohat.cc/image_by_url.php?url=https://image.freepik.com/free-vector/eid-mubarak-celebration-islam-lantern-fanus-muslim-feast-holy-month-ramadan-kareem-illuminated-arabic-lamp-illustration_291138-320.jpg" };

function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currency, setCurrency] = useState("MAD")

  const [modalVisible2, setModalVisible2] = useState(false);
  const [language, setLanguage] = useState("ENGLISH")

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('Currency', currency)
      await AsyncStorage.setItem('Language', language)
    } catch (e) {
      // saving error
    }
  }
  storeData()

  return (
    <View style={styles.container}>
      {/* <View>
          <Button
            onPress={() => setModalVisible(true)}
            title={`currency: (${currency})`}
            color="#000000"
          />

        <Button
            onPress={() => setModalVisible2(true)}
            title={`language: (${language})`}
            color="#000000"
          />
      </View> */}

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>select your currency</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible), setCurrency("MAD")}}
            >
              <Text style={styles.textStyle}>MAD</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible), setCurrency("USD")}}
            >
              <Text style={styles.textStyle}>USD</Text>
            </Pressable>

          </View>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>select your language</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible2(!modalVisible2), setLanguage("ARABIC")}}
            >
              <Text style={styles.textStyle}>ARABIC</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible2(!modalVisible2), setLanguage("ENGLISH")}}
            >
              <Text style={styles.textStyle}>ENGLISH</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
    <ImageBackground source={image} style={styles.image}>
      <Button title="Ramadan Menu" onPress={()=> navigation.navigate('Items')} color="gray" />
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    modalText: {
      fontSize: 20
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
      marginBottom: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });

export default HomeScreen