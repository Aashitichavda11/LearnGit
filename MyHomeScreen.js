import React, { Component } from 'react';
import { View, StyleSheet, TextInput, FlatList, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Content, Text, Icon, } from 'native-base';
import _HeaderComponent from '@component/_HeaderComponent';
import Language from '@src/config/localization';
import { connect } from 'react-redux';
import colors from '@constant/colors';
import font from '@constant/font';
import * as HomeService from "@myHome/myHome.service";
import images from '@config/images'
import _ConsertItems from '@component/_ConsertItems';
import _CommonButton from '@component/_CommonButton';
import IMAGE_URL from '../../../constant/appConstant'


const { width } = Dimensions.get("window");

class MyHomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: {},
            select: true,
            DATA: [
                {
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                    id: 1,
                    screen: 'CreateShowPlanScreen',
                    title1: 'Create',
                    title: 'Show Plan'

                },
                {
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                    id: 2,
                    screen: 'CompaireTicket',
                    title1: 'Compare',
                    title: 'Ticket Prices'

                },
                {
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                    id: 3,
                    screen: 'MyInsiderInfoScreen',
                    title1: 'Insider',
                    title: 'Venue Info'

                },
                {
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                    id: 4,
                    screen: 'SetTimesScreen',
                    title1: 'Set',
                    title: 'Times'

                },

            ],
            consertData: [
                {
                    id: 1,
                    dateTime: 'Fri, Sep 6 | 8:00 PM',
                    title: 'Rihanna concert,',
                    subtitle: 'Gold Stage NYC',
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                },
                {
                    id: 2,
                    dateTime: 'Fri, Sep 6 | 8:00 PM',
                    title: 'Rihanna concert,',
                    subtitle: 'Gold Stage NYC',
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                },
                {
                    id: 3,
                    dateTime: 'Fri, Sep 6 | 8:00 PM',
                    title: 'Rihanna concert,',
                    subtitle: 'Gold Stage NYC',
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                },
                {
                    id: 4,
                    dateTime: 'Fri, Sep 6 | 8:00 PM',
                    title: 'Rihanna concert,',
                    subtitle: 'Gold Stage NYC',
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                }
            ],
            artistNameData: [
                {
                    id: 1,
                    title: 'Rihanna concert',
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                },
                {
                    id: 2,
                    title: 'Taylor swift',
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                },
                {
                    id: 3,
                    title: 'Bruno concert',
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                },
                {
                    id: 4,
                    title: 'Rihanna concert',
                    image: 'src="http://assets.stickpng.com/images/58afdde1829958a978a4a6a6.png"',
                }
            ]
        }
    }


    /**
     * Adding listener for focus
     */
    componentDidMount() {
        let featurerequestData = {
            "lat": '40.730610',
            "long": '-73.935242',
            "state_code": 'NY',
            "type": "feature"
            //"upcoming"select === true ? 
        }
        let upcomingrequestData = {
            "lat": '40.730610',
            "long": '-73.935242',
            "state_code": 'NY',
            "type": "upcoming"
            //"upcoming"select === true ? 
        }
        console.log("featurerequestData", featurerequestData)
        this.props.featuredUpComingShows(featurerequestData);
        console.log("upcomingrequestData", upcomingrequestData)
        this.props.featuredUpComingShows(upcomingrequestData);

        //this.getShowType(this.state.indexselect)

        let requestData = {
            "page": 1,
            "pagesize": 4,
            "sortKey": "trending_rank",
            "sortBy": -1

        }
        console.log("requestData", requestData)
        this.props.myShowsAndTrendingArtists(requestData);

    }

    getShowType = (select) => {
        let requestData = {
            "lat": '40.730610',
            "long": '-73.935242',
            "state_code": 'NY',
            "type": select === true ? "feature" : "upcoming"
            //"upcoming"select === true ? 
        }
        console.log("requestData", requestData)
        this.props.featuredUpComingShows(requestData);
    }


    /**
     * unsubscribing the listener
     */
    componentWillUnmount() {

    }

    /**
     *    Show_item - render Method
     */

    Show_item = ({ item }) => {
        return (
            <View style={{ marginHorizontal: 5 }}>
                <View style={styles.showView}>
                    <TouchableOpacity style={{}}
                        onPress={() => this.props.navigation.navigate("MyHomeNavigator",
                            { screen: item.screen, })}>
                        <ImageBackground style={styles.image} source={{ uri: IMAGE_URL + item.image }} >
                            <Icon type='AntDesign' name='plus'
                                style={styles.iconimg} />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemTxtView}>
                    <Text style={styles.titletxt}>{item.title1}</Text>
                    <Text style={styles.titletxt}>{item.title} </Text>
                </View>

            </View>
        );
    };

    /**
     * concert_item - render Method
     */
    concert_item = ({ item }) => {
        return (
            <_ConsertItems item={item}
                onPress={() => this.onPress(item)}
                {...this.props} />
        )
    }


    /**
     * onPress - _ConsertItems custom component
     */

    onPress = (item) => {
        // alert('hii')
        console.log("item>>>174", item)
        this.props.navigation.navigate('MyConsertDetailScreen', { data: item })
    }


    /**
     * concertArtistName_item - Render Method Show Artist List
     */

    concertArtistName_item = ({ item }) => {
        return (
            <TouchableOpacity onPress={() =>
                this.props.navigation.navigate("MyArtistNavigator",
                    {
                        screen: 'MyArtistDetail',
                        params: {
                            data: item,
                        }
                    })
            }>
                <ImageBackground source={{ uri: IMAGE_URL + item.image }}
                    //source={images.rectangle}
                    resizeMode="cover"
                    style={styles.imgBack} >
                    <TouchableOpacity style={styles.heartTochView}>
                        <Icon type='AntDesign' name='heart'
                            style={styles.heartIcon} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.artistView}>
                    <Text numberOfLines={2} style={styles.artistText}>{item.artist_name}</Text>
                </View>
            </TouchableOpacity>
        )
    }




    render() {
        const { fetureShows } = this.props
        console.log("fetureShows", fetureShows)
        // const { featuredShows } = fetureShows
        // console.log("featuredShows", featuredShows)
        const { upcomingShows } = this.props
        console.log("upcomingShows", upcomingShows)
        const { artistList } = this.props
        console.log("artistList", artistList)
        const { user_show_plans } = artistList
        console.log("user_show_plans", user_show_plans)
        const { listing } = artistList
        console.log("listing", listing)
        const { globalSerch } = this.props
        console.log("globalSerch", globalSerch)
        return (
            <Container style={styles.container}>
                <View style={styles.textInputStyle}>
                    <Icon type='AntDesign' name='search1'
                        style={styles.icon} ></Icon>

                    <TextInput
                        onChangeText={this.searchFunction}
                        value={this.state.search}
                        underlineColorAndroid="transparent"
                        placeholder="Search for artist, venue and shows"
                        clearButtonMode='always'
                        style={styles.textinputtxt}
                        textStyle={{ color: '#000' }}
                    />
                </View>

                <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
                    <View style={{}}>
                        <FlatList
                            horizontal
                            data={this.state.DATA}
                            renderItem={this.Show_item}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={this.renderSeparator}
                            keyExtractor={(item, index) => index.toString()} />
                    </View>

                    {user_show_plans && user_show_plans.length > 0 ?
                        <View>
                            <View style={styles.headTitleTxt}>
                                <Text style={styles.titleText}>{'My Show Plans'}</Text>
                                <Icon type='AntDesign' name='right'
                                    style={styles.rightIcon} />
                            </View>
                            <FlatList
                                horizontal
                                data={this.state.consertData}
                                renderItem={this.concert_item}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={this.renderSeparator}
                                keyExtractor={(item, index) => index.toString()} />
                        </View>
                        : null}

                    {fetureShows && fetureShows.length > 0 ?
                        <View style={{}}>
                            <View style={styles.headTitleTxt}>
                                <Text style={styles.titleText}>{'Featured Shows'}</Text>
                                <Icon type='AntDesign' name='right'
                                    style={styles.rightIcon} />
                            </View>
                            <FlatList
                                horizontal
                                data={fetureShows}
                                renderItem={this.concert_item}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={this.renderSeparator}
                                keyExtractor={(item, index) => index.toString()} />
                        </View>
                        : null}


                    {upcomingShows && upcomingShows.upComingShows.length > 0 ?
                        <View style={{}}>
                            <View style={styles.headTitleTxt}>
                                <Text style={styles.titleText}>{'Upcomming Shows'}</Text>
                                <Icon type='AntDesign' name='right'
                                    style={styles.rightIcon} />
                            </View>

                            <FlatList
                                horizontal
                                data={upcomingShows.upComingShows}
                                renderItem={this.concert_item}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={this.renderSeparator}
                                keyExtractor={(item, index) => index.toString()} />
                        </View>
                        : null}

                    {listing && listing.length > 0 ?
                        <View style={{}}>
                            <View style={styles.headTitleTxt}>
                                <Text style={styles.titleText}>{'Trending Artist'}</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('MyTendingArtistScreen')}>
                                    <Icon type='AntDesign' name='right'
                                        style={styles.rightIcon} />
                                </TouchableOpacity>

                            </View>
                            <FlatList
                                horizontal
                                data={listing}
                                renderItem={this.concertArtistName_item}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={this.renderSeparator}
                                keyExtractor={(item, index) => index.toString()} />
                        </View>
                        : null}


                </Content>

                <View style={styles.tabView}>
                    <TouchableOpacity style={styles.serchToch} onPress={() => this.props.navigation.navigate("MyHomeNavigator", { screen: 'MyHomeScreen' })}>
                        <Icon type='Entypo' name='home'
                            style={styles.tabIcon} ></Icon>
                        <Text style={styles.tabTxt}>{'Home'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serchToch} onPress={() => this.props.navigation.navigate('SerchScreen')}>
                        <Icon type='AntDesign' name='search1'
                            style={styles.tabIcon} ></Icon>
                        <Text style={styles.tabTxt}>{'Search'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serchToch} onPress={() => this.props.navigation.navigate("MyProfileNavigator", { screen: 'MyProfileScreen' })}>
                        <Icon type='AntDesign' name='profile'
                            style={styles.tabIcon} ></Icon>
                        <Text style={styles.tabTxt}>{'Profile'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serchToch} onPress={() => this.props.navigation.navigate("MyProfileNavigator", { screen: 'MyPlansScreen' })}>
                        <Icon type='AntDesign' name='profile'
                            style={styles.tabIcon} ></Icon>
                        <Text style={styles.tabTxt}>{'My Plans'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serchToch} onPress={() => this.props.navigation.navigate("MyHomeNavigator", { screen: 'Animation' })}>
                        <Icon type='AntDesign' name='profile'
                            style={styles.tabIcon} ></Icon>
                        <Text style={styles.tabTxt}>{'Animation'}</Text>
                    </TouchableOpacity>

                </View>


            </Container>
        );
    }
}

