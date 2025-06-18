export const JOB_STATUS_CONFIG = [
  { value: 'applied', label: 'Applied', color: 'bg-blue-100 text-blue-800' },
  { value: 'phone-screen', label: 'Phone Screen', color: 'bg-purple-100 text-purple-800' },
  { value: 'interview', label: 'Interview', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'technical-interview', label: 'Technical Interview', color: 'bg-orange-100 text-orange-800' },
  { value: 'final-interview', label: 'Final Interview', color: 'bg-amber-100 text-amber-800' },
  { value: 'offer', label: 'Offer', color: 'bg-green-100 text-green-800' },
  { value: 'rejected', label: 'Rejected', color: 'bg-red-100 text-red-800' },
  { value: 'withdrawn', label: 'Withdrawn', color: 'bg-gray-100 text-gray-800' },
];

export const getStatusColor = (status) => {
  return JOB_STATUS_CONFIG.find(s => s.value === status)?.color || 'bg-gray-100 text-gray-800';
};

export const getStatusLabel = (status) => {
  return JOB_STATUS_CONFIG.find(s => s.value === status)?.label || status;
};