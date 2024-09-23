import React from "react"
import { CompletionAnalytics } from "./completion/completion.data"

import './core-data.css';
import { MVPs } from "./mvp/mvp";

export const CoreData = () => {
  return <div className='core-data'>
    <CompletionAnalytics />
    {/* <MVPs /> */}
  </div>
}
