import { types } from './types'

export const alertsActions = {
	accountDeleted(message, type = 'success') {
		return {
			type: types.ACCOUNT_DELETED,
			payload: { message, type }
		}
	},
	
	accountUpdated(message, type = 'success') {
		return {
			type: types.ACCOUNT_UPDATED,
			payload: { message, type }
		}
	},
	
	newPassword(message, type = 'success') {
		return {
			type: types.NEW_PASSWORD,
			payload: { message, type }
		}
	},

	clearAlerts() {
		return {
			type: types.CLEAR_ALERTS
		}
	},
}