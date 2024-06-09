export type Advertisement = {
  content: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  targetAudience: string | null;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
