import { FloatingDock } from "@/Components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const links = [
  {
    title: "Email",
    icon: <IconBrandGmail className="h-full w-full text-[var(--text-secondary)]" />,
    href: "mailto:fendipermadi016@gmail.com",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-[var(--text-secondary)]" />,
    href: "https://github.com/Nexarion18",
  },
  {
    title: "Discord",
    icon: <IconBrandDiscord className="h-full w-full text-[var(--text-secondary)]" />,
    href: "https://discord.com/users/1074682678839869526",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-[var(--text-secondary)]" />,
    href: "https://www.linkedin.com/in/fendi-permadi-4ab6b8285",
  },
];

export function Contact() {
  return (
    <div className="flex h-12 w-fit items-center justify-center">
      <FloatingDock mobileClassName="" items={links} />
    </div>
  );
}

export default Contact;
