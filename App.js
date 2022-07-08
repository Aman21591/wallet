import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Price from './Price';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}>Tayze Wallet</Text>
      <View>
        <Text style={{fontSize:15,marginTop:10,marginLeft:3}}>$
        <Text style={{fontSize:25,marginTop:10,marginLeft:5}}>10,000
        <Text style={{fontSize:15,margin:10}}>.00</Text>
        </Text></Text>
      </View>
      <View style={{flex: 1,
    flexDirection: 'row',
   }}>
    <View>
      <TouchableOpacity
        style={styles.roundButton1}>
        <Text style={{fontSize:25}}>+</Text>
      </TouchableOpacity>
      <Text style={{marginLeft:26}}>Add</Text>
      </View>
      <View>
      <TouchableOpacity
        style={styles.roundButton1}>
        <Text style={{fontSize:25}}>+</Text>
      </TouchableOpacity>
      <Text style={{marginLeft:26}}>swap</Text>
      </View>
      <View>
      <TouchableOpacity
        style={styles.roundButton1}>
        <Text style={{fontSize:25}}>+</Text>
      </TouchableOpacity>
      <Text style={{marginLeft:26}}>Withdraw</Text>
      </View>
      <View>
      <TouchableOpacity
        style={styles.roundButton1}>
        <Text style={{fontSize:25}}>+</Text>
      </TouchableOpacity>
      <Text style={{marginLeft:26}}>Liquidate</Text>
      </View>
      </View>
      <View>
      <View style={{
    flexDirection: 'row'}}>
        <TouchableOpacity style={styles.roundButton2}>
          <Text>Tokens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton3}>
          <Text>Transcation</Text>
        </TouchableOpacity>
      </View>
      <View  >
        <TouchableOpacity style={styles.roundButton4}>
          <Text>1</Text>
        </TouchableOpacity>
        <View >
          <Text>Bitcoin</Text>
          <Text style={{fontSize:3,marginTop:5,marginLeft:3}}>$
        <Text style={{fontSize:5,marginTop:5,marginLeft:5}}>10,000
        <Text style={{fontSize:3,margin:10}}>.00</Text>
        </Text></Text>
        </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    paddingLeft:20,
  },
  roundButton1: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    margin:25,
    borderRadius: 40,
    backgroundColor: '#ccc',
    
  },
  roundButton2:{
    width: 70,
    height: 20,
    margin:10,
    marginBottom:390,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  roundButton3:{
    width: 100,
    height: 20,
    margin:10,
    marginBottom:390,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  roundButton4: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-350,
    borderRadius: 40,
    margin:1,
    backgroundColor: '#ccc',  
  },
  
});
