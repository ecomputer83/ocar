import React from 'react';
import { StyleSheet,  Dimensions, Picker, AsyncStorage  } from 'react-native';
import { Block, theme,Button as GaButton, Text } from "galio-framework";
import { Input, Icon } from '../components';
import { myvehicle, nowTheme } from '../constants';

const { width } = Dimensions.get("screen");
class AddAppointment extends React.Component {
    state = {
        vehicle : null,
        jobType: null
    }

    constructor(props) {
        super(props);
        
        state = {
            vehicle : null,
            jobType: null
        }
      }
    componentDidMount(){
        AsyncStorage.getItem('selectedvehicle', (err, result) => {
            this.setState({vehicle: JSON.parse(result)})
        })
    }
    componentWillUnmount(){
        this.setState({vehicle: null, jobType: null});
    }
    pickerChange(index){
        myvehicle.map( (v,i)=>{
         if( index === i ){
           this.setState({
           vehicle: myvehicle[index]
          })
         }
        })
    }
    renderServiceDate = () => {
        return ( 
            <Block width={width * 0.8} style={{ marginBottom: 5 }} >
                              <Text>Last Service Date</Text>
                                <Input
                                  placeholder="Last Service Date"
                                  color="black"
                                  style={styles.inputs}
                                  value={(this.state.vehicle != null) ? this.state.vehicle.serviceduedate : ''}
                                  editable = {(this.state.vehicle.serviceduedate)? false : true}
                                  noicon
                                />
            </Block>
        )
    }

    renderMileage = () => {
        return (
            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                              <Text>Registration Number</Text>
                              <Input
                                  placeholder="Mileage"
                                  color="black"
                                  style={styles.inputs}
                                  value={(this.state.vehicle != null) ? this.state.vehicle.mileage : ''}
                                  editable = {(this.state.vehicle.mileage)? false : true}
                                  noicon
                                />
                              </Block>
        )
    }

    renderJobType = () => {
        return (
            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                                <Text>Job Type</Text>
                                <Block  style={styles.picker}>
                                <Picker  selectedValue={this.state.jobType}  onValueChange={(itemValue, itemIndex) => this.setState({vehicle: this.state.vehicle, jobType: itemValue})}>
                                    <Picker.Item label='-- Select Type --' value={null} />
                                    <Picker.Item label='Periodic Maintenance' value='PMS' /> 
                                    <Picker.Item label='General Repair' value='GR' />
                                    <Picker.Item label='diagnostic' value='diagnostic' /> 
                                </Picker>
                                </Block>
                              </Block>
        )
    }
    saveandnavigate = () => {
        AsyncStorage.setItem('Params', JSON.stringify({ vehicle: null, jobType: null, service: null, scheduledate: null}), () => {
        AsyncStorage.mergeItem('Params', JSON.stringify({ vehicle: JSON.stringify(this.state.vehicle), jobType: this.state.jobType, service: null, scheduledate: null}), () => {
            
            if(this.state.jobType == 'PMS') {
            this.props.navigation.navigate('Services')
        }else{
            this.props.navigation.navigate('Schedule') 
        };
        this.setState({vehicle: null, jobType: null});
    });
})
    }
    render () {
        const {vehicle, jobType} = this.state
        return (
            <Block flex center>
                <Block flex={1} space="between">
                        <Block center flex={0.9}>
                          <Block flex space="between">
                            <Block>
                              <Block width={width * 0.8} style={{ marginBottom: 5, marginTop: 25 }}>
                                <Text>My Vehicles</Text>
                                <Block  style={styles.picker}>
                                <Picker
                                    selectedValue={vehicle }
                                    onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>
                                        <Picker.Item label='-- Select Vehicle --' value={null} />
                                        {
                                        myvehicle.map( (v)=>{
                                        return <Picker.Item label={v.regNo + ' - '+v.model} value={v} />
                                        })
                                    }
                                </Picker>
                                </Block>
                              </Block>
                              { (vehicle != null) ?  this.renderJobType() : (<Block />)}
                             { (vehicle != null) ? (jobType == 'PMS') ? this.renderServiceDate() : (<Block />): (<Block />)}
                             { (vehicle != null) ? (jobType != null) ? this.renderMileage() : (<Block />): (<Block />)} 
                              <Block style={{marginBottom:  10}}></Block>
                              { (vehicle != null) ?  (
                              <Block width={width * 0.8} center>
                                <GaButton
                                    shadowless
                                    style={styles.loginbutton}
                                    color={nowTheme.COLORS.PRIMARY}
                                    onPress={() => this.saveandnavigate()}
                                >
                                    <Text
                                        style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                                        color={theme.COLORS.WHITE}
                                    >
                                        NEXT
                                    </Text>
                                </GaButton>
                              </Block>)
                               : (<Block />)}
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    inputs: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 0
      },
      picker: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 0
      },
      loginbutton: {
        width: ((width * 0.8) /2),
        height: nowTheme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0
      }
})
export default AddAppointment