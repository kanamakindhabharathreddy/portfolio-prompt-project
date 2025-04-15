
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, User, BookOpen, Send } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Python Programmer</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Passionate about learning and exploring the world of programming
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="default">Download CV</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </section>

        {/* About Me */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2" /> About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm a Python enthusiast eager to expand my programming skills 
                and explore new technologies. Currently learning web development 
                and looking to grow my technical expertise.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2" /> Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Python</li>
                    <li>Learning Web Technologies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Jupyter Notebooks</li>
                    <li>Git</li>
                    <li>Basic Web Development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Learning Journey */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" /> Learning Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently focusing on expanding my programming skills, 
                learning web development, and exploring new technologies. 
                Open to opportunities and eager to grow.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="mr-2" /> Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Interested in collaborating or learning more?
              </p>
              <Button>Get in Touch</Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
