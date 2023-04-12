import styled from "@emotion/styled"

export const Nav = styled("div")`
  & > * {
    margin-left: 1em;
    color: white;
  }
  background: black;
  padding: 1em;
  height: 2em;
  display: flex;
  align-items: center;
`

export const PageBody = styled("div")`

`

export const TabHead = styled("div")`
  display: flex;
  background: black;
`

export const TabContainer = styled("div")`
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
`

export const TabBody = styled(PageBody)`
  height: 100%;
`

export const Tab = styled("div")`
 
  padding: 1em;

  background: ${({ selected }) => (selected ? "#1C1819" : "black")};
  * {
    color: white;
  }
`