import React from 'react'

import './ErrorMessage.scss';

type IProps = {
  text: string
}

const ErrorMessage: React.FC<IProps> = ({text}) => {
  return (
    <p className="error-message">{text}</p>
  )
}

export default ErrorMessage
