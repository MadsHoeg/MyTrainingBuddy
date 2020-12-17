import {createStackNavigator} from "react-navigation-stack";
import ProfileScreen from "./profileComponents/ProfileScreen";
import ProfileEdit from "./profileComponents/ProfileEdit";

/*Her har vi stack navigationen*/
const profileStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        ProfileScreen:{screen:ProfileScreen},
        ProfileEdit:{screen: ProfileEdit},
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'ProfileScreen',
        navigationOptions:{
            title:'Main'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default profileStack
