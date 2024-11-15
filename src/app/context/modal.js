'use client'
import { createContext, useContext, useState } from 'react';

// Create the ModalContext
const ModalContext = createContext();

// ModalProvider component to manage modal state
export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => { console.log(isOpen); return setIsOpen(true) };
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// Custom hook to access modal context
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
