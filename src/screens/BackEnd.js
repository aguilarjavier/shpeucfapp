import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { FlatList, SafeAreaView } from "react-native";
import { ListItem } from "react-native-elements";
import { NavBar } from "../components/general";

const menuItems = [
	{
		title: "Election",
		icon: "check",
		screen: "ElectionBackEnd",
		privilege: "president"
	},
	{
		title: "Committees",
		icon: "assignment-ind",
		screen: "CommitteesBackEnd",
		privilege: "eboard"
	}
];

class BackEnd extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			page
		} = styles;

		return (
			<SafeAreaView style = { page }>
				<NavBar title = "Back End" back onBack = { () => Actions.pop() } />
				<FlatList
					keyExtractor = { this.keyExtractor }
					extraData = { this.state }
					data = { menuItems }
					renderItem = { this.renderItem }
				/>
			</SafeAreaView>
		);
	}

	keyExtractor = (item, index) => index

	renderItem = ({ item }) => {
		const {
			privilege
		} = this.props;

		if (privilege && item && privilege[item.privilege] && (!("privilege" in item) || privilege[item.privilege]))
			return (
				<ListItem
					containerStyle = {{ backgroundColor: "black", borderBottomColor: "white" }}
					removeClippedSubviews = { false }
					title = { item.title }
					chevron
					titleStyle = {{ color: "white" }}
					leftIcon = {{ name: item.icon, color: "white" }}
					onPress = { () => Actions[item.screen]() }
				/>
			);
	}
}

const styles = {
	page: {
		flex: 1,
		backgroundColor: "#0c0b0b"
	}
};

const mapStateToProps = ({ user }) => {
	const {
		privilege
	} = user;

	return { privilege };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BackEnd);