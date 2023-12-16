"use client"; 
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

export type MessageType = 'success' | 'error' | 'info';

export interface AlertMessage {
  message: string;
  type: MessageType;
}

export const useAlert = () => {
const [alertMessage, setAlertMessage] = useState<AlertMessage | null>(null);

const showAlert = (message: string, type: MessageType, time: number = 3000) => {
    setAlertMessage({ message, type });
    setTimeout(() => {
        hideAlert();
    }, time);
};

const hideAlert = () => {
    setAlertMessage(null);
};


const AlertWrapper: React.FC = () => {
    return (
        <AnimatePresence>
            {alertMessage && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className={`alert ${alertMessage.type}`}
                    onClick={hideAlert}
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        width: '15rem',
                        textAlign: 'center',
                        borderRadius: '1rem',
                        padding: '1rem',
                    }}
                >
                    {alertMessage.message}
                </motion.div>
            )}
        </AnimatePresence>
    );
}; 
  return { showAlert, AlertWrapper };
};

