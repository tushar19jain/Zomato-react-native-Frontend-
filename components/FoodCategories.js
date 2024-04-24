import {View,Text, ScrollView,Image,StyleSheet} from 'react-native'
export default function FoodCategories(){
    return(
        <View>
            <Text style={{textAlign:"center",padding:15, fontSize:14,color:"grey",letterSpacing:3}} >WHAT'S ON YOUR MIND</Text>
            <View style={styles.foodContainer}>
            <ScrollView style={styles.foodRow} horizontal={true}>
                <View style={styles.foodOptions}>
                    <Image
                    height={60}
                    width={90}
                    alt='pizza' 
                    source={{uri:'https://www.cicis.com/media/5jzgsmbq/supreme-pizza.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Pizza</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Paratha'
                    height={60}
                    width={90} 
                    source={{uri:'https://indianheartbeat.in/wp-content/uploads/2023/01/pngwing.com-12.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Paratha</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Chole bhature'
                    height={60}
                    width={90} 
                    source={{uri:'https://static.vecteezy.com/system/resources/previews/036/627/131/original/ai-generated-realistic-chole-bhature-on-transparent-background-png.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Chole bhature</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Burger'
                    height={60}
                    width={90} 
                    source={{uri:'https://firangiburgers.com/wp-content/uploads/2023/12/Firangi-Aloo-Tikki-burger.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Burger</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Rolls'
                    height={60}
                    width={90} 
                    source={{uri:'https://static.vecteezy.com/system/resources/previews/032/325/132/original/spring-rolls-isolated-on-transparent-background-file-cut-out-ai-generated-png.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Rolls</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='momos'
                    height={60}
                    width={90} 
                    source={{uri:'https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-nepal-food-momo-dumpling-png-image_11719797.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}> Momos</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='tea'
                    height={60}
                    width={90} 
                    source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/017/340/372/small/white-cup-of-tea-png.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Tea</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='gulab jamun'
                    height={60}
                    width={90} 
                    source={{uri:'https://png.pngtree.com/png-clipart/20231018/original/pngtree-diwali-gulab-jamun-png-image_13343607.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Gulab jamun</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Chicken'
                    height={60}
                    width={90} 
                    source={{uri:'https://bbqchicken.com/wp-content/uploads/2022/11/GangnamStyle-480x275-min.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Chicken</Text>
                </View>
            </ScrollView>
            <ScrollView style={styles.foodRow} horizontal={true}>
            <View style={styles.foodOptions}>
                    <Image
                    height={60}
                    width={90}
                    alt='pizza' 
                    source={{uri:'https://annamodisha.com/wp-content/uploads/2020/09/Chicken-Biryani-Regular-Single.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Biryani</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Paratha'
                    height={60}
                    width={90} 
                    source={{uri:'https://png.pngtree.com/png-clipart/20240103/original/pngtree-cheese-veg-grilled-sandwich-png-image_14008326.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Sandwich</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Chole bhature'
                    height={60}
                    width={90} 
                    source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/017/340/380/small_2x/birthday-cake-with-candles-png.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Cake</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Burger'
                    height={60}
                    width={90} 
                    source={{uri:'https://ghodkesweets.com/wp-content/uploads/2020/11/dhokla.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Dhokla</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Rolls'
                    height={60}
                    width={90} 
                    source={{uri:'https://static.vecteezy.com/system/resources/previews/036/289/655/original/ai-generated-papdi-chaat-on-plate-with-transparent-background-ai-png.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Chaat</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='momos'
                    height={60}
                    width={90} 
                    source={{uri:'https://click4vector.com/public/uploads/preview/dosa-9391683185823zcnl3ehhuq.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Dosa</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='tea'
                    height={60}
                    width={90} 
                    source={{uri:'https://static.vecteezy.com/system/resources/previews/036/290/262/original/ai-generated-jalebi-on-plate-with-transparent-background-ai-png.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Jalebi</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='gulab jamun'
                    height={60}
                    width={90} 
                    source={{uri:'https://static.vecteezy.com/system/resources/previews/023/742/342/non_2x/sweet-ice-cream-illustration-ai-generative-free-png.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Ice cream</Text>
                </View>
                <View style={styles.foodOptions}>
                    <Image
                    alt='Chicken'
                    height={60}
                    width={90} 
                    source={{uri:'https://ranaspice.co.uk/wp-content/uploads/2019/07/762-7628096_samosa-large-samosa.png'}}
                     ></Image>
                     <Text style={{fontSize:12 , fontWeight:"600", color:"gray"}}>Samosa</Text>
                </View>
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    foodOptions:{
        flexDirection:"column",
        alignItems:"center"
    },
    foodContainer:{
        gap:40,
        paddingLeft:15,
        paddingRight:5
    },
    foodRow:{
        flexDirection:"row",
    }
})