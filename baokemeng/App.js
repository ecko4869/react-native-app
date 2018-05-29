/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Image,
    Button,
    TouchableHighlight,
    Modal,
    TextInput,
    Dimensions,
    Alert
} from 'react-native';

const width = Dimensions.get.width
const height= Dimensions.get.height
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            number:"",
            name_chs:"",
            name_jp:"",
            name_eng:"",
            trait1:"",
            trait2:"",
            trait3:"",
            hp:"",
            atk:"",
            def:"",
            satk:"",
            sdef:"",
            spd:"",
            sum:"",
            type1:"",
            type2:"",
            weight:"",
            sex:"",
            capture:"",
            egggroup1:"",
            egggroup2:"",
            lay:"",
            exp:"",
        };
    }
 /*   _keyExtractor = (item,index) => index.toString();*/
add()
{
    return 1;
}
calculator()
{
    return 1;
}
    render() {
        return (
            <View style={styles.container}>




               <View style={styles.row}>
                   <Button onPress={()=>{this.add()}} title='图鉴' />
                    <Button onPress={()=>{this.calculator()}} title='计算器' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    row: {

        flexDirection: 'row',
        borderColor: '#f00',
        borderWidth: 1
    },
    cell: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#f00'
    },
    ceildark:{
        flex:1,
        height:50,
        borderWidth:1,
        borderColor:'black',
    }
});
