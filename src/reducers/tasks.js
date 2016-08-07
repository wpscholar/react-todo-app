import Immutable from 'immutable'
import _ from 'lodash'

export function tasks(state = [], action) {

    switch (action.type) {
        case 'SET_TASK_NAME':
            return function () {
                const task = _.assign(state[action.index], {name: action.name});
                return Immutable.fromJS(state).set(action.index, task).toJS();
            }();
        default:
            return state;
    }

}