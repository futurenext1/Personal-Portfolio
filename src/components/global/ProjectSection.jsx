import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Check out some of my development Projects
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-8">
          <ProjectCard
            imageUrl="https://codewithcurious.com/wp-content/uploads/2024/07/thumbnail-1-1024x574.png.webp"
            title="Project-1"
            description="A Modern web application based on react"
          />
          <ProjectCard
            imageUrl="https://codewithcurious.com/wp-content/uploads/2024/07/thumbnail-1-1024x574.png.webp"
            title="Project-2"
            description="A Modern web application based on react"
          />
          <ProjectCard
            imageUrl="https://codewithcurious.com/wp-content/uploads/2024/07/thumbnail-1-1024x574.png.webp"
            title="Project-3"
            description="A Modern web application based on react"
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
