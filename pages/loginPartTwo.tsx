import type { NextPage } from 'next';


interface Props{
    user: string,
    password: string
}
const loginPartTwo: NextPage<Props> = ({user, password}) => {
  return (
    <div>{user}</div>
  )
}

export default loginPartTwo