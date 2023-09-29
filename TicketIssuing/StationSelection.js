import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

 export default   function DropdownComponent({labelName,setFromValue,setToValue}) {
  const [stationData,setstationData]=useState([]);
  useEffect(()=>{
    try {
      const fetchstationData=async ()=>{
        const response = await axios.get(`http://10.0.2.2:3000/station/stations/searchStations`);
        console.log("data ",response.data[0].stationName);
        setstationData(response.data);
        }
        fetchstationData();
    } catch (error) {
      console.log("Data Getting Error "+error);
    }
    
  },[])
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(()=>{
      if (labelName==="From") {
        setFromValue(value);
      }else if (labelName==="To") {
        setToValue(value);
      }
      console.log("value is "+value);
    },[value])

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            {labelName}
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stationData}
          search
          maxHeight={300}
          labelField="stationName"
          valueField="keyIdvalue"
          placeholder={!isFocus ? 'Select Station' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.keyIdvalue);
            setIsFocus(false);
          }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
        />
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
      borderWidth:2,
      borderColor:"#53A4BD",
      borderRadius:13,
      marginTop:20,
      
    },
    dropdown: {
      height: 50,
      // borderColor: 'gray',
      // borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });