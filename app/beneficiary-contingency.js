import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CONTINGENCY_OPTIONS = [
  "Give to each individual",
  "Go to Children",
  "Go to spouse",
  "Go to Sibling",
  "Divide amongst other beneficiaries",
]

function BeneficiaryContingency({ familyMembers, onSubmit, onBack }) {
  const [contingencies, setContingencies] = useState(
    familyMembers.map((member) => ({
      beneficiary: member.name,
      option: "Divide amongst other beneficiaries",
    }))
  )

  const handleOptionChange = (beneficiary, option) => {
    setContingencies((prev) => prev.map((cont) => 
      cont.beneficiary === beneficiary ? { ...cont, option } : cont
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(contingencies)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2F4F4F]">
          If one of your beneficiaries passes away before you, what should happen to their share?
        </CardTitle>
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
                <Select
                  value={contingencies.find((c) => c.beneficiary === member.name)?.option}
                  onValueChange={(value) => handleOptionChange(member.name, value)}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONTINGENCY_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

export default BeneficiaryContingency