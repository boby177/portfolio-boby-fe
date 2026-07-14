import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@boby177",
    icon: Icons.gitHub,
    link: "https://github.com/boby177",
  },
  {
    name: "LinkedIn",
    username: "Boby Maulana",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/bobyms177",
  },
  {
    name: "Wantedly",
    username: "@boby177",
    icon: Icons.wantedly,
    link: "https://www.wantedly.com/id/boby177",
  },
  {
    name: "Gmail",
    username: "boby.ms378",
    icon: Icons.gmail,
    link: "mailto:boby.ms378@gmail.com",
  },
];
