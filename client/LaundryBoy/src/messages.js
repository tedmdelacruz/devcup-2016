import constants from './constants'

export const status = {
    [constants.AWAITING_PICKUP_CONFIRM]: 'Awaiting pickup confirmation',
    [constants.PICKUP_CONFIRMED]: 'Pickup confirmed',
    [constants.RECEIVED]: 'Laundry received and weighted',
    [constants.READY_FOR_DELIVERY]: 'Ready for delivery',
    [constants.COMPLETED]: 'Delivered, completed',
}
