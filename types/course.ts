export type Course = {
  id: number;
  title: string;
  code?: string;
  credits?: number;
  isOpen?: boolean;
  instructor?: string;
  description?: string;
};