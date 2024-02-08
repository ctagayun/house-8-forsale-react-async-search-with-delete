import * as React from 'react';
import HouseRow from './houserow';
  /*
     This component will use the stateful searchStateFulVar from the 
   search component to filter the houseArray by their "country"
   property in the App component before they are passed as 
   props to the HouseList component

     This component will store the value of "search text box"
   in a local storage by using side effect.
    
     We'll use React's useEffect Hook to trigger the desired 
   side-effect each time the searchTerm changes

  */

  //There is a callback function in the App component called "searchHandler". 
  //This handler is passed as prop to SearchComponent when it is instantiated
  //in App component. The useState for this component is defined in App as well.
  //It looks like this:
  // const [searchTerm, setSearchTerm] = React.useState('');
  const Search = (props) => {
      //id="search"
      //label="Search:"
      //value={searchTerm} //assign name of stateful value created by call to useState() hook
      //isFocused //pass imperatively a dedicated  prop. isFocused as an attribute is equivalent to isFocused={true}
      //onInputChange={handleSearch} //assign name of callback handler
     
    return (
      <InputWithLabel
        id="search"
        //label="Search:"
        value={props.searchTerm} //assign name of stateful value created by call to useState() hook
        isFocused //pass imperatively a dedicated  prop. isFocused as an attribute is equivalent to isFocused={true}
        onInputChange={props.handleSearch} //assign name of callback handler
       >
     <strong>Search with 2 sec delay:</strong> 
     
    </InputWithLabel>
    );
      
 };


export default InputWithLabel;