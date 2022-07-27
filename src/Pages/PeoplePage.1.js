import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import PeopleList from '../components/PeopleList';
import axios from 'axios';
import ModalError from '../components/ModalError';

export default class PeoplePage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            peoples: [],
            loading: false,
            error: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true, });
        setTimeout(() => {
            axios.get('https://randomuser.me/api/?nat=br&results=15').then(response => {
                const { results } = response.data;

                this.setState({
                    peoples: results,
                    loading: false,
                });

            }).catch(error => {
                this.setState({
                    error: true,
                    loading: false,
                })
            })
        })
    }

    render() {
        return (
            <View style={Styles.container}>
                <View >
                    {
                        this.state.loading ? <ActivityIndicator size="large" color="#8a2be2" />
                            : this.state.error ? <ModalError />
                                : <PeopleList
                                    peoples={this.state.peoples}
                                    onPressItem={pageParams => {
                                        this.props.navigation.navigate('PeopleDetail', pageParams);
                                    }} />
                    }
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
});
