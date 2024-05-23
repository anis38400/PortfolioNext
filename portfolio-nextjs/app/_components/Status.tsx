/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Card } from "@/components/ui/card"
import { Home } from "lucide-react"
import { SIDE_PROJECTS, SideProject } from "./SideProject"
import { ContactCard } from "./ContactCard";
import { WORKS, Work } from "./Work";

export const Status = () => {
    return ( 
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Side, fun projects</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject
                            key={index}
                            {...project}
                        />
                ))}
                </div>
            </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col gap-4">
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Work</p>
                <div className="flex flex-col gap-4">
                    {WORKS.map((work, index) => (
                        <Work
                            key={index}
                            {...work}
                        />
                ))}
                </div>
            </Card>
            <Card className="p-4 flex-1 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Contact me</p>
                <ContactCard 
                    name="@anis38400" 
                    image="Anis.png" 
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/100px-X_logo_2023.svg.png" 
                    description="my X account"
                    url="https://twitter.com/AnisBelahadji"
                />
                <ContactCard 
                    name="Anis Belahadji" 
                    image="Anis.png" 
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" 
                    description="my Linkedin account"
                    url="https://www.linkedin.com/in/anis-belahadji-55b60495/"
                />
            </Card>
        </div>
    </Section>
    );
};

