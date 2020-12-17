import React,{Component} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Header extends Component {
    render() {
        const {title}= this.props
        return(
            <View style={styles.container}>
                <Text style={styles.txt}>{title}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'space-around',
        paddingTop:50,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    icon:{
        width:'10%',
        display: 'flex',
        justifyContent: 'flex-end',

    },
    txt:{
        textAlign:'center',
        fontSize:30,
    }
})