import React from "react"

export class MyObj {
  constructor(foobar: Record<string, any>) {
    console.info("MyObj init (constructor)")
  }
}

export const AppSubmissionContext = React.createContext({
  foobar: {} as any,
  myObj: {} as MyObj
})
