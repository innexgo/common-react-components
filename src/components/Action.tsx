import { Button } from 'react-bootstrap';
import { Icon } from 'react-bootstrap-icons';

export type ActionProps = {
  title: string,
  icon: Icon,
  onClick: () => void,
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  disabled?: boolean,
  hidden?: boolean,
}


function Action(props: ActionProps) {
  return <Button
    variant="link"
    className="text-start"
    onClick={props.onClick}
    hidden={props.hidden}
    disabled={props.disabled}
  >
    <props.icon
      className={`me-2 border rounded text-${props.variant ?? 'dark'}`}
      style={{ width: "1.5rem", height: "1.5rem" }}
    />
    <b>{props.title}</b>
  </Button>
}

export default Action;
