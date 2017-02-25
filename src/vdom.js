import snabbdom from 'snabbdom'

import moduleClass from 'snabbdom/modules/class'
import moduleProps from 'snabbdom/modules/props'
import moduleAttrs from 'snabbdom/modules/attributes'
import moduleStyle from 'snabbdom/modules/style'
import moduleEvent from 'snabbdom/modules/eventlisteners'

// vdom initializer which export the patch function
export const vdom = pnode => {

  const patch = snabbdom.init([moduleClass, moduleProps, moduleAttrs, moduleStyle, moduleEvent])
  pnode = pnode.appendChild(document.createElement('div'))

  return vnode => {

    vnode = typeof vnode === 'function' ? vnode() : vnode
    pnode = patch(pnode, vnode)

  }

}
