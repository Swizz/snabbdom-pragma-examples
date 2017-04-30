import Snabbdom from 'snabbdom-pragma'
import { vdom } from './vdom'

const patch = vdom(document.querySelector('slot-app'))

const Main = () =>
  <List name="Simpson family characters :">
    <Element firstname="Homer" lastname="Simpson"/>
    <Element firstname="Marge" lastname="Simpson"/>
    <Element firstname="Bart" lastname="Simpson"/>
    <Element firstname="Lisa" lastname="Simpson"/>
    <Element firstname="Maggie" lastname="Simpson"/>
  </List>

const List = ({ name }, children) =>
  <div>
    <h3>{ name }</h3>
    <ul>
      { children }
    </ul>
  </div>

const Element = ({ firstname, lastname }) =>
  <li>
    { firstname } &nbsp; <b>{ lastname }</b>
  </li>

patch(Main())
