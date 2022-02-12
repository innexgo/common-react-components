import { Plus as Add } from 'react-bootstrap-icons'

interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton(props: AddButtonProps) {
  return <button
    className="h-100 w-100 m-0 p-1"
    style={{ borderStyle: 'dashed', borderWidth: "medium" }}
    onClick={props.onClick}
  >
    <Add className="mx-auto my-auto text-muted" style={{ height: "2rem", width: "2rem" }} />
  </button>
}
