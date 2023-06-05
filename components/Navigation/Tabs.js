import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Tabs.module.css";

import { slugify } from "../../utils/slugify";
import propTypes from "prop-types";

const TabContent = React.memo(({ children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
});

TabContent.displayName = 'TabContent';


const Tabs = ({ children, initialTab = 'Start' }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(slugify(newActiveTab));

  };

  useEffect(() => {
    const tabFromUrl = router.query.tab;
    if (tabFromUrl && children.some(child => slugify(child.props.label) === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [router.query.tab, children]);

  useEffect(() => {
    router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {
      shallow: true,
    });
  }, [activeTab, router]);

  return (
    <>
      <nav className="flex justify-between py-10 mb12 sm:flex-auto">
        <h1 className="text-3xl text-amber-50 font-Slovic_H ">develeopedbybyron<em className="animate-pulse">_</em></h1>
        <ul className={styles.tabs}>
          {children.map((tab) => {
            const label = tab.props.label;
            return (
              <li
                className={slugify(label) == activeTab ? styles.current : "hover:opacity-80"}
                key={label}
              >
                <a href="#" onClick={(e) => handleClick(e, label)} className="text-amber-50">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {children.map((one) => {
        if (slugify(one.props.label) === activeTab) {
          return (
            <TabContent key={one.props.label}>
              {one.props.children}
            </TabContent>
          );
        }
      })}
    </>
  );
};
Tabs.propTypes = {
  children: propTypes.node.isRequired,
  initialTab: propTypes.any,
};

export { Tabs };