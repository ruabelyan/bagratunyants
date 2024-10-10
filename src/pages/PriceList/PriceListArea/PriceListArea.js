import React, { useRef, useState } from 'react';
import priceListData from '../../../fakeData/priceListData';

const PriceListArea = () => {
   const [expandedItems, setExpandedItems] = useState({}); // Track expanded state of each item
   const refs = useRef([]);

   const handleToggle = (index) => {
      setExpandedItems(prevState => ({
         ...prevState,
         [index]: !prevState[index] // Toggle the expanded state for the specific item
      }));
   };

   return (
      <div className="container" style={{ maxWidth: '1200px' }}>
         {priceListData.map((item, key) => {
            const isExpanded = expandedItems[key]; // Get the expanded state for the current item
            const currentHeight = isExpanded ? (refs.current[key]?.clientHeight || "auto") : 0; // Get the height dynamically or set to 0

            return (
               <div key={key} className='cardContainer'>
                  <div
                     className={`list-group-item ${isExpanded ? "is-expanded" : ""}`}
                     onClick={() => handleToggle(key)} // Pass the item key to toggle
                     style={{ cursor: 'pointer' }}
                  >
                     <div className="card-title">
                        {/* Check if label is an empty string, render button if true */}
                        {item.label ? (
                           <h2>{item.label}</h2>
                        ) : (
                           <button onClick={() => alert('Button clicked!')}>Click Me</button>
                        )}
                     </div>
                     <div
                        className="card-collapse"
                        style={{
                           height: currentHeight + "px",
                           overflow: 'hidden',
                           transition: 'height 0.3s ease-out'
                        }}
                     >
                        {/* <div
                           className="card-body"
                           ref={el => refs.current[key] = el} // Store ref for each item
                           style={{ wordWrap: 'break-word' }}
                        >
                           qqloremloremloremloremloremloremloremloremloremloremloremloremloremlorem666
                        </div> */}
                     </div>
                  </div>

                  {item.childs?.map((child, index) => {
                     const childIsExpanded = expandedItems[`${key}-${index}`]; // Check if child is expanded

                     return (
                        <div key={index} className="card">
                           <div style={{ display: 'flex', cursor: 'pointer', justifyContent: 'space-between' }} onClick={() => handleToggle(`${key}-${index}`)}>
                              <h4 className="card-title" >
                                 {/* Check if child label is empty and show button instead */}
                                 {child.label ? child.label : (
                                    <h3>Ենթավերնագիր</h3>
                                 )}
                              </h4>
                              <svg style={{ transform: childIsExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-out' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                 <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                              </svg>
                           </div>
                           <ul
                              style={{
                                 height: childIsExpanded ? 'auto' : 0,
                                 overflow: 'hidden',
                                 transition: 'height 0.3s ease-out'
                              }}
                           >
                              {child.childs?.map((pChild, pKey) => (
                                 <li key={pKey}>
                                    {pChild.label} <span>{pChild.value}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     );
                  })}
               </div>
            );
         })}
      </div>
   );
};

export default PriceListArea;
