import React from 'react';
declare type DisplayModalProps = {
    title: string;
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
};
export default function DisplayModal(props: DisplayModalProps): JSX.Element;
export {};
