import type { NextPage } from 'next';


interface Props{
    user: string,
    password: string
}
const loginPartOne: NextPage<Props> = ({user, password}) => {
  return (
    <div>{user}</div>
  )
}

export default loginPartOne