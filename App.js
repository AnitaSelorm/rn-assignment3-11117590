import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const tasks = [
    { name: 'Exercise', key: '1', image: require("./assets/image.png") },
    { name: 'Study', key: '2', image: require("./assets/image4.png") },
    { name: 'Cook', key: '3', image: require("./assets/image.png") },
    { name: 'Pray', key: '4', image: require(("./assets/image4.png")) },
    { name: 'Code', key: '5', image: require("./assets/image.png") },
    { name: 'Work', key: '6', image: require(("./assets/image4.png")) },
    { name: 'Clean', key: '7', image: require("./assets/image.png") },
    { name: 'Eat', key: '8', image: require(("./assets/image4.png")) },
  ];

  const data = [
    { name: 'Mobile Application Development', key: '1' },
    { name: 'Web Development', key: '2' },
    { name: 'Push Ups', key: '3' },
    { name: 'Make Dinner', key: '4' },
    { name: ' Study For Test', key: '5' },
    { name: 'Deep Clean', key: '6' },
    { name: 'Do Laundry', key: '7' },
    { name: 'Have Quiet Time', key: '8' },
    { name: 'Rest', key: '9' },
    { name: 'Complete Assignment', key: '10' },
    { name: 'Work On Project', key: '11' },
    { name: 'Respond To Emails', key: '12' },
  ];


  const renderCategories = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.bigText}>{item.name}</Text>
        <Text>12 Tasks</Text>
        <View style={styles.img}>
          <Image source={item.image} style={styles.imgStyle} resizeMode="contain" />
        </View>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text>14 tasks today</Text>
        </View>
        <View style={styles.topImg}>
          <Image source={require("./assets/image2.png")}  resizeMode="contain" />
        </View>
      </View>
      
      <View style={styles.secondContainer}>
        <View style={styles.search}>
        <Image source={require("./assets/image1.png")} style={{marginRight: 10}}  resizeMode="contain" />
        <TextInput 
        placeholder='Search'
        style={styles.textIn}
        placeholderTextColor={'black'}
        />
       </View>
        <View style={styles.secondImg}>
        <Image source={require("./assets/image3.png")}  resizeMode="contain" />
        </View>
      </View>

      <View style={styles.catContainer}>
      <View style={styles.tasks}>
        <Text style={styles.tasks}>Categories</Text>
      </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key.toString()}
          contentContainerStyle={styles.horizontal}
          data={tasks}
          renderItem={renderCategories}
        />
      </View>


      <View >
        <View style={styles.tasks}>
          <Text style={styles.tasks}>Ongoing Tasks</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text style={styles.mobile}>{item.name}</Text>
          )}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5ee',
  },
  topContainer: {
     alignItems: 'flex-start',
     justifyContent: 'space-between',
     flexDirection: 'row',
     padding: 20,
     marginTop: 50,
  },
  topImg: {
    backgroundColor: "white",
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: 'center'
 },

  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
  }, 
  header: {
    marginLeft: 10,
  },
  secondContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
 },
 secondImg: {
  backgroundColor: "orangered",
  borderRadius: 10,
  width: 40,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center'
},
  search: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    width: 280,
    flexDirection: 'row',
    fontWeight: 'bold',

  },

  textIn:{
   fontWeight:'bold',
   color: 'black',

  },
  categories: {
    flexDirection: "row",
  },

  horizontal: {
    paddingVertical: 10,
  },

  itemContainer: {
    backgroundColor: "white",
    marginRight: 20,
    width: 190,
    height: 190,
    borderRadius: 20,
    padding: 20,
  },
  bigText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  catContainer: {
   marginHorizontal: 15,
  },
  exercise: {
    backgroundColor: '#ffffff',
    padding: 50,
    marginLeft: 10,
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  tasks: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    borderRadius: 20,
    width: "77%",
  },
  ongoing: {
    flexDirection: 'column'
  },
  mobile: {
    backgroundColor: '#ffffff',
    padding: 50,
    marginTop: 10,
    marginLeft: 10,
    width: 390,
    height: 110,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: '#d2b48c',
  }
});