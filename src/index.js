import Snabbdom from 'snabbdom-pragma'
import { vdom } from './vdom'

const patch = vdom(document.querySelector('example-app'))

const Main = () =>
  <div>Hello World</div>

patch(Main())
