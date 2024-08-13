import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { auth } from "./Auth";


const HomePage = ({navigation} : any) => {
    return(
        <SafeAreaView>
        <Text style= {styles.headerText}>Click on the choice of page</Text>
        <View style= {styles.gridContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Page1') }}>
                    <Text style={styles.buttonText}>Go to Page 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Page2') }}>
                    <Text style={styles.buttonText}>Go to Page 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Page3') }}>
                    <Text style={styles.buttonText}>Go to Page 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Page4') }}>
                    <Text style={styles.buttonText}>Go to Page 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.navigate('Page5') }}>
                    <Text style={styles.buttonText}>Go to Page 5</Text>
                </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding: 16,
    },
    headerText : {
        fontSize: 25,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 40,
        fontWeight: 'bold',
    },
    gridContainer: {
        marginTop: 80,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    // buttonWrapper: {
    //     marginVertical: 20,
    //     width: '65%',
    // },
    buttonStyle: {
        margin: 10,
        width: '40%', 
        backgroundColor: '#8882d9',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})


export default HomePage;