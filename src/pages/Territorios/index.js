import styles from './styles';
import { View,Text,Image} from 'react-native';
import { useState } from 'react';
import LoadView from '../../components/loadView';
import { FlatList } from 'react-native-web';
import macaco from './../../../assets/img/macaco.png'
import golfinho from './../../../assets/img/golfinho.jpg'
import onca from './../../../assets/img/onça.jpg'
import arara from './../../../assets/img/arara.jpg'

export default function App(){
    
    const [load,setLoad] = useState(true);
    const data = [
        {
            id : 1,
            img: macaco,
            nome : "Territorio 1",
        } ,
        {
            id : 2,
            img: onca,
            nome : "Territorio 2",
        } ,
        {
            id : 3,
            img: golfinho,
            nome : "Territorio 3",
        } ,
        {
            id : 4,
            img: arara,
            nome : "Territorio 3",
        }      
];
    
    useState(() => {
        setTimeout(() => {
            setLoad(false)
        },1000)
    });
    if(load){
        return (<LoadView/>)
    }
    return (
        
            <FlatList data={data} style={styles.container} renderItem={({item}) => (
                 <View>
                        <Image style={styles.img} source={item.img}/>
                        <Text>{item.nome}</Text>
                 </View>
                 )}/>
        
    )
}
