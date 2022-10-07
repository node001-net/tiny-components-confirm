# Tiny Components - confirm

Created with [Riot.js](https://riot.js.org) and using [Plain-UI](https://plain-ui.com) and [Observable](https://github.com/riot/observable)

A small modal to confirm or cancel an Action.

## Install

```
npm install @tiny-components\confirm --save
```

## You can use it like this

Add tiny-confirm globally in an App. Open and Closing will be done by store.js

```
import TinyConfirm from './confirm.riot'
riot.register('tiny-confirm', TinyConfirm)
riot.mount('tiny-confirm')
```

```
<tiny-confirm></tiny-confirm>
```


Use a function to open tiny-confirm and callbacks. "Cancel" is optional.

```
handleOpen() {

    // open
    store.trigger('open', {
        title: 'Question',
        content: 'Are you sure?'
    })

    // handle confirm
    store.confirm(() => {

    })

    // handle cancel
    store.cancel(() => {

    })
},
```




