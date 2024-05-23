import React from "react";
import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { XIcon } from "./icons/XIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";
import { cn } from "@/lib/utils"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    Anis.com
                </h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link
                    href="https://github.com/anis38400"
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link
                    href="https://twitter.com/AnisBelahadji"
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <XIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link
                    href="https://www.linkedin.com/in/anis-belahadji-55b60495/"
                    className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <LinkedinIcon size={12} className="text-foreground"/>
                    </Link>
                </ul>
                
            </Section>
        </header>
    )
}
