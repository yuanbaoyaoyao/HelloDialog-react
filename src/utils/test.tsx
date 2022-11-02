import { useLocation } from 'react-router-dom'
const test = () => {
    const location = useLocation()
    console.log("location:", location)
    return (
        <div>
            1
        </div>
    )
}
export default test