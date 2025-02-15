import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, Book, Award, Briefcase, Search, GraduationCap } from "lucide-react";

export function SidebarContent() {
  const navigation = [
    {
      name: "Documents",
      href: "/documents",
      icon: Upload,
    },
    {
      name: "Research",
      href: "/research",
      icon: Book,
    },
    {
      name: "Certifications",
      href: "/certifications",
      icon: Award,
    },
    {
      name: "Experience",
      href: "/experience",
      icon: Briefcase,
    },
    {
      name: "Prep",
      href: "/prep",
      icon: GraduationCap,
    },
    {
      name: "Jobs",
      href: "/jobs",
      icon: Search,
    },
  ];

  return (
    <div className="space-y-4 py-4">
      {navigation.map((item) => (
        <Link key={item.name} to={item.href}>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