/**
 * Connection with Redux
 */
const mapStateToProps = state => ({
    fetureShows: state.myHome.fetureShows,
    upcomingShows: state.myHome.upcomingShows,
    artistList: state.myHome.artistList,
    globalSerch: state.myHome.globalSerch,
});

const mapDispatchToProps = dispatch => ({
    featuredUpComingShows: (props) => dispatch(HomeService.featuredUpComingShows(props)),
    myShowsAndTrendingArtists: (props) => dispatch(HomeService.myShowsAndTrendingArtists(props)),
    globalSearch: (props) => dispatch(HomeService.globalSearch(props)),


});

export default connect(mapStateToProps, mapDispatchToProps)(MyHomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    serchToch: {
        //marginHorizontal: 2,
        paddingBottom: 25,
        marginLeft: 25,
        marginTop: 10,
        justifyContent: 'center',
        // alignSelf: 'center',
        // backgroundColor: 'red'
    },
    tabIcon: {
        marginLeft: 10,
        color: colors.white,
        fontSize: font.fontSize_16

    },
    acountTouch: {
        borderWidth: 2,
        height: 55,
        borderRadius: 30,
        marginVertical: 15,
        borderColor: colors.blueviolet,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabTxt: {
        textAlign: 'center',
        fontSize: font.fontSize_11,
        color: colors.white,
        fontWeight: 'bold'

    },
    tabView: {
        backgroundColor: 'red',
        borderRadius: 40,
        flexDirection: 'row',
    },
    itemTxtView: {
        marginLeft: 15,
    },
    heartTochView: {
        marginBottom: 80,
        alignSelf: 'flex-end',
        marginRight: 10
    },
    rightIcon: {
        fontSize: font.fontSize_15,
        color: colors.blueviolet,
        padding: 5
    },
    heartIcon: {
        color: '#b0c4de',
        fontSize: font.fontSize_12,
    },
    titleText: {
        color: colors.white,
        fontSize: font.fontSize_15,
        marginLeft: 10,
    },
    artistView: {
        marginLeft: 38, marginVertical: 5
    },
    artistText: {
        height: 20, width: width - 300,
        fontSize: font.fontSize_12,
        color: colors.white,
        fontFamily: font.fontFamily_bold
    },
    headTitleTxt: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 20,
        marginVertical: 5
    },
    iconimg: {
        fontSize: 30,
        color: colors.white,
        alignSelf: 'center',
        marginTop: 15
    },
    imgBack: {
        // marginTop: 10,
        marginLeft: 30,
        // margi: 15,
        height: 120,
        borderRadius: 20,
        width: width - 270,
        backgroundColor: '#708090',
        //flex: 1,
        justifyContent: 'center'
    },
    titletxt: {
        marginTop: 5,
        fontFamily: font.fontFamily_bold,
        fontSize: font.fontSize_11,
        color: colors.white,
        textAlign: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 70,
        margin: 13,
        left: 10,
        backgroundColor: colors.blueviolet
    },
    showView: {
        // padding: 10,
        // margin: 10,
        flexDirection: 'column',
        // justifyContent: 'space-between'
    },
    contentContainerStyle: {
        //flex: 1,
        //alignItems: 'center',
        // justifyContent: 'center',
    },
    icon: {
        color: '#696969', fontSize: font.fontSize_11,
    },

    textinputtxt: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderColor: '#333',
        backgroundColor: '#708090',
        width: '50%',
        height: 10,
        flex: 1,
        fontWeight: 'bold'
    },
    textInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 30,
        height: 40,
        borderWidth: 2,
        paddingLeft: 20,
        borderRadius: 50,
        marginTop: 80,
        borderColor: 'gray',
        backgroundColor: '#708090',
    },
})