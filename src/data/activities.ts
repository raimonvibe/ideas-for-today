import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Bot,
  Box,
  Briefcase,
  Building2,
  Church,
  ClipboardCheck,
  CreditCard,
  FolderGit2,
  Globe,
  GraduationCap,
  HandHeart,
  Inbox,
  LayoutTemplate,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  MessagesSquare,
  Music,
  Network,
  PawPrint,
  PlayCircle,
  Search,
  Share2,
  Sparkles,
  UserCheck,
  Video,
  X,
} from "lucide-react";

export type ActivityCategory =
  | "youtube"
  | "christian"
  | "business"
  | "programming"
  | "social-media"
  | "communication"
  | "people"
  | "personal";

export type Activity = {
  id: string;
  label: string;
  icon: LucideIcon;
  categories: ActivityCategory[];
};

export const CATEGORY_FILTERS: { id: ActivityCategory | "all"; label: string }[] =
  [
    { id: "all", label: "All" },
    { id: "youtube", label: "YouTube" },
    { id: "christian", label: "Christian" },
    { id: "business", label: "Business" },
    { id: "programming", label: "Programming" },
    { id: "social-media", label: "Social Media" },
    { id: "communication", label: "Communication" },
    { id: "people", label: "People" },
    { id: "personal", label: "Personal" },
  ];

export const ACTIVITIES: Activity[] = [
  {
    id: "1",
    label: "Create or find videos",
    icon: Video,
    categories: ["youtube"],
  },
  {
    id: "2",
    label: "Create a small website",
    icon: LayoutTemplate,
    categories: ["programming"],
  },
  {
    id: "3",
    label: "Vaping inspired 3D prints",
    icon: Box,
    categories: ["personal"],
  },
  {
    id: "4",
    label: "Create a YouTube video",
    icon: PlayCircle,
    categories: ["youtube"],
  },
  {
    id: "5",
    label: "Write YouTube video text with AI",
    icon: Sparkles,
    categories: ["youtube"],
  },
  {
    id: "6",
    label: "Monitor YouTube studio",
    icon: BarChart3,
    categories: ["youtube"],
  },
  {
    id: "7",
    label: "Read the Bible",
    icon: BookOpen,
    categories: ["christian"],
  },
  {
    id: "8",
    label: "Make a Christian related website",
    icon: Church,
    categories: ["christian", "programming"],
  },
  {
    id: "9",
    label: "Search for Christian related ideas to create websites",
    icon: Search,
    categories: ["christian", "programming"],
  },
  {
    id: "10",
    label: "Check prayer chat results",
    icon: HandHeart,
    categories: ["christian"],
  },
  {
    id: "11",
    label: "Check change my results",
    icon: ClipboardCheck,
    categories: ["business"],
  },
  { id: "12", label: "Check Gmail", icon: Mail, categories: ["communication"] },
  { id: "13", label: "Check webmail", icon: Inbox, categories: ["communication"] },
  { id: "14", label: "Talk to AI", icon: Bot, categories: ["communication"] },
  {
    id: "15",
    label: "Prepare some vegan food",
    icon: Leaf,
    categories: ["personal"],
  },
  {
    id: "16",
    label: "Post on social media",
    icon: Share2,
    categories: ["social-media"],
  },
  {
    id: "17",
    label: "Respond on social media",
    icon: MessagesSquare,
    categories: ["social-media"],
  },
  {
    id: "18",
    label: "Check website .nl .eu and .com",
    icon: Globe,
    categories: ["business", "programming"],
  },
  {
    id: "19",
    label: "Follow course on programming",
    icon: GraduationCap,
    categories: ["programming"],
  },
  {
    id: "20",
    label: "Post on LinkedIn",
    icon: Network,
    categories: ["social-media", "business"],
  },
  {
    id: "21",
    label: "Check if payments are done",
    icon: CreditCard,
    categories: ["business"],
  },
  {
    id: "22",
    label: "Update websites in code spaces GitHub",
    icon: FolderGit2,
    categories: ["programming"],
  },
  {
    id: "23",
    label: "Pray everyone's progress",
    icon: HandHeart,
    categories: ["christian"],
  },
  {
    id: "24",
    label: "Check freelance services",
    icon: Briefcase,
    categories: ["business"],
  },
  {
    id: "25",
    label: "Check on Dashboard Music Guesses",
    icon: Music,
    categories: ["business"],
  },
  {
    id: "26",
    label: "Check on Dashboard Animal Guesses",
    icon: PawPrint,
    categories: ["business"],
  },
  {
    id: "27",
    label: "Check on results company",
    icon: Building2,
    categories: ["business"],
  },
  {
    id: "28",
    label: "Check up on Mr. Kennedy",
    icon: UserCheck,
    categories: ["people"],
  },
  {
    id: "29",
    label: "Check up on Mr. Chika Favor",
    icon: UserCheck,
    categories: ["people"],
  },
  {
    id: "30",
    label: "Check up on Mr. Emmanuel",
    icon: UserCheck,
    categories: ["people"],
  },
  {
    id: "31",
    label: "Check up on Mr. Okey",
    icon: UserCheck,
    categories: ["people"],
  },
  {
    id: "32",
    label: "Check social sites for inspiration",
    icon: Lightbulb,
    categories: ["social-media"],
  },
  {
    id: "33",
    label: "Check on Nigerian projects",
    icon: MapPin,
    categories: ["business"],
  },
  {
    id: "34",
    label: "Check out activity on X.com",
    icon: X,
    categories: ["social-media"],
  },
];

export function filterActivities(
  activities: Activity[],
  query: string,
  category: ActivityCategory | "all",
): Activity[] {
  const normalized = query.trim().toLowerCase();

  return activities.filter((activity) => {
    const matchesCategory =
      category === "all" || activity.categories.includes(category);
    const matchesQuery =
      !normalized || activity.label.toLowerCase().includes(normalized);
    return matchesCategory && matchesQuery;
  });
}
