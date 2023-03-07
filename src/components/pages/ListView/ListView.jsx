import "./ListView.css";
import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) =>( {
   items : state.items || [],
   name : state.name || ' '
})
function ListView(props) {

const listItems = props.items ||   []
const listItemJSX  = listItems.map((item,i)=>
<li key={i}>{item}</li>  
)
  return (
    <>
       <ul>
        {listItemJSX}
       </ul>
       <h1>{props.name}</h1>
       </>
  );
};
export default connect(mapStateToProps, null )(ListView);
