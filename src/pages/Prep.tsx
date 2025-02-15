import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { ChevronRight } from "lucide-react";

const PrepSection = ({ title, description }: { title: string; description: string }) => (
  <Card className="p-6 hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <Button variant="outline" className="flex items-center">
      Start Learning <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  </Card>
);

const Prep = () => {
  const [activeTab, setActiveTab] = useState('interview');

  const sections = [
    {
      title: "Technical Interview",
      description: "Practice coding problems and system design questions.",
    },
    {
      title: "Behavioral Interview",
      description: "Prepare for common behavioral questions using the STAR method.",
    },
    {
      title: "Resume Workshop",
      description: "Learn how to craft an impressive resume that stands out.",
    },
    {
      title: "Mock Interviews",
      description: "Practice with AI-powered mock interviews.",
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Interview Preparation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Select a category below to start your interview preparation journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <PrepSection
              key={section.title}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Prep;
