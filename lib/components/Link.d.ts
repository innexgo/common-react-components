/// <reference types="react" />
import { Icon } from 'react-bootstrap-icons';
export declare type LinkProps = {
    title: string;
    icon: Icon;
    href: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    hidden?: boolean;
};
declare function Link(props: LinkProps): JSX.Element;
export default Link;
