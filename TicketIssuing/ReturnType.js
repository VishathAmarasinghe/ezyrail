import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function JourneyType({setjournetType}) {

    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'Single',
            value: 'single'
        },
        {
            id: '2',
            label: 'Return',
            value: 'Return'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState(1);

    useEffect(()=>{
        setjournetType(selectedId);
        console.log(selectedId);
    },[selectedId])

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    );

}