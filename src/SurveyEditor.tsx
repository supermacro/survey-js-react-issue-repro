import React, { Component } from 'react'
import { SurveyCreatorComponent, SurveyCreator, ISurveyCreatorOptions } from 'survey-creator-react'
import 'survey-core/defaultV2.min.css'
import 'survey-creator-react/survey-creator-react.min.css'


export default function SurveyEditor() {
  return (
    <div
      style={{
        marginTop: '80px',
        height: '100%',
      }}
    >
      <SurveyCreatorWidget />
    </div>
  )
}



export type JSONValues =
  | number
  | string
  | null
  | boolean
  | JSONObject
  | JSONValues[]

export type JSONObject = { [k: string]: JSONValues } 


type SaveSurveyFunc = (saveNo: number, callback: (saveNum: number, success: boolean) => void) => void

class ExtendedCreator extends SurveyCreator {
  public JSON: JSONValues = {}
  public isAutoSave: boolean = true
  public showState: boolean = true
  public saveSurveyFunc: SaveSurveyFunc = (saveNum, callback) => {
    console.log('> saveNum', saveNum)
    console.log('JSON: ', this.JSON)
    const success = true

    callback(saveNum, success)
  }


  public haveCommercialLicense: boolean = true

  constructor(props: ISurveyCreatorOptions) {
    super(props)
  }
}


export class SurveyCreatorWidget extends Component {
  private creator: ExtendedCreator

  constructor() {
    super({});

    // Instantiate Survey Creator
    this.creator = new ExtendedCreator({ showLogicTab: true });
  }

  componentDidMount() {
    // Load a survey definition JSON from you web service
    // ...
    // Assign the survey definition to Survey Creator
    // this.creator.JSON = yourJSON;
  }

  render() {
    return (
      <SurveyCreatorComponent creator={this.creator} />
    )
  }
}



