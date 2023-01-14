export default function WaitingPage(props: React.PropsWithChildren<{}>) {
  return <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
    <div className="my-auto mx-auto text-center" children={props.children} />
  </div>
}
