import React, { useRef, useState } from 'react';
import priceListData from '../../../fakeData/priceListData';
import { useTranslation } from 'react-i18next';

const PriceListArea = () => {
   const [expandedItems, setExpandedItems] = useState({}); // Track expanded state of each item
   const [searchQuery, setSearchQuery] = useState(''); // Track the search input
   const refs = useRef([]); // Store refs for dynamic height calculation
   const { t } = useTranslation();

   const handleToggle = (index) => {
      setExpandedItems(prevState => ({
         ...prevState,
         [index]: !prevState[index] // Toggle the expanded state for the specific item
      }));
   };

   // Function to handle search input change
   const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
   };

   // Filter priceListData based on search query
   const filteredData = priceListData.filter(item => {
      const searchTerm = searchQuery.toLowerCase();
      // Check if any label or child label matches the search query
      return (
         item.label.toLowerCase().includes(searchTerm) ||
         item.childs?.some(child => child.label.toLowerCase().includes(searchTerm))
      );
   });

   const cardStyles = {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
   };

   const titleStyles = {
      color: '#2c3e50',
      fontWeight: 'bold'
   };

   const contactInfoStyles = {
      fontSize: '1.1rem',
      color: 'black'
   };

   const highlightStyles = {
      color: '#3f5ece',
      fontWeight: 'bold'
   };

   return (
      <div className="container" style={{ maxWidth: '1200px' }}>
         <div className="container mt-5">
            <div style={cardStyles}>
               <h3 style={titleStyles}>1․ Հերթագրման համար զանգահարել՝</h3>
               <p style={contactInfoStyles}>
                  +374 10 48 21 61 կամ +374 10 48 21 71 <br />
                  <span style={highlightStyles}>18 տարեկանից բարձր ազգաբնակչության համար</span>
               </p>
               <p style={contactInfoStyles}>
                  +374 10 48 08 00 <br />
                  <span style={highlightStyles}>Մինչև 18 տարեկան ազգաբնակչության համար</span>
               </p>
               <p>
                  Կարող եք հերթագրվել նաև առցանց՝ <strong>ArMed հավելվածի</strong> միջոցով:
               </p>
            </div>

            {/* Step 2: Appointment Process */}
            <div style={cardStyles}>
               <h3 style={titleStyles}>2․ Նախապես ամրագրված ժամին մոտենալ</h3>
               <p>
                  Խնդրում ենք մոտենալ Ձեր նախապես ամրագրված ժամին և սպասել միջանցքում մինչ էլեկտրոնային ցուցատախտակի վրա
                  ձեր հերթագրման կտրոնի համարի հայտնվելը։
               </p>
            </div>

            {/* Step 3: Service Information */}
            <div style={cardStyles}>
               <h3 style={titleStyles}>3․ Նեղ մասնագիտական և լաբորատոր գործիքային ախտորոշիչ հետազոտություններ</h3>
               <p>
                  Նեղ մասնագիտական և լաբորատոր գործիքային ախտորոշիչ հետազոտությունները կատարվում են անվճար
                  <span style={highlightStyles}> թերապևտի կամ մանկաբույժի ուղեգրմամբ</span>:
               </p>
               <p>
                  Մնացած դեպքերում ծառայությունները վճարովի են։
               </p>
            </div>
         </div>
         {/* Search input */}
         <div className="row pt-4 pb-4">
            <div className="col-12">
               <div className="team-search mb-30">
                  <form action="#">
                     <div className="row mb-4">
                        <div className="col-12">
                           <input
                              type="text"
                              placeholder={t('Որոնում․․․')}
                              value={searchQuery}
                              onChange={handleSearchChange}
                              className="form-control"
                           />
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>

         {/* Filtered price list data */}
         {filteredData.map((item, key) => {
            const isExpanded = expandedItems[key]; // Get the expanded state for the current item
            const currentHeight = isExpanded ? (refs.current[key]?.clientHeight || "auto") : 0; // Dynamically get height or set to 0

            return (
               <div key={key} className="cardContainer">
                  <div
                     className={`list-group-item ${isExpanded ? "is-expanded" : ""}`}
                     onClick={() => handleToggle(key)} // Pass the item key to toggle
                     style={{ cursor: 'pointer' }}
                  >
                     <div className="card-title">
                        {/* Render button if label is an empty string */}
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
                        <div
                           className="card-body"
                           ref={el => refs.current[key] = el} // Store ref for each item
                           style={{ wordWrap: 'break-word' }}
                        >
                           {/* Content of the expanded section */}
                           {item.description || 'No description available'}
                        </div>
                     </div>
                  </div>

                  {/* Render children */}
                  {item.childs?.map((child, index) => {
                     const childIsExpanded = expandedItems[`${key}-${index}`]; // Check if child is expanded

                     return (
                        <div key={index} className="card">
                           <div style={{ display: 'flex', cursor: 'pointer', justifyContent: 'space-between' }} onClick={() => handleToggle(`${key}-${index}`)}>
                              <h4 className="card-title">
                                 {/* Check if child label is empty and show heading instead */}
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
                                 transition: 'height 0.3s ease-out',
                                 paddingLeft: '20px'
                              }}
                           >
                              {child.childs?.map((pChild, pKey) => (
                                 <li key={pKey} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{pChild.label}</span>
                                    <span>{pChild.value}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     );
                  })}
               </div>
            );
         })}

         {/* Display a message if no results are found */}
         {filteredData.length === 0 && (
            <p>Տվյալներ չեն հայտնաբերվել "{searchQuery}".</p>
         )}

      </div>
   );
};

export default PriceListArea;
