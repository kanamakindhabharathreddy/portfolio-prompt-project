
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

// This is a placeholder resume component - you should replace the content with your actual resume details
const Resume = () => {
  const handleDownload = () => {
    // This is a placeholder - you'll need to replace this with your actual resume file
    // For now, we'll just show a toast notification
    toast("Resume download started!", {
      description: "Your resume will download shortly...",
      icon: "📄",
    });
    
    // In a real implementation, you would link to an actual PDF file:
    // window.open('/your-resume.pdf', '_blank');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <FileText className="text-primary" />
          My Resume
        </h2>
        <Button onClick={handleDownload} className="flex items-center gap-2 hover:scale-105 transition-all duration-200">
          <Download size={18} />
          Download PDF
        </Button>
      </div>

      <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Python enthusiast with a passion for programming and technology. Eager to expand my skills
            in web development and explore new technologies.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Technical Skills</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Python Programming</li>
                <li>Web Development (Learning)</li>
                <li>Data Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Soft Skills</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Problem Solving</li>
                <li>Quick Learner</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Replace with your actual education details */}
          <div>
            <h3 className="font-semibold">Computer Science Degree</h3>
            <p className="text-muted-foreground">University Name, Year</p>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Replace with your actual project details */}
          <div>
            <h3 className="font-semibold">Python Data Analysis Tool</h3>
            <p className="text-muted-foreground">
              Developed a tool for analyzing large datasets using Python libraries.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Personal Portfolio Website</h3>
            <p className="text-muted-foreground">
              Created a responsive portfolio website using React and Tailwind CSS.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-8">
        <Button onClick={handleDownload} size="lg" className="animate-pulse hover:animate-none hover:scale-105 transition-all duration-200">
          <Download className="mr-2" />
          Download Full Resume
        </Button>
      </div>
    </div>
  );
};

export default Resume;
