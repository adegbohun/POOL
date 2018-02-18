import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
}                           from 'react-native';
import React                from 'react';
import Swiper               from 'react-native-swiper';


export default class HomeScreen extends React.Component {

    render(){
        
        return (
            <ScrollView contentContainerStyle={{
                alignItems: 'center',
            }} style={styles.container}>
                <View
                    style={styles.headContainer}
                >
                    <TextInput
                        placeholder={'Quick search'}
                        style={styles.searchInput}
                    />
                    <Text
                        style={[styles.text, {paddingBottom: 3}]}
                    >
                        Popular Destinations
                    </Text>
                </View>
                <View
                    style={styles.destinationsContainer}
                >
                    <Swiper
                        height={680}

                    >
                        <View
                            style={styles.destinationsContainer}
                        >
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={styles.destinationsContainer}
                        >
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={styles.destinationsContainer}
                        >
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={styles.destinationsContainer}
                        >
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.destination}
                            >
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        style={styles.destinationImage}
                                        source={{uri: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200'}}
                                    />
                                    <View
                                        style={styles.destinationTopRow}
                                    >
                                        <View
                                            style={styles.destinationLocationView}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    height: 12
                                                }}
                                            >
                                                BALTIMORE
                                            </Text>
                                        </View>
                                        <Text
                                            style={[styles.text, {fontSize: 12, fontWeight: 'bold'}]}
                                        >
                                            From $20
                                        </Text>
                                    </View>
                                    <View
                                        style={styles.destinationBottomRow}
                                    >
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                        <Image
                                            resizeMode={'cover'}
                                            style={styles.driverImage}
                                            source={{uri: 'https://img.huffingtonpost.com/asset/58d95d702c00002100ff0b1c.jpeg?ops=scalefit_970_noupscale'}}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.promoButton}
                                >
                                    <Text
                                        style={styles.text}
                                    >
                                        View promo
                                    </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </Swiper>
                </View>
            </ScrollView>
        );
    }

    
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    text: {
        color: '#fff',
    },
    headContainer: {
        marginTop: 30,
        width: '95%',
        backgroundColor: 'transparent'
    },
    searchInput: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 15
    },
    destinationsContainer: {
        backgroundColor: '#ffffff',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 0
    },
    destination: {
        marginTop: 10,
        borderRadius: 5,
        height: 200,
        width: '95%',
        backgroundColor: 'transparent'
    },
    destinationImage: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    },
    destinationTopRow: {
        position: 'absolute',
        top: 0,
        right: 0,
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    destinationBottomRow: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        marginBottom: 10,
        marginRight: 10,
    },
    destinationLocationView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: 5,
        paddingTop: 3,
        maxWidth: 125,
        paddingBottom: 3
    },
    promoButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        marginLeft: 15,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        paddingTop: 3,
        paddingBottom: 3
    },
    driverImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: 10
    }
});