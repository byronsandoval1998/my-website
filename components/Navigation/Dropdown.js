import { useState } from "react";
import propTypes from "prop-types";

function MobileMenu({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (label) => {
    setActiveTab(label);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="relative top-0 left-0 right-0 z-40 px-4 py-10 flex justify-between items-center">
      <h1 className="text-xl text-amber-50 font-Slovic_H items-center">develeopedbybyron<em className="animate-pulse">_</em></h1>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-0 right-4 z-50 py-10 text-white"
      >
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.354 4.354a.5.5 0 1 1 .708-.708L8 7.293l2.938-2.939a.5.5 0 1 1 .708.708L8.707 8l2.939 2.938a.5.5 0 0 1-.708.708L8 8.707l-2.938 2.939a.5.5 0 0 1-.708-.708L7.293 8 4.354 5.062a.5.5 0 0 1 0-.708z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        )}
      </button>
      </header>
      {menuOpen && (
        <div className="fixed top-24 left-0 right-0 z-40 px-4 py-4 pb-96 bg-stone-900 rounded-lg text-amber-50">
          <ul className="flex flex-col last:pb-96 place-items-center">
            {children.map((tab) => {
              const label = tab.props.label;
              return (
                <li
                  className={label === activeTab ? "font-bold" : "hover:opacity-80"}
                  key={label}
                >
                  <button
                    onClick={() => handleClick(label)}
                    className="py-2"
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {children.map((one) => {
        if (one.props.label === activeTab)
          return (
            <div key={one.props.label} className="mt-20">
              {one.props.children}
            </div>
          );
      })}
    </>
  );
}
MobileMenu.propTypes = {
  children: propTypes.node.isRequired,
};

export default MobileMenu;
