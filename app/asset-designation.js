import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function AssetDesignation({ familyMembers, onSubmit, onBack }) {
  const [assets, setAssets] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const newAssets = []
    familyMembers.forEach((member) => {
      const assetName = formData.get(`asset-${member.id}`)
      const assetDescription = formData.get(`description-${member.id}`)
      if (assetName || assetDescription) {
        newAssets.push({
          name: assetName,
          description: assetDescription,
          recipient: member.name,
        })
      }
    })

    onSubmit(newAssets)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2F4F4F]">
          Do you wish to designate any assets to a specific recipient?
        </CardTitle>
        <p className="text-gray-600 mt-2">If so, please list any asset beside the respective recipient.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {familyMembers.map((member) => (
            <div key={member.id} className="flex items-center gap-4">
              <div className="flex items-center gap-2 min-w-[200px]">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.image} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p>{member.name}</p>
                  <p className="text-sm text-gray-500">({member.role})</p>
                </div>
              </div>
              <Input name={`asset-${member.id}`} placeholder="Enter asset" className="flex-1" />
              <Input name={`description-${member.id}`} placeholder="Enter asset description" className="flex-1" />
            </div>
          ))}

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

export default AssetDesignation