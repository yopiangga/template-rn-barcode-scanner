import React, {useState, useEffect} from 'react';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default function ScanBarcodeService(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');

  useEffect(() => {
    checkPermission();
  }, []);

  function checkPermission() {
    (async () => {
      const {status} = await BarCodeScanner.getPermissionsAsync();
      if (status === 'granted') {
        setHasPermission(true);
      } else {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      }
    })();
  }

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data);
    props.handleChange(data);
  };

  return (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={{height: 300, width: 300}}
    />
  );
}
