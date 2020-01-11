import React from 'react';
import { StyleSheet, Modal, Linking, Platform, View, Dimensions  } from 'react-native';
import { Block, theme,Button, Text } from "galio-framework";
import PropTypes from 'prop-types';
import nowTheme from '../constants/Theme';

const { width } = Dimensions.get("screen");
class BookOptionModal extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            modalVisible: props.modalVisible
        }
      }
    
    toggleModal = (visible) => {
        this.setState({ modalVisible: visible });
     }

    makeCall = () => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${08188706913}';
        } else {
          phoneNumber = 'telprompt:${08188706913}';
        }
    
        Linking.openURL(phoneNumber);
      };
    render() {
        

        return (
               <View style = {styles.modal}>
               <Button
                  shadowless
                  style={styles.button}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() => this.props.navigation.navigate('AddAppointment')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                    Book Online
                  </Text>
                </Button>
                <Button
                  shadowless
                  style={styles.button}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() => this.makeCall()}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                    Contact Agent
                  </Text>
                </Button>
               </View>
        )
    }
}

BookOptionModal.propTypes = {
    modalVisible: PropTypes.bool
}

const styles = StyleSheet.create ({
    modal: {
       flex: 0.5,
       alignItems: 'center',
       backgroundColor: '#FFFFFF',
       padding: 10
    },

    button: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
        marginBottom: 5
      },
 })

 export default BookOptionModal