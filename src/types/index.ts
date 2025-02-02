import { ComponentType } from "react";

interface GuardProps {
    children: React.ReactNode;
}

export interface IRoute {
    path: string;
    element: ComponentType;
    guard?: ComponentType<GuardProps>;
    layout?: ComponentType<GuardProps>;
}
