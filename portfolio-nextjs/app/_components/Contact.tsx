import { Badge } from "@/components/ui/badge";
import { Section } from "./Section"
import { ContactCard } from "./ContactCard";
import React from "react";

export const Contact = () => {
     return (
    <Section className="flex flex-col items-start gap-4">
                <Badge variant={"outline"}>Contact me</Badge>
                <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                   I will be happy to work with you !
                </h2>
                <div className="flex max-md:flex-col w-full gap-4">
                <ContactCard 
                    className="flex-1"
                    name="@anis38400" 
                    image="Anis.png" 
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/100px-X_logo_2023.svg.png" 
                    description="my X account"
                    url="https://twitter.com/AnisBelahadji"
                />
                <ContactCard 
                    className="flex-1"
                    name="Anis" 
                    image="Anis.png" 
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" 
                    description="my Linkedin"
                    url="https://www.linkedin.com/in/anis-belahadji-55b60495/"
                />
                <ContactCard 
                    className="flex-1"
                    name="anis.belahadji@gmail.com" 
                    image="Anis.png" 
                    mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png" 
                    description="Email me for any inquiries"
                    url="mailto:anis.belahadji@gmail.com"
                />
                </div>
        </Section>
        );
}