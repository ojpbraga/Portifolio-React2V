import  { createContext, useState } from"react";

export const AppsContext = createContext();

export const AppsStorange = ({children}) => {

    const [data, setData] = useState([

        {'id':'safari', 'close':true, 'maximize':true},

        {'id':'finder', },

    ]);
    return (
        <AppsContext.Provider value={{data, setData}}>
            {children}
        </AppsContext.Provider>
    )
}