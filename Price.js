import React from "react";
import { TouchableOpacity,Text ,StyleSheet} from "react-native";

export default function Price(){
return(
<TouchableOpacity style={styles.roundButton4}>
          <Text>1</Text>
        </TouchableOpacity>
);}
const styles = StyleSheet.create({
    roundButton4:{
        width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    margin:1,
    marginBottom:330,
    borderRadius: 40,
    backgroundColor: '#ccc',
    flexDirection:'column',
    },
})