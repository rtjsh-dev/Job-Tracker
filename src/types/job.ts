export interface Job {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  status: JobStatus;
  applicationDate: string;
  salaryRange: string;
  description: string;
  contactPerson: string;
  applicationUrl: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export type JobStatus = 
  | 'applied'
  | 'phone-screen'
  | 'interview'
  | 'technical-interview'
  | 'final-interview'
  | 'offer'
  | 'rejected'
  | 'withdrawn';

export interface JobFormData {
  companyName: string;
  jobTitle: string;
  location: string;
  status: JobStatus;
  applicationDate: string;
  salaryRange: string;
  description: string;
  contactPerson: string;
  applicationUrl: string;
  notes: string;
}