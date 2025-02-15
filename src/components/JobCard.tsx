import { Job } from "@/types/job";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CalendarIcon, MapPinIcon, BuildingIcon } from "lucide-react";

interface JobCardProps {
  job: Job;
  onApply: (jobId: string) => void;
  onSave: (jobId: string) => void;
}

export const JobCard = ({ job, onApply, onSave }: JobCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{job.title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BuildingIcon className="w-4 h-4" />
              <span>{job.company}</span>
            </div>
          </div>
          <Badge variant={job.type === 'full-time' ? 'default' : 'secondary'}>
            {job.type}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-4 h-4" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            {job.postedDate}
          </div>
        </div>
        <p className="text-sm mb-4">{job.description.slice(0, 200)}...</p>
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <Badge key={index} variant="outline">{req}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => onApply(job.id)}>Apply Now</Button>
        <Button variant="outline" onClick={() => onSave(job.id)}>Save</Button>
      </CardFooter>
    </Card>
  );
};
