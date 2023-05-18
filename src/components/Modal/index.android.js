import React from 'react';
import withWindowDimensions from '../withWindowDimensions';
import BaseModal from './BaseModal';
import {propTypes, defaultProps} from './modalPropTypes';

// Only want to use useNativeDriver on Android. It has strange flashes issue on IOS
// https://github.com/react-native-modal/react-native-modal#the-modal-flashes-in-a-weird-way-when-animating
// Oh, how the turntables...
// on the new arch the only non-flickering combination is useNativeDriverForBackdrop={false} and useNativeDriver={true}
// will leave both .android and .ios files for now, as there is a high chance the situation will change again with 0.72
const Modal = (props) => (
    <BaseModal
        useNativeDriver
        useNativeDriverForBackdrop={false}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    >
        {props.children}
    </BaseModal>
);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.displayName = 'Modal';
export default withWindowDimensions(Modal);
