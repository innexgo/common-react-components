import React from 'react';
import { Popover, PopoverBody, PopoverHeader, OverlayTrigger, Card, CardProps } from 'react-bootstrap';
import { InfoCircle } from 'react-bootstrap-icons';

type NoChildrenCardProps = Omit<CardProps, 'children' | 'title'>

type WidgetWrapperProps = NoChildrenCardProps & {
  title: string
  children: [React.ReactElement, React.ReactElement]
}

function WidgetWrapper(props: WidgetWrapperProps) {
  return <Card {...(props as NoChildrenCardProps)}>
    <Card.Body>
      <div className="d-flex justify-content-between">
        <Card.Title >{props.title}</Card.Title>
        <OverlayTrigger
          trigger="click"
          placement="auto"
          overlay={
            <Popover id="information-tooltip">
              <PopoverHeader as="h3">Help</PopoverHeader>
              <PopoverBody>
                {props.children[0]}
              </PopoverBody>
            </Popover>
          }
        >
          <button type="button" className="btn btn-sm">
            <InfoCircle />
          </button>
        </OverlayTrigger>
      </div>
      {props.children[1]}
    </Card.Body>
  </Card>
}

export default WidgetWrapper;
