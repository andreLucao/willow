"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"


export default function FinalSummary({
  children,
  executor,
  estateTrustee,
  assets,
  shares,
  contingencies,
  onBack,
}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)



  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-[#2F4F4F]">Summary</h2>
          <p className="text-gray-600">Let's Review</p>
        </div>
        <Button className="bg-[#2F4F4F] hover:bg-[#1a2f2f]" >
          
        </Button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">{error}</div>}

      <Card>
        <CardHeader>
          <CardTitle className="text-[#2F4F4F]">Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {estateTrustee && (
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600">Estate Trustee:</p>
              <p>
                {estateTrustee.firstName} {estateTrustee.lastName} ({estateTrustee.relationship})
              </p>
            </div>
          )}
          {executor && (
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600">Executor:</p>
              <p>
                {executor.firstName} {executor.lastName} ({executor.relationship})
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {children.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2F4F4F]">Children</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {children.map((child, index) => (
              <div key={index} className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-gray-600">Name:</p>
                  <p>
                    {child.firstName} {child.middleName} {child.lastName}
                  </p>

                  <p className="text-gray-600">Date of Birth:</p>
                  <p>{child.dateOfBirth}</p>

                  <p className="text-gray-600">Guardian (Primary):</p>
                  <p>
                    {child.primaryGuardian.firstName} {child.primaryGuardian.lastName} (
                    {child.primaryGuardian.relationship})
                  </p>

                  {child.secondaryGuardian && (
                    <>
                      <p className="text-gray-600">Guardian (Secondary):</p>
                      <p>
                        {child.secondaryGuardian.firstName} {child.secondaryGuardian.lastName} (
                        {child.secondaryGuardian.relationship})
                      </p>
                    </>
                  )}
                </div>
                {index < children.length - 1 && <hr className="my-4" />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {assets.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2F4F4F]">Specific Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {assets.map((asset, index) => (
              <div key={index} className="grid grid-cols-2 gap-2">
                <p className="text-gray-600">Asset:</p>
                <p>{asset.name}</p>
                <p className="text-gray-600">Recipient:</p>
                <p>{asset.recipient}</p>
                {index < assets.length - 1 && <hr className="col-span-2 my-2" />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {shares.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2F4F4F]">Remaining Asset Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {shares.map((share, index) => (
              <div key={index} className="grid grid-cols-2 gap-2">
                <p className="text-gray-600">Beneficiary:</p>
                <p>{share.name}</p>
                <p className="text-gray-600">Allocated portion:</p>
                <p>{share.percentage}%</p>
                {index < shares.length - 1 && <hr className="col-span-2 my-2" />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {contingencies.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2F4F4F]">Contingency Plans</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contingencies.map((contingency, index) => (
              <div key={index} className="grid grid-cols-2 gap-2">
                <p className="text-gray-600">Beneficiary:</p>
                <p>{contingency.beneficiary}</p>
                <p className="text-gray-600">If passes away:</p>
                <p>{contingency.option}</p>
                {index < contingencies.length - 1 && <hr className="col-span-2 my-2" />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="flex justify-start">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  )
}