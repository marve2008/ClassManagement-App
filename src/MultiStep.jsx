import React, { useState } from 'react'

const MultiStep = (steps) => {
    const [currentStep, setCurrentStep] = useState(0)

    const next = () => {
      setCurrentStep(i => {
        if(i >= steps.length -1) return i
            return i + 1
      })
    }
    const back = () => {
        setCurrentStep(i => {
            if(i <= 0) return i
                return i - 1
          })
    }
    function goTo  (index) {
        setCurrentStep(index)
    }
  return {
    currentStep,
    step: steps[currentStep],
     goTo,
     next,back, steps,
     isFirst: currentStep === 0


    
}
}

export default MultiStep