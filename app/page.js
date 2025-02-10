"use client"

import { useState } from "react"
import ChildrenQuestion from "./children-question"
import ChildrenInfo from "./children-info"
import ExecutorSelection from "./executor-selection"
import EstateTrusteeSelection from "./estate-trustee-selection"
import AssetDesignation from "./asset-designation"
import RemainingAssets from "./remaining-assets"
import BeneficiaryContingency from "./beneficiary-contingency"
import ChildrenSummary from "./children-summary"
import FinalSummary from "./final-summary"

const FAMILY_MEMBERS = [
  { id: 1, name: "Camila Mason", role: "Mom", image: "/placeholder.svg" },
  { id: 2, name: "Olivia Mason", role: "Sister", image: "/placeholder.svg" },
  { id: 3, name: "Tanner Mason", role: "Brother", image: "/placeholder.svg" },
  { id: 4, name: "Abby Mason", role: "Sister", image: "/placeholder.svg" },
]

export default function WillowForm() {
  const [step, setStep] = useState(1)
  const [hasChildren, setHasChildren] = useState(null)
  const [children, setChildren] = useState([])
  const [executor, setExecutor] = useState(null)
  const [estateTrustee, setEstateTrustee] = useState(null)
  const [assets, setAssets] = useState([])
  const [shares, setShares] = useState([])
  const [contingencies, setContingencies] = useState([])

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-[#2F4F4F]">WILLOW</h1>
        </header>

        <div className="max-w-2xl mx-auto">
          {step === 1 && (
            <EstateTrusteeSelection
              onSubmit={(trusteeData) => {
                setEstateTrustee(trusteeData)
                nextStep()
              }}
              onBack={prevStep}
            />
          )}

          {step === 2 && (
            <ExecutorSelection
              onSubmit={(executorData) => {
                setExecutor(executorData)
                nextStep()
              }}
              onBack={prevStep}
            />
          )}

          {step === 3 && (
            <ChildrenQuestion
              onAnswer={(has) => {
                setHasChildren(has)
                nextStep()
              }}
            />
          )}

          {step === 4 && hasChildren && (
            <ChildrenInfo
              onSubmit={(childData) => {
                setChildren([...children, childData])
                nextStep()
              }}
              onBack={prevStep}
            />
          )}

          {step === 5 && hasChildren && (
            <ChildrenSummary 
              children={children} 
              onAddMore={() => setStep(4)} 
              onContinue={nextStep} 
              onBack={prevStep} 
            />
          )}

          {step === 6 && (
            <AssetDesignation
              familyMembers={FAMILY_MEMBERS}
              onSubmit={(assetData) => {
                setAssets(assetData)
                nextStep()
              }}
              onBack={prevStep}
            />
          )}

          {step === 7 && (
            <RemainingAssets
              familyMembers={FAMILY_MEMBERS}
              onSubmit={(shareData) => {
                setShares(shareData)
                nextStep()
              }}
              onBack={prevStep}
            />
          )}

          {step === 8 && (
            <BeneficiaryContingency
              familyMembers={FAMILY_MEMBERS}
              onSubmit={(contingencyData) => {
                setContingencies(contingencyData)
                nextStep()
              }}
              onBack={prevStep}
            />
          )}

          {step === 9 && (
            <FinalSummary
              children={children}
              executor={executor}
              estateTrustee={estateTrustee}
              assets={assets}
              shares={shares}
              contingencies={contingencies}
              onBack={prevStep}
            />
          )}
        </div>
      </div>
    </div>
  )
}