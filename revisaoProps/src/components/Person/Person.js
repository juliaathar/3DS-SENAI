//component person
//props: name, age

import { View, StyleSheet, Text } from "react-native";

const Person = ({name, age}) => {
      
    return(
        <View style = {styles.container}>
            <Text style= {styles.txt}>Name: {name}</Text>
            <Text style= {styles.txt_age}>Age: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    txt: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Montserrat_600SemiBold'
    },
    txt_age: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Outfit_600SemiBold'
    }
})

export default Person;