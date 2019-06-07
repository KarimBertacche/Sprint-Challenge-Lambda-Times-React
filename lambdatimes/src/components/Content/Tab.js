import React from 'react';
import pt from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const chooseClassName = () => {
    return props.selectedTab === props.tab ? 'tab active-tab' : 'tab';
  } 

  return (
    <div
      className={chooseClassName()}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabData: pt.arrayOf(pt.string.required)}


export default Tab;
