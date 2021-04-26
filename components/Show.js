import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, SafeAreaView, ScrollView, Modal } from 'react-native';
import { Avatar, Card, Image, Button } from 'react-native-elements'

import AsyncStorage from '@react-native-async-storage/async-storage';

function ShowItems() {
  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [prix, setPrix] = useState(null)

  const [titleIng, setTitleIng] = useState(null)
  const [avatarIng, setAvatarIng] = useState(null)
  const [prixIng, setPrixIng] = useState(null)

  const [currency, setCurrency] = useState("MAD")

  const [language, setLanguage] = useState("ENGLISH")

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('title')
      const value2 = await AsyncStorage.getItem('avatar')
      const value3 = await AsyncStorage.getItem('prix')
  
      const value4 = await AsyncStorage.getItem('titleIng')
      const value5 = await AsyncStorage.getItem('avatarIng')
      const value6 = await AsyncStorage.getItem('prixIng')

      const value7 = await AsyncStorage.getItem('Currency')
      setCurrency(value7)

      const value8 = await AsyncStorage.getItem('Language')
      setLanguage(value8)
  
      setTitle(value)
      setAvatar(value2)
      setPrix(parseInt(value3))
  
      setTitleIng(value4)
      setAvatarIng(value5)
      setPrixIng(parseInt(value6))
      // if(value !== null) {
      //   // value previously stored
      // }
    } catch(e) {
      // error reading value
    }
  }

  getData()

    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.container}>
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
              <Text style={styles.modalText}>{language === "ENGLISH" ? 'your order is save'  : 'لقد تم تسجيل طلبكم بنجاح'}</Text>
              <Text style={styles.modalText2}>totale price: {currency==='USD' ? (prixIng * 0.1 + prix * 0.1).toFixed(2) + " USD" : prixIng + prix + " MAD"}</Text>
              <Text style={styles.modalText2}> {prixIng + prix > 300 ? "5 point added to your account thanks you !" : "thanks you !"}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {setModalVisible(!modalVisible)}}
              >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>

            </View>
          </View>
        </Modal>

          <Card style={styles.box}>
            <Card.Title style={styles.cardTitle}>plate pricipale</Card.Title>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{ currency==='USD' ? (prix * 0.1).toFixed(2) + " USD" : prix + " MAD" }</Card.Title>
            <Avatar
              rounded
              source={{
                uri: avatar,
              }}
              size="xlarge"
            />
          </Card>

          <Card style={styles.box}>
            <Card.Title style={styles.cardTitle}>ingridient</Card.Title>
            <Card.Title>{titleIng}</Card.Title>
            <Card.Title>{currency==='USD' ? (prixIng * 0.1).toFixed(2) + " USD" : prixIng + " MAD"}</Card.Title>
            <Avatar
              rounded
              source={{
                uri: avatarIng,
              }}
              size="xlarge"
            />
          </Card>

            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ setModalVisible(true) }}>
              <Text style={styles.textStyle}>Valider votre commande</Text>
            </Pressable>
        </View>

      </ScrollView>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
      flex: 1,
      backgroundColor: "#000000",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#8b0000",
    },
    buttonClose: {
      backgroundColor: "#8b0000",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
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
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 20
    },
    modalText2: {
      fontSize: 16,
      marginBottom: 10
    }
  });

export default ShowItems

