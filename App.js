import { StyleSheet, Text, View,StatusBar, TextInput,Image, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Categories from './components/Categories';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import FoodCategories from './components/FoodCategories';
import RestaurantCard from './components/RestaurantCard';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={"#f4f4f2"}  ></StatusBar>
      <ScrollView>
        <View style={styles.addressArea}>
          <View>
            <Entypo name="location-pin" size={34} color="#cb202d" />
          </View>
          <View>
            <Text style={styles.mainAddress}>Patel Nager</Text>
            <Text style={styles.subAddress} >New Mandi, Muzaffarnager</Text>
          </View>
          <View style={styles.otherOptions}>
            <View><MaterialIcons name="g-translate" size={30} color="black" /></View>
            <View><Feather name="menu" size={30} color="black" /></View>
          </View>
        </View>
        <View style={styles.searchBar}>
        <FontAwesome style={styles.searchIcon} name="search" size={24} color="#cb202d" />
        <TextInput style={styles.searchField} placeholder='Restaurant name or a dis...'></TextInput>
        <Feather style={styles.micIcon} name="mic" size={24} color="#cb202d" />
        </View>
        <View style={{padding:15}}>
        <View style={{elevation:5,backgroundColor:"#fff",padding:16,borderRadius:12}}>
          <View style={{flexDirection:"row",justifyContent:"center", paddingLeft:30, paddingRight:30,gap:-40}}>
            <View style={{width:290}}>
              <Text style={{fontWeight:"900"}} >Premium</Text>
              <Text style={{fontSize:12, width:190, color:"grey"}} >Find delightful food from premium restaurants</Text>
            </View>
            <Image
              height={60}
              width={60}
             source={{uri:'https://www.truecaller.com/cms/286eeb81246a7a8cd737df93292d24d9.png'}} > 
             </Image>
          </View>
        </View>
        </View>
        <View>
          <FoodCategories />
        </View>
        <Text style={{textAlign:"center", padding:45,fontSize:14,color:"grey",letterSpacing:3}} >ALL RESTAURANTS</Text>
        <ScrollView horizontal={true}>
        <View style={styles.categoriesScrollable}>
          <Categories type={"Sort"} />
          <Categories type={"Nearest"} />
          <Categories type={"Rating 4.0+"} />
          <Categories type={"Cuisines"} />
        </View>
      </ScrollView>
      <View style={{padding:12,flexDirection:"column",gap:20,marginTop:15}}>
          <RestaurantCard 
          src={'https://www.jesvenues.com/images/services/chaat.jpg'}
          name={"Jain Chaat Corner"}
          rating={4.2}
          items={"100% Veg-only. Street Food. ₹200"}
          discount={"10% OFF up to ₹40"}
          timing={" 43 mins . 1 km"}
          />
          <RestaurantCard 
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYO8EtiGVqaH-M16Xj5hbhZ3SCD1zwn7v3VEpCw3o0g&s'}
          name={"Rol Gol"}
          rating={"4.0"}
          items={"Rolls . ₹200 for one"}
          discount={"50% OFF up to ₹100"}
          timing={" 41 mins . 1.5 km"}
          />
          <RestaurantCard 
          src={'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg'}
          name={"Wok & Dough Cafe"}
          rating={"3.9"}
          items={"100% Veg-only. Chinese"}
          discount={"30% OFF up to ₹75"}
          timing={" 45 mins . 1.5 km"}
          />
           <RestaurantCard 
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrdRHpqb6tGOHpmAcZTdpFtdyC8W--Per1AdhP6PctQ&s'}
          name={"Cakies Cafe"}
          rating={"3.6"}
          items={"100% Veg-only. Momos"}
          discount={"60% OFF up to ₹120"}
          timing={" 54 mins . 2 km"}
          />
          <RestaurantCard 
          src={'https://www.jesvenues.com/images/services/chaat.jpg'}
          name={"Jain Chaat Corner"}
          rating={4.2}
          items={"100% Veg-only. Street Food. ₹200"}
          discount={"10% OFF up to ₹40"}
          timing={" 43 mins . 1 km"}
          />
          <RestaurantCard 
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYO8EtiGVqaH-M16Xj5hbhZ3SCD1zwn7v3VEpCw3o0g&s'}
          name={"Rol Gol"}
          rating={"4.0"}
          items={"Rolls . ₹200 for one"}
          discount={"50% OFF up to ₹100"}
          timing={" 41 mins . 1.5 km"}
          />
          <RestaurantCard 
          src={'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg'}
          name={"Wok & Dough Cafe"}
          rating={"3.9"}
          items={"100% Veg-only. Chinese"}
          discount={"30% OFF up to ₹75"}
          timing={" 45 mins . 1.5 km"}
          />
           <RestaurantCard 
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrdRHpqb6tGOHpmAcZTdpFtdyC8W--Per1AdhP6PctQ&s'}
          name={"Cakies Cafe"}
          rating={"3.6"}
          items={"100% Veg-only. Momos"}
          discount={"60% OFF up to ₹120"}
          timing={" 54 mins . 2 km"}
          />
          <RestaurantCard 
          src={'https://www.jesvenues.com/images/services/chaat.jpg'}
          name={"Jain Chaat Corner"}
          rating={4.2}
          items={"100% Veg-only. Street Food. ₹200"}
          discount={"10% OFF up to ₹40"}
          timing={" 43 mins . 1 km"}
          />
          <RestaurantCard 
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYO8EtiGVqaH-M16Xj5hbhZ3SCD1zwn7v3VEpCw3o0g&s'}
          name={"Rol Gol"}
          rating={"4.0"}
          items={"Rolls . ₹200 for one"}
          discount={"50% OFF up to ₹100"}
          timing={" 41 mins . 1.5 km"}
          />
          <RestaurantCard 
          src={'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg'}
          name={"Wok & Dough Cafe"}
          rating={"3.9"}
          items={"100% Veg-only. Chinese"}
          discount={"30% OFF up to ₹75"}
          timing={" 45 mins . 1.5 km"}
          />
           <RestaurantCard 
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrdRHpqb6tGOHpmAcZTdpFtdyC8W--Per1AdhP6PctQ&s'}
          name={"Cakies Cafe"}
          rating={"3.6"}
          items={"100% Veg-only. Momos"}
          discount={"60% OFF up to ₹120"}
          timing={" 54 mins . 2 km"}
          />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:14,
    padding:12
  },
  searchField:{
    borderWidth:1,
    paddingLeft:60,
    paddingRight:60,
    paddingTop:8,
    paddingBottom:8,
    fontSize:13,
    fontWeight:"400",
    borderRadius:10,
    elevation:2,
    backgroundColor:"#fff",
    borderColor:"#f4f4f2",
  },
  searchIcon:{
    position:"absolute",
    left:35,
    top:20,
    zIndex:1,
  },
  micIcon:{
    position:"absolute",
    right:35,
    top:20,
    zIndex:1
  },
  categoriesScrollable:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    paddingLeft:15
  },
  addressArea:{
    flexDirection:"row",
    alignItems:"center",
    paddingTop:12,
    paddingLeft:10
  },
  otherOptions:{
    flexDirection:"row",
    gap:10,
    marginLeft:60
  },
  mainAddress:{
    fontSize:18,
    fontWeight:"900"
  },
  subAddress:{
    fontSize:12,
    color:"black"
  }
});
