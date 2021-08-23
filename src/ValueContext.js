import React from 'react';

const ValueContext = React.createContext(45, ()=>{}); // 45 is default value of CONTEXT if ''provider' is missing 
                                               // then 45 will be used. And '()=>{}' is function to update value

export default ValueContext;