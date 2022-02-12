import { Icon } from 'react-bootstrap-icons';

export type LinkProps = {
  title: string,
  icon: Icon,
  href: string,
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  hidden?: boolean,
}


function Link(props: LinkProps) {
  return <a
    className="text-start"
    href={props.href}
    hidden={props.hidden}
  >
    <props.icon
      className={`me-2 border rounded text-${props.variant ?? 'dark'}`}
      style={{ width: "1.5rem", height: "1.5rem" }}
    />
    <b>{props.title}</b>
  </a>
}

export default Link;
