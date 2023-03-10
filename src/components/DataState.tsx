import { NextPage } from 'next'
import React from 'react'

//Conditionally render the UI based on the state of your external request
const DataState: NextPage<DataStateProps> = (
  { isFetching, isValidData, isError, fetching, valid, invalid, error }
  ) => {

    if (isFetching) {
      return (<>{fetching}</>)
    }
    else if (isError) {
      return (<>{error}</>)
    }

    else if(!isValidData && invalid){
      return(<>{invalid}</>)
    }

    else if(isValidData) {
      return (<>{valid}</>)
    } else return (<></>)
}

export default DataState;

interface DataStateProps {
  isFetching: boolean,
  isValidData: boolean,
  isError: boolean,
  fetching: React.ReactNode,
  invalid?: React.ReactNode,
  valid: React.ReactNode,
  error: React.ReactNode
}