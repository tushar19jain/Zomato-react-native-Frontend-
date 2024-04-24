import { View,StyleSheet,Text } from "react-native";

export default function Categories({type}){
    return(
        <View style={styles.categoriesContainer}>
            <Text style={{fontSize:12,fontWeight:"bold",textAlign:"center"}} >{type}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    categoriesContainer:{
        borderWidth:1,
        width:100,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:12,
        borderColor:"lightgrey",
        elevation:2,
        backgroundColor:"#fff"
    }
})