import {createStackNavigator} from "react-navigation-stack";
import ChatMessage from "./chatComponents/ChatMessage";
import ChatOverview from "./chatComponents/ChatOverview";

/*Her har vi stack navigationen*/
const chatStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        ChatOverview: {screen:ChatOverview},
        ChatMessage:{screen:ChatMessage}
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'ChatOverview',
        navigationOptions:{
            title:'ChatOverview'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default chatStack
