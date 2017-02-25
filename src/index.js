import { createElement } from 'snabbdom-pragma'
import { vdom } from './vdom'

const patch = vdom(document.querySelector('svg-app'))

const Smiley = () =>
  <svg attrs-xmlns="http://www.w3.org/2000/svg" attrs-viewBox="0 0 64 64" attrs-enable-background="new 0 0 64 64">
    <circle attrs-cx="32" attrs-cy="32" attrs-r="30" attrs-fill="#ffdd67"/>
    <Eyes/>
    <Mouth/>
  </svg>

const Eyes = () =>
  <g attrs-fill="#664e27">
    <LeftEye/>
    <RightEye/>
  </g>

let leftScrewed = false

const LeftEye = () => leftScrewed ?
  <path
    attrs-d="m12.3 19.4c-.6.3-.3 1 .2 1.1 2.7.4 5.5.9 8.3 2.4-4 .7-7.2 2.7-9 4.8-.4.5.1 1.1.5 1 4.8-1.7 9.7-2.7 15.8-2 .5 0 .9-.2.8-.7-1.6-7.3-10.9-10-16.6-6.6"
    style-cursor="pointer"
    on-click={ () => { leftScrewed = false ; patch(Smiley()) } }
  /> :
  <circle
    attrs-cx="20.5" attrs-cy="23" attrs-r="5"
    style-cursor="pointer"
    on-click={ () => { leftScrewed = true ; patch(Smiley()) } }
  />

let rightScrewed = true

const RightEye = () => rightScrewed ?
  <path
    attrs-d="m51.7 19.4c.6.3.3 1-.2 1.1-2.7.4-5.5.9-8.3 2.4 4 .7 7.2 2.7 9 4.8.4.5-.1 1.1-.5 1-4.8-1.7-9.7-2.7-15.8-2-.5 0-.9-.2-.8-.7 1.6-7.3 10.9-10 16.6-6.6"
    style-cursor="pointer"
    on-click={ () => { rightScrewed = false ; patch(Smiley()) } }
  /> :
  <circle
    attrs-cx="43.5" attrs-cy="23" attrs-r="5"
    style-cursor="pointer"
    on-click={ () => { rightScrewed = true ; patch(Smiley()) } }
  />

const Mouth = () =>
  <g>
    <path attrs-d="m49.7 34.4c-.4-.5-1.1-.4-1.9-.4-15.8 0-15.8 0-31.6 0-.8 0-1.5-.1-1.9.4-3.9 5 .7 19.6 17.7 19.6 17 0 21.6-14.6 17.7-19.6"  attrs-fill="#664e27"/>
    <path attrs-d="m33.8 41.7c-.6 0-1.5.5-1.1 2 .2.7 1.2 1.6 1.2 2.8 0 2.4-3.8 2.4-3.8 0 0-1.2 1-2 1.2-2.8.3-1.4-.6-2-1.1-2-1.6 0-4.1 1.7-4.1 4.6 0 3.2 2.7 5.8 6 5.8s6-2.6 6-5.8c-.1-2.8-2.7-4.5-4.3-4.6" attrs-fill="#4c3526"/>
    <path attrs-d="m24.3 50.7c2.2 1 4.8 1.5 7.7 1.5s5.5-.6 7.7-1.5c-2.1-1.1-4.7-1.7-7.7-1.7s-5.6.6-7.7 1.7" attrs-fill="#ff717f"/>
    <path attrs-d="m47 36c-15 0-15 0-29.9 0-2.1 0-2.1 4-.1 4 10.4 0 19.6 0 30 0 2 0 2-4 0-4" attrs-fill="#fff"/> */
  </g>

patch(Smiley())
