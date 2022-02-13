/// <reference types="react" />
import { Icon } from 'react-bootstrap-icons';
export declare type ActionProps = {
    title: string;
    icon: Icon;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    disabled?: boolean;
    hidden?: boolean;
};
declare function Action(props: ActionProps): JSX.Element;
export default Action;
