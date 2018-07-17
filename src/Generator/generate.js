import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const generate = () => (
    <View style={styles.generate}>
        <Text>Add number</Text>
    </View>
)

const styles = StyleSheet.create({
    generate: {
        padding: 10,
        alignItems: 'center',
        backgroundColor:'#00bcd4',
        width:'100%',
        marginTop: 20,

    }
  });

  export default generate;
  