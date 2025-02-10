import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const FAMILY_MEMBERS = [
  { id: 1, name: "Camila Mason", role: "Mom", image: "/placeholder.svg" },
  { id: 2, name: "Olivia Mason", role: "Sister", image: "/placeholder.svg" },
  { id: 3, name: "Tanner Mason", role: "Brother", image: "/placeholder.svg" },
  { id: 4, name: "Abby Mason", role: "Sister", image: "/placeholder.svg" },
  { id: 5, name: "Andrew Foster", role: "Uncle", image: "/placeholder.svg" },
  { id: 6, name: "Ben Foster", role: "Cousin", image: "/placeholder.svg" },
]

function EstateTrusteeSelection({ onSubmit, onBack }) {
  const [selectedMember, setSelectedMember] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const trustee = {
      firstName: formData.get("firstName"),
      middleName: formData.get("middleName"),
      lastName: formData.get("lastName"),
      relationship: selectedMember,
    }

    onSubmit(trustee)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2F4F4F]">Choose your executor and estate trustee?</CardTitle>
        <p className="text-gray-600 mt-2">
          Select the person or people responsible for overseeing and executing your wishes in your will, and can act on
          the behalf of your business/financial interests.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Select onValueChange={setSelectedMember}>
              <SelectTrigger>
                <SelectValue placeholder="Select family member" />
              </SelectTrigger>
              <SelectContent>
                {FAMILY_MEMBERS.map((member) => (
                  <SelectItem key={member.id} value={member.name}>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={member.image} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <span>{member.name}</span>
                      <span className="text-gray-500 text-sm">({member.role})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div>
                <Label htmlFor="middleName">Middle name</Label>
                <Input id="middleName" name="middleName" />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>
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

export default EstateTrusteeSelection