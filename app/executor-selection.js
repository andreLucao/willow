"use client"
import { useState } from 'react'

// Constants
const FAMILY_MEMBERS = [
  { id: 1, name: "Camila Mason", role: "Mom", image: "/placeholder.svg" },
  { id: 2, name: "Olivia Mason", role: "Sister", image: "/placeholder.svg" },
  { id: 3, name: "Tanner Mason", role: "Brother", image: "/placeholder.svg" },
  { id: 4, name: "Abby Mason", role: "Sister", image: "/placeholder.svg" },
  { id: 5, name: "Andrew Foster", role: "Uncle", image: "/placeholder.svg" },
  { id: 6, name: "Ben Foster", role: "Cousin", image: "/placeholder.svg" },
];

export default function ExecutorSelection({ onSubmit, onBack }) {
  const [selectedMember, setSelectedMember] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const executor = {
      firstName: formData.get('firstName'),
      middleName: formData.get('middleName'),
      lastName: formData.get('lastName'),
      relationship: selectedMember
    }

    onSubmit(executor)
  }

  return (
    <div className="card w-full">
      <div className="card-header">
        <h2 className="text-2xl text-[#2F4F4F]">Choose your executor?</h2>
        <p className="text-gray-600 mt-2">
          Select the person or people responsible for overseeing and executing your wishes in your will, and can act on
          the behalf of your business/financial interests.
        </p>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="select-wrapper">
              <select 
                value={selectedMember}
                onChange={(e) => setSelectedMember(e.target.value)}
                className="select-input" 
                required
              >
                <option value="">Select family member</option>
                {FAMILY_MEMBERS.map(member => (
                  <option key={member.id} value={member.name}>
                    {member.name} ({member.role})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="firstName">First name</label>
                <input id="firstName" name="firstName" required className="input-field" />
              </div>
              <div>
                <label htmlFor="middleName">Middle name</label>
                <input id="middleName" name="middleName" className="input-field" />
              </div>
              <div>
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" name="lastName" required className="input-field" />
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button type="button" className="btn btn-outline" onClick={onBack}>Back</button>
            <button type="submit" className="btn btn-primary">Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Usage example:
// const executorSelection = new ExecutorSelection('#container', {
//   onSubmit: (executor) => console.log('Executor selected:', executor),
//   onBack: () => console.log('Going back')
// });