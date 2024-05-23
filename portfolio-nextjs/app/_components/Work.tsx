/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const WORKS: WorkProps[] = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_Hardis_Group_.png/800px-Logo_Hardis_Group_.png?20160504095323",
        title: "Hardis Group",
        role: "Development Engineer",
        date: "2021 - 2024",
        url: "https://www.hardis-group.com/en"
    },
    {
        image: "https://atos.net/content/assets/global-images/atos-logo-blue-2023.svg",
        title: "ATOS",
        role: "Software Engineer",
        date: "2019 - 2020",
        url: "https://atos.net/en-gb/united-kingdom"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/303px-CGI_logo.svg.png",
        title: "CGI",
        role: "Integrator",
        date: "2018",
        url: "https://www.cgi.com/en"
    }
];
type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};
export const Work = (props: WorkProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex item-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img
                src={props.image}
                alt={props.title}
                className="w-10 h-10 object-contain rounded-md" />
            <div className="mr-auto">
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    );

};
