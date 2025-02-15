import { useState } from "react";
import { Job } from "@/types/job";
import { JobCard } from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const { toast } = useToast();

  // Mock data - replace with actual API call
  const jobs: Job[] = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "London, UK",
      salary: "£75,000 - £90,000",
      type: "full-time",
      description: "We are looking for a senior software engineer to join our team...",
      requirements: ["React", "TypeScript", "Node.js"],
      postedDate: "2024-02-20",
    },
    // Add more mock jobs...
  ];

  const handleApply = (jobId: string) => {
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully!",
    });
  };

  const handleSave = (jobId: string) => {
    toast({
      title: "Job Saved",
      description: "The job has been saved to your favorites.",
    });
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || job.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <DashboardLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Job Listings</h1>
        
        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full Time</SelectItem>
              <SelectItem value="part-time">Part Time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onApply={handleApply}
              onSave={handleSave}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Jobs;
