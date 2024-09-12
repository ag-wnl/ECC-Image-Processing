import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Layers, Share2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          {/* <Image className="h-6 w-6" /> */}
          <span className="sr-only">PixelPro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/playground">
            Playground
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transform Your Images with PixelPro
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Powerful image processing at your fingertips. Edit, enhance, and create stunning visuals in seconds.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-4 w-4" /> Fast Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Transform your images in seconds with our lightning-fast processing engine.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layers className="mr-2 h-4 w-4" /> Advanced Filters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Access a wide range of professional-grade filters and effects to enhance your images.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Share2 className="mr-2 h-4 w-4" /> Easy Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Share your edited images directly to social media or download in various formats.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Badge className="mb-2">Step 1</Badge>
                <h3 className="text-xl font-bold mb-2">Upload Your Image</h3>
                <p className="text-gray-500 dark:text-gray-400">Simply drag and drop or select your image file to get started.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Badge className="mb-2">Step 2</Badge>
                <h3 className="text-xl font-bold mb-2">Apply Edits</h3>
                <p className="text-gray-500 dark:text-gray-400">Use our intuitive tools to enhance, filter, or transform your image.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Badge className="mb-2">Step 3</Badge>
                <h3 className="text-xl font-bold mb-2">Download or Share</h3>
                <p className="text-gray-500 dark:text-gray-400">Save your masterpiece or share it directly to your favorite platforms.</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">"PixelPro has revolutionized my workflow. I can edit photos quickly and professionally, saving me hours of work!"</p>
                  <p className="font-semibold">- Sarah K., Photographer</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4">"The ease of use and powerful features make PixelPro my go-to for all my image editing needs. Highly recommended!"</p>
                  <p className="font-semibold">- Mark T., Graphic Designer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Images?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of satisfied users and start creating stunning visuals today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our <Link className="underline underline-offset-2" href="#">Terms & Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 PixelPro. All rights reserved. Made by Code-Quirks</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Github
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}