import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export default function ChildrenInfo({ onSubmit, onBack }) {
  const [showSecondaryGuardian, setShowSecondaryGuardian] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const child = {
      firstName: formData.get("childFirstName"),
      middleName: formData.get("childMiddleName"),
      lastName: formData.get("childLastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      primaryGuardian: {
        firstName: formData.get("guardianFirstName"),
        middleName: formData.get("guardianMiddleName"),
        lastName: formData.get("guardianLastName"),
        relationship: formData.get("guardianRelationship"),
      },
    }

    if (showSecondaryGuardian) {
      child.secondaryGuardian = {
        firstName: formData.get("secondaryGuardianFirstName"),
        middleName: formData.get("secondaryGuardianMiddleName"),
        lastName: formData.get("secondaryGuardianLastName"),
        relationship: formData.get("secondaryGuardianRelationship"),
      }
    }

    onSubmit(child)
  }

  return (
    <Card className="w-full">
      <CardHeader className="bg-[#F5F8F5]">
        <CardTitle className="text-[#2F4F4F]">Children Info (under the age of 18)</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="childFirstName">First name</Label>
                <Input id="childFirstName" name="childFirstName" required />
              </div>
              <div>
                <Label htmlFor="childMiddleName">Middle name</Label>
                <Input id="childMiddleName" name="childMiddleName" />
              </div>
              <div>
                <Label htmlFor="childLastName">Last name</Label>
                <Input id="childLastName" name="childLastName" required />
              </div>
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input id="dateOfBirth" name="dateOfBirth" type="date" required />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2F4F4F]">Guardianship Preferences</h3>
            <div className="space-y-4">
              <h4 className="font-medium">Primary Guardian</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="guardianFirstName">First name</Label>
                  <Input id="guardianFirstName" name="guardianFirstName" required />
                </div>
                <div>
                  <Label htmlFor="guardianMiddleName">Middle name</Label>
                  <Input id="guardianMiddleName" name="guardianMiddleName" />
                </div>
                <div>
                  <Label htmlFor="guardianLastName">Last name</Label>
                  <Input id="guardianLastName" name="guardianLastName" required />
                </div>
              </div>
              <div>
                <Label htmlFor="guardianRelationship">Relationship</Label>
                <Input id="guardianRelationship" name="guardianRelationship" required />
              </div>
            </div>

            {!showSecondaryGuardian ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowSecondaryGuardian(true)}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Secondary Guardian
              </Button>
            ) : (
              <div className="space-y-4">
                <h4 className="font-medium">Secondary Guardian</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="secondaryGuardianFirstName">First name</Label>
                    <Input id="secondaryGuardianFirstName" name="secondaryGuardianFirstName" required />
                  </div>
                  <div>
                    <Label htmlFor="secondaryGuardianMiddleName">Middle name</Label>
                    <Input id="secondaryGuardianMiddleName" name="secondaryGuardianMiddleName" />
                  </div>
                  <div>
                    <Label htmlFor="secondaryGuardianLastName">Last name</Label>
                    <Input id="secondaryGuardianLastName" name="secondaryGuardianLastName" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="secondaryGuardianRelationship">Relationship</Label>
                  <Input id="secondaryGuardianRelationship" name="secondaryGuardianRelationship" required />
                </div>
              </div>
            )}
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