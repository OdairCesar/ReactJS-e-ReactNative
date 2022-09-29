interface typeProps {
  teste: any
  children: React.ReactNode
}

export default (props: typeProps): JSX.Element => {
  if (props.teste) {
    return <>{props.children}</>
  } else {
    return <>{false}</>
  }
}