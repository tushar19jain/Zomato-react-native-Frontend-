import { Image,View ,Text} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function RestaurantCard({src,timing,name,items,rating,discount}){
    return(
        <View style={{borderRadius:3,backgroundColor:"#fff",elevation:10,borderRadius:20}}>
            <Image
            style={{borderTopLeftRadius:20,borderTopRightRadius:20}}
            width={335}
            height={200}
            source={{uri:src}}
            ></Image>
            <View style={{backgroundColor:"#fff",position:"absolute",top:170,paddingRight:40,paddingBottom:12,paddingTop:8,paddingLeft:20,borderTopRightRadius:60}}>
            <Text style={{fontSize:12,textAlign:"center",color:"grey", fontWeight:"bold"}} ><Ionicons name="timer-sharp" size={12} color="green"/>{timing}</Text>
            </View>
            <View style={{padding:12,flexDirection:"row",justifyContent:"space-between"}}>
                <View>
                <Text style={{fontSize:20,fontWeight:"900"}} >{name}</Text>
                <Text style={{color:"grey"}} >{items}</Text>
                </View>
                <View>
                    <Text style={{backgroundColor:"green",padding:5,borderRadius:8,color:"white",fontSize:12}}>{rating} <AntDesign name="star" size={10} color="white" /></Text>
                </View>
            </View>
            <Text style={{color:"gray",padding:14}} >------------------------------------------</Text>
            <Text style={{textAlign:"left",paddingLeft:20,paddingBottom:12,color:"#007FFF",fontWeight:"600"}}> <MaterialCommunityIcons name="brightness-percent" size={15} color="#007FFF" />{discount}</Text>
        </View>
    )
}