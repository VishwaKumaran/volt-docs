import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    spacer: true,
  },
  {
    title: "Getting Started",
    href: "/getting-started",
    heading: "Introduction",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Quick Usage",
        href: "/quick-start",
      },
      {
        title: "Creating Your First Project",
        href: "/first-project",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "CLI Reference",
    href: "/cli-reference",
    heading: "Reference",
    items: [
      {
        title: "volt fastapi",
        href: "/volt-fastapi",
      },
      {
        title: "volt add",
        href: "/volt-add",
      },
    ],
  },
  {
    title: "Project Templates",
    href: "/project-templates",
    items: [
      {
        title: "FastAPI Stack",
        href: "/fastapi",
        items: [
          {
            title: "Project Structure",
            href: "/structure",
          },
          {
            title: "Async Patterns",
            href: "/async",
          },
          {
            title: "Database Options",
            href: "/database",
          },
          {
            title: "Auth Template",
            href: "/auth",
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Configuration",
    href: "/configuration",
    heading: "Guides",
    items: [
      {
        title: ".env Files",
        href: "/env-files",
      },
      {
        title: "Environment Variables",
        href: "/variables",
      },
      {
        title: "Customizing Projects",
        href: "/customizing",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Contributing",
    href: "/contributing",
    heading: "Community",
    items: [],
  },
]
