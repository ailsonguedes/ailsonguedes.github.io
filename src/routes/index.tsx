import { Route, Routes} from "react-router-dom"

import { CurriculumVittae } from "../components/CurriculumVittae/CurriculumVittae"

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/cv" element={<CurriculumVittae />} />
        </Routes>
    )
}