import styled, {css} from 'styled-components'

const styling = css `
font-size: 40px;
color: #6b8cb5;
`

export const Header = styled.div `
width: 900px;
margin: auto;
background-color: #fff;
padding: 50px;
border-radius: 12px;
`

export const Text = styled.div`
margin-bottom: 50px;
${styling}
`
export const Paragraph = styled.div`
${styling}
font-size: 20px;
`