import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ChildrenQuestion({ onAnswer }) {
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardContent className="pt-6 px-6">
        <h2 className="text-2xl font-semibold text-[#2F4F4F] mb-8 text-center">
          Do you have children under the age of 18?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={() => onAnswer(true)} className="h-12 text-lg">
            Yes
          </Button>
          <Button variant="outline" onClick={() => onAnswer(false)} className="h-12 text-lg">
            No
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}