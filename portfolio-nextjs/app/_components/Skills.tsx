import { Badge } from "@/components/ui/badge";
import { Section } from "./Section"
import { ReactLogo } from "./icons/ReactLogo"
import { LaravelLogo } from "./icons/LaravelLogo"
import { NextjsLogo } from "./icons/NextjsLogo"
import { TailwindLogo } from "./icons/TailwindLogo"
import { Code } from "./Code"

export const Skills = () => {
     return (
    <Section className="flex flex-col items-start gap-4">
                <Badge variant={"outline"}>Skills</Badge>
                <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                   I love working on...
                </h2>
                <div className="flex max-md:flex-col gap-4">
                        <div className="flex flex-col gap-2 flex-1">
                                <ReactLogo size={42} className="animate-spin" style={{animationDuration:"10s"}}/>
                                <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                                <p className="text-sm text-muted-foreground">My main front-end frameworks are <Code>React</Code> and <Code>ReactJS</Code>.
                                 I also use <Code>NextJS</Code></p>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                                <LaravelLogo size={42}/>
                                <h3 className="text-2xl font-semibold tracking-tight">Laravel</h3>
                                <p className="text-sm text-muted-foreground">My main back-end framework is <Code>Laravel</Code>.</p>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                                <TailwindLogo size={42} />
                                <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
                                <p className="text-sm text-muted-foreground">My main CSS framework is <Code>Tailwind</Code>.</p>
                        </div>
                </div>
        </Section>
        );
}