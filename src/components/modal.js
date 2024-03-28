import {Modal,View,Pressable,Text,StyleSheet } from 'react-native';
import { useState} from 'react';


export default function ChamaModal ({closeModal}) {
  const [modalVisible, setModalVisible] = useState(false);

 return (<Modal
  animationType="slide"
  transparent={true}
  visible={setModalVisible}
  >
    <View style={styles.modal}>
      <View style = {styles.boxModal}>
        <Pressable style={styles.buttonNP} onPress={closeModal}>
        </Pressable>
      </View>
   
    </View>
 
</Modal>)
}
const styles = StyleSheet.create({
  buttonNP:{
    backgroundColor: 'white',
    width: 200,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 2,
    borderColor: 'gold',
    color: 'gold',
    fontSize: '18pt',
  },
modal:{
  flex: 1,
  height: '50%',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center'
},

boxModal: {
  flex: 0.33,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderColor: 'gold',
  backgroundColor: 'white',

},

textFinal: {
  fontSize: '18pt',
  color: 'gold',
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
}

})
