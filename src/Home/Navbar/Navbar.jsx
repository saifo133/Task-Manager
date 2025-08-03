import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import TaskIcon from '@mui/icons-material/Task';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <h1>Task Manager</h1>
      <ul>
        <li>
          <Link to='/' className='link'><HomeFilledIcon/> Home</Link>
        </li>
        <li>
          <Link to='/tasks' className='link'><TaskIcon/> Task</Link>
        </li>
        <li>
          <Link to='/notes' className='link'><DescriptionIcon/> Notes</Link>
        </li>
        <li>
        </li>
      </ul>
    </nav>
  );
}
