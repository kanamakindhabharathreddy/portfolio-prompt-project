
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Upload } from 'lucide-react';
import { toast } from "@/components/ui/sonner";

const Resume = () => {
  const [resumePdf, setResumePdf] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        toast("Invalid file type", {
          description: "Please upload a PDF file",
          icon: "❌",
        });
        return;
      }

      setResumePdf(file);
      const objectUrl = URL.createObjectURL(file);
      setResumeUrl(objectUrl);
      
      toast("Resume uploaded successfully!", {
        description: "Your resume has been uploaded and is ready to download",
        icon: "✅",
      });
    }
  };

  const handleDownload = () => {
    if (resumeUrl) {
      // Create a temporary anchor to download the file
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = resumePdf?.name || 'my-resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      toast("Resume download started!", {
        description: "Your resume is downloading...",
        icon: "📄",
      });
    } else {
      toast("No resume to download", {
        description: "Please upload a resume first",
        icon: "❓",
      });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <FileText className="text-primary" />
          My Resume
        </h2>
        <div className="flex gap-2">
          <label htmlFor="resume-upload" className="cursor-pointer">
            <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:scale-105 transition-all duration-200">
              <Upload size={18} />
              Upload PDF
            </div>
            <input 
              type="file" 
              id="resume-upload" 
              accept=".pdf"
              className="hidden" 
              onChange={handleFileChange} 
            />
          </label>
          <Button 
            onClick={handleDownload} 
            className="flex items-center gap-2 hover:scale-105 transition-all duration-200"
            disabled={!resumeUrl}
          >
            <Download size={18} />
            Download PDF
          </Button>
        </div>
      </div>

      {resumeUrl && (
        <div className="border rounded-lg p-4 bg-muted/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FileText size={18} className="text-primary" />
            {resumePdf?.name || 'Resume.pdf'}
          </h3>
          <div className="flex justify-center mt-4">
            <iframe 
              src={`${resumeUrl}#toolbar=0`} 
              className="w-full h-[500px] rounded-md border border-border" 
              title="Resume Preview"
            />
          </div>
        </div>
      )}

      {!resumeUrl && (
        <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-dashed border-2 bg-muted/10">
          <CardContent className="flex flex-col items-center justify-center py-10">
            <FileText size={48} className="text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center mb-4">
              No resume uploaded yet. Upload your PDF resume to display and make it available for download.
            </p>
            <label htmlFor="resume-upload-card" className="cursor-pointer">
              <Button variant="outline" className="flex items-center gap-2">
                <Upload size={18} />
                Select PDF File
              </Button>
              <input 
                type="file" 
                id="resume-upload-card" 
                accept=".pdf"
                className="hidden" 
                onChange={handleFileChange} 
              />
            </label>
          </CardContent>
        </Card>
      )}

      {/* Only show the resume sections if no PDF is uploaded */}
      {!resumeUrl && (
        <>
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
        </>
      )}

      <div className="flex justify-center mt-8">
        <Button 
          onClick={handleDownload} 
          size="lg" 
          className={`flex items-center gap-2 transition-all duration-200 ${resumeUrl ? 'animate-pulse hover:animate-none hover:scale-105' : ''}`}
          disabled={!resumeUrl}
        >
          <Download className="mr-2" />
          {resumeUrl ? 'Download Full Resume' : 'Upload a Resume First'}
        </Button>
      </div>
    </div>
  );
};

export default Resume;
