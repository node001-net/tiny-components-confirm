import * as riot from 'riot'

import TinyConfirm from './confirm.riot'
import ExampleConfirm from './example-confirm.riot'

riot.register('tiny-confirm', TinyConfirm)
riot.register('example-confirm', ExampleConfirm)

riot.mount('tiny-confirm')
riot.mount('example-confirm')