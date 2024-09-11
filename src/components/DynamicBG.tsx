"use client"

import { usePathname } from "next/navigation"

const DynamicBG = ({ children }: { children: React.ReactNode }) => {
  const router = usePathname()
  let bgBackground = ""

  switch (router) {
    case "/ashe":
      bgBackground = "bg-ashe"
      break
    case "/dva":
      bgBackground = "bg-dva"
      break
    case "/reaper":
      bgBackground = "bg-reaper"
      break
    case "/sigma":
      bgBackground = "bg-sigma"
      break
    case "/soldier_76":
      bgBackground = "bg-soldier"
      break
    case "/zenyatta":
      bgBackground = "bg-zenyatta"
      break
    default:
      bgBackground = "bg-transparent"
      break
  }

  return <div className={`${bgBackground} bg-cover`}>{children}</div>
}

export default DynamicBG
