import React from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class AnimatedCloudWithRain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rainDrop1: new Animated.Value(0),
            rainDrop2: new Animated.Value(0),
            rainDrop3: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation() {
        const createRainDropAnimation = (rainDrop) => {
            return Animated.loop(
                Animated.sequence([
                    Animated.timing(rainDrop, {
                        toValue: 1,
                        duration: 1000,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                    Animated.timing(rainDrop, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true,
                    }),
                ])
            );
        };

        createRainDropAnimation(this.state.rainDrop1).start();
        createRainDropAnimation(this.state.rainDrop2).start();
        createRainDropAnimation(this.state.rainDrop3).start();
    }

    render() {
        const rainDropStyle = (rainDrop) => ({
            transform: [
                {
                    translateY: rainDrop.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 20],
                    }),
                },
            ],
            opacity: rainDrop.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
            }),
        });

        return (
            <View style={styles.container}>
                <FontAwesome name="cloud" size={64} color="gray" />
                <Animated.View style={[styles.rainDrop, rainDropStyle(this.state.rainDrop1)]} />
                <Animated.View style={[styles.rainDrop, rainDropStyle(this.state.rainDrop2)]} />
                <Animated.View style={[styles.rainDrop, rainDropStyle(this.state.rainDrop3)]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rainDrop: {
        position: 'absolute',
        width: 2,
        height: 10,
        backgroundColor: 'blue',
        top: 40,
    },
});

export default AnimatedCloudWithRain;