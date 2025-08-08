import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Award, GraduationCap } from "lucide-react"
import Image from "next/image"

interface TeamMemberProps {
  member: {
    id: number
    name: string
    position: string
    image: string
    bio: string
    experience: string
    education: string
    linkedin: string
    email: string
  }
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
      <div className="relative">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <Button size="sm" className="bg-white text-[#1a896c] hover:bg-gray-100 px-3 py-1">
              <Mail className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-white text-[#6e161a] hover:bg-gray-100 px-3 py-1">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-[#1a896c] mb-1">{member.name}</h3>
          <p className="text-[#6e161a] font-medium mb-3">{member.position}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-[#1a896c] flex-shrink-0" />
            <span className="text-sm text-gray-700">{member.experience}</span>
          </div>
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-4 w-4 text-[#6e161a] flex-shrink-0" />
            <span className="text-sm text-gray-700">{member.education}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-[#1a896c] text-[#1a896c] hover:bg-[#1a896c] hover:text-white bg-transparent"
            >
              <Mail className="h-4 w-4 mr-1" />
              Email
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-[#6e161a] text-[#6e161a] hover:bg-[#6e161a] hover:text-white bg-transparent"
            >
              <Linkedin className="h-4 w-4 mr-1" />
              LinkedIn
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
