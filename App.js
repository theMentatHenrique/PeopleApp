import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import PeopleDetailPage from "./src/Pages/PeopleDetailPage";
import PeoplePage from "./src/Pages/PeoplePage.1";
import { captalizeFirstLetter } from "./src/Util";

const AppNavigator=createStackNavigator({

'Main':{
    screen:PeoplePage,
    headerTitleStyleMain:{
        color:'#ffffff',
        fontSize:30,
        flexGrow:1,
    }
},

'PeopleDetail':{

    screen:PeopleDetailPage,
    navigationOptions:({navigation})=>{
      const peopleName=  captalizeFirstLetter(navigation.state.params.people.name.first);
        return({
            title:peopleName,
            headerTitleStyle:{
                color:'#ffffff',
                fontSize:30,
                flexGrow:1,  
            }

        }) ;
        
    }
}

},{
    defaultNavigationOptions:{
        title:'People',
        headerTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#8a2be2',
            borderBottomWidth:1,
            borderBottomColor:'#ffffff'
        },    
    }
});

const Appcontainer=createAppContainer(AppNavigator);

export default Appcontainer;