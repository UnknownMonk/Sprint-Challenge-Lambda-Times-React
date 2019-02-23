import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = ({ selectTabHandler, tabs, selectedTab }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
        tabs.map((tab, index) => (
          <Tab
            selectTabHandler={selectTabHandler}
            selectedTab={selectedTab}
            key={index}
            tab={tab}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propType = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.array
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
