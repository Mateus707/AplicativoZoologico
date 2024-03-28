import { useState } from 'react';
import { ActivityIndicator,StyleSheet,View} from 'react-native';

const loadView = () =>{
    const [load,setLoad] = useState(true);
  
    if (load) {
        return (
            <View style={styles.container}>
            <ActivityIndicator
                style={styles.load}
                animating={load}
                color={'green'}
                size={'large'}
            />
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   load:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   },
})
export default loadView; 