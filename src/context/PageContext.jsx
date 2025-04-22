import { createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = ({ children }) => {

    const [showDemo, setShowDemo] = useState(false);

    const value = {
        showDemo,
        setShowDemo
    }

    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )

}

export default PageContextProvider;