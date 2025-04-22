import { createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = ({ children }) => {

    const [showDemo, setShowDemo] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(true); // State to track video loading


    const value = {
        showDemo,
        setShowDemo,

        isVideoLoading,
        setIsVideoLoading,

    }

    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )

}

export default PageContextProvider;