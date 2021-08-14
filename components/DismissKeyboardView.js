import React from 'react';
import {
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

function DismissKeyboardView({ children }){
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}

export default DismissKeyboardView;