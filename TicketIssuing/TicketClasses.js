import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function TicketClasses() {

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'First Class - Rs. 1000',
            value: '1000'
        },
        {
            id: '2',
            label: 'Second Class - Rs. 500',
            value: '500'
        },
        {
            id: '3',
            label: 'Third Class - Rs. 250',
            value: '250'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState();

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    );

}