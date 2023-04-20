



export default function Appreducer(state, action) {
    switch(action.type) {
        case "add_team": 
            return {
                ...state,
                teams: [...state.teams, action.payload]
            }

        case "edit_team":
            const updatedTeam = action.payload
            const updatedTeams = state.teams.map((team) => {
                if (team.id == updatedTeam.id) {
                    return updatedTeam
                }
                return team
            })
        case "remove_team":
            return {
                ...state,
                teams: state.teams.filter(
                    (team) => {
                        team.id !== action.payload
                    }
                )
            }
        default: return state
    }
}