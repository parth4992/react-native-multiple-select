import React from 'react';
import { View, TextInput, TouchableOpacity, Platform, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { SearchIcon } from '../search-icon';
import { ColorsPack } from '../../styles/colors.enum';
import styles from './styles';

interface Props {
    searchTerm: string;
    hideSubmitButton: boolean;
    singleSelection: boolean;
    onChangeSearchTerm: (searchTerm: string) => void;
    onSubmitEditing: () => void;
    onSubmitButtonPress: () => void;
    children: React.ReactElement;
}

export class ExpandedMultiSelectView extends React.Component<Props> {
    render() {
        const {
            searchTerm,
            hideSubmitButton,
            singleSelection,
            onChangeSearchTerm,
            onSubmitEditing,
            onSubmitButtonPress,
            children
        } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.inputGroup}>
                    <SearchIcon />
                    <TextInput
                        autoFocus
                        onChangeText={(searchTerm: string) => onChangeSearchTerm(searchTerm)}
                        onSubmitEditing={() => onSubmitEditing()}
                        placeholder="Search"
                        placeholderTextColor={ColorsPack.placeholderTextColor}
                        underlineColorAndroid="transparent"
                        style={styles.searchInput}
                        value={searchTerm}
                    />
                    {hideSubmitButton && (
                        <TouchableOpacity onPress={onSubmitButtonPress}>
                            <Ionicons
                                name={Platform.OS === 'ios' ? 'ios-caret-down-outline' : 'md-caret-down-outline'}
                                style={styles.indicator}
                            />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.expandedItemsContainer}>
                    {children}
                    {!singleSelection && !hideSubmitButton && (
                        <TouchableOpacity onPress={onSubmitButtonPress} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    }
}
