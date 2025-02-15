export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  postedDate: string;
  applicationStatus?: 'applied' | 'saved' | 'interviewing' | 'offered' | 'rejected';
}
