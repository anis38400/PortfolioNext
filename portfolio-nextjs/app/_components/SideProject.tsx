import { BriefcaseBusiness, Code, FlagTriangleRight, LucideIcon, Plane } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: BriefcaseBusiness,
        title: "Portfolio NextJS",
        description: "Development of a Porfolio in NextJS and Tailwind",
        url: "/"
    },
    {
        Logo: Code,
        title: "Portfolio Laravel",
        description: "Development of a Porfolio in Laravel and Blade",
        url: "/"
    },
    {
        Logo: FlagTriangleRight,
        title: "Portfolio ReactJS",
        description: "Development of a Porfolio in ReactJS",
        url: "/"
    },
    {
        Logo: Plane,
        title: "Project Laravel + ReactJS",
        description: "Development of a Project in Laravel and ReactJS",
        url: "/"
    }
];
type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};
export const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex item-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );

};
