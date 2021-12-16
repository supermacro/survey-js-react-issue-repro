import React from 'react'
import ReactDOM from 'react-dom'

import SurveyEditor from './SurveyEditor'

const REACT_ROOT_ID = 'app'
const MOUNT_NODE = document.getElementById(REACT_ROOT_ID)

if (!MOUNT_NODE) {
  throw new Error(`React root with id '${REACT_ROOT_ID}' does not exist` )
}

ReactDOM.render(
  <SurveyEditor />,
  MOUNT_NODE,
)

