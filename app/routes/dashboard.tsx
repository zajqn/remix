import { Outlet } from "@remix-run/react"

export default function Dashboard() {
  return(
    <>
      Dashboard
      <Outlet />
    </>
  )
}