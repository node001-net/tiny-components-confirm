import observable from '@riotjs/observable'

/**
*  store for confirm
*
*  @author Björn Hase
*  @license http://opensource.org/licenses/MIT The MIT License
*  @link https://gitea.node001.net/tiny-components/confirm
 *
 */
export default observable({

    confirm(handleConfirm) {
        this.off('confirm')
        this.on('confirm', () => { handleConfirm() })
    },

    cancel(handleConfirm) {
        this.off('cancel')
        this.on('cancel', () => { handleConfirm() })
    }

})