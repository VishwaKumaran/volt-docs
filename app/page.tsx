import { LuGithub, LuZap } from "react-icons/lu"
import { Link } from "lib/transition"
import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <div className="flex items-center gap-2 mb-4">
        <LuZap className="h-12 w-12 text-yellow-400 fill-yellow-400" />
        <h1 className="text-4xl font-bold sm:text-7xl">Volt</h1>
      </div>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        The blazing fast, modern Python stack manager. Generate production-ready
        projects in seconds.
      </p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href="https://github.com/VishwaKumaran/volt"
          target="_blank"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          <LuGithub className="mr-2 h-4 w-4" />
          GitHub
        </Link>
      </div>
    </section>
  )
}
