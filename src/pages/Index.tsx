import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Book, Award, Briefcase, Search, GraduationCap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const profileSections = [
    {
      title: "Upload Documents",
      description: "Add your resume and CV",
      icon: Upload,
      path: "/documents"
    },
    {
      title: "Research",
      description: "Add your research work",
      icon: Book,
      path: "/research"
    },
    {
      title: "Certifications",
      description: "Add your certifications",
      icon: Award,
      path: "/certifications"
    },
    {
      title: "Experience",
      description: "Add work experience",
      icon: Briefcase,
      path: "/experience"
    },
    {
      title: "Prep",
      description: "Prepare for interviews",
      icon: GraduationCap,
      path: "/prep"
    },
    {
      title: "Browse Jobs",
      description: "Find your next opportunity",
      icon: Search,
      path: "/jobs"
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to WorkIO</h1>
        
        <div className="grid md:grid-cols-2 gap-4">
          {profileSections.map((section) => (
            <Card key={section.title} className="p-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-sage/10 rounded-lg">
                  <section.icon className="h-5 w-5 text-sage" />
                </div>
                <div>
                  <h3 className="font-medium">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => navigate(section.path)}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
