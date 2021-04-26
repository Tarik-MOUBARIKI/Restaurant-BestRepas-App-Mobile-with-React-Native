import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Pressable, Text } from 'react-native';

import { Avatar, Button } from "react-native-elements";



import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value, value2, value3) => {
  try {
    await AsyncStorage.setItem('titleIng', value)
    await AsyncStorage.setItem('avatarIng', value2)
    await AsyncStorage.setItem('prixIng', value3)
  } catch (e) {
    // saving error
  }
}

const Ingridients = [
    {
       title: 'salade  au poulet',
       titleA: 'سلطة الافوكادو مع الدجاج',
       avatar: 'https://image.freepik.com/free-photo/grilled-chicken-breast-cast-iron-skillet-with-grill-vegetables-green-sauce-stone-flat-lay_70626-9954.jpg',
       prix: 10,
       description: 'azerty'
    },
    
   {
    title: 'salade ',
    titleA: 'سلطة',
    avatar: 'https://image.freepik.com/free-photo/vegetable-canned-tuna-salad_185870-375.jpg',
    prix: 16,
    description: 'zerty'
  },
  {
    title: 'Jus ',
    titleA: 'عصير',
    avatar: 'https://image.freepik.com/free-vector/delicious-cocktail-realistic-style_23-2147823453.jpg',
    prix: 21,
    description: 'zerty'
  },
  {
    title: 'bottle of water',
    titleA: 'قنينة ماء',
    avatar: 'https://image.freepik.com/free-psd/1-0l-fresh-water-bottle-mockup_358694-280.jpg',
    prix: 6,
    description: 'zerty'
  },
   ]

function SelectIngidient({navigation}) {  
  const [language, setLanguage] = useState("ENGLISH")

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Language')
      setLanguage(value)

    } catch(e) {
      // error reading value
    }
  }
  getData()
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <View style={styles.box}>
                            {
                                Ingridients.map((ingridient, i) => {
                                    return (
                                        // ShowItems
                                        <Pressable key={i} onPress={() =>{ storeData(ingridient.title, ingridient.avatar, `${ingridient.prix}`), navigation.navigate('ShowItems') }}>
                                            <Avatar
                                                size="xlarge"
                                                rounded
                                                source={{
                                                    uri: ingridient.avatar,
                                                }}
                                            />
                                            <Text style={styles.textStyle}>{language === "ENGLISH" ? ingridient.title : ingridient.titleA }</Text>
                                        </Pressable>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    box: {
        textAlign: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 40
    },
    textStyle: {
      color: '#000000',
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 15
    },
  });

export default SelectIngidient

