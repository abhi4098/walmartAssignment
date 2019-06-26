import React, { Component } from "react";
import {
    View,
    Text,
    Picker,
    StyleSheet,
    Image,
    Platform,
    Button,
    Alert,
    FlatList,

} from "react-native";


import { connect } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../common/Loader';



import {
    fancyCarListData,
    showFancyCarLoading,

} from "../../actions/index";



const availability = [{
    id: 1,
    available: "In Dealership"
}, {

    id: 2,
    available: "Out of Stock"
}, {
    id: 3,
    available: "In Dealership"
},
{
    id: 4,

    available: "Out of Stock"
}, {

    id: 5,
    available: "Unavailable"
}, {
    id: 6,
    available: "In Dealership"
},
{
    id: 7,
    available: "In Dealership"
}];


class FancyCarListScreen extends Component {

    constructor(props) {

        super(props);
        this.state = {
            loading: false,
            fancyCarListData: '',
            avail: '',
            sortedData: '',
            type: ''


        }
    }

    changePickerItems = (type) => {
        this.setState({ type: type })

        if (type == "availability") {
            sortedData = [].concat(this.state.data)
                .sort((a, b) => a.availability.localeCompare(b.availability));
        }
        else if (type == "name") {
            sortedData = [].concat(this.state.data)
                .sort((a, b) => a.name.localeCompare(b.name));

        }
        else {
            sortedData = this.state.data;
        }


        this.setState({ data: sortedData });

    }

    componentWillMount() {
        this.CheckConnectivity();
    }

    CheckConnectivity = () => {
        // For Android devices
        if (Platform.OS === "android") {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    this.props.showFancyCarLoading(true);
                    this.props.fancyCarListData();
                } else {

                    this.getDataFromLocalStorage();

                }
            });
        } else {
            // For iOS devices
            NetInfo.isConnected.addEventListener(
                "connectionChange",
                this.handleFirstConnectivityChange
            );
        }
    };

    handleFirstConnectivityChange = isConnected => {
        NetInfo.isConnected.removeEventListener(
            "connectionChange",
            this.handleFirstConnectivityChange
        );

        if (isConnected === false) {
            Alert.alert("You are offline!");
        } else {
            Alert.alert("You are online!");
        }
    };




    getDataFromLocalStorage() {
        AsyncStorage.getItem("fancyCarData").then((value) => {

            if (value) {

                this.setState({ data: JSON.parse(value) })

            }
            else {
                Alert.alert("You are offline and don't have any data to show");
            }

        }).done();
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.fancyCarListResponseData != undefined && nextProps.fancyCarListResponseData != '') {
            this.props.showFancyCarLoading(false);

            AsyncStorage.setItem("fancyCarData", JSON.stringify(nextProps.fancyCarListResponseData));
            this.setState({ data: nextProps.fancyCarListResponseData })


        }



    }


    renderButton() {
        if (avail == "In Dealership") {
            return (<View>
                <Button
                    title="Buy Now"
                />
            </View>
            );
        }

    }




    _renderItem({ item }) {

        var id = item.id;

        const carAvailability = availability.filter(x => x.id === id);
        avail = carAvailability[0].available;
        item.availability = avail;

        return <View

            style={styles.itemContainer}
        >

            <View style={styles.inputContainer}>


                <Image

                    source={{ uri: item.img }}

                    style={styles.inputIcon}

                />



                <View
                    style={styles.informationContainer}>




                    <View
                        style={styles.inputContainer}>
                        <Text
                            style={styles.textTagContainer}

                        >Name :  </Text>
                        <Text
                            style={styles.textValueContainer}


                        >{item.name}</Text>

                    </View>

                    <View
                        style={styles.inputContainer}>
                        <Text
                            style={styles.textTagContainer}
                        >Maker :  </Text>
                        <Text
                            style={styles.textValueContainer}
                        >{item.make}</Text>

                    </View>

                    <View
                        style={styles.inputContainer}>
                        <Text
                            style={styles.textTagContainer}
                        >Model :  </Text>
                        <Text
                            style={styles.textValueContainer}
                        >{item.model}</Text>

                    </View>
                    <View
                        style={styles.inputContainer}>
                        <Text
                            style={styles.textTagContainer}
                        >Availability :  </Text>
                        <Text
                            style={styles.textValueContainer}
                        >{avail}</Text>

                    </View>

                </View>
            </View>
            {this.renderButton(avail)}

        </View>;




    }

    renderPicker() {
        if (this.state.data != null) {
            return (<View>
                <Picker
                    selectedValue={this.state.type}

                    onValueChange={this.changePickerItems}>
                    <Picker.Item label="Select sort option" value="sort" />
                    <Picker.Item label="Name" value="name" />
                    <Picker.Item label="Availability" value="availability" />
                </Picker>
            </View>
            );
        }
    }


    render() {




        return (

            <View style={styles.parentContainer}>
                <Loader
                    loading={this.props.isLoading} />
                {this.renderPicker()}



                <View style={styles.mainContainer}>

                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem.bind(this)}
                        keyExtractor={(item, index) => 'key' + index}

                    />




                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({

    mainContainer: {

        flex: 1,
        backgroundColor: '#DCDCDC'

    },
    itemContainer: {
        padding: 0,
        marginTop: 7,
        marginBottom: 7,
        marginEnd: 6,
        marginStart: 6,
        backgroundColor: '#fff'

    },


    parentContainer: {
        flex: 1,


    },

    inputContainer: {
        flexDirection: 'row',


    },

    informationContainer: {
        marginStart: 10,
        flex: 1,
        flexDirection: "column",
        marginTop: 15,
        marginBottom: 15,



    },
    inputIcon: {
        width: 90,
        height: 70,
        marginTop: 15,
        marginBottom: 15,
        marginStart: 10,


    },

    textTagContainer: {
        fontSize: 14,
        color: '#333333'
    },
    textValueContainer: {
        fontSize: 14,
        color: '#5e5e5e'
    }







});

const mapStateToProps = ({ fancyCarListReducer }) => {
    const { fancyCarListResponseData, isLoading } = fancyCarListReducer;



    return {
        fancyCarListResponseData: fancyCarListResponseData,
        isLoading: isLoading,

    }
}

export default connect(mapStateToProps, { fancyCarListData, showFancyCarLoading })(FancyCarListScreen);