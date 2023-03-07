import { useState } from "react";
import { connect } from "react-redux";
import { addItem  ,deleteItem } from "../../../redux/action";
import "./ListInput.css";


const mapDispatchToProps= (dispatch , ownProps)=>(
  {
  addToList : (item) => dispatch(addItem(item))
,
deleteItem : (item) => dispatch(deleteItem(item))
})

const ListInput = (props) => {
  const [item,setItem] = useState('')

  function changeHandler (e){

    setItem(e.target.value)

  }
function clickHandler (e){

props.addToList(item)
}

function deleteHandler (e){
props.deleteItem(item)
}
  return (
    <div className="list-input">
      <input type="text" onChange={changeHandler} placeholder="enter product name " />
      <button onClick={clickHandler}>click</button>
      <button onClick={deleteHandler}>DELETE</button>
    </div>
  );
};
export default connect(null, mapDispatchToProps)(ListInput);

