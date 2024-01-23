'use client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from './ui/input'
import { Star } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { useState } from 'react'
import { Button } from './ui/button'

const CreateNotes = () => {
  const [favorite, setFavorite] = useState(false)

  const changeFavorite = () => {
    setFavorite((prev) => !prev)
  }

  return (
    <Card className="rounded-3xl shadow-md">
      <CardHeader className="px-0 py-2">
        <CardTitle className="border-b-2">
          <div className="flex w-full justify-between px-2">
            <Input
              placeholder="Título"
              className="border-none text-base placeholder:text-black"
            />
            <button onClick={changeFavorite}>
              {favorite ? (
                <Star className="text-yellow-500" />
              ) : (
                <Star className="text-gray-500" />
              )}
            </button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <Textarea
          placeholder="Criar nota..."
          className="resize-none border-none text-xs"
        />
      </CardContent>
      <CardFooter className="relative">
        <Button size={'sm'} className="absolute bottom-2 right-2 text-xs">
          Criar nota
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CreateNotes
