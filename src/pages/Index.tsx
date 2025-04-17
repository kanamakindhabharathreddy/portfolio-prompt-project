
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, User, BookOpen, Send, Github, Linkedin, Mail, Rocket, Brain, Coffee, LightbulbIcon, Wand2, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { toast } from "@/components/ui/sonner";

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [isRaining, setIsRaining] = useState(false);
  
  // Function to handle email contact
  const handleContactClick = () => {
    window.location.href = 'mailto:kanamakindhabharathreddy@gmail.com';
    toast("Opening email client!", {
      description: "Sending you to Gmail... 📧",
      icon: "📩",
    });
  };
  
  // Fun animation for icons raining down
  const startIconRain = () => {
    setIsRaining(true);
    setTimeout(() => setIsRaining(false), 3000);
    toast("It's raining icons! 🎉", {
      description: "Look at all these little guys falling!",
      icon: "🌧️",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Dark Mode Toggle */}
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleTheme}
          className="absolute top-4 right-4 transition-all duration-300 hover:rotate-45"
        >
          {theme === 'dark' ? (
            <SunIcon className="h-5 w-5 text-yellow-300" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </Button>

        {/* Rain of Icons Animation */}
        {isRaining && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute text-primary animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-50px`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {[<Code />, <Brain />, <Coffee />, <Rocket />, <Wand2 />][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        )}
        
        {/* Hero Section with Animation */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="relative">
            <h1 className="text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-200">
              Kanamakindha Bharath Reddy
            </h1>
            <Rocket 
              className="absolute -right-4 top-0 text-purple-500 animate-bounce" 
              size={24} 
              onClick={startIconRain}
            />
          </div>
          <p className="text-xl text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <Brain className="text-blue-500 animate-pulse" size={24} />
            Python Programmer | Aspiring Web Developer
            <Coffee className="text-orange-500 animate-bounce" size={24} />
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="default" className="hover:scale-105 transition-all duration-200 hover:bg-purple-600">
              Download CV
            </Button>
            <Button 
              variant="outline" 
              className="hover:scale-105 transition-all duration-200"
              onClick={handleContactClick}
            >
              Contact Me
            </Button>
          </div>
          
          {/* Social Links with Hover Effects */}
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://github.com/kanamakindhabharathreddy" target="_blank" rel="noopener noreferrer"
               className="transform transition-all duration-200 hover:scale-125">
              <Github className="text-muted-foreground hover:text-purple-500" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bharath-reddy-kanamakindha" target="_blank" rel="noopener noreferrer"
               className="transform transition-all duration-200 hover:scale-125">
              <Linkedin className="text-muted-foreground hover:text-blue-500" size={24} />
            </a>
            <a href="mailto:kanamakindhabharathreddy@gmail.com"
               className="transform transition-all duration-200 hover:scale-125">
              <Mail className="text-muted-foreground hover:text-red-500" size={24} />
            </a>
          </div>
        </section>

        {/* About Me with Fun Elements */}
        <section className="mb-16 transform hover:scale-[1.02] transition-all duration-300">
          <Card className="hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="mr-2" /> About Me
                <LightbulbIcon className="text-yellow-500 animate-pulse" size={20} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm a Python enthusiast eager to expand my programming skills 
                and explore new technologies. Currently learning web development 
                and looking to grow my technical expertise.
                <Wand2 className="inline-block ml-2 text-purple-500 animate-bounce" size={20} />
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills with Animation */}
        <section className="mb-16 transform hover:scale-[1.02] transition-all duration-300">
          <Card className="hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 animate-pulse text-blue-500" /> Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="hover:scale-105 transition-all duration-200">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    Programming Languages
                    <Brain className="text-purple-500" size={18} />
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li className="hover:text-purple-500 transition-colors">Python</li>
                    <li className="hover:text-blue-500 transition-colors">Learning Web Technologies</li>
                  </ul>
                </div>
                <div className="hover:scale-105 transition-all duration-200">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    Tools & Technologies
                    <Wand2 className="text-blue-500" size={18} />
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li className="hover:text-purple-500 transition-colors">Jupyter Notebooks</li>
                    <li className="hover:text-blue-500 transition-colors">Git</li>
                    <li className="hover:text-green-500 transition-colors">Basic Web Development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Learning Journey with Creative Elements */}
        <section className="mb-16 transform hover:scale-[1.02] transition-all duration-300">
          <Card className="hover:shadow-lg hover:shadow-green-200/50 dark:hover:shadow-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 text-green-500" /> Learning Journey
                <Rocket className="ml-2 text-purple-500 animate-bounce" size={20} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently focusing on expanding my programming skills, 
                learning web development, and exploring new technologies. 
                Open to opportunities and eager to grow.
                <Coffee className="inline-block ml-2 text-orange-500" size={20} />
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact with Animation */}
        <section className="transform hover:scale-[1.02] transition-all duration-300">
          <Card className="hover:shadow-lg hover:shadow-orange-200/50 dark:hover:shadow-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="mr-2 text-orange-500" /> Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Interested in collaborating or learning more?
              </p>
              <Button 
                className="hover:scale-105 transition-all duration-200 hover:bg-purple-600"
                onClick={handleContactClick}
              >
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
