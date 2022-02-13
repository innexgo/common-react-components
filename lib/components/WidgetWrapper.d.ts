import React from 'react';
import { CardProps } from 'react-bootstrap';
declare type NoChildrenCardProps = Omit<CardProps, 'children' | 'title'>;
declare type WidgetWrapperProps = NoChildrenCardProps & {
    title: string;
    children: [React.ReactElement, React.ReactElement];
};
declare function WidgetWrapper(props: WidgetWrapperProps): JSX.Element;
export default WidgetWrapper;
