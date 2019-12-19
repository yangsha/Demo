import React, { useState } from 'react'
import { Button, FileInput } from '@blueprintjs/core'
import './Pdf2Es.css'
import useSaga from '@little-saga/use-saga'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'

export default function Pdf2Es() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const [state,setState] = useState([true,false,false,false])
 
    
  return (
    <div style={{flexDirection:'column'}}>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <Button style={{ borderRadius: 0 }} id="1" intent = {currentStep===1?'primary':'none'}>上传PDF</Button>
        <Button style={{ borderRadius: 0 }} id="2" intent = {currentStep===2?'primary':'none'} >转换PDF</Button>
        <Button style={{ borderRadius: 0 }} id="3" intent = {currentStep===3?'primary':'none'}>修改TXT</Button>
        <Button style={{ borderRadius: 0 }} id="4" intent = {currentStep===4?'primary':'none'}>存入ES系统</Button>
      </div>
      <div className="content"
           style={{
             border: 'solid 1px',
             marginTop: 20,
             marginBottom:10,
             flexDirection: 'column',
             height: 550
           }}
      >
        <div style={{height:'90%'}}>
          {
            currentStep === 1?<FirstStep/>:
              currentStep === 2?<SecondStep/>:
                currentStep === 3?<ThirdStep/>:
                  <FourthStep/>
          }
        </div>
        <div style={{height:'10%'}}>
          {
            (currentStep!==4)?<Button
              intent="primary"
              style={{ marginLeft:'40%'  }}
              onClick={()=>setCurrentStep(currentStep+1)}
            >
              下一步
            </Button>:
              <Button
                intent="primary"
                style={{ marginLeft:'40%' }}
              >
              完成
            </Button>
          } 
          {
            (currentStep!==1)&&<a
              style={{ marginLeft:20, color: '#48AFF0' }}
              onClick={() =>setCurrentStep(1)}
            >
              重新开始
            </a>
          }
        </div>
      </div>
    </div>
  )
}
