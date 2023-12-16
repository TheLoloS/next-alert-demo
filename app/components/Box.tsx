"use client";
import React from 'react'
import { useAlert,  } from './useAlert'
import { AnimatePresence } from 'framer-motion';

const Box = () => {
    const { showAlert, AlertWrapper } = useAlert()
  return (
    <div>
        <button onClick={() => showAlert('Hello', "success")}>Show Alert</button>
            
        <AnimatePresence>

        <AlertWrapper />
        </AnimatePresence>
    </div>
  )
}
 
export default Box