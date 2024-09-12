'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Image as ImageIcon, Wand2 } from 'lucide-react'

const effects = [
  { id: 'grayscale', label: 'Grayscale' },
  { id: 'sepia', label: 'Sepia' },
  { id: 'blur', label: 'Blur' },
  { id: 'brightness', label: 'Brightness' },
  { id: 'contrast', label: 'Contrast' },
  { id: 'hue-rotate', label: 'Hue Rotate' },
  { id: 'invert', label: 'Invert' },
  { id: 'saturate', label: 'Saturate' },
]

export default function Playground() {
  const [image, setImage] = useState<string | null>(null)
  const [selectedEffects, setSelectedEffects] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.onload = (event) => {
      setImage(event.target?.result as string)
    }
    reader.readAsDataURL(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {'image/*': []} })

  const toggleEffect = (effectId: string) => {
    setSelectedEffects(prev =>
      prev.includes(effectId)
        ? prev.filter(id => id !== effectId)
        : [...prev, effectId]
    )
  }

  const getImageStyle = () => {
    return selectedEffects.reduce((style, effect) => {
      switch (effect) {
        case 'grayscale':
          return { ...style, filter: `${style.filter} grayscale(100%)` }
        case 'sepia':
          return { ...style, filter: `${style.filter} sepia(100%)` }
        case 'blur':
          return { ...style, filter: `${style.filter} blur(5px)` }
        case 'brightness':
          return { ...style, filter: `${style.filter} brightness(150%)` }
        case 'contrast':
          return { ...style, filter: `${style.filter} contrast(200%)` }
        case 'hue-rotate':
          return { ...style, filter: `${style.filter} hue-rotate(90deg)` }
        case 'invert':
          return { ...style, filter: `${style.filter} invert(100%)` }
        case 'saturate':
          return { ...style, filter: `${style.filter} saturate(200%)` }
        default:
          return style
      }
    }, { filter: '' })
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Image Processing Playground</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="mr-2" />
            Upload Image
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
              isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary hover:bg-primary/5'
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-lg">Drop the image here ...</p>
            ) : (
              <div>
                <p className="text-lg mb-2">Drag 'n' drop an image here, or click to select one</p>
                <p className="text-sm text-gray-500">Supported formats: JPG, PNG, GIF</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {image && (
        <Tabs defaultValue="original" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="original" className="flex items-center">
              <ImageIcon className="mr-2 h-4 w-4" />
              Original
            </TabsTrigger>
            <TabsTrigger value="processed" className="flex items-center">
              <Wand2 className="mr-2 h-4 w-4" />
              Processed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="original">
            <Card>
              <CardHeader>
                <CardTitle>Original Image</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={image} alt="Original" width={800} height={600} className="w-full h-auto rounded-lg shadow-lg" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="processed">
            <Card>
              <CardHeader>
                <CardTitle>Processed Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={getImageStyle()}>
                  <Image src={image} alt="Processed" width={800} height={600} className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wand2 className="mr-2" />
            Select Effects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {effects.map((effect) => (
                <div key={effect.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={effect.id}
                    checked={selectedEffects.includes(effect.id)}
                    onCheckedChange={() => toggleEffect(effect.id)}
                  />
                  <label
                    htmlFor={effect.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {effect.label}
                  </label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}