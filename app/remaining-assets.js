import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function RemainingAssets({ familyMembers, onSubmit, onBack }) {
  const [shares, setShares] = useState(
    familyMembers.map((member) => ({ name: member.name, percentage: 25 }))
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(shares)
  }

  const handlePercentageChange = (name, value) => {
    const percentage = Number.parseInt(value) || 0
    setShares((prev) => prev.map((share) => 
      share.name === name ? { ...share, percentage } : share
    ))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2F4F4F]">How do you wish your remaining assets to be devided?</CardTitle>
        <p className="text-gray-600 mt-2">Enter the portion of remaining assets you wish each individual to receive.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {familyMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-4">
                <div className="flex items-center gap-2 flex-1">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p>{member.name}</p>
                    <p className="text-sm text-gray-500">({member.role})</p>
                  </div>
                </div>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={shares.find((s) => s.name === member.name)?.percentage || 0}
                  onChange={(e) => handlePercentageChange(member.name, e.target.value)}
                  className="w-24"
                />
                <span className="text-gray-500">%</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default RemainingAssets