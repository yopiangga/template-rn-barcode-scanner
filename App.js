import React, {useState} from 'react';
import ScanBarcodeService from './ScanBarcodeService';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function App() {
  const [data, setData] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <ScanBarcodeService
          handleChange={value => {
            setData(value);
          }}
        />
      </View>
      <Text style={styles.maintext}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    // backgroundColor: 'green',
  },
});
