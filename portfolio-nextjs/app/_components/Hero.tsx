/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";
import { Code } from "./Code"




export const Hero = () => {
    return ( <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-primary">Anis Belahadji</h2>
            <h3 className="text-3xl font-caption">Software and Web developer</h3>
            <p className="text-base">
                I love creating content on 
                <Link href="https://www.linkedin.com/in/anis-belahadji-55b60495/">
                <Code className="inline-flex items-center gap-1">
                <LinkedinIcon size={16} className="inline"/>Linkedin
                </Code>
                </Link>
                , currently working at
                <Code className="inline-flex items-center gap-1">Hardis</Code>. Living in  <Code className="inline-flex items-center gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/110px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" style={{width: 16, height: "auto"}} alt="United Kingdom flag" />London</Code> 
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img src="Anis.png" className="w-full h-auto max-w-xs max-md:w-56" alt="Anis picture"/>
        </div>
    </Section>
    );
};
