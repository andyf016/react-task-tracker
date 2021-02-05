import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='hello'/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}
// CSS in JS
// const headingStyle = {
//     color: 'red',
//    backgroundColor: 'black'
// }

export default Header
