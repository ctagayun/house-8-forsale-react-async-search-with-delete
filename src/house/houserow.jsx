
import currencyFormatter from "../helpers/currencyFormatter";

//Create another component that will display list of houses.
//This component called "House" encapsulates the task of displaying 
//each 'house' record
const HouseRow = ({house, onRemoveItem }) => (
    <tr>
     <td>{house.id}</td>
     <td>{house.address}</td>
     <td>{house.country}</td>
     <td>{currencyFormatter.format(house.price)}</td>
     <td>
     <span>
      <button type="button" onClick={() => onRemoveItem(house)}>
        Delete
      </button>
    </span>
     </td>
    </tr>
  
);
  
export default HouseRow;
