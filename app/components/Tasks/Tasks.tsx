"use client"

import { useGlobalState } from '@/app/context/globalProvider'
import React from 'react'
import styled from 'styled-components'

export default function Tasks() {
    const {theme} = useGlobalState()
  return (
    <TaskStyled theme={theme}>Tasks</TaskStyled>
  )
}

const TaskStyled = styled.div`
    padding: 1.5rem;
    width: 100% ;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props)=> props.theme.borderColor2};
    border-radius:  1rem;
    overflow-y: auto ;
    height:  100%;

    &::-webkit-scrollbar{
        width: 0.5rem ;
    }
`;
