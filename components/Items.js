 import React, { useState } from "react";
import { View, StyleSheet, Text, Alert, Modal, Pressable, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Avatar, Card, Image, Button } from 'react-native-elements'

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value, value2, value3) => {
  try {
    await AsyncStorage.setItem('title', value)
    await AsyncStorage.setItem('avatar', value2)
    await AsyncStorage.setItem('prix', value3)
  } catch (e) {
    // saving error
  }
}

// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('Currency')
//     console.log(value)
//   } catch(e) {
//     // error reading value
//   }
// }

// getData()

const items = [
  {
     title: 'plat principal 1',
     titleA: '  فطوري',
     avatar: 'https://www.thenationalnews.com/image/policy:1.730326:1526297736/SofitelJBR-8609.jpg?f=16x9&w=1200&$p$f$w=9375cb0',
     prix: 120,
     description: " Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour ."
  },
  {
    title: 'plat principal 2',
    titleA: ' فطوري',
    avatar: 'https://ca-times.brightspotcdn.com/dims4/default/8fc69cf/2147483647/strip/true/crop/7360x4912+0+0/resize/840x561!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F10%2F7a%2Fe8f722294931ac9c4381f9d43b4b%2Fgettyimages-1140558529-1.jpg',
    prix: 220,
    description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
 },
 {
  title: 'plat principal 3',
  titleA: 'فطوري',
  avatar: 'https://curlytales.com/wp-content/uploads/2021/03/Iftarfeature.jpg',
  prix: 360,
  description: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
},

 ]


function ItemsScreen({navigation}) {  
  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null)

  const [currency, setCurrency] = useState("MAD")

  const [language, setLanguage] = useState("ENGLISH")

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('Currency')
        setCurrency(value)

        const value2 = await AsyncStorage.getItem('Language')
        setLanguage(value2)

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
          <Image
          //  style={styles.tinyLogo}
            source={{
              uri: 'https://curlytales.com/wp-content/uploads/2021/03/Iftarfeature.jpg',
        }}
      />
            <Text style={styles.modalText}>{title}</Text>
            <Text style={styles.modalText}>{description}</Text>
            <Pressable style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        {
          items.map((item, i) => {
            return (
          <Card key={i} style={styles.box}>
          <Card.Title>{language === 'ENGLISH' ? item.title : item.titleA}</Card.Title>
          <Card.Title>{ currency==='USD' ? item.prix * 0.1 + " USD" : item.prix + " MAD" }</Card.Title>
          <Avatar
            rounded
            source={{
              uri: item.avatar,
            }}
            size="large"
          />
          {/* navigation.navigate('ShowItems') */}
          <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ setModalVisible(true), setTitle(item.title), setDescription(item.description) }}>
           <Text style={styles.textStyle}>{language === 'ENGLISH' ? 'Details' : 'معلومات اضافية'}</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ storeData(item.title, item.avatar, `${item.prix}`), navigation.navigate('SelectIngidient') }}>
           <Text style={styles.textStyle}>{language === 'ENGLISH' ? 'Select' :  'اختيار'}</Text>
          </Pressable>

          </Card>
            )
          })
        }

      </View>
      </ScrollView>
    </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
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
      backgroundColor: "gray",
      margin: 20,
      marginLeft: 100,
      marginRight: 100
    },
    buttonClose: {
      backgroundColor: "#8b0000",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    // scrollView: {
    //   backgroundColor: 'pink',
    //   marginHorizontal: 20,
    // },
    // text: {
    //   fontSize: 42,
    // },
  });

export default ItemsScreen
