import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

export default function ChildrenSummary({ children, onAddMore, onContinue, onBack }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2F4F4F]">Children Under Age of 18 Info</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {children.map((child, index) => (
            <Card key={index} className="bg-[#F5F8F5]">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <p className="font-medium">
                    {child.firstName} {child.middleName} {child.lastName}
                  </p>
                  <p className="text-sm text-gray-600">DOB: {child.dateOfBirth}</p>
                  <p className="text-sm text-gray-600">
                    Primary guardian: {child.primaryGuardian.firstName} {child.primaryGuardian.lastName} (
                    {child.primaryGuardian.relationship})
                  </p>
                  {child.secondaryGuardian && (
                    <p className="text-sm text-gray-600">
                      Secondary guardian: {child.secondaryGuardian.firstName} {child.secondaryGuardian.lastName} (
                      {child.secondaryGuardian.relationship})
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          <Button onClick={onAddMore} variant="outline" className="w-full flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Add individual
          </Button>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button onClick={onContinue}>Continue</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}