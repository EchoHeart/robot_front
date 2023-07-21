import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        map_name: [
            '02-01', '02-03', '04-02', 'B04-01', '06-02', '06-03', '06-05', '06-06',
            '06-07', 'B06-04', '07-01', '07-02', '07-03', '07-04', '07-05', '07-06',
            '07-07', '07-08', '07-09', '07-10', '07-11', 'B1'
        ],
        map_data: [],
        robot_data: [],
        elevator_data: [
            {id: '2-3', floor: 0, mission: '', waitRobot: false, robot: '', timer: null},
            {id: '4-2', floor: 0, mission: '', waitRobot: false, robot: '', timer: null},
            {id: '4-4', floor: 0, mission: '', waitRobot: false, robot: '', timer: null},
            {id: '4-7', floor: 0, mission: '', waitRobot: false, robot: '', timer: null},
            {id: '6-7', floor: 0, mission: '', waitRobot: false, robot: '', timer: null},
            {id: '7-7', floor: 0, mission: '', waitRobot: false, robot: '', timer: null},
            {id: '7-14', floor: 0, mission: '', waitRobot: false, robot: '', timer: null}
        ]
    },
    mutations: {
        initialMaps(state, item){
            state.map_data.push(item)
        },
        initialRobots(state, robots){
            state.robot_data = robots
        },
        updateRobots(state, robot){
            let res = state.robot_data.find((r) => r.id === robot.id)
            res = robot
        },
        updateElevators(state, elevator){
            let res = state.elevator_data.find(e => e.id === elevator.id)
            res = elevator
        },
        up(state, id){
            const elevator = state.elevator_data.find(e => e.id === id)
            elevator.floor++
        },
        down(state, id){
            const elevator = state.elevator_data.find(e => e.id === id)
            elevator.floor--
        }
    },
    getters: {

    },
    actions: {

    },
    modules: {

    }
})

export default store
