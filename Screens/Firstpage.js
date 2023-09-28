import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Firstpage() {
    return (
    		<View style={styles.firstpage}>
      			{/* RN-Flow:: can be replaced with <Notification  /> */}
      			<View style={styles.notification}>
      			</View>
      			<Text style={styles.ezyRail}>
        				{`Ezy Rail`}
      			</Text>
      			<View style={styles.travellingbytrain}/>
      			<View style={styles.rectangle11}/>
      			<Text style={styles.getstarted}>
        				{`Get started`}
      			</Text>
    		</View>
    )
}

const styles = {
  	firstpage: {
    flexShrink: 0,
    height: 800,
    width: 360,
    background: "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))",
    boxShadow: "",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 20
},
  	notification: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    height: 28,
    left: 6,
    width: 348,
    boxShadow: "",
    alignItems: "flex-start",
    rowGap: 0
},
  	vector: {
    position: "absolute",
    flexShrink: 0,
    top: 13,
    right: 0,
    bottom: 3,
    left: 326,
    overflow: "visible"
},
  	_vector: {
    position: "absolute",
    flexShrink: 0,
    top: 10,
    right: 26,
    bottom: 1,
    left: 299,
    overflow: "visible"
},
  	__vector: {
    position: "absolute",
    flexShrink: 0,
    top: 9,
    right: 56,
    bottom: 0,
    left: 273,
    overflow: "visible"
},
  	_40: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 317,
    bottom: 7,
    left: 0,
    textAlign: "center",
    color: "linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86))",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0
},
  	ezyRail: {
    position: "absolute",
    flexShrink: 0,
    top: 122,
    left: 50,
    width: 261,
    height: 83,
    textAlign: "center",
    color: "linear-gradient(rgba(83, 164, 189, 1), rgba(83, 164, 189, 1))",
    fontFamily: "Poppins",
    fontSize: 48,
    fontWeight: "700",
    letterSpacing: 0
},
  	travellingbytrain: {
    position: "absolute",
    flexShrink: 0,
    top: 273,
    left: 37,
    width: 263,
    height: 283,
    background: {

    },
    boxShadow: ""
},
  	rectangle11: {
    position: "absolute",
    flexShrink: 0,
    top: 634,
    left: 57,
    width: 247,
    height: 56,
    background: {

    },
    boxShadow: "",
    borderRadius: 10
},
  	getstarted: {
    position: "absolute",
    flexShrink: 0,
    top: 638,
    left: 89,
    width: 182,
    height: 48,
    textAlign: "center",
    color: "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))",
    fontFamily: "Poppins",
    fontSize: 32,
    fontWeight: "500",
    letterSpacing: 0
}
}